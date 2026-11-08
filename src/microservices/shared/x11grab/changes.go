package x11grab

import (
	"fmt"
	"net"
	"time"

	"github.com/jezek/xgb"
	"github.com/jezek/xgb/damage"
	"github.com/jezek/xgb/xfixes"
	"github.com/jezek/xgb/xproto"
)

// LA CAPTURE SUIT LES IMAGES (2026-11-07, chantier 46).
//
// La boucle de l'écran X prélevait l'écran sur un minuteur réglé sur la cadence
// du flux, sans savoir quand l'invité posait une image. Kyty, sous Box64, ne les
// pose pas pile à la cadence : pendant la vidéo d'introduction de KH3 en 540p à
// 30, le téléphone ne voyait que 28 images neuves par seconde, et des doublons à
// chaque relevé — une image prise deux fois, la suivante jamais. Ce sont les
// « sauts d'images » que le porteur a filmés. L'extension DAMAGE du serveur X
// signale chaque changement de l'écran : on prélève juste après.
//
// Une connexion à part : celle de la capture attend des réponses à GetImage, et
// un flot d'événements n'a rien à y faire.
type changes struct {
	conn    *xgb.Conn
	tracker damage.Damage
	signal  chan struct{}
}

// WatchChanges suit les changements de tout l'écran. À appeler une fois ; une
// erreur veut dire que ce serveur X n'a pas DAMAGE, et la boucle garde alors son
// minuteur.
func (d *Display) WatchChanges() error {
	if d.changes != nil {
		return nil
	}
	netConn, err := net.Dial("unix", d.socket)
	if err != nil {
		return fmt.Errorf("socket X %s : %w", d.socket, err)
	}
	conn, err := xgb.NewConnNet(netConn)
	if err != nil {
		_ = netConn.Close()

		return fmt.Errorf("poignée de main X : %w", err)
	}
	fail := func(step string, err error) error {
		conn.Close()

		return fmt.Errorf("%s : %w", step, err)
	}
	// DAMAGE s'appuie sur les régions de XFIXES : le serveur veut sa version d'abord.
	if err := xfixes.Init(conn); err != nil {
		return fail("XFIXES", err)
	}
	if _, err := xfixes.QueryVersion(conn, 5, 0).Reply(); err != nil {
		return fail("version de XFIXES", err)
	}
	if err := damage.Init(conn); err != nil {
		return fail("DAMAGE", err)
	}
	if _, err := damage.QueryVersion(conn, 1, 1).Reply(); err != nil {
		return fail("version de DAMAGE", err)
	}
	tracker, err := damage.NewDamageId(conn)
	if err != nil {
		return fail("identifiant DAMAGE", err)
	}
	root := xproto.Setup(conn).DefaultScreen(conn).Root
	// NonEmpty : un seul signal tant que le changement n'est pas acquitté (WaitChange).
	if err := damage.CreateChecked(conn, tracker, xproto.Drawable(root),
		damage.ReportLevelNonEmpty).Check(); err != nil {
		return fail("suivi DAMAGE de la racine", err)
	}
	watched := &changes{conn: conn, tracker: tracker, signal: make(chan struct{}, 1)}
	go watched.read()
	d.changes = watched

	return nil
}

func (c *changes) read() {
	for {
		event, err := c.conn.WaitForEvent()
		if event == nil && err == nil {
			return // connexion fermée
		}
		if _, ok := event.(damage.NotifyEvent); ok {
			select {
			case c.signal <- struct{}{}:
			default:
			}
		}
	}
}

// WaitChange attend un changement de l'écran, au plus `timeout`, et l'acquitte :
// le suivant redonnera un signal. Faux si rien n'a changé, ou si l'écran n'est
// pas suivi (WatchChanges n'a pas réussi).
func (d *Display) WaitChange(timeout time.Duration) bool {
	watched := d.changes
	if watched == nil {
		return false
	}
	timer := time.NewTimer(timeout)
	defer timer.Stop()
	select {
	case <-watched.signal:
	case <-timer.C:
		return false
	}
	damage.Subtract(watched.conn, watched.tracker, 0, 0)

	return true
}

func (c *changes) close() {
	c.conn.Close()
}

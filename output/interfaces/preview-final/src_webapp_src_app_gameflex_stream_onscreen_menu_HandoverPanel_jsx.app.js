"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_onscreen_menu_HandoverPanel_jsx"],{

/***/ "./src/webapp/src/app/gameflex/stream/onscreen/menu/HandoverPanel.jsx"
/*!****************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/onscreen/menu/HandoverPanel.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HandoverPanel: () => (/* binding */ HandoverPanel),
/* harmony export */   giveCandidates: () => (/* binding */ giveCandidates),
/* harmony export */   handoverCandidates: () => (/* binding */ handoverCandidates)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/SessionPool.js */ "./src/webapp/src/app/gameflex/libs/SessionPool.js");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
// HandoverPanel — WHO do you ask for the pad?
//
// The request itself has always existed (FloatingPanel emits `requestslot`,
// the holder answers a prompt, the result comes back). What was missing is the
// choice: with several pads in play, "the current player" is not a single
// person, and the old code silently picked the FIRST one it found. On a
// four-pad session that meant asking whoever happened to be first in the list,
// with no way to reach the other three.
//
// So this panel lists the people actually holding a pad right now, and asking
// one is one tap. It is only worth showing when there IS a choice — with a
// single holder, FloatingPanel skips the panel and asks directly.
//
// The list comes from `players`, the live roster the page already receives
// (the child's own state for a chantier-4 session, the façade otherwise) —
// never from a fetch of its own, which would show a different truth than the
// pads on screen.
//
// It serves BOTH directions of a hand-over (2026-08-25):
//
//   ask  — a watcher asks a holder for the pad. The holder answers a prompt.
//   give — a holder passes the pad to a watcher, unasked. Nobody answers:
//          giving is not a request, and a controller held out across a sofa
//          is not a negotiation.
//
// The give direction is the one that was missing, and it is why hand-over
// existed in the first place: remote-play has ONE pad and JOIN is
// structurally impossible there, so this is the only way it ever moves.




// Who can be asked: someone holding a pad, who is not you. A watcher has
// nothing to hand over, and asking yourself is not a thing.
// Who can be GIVEN the pad: somebody present, holding nothing, who is not
// you. Reported by the child only (`watchers`); on the v1 path it is empty and
// the entry never appears, which is the honest outcome — that model never knew
// who was watching.

function giveCandidates(watchers, self) {
  return (watchers || []).filter(function (username) {
    return username && username !== self;
  }).map(function (username) {
    return {
      username: username
    };
  });
}
function handoverCandidates(players, self) {
  return (players || []).filter(function (player) {
    return player.username !== self && (player.role === "player" || player.role === "owner")
    // A LENT pad is nobody's to hand over: only its owner takes it back
    // (#274). Asking for it would only ever be refused.
    && !player.lentTo;
  });
}
function HandoverPanel(_ref) {
  var players = _ref.players,
    _ref$watchers = _ref.watchers,
    watchers = _ref$watchers === void 0 ? [] : _ref$watchers,
    _ref$self = _ref.self,
    self = _ref$self === void 0 ? null : _ref$self,
    onAsk = _ref.onAsk,
    onGive = _ref.onGive,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "ask" : _ref$direction,
    _ref$lending = _ref.lending,
    lending = _ref$lending === void 0 ? false : _ref$lending,
    context = _ref.context,
    t = _ref.t;
  var giving = direction === "give";
  var giveKey = function giveKey(key) {
    return "streaming.handover.".concat(lending ? key.replace("give", "lend") : key);
  };
  var candidates = giving ? giveCandidates(watchers, self) : handoverCandidates(players, self);
  // A username is an ACCOUNT, a display name is what people call each other.
  // Everything addressed to a human names them the way they chose; the raw
  // username stays for keys, comparisons and the wire.
  var displayNames = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_1__.useDisplayNames)();
  var nameOf = function nameOf(username) {
    return displayNames[username] || username;
  };

  // Confirmed either way, and for the same reason: both hand a controller to
  // somebody else. Giving takes effect immediately once confirmed — the
  // recipient is not asked, because being handed a controller is not a
  // question.
  var act = function act(player) {
    context.modal.open(t(giving ? giveKey("giveMessage") : "streaming.handover.askMessage", {
      username: nameOf(player.username)
    }), {
      variant: "confirm",
      title: t(giving ? giveKey("giveTitle") : "streaming.participate.handover"),
      confirmLabel: t(giving ? giveKey("give") : "streaming.handover.ask"),
      cancelLabel: t("app.cancel"),
      onConfirm: function onConfirm() {
        return (giving ? onGive : onAsk)(player.username);
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_2__.SectionPanel, {
    children: candidates.length === 0 ?
    /*#__PURE__*/
    // Reachable: everyone can leave between the tap that opened
    // this panel and its first render.
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "text-muted small mb-0",
      children: t(giving ? "streaming.handover.noneToGive" : "streaming.handover.noneToAsk")
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "d-flex flex-column gap-2 mt-3",
      children: candidates.map(function (player) {
        var _player$slot, _player$slot2;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_2__.ListElement, {
            onClick: function onClick() {
              context.offcanvas.close();
              act(player);
            },
            icon: "bi bi-controller",
            label: nameOf(player.username),
            helpText: giving ? t("streaming.handover.isWatching") : player.role === "owner" ? t("streaming.handover.isOwner", {
              slot: (_player$slot = player.slot) !== null && _player$slot !== void 0 ? _player$slot : 1
            }) : t("streaming.handover.isPlayer", {
              slot: (_player$slot2 = player.slot) !== null && _player$slot2 !== void 0 ? _player$slot2 : "?"
            }),
            next: null
          })
        }, player.username);
      })
    })
  });
}

/***/ }

}]);
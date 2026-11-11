"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_streamex_controllers_PlayStation4_jsx"],{

/***/ "./src/webapp/src/app/gameflex/stream/streamex/controllers/PlayStation4.jsx"
/*!**********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/streamex/controllers/PlayStation4.jsx ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayStation4Pad)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-buttons.js */ "./src/webapp/src/app/gameflex/stream/streamex/controllers/profile-buttons.js");
/* harmony import */ var _shared_utils_log_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/log-store.js */ "./src/webapp/src/app/gameflex/shared/utils/log-store.js");
/* harmony import */ var _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../controllers/Controllers.jsx */ "./src/webapp/src/app/gameflex/controllers/Controllers.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// controllers/PlayStation4.jsx — la surface d'entrée PS4 (shadPS4).
//
// LA PS4 N'EST PAS UNE PS3, et elle empruntait pourtant son dessin.
//
// Les deux manettes se ressemblent de loin — même croix/rond/carré/triangle,
// mêmes L1/R1/L2/R2 — mais la DualShock 4 a remplacé SELECT et START par
// SHARE et OPTIONS, et ajouté un pavé tactile cliquable que la DualShock 3
// n'a jamais eu. Afficher un pad de PS3 sur une session PS4, c'est montrer au
// joueur des boutons qui ne sont pas ceux de sa manette (signalé le
// 2026-09-08).
//
// LE PAVÉ TACTILE PASSE PAR LA SOURIS DE shadPS4, pas par la manette
// virtuelle. shadPS4 a un mode « souris vers pavé tactile » : la position du
// curseur dans sa fenêtre devient le doigt, le bouton gauche le pose, le droit
// clique le pavé (input_mouse.cpp, EmulateTouchpad). streamex l'allume à
// chaque lancement — adapter.json, `keys_on_window` : la touche Suppr, car
// shadPS4 ne l'expose que comme raccourci. Un seul doigt, donc : c'est une
// souris.
//
// La voie de la manette reste fermée : SDL n'expose un pavé tactile que pour
// une manette qu'il RECONNAÎT comme DualShock 4, et notre pad virtuel se
// présente avec un identifiant générique. L'imiter au niveau HID (uhid) est un
// autre chantier.
//
// Contrat identique à PlayStation3.jsx (profileButtons/enabled/sendInput) —
// seuls le vocabulaire des boutons et le dessin changent.
;




var BUTTON_TO_PROFILE_ID = {
  CROSS: "cross",
  CIRCLE: "circle",
  SQUARE: "square",
  TRIANGLE: "triangle",
  L1: "l1",
  L2: "l2",
  L3: "l3",
  R1: "r1",
  R2: "r2",
  R3: "r3",
  // Le vocabulaire de la DualShock 4 D'ABORD, celui de la PS3 ensuite : le
  // gabarit dessine SHARE/OPTIONS, mais ps4.json — hérité du profil PS3 —
  // nomme encore ces deux boutons `select` et `start`. Les deux entrées
  // pointent donc au même endroit, plutôt que de renommer un profil servi à
  // des sessions en cours.
  SHARE: "select",
  OPTIONS: "start",
  START: "start",
  SELECT: "select",
  PS: "ps",
  DPAD_UP: "dup",
  DPAD_DOWN: "ddown",
  DPAD_LEFT: "dleft",
  DPAD_RIGHT: "dright",
  DPAD_UP_LEFT: "upleft",
  DPAD_UP_RIGHT: "upright",
  DPAD_DOWN_LEFT: "downleft",
  DPAD_DOWN_RIGHT: "downright"
};

// Stick which id on the wire (st,<l|r>,x,y with x,y ∈ [-1000,1000]) — the
// SERVER emulates per console (RPCS3: real analog via the uinput virtual
// gamepad; Eden: its cemuhook pads, or keys on the phone), so the
// client only forwards the normalized deflection. No key synthesis here.
var STICK_WHICH = {
  LEFT_STICK: "l",
  RIGHT_STICK: "r"
};
function PlayStation4Pad(_ref) {
  var profileButtons = _ref.profileButtons,
    enabled = _ref.enabled,
    sendInput = _ref.sendInput;
  // Keyboard and physical gamepad are NOT read here anymore.
  //
  // They were, and this component is removed from the tree the moment a real
  // controller is connected (Streaming.jsx hides the on-screen pad then), so
  // plugging a pad in silenced the only code reading it. They now live in
  // stream/streamex/hooks/use-streamex-physical-input.js, mounted by the
  // session — see that file for the whole story. What stays here is what this
  // component is actually for: drawing a pad and turning touches into input.

  var sendButtonProfile = function sendButtonProfile(name, down) {
    var buttonProfile = (0,_profile_buttons_js__WEBPACK_IMPORTED_MODULE_1__.resolveProfileButton)(profileButtons, BUTTON_TO_PROFILE_ID, name);

    // UN APPUI JETÉ EN SILENCE EST INDIAGNOSTICABLE.
    //
    // Deux raisons de ne rien envoyer, et elles n'appellent pas la même
    // action : ce bouton n'existe pas dans le profil de la console (rien
    // ne marchera pour lui), ou cette page n'a pas la manette (elle
    // regarde). Les deux donnaient le même écran — un pad qui s'allume
    // sous le doigt et ne fait rien.
    if (!buttonProfile) {
      (0,_shared_utils_log_store_js__WEBPACK_IMPORTED_MODULE_2__.logThrottled)("warn", "pad-no-profile", 2000, "pad: bouton absent du profil de la console", name, "(".concat(profileButtons.length, " charg\xE9s)"));
      return;
    }
    if (!enabled) {
      (0,_shared_utils_log_store_js__WEBPACK_IMPORTED_MODULE_2__.logThrottled)("warn", "pad-not-player", 2000, "pad: appui ignoré, cette page n'a pas la manette", name);
      return;
    }
    sendInput(down ? "kd,".concat(buttonProfile.key) : "ku,".concat(buttonProfile.key));
  };

  // Le pavé tactile — voir l'en-tête. `ma` porte la position de 0 à 10000
  // dans la fenêtre de l'émulateur : c'est le serveur qui en connaît les
  // pixels. Poser un doigt demande la manette ; le lever passe toujours, sinon
  // le bouton gauche resterait enfoncé chez l'émulateur.
  var touchingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var handleTouch = function handleTouch(finger, down, x, y) {
    // Un seul doigt : le second n'a pas de souris à qui parler.
    if (finger !== 0 || (down ? !enabled : !touchingRef.current)) return;
    sendInput("ma,".concat(Math.round(x * 10000), ",").concat(Math.round(y * 10000)));
    if (down !== touchingRef.current) {
      touchingRef.current = down;
      sendInput(down ? "md,1" : "mu,1");
    }
  };
  // Le clic du pavé : le bouton droit de la souris.
  var handleTouchpadClick = function handleTouchpadClick(down) {
    if (down && !enabled) return;
    sendInput(down ? "md,3" : "mu,3");
  };
  var handleButtonDown = function handleButtonDown(name) {
    return name === "TOUCHPAD" ? handleTouchpadClick(true) : sendButtonProfile(name, true);
  };
  var handleButtonUp = function handleButtonUp(name) {
    return name === "TOUCHPAD" ? handleTouchpadClick(false) : sendButtonProfile(name, false);
  };
  var handleAnalogMove = function handleAnalogMove(name, x, y) {
    var which = STICK_WHICH[name];
    if (!which || !enabled) return;
    var clamp = function clamp(value) {
      return Math.max(-1000, Math.min(1000, Math.round(value * 1000)));
    };
    sendInput("st,".concat(which, ",").concat(clamp(x), ",").concat(clamp(y)));
  };

  // Ne pas dessiner un bouton qui n'a nulle part où aller — voir
  // makeCanDrawButton. Les sticks et le pavé tactile sont exclus du test :
  // ils ne passent pas par les boutons du profil.
  var canDrawButton = (0,_profile_buttons_js__WEBPACK_IMPORTED_MODULE_1__.makeCanDrawButton)(profileButtons, BUTTON_TO_PROFILE_ID, [].concat(_toConsumableArray(Object.keys(STICK_WHICH)), ["TOUCHPAD"]));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__.DualSense, {
    onButtonDown: handleButtonDown,
    onButtonUp: handleButtonUp,
    onAnalogMove: handleAnalogMove,
    onTouch: handleTouch,
    canDrawButton: canDrawButton
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/streamex/controllers/profile-buttons.js"
/*!************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/streamex/controllers/profile-buttons.js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeCanDrawButton: () => (/* binding */ makeCanDrawButton),
/* harmony export */   resolveProfileButton: () => (/* binding */ resolveProfileButton)
/* harmony export */ });
// Le pont entre le vocabulaire du DESSIN (`CROSS`, `DPAD_UP`) et les
// identifiants du PROFIL de la console (`cross`, `dup`, servis par
// /profile.json).
//
// Ce fichier existe parce que la même fonction était recopiée dans les QUATRE
// pads streamex — à l'octet près, vérifié par empreinte. Une correction sur
// l'une des copies (il y en a eu : les deux replis ci-dessous datent du
// 2026-09-07) ne se propageait pas aux trois autres.

// resolveProfileButton — trouve l'entrée de profil qui correspond à un nom du
// gabarit.
//
// La table de traduction reste utile : elle relie un vocabulaire d'affichage
// (`DPAD_UP`) à un identifiant qu'aucune règle simple ne dérive (`dup`). Mais
// on ne s'y arrête plus : à défaut, le nom est essayé tel quel, puis en
// minuscules. Trois chances de trouver au lieu d'une, sur des vocabulaires qui
// ont divergé trois fois dans la même journée.
function resolveProfileButton(profileButtons, mapping, name) {
  var candidates = [mapping[name], name, String(name).toLowerCase()];
  var _loop = function _loop() {
      var candidate = _candidates[_i];
      if (!candidate) {
        return 0; // continue
      }
      var found = profileButtons.find(function (entry) {
        return entry.id === candidate;
      });
      if (found) {
        return {
          v: found
        };
      }
    },
    _ret;
  for (var _i = 0, _candidates = candidates; _i < _candidates.length; _i++) {
    _ret = _loop();
    if (_ret === 0) continue;
    if (_ret) return _ret.v;
  }
  return null;
}

// makeCanDrawButton — le prédicat que ControllerLayout attend.
//
// Un bouton du gabarit qui ne correspond à AUCUNE entrée du profil n'a pas de
// destination : le dessiner donne un bouton qui s'allume sous le doigt et
// n'envoie rien (le TOUCHPAD du gabarit `dualsense`, que ni ps4.json ni
// ps5.json ne déclarent). Mieux vaut ne pas le dessiner.
//
// Les sticks font exception : ils ne passent pas par les boutons du profil
// mais par `onAnalogMove`/`st,…`, donc leur nom est absent du profil sans que
// ça veuille dire quoi que ce soit. Ils sont nommés par l'appelant, qui est le
// seul à savoir lesquels il gère.
function makeCanDrawButton(profileButtons, mapping) {
  var analogNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  // PROFIL PAS ENCORE LÀ = ON DESSINE TOUT.
  //
  // /profile.json arrive après le premier rendu. Sans ce garde-fou, le pad
  // apparaîtrait VIDE le temps de l'aller-retour — et resterait vide si la
  // requête échouait. Un bouton muet est un défaut ; un pad absent en est un
  // pire.
  if (!profileButtons || profileButtons.length === 0) {
    return function () {
      return true;
    };
  }
  var analog = new Set(analogNames);
  return function (name) {
    return analog.has(name) || resolveProfileButton(profileButtons, mapping, name) !== null;
  };
}

/***/ }

}]);
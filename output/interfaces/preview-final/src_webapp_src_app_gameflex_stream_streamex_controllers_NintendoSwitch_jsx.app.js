"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_streamex_controllers_NintendoSwitch_jsx"],{

/***/ "./src/webapp/src/app/gameflex/stream/streamex/controllers/NintendoSwitch.jsx"
/*!************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/streamex/controllers/NintendoSwitch.jsx ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NintendoSwitchPad)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-buttons.js */ "./src/webapp/src/app/gameflex/stream/streamex/controllers/profile-buttons.js");
/* harmony import */ var _shared_utils_log_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/log-store.js */ "./src/webapp/src/app/gameflex/shared/utils/log-store.js");
/* harmony import */ var _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../controllers/Controllers.jsx */ "./src/webapp/src/app/gameflex/controllers/Controllers.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
// components/NintendoSwitch.jsx — la surface d'entrée Switch ET WII U du
// page streamex unifiée.
//
// LE NOM DU FICHIER NE DIT PLUS TOUT, et il vaut mieux l'écrire que le
// laisser surprendre : depuis le 2026-09-08 cette même surface sert la Wii U.
// Ce n'est pas un raccourci — le GamePad Wii U porte les mêmes boutons aux
// mêmes places (A/B/X/Y, L/R, ZL/ZR, +/-, deux sticks cliquables), et surtout
// wiiu.json déclare exactement les mêmes identifiants que switch.json. Le
// dessin est le même JoyCon, la traduction est la même table.
//
// L'original, pour mémoire : the Switch input surface for the
// unified streamex page: the GameFlex JoyCon (controllers/JoyCon, same
// virtual-pad system as retro-gaming and remote-play) wired to streamex's
// wire protocol (kd/ku + st,<l|r>,x,y via XTest/uinput on the server),
// plus keyboard pass-through and Gamepad API mapping (buttons AND analog
// axes). EVERY console gets its own component here (PlayStation3.jsx,
// Xbox.jsx, …) because the mapping is console-specific — the shared
// WebRTC/WS plumbing stays in ../Streaming.jsx.
//
// Contract (props from Streaming.jsx): profileButtons from /profile.json
// ({id,label,key}), enabled (serverRole === "player"), sendInput(payload) —
// the page owns the socket and the role gating, this component only ever
// decides WHICH message a button/input means.
//
// Sticks: the host emulates them (Eden's cemuhook pads on the server, keys
// on the phone) — the client sends raw deflections, no direction-key
// synthesis here.






// JoyCon button name → /profile.json button id (see the joycon preset in
// stream/onscreen/Controllers.jsx — L/R/ZL/ZR/A/B/X/Y/START/SELECT/
// DPAD_*/L3/R3 plus the two analog sticks).

var BUTTON_TO_PROFILE_ID = {
  A: "a",
  B: "b",
  X: "x",
  Y: "y",
  L: "l",
  R: "r",
  ZL: "zl",
  ZR: "zr",
  // DEUX VOCABULAIRES POUR LES MÊMES BOUTONS, et les deux sont acceptés.
  //
  // Le gabarit `joycon` dessine les siens à la Nintendo — `MINUS`, `PLUS`,
  // `LS`, `RS` — là où les gabarits Xbox et PlayStation utilisent les noms
  // génériques `SELECT`, `START`, `L3`, `R3`. Cette table ne connaissait que
  // les seconds : les quatre boutons Switch correspondants s'allumaient sous
  // le doigt et n'envoyaient rien, sans une erreur (2026-09-07).
  //
  // On garde les deux plutôt que de choisir : un gabarit qui change de
  // vocabulaire ne doit pas pouvoir tuer un bouton en silence, et la trace
  // posée dans le pad dit maintenant lequel n'a pas de correspondance.
  START: "plus",
  PLUS: "plus",
  SELECT: "minus",
  MINUS: "minus",
  L3: "lstick",
  LS: "lstick",
  R3: "rstick",
  RS: "rstick",
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
function NintendoSwitchPad(_ref) {
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
  var handleButtonDown = function handleButtonDown(name) {
    return sendButtonProfile(name, true);
  };
  var handleButtonUp = function handleButtonUp(name) {
    return sendButtonProfile(name, false);
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
  // makeCanDrawButton. Les sticks sont exclus du test : ils passent par
  // onAnalogMove, pas par les boutons du profil.
  var canDrawButton = (0,_profile_buttons_js__WEBPACK_IMPORTED_MODULE_1__.makeCanDrawButton)(profileButtons, BUTTON_TO_PROFILE_ID, Object.keys(STICK_WHICH));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__.JoyCon, {
    onButtonDown: handleButtonDown,
    onButtonUp: handleButtonUp,
    onAnalogMove: handleAnalogMove,
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
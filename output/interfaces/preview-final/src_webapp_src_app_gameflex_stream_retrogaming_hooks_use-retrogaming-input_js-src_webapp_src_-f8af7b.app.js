"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_retrogaming_hooks_use-retrogaming-input_js-src_webapp_src_-f8af7b"],{

/***/ "./src/webapp/src/app/gameflex/libs/gamepadMapping.js"
/*!************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/libs/gamepadMapping.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadGamepadMapping: () => (/* binding */ loadGamepadMapping),
/* harmony export */   subscribeGamepadMapping: () => (/* binding */ subscribeGamepadMapping)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
// localStorage-backed physical-gamepad button remap for retro-gaming, ONE
// PER CONSOLE — the standard Gamepad API button INDEX -> libretro action
// name (see shared/gamepadOverlay.js's RETRO_BUTTON_INDEX). Same pub/sub-on-
// change shape as types/controller-mapping.js (remote-play's own keyboard
// remap), kept as a separate store: different action vocabulary (libretro
// joypad names, not PS button names) and a different underlying input (raw
// Gamepad API polling, not keydown events).
//
// This is now purely a FALLBACK DEFAULT layer: Streaming.jsx's
// useRetroPhysicalGamepadInput tries the new per-device KeyMapping (Phase 8,
// gameflex/libs/keyMapping.js) first, and only falls back to this
// per-console default when the connected device has no KeyMapping entry for
// this console's virtual controller — kept as-is (not remappable via any UI
// anymore) purely so a user who never opens profile/GamepadParameters.jsx's
// "Mapping manette" tab keeps a working zero-config gamepad.
var STORAGE_PREFIX = "retrogaming_gamepad_mapping_";
var CHANGE_EVENT = "retrogaming-gamepad-mapping-changed";

// Same defaults Streaming.jsx's useRetroPhysicalGamepadInput always used
// before this became remappable — a standard Gamepad API layout, where
// libretro's SNES-style a/b/x/y position naming happens to line up with the
// Gamepad API's own button order.
var DEFAULT_MAPPING = {
  0: "b",
  1: "a",
  2: "y",
  3: "x",
  4: "l",
  5: "r",
  6: "l2",
  7: "r2",
  8: "select",
  9: "start",
  12: "up",
  13: "down",
  14: "left",
  15: "right"
};
function storageKey(consoleId) {
  return "".concat(STORAGE_PREFIX).concat(consoleId);
}
function getDefaultGamepadMapping() {
  return _objectSpread({}, DEFAULT_MAPPING);
}
function loadGamepadMapping(consoleId) {
  try {
    var raw = localStorage.getItem(storageKey(consoleId));
    if (!raw) return getDefaultGamepadMapping();
    return _objectSpread(_objectSpread({}, getDefaultGamepadMapping()), JSON.parse(raw));
  } catch (_unused) {
    return getDefaultGamepadMapping();
  }
}

// Ignores changes for any OTHER console — a change event fires globally
// (window-level), but a mounted tab only ever cares about the console of
// the session it's actually attached to.
function subscribeGamepadMapping(consoleId, callback) {
  var handler = function handler(event) {
    var _event$detail, _event$detail2;
    if (((_event$detail = event.detail) === null || _event$detail === void 0 ? void 0 : _event$detail.consoleId) !== consoleId) return;
    callback(((_event$detail2 = event.detail) === null || _event$detail2 === void 0 ? void 0 : _event$detail2.mapping) || loadGamepadMapping(consoleId));
  };
  window.addEventListener(CHANGE_EVENT, handler);
  return function () {
    return window.removeEventListener(CHANGE_EVENT, handler);
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/libs/rumble.js"
/*!****************************************************!*\
  !*** ./src/webapp/src/app/gameflex/libs/rumble.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyRumble: () => (/* binding */ applyRumble),
/* harmony export */   triggerRumble: () => (/* binding */ triggerRumble)
/* harmony export */ });
/* harmony import */ var _gamepadPreferences_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamepadPreferences.js */ "./src/webapp/src/app/gameflex/libs/gamepadPreferences.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;

// LE MOTEUR DE VIBRATION — un seul, pour les trois plateformes.
//
// Il y en avait deux, et ils faisaient la même chose : trouver le moteur
// d'une manette, l'actionner, et à défaut faire vibrer le téléphone. L'un
// servait le rétro (`triggerRumble`), l'autre remote-play
// (`applyControllerRumbleToGamepads`, dans son propre service). Ils avaient
// chacun leur magasin de réglages, et ils avaient déjà divergé : le rétro
// exigeait `typeof playEffect === "function"` avant de renoncer, remote-play
// connaissait en plus l'ancien `hapticActuators.pulse` — donc une manette
// ancienne vibrait sur PS5 et pas sur PS1, sans que rien ne le dise.
//
// Ce fichier garde l'UNION de ce que les deux savaient faire. Ce qui reste
// propre à chaque plateforme est sa PLAGE d'entrée, et rien d'autre :
// libretro compte de 0 à 65535, la PS5 de 0 à 255. Les deux adaptateurs
// convertissent et appellent ici.
//
// Deux moteurs derrière un seul appel, parce que lequel s'applique dépend
// entièrement de ce qui est branché :
//
// - une VRAIE manette (Gamepad API) a ses propres moteurs, joignables par
//   `GamepadHapticActuator.playEffect('dual-rumble', …)` — Chrome
//   seulement aujourd'hui, mais c'est déjà le seul navigateur que le chemin
//   d'entrée manette de cette application suppose ;
// - pas de manette (manette virtuelle tactile) : `navigator.vibrate()`, le
//   moteur du TÉLÉPHONE — Chrome Android seulement, Safari iOS n'a jamais
//   implémenté l'API Vibration.

function isBrowser() {
  return typeof window !== "undefined" && typeof navigator !== "undefined";
}
function clamp01(value) {
  if (!Number.isFinite(value) || value <= 0) return 0;
  return value >= 1 ? 1 : value;
}
function getGamepads() {
  var _navigator$getGamepad;
  if (!isBrowser() || typeof navigator.getGamepads !== "function") {
    return [];
  }
  return Array.from((_navigator$getGamepad = navigator.getGamepads.call(navigator)) !== null && _navigator$getGamepad !== void 0 ? _navigator$getGamepad : [], function (pad) {
    return pad !== null && pad !== void 0 ? pad : null;
  });
}

// L'actionneur d'une manette, ancienne API comprise.
//
// `vibrationActuator` est la forme actuelle ; `hapticActuators[0]` est celle
// d'avant, encore la seule que certaines manettes exposent. Le moteur rétro
// ignorait la seconde, celui de remote-play la connaissait — c'est
// exactement le genre d'écart que deux implémentations produisent en
// silence.
function actuatorOf(pad) {
  var _pad$hapticActuators;
  return (pad === null || pad === void 0 ? void 0 : pad.vibrationActuator) || ((_pad$hapticActuators = pad === null || pad === void 0 ? void 0 : pad.hapticActuators) !== null && _pad$hapticActuators !== void 0 ? _pad$hapticActuators : [])[0] || null;
}
function playWithActuator(actuator, strong, weak, duration) {
  try {
    if (typeof actuator.playEffect === "function") {
      void actuator.playEffect("dual-rumble", {
        startDelay: 0,
        duration: duration,
        strongMagnitude: strong,
        weakMagnitude: weak
      });
      return true;
    }
    if (typeof actuator.pulse === "function") {
      void actuator.pulse.call(actuator, Math.max(strong, weak), duration);
      return true;
    }
  } catch (error) {
    // `playEffect` rend une promesse qui PEUT être rejetée (manette
    // débranchée entre-temps, effet refusé par le pilote), et l'appel
    // lui-même peut lever. Non attrapée, l'erreur remontait en
    // « unhandled rejection » dans la console d'un joueur qui n'a rien
    // demandé.
    rumbleTrace("manette : effet refusé", (error === null || error === void 0 ? void 0 : error.message) || error);
  }
  return false;
}
function stopActuator(actuator) {
  return playWithActuator(actuator, 0, 0, 1);
}

/**
 * Faire vibrer, à partir de magnitudes DÉJÀ normalisées entre 0 et 1.
 *
 * Normalisées, parce que c'est la seule chose que les plateformes ne
 * partagent pas : leur plage d'entrée. Tout le reste — l'interrupteur
 * global, l'intensité, la résolution de l'actionneur, le repli sur le
 * téléphone — est le même besoin, et vit donc ici.
 *
 * @param {object} request
 * @param {number} request.strong      moteur lourd, 0..1
 * @param {number} request.weak        moteur léger, 0..1
 * @param {number} [request.durationMs] durée de l'effet manette
 * @param {number|null} [request.gamepadIndex] une manette précise, ou null
 * @param {"first"|"all"} [request.targets] à qui l'envoyer quand aucun index
 *        n'est donné. « first » (rétro) s'arrête à la première manette qui
 *        vibre ; « all » (remote-play) les prend toutes. Explicite plutôt
 *        que choisi ici : les deux existaient, et en imposer un changerait
 *        le comportement d'une plateforme sans que personne l'ait demandé.
 * @param {boolean} [request.allowDeviceVibration] autoriser le repli sur le
 *        moteur du téléphone. Faux pour un gabarit de manette sans moteurs
 *        (NES, PSP) : le téléphone ne doit pas vibrer pour une console qui
 *        n'a jamais pu.
 * @param {number|null} [request.deviceVibrationMs] durée du repli téléphone,
 *        ou null pour la déduire de l'intensité.
 * @returns {boolean} vrai si quelque chose a effectivement vibré.
 */
function applyRumble(_ref) {
  var strong = _ref.strong,
    weak = _ref.weak,
    _ref$durationMs = _ref.durationMs,
    durationMs = _ref$durationMs === void 0 ? 100 : _ref$durationMs,
    _ref$gamepadIndex = _ref.gamepadIndex,
    gamepadIndex = _ref$gamepadIndex === void 0 ? null : _ref$gamepadIndex,
    _ref$targets = _ref.targets,
    targets = _ref$targets === void 0 ? "first" : _ref$targets,
    _ref$allowDeviceVibra = _ref.allowDeviceVibration,
    allowDeviceVibration = _ref$allowDeviceVibra === void 0 ? true : _ref$allowDeviceVibra,
    _ref$deviceVibrationM = _ref.deviceVibrationMs,
    deviceVibrationMs = _ref$deviceVibrationM === void 0 ? null : _ref$deviceVibrationM;
  // L'interrupteur global (page Manette) vaut pour LES DEUX moteurs : les
  // actionneurs de manette et le repli téléphone.
  if (!(0,_gamepadPreferences_js__WEBPACK_IMPORTED_MODULE_0__.getRumbleEnabled)()) {
    return false;
  }
  var scale = clamp01((0,_gamepadPreferences_js__WEBPACK_IMPORTED_MODULE_0__.getRumbleStrength)());
  var strongMagnitude = clamp01(strong) * scale;
  var weakMagnitude = clamp01(weak) * scale;
  var shouldStop = strongMagnitude === 0 && weakMagnitude === 0;
  var applied = false;
  var _iterator = _createForOfIteratorHelper(getGamepads()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var pad = _step.value;
      if (!pad) continue;
      if (typeof gamepadIndex === "number" && pad.index !== gamepadIndex) {
        continue;
      }
      var actuator = actuatorOf(pad);
      if (!actuator) continue;
      applied = (shouldStop ? stopActuator(actuator) : playWithActuator(actuator, strongMagnitude, weakMagnitude, durationMs)) || applied;
      if (typeof gamepadIndex === "number" || targets === "first" && applied) {
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (applied) {
    rumbleTrace("manette", "fort=".concat(strongMagnitude.toFixed(2), " faible=").concat(weakMagnitude.toFixed(2)));
    return true;
  }

  // PAS DE MANETTE N'EST PAS UNE RAISON DE NE RIEN FAIRE.
  //
  // Une garde `gamepads.length === 0` a longtemps rendu ce repli
  // inatteignable : sur un écran tactile il n'y a par définition aucune
  // manette branchée, donc on rendait la main avant d'y arriver. La PS5 ne
  // faisait donc jamais vibrer le téléphone, alors que ce repli avait été
  // écrit exactement pour ça (2026-09-08).
  if (shouldStop) {
    // `navigator.vibrate(0)` est un no-op défini par la spécification :
    // un « arrête-toi » n'a donc rien à faire ici.
    return false;
  }
  if (!allowDeviceVibration) {
    rumbleTrace("ignoré", "ce gabarit de manette n'a pas de moteurs");
    return false;
  }
  if (typeof navigator.vibrate !== "function") {
    rumbleTrace("ignoré", "ce navigateur ne sait pas faire vibrer l'appareil");
    return false;
  }
  var intensity = Math.max(strongMagnitude, weakMagnitude);
  var milliseconds = deviceVibrationMs !== null && deviceVibrationMs !== void 0 ? deviceVibrationMs : Math.round(intensity * 100);
  if (milliseconds <= 0) {
    return false;
  }
  navigator.vibrate(milliseconds);
  rumbleTrace("téléphone", "intensit\xE9=".concat(intensity.toFixed(2), " dur\xE9e=").concat(milliseconds, "ms"));
  return true;
}

/**
 * L'adaptateur LIBRETRO — plage 0..65535.
 *
 * C'est celle que `stream_session.go`'s `rumbleStateCallback` envoie ; la
 * mise à l'échelle est le travail de ce côté-ci, pas celui du serveur.
 */
function triggerRumble(gamepadIndex, weak, strong) {
  var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    _ref2$virtualControll = _ref2.virtualControllerRumble,
    virtualControllerRumble = _ref2$virtualControll === void 0 ? true : _ref2$virtualControll;
  // Durée courte et fixe, délibérément : libretro envoie un NOUVEL appel
  // `set_rumble_state` à chaque changement (« arrête » compris, force 0),
  // donc il suffit de couvrir l'intervalle jusqu'à la mise à jour
  // suivante, pas de modéliser l'enveloppe complète d'un effet.
  return applyRumble({
    strong: strong / 65535,
    weak: weak / 65535,
    durationMs: 100,
    gamepadIndex: gamepadIndex,
    targets: "first",
    allowDeviceVibration: virtualControllerRumble
  });
}

// UNE VIBRATION QUI NE VIENT PAS EST INDIAGNOSTICABLE.
//
// Rien ne bouge : le serveur n'a pas envoyé ? le message n'est pas arrivé ?
// l'appel est parti et le navigateur n'a rien fait ? Les trois donnent
// exactement le même résultat — c'est-à-dire aucun. Le serveur journalise
// déjà chacun de ses appels ; ce côté-ci n'en disait rien.
//
// Au plus une ligne par seconde et par motif : la vibration change à chaque
// image quand elle est active, et une trace par appel noierait la console.
var rumbleTraceAt = new Map();
function rumbleTrace(what, detail) {
  var now = Date.now();
  if (now - (rumbleTraceAt.get(what) || 0) < 1000) return;
  rumbleTraceAt.set(what, now);
  // eslint-disable-next-line no-console
  console.info("[rumble] ".concat(what, " \u2014 ").concat(detail));
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-input.js"
/*!***************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-input.js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRetrogamingInput: () => (/* binding */ useRetrogamingInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../controllers/Controllers.jsx */ "./src/webapp/src/app/gameflex/controllers/Controllers.jsx");
/* harmony import */ var _shared_controller_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/controller-layout.js */ "./src/webapp/src/app/gameflex/stream/shared/controller-layout.js");
/* harmony import */ var _contexts_ConsolesContext_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/ConsolesContext.jsx */ "./src/webapp/src/app/gameflex/contexts/ConsolesContext.jsx");
/* harmony import */ var _use_retrogaming_physical_gamepad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-retrogaming-physical-gamepad.js */ "./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-physical-gamepad.js");
/* harmony import */ var _use_retrogaming_keyboard_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-retrogaming-keyboard-input.js */ "./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-keyboard-input.js");
/* harmony import */ var _use_retrogaming_streaming_connection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-retrogaming-streaming-connection.js */ "./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-streaming-connection.js");
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _libs_rumble_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/rumble.js */ "./src/webapp/src/app/gameflex/libs/rumble.js");
/* harmony import */ var _controllers_presets_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../controllers/presets.js */ "./src/webapp/src/app/gameflex/controllers/presets.js");
/* harmony import */ var _shared_hooks_use_session_stats_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/hooks/use-session-stats.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-session-stats.js");
/* harmony import */ var _shared_activity_store_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/activity-store.js */ "./src/webapp/src/app/gameflex/stream/shared/activity-store.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;











// v1 (chantier-3): the client-side input priority gate is gone. It existed
// because every tab of a player kept its role, so the page had to decide
// locally which one was driving. Input is now gated where it belongs —
// server-side, on who holds the pad — and a pad is taken by an explicit
// POST, never inferred here.

// useRetrogamingInput — the retro-gaming half of the unified Streaming
// page's per-platform dispatcher (see stream/shared/hooks/use-session-
// input.js). Returns the exact StreamingShell prop set retro-gaming's own
// (now-deleted) Player.jsx used to build and render directly — the shared
// Streaming.jsx component just spreads this straight onto <StreamingShell>.
// Every genuinely retro-only feature (save states, cheats, PS1 dual-
// controller, rewind/fast-forward, N64 C-buttons) lives entirely in here;
// StreamingShell already treats an undefined prop as "no section" (see its
// own doc), so the other two platforms never see any of it.
// screenRef — the PAGE's one gateway viewer (Streaming.jsx owns it, see
// SessionStream's doc): this hook sends input through it and reads its
// viewerId for the start/join/spectate message, but never creates one of
// its own anymore. Creating a second viewer inside the WS onOpen is what
// restarted the video on every role change.
// virtualPad / virtualPadLabel — un pad fourni par l'appelant, qui l'emporte
// sur la console (KeytestLive : le téléphone sert KeyTest comme une session
// « device », donc par CE hook). `resolveControllerLayout` prévoyait déjà le
// cas — seul le chemin pour l'y amener manquait de ce côté.
/**
 * LA MÊME SIGNATURE POUR LES TROIS PLATEFORMES.
 *
 *     useXInput({ screenRef, session, context, t, options })
 *
 * Les quatre premiers sont ce dont TOUTE plateforme a besoin : la surface
 * vidéo, la session, le contexte Skeleton, la traduction. Ce qui n'appartient
 * qu'à l'une descend dans `options`, jamais à plat à côté d'eux.
 *
 * Pourquoi cette règle : à plat, chaque hook affichait sa propre liste — neuf
 * paramètres pour le rétro, six pour streamex, quatre pour remote-play — et
 * l'appelant devait savoir laquelle avant d'appeler. Le dispatcher portait
 * donc trois lignes différentes pour trois hooks censés être
 * interchangeables, et ajouter un besoin à l'un obligeait à relire les trois.
 * Avec `options`, la ligne d'appel est la même partout et seul son contenu
 * change — ce qui est exactement ce qu'on veut dire.
 *
 * Cette règle vaut pour tout hook ou toute lib PARTAGÉE entre plateformes,
 * pas seulement pour ces trois-là.
 */

function useRetrogamingInput(_ref) {
  var _session$me, _session$me2, _session$me3;
  var screenRef = _ref.screenRef,
    session = _ref.session,
    context = _ref.context,
    t = _ref.t,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? {} : _ref$options;
  var isWatching = options.isWatching,
    _options$childSlot = options.childSlot,
    childSlot = _options$childSlot === void 0 ? null : _options$childSlot,
    onConnectionError = options.onConnectionError,
    _options$virtualPad = options.virtualPad,
    virtualPad = _options$virtualPad === void 0 ? null : _options$virtualPad,
    _options$virtualPadLa = options.virtualPadLabel,
    virtualPadLabel = _options$virtualPadLa === void 0 ? null : _options$virtualPadLa,
    _options$onProgress = options.onProgress,
    onProgress = _options$onProgress === void 0 ? null : _options$onProgress;
  // This page is player-only now — watching (spectating) went to
  // gameflex/Watch.jsx, which handles all 3 platforms' spectate flows.
  var _useAuth = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_7__.useAuth)(),
    token = _useAuth.token,
    user = _useAuth.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFastForwarding = _useState2[0],
    setIsFastForwarding = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isRewinding = _useState4[0],
    setIsRewinding = _useState4[1];
  // PS1 controller type — 1, la manette d'origine (numérique) : c'est ce
  // que le moteur monte au démarrage depuis le 2026-10-11, décision du
  // porteur. Le sélecteur part donc d'accord avec la console, sans
  // attendre de réponse. (517, la DualShock, jusqu'à cette date.)
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedControllerType = _useState6[0],
    setSelectedControllerType = _useState6[1];
  var consoles = (0,_contexts_ConsolesContext_jsx__WEBPACK_IMPORTED_MODULE_3__.useConsoles)();
  var consoleMeta = consoles.find(function (c) {
    return c.id === session.consoleId;
  });

  // The connection hook reports player joins/leaves through a {title,
  // variant} toast shape (slot requests ride the façade WS now, P3) —
  // this adapter maps that shape onto Skeleton's toast.open.
  var toast = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref2) {
    var _context$toast, _context$toast$open;
    var title = _ref2.title,
      action = _ref2.action,
      variant = _ref2.variant;
    (_context$toast = context.toast) === null || _context$toast === void 0 || (_context$toast$open = _context$toast.open) === null || _context$toast$open === void 0 || _context$toast$open.call(_context$toast, action ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "d-flex flex-column gap-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
        children: title
      }), action]
    }) : title, {
      variant: variant === "error" ? "error" : "normal",
      duration: action ? 0 : undefined
    });
  }, [context]);

  // P2 §1 / P3 — the reconnect role comes from the KERNEL's own push,
  // not from this page's previous state: a spectate→player transition
  // MEANS a slot got granted (freeSlot join or handover) and the platform
  // connection follows with a joiner reconnect. A spectate→owner
  // transition is the watch-first OWNER taking their own pad — that
  // reconnect must send "start" (retro_relay.go's identity check), never
  // "join": an owner "join" on a maxPlayers=1 console (PSP) is rejected
  // by the relay with "session is full" before the child ever sees it,
  // and on any other console it would grab a joiner port instead of
  // starting the session. The mount case never triggers the effect: the
  // ref starts at the current value.
  // chantier-4: the role follows the PAD, and the pad is the queue's answer
  // — me.padSlot, not a name. Slot 1 dials "owner" (the message that boots
  // the emulator), any other slot dials "join". A tab holding nothing
  // spectates.
  //
  // Keyed on the SLOT rather than on me.role because that is what the child
  // gates input on: deriving the two from different fields is how the on-
  // screen pad and the mapping profile ended up disagreeing once already.
  // childSlot wins when present: on a child-managed session it IS the
  // authority's answer, while session.me arrives several hops later. Dialing
  // with the stale one made the page announce itself as a spectator moments
  // after taking the pad — and the child then refused, because nobody was
  // playing yet.
  var slot = childSlot !== null && childSlot !== void 0 ? childSlot : (_session$me = session.me) === null || _session$me === void 0 ? void 0 : _session$me.padSlot;
  var connectRole = isWatching ? "spectate" : slot === 1 ? "owner" : slot > 1 ? "join" : ((_session$me2 = session.me) === null || _session$me2 === void 0 ? void 0 : _session$me2.role) === "owner" ? "owner" : ((_session$me3 = session.me) === null || _session$me3 === void 0 ? void 0 : _session$me3.role) === "player" ? "join" : "spectate";
  var previousWatchingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isWatching);
  // Set by onConnect below — the façade gate owns the FIRST connection.
  // Without this, a fresh session opened two relay sockets ~19ms apart:
  // the page starts with isWatching=true, the kernel's first private push
  // flips it to false, and that flip fired the reconnect below at the same
  // moment the gate fired onConnect. The second socket replaced the first,
  // the child saw the owner's socket die, Players emptied, and the role
  // fell back to spectate for good — "retro drops me into watch as soon as
  // I launch" (reported live 2026-08-24). This effect only ever handles a
  // LATER watch→play transition; there is nothing to reconnect before the
  // first connection has been made.
  var hasConnectedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var _useRetrogamingStream = (0,_use_retrogaming_streaming_connection_js__WEBPACK_IMPORTED_MODULE_6__.useRetrogamingStreamingConnection)({
      screenRef: screenRef,
      t: t,
      toast: toast,
      onProgress: onProgress,
      onRumble: function onRumble(weak, strong) {
        var _CONTROLLER_PRESETS$R;
        return (0,_libs_rumble_js__WEBPACK_IMPORTED_MODULE_8__.triggerRumble)(null, weak, strong, {
          virtualControllerRumble: ((_CONTROLLER_PRESETS$R = _controllers_presets_js__WEBPACK_IMPORTED_MODULE_9__.CONTROLLER_PRESETS[_controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__.RETRO_CONTROLLER_PRESET_MAP[session.consoleId]]) === null || _CONTROLLER_PRESETS$R === void 0 ? void 0 : _CONTROLLER_PRESETS$R.rumble) === true
        });
      }
    }),
    isConnected = _useRetrogamingStream.isConnected,
    isConnecting = _useRetrogamingStream.isConnecting,
    connectionState = _useRetrogamingStream.connectionState,
    handleConnectionStateChange = _useRetrogamingStream.handleConnectionStateChange,
    handleStatsUpdate = _useRetrogamingStream.handleStatsUpdate,
    connect = _useRetrogamingStream.connect,
    disconnect = _useRetrogamingStream.disconnect,
    leavePage = _useRetrogamingStream.leavePage,
    sendButton = _useRetrogamingStream.sendButton,
    sendAnalog = _useRetrogamingStream.sendAnalog,
    sendPointer = _useRetrogamingStream.sendPointer,
    saveState = _useRetrogamingStream.saveState,
    loadState = _useRetrogamingStream.loadState,
    setFastForward = _useRetrogamingStream.setFastForward,
    setRewind = _useRetrogamingStream.setRewind,
    cheatsSupported = _useRetrogamingStream.cheatsSupported,
    rewindSupported = _useRetrogamingStream.rewindSupported,
    fastForwardSupported = _useRetrogamingStream.fastForwardSupported,
    initialCheats = _useRetrogamingStream.initialCheats,
    setCheats = _useRetrogamingStream.setCheats,
    setControllerType = _useRetrogamingStream.setControllerType,
    queryDisks = _useRetrogamingStream.queryDisks,
    changeDisk = _useRetrogamingStream.changeDisk,
    setPaused = _useRetrogamingStream.setPaused,
    resetConsole = _useRetrogamingStream.resetConsole,
    connectionStats = _useRetrogamingStream.connectionStats,
    setStatsMonitoring = _useRetrogamingStream.setStatsMonitoring;

  // P6 — every REAL input send stamps the shared activity store (the
  // shell drains it onto the façade WS at most once a minute). Wrapped
  // ONCE here so the virtual pad, the keyboard hook and the physical-
  // gamepad poller — which all route through sendButton/sendAnalog —
  // stay untouched.
  var sendButtonWithActivity = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, value) {
    // Only the tab holding the priority drives the pad (C2-P4d).
    // Presses only. A RELEASE always goes through, even from a tab
    (0,_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_11__.markActivity)();
    sendButton(index, value);
  }, [sendButton]);
  var sendAnalogWithActivity = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, x, y) {
    (0,_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_11__.markActivity)();
    sendAnalog(index, x, y);
  }, [sendAnalog]);

  // DÉPLACÉ SOUS LA DÉCLARATION DE `connect`.
  //
  // Cet effet le lisait dans son tableau de dépendances une dizaine de
  // lignes AVANT que la destructuration ne le définisse — une lecture en
  // zone morte temporelle, que le linter signale (no-use-before-define).
  // Elle ne lève pas aujourd'hui par accident : Babel transpile ce `const`
  // en `var`, hissé et valant `undefined`. Le jour où la cible de
  // compilation change, ça devient une ReferenceError à chaque rendu.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var wasWatching = previousWatchingRef.current;
    previousWatchingRef.current = isWatching;
    if (wasWatching && !isWatching && hasConnectedRef.current) {
      connect(session.id, connectRole, user === null || user === void 0 ? void 0 : user.username, function (reason) {
        var _context$toast2, _context$toast2$open;
        (_context$toast2 = context.toast) === null || _context$toast2 === void 0 || (_context$toast2$open = _context$toast2.open) === null || _context$toast2$open === void 0 || _context$toast2$open.call(_context$toast2, reason || t("streaming.connection.state.failed"), {
          variant: "error"
        });
      });
    }
  }, [isWatching, connect, connectRole, session.id, user === null || user === void 0 ? void 0 : user.username, context, t]);
  (0,_use_retrogaming_physical_gamepad_js__WEBPACK_IMPORTED_MODULE_4__.useRetroPhysicalGamepadInput)(isConnected, sendButtonWithActivity, sendAnalogWithActivity, session.consoleId, token);
  (0,_use_retrogaming_keyboard_input_js__WEBPACK_IMPORTED_MODULE_5__.useRetroKeyboardInput)(isConnected, sendButtonWithActivity, session.consoleId, token);

  // N64's C-buttons have no digital RetroPad bit in mupen64plus_next's
  // default mapping — the core expects them as RIGHT ANALOG STICK
  // deflection instead.
  var cStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    up: false,
    down: false,
    left: false,
    right: false
  });
  var N64_C_BUTTON_NAMES = {
    C_UP: "up",
    C_DOWN: "down",
    C_LEFT: "left",
    C_RIGHT: "right"
  };
  var sendN64CState = function sendN64CState() {
    var c = cStateRef.current;
    var x = (c.right ? 1 : 0) - (c.left ? 1 : 0);
    var y = (c.down ? 1 : 0) - (c.up ? 1 : 0);
    sendAnalogWithActivity(1, x, y);
  };
  var handleButtonDown = function handleButtonDown(name) {
    if (name in _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__.RETRO_DIAGONAL_BUTTONS) {
      var _iterator = _createForOfIteratorHelper(_controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__.RETRO_DIAGONAL_BUTTONS[name]),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var direction = _step.value;
          sendButtonWithActivity(_controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__.RETRO_BUTTON_INDEX[direction], 1);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return;
    }
    if (name in N64_C_BUTTON_NAMES) {
      cStateRef.current = _objectSpread(_objectSpread({}, cStateRef.current), {}, _defineProperty({}, N64_C_BUTTON_NAMES[name], true));
      sendN64CState();
      return;
    }
    sendButtonWithActivity(_controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__.RETRO_BUTTON_INDEX[name], 1);
  };
  var handleButtonUp = function handleButtonUp(name) {
    if (name in _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__.RETRO_DIAGONAL_BUTTONS) {
      var _iterator2 = _createForOfIteratorHelper(_controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__.RETRO_DIAGONAL_BUTTONS[name]),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var direction = _step2.value;
          sendButtonWithActivity(_controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__.RETRO_BUTTON_INDEX[direction], 0);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return;
    }
    if (name in N64_C_BUTTON_NAMES) {
      cStateRef.current = _objectSpread(_objectSpread({}, cStateRef.current), {}, _defineProperty({}, N64_C_BUTTON_NAMES[name], false));
      sendN64CState();
      return;
    }
    sendButtonWithActivity(_controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__.RETRO_BUTTON_INDEX[name], 0);
  };
  var dpadStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    up: false,
    down: false,
    left: false,
    right: false
  });
  // LA ZONE MORTE SE MESURE SUR L'AMPLITUDE, PAS SUR CHAQUE AXE.
  //
  // Le stick borne sa course en cercle (Controllers.jsx : `mag > 1` divise
  // x et y), mais le seuil était appliqué aux deux axes séparément — un
  // test carré sur une entrée ronde. Une diagonale répartit la poussée :
  // à 45° il fallait 0,566 d'amplitude (0,4 ÷ cos 45°) pour franchir 0,4
  // sur les DEUX axes, contre 0,4 pour un haut ou un droite. Et dans la
  // bande intermédiaire, RIEN ne partait — le pouce poussé plus loin que
  // le seuil d'une direction franche, et la croix qui lisait le neutre.
  // C'était ça, « les diagonales ne prennent pas » (2026-09-17).
  //
  // L'amplitude décide donc SI la croix bouge, l'angle décide ensuite de
  // quelles directions : huit secteurs de 45°, ce qui met une diagonale à
  // la même poussée qu'une direction franche.
  var STICK_DPAD_DEADZONE = 0.4;
  var stickToDpad = function stickToDpad(x, y) {
    if (Math.hypot(x, y) < STICK_DPAD_DEADZONE) {
      return {
        up: false,
        down: false,
        left: false,
        right: false
      };
    }
    // Secteur de 45° : 0 = droite, puis dans le sens des aiguilles (y
    // croît vers le bas, comme à l'écran). Un secteur pair est une
    // direction franche, un impair les deux qui l'encadrent.
    var octant = (Math.round(Math.atan2(y, x) * 4 / Math.PI) + 8) % 8;
    return {
      up: octant >= 5 && octant <= 7,
      down: octant >= 1 && octant <= 3,
      left: octant >= 3 && octant <= 5,
      right: octant === 0 || octant === 1 || octant === 7
    };
  };
  // LE STICK À L'ÉCRAN EXISTE PARTOUT ; CE QU'IL ENVOIE DÉPEND DE LA CONSOLE.
  //
  // Sur une NES il devient des appuis de croix — un stick est plus
  // confortable qu'une croix tactile, et c'est tout l'intérêt de le
  // dessiner là. Sur une PS2 il doit envoyer la déflexion telle quelle,
  // sinon on joue au tout-ou-rien.
  //
  // La liste des consoles analogiques était écrite ICI, en dur, et elle
  // n'en connaissait que deux : psp et ps1. PS2, N64, GameCube, Wii et
  // Dreamcast — qui ont toutes un vrai stick — recevaient donc des appuis
  // de croix (2026-09-08). C'est un fait de console : il vit maintenant
  // dans le registre des consoles (`analog`), avec les extensions et le
  // nombre de manettes.
  var handleAnalogMove = function handleAnalogMove(name, x, y) {
    if (session.consoleId === "psp") {
      // La PSP n'a QU'UN nub : ses deux sticks à l'écran pointent donc
      // le même axe, plutôt qu'un second que la console n'a pas.
      sendAnalogWithActivity(0, x, y);
      return;
    }
    if (consoleMeta !== null && consoleMeta !== void 0 && consoleMeta.analog || (consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.method) === "streamex") {
      sendAnalogWithActivity(name === "RIGHT_STICK" ? 1 : 0, x, y);
      return;
    }
    var next = stickToDpad(x, y);
    var prev = dpadStateRef.current;
    for (var _i = 0, _arr = ["up", "down", "left", "right"]; _i < _arr.length; _i++) {
      var dir = _arr[_i];
      if (next[dir] === prev[dir]) {
        continue;
      }
      sendButtonWithActivity(_controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__.RETRO_BUTTON_INDEX["DPAD_".concat(dir.toUpperCase())], next[dir] ? 1 : 0);
    }
    dpadStateRef.current = next;
  };

  // P2 §1 — the façade WS drives the platform connection: onConnect at
  // WS open, onLeave/onDisconnect at error/close. connectRole (defined
  // above, shared with the spectate→player/owner reconnect effect) rides
  // the kernel-pushed role — a reconnecting PLAYER must send "join",
  // never "owner" (retro_relay.go's identity check rejects it).
  var onConnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    hasConnectedRef.current = true;
    connect(session.id, connectRole, user === null || user === void 0 ? void 0 : user.username, function (reason) {
      onConnectionError === null || onConnectionError === void 0 || onConnectionError(reason || t("streaming.connection.state.failed"));
    });
  }, [connect, session.id, connectRole, user === null || user === void 0 ? void 0 : user.username, onConnectionError, t]);
  // leavePage (pause, grace) — a façade WS drop must NEVER end the game
  // for the other players (roadmap decision: leavePage ≠ disconnect).
  var onLeave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    leavePage();
  }, [leavePage]);
  var onDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    leavePage();
  }, [leavePage]);

  // P3 — contract actions the shell triggers; the request MESSAGES
  // themselves ride the child, as intents (sessionSend), so the hook only carries
  // the platform-side follow-ups.
  var onSlotGiveaway = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // THIS holder accepted a cede: the kernel already swapped the pool,
    // but the child still serves this connection as owner — reconnect
    // as a plain spectator (delayed so the cede flushes first).
    setTimeout(function () {
      connect(session.id, "spectate", user === null || user === void 0 ? void 0 : user.username, function () {});
    }, 1500);
  }, [connect, session.id, user === null || user === void 0 ? void 0 : user.username]);
  var hasFreeSlots = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _session$openSlots;
    return (_session$openSlots = session.openSlots) !== null && _session$openSlots !== void 0 ? _session$openSlots : 0;
  }, [session.openSlots]);
  var onMonitoringResource = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (open) {
    var powerOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var _useSessionStats = (0,_shared_hooks_use_session_stats_js__WEBPACK_IMPORTED_MODULE_10__.useSessionStats)({
        platform: "retrogaming",
        sessionId: session.id,
        startedAt: session.startedAt,
        token: token,
        setStatsMonitoring: setStatsMonitoring,
        intervalMs: 1000,
        open: open,
        powerOnly: powerOnly
      }),
      serverStatus = _useSessionStats.serverStatus,
      devicePower = _useSessionStats.devicePower;
    // `device` — le téléphone qu'on tient, quand la partie tourne
    // ailleurs (voir useSessionStats).
    return _objectSpread(_objectSpread(_objectSpread({}, connectionStats), serverStatus === null || serverStatus === void 0 ? void 0 : serverStatus.data), {}, {
      device: devicePower
    });
  }, [session.id, session.startedAt, token, setStatsMonitoring, connectionStats]);
  return {
    // Three distinct verbs, no boolean parameters (2026-08-24). The old
    // disconnect(bool) meant `saveProgress` here and `explicit` on
    // remote-play — the SAME positional argument with opposite meanings,
    // which is how "quit without ending the session" ended it anyway.
    //   disconnect()  — leave quietly, the session survives on its grace
    //   terminate()   — deliberately end the session
    //   saveOnQuit()  — retro only: end it, saving progress first (the
    //                   save rides the "exit" message, it has no path of
    //                   its own; the menu's per-slot saveState is a
    //                   different feature)
    disconnect: function disconnect() {
      return leavePage();
    },
    terminate: function terminate() {
      return disconnect(false);
    },
    // An ordinary save on slot 0, awaited — INDEPENDENT of how the player
    // then leaves (2026-08-24). It used to be a flavour of the exit
    // message, so saving was only possible while ending the session; and
    // the child saved by itself on every teardown, which piled up a full
    // state for games merely opened for ten seconds. Nothing is written
    // now unless the player asks, and asking works whichever way they go.
    saveOnQuit: function saveOnQuit() {
      return new Promise(function (resolve) {
        return saveState(0, resolve);
      });
    },
    onConnect: onConnect,
    onLeave: onLeave,
    onDisconnect: onDisconnect,
    onSlotGiveaway: onSlotGiveaway,
    hasFreeSlots: hasFreeSlots,
    onMonitoringResource: onMonitoringResource,
    // Le nom de la console SI ON LA CONNAÎT, et rien sinon. Le gabarit
    // posait le tiret d'abord : une console absente du registre — ce qui
    // arrive quand la session ne la nomme pas — affichait « Mario —
    // undefined » en titre de partie (vu le 2026-09-08).
    title: consoleMeta !== null && consoleMeta !== void 0 && consoleMeta.name ? "".concat(session.title, " \u2014 ").concat(consoleMeta.name) : session.title,
    // The video surface belongs to the page now (SessionStream, mounted
    // once per page from the sessionId alone) — no ref, no sessionId
    // here. gatewayProps carries only what THIS platform needs on the
    // <GatewayWebRTC> itself; retro needs nothing beyond the two
    // state callbacks.
    gatewayProps: {
      onConnectionStateChange: handleConnectionStateChange,
      onStatsUpdate: handleStatsUpdate
    },
    isConnected: isConnected,
    isConnecting: isConnecting,
    connectionState: connectionState,
    controller: function controller() {
      var _resolveControllerLay = (0,_shared_controller_layout_js__WEBPACK_IMPORTED_MODULE_2__.resolveControllerLayout)({
          session: session,
          ps1ControllerType: selectedControllerType,
          override: virtualPad,
          overrideLabel: virtualPadLabel
        }),
        ControllerComponent = _resolveControllerLay.Component,
        controllerLabel = _resolveControllerLay.label;
      return {
        label: controllerLabel,
        Component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ControllerComponent, {
          onButtonDown: handleButtonDown,
          onButtonUp: handleButtonUp,
          onAnalogMove: handleAnalogMove
        })
      };
    },
    extraProps: _objectSpread({
      // Reduced to the genuinely retro-only sections (P3) — join/
      // takeover/handover ride the façade WS + the contract fields
      // above now.
      timeTravelProps: {
        isFastForwarding: isFastForwarding,
        isRewinding: isRewinding,
        // DÉCLARÉ par la partie, pas déduit de la console — voir
        // rewindSupported (use-retrogaming-save-states.js). Le menu
        // n'affiche l'interrupteur que si le cœur peut vraiment
        // tenir un historique d'états sans coûter le son.
        rewindSupported: rewindSupported,
        fastForwardSupported: fastForwardSupported,
        setTravelMode: function setTravelMode(mode) {
          var wantsRewind = mode === "rewind";
          var wantsFastForward = mode === "fastForward";
          setIsRewinding(wantsRewind);
          setIsFastForwarding(wantsFastForward);
          setRewind(wantsRewind);
          setFastForward(wantsFastForward);
        }
      },
      saves: {
        saveState: saveState,
        loadState: loadState
      },
      // LE BOUTON RESET, au propriétaire seul, dans la section Session
      // du menu, à côté des sauvegardes (FloatingPanel.jsx).
      reset: resetConsole,
      cheats: {
        cheatsSupported: cheatsSupported,
        initialCheats: initialCheats,
        setCheats: setCheats
      },
      // LES DISQUES, à demander — jamais à déclarer. Voir queryDisks
      // (use-retrogaming-save-states.js) : zéro disque est la réponse
      // que rendent l'enfant trop ancien, le core sans interface et le
      // jeu en un seul fichier, et le menu n'affiche alors rien.
      disks: {
        list: queryDisks,
        change: changeDisk
      },
      // L'ÉCRAN TACTILE. La page décide OÙ est le doigt, ce hook
      // seulement comment le dire au core.
      touch: {
        send: sendPointer
      },
      // La pause DÉLIBÉRÉE, celle qu'on demande en quittant. Voir
      // setPaused (use-retrogaming-save-states.js).
      // UN VERBE SANS PARAMÈTRE (CODE_CONVENTIONS, « Nommer les
      // intentions ») : `pause` était exposé comme `setPaused`, donc la
      // page passait un booléen positionnel à travers la frontière de
      // plateforme — la forme même que la règle condamne, et dans le
      // chemin de sortie où le bug d'origine vivait. Il n'a jamais été
      // appelé qu'avec `true` : geler avant de partir. Le jour où il
      // faudra dégeler, ce sera `resume()`, pas un booléen de retour.
      pause: function pause() {
        return setPaused(true);
      }
    }, session.consoleId === "ps1" ? {
      PS1: {
        standard: {
          id: 1,
          load: function load() {
            setControllerType(0, 1);
            setSelectedControllerType(1);
          }
        },
        dualshock: {
          id: 517,
          load: function load() {
            setControllerType(0, 517);
            setSelectedControllerType(517);
          }
        }
      }
    } : {})
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-keyboard-input.js"
/*!************************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-keyboard-input.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRetroKeyboardInput: () => (/* binding */ useRetroKeyboardInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_keyboardMapping_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/keyboardMapping.js */ "./src/webapp/src/app/gameflex/libs/keyboardMapping.js");
/* harmony import */ var _libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/keyMapping.js */ "./src/webapp/src/app/gameflex/libs/keyMapping.js");
/* harmony import */ var _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../controllers/Controllers.jsx */ "./src/webapp/src/app/gameflex/controllers/Controllers.jsx");
/* harmony import */ var _use_retrogaming_physical_gamepad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-retrogaming-physical-gamepad.js */ "./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-physical-gamepad.js");
/* harmony import */ var _libs_gameInput_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/gameInput.js */ "./src/webapp/src/app/gameflex/libs/gameInput.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Keyboard input for retro-gaming — relays keydown/keyup straight to
// sendButton via KeyMapping-first-then-libs/keyboardMapping.js (see
// resolveBitIndex's own doc in use-retro-physical-gamepad.js). Always
// enabled (unlike the physical gamepad hook, there is no "is a keyboard
// connected" concept to gate on). capture:true so a key still reaches this
// handler even when the <video> element (or nothing) has focus, same
// reasoning as remote-play's own keyboard-mapping.js handler. Digital
// buttons only — no analog stick from a keyboard.
//
// Chords: a mapping entry whose physical input contains "+" (e.g.
// "ArrowDown+ArrowRight" → DPAD_DOWN_RIGHT) fires only while EVERY key of
// the chord is held, and SUPPRESSES those keys' individual bindings — so a
// diagonal chord and its two single directions can coexist without the
// chord's release fighting the still-held single direction.
;





function useRetroKeyboardInput(enabled, sendButton, consoleId, token) {
  var mappingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_libs_keyboardMapping_js__WEBPACK_IMPORTED_MODULE_1__.loadKeyboardMapping)(consoleId));
  var keyMappingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var controllerName = _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__.RETRO_CONTROLLER_PRESET_MAP[consoleId] || "default";
  var keyboardId = (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__.getKeyboardDeviceId)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    mappingRef.current = (0,_libs_keyboardMapping_js__WEBPACK_IMPORTED_MODULE_1__.loadKeyboardMapping)(consoleId);
    return (0,_libs_keyboardMapping_js__WEBPACK_IMPORTED_MODULE_1__.subscribeKeyboardMapping)(consoleId, function (mapping) {
      mappingRef.current = mapping;
    });
  }, [consoleId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    keyMappingRef.current = (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__.getCachedKeyMapping)(keyboardId, controllerName);
    (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__.loadKeyMapping)(token, keyboardId, controllerName).then(function (m) {
      keyMappingRef.current = m;
    });
    return (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__.subscribeKeyMapping)(keyboardId, controllerName, function (mapping) {
      keyMappingRef.current = mapping;
    });
  }, [keyboardId, controllerName, token]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled) return;
    var pressed = new Set();
    var sent = new Set();
    var isEditable = function isEditable(el) {
      return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
    };
    var chordInputs = function chordInputs() {
      return Object.keys(keyMappingRef.current).filter(function (input) {
        return input.includes("+");
      });
    };
    var codeMatters = function codeMatters(code) {
      return (0,_use_retrogaming_physical_gamepad_js__WEBPACK_IMPORTED_MODULE_4__.resolveBitIndex)(code, keyMappingRef.current, mappingRef.current, _use_retrogaming_physical_gamepad_js__WEBPACK_IMPORTED_MODULE_4__.RETRO_PHYSICAL_BUTTON_INDEX) !== undefined || chordInputs().some(function (input) {
        return input.split("+").includes(code);
      });
    };

    // Recompute the desired bit set from the held keys and diff it against
    // what is currently sent — release ordering (one chord key lifted while
    // the other is still held) then resolves itself instead of special cases.
    var refresh = function refresh() {
      var desired = new Set();
      var chordCovered = new Set();
      var _iterator = _createForOfIteratorHelper(chordInputs()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          var codes = input.split("+");
          if (codes.every(function (code) {
            return pressed.has(code);
          })) {
            var _iterator4 = _createForOfIteratorHelper((0,_use_retrogaming_physical_gamepad_js__WEBPACK_IMPORTED_MODULE_4__.resolveVirtualBits)(keyMappingRef.current[input])),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _bit = _step4.value;
                desired.add(_bit);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            var _iterator5 = _createForOfIteratorHelper(codes),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var code = _step5.value;
                chordCovered.add(code);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(pressed),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _code = _step2.value;
          if (chordCovered.has(_code)) continue;
          var bitIndex = (0,_use_retrogaming_physical_gamepad_js__WEBPACK_IMPORTED_MODULE_4__.resolveBitIndex)(_code, keyMappingRef.current, mappingRef.current, _use_retrogaming_physical_gamepad_js__WEBPACK_IMPORTED_MODULE_4__.RETRO_PHYSICAL_BUTTON_INDEX);
          if (bitIndex !== undefined) desired.add(bitIndex);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(desired),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _bit2 = _step3.value;
          if (!sent.has(_bit2)) {
            sent.add(_bit2);
            sendButton(_bit2, 1);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      for (var _i = 0, _arr = _toConsumableArray(sent); _i < _arr.length; _i++) {
        var bit = _arr[_i];
        if (!desired.has(bit)) {
          sent["delete"](bit);
          sendButton(bit, 0);
        }
      }
    };
    var handleKeyDown = function handleKeyDown(e) {
      // Une touche FABRIQUÉE n'est pas un joueur : le pont manette-
      // clavier de Skeleton en émet pour naviguer dans l'interface
      // (sans `code`, sans relâchement). Et le menu ouvert, les flèches
      // et Entrée sont à lui (#407, #408).
      if (!e.isTrusted || (0,_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_5__.isGameInputSuspended)()) return;
      if (isEditable(document.activeElement)) return;
      if (pressed.has(e.code)) return;
      if (!codeMatters(e.code)) return;
      e.preventDefault();
      pressed.add(e.code);
      refresh();
    };
    var handleKeyUp = function handleKeyUp(e) {
      if (!pressed.has(e.code)) return;
      e.preventDefault();
      pressed["delete"](e.code);
      refresh();
    };
    var releaseAll = function releaseAll() {
      pressed.clear();
      refresh();
    };
    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("keyup", handleKeyUp, true);
    window.addEventListener("blur", releaseAll);
    // Le menu qui s'ouvre relâche ce que le clavier tenait.
    var stopListening = (0,_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_5__.onGameInputSuspension)(function (suspended) {
      return suspended && releaseAll();
    });
    return function () {
      document.removeEventListener("keydown", handleKeyDown, true);
      document.removeEventListener("keyup", handleKeyUp, true);
      window.removeEventListener("blur", releaseAll);
      stopListening();
      releaseAll();
    };
  }, [enabled, sendButton]);
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-physical-gamepad.js"
/*!**************************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-physical-gamepad.js ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RETRO_PHYSICAL_BUTTON_INDEX: () => (/* binding */ RETRO_PHYSICAL_BUTTON_INDEX),
/* harmony export */   resolveBitIndex: () => (/* binding */ resolveBitIndex),
/* harmony export */   resolveVirtualBits: () => (/* binding */ resolveVirtualBits),
/* harmony export */   useRetroPhysicalGamepadInput: () => (/* binding */ useRetroPhysicalGamepadInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_gamepadMapping_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/gamepadMapping.js */ "./src/webapp/src/app/gameflex/libs/gamepadMapping.js");
/* harmony import */ var _libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/keyMapping.js */ "./src/webapp/src/app/gameflex/libs/keyMapping.js");
/* harmony import */ var _libs_gameInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/gameInput.js */ "./src/webapp/src/app/gameflex/libs/gameInput.js");
/* harmony import */ var _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../controllers/Controllers.jsx */ "./src/webapp/src/app/gameflex/controllers/Controllers.jsx");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;





// Physical-gamepad polling for retro-gaming, used by the Streaming page.
//
// It lives in its own module for a concrete reason, not tidiness — and la
// raison vaut toujours, même si le second appelant (le mode console) a
// disparu le 2026-09-08. Ce hook était importé DEPUIS Streaming.jsx par une
// autre page. Les deux passent par le contexte d'import dynamique de
// skeleton.js (chaque .jsx sous app/ devient son propre morceau asynchrone) :
// le morceau de l'appelant s'exécutait avant que celui de Streaming ne soit
// initialisé, l'espace de noms revenait `undefined`, et la page mourait sur la
// première chose qu'elle y touchait. Un module de PAGE n'est pas une
// bibliothèque : ce que deux pages partagent appartient à un endroit qui
// n'est ni l'une ni l'autre.

// Polls the first connected physical gamepad every animation frame and
// relays it over the same sendButton/sendAnalog path the on-screen virtual
// controller uses — server-side emulation has no built-in gamepad polling
// pipeline (unlike the old client-side EmulatorJS/WASM version), so without
// this a physical controller does nothing at all once connected.
//
// libs/gamepadMapping.js and libs/keyboardMapping.js (both unchanged by the
// controller-visual refactor) still store/produce LOWERCASE, un-prefixed
// libretro action names ("up"/"a"/"select"/...), matching their own
// DEFAULT_MAPPING — a different case/naming convention than Controllers.
// jsx's RETRO_BUTTON_INDEX (uppercase, DPAD_-prefixed — matches
// ControllerLayout.jsx's on-screen button names instead). Kept
// local here rather than exported, since only the physical-gamepad/
// keyboard paths below consume this shape; same values as the deleted
// gameflex/shared/gamepadOverlay.js's own RETRO_BUTTON_INDEX.
var RETRO_PHYSICAL_BUTTON_INDEX = {
  b: 0,
  y: 1,
  select: 2,
  start: 3,
  up: 4,
  down: 5,
  left: 6,
  right: 7,
  a: 8,
  x: 9,
  l: 10,
  r: 11,
  l2: 12,
  r2: 13
};

// One virtual button name → the libretro bit(s) it drives — diagonals send
// both direction bits (same trick as the on-screen pad). Shared by the
// keyboard hook (Streaming.jsx) and the gamepad hook below, so
// chords resolve identically on both device types.
function resolveVirtualBits(name) {
  if (name in _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_4__.RETRO_DIAGONAL_BUTTONS) {
    return _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_4__.RETRO_DIAGONAL_BUTTONS[name].map(function (direction) {
      return _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_4__.RETRO_BUTTON_INDEX[direction];
    });
  }
  var bit = _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_4__.RETRO_BUTTON_INDEX[name];
  return bit === undefined ? [] : [bit];
}

// Resolves one physical input (a Gamepad API button index, or a
// KeyboardEvent.code) to the libretro bit index sendButton needs — KeyMapping
// (Phase 8, per physical device + virtual controller preset, see
// gameflex/libs/keyMapping.js) is tried FIRST; a device with no saved
// KeyMapping entry for this input falls back to the older per-console
// gamepadMapping.js/keyboardMapping.js default (oldMapping, oldNameToIndex),
// so a user who's never opened profile/GamepadParameters.jsx's "Mapping
// manette" tab keeps today's zero-config behavior exactly as it was.
// fallbackInput — the input as the fallback table knows it: a button by its
// POSITION (keyMapping.js's positionalButtonIndex), where a KeyMapping row
// keeps the index the pad sends.
function resolveBitIndex(physicalInput, keyMapping, oldMapping, oldNameToIndex) {
  var fallbackInput = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : physicalInput;
  var virtualName = (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__.resolveVirtualButton)(keyMapping, physicalInput);
  if (virtualName !== undefined) {
    var bitIndex = _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_4__.RETRO_BUTTON_INDEX[virtualName];
    if (bitIndex !== undefined) return bitIndex;
  }
  var oldName = oldMapping[fallbackInput];
  return oldName !== undefined ? oldNameToIndex[oldName] : undefined;
}

// Button INDEX -> libretro bit index comes from KeyMapping-first-then-
// libs/gamepadMapping.js (see resolveBitIndex above) instead of a fixed
// table — both read fresh into a ref on mount/change rather than on every
// tick, since this loop already runs 60x/sec and a mapping change is rare.
// gamepadIndex — null (default, Streaming.jsx's own single-player use) picks
// whichever gamepad slot is found first, exactly as before; console mode
// (gameflex/shared, one hook instance per physical gamepad hub slot) passes
// an explicit index instead so each instance drives ONLY its own assigned
// pad, never accidentally reading someone else's. Exported for that reuse —
// otherwise identical/private to this file for the normal Streaming flow.
function useRetroPhysicalGamepadInput(enabled, sendButton, sendAnalog, consoleId, token) {
  var gamepadIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var mappingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_libs_gamepadMapping_js__WEBPACK_IMPORTED_MODULE_1__.loadGamepadMapping)(consoleId));
  var keyMappingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var padIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var unsubscribeKeyMappingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var controllerName = _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_4__.RETRO_CONTROLLER_PRESET_MAP[consoleId] || "default";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    mappingRef.current = (0,_libs_gamepadMapping_js__WEBPACK_IMPORTED_MODULE_1__.loadGamepadMapping)(consoleId);
    return (0,_libs_gamepadMapping_js__WEBPACK_IMPORTED_MODULE_1__.subscribeGamepadMapping)(consoleId, function (mapping) {
      mappingRef.current = mapping;
    });
  }, [consoleId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled) return;
    var raf;
    var pressed = {};
    var stickX = 0,
      stickY = 0;
    var rightX = 0,
      rightY = 0;
    var _tick = function tick() {
      var pads = (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__.connectedGamepads)();
      var pad = gamepadIndex === null ? Array.from(pads).find(Boolean) : pads[gamepadIndex];
      if (pad) {
        // A real pad swap (or the first pad found at all) — re-load
        // this pad's own KeyMapping for the session's virtual
        // controller and re-subscribe to live changes (e.g. edited
        // in profile/GamepadParameters.jsx in another tab).
        if ((0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__.gamepadDeviceId)(pad) !== padIdRef.current) {
          var _unsubscribeKeyMappin;
          padIdRef.current = (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__.gamepadDeviceId)(pad);
          (_unsubscribeKeyMappin = unsubscribeKeyMappingRef.current) === null || _unsubscribeKeyMappin === void 0 || _unsubscribeKeyMappin.call(unsubscribeKeyMappingRef);
          keyMappingRef.current = (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__.getCachedKeyMapping)(padIdRef.current, controllerName);
          (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__.loadKeyMapping)(token, padIdRef.current, controllerName).then(function (m) {
            keyMappingRef.current = m;
          });
          unsubscribeKeyMappingRef.current = (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__.subscribeKeyMapping)(padIdRef.current, controllerName, function (m) {
            keyMappingRef.current = m;
          });
        }
        // Held indices (strings) → desired bits, with chord support:
        // a chord entry ("12+15" → DPAD_UP_RIGHT) fires only while
        // EVERY key of the chord is held and suppresses those keys'
        // individual bindings — same semantics as the keyboard hook.
        //
        // LE MENU OUVERT, LA MANETTE EST LUE COMME LÂCHÉE (#408) : la
        // différence avec ce qui était envoyé relâche alors tout, puis
        // plus rien ne part, jusqu'à la fermeture du menu. Le Home du
        // raccourci du menu (L2 tenu) n'est pas au jeu non plus.
        var suspended = (0,_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_3__.isGameInputSuspended)();
        var held = new Set();
        pad.buttons.forEach(function (button, index) {
          if (button.pressed && !suspended && !(0,_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_3__.isMenuHome)(pad, index)) held.add(String(index));
        });
        var desired = new Set();
        var chordCovered = new Set();
        for (var _i = 0, _Object$keys = Object.keys(keyMappingRef.current); _i < _Object$keys.length; _i++) {
          var input = _Object$keys[_i];
          if (!input.includes("+")) continue;
          var codes = input.split("+");
          if (!codes.every(function (code) {
            return held.has(code);
          })) continue;
          var _iterator = _createForOfIteratorHelper(resolveVirtualBits(keyMappingRef.current[input])),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var bit = _step.value;
              desired.add(bit);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var _iterator2 = _createForOfIteratorHelper(codes),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var code = _step2.value;
              chordCovered.add(code);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        var _iterator3 = _createForOfIteratorHelper(held),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _code = _step3.value;
            if (chordCovered.has(_code)) continue;
            var bitIndex = resolveBitIndex(_code, keyMappingRef.current, mappingRef.current, RETRO_PHYSICAL_BUTTON_INDEX, String((0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_2__.positionalButtonIndex)(pad.id, Number(_code))));
            if (bitIndex !== undefined) desired.add(bitIndex);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var _iterator4 = _createForOfIteratorHelper(desired),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _bit2 = _step4.value;
            if (!pressed[_bit2]) {
              pressed[_bit2] = true;
              sendButton(_bit2, 1);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        for (var _i2 = 0, _Object$keys2 = Object.keys(pressed); _i2 < _Object$keys2.length; _i2++) {
          var _bit = _Object$keys2[_i2];
          var index = Number(_bit);
          if (!desired.has(index)) {
            delete pressed[index];
            sendButton(index, 0);
          }
        }
        // Left stick (axes[0]/[1] in the standard mapping) — axis 0
        // = RETRO_DEVICE_INDEX_ANALOG_LEFT, same as VirtualJoystick
        // (see its own doc + handleAnalogMove above): a single
        // physical analog input (PSP's nub, N64's stick, ...) maps
        // to LEFT by libretro convention, matching what those cores
        // actually read. Cores that never poll RETRO_DEVICE_ANALOG
        // at all just ignore this either way, so this is harmless
        // for consoles with no analog input. Not remapped by
        // KeyMapping (see its own LEFT_STICK/RIGHT_STICK exclusion
        // doc) — stays on this fixed axis convention.
        var x = suspended ? 0 : pad.axes[0] || 0,
          y = suspended ? 0 : pad.axes[1] || 0;
        if (Math.abs(x - stickX) > 0.02 || Math.abs(y - stickY) > 0.02) {
          stickX = x;
          stickY = y;
          sendAnalog(0, x, y);
        }

        // LE STICK DROIT AUSSI (axes[2]/[3] → RETRO_DEVICE_INDEX_
        // ANALOG_RIGHT), qui n'était pas lu du tout.
        //
        // Ce n'est pas un manque cosmétique. Sur N64, les boutons C
        // n'ont AUCUN bit numérique : les cores les lisent comme une
        // déviation du stick droit — c'est déjà ce que fait le pad
        // tactile (voir sendN64CState). Avec une manette physique,
        // les quatre C étaient donc muets, et « le B ne marche pas,
        // et d'autres aussi » (signalé le 2026-09-03).
        //
        // Et ça vaut au-delà : une DualShock sur PS1/PS2 n'avait pas
        // son second stick non plus.
        var rx = suspended ? 0 : pad.axes[2] || 0,
          ry = suspended ? 0 : pad.axes[3] || 0;
        if (Math.abs(rx - rightX) > 0.02 || Math.abs(ry - rightY) > 0.02) {
          rightX = rx;
          rightY = ry;
          sendAnalog(1, rx, ry);
        }
      }
      raf = requestAnimationFrame(_tick);
    };
    raf = requestAnimationFrame(_tick);
    return function () {
      var _unsubscribeKeyMappin2;
      cancelAnimationFrame(raf);
      (_unsubscribeKeyMappin2 = unsubscribeKeyMappingRef.current) === null || _unsubscribeKeyMappin2 === void 0 || _unsubscribeKeyMappin2.call(unsubscribeKeyMappingRef);
      unsubscribeKeyMappingRef.current = null;
      padIdRef.current = null;
    };
  }, [enabled, sendButton, sendAnalog, controllerName, token, gamepadIndex]);
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-save-states.js"
/*!*********************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-save-states.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRetrogamingSaveStates: () => (/* binding */ useRetrogamingSaveStates)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;

// The retro-gaming-only actions that used to live inline in
// use-retro-streaming-connection.js — save/load state, cheats, fast-
// forward/rewind, and the PS1 controller-type debug switch. None of these
// exist on streamex or remote-play (see docs/wiggly-rolling-plum's "Hooks
// frontend" plan): streamex has no save states at all, remote-play's saves
// are the PS4/PS5's own OS-level ones, entirely outside this app.
//
// sendSignaling — the same WS sender use-retro-streaming-connection.js
// already owns; passed in rather than duplicated, since the WS itself is
// still that hook's (the connection stays a single WebSocket carrying both
// the session protocol and these messages, unlike streamex's slots which
// were judged NOT worth splitting out for the same reason — see the plan).
// registerMessageHandlers — lets this hook plug its own message types
// (savestate/loadstate/cheats/error's pending-callback cases) into the
// parent's ws.onmessage switch without the parent needing to know their
// shape; called once per connect(), returns nothing.
// Assez pour un aller-retour WS jusqu'au conteneur, bien trop court pour
// qu'on attende devant un menu.
var DISKS_ANSWER_TIMEOUT_MS = 2500;
function useRetrogamingSaveStates(_ref) {
  var sendSignaling = _ref.sendSignaling;
  // Set right before sending, cleared (and called) by whichever of
  // "savestate"/"loadstate"/"error" comes back next — the backend only
  // ever has one request in flight at a time per session.
  var pendingStateCallbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // Same one-at-a-time assumption, for "setcheats" instead of save/load.
  var pendingCheatsCallbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // Idem pour les disques. Le menu ne pose qu'une question à la fois — il
  // ne s'ouvre qu'une fois.
  var pendingDisksCallbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Whether the loaded core exports retro_cheat_set at all (see the
  // "started" message's CheatsSupported field) — false until the
  // owner's offer arrives; always false for a joiner/spectator.
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    cheatsSupported = _useState2[0],
    setCheatsSupported = _useState2[1];
  // The owner's persisted cheat list, as the offer/started message
  // carried it — CheatsPanel seeds its own local list from this once.
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    initialCheats = _useState4[0],
    setInitialCheats = _useState4[1];
  // LE REMBOBINAGE NE VA PAS À TOUTES LES CONSOLES, et ce n'est pas au
  // menu de le deviner — c'est la partie qui le dit, sur ce même message.
  //
  // Rembobiner, c'est sérialiser l'état complet de la console une fois par
  // seconde. Un état PS2 pèse 44 Mio : la boucle d'émulation y perdait une
  // image par seconde, et une image perdue par seconde, c'est le son qui
  // se coupe (signalé le 2026-09-08). Le serveur écarte donc les consoles
  // dont l'état est trop gros (voir rewindStateSizeMax, stream_session.go)
  // et le DIT ici, plutôt que de laisser un interrupteur qui coûte cher
  // pour rien. Faux tant que le message n'est pas arrivé, et pour un
  // joueur/spectateur qui ne le reçoit jamais.
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    rewindSupported = _useState6[0],
    setRewindSupported = _useState6[1];
  // L'AVANCE RAPIDE, DÉCLARÉE de même : le moteur GameFlex la sait (serveur
  // et téléphone), un invité de bureau du téléphone (RPCS3, xemu…) non — le
  // menu lui proposait un interrupteur sans effet (le porteur, 2026-10-28).
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    fastForwardSupported = _useState8[0],
    setFastForwardSupported = _useState8[1];

  // Called by the parent hook's ws.onmessage from the "started" case, which
  // carries the capability fields.
  var applyStartedCapabilities = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (msg) {
    setCheatsSupported(!!msg.cheatsSupported);
    setRewindSupported(!!msg.rewindSupported);
    setFastForwardSupported(!!msg.fastForwardSupported);
    setInitialCheats(msg.cheats || []);
  }, []);

  // La réponse sur le rembobinage arrive UNE SECONDE APRÈS le démarrage,
  // pas avec "started" — le serveur ne la connaît pas plus tôt : il la
  // mesure sur sa première capture réelle plutôt que de la demander à un
  // cœur qui n'a pas encore tourné (voir decideRewindLocked côté Go, et le
  // plantage de dolphin qui a imposé ce report). Une reconnexion, elle,
  // retrouve la réponse sur "started" : à ce moment-là elle est connue.
  var applyRewindSupport = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (msg) {
    setRewindSupported(!!msg.rewindSupported);
  }, []);

  // Called by the parent hook's ws.onmessage — returns true if this hook
  // consumed the message (so the parent knows not to also handle it).
  var handleMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (msg) {
    var _pendingStateCallback, _pendingCheatsCallbac, _pendingDisksCallback, _msg$disk;
    switch (msg.type) {
      case "savestate":
      case "loadstate":
        (_pendingStateCallback = pendingStateCallbackRef.current) === null || _pendingStateCallback === void 0 || _pendingStateCallback.call(pendingStateCallbackRef, null, msg.info);
        pendingStateCallbackRef.current = null;
        return true;
      case "cheats":
        (_pendingCheatsCallbac = pendingCheatsCallbackRef.current) === null || _pendingCheatsCallbac === void 0 || _pendingCheatsCallbac.call(pendingCheatsCallbackRef, null, msg.cheats || []);
        pendingCheatsCallbackRef.current = null;
        return true;
      case "disks":
        (_pendingDisksCallback = pendingDisksCallbackRef.current) === null || _pendingDisksCallback === void 0 || _pendingDisksCallback.call(pendingDisksCallbackRef, _objectSpread({
          count: msg.disks || 0,
          current: (_msg$disk = msg.disk) !== null && _msg$disk !== void 0 ? _msg$disk : -1
        }, msg.info === "denied" ? {
          error: msg.info
        } : {}));
        pendingDisksCallbackRef.current = null;
        return true;
      case "error":
        if (pendingStateCallbackRef.current) {
          // Le message entier en troisième : un refus codé
          // (`state-refused`, #396) s'y lit avec ses versions.
          pendingStateCallbackRef.current(msg.error, null, msg);
          pendingStateCallbackRef.current = null;
          return true;
        }
        if (pendingCheatsCallbackRef.current) {
          pendingCheatsCallbackRef.current(msg.error, null);
          pendingCheatsCallbackRef.current = null;
          return true;
        }
        // Un changement de disque refusé : on rend « zéro disque »
        // plutôt que de laisser la promesse en l'air. Le menu se
        // referme sur cette réponse au lieu d'attendre pour toujours.
        if (pendingDisksCallbackRef.current) {
          pendingDisksCallbackRef.current({
            count: 0,
            current: -1
          });
          pendingDisksCallbackRef.current = null;
          return true;
        }
        return false;
      default:
        return false;
    }
  }, []);

  // onResult(error, info, answer) — error is the backend's message string
  // (or null on success), info is the ack string (e.g. "saved"/"loaded"),
  // answer the whole error message (its `code`, when it has one).
  // slot — 0-9; slot 0 is reserved for the automatic on-exit save and
  // rejected server-side for an explicit saveState call.
  var saveState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (slot, onResult) {
    pendingStateCallbackRef.current = onResult;
    sendSignaling({
      type: "savestate",
      slot: slot
    });
  }, [sendSignaling]);
  var loadState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (slot, onResult) {
    pendingStateCallbackRef.current = onResult;
    sendSignaling({
      type: "loadstate",
      slot: slot
    });
  }, [sendSignaling]);

  // Sends the FULL desired cheat list every time (not incremental) — the
  // backend resets and re-applies the whole list on every call, matching
  // how RetroArch itself re-syncs cheats. onResult(error, cheats) — cheats
  // is the list actually applied (echoed back), only meaningful on
  // success.
  var setCheats = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (cheats, onResult) {
    pendingCheatsCallbackRef.current = onResult;
    sendSignaling({
      type: "setcheats",
      cheats: cheats
    });
  }, [sendSignaling]);

  // Fire-and-forget toggle — the backend echoes an ack, but the button
  // already reflects the requested state optimistically, so there's
  // nothing to reconcile it against here.
  var setFastForward = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (enabled) {
    return sendSignaling({
      type: "fastforward",
      enabled: enabled
    });
  }, [sendSignaling]);

  // Mutually exclusive with fast-forward server-side — the caller is
  // responsible for not holding both active in its own UI state.
  var setRewind = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (enabled) {
    return sendSignaling({
      type: "rewind",
      enabled: enabled
    });
  }, [sendSignaling]);

  // Temporary debug tool (Streaming.jsx's debugTab, PS1-only) — live
  // controller-device-id switching. deviceId is libretro's raw numeric
  // device id.
  var setControllerType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (port, deviceId) {
    return sendSignaling({
      type: "setcontrollertype",
      port: port,
      deviceId: deviceId
    });
  }, [sendSignaling]);

  // LES DISQUES — combien, et lequel est monté.
  //
  // Une QUESTION, pas une capacité déclarée. Un enfant qui ne sait pas y
  // répondre (image plus ancienne que le cas 13 du runtime), un core sans
  // interface de disques, un jeu en un seul fichier : les trois rendent
  // « zéro disque », et le menu n'affiche alors aucun sélecteur. Rien à
  // tenir à jour des deux côtés, donc rien qui puisse finir par mentir.
  //
  // Le délai existe pour le premier de ces trois cas : un enfant qui ne
  // connaît pas le message ne répond RIEN du tout, et sans lui la promesse
  // resterait en suspens pour toute la durée de la partie.
  var askDisks = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message) {
    return new Promise(function (resolve) {
      var timer = setTimeout(function () {
        if (pendingDisksCallbackRef.current) {
          pendingDisksCallbackRef.current = null;
          resolve({
            count: 0,
            current: -1
          });
        }
      }, DISKS_ANSWER_TIMEOUT_MS);
      pendingDisksCallbackRef.current = function (state) {
        clearTimeout(timer);
        resolve(state);
      };
      sendSignaling(message);
    });
  }, [sendSignaling]);

  // GELER LA PARTIE, sans la décharger.
  //
  // Le core reste en mémoire, donc la reprise est instantanée : c'est toute
  // la différence avec « arrêter la session », qui libère la machine. Et
  // c'est le SEUL moment où une partie s'arrête d'elle-même — revenir jouer
  // la reprend tout seul, côté serveur.
  var setPaused = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (paused) {
    return sendSignaling({
      type: "pause",
      paused: paused
    });
  }, [sendSignaling]);

  // LE BOUTON RESET DE LA CONSOLE (chantier 13) : le jeu repart de son
  // démarrage. Sans accusé : un échec se dit dans le journal du serveur ou
  // du téléphone, jamais sur le canal d'erreur, qui couperait la partie.
  var resetConsole = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return sendSignaling({
      type: "reset"
    });
  }, [sendSignaling]);
  var queryDisks = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return askDisks({
      type: "disks"
    });
  }, [askDisks]);

  // Le serveur relit TOUJOURS l'état réel après coup et le renvoie : un
  // choix refusé revient donc de lui-même au disque précédent, sans que le
  // menu ait à deviner ce qui s'est passé.
  var changeDisk = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    return askDisks({
      type: "changedisk",
      disk: index
    });
  }, [askDisks]);
  return {
    cheatsSupported: cheatsSupported,
    rewindSupported: rewindSupported,
    fastForwardSupported: fastForwardSupported,
    initialCheats: initialCheats,
    applyStartedCapabilities: applyStartedCapabilities,
    applyRewindSupport: applyRewindSupport,
    handleMessage: handleMessage,
    saveState: saveState,
    loadState: loadState,
    setCheats: setCheats,
    setFastForward: setFastForward,
    setRewind: setRewind,
    setControllerType: setControllerType,
    queryDisks: queryDisks,
    changeDisk: changeDisk,
    setPaused: setPaused,
    resetConsole: resetConsole
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-streaming-connection.js"
/*!******************************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-streaming-connection.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRetrogamingStreamingConnection: () => (/* binding */ useRetrogamingStreamingConnection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _shared_hooks_use_gateway_webrtc_connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/hooks/use-gateway-webrtc-connection.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-gateway-webrtc-connection.js");
/* harmony import */ var _shared_hooks_use_managed_websocket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/hooks/use-managed-websocket.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-managed-websocket.js");
/* harmony import */ var _use_retrogaming_save_states_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-retrogaming-save-states.js */ "./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-save-states.js");
/* harmony import */ var _libs_serverBase_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/serverBase.js */ "./src/webapp/src/app/gameflex/libs/serverBase.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
;






// Connects to the Go backend's server-side libretro emulation, streamed
// over WebRTC — signaling here is a single WebSocket carrying
// {type: start|spectate|join|error|...} messages (see
// golang/src/internal/retrogaming/stream_session.go), NOT the REST-based
// offer/answer/ICE endpoints use-streaming-connection.js (remote-play)
// polls — the two protocols are unrelated, hence a separate hook rather
// than trying to force-fit the same one. Input goes out over a WebRTC
// DataChannel as a batch of {button, value} pairs — RETRO_BUTTON_INDEX
// (gamepadOverlay.js) already matches the libretro RETRO_DEVICE_ID_JOYPAD_*
// indices the backend's inputStateCallback expects directly, no separate
// mapping table needed.
//
// Gateway-only since P7: media/ICE/audio live entirely in the mounted
// <GatewayWebRTC> the caller owns through screenRef — the inline
// RTCPeerConnection "legacy" path this file used to carry for the smaller
// <video>-based callers died with them (les vignettes du tableau de bord
// rendent GatewayWebRTC elles aussi, voir Dashboard.jsx). The child has no
// in-process WebRTC any more either (#257): it acks with "started", never an
// "offer".
//
// Slot requests are handled by the kernel over the façade WS now (P3-P5),
// so the child-level requestslot/slotgranted/cedeslot messages this file
// used to speak are gone — the unified contract (onSwapDevice/
// onSlotGiveaway in use-retrogaming-input.js) drives reconnect instead.
//
// onRumble — called on every "rumble" message from the backend (see
// stream_session.go's rumbleStateCallback), with the core's current
// weak/strong motor strengths (0-65535 each) for THIS connection's own
// controller port. Not handled generically inside this hook (like haptics
// dispatch) because only the CALLER (use-retrogaming-input.js) knows which
// physical gamepad index, if any, this
// connection is actually driving — this hook only knows its own
// WebSocket/port, nothing about input devices.
// `onProgress` — les jalons que le CONTENEUR annonce pendant qu'il charge
// (#191) : cœur résolu, cœur chargé, ROM prête, BIOS retenu, jeu chargé,
// géométrie et cadence. Ils traversent le relais sans qu'il les connaisse, et
// ce hook ne fait que les faire suivre — il ne décide rien avec.
function useRetrogamingStreamingConnection(_ref) {
  var screenRef = _ref.screenRef,
    toast = _ref.toast,
    onRumble = _ref.onRumble,
    onProgress = _ref.onProgress,
    t = _ref.t;
  var intentionalDisconnectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  // LA REPRISE, EN SILENCE.
  //
  // Ce socket ne porte NI l'image NI la manette : la vidéo vient du gateway,
  // les boutons du DataChannel, le battement de cœur de la façade. Il ne
  // porte que les sauvegardes, les triches, les disques et la pause. Quand il
  // tombe en pleine partie — vu en vrai le 2026-09-08, `close 1006` sans
  // raison, la partie continuait parfaitement — le joueur n'a donc RIEN à
  // voir : il a juste, sans le savoir, perdu son menu.
  //
  // Avant, rien ne le rétablissait : le portillon de Streaming.jsx est un
  // verrou à sens unique qui ne se relâche que si la FAÇADE tombe. Le socket
  // restait mort jusqu'au prochain rafraîchissement de page — ce qui explique
  // pourquoi un F5 « réparait » le problème.
  //
  // On retente donc, tout seul, avec les mêmes arguments. Sans reprise de
  // contrôle forcée : quand ce socket meurt, le relais ferme aussitôt sa
  // jambe vers l'enfant, qui sait donc déjà que le propriétaire est parti
  // (`read error` dans son journal, à la seconde près) — la place est libre,
  // il n'y a rien à reprendre à personne.
  var reconnectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    args: null,
    timer: null,
    attempts: 0
  });
  var everConnectedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  // connect ne peut pas se citer lui-même dans son propre useCallback.
  var connectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var cancelReconnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    clearTimeout(reconnectRef.current.timer);
    reconnectRef.current.timer = null;
    reconnectRef.current.attempts = 0;
  }, []);
  var _useManagedWebSocket = (0,_shared_hooks_use_managed_websocket_js__WEBPACK_IMPORTED_MODULE_3__.useManagedWebSocket)(),
    wsRef = _useManagedWebSocket.wsRef,
    sendJSONRef = _useManagedWebSocket.sendJSONRef,
    openManaged = _useManagedWebSocket.openManaged,
    closeManaged = _useManagedWebSocket.closeManaged;
  var _useGatewayWebrtcConn = (0,_shared_hooks_use_gateway_webrtc_connection_js__WEBPACK_IMPORTED_MODULE_2__.useGatewayWebrtcConnection)({
      screenRef: screenRef,
      t: t,
      intentionalDisconnectRef: intentionalDisconnectRef
    }),
    isConnected = _useGatewayWebrtcConn.isConnected,
    isConnecting = _useGatewayWebrtcConn.isConnecting,
    connectionState = _useGatewayWebrtcConn.connectionState,
    connectionStats = _useGatewayWebrtcConn.connectionStats,
    setIsConnected = _useGatewayWebrtcConn.setIsConnected,
    setIsConnecting = _useGatewayWebrtcConn.setIsConnecting,
    setConnectionState = _useGatewayWebrtcConn.setConnectionState,
    setStatsMonitoring = _useGatewayWebrtcConn.setStatsMonitoring,
    handleConnectionStateChange = _useGatewayWebrtcConn.handleConnectionStateChange,
    handleStatsUpdate = _useGatewayWebrtcConn.handleStatsUpdate;

  // sendSignaling rides the managed socket's identity-guarded sender —
  // save-states extras and connect()/disconnect() all send through it.
  var sendSignaling = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (msg) {
    var _sendJSONRef$current;
    (_sendJSONRef$current = sendJSONRef.current) === null || _sendJSONRef$current === void 0 || _sendJSONRef$current.call(sendJSONRef, msg);
  }, [sendJSONRef]);
  var _useRetrogamingSaveSt = (0,_use_retrogaming_save_states_js__WEBPACK_IMPORTED_MODULE_4__.useRetrogamingSaveStates)({
      sendSignaling: sendSignaling
    }),
    cheatsSupported = _useRetrogamingSaveSt.cheatsSupported,
    rewindSupported = _useRetrogamingSaveSt.rewindSupported,
    fastForwardSupported = _useRetrogamingSaveSt.fastForwardSupported,
    initialCheats = _useRetrogamingSaveSt.initialCheats,
    applyStartedCapabilities = _useRetrogamingSaveSt.applyStartedCapabilities,
    applyRewindSupport = _useRetrogamingSaveSt.applyRewindSupport,
    handleSaveStatesMessage = _useRetrogamingSaveSt.handleMessage,
    saveState = _useRetrogamingSaveSt.saveState,
    loadState = _useRetrogamingSaveSt.loadState,
    setCheats = _useRetrogamingSaveSt.setCheats,
    setFastForward = _useRetrogamingSaveSt.setFastForward,
    setRewind = _useRetrogamingSaveSt.setRewind,
    setControllerType = _useRetrogamingSaveSt.setControllerType,
    queryDisks = _useRetrogamingSaveSt.queryDisks,
    changeDisk = _useRetrogamingSaveSt.changeDisk,
    setPaused = _useRetrogamingSaveSt.setPaused,
    resetConsole = _useRetrogamingSaveSt.resetConsole;

  // Drops THIS platform connection only — never the gateway viewer:
  // the PAGE owns the gateway viewer now (see
  // SessionStream): tearing it down from here kills the video for the
  // whole page, and the platform WS re-opening does NOT bring it back
  // (SessionStream stops retrying once attached). Confirmed live
  // 2026-08-24 in the gateway log — "viewer added" then "viewer removed"
  // ~310ms later, then no picture at all. The viewer is released by
  // GatewayWebRTC's own unmount effect, nowhere else.
  var cleanup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    closeManaged();
    setIsConnected(false);
    setIsConnecting(false);
  }, [closeManaged, setIsConnected, setIsConnecting]);

  // saveProgress — defaults to false: saving is now the owner's deliberate
  // opt-in from the exit-confirm modal (Streaming.jsx's handleExit), never
  // the automatic path (2026-08-20). Sent as an explicit "exit" message
  // BEFORE closing the socket, since the backend only infers "the owner
  // left" from the connection closing and has no other way to learn the
  // user's choice (see stream_session.go's skipAutoSave doc).
  var disconnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var saveProgress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    intentionalDisconnectRef.current = true;
    cancelReconnect();
    sendSignaling({
      type: "exit",
      saveProgress: saveProgress
    });
    cleanup();
  }, [cancelReconnect, cleanup, sendSignaling]);

  // leavePage — the page is navigating away, NOT quitting (roadmap P2):
  // mark this tab hidden (the emulator pauses once nobody is watching —
  // recomputePauseState server-side), then drop the transport WITHOUT the
  // "exit" message, so the session survives on the grace path for the
  // next device. Sending "exit" from here would mark the session
  // explicitExit (stream_session.go's "exit" case), skipping the 5-minute
  // grace and killing the child the instant this tab's WS closes —
  // exactly the behavior the reattach/"MySession" rejoin model exists to
  // avoid.
  var leavePage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    sendSignaling({
      type: "visibility",
      visible: false
    });
    intentionalDisconnectRef.current = true;
    cancelReconnect();
    cleanup();
  }, [cancelReconnect, cleanup, sendSignaling]);

  // A session is always created FIRST via a plain REST call
  // (createSession, gameflex/api/retrogaming.js — see CreateSession's doc,
  // golang/internal/retrogaming/handlers.go) — this hook only ever
  // ATTACHES to an already-existing sessionId, never starts one from
  // scratch itself. That split is what makes a copy-pasted or refreshed
  // streaming link safe: reopening the same URL re-attaches to the SAME
  // session instead of spawning a duplicate.
  //
  // role — "owner" (sends "start", server relays the STORED consoleId/
  // reference/core/username to the child — see stream_session.go's
  // HandleStreamWS, nothing about the game is sent from here anymore),
  // "join" (2nd/3rd player, own independent controller port — see
  // serveJoinerSession), or "spectate" (watch-only, no controller port,
  // unlimited — see serveSpectatorSession). All three go through the same
  // gateway-first flow; only the very first message's type differs.
  //
  // username — the logged-in user's own username (see AuthContext.jsx) —
  // not cryptographically verified by Go (a deliberate simplicity
  // tradeoff for a small trusted user base, see GAMEFLEX_JOURNAL.md).
  // Sent on "start"/"join" so the backend can enforce one active player-
  // session per user across sessions/platforms (see
  // internal/sessions.IsAlreadyPlaying) — unused for "spectate", which has
  // no per-user slot to enforce.

  var connect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (sessionId, role, username, onConnectionError) {
    var _ref2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
      _ref2$takeover = _ref2.takeover,
      takeover = _ref2$takeover === void 0 ? false : _ref2$takeover;
    // Mémorisés pour la reprise silencieuse (voir reconnectRef) : elle
    // doit refaire EXACTEMENT la même demande, sinon un joueur
    // reviendrait spectateur, ou un spectateur réclamerait une place.
    reconnectRef.current.args = [sessionId, role, username, onConnectionError, {
      takeover: takeover
    }];
    clearTimeout(reconnectRef.current.timer);
    reconnectRef.current.timer = null;
    if (wsRef.current) {
      // A previous attempt's socket may still be closing (the child
      // closed it right after a rejection error) — replace it instead
      // of silently returning: the take-over retry depends on it.
      // The old socket's own close is identity-guarded in
      // openManaged so it can't clobber the new connection's state.
      intentionalDisconnectRef.current = true;
      closeManaged();
    }
    intentionalDisconnectRef.current = false;
    setIsConnecting(true);
    setConnectionState(t("streaming.connection.state.connecting"));

    // Token in the query string, not a header: a browser cannot set one on
    // a WebSocket handshake. The relay checks it before upgrading (see
    // handleRetroStreamWS), same contract as /api/v1/facade/ws.
    //
    // LE JETON DE L'HÔTE VISÉ, pas le nôtre (#42). `wsUrl` suit déjà la
    // surcharge d'hôte : ce socket part CHEZ LUI. Y présenter notre
    // jeton, qu'il ne sait pas lire, faisait de nous un anonyme — le
    // relais refusait le `start` (« not authorized to own this
    // session ») et l'émulateur, qui n'attend que lui, ne démarrait
    // jamais. Même règle que input.service.js, qui l'avait déjà.
    openManaged((0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_5__.wsUrl)("/api/v1/retrogaming/stream/ws") + "?token=".concat(encodeURIComponent((0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_5__.streamAuthToken)() || (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_1__.getStoredToken)() || "")), {
      onOpen: function () {
        var _onOpen = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(sendJSON) {
          var _screenRef$current$vi, _screenRef$current;
          var viewerId;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                // The PAGE created the gateway viewer, once, from the
                // sessionId alone, before this socket was allowed to
                // open (Streaming.jsx gates onConnect on viewerReady) —
                // we only read its id to put on the wire. This hook
                // used to call createViewer here, which welded the
                // video's lifetime to this socket's: every role change
                // renegotiated the SDP (hasInput was role-dependent)
                // and restarted the picture, and a missed "started"
                // left the video dead for good while input still
                // flowed. See SessionStream's own doc.
                viewerId = (_screenRef$current$vi = (_screenRef$current = screenRef.current) === null || _screenRef$current === void 0 ? void 0 : _screenRef$current.viewerId) !== null && _screenRef$current$vi !== void 0 ? _screenRef$current$vi : undefined;
                if (!(role === "spectate")) {
                  _context.n = 1;
                  break;
                }
                sendJSON({
                  type: "spectate",
                  sessionId: sessionId,
                  viewerId: viewerId
                });
                return _context.a(2);
              case 1:
                if (!(role === "join")) {
                  _context.n = 2;
                  break;
                }
                sendJSON({
                  type: "join",
                  sessionId: sessionId,
                  username: username,
                  viewerId: viewerId
                });
                return _context.a(2);
              case 2:
                sendJSON({
                  type: "start",
                  sessionId: sessionId,
                  username: username,
                  viewerId: viewerId,
                  takeover: takeover
                });
              case 3:
                return _context.a(2);
            }
          }, _callee);
        }));
        function onOpen(_x) {
          return _onOpen.apply(this, arguments);
        }
        return onOpen;
      }(),
      onError: function onError() {
        if (intentionalDisconnectRef.current) {
          return;
        }
        // Une panne AVANT la première connexion est une vraie
        // erreur : il n'y a rien à l'écran, il faut le dire.
        // APRÈS, la partie tourne toujours — on se tait et on
        // reprend (voir reconnectRef).
        if (!everConnectedRef.current) {
          onConnectionError === null || onConnectionError === void 0 || onConnectionError(t("streaming.connection.errors.deviceNotReady"));
        }
      },
      onClose: function onClose() {
        if (intentionalDisconnectRef.current) {
          return;
        }
        // PAS setIsConnected(false) — ET C'EST TOUT LE SUJET.
        //
        // `isConnected` décrit le FLUX (l'état de la
        // PeerConnection, voir useGatewayWebrtcConnection), pas
        // ce socket-ci. Les éteindre ensemble faisait dire à la
        // page « En attente de la vidéo… » par-dessus une image
        // qui tournait parfaitement, puisque la vidéo vient du
        // gateway et ne dépend pas d'ici — signalé en jouant,
        // PS2 comme PSP (2026-09-08). Le flux a son propre
        // verdict, il le rend tout seul.
        setIsConnecting(false);
        if (!everConnectedRef.current || !reconnectRef.current.args) {
          return;
        }
        // Palier court puis plafonné : la place est déjà libre
        // côté enfant, la première tentative suffit presque
        // toujours. Le plafond existe pour le cas où le
        // conteneur, lui, est vraiment parti — c'est la façade
        // qui tranche ça, pas ce socket.
        var attempt = reconnectRef.current.attempts + 1;
        reconnectRef.current.attempts = attempt;
        var delay = Math.min(1000 * attempt, 5000);
        clearTimeout(reconnectRef.current.timer);
        reconnectRef.current.timer = setTimeout(function () {
          var args = reconnectRef.current.args;
          if (args) {
            var _connectRef$current;
            (_connectRef$current = connectRef.current) === null || _connectRef$current === void 0 || _connectRef$current.call.apply(_connectRef$current, [connectRef].concat(_toConsumableArray(args)));
          }
        }, delay);
      },
      onMessage: function () {
        var _onMessage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(msg) {
          var _t;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                if (!handleSaveStatesMessage(msg)) {
                  _context2.n = 1;
                  break;
                }
                return _context2.a(2);
              case 1:
                _t = msg.type;
                _context2.n = _t === "progress" ? 2 : _t === "started" ? 3 : _t === "rewindsupport" ? 4 : _t === "rumble" ? 5 : _t === "playerleft" ? 6 : _t === "playerjoined" ? 6 : _t === "takeover" ? 7 : _t === "error" ? 8 : 9;
                break;
              case 2:
                // UN JALON N'EST JAMAIS UN ÉTAT : il ne touche
                // ni la connexion, ni la reprise, ni la phase.
                // Une page qui l'ignore se comporte exactement
                // comme avant — c'est ce qui rend ce canal sûr
                // à ajouter sur un chemin de production.
                onProgress === null || onProgress === void 0 || onProgress(msg.step, msg.detail || null);
                return _context2.a(3, 10);
              case 3:
                // LA connexion a abouti — c'est à partir
                // d'ici qu'une coupure devient une reprise
                // silencieuse plutôt qu'une erreur (voir
                // reconnectRef).
                everConnectedRef.current = true;
                reconnectRef.current.attempts = 0;
                // The child's ack: session/cheats payload —
                // media is already negotiated with gateway-webrtc.
                // No attach() here anymore: the page attached
                // the video as soon as the gateway had a stream,
                // with its own retry. Attaching on THIS message
                // meant one missed "started" = no picture ever,
                // while the input channel was perfectly up.
                applyStartedCapabilities(msg);
                return _context2.a(3, 10);
              case 4:
                // Voir applyRewindSupport : la capacité se
                // mesure, elle ne s'annonce pas au démarrage.
                applyRewindSupport(msg);
                return _context2.a(3, 10);
              case 5:
                onRumble === null || onRumble === void 0 || onRumble(msg.rumbleWeak || 0, msg.rumbleStrong || 0);
                return _context2.a(3, 10);
              case 6:
                return _context2.a(3, 10);
              case 7:
                // This device was the owner until another
                // device took the session over — the child is
                // about to close this connection. The kernel
                // push already flipped the local role (P3),
                // so there is nothing to hand over here —
                // only the state guard matters.
                intentionalDisconnectRef.current = true;
                return _context2.a(3, 10);
              case 8:
                // A savestate/loadstate/setcheats error is
                // consumed by handleSaveStatesMessage above
                // (its pending-callback path) — reaching here
                // means the error belongs to the connection
                // itself.
                setIsConnecting(false);
                onConnectionError === null || onConnectionError === void 0 || onConnectionError(msg.error);
                return _context2.a(3, 10);
              case 9:
                return _context2.a(3, 10);
              case 10:
                return _context2.a(2);
            }
          }, _callee2);
        }));
        function onMessage(_x2) {
          return _onMessage.apply(this, arguments);
        }
        return onMessage;
      }()
    });
  }, [closeManaged, screenRef, t, toast, onRumble, setIsConnecting, setConnectionState, setIsConnected, handleSaveStatesMessage, applyStartedCapabilities, applyRewindSupport]);
  // Toujours la dernière version, pour que la reprise silencieuse
  // (reconnectRef) rappelle le connect courant et non celui d'un rendu périmé.
  connectRef.current = connect;

  // Un démontage ne doit pas laisser une reprise programmée derrière lui.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return cancelReconnect;
  }, [cancelReconnect]);

  // Sends one button transition (down=1/up=0) immediately over the
  // DataChannel — no polling interval needed the way the reference
  // client's keyboard/physical-gamepad handling does, since the virtual
  // controller already only fires on real press/release events.
  var sendButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (buttonId, value) {
    var _screenRef$current2;
    if (buttonId === undefined) return;
    (_screenRef$current2 = screenRef.current) === null || _screenRef$current2 === void 0 || _screenRef$current2.sendMessage(JSON.stringify([{
      button: buttonId,
      value: value
    }]));
  }, [screenRef]);

  // Sends an analog stick position — axis 0/1 matches libretro's
  // RETRO_DEVICE_INDEX_ANALOG_LEFT/RIGHT (see stream_session.go's
  // handleInput). x/y are normalized -1..1 from VirtualJoystick, scaled
  // here to the int16 range the backend's analogStates array expects
  // (RETRO_DEVICE_ID_ANALOG_X/Y), matching real libretro analog range.
  var sendAnalog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (axis, x, y) {
    var _screenRef$current3;
    (_screenRef$current3 = screenRef.current) === null || _screenRef$current3 === void 0 || _screenRef$current3.sendMessage(JSON.stringify([{
      axis: axis,
      x: Math.round(x * 32767),
      y: Math.round(y * 32767)
    }]));
  }, [screenRef]);

  // L'ÉCRAN TACTILE — la Nintendo DS et les siens.
  //
  // x/y arrivent en -1..1 sur TOUTE l'image (le haut et le bas des deux
  // écrans compris), mis à l'échelle ici comme les axes juste au-dessus.
  // On n'essaie PAS de deviner où se trouve l'écran du bas : le core le
  // sait, selon la disposition qu'il applique, et un stylet posé hors de la
  // zone tactile doit rester hors d'elle.
  var sendPointer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (x, y, pressed) {
    var _screenRef$current4;
    (_screenRef$current4 = screenRef.current) === null || _screenRef$current4 === void 0 || _screenRef$current4.sendMessage(JSON.stringify([{
      pointer: pressed ? 1 : 0,
      x: Math.round(x * 32767),
      y: Math.round(y * 32767)
    }]));
  }, [screenRef]);
  return {
    isConnected: isConnected,
    isConnecting: isConnecting,
    connectionState: connectionState,
    handleConnectionStateChange: handleConnectionStateChange,
    handleStatsUpdate: handleStatsUpdate,
    connect: connect,
    disconnect: disconnect,
    leavePage: leavePage,
    sendButton: sendButton,
    sendAnalog: sendAnalog,
    sendPointer: sendPointer,
    saveState: saveState,
    loadState: loadState,
    setFastForward: setFastForward,
    setRewind: setRewind,
    cheatsSupported: cheatsSupported,
    rewindSupported: rewindSupported,
    fastForwardSupported: fastForwardSupported,
    initialCheats: initialCheats,
    setCheats: setCheats,
    setControllerType: setControllerType,
    queryDisks: queryDisks,
    changeDisk: changeDisk,
    setPaused: setPaused,
    resetConsole: resetConsole,
    connectionStats: connectionStats,
    setStatsMonitoring: setStatsMonitoring
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/activity-store.js"
/*!*********************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/activity-store.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   markActivity: () => (/* binding */ markActivity),
/* harmony export */   takeActivityStamp: () => (/* binding */ takeActivityStamp)
/* harmony export */ });
// activity-store.js — P6 (roadmap phase-6-afk-guard.md): the minimal
// EXTERNAL store between the per-platform input hooks and StreamingShell.
// The hooks stamp it on every REAL input send (the physical pads are
// polling loops with no DOM events to hook), and the shell drains it into
// each beat to the child (`hadInput`) — the child only ever hears about
// activity a human actually caused. No React subscription needed: the shell
// reads it on a timer, nothing renders off it.
var stampedAt = 0;
function markActivity() {
  stampedAt = Date.now();
}

// takeActivityStamp returns the stamp since the last drain (0 = nothing)
// and clears it — one input burst counts once per beat at most.
function takeActivityStamp() {
  var stamp = stampedAt;
  stampedAt = 0;
  return stamp;
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/controller-layout.js"
/*!************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/controller-layout.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveControllerLayout: () => (/* binding */ resolveControllerLayout)
/* harmony export */ });
/* harmony import */ var _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/Controllers.jsx */ "./src/webapp/src/app/gameflex/controllers/Controllers.jsx");
/* harmony import */ var _controllers_presets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/presets.js */ "./src/webapp/src/app/gameflex/controllers/presets.js");
/* harmony import */ var _streamex_controllers_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../streamex/controllers/index.js */ "./src/webapp/src/app/gameflex/stream/streamex/controllers/index.js");
// resolveControllerLayout — the ONE place that decides which on-screen
// controller component a session renders, replacing 4 separate lookup
// mechanisms that used to exist: retro-gaming's RETRO_CONTROLLER_MAP (+ a
// PS1 special case switching live between two pads), streamex's own
// CONSOLE_PADS map (+ an injectable `override` prop), remote-play's single
// hardcoded <DualSense>, and PerformStream.jsx's own 4th lookup table
// (SEE_LAYOUT_CONTROLLER) for previewing a layout outside a real session.
//
// Returns { Component, label } together (not just the component) because
// retro-gaming's own controllerToggle needs BOTH derived from the exact
// same decision — a prior bug came from computing them via two separate,
// slightly different expressions that could disagree about which pad was
// actually on screen (see retrogaming/Player.jsx's own controllerToggle
// comment, still true of the logic moved here).




// override — a caller-supplied component that takes precedence over any
// lookup (streamex's own `virtualPad` prop, e.g. Streaming.jsx's keytest
// case; PerformStream.jsx's own controller-preview harness). overrideLabel
// names it for the controllerToggle text when the caller doesn't already
// know a better one (streamex's own controllerLabel prop takes precedence
// over this when both are supplied — see streamex's own call site).
//
// ps1ControllerType — retro-gaming only: PS1 is the one console
// whose pad isn't fixed by consoleId alone (see the comment this replaced,
// retrogaming/Player.jsx). Ignored by the other two platforms.
function resolveControllerLayout(_ref) {
  var _CONTROLLER_PRESETS$d;
  var session = _ref.session,
    _ref$override = _ref.override,
    override = _ref$override === void 0 ? null : _ref$override,
    _ref$overrideLabel = _ref.overrideLabel,
    overrideLabel = _ref$overrideLabel === void 0 ? null : _ref$overrideLabel,
    _ref$ps1ControllerTyp = _ref.ps1ControllerType,
    ps1ControllerType = _ref$ps1ControllerTyp === void 0 ? null : _ref$ps1ControllerTyp;
  if (override) {
    return {
      Component: override,
      label: overrideLabel
    };
  }

  // L'émulateur du téléphone est du rétro-gaming qui tourne ailleurs : même
  // console, même manette. Sans ce rapprochement, une NES s'affichait avec
  // un pad de PlayStation — le repli par défaut.
  if (session.platform === "retrogaming" || session.platform === "device") {
    var _CONTROLLER_PRESETS$p;
    // LA PS1 AVEC SA MANETTE D'ORIGINE, numérique, par défaut (décidé
    // par le porteur le 2026-10-11 : avec la DualShock, X ne passait pas
    // l'écran titre de Crash Team Racing). La DualShock ne s'affiche que
    // si le menu l'a explicitement choisie (type 517) ; tout le reste —
    // type 1, ou rien de connu — montre le pad numérique, comme ce que
    // la console a réellement. De août au 2026-10-11, c'était l'inverse.
    var presetName = session.consoleId === "ps1" ? ps1ControllerType === 517 ? "dualshock" : "ps1" : _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_0__.RETRO_CONTROLLER_PRESET_MAP[session.consoleId] || "default";
    return {
      Component: _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_0__.PRESET_COMPONENT_BY_NAME[presetName] || _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_0__.DefaultGamepad,
      label: (_CONTROLLER_PRESETS$p = _controllers_presets_js__WEBPACK_IMPORTED_MODULE_1__.CONTROLLER_PRESETS[presetName]) === null || _CONTROLLER_PRESETS$p === void 0 ? void 0 : _CONTROLLER_PRESETS$p.label
    };
  }
  if (session.platform === "streamex") {
    return {
      Component: _streamex_controllers_index_js__WEBPACK_IMPORTED_MODULE_2__.CONSOLE_PADS[session.consoleId] || null,
      label: _streamex_controllers_index_js__WEBPACK_IMPORTED_MODULE_2__.CONSOLE_PAD_LABELS[session.consoleId] || null
    };
  }

  // remote-play — no lookup needed, there is only ever one console family
  // (PS4/PS5) behind this platform.
  return {
    Component: _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_0__.DualSense,
    label: (_CONTROLLER_PRESETS$d = _controllers_presets_js__WEBPACK_IMPORTED_MODULE_1__.CONTROLLER_PRESETS.dualsense) === null || _CONTROLLER_PRESETS$d === void 0 ? void 0 : _CONTROLLER_PRESETS$d.label
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-child-session-ws.js"
/*!*********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/hooks/use-child-session-ws.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHILD_BEAT_INTERVAL_MS: () => (/* binding */ CHILD_BEAT_INTERVAL_MS),
/* harmony export */   useChildSessionWs: () => (/* binding */ useChildSessionWs)
/* harmony export */ });
/* harmony import */ var _libs_GameSocket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/GameSocket.js */ "./src/webapp/src/app/gameflex/libs/GameSocket.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_serverBase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/serverBase.js */ "./src/webapp/src/app/gameflex/libs/serverBase.js");




// useChildSessionWs — the socket a tab holds to the container that RUNS its
// session (chantier-4), reached through the kernel proxy so the page stays on
// one origin.
//
// It carries four things:
//   - PRESENCE: open means the tab is open; closed means it is gone. That is
//     the whole liveness story for a departure — nothing to announce;
//   - the BEAT, every 30s, with hadInput. The message arriving proves the
//     tab's JS still runs (a frozen tab keeps its socket open, so the socket
//     alone can never tell); hadInput proves a human is behind it. Two
//     meanings, one message, never conflated;
//   - the tab's GATEWAY VIEWER id, so the child can gate emulator input on
//     the players queue — a tab holds two identities and only it knows both;
//   - its INTENTS (P3, chantier 12): `{type:"intent", action, target}`. Still
//     declared, never inferred from a transport event — which is where nearly
//     every control bug of this project came from. They used to be POSTed
//     beside this socket, naming it by an id that travelled in the clear;
//     sent on it, they speak for this tab by construction.
//
// The RESULT of an intent comes back here too, because the state it produces
// has several recipients (the requester, the holder, every watcher) and a
// second copy travelling down another channel is exactly the divergence this
// chantier removes.
var CHILD_BEAT_INTERVAL_MS = 30000;
function childBase(sessionId) {
  return "/api/v1/sessions/".concat(encodeURIComponent(sessionId), "/child");
}
function useChildSessionWs(_ref) {
  var sessionId = _ref.sessionId,
    token = _ref.token,
    enabled = _ref.enabled,
    onState = _ref.onState,
    onResult = _ref.onResult,
    onAfk = _ref.onAfk,
    onConnect = _ref.onConnect,
    onDisconnect = _ref.onDisconnect;
  var socketIdRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  // The tab can learn its gateway viewer id BEFORE the socket opens — on
  // the phone everything is in-process, the viewer is usually ready first.
  // A lost announce silently disables input (the child gates every
  // keystroke on the pairing), so remember it and flush on open.
  var pendingViewerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  // Callbacks live in a ref so an unstable inline identity from the caller
  // cannot reconnect the socket on every render.
  var callbacksRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
    onState: onState,
    onResult: onResult,
    onAfk: onAfk,
    onConnect: onConnect,
    onDisconnect: onDisconnect
  });
  callbacksRef.current = {
    onState: onState,
    onResult: onResult,
    onAfk: onAfk,
    onConnect: onConnect,
    onDisconnect: onDisconnect
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    socketIdRef.current = null;
    socketRef.current = null;
    if (!enabled || !sessionId || !token) {
      return undefined;
    }
    var socket = (0,_libs_GameSocket_js__WEBPACK_IMPORTED_MODULE_0__.gameSocket)((0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_2__.wsUrl)("".concat(childBase(sessionId), "/v4/ws?token=").concat(encodeURIComponent(token))));
    socketRef.current = socket;
    socket.onopen = function () {
      var _callbacksRef$current, _callbacksRef$current2;
      var pending = pendingViewerIdRef.current;
      if (pending) {
        pendingViewerIdRef.current = null;
        socket.send(JSON.stringify({
          type: "viewer",
          viewerId: pending
        }));
      }
      (_callbacksRef$current = (_callbacksRef$current2 = callbacksRef.current).onConnect) === null || _callbacksRef$current === void 0 || _callbacksRef$current.call(_callbacksRef$current2);
    };
    socket.onmessage = function (event) {
      var message;
      try {
        message = JSON.parse(event.data);
      } catch (_unused) {
        return;
      }
      if (message.type === "welcome") {
        // The tab learns its OWN socket id, which is what it puts in
        // its intents. It is never told anybody else's.
        socketIdRef.current = message.socketId;
        return;
      }
      if (message.type === "state") {
        var _callbacksRef$current3, _callbacksRef$current4;
        (_callbacksRef$current3 = (_callbacksRef$current4 = callbacksRef.current).onState) === null || _callbacksRef$current3 === void 0 || _callbacksRef$current3.call(_callbacksRef$current4, message);
        return;
      }
      if (message.type === "result") {
        var _callbacksRef$current5, _callbacksRef$current6;
        (_callbacksRef$current5 = (_callbacksRef$current6 = callbacksRef.current).onResult) === null || _callbacksRef$current5 === void 0 || _callbacksRef$current5.call(_callbacksRef$current6, message);
        return;
      }
      // « TOUJOURS LÀ ? » — adressé à CE joueur, et à lui seul.
      //
      // Le child l'envoie sur cette socket-ci parce que c'est cette
      // manette-là qui n'a rien touché depuis vingt-neuf minutes. Les
      // autres jouent peut-être très bien : prévenir la tablée entière
      // est le meilleur moyen d'apprendre à ignorer le message.
      //
      // Rien à renvoyer : toucher n'importe quoi remet `hadInput` à
      // vrai dans le prochain battement, et le child efface la question
      // tout seul. Le compte à rebours n'est qu'un affichage — c'est le
      // child qui exclut, à l'échéance, et lui seul.
      if (message.type === "afk") {
        var _callbacksRef$current7, _callbacksRef$current8;
        (_callbacksRef$current7 = (_callbacksRef$current8 = callbacksRef.current).onAfk) === null || _callbacksRef$current7 === void 0 || _callbacksRef$current7.call(_callbacksRef$current8, message);
      }
    };
    socket.onclose = function () {
      var _callbacksRef$current9, _callbacksRef$current0;
      socketIdRef.current = null;
      socketRef.current = null;
      (_callbacksRef$current9 = (_callbacksRef$current0 = callbacksRef.current).onDisconnect) === null || _callbacksRef$current9 === void 0 || _callbacksRef$current9.call(_callbacksRef$current0);
    };
    return function () {
      socketRef.current = null;
      socket.close();
    };
  }, [sessionId, token, enabled]);
  var send = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (message) {
    var socket = socketRef.current;
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message));
    }
  }, []);

  // announceViewer tells the child which gateway viewer belongs to this
  // tab. Without it the child cannot tell whose keystrokes are whose, and
  // gates nothing.
  var announceViewer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (viewerId) {
    if (!viewerId) {
      return;
    }
    pendingViewerIdRef.current = viewerId;
    send({
      type: "viewer",
      viewerId: viewerId
    });
  }, [send]);
  var beat = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (hadInput) {
    return send({
      type: "beat",
      hadInput: !!hadInput
    });
  }, [send]);

  // intent — ONE request to the child, on this tab's own socket. False when
  // the socket has not said hello yet: there is nobody to ask, and the
  // caller decides whether to try again once the state lands.
  var intent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (action) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!socketIdRef.current) {
      return false;
    }
    send(target ? {
      type: "intent",
      action: action,
      target: target
    } : {
      type: "intent",
      action: action
    });
    return true;
  }, [send]);

  // socketId is read through a getter rather than returned as state: it
  // arrives one message after the socket opens, and a re-render for it would
  // reconnect nothing while making every consumer depend on the timing.
  var getSocketId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return socketIdRef.current;
  }, []);

  // MEMOISED, and that is load-bearing, not tidiness. Callers put this
  // object in effect dependency arrays; a fresh literal every render made
  // the 30s beat interval restart on every render, and the child pushes
  // state every 15s — so the interval never once reached 30s and the beat
  // NEVER FIRED. The child then evicted a present player at 90s for not
  // beating, the queue emptied, and the session ended itself a few minutes
  // later while somebody was sitting right there. Measured 2026-08-25:
  // 0 beats sent, socket closed 102s after joining.
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return {
      getSocketId: getSocketId,
      announceViewer: announceViewer,
      beat: beat,
      intent: intent,
      send: send
    };
  }, [getSocketId, announceViewer, beat, intent, send]);
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-gateway-webrtc-connection.js"
/*!******************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/hooks/use-gateway-webrtc-connection.js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGatewayWebrtcConnection: () => (/* binding */ useGatewayWebrtcConnection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;

// The connection-state slice that use-retro-streaming-connection.js and
// use-streamex-streaming-connection.js each redeclared on their own after
// GatewayWebRTC.jsx absorbed the actual RTCPeerConnection/ICE/stats
// work (docs/wiggly-rolling-plum plan) — isConnected/isConnecting/
// connectionState/connectionStats and the two callbacks GatewayWebRTC
// is wired to (onConnectionStateChange/onStatsUpdate) were byte-for-byte
// duplicated modulo streamex having quietly dropped isConnecting/
// connectionState along the way (an unintentional divergence, not a
// deliberate difference — both platforms restore the same shape here).
//
// What this hook does NOT own: the WS protocol itself (start/join/session/
// offer/ice — different on the wire per platform, see each hook's own
// doc), or when to call setIsConnecting/setConnectionState at the START of
// a connection attempt (platform-specific: retro's own connect() sets it
// before opening its WS, streamex's connect effect has no such moment) —
// both are left as plain setters for the caller to drive.
//
// intentionalDisconnectRef — optional. When provided, a disconnected/
// failed/closed state from GatewayWebRTC is ignored while the ref is
// true (retro's take-over-retry dance replaces its own WS/peer mid-flight
// and doesn't want that transient state to flip isConnected off). Omitted
// by streamex, which has no such moment — every disconnected/failed/closed
// report is applied unconditionally, same as before this extraction.
function useGatewayWebrtcConnection(_ref) {
  var screenRef = _ref.screenRef,
    t = _ref.t,
    _ref$intentionalDisco = _ref.intentionalDisconnectRef,
    intentionalDisconnectRef = _ref$intentionalDisco === void 0 ? null : _ref$intentionalDisco;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isConnected = _useState2[0],
    setIsConnected = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isConnecting = _useState4[0],
    setIsConnecting = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    connectionState = _useState6[0],
    setConnectionState = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    connectionStats = _useState8[0],
    setConnectionStats = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isStatsEnabled = _useState0[0],
    setIsStatsEnabled = _useState0[1];
  var setStatsMonitoring = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (enabled) {
    return setIsStatsEnabled(enabled);
  }, []);

  // GatewayWebRTC does its own stats polling once told to — this just
  // forwards the enabled flag and clears the last reading when turned off,
  // same as both hooks did individually before.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _screenRef$current;
    screenRef === null || screenRef === void 0 || (_screenRef$current = screenRef.current) === null || _screenRef$current === void 0 || _screenRef$current.setStatsMonitoring(isStatsEnabled);
    if (!isStatsEnabled) setConnectionStats(null);
  }, [isStatsEnabled, screenRef]);
  var handleConnectionStateChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (state) {
    switch (state) {
      case "connected":
        setIsConnected(true);
        setIsConnecting(false);
        setConnectionState(t("streaming.connection.state.connected"));
        break;
      case "disconnected":
      case "failed":
      case "closed":
        if (!(intentionalDisconnectRef !== null && intentionalDisconnectRef !== void 0 && intentionalDisconnectRef.current)) {
          setIsConnected(false);
          setIsConnecting(false);
        }
        break;
      default:
        break;
    }
  }, [t, intentionalDisconnectRef]);
  var handleStatsUpdate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (stats) {
    return setConnectionStats(stats);
  }, []);
  return {
    isConnected: isConnected,
    isConnecting: isConnecting,
    connectionState: connectionState,
    connectionStats: connectionStats,
    isStatsEnabled: isStatsEnabled,
    setIsConnected: setIsConnected,
    setIsConnecting: setIsConnecting,
    setConnectionState: setConnectionState,
    // setConnectionStats — a raw setter, same as the three above, for a
    // caller that merges its OWN data into the same stats object rather
    // than only ever replacing it wholesale via handleStatsUpdate (e.g.
    // remote-play's health-check poll merges backend debug fields
    // alongside GatewayWebRTC's own reported bitrate/fps).
    setConnectionStats: setConnectionStats,
    setStatsMonitoring: setStatsMonitoring,
    handleConnectionStateChange: handleConnectionStateChange,
    handleStatsUpdate: handleStatsUpdate
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-managed-websocket.js"
/*!**********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/hooks/use-managed-websocket.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useManagedWebSocket: () => (/* binding */ useManagedWebSocket)
/* harmony export */ });
/* harmony import */ var _libs_GameSocket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/GameSocket.js */ "./src/webapp/src/app/gameflex/libs/GameSocket.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



// useManagedWebSocket — the WebSocket plumbing retro-gaming's and
// streamex's connection hooks each hand-rolled (JSON send/parse, the
// identity guard that stops a replaced socket's onclose from clobbering
// the newer connection's state, silent teardown). Knows NOTHING about any
// platform protocol — every handler below is caller-supplied and the
// platform's own message switch stays in its own hook.
//
// openManaged — creates a WebSocket, records it as the current one, and
// wires the handlers. `sendJSON` is identity-guarded the same way: a
// superseded socket can never send again. Returns the socket so a caller
// that needs raw string frames (streamex's input tokens) can still reach
// it directly through wsRef.
//
// closeManaged — silent teardown of the CURRENT socket: handlers detached
// before close() so cleanup can't fire state transitions on a deliberate
// disconnect (retro's disconnect()/leavePage() and streamex's effect
// cleanup both rely on exactly that).
function useManagedWebSocket() {
  var wsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var sendJSONRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var openManaged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (url) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      onOpen = _ref.onOpen,
      onMessage = _ref.onMessage,
      onClose = _ref.onClose,
      onError = _ref.onError;
    var socket = (0,_libs_GameSocket_js__WEBPACK_IMPORTED_MODULE_0__.gameSocket)(url);
    wsRef.current = socket;
    var sendJSON = function sendJSON(message) {
      if (wsRef.current === socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(message));
      }
    };
    sendJSONRef.current = sendJSON;
    socket.onopen = function () {
      return onOpen === null || onOpen === void 0 ? void 0 : onOpen(sendJSON);
    };
    socket.onmessage = function (event) {
      var message = null;
      try {
        message = JSON.parse(event.data);
      } catch (_unused) {
        return;
      }
      onMessage === null || onMessage === void 0 || onMessage(message, sendJSON);
    };
    socket.onclose = function () {
      // Identity guard — a socket replaced mid-close (take-over
      // retry) must not fire the current connection's close path.
      if (wsRef.current === socket) wsRef.current = null;
      var replaced = wsRef.current !== null;
      if (!replaced) onClose === null || onClose === void 0 || onClose();
    };
    socket.onerror = function () {
      return onError === null || onError === void 0 ? void 0 : onError();
    };
    return socket;
  }, []);
  var closeManaged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    var socket = wsRef.current;
    if (!socket) return;
    wsRef.current = null;
    socket.onclose = null;
    socket.onerror = null;
    sendJSONRef.current = null;
    try {
      socket.close();
    } catch (_unused2) {
      // already closing — nothing to do
    }
  }, []);
  return {
    wsRef: wsRef,
    sendJSONRef: sendJSONRef,
    openManaged: openManaged,
    closeManaged: closeManaged
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-screen-rotation.js"
/*!********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/hooks/use-screen-rotation.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rotationSurfaceStyle: () => (/* binding */ rotationSurfaceStyle),
/* harmony export */   usePortraitViewport: () => (/* binding */ usePortraitViewport),
/* harmony export */   useScreenRotation: () => (/* binding */ useScreenRotation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_capabilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/capabilities.js */ "./src/webapp/src/app/gameflex/libs/capabilities.js");
/* harmony import */ var _shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/device-detection.js */ "./src/webapp/src/app/gameflex/shared/utils/device-detection.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;



// L'écran est-il debout ? Un appareil tenu droit est toute la raison d'être
// de la rotation, et il cesse de l'être dès qu'on le tourne pour de bon — on
// surveille donc, on ne lit pas une fois.
function usePortraitViewport() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return (0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_2__.isPortrait)();
    }),
    _useState2 = _slicedToArray(_useState, 2),
    portrait = _useState2[0],
    setPortrait = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var check = function check() {
      return setPortrait((0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_2__.isPortrait)());
    };
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return function () {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);
  return portrait;
}

/**
 * TOURNER L'ÉCRAN — un seul exemplaire, pour toutes les pages qui streament.
 *
 * Il vivait dans `Streaming.jsx`. La page de test des manettes en a besoin
 * pour la même raison — regarder un pad de travers ne sert à rien — et
 * recopier cent lignes de verrou d'orientation, de repli CSS et d'appel à
 * l'hôte aurait fait deux implémentations à tenir d'accord. On en a déjà
 * payé le prix cette nuit, deux fois.
 *
 * @param {string} requested   "auto" | "landscape" | "landscape-reverse" | "portrait-half" —
 *        la préférence de l'appareil (libs/screenOrientation.js)
 * @param {object} options
 * @param {boolean} options.enabled   faux sur une machine qu'on ne tourne pas
 * @param {object} options.surfaceRef l'élément à passer en plein écran — le
 *        verrou d'orientation d'Android l'exige
 * @param {Function} options.onFullscreen prévenir l'appelant qu'on vient de
 *        l'allumer, pour que SON interrupteur le dise
 * @returns {null|"cw"|"ccw"} le sens de la rotation de REPLI, quand le verrou
 *        a été refusé — null quand l'OS a tourné pour de bon, ou qu'il n'y a
 *        rien à tourner.
 */
function useScreenRotation(requested) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$enabled = _ref.enabled,
    enabled = _ref$enabled === void 0 ? true : _ref$enabled,
    _ref$surfaceRef = _ref.surfaceRef,
    surfaceRef = _ref$surfaceRef === void 0 ? null : _ref$surfaceRef,
    _ref$onFullscreen = _ref.onFullscreen,
    onFullscreen = _ref$onFullscreen === void 0 ? null : _ref$onFullscreen;
  // null quand l'écran ne tourne pas, sinon le SENS de la rotation de
  // repli — la transformation CSS n'est pas la même dans les deux sens.
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    rotateSurface = _useState4[0],
    setRotateSurface = _useState4[1];

  // Turn the screen, on a device someone can turn.
  //
  // Asked for by the user (2026-08-25): a phone held upright shows a
  // landscape game as a letterboxed strip, and turning the phone is not
  // always an option (a stand, a case, orientation locked at the OS level).
  //
  // Two mechanisms, deliberately in this order. The Screen Orientation API
  // is the real thing — the OS rotates, so every overlay, every menu and
  // every touch follows without us doing anything. It also refuses often:
  // Chrome only grants it in fullscreen, and iOS Safari has no lock at all.
  // Only then do we rotate the surface ourselves, which is the fallback and
  // reads like one: a transform we have to maintain.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled) {
      setRotateSurface(null);
      return undefined;
    }
    var cancelled = false;

    // DANS L'APPLICATION, L'ACTIVITÉ A DÉJÀ TOURNÉ (#406, 2026-10-19).
    //
    // L'orientation est un réglage de TOUTE l'application, posé dans
    // Réglages › Paramètres de l'application (libs/screenOrientation.js) :
    // l'activité Android pivote, et tout suit — le menu, les touches, la
    // console d'accueil. Il n'y a plus rien à demander ici, ni à remettre
    // droit en partant : c'est ce que la personne a choisi pour l'appareil.
    // La transformation CSS ne tournait que la surface vidéo (signalé le
    // 2026-09-01) ; c'est l'hôte qui le DÉCLARE (`screenOrientation`).
    var rotation = requested || "auto";
    if ((0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_1__.can)("screenOrientation")) {
      setRotateSurface(null);
      return undefined;
    }

    // Qui suit le téléphone, ou le tient debout dans une manette
    // clipsée (le demi-écran, #410) : rien à verrouiller.
    if (rotation === "auto" || rotation === "portrait-half") {
      try {
        var _window$screen, _window$screen$unlock;
        (_window$screen = window.screen) === null || _window$screen === void 0 || (_window$screen = _window$screen.orientation) === null || _window$screen === void 0 || (_window$screen$unlock = _window$screen.unlock) === null || _window$screen$unlock === void 0 || _window$screen$unlock.call(_window$screen);
      } catch (_unused) {
        // Nothing to unlock — the lock never took.
      }
      setRotateSurface(null);
      return undefined;
    }

    // TOURNER DEMANDE LE PLEIN ÉCRAN — sur Android, `orientation.lock()`
    // est refusé hors de lui. Demandé le 2026-09-05, et c'est aussi ce
    // qui rendait la rotation inopérante sur téléphone.
    //
    // On l'ALLUME, on ne l'éteint jamais : quelqu'un qui jouait déjà en
    // plein écran et qui tourne son écran ne demande pas à en sortir. Et
    // au retour à l'endroit on n'y touche pas non plus — c'est un réglage
    // à part, avec son propre interrupteur.
    if (!(0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_2__.isFullscreen)() && surfaceRef !== null && surfaceRef !== void 0 && surfaceRef.current) {
      onFullscreen === null || onFullscreen === void 0 || onFullscreen();
      (0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_2__.requestFullscreen)(surfaceRef.current)["catch"](function () {
        // Refusé (pas de geste utilisateur reconnu) : on tourne
        // quand même, la surface CSS prendra le relais.
      });
    }

    // `landscape-primary` / `landscape-secondary` sont les deux sens de
    // l'API elle-même. On ne demande plus « landscape » tout court : ça
    // laissait le navigateur choisir, donc une seule des deux positions
    // était atteignable.
    var target = rotation === "landscape-reverse" ? "landscape-secondary" : "landscape-primary";
    var direction = rotation === "landscape-reverse" ? "ccw" : "cw";
    try {
      var _window$screen2, _window$screen2$lock;
      var locking = (_window$screen2 = window.screen) === null || _window$screen2 === void 0 || (_window$screen2 = _window$screen2.orientation) === null || _window$screen2 === void 0 || (_window$screen2$lock = _window$screen2.lock) === null || _window$screen2$lock === void 0 ? void 0 : _window$screen2$lock.call(_window$screen2, target);
      if (!locking) {
        setRotateSurface(direction);
      } else {
        Promise.resolve(locking).then(function () {
          return !cancelled && setRotateSurface(null);
        })["catch"](function () {
          return !cancelled && setRotateSurface(direction);
        });
      }
    } catch (_unused2) {
      setRotateSurface(direction);
    }
    return function () {
      cancelled = true;
    };
  }, [requested, enabled]);
  return rotateSurface;
}

/**
 * La transformation de repli, prête à étaler dans un `style`.
 *
 * Vide quand l'OS a tourné pour de bon : il n'y a alors rien à corriger, et
 * ajouter une rotation par-dessus remettrait le jeu debout.
 */
function rotationSurfaceStyle(rotateSurface, isPortraitViewport) {
  if (!rotateSurface || !isPortraitViewport) {
    return {};
  }
  return {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vh",
    height: "100vw",
    transformOrigin: "top left",
    // Le décalage n'est pas le même dans les deux sens : une rotation
    // autour du coin haut-gauche sort la boîte de l'écran par la gauche
    // dans un sens et par le haut dans l'autre. On la ramène par l'axe
    // qui correspond, sinon la moitié de l'image est hors cadre.
    transform: rotateSurface === "ccw" ? "translateY(100vh) rotate(-90deg)" : "translateX(100vw) rotate(90deg)"
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-session-stats.js"
/*!******************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/hooks/use-session-stats.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSessionStats: () => (/* binding */ useSessionStats)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_capabilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/capabilities.js */ "./src/webapp/src/app/gameflex/libs/capabilities.js");
/* harmony import */ var _libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/kernelChannel.js */ "./src/webapp/src/app/gameflex/libs/kernelChannel.js");
/* harmony import */ var _libs_serverBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/serverBase.js */ "./src/webapp/src/app/gameflex/libs/serverBase.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;




// The performance-panel plumbing every platform's useXInput hook rebuilt on
// its own: a statsOpen toggle, syncing it into the connection hook's own
// getStats() sampling (setStatsMonitoring), and the server telemetry, which
// only flows while the panel is open. The only real per-platform variance is
// the topic segment; every kernel (server and phone) pushes the same
// `sessionstatus.Status`, which the caller reads via `serverStatus?.data`.
//
// PUSHED, NEVER POLLED. The panel subscribes to `status/<platform>/<session>`
// on the kernel's message centre (libs/kernelChannel.js) — the same socket as
// the session list and the launch steps — and the kernel pushes the snapshot
// at the requested pace (`every`, bounded server-side) until the panel
// closes. A missed reading on the server side simply sends nothing: the
// panel keeps the previous snapshot.
//
// renderContent — (serverStatus) => ReactNode, called on every render (not
// memoized) so it always sees the latest connectionStats/serverStatus —
// same as the plain object literal every Player.jsx built inline before.
//
// devicePower — LE TÉLÉPHONE QU'ON TIENT, dans l'application seulement
// (capacité `devicePower`) : sa température et sa batterie, que notre propre
// kernel donne (sujet `power/…`) où que tourne la partie. Le porteur, le
// 2026-10-29 : « les joueurs préfèrent avoir l'info de leur téléphone aussi
// (et en premier) » — et, dans un navigateur, ni les unes ni les pastilles.
//
// powerOnly — LES PASTILLES (2026-10-28) : à côté du bouton du menu, elles
// suivent le téléphone même panneau fermé, au pas de POWER_INTERVAL_MS — le
// seul abonnement qui vit sans panneau (setStatsMonitoring suit le panneau
// seul).
var POWER_INTERVAL_MS = 10000;
function useSessionStats(_ref) {
  var platform = _ref.platform,
    sessionId = _ref.sessionId,
    _ref$startedAt = _ref.startedAt,
    startedAt = _ref$startedAt === void 0 ? null : _ref$startedAt,
    token = _ref.token,
    setStatsMonitoring = _ref.setStatsMonitoring,
    _ref$intervalMs = _ref.intervalMs,
    intervalMs = _ref$intervalMs === void 0 ? 2000 : _ref$intervalMs,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    _ref$powerOnly = _ref.powerOnly,
    powerOnly = _ref$powerOnly === void 0 ? false : _ref$powerOnly;
  var follow = open;
  var followDevice = (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_1__.can)("devicePower") && (open || powerOnly);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    serverStatus = _useState2[0],
    setServerStatus = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    devicePower = _useState4[0],
    setDevicePower = _useState4[1];

  // Mirrors the caller's own open state into the connection hook's own
  // getStats polling (same pattern every platform used) — the panel's
  // open/closed state itself now lives with the caller (Streaming.jsx's
  // FloatingPanel switch is the single source of truth), not here.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setStatsMonitoring(open);
  }, [open, setStatsMonitoring]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!follow || !sessionId) {
      setServerStatus(null);
    }
  }, [follow, sessionId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!followDevice || !sessionId) {
      setDevicePower(null);
    }
  }, [followDevice, sessionId]);

  // LE JETON VA AVEC L'ADRESSE. `kernelTarget(null, …)` vise le kernel de
  // la page (`serverOrigin`, qui suit la surcharge d'une page fédérée) :
  // c'est donc le jeton de NOTRE COMPTE LÀ-BAS qu'il faut présenter. Le
  // nôtre y était refusé : panneau de performances vide sur une partie
  // fédérée, et un canal qui réessayait sans fin tant qu'il restait ouvert
  // (relevé le 2026-10-09).
  var hostToken = (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_3__.streamAuthToken)() || token;
  var channel = (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_2__.useKernelChannel)(follow && sessionId && (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_2__.kernelReachable)(hostToken) ? (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_2__.kernelTarget)(null, hostToken) : null);

  // `{data}` — the envelope the panel already unwraps, kept so the three
  // platform hooks read the snapshot exactly as before.
  (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_2__.useKernelTopic)(channel, follow && sessionId ? "status/".concat(platform, "/").concat(sessionId) : null, {
    every: intervalMs
  }, function (status) {
    return setServerStatus({
      success: true,
      data: status
    });
  });

  // CHEZ NOUS, avec NOTRE jeton — pas celui de l'hôte (`homeOrigin`, comme
  // SessionPool). La clé dit la partie, son heure de départ comprise : le
  // kernel garde le départ de la mesure, et un identifiant réutilisé le
  // lendemain repart du sien.
  var homeChannel = (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_2__.useKernelChannel)(followDevice && sessionId && (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_2__.kernelReachable)(token) ? {
    origin: (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_3__.homeOrigin)(),
    token: token || ""
  } : null);
  (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_2__.useKernelTopic)(homeChannel, followDevice && sessionId ? "power/".concat(platform, "/").concat(sessionId, "@").concat(startedAt || "") : null, {
    every: open ? intervalMs : POWER_INTERVAL_MS
  }, function (power) {
    return setDevicePower(power);
  });
  return {
    serverStatus: serverStatus,
    devicePower: devicePower
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/switches-store.js"
/*!*********************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/switches-store.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSwitchesStore: () => (/* binding */ createSwitchesStore)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
// LE MAGASIN DES INTERRUPTEURS D'UNE PAGE DE STREAMING.
//
// Un magasin externe, et non un `useState` — parce que le menu vit dans un
// OFFCANVAS. `offcanvas.open` range un ÉLÉMENT React construit une fois, dont
// les props sont un instantané gelé : un interrupteur qui lit une valeur
// passée en prop ne bouge jamais, et le `setValues` qu'il appelle écrit dans
// une fermeture périmée. Le symptôme est toujours le même — « le bouton reste
// sur off » — et il est revenu sur la page de test des manettes le
// 2026-09-09, faute d'avoir réutilisé ce qui existait ici.
//
// Avec un magasin, le panneau s'ABONNE (`useSyncExternalStore`) au lieu de
// recevoir : il se redessine tout seul, où qu'il soit monté.

// context.offcanvas.open(<FloatingPanel .../>, opts) captures that element
// (and its props) ONCE, at click time, then portals it from a totally
// different point in the React tree (Skeleton's own root, not
// StreamingShell's) — StreamingShell re-rendering with a new `switches`
// value never reaches an already-open panel, since its props are frozen to
// whatever they were when `.open()` was called. Same fix already used
// elsewhere in this app for exactly this class of problem
// (libs/gamepadPreferences.js's useSyncExternalStore) — a plain external
// store both StreamingShell and FloatingPanel subscribe to independently,
// so FloatingPanel re-renders itself from the inside on every toggle
// regardless of whether its own props ever change.
function createSwitchesStore(initial) {
  var state = initial;
  var listeners = new Set();
  return {
    getSnapshot: function getSnapshot() {
      return state;
    },
    // MERGES, like React's own setState with an object — every caller
    // already assumed that and passed only the keys it meant to change.
    // Replacing instead wiped the rest of the panel: the effect that
    // gives a player back the controller passes just
    // {isControllerVisible, isChainButtons300}, so becoming a player
    // dropped isMuted, isResourceMonitoringVisible, the rumble
    // preferences... — with isMuted gone, the <audio> element kept the
    // muted state ontrack had set imperatively and the switch could no
    // longer turn it off ("video but no sound even when unmuting",
    // reported live 2026-08-24).
    setValues: function setValues(next) {
      var patch = typeof next === "function" ? next(state) : next;
      state = _objectSpread(_objectSpread({}, state), patch);
      listeners.forEach(function (listener) {
        return listener();
      });
    },
    subscribe: function subscribe(listener) {
      listeners.add(listener);
      return function () {
        return listeners["delete"](listener);
      };
    }
  };
}

/***/ },

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

/***/ "./src/webapp/src/app/gameflex/stream/streamex/controllers/PlayStation3.jsx"
/*!**********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/streamex/controllers/PlayStation3.jsx ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayStation3Pad)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-buttons.js */ "./src/webapp/src/app/gameflex/stream/streamex/controllers/profile-buttons.js");
/* harmony import */ var _shared_utils_log_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/log-store.js */ "./src/webapp/src/app/gameflex/shared/utils/log-store.js");
/* harmony import */ var _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../controllers/Controllers.jsx */ "./src/webapp/src/app/gameflex/controllers/Controllers.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
// components/PlayStation3.jsx — the PS3 input surface for the unified
// streamex page: the GameFlex DualShock3 (controllers/DualShock3, same
// virtual-pad system as retro-gaming and remote-play) wired to streamex's
// wire protocol (kd/ku + st,<l|r>,x,y). With the uinput virtual gamepad
// active (the default), RPCS3 gets REAL analog sticks; the server falls
// back to keyboard emulation if /dev/uinput is missing. Mirrors
// NintendoSwitch.jsx — only the mappings differ.
//
// Contract (props from Streaming.jsx): profileButtons from /profile.json
// ({id,label,key} — gp:* codes when the virtual gamepad is active), enabled
// (serverRole === "player"), sendInput(payload) — the page owns the socket
// and the role gating, this component only ever decides WHICH message a
// button/input means.






// DualShock3 button name → /profile.json button id (the preset names in
// stream/onscreen/Controllers.jsx vs the RPCS3 profile — ids are
// the same in keyboard and evdev mode, only the key codes differ).

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
function PlayStation3Pad(_ref) {
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__.DualShock3, {
    onButtonDown: handleButtonDown,
    onButtonUp: handleButtonUp,
    onAnalogMove: handleAnalogMove,
    canDrawButton: canDrawButton
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/streamex/controllers/Xbox.jsx"
/*!**************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/streamex/controllers/Xbox.jsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ XboxPad)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-buttons.js */ "./src/webapp/src/app/gameflex/stream/streamex/controllers/profile-buttons.js");
/* harmony import */ var _shared_utils_log_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/log-store.js */ "./src/webapp/src/app/gameflex/shared/utils/log-store.js");
/* harmony import */ var _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../controllers/Controllers.jsx */ "./src/webapp/src/app/gameflex/controllers/Controllers.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
// components/Xbox.jsx — the Xbox input surface for the unified streamex
// page: the GameFlex Xbox pad (controllers/Xbox, 360-style layout) wired
// to streamex's wire protocol (kd/ku + st,<l|r>,x,y via uinput on the
// server), plus keyboard pass-through and Gamepad API mapping. The Xbox
// runtime (streamex + xemu) serves the SAME pad profile as the Switch's
// SDL mode (see defaultSwitchPadProfile in streamex/cmd/streamex/main.go),
// so the profile ids below are the same gp:* family as NintendoSwitch.jsx —
// only the button NAMES differ (Xbox diamond, LB/RB/LT/RT, BACK/START).
//
// Contract (props from Streaming.jsx): profileButtons from /profile.json
// ({id,label,key}), enabled (serverRole === "player"), sendInput(payload).





// Xbox pad button name → /profile.json button id (gp:* family — the xemu
// container serves defaultSwitchPadProfile, same ids as the Switch pad).

var BUTTON_TO_PROFILE_ID = {
  A: "a",
  B: "b",
  X: "x",
  Y: "y",
  LB: "l",
  RB: "r",
  LT: "zl",
  RT: "zr",
  START: "plus",
  // Le gabarit Xbox dessine `SELECT` ; cette table n'attendait que `BACK`,
  // et ce bouton-là ne partait donc jamais. Même défaut que sur la Switch,
  // même correctif : les deux noms mènent au même identifiant de profil.
  BACK: "minus",
  SELECT: "minus",
  // Le gabarit Xbox dessine `LS`/`RS` (le clic des sticks) ; cette table
  // n'attendait que `L3`/`R3`, donc ces deux boutons n'envoyaient RIEN —
  // exactement le défaut de BACK/SELECT juste au-dessus, trouvé de la même
  // façon (le 2026-09-10, en cherchant pourquoi un TOUCHPAD sans
  // destination était dessiné sur le pad PS5). Le profil, lui, a bien
  // `lstick`/`rstick`.
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
// SERVER drives the uinput virtual gamepad (real analog via SDL2).
var STICK_WHICH = {
  LEFT_STICK: "l",
  RIGHT_STICK: "r"
};
function XboxPad(_ref) {
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__.Xbox, {
    onButtonDown: handleButtonDown,
    onButtonUp: handleButtonUp,
    onAnalogMove: handleAnalogMove,
    canDrawButton: canDrawButton
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/streamex/controllers/index.js"
/*!**************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/streamex/controllers/index.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONSOLE_GAMEPAD_ORDER: () => (/* binding */ CONSOLE_GAMEPAD_ORDER),
/* harmony export */   CONSOLE_PADS: () => (/* binding */ CONSOLE_PADS),
/* harmony export */   CONSOLE_PAD_LABELS: () => (/* binding */ CONSOLE_PAD_LABELS)
/* harmony export */ });
/* harmony import */ var _NintendoSwitch_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NintendoSwitch.jsx */ "./src/webapp/src/app/gameflex/stream/streamex/controllers/NintendoSwitch.jsx");
/* harmony import */ var _PlayStation3_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayStation3.jsx */ "./src/webapp/src/app/gameflex/stream/streamex/controllers/PlayStation3.jsx");
/* harmony import */ var _PlayStation4_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayStation4.jsx */ "./src/webapp/src/app/gameflex/stream/streamex/controllers/PlayStation4.jsx");
/* harmony import */ var _Xbox_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Xbox.jsx */ "./src/webapp/src/app/gameflex/stream/streamex/controllers/Xbox.jsx");





// The console → on-screen-pad lookup streamex's own Player.jsx used to
// declare locally — moved here so stream/shared/controller-layout.js (the
// single resolver every platform's Player.jsx now goes through) can import
// it without reaching into Player.jsx itself.
var CONSOLE_PADS = {
  "switch": _NintendoSwitch_jsx__WEBPACK_IMPORTED_MODULE_0__["default"],
  // La Switch 2 (#644) : les mêmes boutons que la Switch, et le même profil
  // (profiles.go range toute console inconnue sous celui de la Switch).
  switch2: _NintendoSwitch_jsx__WEBPACK_IMPORTED_MODULE_0__["default"],
  ps3: _PlayStation3_jsx__WEBPACK_IMPORTED_MODULE_1__["default"],
  // La PS4 a SA manette depuis le 2026-09-08 : elle empruntait celle de la
  // PS3, qui n'a ni SHARE ni OPTIONS — le joueur voyait donc SELECT et
  // START, des boutons qui ne sont pas sur sa manette. Voir
  // PlayStation4.jsx, y compris pour pourquoi le pavé tactile n'y est
  // toujours pas dessiné.
  ps4: _PlayStation4_jsx__WEBPACK_IMPORTED_MODULE_2__["default"],
  // La PS5 reprend le pad de la PS4, et ce n'est pas un pis-aller : le
  // gabarit qu'il dessine s'appelle `dualsense` et se présente lui-même
  // comme « PS4 (DualShock 4) / PS5 (DualSense) » (presets.js) — c'est le
  // MÊME dessin pour les deux, boutons Create/Options compris, qui sont des
  // icônes (`•••`, `≡`) et non des mots, donc justes de part et d'autre.
  // Et PlayStation4.jsx mappe déjà SHARE/OPTIONS sur `select`/`start`,
  // exactement les identifiants que `ps5.json` déclare (il hérite du profil
  // PS3, comme celui de la PS4). Tout ce qui s'affiche envoie quelque chose.
  //
  // Sans cette ligne, `CONSOLE_PADS[...]` rendait null : le jeu tournait, la
  // manette 1/4 était bien prise, et l'écran n'avait aucun pad — le
  // commutateur du menu disait « Visible » et ne montrait rien (2026-09-10,
  // même famille que la Wii U juste en dessous).
  ps5: _PlayStation4_jsx__WEBPACK_IMPORTED_MODULE_2__["default"],
  xbox: _Xbox_jsx__WEBPACK_IMPORTED_MODULE_3__["default"],
  // La Xbox 360 a le même profil que la Xbox (xbox360.json déclare les
  // mêmes identifiants, profiles.go les range sous la même manette) — et
  // le dessin est déjà celui d'une manette de 360.
  xbox360: _Xbox_jsx__WEBPACK_IMPORTED_MODULE_3__["default"],
  // Les ports PC (chantier 40) : tous lisent une manette SDL moderne, que
  // leur image mappe comme celle de la Xbox 360 (profiles.go les range
  // sous la même manette).
  ports: _Xbox_jsx__WEBPACK_IMPORTED_MODULE_3__["default"],
  // La Wii U emprunte la manette de la Switch, et ce n'est pas un
  // à-peu-près : son GamePad porte les MÊMES boutons (A/B/X/Y aux mêmes
  // positions, L/R, ZL/ZR, +/-, deux sticks cliquables), et surtout
  // wiiu.json déclare exactement les mêmes identifiants que switch.json
  // (vérifié fichier contre fichier). Sans cette ligne, `CONSOLE_PADS[...]`
  // rendait null et la console n'avait AUCUNE manette à l'écran — signalé
  // dès la première partie Wii U (2026-09-08).
  wiiu: _NintendoSwitch_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]
};

// What to CALL the pad in the settings panel ("Show the … controller on
// screen"). Keyed by console — except when the caller supplies its own pad
// (PerformStream previewing one specific layout), in which case it names it
// via controllerLabel/resolveControllerLayout's own overrideLabel instead.
var CONSOLE_PAD_LABELS = {
  "switch": "Nintendo Switch",
  switch2: "Nintendo Switch 2",
  ps3: "PS3 (DualShock 3)",
  ps4: "PS4 (DualShock 4)",
  ps5: "PS5 (DualSense)",
  xbox: "Xbox (360)",
  xbox360: "Xbox 360",
  ports: "Xbox",
  wiiu: "Wii U (GamePad)"
};

// Gamepad API standard-layout index → this console's profile button id.
// Lived as a private GAMEPAD_ORDER const inside each pad component, which is
// also where the polling lived — see use-streamex-physical-input.js for why
// both had to leave. Keyed by console so the hook can be mounted by the
// session, not by the drawing.
//
// Index 16 is the standard layout's "guide" button (PS / Home / Xbox). Only
// the PS3 profile has anything to bind it to (`ps`); switch.json and
// xbox.json have no home/guide entry at all, so their tables stop at 15 —
// mapping it there would name a button the emulator does not know.
var STANDARD_FACE_TO_DPAD = ["dup", "ddown", "dleft", "dright"];

// Les deux SEULS ordres qui existent, écrits une fois.
//
// Ils étaient recopiés par console — cinq tableaux pour deux contenus — et
// c'est ce genre de table qu'on oublie d'allonger : la PS5 n'y était pas, et
// une manette physique branchée sur une session PS5 n'envoyait rien (le
// 2026-09-10, en même temps que trois autres listes du même acabit côté
// serveur). Une console qui partage le vocabulaire d'une autre partage
// désormais la MÊME constante, et l'oubli se voit.
var DUALSHOCK_ORDER = ["cross", "circle", "square", "triangle", "l1", "r1", "l2", "r2", "select", "start", "l3", "r3"].concat(STANDARD_FACE_TO_DPAD, ["ps"]);

// La Switch, la Wii U et la Xbox déclarent les mêmes identifiants (vérifié
// fichier contre fichier : switch.json, wiiu.json, xbox.json).
var ABXY_ORDER = ["a", "b", "x", "y", "l", "r", "zl", "zr", "minus", "plus", "lstick", "rstick"].concat(STANDARD_FACE_TO_DPAD);
var CONSOLE_GAMEPAD_ORDER = {
  "switch": ABXY_ORDER,
  switch2: ABXY_ORDER,
  ps3: DUALSHOCK_ORDER,
  ps4: DUALSHOCK_ORDER,
  ps5: DUALSHOCK_ORDER,
  xbox: ABXY_ORDER,
  xbox360: ABXY_ORDER,
  ports: ABXY_ORDER,
  wiiu: ABXY_ORDER
};

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/streamex/hooks/use-streamex-input.js"
/*!*********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/streamex/hooks/use-streamex-input.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStreamexInput: () => (/* binding */ useStreamexInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _use_streamex_streaming_connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-streamex-streaming-connection.js */ "./src/webapp/src/app/gameflex/stream/streamex/hooks/use-streamex-streaming-connection.js");
/* harmony import */ var _libs_serverBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/serverBase.js */ "./src/webapp/src/app/gameflex/libs/serverBase.js");
/* harmony import */ var _shared_hooks_use_session_stats_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/hooks/use-session-stats.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-session-stats.js");
/* harmony import */ var _shared_controller_layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/controller-layout.js */ "./src/webapp/src/app/gameflex/stream/shared/controller-layout.js");
/* harmony import */ var _shared_activity_store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/activity-store.js */ "./src/webapp/src/app/gameflex/stream/shared/activity-store.js");
/* harmony import */ var _KeyTestPad_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../KeyTestPad.jsx */ "./src/webapp/src/app/gameflex/stream/streamex/KeyTestPad.jsx");
/* harmony import */ var _controllers_presets_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../controllers/presets.js */ "./src/webapp/src/app/gameflex/controllers/presets.js");
/* harmony import */ var _controllers_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../controllers/index.js */ "./src/webapp/src/app/gameflex/stream/streamex/controllers/index.js");
/* harmony import */ var _use_streamex_physical_input_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./use-streamex-physical-input.js */ "./src/webapp/src/app/gameflex/stream/streamex/hooks/use-streamex-physical-input.js");
/* harmony import */ var _keyboard_text_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../keyboard-text.js */ "./src/webapp/src/app/gameflex/stream/streamex/keyboard-text.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;






// v1 (chantier-3): the client-side input priority gate is gone. It existed
// because every tab of a player kept its role, so the page had to decide
// locally which one was driving. Input is now gated where it belongs —
// server-side, on who holds the pad — and a pad is taken by an explicit
// POST, never inferred here.






// Une touche tapée par l'entrée « Clavier » : tenue ce temps-là, puis lâchée
// ce temps-là avant la suivante — plus qu'une image à 30 images/s.

var TYPING_STEP_MS = 40;

// useStreamexInput — the streamex half of the unified Streaming page's
// per-platform dispatcher (see stream/shared/hooks/use-streaming-input.js).
// Same pattern as use-retrogaming-input.js.
//
// preview — the keytest preset name (P2 §5, KeytestLive): the keytest pad
// decision lives HERE, not in Streaming.jsx's dispatcher. The wire
// consoleId is lowercase "keytest" (catalog.go's NewKeyTest); with a
// preset the pad renders that preset's controller on top of the input
// layer, without one (a Dashboard joiner) it renders the bare KeyTestPad.
// screenRef — the PAGE's one gateway viewer (Streaming.jsx owns it, see
// SessionStream's doc): input goes through it and its viewerId rides the WS
// query, but this hook never creates one of its own anymore.
/**
 * LA MÊME SIGNATURE POUR LES TROIS PLATEFORMES.
 *
 *     useXInput({ screenRef, session, context, t, options })
 *
 * Les quatre premiers sont ce dont TOUTE plateforme a besoin : la surface
 * vidéo, la session, le contexte Skeleton, la traduction. Ce qui n'appartient
 * qu'à l'une descend dans `options`, jamais à plat à côté d'eux.
 *
 * Pourquoi cette règle : à plat, chaque hook affichait sa propre liste — neuf
 * paramètres pour le rétro, six pour streamex, quatre pour remote-play — et
 * l'appelant devait savoir laquelle avant d'appeler. Le dispatcher portait
 * donc trois lignes différentes pour trois hooks censés être
 * interchangeables, et ajouter un besoin à l'un obligeait à relire les trois.
 * Avec `options`, la ligne d'appel est la même partout et seul son contenu
 * change — ce qui est exactement ce qu'on veut dire.
 *
 * Cette règle vaut pour tout hook ou toute lib PARTAGÉE entre plateformes,
 * pas seulement pour ces trois-là.
 */
function useStreamexInput(_ref) {
  var _CONTROLLER_PRESETS$p;
  var screenRef = _ref.screenRef,
    session = _ref.session,
    t = _ref.t,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? {} : _ref$options;
  // drivesPad — the child's answer to "do my keys reach a pad?". It differs
  // from !isWatching during a loan only (#274), and a page without loans
  // (KeyTest) need not pass it.
  var _options$isWatching = options.isWatching,
    isWatching = _options$isWatching === void 0 ? false : _options$isWatching,
    _options$drivesPad = options.drivesPad,
    drivesPad = _options$drivesPad === void 0 ? !isWatching : _options$drivesPad,
    _options$preview = options.preview,
    preview = _options$preview === void 0 ? null : _options$preview;
  var _useAuth = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_1__.useAuth)(),
    token = _useAuth.token;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    profileButtons = _useState2[0],
    setProfileButtons = _useState2[1];
  // The page says when to connect (onConnect): once this tab's gateway
  // viewer exists, or after its deadline (StreamingShell's gate).
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    connectRequested = _useState4[0],
    setConnectRequested = _useState4[1];

  // LA SOURIS — remise en service le 2026-09-09.
  //
  // Elle était partie sans bruit à la refonte (commit 5744bc8) : le
  // serveur écoute toujours `md`/`mu`/`mr`/`ms`
  // (streamex/cmd/streamex/main.go), mais plus personne ne les envoyait —
  // il n'en restait qu'une mention dans un commentaire. Les émulateurs qui
  // demandent un pointeur perdaient donc leur seul moyen d'être pilotés :
  // l'écran du GamePad Wii U, le tableau de bord Xbox, les menus de RPCS3
  // et de Eden. Trouvée par l'audit des affectations perdues, pas par un
  // test — rien ne la couvrait.
  //
  // Le protocole envoie un DÉPLACEMENT (`mr,<dx>,<dy>`), pas une position :
  // l'émulateur a son propre curseur, et lui pousser des coordonnées d'une
  // fenêtre de navigateur ne voudrait rien dire.
  var lastPointerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: null,
    y: null,
    dx: 0,
    dy: 0
  });
  // Le doigt posé sur un ÉCRAN TACTILE (useTouchScreen) : le bouton gauche
  // n'est enfoncé qu'une fois, au premier contact, et relâché une fois.
  var touchDownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  // La décision du pad KeyTest vit dans KeyTestPad.jsx (useKeytestPad) : le
  // téléphone sert la même console sans passer par ce hook, et une décision
  // enfermée ici lui serait restée invisible.
  var isKeyTest = session.consoleId === "keytest";
  var keytestPad = (0,_KeyTestPad_jsx__WEBPACK_IMPORTED_MODULE_7__.useKeytestPad)(preview);
  var virtualPad = isKeyTest ? keytestPad : null;
  var controllerLabel = isKeyTest ? preview ? ((_CONTROLLER_PRESETS$p = _controllers_presets_js__WEBPACK_IMPORTED_MODULE_8__.CONTROLLER_PRESETS[preview]) === null || _CONTROLLER_PRESETS$p === void 0 ? void 0 : _CONTROLLER_PRESETS$p.label) || preview : t("streaming.controller.keyTest") : null;
  var _useStreamexStreaming = (0,_use_streamex_streaming_connection_js__WEBPACK_IMPORTED_MODULE_2__.useStreamexStreamingConnection)({
      screenRef: screenRef,
      session: session,
      t: t,
      drivesPad: drivesPad,
      enabled: connectRequested
    }),
    isConnected = _useStreamexStreaming.isConnected,
    isConnecting = _useStreamexStreaming.isConnecting,
    connectionState = _useStreamexStreaming.connectionState,
    connectionStats = _useStreamexStreaming.connectionStats,
    setStatsMonitoring = _useStreamexStreaming.setStatsMonitoring,
    handleConnectionStateChange = _useStreamexStreaming.handleConnectionStateChange,
    handleStatsUpdate = _useStreamexStreaming.handleStatsUpdate,
    sendMessage = _useStreamexStreaming.sendMessage;

  // L'écran tactile (voir `touch` plus bas). STABLE : useTouchScreen se
  // rattache à la vidéo quand `send` change, et cette page se redessine
  // plusieurs fois par seconde (les relevés).
  var sendTouch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (x, y, pressed) {
    var scale = function scale(v) {
      return Math.round((v + 1) / 2 * 10000);
    };
    sendMessage("ma,".concat(scale(x), ",").concat(scale(y)));
    if (pressed !== touchDownRef.current) {
      touchDownRef.current = pressed;
      sendMessage(pressed ? "md,1" : "mu,1");
    }
  }, [sendMessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!session.id) {
      return;
    }
    var cancelled = false;
    fetch((0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_3__.absoluteApiUrl)("/api/v1/streamex/".concat(session.id, "/profile.json"))).then(function (response) {
      return response.json();
    }).then(function (profile) {
      if (!cancelled) {
        setProfileButtons(profile.buttons || []);
      }
    })["catch"](function () {});
    return function () {
      cancelled = true;
    };
  }, [session.id]);

  // P6 — the pads only send on CHANGE (no continuous neutral polling —
  // see controllers/Xbox.jsx's own stick/button state guards), so a
  // stamp here is a real human touch; the shell drains the store onto
  // the façade WS at most once a minute. onChainWindowChange keeps the
  // raw sendMessage on purpose: a settings change, not an input.
  var sendInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (payload, options) {
    // Only the tab holding the priority drives the pad (C2-P4d).
    // A RELEASE ("ku,") always goes through, even from a tab that
    (0,_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_6__.markActivity)();
    sendMessage(payload, options);
  }, [sendMessage]);

  // LE CLAVIER DU TÉLÉPHONE (#420). Un téléphone n'a pas de clavier à
  // brancher, et la fenêtre « Create Profile » de Xenia ne se remplit qu'au
  // clavier : sans lui, pas de profil, et pas de sauvegarde sur la Xbox 360.
  // L'entrée « Clavier » du menu tape ici ce qu'on a écrit dans son champ,
  // touche par touche, puis Entrée.
  //
  // Chaque touche tenue un instant, puis un instant entre deux : un
  // émulateur qui lit l'état du clavier une fois par image ne verrait pas
  // une touche enfoncée et relâchée entre deux lectures.
  var typeText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(text) {
      var _keysOfText, keys, missing, press, pause, _i, _arr, _arr$_i, code, shift;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _keysOfText = (0,_keyboard_text_js__WEBPACK_IMPORTED_MODULE_11__.keysOfText)(text), keys = _keysOfText.keys, missing = _keysOfText.missing;
            press = function press(code, down) {
              return sendInput("".concat(down ? "kd" : "ku", ",").concat(code), {
                ordered: true
              });
            };
            pause = function pause() {
              return new Promise(function (resolve) {
                return setTimeout(resolve, TYPING_STEP_MS);
              });
            };
            _i = 0, _arr = [].concat(_toConsumableArray(keys), [{
              code: "Enter",
              shift: false
            }]);
          case 1:
            if (!(_i < _arr.length)) {
              _context.n = 4;
              break;
            }
            _arr$_i = _arr[_i], code = _arr$_i.code, shift = _arr$_i.shift;
            if (shift) {
              press("ShiftLeft", true);
            }
            press(code, true);
            _context.n = 2;
            return pause();
          case 2:
            press(code, false);
            if (shift) {
              press("ShiftLeft", false);
            }
            _context.n = 3;
            return pause();
          case 3:
            _i++;
            _context.n = 1;
            break;
          case 4:
            return _context.a(2, {
              missing: missing
            });
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [sendInput]);

  // The physical controller and the keyboard, read by the SESSION rather
  // than by the on-screen pad. They used to live inside the pad component,
  // which the page unmounts as soon as a real controller is connected — so
  // plugging one in silenced it (2026-08-25). KeyTest is excluded: its own
  // pad reads the Gamepad API with a richer table (chords, analog triggers)
  // and is always on screen, so it would double every press.
  (0,_use_streamex_physical_input_js__WEBPACK_IMPORTED_MODULE_10__.useStreamexPhysicalInput)({
    enabled: drivesPad && !isKeyTest,
    order: _controllers_index_js__WEBPACK_IMPORTED_MODULE_9__.CONSOLE_GAMEPAD_ORDER[session.consoleId],
    profileButtons: profileButtons,
    sendInput: sendInput
  });

  // onConnect OPENS THE SOCKET, as on the other platforms. It used to be a
  // no-op: the socket opened by itself as soon as the play link arrived —
  // which happened to be after the gateway viewer existed. Without the link
  // (P5) it opened at once, BEFORE the viewer, and the child, which routes
  // a socket's input by the viewer it announced, dropped all of it (found
  // 2026-10-09). Error/close just clean up (a façade WS drop must not kill
  // the session for the others).
  // A façade WS drop must not kill the session for the others — and must
  // not kill the picture either: the PAGE owns the gateway viewer now (see
  // SessionStream): tearing it down from here kills the video for the
  // whole page, and the platform WS re-opening does NOT bring it back
  // (SessionStream stops retrying once attached). Confirmed live
  // 2026-08-24 in the gateway log — "viewer added" then "viewer removed"
  // ~310ms later, then no picture at all. The viewer is released by
  // GatewayWebRTC's own unmount effect, nowhere else.
  var onConnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return setConnectRequested(true);
  }, []);
  var onDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {}, []);

  // P4 — contract actions the shell triggers; the request messages ride
  // the child, as intents (sessionSend), so the hook only carries the platform-
  // side follow-ups.
  var onSlotGiveaway = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // No-op by design: the queue moved the seat, and this tab's socket
    // stays as it is — nothing to tear down (unlike retro's relay, the
    // child never needs a cedeslot message from this side anymore).
  }, []);
  var hasFreeSlots = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _session$openSlots;
    return (_session$openSlots = session.openSlots) !== null && _session$openSlots !== void 0 ? _session$openSlots : 0;
  }, [session.openSlots]);
  var onMonitoringResource = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (open) {
    var powerOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var _useSessionStats = (0,_shared_hooks_use_session_stats_js__WEBPACK_IMPORTED_MODULE_4__.useSessionStats)({
        platform: "streamex",
        sessionId: session.id,
        startedAt: session.startedAt,
        // LE JETON MANQUAIT, et la route l'exige : la requête partait sans
        // en-tête, revenait en 401, et le panneau gardait ses tirets.
        token: token,
        setStatsMonitoring: setStatsMonitoring,
        intervalMs: 5000,
        open: open,
        powerOnly: powerOnly
      }),
      serverStatus = _useSessionStats.serverStatus,
      devicePower = _useSessionStats.devicePower;
    // `.data` — ET PAS L'ENVELOPPE. Le kernel répond `{success, data}` :
    // étaler la réponse entière donnait un objet à deux clés dont aucune
    // n'est celle que le panneau lit, donc un tiret sur CHAQUE ligne
    // mesurée alors que la mesure arrivait bel et bien (constaté le
    // 2026-09-09 sur une session PS4). Le rétro déballait déjà ; les deux
    // autres non.
    // `device` — le téléphone qu'on tient, quand la partie tourne
    // ailleurs (voir useSessionStats).
    return _objectSpread(_objectSpread(_objectSpread({}, connectionStats), serverStatus === null || serverStatus === void 0 ? void 0 : serverStatus.data), {}, {
      device: devicePower
    });
  }, [session.id, session.startedAt, token, setStatsMonitoring, connectionStats]);
  return {
    // streamex has no separate exit-message concept (unlike retro-
    // gaming's disconnect()/leavePage split) and no manual connect()
    // either: this connection auto-connects off its own socket effect.
    // Neither of these releases the gateway viewer — the PAGE owns it
    // (see SessionStream), and GatewayWebRTC's unmount effect is the only
    // thing allowed to let it go.
    // Same three verbs as the other platforms (see use-retrogaming-input's
    // doc). streamex has no exit message and no save states: leaving is
    // just dropping this connection, and ending the session for everyone
    // is the page's own stop-session REST call.
    disconnect: function disconnect() {},
    terminate: function terminate() {},
    onConnect: onConnect,
    onLeave: function onLeave() {},
    onDisconnect: onDisconnect,
    onSlotGiveaway: onSlotGiveaway,
    hasFreeSlots: hasFreeSlots,
    onMonitoringResource: onMonitoringResource,
    title: session.title,
    // The video surface belongs to the page now (SessionStream) — no ref,
    // no sessionId here. streamex needs nothing on <GatewayWebRTC> beyond
    // the two state callbacks.
    gatewayProps: {
      onConnectionStateChange: handleConnectionStateChange,
      onStatsUpdate: handleStatsUpdate
    },
    isConnected: isConnected,
    isConnecting: isConnecting,
    connectionState: connectionState,
    controller: function controller() {
      var _resolveControllerLay = (0,_shared_controller_layout_js__WEBPACK_IMPORTED_MODULE_5__.resolveControllerLayout)({
          session: session,
          override: virtualPad,
          overrideLabel: controllerLabel
        }),
        ConsolePad = _resolveControllerLay.Component,
        consolePadLabel = _resolveControllerLay.label;

      // No pad mapped for this console — render nothing rather than
      // <null />, which React rejects with "Element type is invalid…
      // got: null" and takes the WHOLE page down, prompts and all.
      // resolveControllerLayout returns null for any streamex console
      // missing from STREAMEX_CONSOLE_PADS, so this is reachable with
      // a real console, not just the blank test ones (seen live).
      if (!ConsolePad) {
        return {
          label: consolePadLabel,
          Component: null
        };
      }
      return {
        label: consolePadLabel,
        Component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ConsolePad, {
          profileButtons: profileButtons,
          enabled: drivesPad,
          sendInput: sendInput
        })
      };
    },
    extraProps: {
      // Le relais souris/tactile. Propre à streamex : c'est la seule
      // plateforme dont l'invité est un bureau, avec un curseur à
      // bouger. La page pose une surface transparente par-dessus la
      // vidéo et y branche ces gestes — elle ne peut pas les mettre
      // sur le <video>, qui appartient à GatewayWebRTC.
      //
      // `null` pour un spectateur : regarder ne bouge pas la souris de
      // celui qui joue.
      pointerHandlers: drivesPad ? {
        onPointerDown: function onPointerDown(event) {
          // La capture suit le pointeur hors de la surface : sans
          // elle, un glissement qui sort du cadre s'arrête net au
          // bord, ce qui est exactement le geste qu'on veut faire
          // dans un menu.
          event.currentTarget.setPointerCapture(event.pointerId);
          lastPointerRef.current = {
            x: event.clientX,
            y: event.clientY,
            dx: 0,
            dy: 0
          };
          sendMessage("md,".concat(event.button === 2 ? 3 : 1));
        },
        onPointerUp: function onPointerUp(event) {
          lastPointerRef.current = {
            x: null,
            y: null,
            dx: 0,
            dy: 0
          };
          sendMessage("mu,".concat(event.button === 2 ? 3 : 1));
        },
        onPointerMove: function onPointerMove(event) {
          var last = lastPointerRef.current;
          if (last.x === null) {
            return;
          }
          // DES ENTIERS SUR LE FIL, ET LE RESTE GARDÉ.
          //
          // `clientX`/`clientY` sont fractionnaires dès que le ratio
          // de pixels ne vaut pas 1 — c'est-à-dire sur la plupart des
          // téléphones. Le serveur lit ces deltas avec `strconv.Atoi`
          // et jette l'erreur (`dx, _ :=`), donc une valeur
          // fractionnaire devenait un déplacement de ZÉRO : le
          // mouvement vertical était mort sans que rien ne le dise.
          //
          // On arrondit donc ici, et on REPORTE le reste : sans ça un
          // glissement lent, dont chaque pas fait moins d'un pixel,
          // n'avancerait jamais.
          var dx = last.dx + (event.clientX - last.x);
          var dy = last.dy + (event.clientY - last.y);
          var stepX = Math.trunc(dx);
          var stepY = Math.trunc(dy);
          lastPointerRef.current = {
            x: event.clientX,
            y: event.clientY,
            dx: dx - stepX,
            dy: dy - stepY
          };
          if (stepX !== 0 || stepY !== 0) {
            sendMessage("mr,".concat(stepX, ",").concat(stepY));
          }
        },
        // La molette aussi rend des fractions (défilement fluide,
        // pavé tactile).
        onWheel: function onWheel(event) {
          return sendMessage("ms,".concat(Math.round(-event.deltaY)));
        },
        // Sinon le clic droit ouvre le menu du navigateur PAR-DESSUS
        // le jeu, au lieu d'atteindre l'émulateur.
        onContextMenu: function onContextMenu(event) {
          return event.preventDefault();
        }
      } : null,
      // L'ÉCRAN TACTILE d'une console qui en a un (`touch` au registre :
      // la Switch, #435), au serveur comme au téléphone : un doigt posé
      // sur l'image est un clic À CET ENDROIT de la fenêtre de
      // l'émulateur (`ma`, 0..10000, mis à l'échelle par le serveur),
      // et non le pavé tactile relatif ci-dessus, qui déplace un curseur
      // qu'on ne voit pas. C'est ce qui rend le clavier de saisie d'Eden
      // utilisable : la manette, elle, atteint aussi le jeu derrière lui
      // (cemuhook) — B y efface une lettre ET fait revenir le jeu en
      // arrière (le porteur, 2026-10-23). La page ne pose alors pas la
      // surface relative (Streaming.jsx).
      touch: drivesPad ? {
        send: sendTouch
      } : null,
      // L'entrée « Clavier » du menu (#420) — celui qui tient une
      // manette seulement, comme la souris.
      keyboard: drivesPad ? {
        typeText: typeText
      } : null,
      // Reduced to the genuinely streamex-only knob (P4) — join/
      // takeover/handover ride the façade WS + the contract fields
      // above now.
      // KeyTest ONLY. It is not a real emulator: it reads every button
      // on its own and cannot chain presses into combos, so it needs
      // the window pushed to it over the wire. Every other console
      // (PS3, Switch, Xbox, and the other platforms) runs a real
      // emulator that chains presses itself — sending `cw,` to those
      // is meaningless, and it was going out to all of them.
      onChainWindowChange: function onChainWindowChange(windowMs) {
        if (session.consoleId !== "keytest") {
          return;
        }
        sendMessage("cw,".concat(windowMs));
      }
    }
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/streamex/hooks/use-streamex-physical-input.js"
/*!******************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/streamex/hooks/use-streamex-physical-input.js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStreamexPhysicalInput: () => (/* binding */ useStreamexPhysicalInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/keyMapping.js */ "./src/webapp/src/app/gameflex/libs/keyMapping.js");
/* harmony import */ var _libs_gameInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/gameInput.js */ "./src/webapp/src/app/gameflex/libs/gameInput.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;



// Reading a physical controller must NOT depend on drawing one.
//
// This lived inside NintendoSwitch.jsx / PlayStation3.jsx / Xbox.jsx — three
// copies of the same two effects, mounted with the on-screen pad. And the page
// removes the on-screen pad exactly when a real controller is connected
// (Streaming.jsx: `!hasPhysicalGamepad`), so plugging a pad in unmounted the
// only code that read it. Streamex was the only platform with the bug because
// it was the only one reading from inside a visual component: retro-gaming has
// use-retrogaming-physical-gamepad.js, remote-play has gamepad.service.js, and
// neither is mounted by a pad (reported live 2026-08-25).
//
// So the rule this file exists to enforce: input is a session concern, the
// on-screen pad is a display concern. Hiding one must never silence the other.
//
// Keyboard travels with it for the same reason — it was in the same component,
// so it died with it. A hidden pad silenced the keyboard too; nobody noticed
// because hiding only happens when a gamepad is present.

var GAMEPAD_POLL_MS = 50;
function useStreamexPhysicalInput(_ref) {
  var enabled = _ref.enabled,
    order = _ref.order,
    profileButtons = _ref.profileButtons,
    sendInput = _ref.sendInput;
  var pressedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());

  // Keyboard pass-through — physical keys are relayed verbatim (kd/ku by
  // event.code): the emulator receives the same events as a local keyboard,
  // so its whole menu (Esc, arrows…) works, not just the mapped buttons.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled) {
      return undefined;
    }
    var pressed = pressedRef.current;
    var releaseAll = function releaseAll() {
      var _iterator = _createForOfIteratorHelper(pressed),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var code = _step.value;
          sendInput("ku,".concat(code));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      pressed.clear();
    };
    var handleKeyDown = function handleKeyDown(event) {
      // Ni une touche FABRIQUÉE — le pont manette-clavier de Skeleton,
      // qui navigue dans l'interface et partait ici en « kd, » sans
      // code, jamais relâché —, ni une touche du menu ouvert (#407,
      // #408).
      if (!event.isTrusted || !event.code || (0,_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_2__.isGameInputSuspended)()) {
        return;
      }
      if (event.repeat || pressed.has(event.code)) {
        return;
      }
      pressed.add(event.code);
      sendInput("kd,".concat(event.code));
    };
    var handleKeyUp = function handleKeyUp(event) {
      if (!pressed.has(event.code)) {
        return;
      }
      pressed["delete"](event.code);
      sendInput("ku,".concat(event.code));
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    // Le menu qui s'ouvre relâche ce que le clavier tenait.
    var stopListening = (0,_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_2__.onGameInputSuspension)(function (suspended) {
      return suspended && releaseAll();
    });
    return function () {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      stopListening();
      // Whatever was held when this stops is released: losing the pad
      // mid-press must not leave a key stuck down on the emulator.
      releaseAll();
    };
  }, [enabled, sendInput]);

  // Physical gamepads (Gamepad API, standard layout) — button indices map
  // onto profile ids through `order`, axes 0/1 and 2/3 travel as `st`.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled || !order) {
      return undefined;
    }
    var padState = new Map();
    var stickLast = new Map();
    var sendStick = function sendStick(which, axisX, axisY) {
      var x = Math.round((axisX || 0) * 1000);
      var y = Math.round((axisY || 0) * 1000);
      var key = "".concat(x, ",").concat(y);
      if (stickLast.get(which) === key) {
        return;
      }
      stickLast.set(which, key);
      sendInput("st,".concat(which, ",").concat(x, ",").concat(y));
    };
    var timer = setInterval(function () {
      // LE MENU OUVERT, LA MANETTE EST LUE COMME LÂCHÉE (#408) : les
      // boutons tenus repartent relâchés, les sticks au centre.
      var suspended = (0,_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_2__.isGameInputSuspended)();
      var _iterator2 = _createForOfIteratorHelper((0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_1__.connectedGamepads)()),
        _step2;
      try {
        var _loop = function _loop() {
          var gamepad = _step2.value;
          if (!gamepad || !gamepad.connected) {
            return 1; // continue
          }
          gamepad.buttons.forEach(function (button, index) {
            // Par position : une manette à étiquettes Nintendo envoie
            // son A (à droite) comme le bouton du bas (keyMapping.js).
            var id = order[(0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_1__.positionalButtonIndex)(gamepad.id, index)];
            if (!id) {
              return;
            }
            // Le Home du raccourci du menu (L2 tenu) n'est pas au jeu.
            var down = !suspended && !(0,_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_2__.isMenuHome)(gamepad, index) && (button.pressed || typeof button.value === "number" && button.value > 0.5);
            if (down === !!padState.get(id)) {
              return;
            }
            padState.set(id, down);
            var buttonProfile = profileButtons.find(function (entry) {
              return entry.id === id;
            });
            if (buttonProfile) {
              sendInput(down ? "kd,".concat(buttonProfile.key) : "ku,".concat(buttonProfile.key));
            }
          });
          if (gamepad.axes && gamepad.axes.length >= 2) {
            sendStick("l", suspended ? 0 : gamepad.axes[0], suspended ? 0 : gamepad.axes[1]);
            if (gamepad.axes.length >= 4) {
              sendStick("r", suspended ? 0 : gamepad.axes[2], suspended ? 0 : gamepad.axes[3]);
            }
          }
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          if (_loop()) continue;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }, GAMEPAD_POLL_MS);
    return function () {
      clearInterval(timer);
      // Center both sticks so the emulator does not keep a deflection
      // held after the pad stops being read.
      sendInput("st,l,0,0");
      sendInput("st,r,0,0");
    };
  }, [enabled, order, profileButtons, sendInput]);
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/streamex/hooks/use-streamex-streaming-connection.js"
/*!************************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/streamex/hooks/use-streamex-streaming-connection.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStreamexStreamingConnection: () => (/* binding */ useStreamexStreamingConnection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_utils_log_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/log-store.js */ "./src/webapp/src/app/gameflex/shared/utils/log-store.js");
/* harmony import */ var _shared_hooks_use_gateway_webrtc_connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/hooks/use-gateway-webrtc-connection.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-gateway-webrtc-connection.js");
/* harmony import */ var _libs_serverBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/serverBase.js */ "./src/webapp/src/app/gameflex/libs/serverBase.js");
/* harmony import */ var _shared_hooks_use_managed_websocket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/hooks/use-managed-websocket.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-managed-websocket.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;




var PING_INTERVAL_MS = 1000;

// Connects to streamex (the Go streaming server, src/microservices/
// runtimes/streamex) — WS /ws?viewerId carries this tab's hello, its
// fallback input and the ping-pong, while video/audio/ICE/stats go through
// the shared GatewayWebRTC (stream/shared/GatewayWebRTC.jsx) via screenRef —
// extracted out of streamex/Player.jsx, which used to build all of this
// inline.
//
// NO ROLE, NO TOKEN (P5, 2026-10-09). This socket used to open on the play
// or the watch link, whose token made the child hand out a role and a pad.
// Who drives a pad is the session queue's answer, read on the child socket
// (drivesPad below); the child only routes this tab's input if the queue
// seats the viewer it announced.
//
// Slot requests are handled by the kernel over the façade WS now (P4-P5),
// so the child-level slotrequested/slotgranted/requestslot messages this
// file used to speak are gone — the unified contract (onSwapDevice in
// use-streamex-input.js) drives takeover reconnects instead.
//
// streamex has no WebRTC of its own: it does not start without the gateway
// (docs/WEBRTC_GATEWAY.md), so no "offer" ever arrives on this WebSocket.
//
// Unlike retro-gaming, the session/chain-window protocol below is NOT
// split into a separate "extras" file — it rides the exact same WebSocket
// as connection setup (the "session" message is the child's hello), so
// splitting connection from protocol
// here would mean threading the one WS ref across two files for no real
// gain. Only the reactive connection-state slice (isConnected/isConnecting/
// connectionState/connectionStats) is shared, via useGatewayWebrtcConnection
// below — the same hook retro-gaming's connection file uses.
function useStreamexStreamingConnection(_ref) {
  var screenRef = _ref.screenRef,
    session = _ref.session,
    t = _ref.t,
    _ref$drivesPad = _ref.drivesPad,
    drivesPad = _ref$drivesPad === void 0 ? false : _ref$drivesPad,
    _ref$enabled = _ref.enabled,
    enabled = _ref$enabled === void 0 ? false : _ref$enabled,
    onConnectionError = _ref.onConnectionError,
    onConnectionStateChange = _ref.onConnectionStateChange;
  var _useManagedWebSocket = (0,_shared_hooks_use_managed_websocket_js__WEBPACK_IMPORTED_MODULE_4__.useManagedWebSocket)(),
    wsRef = _useManagedWebSocket.wsRef,
    openManaged = _useManagedWebSocket.openManaged,
    closeManaged = _useManagedWebSocket.closeManaged;
  var drivesPadRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(drivesPad);
  drivesPadRef.current = drivesPad;
  // Server-clock offset (ms), refreshed on every server ping — used to
  // timestamp presses for the keytest console (see keytest/display.py).
  var serverOffsetMsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    connectionError = _useState2[0],
    setConnectionError = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    rttMs = _useState4[0],
    setRttMs = _useState4[1];
  // retryNonce — bumped 4s after a connection error to force the connect
  // effect below to re-run. A hard refresh never cleanly disconnects the
  // PREVIOUS tab's connection (no unmount fires, the socket just dies) —
  // the gateway/child can reject a fresh attempt for a few seconds while
  // it notices the old one is gone. Dashboard.jsx's own StreamexPreview
  // hits the exact same race and papers over it with an identical 4s
  // retry loop; this hook (unlike retro/remote-play's) has no external
  // connect() a caller can re-invoke — it auto-connects off socketUrl, so
  // the retry has to live in its own dependency array.
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    retryNonce = _useState6[0],
    setRetryNonce = _useState6[1];
  var _useGatewayWebrtcConn = (0,_shared_hooks_use_gateway_webrtc_connection_js__WEBPACK_IMPORTED_MODULE_2__.useGatewayWebrtcConnection)({
      screenRef: screenRef,
      t: t
    }),
    isConnected = _useGatewayWebrtcConn.isConnected,
    isConnecting = _useGatewayWebrtcConn.isConnecting,
    connectionState = _useGatewayWebrtcConn.connectionState,
    connectionStats = _useGatewayWebrtcConn.connectionStats,
    setIsConnected = _useGatewayWebrtcConn.setIsConnected,
    setStatsMonitoring = _useGatewayWebrtcConn.setStatsMonitoring,
    handleGatewayConnectionStateChange = _useGatewayWebrtcConn.handleConnectionStateChange,
    handleStatsUpdate = _useGatewayWebrtcConn.handleStatsUpdate;

  // The URL is built against L'ORIGINE DU SERVEUR, jamais l'adresse LAN du
  // conteneur : derrière un proxy HTTPS, celle-ci est injoignable et
  // bloquée pour contenu mixte — le kernel relaie /api/v1/streamex/<id>/ws
  // vers le conteneur de session.
  //
  // `absoluteApiUrl` ET PAS `window.location.origin`, et c'est tout le
  // défaut du 2026-09-07 : dans l'application, l'origine de la page est le
  // kernel du TÉLÉPHONE, qui sert bien l'interface mais ne connaît aucune
  // session streamex. Le profil de manette et le canal de contrôle partaient
  // donc chez lui et revenaient 404 — image parfaite, manette morte, sans
  // une erreur qui parle d'entrées. `serverOrigin()` (dedans) rend
  // exactement la même chose qu'avant dans un navigateur : rien, donc la
  // page. Ailleurs, il rend l'hôte que cette page vise.
  var socketUrl = session.id && enabled ? (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_3__.absoluteApiUrl)("/api/v1/streamex/".concat(session.id, "/ws")) : null;

  // Forwards to the shared hook's own connected/isConnecting/
  // connectionState handling, then also reports to the caller
  // (Player.jsx uses onConnectionStateChange for its own overlay text).
  var handleConnectionStateChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (state) {
    handleGatewayConnectionStateChange(state);
    onConnectionStateChange === null || onConnectionStateChange === void 0 || onConnectionStateChange(state);
  }, [handleGatewayConnectionStateChange, onConnectionStateChange]);

  // Connect the WS and drive the WebRTC handshake.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!session.id) {
      setConnectionError(true);
      return undefined;
    }
    if (!socketUrl) {
      // Not yet: the page has not given its go (no viewer so far).
      return undefined;
    }
    var cancelled = false;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _screenRef$current;
      var viewer, wsUrl, sendJSON;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            // The PAGE created the gateway viewer, once, from the sessionId
            // alone, before this socket was allowed to open (Streaming.jsx
            // gates onConnect on viewerReady) — we only read its id for the
            // query (the child maps viewer->pad slot at connect). Creating it
            // here welded the video's lifetime to this socket's: hasInput was
            // role-dependent, so every role change renegotiated the SDP and
            // restarted the picture. See SessionStream's own doc.
            viewer = screenRef !== null && screenRef !== void 0 && (_screenRef$current = screenRef.current) !== null && _screenRef$current !== void 0 && _screenRef$current.viewerId ? {
              viewerId: screenRef.current.viewerId
            } : null;
            if (!cancelled) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            wsUrl = new URL(socketUrl);
            wsUrl.protocol = wsUrl.protocol === "https:" ? "wss:" : "ws:";
            // The viewer is how the child finds this tab's seat in the queue:
            // a hand-over changes the seat, never this socket.
            if (viewer !== null && viewer !== void 0 && viewer.viewerId) wsUrl.searchParams.set("viewerId", viewer.viewerId);
            sendJSON = function sendJSON(message) {
              var _wsRef$current;
              (_wsRef$current = wsRef.current) === null || _wsRef$current === void 0 || _wsRef$current.send(JSON.stringify(message));
            };
            openManaged(wsUrl.toString(), {
              onOpen: function onOpen() {
                // UNE CONNEXION ÉTABLIE EFFACE UNE ERREUR PASSÉE. Sans ça,
                // l'erreur d'avant — un lien pas encore connu au premier
                // rendu — relançait ce socket 4 s plus tard alors qu'il
                // marchait, et le child retirait au passage le viewer de
                // l'image (2026-10-08).
                setConnectionError(false);
                sendJSON({
                  type: "ready"
                });
              },
              onError: function onError() {
                if (!cancelled) {
                  setConnectionError(true);
                }
              },
              onClose: function onClose() {
                setIsConnected(false);
                if (!cancelled) {
                  setConnectionError(true);
                }
              },
              onMessage: function () {
                var _onMessage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(message) {
                  var _t;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        _t = message.type;
                        _context.n = _t === "session" ? 1 : _t === "ping" ? 2 : _t === "pong" ? 3 : _t === "error" ? 4 : 5;
                        break;
                      case 1:
                        // The child's hello — no role, no pad: who drives
                        // what is the queue's answer (drivesPad).
                        // Blackscreen.jsx's chain-window toggle starts at
                        // 300ms client-side, but onChainWindowChange only
                        // fires on a manual toggle — nothing was ever sent
                        // on connect, so the keytest display app kept its
                        // OWN internal default (50ms) until the user touched
                        // the switch at least once. Sync it explicitly here.
                        // Harmless for every other console: injectLine only
                        // special-cases "cw," for the keytest adapter.
                        sendMessage("cw,300");
                        return _context.a(3, 6);
                      case 2:
                        // Server RTT probe — echoing keeps the server's rtt
                        // stat live, and message.t (server UnixMilli) yields
                        // the offset used to timestamp keytest presses on
                        // the server's own clock.
                        serverOffsetMsRef.current = message.t - performance.now();
                        sendJSON({
                          type: "pong",
                          t: message.t
                        });
                        return _context.a(3, 6);
                      case 3:
                        setRttMs(Math.max(0, Math.round(performance.now() - message.t)));
                        return _context.a(3, 6);
                      case 4:
                        // Any child-side rejection now — the former "this
                        // session already has an active connection" case was
                        // removed (2026-08-23: multiple connections are
                        // allowed, the latest bind wins).
                        setConnectionError(true);
                        return _context.a(3, 6);
                      case 5:
                        return _context.a(3, 6);
                      case 6:
                        return _context.a(2);
                    }
                  }, _callee);
                }));
                function onMessage(_x) {
                  return _onMessage.apply(this, arguments);
                }
                return onMessage;
              }()
            });
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }))();
    return function () {
      cancelled = true;
      closeManaged();
      // No screenRef.cleanup() here — the PAGE owns the gateway viewer now (see
      // SessionStream): tearing it down from here kills the video for the
      // whole page, and the platform WS re-opening does NOT bring it back
      // (SessionStream stops retrying once attached). Confirmed live
      // 2026-08-24 in the gateway log — "viewer added" then "viewer removed"
      // ~310ms later, then no picture at all. The viewer is released by
      // GatewayWebRTC's own unmount effect, nowhere else.
      // This effect re-runs on socketUrl/retry, so it was the
      // worst offender: a dependency simply settling killed the video.
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socketUrl, retryNonce]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!connectionError) return;
    onConnectionError === null || onConnectionError === void 0 || onConnectionError();
    var retry = setTimeout(function () {
      setConnectionError(false);
      setRetryNonce(function (n) {
        return n + 1;
      });
    }, 4000);
    return function () {
      return clearTimeout(retry);
    };
  }, [connectionError, onConnectionError]);

  // Latency probe — streamex answers pong with the client's own t.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timer = setInterval(function () {
      var socket = wsRef.current;
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
          type: "ping",
          t: performance.now()
        }));
      }
    }, PING_INTERVAL_MS);
    return function () {
      return clearInterval(timer);
    };
  }, []);

  // Sends one input token — the reference client's own wire format
  // (`kd,<code>`/`ku,<code>`/`md,<button>`/`mr,<dx>,<dy>`/`ms,<delta>`,
  // keytest's `cw,<ms>`), player-gated server-side too but checked here
  // first so a spectator's pad never even tries. Phase 2: DataChannel via
  // GatewayWebRTC when open, WS otherwise (mirrors sendButton/
  // sendAnalog's own fallback in use-retrogaming-streaming-connection.js).
  //
  // `ordered` — un TEXTE TAPÉ (#420) passe d'abord par le WebSocket : le
  // canal de données est sans ordre ni renvoi (gatewaystreams/bridge.go,
  // CreateDataChannel), juste pour une manette, dont l'état suivant efface
  // le précédent. Pour un mot, une lettre perdue ou un Maj relâché avant sa
  // lettre, et le nom tapé n'est plus le bon.
  var sendMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (payload) {
    var _screenRef$current2;
    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$ordered = _ref3.ordered,
      ordered = _ref3$ordered === void 0 ? false : _ref3$ordered;
    // A KEY only leaves a tab that drives a pad; a SETTING (the
    // keytest chain window, "cw,") always goes, the child decides.
    if (!drivesPadRef.current && !payload.startsWith("cw,")) return;
    // Keytest console: stamp presses/releases/pressure with the
    // server clock so the display computes latency on ONE clock.
    if (session.consoleId === "keytest" && (payload.startsWith("kd,") || payload.startsWith("ku,") || payload.startsWith("ab,"))) {
      payload += ",".concat(Math.round(performance.now() + serverOffsetMsRef.current));
    }
    // DEUX CHEMINS, ET LE SECOND EST UN REPLI — pas une alternative
    // qu'on abandonne au premier échec.
    //
    // Le canal de données du gateway est préféré (moins de sauts),
    // mais il n'existe que si la négociation WebRTC a abouti ET que
    // ce viewer a demandé un canal d'entrée. `screenRef.current` est
    // TOUJOURS là depuis que la page possède son viewer : ce test
    // prenait donc systématiquement la première branche et rendait la
    // main, même canal fermé — le WebSocket, lui, était ouvert et
    // prêt. Toutes les touches disparaissaient sans un mot
    // (2026-09-07 ; « avant la refonte ça fonctionnait » : avant, il
    // n'y avait pas de screenRef, donc pas de première branche).
    var socket = wsRef.current;
    var socketOpen = (socket === null || socket === void 0 ? void 0 : socket.readyState) === WebSocket.OPEN;
    if (!(ordered && socketOpen) && screenRef !== null && screenRef !== void 0 && (_screenRef$current2 = screenRef.current) !== null && _screenRef$current2 !== void 0 && _screenRef$current2.sendMessage(payload)) {
      return;
    }
    if (!socketOpen) {
      (0,_shared_utils_log_store_js__WEBPACK_IMPORTED_MODULE_1__.logThrottled)("warn", "streamex-input-lost", 2000, "streamex: entrée perdue — ni canal de données ni WebSocket", payload);
      return;
    }
    socket.send(payload);
  }, [session.consoleId, screenRef]);
  return {
    isConnected: isConnected,
    isConnecting: isConnecting,
    connectionState: connectionState,
    connectionError: connectionError,
    rttMs: rttMs,
    connectionStats: connectionStats,
    setStatsMonitoring: setStatsMonitoring,
    handleConnectionStateChange: handleConnectionStateChange,
    handleStatsUpdate: handleStatsUpdate,
    sendMessage: sendMessage
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/streamex/keyboard-text.js"
/*!**********************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/streamex/keyboard-text.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   keysOfText: () => (/* binding */ keysOfText)
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// UN TEXTE EN TOUCHES (#420) : ce que l'entrée « Clavier » du menu tape dans
// l'émulateur.
//
// streamex ne reçoit que des touches (`kd,<code>` / `ku,<code>`, le
// KeyboardEvent.code d'un clavier branché), qu'il injecte par XTest dans le
// serveur X de la partie — un clavier QWERTY américain. Une lettre s'y écrit
// donc comme on la taperait là : sa touche, avec Maj pour une majuscule ou un
// signe du haut d'une touche.

// Les signes, par touche : le premier sans Maj, le second avec.
var SIGNS = {
  Backquote: "`~",
  Digit1: "1!",
  Digit2: "2@",
  Digit3: "3#",
  Digit4: "4$",
  Digit5: "5%",
  Digit6: "6^",
  Digit7: "7&",
  Digit8: "8*",
  Digit9: "9(",
  Digit0: "0)",
  Minus: "-_",
  Equal: "=+",
  BracketLeft: "[{",
  BracketRight: "]}",
  Backslash: "\\|",
  Semicolon: ";:",
  Quote: "'\"",
  Comma: ",<",
  Period: ".>",
  Slash: "/?"
};
var KEYS = new Map([[" ", {
  code: "Space",
  shift: false
}]]);
for (var _i = 0, _Object$entries = Object.entries(SIGNS); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
    code = _Object$entries$_i[0],
    _Object$entries$_i$ = _slicedToArray(_Object$entries$_i[1], 2),
    plain = _Object$entries$_i$[0],
    shifted = _Object$entries$_i$[1];
  KEYS.set(plain, {
    code: code,
    shift: false
  });
  KEYS.set(shifted, {
    code: code,
    shift: true
  });
}
for (var letter = 65; letter <= 90; letter += 1) {
  var upper = String.fromCharCode(letter);
  KEYS.set(upper.toLowerCase(), {
    code: "Key".concat(upper),
    shift: false
  });
  KEYS.set(upper, {
    code: "Key".concat(upper),
    shift: true
  });
}

/**
 * Les touches d'un texte, dans l'ordre, et ce qu'un clavier américain n'a pas
 * (un accent, un emoji) — jamais tapé à la place d'autre chose.
 *
 * @param {string} text
 * @returns {{keys: {code: string, shift: boolean}[], missing: string[]}}
 */
function keysOfText(text) {
  var keys = [];
  var missing = [];
  var _iterator = _createForOfIteratorHelper(text),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var character = _step.value;
      var key = KEYS.get(character);
      if (key) {
        keys.push(key);
      } else if (!missing.includes(character)) {
        missing.push(character);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return {
    keys: keys,
    missing: missing
  };
}

/***/ }

}]);
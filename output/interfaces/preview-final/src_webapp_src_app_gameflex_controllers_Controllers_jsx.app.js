"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_controllers_Controllers_jsx"],{

/***/ "./src/webapp/src/app/gameflex/controllers/Controllers.jsx"
/*!*****************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/controllers/Controllers.jsx ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultGamepad: () => (/* binding */ DefaultGamepad),
/* harmony export */   DualSense: () => (/* binding */ DualSense),
/* harmony export */   DualShock: () => (/* binding */ DualShock),
/* harmony export */   DualShock3: () => (/* binding */ DualShock3),
/* harmony export */   GBA: () => (/* binding */ GBA),
/* harmony export */   Genesis: () => (/* binding */ Genesis),
/* harmony export */   JoyCon: () => (/* binding */ JoyCon),
/* harmony export */   N64: () => (/* binding */ N64),
/* harmony export */   NES: () => (/* binding */ NES),
/* harmony export */   PRESET_COMPONENT_BY_NAME: () => (/* binding */ PRESET_COMPONENT_BY_NAME),
/* harmony export */   PS1: () => (/* binding */ PS1),
/* harmony export */   PSP: () => (/* binding */ PSP),
/* harmony export */   RETRO_BUTTON_INDEX: () => (/* binding */ RETRO_BUTTON_INDEX),
/* harmony export */   RETRO_CONTROLLER_MAP: () => (/* binding */ RETRO_CONTROLLER_MAP),
/* harmony export */   RETRO_CONTROLLER_PRESET_MAP: () => (/* binding */ RETRO_CONTROLLER_PRESET_MAP),
/* harmony export */   RETRO_DIAGONAL_BUTTONS: () => (/* binding */ RETRO_DIAGONAL_BUTTONS),
/* harmony export */   RETRO_GAMEPAD_INDEX: () => (/* binding */ RETRO_GAMEPAD_INDEX),
/* harmony export */   SNES: () => (/* binding */ SNES),
/* harmony export */   Xbox: () => (/* binding */ Xbox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stream_onscreen_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stream/onscreen/Controllers.jsx */ "./src/webapp/src/app/gameflex/stream/onscreen/Controllers.jsx");
/* harmony import */ var _presets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presets.js */ "./src/webapp/src/app/gameflex/controllers/presets.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;



// ControllerLayout's `callbacks` prop is keyed BY BUTTON NAME (see
// its ColumnZone -> PlaceButton: `callback = callbacks[b.name] || {}`), not
// a single flat {onmousedown,onmouseup,onanalogmove} object — that mismatch
// (every wrapper below used to build the flat shape) meant callbacks[name]
// was always undefined, so callback.onmousedown was always undefined too:
// every press silently went nowhere, on every controller. Built once here,
// generically, from whichever preset's own button list, instead of
// duplicating a (wrong) shape in each wrapper.

function buildCallbacks(presetName, onButtonDown, onButtonUp, onAnalogMove, onTouch) {
  var preset = _presets_js__WEBPACK_IMPORTED_MODULE_2__.CONTROLLER_PRESETS[presetName];
  var callbacks = {};
  var _iterator = _createForOfIteratorHelper((preset === null || preset === void 0 ? void 0 : preset.buttons) || []),
    _step;
  try {
    var _loop = function _loop() {
      var b = _step.value;
      callbacks[b.name] = {
        onmousedown: function onmousedown() {
          return onButtonDown === null || onButtonDown === void 0 ? void 0 : onButtonDown(b.name);
        },
        onmouseup: function onmouseup() {
          return onButtonUp === null || onButtonUp === void 0 ? void 0 : onButtonUp(b.name);
        },
        // Analog sticks call `callback.onmove` (not onanalogmove — see
        // PlaceButton's updateFromEvent/onPointerUp/onPointerCancel),
        // with just (x, y); the button name is closed over here instead
        // of being passed through, since onMove isn't itself a real
        // DOM/React event and never fires from the JSX prop of that
        // name a few lines below it in ControllerLayout.jsx.
        onmove: function onmove(x, y) {
          return onAnalogMove === null || onAnalogMove === void 0 ? void 0 : onAnalogMove(b.name, x, y);
        }
      };
      // LE PAVÉ TACTILE, QUAND LA PLATEFORME SAIT LE SERVIR. ControllerLayout
      // dessine alors une surface au lieu d'un bouton (TouchpadSurface) ; le
      // clic, lui, reste onmousedown/onmouseup. Sans `onTouch`, TOUCHPAD
      // reste le simple clic qu'il a toujours été.
      if (b.name === "TOUCHPAD" && onTouch) {
        callbacks[b.name].ontouch = onTouch;
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return callbacks;
}
function makeController(presetName) {
  // canDrawButton : transmis tel quel — un gabarit peut porter un bouton
  // que la console de la session ne sait pas servir (voir son propre
  // commentaire dans ControllerLayout). Absent, tout est dessiné.
  // onTouch(doigt, posé, x, y) : voir buildCallbacks.
  return function Controller(_ref) {
    var onButtonDown = _ref.onButtonDown,
      onButtonUp = _ref.onButtonUp,
      onAnalogMove = _ref.onAnalogMove,
      onTouch = _ref.onTouch,
      opacity = _ref.opacity,
      canDrawButton = _ref.canDrawButton;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_stream_onscreen_Controllers_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: presetName,
      callbacks: buildCallbacks(presetName, onButtonDown, onButtonUp, onAnalogMove, onTouch),
      opacity: opacity,
      canDrawButton: canDrawButton
    });
  };
}

// Retro Gaming
var DefaultGamepad = makeController("default");
// PS1
var PS1 = makeController("ps1");
// PS1/PS2 DualShock
var DualShock = makeController("dualshock");
// PS3 DualShock3
var DualShock3 = makeController("dualshock3");
// PS4/PS5 DualSense
var DualSense = makeController("dualsense");
// PSP/PSVita
var PSP = makeController("psp");
// Gameboy Advance (GBA)
var GBA = makeController("gba");
// Genesis
var Genesis = makeController("genesis");
// Nintendo Entertainment System (NES)
var NES = makeController("nes");
// Super Nintendo Entertainment System (SNES)
var SNES = makeController("snes");
// Nintendo 64 (N64)
var N64 = makeController("n64");
// Nintendo Switch (Joy-Con)
var JoyCon = makeController("joycon");
// Xbox (360 layout)
var Xbox = makeController("xbox");

// Retro-gaming — inverted from libs/gamepadMapping.js's own DEFAULT_MAPPING
// (Gamepad API index -> libretro action name), so a real controller lights
// up the right marker here too instead of guessing a second mapping.
var RETRO_GAMEPAD_INDEX = {
  B: 0,
  A: 1,
  Y: 2,
  X: 3,
  L: 4,
  R: 5,
  L2: 6,
  R2: 7,
  SELECT: 8,
  START: 9,
  L3: 10,
  R3: 11,
  DPAD_UP: 12,
  DPAD_DOWN: 13,
  DPAD_LEFT: 14,
  DPAD_RIGHT: 15
};

// Retro-gaming — libretro RETRO_DEVICE_ID_JOYPAD_* bit index per name (see
// the deleted gameflex/shared/gamepadOverlay.js's own RETRO_BUTTON_INDEX for
// the original 14, uppercased/DPAD_-prefixed to match this file's button
// naming). This is what actually has to be sent over the WebRTC DataChannel
// (stream/retrogaming/hooks/use-retro-streaming-connection.js's sendButton -> Go backend's
// s.inputStates[player][ButtonID], read by the libretro core itself) — NOT
// RETRO_GAMEPAD_INDEX above, which is a completely different index space
// (a real Gamepad API button position, only meaningful for live-
// highlighting a physical controller). Mixing the two up sends the wrong
// input to the emulator (e.g. DPAD_UP, index 12 here vs RETRO_GAMEPAD_
// INDEX's 12, is RETRO_DEVICE_ID_JOYPAD_L2 to the core).
// PS-style face/shoulder button names (dualshock/dualshock3/psp presets —
// ControllerLayout.jsx) alias the SAME libretro bit as their SNES-
// style equivalent, matched by PHYSICAL POSITION on the pad (the standard
// RetroArch/libretro convention for every PSX/PSP core): Cross (bottom) =
// B, Circle (right) = A, Square (left) = Y, Triangle (top) = X, L1 = L,
// R1 = R. Missing before — those 4 face buttons and L1/R1 always looked up
// as undefined, so the outgoing message had no `button` field at all
// (JSON.stringify drops it) and the Go backend silently no-opped it
// (`if in.ButtonID != nil && ...`) — confirmed via a real report: Triangle/
// Circle/Square/Cross dead on PSX/PSP (and, before this fix, L1/R1 too).
var RETRO_BUTTON_INDEX = {
  B: 0,
  Y: 1,
  SELECT: 2,
  START: 3,
  DPAD_UP: 4,
  DPAD_DOWN: 5,
  DPAD_LEFT: 6,
  DPAD_RIGHT: 7,
  A: 8,
  X: 9,
  L: 10,
  R: 11,
  L2: 12,
  R2: 13,
  // L3/R3 (stick-click) — real libretro bits, per spec (RETRO_DEVICE_ID_
  // JOYPAD_L3/R3 = 14/15), just never wired before since the old retro-
  // gaming UI had no stick-click button at all. Go's inputStates is
  // [32]int16 per player (stream_session.go), plenty of room.
  L3: 14,
  R3: 15,
  CROSS: 0,
  SQUARE: 1,
  CIRCLE: 8,
  TRIANGLE: 9,
  L1: 10,
  R1: 11,
  // LA MANETTE PS4/PS5 DESSINÉE (dualsense) nomme Start et Select OPTIONS
  // et SHARE, et son pavé tactile TOUCHPAD : absents de cette table, ils
  // envoyaient un index vide, et Options ne faisait rien sur la PS4 et la
  // PS5 du téléphone (le porteur, 2026-10-27, FF7 Remake). Share et le
  // pavé pressent tous deux SELECT, la touche du pavé tactile des tables
  // de GlibcGuest — comme au serveur, où Share devient « select », que
  // shadPS4 lit comme le pavé (`touchpad_center = back`).
  OPTIONS: 3,
  SHARE: 2,
  TOUCHPAD: 2,
  // LE BOUTON PS — pas un bit libretro (ils s'arrêtent à 15) : l'index du
  // bouton « guide » de la Gamepad API, que keyMapping.js lui donne déjà
  // (dualshock3, dualsense). Un cœur libretro ne le demande jamais ; le
  // pont X du téléphone en fait la touche que le profil de RPCS3 lui
  // attribue (GlibcGuest.RPCS3_KEYS). Sans lui, le PS de la DualShock 3
  // dessinée ne partait nulle part.
  PS: 16
};

// 8-way d-pad corners: libretro cores combine two held directions natively,
// so a corner sends BOTH direction bits — the same trick streamex's server
// does in its padHatDirs. Shared by Streaming.jsx's on-screen
// pad and by keyboard chords (ArrowDown+ArrowRight → DPAD_DOWN_RIGHT).
var RETRO_DIAGONAL_BUTTONS = {
  DPAD_UP_LEFT: ["DPAD_UP", "DPAD_LEFT"],
  DPAD_UP_RIGHT: ["DPAD_UP", "DPAD_RIGHT"],
  DPAD_DOWN_LEFT: ["DPAD_DOWN", "DPAD_LEFT"],
  DPAD_DOWN_RIGHT: ["DPAD_DOWN", "DPAD_RIGHT"]
};

// Some presets used to reuse a button LABEL for a different physical/
// RetroPad position than this table assumes (Genesis's own A/C/X/Y/Z,
// N64's Z) — fixed at the SOURCE instead (ControllerLayout.jsx's
// CONTROLLER_PRESETS `name` fields renamed to whichever key here is
// actually correct for that position, `icon`/`text` left alone so the
// button still LOOKS like what the player expects) rather than by adding a
// second per-preset lookup layer here. See those presets' own comments for
// the genesis_plus_gx/mupen64plus_next mapping each rename is based on.

// Map consoleId → virtual controller PRESET NAME (CONTROLLER_PRESETS key) —
// the single source of truth RETRO_CONTROLLER_MAP (component) below AND
// KeyMapping (Phase 8, gameflex/libs/keyMapping.js — a physical device is
// mapped against a preset NAME, not a component) both derive from, so the
// two can never drift apart.
var RETRO_CONTROLLER_PRESET_MAP = {
  nes: "nes",
  snes: "snes",
  gb: "nes",
  gbc: "nes",
  gba: "gba",
  megadrive: "genesis",
  genesis: "genesis",
  sms: "genesis",
  // PS1 defaults to the DUALSHOCK (2026-08-25). It is what the child
  // switches port 0 to on every ps1 session, so it is also what the
  // keyboard/physical-gamepad mapping and the rumble flag must assume —
  // this map feeds all three, plus the settings page's preset list.
  // Leaving it on the digital pad made the on-screen controller and the
  // mapping profile disagree about the same session, which is exactly the
  // failure resolveControllerLayout was written to prevent. The digital
  // pad is still one click away in the session's own PS1 picker.
  ps1: "dualshock",
  psx: "dualshock",
  // PS2 renders through the same DualShock preset as psx — both cores
  // (pcsx2/play) read the same libretro button bits.
  ps2: "dualshock",
  psp: "psp",
  n64: "n64",
  // gc — le preset n64 s'appelle lui-même « Nintendo 64/GameCube », et il
  // porte ce qu'une GameCube demande : Z sur une gâchette, et les C sur le
  // stick droit (c'est le C-stick, sur cette console-là). Sans cette
  // ligne, la GameCube tombait sur le pad générique.
  gc: "n64",
  nds: "snes",
  "switch": "joycon",
  // La Switch 2 (#644) : les mêmes boutons que la Switch.
  switch2: "joycon",
  // LES CONSOLES DE BUREAU DU TÉLÉPHONE (2026-10-11). Sur le serveur, ce
  // sont des sessions streamex, et leur manette vient de
  // streamex/controllers (CONSOLE_PADS) ; sur le téléphone, une PS3 tourne
  // dans l'application et sa session est « device » — elle passe donc par
  // CETTE table, qui ne la connaissait pas : le porteur avait le pad
  // générique (X/Y/A/B, L/R seuls) au lieu d'une DualShock 3. Les mêmes
  // dessins que le serveur, à la Wii U près, qui y emprunte déjà celui de
  // la Switch.
  ps3: "dualshock3",
  ps4: "dualsense",
  ps5: "dualsense",
  xbox: "xbox",
  xbox360: "xbox",
  wiiu: "joycon",
  // Les ports PC (chantier 40) lisent une manette SDL moderne : celle de
  // la Xbox.
  ports: "xbox"
};

// Exported so stream/shared/controller-layout.js (the single resolver
// every platform's Player.jsx now goes through) can look up a component by
// preset name without a second copy of this table.
var PRESET_COMPONENT_BY_NAME = {
  "default": DefaultGamepad,
  ps1: PS1,
  dualshock: DualShock,
  dualshock3: DualShock3,
  dualsense: DualSense,
  psp: PSP,
  gba: GBA,
  genesis: Genesis,
  nes: NES,
  snes: SNES,
  n64: N64,
  gamecube: N64,
  joycon: JoyCon,
  xbox: Xbox
};

// Map consoleId → controller component (new system).
var RETRO_CONTROLLER_MAP = Object.fromEntries(Object.entries(RETRO_CONTROLLER_PRESET_MAP).map(function (_ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
    consoleId = _ref3[0],
    presetName = _ref3[1];
  return [consoleId, PRESET_COMPONENT_BY_NAME[presetName]];
}));

/***/ }

}]);
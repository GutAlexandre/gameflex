"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_streamex_KeyTestPad_jsx"],{

/***/ "./src/webapp/src/app/gameflex/stream/streamex/KeyTestPad.jsx"
/*!********************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/streamex/KeyTestPad.jsx ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeyTestPad),
/* harmony export */   useKeytestPad: () => (/* binding */ useKeytestPad)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/keyMapping.js */ "./src/webapp/src/app/gameflex/libs/keyMapping.js");
/* harmony import */ var _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/Controllers.jsx */ "./src/webapp/src/app/gameflex/controllers/Controllers.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;



// Gamepad API standard-layout index → profile button id — the same order as
// the streamex pads (components/NintendoSwitch.jsx), so a physical controller
// lands on the same buttons.

var GAMEPAD_ORDER = ["a", "b", "x", "y", "l", "r", "zl", "zr", "minus", "plus", "lstick", "rstick", "dup", "ddown", "dleft", "dright"];
var GAMEPAD_POLL_MS = 50;
// Hall-effect triggers (L2/R2) report continuous values; a plain digital
// button only ever reports 0 or 1. Once a trigger has been seen BETWEEN 0
// and 1, it is treated as analog: press/release thresholds move to 5 % and
// every ≥1 % change is relayed as a pressure row (ab). Digital triggers
// keep the plain kd/ku press/release.
var TRIGGER_ANALOG_PRESS = 0.05;
var TRIGGER_PERCENT_STEP = 10; // 1 % of the 0..1000 scale

// Stick names from the virtual pad → the wire command's stick id.
var STICK_WHICH = {
  LEFT_STICK: "l",
  RIGHT_STICK: "r"
};

// Two held d-pad indices (standard order) → the preset's diagonal name — the
// same chord vocabulary the mapping capture/runtime uses.
var DPAD_CHORD_BY_DIRECTIONS = {
  "12+14": "DPAD_UP_LEFT",
  "12+15": "DPAD_UP_RIGHT",
  "13+14": "DPAD_DOWN_LEFT",
  "13+15": "DPAD_DOWN_RIGHT"
};

// The keytest pad: the input layer for the keytest console. It relays the
// keyboard (kd/ku by event.code) AND the physical gamepads (Gamepad API,
// resolved through the preset's button names so a real pad logs exactly like
// the virtual one, diagonals included), plus both sticks (st). An optional
// ControllerComponent renders the preset's virtual controller on top — pages
// that have no preset (a joiner in the generic streaming page) pass nothing
// and get the input layer alone.
function KeyTestPad(_ref) {
  var _ref$profileButtons = _ref.profileButtons,
    profileButtons = _ref$profileButtons === void 0 ? [] : _ref$profileButtons,
    enabled = _ref.enabled,
    sendInput = _ref.sendInput,
    ControllerComponent = _ref.ControllerComponent,
    controllerName = _ref.controllerName,
    onButtonDown = _ref.onButtonDown,
    onButtonUp = _ref.onButtonUp,
    onAnalogMove = _ref.onAnalogMove;
  // LE PAD NE CONNAÎT PLUS LE FIL.
  //
  // Il n'écrivait que des lignes streamex (`kd,CROSS`) via `sendInput`.
  // Depuis que le téléphone héberge KeyTest, la même manette sert AUSSI le
  // chemin rétro, qui n'a pas de `sendInput` mais des rappels nommés — et
  // chaque pression y levait, faute des deux props qu'elle attendait.
  //
  // `emit` traduit au dernier mètre, exactement comme la convention le veut
  // (le protocole est une vraie différence de plateforme, la FORME vue par
  // le pad ne doit pas l'être). Une ligne qu'on ne sait pas traduire est
  // ignorée : côté rétro, le clavier a déjà son propre chemin.
  var emit = function emit(line) {
    if (sendInput) {
      sendInput(line);
      return;
    }
    var _String$split = String(line).split(","),
      _String$split2 = _slicedToArray(_String$split, 4),
      kind = _String$split2[0],
      first = _String$split2[1],
      second = _String$split2[2],
      third = _String$split2[3];
    if (kind === "kd") {
      onButtonDown === null || onButtonDown === void 0 || onButtonDown(first);
    } else if (kind === "ku") {
      onButtonUp === null || onButtonUp === void 0 || onButtonUp(first);
    } else if (kind === "st") {
      onAnalogMove === null || onAnalogMove === void 0 || onAnalogMove(first === "r" ? "RIGHT_STICK" : "LEFT_STICK", Number(second) / 1000, Number(third) / 1000);
    }
  };

  // Keyboard pass-through — physical keys relayed verbatim (kd/ku by
  // event.code). Code-less events (some gamepad→keyboard drivers dispatch
  // them) are dropped, and keydown stops propagation in the capture phase
  // so a driver-emulated Escape/Back cannot close the offcanvas mid-test.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled) return;
    var keydown = function keydown(event) {
      if (event.repeat || !event.code) return;
      event.preventDefault();
      event.stopPropagation();
      emit("kd,".concat(event.code));
    };
    var keyup = function keyup(event) {
      if (!event.code) return;
      emit("ku,".concat(event.code));
    };
    window.addEventListener("keydown", keydown, true);
    window.addEventListener("keyup", keyup, true);
    return function () {
      window.removeEventListener("keydown", keydown, true);
      window.removeEventListener("keyup", keyup, true);
    };
  }, [enabled, sendInput]);

  // Physical gamepads — logical inputs computed from the HELD buttons:
  // singles resolve through the preset's own button names (the same table
  // the auto-mapping uses), and a held d-pad diagonal resolves as ONE
  // chord (DPAD_DOWN_RIGHT) that suppresses its two directions — so a
  // physical pad logs exactly like the virtual one.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled) return;
    var nameByIndex = (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_1__.defaultMappingForController)(controllerName) || {};
    var active = new Set(); // wire names currently sent down
    var lastStick = new Map(); // `${gamepad.index}-${which}` → last "x,y" sent
    var analogTriggers = new Set(); // trigger indices seen between 0 and 1 (hall effect)
    var triggerLast = new Map(); // `${gamepad.index}-${index}` → last percent sent
    var timer = setInterval(function () {
      var _iterator = _createForOfIteratorHelper(navigator.getGamepads ? navigator.getGamepads() : []),
        _step;
      try {
        var _loop = function _loop() {
          var gamepad = _step.value;
          if (!gamepad || !gamepad.connected) return 1; // continue
          var held = new Set();
          gamepad.buttons.forEach(function (button, index) {
            var value = typeof button.value === "number" ? button.value : button.pressed ? 1 : 0;
            if ((index === 6 || index === 7) && value > 0 && value < 1) {
              analogTriggers.add(index);
            }
            var down = analogTriggers.has(index) ? value >= TRIGGER_ANALOG_PRESS : button.pressed || value > 0.5;
            if (down) held.add(String(index));
          });
          var heldDirections = ["12", "13", "14", "15"].filter(function (index) {
            return held.has(index);
          });
          var chord = heldDirections.length === 2 ? DPAD_CHORD_BY_DIRECTIONS[_toConsumableArray(heldDirections).sort().join("+")] : null;
          var desired = new Set();
          if (chord) desired.add(chord);
          var _loop2 = function _loop2(index) {
              var _profileButtons$find;
              if (!held.has(String(index))) return 0; // continue
              if (chord && index >= 12 && index <= 15) return 0; // continue
              // covered by the chord
              var name = nameByIndex[String((0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_1__.positionalButtonIndex)(gamepad.id, index))];
              var key = name || ((_profileButtons$find = profileButtons.find(function (entry) {
                return entry.id === GAMEPAD_ORDER[(0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_1__.positionalButtonIndex)(gamepad.id, index)];
              })) === null || _profileButtons$find === void 0 ? void 0 : _profileButtons$find.key);
              if (key) desired.add(key);
            },
            _ret;
          for (var index = 0; index < GAMEPAD_ORDER.length; index++) {
            _ret = _loop2(index);
            if (_ret === 0) continue;
          }
          for (var _i = 0, _arr = _toConsumableArray(active); _i < _arr.length; _i++) {
            var key = _arr[_i];
            if (!desired.has(key)) {
              active["delete"](key);
              emit("ku,".concat(key));
            }
          }
          var _iterator2 = _createForOfIteratorHelper(desired),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _key = _step2.value;
              if (!active.has(_key)) {
                active.add(_key);
                emit("kd,".concat(_key));
              }
            }
            // Hall-effect trigger pressure — one ab row per ≥1 % change
            // while held. The release itself goes through ku (the display
            // renders a "(Released)" row), so ab,0 is never sent.
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          var _iterator3 = _createForOfIteratorHelper(analogTriggers),
            _step3;
          try {
            var _loop3 = function _loop3() {
                var _profileButtons$find2, _gamepad$buttons$inde;
                var index = _step3.value;
                var key = nameByIndex[String((0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_1__.positionalButtonIndex)(gamepad.id, index))] || ((_profileButtons$find2 = profileButtons.find(function (entry) {
                  return entry.id === GAMEPAD_ORDER[(0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_1__.positionalButtonIndex)(gamepad.id, index)];
                })) === null || _profileButtons$find2 === void 0 ? void 0 : _profileButtons$find2.key);
                if (!key) return 0; // continue
                var value = typeof ((_gamepad$buttons$inde = gamepad.buttons[index]) === null || _gamepad$buttons$inde === void 0 ? void 0 : _gamepad$buttons$inde.value) === "number" ? gamepad.buttons[index].value : 0;
                var percent = Math.round(value * 1000);
                if (percent <= 0) return 0; // continue
                var stamp = "".concat(gamepad.index, "-").concat(index);
                var last = triggerLast.get(stamp);
                if (last === undefined || Math.abs(percent - last) >= TRIGGER_PERCENT_STEP) {
                  triggerLast.set(stamp, percent);
                  emit("ab,".concat(key, ",").concat(percent));
                }
              },
              _ret2;
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _ret2 = _loop3();
              if (_ret2 === 0) continue;
            }
            // Standard Gamepad API axes: [0,1] = left stick, [2,3] =
            // right stick. Only CHANGED positions are sent (a held stick
            // re-sending every poll would spam the WS for nothing).
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          var sticks = {
            l: [gamepad.axes[0] || 0, gamepad.axes[1] || 0],
            r: [gamepad.axes[2] || 0, gamepad.axes[3] || 0]
          };
          for (var _i2 = 0, _Object$entries = Object.entries(sticks); _i2 < _Object$entries.length; _i2++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
              which = _Object$entries$_i[0],
              axes = _Object$entries$_i[1];
            var x = Math.round(axes[0] * 1000);
            var y = Math.round(axes[1] * 1000);
            var stamp = "".concat(gamepad.index, "-").concat(which);
            var value = "".concat(x, ",").concat(y);
            if (lastStick.get(stamp) !== value) {
              lastStick.set(stamp, value);
              emit("st,".concat(which, ",").concat(x, ",").concat(y));
            }
          }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          if (_loop()) continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }, GAMEPAD_POLL_MS);
    return function () {
      return clearInterval(timer);
    };
  }, [enabled, controllerName, profileButtons, sendInput]);
  if (!ControllerComponent) {
    return null; // input layer only (no preset to draw)
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ControllerComponent, {
    onButtonDown: function onButtonDown(name) {
      var _profileButtons$find3;
      if (!enabled) return;
      // Without a preset (joiner) the virtual pad's names are the
      // profile ids — resolve them to the profile's wire keys so
      // the display logs the same label as a physical pad.
      var key = ((_profileButtons$find3 = profileButtons.find(function (entry) {
        return entry.id === name;
      })) === null || _profileButtons$find3 === void 0 ? void 0 : _profileButtons$find3.key) || name;
      emit("kd,".concat(key));
    },
    onButtonUp: function onButtonUp(name) {
      var _profileButtons$find4;
      if (!enabled) return;
      var key = ((_profileButtons$find4 = profileButtons.find(function (entry) {
        return entry.id === name;
      })) === null || _profileButtons$find4 === void 0 ? void 0 : _profileButtons$find4.key) || name;
      emit("ku,".concat(key));
    },
    onAnalogMove: function onAnalogMove(name, x, y) {
      if (!enabled) return;
      var which = STICK_WHICH[name];
      if (!which) return;
      var clamp = function clamp(value) {
        return Math.max(-1000, Math.min(1000, Math.round(value * 1000)));
      };
      emit("st,".concat(which, ",").concat(clamp(x), ",").concat(clamp(y)));
    }
  });
}

/**
 * Le pad de KeyTest pour un preset donné — la décision, sortie du hook.
 *
 * Elle vivait dans `useStreamexInput`, ce qui la rendait invisible à toute
 * plateforme qui ne serait pas streamex. Or KeyTest n'appartient pas à une
 * plateforme : c'est un conteneur sur le serveur et une vue dessinée sur le
 * téléphone (KeytestHost.java), et la page qui l'affiche est la même. Le pad
 * ne dépend que du preset qu'on teste.
 *
 * Sans preset — quelqu'un qui rejoint depuis le tableau de bord — c'est le
 * pad nu de la couche d'entrée.
 */
function useKeytestPad(preview) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!preview) {
      return KeyTestPad;
    }
    var PresetComponent = _controllers_Controllers_jsx__WEBPACK_IMPORTED_MODULE_2__.PRESET_COMPONENT_BY_NAME[preview];
    return function (padProps) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(KeyTestPad, _objectSpread(_objectSpread({}, padProps), {}, {
        ControllerComponent: PresetComponent,
        controllerName: preview
      }));
    };
  }, [preview]);
}

/***/ }

}]);
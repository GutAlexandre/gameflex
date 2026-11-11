"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_Streaming_jsx"],{

/***/ "./src/webapp/src/app/gameflex/Streaming.jsx"
/*!***************************************************!*\
  !*** ./src/webapp/src/app/gameflex/Streaming.jsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StreamingShell: () => (/* binding */ StreamingShell),
/* harmony export */   "default": () => (/* binding */ Streaming),
/* harmony export */   sessionPhase: () => (/* binding */ sessionPhase),
/* harmony export */   usePictureInPictureOnHide: () => (/* binding */ usePictureInPictureOnHide)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./src/webapp/src/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./src/webapp/src/node_modules/react-router/dist/index.js");
/* harmony import */ var _stream_shared_hooks_use_launch_progress_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stream/shared/hooks/use-launch-progress.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-launch-progress.js");
/* harmony import */ var _api_retrogaming_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/retrogaming.js */ "./src/webapp/src/app/gameflex/api/retrogaming.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./src/webapp/src/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/ProgressBar.js");
/* harmony import */ var _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../skeleton/skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var _libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./libs/SessionPool.js */ "./src/webapp/src/app/gameflex/libs/SessionPool.js");
/* harmony import */ var _libs_deviceSession_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./libs/deviceSession.js */ "./src/webapp/src/app/gameflex/libs/deviceSession.js");
/* harmony import */ var _libs_deviceStream_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./libs/deviceStream.js */ "./src/webapp/src/app/gameflex/libs/deviceStream.js");
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _contexts_PresenceContext_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contexts/PresenceContext.jsx */ "./src/webapp/src/app/gameflex/contexts/PresenceContext.jsx");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var _stream_onscreen_cast_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stream/onscreen/cast.js */ "./src/webapp/src/app/gameflex/stream/onscreen/cast.js");
/* harmony import */ var _stream_retrogaming_hooks_use_retrogaming_input_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stream/retrogaming/hooks/use-retrogaming-input.js */ "./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-input.js");
/* harmony import */ var _stream_streamex_hooks_use_streamex_input_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stream/streamex/hooks/use-streamex-input.js */ "./src/webapp/src/app/gameflex/stream/streamex/hooks/use-streamex-input.js");
/* harmony import */ var _stream_remoteplay_hooks_use_remoteplay_input_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stream/remoteplay/hooks/use-remoteplay-input.js */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-remoteplay-input.js");
/* harmony import */ var _api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./api/spawnSessions.js */ "./src/webapp/src/app/gameflex/api/spawnSessions.js");
/* harmony import */ var _libs_gamepadPreferences_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./libs/gamepadPreferences.js */ "./src/webapp/src/app/gameflex/libs/gamepadPreferences.js");
/* harmony import */ var _hooks_use_gamepad_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./hooks/use-gamepad.jsx */ "./src/webapp/src/app/gameflex/hooks/use-gamepad.jsx");
/* harmony import */ var _contexts_ConsolesContext_jsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contexts/ConsolesContext.jsx */ "./src/webapp/src/app/gameflex/contexts/ConsolesContext.jsx");
/* harmony import */ var _stream_shared_hooks_use_touch_screen_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./stream/shared/hooks/use-touch-screen.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-touch-screen.js");
/* harmony import */ var _stream_shared_hooks_use_screen_rotation_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./stream/shared/hooks/use-screen-rotation.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-screen-rotation.js");
/* harmony import */ var _stream_shared_hooks_use_streaming_menu_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./stream/shared/hooks/use-streaming-menu.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-streaming-menu.js");
/* harmony import */ var _libs_gameInput_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./libs/gameInput.js */ "./src/webapp/src/app/gameflex/libs/gameInput.js");
/* harmony import */ var _libs_screenOrientation_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./libs/screenOrientation.js */ "./src/webapp/src/app/gameflex/libs/screenOrientation.js");
/* harmony import */ var _stream_shared_switches_store_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./stream/shared/switches-store.js */ "./src/webapp/src/app/gameflex/stream/shared/switches-store.js");
/* harmony import */ var _stream_onscreen_FloatingPanel_jsx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./stream/onscreen/FloatingPanel.jsx */ "./src/webapp/src/app/gameflex/stream/onscreen/FloatingPanel.jsx");
/* harmony import */ var _stream_onscreen_Controllers_jsx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./stream/onscreen/Controllers.jsx */ "./src/webapp/src/app/gameflex/stream/onscreen/Controllers.jsx");
/* harmony import */ var _shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/utils/device-detection.js */ "./src/webapp/src/app/gameflex/shared/utils/device-detection.js");
/* harmony import */ var _libs_capabilities_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./libs/capabilities.js */ "./src/webapp/src/app/gameflex/libs/capabilities.js");
/* harmony import */ var _libs_serverBase_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./libs/serverBase.js */ "./src/webapp/src/app/gameflex/libs/serverBase.js");
/* harmony import */ var _libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./libs/kernelChannel.js */ "./src/webapp/src/app/gameflex/libs/kernelChannel.js");
/* harmony import */ var _libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./libs/federatedHost.js */ "./src/webapp/src/app/gameflex/libs/federatedHost.js");
/* harmony import */ var _libs_gamepadPresence_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./libs/gamepadPresence.js */ "./src/webapp/src/app/gameflex/libs/gamepadPresence.js");
/* harmony import */ var _stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./stream/shared/SessionStream.jsx */ "./src/webapp/src/app/gameflex/stream/shared/SessionStream.jsx");
/* harmony import */ var _stream_shared_hooks_use_adaptive_quality_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./stream/shared/hooks/use-adaptive-quality.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-adaptive-quality.js");
/* harmony import */ var _stream_shared_hooks_use_child_session_ws_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./stream/shared/hooks/use-child-session-ws.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-child-session-ws.js");
/* harmony import */ var _stream_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./stream/shared/activity-store.js */ "./src/webapp/src/app/gameflex/stream/shared/activity-store.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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




























// Vendor-prefixed fullscreen, already written once — the page was calling
// the raw API and ignoring this.







// How long the platform connection waits for the page's gateway viewer before
// going ahead without it — see the gate effect in StreamingShell. Long enough
// for a child that is still attaching to the gateway (SessionStream retries
// every 2s), short enough that a session with no stream at all still reaches
// its own error path instead of hanging silently.
var PLATFORM_CONNECT_WITHOUT_VIEWER_MS = 8000;
var Form = _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Form;

// Ends the session server-side for everyone (owner-only, see stopSession's
// own doc) — distinct from disconnect()/leavePage(), which only ever tear
// down THIS browser's own connection.
function stopSessionForEveryone(session, token) {
  // Une partie de l'appareil n'a pas de session sur un serveur : c'est
  // `terminate` du hook qui l'arrête, déjà appelé juste avant.
  if (session.platform === "device") {
    return Promise.resolve();
  }
  return (0,_api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_19__.stopSession)(session.platform, session.id, token);
}

// Attempts real Picture-in-Picture the moment a streaming/watch tab is
// backgrounded — best-effort, never throws out to the caller. Generic
// across all 3 platforms and watch mode, so it lives here, called ONCE by
// StreamingShell, instead of being duplicated inside each useXInput.
function usePictureInPictureOnHide(videoRef) {
  ;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleVisibilityChange = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var video, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              video = videoRef.current;
              if (video) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              if (!document.hidden) {
                _context.n = 6;
                break;
              }
              if (!(document.pictureInPictureEnabled && video.requestPictureInPicture)) {
                _context.n = 5;
                break;
              }
              _context.p = 2;
              _context.n = 3;
              return video.requestPictureInPicture();
            case 3:
              return _context.a(2);
            case 4:
              _context.p = 4;
              _t = _context.v;
            case 5:
              _context.n = 7;
              break;
            case 6:
              if (document.pictureInPictureElement === video) {
                document.exitPictureInPicture()["catch"](function () {});
              }
            case 7:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4]]);
      }));
      return function handleVisibilityChange() {
        return _ref.apply(this, arguments);
      };
    }();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return function () {
      return document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [videoRef]);
}

// Generic physical-gamepad presence — every platform's virtual pad hides by
// default while a real controller is connected, same detection everywhere.
// It lives in libs/gamepadPresence.js since the clip-on half screen (#410)
// asks the same question outside a game.

// The one "connecting" surface + the shared video-first stream surface live
// in stream/shared/SessionStream.jsx — Dashboard's live thumbnails import
// the SAME SessionStream, so "live now" and /streaming share one component.
;




// The per-platform input hook — returns a unified shape for all 3 platforms, 
// so StreamingShell can just spread it onto <StreamingShell> and not care about the platform.
// screenRef — the PAGE owns the one gateway viewer now (see SessionStream's
// own doc); every hook receives it instead of creating a second one.

function useStreamingInput(_ref2) {
  var screenRef = _ref2.screenRef,
    session = _ref2.session,
    context = _ref2.context,
    t = _ref2.t,
    _ref2$options = _ref2.options,
    options = _ref2$options === void 0 ? {} : _ref2$options;
  // Le dispatcher suit la MÊME règle que les hooks qu'il appelle : c'est
  // lui aussi un hook partagé entre plateformes. Une règle qui s'arrête
  // avant celui qui la fait respecter ne tient pas longtemps.
  var isWatching = options.isWatching,
    drivesPad = options.drivesPad,
    childSlot = options.childSlot,
    onConnectionError = options.onConnectionError,
    onProgress = options.onProgress;
  switch (session.platform) {
    // L'ÉMULATEUR DU TÉLÉPHONE FAIT DU RETROGAMING (chantier 8, C8-P4).
    //
    // Il avait son propre hook, quatrième plateforme à côté de retro,
    // streamex et remoteplay — alors qu'il émule exactement comme la
    // première. Il a fallu y recopier la manette physique, l'écran
    // tactile, les disques et la pause ; le stick à l'écran n'y était
    // toujours pas, faute d'avoir voulu recopier une cinquième fois la
    // logique par console.
    //
    // Le téléphone sert maintenant le même canal de contrôle
    // (`/api/v1/retrogaming/stream/ws`), donc le même hook le pilote. Ce qui
    // reste différent est DÉCLARÉ, jamais branché ici : le rembobinage
    // n'existe pas sur ce runtime, et la capacité `rewind` le dit.
    case "device":
    case "retrogaming":
      return (0,_stream_retrogaming_hooks_use_retrogaming_input_js__WEBPACK_IMPORTED_MODULE_16__.useRetrogamingInput)({
        screenRef: screenRef,
        session: session,
        context: context,
        t: t,
        options: {
          isWatching: isWatching,
          childSlot: childSlot,
          onConnectionError: onConnectionError,
          onProgress: onProgress
        }
      });
    case "streamex":
      return (0,_stream_streamex_hooks_use_streamex_input_js__WEBPACK_IMPORTED_MODULE_17__.useStreamexInput)({
        screenRef: screenRef,
        session: session,
        t: t,
        options: {
          isWatching: isWatching,
          drivesPad: drivesPad
        }
      });
    default:
      return (0,_stream_remoteplay_hooks_use_remoteplay_input_js__WEBPACK_IMPORTED_MODULE_18__.useRemotePlayInput)({
        screenRef: screenRef,
        session: session,
        context: context,
        t: t,
        options: {}
      });
  }
}

// Same frozen-props problem as FloatingPanel (see createSwitchesStore's own
// doc above) — context.modal.open's content AND its opts (title,
// confirmLabel, onConfirm...) are captured once too. skeleton.js's
// "confirm" variant builds its icon/title/footer as static jQuery HTML
// at open() time, so there's no way to make THOSE reactive from outside —
// the fix is to not use that variant at all: open with variant "normal"
// and build the icon/title/switches/footer ourselves, in one component
// that subscribes to the store, so the whole modal (title included)
// actually reflects a toggle the instant it happens.
function QuitConfirmModal(_ref3) {
  var session = _ref3.session,
    isWatching = _ref3.isWatching,
    isOwner = _ref3.isOwner,
    _ref3$borrowing = _ref3.borrowing,
    borrowing = _ref3$borrowing === void 0 ? false : _ref3$borrowing,
    quitStore = _ref3.quitStore,
    t = _ref3.t,
    onConfirm = _ref3.onConfirm,
    onCancel = _ref3.onCancel;
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].context);
  var quitOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(quitStore.subscribe, quitStore.getSnapshot);
  var contextForm = {
    values: quitOptions,
    setValues: quitStore.setValues
  };
  // Only the OWNER may end the session or write its save state — a joiner
  // is a guest (2026-08-25). isWatching was the wrong gate: it is false
  // for every player, and a joiner is a player.
  // UNE PARTIE DU TÉLÉPHONE A MAINTENANT UNE SESSION À GARDER.
  //
  // Elle n'en avait pas quand ce garde a été écrit (2026-08-27) : quitter,
  // c'était arrêter, et poser la question n'avait pas de sens. Depuis, le
  // téléphone tient sa partie en cours et on peut la reprendre depuis le
  // tableau de bord — les deux issues existent donc vraiment, et le choix
  // redevient une vraie question (2026-09-02).
  var canEndSession = isOwner && !isWatching;
  // GELER N'EST POSSIBLE QUE SUR UN CŒUR.
  //
  // « Mettre le jeu en pause » suppose de figer l'émulation sans la
  // libérer, et seul un cœur libretro sait le faire — dans notre processus
  // pour l'appareil, dans son conteneur pour le serveur. Un conteneur
  // streamex n'a aucun mécanisme de pause, et une vraie PS5 ne se gèle pas
  // depuis un navigateur : proposer l'option là revenait à annoncer ce
  // qu'on ne peut pas tenir (signalé le 2026-09-10).
  var canPause = session.platform === "retrogaming" || session.platform === "device";
  // Un choix retenu d'une session précédente peut être devenu impossible :
  // le magasin d'options est partagé par toutes les plateformes. « Geler »
  // sur une console qui ne gèle pas se lit donc comme « partir » — le plus
  // proche, et le seul qui ne mente pas.
  var stored = canEndSession ? quitOptions.onQuit : "leave";
  var choice = stored === "pause" && !canPause ? "leave" : stored;
  // L'EMPRUNTEUR NE « REGARDE » PAS : il joue avec la manette du
  // propriétaire, et partir la lui rend — son onglet se ferme, elle revient
  // d'elle-même (#274).
  var title = borrowing ? t("streaming.quit.titleReturn") : isWatching ? t("streaming.quit.titleWatch") : choice === "kill" ? t("streaming.quit.titleKill") : choice === "pause" ? t("streaming.quit.titlePause") : t("streaming.quit.title");
  var confirmLabel = borrowing ? t("streaming.quit.confirmReturn") : isWatching ? t("streaming.quit.confirmWatch") : choice === "kill" ? t("streaming.quit.confirmKill") : choice === "pause" ? t("streaming.quit.confirmPause") : t("streaming.quit.confirm");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
    className: "text-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("i", {
      className: "bi bi-question-circle-fill d-block mb-3 text-primary",
      style: {
        fontSize: "4.5rem"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("h5", {
      className: "modal-title fw-bold mb-2",
      children: title
    }), canEndSession && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)(Form.Group, {
      label: t("streaming.quit.optionsLabel"),
      props: {
        style: {
          textAlign: "left"
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(Form.Select, {
        name: "onQuit",
        context: contextForm,
        options: [{
          value: "leave",
          label: t("streaming.quit.leaveLabel")
        }].concat(_toConsumableArray(canPause ? [{
          value: "pause",
          label: t("streaming.quit.pauseLabel")
        }] : []), [{
          value: "kill",
          label: t("streaming.quit.killLabel")
        }]),
        helpText: t("streaming.quit.".concat(choice, "Help"))
      }), (session.platform === "retrogaming" || session.platform === "device") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(Form.SkeletonSwitch, {
        name: "saveStateOnQuit",
        context: contextForm,
        label: t("streaming.quit.saveLabel"),
        helpText: t("streaming.quit.saveHelp"),
        onText: t("app.yes"),
        offText: t("app.no")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
      className: "d-flex gap-0 mt-4 pt-1 border-top",
      style: {
        marginLeft: "-1rem",
        marginRight: "-1rem",
        marginBottom: "-1rem"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variant: "link",
        className: "text-decoration-none flex-fill rounded-0 m-0 py-3 border-end",
        onClick: function onClick() {
          context.modal.close();
          onCancel === null || onCancel === void 0 || onCancel();
        },
        children: t("app.cancel")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variant: "link",
        className: "text-decoration-none flex-fill rounded-0 m-0 py-3 fw-semibold",
        onClick: function onClick() {
          context.modal.close();
          onConfirm(quitStore.getSnapshot());
        },
        children: confirmLabel
      })]
    })]
  });
}

// StreamingShell — mounted with key={session.id}, so a session/platform
// change is always a full remount: useStreamingInput's per-platform switch
// stays safe under the Rules of Hooks (exactly one branch runs for the
// whole lifetime of a given instance). Exported for the gamepad-test page (the
// Settings → Gamepad → Test page reuses it with a preset).
// sessionPhase — what the page is waiting for, DERIVED from what it already
// knows rather than stored. A stored phase is a second copy of the truth, and
// every copy in this codebase has eventually disagreed with the thing it
// copied (see chantier 4). Order matters: the first true line wins, so the
// most decisive fact is asked first.
//
// "live" means nothing this page controls is pending. Its LABEL still says
// "waiting for the video", and that is not a contradiction: the overlay is
// only ever rendered while there is no picture, so if everything else is ready
// the picture is precisely what is missing. An empty label there left a
// spinner with nothing next to it — the state that tells you least, shown
// exactly when you most want to know.
// How long each dead end is shown before the page leaves.
//
// Leaving is CHEAP, and that is what makes both numbers easy: the exit
// disconnects, it never terminates, and the child keeps the session for five
// minutes after its queue empties (IdleAfter). A console that comes back one
// minute later is still there to come back TO — the player returns through the
// Dashboard and their seat is waiting.
//
// So these delays are not a hedge against losing anything. They are reading
// time: long enough to see what happened, short enough not to sit on a frozen
// frame wondering. The ended session is a fact and needs only a glance; a
// stopped source is worth watching a little longer in case it simply resumes.
var SESSION_ENDED_REDIRECT_MS = 2500;
// Le jeu qui s'est arrêté DE LUI-MÊME (#504) mérite plus qu'un coup d'œil : ce
// n'est pas la fin qu'on a demandée, et le joueur doit pouvoir lire pourquoi.
var GAME_EXITED_REDIRECT_MS = 6000;
// Au-delà, une intro tenue sans que la partie envoie rien se dit « en attente
// de l'image du jeu » (#520) : en deçà, c'est un démarrage ordinaire.
var INTRO_HELD_SAY_MS = 6000;
// Porté de 10 s à 25 s le 2026-09-07 : depuis que l'arrêt de l'image
// DÉCLENCHE une reprise (SessionStream), partir au bout de dix secondes
// coupait la page pendant sa propre tentative — le filet de la reprise dure
// douze secondes. Une console vraiment éteinte fait donc attendre un peu plus
// longtemps, ce qui est le bon sens de l'erreur : mieux vaut regarder un écran
// noir cinq secondes de trop que perdre une partie qui allait revenir.
var SOURCE_GONE_REDIRECT_MS = 25000;
function sessionPhase(_ref4) {
  var ended = _ref4.ended,
    gameExited = _ref4.gameExited,
    authorityOpen = _ref4.authorityOpen,
    authorityAnswered = _ref4.authorityAnswered,
    claiming = _ref4.claiming,
    platformConnected = _ref4.platformConnected,
    videoSilent = _ref4.videoSilent,
    stalling = _ref4.stalling;
  // Le jeu s'est arrêté de lui-même (son émulateur est sorti, #504) : une fin
  // que personne n'a demandée, et la page le dit au lieu de « la session est
  // terminée ».
  if (ended && gameExited) return "gameExited";
  if (ended) return "ending";
  if (!authorityOpen) return "connecting";
  if (!authorityAnswered) return "joining";
  if (claiming) return "waitingControl";
  // `platformConnected` est l'état du FLUX (la PeerConnection), et rien
  // d'autre. Le canal de contrôle a longtemps pu l'éteindre en tombant —
  // d'où « En attente de la vidéo… » par-dessus une image qui tournait ;
  // c'est corrigé à la source, dans le onClose du hook rétro, pas ici.
  if (!platformConnected) return "waitingVideo";
  // BEFORE stalling, and that ordering is the point. Stalling means the
  // stream is struggling; this means it stopped — a console switched off,
  // a source that died. Both look identical on screen, and only one of them
  // is worth waiting through, so the page must not offer the hopeful word
  // for the hopeless case.
  if (videoSilent) return "sourceGone";
  if (stalling) return "stalling";
  return "live";
}

// `launchSteps` — les étapes du KERNEL, franchies avant que cette coquille
// existe (#191). Elles descendent d'en haut plutôt que d'être refaites ici :
// la route les a reçues sur le canal du lancement, et les faire disparaître au
// moment où la session se résout donnerait deux listes qui se remplacent là où
// l'utilisateur en attend une seule, qui se poursuit jusqu'à l'image.
// EN SPECTATEUR, LES QUINZE ÉTAPES SONT DÉJÀ ACQUISES.
//
// Demandé avec la fonctionnalité elle-même : « c'est la même chose pour
// isWatching sauf que les étapes fetching games, emulator, etc... seront déjà
// faits, ils seront ok par défaut ». Un spectateur arrive sur une partie qui
// TOURNE : il n'a lancé aucun jeu, donc rien ne lui donne de `launchId`, donc
// l'écran ne se déclenchait jamais pour lui — mesuré le 2026-09-18 sur une
// vraie partie, zéro étape et l'image arrivant nue à 1,3 s.
//
// La dernière entrée n'est pas un ornement : `LaunchSteps` donne le tourniquet
// à la DERNIÈRE de la liste. Sans une étape réellement en cours, il tournerait
// sur « Démarrage de l'émulation », finie depuis longtemps. Ce qui est en cours
// pour un spectateur, c'est l'attache du flux — c'est donc elle qui le porte.
var WATCH_LAUNCH_STEPS = ["session.requested", "session.ready", "game.loaded", "core.required", "core.resolved", "core.loaded", "bios.required", "container.creating", "container.created", "container.waiting", "container.ready", "rom.ready", "bios.resolved", "emulator.ready", "stream.attaching"].map(function (step) {
  return {
    step: step
  };
});
function StreamingShell(_ref5) {
  var _input$extraProps, _session$me2, _input$extraProps6;
  var t = _ref5.t,
    user = _ref5.user,
    token = _ref5.token,
    session = _ref5.session,
    context = _ref5.context,
    setTerminateReason = _ref5.setTerminateReason,
    onTerminate = _ref5.onTerminate,
    reportPlaying = _ref5.reportPlaying,
    reportIdle = _ref5.reportIdle,
    onWatchingChange = _ref5.onWatchingChange,
    leaveRef = _ref5.leaveRef,
    wantsPlay = _ref5.wantsPlay,
    onPlayIntentSent = _ref5.onPlayIntentSent,
    _ref5$launchSteps = _ref5.launchSteps,
    launchSteps = _ref5$launchSteps === void 0 ? [] : _ref5$launchSteps,
    _ref5$launchId = _ref5.launchId,
    launchId = _ref5$launchId === void 0 ? null : _ref5$launchId;
  // isWatching is CONSUMED, never derived (roadmap P2): the kernel pushes
  // the role on {type:"private"} right after the subscribe, then on every
  // change. The full UI renders only once that first private message
  // arrived so the mount effects (presence role, pad visibility) see the
  // real value — the localStorage marker and the local decision effect
  // are gone.
  // Un jeu du téléphone n'a pas d'autorité à attendre : il EST l'autorité.
  //
  // Ces deux drapeaux disent « le kernel a ouvert le canal » et « il a
  // répondu » — deux étapes qui n'existent pas quand la source est dans le
  // même appareil que la page. Sans cette exception, la phase de session
  // reste « connexion » pour toujours : l'image arrive, et l'écran affiche
  // quand même « connexion à la session… » par-dessus, manette comprise.
  var isDeviceSession = (session === null || session === void 0 ? void 0 : session.platform) === "device";
  // LA PARTIE DU TÉLÉPHONE EST À SON PROPRIÉTAIRE — pas à tout compte qui
  // l'ouvre (2026-10-23). Les autres la voient dans « en direct » et y
  // arrivent par « Regarder » ou « Rejoindre », comme une partie du
  // serveur : celui qui regardait démarrait en joueur et prenait une place
  // de lui-même (le porteur : « même avec Watch je me retrouve avec une
  // manette »).
  var ownsDeviceSession = isDeviceSession && Boolean(session === null || session === void 0 ? void 0 : session.owner) && session.owner === (user === null || user === void 0 ? void 0 : user.username);

  // UNE PARTIE DU TÉLÉPHONE QUI NE DÉMARRE PAS SE DIT ICI (2026-10-02).
  // L'appareil annonce l'échec sur son canal d'événements — téléchargement
  // cassé, ou jeu que le cœur refuse de charger. Seule la fiche du jeu
  // l'écoutait ; or c'est la page de jeu qui est ouverte à ce moment-là, et
  // elle attendait l'image indéfiniment devant un écran noir.
  //
  // L'échec arrive souvent AVANT que cette page ne s'abonne (19 ms mesurées) :
  // on regarde donc d'abord s'il y en a un, récent, pour CE jeu — puis on
  // écoute. Un échec d'un autre jeu ne nous concerne pas.
  var deviceGame = isDeviceSession ? String((session === null || session === void 0 ? void 0 : session.id) || "").replace(/^device:/, "") : "";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isDeviceSession) {
      return undefined;
    }
    var end = function end(failure) {
      setTerminateReason(failure !== null && failure !== void 0 && failure.reason ? "".concat(t("streaming.launch.failed"), " (").concat(failure.reason, ")") : t("streaming.launch.failed"));
    };
    var already = (0,_libs_deviceStream_js__WEBPACK_IMPORTED_MODULE_11__.recentDeviceFailure)(deviceGame);
    if (already) {
      end(already);
      return undefined;
    }
    return (0,_libs_deviceStream_js__WEBPACK_IMPORTED_MODULE_11__.onDeviceFailed)(function (failure) {
      if (!(failure !== null && failure !== void 0 && failure.game) || failure.game === deviceGame) {
        end(failure);
      }
    });
  }, [isDeviceSession, deviceGame, setTerminateReason, t]);

  // C7-P2 : une partie du téléphone parle à la façade v4 du kernel, qui ne
  // connaît qu'une session fixe — « device-session » — quel que soit le jeu
  // lancé. La page garde son id propre (`device:<fichier>`) pour le reste.
  var childSessionId = session.childSessionId || session.id;
  // Et son porteur JOUE — il n'est pas spectateur d'une partie qui serait
  // ailleurs. Sans ça, la manette à l'écran ne se monte jamais : elle
  // attend un rôle que personne ne viendra donner.
  // UN INVITÉ ARRIVE EN SPECTATEUR.
  //
  // Il n'a pas de siège : la manette appartient à celui qui tient le
  // téléphone, et elle se DEMANDE (handover). Démarrer en joueur — ce que
  // faisait `!isDeviceSession`, vrai pour l'invité comme pour l'hôte —
  // sautait toute cette étape : la section « demander la manette » ne
  // s'affichait jamais, et l'invité se croyait aux commandes sans que rien
  // ne réponde (signalé le 2026-09-01).
  //
  // Il n'y a pas de « takeover » ici, et c'est voulu : reprendre la main
  // suppose qu'on sache que c'est la MÊME personne sur un autre appareil,
  // ce qu'un réseau local sans comptes ne peut pas établir. Tout passe
  // donc par le handover, qui demande à un humain.
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!ownsDeviceSession || Boolean(session === null || session === void 0 ? void 0 : session.guest)),
    _useState2 = _slicedToArray(_useState, 2),
    isWatching = _useState2[0],
    setWatching = _useState2[1];
  // Has the authority answered at all? Set by the child's first state push
  // (and from the start on the device's own page, which is its own host).
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isDeviceSession),
    _useState4 = _slicedToArray(_useState3, 2),
    kernelPrivateReady = _useState4[0],
    setKernelPrivateReady = _useState4[1];
  // chantier-4 — MY slot, straight from the child. Not read back from the
  // pool: that copy arrives several hops later (child → mirror → kernel →
  // SessionPool), and in the meantime the page would dial the platform with
  // a role it no longer has. Using the authority's own answer instead of a
  // lagging copy is the whole point of this chantier.
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    childSlot = _useState6[0],
    setChildSlot = _useState6[1];
  // THE TWO ENDS OF A LOAN, as the child says them for THIS tab: the owner
  // may take their lent pad back, the borrower may give it back. Never
  // worked out here — a hand-over lends the pad, and only the child knows
  // who lent what.
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      canReclaim: false,
      canReturn: false,
      lentTo: ""
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    childLoan = _useState8[0],
    setChildLoan = _useState8[1];
  // WHICH PAD THIS TAB'S KEYS DRIVE, as the child says it (`you.controls`),
  // null until it has. Not the same question as isWatching: during a loan
  // (#274) the owner keeps their place and drives nothing, while the
  // borrower — a "playable viewer" — watches and drives the owner's pad.
  // isWatching says how this tab is CONNECTED; drivesPad, below, says
  // whether its controller does anything.
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    childControls = _useState0[0],
    setChildControls = _useState0[1];
  // Has the CHILD spoken yet? kernelPrivateReady starts true on the device's
  // own page, before its child has said anything: anything that must wait
  // for the authority itself waits on this.
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    childStateSeen = _useState10[0],
    setChildStateSeen = _useState10[1];
  // Said by the authority, never inferred. Drives the ending phase and the
  // redirect that follows it.
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    sessionEnded = _useState12[0],
    setSessionEnded = _useState12[1];
  // Pourquoi, quand personne ne l'a arrêtée : le jeu s'est arrêté (#504).
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    gameExited = _useState14[0],
    setGameExited = _useState14[1];
  // Reported by the video surface itself (GatewayWebRTC owns the element and
  // watches the frame counter), so it is true whether or not anyone opened
  // the stats panel.
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    videoSilent = _useState16[0],
    setVideoSilent = _useState16[1];
  // Everything this page says out loud names a person the way they chose to
  // be named. The raw username keeps its jobs — keys, comparisons, the wire.
  var displayNames = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_9__.useDisplayNames)();
  var nameOf = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (username) {
    return displayNames[username] || username;
  }, [displayNames]);
  var authorityGoneRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      return clearTimeout(authorityGoneRef.current);
    };
  }, []);
  // The pending hand-over request addressed to THIS holder (its prompt),
  // read from the child's state push.
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    slotRequests = _useState18[0],
    setSlotRequests = _useState18[1];
  // The broadcast players[] — who holds which pad, for targeting the
  // handover ask at the current holder.
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    broadcastPlayers = _useState20[0],
    setBroadcastPlayers = _useState20[1];
  // Present, holding nothing — what the "give the pad to…" entry draws
  // from. Absent when nobody watches, and then the give entry simply does
  // not appear — the same "absent = no section" rule the whole menu
  // already follows.
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    broadcastWatchers = _useState22[0],
    setBroadcastWatchers = _useState22[1];
  var hasPhysicalGamepad = (0,_libs_gamepadPresence_js__WEBPACK_IMPORTED_MODULE_36__.usePhysicalGamepad)();
  // The surface that goes fullscreen: the picture AND everything laid
  // over it (pad, panel, overlays), which are siblings of the <video>.
  var shellRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // A phone or a tablet — the only devices anyone holds sideways, and the
  // only ones this switch is offered on. Read once: a viewport that crosses
  // 768px mid-session is a desktop window being resized, not a device
  // turning into a phone.
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return (0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_31__.isMobileDevice)() || (0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_31__.isTabletDevice)();
    }),
    _useState24 = _slicedToArray(_useState23, 1),
    isHandheld = _useState24[0];
  var isPortraitViewport = (0,_stream_shared_hooks_use_screen_rotation_js__WEBPACK_IMPORTED_MODULE_24__.usePortraitViewport)();
  // The CSS fallback, not the goal. Turning the SCREEN is the browser's job
  // and it does it properly (the OS rotates, everything follows); rotating
  // the surface ourselves is what is left when the browser refuses — which
  // iOS Safari always does, and Chrome does outside fullscreen.
  // The page owns THE gateway viewer (one per page, whole page life) —
  // see SessionStream's own doc. The hooks used to each create their own
  // inside their WS onOpen, which is what made the video restart on every
  // role change and vanish for good on a missed "started".
  var screenRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // Read once per mount, synchronously — see getStoredUsername's doc and
  // the SessionStream props below.
  var viewerUsernameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (viewerUsernameRef.current === null) {
    // CHEZ UN HÔTE FÉDÉRÉ, C'EST SON NOM QUI COMPTE.
    //
    // `getStoredUsername` décode NOTRE jeton : parfait ici, faux là-bas.
    // Ce nom prend une place dans la file de joueurs de l'hôte, et le
    // nôtre n'y désigne personne (C9-P4).
    viewerUsernameRef.current = (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_33__.streamHostUsername)() || (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_12__.getStoredUsername)() || "";
  }
  var viewerUsername = viewerUsernameRef.current || null;
  // LES JALONS DU CONTENEUR (#191) — cœur, ROM, BIOS, jeu, géométrie. Ils
  // arrivent par le WebSocket de la session, donc après ceux du kernel, et se
  // mettent à leur suite : une seule liste, du clic à l'image.
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    childSteps = _useState26[0],
    setChildSteps = _useState26[1];
  // LA PREMIÈRE IMAGE, REMONTÉE JUSQU'ICI (#191).
  //
  // `SessionStream` la connaissait déjà mais la gardait pour lui (son
  // `sawPictureRef` ne sert qu'à son filet de reprise). C'est pourtant LE
  // signal que l'utilisateur a demandé pour la bascule : « dès que l'image
  // arrive et que la manette est initialisée ». `input.isConnected`, qui
  // servait jusqu'ici, dit seulement que la PeerConnection est établie — le
  // jeu pouvait tourner à l'écran avec les étapes encore par-dessus, ce qui
  // a été constaté en vrai sur le téléphone.
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    sawPicture = _useState28[0],
    setSawPicture = _useState28[1];
  // LA PREMIÈRE IMAGE N'EST PLUS CELLE DU JEU (chantier 35) : la passerelle
  // envoie d'abord l'intro — figée pendant le chargement, puis jouée. Elle
  // dit où en est ce spectateur sur le canal de contrôle, AVANT la qualité ;
  // une passerelle qui donne la qualité sans l'intro n'en joue pas, et une
  // qui ne dit rien du tout (sans canal de contrôle) a envoyé le jeu.
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    introLive = _useState30[0],
    setIntroLive = _useState30[1];
  var introToldRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  // LE JEU SE CHARGE : la partie envoie des images, mais rien encore — une
  // fenêtre d'émulateur noire. La passerelle tient l'intro, et la ligne
  // d'étape le dit (le porteur, 2026-10-26 : « avec un message qui dit ce
  // qui se passe »).
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    gameLoading = _useState32[0],
    setGameLoading = _useState32[1];
  // Où en est l'intro (`hold`, `play`, `switch`, `live`), et si l'hôte a
  // prévenu que le démarrage se compte en minutes (Box64 au téléphone,
  // #521) ; `heldLong` : tenue depuis plus de INTRO_HELD_SAY_MS (#520).
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState34 = _slicedToArray(_useState33, 2),
    introPhase = _useState34[0],
    setIntroPhase = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    slowStart = _useState36[0],
    setSlowStart = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    heldLong = _useState38[0],
    setHeldLong = _useState38[1];
  // A failed LAN video path must give an actionable exit, never an endless blank screen.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (session.platform !== "retrogaming" || sawPicture || slowStart) return undefined;
    var timeout = setTimeout(function () {
      return setTerminateReason("Le flux vidéo ne répond pas. Vérifiez l’accès UDP 9201–9300 au Pi sur le réseau local.");
    }, 60000);
    return function () {
      return clearTimeout(timeout);
    };
  }, [session.platform, sawPicture, slowStart, setTerminateReason]);

  // Le flux de la partie, pour le fond de l'écran d'attente de celui qui la
  // rejoint : il n'a pas de lancement à suivre, c'est sa propre vidéo.
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState40 = _slicedToArray(_useState39, 2),
    shellStream = _useState40[0],
    setShellStream = _useState40[1];
  var noteChildStep = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (step, detail) {
    setChildSteps(function (previous) {
      return [].concat(_toConsumableArray(previous), [{
        step: step,
        detail: detail,
        state: "done"
      }]);
    });
  }, []);
  // L'ATTACHE NE SE DIT QU'UNE FOIS (#195).
  //
  // `noteChildStep` empile sans dédoublonner, et ça suffisait : son seul
  // appelant jusqu'ici — les jalons du kernel — n'émet chaque étape qu'une
  // fois. L'attache de la passerelle, elle, se rejoue : quand aucune image
  // n'arrive avant l'échéance, `SessionStream` relance la négociation et
  // rappelle `onViewerReady` (son `restart`, SessionStream.jsx). Et sur
  // remote-play c'est le cas ORDINAIRE, pas l'exception — une demande
  // d'image-clé perdue n'est jamais réémise. Sans ce garde, l'écran
  // afficherait « Flux connecté » deux fois sur la plateforme même pour
  // laquelle cette étape a été écrite.
  var gatewayStepSaidRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  // Une passerelle sans canal de contrôle (avant la 0.6.0, chez un ami) ne
  // dira jamais rien : l'image qu'elle envoie est celle du jeu.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!sawPicture || introLive) {
      return undefined;
    }
    var timer = setTimeout(function () {
      if (!introToldRef.current) {
        setIntroLive(true);
      }
    }, 2500);
    return function () {
      return clearTimeout(timer);
    };
  }, [sawPicture, introLive]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (introPhase !== "hold") {
      setHeldLong(false);
      return undefined;
    }
    var timer = setTimeout(function () {
      return setHeldLong(true);
    }, INTRO_HELD_SAY_MS);
    return function () {
      return clearTimeout(timer);
    };
  }, [introPhase]);
  // CE QUE L'INTRO TENUE DIT, en une étape (#520, #521) : un démarrage qui se
  // compte en minutes, le jeu qui se charge, ou, passé quelques secondes
  // sans rien, l'image du jeu qu'on attend.
  var introStep = null;
  if (introPhase === "hold") {
    if (slowStart) {
      introStep = "game.loadingSlow";
    } else if (gameLoading) {
      introStep = "game.loading";
    } else if (heldLong) {
      introStep = "game.waitingPicture";
    }
  }
  // Le pad à l'écran, la manette physique, le tactile : tout ce qui ENVOIE
  // suit cette réponse-là. Avant que le child ait parlé, c'est l'ancienne
  // règle — jouer, c'est piloter.
  var drivesPad = childControls == null ? !isWatching : childControls > 0;
  var input = useStreamingInput({
    screenRef: screenRef,
    session: session,
    context: context,
    t: t,
    options: {
      isWatching: isWatching,
      drivesPad: drivesPad,
      childSlot: childSlot,
      onProgress: noteChildStep,
      onConnectionError: function onConnectionError(reason) {
        // chantier-4: "nobody is playing yet" is a NORMAL state, not a
        // failure. Everybody arrives watching, so on a child-managed
        // session a watcher's platform connection is expected to fail
        // until somebody takes the pad — and a fatal screen there hides
        // the very panel that lets them take it.
        //
        // The session's own existence is not in doubt (the child is
        // answering on its socket); only the emulation has not started.
        if (isWatching) {
          return;
        }
        setTerminateReason(reason);
      }
    }
  });

  // L'ÉCRAN TACTILE — la Nintendo DS, et toute console qui en a un.
  //
  // Le registre des consoles le dit (`touch`), et c'est une donnée du
  // matériel : la DS a un écran du bas, la NES n'en a pas, aucun core
  // n'annonce ça. Le savoir ici évite une liste de consoles codée dans le
  // frontend à côté de celle qui existe déjà en Go.
  //
  // Un spectateur n'y touche pas, comme il ne touche pas la manette.
  var consoles = (0,_contexts_ConsolesContext_jsx__WEBPACK_IMPORTED_MODULE_22__.useConsoles)();
  var hasTouchScreen = consoles.some(function (entry) {
    return entry.id === session.consoleId && entry.touch;
  });
  (0,_stream_shared_hooks_use_touch_screen_js__WEBPACK_IMPORTED_MODULE_23__.useTouchScreen)({
    screenRef: screenRef,
    enabled: hasTouchScreen && drivesPad,
    send: (_input$extraProps = input.extraProps) === null || _input$extraProps === void 0 || (_input$extraProps = _input$extraProps.touch) === null || _input$extraProps === void 0 ? void 0 : _input$extraProps.send
  });

  // P2 §1 — the façade socket drives the platform connection lifecycle:
  // onConnect at open, onLeave at error, onDisconnect at close. The
  // callbacks read `input` through a ref (input is rebuilt every render,
  // the socket must never reconnect over its identity).
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  inputRef.current = input;
  // Platform connect gate — see the effect below the socket setup.
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isDeviceSession),
    _useState42 = _slicedToArray(_useState41, 2),
    facadeOpen = _useState42[0],
    setFacadeOpen = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    viewerReady = _useState44[0],
    setViewerReady = _useState44[1];
  var platformConnectedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  // chantier-4 — every session is spoken to through its CHILD, the only
  // authority on who plays: the page talks to it directly (through the
  // kernel's byte-for-byte proxy) and the kernel decides nothing about it.

  // QUI ÉTAIT LÀ AU DERNIER ÉTAT — pour ne dire que ce qui a CHANGÉ.
  //
  // Les annonces d'arrivée et de départ venaient d'événements du kernel, sur
  // un socket que les sessions tenues par leur child n'ouvraient pas — donc
  // plus rien ne s'annonçait, sur AUCUNE des deux plateformes (signalé le
  // 2026-09-05 sur téléphone).
  //
  // On le dérive donc de l'état que le child pousse déjà. Rien de nouveau
  // sur le fil : la liste des présents est là, il suffisait de la comparer
  // à la précédente.
  var presentsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var handleChildState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message) {
    var _message$you, _message$you$slotId, _message$you2, _message$you$controls, _message$you3, _message$you4, _message$you5, _message$players, _message$watchers, _message$players2, _message$watchers2;
    // isWatching is the child's answer about THIS tab, not a role to
    // interpret: a tab plays if and only if its own socket holds the slot.
    var watching = !((_message$you = message.you) !== null && _message$you !== void 0 && _message$you.isPlaying);
    setWatching(watching);
    setChildSlot((_message$you$slotId = (_message$you2 = message.you) === null || _message$you2 === void 0 ? void 0 : _message$you2.slotId) !== null && _message$you$slotId !== void 0 ? _message$you$slotId : null);
    setChildControls((_message$you$controls = (_message$you3 = message.you) === null || _message$you3 === void 0 ? void 0 : _message$you3.controls) !== null && _message$you$controls !== void 0 ? _message$you$controls : 0);
    setChildLoan({
      canReclaim: ((_message$you4 = message.you) === null || _message$you4 === void 0 ? void 0 : _message$you4.canReclaim) === true,
      canReturn: ((_message$you5 = message.you) === null || _message$you5 === void 0 ? void 0 : _message$you5.canReturn) === true,
      // Who drives the owner's pad — "" when nobody borrowed it.
      lentTo: message.lentTo || ""
    });
    setBroadcastPlayers(((_message$players = message.players) !== null && _message$players !== void 0 ? _message$players : []).map(function (player) {
      return {
        username: player.username,
        role: player.isOwner ? "owner" : "player",
        slot: player.slotId,
        lentTo: player.lentTo || ""
      };
    }));
    // Who is here WITHOUT a pad — the list the "give the pad to…" entry
    // draws from. It has no v1 equivalent: the façade only ever published
    // players, which is why only the ASK direction could be built.
    setBroadcastWatchers((_message$watchers = message.watchers) !== null && _message$watchers !== void 0 ? _message$watchers : []);
    // Reused as-is by the holder's prompt below — the pending demand has
    // the same meaning, so the same UI serves it.
    setSlotRequests(message.pendingHandover && message.pendingHandover.to === (user === null || user === void 0 ? void 0 : user.username) ? [{
      from: message.pendingHandover.from
    }] : []);
    setKernelPrivateReady(true);
    setChildStateSeen(true);
    // The END arrives here, from the authority itself, while its socket is
    // still open — not later as a dead connection. A page that learns the
    // session is over only when the socket drops cannot tell "it ended"
    // from "I lost the network", and shows the wrong thing for both.
    if (message.terminated) {
      setGameExited(Boolean(message.gameExited));
      setSessionEnded(true);
    }
    // Les allées et venues, annoncées une fois chacune.
    //
    // Joueurs ET spectateurs : arriver pour regarder est une arrivée. Le
    // premier état ne dit rien — trouver trois personnes en entrant dans
    // une partie n'est pas une nouvelle, c'est la situation.
    var presents = new Set([].concat(_toConsumableArray(((_message$players2 = message.players) !== null && _message$players2 !== void 0 ? _message$players2 : []).map(function (player) {
      return player.username;
    })), _toConsumableArray((_message$watchers2 = message.watchers) !== null && _message$watchers2 !== void 0 ? _message$watchers2 : [])).filter(Boolean));
    var avant = presentsRef.current;
    presentsRef.current = presents;
    if (avant) {
      var _iterator = _createForOfIteratorHelper(presents),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var username = _step.value;
          if (!avant.has(username) && username !== (user === null || user === void 0 ? void 0 : user.username)) {
            context.toast.open(t("streaming.session.playerJoined", {
              username: nameOf(username)
            }), {
              variant: "normal"
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(avant),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _username = _step2.value;
          if (!presents.has(_username) && _username !== (user === null || user === void 0 ? void 0 : user.username)) {
            context.toast.open(t("streaming.session.playerLeft", {
              username: nameOf(_username)
            }), {
              variant: "normal"
            });
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    onWatchingChange === null || onWatchingChange === void 0 || onWatchingChange(watching);
  }, [onWatchingChange, user === null || user === void 0 ? void 0 : user.username, context, t, nameOf]);

  // « TOUJOURS LÀ ? » — la question du child, adressée à CE joueur.
  //
  // C'est le child qui surveille les entrées de ses joueurs, et c'est lui
  // qui pose la question à celui qui n'a rien touché depuis vingt-neuf
  // minutes. Vingt-neuf et pas quinze : une cinématique peut durer plus
  // d'un quart d'heure, et regarder son propre jeu n'est pas s'absenter.
  //
  // TOUT EST FRONTEND JUSQU'À L'ÉCHÉANCE. Le compte à rebours n'est qu'un
  // affichage ; personne n'est exclu tant qu'il court. À la fin, c'est le
  // child qui exclut — pas cette page, qui pourrait très bien être celle
  // qu'on vient de fermer.
  //
  // Répondre ne demande pas de viser ce bouton : toucher n'importe quoi
  // suffit, le prochain battement porte `hadInput` et le child efface sa
  // question tout seul. Le bouton est là pour qui a les mains ailleurs.
  var handleChildAfk = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message) {
    var seconds = Math.max(Math.round((message.graceMs || 60000) / 1000), 1);
    context.toast.open(t("streaming.afk.warning", {
      seconds: seconds
    }), {
      variant: "confirm",
      title: t("streaming.afk.title"),
      confirmLabel: t("streaming.afk.stillHere"),
      cancelLabel: t("app.cancel"),
      onConfirm: function onConfirm() {
        var _beatRef$current;
        (0,_stream_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_40__.markActivity)();
        (_beatRef$current = beatRef.current) === null || _beatRef$current === void 0 || _beatRef$current.call(beatRef, true);
      }
    });
  }, [context, t]);
  var handleChildResult = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message) {
    // Somebody handed YOU the pad. The state push already moved the slot;
    // what it cannot say is who held it out, and being handed a controller
    // by name is the whole point of the gesture.
    if (message.status === "received") {
      context.toast.open(t(message.lent ? "streaming.handover.lentToYou" : "streaming.handover.receivedFrom", {
        username: nameOf(message.from)
      }), {
        variant: "success"
      });
      return;
    }
    if (message.status === "granted") {
      return; // the state push already said so — this would be noise
    }
    // "abandoned" is not a refusal: it was legitimate when asked and the
    // world moved. Saying "you were denied" there would be a lie. And a
    // refusal says WHY when the child named it — "you already play
    // elsewhere" is not "the player kept the pad" (2026-10-09).
    var reasons = {
      "already playing in another session": "streaming.handover.playsElsewhere",
      "no slot available": "streaming.handover.noSlot"
    };
    context.toast.open(message.status === "abandoned" ? t("streaming.handover.claimFailed") : t(reasons[message.reason] || "streaming.handover.denied"), {
      variant: "warning"
    });
  }, [context, t, nameOf]);
  var childSocket = (0,_stream_shared_hooks_use_child_session_ws_js__WEBPACK_IMPORTED_MODULE_39__.useChildSessionWs)({
    sessionId: childSessionId,
    token: token,
    enabled: true,
    onState: handleChildState,
    onResult: handleChildResult,
    onAfk: handleChildAfk,
    onConnect: function onConnect() {
      setFacadeOpen(true);
      // Back on its feet: whatever the silence was, it was not the end.
      clearTimeout(authorityGoneRef.current);
    },
    onDisconnect: function onDisconnect() {
      setFacadeOpen(false);
      platformConnectedRef.current = false;
      // In v4 the child EXITS when its session is over, so a socket that
      // stays dead IS the end — and it is the only signal for a session
      // stopped from outside, which never gets to announce itself
      // (terminated arrives only on the child's own end paths).
      //
      // The delay is the whole point: a socket that closes and comes
      // back is a network blip, and calling that an ended session would
      // throw people out of a game over a hiccup. Only silence that
      // LASTS means the container is gone.
      clearTimeout(authorityGoneRef.current);
      authorityGoneRef.current = setTimeout(function () {
        return setSessionEnded(true);
      }, 12000);
    }
  });

  // ONE sender for the panel and the prompts. It translates the panel's
  // vocabulary into the CHILD's intents — the child alone decides who
  // plays — so FloatingPanel and the holder's prompt need to know nothing
  // about it.
  var sessionSend = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message) {
    var _message$to;
    var action = message.type === "requestslot" ? message.to ? "request-handover" : "join" : message.type === "cedeslot" ? "grant-handover" : message.type === "slotrequestdenied" ? "deny-handover"
    // The other direction: the holder passes the pad to
    // somebody watching, without being asked.
    : message.type === "giveslot" ? "give-handover"
    // The two ends of a loan (2026-10-09).
    : message.type === "reclaimslot" ? "reclaim" : message.type === "returnslot" ? "return" : null;
    if (!action) {
      return;
    }

    // On the child's own socket (P3): it speaks for this tab, and the
    // socket not having said hello yet simply means nothing goes out.
    childSocket.intent(action, (_message$to = message.to) !== null && _message$to !== void 0 ? _message$to : null);
  }, [childSocket]);

  // "I came here to play" — carried by ?play=1, set only by launching a
  // game, joining from the Dashboard, or taking a session back (see
  // buildStreamingUrl). Without it, launching a game landed on a black
  // watch screen: in v4 nobody plays until someone claims a slot, so the
  // emulator had not started and there was genuinely nothing to stream.
  //
  // It is an INTENT, never a grant. It runs one ordinary join through the
  // same POST any button uses, and the child validates it like any other —
  // a forged flag gets exactly what pressing "Take the controller" gets.
  // Fired here rather than at the button because the intent has to name the
  // socket that will hold the slot, and that socket only exists on this page.
  var playIntentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Wait for the CHILD's own answer — childStateSeen, never
    // kernelPrivateReady. On a brand-new session the page loads before the
    // mirror lands, so the v1 kernel path answers first and briefly says
    // "you are the owner, you are playing". Trusting that here spent the
    // intent WITHOUT EVER POSTING IT: the child then took over with an
    // empty queue and the page sat in watch forever. Reported live
    // 2026-08-25 ("je lance un jeu et je suis toujours en mode watch").
    // A device game's OWNER takes slot 1 the moment the facade socket is
    // up and the child answered — there is no ?play=1 for a phone launch.
    // Anyone else asks like on a server session: ?play=1, from "Join".
    var playIntentWanted = wantsPlay || ownsDeviceSession;
    if (!playIntentWanted || playIntentRef.current || !childStateSeen) {
      return;
    }
    // Already holding a slot ACCORDING TO THE CHILD (a relaunch that
    // reused a session we still hold): satisfied, so spend it rather than
    // ask again. childSlot is written by handleChildState alone.
    if (childSlot != null) {
      playIntentRef.current = true;
      onPlayIntentSent === null || onPlayIntentSent === void 0 || onPlayIntentSent();
      return;
    }
    if (!childSocket.intent("join")) {
      return; // no socket yet — this effect reruns when the state lands
    }
    playIntentRef.current = true;
    // Drop the flag from the URL once spent, so a link copied out of the
    // address bar stays a WATCH link — which is the one promise a shared
    // streaming link makes.
    onPlayIntentSent === null || onPlayIntentSent === void 0 || onPlayIntentSent();
  }, [wantsPlay, ownsDeviceSession, childStateSeen, childSlot, childSocket, onPlayIntentSent]);

  // The platform connection starts once the façade socket is open AND the
  // page's gateway viewer exists — the hooks put that viewer's id on their
  // own wire (retro's start/join/spectate, streamex's WS query) instead of
  // creating a second one, so it has to be there before they speak. This
  // ordering is what lets the video be created ONCE, up front, from the
  // sessionId alone (see SessionStream) rather than inside each hook's WS
  // onOpen where a role change or a missed "started" would restart or lose it.
  //
  // The viewer is NOT a hard prerequisite though: a session the gateway has
  // no stream for (blank test session, gateway unreachable, a child that
  // never attached) would otherwise leave the page waiting forever and never
  // even attempt the platform connection — and for retro that means the
  // "start" message never goes out, so the emulator never boots. Waiting is
  // therefore bounded: past the deadline the hooks connect without a
  // viewerId and the child's own error path surfaces something the user can
  // read, exactly as it did before the page owned the viewer.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!facadeOpen || platformConnectedRef.current) {
      return undefined;
    }
    var startPlatformConnection = function startPlatformConnection() {
      var _inputRef$current, _inputRef$current$onC;
      if (platformConnectedRef.current) {
        return;
      }
      platformConnectedRef.current = true;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || (_inputRef$current$onC = _inputRef$current.onConnect) === null || _inputRef$current$onC === void 0 || _inputRef$current$onC.call(_inputRef$current);
    };
    if (viewerReady) {
      startPlatformConnection();
      return undefined;
    }
    var deadline = setTimeout(startPlatformConnection, PLATFORM_CONNECT_WITHOUT_VIEWER_MS);
    return function () {
      return clearTimeout(deadline);
    };
  }, [facadeOpen, viewerReady]);

  // Kept current every render; read by the beat interval, which must not
  // be rebuilt when it changes.
  var beatRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  beatRef.current = childSocket.beat;

  // THE BEAT (chantier-4): ONE message every 30s to the child, carrying BOTH
  // meanings — its arrival proves the tab's JS runs (a frozen tab keeps its
  // socket open, so the socket alone cannot tell), and hadInput proves a
  // human is behind it. The input hooks stamp the shared store on every real
  // input; the beat drains it.
  //
  // Through a ref, so this interval lives as long as the page and NOT as
  // long as these callbacks keep their identity. An interval that restarts
  // on every render never reaches its own period — measured: 0 beats in
  // 102s, and the child rightly evicted a player it never heard from.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var beatInterval = setInterval(function () {
      var _beatRef$current2;
      return (_beatRef$current2 = beatRef.current) === null || _beatRef$current2 === void 0 ? void 0 : _beatRef$current2.call(beatRef, (0,_stream_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_40__.takeActivityStamp)() > 0);
    }, _stream_shared_hooks_use_child_session_ws_js__WEBPACK_IMPORTED_MODULE_39__.CHILD_BEAT_INTERVAL_MS);
    return function () {
      return clearInterval(beatInterval);
    };
  }, []);

  // QUI JE SUIS DANS CETTE PARTIE — dérivé de ce que le child a poussé,
  // jamais de ce que la page a écrit en arrivant.
  //
  // Le chemin appareil se déclarait propriétaire dans l'objet session
  // lui-même : tout onglet ouvrant `?device=1` l'était, quel que soit le
  // compte. Le child dit pourtant déjà qui est qui (`players[].isOwner`),
  // et la page l'écoutait déjà — il n'y avait qu'à cesser de le contredire
  // (signalé le 2026-09-04).
  //
  // Le repli sur `session.me` garde les sessions du serveur inchangées :
  // là, c'est le kernel qui remplit ce champ, et il fait autorité.
  var myRole = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _session$me;
    var mine = (broadcastPlayers || []).find(function (player) {
      return player.username === (user === null || user === void 0 ? void 0 : user.username);
    });
    if (mine !== null && mine !== void 0 && mine.role) {
      return mine.role;
    }
    // POSSÉDER UNE SESSION ET TENIR UNE MANETTE SONT DEUX CHOSES.
    //
    // Quand la file est vide — personne n'a encore pris de siège — le
    // propriétaire n'apparaît dans aucune liste, et se retrouvait
    // spectateur de sa propre partie : plus de bouton d'arrêt, et la
    // session tournait sans que personne puisse l'éteindre (signalé le
    // 2026-09-04). C'est la session qui dit à qui elle est.
    if (session.owner && session.owner === (user === null || user === void 0 ? void 0 : user.username)) {
      return "owner";
    }
    return ((_session$me = session.me) === null || _session$me === void 0 ? void 0 : _session$me.role) || "spectate";
  }, [broadcastPlayers, user === null || user === void 0 ? void 0 : user.username, (_session$me2 = session.me) === null || _session$me2 === void 0 ? void 0 : _session$me2.role, session.owner]);
  var quitStoreRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (!quitStoreRef.current) {
    quitStoreRef.current = (0,_stream_shared_switches_store_js__WEBPACK_IMPORTED_MODULE_28__.createSwitchesStore)({
      onQuit: "leave",
      saveStateOnQuit: false
    });
  }
  var quitStore = quitStoreRef.current;

  // A stable per-mount store (not a plain useState) — see
  // createSwitchesStore's own doc above: FloatingPanel is opened via
  // context.offcanvas.open, which freezes whatever props it's given at
  // click time, so a plain useState here would update StreamingShell's
  // own render but never reach an already-open panel.
  var switchesStoreRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (!switchesStoreRef.current) {
    switchesStoreRef.current = (0,_stream_shared_switches_store_js__WEBPACK_IMPORTED_MODULE_28__.createSwitchesStore)({
      // Named for what the SWITCH says ("play the game's sound"), not
      // for the <video> attribute. It used to be `isMuted` behind a
      // "play the sound" label, so turning the switch ON muted the
      // game — reported live 2026-08-24. Sound is on by default; the
      // autoplay fallback below is the only thing that turns it off
      // on its own, and only because the browser refused.
      isSoundEnabled: true,
      isFullscreen: false,
      isChromeCasting: !!(0,_stream_onscreen_cast_js__WEBPACK_IMPORTED_MODULE_15__.getCurrentCastSession)(),
      isResourceMonitoringVisible: false,
      // LE DOUBLE FLUX (chantier 31) : le mode de la catégorie « Vidéo »
      // du menu (`auto` par défaut, `current`, `low`), et ce que la
      // passerelle dit du spectateur de la page.
      videoQuality: "auto",
      videoAvailable: false,
      videoCurrent: "hd",
      videoWant: "hd",
      // Device-level preferences (localStorage, not per-session) —
      // libs/gamepadPreferences.js, already read by the real rumble/
      // haptic dispatchers (libs/rumble.js, stream/onscreen/
      // Controllers.jsx). These switches just mirror/write that same
      // global setting, not something local to this session.
      isRumbleEnabled: (0,_libs_gamepadPreferences_js__WEBPACK_IMPORTED_MODULE_20__.getRumbleEnabled)(),
      isHapticFeedback: (0,_libs_gamepadPreferences_js__WEBPACK_IMPORTED_MODULE_20__.getHapticFeedback)(),
      // usePhysicalGamepad returns a BOOLEAN, not a getter — calling it
      // throws while the store is being built, which happens before the
      // first paint. Hiding the pad here (rather than in the JSX) is what
      // keeps it a DEFAULT: the menu switch can bring it back, and since
      // reading a physical pad no longer lives inside the pad component
      // (use-streamex-physical-input.js), hiding it costs no input.
      isControllerVisible: drivesPad && !hasPhysicalGamepad,
      isChainButtons300: drivesPad,
      isRewinding: false,
      isFastForwarding: false,
      // ÉTEINT PAR DÉFAUT DEPUIS LE 2026-10-11 : la PS1 démarre avec sa
      // manette d'origine, numérique (décision du porteur ; avec la
      // DualShock, X ne passait pas l'écran titre de Crash Team
      // Racing). L'interrupteur part d'accord avec le moteur et avec
      // use-retrogaming-input.js. Le récit qui suit est celui de la
      // DualShock par défaut, d'août à cette date — sa leçon tient :
      // le défaut décrit un appareil, pas un rôle.
      //
      // SANS `!isWatching`, ET C'EST LE CORRECTIF (2026-09-09).
      //
      // Tout le monde arrive en SPECTATEUR : à la construction du
      // magasin, `isWatching` est donc vrai, et l'interrupteur naissait
      // éteint. L'effet qui l'observe appelait alors `PS1.standard`,
      // ramenant le type de manette à 1 — le pad digital — alors que
      // le hook ET l'enfant sont en DualShock. Prendre la manette
      // ensuite ne change rien : les valeurs initiales du magasin sont
      // calculées UNE fois, et l'effet ne se redéclenche que sur ce
      // drapeau-là. D'où le geste que l'utilisateur décrit : éteindre
      // puis rallumer pour que la console voie enfin la DualShock.
      //
      // Ce défaut décrit un APPAREIL, pas un rôle. Qui regarde décide
      // si la section s'affiche, pas de quel type de manette la
      // console est équipée — et un spectateur qui la positionne
      // n'envoie rien de toute façon.
      isDualShockController: false
    });
  }
  var switchesStore = switchesStoreRef.current;
  var switches = (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(switchesStore.subscribe, switchesStore.getSnapshot);
  (0,_stream_shared_hooks_use_adaptive_quality_js__WEBPACK_IMPORTED_MODULE_38__.useAdaptiveQuality)({
    screenRef: screenRef,
    mode: switches.videoQuality,
    quality: {
      available: switches.videoAvailable,
      current: switches.videoCurrent,
      want: switches.videoWant
    },
    paused: !introLive
  });
  var setSwitches = switchesStore.setValues;
  if (!input) {
    setTerminateReason(t("streaming.unsupportedPlatform"));
    return null;
  }
  var pipVideoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    get current() {
      var _screenRef$current$vi, _screenRef$current;
      return (_screenRef$current$vi = (_screenRef$current = screenRef.current) === null || _screenRef$current === void 0 ? void 0 : _screenRef$current.videoElement) !== null && _screenRef$current$vi !== void 0 ? _screenRef$current$vi : null;
    }
  }).current;
  usePictureInPictureOnHide(pipVideoRef);

  // leavePage on unmount (pause only, never disconnect — roadmap P2):
  // a plain unmount/remount must not send retro-gaming's explicit
  // "exit" signal. The CONNECT trigger moved to the façade WS lifecycle
  // (onConnect above) — connecting as "owner" from a watching tab
  // reattached the child session and flipped the playing tab (reported
  // live), so the role is derived inside the hook now.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      var _input$leavePage;
      return (_input$leavePage = input.leavePage) === null || _input$leavePage === void 0 ? void 0 : _input$leavePage.call(input);
    };
  }, []);

  // Confirm before leaving or refreshing WHILE PLAYING — the browser's
  // own prompt, all three platforms. It used to live inside remote-play's
  // connection hook, so refreshing a retro or streamex session
  // interrupted play with no warning at all; nothing about it is
  // platform-specific. Spectators are never prompted: watching costs
  // nothing to interrupt.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Celui qui pilote une manette prêtée joue aussi (#274).
    if (!drivesPad && isWatching) {
      return undefined;
    }
    var confirmLeaving = function confirmLeaving(event) {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", confirmLeaving);
    return function () {
      return window.removeEventListener("beforeunload", confirmLeaving);
    };
  }, [isWatching, drivesPad]);

  // v1 (chantier-3) — LEAVING THE PAGE IS LEAVING THE SESSION.
  //
  // This is the rule the whole v1 model rests on, and until now no
  // platform actually implemented it: retrogaming called leavePage() from
  // its lifecycle callbacks, while streamex and remoteplay left theirs as
  // explicit no-ops. Nothing announced the departure — the transport just
  // died and the kernel found out on its read deadline. That silent gap
  // IS the phantom socket: a pad held by a tab that no longer exists.
  //
  // pagehide rather than beforeunload: beforeunload is the CONFIRMATION
  // (below) and may be cancelled, pagehide fires when the page really
  // goes, including on mobile. The unmount path covers SPA navigation.
  //
  // disconnect(), never terminate(): leaving keeps the session alive for
  // whoever else is playing. Ending it on purpose is the Quit dialog's
  // job, and it sets quitHandledRef so we do not fire twice.
  //
  // ⚠️ The departure is bound to the ROUTE's lifetime, not this shell's.
  // Binding it here was wrong and killed sessions in seconds: `Streaming`
  // re-renders `if (!session) return <overlay>` whenever the pool snapshot
  // momentarily lacks the session, which UNMOUNTS this shell — a remount,
  // not a departure. The relay was cut ~5 s after every connect.
  // `leaveRef` lets the route (which only unmounts when the page really
  // goes) call our disconnect.
  var quitHandledRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    leaveRef.current = function () {
      var _inputRef$current2, _inputRef$current2$di;
      if (quitHandledRef.current) {
        return;
      }
      quitHandledRef.current = true;
      (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || (_inputRef$current2$di = _inputRef$current2.disconnect) === null || _inputRef$current2$di === void 0 || _inputRef$current2$di.call(_inputRef$current2);
    };
    return function () {
      leaveRef.current = null;
    };
  }, [leaveRef]);

  // Presence — the same shape for all 3 platforms and both roles. Gated
  // on kernelPrivateReady so the first report already carries the real
  // role (the shell used to mount only after the first private push).
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!kernelPrivateReady) {
      return undefined;
    }
    reportPlaying(session, isWatching);
    return function () {
      return reportIdle();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kernelPrivateReady]);

  // A granted slot flips this page to player via the kernel role push
  // (private.role) — the per-platform hooks reconnect their own side off
  // that transition (P3/P4). No local flip remains: the old
  // wasTakenOver/ceded/slotGrantCount mirrors are gone.

  // A watching tab that acquires a pad becomes a player — the role push
  // covers every path now (P3-P5: freeSlot join, handover grant,
  // remoteplay take-back), no me.padSlot rising-edge mirror remains.

  // The controller switch was baked at mount from isWatching (watch mode
  // starts without the pad on screen) — a watcher who becomes a player
  // (join/takeover/grant) must get the pad back without touching the
  // settings panel first.
  //
  // MAIS PAS S'IL Y A UNE VRAIE MANETTE.
  //
  // Cet effet forçait le pad tactile à VISIBLE, sans condition. Comme
  // `switchesStore` est créé au premier rendu seulement (voir son propre
  // commentaire), la détection de manette n'avait donc jamais son mot à
  // dire : le pad ne disparaissait pas, quoi qu'on branche (signalé le
  // 2026-09-03).
  //
  // Pire, ça donnait un signal FAUX. On lisait « le pad ne se cache pas »
  // comme « la page ne voit pas la manette » — deux choses sans rapport,
  // et un diagnostic envoyé dans le mur.
  //
  // `hasPhysicalGamepad` est maintenant une dépendance : la manette qui
  // arrive range le pad, celle qu'on débranche le rend.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (drivesPad) {
      switchesStore.setValues({
        isControllerVisible: !hasPhysicalGamepad,
        isChainButtons300: true
      });
    }
  }, [drivesPad, hasPhysicalGamepad, switchesStore]);

  // THIS holder's prompt for a pending hand-over demand (the child pushes
  // `pendingHandover` in its state). Accept grants it, decline denies it —
  // both are intents to the child, and the role flip rides its next state
  // push either way.
  var slotRequestPromptShownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var request = slotRequests[0];
    if (!request || isWatching) {
      return;
    }
    if (slotRequestPromptShownRef.current === request.from) {
      return;
    }
    slotRequestPromptShownRef.current = request.from;
    // DEUX GESTES (#274) : le propriétaire PRÊTE — il garde sa place et
    // reprend la manette quand il veut ; un invité DONNE sa place.
    var lending = myRole === "owner";
    context.toast.open(t(lending ? "streaming.handover.lendPrompt" : "streaming.handover.controlPrompt", {
      username: nameOf(request.from)
    }), {
      variant: "confirm",
      title: t("streaming.handover.title"),
      confirmLabel: t(lending ? "streaming.handover.lend" : "streaming.handover.accept"),
      cancelLabel: t("streaming.handover.decline"),
      onConfirm: function onConfirm() {
        var _inputRef$current3, _inputRef$current3$on;
        slotRequestPromptShownRef.current = null;
        sessionSend({
          type: "cedeslot"
        });
        (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 || (_inputRef$current3$on = _inputRef$current3.onSlotGiveaway) === null || _inputRef$current3$on === void 0 || _inputRef$current3$on.call(_inputRef$current3);
      },
      onCancel: function onCancel() {
        slotRequestPromptShownRef.current = null;
        sessionSend({
          type: "slotrequestdenied"
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slotRequests, isWatching]);

  // Below — each FloatingPanel switch actually doing something, instead
  // of just sitting in local state. Kept as one small effect per switch
  // (mirrors how each one's target is independent — global preference,
  // browser API, per-session extraProps, or a server call) rather than
  // one giant effect keying off the whole `switches` object.

  // Fullscreen the SESSION, not the document. The document carries the
  // app chrome around the picture; what the player asked to fill the
  // screen is the stream and the things laid over it. Not the <video>
  // element either: the on-screen pad, the FloatingPanel and every
  // overlay are its SIBLINGS, so promoting the video alone would take
  // fullscreen and leave the controls behind it.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var surface = shellRef.current;
    if (!surface) {
      return;
    }
    if (switches.isFullscreen) {
      if (!(0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_31__.isFullscreen)()) {
        (0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_31__.requestFullscreen)(surface)["catch"](function () {});
      }
    } else if ((0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_31__.isFullscreen)()) {
      (0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_31__.exitFullscreen)()["catch"](function () {});
    }
  }, [switches.isFullscreen]);

  // The browser can leave fullscreen without us: Escape, the window
  // manager, a navigation. Nothing listened, so the switch stayed lit
  // over a windowed page — the page's copy of the truth and the
  // browser's, apart again. The browser is the authority here.
  // Tourner l'écran — voir `use-screen-rotation.js`. La page de test des
  // manettes utilise le MÊME hook : c'est le même besoin, sur la même
  // surface. L'orientation n'est plus un réglage de la partie mais de
  // l'APPAREIL, choisie dans Réglages (#406, libs/screenOrientation.js).
  var screenOrientation = (0,_libs_screenOrientation_js__WEBPACK_IMPORTED_MODULE_27__.useScreenOrientation)();
  var rotateSurface = (0,_stream_shared_hooks_use_screen_rotation_js__WEBPACK_IMPORTED_MODULE_24__.useScreenRotation)(screenOrientation, {
    enabled: isHandheld,
    surfaceRef: shellRef,
    // Le plein écran s'ALLUME et ne s'éteint jamais ici : quelqu'un qui
    // jouait déjà en plein écran et qui tourne son écran ne demande pas
    // à en sortir. C'est un réglage à part, avec son propre interrupteur.
    onFullscreen: function onFullscreen() {
      return switchesStore.setValues({
        isFullscreen: true
      });
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var sync = function sync() {
      return switchesStore.setValues({
        isFullscreen: (0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_31__.isFullscreen)()
      });
    };
    for (var _i = 0, _arr = ["fullscreenchange", "webkitfullscreenchange", "MSFullscreenChange"]; _i < _arr.length; _i++) {
      var event = _arr[_i];
      document.addEventListener(event, sync);
    }
    return function () {
      for (var _i2 = 0, _arr2 = ["fullscreenchange", "webkitfullscreenchange", "MSFullscreenChange"]; _i2 < _arr2.length; _i2++) {
        var _event = _arr2[_i2];
        document.removeEventListener(_event, sync);
      }
    };
  }, [switchesStore]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (switches.isChromeCasting) {
      if ((0,_stream_onscreen_cast_js__WEBPACK_IMPORTED_MODULE_15__.getCurrentCastSession)()) {
        (0,_stream_onscreen_cast_js__WEBPACK_IMPORTED_MODULE_15__.sendSessionIdToReceiver)(session.id)["catch"](function () {});
        return;
      }
      ;(0,_stream_onscreen_cast_js__WEBPACK_IMPORTED_MODULE_15__.requestCastSession)().then(function () {
        return (0,_stream_onscreen_cast_js__WEBPACK_IMPORTED_MODULE_15__.sendSessionIdToReceiver)(session.id);
      })["catch"](function (error) {
        context.toast.open(error.message || t("streaming.settings.chromecast.failed"), {
          variant: "error"
        });
        setSwitches(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            isChromeCasting: false
          });
        });
      });
    } else if ((0,_stream_onscreen_cast_js__WEBPACK_IMPORTED_MODULE_15__.getCurrentCastSession)()) {
      (0,_stream_onscreen_cast_js__WEBPACK_IMPORTED_MODULE_15__.endCastSession)();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switches.isChromeCasting]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Guarded: these two write to localStorage and OUTLIVE the session.
    // While setValues still replaced the store instead of merging, this
    // effect ran with `undefined` every time a player got the controller
    // back and persisted rumble=false — the switch fix does not undo
    // that, the user has to re-enable it in Settings. Never write
    // anything that is not an explicit boolean again.
    if (typeof switches.isRumbleEnabled !== "boolean") {
      return;
    }
    ;(0,_libs_gamepadPreferences_js__WEBPACK_IMPORTED_MODULE_20__.setRumbleEnabled)(switches.isRumbleEnabled);
  }, [switches.isRumbleEnabled]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (typeof switches.isHapticFeedback !== "boolean") {
      return;
    }
    ;(0,_libs_gamepadPreferences_js__WEBPACK_IMPORTED_MODULE_20__.setHapticFeedback)(switches.isHapticFeedback);
  }, [switches.isHapticFeedback]);

  // streamex-only (see use-streamex-input.js's own doc — the child
  // already defaults to 300ms on connect, this just lets the user widen
  // it back down to keytest's raw 50ms). extraProps is null on platforms
  // that have none (remoteplay) — the contract says so, so guard the
  // object itself, not just the callback.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _input$extraProps2, _input$extraProps2$on;
    (_input$extraProps2 = input.extraProps) === null || _input$extraProps2 === void 0 || (_input$extraProps2$on = _input$extraProps2.onChainWindowChange) === null || _input$extraProps2$on === void 0 || _input$extraProps2$on.call(_input$extraProps2, switches.isChainButtons300 ? 300 : 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switches.isChainButtons300]);

  // retro-gaming PS1 only.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _input$extraProps3;
    if (!((_input$extraProps3 = input.extraProps) !== null && _input$extraProps3 !== void 0 && _input$extraProps3.PS1)) {
      return;
    }
    if (switches.isDualShockController) {
      input.extraProps.PS1.dualshock.load();
    } else {
      input.extraProps.PS1.standard.load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switches.isDualShockController]);

  // retro-gaming only.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _input$extraProps4;
    (_input$extraProps4 = input.extraProps) === null || _input$extraProps4 === void 0 || (_input$extraProps4 = _input$extraProps4.timeTravelProps) === null || _input$extraProps4 === void 0 || _input$extraProps4.setTravelMode(switches.isRewinding ? "rewind" : switches.isFastForwarding ? "fastForward" : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switches.isRewinding, switches.isFastForwarding]);

  // statsResult is computed on EVERY render, ready or not — the stats()
  // closure calls useSessionStats (a hook), and a render that skipped it
  // would change the hook count between the pre-private and ready
  // renders ("Rendered more hooks than during the previous render").
  // onMonitoringResource is the P3-P5 contract name every hook exposes.
  //
  // Un téléphone suit aussi la température et la batterie panneau fermé :
  // ses deux pastilles, à côté du bouton du menu, les montrent.
  var statsResult = input.onMonitoringResource(switches.isResourceMonitoringVisible, isHandheld);
  var handPower = statsResult === null || statsResult === void 0 ? void 0 : statsResult.device;

  // The controller (and every menu below) needs the real role, so it waits
  // for the kernel's first private push — but the VIDEO never does: the
  // SessionStream below is mounted unconditionally, from the first render to
  // unmount. It used to be swapped out for a second <GatewayWebRTC> at this
  // exact point, which is what made the picture blink on arrival and on every
  // Watch → Streaming navigation.
  // ONE derivation, read by the overlay and by the redirect below. claiming
  // is "I asked for the pad and the authority has not answered yet" — the
  // window that used to look identical to a plain watch, which is why
  // launching a game felt like nothing was happening.
  // The session ended: show it for a beat, then leave. Same destination as
  // the Quit button — a page whose session is over has nothing left to be,
  // and leaving it on a dead screen is how people end up reloading into a
  // session that no longer exists. The pause is for reading the reason, not
  // for the machine.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!sessionEnded) {
      return undefined;
    }
    var timer = setTimeout(function () {
      return onTerminate === null || onTerminate === void 0 ? void 0 : onTerminate();
    }, gameExited ? GAME_EXITED_REDIRECT_MS : SESSION_ENDED_REDIRECT_MS);
    return function () {
      return clearTimeout(timer);
    };
  }, [sessionEnded, gameExited, onTerminate]);

  // A source that stopped sending gets a longer look, then the same exit —
  // see the constants for why leaving costs nothing. Bound to videoSilent
  // alone, so the moment frames advance again the timer is torn down and
  // nobody is taken anywhere.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!videoSilent) {
      return undefined;
    }
    var timer = setTimeout(function () {
      return onTerminate === null || onTerminate === void 0 ? void 0 : onTerminate();
    }, SOURCE_GONE_REDIRECT_MS);
    return function () {
      return clearTimeout(timer);
    };
  }, [videoSilent, onTerminate]);
  var phase = sessionPhase({
    ended: sessionEnded,
    gameExited: gameExited,
    authorityOpen: facadeOpen,
    authorityAnswered: kernelPrivateReady,
    claiming: wantsPlay && isWatching,
    platformConnected: input.isConnected,
    videoSilent: videoSilent,
    stalling: input.isStalling
  });
  var controller = kernelPrivateReady ? input.controller() : null;

  // ANNULER, DEPUIS L'ÉCRAN DU LANCEMENT (#287). La partie qu'on vient de
  // lancer s'arrête pour tout le monde — personne n'y joue encore — ; celle
  // de quelqu'un d'autre continue sans nous. Le même chemin que « Quitter »
  // avec « terminer la session ».
  var cancelLaunch = function cancelLaunch() {
    if (myRole === "owner") {
      var _input$terminate;
      (_input$terminate = input.terminate) === null || _input$terminate === void 0 || _input$terminate.call(input);
      stopSessionForEveryone(session, token)["catch"](function () {
        context.toast.open(t("streaming.quit.stopFailed"), {
          variant: "error"
        });
      });
    } else {
      var _input$disconnect;
      (_input$disconnect = input.disconnect) === null || _input$disconnect === void 0 || _input$disconnect.call(input);
    }
    onTerminate();
  };

  // ── LE MENU ET LA SORTIE (#408, #409) ───────────────────────────────
  //
  // Le porteur, le 2026-10-19 : un raccourci à la manette pour ouvrir le
  // menu, « Quitter » dans le menu, à la fin, et plus de titre à l'écran —
  // partout : webapp et application, avec ou sans manette ou clavier.

  // QUITTER — la même fenêtre qu'avant, ouverte maintenant depuis le menu.
  var openQuit = function openQuit() {
    context.modal.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(QuitConfirmModal, {
      session: session,
      isWatching: isWatching,
      isOwner: myRole === "owner",
      borrowing: childLoan.canReturn,
      quitStore: quitStore,
      t: t,
      onConfirm: (/*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_ref6) {
          var _input$extraProps5;
          var onQuit, save, isOwnerHere, endsTheSession, canFreeze, freezesTheSession, _input$terminate2, _input$disconnect2;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                onQuit = _ref6.onQuit, save = _ref6.saveStateOnQuit;
                // Three verbs, no boolean flags (2026-08-24) — see
                // the hooks' own doc. A spectator, and anyone leaving
                // without ticking "end the session", takes the quiet
                // path: the session keeps running on its grace for
                // whoever is still playing.
                // Owner-only, belt and braces: the
                // switch is hidden for a joiner, and
                // a stale store value must not end
                // somebody else's session either. The
                // kernel refuses it too (403).
                isOwnerHere = !isWatching && myRole === "owner";
                endsTheSession = onQuit === "kill" && isOwnerHere; // GELER N'EST POSSIBLE QUE SUR UN CŒUR — et le
                // magasin d'options est partagé par toutes les
                // plateformes, donc une valeur retenue d'une partie
                // rétro peut arriver ici sur une PS5. La demande
                // partirait alors vers un conteneur streamex ou une
                // vraie console, qui ne savent pas la satisfaire.
                // Le sélecteur cache déjà l'option ; ceci est la
                // ceinture (2026-09-10).
                canFreeze = session.platform === "retrogaming" || session.platform === "device";
                freezesTheSession = onQuit === "pause" && isOwnerHere && canFreeze; // Saving is its OWN decision now, not a flavour of
                // ending the session: the player can keep their
                // progress whether they leave the session running or
                // shut it down. Awaited so the state is actually
                // written before the connection goes.
                if (!(save && !isWatching && input.saveOnQuit)) {
                  _context2.n = 1;
                  break;
                }
                _context2.n = 1;
                return input.saveOnQuit();
              case 1:
                // Mark the exit as handled so the
                // pagehide/unmount guard above does
                // not disconnect a second time.
                quitHandledRef.current = true;

                // GELER AVANT DE PARTIR, et dans cet
                // ordre : la demande doit atteindre
                // l'hôte pendant que la connexion
                // vit encore.
                if (!(freezesTheSession && (_input$extraProps5 = input.extraProps) !== null && _input$extraProps5 !== void 0 && _input$extraProps5.pause)) {
                  _context2.n = 2;
                  break;
                }
                _context2.n = 2;
                return input.extraProps.pause();
              case 2:
                if (endsTheSession) {
                  (_input$terminate2 = input.terminate) === null || _input$terminate2 === void 0 || _input$terminate2.call(input);
                } else {
                  (_input$disconnect2 = input.disconnect) === null || _input$disconnect2 === void 0 || _input$disconnect2.call(input);
                }
                if (endsTheSession) {
                  stopSessionForEveryone(session, token)["catch"](function () {
                    context.toast.open(t("streaming.quit.stopFailed"), {
                      variant: "error"
                    });
                  });
                }
                onTerminate();
              case 3:
                return _context2.a(2);
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref7.apply(this, arguments);
        };
      }())
    }), {
      variant: "normal",
      size: 600
    });
  };
  // Le menu est un INSTANTANÉ : ses props sont figées à son ouverture
  // (skeleton.js, offcanvas.open). Il appelle la sortie par une référence,
  // pour qu'elle lise le rôle et le prêt du moment, pas ceux de l'ouverture.
  var openQuitRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(openQuit);
  openQuitRef.current = openQuit;
  var openMenu = function openMenu() {
    if (_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].overlayCount() > 0) {
      return;
    }
    context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(_stream_onscreen_FloatingPanel_jsx__WEBPACK_IMPORTED_MODULE_29__.FloatingPanel, {
      t: t,
      session: session,
      input: input,
      title: input.title,
      controller: controller,
      isWatching: isWatching,
      switchesStore: switchesStore,
      sessionSend: sessionSend,
      players: broadcastPlayers,
      watchers: broadcastWatchers,
      loan: childLoan,
      onQuit: function onQuit() {
        return openQuitRef.current();
      }
    }), {
      size: 600
    });
  };
  var openMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(openMenu);
  openMenuRef.current = openMenu;

  // UN PANNEAU OUVERT SUSPEND LE JEU, UNE PARTIE EN COURS SUSPEND LA
  // NAVIGATION (#407, #408). Le menu, ses sous-panneaux, la fenêtre de
  // sortie : tant qu'il y en a un, la croix, A et B le servent, et le jeu
  // n'entend rien — chaque plateforme relâche ce qu'elle tenait
  // (libs/gameInput.js). Sans panneau, et la manette en main, c'est
  // l'inverse : le pont manette-clavier et la navigation de Skeleton se
  // taisent, et plus rien n'a le focus — une touche Entrée du jeu
  // n'actionnerait pas un bouton de la page.
  var overlays = _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].useOverlayCount();
  var playing = drivesPad && overlays === 0;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_26__.setGameInputSuspended)(overlays > 0);
    _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].suspendNavigation(playing);
    if (playing) {
      var _document$activeEleme, _document$activeEleme2;
      (_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 || (_document$activeEleme2 = _document$activeEleme.blur) === null || _document$activeEleme2 === void 0 || _document$activeEleme2.call(_document$activeEleme);
    }
  }, [overlays, playing]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      (0,_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_26__.setGameInputSuspended)(false);
      _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].suspendNavigation(false);
    };
  }, []);

  // L2 + HOME TENUS UNE SECONDE (use-streaming-menu.js).
  var menuHold = (0,_stream_shared_hooks_use_streaming_menu_js__WEBPACK_IMPORTED_MODULE_25__.useMenuHotkey)(overlays === 0, function () {
    return openMenuRef.current();
  });

  // ÉCHAP OUVRE LE MENU, au clavier. Pris avant tout le monde (fenêtre,
  // phase de capture) et gardé : il ne part plus au jeu — où, sur un
  // émulateur de bureau, il sortait le jeu de son plein écran. Le menu
  // ouvert, il le referme, comme avant (Bootstrap).
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var onKeyDown = function onKeyDown(event) {
      if (event.key !== "Escape" || !event.isTrusted || _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].overlayCount() > 0) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      openMenuRef.current();
    };
    window.addEventListener("keydown", onKeyDown, true);
    return function () {
      return window.removeEventListener("keydown", onKeyDown, true);
    };
  }, []);
  var menuButtonVisible = (0,_stream_shared_hooks_use_streaming_menu_js__WEBPACK_IMPORTED_MODULE_25__.useIdleVisibility)(playing);
  var menuButtonStyle = (0,_stream_shared_hooks_use_streaming_menu_js__WEBPACK_IMPORTED_MODULE_25__.useMenuButtonStyle)(Boolean(drivesPad && switches.isControllerVisible && (controller === null || controller === void 0 ? void 0 : controller.Component)));

  // LE RACCOURCI SE DIT, une fois, à qui joue avec une manette : sans
  // bouton à l'écran, il faut savoir qu'il existe.
  var gamepadTipShownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!hasPhysicalGamepad || !drivesPad || gamepadTipShownRef.current) {
      return;
    }
    gamepadTipShownRef.current = true;
    context.toast.open(t("streaming.menu.gamepadTip"), {
      variant: "info",
      duration: 6000
    });
  }, [hasPhysicalGamepad, drivesPad]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
    ref: shellRef,
    className: "overflow-hidden",
    style: _objectSpread({
      backgroundColor: "#000",
      // 100% once this element IS the fullscreen box: the browser
      // sizes it to the screen exactly, while 100vh is a viewport
      // unit that can still count chrome that is no longer there.
      // Otherwise the visible height: 100vh, or the top half when a
      // clip-on controller hides the bottom one (#410, app.css).
      height: switches.isFullscreen ? "100%" : "var(--gameflex-visible-height)"
    }, (0,_stream_shared_hooks_use_screen_rotation_js__WEBPACK_IMPORTED_MODULE_24__.rotationSurfaceStyle)(rotateSurface, isPortraitViewport)),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(_stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_37__.SessionStream
    // Le même identifiant de flux que la vignette du tableau de
    // bord : celui du child, qui est ce que le gateway connaît.
    , {
      sessionId: session.childSessionId || session.id,
      t: t,
      screenRef: screenRef
      // The shell is a fixed-height box (and, in fullscreen, THE
      // box) — so the stream fills it and the picture fits inside
      // instead of being sized on width alone and clipped.
      ,
      fillHeight: true
      // Authentication decides the input DataChannel, never the role
      // — see SessionStream's own doc: renegotiating the SDP on a
      // role change is what restarted the video. Both children drop
      // input from a viewer with no assigned pad, so an authenticated
      // spectator holding an idle channel changes nothing.
      // From the STORED TOKEN, not from `user`: the context's user
      // only lands once /api/v1/auth/me answers, and both of these are
      // baked into the WebRTC offer — a first render that believed
      // itself anonymous negotiated a throwaway viewer and a second
      // one ~50ms later (gateway log, 2026-08-24). This is read
      // synchronously on render 1, so exactly one viewer is created.
      ,
      hasInput: !!viewerUsername,
      username: viewerUsername
      // Le lancement d'où vient la page : l'intro se joue avec le
      // fond de son écran, et non une seconde fois (chantier 35).
      ,
      launch: launchId,
      muted: !switches.isSoundEnabled,
      onAutoplayForcedMute: function onAutoplayForcedMute() {
        return switchesStore.setValues({
          isSoundEnabled: false
        });
      },
      onVideoSilent: setVideoSilent,
      onQuality: function onQuality(state) {
        switchesStore.setValues({
          videoAvailable: state.available,
          videoCurrent: state.current,
          videoWant: state.want
        });
        if (!introToldRef.current) {
          setIntroLive(true);
        }
      },
      onIntro: function onIntro(phase, game, expect) {
        introToldRef.current = true;
        setIntroPhase(phase);
        setIntroLive(phase === "live");
        setGameLoading(phase === "hold" && game === "loading");
        setSlowStart(phase === "hold" && expect === "minutes");
      },
      onViewerReady: function onViewerReady() {
        var _screenRef$current2;
        setViewerReady(true);
        // L'ATTACHE DE LA PASSERELLE, DITE À L'ÉCRAN (#195).
        //
        // Le kernel ne la voit jamais : le navigateur négocie
        // directement avec `gateway-webrtc`, qui ignore le
        // `launchId`. Cette étape-là ne peut donc venir que d'ici —
        // c'est le seul endroit qui connaît les deux. Elle comble
        // le trou entre « l'émulateur démarre » et la première
        // image, qui n'avait aucun nom jusqu'ici.
        if (!gatewayStepSaidRef.current) {
          gatewayStepSaidRef.current = true;
          noteChildStep("gateway.attached");
        }
        // chantier-4: a tab holds TWO identities —
        // a gateway viewer (video and input) and a
        // child socket (presence and intents).
        // Only the tab knows both, so it is the tab
        // that pairs them; without this the child
        // cannot tell whose keystrokes are whose
        // and gates nothing.
        childSocket.announceViewer((_screenRef$current2 = screenRef.current) === null || _screenRef$current2 === void 0 ? void 0 : _screenRef$current2.viewerId);
      }
      // Never give up while the page is open: a session whose child
      // has not attached yet (owner still loading the game) must pick
      // the picture up whenever it finally starts.
      ,
      maxAttempts: null
      // On s'intercale sur `onFirstPicture` sans le voler à la
      // plateforme : elle en a son propre usage (remote-play y
      // accroche sa détection de gel).
      ,
      gatewayProps: _objectSpread(_objectSpread({}, input.gatewayProps), {}, {
        onFirstVideoTrack: function onFirstVideoTrack() {
          var _screenRef$current3, _input$gatewayProps, _input$gatewayProps$o;
          setShellStream(((_screenRef$current3 = screenRef.current) === null || _screenRef$current3 === void 0 || (_screenRef$current3 = _screenRef$current3.videoElement) === null || _screenRef$current3 === void 0 ? void 0 : _screenRef$current3.srcObject) || null);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          (_input$gatewayProps = input.gatewayProps) === null || _input$gatewayProps === void 0 || (_input$gatewayProps$o = _input$gatewayProps.onFirstVideoTrack) === null || _input$gatewayProps$o === void 0 || _input$gatewayProps$o.call.apply(_input$gatewayProps$o, [_input$gatewayProps].concat(args));
        },
        onFirstPicture: function onFirstPicture() {
          var _input$gatewayProps2, _input$gatewayProps2$;
          setSawPicture(true);
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          (_input$gatewayProps2 = input.gatewayProps) === null || _input$gatewayProps2 === void 0 || (_input$gatewayProps2$ = _input$gatewayProps2.onFirstPicture) === null || _input$gatewayProps2$ === void 0 || _input$gatewayProps2$.call.apply(_input$gatewayProps2$, [_input$gatewayProps2].concat(args));
        }
      })
      // The platform's own progress ("fetching the device",
      // "waking up", "waiting for ready"...) — for remote-play
      // that IS the whole feedback while the PS5 boots. Rendering
      // the picture surface unconditionally dropped it; a generic
      // "connecting" spinner for a 30s console wake tells the user
      // nothing (reported live 2026-08-24).
      ,
      showOverlay: phase !== "live"
      // The sentinel when there is nothing left to wait for, the
      // translated phase otherwise — passing the key itself would
      // render it raw.
      ,
      connectingLabel: phase === "live" ? _stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_37__.OVERLAY_HIDDEN : t("streaming.connection.phase.".concat(phase)),
      children: isPortraitViewport && !rotateSurface && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("div", {
        className: "text-center text-white text-opacity-50 small py-1",
        style: {
          pointerEvents: "none"
        },
        children: t("streaming.page.brand")
      })
    }), ((_input$extraProps6 = input.extraProps) === null || _input$extraProps6 === void 0 ? void 0 : _input$extraProps6.pointerHandlers) && !hasTouchScreen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("div", _objectSpread({
      className: "position-absolute top-0 start-0 w-100 h-100"
      // SOUS la manette (1002) et sous la barre du bas (1003).
      // Les deux sont plus loin dans le DOM, donc à z-index égal
      // elles gagneraient déjà — mais faire dépendre « le pad
      // reste cliquable » de l'ordre des balises est une règle
      // qu'on casse en déplaçant un bloc. On le dit.
      //
      // `touchAction: none` : sans ça le navigateur interprète
      // un glissement comme un défilement et ne livre plus les
      // `pointermove`.
      ,
      style: {
        zIndex: 1000,
        touchAction: "none"
      }
    }, input.extraProps.pointerHandlers)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "dark",
      className: "position-absolute rounded-circle d-flex align-items-center justify-content-center p-0",
      style: _objectSpread(_objectSpread({}, menuButtonStyle), {}, {
        opacity: menuButtonVisible ? 1 : 0,
        pointerEvents: menuButtonVisible ? "auto" : "none",
        transition: "opacity 300ms ease"
      }),
      title: t("streaming.menu.open"),
      "aria-label": t("streaming.menu.open"),
      onClick: openMenu,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("i", {
        className: "bi bi-list fs-4 text-white"
      })
    }), isHandheld && ((handPower === null || handPower === void 0 ? void 0 : handPower.temperatureCelsius) != null || (handPower === null || handPower === void 0 ? void 0 : handPower.batteryPercent) != null) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("div", {
      className: "position-absolute d-flex gap-2",
      style: _objectSpread(_objectSpread({}, menuButtonStyle), {}, {
        left: "calc(".concat(menuButtonStyle.left, " + 56px)"),
        width: "auto",
        background: "none",
        border: "none",
        opacity: menuButtonVisible ? 1 : 0,
        pointerEvents: "none",
        transition: "opacity 300ms ease"
      }),
      children: [{
        value: handPower.temperatureCelsius,
        unit: "°",
        icon: "bi-thermometer-half",
        label: "streaming.menu.temperature"
      }, {
        value: handPower.batteryPercent,
        unit: "%",
        icon: handPower.batteryPercent >= 80 ? "bi-battery-full" : handPower.batteryPercent >= 30 ? "bi-battery-half" : "bi-battery",
        label: "streaming.menu.battery"
      }].filter(function (_ref8) {
        var value = _ref8.value;
        return typeof value === "number" && Number.isFinite(value);
      }).map(function (_ref9) {
        var value = _ref9.value,
          unit = _ref9.unit,
          icon = _ref9.icon,
          label = _ref9.label;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
          className: "rounded-circle d-flex flex-column align-items-center justify-content-center text-white",
          style: {
            width: menuButtonStyle.width,
            height: menuButtonStyle.height,
            background: menuButtonStyle.background,
            border: menuButtonStyle.border,
            fontSize: "0.7rem",
            lineHeight: 1.1
          },
          title: t(label),
          "aria-label": "".concat(t(label), " ").concat(Math.round(value)).concat(unit),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("i", {
            className: "bi ".concat(icon)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("span", {
            className: "fw-semibold",
            children: [Math.round(value), unit]
          })]
        }, label);
      })
    }), menuHold >= 0.1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
      className: "position-absolute top-50 start-50 translate-middle text-white text-center rounded-3 px-4 py-3",
      style: {
        zIndex: 1004,
        background: "rgba(0, 0, 0, 0.7)",
        minWidth: "260px",
        pointerEvents: "none"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("div", {
        className: "fw-semibold mb-2",
        children: t("streaming.menu.holdHint")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        now: Math.round(menuHold * 100),
        style: {
          height: "6px"
        }
      })]
    }), kernelPrivateReady &&
    /*#__PURE__*/
    // Collée au bas de l'écran depuis que la barre n'y est plus
    // (#409). Marquée : un doigt sur la manette à l'écran ne
    // réveille pas le bouton du menu.
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
      className: "flex-shrink-0 position-absolute",
      "data-streaming-strip": "",
      style: {
        bottom: "0",
        left: "0",
        width: "100%",
        zIndex: 1002
      },
      children: [drivesPad && switches.isControllerVisible && (controller === null || controller === void 0 ? void 0 : controller.Component) && controller.Component, drivesPad && !switches.isControllerVisible && hasPhysicalGamepad && (controller === null || controller === void 0 ? void 0 : controller.Component) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(_stream_onscreen_Controllers_jsx__WEBPACK_IMPORTED_MODULE_30__.TouchpadOnlyContext.Provider, {
        value: isPortraitViewport && !rotateSurface ? "portrait" : "landscape",
        children: controller.Component
      }), !isWatching && !drivesPad && childLoan.canReclaim && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
        className: "p-3 text-center text-white small",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("p", {
          children: t("streaming.handover.lentNotice", {
            username: nameOf(childLoan.lentTo)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("div", {
          className: "d-flex justify-content-center gap-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "light",
            onClick: function onClick() {
              return sessionSend({
                type: "reclaimslot"
              });
            },
            children: t("streaming.handover.reclaim")
          })
        })]
      }), isWatching && !drivesPad && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("div", {
        className: "p-3 text-center text-white small",
        children: broadcastPlayers.length === 0 && session.owner == user.username ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("p", {
            children: t("streaming.watch.noticeIdle")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("div", {
            className: "d-flex justify-content-center gap-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
              variant: "light",
              onClick: function onClick() {
                return sessionSend({
                  type: "requestslot"
                });
              },
              children: t("streaming.settings.join.action")
            })
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("div", {
          children: t("streaming.watch.notice")
        })
      })]
    }), switches.isResourceMonitoringVisible && statsResult && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("div", {
      className: "position-absolute text-white p-3",
      style: {
        top: "0",
        left: "0",
        width: "100%",
        maxHeight: "100%",
        zIndex: 1001,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        textShadow: "0 1px 2px rgba(0, 0, 0, 0.9)",
        overflowY: "auto"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(_stream_onscreen_FloatingPanel_jsx__WEBPACK_IMPORTED_MODULE_29__.StreamingStatsPanel, {
        stats: statsResult,
        session: session,
        t: t
      })
    }), (launchId || isWatching) && !(sawPicture && introLive && (kernelPrivateReady || !launchId)) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(_stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_37__.LaunchScreen, {
      t: t,
      zIndex: 1010,
      label: launchId ? t("streaming.launch.title") : t("streaming.connection.state.connecting"),
      steps: [].concat(_toConsumableArray(launchId ? [].concat(_toConsumableArray(launchSteps), _toConsumableArray(childSteps)) : WATCH_LAUNCH_STEPS), _toConsumableArray(introStep ? [{
        step: introStep
      }] : [])),
      backdrop: launchId ? {
        launch: {
          streamId: launchId,
          username: viewerUsername
        }
      } : shellStream ? {
        stream: shellStream
      } : null,
      onCancel: cancelLaunch
    }), !(launchId || isWatching) && introStep && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("div", {
      className: "position-absolute top-0 start-0 w-100 h-100 pe-none",
      style: {
        zIndex: 1010
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(_stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_37__.LaunchBar, {
        t: t,
        label: t("streaming.connection.step.".concat(introStep)),
        steps: [{
          step: introStep
        }]
      })
    })]
  });
}

// Route wrapper — the single entry point for all 3 platforms, both play
// and watch. No ?role= / ?mode= of any kind: whether you land as owner,
// player or spectator is decided entirely server-side, from session.me.role
// (enrichSessions, registry_routes.go — the kernel already knows who
// started the session and who's already joined) —
//   - session.me.role === "owner"  → you started it
//   - session.me.role === "player" → you already joined (reconnect)
//   - anything else (spectate, or not authenticated at all)  → watching
// A client-supplied role was never anything but a UX hint anyway; letting
// it decide anything was the exact hole retro_relay.go's own identity
// check just closed.

function Streaming() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].context);
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)(),
    t = _useTranslation.t;
  var _useAuth = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_12__.useAuth)(),
    user = _useAuth.user,
    authToken = _useAuth.token;
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  // Only ever a REAL session id: the gamepad-test page is its own route
  // with its own surface (KeytestLive.jsx), and nothing here knows about it.
  var rawSessionId = searchParams.get("sessionId");
  // See StreamingShell's play-intent effect. Read LIVE, never latched at
  // mount — that was the bug behind "I launch a game and I am still in
  // watch" (2026-08-25). /streaming?sessionId=A and ?sessionId=B are the
  // SAME route, so React Router re-renders this component instead of
  // remounting it: a value captured at mount survives every later launch.
  // Landing here once without the flag (a refresh on this page, a watch
  // link) then poisoned every SPA launch for the rest of the session.
  //
  // Safe to read live because the double-spend guard is playIntentRef in
  // the shell, which is keyed to the session by StreamingShell's own
  // key={session.id} — not this value.
  var wantsPlay = searchParams.get("play") === "1";
  var dropPlayIntent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setSearchParams(function (params) {
      params["delete"]("play");
      return params;
    }, {
      replace: true
    });
  }, [setSearchParams]);

  // LE LANCEMENT EN COURS (#191).
  //
  // On arrive ici AVANT que la session existe : la page des jeux a fabriqué
  // un identifiant, ouvert ce canal, posté, et navigué aussitôt. Les étapes
  // arrivent donc pendant qu'on regarde, au lieu de se dérouler derrière un
  // bouton qui tourne sur l'écran précédent.
  var launchId = searchParams.get("launchId");
  var _useLaunchProgress = (0,_stream_shared_hooks_use_launch_progress_js__WEBPACK_IMPORTED_MODULE_3__.useLaunchProgress)(launchId, authToken),
    launchSteps = _useLaunchProgress.steps,
    launchFailure = _useLaunchProgress.failure,
    launchedSessionId = _useLaunchProgress.sessionId;

  // LE `sessionId` VIENT DU CANAL, PAS DE LA RÉPONSE HTTP — c'est ce qui
  // permet de naviguer sans attendre. Dès qu'il arrive, il entre dans l'URL :
  // tout le reste de cette page part de là, et un rafraîchissement retombe
  // sur la session plutôt que sur un lancement terminé.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!launchedSessionId || rawSessionId) {
      return;
    }
    setSearchParams(function (params) {
      params.set("sessionId", launchedSessionId);
      params["delete"]("launchId");
      return params;
    }, {
      replace: true
    });
  }, [launchedSessionId, rawSessionId, setSearchParams]);
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState46 = _slicedToArray(_useState45, 2),
    reportState = _useState46[0],
    setReportState = _useState46[1];
  var sendReport = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var result;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          setReportState("sending");
          _context3.n = 1;
          return (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_4__.reportLaunchFailure)({
            context: "lancement ".concat(launchId || "?"),
            steps: launchSteps,
            detail: launchFailure
          });
        case 1:
          result = _context3.v;
          setReportState(result.ok ? "sent" : "failed");
          context.toast.open(result.ok ? t("streaming.launch.reported") : t("streaming.launch.reportFailed"), {
            variant: result.ok ? "success" : "error"
          });
        case 2:
          return _context3.a(2);
      }
    }, _callee3);
  })), [launchId, launchSteps, launchFailure, context, t]);
  // LA PARTIE D'UN AUTRE APPAREIL — le seul cas qui ne se résout pas dans
  // le pool (C7-P4).
  //
  // Un invité ouvre un lien vers un téléphone qui n'est pas le sien : la
  // session vit là-bas, dans le pool de LÀ-BAS. Il n'y a rien à chercher
  // ici, et tout ce qu'il faut savoir tient dans l'adresse.
  //
  // La partie du téléphone LUI-MÊME, elle, ne passe plus par ici (C8-P3) :
  // elle a maintenant un identifiant comme les autres et le kernel la
  // publie sur la façade. La page la reçoit, au lieu de la fabriquer.
  var guestSession = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_libs_deviceSession_js__WEBPACK_IMPORTED_MODULE_10__.remoteSessionFrom)(searchParams);
  }, [searchParams]);

  // UNE SESSION QUI VIT CHEZ UN SERVEUR FÉDÉRÉ (chantier 9, C9-P4c).
  //
  // Elle se reconnaît à son identifiant préfixé — `srv4:…` — comme un jeu
  // fédéré depuis le chantier 6. Ce préfixe dit CHEZ QUI, et rien de plus :
  // l'adresse et le jeton se demandent à notre propre kernel, ils ne
  // voyagent pas dans l'URL. Une adresse qu'on nous tend récolterait le
  // jeton de compte qu'on s'apprête à présenter.
  //
  // Différence de fond avec le chemin invité juste au-dessus : celui-là
  // FABRIQUE sa session, faute d'un compte pour la demander. Ici on en a
  // un, donc on interroge la façade DE CE SERVEUR — et la règle du
  // chantier 8 (la page ne fabrique pas ce qu'elle doit recevoir) se suit
  // toute seule.
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState48 = _slicedToArray(_useState47, 2),
    federatedHost = _useState48[0],
    setFederatedHost = _useState48[1];
  var federatedId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_35__.parseFederatedId)(rawSessionId);
  }, [rawSessionId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!federatedId) {
      setFederatedHost(null);
      return undefined;
    }
    var cancelled = false;
    (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_35__.federatedHostOf)(rawSessionId).then(function (found) {
      if (!cancelled) {
        setFederatedHost(found);
      }
    });
    return function () {
      cancelled = true;
    };
  }, [rawSessionId, federatedId]);

  // Tant que cette page montre une partie d'ailleurs, TOUTES ses URL visent
  // l'hôte — API, gateway, façade — et son jeton part avec. La surcharge
  // vit exactement le temps de cette page ; les autres écrans restent sur
  // notre propre kernel.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!(federatedHost !== null && federatedHost !== void 0 && federatedHost.link)) {
      return undefined;
    }
    ;(0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_33__.setStreamBase)(federatedHost.link, federatedHost.token, federatedHost.username);
    return function () {
      return (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_33__.clearStreamBase)();
    };
  }, [federatedHost]);

  // L'IDENTIFIANT TEL QUE L'HÔTE LE CONNAÎT. Le préfixe est à nous : chez
  // lui, cette session s'appelle autrement, et lui envoyer notre écriture
  // ne rendrait jamais rien.
  //
  // Null tant que l'hôte n'est pas résolu — sinon la recherche partirait
  // vers NOTRE façade, qui ne connaît pas cette session, et le compte à
  // rebours d'échec démarrerait sur une question mal posée.
  var lookupSessionId = federatedId ? federatedHost ? federatedId.id : null : rawSessionId;
  // CE QUI DESCEND, s'il descend quelque chose. Lancer un jeu distant
  // commence par le télécharger : l'attente de la vidéo EST ce transfert, et
  // c'est la seule chose qui distingue « ça travaille » de « c'est mort ».
  var downloadProgress = (0,_libs_deviceStream_js__WEBPACK_IMPORTED_MODULE_11__.useDownloadProgress)();
  // L'HÔTE PASSE DANS L'APPEL. Une session fédérée n'est pas dans notre
  // pool sous le nom que l'hôte lui donne : il faut la lui demander, avec
  // son adresse et son jeton — pas avec les nôtres, et pas via un état
  // global (voir la note de `useResolvedSession`). Le retrait de cet appel,
  // le 2026-09-07, avait fermé le dernier chemin qui résolvait une session
  // d'ailleurs : la page tombait sur « introuvable » au bout de cinq
  // secondes, pour une session qui tournait.
  var _useResolvedSession = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_9__.useResolvedSession)(guestSession ? null : lookupSessionId, {
      host: federatedHost !== null && federatedHost !== void 0 && federatedHost.link ? {
        origin: federatedHost.link,
        token: federatedHost.token
      } : null,
      waitingOn: downloadProgress
    }),
    resolvedSession = _useResolvedSession.session,
    isRequestTimeout = _useResolvedSession.isRequestTimeout;
  var session = guestSession || resolvedSession;
  // C7-P2 : sur le téléphone il n'y a pas de compte, mais la façade v4
  // vérifie des JWT — le kernel en frappe un pour l'appareil lui-même,
  // lu une fois à l'arrivée sur la page. Un invité (C7-P4) demande le sien
  // à l'hôte, sur la surface fédération ouverte.
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState50 = _slicedToArray(_useState49, 2),
    deviceToken = _useState50[0],
    setDeviceToken = _useState50[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!guestSession) {
      setDeviceToken(null);
      return;
    }

    // L'invité se PRÉSENTE : son nom d'appareil part avec la demande de
    // jeton, et devient son nom dans la file de l'hôte. Sans lui, le
    // détenteur de la manette lisait « guest-a3f1 demande la manette »
    // et n'avait aucun moyen de savoir qui c'était (2026-09-01).
    var endpoint = guestSession.guest ? "".concat(guestSession.host, "/api/v1/federation/guest-token?name=").concat(encodeURIComponent((0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_32__.deviceDisplayName)())) : (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_33__.apiUrl)("/api/v1/device/token");
    var cancelled = false;
    fetch(endpoint, {
      cache: "no-store"
    }).then(function (response) {
      return response.json();
    }).then(function (payload) {
      if (!cancelled) {
        setDeviceToken((payload === null || payload === void 0 ? void 0 : payload.token) || null);
      }
    })["catch"](function () {
      if (!cancelled) {
        setDeviceToken(null);
      }
    });
    return function () {
      cancelled = true;
    };
  }, [guestSession]);
  // Chez un hôte fédéré, c'est SON jeton qui vaut — celui du compte qu'on y
  // a ouvert (C9-P3). Le nôtre n'y veut rien dire.
  var token = guestSession ? deviceToken : (federatedHost === null || federatedHost === void 0 ? void 0 : federatedHost.token) || authToken;
  // ET SON NOM, POUR LA MÊME RAISON (#235). Tout ce que la page compare à
  // `user.username` vient de l'hôte : les joueurs que l'enfant annonce, le
  // propriétaire, la cession de manette qu'on nous propose. Notre nom
  // d'ici n'y figure jamais quand il diffère de celui qu'on porte là-bas :
  // le propriétaire qui ouvrait sa partie par un lien partagé se voyait
  // dire « vous regardez cette session », sans moyen de la reprendre (vu
  // le 2026-10-02 entre la staging et la production). Sans compte chez
  // l'hôte, ce nom est vide : on y regarde, et c'est la vérité.
  var shellUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return federatedHost ? _objectSpread(_objectSpread({}, user), {}, {
      username: federatedHost.username || ""
    }) : user;
  }, [federatedHost, user]);

  // Tant qu'une partie d'invité est affichée, TOUTES les URL de la page
  // (API, gateway, façade v4) visent l'hôte. La surcharge vit exactement
  // le temps de cette page — les autres écrans de l'appareil restent sur
  // son propre kernel.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!(guestSession !== null && guestSession !== void 0 && guestSession.guest)) {
      return undefined;
    }
    ;(0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_33__.setStreamBase)(guestSession.host);
    return function () {
      return (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_33__.clearStreamBase)();
    };
  }, [guestSession]);
  var _usePresence = (0,_contexts_PresenceContext_jsx__WEBPACK_IMPORTED_MODULE_13__.usePresence)(),
    reportIdle = _usePresence.reportIdle,
    reportPlaying = _usePresence.reportPlaying;

  // v1 (chantier-3) — LEAVING THE PAGE IS LEAVING THE SESSION, and this is
  // the only component whose lifetime means that. StreamingShell unmounts
  // whenever `session` momentarily resolves to null (see the early return
  // below) — binding the departure there cut the relay ~5 s after every
  // connect and killed the session behind it.
  //
  // pagehide covers the real page going away (refresh, tab close, mobile);
  // this component's own unmount covers SPA navigation out of /streaming.
  // Always disconnect(), never terminate(): leaving keeps the session
  // running for whoever else is playing. StreamingShell publishes its
  // disconnect into leaveRef and guards against firing twice.
  // v1 R2 — A RELOAD OF THIS PAGE LANDS ON THE DASHBOARD. Reloading
  // dropped the pad (the departure below fires on the way out), so coming
  // back to /streaming would show a watch view of a game you were just
  // playing, with no obvious way back. The Dashboard is where the way back
  // is.
  var leaveRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var leaveSession = function leaveSession() {
      var _leaveRef$current;
      return (_leaveRef$current = leaveRef.current) === null || _leaveRef$current === void 0 ? void 0 : _leaveRef$current.call(leaveRef);
    };
    window.addEventListener("pagehide", leaveSession);
    return function () {
      window.removeEventListener("pagehide", leaveSession);
      leaveSession();
    };
  }, []);

  // The shell owns the façade WS and isWatching now (P2 §1: the socket
  // drives the platform connection, so it lives next to the input hook) —
  // the parent only needs the watching flag for the terminate
  // bookkeeping, kept in a ref.
  var watchingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var handleWatchingChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (watching) {
    watchingRef.current = watching;
  }, []);
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState52 = _slicedToArray(_useState51, 2),
    terminateReason = _useState52[0],
    setTerminateReason = _useState52[1];
  var onTerminate = function onTerminate() {
    var _session$platform, _session$consoleId;
    if (watchingRef.current) {
      reportIdle();
    }
    var backParams = new URLSearchParams();

    // `source` : le serveur fédéré choisi dans la liste (chantier 14).
    for (var _i3 = 0, _arr3 = ["page", "q", "source"]; _i3 < _arr3.length; _i3++) {
      var key = _arr3[_i3];
      if (searchParams.has(key)) {
        backParams.set(key, searchParams.get(key));
      }
    }
    var platform = session === null || session === void 0 || (_session$platform = session.platform) === null || _session$platform === void 0 ? void 0 : _session$platform.toLowerCase();
    var consoleId = session === null || session === void 0 || (_session$consoleId = session.consoleId) === null || _session$consoleId === void 0 ? void 0 : _session$consoleId.toLowerCase();
    // LA ROUTE DE LA LISTE, PAS LE NOM DE LA PLATEFORME (2026-10-02). Une
    // session de jeu à distance porte le TYPE de la console (`ps5`) alors
    // que sa page est `/remoteplay/rp-ps5` ; une partie du téléphone porte
    // la plateforme `device`, qui n'a pas de page — ses jeux sont ceux de
    // `/retrogaming/<console>`. Les deux tombaient sur la route par défaut,
    // donc sur l'accueil, au lieu de la liste d'où l'on venait.
    var listPath = !platform || !consoleId ? null : platform === "remoteplay" ? "/remoteplay/".concat(consoleId.startsWith("rp-") ? consoleId : "rp-".concat(consoleId)) : platform === "device" ? "/retrogaming/".concat(consoleId) : "/".concat(platform, "/").concat(consoleId);
    navigate(listPath ? "".concat(listPath).concat(backParams.toString() ? "?".concat(backParams.toString()) : "") : "/");
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // La partie d'un autre appareil n'a rien à résoudre ici : elle vit
    // dans le pool de son hôte, et l'adresse porte déjà tout.
    if (guestSession) {
      return;
    }
    if (!rawSessionId) {
      setTerminateReason(t("streaming.noSessionId"));
      return;
    }
    // UN JEU QUI DESCEND N'EST PAS UNE SESSION INTROUVABLE — et c'est
    // `waitingOn`, passé à la recherche elle-même, qui tient l'horloge
    // arrêtée pendant ce temps (voir useResolvedSession). Ici on ne fait
    // plus qu'afficher le verdict quand il tombe.
    if (isRequestTimeout) {
      setTerminateReason(t("streaming.connection.state.sessionLookupTimeout"));
    }
  }, [guestSession, rawSessionId, isRequestTimeout, t]);

  // Pinch-zoom/double-tap-zoom fights with touch input meant for the
  // virtual controller/video area.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var preventGesture = function preventGesture(e) {
      return e.preventDefault();
    };
    document.addEventListener("gesturestart", preventGesture);
    document.addEventListener("gesturechange", preventGesture);
    document.addEventListener("gestureend", preventGesture);
    return function () {
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
      document.removeEventListener("gestureend", preventGesture);
    };
  }, []);

  // L'ÉCHEC PASSE AVANT L'ATTENTE, et il passait après.
  //
  // Ce garde-ci venait EN PREMIER : quand la recherche renonçait, la raison
  // était bien calculée juste au-dessus… puis jetée, parce que `!session`
  // rendait son propre écran avant qu'on n'y arrive. La page restait donc
  // sur « connexion… » pour toujours, y compris quand le code avait conclu
  // cinq secondes plus tôt qu'il n'y avait rien à trouver — c'est le
  // « ça tourne dans le vide et personne ne dit rien » signalé le
  // 2026-09-08. Une attente sans fin est le pire des deux affichages : elle
  // ne dit ni ce qu'on attend, ni qu'on a cessé d'attendre.
  if (terminateReason) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_14__.LoadingScreen, {
      launch: true,
      textOnFailure: terminateReason,
      onFailure: onTerminate
    });
  }

  // ANNULER AVANT QUE LA PAGE N'AIT SA PARTIE (#287). On n'arrive ici
  // qu'avec la réponse du lancement : la partie existe déjà chez son hôte,
  // la page ne l'a simplement pas encore en main. On s'en va tout de suite,
  // puis on demande une fois à cet hôte sa liste : à nous, la partie
  // s'arrête ; à quelqu'un d'autre, elle continue sans nous.
  var cancelBeforeSession = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var target, id, list, found;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            target = federatedHost !== null && federatedHost !== void 0 && federatedHost.link ? {
              origin: federatedHost.link,
              token: federatedHost.token
            } : {
              origin: (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_33__.homeOrigin)(),
              token: authToken || ""
            };
            id = lookupSessionId;
            onTerminate();
            if (!(!id || guestSession)) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            _context4.n = 2;
            return (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_34__.kernelSnapshot)(target, "sessions");
          case 2:
            list = _context4.v;
            found = (Array.isArray(list) ? list : []).find(function (entry) {
              return entry.id === id;
            });
            if (found && (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_9__.isOwnSession)(found, shellUser === null || shellUser === void 0 ? void 0 : shellUser.username)) {
              (0,_api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_19__.stopSession)(found.platform, found.id, target.token, federatedHost !== null && federatedHost !== void 0 && federatedHost.link ? target : null);
            }
          case 3:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function cancelBeforeSession() {
      return _ref1.apply(this, arguments);
    };
  }();
  if (!session) {
    // The session is still resolving (the façade snapshot hasn't
    // carried it yet) — plain overlay, nothing to stream yet.
    // NOTE: this early return unmounts StreamingShell, which is exactly
    // why "I am leaving" must NOT be bound to that shell's lifetime.
    //
    // Et quand c'est un TÉLÉCHARGEMENT qu'on attend, on le dit : la barre
    // sous le libellé venait sans phrase, ce qui laissait « connexion… »
    // par-dessus un transfert de quarante gigaoctets.
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("div", {
      className: "overflow-hidden position-relative",
      style: {
        backgroundColor: "#000",
        minHeight: "var(--gameflex-visible-height)"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(_stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_37__.LaunchScreen, {
        t: t,
        label: launchFailure ? t("streaming.launch.failed") : launchSteps.length > 0 ? t("streaming.launch.title") : downloadProgress
        // Un cœur qui descend avant que l'émulateur
        // n'existe — le jeu, lui, ne descend plus
        // (chantier 14).
        ? t("retrogaming.detail.downloading") : t("streaming.connection.state.connecting"),
        steps: launchSteps.length > 0 ? launchSteps : null
        // Le fond du lancement, repris de la page des jeux : la
        // même balise, le même flux (chantier 35).
        ,
        backdrop: launchId ? {
          launch: {
            streamId: launchId,
            username: (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_12__.getStoredUsername)() || null
          }
        } : null,
        failed: Boolean(launchFailure),
        error: (launchFailure === null || launchFailure === void 0 ? void 0 : launchFailure.error) || null,
        onReport: sendReport,
        reportState: reportState,
        onCancel: cancelBeforeSession
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(_hooks_use_gamepad_jsx__WEBPACK_IMPORTED_MODULE_21__.GamepadProvider, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)(StreamingShell, {
      leaveRef: leaveRef,
      t: t,
      user: shellUser,
      token: token,
      session: session,
      context: context,
      setTerminateReason: setTerminateReason,
      onTerminate: onTerminate,
      reportPlaying: reportPlaying,
      reportIdle: reportIdle,
      onWatchingChange: handleWatchingChange,
      wantsPlay: wantsPlay,
      onPlayIntentSent: dropPlayIntent,
      launchSteps: launchSteps,
      launchId: launchId
    }, session.id)
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/libs/deviceSession.js"
/*!***********************************************************!*\
  !*** ./src/webapp/src/app/gameflex/libs/deviceSession.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   remoteSessionFrom: () => (/* binding */ remoteSessionFrom)
/* harmony export */ });
// La « session » d'un jeu qui tourne sur ce téléphone — C6-P10.
//
// Il n'y en a pas, à proprement parler : rien n'est enregistré nulle part,
// personne d'autre ne la voit, et il n'y a pas de file de joueurs. Ce que la
// page de streaming demande à une session, en revanche, tient en cinq
// champs — alors on les lui donne, depuis l'adresse.
//
// Pourquoi pas une entrée dans le pool de sessions : elle apparaîtrait dans
// « en direct », et quelqu'un essaierait de la rejoindre par un chemin qui
// n'existe pas encore. Une session locale est locale, et le dire ici évite de
// le corriger partout ailleurs.

// CE FICHIER N'INVENTE PLUS DE SESSION.
//
// Il en fabriquait deux : celle du téléphone lui-même, depuis les paramètres
// de l'adresse et depuis `/api/v1/retrogaming/current`. Rôle, propriétaire,
// places et joueurs étaient donc écrits par la page — et quatre pannes du
// 2026-09-04 en sont sorties : un invité se voyait propriétaire de la partie
// d'un autre, « 1/1 » s'affichait sur un jeu à quatre manettes, l'hôte
// perdait sa session dès qu'un spectateur arrivait, et plus personne ne
// pouvait l'arrêter.
//
//   C8-P1  `deviceCurrentSession` supprimée — le kernel sert la façade.
//   C8-P3  `deviceSessionFrom` supprimée — la partie du téléphone a un
//          identifiant comme les autres, et le pool la résout.
//
// Ce qui reste ci-dessous est le seul cas qui ne PEUT pas se résoudre ici :
// la partie d'un AUTRE appareil, qui vit dans le pool de son hôte.

/**
 * La session d'un AUTRE appareil, rejointe par un invité (C7-P4).
 *
 * L'invité est un appareil GameFlex comme un autre : sa page vit sur son
 * propre kernel, mais cette partie-ci se joue CHEZ L'HÔTE. Même forme que la
 * session du téléphone — donc même chemin dans la page de streaming — mais
 * rien à lancer ni à arrêter : le jeu tourne déjà là-bas.
 */
function remoteSessionFrom(searchParams) {
  var host = searchParams.get("host");
  if (searchParams.get("guest") !== "1" || !host) {
    return null;
  }
  return {
    id: "remote:".concat(host),
    platform: "device",
    childSessionId: "device-session",
    guest: true,
    host: host,
    title: searchParams.get("name") || host,
    // Ni console ni fichier : il n'y a rien à lancer. Les champs que la
    // page lit existent, vides — le jeu se présente par les frames.
    consoleId: "",
    reference: "",
    core: "",
    // ON ARRIVE EN SPECTATEUR.
    //
    // Un lien se partage largement, et qui l'ouvre n'a rien demandé de
    // plus que de regarder. Entrer directement comme joueur prenait une
    // place dans la file sans que personne ne l'ait accordée — et sur le
    // téléphone, où il n'y a qu'un porteur, ça lui retirait sa manette.
    //
    // Demander la manette reste possible depuis le menu : c'est un geste,
    // et le détenteur voit qui demande.
    me: {
      role: "spectator",
      slot: null
    },
    players: [],
    openSlots: 0,
    connectionPool: [],
    width: 640,
    height: 480
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/libs/adaptive-quality.js"
/*!*********************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/libs/adaptive-quality.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SAMPLE_MS: () => (/* binding */ SAMPLE_MS),
/* harmony export */   adaptQuality: () => (/* binding */ adaptQuality),
/* harmony export */   createAdaptiveQuality: () => (/* binding */ createAdaptiveQuality),
/* harmony export */   isBadReading: () => (/* binding */ isBadReading),
/* harmony export */   readVideoHealth: () => (/* binding */ readVideoHealth)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
// LA BASCULE AUTOMATIQUE ENTRE LES DEUX FLUX — chantier 31 (le porteur,
// 2026-10-25 : « si le système détecte que mon réseau est devenu faible alors
// c'est le 540p qui prend le relai jusqu'à ce que ça redevienne stable »).
//
// La page décide pour SON spectateur, à partir de ce qu'elle mesure toutes les
// deux secondes : pertes de paquets, gigue, images gelées. Elle DESCEND VITE
// (deux relevés mauvais de suite, environ 4 s) et REMONTE LENTEMENT (30 s sans
// souci, puis un essai en HD ; un essai qui échoue double l'attente suivante).
// La passerelle ne fait que suivre (gatewaystreams/quality.go).
//
// Des fonctions pures : l'état entre, l'état sort, avec la qualité à demander.

var SAMPLE_MS = 2000;

// Un relevé est MAUVAIS au-delà de ces seuils.
var BAD_LOSS = 0.03; // 3 % des paquets vidéo perdus sur l'intervalle
var BAD_JITTER_MS = 60; // la gigue RTP du flux vidéo
var DOWN_AFTER = 2; // relevés mauvais de suite avant de descendre

var UP_AFTER_MS = 30000; // le calme demandé avant un essai en HD
var UP_MAX_MS = 8 * 60000; // l'attente ne double pas au-delà
var PROBATION_MS = 20000; // un essai qui tient ce délai a réussi

function createAdaptiveQuality() {
  return {
    bad: 0,
    calmSince: null,
    upAfter: UP_AFTER_MS,
    triedAt: null
  };
}

/**
 * Un relevé, lu dans `getStats()` : la piste vidéo reçue, comparée au relevé
 * précédent (`previous`, null au premier). Rend `{ counters, reading }` —
 * `reading` est null tant qu'il n'y a pas deux relevés à comparer.
 */
function readVideoHealth(report, previous) {
  var counters = null;
  report.forEach(function (entry) {
    if (entry.type === "inbound-rtp" && !entry.isRemote && entry.kind === "video") {
      var _entry$packetsLost, _entry$packetsReceive, _entry$freezeCount;
      counters = {
        lost: (_entry$packetsLost = entry.packetsLost) !== null && _entry$packetsLost !== void 0 ? _entry$packetsLost : 0,
        received: (_entry$packetsReceive = entry.packetsReceived) !== null && _entry$packetsReceive !== void 0 ? _entry$packetsReceive : 0,
        freezes: (_entry$freezeCount = entry.freezeCount) !== null && _entry$freezeCount !== void 0 ? _entry$freezeCount : 0,
        jitterMs: typeof entry.jitter === "number" ? entry.jitter * 1000 : 0
      };
    }
  });
  if (!counters || !previous) {
    return {
      counters: counters,
      reading: null
    };
  }
  var lost = Math.max(0, counters.lost - previous.lost);
  var received = Math.max(0, counters.received - previous.received);
  return {
    counters: counters,
    reading: {
      lossRate: lost + received > 0 ? lost / (lost + received) : 0,
      jitterMs: counters.jitterMs,
      freezes: Math.max(0, counters.freezes - previous.freezes)
    }
  };
}

/** Ce relevé est-il mauvais ? */
function isBadReading(reading) {
  return reading.lossRate >= BAD_LOSS || reading.jitterMs >= BAD_JITTER_MS || reading.freezes > 0;
}

/**
 * Un pas de la règle. `current` — la qualité que le spectateur REÇOIT
 * (`hd`, `sd`). Rend `{ state, want }` : `want` est la qualité à demander, ou
 * null s'il n'y a rien à changer.
 */
function adaptQuality(state, reading, current, now) {
  var _state$calmSince;
  var bad = isBadReading(reading);
  if (current === "hd") {
    var next = _objectSpread(_objectSpread({}, state), {}, {
      bad: bad ? state.bad + 1 : 0
    });
    if (next.bad >= DOWN_AFTER) {
      // Un essai en HD qui échoue vite : la prochaine attente double.
      var failedTry = next.triedAt !== null && now - next.triedAt < PROBATION_MS;
      return {
        state: {
          bad: 0,
          calmSince: null,
          triedAt: null,
          upAfter: failedTry ? Math.min(next.upAfter * 2, UP_MAX_MS) : next.upAfter
        },
        want: "sd"
      };
    }
    // Un essai qui a tenu : l'attente redevient celle du départ.
    if (next.triedAt !== null && now - next.triedAt >= PROBATION_MS) {
      return {
        state: _objectSpread(_objectSpread({}, next), {}, {
          triedAt: null,
          upAfter: UP_AFTER_MS
        }),
        want: null
      };
    }
    return {
      state: next,
      want: null
    };
  }
  var calmSince = bad ? null : (_state$calmSince = state.calmSince) !== null && _state$calmSince !== void 0 ? _state$calmSince : now;
  if (calmSince !== null && now - calmSince >= state.upAfter) {
    return {
      state: _objectSpread(_objectSpread({}, state), {}, {
        bad: 0,
        calmSince: null,
        triedAt: now
      }),
      want: "hd"
    };
  }
  return {
    state: _objectSpread(_objectSpread({}, state), {}, {
      calmSince: calmSince
    }),
    want: null
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/onscreen/cast.js"
/*!*************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/onscreen/cast.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endCastSession: () => (/* binding */ endCastSession),
/* harmony export */   getCurrentCastSession: () => (/* binding */ getCurrentCastSession),
/* harmony export */   requestCastSession: () => (/* binding */ requestCastSession),
/* harmony export */   sendSessionIdToReceiver: () => (/* binding */ sendSessionIdToReceiver)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Google Cast SENDER integration (Phase B2 of the "Mode Console +
// Chromecast WebRTC-natif" plan) — the OTHER half of public/cast-
// receiver.html (Phase B1, see that file's own top-of-file doc for why it's
// a separate static page, not part of this app's bundle). This module is
// plain JS, not a hook: the Cast Sender SDK is a global script (`window.cast`/
// `window.chrome.cast`), loaded lazily on first use rather than bundled, the
// same way every real Cast-integrated site does it.
//
// CUSTOM_NAMESPACE must match cast-receiver.html's own constant exactly —
// Cast's custom message channel is namespaced per string, a mismatch just
// silently never delivers anything.
var CUSTOM_NAMESPACE = "urn:x-cast:com.gameflex.session";

// Sourced from GAMEFLEX_GOOGLECAST_APPLICATION_ID (credentials.sh -> launch.sh ->
// docker-compose.yaml's gameflex-webapp service -> webpack.config.js's
// DefinePlugin — same chain GITHUB_COMMIT_SHA already uses), filled
// in once the receiver app is registered in the Google Cast SDK Developer
// Console (manual step, ~5$ one-time fee — see the plan's own doc; not
// something this code can do). Empty/missing is treated the same as
// "not registered yet": requestCastSession below fails fast with a clear
// error instead of silently trying to launch a receiver that doesn't exist.
var RECEIVER_APP_ID = process.env.GOOGLECAST_APPLICATION_ID || "";

// loadCastFramework=1 is required — without it the script only attaches the
// legacy window.chrome.cast namespace, never window.cast.framework (the CAF
// API this whole module is built on). Confirmed via real diagnostics: this
// exact omission produced isAvailable=true, hasChromeCast=true, but
// hasCastNamespace=false, indefinitely (not a timing gap — polling up to
// 15s never helped, because the framework layer was simply never requested).
var SENDER_SDK_URL = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
var sdkLoadPromise = null;

// Loads the Cast Sender SDK exactly once per page — the SDK calls a global
// callback (window['__onGCastApiAvailable']) once it's ready, rather than
// the script tag's own onload (the SDK does async internal setup after the
// script itself finishes loading).
//
// The "already loaded" check must test window.cast.framework specifically
// (what getCastContext below actually calls) — window.chrome.cast is a
// SEPARATE, older namespace the SDK also populates, but checking IT here
// was wrong: it can read truthy without cast.framework ever having loaded,
// which short-circuited past the script injection entirely and left
// `cast` undefined at the getCastContext call site ("cast is not defined").
function loadCastSdk() {
  var _window$cast;
  if ((_window$cast = window.cast) !== null && _window$cast !== void 0 && (_window$cast = _window$cast.framework) !== null && _window$cast !== void 0 && _window$cast.CastContext) return Promise.resolve();
  if (sdkLoadPromise) return sdkLoadPromise;
  if (!window.chrome) {
    return Promise.reject(new Error("Le Cast n'est disponible que sur un navigateur Chrome/Chromium."));
  }
  sdkLoadPromise = new Promise(function (resolve, reject) {
    // __onGCastApiAvailable(true) can still fire a moment before
    // window.cast.framework.CastContext is actually attached even with
    // loadCastFramework=1 (SENDER_SDK_URL above) — poll briefly instead
    // of rejecting on the very first check. 3s/30 attempts is generous;
    // the indefinite hang seen before that fix was the missing
    // loadCastFramework=1 param, not a real timing gap.
    var _waitForFramework = function waitForFramework(attemptsLeft) {
      var _window$cast2;
      if ((_window$cast2 = window.cast) !== null && _window$cast2 !== void 0 && (_window$cast2 = _window$cast2.framework) !== null && _window$cast2 !== void 0 && _window$cast2.CastContext) {
        resolve();
        return;
      }
      if (attemptsLeft <= 0) {
        sdkLoadPromise = null;
        reject(new Error("Le SDK Cast n'est pas disponible dans ce navigateur — teste sur Google Chrome avec l'icône Cast présente dans la barre d'outils."));
        return;
      }
      setTimeout(function () {
        return _waitForFramework(attemptsLeft - 1);
      }, 100);
    };
    window["__onGCastApiAvailable"] = function (isAvailable) {
      if (isAvailable) {
        _waitForFramework(30);
      } else {
        sdkLoadPromise = null;
        reject(new Error("Le SDK Cast n'est pas disponible dans ce navigateur — teste sur Google Chrome avec l'icône Cast présente dans la barre d'outils."));
      }
    };
    var script = document.createElement("script");
    script.src = SENDER_SDK_URL;
    script.onerror = function () {
      sdkLoadPromise = null;
      reject(new Error("Failed to load Cast SDK"));
    };
    document.head.appendChild(script);
  });
  return sdkLoadPromise;
}
function getCastContext() {
  var context = cast.framework.CastContext.getInstance();
  // AUTO_ACCEPT_SESSION_ID lets Chrome resume a session already running
  // on a device without a fresh user gesture on THIS page — harmless
  // default here, no media-namespace autoplay concerns since our receiver
  // doesn't use PlayerManager at all.
  context.setOptions({
    receiverApplicationId: RECEIVER_APP_ID,
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  });
  return context;
}

// requestCastSession — call from a real user click (browsers require a
// gesture to open the Cast device picker). Resolves once a Cast session is
// actually established; the caller still has to call sendSessionId itself
// (kept separate so re-sending on e.g. a session change is just another
// call, not a fresh cast-session negotiation).
function requestCastSession() {
  return _requestCastSession.apply(this, arguments);
}

// Sends {sessionId} to the receiver over the custom message channel — the
// ONLY thing the receiver needs to know to attach its own spectate WebRTC
// connection (see cast-receiver.html's attachToSession).
//
// session.sendMessage returns a Promise — must be awaited: fire-and-forget
// here previously swallowed delivery failures silently (confirmed via real
// testing — the receiver launched and the sender reported success, but the
// message never arrived, with zero error surfaced anywhere).
function _requestCastSession() {
  _requestCastSession = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var context;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (RECEIVER_APP_ID) {
            _context.n = 1;
            break;
          }
          throw new Error("Cast receiver app not registered yet — set GAMEFLEX_GOOGLECAST_APPLICATION_ID in credentials.sh (see gameflex/stream/onscreen/cast.js's RECEIVER_APP_ID doc).");
        case 1:
          _context.n = 2;
          return loadCastSdk();
        case 2:
          context = getCastContext();
          _context.n = 3;
          return context.requestSession();
        case 3:
          return _context.a(2, context.getCurrentSession());
      }
    }, _callee);
  }));
  return _requestCastSession.apply(this, arguments);
}
function sendSessionIdToReceiver(_x) {
  return _sendSessionIdToReceiver.apply(this, arguments);
}
function _sendSessionIdToReceiver() {
  _sendSessionIdToReceiver = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(sessionId) {
    var context, session;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          context = cast.framework.CastContext.getInstance();
          session = context.getCurrentSession();
          if (session) {
            _context2.n = 1;
            break;
          }
          throw new Error("No active Cast session.");
        case 1:
          _context2.n = 2;
          return session.sendMessage(CUSTOM_NAMESPACE, {
            sessionId: sessionId
          });
        case 2:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _sendSessionIdToReceiver.apply(this, arguments);
}
function getCurrentCastSession() {
  var _window$cast3;
  if (!((_window$cast3 = window.cast) !== null && _window$cast3 !== void 0 && _window$cast3.framework)) return null;
  return cast.framework.CastContext.getInstance().getCurrentSession();
}
function endCastSession() {
  var context = cast.framework.CastContext.getInstance();
  context.endCurrentSession(true);
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-remoteplay-input.js"
/*!*************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-remoteplay-input.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRemotePlayInput: () => (/* binding */ useRemotePlayInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_hooks_use_session_stats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/hooks/use-session-stats.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-session-stats.js");
/* harmony import */ var _shared_controller_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/controller-layout.js */ "./src/webapp/src/app/gameflex/stream/shared/controller-layout.js");
/* harmony import */ var _service_input_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/input.service.js */ "./src/webapp/src/app/gameflex/stream/remoteplay/service/input.service.js");
/* harmony import */ var _use_streaming_connection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-streaming-connection.js */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection.js");
/* harmony import */ var _use_streaming_connection_virtual_joystick_state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-streaming-connection/virtual-joystick-state.js */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/virtual-joystick-state.js");
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/keyMapping.js */ "./src/webapp/src/app/gameflex/libs/keyMapping.js");
/* harmony import */ var _types_controller_mapping_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../types/controller-mapping.js */ "./src/webapp/src/app/types/controller-mapping.js");
/* harmony import */ var _shared_activity_store_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/activity-store.js */ "./src/webapp/src/app/gameflex/stream/shared/activity-store.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
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

// See stream/remoteplay/Player.jsx's own former doc — remote-play's
// keyboard input already has its own proven, storage-event-driven local
// mapping (types/controller-mapping.js); this projects the user's
// KeyMapping into that same local storage shape once resolved, so the
// EXISTING keyboard handler picks it up unchanged.

function useRemotePlayKeyMapping(token) {
  var keyboardId = (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_7__.getKeyboardDeviceId)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cancelled = false;
    var project = function project(mapping) {
      var next = (0,_types_controller_mapping_js__WEBPACK_IMPORTED_MODULE_8__.getDefaultControllerMappings)();
      for (var _i = 0, _Object$entries = Object.entries(mapping); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          code = _Object$entries$_i[0],
          buttonName = _Object$entries$_i[1];
        if (next.buttons[buttonName]) {
          next.buttons[buttonName] = {
            button: buttonName,
            key: code
          };
        }
      }
      ;(0,_types_controller_mapping_js__WEBPACK_IMPORTED_MODULE_8__.saveControllerMappings)(next);
    };
    project((0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_7__.getCachedKeyMapping)(keyboardId, "dualsense"));
    (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_7__.loadKeyMapping)(token, keyboardId, "dualsense").then(function (m) {
      if (!cancelled) {
        project(m);
      }
    });
    var unsubscribe = (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_7__.subscribeKeyMapping)(keyboardId, "dualsense", project);
    return function () {
      cancelled = true;
      unsubscribe();
    };
  }, [keyboardId, token]);
}
function detectIsLikelyLan() {
  if (typeof window === "undefined") {
    return false;
  }
  var hostname = (window.location.hostname || "").toLowerCase();
  if (!hostname) {
    return false;
  }
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return true;
  }
  if (hostname.includes(":")) {
    return hostname.startsWith("fe80") || hostname.startsWith("fd") || hostname.startsWith("fc");
  }
  if (hostname.startsWith("10.") || hostname.startsWith("192.168.") || hostname.startsWith("169.254.")) {
    return true;
  }
  if (hostname.startsWith("172.")) {
    var second = Number(hostname.split(".")[1]);
    if (!Number.isNaN(second) && second >= 16 && second <= 31) {
      return true;
    }
  }
  return hostname.endsWith(".local");
}

// useRemotePlayInput — the remote-play half of the unified Streaming page's
// per-platform dispatcher (see stream/shared/hooks/use-streaming-input.js).
// Same pattern as use-retrogaming-input.js.
// screenRef — the PAGE's one gateway viewer (Streaming.jsx owns it, see
// SessionStream's doc). Remote-play no longer creates one of its own either:
// the belief that it could not (that it "only learns its gateway sessionId
// mid-flow") turned out to be false for this page — preCreatedSessionId is
// always session.id here and attachSessionId is never passed, so connect()
// was creating a second viewer against the very same id the page already
// held.
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
function useRemotePlayInput(_ref) {
  var screenRef = _ref.screenRef,
    session = _ref.session,
    context = _ref.context,
    t = _ref.t,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? {} : _ref$options;
  // Aucune option propre à remote-play aujourd'hui. Le paramètre est là
  // quand même : c'est la signature qui est commune, pas son contenu.
  void options;
  // Read-only proxy onto GatewayWebRTC's own <video> element (see
  // useStreamingConnection's own param doc — it still expects this,
  // pre-dating the screenRef/GatewayWebRTC migration) — same pattern as
  // Streaming.jsx's own pipVideoRef. Never passing this crashed the
  // moment a track actually arrived: onFirstVideoTrack (wired to
  // GatewayWebRTC's ontrack) does `videoRef.current` unconditionally,
  // and `videoRef` itself was undefined, not just `.current` — confirmed
  // live (2026-08-22) via "Cannot read properties of undefined (reading
  // 'current')" at the exact point video started flowing.
  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    get current() {
      var _screenRef$current$vi, _screenRef$current;
      return (_screenRef$current$vi = (_screenRef$current = screenRef.current) === null || _screenRef$current === void 0 ? void 0 : _screenRef$current.videoElement) !== null && _screenRef$current$vi !== void 0 ? _screenRef$current$vi : null;
    }
  }).current;
  var _useAuth = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_6__.useAuth)(),
    token = _useAuth.token,
    user = _useAuth.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    gaveAwayControl = _useState2[0],
    setGaveAwayControl = _useState2[1];
  var isLikelyLan = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(detectIsLikelyLan, []);

  // Stable identity (useCallback, not a plain arrow function recreated
  // every render) — connect() below has `onConnectionError` in its own
  // useCallback deps, and onConnectionError closes over this. An
  // unstable toast meant onConnectionError, then connect() itself, got a
  // NEW identity every single render — which fed straight into the
  // auto-connect effect's OWN deps ([connect, hostId, ...]), so it kept
  // clearing and rescheduling its 500ms timer on every re-render instead
  // of ever letting it fire. Confirmed live (2026-08-22): the page never
  // even reached "Connecting...", straight to stuck "Disconnected".
  var toast = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref2) {
    var title = _ref2.title,
      description = _ref2.description,
      variant = _ref2.variant;
    context.toast.open(description ? "".concat(title, " \u2014 ").concat(description) : title, {
      variant: variant === "destructive" ? "error" : "normal"
    });
  }, [context]);
  var handleConnectionError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (reason) {
    toast({
      title: t("streaming.connection.state.failed"),
      description: reason,
      variant: "destructive"
    });
  }, [toast, t]);
  var _useStreamingConnecti = (0,_use_streaming_connection_js__WEBPACK_IMPORTED_MODULE_4__.useStreamingConnection)({
      hostId: session.reference,
      isLikelyLan: isLikelyLan,
      videoRef: videoRef,
      screenRef: screenRef,
      username: user === null || user === void 0 ? void 0 : user.username,
      // preCreatedSessionId (idempotent reuse of an already-started
      // session) only — NOT attachSessionId. attachSessionId makes
      // connect() skip straight to connectAttached(), the control-handoff
      // "attach as a promoted viewer" path (viewerService.createOffer,
      // see that function's own doc): it never wakes/handshakes with the
      // PS5 at all, it just tries to attach to a stream that's supposed
      // to already be live. Setting it unconditionally to session.id
      // meant EVERY connection — including the very first, real owner
      // connection that's supposed to DO the PS5 handshake — took this
      // dead-end path instead, so video never arrived (confirmed live,
      // 2026-08-22: stuck on "Disconnected" forever). There is no live
      // "take control" signal in the current architecture that should
      // set this yet (see extraProps.handover's own doc, use-remoteplay-
      // input.js) — leave unset until that flow actually exists.
      preCreatedSessionId: session.id,
      gaveAwayControl: gaveAwayControl,
      onConnectionError: handleConnectionError
    }),
    isConnected = _useStreamingConnecti.isConnected,
    isConnecting = _useStreamingConnecti.isConnecting,
    isStalling = _useStreamingConnecti.isStalling,
    connectionState = _useStreamingConnecti.connectionState,
    connectionStats = _useStreamingConnecti.connectionStats,
    hasControl = _useStreamingConnecti.hasControl,
    _disconnect = _useStreamingConnecti.disconnect,
    setStatsMonitoring = _useStreamingConnecti.setStatsMonitoring,
    handleConnectionStateChange = _useStreamingConnecti.handleConnectionStateChange,
    handleGatewayMessage = _useStreamingConnecti.handleGatewayMessage,
    handleIceConnectionStateChange = _useStreamingConnecti.handleIceConnectionStateChange,
    onFirstVideoTrack = _useStreamingConnecti.onFirstVideoTrack;
  useRemotePlayKeyMapping(token);
  var REMOTE_DIAGONALS = {
    DPAD_UP_LEFT: ["DPAD_UP", "DPAD_LEFT"],
    DPAD_UP_RIGHT: ["DPAD_UP", "DPAD_RIGHT"],
    DPAD_DOWN_LEFT: ["DPAD_DOWN", "DPAD_LEFT"],
    DPAD_DOWN_RIGHT: ["DPAD_DOWN", "DPAD_RIGHT"]
  };
  var handleRemoteButtonDown = function handleRemoteButtonDown(name) {
    if (!hasControl || name === "LEFT_STICK" || name === "RIGHT_STICK") {
      return;
    }
    // P6 — real input stamps the activity store (drained by the shell).
    ;(0,_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_9__.markActivity)();
    var _iterator = _createForOfIteratorHelper(REMOTE_DIAGONALS[name] || [name]),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var direction = _step.value;
        _service_input_service_js__WEBPACK_IMPORTED_MODULE_3__.remoteplayInputService.sendButton(direction, "press")["catch"](function () {});
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  // No priority guard here on purpose: a RELEASE always goes through, even
  // from a tab that just lost the priority mid-press — dropping it would
  // leave the button stuck down on the console, and a stray release is
  // harmless.
  var handleRemoteButtonUp = function handleRemoteButtonUp(name) {
    if (!hasControl || name === "LEFT_STICK" || name === "RIGHT_STICK") {
      return;
    }
    ;(0,_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_9__.markActivity)();
    var _iterator2 = _createForOfIteratorHelper(REMOTE_DIAGONALS[name] || [name]),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var direction = _step2.value;
        _service_input_service_js__WEBPACK_IMPORTED_MODULE_3__.remoteplayInputService.sendButton(direction, "release")["catch"](function () {});
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  var handleRemoteAnalogMove = function handleRemoteAnalogMove(name, x, y) {
    if (!hasControl) {
      return;
    }
    ;(0,_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_9__.markActivity)();
    var side = name === "LEFT_STICK" ? "left" : name === "RIGHT_STICK" ? "right" : null;
    if (!side) {
      return;
    }
    ;(0,_use_streaming_connection_virtual_joystick_state_js__WEBPACK_IMPORTED_MODULE_5__.setVirtualStickActive)(side, x !== 0 || y !== 0);
    (0,_use_streaming_connection_virtual_joystick_state_js__WEBPACK_IMPORTED_MODULE_5__.setVirtualStick)(side, x, y);
  };
  // Le doigt sur le pavé tactile. Le clic, lui, passe par
  // handleRemoteButtonDown/Up (TOUCHPAD) comme avant : la surface
  // l'appelle au bon moment du geste.
  var handleRemoteTouch = function handleRemoteTouch(finger, down, x, y) {
    if (!hasControl) {
      return;
    }
    ;(0,_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_9__.markActivity)();
    _service_input_service_js__WEBPACK_IMPORTED_MODULE_3__.remoteplayInputService.sendTouch(finger, down, x, y)["catch"](function () {});
  };

  // P2 §1 — remote-play's transport lives in input.service.js, fully
  // independent of the façade WS (the WS only carries pushes) — all
  // three lifecycle callbacks are no-ops by design.
  var onConnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {}, []);
  var onLeave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {}, []);
  var onDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {}, []);

  // P5 — contract actions the shell triggers; the request messages ride
  // the child, as intents (sessionSend), so the hook only carries the platform-
  // side follow-ups. No swap (single pad, the owner IS the only slot)
  // and no free-slot join.
  var onSlotGiveaway = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // THIS holder accepted a cede: the kernel already swapped the pool
    // and pushed the new holder to the child (input gate) — this page
    // just stops its own input attempts.
    setGaveAwayControl(true);
  }, []);
  var hasFreeSlots = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return 0;
  }, []);
  var onMonitoringResource = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (open) {
    var powerOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var _useSessionStats = (0,_shared_hooks_use_session_stats_js__WEBPACK_IMPORTED_MODULE_1__.useSessionStats)({
        platform: "remoteplay",
        sessionId: session.id,
        startedAt: session.startedAt,
        // Même oubli que streamex : sans jeton la route répond 401, et le
        // panneau garde ses tirets sans qu'on sache pourquoi.
        token: token,
        setStatsMonitoring: setStatsMonitoring,
        intervalMs: 5000,
        open: open,
        powerOnly: powerOnly
      }),
      serverStatus = _useSessionStats.serverStatus,
      devicePower = _useSessionStats.devicePower;
    // `.data` — le kernel répond `{success, data}`. Voir use-streamex-input,
    // où le même oubli donnait un tiret sur chaque ligne mesurée.
    // `device` — le téléphone qu'on tient, quand la partie tourne
    // ailleurs (voir useSessionStats).
    return _objectSpread(_objectSpread(_objectSpread({}, connectionStats), serverStatus === null || serverStatus === void 0 ? void 0 : serverStatus.data), {}, {
      device: devicePower
    });
  }, [session.id, session.startedAt, setStatsMonitoring, t, connectionStats]);
  return {
    // No `connect` exposed here — unlike retro-gaming, this
    // connection hook already auto-connects itself (its own
    // useEffect on hostId/attachSessionId/preCreatedSessionId, see
    // use-streaming-connection.js). Streaming.jsx calling connect()
    // again on top of that would race the hook's own attempt.
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
    // remote-play has no save states, so saveOnQuit stays absent.
    disconnect: function disconnect() {
      return _disconnect(false);
    },
    terminate: function terminate() {
      return _disconnect(true);
    },
    // leavePage — the page is navigating away, NOT quitting (roadmap P2):
    // there is nothing to pause on a PS5, and the connection hook's own
    // unmount effect already drops the transport — calling disconnect()
    // here too would tear down twice for nothing. The session survives
    // on its grace for the next device.
    onConnect: onConnect,
    onLeave: onLeave,
    onDisconnect: onDisconnect,
    onSlotGiveaway: onSlotGiveaway,
    hasFreeSlots: hasFreeSlots,
    onMonitoringResource: onMonitoringResource,
    title: session.title,
    // The browser-to-gateway leg is UNIVERSAL: the gateway serves the same
    // fan-out contract to all three platforms, so nothing about talking to
    // it should be platform-specific. What IS specific to remote-play is
    // the buffer-service-to-console leg (Takion), which lives in
    // the buffer service, not here. Three former "PS5 settings" were
    // removed on that basis (2026-08-24):
    //   - combinedAudioVideo: put audio and video on ONE element, which
    //     makes Chrome slave the video to the audio clock (~1s of
    //     perceived input lag — see GatewayWebRTC's own note). A pre-
    //     gateway habit, and the worst possible trade for a game stream.
    //   - forceTurnRelay: confirmed unnecessary — all three platforms
    //     connect remotely with or without TURN.
    //   - rtcConfig: max-bundle and rtcp-mux are Chrome's own defaults.
    // The low-latency answer-SDP rewrite is not remote-play-specific
    // either; it now applies to every platform inside GatewayWebRTC.
    //
    // What remains here still reaches AROUND the gateway to speak to the
    // buffer service (keyframe request on first track, SignalR-driven ICE
    // restart, keepalive ping/pong) — pre-gateway leftovers that belong on
    // the buffer-to-gateway leg. Removing them needs a change in the
    // buffer service; tracked in chantier 2 (C2-P4c).
    gatewayProps: {
      // UN SEUL ÉLÉMENT : la console n'a qu'une source.
      //
      // La PS5 envoie l'image et le son ensemble et n'initialise son
      // flux qu'UNE fois. Les répartir sur deux éléments condamne la
      // vidéo dès que le son arrive le premier — elle n'a pas de
      // seconde chance. Le tampon entre la console et la passerelle
      // devait faire ce découpage ; tant qu'il ne le fait pas, c'est
      // ici que la contrainte se traduit.
      //
      // Retiré le 2026-08-24 pour économiser la seconde de latence
      // d'entrée que Chrome ajoute en asservissant la vidéo à
      // l'horloge audio. L'économie n'existait pas : elle se payait en
      // image absente sur navigateur mobile (2026-09-07).
      combinedAudioVideo: true,
      onConnectionStateChange: handleConnectionStateChange,
      onFirstVideoTrack: onFirstVideoTrack,
      onIceConnectionStateChange: handleIceConnectionStateChange,
      onMessage: handleGatewayMessage
    },
    isConnected: isConnected,
    isConnecting: isConnecting,
    isStalling: isStalling,
    connectionState: connectionState,
    controller: function controller() {
      var _resolveControllerLay = (0,_shared_controller_layout_js__WEBPACK_IMPORTED_MODULE_2__.resolveControllerLayout)({
          session: session
        }),
        ControllerComponent = _resolveControllerLay.Component,
        label = _resolveControllerLay.label;
      return {
        label: label,
        Component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ControllerComponent, {
          onButtonDown: handleRemoteButtonDown,
          onButtonUp: handleRemoteButtonUp,
          onAnalogMove: handleRemoteAnalogMove,
          onTouch: handleRemoteTouch
        })
      };
    },
    extraProps: null
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection.js"
/*!*****************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStreamingConnection: () => (/* binding */ useStreamingConnection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./src/webapp/src/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _gameflex_hooks_use_gamepad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/gameflex/hooks/use-gamepad */ "./src/webapp/src/app/gameflex/hooks/use-gamepad.jsx");
/* harmony import */ var _gameflex_stream_remoteplay_service_streaming_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/gameflex/stream/remoteplay/service/streaming.service */ "./src/webapp/src/app/gameflex/stream/remoteplay/service/streaming.service.js");
/* harmony import */ var _gameflex_stream_remoteplay_service_viewer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/gameflex/stream/remoteplay/service/viewer.service */ "./src/webapp/src/app/gameflex/stream/remoteplay/service/viewer.service.js");
/* harmony import */ var _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/gameflex/stream/remoteplay/service/input.service */ "./src/webapp/src/app/gameflex/stream/remoteplay/service/input.service.js");
/* harmony import */ var _gameflex_stream_remoteplay_service_rumble_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/gameflex/stream/remoteplay/service/rumble.service */ "./src/webapp/src/app/gameflex/stream/remoteplay/service/rumble.service.js");
/* harmony import */ var _gameflex_stream_shared_webrtc_low_latency_sdp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/gameflex/stream/shared/webrtc-low-latency-sdp */ "./src/webapp/src/app/gameflex/stream/shared/webrtc-low-latency-sdp.js");
/* harmony import */ var _gameflex_stream_remoteplay_libs_keyboard_mapping__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/gameflex/stream/remoteplay/libs/keyboard-mapping */ "./src/webapp/src/app/gameflex/stream/remoteplay/libs/keyboard-mapping.js");
/* harmony import */ var _gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/gameflex/stream/remoteplay/service/gamepad.service */ "./src/webapp/src/app/gameflex/stream/remoteplay/service/gamepad.service.js");
/* harmony import */ var _gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/gameflex/shared/utils/log-store */ "./src/webapp/src/app/gameflex/shared/utils/log-store.js");
/* harmony import */ var _use_streaming_connection_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./use-streaming-connection/constants */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/constants.js");
/* harmony import */ var _shared_activity_store_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/activity-store.js */ "./src/webapp/src/app/gameflex/stream/shared/activity-store.js");
/* harmony import */ var _use_streaming_connection_stick_input_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./use-streaming-connection/stick-input-state */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/stick-input-state.js");
/* harmony import */ var _use_streaming_connection_virtual_joystick_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./use-streaming-connection/virtual-joystick-state */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/virtual-joystick-state.js");
/* harmony import */ var _use_streaming_connection_use_mouse_right_stick__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./use-streaming-connection/use-mouse-right-stick */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/use-mouse-right-stick.js");
/* harmony import */ var _shared_hooks_use_gateway_webrtc_connection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/hooks/use-gateway-webrtc-connection.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-gateway-webrtc-connection.js");
/* harmony import */ var _use_streaming_connection_stats_collector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./use-streaming-connection/stats-collector */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/stats-collector.js");
/* harmony import */ var _use_streaming_connection_prepare_device__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./use-streaming-connection/prepare-device */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/prepare-device.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
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












// v1 (chantier-3): the client-side input priority gate is gone. It existed
// because every tab of a player kept its role, so the page had to decide
// locally which one was driving. Input is now gated where it belongs —
// server-side, on who holds the pad — and a pad is taken by an explicit
// POST, never inferred here.






function useStreamingConnection(_ref) {
  var hostId = _ref.hostId,
    isLikelyLan = _ref.isLikelyLan,
    videoRef = _ref.videoRef,
    screenRef = _ref.screenRef,
    toast = _ref.toast,
    onConnectionError = _ref.onConnectionError,
    attachSessionId = _ref.attachSessionId,
    username = _ref.username,
    preCreatedSessionId = _ref.preCreatedSessionId,
    _ref$gaveAwayControl = _ref.gaveAwayControl,
    gaveAwayControl = _ref$gaveAwayControl === void 0 ? false : _ref$gaveAwayControl;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
    t = _useTranslation.t;
  // isConnected/isConnecting/connectionState/connectionStats/isStatsEnabled
  // — sourced from the same shared hook retro/streamex already use (see
  // its own doc), instead of reimplementing this slice locally as before
  // (docs/wiggly-rolling-plum, "Conventions de code + refacto phasé des
  // useXStreamingConnection"). handleConnectionStateChange/setStatsMonitoring
  // below wrap the shared hook's own versions to layer PS5-only side
  // effects on top — see each wrapper's own comment.
  var _useGatewayWebrtcConn = (0,_shared_hooks_use_gateway_webrtc_connection_js__WEBPACK_IMPORTED_MODULE_16__.useGatewayWebrtcConnection)({
      screenRef: screenRef,
      t: t
    }),
    isConnected = _useGatewayWebrtcConn.isConnected,
    isConnecting = _useGatewayWebrtcConn.isConnecting,
    connectionState = _useGatewayWebrtcConn.connectionState,
    connectionStats = _useGatewayWebrtcConn.connectionStats,
    isStatsEnabled = _useGatewayWebrtcConn.isStatsEnabled,
    setIsConnected = _useGatewayWebrtcConn.setIsConnected,
    setIsConnecting = _useGatewayWebrtcConn.setIsConnecting,
    setConnectionState = _useGatewayWebrtcConn.setConnectionState,
    setConnectionStats = _useGatewayWebrtcConn.setConnectionStats,
    setSharedStatsMonitoring = _useGatewayWebrtcConn.setStatsMonitoring,
    handleSharedConnectionStateChange = _useGatewayWebrtcConn.handleConnectionStateChange;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    webrtcSessionId = _useState2[0],
    setWebrtcSessionId = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    remotePlaySessionId = _useState4[0],
    setRemotePlaySessionId = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isStalling = _useState6[0],
    setIsStalling = _useState6[1];
  // Control handoff ("take control") — the owner starts in control; can be
  // handed off to a viewer via the kernel (B2 — see Player.jsx's
  // session.controlRequest prompt and gaveAwayControl above).
  // hasControlRef is what the actual input-sending code paths check
  // (avoids stale closures); hasControl (state) is only for rendering the
  // UI.
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    hasControl = _useState8[0],
    setHasControl = _useState8[1];
  var hasControlRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);

  // Set only when this connection ATTACHES to an already-running session
  // (control-handoff "take control" flow, see connectAttached below) rather
  // than starting a brand-new one — governs which teardown path disconnect()
  // takes.
  var isAttachedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var viewerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var videoOptimizeCleanupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // Takes the <video> playback listeners back down — see where it is set, in
  // processVideoStream. Same shape as videoOptimizeCleanupRef above.
  var detachVideoListenersRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var keyboardCleanupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var gamepadEnabledRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var isConnectedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var hasAttemptedInitialConnectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var hasTriggeredErrorCallbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  // Push-based ICE candidates / health (Phase 3 WS migration) — unsubscribe
  // functions for the streamingHubService listeners registered once we
  // know our own webrtcSessionId, torn down in disconnect() below so a
  // reconnect doesn't stack duplicate listeners on the shared singleton.
  var iceCandidateUnsubscribeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var healthUpdateUnsubscribeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // Latest HealthUpdate pushed over the streaming hub — read by
  // handleStreamHealthCheck instead of polling GET .../health over HTTP.
  var pushedHealthRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // Cumulative video packetsLost/packetsReceived from the last network-loss
  // sample, used to compute a windowed loss ratio to report to the backend
  // (see the reportNetworkLoss effect below) — separate from the stats
  // collector's rate anchors (now owned by useConnectionStatsCollector),
  // which only run while the Live Monitoring panel is open; this sampling
  // must run regardless, since bitrate adaptation is not a debug-only
  // feature.
  var lastNetworkLossSampleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useStickInputState = (0,_use_streaming_connection_stick_input_state__WEBPACK_IMPORTED_MODULE_13__.useStickInputState)(),
    getNormalizedState = _useStickInputState.getNormalizedState,
    snapshotGamepadAxes = _useStickInputState.snapshotGamepadAxes,
    handleGamepadAxis = _useStickInputState.handleGamepadAxis,
    setPointerLock = _useStickInputState.setPointerLock,
    setMouseVelocity = _useStickInputState.setMouseVelocity,
    setKeyboardLeftStick = _useStickInputState.setKeyboardLeftStick,
    setTriggerPressure = _useStickInputState.setTriggerPressure,
    resetStickInput = _useStickInputState.reset;
  var _useMouseRightStick = (0,_use_streaming_connection_use_mouse_right_stick__WEBPACK_IMPORTED_MODULE_15__.useMouseRightStick)({
      videoRef: videoRef,
      onPointerLockChange: setPointerLock,
      onMouseMove: setMouseVelocity
    }),
    setupMouseRightStick = _useMouseRightStick.setup,
    tearDownMouseRightStick = _useMouseRightStick.tearDown;
  var lastSentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    leftX: 0,
    leftY: 0,
    rightX: 0,
    rightY: 0,
    l2: 0,
    r2: 0,
    timestamp: 0
  });
  var stickProcessingActiveRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var stickIntervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useGamepad = (0,_gameflex_hooks_use_gamepad__WEBPACK_IMPORTED_MODULE_2__.useGamepad)(),
    isGamepadEnabled = _useGamepad.isEnabled;
  // Stats collection and the PS5 device gate live in their own files now
  // (P7.4) — see use-streaming-connection/stats-collector.js and
  // prepare-device.js. streamingStartTimeRef is stamped by
  // handleConnectionStateChange/onFirstVideoTrack below.
  var _useConnectionStatsCo = (0,_use_streaming_connection_stats_collector__WEBPACK_IMPORTED_MODULE_17__.useConnectionStatsCollector)({
      screenRef: screenRef,
      setConnectionStats: setConnectionStats,
      isStatsEnabled: isStatsEnabled
    }),
    streamingStartTimeRef = _useConnectionStatsCo.streamingStartTimeRef,
    resetConnectionStats = _useConnectionStatsCo.resetConnectionStats;
  var prepareDevice = (0,_use_streaming_connection_prepare_device__WEBPACK_IMPORTED_MODULE_18__.usePrepareDevice)({
    hostId: hostId,
    t: t,
    setConnectionState: setConnectionState
  });
  var webrtcSessionIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var isStreamBoundRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  // Le minuteur de la première connexion, tenu hors du cycle de rendu — voir
  // l'effet d'auto-connexion tout en bas pour la raison.
  var initialConnectTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var hasVideoTrackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var keyframeMonitorIntervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var lastVideoActivityRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var lastDecodedFrameCountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var lastPlaybackPositionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var lastKeyframeRequestRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var pendingKeyframeRequestRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var initialKeyframeRequestedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var remotePlaySessionIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var lastStreamHealthRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var healthCheckInFlightRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var lastHealthCheckAtRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var lastNeutralHealthKeyframeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var KEYFRAME_REQUEST_COOLDOWN_MS = 8000;
  var HEALTH_CHECK_COOLDOWN_MS = 3000;
  // Previously used for the neutral keyframe auto-trigger cooldown (no longer in use)
  // const HEALTH_NEUTRAL_KEYFRAME_COOLDOWN_MS = 5000

  var requestKeyframe = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (reason) {
    var now = Date.now();
    var sessionId = webrtcSessionIdRef.current || webrtcSessionId;
    if (!sessionId) {
      (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("⚠️ Cannot request keyframe, missing SessionId", {
        reason: reason
      });
      return false;
    }
    if (!isStreamBoundRef.current) {
      (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("⚠️ Cannot request keyframe, session not bound", {
        reason: reason
      });
      return false;
    }
    if (pendingKeyframeRequestRef.current) {
      (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("⚠️ Keyframe request in progress, skipping", {
        reason: reason
      });
      return false;
    }
    if (now - lastKeyframeRequestRef.current < KEYFRAME_REQUEST_COOLDOWN_MS) {
      (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("⚠️ Keyframe request cooldown", {
        reason: reason,
        elapsed: now - lastKeyframeRequestRef.current
      });
      return false;
    }
    lastKeyframeRequestRef.current = now;
    pendingKeyframeRequestRef.current = true;
    console.warn("⚠️ Triggering keyframe request", {
      reason: reason,
      sessionId: sessionId
    });
    var sendKeyframeRequest = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var signalrResult, response, _response, _t, _t2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.requestKeyframe(sessionId);
            case 1:
              signalrResult = _context.v;
              if (signalrResult) {
                _context.n = 3;
                break;
              }
              console.warn("⚠️ SignalR keyframe failed, trying HTTP fallback", {
                reason: reason
              });
              _context.n = 2;
              return _gameflex_stream_remoteplay_service_streaming_service__WEBPACK_IMPORTED_MODULE_3__.streamingService.requestKeyframe(sessionId);
            case 2:
              response = _context.v;
              if (!response.success) {
                console.warn("⚠️ HTTP keyframe request failed", {
                  reason: reason,
                  message: response.message,
                  error: response.errorMessage
                });
              } else {
                (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("🎯 HTTP keyframe request sent", {
                  reason: reason
                });
              }
              _context.n = 4;
              break;
            case 3:
              (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("🎯 SignalR keyframe request sent", {
                reason: reason
              });
            case 4:
              _context.n = 9;
              break;
            case 5:
              _context.p = 5;
              _t = _context.v;
              console.error("❌ Keyframe request failed, trying HTTP fallback", _t, {
                reason: reason
              });
              _context.p = 6;
              _context.n = 7;
              return _gameflex_stream_remoteplay_service_streaming_service__WEBPACK_IMPORTED_MODULE_3__.streamingService.requestKeyframe(sessionId);
            case 7:
              _response = _context.v;
              if (!_response.success) {
                console.warn("⚠️ HTTP keyframe request failed", {
                  reason: reason,
                  message: _response.message,
                  error: _response.errorMessage
                });
              } else {
                (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("🎯 HTTP keyframe request sent", {
                  reason: reason
                });
              }
              _context.n = 9;
              break;
            case 8:
              _context.p = 8;
              _t2 = _context.v;
              console.error("❌ HTTP keyframe request error:", _t2, {
                reason: reason
              });
            case 9:
              _context.p = 9;
              pendingKeyframeRequestRef.current = false;
              return _context.f(9);
            case 10:
              return _context.a(2);
          }
        }, _callee, null, [[6, 8], [0, 5, 9, 10]]);
      }));
      return function sendKeyframeRequest() {
        return _ref2.apply(this, arguments);
      };
    }();
    void sendKeyframeRequest();
    return true;
  }, [KEYFRAME_REQUEST_COOLDOWN_MS, webrtcSessionId]);

  // Externally exposed manual refresh method (requests a keyframe)
  var refreshStream = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var ok = requestKeyframe("manual-refresh");
    // When connected, minimize toast interruptions; only show a brief notice on failure
    if (!ok) {
      try {
        // Only show a brief notice on failure, with a short display duration
        toast({
          title: "Refresh unavailable",
          description: "Session unavailable or still in cooldown",
          variant: "destructive",
          duration: 2000 // Auto-dismiss after 2 seconds
        });
      } catch (_unused) {
        // ignore toast failure in environments without i18n/toast
      }
    } else {
      // On success, if already connected do not show a toast (avoid interrupting gameplay), only log to console
      if (isConnectedRef.current) {
        (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("✅ Refresh request sent");
      } else {
        // Show a toast when not connected
        try {
          toast({
            title: "Refresh request sent",
            description: "Please wait, attempting to restore video",
            duration: 2000 // Auto-dismiss after 2 seconds
          });
        } catch (_unused2) {
          // ignore
        }
      }
    }
    return ok;
  }, [requestKeyframe, t, toast]);

  // Force reset ReorderQueue (user-triggered, to resolve a frozen frame)
  var forceResetReorderQueue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var sessionId, success, _t3;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          sessionId = webrtcSessionIdRef.current || webrtcSessionId;
          if (sessionId) {
            _context2.n = 1;
            break;
          }
          console.warn("⚠️ Cannot reset queue, missing SessionId");
          try {
            toast({
              title: "Cannot Reset Queue",
              description: "Session unavailable",
              variant: "destructive",
              duration: 2000
            });
          } catch (_unused3) {
            // ignore toast failure
          }
          return _context2.a(2, false);
        case 1:
          if (isStreamBoundRef.current) {
            _context2.n = 2;
            break;
          }
          console.warn("⚠️ Cannot reset queue, session not bound");
          try {
            toast({
              title: "Cannot Reset Queue",
              description: "Session not bound to remote stream",
              variant: "destructive",
              duration: 2000
            });
          } catch (_unused4) {
            // ignore toast failure
          }
          return _context2.a(2, false);
        case 2:
          console.warn("🔄 User manually triggered ReorderQueue reset", {
            sessionId: sessionId
          });
          _context2.p = 3;
          _context2.n = 4;
          return _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.forceResetReorderQueue(sessionId);
        case 4:
          success = _context2.v;
          if (!success) {
            _context2.n = 5;
            break;
          }
          ;(0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("✅ Queue reset successful");
          try {
            toast({
              title: "Video Queue Reset",
              description: "Requesting keyframe to restore video...",
              duration: 2000
            });
          } catch (_unused5) {
            // ignore toast failure
          }
          return _context2.a(2, true);
        case 5:
          console.warn("⚠️ Queue reset unsuccessful");
          try {
            toast({
              title: "Queue reset failed",
              description: "Please try again later",
              variant: "destructive",
              duration: 2000
            });
          } catch (_unused6) {
            // ignore toast failure
          }
          return _context2.a(2, false);
        case 6:
          _context2.n = 8;
          break;
        case 7:
          _context2.p = 7;
          _t3 = _context2.v;
          console.error("❌ Queue reset error:", _t3);
          try {
            toast({
              title: "Queue reset failed",
              description: "An error occurred, please try again",
              variant: "destructive",
              duration: 2000
            });
          } catch (_unused7) {
            // ignore toast failure
          }
          return _context2.a(2, false);
        case 8:
          return _context2.a(2);
      }
    }, _callee2, null, [[3, 7]]);
  })), [webrtcSessionId, toast]);
  var resolveWebrtcSessionId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (webrtcSessionIdRef.current) {
      return webrtcSessionIdRef.current;
    }
    if (webrtcSessionId) {
      webrtcSessionIdRef.current = webrtcSessionId;
      return webrtcSessionId;
    }
    return null;
  }, [webrtcSessionId]);
  var resolveRemotePlaySessionId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (remotePlaySessionIdRef.current) {
      return remotePlaySessionIdRef.current;
    }
    if (remotePlaySessionId) {
      remotePlaySessionIdRef.current = remotePlaySessionId;
      return remotePlaySessionId;
    }
    return null;
  }, [remotePlaySessionId]);
  var handleStreamHealthCheck = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(reason, context) {
      var _context$forceNeutral;
      var streamSessionId, now, forceNeutral, snapshot, PUSH_STALE_MS, pushed, health, previous, healthReceivedAt, deltaFrozen, deltaRecovered, hasNewFreeze, hasNewRecovery, lastHandled, _t4;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            streamSessionId = resolveRemotePlaySessionId();
            if (streamSessionId) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            if (resolveWebrtcSessionId()) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2);
          case 2:
            now = Date.now();
            if (!healthCheckInFlightRef.current) {
              _context3.n = 3;
              break;
            }
            return _context3.a(2);
          case 3:
            forceNeutral = (_context$forceNeutral = context === null || context === void 0 ? void 0 : context.forceNeutral) !== null && _context$forceNeutral !== void 0 ? _context$forceNeutral : false;
            if (!(now - lastHealthCheckAtRef.current < HEALTH_CHECK_COOLDOWN_MS)) {
              _context3.n = 5;
              break;
            }
            snapshot = lastStreamHealthRef.current;
            if (!(snapshot && snapshot.frozen > snapshot.recovered)) {
              _context3.n = 4;
              break;
            }
            // On freeze, no longer auto-request a keyframe; only record last activity time for throttling
            lastVideoActivityRef.current = now;
            return _context3.a(2);
          case 4:
            if (forceNeutral) {
              // Within the cooldown period, neutral no longer auto-requests a keyframe
              // Only update last activity time to avoid repeated triggers in a short window
              lastVideoActivityRef.current = now;
            }
            return _context3.a(2);
          case 5:
            healthCheckInFlightRef.current = true;
            _context3.p = 6;
            // ONLY what the child pushes over the input socket
            // (HealthUpdate, every 2 s — see the onHealthUpdate wiring
            // below). The GET …/health it fell back on, every 3 s, is
            // gone: the push never reached this page (the child filtered
            // on a hub name no connection carried), so the "fallback"
            // was the only path, and a poll. No fresh push, nothing to
            // judge.
            PUSH_STALE_MS = 5000; // ~2 missed 2s server ticks
            pushed = pushedHealthRef.current;
            if (!(!pushed || now - pushed.receivedAt >= PUSH_STALE_MS)) {
              _context3.n = 7;
              break;
            }
            return _context3.a(2);
          case 7:
            health = pushed.data;
            lastHealthCheckAtRef.current = Date.now();
            previous = lastStreamHealthRef.current; // Merge backend debug fields (heartbeat/DATA_ACK/GMAC state)
            // into connectionStats for the Live Monitoring panel. Stored
            // as absolute anchor timestamps (now - agoMs) rather than the
            // precomputed "ago" delta itself, so the panel can recompute
            // "ago" at every render (the ~1s WebRTC stats tick already
            // re-renders regardless) instead of only updating once per
            // ~3s health-check poll.
            healthReceivedAt = lastHealthCheckAtRef.current;
            setConnectionStats(function (prev) {
              var _health$dataAckCumula, _health$keyPos, _health$gmacIndex, _health$nextExpectedT, _health$congestionRec, _health$congestionLos, _health$status;
              return _objectSpread(_objectSpread({}, prev), {}, {
                debug: {
                  heartbeatSentAt: health.heartbeatSentAgoMs != null ? healthReceivedAt - health.heartbeatSentAgoMs : null,
                  heartbeatReceivedAt: health.heartbeatReceivedAgoMs != null ? healthReceivedAt - health.heartbeatReceivedAgoMs : null,
                  dataAckAt: health.dataAckAgoMs != null ? healthReceivedAt - health.dataAckAgoMs : null,
                  dataAckCumulativeSeqNum: (_health$dataAckCumula = health.dataAckCumulativeSeqNum) !== null && _health$dataAckCumula !== void 0 ? _health$dataAckCumula : null,
                  keyPos: (_health$keyPos = health.keyPos) !== null && _health$keyPos !== void 0 ? _health$keyPos : null,
                  gmacIndex: (_health$gmacIndex = health.gmacIndex) !== null && _health$gmacIndex !== void 0 ? _health$gmacIndex : null,
                  nextExpectedTSN: (_health$nextExpectedT = health.nextExpectedTSN) !== null && _health$nextExpectedT !== void 0 ? _health$nextExpectedT : null,
                  congestionReceivedTotal: (_health$congestionRec = health.congestionReceivedTotal) !== null && _health$congestionRec !== void 0 ? _health$congestionRec : null,
                  congestionLostTotal: (_health$congestionLos = health.congestionLostTotal) !== null && _health$congestionLos !== void 0 ? _health$congestionLos : null,
                  status: (_health$status = health.status) !== null && _health$status !== void 0 ? _health$status : null
                }
              });
            });

            // Calculate delta values (based on previously stored values)
            deltaFrozen = previous ? Math.max(0, health.totalFrozenFrames - previous.frozen) : 0;
            deltaRecovered = previous ? Math.max(0, health.totalRecoveredFrames - previous.recovered) : 0;
            lastStreamHealthRef.current = {
              frozen: health.totalFrozenFrames,
              recovered: health.totalRecoveredFrames
            };
            hasNewFreeze = deltaFrozen > 0;
            hasNewRecovery = deltaRecovered > 0;
            if (!(hasNewFreeze || health.totalFrozenFrames > health.totalRecoveredFrames)) {
              _context3.n = 8;
              break;
            }
            console.warn("⚠️ Stream freeze detected (auto keyframe disabled)", {
              reason: reason,
              totalFrozenFrames: health.totalFrozenFrames,
              totalRecoveredFrames: health.totalRecoveredFrames,
              deltaFrozenFrames: deltaFrozen
            });

            // No longer auto-request keyframe; only update activity time
            lastVideoActivityRef.current = Date.now();
            return _context3.a(2);
          case 8:
            lastHandled = false;
            if (hasNewRecovery || previous && health.totalRecoveredFrames > previous.recovered) {
              (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("✅ Streaming frames recovered", {
                reason: reason,
                totalRecoveredFrames: health.totalRecoveredFrames,
                totalFrozenFrames: health.totalFrozenFrames,
                deltaRecoveredFrames: deltaRecovered
              });
              lastHandled = true;
              lastVideoActivityRef.current = Date.now();
            }
            if (!lastHandled && (health.totalFrozenFrames > 0 || forceNeutral)) {
              // No longer auto-request neutral keyframe; only update time and neutral timestamp
              lastVideoActivityRef.current = Date.now();
              lastNeutralHealthKeyframeRef.current = now;
            }
            _context3.n = 10;
            break;
          case 9:
            _context3.p = 9;
            _t4 = _context3.v;
            lastHealthCheckAtRef.current = Date.now();
            console.warn("⚠️ Failed to fetch stream health (auto keyframe fallback disabled)", _t4);
            if (_t4 instanceof Error && /does not exist or has ended/.test(_t4.message)) {
              remotePlaySessionIdRef.current = null;
            }
            // No longer auto-fallback to requesting a keyframe; only update activity time
            lastVideoActivityRef.current = Date.now();
          case 10:
            _context3.p = 10;
            healthCheckInFlightRef.current = false;
            return _context3.f(10);
          case 11:
            return _context3.a(2);
        }
      }, _callee3, null, [[6, 9, 10, 11]]);
    }));
    return function (_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }(), [HEALTH_CHECK_COOLDOWN_MS, resolveRemotePlaySessionId, resolveWebrtcSessionId, requestKeyframe, t, toast]);

  // applyReceiverLatencyHints/reinforceLatencyHints — used to live here as
  // a hand-rolled copy of the same logic GatewayWebRTC now owns
  // internally (its own ontrack applies latency hints on every new
  // track, and its renegotiate() re-applies them to all receivers after
  // a device-pushed offer — see its own doc). Removed with the
  // RTCPeerConnection ownership itself.

  var stopStickProcessing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (stickIntervalRef.current !== null) {
      clearInterval(stickIntervalRef.current);
      stickIntervalRef.current = null;
    }
    stickProcessingActiveRef.current = false;
    resetStickInput();
    lastSentRef.current = {
      leftX: 0,
      leftY: 0,
      rightX: 0,
      rightY: 0,
      l2: 0,
      r2: 0,
      timestamp: 0
    };
  }, [resetStickInput]);
  var setupKeyboardControl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (keyboardCleanupRef.current) {
      keyboardCleanupRef.current();
      keyboardCleanupRef.current = null;
    }
    var cleanup = (0,_gameflex_stream_remoteplay_libs_keyboard_mapping__WEBPACK_IMPORTED_MODULE_8__.createKeyboardHandler)(/*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(buttonName, action) {
        var retries, maxRetries, _t5;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              if (hasControlRef.current) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("🎮 Keyboard control triggered:", buttonName, action, {
                isConnected: _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.isConnected(),
                buttonName: buttonName,
                action: action
              });
              _context4.p = 2;
              if (_gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.hasGatewaySender()) {
                _context4.n = 6;
                break;
              }
              retries = 0;
              maxRetries = 10;
            case 3:
              if (!(!_gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.isConnected() && retries < maxRetries)) {
                _context4.n = 5;
                break;
              }
              _context4.n = 4;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 100);
              });
            case 4:
              retries++;
              _context4.n = 3;
              break;
            case 5:
              if (!_gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.isConnected()) {
                console.warn("⚠️ Controller not ready, but attempting to send key:", buttonName, action);
              }
            case 6:
              // P6 — a real key press (this handler only fires on user
              // input): stamp the shared activity store.
              ;(0,_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_12__.markActivity)();
              (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("📤 Sending button command:", buttonName, action);
              if (!(action === "press")) {
                _context4.n = 8;
                break;
              }
              _context4.n = 7;
              return _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.sendButton(buttonName, "press");
            case 7:
              (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("✅ Button command sent successfully:", buttonName, "press");
              _context4.n = 10;
              break;
            case 8:
              _context4.n = 9;
              return _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.sendButton(buttonName, "release");
            case 9:
              (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("✅ Button command sent successfully:", buttonName, "release");
            case 10:
              _context4.n = 12;
              break;
            case 11:
              _context4.p = 11;
              _t5 = _context4.v;
              console.error("❌ Keyboard control failed:", _t5, "button:", buttonName, "action:", action);
            case 12:
              return _context4.a(2);
          }
        }, _callee4, null, [[2, 11]]);
      }));
      return function (_x3, _x4) {
        return _ref5.apply(this, arguments);
      };
    }(), {
      onLeftStickChange: function onLeftStickChange(x, y) {
        setKeyboardLeftStick(x, y);
      }
    });
    keyboardCleanupRef.current = cleanup;
    (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("✅ Keyboard control enabled");
  }, []);

  // connectController — the legacy SignalR-hub-based controller/input
  // path (as opposed to the gateway DataChannel's "input" channel) is
  // removed along with the rest of the non-gateway fallback (see
  // connect()/connectAttached()'s own doc — GAMEFLEX_GATEWAY_URL is a
  // required env var, confirmed dead in production).

  var startStickProcessing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (stickProcessingActiveRef.current) {
      return;
    }
    stickProcessingActiveRef.current = true;
    lastSentRef.current.timestamp = 0;
    var readGamepadAxes = function readGamepadAxes() {
      try {
        var _navigator$getGamepad, _navigator;
        var gamepads = (_navigator$getGamepad = (_navigator = navigator).getGamepads) === null || _navigator$getGamepad === void 0 ? void 0 : _navigator$getGamepad.call(_navigator);
        if (!gamepads) {
          return;
        }
        for (var i = 0; i < gamepads.length; i++) {
          var gamepad = gamepads[i];
          if (!gamepad) {
            continue;
          }
          snapshotGamepadAxes(gamepad);
          break;
        }
      } catch (error) {
        ;(0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.logThrottled)("warn", "gamepad-read-state", 5000, "⚠️ Failed to read gamepad state:", error);
      }
    };
    var sendLatest = function sendLatest() {
      // canSendInput(), not isConnected(): the transport is the gateway
      // DataChannel, and isConnected() only reports the raw socket.
      if (!isConnectedRef.current || !_gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.canSendInput()) {
        return;
      }

      // This loop also carries the PHYSICAL gamepad and the keyboard
      if (!hasControlRef.current) {
        return; // control handed off to a viewer — stop sending our own input
      }

      // Check whether any virtual joystick is active (virtual joystick should work even without a physical gamepad)
      // Use the global virtual joystick state
      var hasVirtualJoystickActive = _use_streaming_connection_virtual_joystick_state__WEBPACK_IMPORTED_MODULE_14__.virtualJoystickActiveState.left || _use_streaming_connection_virtual_joystick_state__WEBPACK_IMPORTED_MODULE_14__.virtualJoystickActiveState.right;

      // If no physical gamepad is enabled and no virtual joystick is active, do not send
      // — this also gates keyboard-driven sticks (getNormalizedState folds
      // keyboard input in below), so a user toggling "gamepad enabled" off
      // silently stops keyboard movement too, not just a physical pad.
      if ((!gamepadEnabledRef.current || !isGamepadEnabled) && !hasVirtualJoystickActive) {
        return;
      }
      readGamepadAxes();
      var now = performance.now();
      var normalized = getNormalizedState();
      var lastSent = lastSentRef.current;
      var stickDiff = Math.abs(normalized.leftX - lastSent.leftX) + Math.abs(normalized.leftY - lastSent.leftY) + Math.abs(normalized.rightX - lastSent.rightX) + Math.abs(normalized.rightY - lastSent.rightY);
      var triggerDiff = Math.abs(normalized.l2 - lastSent.l2) + Math.abs(normalized.r2 - lastSent.r2);
      var shouldHeartbeat = now - lastSent.timestamp >= _use_streaming_connection_constants__WEBPACK_IMPORTED_MODULE_11__.MAX_HEARTBEAT_INTERVAL_MS;
      // Do NOT send unconditionally just because a virtual joystick is
      // "active" (held) — a steady, unchanged deflection should rely on
      // the shouldHeartbeat keep-alive like every other input path,
      // matching upstream's cadence. Sending on every SEND_INTERVAL_MS
      // tick while a key is held was flooding the PS5 (see
      // MAX_HEARTBEAT_INTERVAL_MS doc comment).
      var shouldSendSticks = stickDiff > _use_streaming_connection_constants__WEBPACK_IMPORTED_MODULE_11__.AXIS_DEADZONE || shouldHeartbeat;
      var shouldSendTriggers = triggerDiff > _use_streaming_connection_constants__WEBPACK_IMPORTED_MODULE_11__.TRIGGER_DEADZONE || shouldHeartbeat;
      // P6 — only REAL deflection marks activity: the shouldHeartbeat
      // branch of the same send is a transport keep-alive, not a
      // human.
      if (stickDiff > _use_streaming_connection_constants__WEBPACK_IMPORTED_MODULE_11__.AXIS_DEADZONE || triggerDiff > _use_streaming_connection_constants__WEBPACK_IMPORTED_MODULE_11__.TRIGGER_DEADZONE) {
        (0,_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_12__.markActivity)();
      }
      if (shouldSendSticks) {
        _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.sendSticks(normalized.leftX, normalized.leftY, normalized.rightX, normalized.rightY)["catch"](function (error) {
          (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.logThrottled)("error", "send-joystick-sendLatest", 5000, "❌ Failed to send joystick input:", error);
        });
      }
      if (shouldSendTriggers) {
        _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.sendTriggers(normalized.l2, normalized.r2)["catch"](function (error) {
          (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.logThrottled)("error", "send-trigger-sendLatest", 5000, "❌ Failed to send trigger pressure:", error);
        });
      }
      if (shouldSendSticks || shouldSendTriggers) {
        lastSentRef.current = _objectSpread(_objectSpread({}, normalized), {}, {
          timestamp: now
        });
      }
    };
    sendLatest();
    // Use a unified send interval (8ms), aligned between mobile and PC
    stickIntervalRef.current = window.setInterval(sendLatest, _use_streaming_connection_constants__WEBPACK_IMPORTED_MODULE_11__.SEND_INTERVAL_MS);
  }, [getNormalizedState, isGamepadEnabled]);
  var handleGamepadInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(event) {
      var buttonIndex, buttonState, isPressed, psButtonName, _buttonState$value, _buttonState$value2, action, dpadMap, dpadButton, _action, now, normalized, lastSent, stickDiff, triggerDiff, shouldHeartbeat, shouldSendSticks, shouldSendTriggers;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (!(!isConnectedRef.current || !gamepadEnabledRef.current || !isGamepadEnabled)) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            if (hasControlRef.current) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2);
          case 2:
            // P6 — discrete gamepad events are real input (the poll loop
            // below marks only its own real deflection).
            (0,_shared_activity_store_js__WEBPACK_IMPORTED_MODULE_12__.markActivity)();
            try {
              if (event.buttonIndex !== undefined && event.buttonState) {
                buttonIndex = event.buttonIndex;
                buttonState = event.buttonState;
                isPressed = buttonState.pressed;
                psButtonName = _gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_9__.PS5_BUTTON_MAP[buttonIndex];
                if (buttonIndex === _gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_9__.GamepadButton.LeftTrigger) {
                  setTriggerPressure("l2", (_buttonState$value = buttonState.value) !== null && _buttonState$value !== void 0 ? _buttonState$value : 0);
                } else if (buttonIndex === _gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_9__.GamepadButton.RightTrigger) {
                  setTriggerPressure("r2", (_buttonState$value2 = buttonState.value) !== null && _buttonState$value2 !== void 0 ? _buttonState$value2 : 0);
                }
                if (psButtonName) {
                  action = isPressed ? "press" : "release"; // Do not await sendButton to avoid blocking other key processing
                  // sendButton internally handles connection state checks and reconnection
                  _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.sendButton(psButtonName, action)["catch"](function (error) {
                    // Only log non-connection-related errors
                    if (error !== null && error !== void 0 && error.message && !error.message.includes("connection") && !error.message.includes("closed")) {
                      (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.logThrottled)("error", "send-button-face", 5000, "❌ Failed to send gamepad button:", error);
                    }
                  });
                } else if (buttonIndex >= 12 && buttonIndex <= 15) {
                  dpadMap = {
                    12: "up",
                    13: "down",
                    14: "left",
                    15: "right"
                  };
                  dpadButton = dpadMap[buttonIndex];
                  if (dpadButton) {
                    _action = isPressed ? "press" : "release"; // Do not await sendButton to avoid blocking other key processing
                    _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.sendButton(dpadButton, _action)["catch"](function (error) {
                      // Only log non-connection-related errors
                      if (error !== null && error !== void 0 && error.message && !error.message.includes("connection") && !error.message.includes("closed")) {
                        (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.logThrottled)("error", "send-button-dpad", 5000, "❌ Failed to send gamepad button:", error);
                      }
                    });
                  }
                }
              }
              if (event.axisIndex !== undefined && event.axisValue !== undefined) {
                handleGamepadAxis(event.axisIndex, event.axisValue);
                now = performance.now();
                normalized = getNormalizedState();
                lastSent = lastSentRef.current;
                stickDiff = Math.abs(normalized.leftX - lastSent.leftX) + Math.abs(normalized.leftY - lastSent.leftY) + Math.abs(normalized.rightX - lastSent.rightX) + Math.abs(normalized.rightY - lastSent.rightY);
                triggerDiff = Math.abs(normalized.l2 - lastSent.l2) + Math.abs(normalized.r2 - lastSent.r2); // Use the same heartbeat interval as the send logic (MAX_HEARTBEAT_INTERVAL_MS)
                shouldHeartbeat = now - lastSent.timestamp >= _use_streaming_connection_constants__WEBPACK_IMPORTED_MODULE_11__.MAX_HEARTBEAT_INTERVAL_MS;
                shouldSendSticks = stickDiff > _use_streaming_connection_constants__WEBPACK_IMPORTED_MODULE_11__.AXIS_DEADZONE || shouldHeartbeat;
                shouldSendTriggers = triggerDiff > _use_streaming_connection_constants__WEBPACK_IMPORTED_MODULE_11__.TRIGGER_DEADZONE || shouldHeartbeat;
                if (shouldSendSticks) {
                  _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.sendSticks(normalized.leftX, normalized.leftY, normalized.rightX, normalized.rightY)["catch"](function (error) {
                    (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.logThrottled)("error", "send-joystick-handleGamepadInput", 5000, "❌ Failed to send joystick input:", error);
                  });
                }
                if (shouldSendTriggers) {
                  _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.sendTriggers(normalized.l2, normalized.r2)["catch"](function (error) {
                    (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.logThrottled)("error", "send-trigger-handleGamepadInput", 5000, "❌ Failed to send trigger pressure:", error);
                  });
                }
                if (shouldSendSticks || shouldSendTriggers) {
                  lastSentRef.current = _objectSpread(_objectSpread({}, normalized), {}, {
                    timestamp: now
                  });
                }
              }
            } catch (error) {
              ;(0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.logThrottled)("error", "gamepad-input-processing", 5000, "❌ Gamepad input processing failed:", error);
            }
          case 3:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref6.apply(this, arguments);
    };
  }(), [getNormalizedState, isGamepadEnabled, setTriggerPressure]);

  // explicit — true for a real "quit" (handleExit's confirm modal in
  // Player.jsx): tears down the SHARED backend session for everyone, right
  // now. false for the connect-effect's own cleanup, which runs on EVERY
  // unmount, including a plain navigation away from the page — passing
  // true there used to kill the PS4/PS5 session the instant the tab
  // changed, contradicting the comment a few lines below this function
  // ("a genuine close/navigation falls back to the backend's own hub-based
  // grace period") which was never actually wired to match. false skips
  // the stop-session/deleteSession calls below and lets the WS/hub
  // connection just drop, same as retro-gaming's leavePage.
  var disconnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _detachVideoListeners;
    var explicit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    stopStickProcessing();
    gamepadEnabledRef.current = false;
    tearDownMouseRightStick();
    // Phase B1: drop the gateway DataChannel transport — the channel dies
    // with its peer connection anyway, but the sender must not linger.
    _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.clearGatewayInputSender();
    isStreamBoundRef.current = false;
    hasVideoTrackRef.current = false;
    if (videoOptimizeCleanupRef.current) {
      videoOptimizeCleanupRef.current();
      videoOptimizeCleanupRef.current = null;
    }
    (_detachVideoListeners = detachVideoListenersRef.current) === null || _detachVideoListeners === void 0 || _detachVideoListeners.call(detachVideoListenersRef);
    if (keyframeMonitorIntervalRef.current !== null) {
      window.clearInterval(keyframeMonitorIntervalRef.current);
      keyframeMonitorIntervalRef.current = null;
    }
    lastVideoActivityRef.current = 0;
    lastDecodedFrameCountRef.current = null;
    lastPlaybackPositionRef.current = null;
    lastKeyframeRequestRef.current = 0;
    pendingKeyframeRequestRef.current = false;
    initialKeyframeRequestedRef.current = false;
    if (keyboardCleanupRef.current) {
      keyboardCleanupRef.current();
      keyboardCleanupRef.current = null;
    }
    _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.disconnect()["catch"](function () {});

    // Push-based ICE candidates / health (Phase 3 WS migration) —
    // unsubscribe from the shared singleton so a later session doesn't
    // stack a second listener on top of this one.
    if (iceCandidateUnsubscribeRef.current) {
      iceCandidateUnsubscribeRef.current();
      iceCandidateUnsubscribeRef.current = null;
    }
    if (healthUpdateUnsubscribeRef.current) {
      healthUpdateUnsubscribeRef.current();
      healthUpdateUnsubscribeRef.current = null;
    }
    pushedHealthRef.current = null;
    _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.disconnect()["catch"](function () {});

    // No screenRef.cleanup() here: the PAGE owns the gateway viewer
    // (see SessionStream), so releasing it from a platform disconnect
    // killed the picture for the whole page — and nothing brings it
    // back, since SessionStream stops retrying once attached. The
    // viewer goes away with GatewayWebRTC's own unmount, nowhere else.

    resetConnectionStats();
    setConnectionStats(null);

    // ARRÊTER LA PARTIE N'EST PLUS L'AFFAIRE DE CE HOOK. La page l'arrête
    // pour tout le monde par la commande `session.stop` du centre de
    // messages, que le child juge — seul le propriétaire le peut (voir
    // stopSessionForEveryone, Streaming.jsx). Ce hook appelait en plus
    // `/playstation/stop-session`, une route qui arrêtait n'importe quelle
    // session pour n'importe quel jeton : retirée le 2026-10-09 (#275).
    var currentWebrtcSessionId = webrtcSessionId;
    var wasAttached = isAttachedRef.current;
    isAttachedRef.current = false;
    viewerIdRef.current = null;
    setWebrtcSessionId(null);
    webrtcSessionIdRef.current = null;
    setRemotePlaySessionId(null);
    if (!wasAttached && explicit && currentWebrtcSessionId && hasControlRef.current) {
      _gameflex_stream_remoteplay_service_streaming_service__WEBPACK_IMPORTED_MODULE_3__.streamingService.deleteSession(currentWebrtcSessionId).then(function () {
        (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("✅ WebRTC Session closed");
      })["catch"](function (error) {
        console.error("❌ Failed to close WebRTC Session:", error);
      });
    }
    setIsConnected(false);
    isConnectedRef.current = false;
    setIsConnecting(false);
    setConnectionState(t("streaming.connection.state.disconnected"));
    // On disconnect, reset the error callback flag and stalling state
    hasTriggeredErrorCallbackRef.current = false;
    setIsStalling(false);
  }, [screenRef, stopStickProcessing, t, webrtcSessionId]);

  // Warn before leaving/refreshing while a stream is active. Tearing down
  // the backend session on a mere tab-background used to live here too
  // (pagehide + sendBeacon), but that fires on backgrounding as much as on
  // a real close (confirmed: switching apps fires it on iOS Safari even
  // though the user comes right back) — that decision now belongs entirely
  // to the away-confirm modal (useAwayConfirm, wired at the component
  // level via usePictureInPictureOnHide's onVisibilityChange), which asks
  // instead of guessing. A genuine close/navigation still falls back to
  // the backend's own hub-based grace period (signalr_hub.go) exactly like
  // the no-control branch below already does.
  // The leave-confirmation prompt moved to Streaming.jsx (2026-08-24): it
  // was remote-play only, so refreshing a retro or streamex session
  // interrupted play with no warning at all. Nothing about it is
  // platform-specific.

  // shared session. GatewayWebRTC (screenRef) now owns the
  // RTCPeerConnection/ICE/offer-answer mechanics this used to duplicate
  // — the DataChannel/ontrack/onconnectionstatechange side effects that
  // used to live inline here moved into handleConnectionStateChange/
  // handleGatewayMessage below, shared with connect()'s own owner flow.
  var connectAttached = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(sessionId) {
      var offerResponse, viewerId, attempt, _screenRef$current, viewer, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (!isStreamBoundRef.current) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2);
          case 1:
            isAttachedRef.current = true;
            setIsConnecting(true);
            setConnectionState(t("streaming.connection.state.connecting"));
            _context6.p = 2;
            _context6.n = 3;
            return _gameflex_stream_remoteplay_service_viewer_service__WEBPACK_IMPORTED_MODULE_4__.viewerService.createOffer(sessionId, "H264");
          case 3:
            offerResponse = _context6.v;
            if (!(!offerResponse.success || !offerResponse.data)) {
              _context6.n = 4;
              break;
            }
            throw new Error(offerResponse.errorMessage || t("streaming.connection.errors.offerCreateFailed"));
          case 4:
            // username travels with the offer — the child resolves the
            // B2 input gate (viewerUsers) with it.
            // RETRIED, like SessionStream's own attach. A session that was
            // just launched has no stream registered on the gateway yet —
            // its child is still coming up — so the first try legitimately
            // answers 404. The Dashboard's preview has always retried
            // through that window; this page gave up on the first failure
            // and showed a fatal error for a session that was simply not
            // ready (reported live 2026-08-25). Same 2s cadence, bounded.
            // UNE PAGE, UN VIEWER — et celui-ci appartient à la PAGE.
            //
            // Ce hook en demandait un SECOND sur le même composant, ce que
            // retro et streamex ont cessé de faire il y a longtemps : le
            // getter `viewerId` de GatewayWebRTC porte l'avertissement
            // depuis, mot pour mot (« au lieu d'appeler createViewer une
            // seconde fois et de démolir la connexion »).
            //
            // Le second appel remplaçait la PeerConnection du composant,
            // donc l'élément vidéo se retrouvait branché sur un pair
            // démoli. Le son continuait — il n'avait pas besoin de
            // redémarrer un décodeur — et l'image, elle, n'avait plus
            // d'image-clé à laquelle se raccrocher. D'où un écran noir
            // avec du son, symptôme consigné le 2026-08-25 et laissé
            // ouvert faute de console pour le vérifier (voir
            // TROUBLESHOOTING.md, « Pas d'image sur la page remoteplay,
            // mais Live Now affiche la même session »).
            //
            // On ATTEND donc celui de la page plutôt que d'en créer un.
            // Il arrive avec sa propre boucle de reprise (SessionStream) :
            // une session qui vient d'être lancée n'a pas encore de flux
            // enregistré sur la passerelle.
            viewerId = null;
            attempt = 0;
          case 5:
            if (!(attempt < 8 && !viewerId)) {
              _context6.n = 8;
              break;
            }
            if (!(attempt > 0)) {
              _context6.n = 6;
              break;
            }
            _context6.n = 6;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 2000);
            });
          case 6:
            viewerId = ((_screenRef$current = screenRef.current) === null || _screenRef$current === void 0 ? void 0 : _screenRef$current.viewerId) || null;
          case 7:
            attempt += 1;
            _context6.n = 5;
            break;
          case 8:
            if (viewerId) {
              _context6.n = 9;
              break;
            }
            throw new Error(t("streaming.connection.errors.offerCreateFailed"));
          case 9:
            viewer = {
              viewerId: viewerId
            };
            viewerIdRef.current = viewer.viewerId;
            setRemotePlaySessionId(sessionId);
            setWebrtcSessionId(sessionId);
            webrtcSessionIdRef.current = sessionId;

            // Health push subscription (handleStreamHealthCheck reads
            // pushedHealthRef instead of polling GET .../health) — the
            // ICE-candidate push/poll this used to sit alongside is gone
            // (GatewayWebRTC's own attach() receives the gateway's
            // candidates on its negotiation socket), health stays since
            // nothing else provides it.
            // The third argument is what the child's queue matches on —
            // iceKey cannot serve: for an owner it IS the sessionId.
            // controllerService and streamingHubService are the SAME object
            // under two aliases (see the imports) — so this one call binds
            // the input socket too. The third argument is what the child's
            // queue matches on; iceKey cannot serve, since for an owner it
            // IS the sessionId and could not tell two owner tabs apart.
            _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.joinSession(sessionId, viewer.viewerId, viewer.viewerId)["catch"](function () {});
            healthUpdateUnsubscribeRef.current = _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.onHealthUpdate(function (health) {
              pushedHealthRef.current = {
                data: health,
                receivedAt: Date.now()
              };
            });
            _context6.n = 11;
            break;
          case 10:
            _context6.p = 10;
            _t6 = _context6.v;
            console.error("❌ Failed to attach to session:", _t6);
            toast({
              title: t("common.error"),
              description: _t6 instanceof Error ? _t6.message : String(_t6),
              variant: "destructive"
            });
            setIsConnecting(false);
            // A failed ATTACH is not a quit — never stop the shared
            // session over our own signaling failure (it survives for
            // the next attempt and for other viewers).
            disconnect(false);
          case 11:
            return _context6.a(2);
        }
      }, _callee6, null, [[2, 10]]);
    }));
    return function (_x6) {
      return _ref7.apply(this, arguments);
    };
  }(), [isConnecting, isConnected, t, toast, username, disconnect]);

  // handleConnectionStateChange — wired as GatewayWebRTC's own
  // onConnectionStateChange prop, shared by BOTH connect() and
  // connectAttached() (the same mounted <GatewayWebRTC>/screenRef
  // drives whichever one actually ran — this only cares that ITS
  // RTCPeerConnection reached "connected"/"failed"/etc, not which
  // caller got it there). Forwards to the shared hook's own
  // isConnected/isConnecting/connectionState handling first (same
  // compose pattern use-streamex-streaming-connection.js already uses),
  // then layers the PS5-only side effects (gamepad/keyboard/stick
  // enable, initial keyframe, hasControl) both entry points used to
  // duplicate with slightly different shapes.
  var handleConnectionStateChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (state) {
    handleSharedConnectionStateChange(state);
    switch (state) {
      case "connected":
        {
          isConnectedRef.current = true;
          isStreamBoundRef.current = true;
          if (streamingStartTimeRef.current === null) {
            streamingStartTimeRef.current = Date.now();
          }
          hasTriggeredErrorCallbackRef.current = false;
          // connectAttached's own reason for existing: we navigated
          // here BECAUSE control was just granted (harmless no-op
          // for connect()'s own fresh-owner flow, which already
          // starts hasControl=true).
          hasControlRef.current = true;
          setHasControl(true);
          gamepadEnabledRef.current = true;
          // Phase B1: the gateway's "input" DataChannel carries
          // controller traffic — GatewayWebRTC's sendMessage
          // already no-ops until the channel is actually open, so
          // this can register unconditionally instead of waiting
          // for an onopen event the shared component doesn't
          // expose per-channel.
          _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.setGatewayInputSender({
            send: function send(message) {
              var _screenRef$current2;
              return (_screenRef$current2 = screenRef.current) === null || _screenRef$current2 === void 0 ? void 0 : _screenRef$current2.sendMessage(JSON.stringify(message), "input");
            }
          });
          setupKeyboardControl();
          startStickProcessing();
          if (!initialKeyframeRequestedRef.current) {
            if (requestKeyframe("post-bind-initial-video")) {
              initialKeyframeRequestedRef.current = true;
            }
          }
          break;
        }
      case "disconnected":
      case "failed":
      case "closed":
        {
          var wasConnected = isConnectedRef.current;
          isConnectedRef.current = false;
          if (wasConnected && onConnectionError && !hasTriggeredErrorCallbackRef.current) {
            hasTriggeredErrorCallbackRef.current = true;
            onConnectionError(state === "failed" ? t("streaming.connection.errors.webrtcFailed", "WebRTC connection failed") : t("streaming.connection.errors.connectionClosed", "Connection closed"));
          }
          break;
        }
      default:
        break;
    }
  }, [handleSharedConnectionStateChange, onConnectionError, requestKeyframe, setupKeyboardControl, startStickProcessing, t]);

  // handleGatewayMessage — wired as GatewayWebRTC's onMessage prop.
  // label distinguishes the DataChannels a device-streaming platform can
  // open alongside the generic "input" every platform uses: "keepalive"
  // is remote-play's own ping/pong liveness channel (started for PS5,
  // generic enough that another console reusing the same pattern gets it
  // for free). retro/streamex never open a second channel, so their own
  // onMessage callers only ever see label==="input".
  var handleGatewayMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data, label) {
    if (label === "keepalive") {
      if (data instanceof ArrayBuffer) {
        var buffer = new Uint8Array(data);
        if (buffer.length > 0 && buffer[0] === 0x01) {
          var _screenRef$current3;
          // Received PING (0x01), respond PONG (0x02).
          (_screenRef$current3 = screenRef.current) === null || _screenRef$current3 === void 0 || _screenRef$current3.sendMessage(new Uint8Array([0x02]).buffer, "keepalive");
        }
      }
      return;
    }
    // "input" (default label) — B2 downlink: rumble pushed from the
    // console to whichever viewer currently holds the pad.
    _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.dispatchGatewayMessage(data);
  }, []);

  // The low-latency answer-SDP rewrite used to be passed from here as a
  // remote-play-only prop. It never was platform-specific — it only adds
  // generic hints (a=x-google-flag:low-latency, a=minBufferedPlaybackTime)
  // that every game stream wants — so GatewayWebRTC now applies it to all
  // three platforms itself, on the browser-to-gateway leg it owns.

  // handleIceConnectionStateChange — wired as GatewayWebRTC's
  // onIceConnectionStateChange prop. A connection that comes back clears the
  // "error already reported" latch. An ICE restart is GatewayWebRTC's own
  // business (renegotiate on disconnect): the page also asked remoteplay for
  // a fresh offer, a path that answered nothing once its in-process WebRTC
  // was gone, and that left with it (#257).
  var handleIceConnectionStateChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (iceState) {
    if (iceState === "connected" || iceState === "completed") {
      hasTriggeredErrorCallbackRef.current = false;
    }
  }, []);

  // onFirstVideoTrack — wired as GatewayWebRTC's own prop, fires
  // once per attach() the first time a video track shows up.
  // GatewayWebRTC already owns the generic mute/fade-in/autoplay-
  // retry mechanics (audio on its own element now, like every other
  // platform — the single-<video> mode was dropped) — what's left here is
  // PS5-specific: the initial keyframe request, low-latency video tuning,
  // and the stall/keyframe-nudge DOM listeners (setIsStalling, "waiting"/
  // "stalled" re-requesting a keyframe). Wired once here instead of
  // inside GatewayWebRTC's own opaque ontrack, using the read-only
  // videoRef proxy (see this hook's own param doc).
  var onFirstVideoTrack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _detachVideoListeners2;
    hasVideoTrackRef.current = true;
    if (isStreamBoundRef.current && !initialKeyframeRequestedRef.current) {
      if (requestKeyframe("initial-video-track")) {
        initialKeyframeRequestedRef.current = true;
      }
    }
    var video = videoRef.current;
    if (!video) {
      return;
    }
    if (videoOptimizeCleanupRef.current) {
      videoOptimizeCleanupRef.current();
    }
    videoOptimizeCleanupRef.current = (0,_gameflex_stream_shared_webrtc_low_latency_sdp__WEBPACK_IMPORTED_MODULE_7__.optimizeVideoForLowLatency)(video);
    video.playbackRate = 1.0;
    video.defaultPlaybackRate = 1.0;
    try {
      if (typeof video.latencyHint !== "undefined") {
        video.latencyHint = "interactive";
      }
    } catch (_unused8) {
      // best-effort
    }
    (_detachVideoListeners2 = detachVideoListenersRef.current) === null || _detachVideoListeners2 === void 0 || _detachVideoListeners2.call(detachVideoListenersRef);
    var wired = [];
    var on = function on(type, handler) {
      wired.push([type, handler]);
      video.addEventListener(type, handler);
    };
    detachVideoListenersRef.current = function () {
      wired.forEach(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 2),
          type = _ref9[0],
          handler = _ref9[1];
        return video.removeEventListener(type, handler);
      });
      detachVideoListenersRef.current = null;
    };
    on("playing", function () {
      setIsConnecting(false);
      setIsConnected(true);
      isConnectedRef.current = true;
      setConnectionState(t("streaming.connection.state.connected"));
      if (streamingStartTimeRef.current === null) {
        streamingStartTimeRef.current = Date.now();
      }
      setIsStalling(false);
    });
    on("waiting", function () {
      setIsStalling(true);
      if (video.paused) {
        video.play()["catch"](function () {});
      }
      requestKeyframe("video-waiting");
    });
    on("stalled", function () {
      setIsStalling(true);
      if (video.paused) {
        video.play()["catch"](function () {});
      }
      requestKeyframe("video-stalled");
    });
    on("progress", function () {
      if (video.paused && video.readyState >= 2) {
        video.play()["catch"](function () {});
      }
    });
    on("error", function (e) {
      console.error("❌ Video playback error:", e, video.error);
    });
  }, [requestKeyframe, t, videoRef]);

  // connect — fresh OWNER connection (a brand-new or preCreatedSessionId
  // remote-play session). Dispatches to connectAttached for the
  // control-handoff/promotion case (attachSessionId set) — see that
  // function's own doc. GatewayWebRTC (screenRef) now owns the
  // RTCPeerConnection/ICE/offer-answer mechanics this used to duplicate;
  // what's left here is remote-play's own session bootstrap
  // (prepareDevice/startSession/createOffer — nothing to do with generic
  // WebRTC) plus the PS5 stream bind (connectToRemotePlaySession).
  var connect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
    var _screenRef$current4, deviceReady, sessionId, sessionResponse, sessionData, offerResponse, offerData, webrtcSessionIdValue, connectResponse, errorReason, errorMessage, _t7, _t8;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          if (!attachSessionId) {
            _context7.n = 1;
            break;
          }
          return _context7.a(2, connectAttached(attachSessionId));
        case 1:
          if (hostId) {
            _context7.n = 2;
            break;
          }
          toast({
            title: t("common.error"),
            description: t("streaming.connection.errors.missingDeviceInfo"),
            variant: "destructive"
          });
          return _context7.a(2);
        case 2:
          if (!isStreamBoundRef.current) {
            _context7.n = 3;
            break;
          }
          return _context7.a(2);
        case 3:
          hasAttemptedInitialConnectRef.current = true;
          setIsConnecting(true);
          setConnectionState(t("streaming.connection.state.connecting"));
          _context7.p = 4;
          if (!preCreatedSessionId) {
            _context7.n = 5;
            break;
          }
          _t7 = true;
          _context7.n = 7;
          break;
        case 5:
          _context7.n = 6;
          return prepareDevice();
        case 6:
          _t7 = _context7.v;
        case 7:
          deviceReady = _t7;
          if (deviceReady) {
            _context7.n = 8;
            break;
          }
          throw new Error(t("streaming.connection.errors.deviceNotReady"));
        case 8:
          setConnectionState(t("streaming.connection.state.creatingSession"));

          // preCreatedSessionId (see its own doc above) skips this REST
          // call entirely — la porte est idempotente de toute façon :
          // `launchRemoteplay` rend la session déjà en cours pour cet
          // appareil au lieu d'en relancer une.
          sessionId = preCreatedSessionId;
          if (sessionId) {
            _context7.n = 12;
            break;
          }
          _context7.n = 9;
          return _gameflex_stream_remoteplay_service_streaming_service__WEBPACK_IMPORTED_MODULE_3__.streamingService.startSession(hostId, username);
        case 9:
          sessionResponse = _context7.v;
          if (sessionResponse.success) {
            _context7.n = 10;
            break;
          }
          throw new Error(sessionResponse.errorMessage || sessionResponse.message || t("streaming.connection.errors.sessionCreateFailed"));
        case 10:
          sessionData = sessionResponse.data || sessionResponse.result;
          if (sessionData) {
            _context7.n = 11;
            break;
          }
          throw new Error(t("streaming.connection.errors.sessionDataMissing"));
        case 11:
          sessionId = sessionData.id || sessionData.Id || sessionData.sessionId || sessionData.session_id;
        case 12:
          setRemotePlaySessionId(sessionId);
          if (sessionId) {
            _context7.n = 13;
            break;
          }
          throw new Error(t("streaming.connection.errors.sessionIdMissing"));
        case 13:
          _context7.n = 14;
          return _gameflex_stream_remoteplay_service_streaming_service__WEBPACK_IMPORTED_MODULE_3__.streamingService.createOffer({
            remotePlaySessionId: sessionId,
            preferLanCandidates: isLikelyLan
          });
        case 14:
          offerResponse = _context7.v;
          if (offerResponse.success) {
            _context7.n = 15;
            break;
          }
          throw new Error(offerResponse.errorMessage || offerResponse.message || t("streaming.connection.errors.offerCreateFailed"));
        case 15:
          offerData = offerResponse.data || offerResponse.result;
          if (offerData) {
            _context7.n = 16;
            break;
          }
          throw new Error(t("streaming.connection.errors.offerDataMissing"));
        case 16:
          // L'IDENTIFIANT DU FLUX, PAS UN `sessionId` (2026-10-09). En mode
          // passerelle — le seul qui reste — l'offre répond `{gateway,
          // streamId, type}`, sur le serveur comme sur le téléphone. Lire
          // `sessionId` donnait undefined : le socket d'entrée ne s'ouvrait
          // jamais au premier lancement, et avec lui la santé du flux, la
          // vibration et les demandes d'image clé. Seule la reprise d'une
          // partie, qui passe par l'autre branche, l'ouvrait.
          webrtcSessionIdValue = offerData.streamId;
          setWebrtcSessionId(webrtcSessionIdValue);
          webrtcSessionIdRef.current = webrtcSessionIdValue;

          // No gateway viewer created here anymore (2026-08-24). The PAGE
          // owns exactly one viewer for its whole life, created from
          // session.id alone with its own retry loop (see SessionStream),
          // and `sessionId` here IS session.id: use-remoteplay-input.js
          // always passes preCreatedSessionId and never attachSessionId,
          // so the branch above assigned `sessionId = preCreatedSessionId`.
          // Creating a second viewer at this point tore the page's one down
          // and restarted the picture. The page's retry picks the stream up
          // within ~2s of the offer below registering it on the gateway.

          // Health push subscription — handleStreamHealthCheck reads
          // pushedHealthRef instead of polling GET .../health. Keyed by
          // webrtcSessionIdValue, matching the pre-migration code (the
          // ICE-candidate push this used to sit alongside is gone,
          // GatewayWebRTC's own attach() receives the gateway's
          // candidates on its negotiation socket).
          // Le viewer de la page, s'il existe déjà : c'est lui que la file du
          // child reconnaît quand une commande passe par ce socket.
          _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.joinSession(webrtcSessionIdValue, undefined, ((_screenRef$current4 = screenRef.current) === null || _screenRef$current4 === void 0 ? void 0 : _screenRef$current4.viewerId) || null)["catch"](function () {});
          healthUpdateUnsubscribeRef.current = _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.onHealthUpdate(function (health) {
            pushedHealthRef.current = {
              data: health,
              receivedAt: Date.now()
            };
          });

          // Phase 3: gateway mode — the streamId IS the session id;
          // ConnectWebRTC resolves the gateway-mode StreamState by it.
          _context7.n = 17;
          return _gameflex_stream_remoteplay_service_streaming_service__WEBPACK_IMPORTED_MODULE_3__.streamingService.connectToRemotePlaySession(sessionId, sessionId);
        case 17:
          connectResponse = _context7.v;
          if (connectResponse.success) {
            _context7.n = 18;
            break;
          }
          throw new Error(connectResponse.errorMessage || connectResponse.message || t("streaming.connection.errors.connectRemotePlayFailed"));
        case 18:
          isStreamBoundRef.current = true;

          // LA LIGNE OUBLIÉE PAR LA MIGRATION, remise là où elle était.
          //
          // L'ancien code l'écrivait ici même, juste après la liaison du
          // flux : « gamepadEnabledRef.current = true » puis
          // « ✅ Gamepad input enabled ». Le passage au composant vidéo
          // partagé a gardé tout le reste du bloc — la demande d'image-clé,
          // l'état connecté — et perdu celle-là. Elle ne survivait plus que
          // dans connectAttached, le chemin qu'on emprunte en REPRENANT le
          // contrôle d'une session, jamais en démarrant la sienne.
          //
          // Ce que ça coûtait, sur toute partie PS5 lancée normalement :
          // l'entrée d'une manette PHYSIQUE (handleGamepadInput y est
          // gaté) et le traitement des sticks. Le joystick tactile, lui,
          // passait quand même par son propre contournement
          // (hasVirtualJoystickActive) — d'où une panne qui ressemblait à
          // « tout marche sauf la vibration » alors qu'elle était plus
          // large (2026-09-09).
          gamepadEnabledRef.current = true;
          // LA DEUXIÈME LIGNE DU MÊME BLOC, perdue avec la première.
          //
          // L'ancien code posait ici `isConnectedRef.current = true` juste
          // après. Aujourd'hui ce drapeau n'est plus mis à vrai que dans le
          // gestionnaire « playing » de l'élément vidéo — un ÉVÉNEMENT, qui
          // se rate : la lecture démarre dès que la piste est posée, et si
          // elle part avant que les écouteurs ne soient attachés, personne
          // ne le voit passer. Le drapeau reste alors faux pendant que
          // l'image joue.
          //
          // C'est ce que gardait le gestionnaire de vibration après le
          // correctif précédent, et c'est pourquoi la sonde disait « reçu
          // par la page » sans jamais dire « vibration appliquée »
          // (2026-09-09).
          //
          // Seul le REF est posé ici, pas l'état React : c'est lui que les
          // gardes lisent, et laisser « playing » décider de ce que le
          // joueur VOIT évite de lui annoncer une image qui n'est pas
          // encore là.
          isConnectedRef.current = true;

          // Requested REGARDLESS of hasVideoTrackRef/onFirstVideoTrack's
          // own attempt: onFirstVideoTrack can fire (video track arrives)
          // BEFORE this point — isStreamBoundRef.current was still false
          // then, so its own gated request was a no-op — and a page that
          // attached before the console's first IDR would otherwise sit
          // on black frames until a manual refresh. This was a live bug
          // found testing the migration on real hardware (2026-08-21):
          // dropping this fallback reintroduced exactly the chicken-and-
          // egg race the original code's own comment warned about.
          if (!initialKeyframeRequestedRef.current) {
            if (requestKeyframe("post-bind-initial-video")) {
              initialKeyframeRequestedRef.current = true;
            }
          }
          _context7.n = 20;
          break;
        case 19:
          _context7.p = 19;
          _t8 = _context7.v;
          console.error("Connection failed:", _t8);
          setConnectionState(t("streaming.connection.state.failed"));
          errorReason = t("streaming.connection.errors.connectionFailed", "Connection failed");
          if (_t8 instanceof Error) {
            errorMessage = _t8.message.toLowerCase();
            if (errorMessage.includes("timeout")) {
              errorReason = t("streaming.connection.errors.connectionTimeout", "Connection timeout");
            } else if (errorMessage.includes("device")) {
              errorReason = _t8.message;
            } else if (errorMessage.includes("session")) {
              errorReason = t("streaming.connection.errors.sessionFailed", "Session creation failed");
            } else if (errorMessage.includes("offer")) {
              errorReason = t("streaming.connection.errors.offerFailed", "Offer creation failed");
            } else {
              errorReason = _t8.message || errorReason;
            }
          }
          if (onConnectionError && !hasTriggeredErrorCallbackRef.current) {
            hasTriggeredErrorCallbackRef.current = true;
            onConnectionError(errorReason);
          }

          // A failed CONNECT is not a quit — never stop the shared session
          // over our own signaling failure (it survives for the next
          // attempt and for other viewers).
          disconnect(false);
        case 20:
          _context7.p = 20;
          setIsConnecting(false);
          return _context7.f(20);
        case 21:
          return _context7.a(2);
      }
    }, _callee7, null, [[4, 19, 20, 21]]);
  })), [attachSessionId, connectAttached, disconnect, hostId, isConnected, isConnecting, isLikelyLan, onConnectionError, prepareDevice, preCreatedSessionId, t, toast, username]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isConnected) {
      tearDownMouseRightStick();
      return;
    }
    setupMouseRightStick();
    return function () {
      tearDownMouseRightStick();
    };
  }, [isConnected, setupMouseRightStick, tearDownMouseRightStick]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var unsubscribe = _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.onRumble(function (event) {
      // RECEVOIR UNE VIBRATION N'EST PAS ENVOYER UNE ENTRÉE.
      //
      // Ce gestionnaire recopiait la garde de handleGamepadInput —
      // `gamepadEnabledRef` et `isGamepadEnabled` — qui protège tout
      // autre chose : l'envoi d'entrée depuis une manette PHYSIQUE. Le
      // joystick tactile a d'ailleurs son propre contournement juste à
      // côté (hasVirtualJoystickActive), et c'est pour ça qu'on peut
      // jouer au doigt pendant que ce drapeau est faux.
      //
      // Or `gamepadEnabledRef` n'est mis à vrai QUE dans
      // connectAttached — le chemin qu'on emprunte en reprenant le
      // contrôle d'une session, jamais en démarrant la sienne. Un
      // joueur qui lance sa propre partie PS5 n'a donc jamais eu de
      // vibration, et le message arrivait pourtant jusqu'ici : le
      // gateway le livrait sans une erreur, le serveur journalisait
      // « envoyé à gino » (2026-09-09).
      //
      // Ce qui compte pour recevoir : être connecté. Le repli sur la
      // vibration du téléphone, lui, se débrouille sans manette (voir
      // applyControllerRumbleToGamepads).
      if (!isConnectedRef.current) {
        return;
      }

      // L'interrupteur et l'intensité sont lus par le moteur
      // partagé (libs/rumble.js), depuis l'unique magasin de
      // préférences. Les relire ici demandait de tenir un second
      // abonnement d'accord avec le premier — c'est justement ce qui
      // avait divergé.
      ;(0,_gameflex_stream_remoteplay_service_rumble_service__WEBPACK_IMPORTED_MODULE_6__.applyControllerRumbleToGamepads)(event);
    });
    return function () {
      unsubscribe();
    };
  }, [isGamepadEnabled]);

  // Always enable useGamepadInput, check inside handleGamepadInput
  // This ensures event listeners update even when gamepadEnabledRef changes
  (0,_gameflex_hooks_use_gamepad__WEBPACK_IMPORTED_MODULE_2__.useGamepadInput)(handleGamepadInput, true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    webrtcSessionIdRef.current = webrtcSessionId;
  }, [webrtcSessionId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    remotePlaySessionIdRef.current = remotePlaySessionId;
  }, [remotePlaySessionId]);

  // onConnectionError is usually an inline closure in the page component
  // (new identity on every render) — the ref keeps the stall watchdog
  // below independent of it, so a render during a freeze can't tear the
  // interval down and reset the stall clock (which would defeat the 8 s
  // fuse and leave a permanent black screen).
  var onConnectionErrorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onConnectionError);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onConnectionErrorRef.current = onConnectionError;
  }, [onConnectionError]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (keyframeMonitorIntervalRef.current !== null) {
      window.clearInterval(keyframeMonitorIntervalRef.current);
      keyframeMonitorIntervalRef.current = null;
    }
    if (!isConnected) {
      return;
    }
    if (!resolveWebrtcSessionId()) {
      return;
    }
    var STALL_THRESHOLD_MS = 1500;
    // How long we tolerate zero video activity before treating the
    // stream as dead (console powered off, network cut, etc.) and
    // kicking the user back to the devices list — same signal as the
    // "isStalling" spinner above, just a longer fuse so a brief hiccup
    // doesn't bounce the user out of a session that's about to recover.
    var DISCONNECT_STALL_THRESHOLD_MS = 8000;
    var POSITION_EPSILON = 0.03;
    lastVideoActivityRef.current = Date.now();
    lastDecodedFrameCountRef.current = null;
    lastPlaybackPositionRef.current = null;
    var getDecodedFrameCount = function getDecodedFrameCount(video) {
      try {
        if (typeof video.getVideoPlaybackQuality === "function") {
          var quality = video.getVideoPlaybackQuality();
          if (quality && typeof quality.totalVideoFrames === "number" && quality.totalVideoFrames >= 0) {
            return quality.totalVideoFrames;
          }
          if (quality && typeof quality.presentedFrames === "number") {
            return quality.presentedFrames;
          }
        }
      } catch (error) {
        ;(0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_10__.debugTrace)("⚠️ Failed to read video playback quality:", error);
      }
      var videoAny = video;
      if (typeof (videoAny === null || videoAny === void 0 ? void 0 : videoAny.webkitDecodedFrameCount) === "number") {
        return videoAny.webkitDecodedFrameCount;
      }
      if (typeof (videoAny === null || videoAny === void 0 ? void 0 : videoAny.mozParsedFrames) === "number") {
        return videoAny.mozParsedFrames;
      }
      return null;
    };
    var checkStall = function checkStall() {
      var video = videoRef.current;
      if (!video || !isConnectedRef.current) {
        setIsStalling(false);
        return;
      }
      var now = Date.now();
      var noMedia = video.paused || video.readyState < 2 || !video.srcObject;
      var hasSeenFrames = lastDecodedFrameCountRef.current !== null || lastPlaybackPositionRef.current !== null;
      // A paused/emptied element is only forgiven while the stream is
      // still booting (no frame seen yet). Once frames have flowed, it IS
      // the "console off" signal — resetting the clock here would leave a
      // permanent black screen (a dead <video> usually ends up paused
      // with readyState < 2) and the watchdog would never fire.
      if (noMedia && !hasSeenFrames) {
        lastVideoActivityRef.current = now;
        setIsStalling(false);
        return;
      }
      if (!noMedia) {
        var decodedFrames = getDecodedFrameCount(video);
        if (decodedFrames !== null) {
          if (lastDecodedFrameCountRef.current === null || decodedFrames > lastDecodedFrameCountRef.current) {
            lastDecodedFrameCountRef.current = decodedFrames;
            lastVideoActivityRef.current = now;
            setIsStalling(false);
            return;
          }
        } else {
          var currentPosition = video.currentTime;
          if (lastPlaybackPositionRef.current === null || Math.abs(currentPosition - lastPlaybackPositionRef.current) > POSITION_EPSILON) {
            lastPlaybackPositionRef.current = currentPosition;
            lastVideoActivityRef.current = now;
            setIsStalling(false);
            return;
          }
        }
      }
      var inactivity = now - lastVideoActivityRef.current;
      if (inactivity < STALL_THRESHOLD_MS) {
        setIsStalling(false);
        return;
      }

      // Stalling detected
      setIsStalling(true);
      void handleStreamHealthCheck("monitor-stall", {
        forceNeutral: true
      });

      // No video data at all for a sustained period — most likely the
      // console was turned off or the network dropped. The WebRTC
      // peer connection to OUR OWN backend can stay "connected" the
      // whole time (it never talks to the console directly), so
      // connectionstatechange/iceconnectionstatechange never fire for
      // this case — this frame-activity check is the only signal.
      if (inactivity >= DISCONNECT_STALL_THRESHOLD_MS && onConnectionErrorRef.current && !hasTriggeredErrorCallbackRef.current) {
        hasTriggeredErrorCallbackRef.current = true;
        onConnectionErrorRef.current(t("streaming.connection.errors.noVideoData", "No video signal received — the console may be off or the connection was lost"));
      }
    };
    keyframeMonitorIntervalRef.current = window.setInterval(checkStall, 1000);
    return function () {
      if (keyframeMonitorIntervalRef.current !== null) {
        window.clearInterval(keyframeMonitorIntervalRef.current);
        keyframeMonitorIntervalRef.current = null;
      }
    };
  }, [handleStreamHealthCheck, isConnected, resolveWebrtcSessionId, t, videoRef]);

  // Always-on network-loss sampling for the PS5's native bitrate
  // adaptation (see streaming-hub.service.js reportNetworkLoss /
  // internal/api/signalr_hub.go ReportNetworkStats) — deliberately NOT
  // gated by isStatsEnabled like collectConnectionStats above: adapting the
  // stream to real network conditions should always be active, not only
  // while the debug panel happens to be open.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isConnected) {
      lastNetworkLossSampleRef.current = null;
      return undefined;
    }
    var sample = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var _screenRef$current5;
        var statsReport, packetsLost, packetsReceived, previous, deltaLost, deltaReceived, total, _t9;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _context8.n = 1;
              return (_screenRef$current5 = screenRef.current) === null || _screenRef$current5 === void 0 ? void 0 : _screenRef$current5.getRawStats();
            case 1:
              statsReport = _context8.v;
              if (statsReport) {
                _context8.n = 2;
                break;
              }
              return _context8.a(2);
            case 2:
              _context8.p = 2;
              packetsLost = null;
              packetsReceived = null;
              statsReport.forEach(function (report) {
                if (report.type === "inbound-rtp" && !report.isRemote && report.kind === "video") {
                  if (typeof report.packetsLost === "number") packetsLost = report.packetsLost;
                  if (typeof report.packetsReceived === "number") packetsReceived = report.packetsReceived;
                }
              });
              if (!(packetsLost === null || packetsReceived === null)) {
                _context8.n = 3;
                break;
              }
              return _context8.a(2);
            case 3:
              previous = lastNetworkLossSampleRef.current;
              lastNetworkLossSampleRef.current = {
                packetsLost: packetsLost,
                packetsReceived: packetsReceived
              };
              if (previous) {
                _context8.n = 4;
                break;
              }
              return _context8.a(2);
            case 4:
              deltaLost = Math.max(0, packetsLost - previous.packetsLost);
              deltaReceived = Math.max(0, packetsReceived - previous.packetsReceived);
              total = deltaLost + deltaReceived;
              if (!(total <= 0)) {
                _context8.n = 5;
                break;
              }
              return _context8.a(2);
            case 5:
              _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_5__.remoteplayInputService.reportNetworkLoss(deltaLost / total)["catch"](function () {});
              _context8.n = 7;
              break;
            case 6:
              _context8.p = 6;
              _t9 = _context8.v;
            case 7:
              return _context8.a(2);
          }
        }, _callee8, null, [[2, 6]]);
      }));
      return function sample() {
        return _ref1.apply(this, arguments);
      };
    }();
    void sample();
    var intervalId = window.setInterval(sample, 2000);
    return function () {
      window.clearInterval(intervalId);
    };
  }, [isConnected]);

  // handleStreamHealthCheck is recreated on many renders (it closes over
  // several other callbacks) — a ref lets the interval below depend only
  // on isConnected/isStatsEnabled, so it doesn't get torn down and
  // recreated (with an immediate extra call) on every unrelated render.
  var handleStreamHealthCheckRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handleStreamHealthCheck);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    handleStreamHealthCheckRef.current = handleStreamHealthCheck;
  }, [handleStreamHealthCheck]);

  // The Live Monitoring panel (heartbeat/DATA_ACK/GMAC state) re-reads the
  // last snapshot the child PUSHED — a local read, no request leaves the
  // page. Independent of the stall-detection health check, which only fires
  // once video is already stuck. Tied to isStatsEnabled since it's only
  // useful while the panel is visible.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isStatsEnabled || !isConnected) {
      return undefined;
    }
    var intervalId = window.setInterval(function () {
      void handleStreamHealthCheckRef.current("live-monitor", {});
    }, HEALTH_CHECK_COOLDOWN_MS);
    return function () {
      window.clearInterval(intervalId);
    };
  }, [HEALTH_CHECK_COOLDOWN_MS, isConnected, isStatsEnabled]);

  // The initial IDR request, retried until it can actually go out.
  //
  // The PS5 only emits a keyframe on demand, so the very first connection
  // shows NOTHING until one is asked for (a reconnect works because the
  // gateway still has a cached keyframe — exactly the "first attempt black,
  // second attempt fine" reported live on 2026-08-24). The request used to
  // ride the PeerConnection's "connected" transition, which was safe while
  // this hook created the viewer itself. It no longer is: the PAGE attaches
  // the video first and the platform connection only starts afterwards
  // (Streaming.jsx gates it on the viewer being ready), so that request now
  // runs while webrtcSessionId is still null and the hub socket is still
  // closed — requestKeyframe drops it and nothing ever asks again.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isConnected || !webrtcSessionId) {
      return undefined;
    }
    if (!hasVideoTrackRef.current || initialKeyframeRequestedRef.current) {
      return undefined;
    }
    var attemptsLeft = 10;
    var timer = null;
    var _askForKeyframe = function askForKeyframe() {
      if (initialKeyframeRequestedRef.current) {
        return;
      }
      if (requestKeyframe("post-connect-initial-video")) {
        initialKeyframeRequestedRef.current = true;
        return;
      }
      attemptsLeft -= 1;
      if (attemptsLeft > 0) {
        timer = setTimeout(_askForKeyframe, 1000);
      }
    };
    _askForKeyframe();
    return function () {
      return clearTimeout(timer);
    };
  }, [isConnected, webrtcSessionId, requestKeyframe]);
  var disconnectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(disconnect);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    disconnectRef.current = disconnect;
  }, [disconnect]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    hasAttemptedInitialConnectRef.current = false;
  }, [hostId, attachSessionId]);

  // LA VIDÉO QUI ARRIVE NE DIT PAS QUE LA CONSOLE A ÉTÉ PRIÉE D'ÉMETTRE.
  //
  // Ce garde-fou testait `!isConnected` — l'état du VIEWER de la passerelle,
  // que le composant vidéo partagé monte de son côté. Deux choses
  // différentes : le viewer peut être debout alors que personne n'a encore
  // demandé à la PS5 de streamer (c'est `connect()`, juste en dessous, qui
  // le fait via `createOffer` puis `connectToRemotePlaySession`).
  //
  // Sur un serveur la passerelle est un service distant : l'ICE prend le
  // temps d'un aller-retour réseau, l'effet s'évalue avant, et le hasard
  // jouait en notre faveur. SUR LE TÉLÉPHONE elle est en processus — l'ICE
  // se termine en cent cinquante millisecondes — donc `isConnected` était
  // déjà vrai au premier passage, et le flux n'était JAMAIS lancé : viewer
  // connecté, aucune image, « Video signal interrupted » par-dessus un
  // écran noir (2026-09-10, journal du téléphone à l'appui).
  //
  // La bonne question est « le flux est-il lié ? », et `isStreamBoundRef`
  // y répond déjà — il passe à vrai juste après la liaison réussie. La
  // répétition, elle, est retenue par `hasAttemptedInitialConnectRef`, qui
  // est posé AVANT la temporisation.
  // UN RE-RENDU NE DOIT PAS DÉFAIRE L'INTENTION DE SE CONNECTER.
  //
  // Cet effet posait son drapeau « j'ai tenté » AVANT la temporisation, et
  // rendait un nettoyage qui ANNULE le minuteur. Or `connect` est dans ses
  // dépendances et change d'identité à chaque rendu : le moindre re-rendu
  // dans les cinq cents millisecondes annulait le minuteur, et le drapeau
  // interdisait alors de le replanifier. `connect()` ne partait jamais.
  //
  // Sur un serveur la page se stabilise avant l'échéance et le hasard
  // jouait en notre faveur. Sur le téléphone la passerelle est en processus
  // — ICE bouclé en cent cinquante millisecondes, donc mises à jour d'état
  // et re-rendus dans cette même fenêtre : l'annulation était systématique
  // (2026-09-10, quatrième cause du même écran noir, les trois précédentes
  // étant des booléens confondus).
  //
  // Le minuteur vit donc dans un ref, et seul le DÉMONTAGE l'annule.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!(hostId || attachSessionId) || isStreamBoundRef.current || hasAttemptedInitialConnectRef.current) {
      return;
    }
    hasAttemptedInitialConnectRef.current = true;
    initialConnectTimerRef.current = setTimeout(function () {
      initialConnectTimerRef.current = null;
      connect();
    }, 500);
  }, [connect, hostId, attachSessionId]);

  // Le seul endroit qui a le droit d'annuler : la page qui s'en va.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      if (initialConnectTimerRef.current) {
        clearTimeout(initialConnectTimerRef.current);
        initialConnectTimerRef.current = null;
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      disconnectRef.current(false);
    };
  }, []);

  // Control handoff (B2): the kernel is the authority — the page shows
  // the prompt when the pool snapshot carries session.controlRequest, and
  // flips gaveAwayControl after accepting. The hub event wiring that used
  // to live here is gone: granted/denied/requested now travel as snapshot
  // diffs (padSlots / controlRequest), and requesting control back is
  // done from the Watch page like any viewer.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (gaveAwayControl) {
      hasControlRef.current = false;
      setHasControl(false);
    }
  }, [gaveAwayControl]);
  return {
    hasControl: hasControl,
    isConnected: isConnected,
    isConnecting: isConnecting,
    connectionState: connectionState,
    connect: connect,
    disconnect: disconnect,
    connectionStats: connectionStats,
    isStatsMonitoringEnabled: isStatsEnabled,
    setStatsMonitoring: setSharedStatsMonitoring,
    refreshStream: refreshStream,
    forceResetReorderQueue: forceResetReorderQueue,
    webrtcSessionId: webrtcSessionId,
    stopStickProcessing: stopStickProcessing,
    startStickProcessing: startStickProcessing,
    isStalling: isStalling,
    // Wired onto <GatewayWebRTC> by Player.jsx (ref={screenRef},
    // same pattern retro/streamex's Player.jsx already use, plus the
    // extra props this platform needs — see each callback's own doc).
    handleConnectionStateChange: handleConnectionStateChange,
    handleGatewayMessage: handleGatewayMessage,
    handleIceConnectionStateChange: handleIceConnectionStateChange,
    onFirstVideoTrack: onFirstVideoTrack
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/constants.js"
/*!***************************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/constants.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AXIS_DEADZONE: () => (/* binding */ AXIS_DEADZONE),
/* harmony export */   MAX_HEARTBEAT_INTERVAL_MS: () => (/* binding */ MAX_HEARTBEAT_INTERVAL_MS),
/* harmony export */   MOUSE_DECAY_HALF_LIFE_MS: () => (/* binding */ MOUSE_DECAY_HALF_LIFE_MS),
/* harmony export */   MOUSE_IDLE_THRESHOLD: () => (/* binding */ MOUSE_IDLE_THRESHOLD),
/* harmony export */   MOUSE_SENSITIVITY: () => (/* binding */ MOUSE_SENSITIVITY),
/* harmony export */   QUICK_HOLD_ACTIVATE: () => (/* binding */ QUICK_HOLD_ACTIVATE),
/* harmony export */   QUICK_HOLD_DURATION_MS: () => (/* binding */ QUICK_HOLD_DURATION_MS),
/* harmony export */   QUICK_HOLD_RELEASE_THRESHOLD: () => (/* binding */ QUICK_HOLD_RELEASE_THRESHOLD),
/* harmony export */   SEND_INTERVAL_MS: () => (/* binding */ SEND_INTERVAL_MS),
/* harmony export */   STICK_RADIAL_DEADZONE: () => (/* binding */ STICK_RADIAL_DEADZONE),
/* harmony export */   TRIGGER_DEADZONE: () => (/* binding */ TRIGGER_DEADZONE),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   clamp01: () => (/* binding */ clamp01),
/* harmony export */   getTimestamp: () => (/* binding */ getTimestamp)
/* harmony export */ });
var AXIS_DEADZONE = 0.002;
var SEND_INTERVAL_MS = 8; // Send interval
// Matches upstream's feedback cadence (on change, else max 200ms) — sending
// far faster than this floods the PS5's GMAC key rotation (each FeedbackState
// send advances the crypto key_pos) and its Takion reliable-channel ack
// window, which appears to be what causes the "buttons freeze then heartbeat
// failure" disconnect after ~15-80s of play (see .memory/troubleshooting.md #26).
var MAX_HEARTBEAT_INTERVAL_MS = 200;
var TRIGGER_DEADZONE = 0.01;
var QUICK_HOLD_ACTIVATE = 0.35;
var QUICK_HOLD_RELEASE_THRESHOLD = 0.04;
var QUICK_HOLD_DURATION_MS = 120;
var STICK_RADIAL_DEADZONE = 0.08;
var MOUSE_SENSITIVITY = 4.5;
var MOUSE_DECAY_HALF_LIFE_MS = 60;
var MOUSE_IDLE_THRESHOLD = 0.0025;
var clamp = function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.max(min, Math.min(max, value));
};
var clamp01 = function clamp01(value) {
  return Math.max(0, Math.min(1, value));
};
var getTimestamp = function getTimestamp() {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
};

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/prepare-device.js"
/*!********************************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/prepare-device.js ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePrepareDevice: () => (/* binding */ usePrepareDevice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gameflex_stream_remoteplay_service_playstation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/gameflex/stream/remoteplay/service/playstation.service */ "./src/webapp/src/app/gameflex/stream/remoteplay/service/playstation.service.js");
/* harmony import */ var _gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/gameflex/shared/utils/log-store */ "./src/webapp/src/app/gameflex/shared/utils/log-store.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
;



// prepareDevice — the PS5 discovery/wake/readiness gate connect() runs
// before the session handshake (getMyDevices → discover/wake → poll ready,
// 30 s max). Extracted from use-streaming-connection.js (P7.4): it touches
// no hook state — only the device service and the caller's own status
// setter — so it lives as a plain callback factory rather than a sub-hook
// owning refs, same pattern as stick-input-state's self-contained shape.
var usePrepareDevice = function usePrepareDevice(_ref) {
  var hostId = _ref.hostId,
    t = _ref.t,
    setConnectionState = _ref.setConnectionState;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var devicesResponse, device, deviceIp, firstStatusCheck, needWaitForReady, _firstStatusCheck$res, deviceStatus, wakeResponse, timeout, checkInterval, startTime, _loop, _ret, finalElapsed, errorMessage, normalizedErrorMessage, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (hostId) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, false);
        case 1:
          _context2.p = 1;
          setConnectionState(t("streaming.connection.state.fetchingDevice"));
          _context2.n = 2;
          return _gameflex_stream_remoteplay_service_playstation_service__WEBPACK_IMPORTED_MODULE_1__.playStationService.getMyDevices();
        case 2:
          devicesResponse = _context2.v;
          if (!(!devicesResponse.success || !devicesResponse.result)) {
            _context2.n = 3;
            break;
          }
          throw new Error(t("streaming.connection.errors.fetchDeviceFailed"));
        case 3:
          device = devicesResponse.result.find(function (d) {
            return d.hostId === hostId;
          });
          if (device) {
            _context2.n = 4;
            break;
          }
          throw new Error(t("streaming.connection.errors.deviceNotFound"));
        case 4:
          if (device.ipAddress) {
            _context2.n = 5;
            break;
          }
          throw new Error(t("streaming.connection.errors.ipNotSet"));
        case 5:
          deviceIp = device.ipAddress;
          setConnectionState(t("streaming.connection.state.checkingStatus"));
          _context2.n = 6;
          return _gameflex_stream_remoteplay_service_playstation_service__WEBPACK_IMPORTED_MODULE_1__.playStationService.discoverDevice(deviceIp, 5000)["catch"](function () {
            console.warn("Initial status query failed, will continue querying in the wait loop...");
            return {
              success: false,
              result: null
            };
          });
        case 6:
          firstStatusCheck = _context2.v;
          if (!(!firstStatusCheck.success || !firstStatusCheck.result)) {
            _context2.n = 9;
            break;
          }
          console.warn("Initial status query failed, retrying once...");
          _context2.n = 7;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 1000);
          });
        case 7:
          _context2.n = 8;
          return _gameflex_stream_remoteplay_service_playstation_service__WEBPACK_IMPORTED_MODULE_1__.playStationService.discoverDevice(deviceIp, 5000)["catch"](function () {
            console.warn("Initial status query retry also failed, will continue querying in the wait loop...");
            return {
              success: false,
              result: null
            };
          });
        case 8:
          firstStatusCheck = _context2.v;
        case 9:
          needWaitForReady = false;
          if (!(firstStatusCheck.success && firstStatusCheck.result)) {
            _context2.n = 15;
            break;
          }
          deviceStatus = ((_firstStatusCheck$res = firstStatusCheck.result.status) === null || _firstStatusCheck$res === void 0 ? void 0 : _firstStatusCheck$res.toUpperCase()) || "";
          (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("Device current status:", deviceStatus);
          if (!deviceStatus.includes("STANDBY")) {
            _context2.n = 12;
            break;
          }
          setConnectionState(t("streaming.connection.state.wakingUp"));
          _context2.n = 10;
          return _gameflex_stream_remoteplay_service_playstation_service__WEBPACK_IMPORTED_MODULE_1__.playStationService.wakeUpConsole(hostId);
        case 10:
          wakeResponse = _context2.v;
          if (!(!wakeResponse.success || !wakeResponse.result)) {
            _context2.n = 11;
            break;
          }
          throw new Error(t("streaming.connection.errors.wakeDeviceFailed"));
        case 11:
          (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("✅ Device wake command sent, waiting for device to be ready...");
          needWaitForReady = true;
          _context2.n = 14;
          break;
        case 12:
          if (!(deviceStatus === "OK" || deviceStatus.includes("READY") || deviceStatus.includes("AVAILABLE"))) {
            _context2.n = 13;
            break;
          }
          ;(0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("✅ Device is ready, status:", deviceStatus);
          return _context2.a(2, true);
        case 13:
          (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("⚠️ Device status:", deviceStatus, ", waiting for device to be ready...");
          needWaitForReady = true;
        case 14:
          _context2.n = 16;
          break;
        case 15:
          (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("⚠️ Initial status query failed, waiting for device to be ready...");
          needWaitForReady = true;
        case 16:
          if (!needWaitForReady) {
            _context2.n = 22;
            break;
          }
          setConnectionState(t("streaming.connection.state.waitingReady"));
          timeout = 30000;
          checkInterval = 1000;
          startTime = Date.now();
          (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("🔄 Starting active device status polling...");
          _loop = /*#__PURE__*/_regenerator().m(function _loop() {
            var _elapsed, statusResponse, _statusResponse$resul, currentStatus, _elapsed2, elapsed, _t;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.p = _context.n) {
                case 0:
                  _context.p = 0;
                  _elapsed = Math.floor((Date.now() - startTime) / 1000);
                  (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("\uD83D\uDCE1 Polling device status... (".concat(_elapsed, "s)"));
                  _context.n = 1;
                  return Promise.race([_gameflex_stream_remoteplay_service_playstation_service__WEBPACK_IMPORTED_MODULE_1__.playStationService.discoverDevice(deviceIp, 5000), new Promise(function (_, reject) {
                    return setTimeout(function () {
                      return reject(new Error("Query timeout"));
                    }, 6000);
                  })])["catch"](function (error) {
                    ;(0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("\u26A0\uFE0F Device status query timed out or failed (".concat(_elapsed, "s):"), error);
                    return {
                      success: false,
                      result: null
                    };
                  });
                case 1:
                  statusResponse = _context.v;
                  if (!(statusResponse.success && statusResponse.result)) {
                    _context.n = 4;
                    break;
                  }
                  currentStatus = ((_statusResponse$resul = statusResponse.result.status) === null || _statusResponse$resul === void 0 ? void 0 : _statusResponse$resul.toUpperCase()) || "";
                  (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("\u2705 Device status check (".concat(_elapsed, "s):"), currentStatus);
                  if (!(currentStatus === "OK" || currentStatus.includes("READY") || currentStatus.includes("AVAILABLE"))) {
                    _context.n = 2;
                    break;
                  }
                  ;(0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("✅ Device is ready, status:", currentStatus);
                  return _context.a(2, {
                    v: true
                  });
                case 2:
                  (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("\u23F3 Device not yet ready, current status: ".concat(currentStatus, ", continuing to wait..."));
                case 3:
                  _context.n = 5;
                  break;
                case 4:
                  (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("\u26A0\uFE0F Device status query failed (".concat(_elapsed, "s), retrying..."));
                case 5:
                  _context.n = 7;
                  break;
                case 6:
                  _context.p = 6;
                  _t = _context.v;
                  _elapsed2 = Math.floor((Date.now() - startTime) / 1000);
                  (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("\u26A0\uFE0F Device status query error (".concat(_elapsed2, "s):"), _t, ", retrying...");
                case 7:
                  elapsed = Math.floor((Date.now() - startTime) / 1000);
                  setConnectionState(t("streaming.connection.state.waitingReadyWithTime", {
                    seconds: elapsed
                  }));
                  if (!(Date.now() - startTime >= timeout)) {
                    _context.n = 8;
                    break;
                  }
                  return _context.a(2, 0);
                case 8:
                  _context.n = 9;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, checkInterval);
                  });
                case 9:
                  return _context.a(2);
              }
            }, _loop, null, [[0, 6]]);
          });
        case 17:
          if (!(Date.now() - startTime < timeout)) {
            _context2.n = 21;
            break;
          }
          return _context2.d(_regeneratorValues(_loop()), 18);
        case 18:
          _ret = _context2.v;
          if (!(_ret === 0)) {
            _context2.n = 19;
            break;
          }
          return _context2.a(3, 21);
        case 19:
          if (!_ret) {
            _context2.n = 20;
            break;
          }
          return _context2.a(2, _ret.v);
        case 20:
          _context2.n = 17;
          break;
        case 21:
          finalElapsed = Math.floor((Date.now() - startTime) / 1000);
          console.error("\u274C Device ready timeout (".concat(finalElapsed, "s)"));
          throw new Error(t("streaming.connection.errors.deviceReadyTimeout", {
            seconds: finalElapsed
          }));
        case 22:
          return _context2.a(2, false);
        case 23:
          _context2.p = 23;
          _t2 = _context2.v;
          console.error("Device preparation failed:", _t2);
          errorMessage = _t2 instanceof Error ? _t2.message : t("streaming.connection.errors.unknown");
          normalizedErrorMessage = errorMessage.toLowerCase(); // Update connection state; no longer show a popup toast
          if (normalizedErrorMessage.includes("timeout") || errorMessage.includes("timeout")) {
            setConnectionState(t("streaming.connection.state.failed"));
            console.warn("Device preparation timed out:", errorMessage);
          } else {
            console.warn("Device preparation encountered an error but continuing to wait:", errorMessage);
          }
          return _context2.a(2, false);
      }
    }, _callee, null, [[1, 23]]);
  })), [hostId, t, setConnectionState]);
};

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/stats-collector.js"
/*!*********************************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/stats-collector.js ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useConnectionStatsCollector: () => (/* binding */ useConnectionStatsCollector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gameflex_stream_libs_webrtc_stats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/gameflex/stream/libs/webrtc-stats.js */ "./src/webapp/src/app/gameflex/stream/libs/webrtc-stats.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
;


// useConnectionStatsCollector — the Live Monitoring panel's 1s getStats()
// poll, extracted from use-streaming-connection.js (P7.4). Owns every ref
// the collection touches (rate-delta anchors, the 10-minute frame-count
// history, the streaming start clock) plus the interval that drives it —
// the caller only hands in the getRawStats source and the stats setter,
// and reads streamingStartTimeRef (stamped by handleConnectionStateChange /
// onFirstVideoTrack) and resetConnectionStats (disconnect) back out.
var useConnectionStatsCollector = function useConnectionStatsCollector(_ref) {
  var screenRef = _ref.screenRef,
    setConnectionStats = _ref.setConnectionStats,
    isStatsEnabled = _ref.isStatsEnabled;
  var statsIntervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var isStatsEnabledRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var previousStatsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var frameCountHistoryRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var streamingStartTimeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var collectConnectionStats = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var _screenRef$current;
    var statsReport, _ref7, harvested, totalInboundBytes, totalOutboundBytes, videoInboundBytes, frameWidth, frameHeight, framesDecoded, latencyMs, videoPacketsLost, videoJitterMs, fps, now, previous, rates, _previous$framesDecod, currentTime, tenMinutesAgo, streamingDurationMs, downloadKbps, uploadKbps, videoBitrateKbps, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          if (isStatsEnabledRef.current) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          _context.n = 2;
          return (_screenRef$current = screenRef.current) === null || _screenRef$current === void 0 ? void 0 : _screenRef$current.getRawStats();
        case 2:
          statsReport = _context.v;
          if (statsReport) {
            _context.n = 3;
            break;
          }
          return _context.a(2);
        case 3:
          _context.p = 3;
          // Shared getStats harvesting (see gameflex/stream/libs/webrtc-stats.js)
          // — the same report scan and rate math as streamex's performance
          // panel, so the two consumers can't drift apart.
          harvested = (0,_gameflex_stream_libs_webrtc_stats_js__WEBPACK_IMPORTED_MODULE_1__.scanWebRTCReport)(statsReport);
          totalInboundBytes = harvested.inboundBytes;
          totalOutboundBytes = harvested.outboundBytes;
          videoInboundBytes = harvested.videoInboundBytes;
          frameWidth = harvested.frameWidth, frameHeight = harvested.frameHeight, framesDecoded = harvested.framesDecoded, latencyMs = harvested.latencyMs, videoPacketsLost = harvested.videoPacketsLost, videoJitterMs = harvested.videoJitterMs; // Calculate fps from WebRTC stats
          fps = null;
          now = performance.now();
          previous = previousStatsRef.current;
          rates = null;
          if (previous) {
            rates = (0,_gameflex_stream_libs_webrtc_stats_js__WEBPACK_IMPORTED_MODULE_1__.rateDeltas)({
              timestamp: previous.timestamp,
              inboundBytes: previous.bytesReceived,
              outboundBytes: previous.bytesSent,
              videoInboundBytes: previous.videoBytesReceived,
              framesDecoded: (_previous$framesDecod = previous.framesDecoded) !== null && _previous$framesDecod !== void 0 ? _previous$framesDecod : 0
            }, now, harvested);
            if (rates) {
              fps = rates.fps;
            }
          }
          currentTime = Date.now();
          tenMinutesAgo = currentTime - 10 * 60 * 1000;
          frameCountHistoryRef.current = frameCountHistoryRef.current.filter(function (point) {
            return point.timestamp >= tenMinutesAgo;
          });
          if (fps !== null && Number.isFinite(fps) && fps >= 0) {
            frameCountHistoryRef.current.push({
              timestamp: currentTime,
              frameCount: fps
            });
          }

          // Calculate streaming duration
          streamingDurationMs = null;
          if (streamingStartTimeRef.current !== null) {
            streamingDurationMs = Date.now() - streamingStartTimeRef.current;
          }
          if (previous) {
            _context.n = 4;
            break;
          }
          previousStatsRef.current = {
            timestamp: now,
            bytesReceived: totalInboundBytes,
            bytesSent: totalOutboundBytes,
            videoBytesReceived: videoInboundBytes,
            framesDecoded: framesDecoded !== null && framesDecoded !== void 0 ? framesDecoded : null
          };
          setConnectionStats(function (prev) {
            var _prev$downloadKbps, _prev$uploadKbps, _prev$videoBitrateKbp, _prev$resolution, _ref3, _ref4, _ref5, _ref6, _prev$debug;
            return {
              downloadKbps: (_prev$downloadKbps = prev === null || prev === void 0 ? void 0 : prev.downloadKbps) !== null && _prev$downloadKbps !== void 0 ? _prev$downloadKbps : null,
              uploadKbps: (_prev$uploadKbps = prev === null || prev === void 0 ? void 0 : prev.uploadKbps) !== null && _prev$uploadKbps !== void 0 ? _prev$uploadKbps : null,
              videoBitrateKbps: (_prev$videoBitrateKbp = prev === null || prev === void 0 ? void 0 : prev.videoBitrateKbps) !== null && _prev$videoBitrateKbp !== void 0 ? _prev$videoBitrateKbp : null,
              resolution: frameWidth !== null && frameHeight !== null ? {
                width: frameWidth,
                height: frameHeight
              } : (_prev$resolution = prev === null || prev === void 0 ? void 0 : prev.resolution) !== null && _prev$resolution !== void 0 ? _prev$resolution : null,
              latencyMs: (_ref3 = latencyMs !== null && latencyMs !== void 0 ? latencyMs : prev === null || prev === void 0 ? void 0 : prev.latencyMs) !== null && _ref3 !== void 0 ? _ref3 : null,
              fps: (_ref4 = fps !== null && fps !== void 0 ? fps : prev === null || prev === void 0 ? void 0 : prev.fps) !== null && _ref4 !== void 0 ? _ref4 : null,
              videoPacketsLost: (_ref5 = videoPacketsLost !== null && videoPacketsLost !== void 0 ? videoPacketsLost : prev === null || prev === void 0 ? void 0 : prev.videoPacketsLost) !== null && _ref5 !== void 0 ? _ref5 : null,
              videoJitterMs: (_ref6 = videoJitterMs !== null && videoJitterMs !== void 0 ? videoJitterMs : prev === null || prev === void 0 ? void 0 : prev.videoJitterMs) !== null && _ref6 !== void 0 ? _ref6 : null,
              streamingDurationMs: streamingDurationMs,
              frameCountHistory: _toConsumableArray(frameCountHistoryRef.current),
              debug: (_prev$debug = prev === null || prev === void 0 ? void 0 : prev.debug) !== null && _prev$debug !== void 0 ? _prev$debug : null
            };
          });
          return _context.a(2);
        case 4:
          if (!(rates === null)) {
            _context.n = 5;
            break;
          }
          return _context.a(2);
        case 5:
          downloadKbps = rates.downloadKbps;
          uploadKbps = rates.uploadKbps;
          videoBitrateKbps = rates.videoBitrateKbps;
          previousStatsRef.current = {
            timestamp: now,
            bytesReceived: totalInboundBytes,
            bytesSent: totalOutboundBytes,
            videoBytesReceived: videoInboundBytes,
            framesDecoded: (_ref7 = framesDecoded !== null && framesDecoded !== void 0 ? framesDecoded : previous.framesDecoded) !== null && _ref7 !== void 0 ? _ref7 : 0
          };
          setConnectionStats(function (prev) {
            var _prev$downloadKbps2, _prev$uploadKbps2, _prev$videoBitrateKbp2, _prev$resolution2, _ref8, _ref9, _ref0, _ref1, _prev$debug2;
            return {
              downloadKbps: Number.isFinite(downloadKbps) ? downloadKbps : (_prev$downloadKbps2 = prev === null || prev === void 0 ? void 0 : prev.downloadKbps) !== null && _prev$downloadKbps2 !== void 0 ? _prev$downloadKbps2 : null,
              uploadKbps: Number.isFinite(uploadKbps) ? uploadKbps : (_prev$uploadKbps2 = prev === null || prev === void 0 ? void 0 : prev.uploadKbps) !== null && _prev$uploadKbps2 !== void 0 ? _prev$uploadKbps2 : null,
              videoBitrateKbps: Number.isFinite(videoBitrateKbps) ? videoBitrateKbps : (_prev$videoBitrateKbp2 = prev === null || prev === void 0 ? void 0 : prev.videoBitrateKbps) !== null && _prev$videoBitrateKbp2 !== void 0 ? _prev$videoBitrateKbp2 : null,
              resolution: frameWidth !== null && frameHeight !== null ? {
                width: frameWidth,
                height: frameHeight
              } : (_prev$resolution2 = prev === null || prev === void 0 ? void 0 : prev.resolution) !== null && _prev$resolution2 !== void 0 ? _prev$resolution2 : null,
              latencyMs: (_ref8 = latencyMs !== null && latencyMs !== void 0 ? latencyMs : prev === null || prev === void 0 ? void 0 : prev.latencyMs) !== null && _ref8 !== void 0 ? _ref8 : null,
              fps: (_ref9 = fps !== null && fps !== void 0 ? fps : prev === null || prev === void 0 ? void 0 : prev.fps) !== null && _ref9 !== void 0 ? _ref9 : null,
              videoPacketsLost: (_ref0 = videoPacketsLost !== null && videoPacketsLost !== void 0 ? videoPacketsLost : prev === null || prev === void 0 ? void 0 : prev.videoPacketsLost) !== null && _ref0 !== void 0 ? _ref0 : null,
              videoJitterMs: (_ref1 = videoJitterMs !== null && videoJitterMs !== void 0 ? videoJitterMs : prev === null || prev === void 0 ? void 0 : prev.videoJitterMs) !== null && _ref1 !== void 0 ? _ref1 : null,
              streamingDurationMs: streamingDurationMs,
              frameCountHistory: _toConsumableArray(frameCountHistoryRef.current),
              debug: (_prev$debug2 = prev === null || prev === void 0 ? void 0 : prev.debug) !== null && _prev$debug2 !== void 0 ? _prev$debug2 : null
            };
          });
          _context.n = 7;
          break;
        case 6:
          _context.p = 6;
          _t = _context.v;
          console.warn("Failed to fetch WebRTC stats:", _t);
        case 7:
          return _context.a(2);
      }
    }, _callee, null, [[3, 6]]);
  })), [screenRef, setConnectionStats]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isStatsEnabledRef.current = isStatsEnabled;
    if (!isStatsEnabled) {
      if (statsIntervalRef.current !== null) {
        window.clearInterval(statsIntervalRef.current);
        statsIntervalRef.current = null;
      }
      previousStatsRef.current = null;
      return;
    }
    var tick = function tick() {
      collectConnectionStats()["catch"](function (error) {
        console.warn("Failed to update WebRTC stats:", error);
      });
    };
    tick();
    statsIntervalRef.current = window.setInterval(tick, 1000);
    return function () {
      if (statsIntervalRef.current !== null) {
        window.clearInterval(statsIntervalRef.current);
        statsIntervalRef.current = null;
      }
    };
  }, [collectConnectionStats, isStatsEnabled]);

  // resetConnectionStats — disconnect()'s teardown: clears the deltas so a
  // reconnect starts fresh instead of computing rates across the gap.
  var resetConnectionStats = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    previousStatsRef.current = null;
    frameCountHistoryRef.current = [];
    streamingStartTimeRef.current = null;
  }, []);
  return {
    streamingStartTimeRef: streamingStartTimeRef,
    resetConnectionStats: resetConnectionStats
  };
};

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/stick-input-state.js"
/*!***********************************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/stick-input-state.js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStickInputState: () => (/* binding */ useStickInputState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/gameflex/stream/remoteplay/service/gamepad.service */ "./src/webapp/src/app/gameflex/stream/remoteplay/service/gamepad.service.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/constants.js");
/* harmony import */ var _virtual_joystick_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./virtual-joystick-state */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/virtual-joystick-state.js");




var createStickHoldState = function createStickHoldState() {
  return {
    left: {
      x: {
        value: 0,
        expiry: 0
      },
      y: {
        value: 0,
        expiry: 0
      }
    },
    right: {
      x: {
        value: 0,
        expiry: 0
      },
      y: {
        value: 0,
        expiry: 0
      }
    }
  };
};
var useStickInputState = function useStickInputState() {
  var stickStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    leftStick: {
      x: 0,
      y: 0
    },
    rightStick: {
      x: 0,
      y: 0
    }
  });

  // Current virtual stick values (updated by mobile virtual joystick component)
  // Virtual stick state now uses global module, no longer uses local ref
  var keyboardLeftStickRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 0,
    y: 0
  });
  var stickHoldRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(createStickHoldState());
  var triggerStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    l2: 0,
    r2: 0
  });
  var mouseStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    isPointerLocked: false,
    velocityX: 0,
    velocityY: 0,
    lastUpdateTime: (0,_constants__WEBPACK_IMPORTED_MODULE_2__.getTimestamp)()
  });
  var applyMouseDecay = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var mouseState = mouseStateRef.current;
    var now = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.getTimestamp)();
    if (!mouseState.isPointerLocked && mouseState.velocityX === 0 && mouseState.velocityY === 0) {
      mouseState.lastUpdateTime = now;
      return;
    }
    var delta = Math.max(0, now - mouseState.lastUpdateTime);
    if (delta === 0) {
      return;
    }
    if (!mouseState.isPointerLocked) {
      mouseState.velocityX = 0;
      mouseState.velocityY = 0;
      mouseState.lastUpdateTime = now;
      return;
    }
    var decayFactor = Math.pow(0.5, delta / _constants__WEBPACK_IMPORTED_MODULE_2__.MOUSE_DECAY_HALF_LIFE_MS);
    mouseState.velocityX *= decayFactor;
    mouseState.velocityY *= decayFactor;
    if (Math.abs(mouseState.velocityX) < _constants__WEBPACK_IMPORTED_MODULE_2__.MOUSE_IDLE_THRESHOLD) {
      mouseState.velocityX = 0;
    }
    if (Math.abs(mouseState.velocityY) < _constants__WEBPACK_IMPORTED_MODULE_2__.MOUSE_IDLE_THRESHOLD) {
      mouseState.velocityY = 0;
    }
    mouseState.lastUpdateTime = now;
  }, []);
  var applyHold = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (stick, axis, value, now) {
    var hold = stickHoldRef.current[stick][axis];
    var absValue = Math.abs(value);
    var absHold = Math.abs(hold.value);
    if (absValue >= _constants__WEBPACK_IMPORTED_MODULE_2__.QUICK_HOLD_ACTIVATE) {
      hold.value = value;
      hold.expiry = now + _constants__WEBPACK_IMPORTED_MODULE_2__.QUICK_HOLD_DURATION_MS;
      return value;
    }
    if (absValue <= _constants__WEBPACK_IMPORTED_MODULE_2__.QUICK_HOLD_RELEASE_THRESHOLD) {
      if (hold.expiry > now && absHold >= _constants__WEBPACK_IMPORTED_MODULE_2__.QUICK_HOLD_ACTIVATE) {
        return hold.value;
      }
      hold.value = value;
      hold.expiry = now;
      return value;
    }
    hold.value = value;
    hold.expiry = now + _constants__WEBPACK_IMPORTED_MODULE_2__.QUICK_HOLD_DURATION_MS;
    return value;
  }, []);
  var applyRadialDeadzone = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (x, y) {
    var magnitude = Math.hypot(x, y);
    if (magnitude <= _constants__WEBPACK_IMPORTED_MODULE_2__.STICK_RADIAL_DEADZONE || magnitude === 0) {
      return {
        x: 0,
        y: 0
      };
    }
    var scaledMagnitude = Math.min(1, (magnitude - _constants__WEBPACK_IMPORTED_MODULE_2__.STICK_RADIAL_DEADZONE) / (1 - _constants__WEBPACK_IMPORTED_MODULE_2__.STICK_RADIAL_DEADZONE));
    var scale = scaledMagnitude / magnitude;
    return {
      x: x * scale,
      y: y * scale
    };
  }, []);
  var getNormalizedState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    applyMouseDecay();
    var _stickStateRef$curren = stickStateRef.current,
      leftStick = _stickStateRef$curren.leftStick,
      rightStick = _stickStateRef$curren.rightStick;
    var mouseState = mouseStateRef.current;
    var triggerState = triggerStateRef.current;
    var keyboardLeftStick = keyboardLeftStickRef.current;
    var now = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.getTimestamp)();
    var hasKeyboardLeftInput = keyboardLeftStick.x !== 0 || keyboardLeftStick.y !== 0;

    // Select left stick input source: keyboard > virtual stick > physical gamepad
    var useVirtualLeft = _virtual_joystick_state__WEBPACK_IMPORTED_MODULE_3__.virtualJoystickActiveState.left;
    var leftBase = useVirtualLeft ? _virtual_joystick_state__WEBPACK_IMPORTED_MODULE_3__.virtualStickState.leftStick : leftStick;
    var leftSource = hasKeyboardLeftInput ? keyboardLeftStick : leftBase;
    var leftRaw = {
      x: (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)(leftSource.x),
      y: (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)(leftSource.y)
    };

    // Select right stick input source: virtual stick > physical gamepad (+mouse)
    var useVirtualRight = _virtual_joystick_state__WEBPACK_IMPORTED_MODULE_3__.virtualJoystickActiveState.right;
    var rightGamepadRawBase = useVirtualRight ? _virtual_joystick_state__WEBPACK_IMPORTED_MODULE_3__.virtualStickState.rightStick : rightStick;
    var rightGamepadRaw = {
      x: (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)(rightGamepadRawBase.x),
      y: (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)(rightGamepadRawBase.y)
    };
    var hasMouseInput = mouseState.isPointerLocked || mouseState.velocityX !== 0 || mouseState.velocityY !== 0;
    var rightRaw = hasMouseInput ? {
      x: (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)(rightGamepadRaw.x + mouseState.velocityX),
      y: (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)(rightGamepadRaw.y + mouseState.velocityY)
    } : rightGamepadRaw;
    var leftDeadzone = applyRadialDeadzone(leftRaw.x, leftRaw.y);
    var rightDeadzone = applyRadialDeadzone(rightRaw.x, rightRaw.y);
    return {
      leftX: applyHold("left", "x", leftDeadzone.x, now),
      leftY: applyHold("left", "y", leftDeadzone.y, now),
      rightX: applyHold("right", "x", rightDeadzone.x, now),
      rightY: applyHold("right", "y", rightDeadzone.y, now),
      l2: (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp01)(triggerState.l2),
      r2: (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp01)(triggerState.r2)
    };
  }, [applyHold, applyMouseDecay, applyRadialDeadzone]);
  var snapshotGamepadAxes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (gamepad) {
    if (gamepad.axes.length >= 2) {
      var _gamepad$axes$Gamepad, _gamepad$axes$Gamepad2;
      stickStateRef.current.leftStick.x = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)((_gamepad$axes$Gamepad = gamepad.axes[_gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_1__.GamepadAxis.LeftStickX]) !== null && _gamepad$axes$Gamepad !== void 0 ? _gamepad$axes$Gamepad : 0);
      stickStateRef.current.leftStick.y = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)((_gamepad$axes$Gamepad2 = gamepad.axes[_gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_1__.GamepadAxis.LeftStickY]) !== null && _gamepad$axes$Gamepad2 !== void 0 ? _gamepad$axes$Gamepad2 : 0);
    }
    if (gamepad.axes.length >= 4) {
      var _gamepad$axes$Gamepad3, _gamepad$axes$Gamepad4;
      stickStateRef.current.rightStick.x = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)((_gamepad$axes$Gamepad3 = gamepad.axes[_gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_1__.GamepadAxis.RightStickX]) !== null && _gamepad$axes$Gamepad3 !== void 0 ? _gamepad$axes$Gamepad3 : 0);
      stickStateRef.current.rightStick.y = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)((_gamepad$axes$Gamepad4 = gamepad.axes[_gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_1__.GamepadAxis.RightStickY]) !== null && _gamepad$axes$Gamepad4 !== void 0 ? _gamepad$axes$Gamepad4 : 0);
    }
  }, []);
  var handleGamepadAxis = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (axisIndex, axisValue) {
    var value = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)(axisValue);
    if (axisIndex === _gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_1__.GamepadAxis.LeftStickX) {
      stickStateRef.current.leftStick.x = value;
    } else if (axisIndex === _gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_1__.GamepadAxis.LeftStickY) {
      stickStateRef.current.leftStick.y = value;
    } else if (axisIndex === _gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_1__.GamepadAxis.RightStickX) {
      stickStateRef.current.rightStick.x = value;
    } else if (axisIndex === _gameflex_stream_remoteplay_service_gamepad_service__WEBPACK_IMPORTED_MODULE_1__.GamepadAxis.RightStickY) {
      stickStateRef.current.rightStick.y = value;
    }
  }, []);
  var setPointerLock = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (isLocked) {
    var mouseState = mouseStateRef.current;
    mouseState.isPointerLocked = isLocked;
    mouseState.velocityX = 0;
    mouseState.velocityY = 0;
    mouseState.lastUpdateTime = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.getTimestamp)();
  }, []);
  var setMouseVelocity = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (x, y, timestamp) {
    var mouseState = mouseStateRef.current;
    mouseState.velocityX = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)(x);
    mouseState.velocityY = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)(y);
    mouseState.lastUpdateTime = timestamp !== null && timestamp !== void 0 ? timestamp : (0,_constants__WEBPACK_IMPORTED_MODULE_2__.getTimestamp)();
  }, []);
  var setKeyboardLeftStick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (x, y) {
    var keyboardStick = keyboardLeftStickRef.current;
    keyboardStick.x = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)(x);
    keyboardStick.y = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp)(y);
  }, []);
  var setTriggerPressure = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (trigger, value) {
    var clamped = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.clamp01)(value);
    var triggerState = triggerStateRef.current;
    triggerState[trigger] = clamped;
  }, []);
  var isPointerLocked = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return mouseStateRef.current.isPointerLocked;
  }, []);

  // setVirtualStick and setVirtualStickActive now use global module, local implementation no longer needed

  var reset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    stickStateRef.current.leftStick.x = 0;
    stickStateRef.current.leftStick.y = 0;
    stickStateRef.current.rightStick.x = 0;
    stickStateRef.current.rightStick.y = 0;
    stickHoldRef.current = createStickHoldState();
    var mouseState = mouseStateRef.current;
    mouseState.isPointerLocked = false;
    mouseState.velocityX = 0;
    mouseState.velocityY = 0;
    mouseState.lastUpdateTime = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.getTimestamp)();
    var keyboardStick = keyboardLeftStickRef.current;
    keyboardStick.x = 0;
    keyboardStick.y = 0;
    triggerStateRef.current.l2 = 0;
    triggerStateRef.current.r2 = 0;
  }, []);
  return {
    stickStateRef: stickStateRef,
    getNormalizedState: getNormalizedState,
    snapshotGamepadAxes: snapshotGamepadAxes,
    handleGamepadAxis: handleGamepadAxis,
    setPointerLock: setPointerLock,
    setMouseVelocity: setMouseVelocity,
    setKeyboardLeftStick: setKeyboardLeftStick,
    setTriggerPressure: setTriggerPressure,
    isPointerLocked: isPointerLocked,
    reset: reset
  };
};

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/use-mouse-right-stick.js"
/*!***************************************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/use-mouse-right-stick.js ***!
  \***************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMouseRightStick: () => (/* binding */ useMouseRightStick)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/constants.js");
/* harmony import */ var _gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/gameflex/shared/utils/log-store */ "./src/webapp/src/app/gameflex/shared/utils/log-store.js");



var useMouseRightStick = function useMouseRightStick(_ref) {
  var videoRef = _ref.videoRef,
    onPointerLockChange = _ref.onPointerLockChange,
    onMouseMove = _ref.onMouseMove;
  var cleanupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var tearDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
  }, []);
  var setup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    tearDown();
    var videoElement = videoRef.current;
    if (!videoElement) {
      console.warn("⚠️ Video element not found, cannot enable mouse control");
      onPointerLockChange(false);
      return;
    }
    var handleMouseDown = function handleMouseDown(event) {
      if (event.button === 0) {
        var _videoElement$focus;
        event.preventDefault();
        (_videoElement$focus = videoElement.focus) === null || _videoElement$focus === void 0 || _videoElement$focus.call(videoElement);
        if (document.pointerLockElement !== videoElement) {
          var _videoElement$request;
          (_videoElement$request = videoElement.requestPointerLock) === null || _videoElement$request === void 0 || _videoElement$request.call(videoElement);
        }
      }
    };
    var handleContextMenu = function handleContextMenu(event) {
      if (document.pointerLockElement === videoElement) {
        event.preventDefault();
      }
    };
    var handlePointerLockChange = function handlePointerLockChange() {
      var isLocked = document.pointerLockElement === videoElement;
      onPointerLockChange(isLocked);
    };
    var handlePointerLockError = function handlePointerLockError(event) {
      console.warn("⚠️ Pointer Lock failed to activate:", event);
      onPointerLockChange(false);
    };
    var handleMouseMove = function handleMouseMove(event) {
      if (document.pointerLockElement !== videoElement) {
        return;
      }
      var now = (0,_constants__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)();
      var nextX = (0,_constants__WEBPACK_IMPORTED_MODULE_1__.clamp)(event.movementX * _constants__WEBPACK_IMPORTED_MODULE_1__.MOUSE_SENSITIVITY);
      var nextY = (0,_constants__WEBPACK_IMPORTED_MODULE_1__.clamp)(event.movementY * _constants__WEBPACK_IMPORTED_MODULE_1__.MOUSE_SENSITIVITY);
      onMouseMove(nextX, nextY, now);
    };
    var handleWindowBlur = function handleWindowBlur() {
      if (document.pointerLockElement === videoElement) {
        var _document$exitPointer, _document;
        (_document$exitPointer = (_document = document).exitPointerLock) === null || _document$exitPointer === void 0 || _document$exitPointer.call(_document);
      } else {
        onPointerLockChange(false);
      }
    };
    videoElement.addEventListener("mousedown", handleMouseDown);
    videoElement.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("pointerlockchange", handlePointerLockChange);
    document.addEventListener("pointerlockerror", handlePointerLockError);
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("blur", handleWindowBlur);
    cleanupRef.current = function () {
      videoElement.removeEventListener("mousedown", handleMouseDown);
      videoElement.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("pointerlockchange", handlePointerLockChange);
      document.removeEventListener("pointerlockerror", handlePointerLockError);
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("blur", handleWindowBlur);
      if (document.pointerLockElement === videoElement) {
        var _document$exitPointer2, _document2;
        (_document$exitPointer2 = (_document2 = document).exitPointerLock) === null || _document$exitPointer2 === void 0 || _document$exitPointer2.call(_document2);
      }
      onPointerLockChange(false);
    };
    onPointerLockChange(false);
    (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_2__.debugTrace)("✅ Mouse control enabled (right stick emulation)");
  }, [onPointerLockChange, onMouseMove, tearDown, videoRef]);
  return {
    setup: setup,
    tearDown: tearDown
  };
};

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/virtual-joystick-state.js"
/*!****************************************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-streaming-connection/virtual-joystick-state.js ***!
  \****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setVirtualStick: () => (/* binding */ setVirtualStick),
/* harmony export */   setVirtualStickActive: () => (/* binding */ setVirtualStickActive),
/* harmony export */   virtualJoystickActiveState: () => (/* binding */ virtualJoystickActiveState),
/* harmony export */   virtualStickState: () => (/* binding */ virtualStickState)
/* harmony export */ });
// Global virtual joystick state (not a React Hook, ensures all components share the same state)

// Global virtual joystick state
var virtualStickState = {
  leftStick: {
    x: 0,
    y: 0
  },
  rightStick: {
    x: 0,
    y: 0
  }
};

// Whether the virtual joystick is active
var virtualJoystickActiveState = {
  left: false,
  right: false
};

// Set virtual joystick value
function setVirtualStick(stick, x, y) {
  var target = stick === "left" ? virtualStickState.leftStick : virtualStickState.rightStick;
  target.x = Math.max(-1, Math.min(1, x));
  target.y = Math.max(-1, Math.min(1, y));
}

// Set virtual joystick active state
function setVirtualStickActive(stick, active) {
  if (stick === "left") {
    virtualJoystickActiveState.left = active;
  } else {
    virtualJoystickActiveState.right = active;
  }
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/libs/keyboard-mapping.js"
/*!********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/libs/keyboard-mapping.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createKeyboardHandler: () => (/* binding */ createKeyboardHandler)
/* harmony export */ });
/* harmony import */ var _types_controller_mapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/types/controller-mapping */ "./src/webapp/src/app/types/controller-mapping.js");
/* harmony import */ var _gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/gameflex/shared/utils/log-store */ "./src/webapp/src/app/gameflex/shared/utils/log-store.js");
/* harmony import */ var _gameflex_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/gameflex/libs/gameInput.js */ "./src/webapp/src/app/gameflex/libs/gameInput.js");




// Unmapped keys are logged at most once per distinct key — holding a
// movement key generates OS key-repeat events that would otherwise flood
// the trace on every repeat.
var loggedUnmappedKeys = new Set();

// Skeleton's global spatial navigation (skeleton.js's useKeyboard →
// navigateFocus) listens on window and moves focus onto the menu buttons
// on every arrow press. Streaming pages own the arrows: they belong to the
// game, never to the UI (see the stopPropagation in handleKeyDown).
var NAV_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

/**
 * Keyboard event handler
 */

function createKeyboardHandler(onButtonPress) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var onLeftStickChange = options.onLeftStickChange;
  var keyboardMapping = (0,_types_controller_mapping__WEBPACK_IMPORTED_MODULE_0__.getKeyboardToButtonMapping)();
  var leftStickKeyMap = (0,_types_controller_mapping__WEBPACK_IMPORTED_MODULE_0__.getLeftStickKeyVectorMap)();
  var pressedKeys = new Set();
  var activeLeftStickKeys = new Set();
  var refreshKeyboardMapping = function refreshKeyboardMapping(mappings) {
    keyboardMapping = (0,_types_controller_mapping__WEBPACK_IMPORTED_MODULE_0__.getKeyboardToButtonMapping)(mappings !== null && mappings !== void 0 ? mappings : undefined);
    leftStickKeyMap = (0,_types_controller_mapping__WEBPACK_IMPORTED_MODULE_0__.getLeftStickKeyVectorMap)(mappings !== null && mappings !== void 0 ? mappings : undefined);
  };
  var unsubscribeMappingChange = (0,_types_controller_mapping__WEBPACK_IMPORTED_MODULE_0__.subscribeControllerMappings)(function (mappings) {
    refreshKeyboardMapping(mappings);
  });
  var handleStorageChange = function handleStorageChange(event) {
    if (event.key && event.key !== _types_controller_mapping__WEBPACK_IMPORTED_MODULE_0__.CONTROLLER_MAPPING_STORAGE_KEY) {
      return;
    }
    refreshKeyboardMapping();
  };
  if (typeof window !== "undefined") {
    window.addEventListener("storage", handleStorageChange);
  }
  var recomputeLeftStick = function recomputeLeftStick() {
    if (!onLeftStickChange) {
      return;
    }
    var x = 0;
    var y = 0;
    activeLeftStickKeys.forEach(function (key) {
      var vector = leftStickKeyMap[key];
      if (vector) {
        x += vector.x;
        y += vector.y;
      }
    });
    if (x !== 0 || y !== 0) {
      var magnitude = Math.hypot(x, y);
      if (magnitude > 1) {
        x /= magnitude;
        y /= magnitude;
      }
    }
    onLeftStickChange(x, y);
  };
  var handleKeyDown = function handleKeyDown(event) {
    // Ni une touche FABRIQUÉE — le pont manette-clavier de Skeleton, qui
    // navigue dans l'interface : ses flèches devenaient ici un stick tenu
    // sans relâchement —, ni une touche du menu ouvert, à qui reviennent
    // les flèches et Entrée (#407, #408).
    if (!event.isTrusted || (0,_gameflex_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_2__.isGameInputSuspended)()) {
      return;
    }
    refreshKeyboardMapping();

    // Skip keyboard events when an input or textarea is focused (except Escape)
    var activeElement = document.activeElement;
    var isInputFocused = activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA" || activeElement.isContentEditable);

    // Always handle Escape
    if (event.key === "Escape" || event.code === "Escape") {
      if (isInputFocused && activeElement instanceof HTMLElement) {
        activeElement.blur();
      }
    } else if (isInputFocused) {
      // Other keys are ignored when an input is focused
      return;
    }

    // This handler runs in the document CAPTURE phase — stopping the
    // arrows here kills them before they can reach Skeleton's window-
    // level spatial navigation, for real keyboard arrows AND for
    // Skeleton.useGamepad's synthetic keydowns (a physical gamepad's
    // d-pad/left stick) alike: in a game page they must never move
    // focus onto the menu buttons.
    if (NAV_KEYS.includes(event.key)) {
      event.stopPropagation();
    }

    // Prevent default browser behaviour for navigational keys
    var keyCode = event.code || event.key;
    if (keyboardMapping[keyCode]) {
      if (["Space", "Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(keyCode)) {
        event.preventDefault();
      }
    }
    if (leftStickKeyMap[keyCode]) {
      if (!activeLeftStickKeys.has(keyCode)) {
        activeLeftStickKeys.add(keyCode);
        recomputeLeftStick();
      }
    }

    // Handle key press
    var buttonName = keyboardMapping[keyCode];
    if (buttonName) {
      if (!pressedKeys.has(keyCode)) {
        pressedKeys.add(keyCode);
        (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_1__.debugTrace)("⌨️ Key down:", keyCode, "->", buttonName, "press");
        void onButtonPress(buttonName, "press");
      }
    } else if (!loggedUnmappedKeys.has(keyCode)) {
      // Log unmapped keys for debugging (once per distinct key)
      loggedUnmappedKeys.add(keyCode);
      (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_1__.debugTrace)("⌨️ Unmapped key:", keyCode, event.key);
    }
  };
  var handleKeyUp = function handleKeyUp(event) {
    refreshKeyboardMapping();
    var keyCode = event.code || event.key;
    var buttonName = keyboardMapping[keyCode];
    if (buttonName && pressedKeys.has(keyCode)) {
      pressedKeys["delete"](keyCode);
      (0,_gameflex_shared_utils_log_store__WEBPACK_IMPORTED_MODULE_1__.debugTrace)("⌨️ Key up:", keyCode, "->", buttonName, "release");
      void onButtonPress(buttonName, "release");
    }
    if (leftStickKeyMap[keyCode] && activeLeftStickKeys.has(keyCode)) {
      activeLeftStickKeys["delete"](keyCode);
      recomputeLeftStick();
    }
  };
  var handleBlur = function handleBlur() {
    // Release all pressed buttons
    pressedKeys.forEach(function (keyCode) {
      var buttonName = keyboardMapping[keyCode];
      if (buttonName) {
        void onButtonPress(buttonName, "release");
      }
    });
    pressedKeys.clear();
    if (activeLeftStickKeys.size > 0) {
      activeLeftStickKeys.clear();
      recomputeLeftStick();
    }
  };

  // Use capture mode so keyboard events are caught even when a video element is focused
  document.addEventListener("keydown", handleKeyDown, true);
  document.addEventListener("keyup", handleKeyUp, true);
  window.addEventListener("blur", handleBlur);
  // Le menu qui s'ouvre relâche ce que le clavier tenait, comme une perte
  // du focus.
  var stopListening = (0,_gameflex_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_2__.onGameInputSuspension)(function (suspended) {
    return suspended && handleBlur();
  });

  // Return cleanup function
  return function () {
    document.removeEventListener("keydown", handleKeyDown, true);
    document.removeEventListener("keyup", handleKeyUp, true);
    window.removeEventListener("blur", handleBlur);
    stopListening();
    unsubscribeMappingChange();
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", handleStorageChange);
    }
    // Release all pressed buttons
    pressedKeys.forEach(function (keyCode) {
      var buttonName = keyboardMapping[keyCode];
      if (buttonName) {
        void onButtonPress(buttonName, "release");
      }
    });
    pressedKeys.clear();
    if (activeLeftStickKeys.size > 0) {
      activeLeftStickKeys.clear();
      recomputeLeftStick();
    } else if (onLeftStickChange) {
      onLeftStickChange(0, 0);
    }
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/service/rumble.service.js"
/*!*********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/service/rumble.service.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyControllerRumbleToGamepads: () => (/* binding */ applyControllerRumbleToGamepads)
/* harmony export */ });
/* harmony import */ var _libs_rumble_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/rumble.js */ "./src/webapp/src/app/gameflex/libs/rumble.js");


// L'ADAPTATEUR PS5 — la plage de la console, et rien d'autre.
//
// Ce fichier portait sa PROPRE implémentation complète : magasin de
// réglages (`controller_rumble_enabled`/`controller_rumble_strength`, avec
// ses écouteurs), résolution d'actionneur, repli téléphone. Tout ça existait
// déjà dans `libs/rumble.js` pour le rétro, à quelques divergences près que
// personne n'avait voulues.
//
// Deux conséquences visibles, avant le 2026-09-09 :
//
//   - l'interrupteur de la page Manette écrivait dans l'AUTRE magasin, donc
//     il ne pilotait rien côté PS5. Ça ne se voyait pas : le défaut d'ici
//     était « allumé » ;
//   - une manette ancienne, qui n'expose que `hapticActuators.pulse`,
//     vibrait sur PS5 et pas sur PS1 — ce fichier connaissait cette API,
//     l'autre non.
//
// Il ne reste donc que la conversion : la PS5 compte de 0 à 255, le moteur
// partagé prend des magnitudes entre 0 et 1.

// La durée d'un effet PS5. La console renvoie une nouvelle intensité très
// souvent pendant une secousse ; 80 ms couvre l'intervalle sans traîner.
var PS5_EFFECT_MS = 80;

/**
 * Appliquer une vibration reçue de la PS5.
 *
 * @param {object} event `{left, right}` ou `{rawLeft, rawRight}`, 0..255.
 * @returns {boolean} vrai si quelque chose a effectivement vibré.
 */
function applyControllerRumbleToGamepads(event) {
  var _ref, _event$left, _ref2, _event$right, _options$duration, _options$duration2;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_libs_rumble_js__WEBPACK_IMPORTED_MODULE_0__.applyRumble)({
    strong: ((_ref = (_event$left = event.left) !== null && _event$left !== void 0 ? _event$left : event.rawLeft) !== null && _ref !== void 0 ? _ref : 0) / 255,
    weak: ((_ref2 = (_event$right = event.right) !== null && _event$right !== void 0 ? _event$right : event.rawRight) !== null && _ref2 !== void 0 ? _ref2 : 0) / 255,
    durationMs: (_options$duration = options.duration) !== null && _options$duration !== void 0 ? _options$duration : PS5_EFFECT_MS,
    gamepadIndex: typeof options.gamepadIndex === "number" ? options.gamepadIndex : null,
    // TOUTES les manettes, pas seulement la première : c'est ce que ce
    // chemin faisait, et le changer serait modifier le comportement
    // d'une plateforme que personne n'a demandé de changer.
    targets: "all",
    deviceVibrationMs: (_options$duration2 = options.duration) !== null && _options$duration2 !== void 0 ? _options$duration2 : PS5_EFFECT_MS
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/service/viewer.service.js"
/*!*********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/service/viewer.service.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewerService: () => (/* binding */ viewerService)
/* harmony export */ });
/* harmony import */ var _service_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/service/api-client */ "./src/webapp/src/app/service/api-client.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
;

/**
 * Viewer service — watch-only viewers of an already-running streaming
 * session (someone else's console). The viewer itself attaches to
 * gatewaywebrtc; remoteplay only confirms the stream is there. No controller
 * feedback, no Takion/session lifecycle calls — the owner's session is never
 * touched.
 */
var viewerService = {
  /**
   * Ask remoteplay to confirm a watch-only viewer for an active session —
   * the reply names the gateway stream to attach to.
   */
  createOffer: function () {
    var _createOffer = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(sessionId, codec) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            return _context.a(2, (0,_service_api_client__WEBPACK_IMPORTED_MODULE_0__.apiRequest)("/remoteplay/webrtc/viewer/offer", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                sessionId: sessionId,
                codec: codec
              })
            }));
        }
      }, _callee);
    }));
    function createOffer(_x, _x2) {
      return _createOffer.apply(this, arguments);
    }
    return createOffer;
  }()
};

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-adaptive-quality.js"
/*!*********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/hooks/use-adaptive-quality.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAdaptiveQuality: () => (/* binding */ useAdaptiveQuality)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_adaptive_quality_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/adaptive-quality.js */ "./src/webapp/src/app/gameflex/stream/libs/adaptive-quality.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
;


// LE DOUBLE FLUX DE LA PAGE (chantier 31) — le mode choisi dans la catégorie
// « Vidéo » du menu de la partie, appliqué au spectateur de la page :
//
//   auto     la page mesure son réseau toutes les deux secondes et bascule
//            (libs/adaptive-quality.js) ;
//   current  le flux de la partie, tel que son propriétaire l'a lancé ;
//   low      le 540p à 30.
//
// `quality` — ce que la passerelle a dit sur le canal « control » :
// `{available, current, want}`. Sans second flux (`available` faux), rien ne
// se fait : le menu ne propose d'ailleurs rien.
//
// `paused` — pas avant le jeu (chantier 35) : l'image tenue de l'intro arrive
// une fois par seconde, et ses relevés compteraient chacun pour un gel — le
// spectateur descendrait en 540p avant d'avoir vu une image du jeu. Les
// relevés repartent de zéro quand il y entre.
function useAdaptiveQuality(_ref) {
  var screenRef = _ref.screenRef,
    mode = _ref.mode,
    quality = _ref.quality,
    _ref$paused = _ref.paused,
    paused = _ref$paused === void 0 ? false : _ref$paused;
  var available = !!(quality !== null && quality !== void 0 && quality.available);
  var currentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((quality === null || quality === void 0 ? void 0 : quality.current) || "hd");
  currentRef.current = (quality === null || quality === void 0 ? void 0 : quality.current) || "hd";

  // Un choix à la main fixe le flux, et arrête la bascule.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!available) {
      return;
    }
    if (mode === "current" && (quality === null || quality === void 0 ? void 0 : quality.want) !== "hd") {
      var _screenRef$current;
      (_screenRef$current = screenRef.current) === null || _screenRef$current === void 0 || _screenRef$current.setQuality("hd");
    }
    if (mode === "low" && (quality === null || quality === void 0 ? void 0 : quality.want) !== "sd") {
      var _screenRef$current2;
      (_screenRef$current2 = screenRef.current) === null || _screenRef$current2 === void 0 || _screenRef$current2.setQuality("sd");
    }
  }, [mode, available, quality === null || quality === void 0 ? void 0 : quality.want, screenRef]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (mode !== "auto" || !available || paused) {
      return undefined;
    }
    var state = (0,_libs_adaptive_quality_js__WEBPACK_IMPORTED_MODULE_1__.createAdaptiveQuality)();
    var counters = null;
    var intervalId = window.setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _screenRef$current3;
      var report, sampled, step, _screenRef$current4;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return (_screenRef$current3 = screenRef.current) === null || _screenRef$current3 === void 0 ? void 0 : _screenRef$current3.getRawStats();
          case 1:
            report = _context.v;
            if (report) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            sampled = (0,_libs_adaptive_quality_js__WEBPACK_IMPORTED_MODULE_1__.readVideoHealth)(report, counters);
            counters = sampled.counters;
            if (sampled.reading) {
              _context.n = 3;
              break;
            }
            return _context.a(2);
          case 3:
            step = (0,_libs_adaptive_quality_js__WEBPACK_IMPORTED_MODULE_1__.adaptQuality)(state, sampled.reading, currentRef.current, Date.now());
            state = step.state;
            if (step.want) {
              (_screenRef$current4 = screenRef.current) === null || _screenRef$current4 === void 0 || _screenRef$current4.setQuality(step.want);
            }
          case 4:
            return _context.a(2);
        }
      }, _callee);
    })), _libs_adaptive_quality_js__WEBPACK_IMPORTED_MODULE_1__.SAMPLE_MS);
    return function () {
      return window.clearInterval(intervalId);
    };
  }, [mode, available, paused, screenRef]);
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-launch-progress.js"
/*!********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/hooks/use-launch-progress.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLaunchProgress: () => (/* binding */ useLaunchProgress),
/* harmony export */   withStep: () => (/* binding */ withStep)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/kernelChannel.js */ "./src/webapp/src/app/gameflex/libs/kernelChannel.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;


// useLaunchProgress — ce que le serveur a fait pendant qu'on attendait (#191).
//
// Entre le clic sur « jouer » et la première image, une dizaine d'étapes se
// déroulent côté serveur — dont l'attente qu'un conteneur réponde, jusqu'à
// quatre-vingt-dix secondes.
//
// UN SUJET DU CENTRE DE MESSAGES, `launch/<launchId>`. Le lancement lui-même
// est une commande sur le même canal : la page des jeux reçoit ses étapes en
// direct, puis navigue ici avec le `launchId` que le kernel a frappé. Le
// kernel garde l'histoire une minute après la fin et la REJOUE à
// l'abonnement — une page qui arrive après la dernière étape, ou qu'on
// rafraîchit, voit tout le lancement.
//
// Le téléphone rend un `launchId` (pour le fond de l'intro, chantier 35) mais
// ne sert pas ce sujet : sa progression passe par son flux de nouvelles
// (`deviceStream.js`), et l'abonnement refusé laisse la liste vide.
/**
 * withStep — la liste des étapes avec une de plus. Une étape republiée à la
 * suite remplace la dernière au lieu de s'empiler : la progression d'un
 * déballage (game.unpacking, « 40 % », « 50 % »…) tient sur une ligne.
 *
 * @param {Array} steps les étapes déjà reçues
 * @param {object} entry la nouvelle
 * @returns {Array} la liste suivante
 */
function withStep(steps, entry) {
  var last = steps[steps.length - 1];
  return last && last.step === entry.step && last.state !== "error" ? [].concat(_toConsumableArray(steps.slice(0, -1)), [entry]) : [].concat(_toConsumableArray(steps), [entry]);
}
function useLaunchProgress(launchId, token) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    steps = _useState2[0],
    setSteps = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    failure = _useState4[0],
    setFailure = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    sessionId = _useState6[0],
    setSessionId = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setSteps([]);
    setFailure(null);
    setSessionId(null);
  }, [launchId, token]);
  var channel = (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_1__.useKernelChannel)(launchId && (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_1__.kernelReachable)(token) ? (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_1__.kernelTarget)(null, token) : null);
  (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_1__.useKernelTopic)(channel, launchId ? "launch/".concat(launchId) : null, null, function (message) {
    if (!message) {
      return;
    }

    // L'ORDRE D'ARRIVÉE EST L'ORDRE DES ÉTAPES : le rejeu de l'histoire
    // se fait avant toute nouvelle publication. Seule une étape republiée
    // à la suite — une progression — remplace la précédente (withStep).
    setSteps(function (previous) {
      return withStep(previous, {
        step: message.step,
        detail: message.detail || null,
        state: message.type === "failed" ? "error" : "done",
        at: message.at || null
      });
    });
    if (message.type === "failed") {
      setFailure({
        step: message.step,
        error: message.error || null
      });
    }
    if (message.type === "done" && message.sessionId) {
      setSessionId(message.sessionId);
    }
  });
  return {
    steps: steps,
    failure: failure,
    sessionId: sessionId
  };
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-touch-screen.js"
/*!*****************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/hooks/use-touch-screen.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTouchScreen: () => (/* binding */ useTouchScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// L'ÉCRAN TACTILE — la Nintendo DS, et toute console dont le core lit
// RETRO_DEVICE_POINTER.
//
// UN SEUL EXEMPLAIRE POUR LES DEUX PLATEFORMES. Le serveur et le téléphone
// font tourner le même moteur, mais le doigt ne leur arrive pas par le même
// chemin ; la question qu'on leur pose, elle, est la même : « le doigt est
// là ». Ce hook ne fait que la poser ; c'est le hook de plateforme qui fournit
// `send` et sait à qui parler.
//
// ON N'ESSAIE PAS DE TROUVER L'ÉCRAN DU BAS. Les coordonnées portent sur
// TOUTE l'image, dans la convention de libretro (-1..1, centre à 0), et c'est
// le core qui sait où se trouve sa zone tactile selon la disposition qu'il
// applique. Deviner à sa place voudrait dire refaire ce calcul pour chaque
// core, chaque disposition, et se tromper à chaque changement de l'un ou de
// l'autre. Un stylet posé hors de la zone reste hors d'elle, ce qui est le
// comportement de la vraie console.
//
// Les écouteurs sont posés sur le <video> lui-même, pas sur un calque
// au-dessus, pour une raison précise : `offsetX`/`offsetY` sont exprimés dans
// le repère PROPRE de l'élément visé. L'écran de jeu est parfois tourné de
// 90° (le mode paysage forcé sur un téléphone tenu droit), et une mesure
// prise dans le repère de la page y serait fausse d'un quart de tour.
//
// screenRef — le manche de GatewayWebRTC ; son `videoElement` est un getter,
// donc toujours à jour.
// enabled — cette console a un écran tactile ET on tient la manette.
// send(x, y, pressed) — le dernier mètre, propre à la plateforme.
function useTouchScreen(_ref) {
  var screenRef = _ref.screenRef,
    enabled = _ref.enabled,
    send = _ref.send;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled || !send) {
      return undefined;
    }
    var video = null;
    var finder = null;
    var detach = null;
    // Le doigt en cours. `id` est celui du pointeur, pour ignorer un
    // second doigt sans se laisser voler le premier.
    var held = {
      id: null,
      x: 0,
      y: 0
    };

    // Où le doigt tombe dans l'image, en coordonnées libretro.
    //
    // Le <video> est en `object-fit: contain` : l'image est centrée dans
    // l'élément avec des bandes noires, et un clic sur une bande n'est
    // pas un clic sur l'image. Sans ce calcul, tout serait décalé dès que
    // les proportions du jeu et celles de la fenêtre diffèrent — c'est-à-
    // dire presque toujours, la DS étant deux écrans empilés.
    var locate = function locate(event) {
      var boxWidth = video.clientWidth;
      var boxHeight = video.clientHeight;
      var frameWidth = video.videoWidth;
      var frameHeight = video.videoHeight;
      if (!boxWidth || !boxHeight || !frameWidth || !frameHeight) {
        return null;
      }
      var scale = Math.min(boxWidth / frameWidth, boxHeight / frameHeight);
      var drawnWidth = frameWidth * scale;
      var drawnHeight = frameHeight * scale;
      var across = (event.offsetX - (boxWidth - drawnWidth) / 2) / drawnWidth;
      var down = (event.offsetY - (boxHeight - drawnHeight) / 2) / drawnHeight;
      return {
        x: Math.max(-1, Math.min(1, across * 2 - 1)),
        y: Math.max(-1, Math.min(1, down * 2 - 1)),
        inside: across >= 0 && across <= 1 && down >= 0 && down <= 1
      };
    };
    var onDown = function onDown(event) {
      if (held.id !== null) {
        return;
      }
      var at = locate(event);
      // Une bande noire n'est pas l'écran : ne rien envoyer, et ne pas
      // capturer le pointeur non plus, pour que le reste de la page
      // continue de le recevoir.
      if (!at || !at.inside) {
        return;
      }
      held.id = event.pointerId;
      held.x = at.x;
      held.y = at.y;
      // La capture garde le doigt à nous même s'il sort du cadre en
      // glissant — sans elle, un relâchement hors de l'élément ne nous
      // parvient jamais et le stylet reste posé pour toujours.
      try {
        video.setPointerCapture(event.pointerId);
      } catch (_unused) {
        // Un navigateur qui refuse la capture ne casse rien : on perd
        // seulement les relâchements hors cadre, que pointercancel
        // rattrape la plupart du temps.
      }
      event.preventDefault();
      send(at.x, at.y, true);
    };
    var onMove = function onMove(event) {
      if (held.id !== event.pointerId) {
        return;
      }
      var at = locate(event);
      if (!at) {
        return;
      }
      // Volontairement PAS de test `inside` ici : un doigt qui glisse au
      // bord reste posé, borné au bord — comme un stylet qu'on pousse
      // contre le cadre de la console. Le lever parce qu'il sort d'un
      // pixel serait une rupture de trait au pire moment.
      held.x = at.x;
      held.y = at.y;
      event.preventDefault();
      send(at.x, at.y, true);
    };
    var onUp = function onUp(event) {
      if (held.id !== event.pointerId) {
        return;
      }
      held.id = null;
      try {
        video.releasePointerCapture(event.pointerId);
      } catch (_unused2) {
        // Déjà relâchée (pointercancel l'a fait) — rien à faire.
      }
      event.preventDefault();
      // La DERNIÈRE position, pas le centre : un core lit souvent X/Y
      // une image après PRESSED, et remettre à zéro ici ferait un clic
      // au milieu de l'écran juste avant de lever le doigt.
      send(held.x, held.y, false);
    };
    var attach = function attach(element) {
      video = element;
      // Sans ça, le navigateur préempte le geste pour faire défiler ou
      // zoomer, et le stylet ne reçoit qu'un `pointercancel`.
      var previousTouchAction = video.style.touchAction;
      video.style.touchAction = "none";
      video.addEventListener("pointerdown", onDown);
      video.addEventListener("pointermove", onMove);
      video.addEventListener("pointerup", onUp);
      video.addEventListener("pointercancel", onUp);
      detach = function detach() {
        video.style.touchAction = previousTouchAction;
        video.removeEventListener("pointerdown", onDown);
        video.removeEventListener("pointermove", onMove);
        video.removeEventListener("pointerup", onUp);
        video.removeEventListener("pointercancel", onUp);
        // Ne jamais laisser un stylet posé derrière soi : le core
        // garderait l'appui pour le restant de la partie.
        if (held.id !== null) {
          send(held.x, held.y, false);
        }
      };
    };

    // Le <video> existe dès le premier rendu de GatewayWebRTC, mais ce
    // hook ne le lit qu'à travers un ref : selon l'ordre de montage, il
    // peut ne pas encore être là. On regarde jusqu'à ce qu'il le soit,
    // plutôt que de supposer un ordre qu'un remaniement changerait sans
    // prévenir.
    var _look = function look() {
      var _screenRef$current;
      var element = screenRef === null || screenRef === void 0 || (_screenRef$current = screenRef.current) === null || _screenRef$current === void 0 ? void 0 : _screenRef$current.videoElement;
      if (element) {
        attach(element);
        return;
      }
      finder = setTimeout(_look, 200);
    };
    _look();
    return function () {
      var _detach;
      clearTimeout(finder);
      (_detach = detach) === null || _detach === void 0 || _detach();
    };
  }, [enabled, send, screenRef]);
}

/***/ },

/***/ "./src/webapp/src/app/types/controller-mapping.js"
/*!********************************************************!*\
  !*** ./src/webapp/src/app/types/controller-mapping.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONTROLLER_MAPPING_STORAGE_KEY: () => (/* binding */ CONTROLLER_MAPPING_STORAGE_KEY),
/* harmony export */   getDefaultControllerMappings: () => (/* binding */ getDefaultControllerMappings),
/* harmony export */   getKeyboardToButtonMapping: () => (/* binding */ getKeyboardToButtonMapping),
/* harmony export */   getLeftStickKeyVectorMap: () => (/* binding */ getLeftStickKeyVectorMap),
/* harmony export */   saveControllerMappings: () => (/* binding */ saveControllerMappings),
/* harmony export */   subscribeControllerMappings: () => (/* binding */ subscribeControllerMappings)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
var CONTROLLER_MAPPING_STORAGE_KEY = "controller_mappings";
var CONTROLLER_MAPPING_CHANGED_EVENT = "controller-mapping-changed";
var CONTROLLER_BUTTONS = ["CROSS", "CIRCLE", "TRIANGLE", "SQUARE", "L1", "R1", "L2", "R2", "L3", "R3", "DPAD_UP", "DPAD_DOWN", "DPAD_LEFT", "DPAD_RIGHT", "DPAD_UP_LEFT", "DPAD_UP_RIGHT", "DPAD_DOWN_LEFT", "DPAD_DOWN_RIGHT", "OPTIONS", "SHARE", "TOUCHPAD", "PS"];
var DEFAULT_BUTTON_MAPPINGS = {
  CROSS: {
    button: "CROSS",
    key: "KeyZ"
  },
  CIRCLE: {
    button: "CIRCLE",
    key: "KeyX"
  },
  TRIANGLE: {
    button: "TRIANGLE",
    key: "KeyC"
  },
  SQUARE: {
    button: "SQUARE",
    key: "KeyV"
  },
  L1: {
    button: "L1",
    key: "KeyQ"
  },
  R1: {
    button: "R1",
    key: "KeyW"
  },
  L2: {
    button: "L2",
    key: "KeyE"
  },
  R2: {
    button: "R2",
    key: "KeyR"
  },
  L3: {
    button: "L3",
    key: "KeyA"
  },
  R3: {
    button: "R3",
    key: "KeyS"
  },
  DPAD_UP: {
    button: "DPAD_UP",
    key: "Numpad8"
  },
  DPAD_DOWN: {
    button: "DPAD_DOWN",
    key: "Numpad2"
  },
  DPAD_LEFT: {
    button: "DPAD_LEFT",
    key: "Numpad4"
  },
  DPAD_RIGHT: {
    button: "DPAD_RIGHT",
    key: "Numpad6"
  },
  DPAD_UP_LEFT: {
    button: "DPAD_UP_LEFT",
    key: "Numpad7"
  },
  DPAD_UP_RIGHT: {
    button: "DPAD_UP_RIGHT",
    key: "Numpad9"
  },
  DPAD_DOWN_LEFT: {
    button: "DPAD_DOWN_LEFT",
    key: "Numpad1"
  },
  DPAD_DOWN_RIGHT: {
    button: "DPAD_DOWN_RIGHT",
    key: "Numpad3"
  },
  OPTIONS: {
    button: "OPTIONS",
    key: "KeyP"
  },
  SHARE: {
    button: "SHARE",
    key: "KeyO"
  },
  TOUCHPAD: {
    button: "TOUCHPAD",
    key: "KeyI"
  },
  PS: {
    button: "PS",
    key: "KeyU"
  }
};
var LEFT_STICK_DIRECTIONS = ["UP", "DOWN", "LEFT", "RIGHT"];
var DEFAULT_LEFT_STICK_MAPPING = {
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight"
};
var DPAD_STREAMING_NAME_MAP = {
  DPAD_UP: "UP",
  DPAD_DOWN: "DOWN",
  DPAD_LEFT: "LEFT",
  DPAD_RIGHT: "RIGHT",
  DPAD_UP_LEFT: "UP_LEFT",
  DPAD_UP_RIGHT: "UP_RIGHT",
  DPAD_DOWN_LEFT: "DOWN_LEFT",
  DPAD_DOWN_RIGHT: "DOWN_RIGHT",
  CROSS: "CROSS",
  CIRCLE: "CIRCLE",
  TRIANGLE: "TRIANGLE",
  SQUARE: "SQUARE",
  L1: "L1",
  R1: "R1",
  L2: "L2",
  R2: "R2",
  L3: "L3",
  R3: "R3",
  OPTIONS: "OPTIONS",
  SHARE: "SHARE",
  TOUCHPAD: "TOUCHPAD",
  PS: "PS"
};

// Derived from DEFAULT_BUTTON_MAPPINGS (the single source of truth for
// default key bindings) rather than hand-duplicated. It used to be a
// separately-authored literal here, and it silently drifted out of sync
// with DEFAULT_BUTTON_MAPPINGS (e.g. this table said "Space" pressed CROSS
// while DEFAULT_BUTTON_MAPPINGS said CROSS's default key was "Enter") — the
// mismatch was harmless right up until the FIRST remap was ever saved: past
// that point sanitizeButtonMappings (below) always fully populates every
// button, not just the one just remapped, so getKeyboardToButtonMapping's
// override loop then treats every OTHER, untouched button as "explicitly
// bound" too and applies DEFAULT_BUTTON_MAPPINGS' conflicting key over
// whatever this table had — every binding but the one just changed appeared
// to silently scramble. Deriving this table instead of hand-authoring it
// makes that class of bug impossible: there is only one table to edit.
var DEFAULT_KEYBOARD_MAPPING = CONTROLLER_BUTTONS.reduce(function (acc, button) {
  var _DEFAULT_BUTTON_MAPPI;
  var key = (_DEFAULT_BUTTON_MAPPI = DEFAULT_BUTTON_MAPPINGS[button]) === null || _DEFAULT_BUTTON_MAPPI === void 0 ? void 0 : _DEFAULT_BUTTON_MAPPI.key;
  if (key) {
    var _DPAD_STREAMING_NAME_;
    acc[key] = (_DPAD_STREAMING_NAME_ = DPAD_STREAMING_NAME_MAP[button]) !== null && _DPAD_STREAMING_NAME_ !== void 0 ? _DPAD_STREAMING_NAME_ : button;
  }
  return acc;
}, {});
var isBrowser = function isBrowser() {
  return typeof window !== "undefined";
};
var getDefaultButtonMappings = function getDefaultButtonMappings() {
  return CONTROLLER_BUTTONS.reduce(function (acc, button) {
    var defaultMapping = DEFAULT_BUTTON_MAPPINGS[button];
    acc[button] = defaultMapping ? _objectSpread({}, defaultMapping) : {
      button: button
    };
    return acc;
  }, {});
};
var getDefaultLeftStickMapping = function getDefaultLeftStickMapping() {
  return _objectSpread({}, DEFAULT_LEFT_STICK_MAPPING);
};
var getStreamingButtonName = function getStreamingButtonName(button) {
  var _DPAD_STREAMING_NAME_2;
  return (_DPAD_STREAMING_NAME_2 = DPAD_STREAMING_NAME_MAP[button]) !== null && _DPAD_STREAMING_NAME_2 !== void 0 ? _DPAD_STREAMING_NAME_2 : button;
};
var getDefaultControllerMappings = function getDefaultControllerMappings() {
  return {
    buttons: getDefaultButtonMappings(),
    leftStick: getDefaultLeftStickMapping()
  };
};
var sanitizeButtonMappings = function sanitizeButtonMappings(input) {
  var result = getDefaultButtonMappings();
  if (!input || _typeof(input) !== "object") {
    return result;
  }
  CONTROLLER_BUTTONS.forEach(function (button) {
    var raw = input[button];
    if (!raw || _typeof(raw) !== "object") {
      return;
    }
    var hasKeyProp = Object.prototype.hasOwnProperty.call(raw, "key");
    var hasMouseProp = Object.prototype.hasOwnProperty.call(raw, "mouseButton");
    var mapping = {
      button: button
    };
    if (hasKeyProp && typeof raw.key === "string") {
      mapping.key = raw.key;
    }
    if (hasMouseProp) {
      var mouseButton = typeof raw.mouseButton === "number" && Number.isFinite(raw.mouseButton) ? raw.mouseButton : undefined;
      if (mouseButton !== undefined) {
        mapping.mouseButton = mouseButton;
        mapping.isMouse = Boolean(raw.isMouse);
      }
    }
    if (!hasKeyProp && !hasMouseProp) {
      result[button] = {
        button: button
      };
      return;
    }
    if (mapping.key === undefined && mapping.mouseButton === undefined) {
      result[button] = {
        button: button
      };
      return;
    }
    if (!mapping.mouseButton) {
      delete mapping.isMouse;
    }
    result[button] = mapping;
  });
  return result;
};
var sanitizeLeftStickMapping = function sanitizeLeftStickMapping(input) {
  var defaults = getDefaultLeftStickMapping();
  if (!input || _typeof(input) !== "object") {
    return defaults;
  }
  var raw = input;
  var result = _objectSpread({}, defaults);
  LEFT_STICK_DIRECTIONS.forEach(function (direction) {
    var value = raw[direction];
    if (typeof value === "string" && value.trim().length > 0) {
      result[direction] = value;
    } else {
      result[direction] = undefined;
    }
  });
  return result;
};
var sanitizeMappings = function sanitizeMappings(input) {
  var defaults = getDefaultControllerMappings();
  if (!input || _typeof(input) !== "object") {
    return defaults;
  }
  var raw = input;

  // New format
  if (raw.buttons || raw.leftStick) {
    return {
      buttons: sanitizeButtonMappings(raw.buttons),
      leftStick: sanitizeLeftStickMapping(raw.leftStick)
    };
  }

  // Compatible with old format (buttons only)
  return {
    buttons: sanitizeButtonMappings(input),
    leftStick: getDefaultLeftStickMapping()
  };
};
var loadControllerMappings = function loadControllerMappings() {
  if (!isBrowser()) {
    return getDefaultControllerMappings();
  }
  var raw = window.localStorage.getItem(CONTROLLER_MAPPING_STORAGE_KEY);
  if (!raw) {
    return getDefaultControllerMappings();
  }
  try {
    var parsed = JSON.parse(raw);
    return sanitizeMappings(parsed);
  } catch (error) {
    console.error("Failed to parse controller mappings:", error);
    return getDefaultControllerMappings();
  }
};
var getSavedControllerMappings = function getSavedControllerMappings() {
  if (!isBrowser()) {
    return null;
  }
  var raw = window.localStorage.getItem(CONTROLLER_MAPPING_STORAGE_KEY);
  if (!raw) {
    return null;
  }
  try {
    var parsed = JSON.parse(raw);
    return sanitizeMappings(parsed);
  } catch (error) {
    console.error("Failed to parse controller mappings:", error);
    return null;
  }
};
var saveControllerMappings = function saveControllerMappings(mappings) {
  if (!isBrowser()) {
    return;
  }
  var sanitized = sanitizeMappings(mappings);
  try {
    window.localStorage.setItem(CONTROLLER_MAPPING_STORAGE_KEY, JSON.stringify(sanitized));
    window.dispatchEvent(new CustomEvent(CONTROLLER_MAPPING_CHANGED_EVENT, {
      detail: sanitized
    }));
  } catch (error) {
    console.error("Failed to save controller mappings:", error);
  }
};
var subscribeControllerMappings = function subscribeControllerMappings(callback) {
  if (!isBrowser()) {
    return function () {};
  }
  var handler = function handler(event) {
    var customEvent = event;
    var detail = customEvent.detail;
    if (detail) {
      callback(detail);
    } else {
      callback(loadControllerMappings());
    }
  };
  window.addEventListener(CONTROLLER_MAPPING_CHANGED_EVENT, handler);
  return function () {
    window.removeEventListener(CONTROLLER_MAPPING_CHANGED_EVENT, handler);
  };
};
var applyOverride = function applyOverride(mapping, button, key) {
  var streamingName = getStreamingButtonName(button);
  Object.keys(mapping).forEach(function (existingKey) {
    if (mapping[existingKey] === streamingName) {
      delete mapping[existingKey];
    }
  });
  if (key) {
    mapping[key] = streamingName;
  }
};
var getKeyboardToButtonMapping = function getKeyboardToButtonMapping(overrides) {
  var mapping = _objectSpread({}, DEFAULT_KEYBOARD_MAPPING);
  var saved = overrides !== null && overrides !== void 0 ? overrides : getSavedControllerMappings();
  if (!saved) {
    return mapping;
  }
  for (var _i = 0, _CONTROLLER_BUTTONS = CONTROLLER_BUTTONS; _i < _CONTROLLER_BUTTONS.length; _i++) {
    var button = _CONTROLLER_BUTTONS[_i];
    var buttonMapping = saved.buttons[button];
    if (!buttonMapping) {
      continue;
    }
    if (buttonMapping.isMouse) {
      applyOverride(mapping, button, undefined);
      continue;
    }
    applyOverride(mapping, button, buttonMapping.key);
  }
  return mapping;
};
var LEFT_STICK_DIRECTION_VECTORS = {
  UP: {
    x: 0,
    y: -1
  },
  DOWN: {
    x: 0,
    y: 1
  },
  LEFT: {
    x: -1,
    y: 0
  },
  RIGHT: {
    x: 1,
    y: 0
  },
  UP_LEFT: {
    x: -1,
    y: -1
  },
  UP_RIGHT: {
    x: 1,
    y: -1
  },
  DOWN_LEFT: {
    x: -1,
    y: 1
  },
  DOWN_RIGHT: {
    x: 1,
    y: 1
  }
};
var buildLeftStickKeyVectorMap = function buildLeftStickKeyVectorMap(leftStick) {
  var map = {};
  LEFT_STICK_DIRECTIONS.forEach(function (direction) {
    var key = leftStick[direction];
    if (key) {
      map[key] = LEFT_STICK_DIRECTION_VECTORS[direction];
    }
  });
  return map;
};
var getLeftStickKeyVectorMap = function getLeftStickKeyVectorMap(overrides) {
  var source = overrides !== null && overrides !== void 0 ? overrides : getSavedControllerMappings();
  if (!source) {
    return buildLeftStickKeyVectorMap(getDefaultLeftStickMapping());
  }
  return buildLeftStickKeyVectorMap(source.leftStick);
};

/***/ }

}]);
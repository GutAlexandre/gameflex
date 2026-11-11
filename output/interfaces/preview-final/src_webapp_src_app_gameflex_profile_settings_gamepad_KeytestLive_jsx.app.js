"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_profile_settings_gamepad_KeytestLive_jsx"],{

/***/ "./src/webapp/src/app/gameflex/contexts/PresenceContext.jsx"
/*!******************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/contexts/PresenceContext.jsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PresenceProvider: () => (/* binding */ PresenceProvider),
/* harmony export */   usePresence: () => (/* binding */ usePresence)
/* harmony export */ });
/* harmony import */ var _libs_GameSocket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/GameSocket.js */ "./src/webapp/src/app/gameflex/libs/GameSocket.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _libs_serverBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/serverBase.js */ "./src/webapp/src/app/gameflex/libs/serverBase.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;




// ONE persistent WebSocket for the whole app session (mounted once in
// index.js's AppShell, not per-page) — carries both directions: the server
// pushes the live "who's online/playing" list, and any component can send
// this user's own state changes over the SAME connection via
// reportPlaying()/reportIdle() (see Streaming.jsx). No REST
// counterpart, no polling — see python/src/app/presence/routes.py.

var PresenceContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function PresenceProvider(_ref) {
  var children = _ref.children;
  var _useAuth = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_2__.useAuth)(),
    token = _useAuth.token,
    isAuthenticated = _useAuth.isAuthenticated;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    users = _useState2[0],
    setUsers = _useState2[1];
  // Invitations received LIVE over this same connection (see
  // push/routes.py's send_invite — the WS delivery half, Web Push is the
  // separate closed-tab fallback). Accumulated, not replaced — several can
  // arrive before any is acted on. Each gets a client-side `id` (not
  // server-provided, these are ephemeral and never persisted) so
  // NotificationBell can dismiss one specifically.
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    invites = _useState4[0],
    setInvites = _useState4[1];
  var wsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!isAuthenticated || !token) {
      setUsers([]);
      return;
    }
    var cancelled = false;
    var ws = null;
    var reconnectTimer = null;
    var _connect = function connect() {
      // Query param, not a header — browsers can't set custom headers
      // on a WebSocket handshake (see presence/routes.py's own doc).
      ws = (0,_libs_GameSocket_js__WEBPACK_IMPORTED_MODULE_0__.gameSocket)((0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_3__.homeWsUrl)("/api/v1/presence/ws?token=".concat(encodeURIComponent(token))));
      wsRef.current = ws;
      ws.onmessage = function (evt) {
        var msg;
        try {
          msg = JSON.parse(evt.data);
        } catch (_unused) {
          return;
        }
        if (msg.type === "list") setUsers(msg.users || []);
        if (msg.type === "invite") {
          setInvites(function (prev) {
            return [].concat(_toConsumableArray(prev), [_objectSpread(_objectSpread({}, msg), {}, {
              id: "".concat(Date.now(), "-").concat(Math.random())
            })]);
          });
        }
      };
      ws.onclose = function () {
        if (wsRef.current === ws) wsRef.current = null;
        if (cancelled) return;
        reconnectTimer = setTimeout(_connect, 3000);
      };
    };
    _connect();
    return function () {
      var _ws;
      cancelled = true;
      clearTimeout(reconnectTimer);
      (_ws = ws) === null || _ws === void 0 || _ws.close();
      wsRef.current = null;
    };
  }, [isAuthenticated, token]);

  // Best-effort — if the connection happens to be mid-reconnect right
  // when this is called, the report is just dropped (presence is a live
  // status display, not persisted data; PlayHistory, which IS persisted,
  // is reported separately over plain REST — see profile/routes.py).
  // role — "player" (default, an owner or a joiner) or "spectator" (a
  // watch-only connection) — see presence/registry.py's PresenceEntry.role.
  var reportPlaying = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (session, isWatching) {
    var _wsRef$current;
    if (((_wsRef$current = wsRef.current) === null || _wsRef$current === void 0 ? void 0 : _wsRef$current.readyState) === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: "playing",
        sessionId: session.id,
        platform: session.platform,
        consoleId: session.consoleId,
        reference: session.reference || null,
        role: isWatching ? "spectator" : "player"
      }));
    }
  }, []);
  var reportIdle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    var _wsRef$current2;
    if (((_wsRef$current2 = wsRef.current) === null || _wsRef$current2 === void 0 ? void 0 : _wsRef$current2.readyState) === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: "idle"
      }));
    }
  }, []);

  // Called once the user has acted on (or dismissed) an invite — see
  // NotificationBell (index.js).
  var dismissInvite = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (id) {
    setInvites(function (prev) {
      return prev.filter(function (i) {
        return i.id !== id;
      });
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PresenceContext.Provider, {
    value: {
      users: users,
      invites: invites,
      reportPlaying: reportPlaying,
      reportIdle: reportIdle,
      dismissInvite: dismissInvite
    },
    children: children
  });
}
function usePresence() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PresenceContext);
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/profile/settings/gamepad/KeytestLive.jsx"
/*!******************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/profile/settings/gamepad/KeytestLive.jsx ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeytestLive)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./src/webapp/src/node_modules/react-router/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./src/webapp/src/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/ProgressBar.js");
/* harmony import */ var _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../skeleton/skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _contexts_PresenceContext_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../contexts/PresenceContext.jsx */ "./src/webapp/src/app/gameflex/contexts/PresenceContext.jsx");
/* harmony import */ var _libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/SessionPool.js */ "./src/webapp/src/app/gameflex/libs/SessionPool.js");
/* harmony import */ var _stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../stream/shared/SessionStream.jsx */ "./src/webapp/src/app/gameflex/stream/shared/SessionStream.jsx");
/* harmony import */ var _stream_shared_hooks_use_child_slot_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../stream/shared/hooks/use-child-slot.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-child-slot.js");
/* harmony import */ var _stream_streamex_hooks_use_streamex_input_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../stream/streamex/hooks/use-streamex-input.js */ "./src/webapp/src/app/gameflex/stream/streamex/hooks/use-streamex-input.js");
/* harmony import */ var _stream_retrogaming_hooks_use_retrogaming_input_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../stream/retrogaming/hooks/use-retrogaming-input.js */ "./src/webapp/src/app/gameflex/stream/retrogaming/hooks/use-retrogaming-input.js");
/* harmony import */ var _stream_streamex_KeyTestPad_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../stream/streamex/KeyTestPad.jsx */ "./src/webapp/src/app/gameflex/stream/streamex/KeyTestPad.jsx");
/* harmony import */ var _controllers_presets_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../controllers/presets.js */ "./src/webapp/src/app/gameflex/controllers/presets.js");
/* harmony import */ var _api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../api/spawnSessions.js */ "./src/webapp/src/app/gameflex/api/spawnSessions.js");
/* harmony import */ var _api_retrogaming_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../api/retrogaming.js */ "./src/webapp/src/app/gameflex/api/retrogaming.js");
/* harmony import */ var _libs_serverBase_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../libs/serverBase.js */ "./src/webapp/src/app/gameflex/libs/serverBase.js");
/* harmony import */ var _libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../libs/kernelChannel.js */ "./src/webapp/src/app/gameflex/libs/kernelChannel.js");
/* harmony import */ var _libs_capabilities_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../libs/capabilities.js */ "./src/webapp/src/app/gameflex/libs/capabilities.js");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var _hooks_use_gamepad_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../hooks/use-gamepad.jsx */ "./src/webapp/src/app/gameflex/hooks/use-gamepad.jsx");
/* harmony import */ var _stream_shared_hooks_use_screen_rotation_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../stream/shared/hooks/use-screen-rotation.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-screen-rotation.js");
/* harmony import */ var _stream_shared_hooks_use_streaming_menu_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../stream/shared/hooks/use-streaming-menu.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-streaming-menu.js");
/* harmony import */ var _libs_screenOrientation_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../libs/screenOrientation.js */ "./src/webapp/src/app/gameflex/libs/screenOrientation.js");
/* harmony import */ var _stream_shared_switches_store_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../stream/shared/switches-store.js */ "./src/webapp/src/app/gameflex/stream/shared/switches-store.js");
/* harmony import */ var _shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/utils/device-detection.js */ "./src/webapp/src/app/gameflex/shared/utils/device-detection.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
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



























var Form = _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_5__["default"].Form;

// useKeytestSessionId — resolves the user's keytest session: reuse the one
// the idle grace may still be running from a previous preview, otherwise
// spawn a fresh one. ONE session per user on purpose: anyone joining it
// later (Dashboard, invite) lands on the SAME container and pads.
function useKeytestSessionId(token, user) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    sessionId = _useState2[0],
    setSessionId = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    failed = _useState4[0],
    setFailed = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cancelled = false;

    // Une question ponctuelle à NOTRE kernel — « ai-je déjà une session de
    // test ? » —, posée par un instantané du sujet `sessions` : le canal
    // ne sert ici qu'à cette réponse.
    (0,_libs_kernelChannel_js__WEBPACK_IMPORTED_MODULE_18__.kernelSnapshot)({
      origin: (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_17__.homeOrigin)(),
      token: token || ""
    }, "sessions").then(function (list) {
      if (cancelled) {
        return;
      }
      // « keytest chez moi » ne dit pas de quelle plateforme il s'agit :
      // un conteneur streamex sur un serveur, une vue dessinée sur le
      // téléphone (KeytestHost.java). Les deux sont la même console.
      var existing = (Array.isArray(list) ? list : []).find(function (entry) {
        return (entry.platform === "streamex" || entry.platform === "device") && entry.consoleId === "keytest" && entry.owner === (user === null || user === void 0 ? void 0 : user.username);
      }) || null;
      if (existing) {
        setSessionId(existing.id);
        return;
      }

      // UN HÔTE QUI NE PEUT PAS OUVRIR DE SESSION AILLEURS HÉBERGE LA SIENNE.
      //
      // `spawnsSessions` pose exactement cette question — un serveur
      // ouvre un conteneur, un téléphone n'en ouvre pas. Ne pas la
      // confondre avec `localLibrary`, qui dit seulement qu'on lit des
      // jeux sur l'appareil : les deux coïncident sur le téléphone
      // d'aujourd'hui, pas par construction.
      //
      // Le téléphone n'héberge pas de session streamex, faute de
      // conteneurs. Il sert en revanche la porte unique
      // (la commande `launch`, #195) : `createSession` y envoie
      // `platform: "retrogaming"`, et son kernel reconnaît « keytest »
      // comme une console sans jeu.
      if (!(0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_19__.can)("spawnsSessions")) {
        (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_16__.createSession)("keytest", "keytest", "KeyTest", "", "", user === null || user === void 0 ? void 0 : user.username).then(function (made) {
          var _made$data;
          if (cancelled) {
            return;
          }
          var madeId = made.ok ? (_made$data = made.data) === null || _made$data === void 0 ? void 0 : _made$data.sessionId : null;
          if (!madeId) {
            setFailed(true);
            return;
          }
          setSessionId(madeId);
        })["catch"](function (failure) {
          if (cancelled) {
            return;
          }
          console.error("échec de l'ouverture de la session keytest sur l'appareil", failure);
          setFailed(true);
        });
        return;
      }
      ;(0,_api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_15__.launchSession)("keytest", "keytest", token).then(function (spawned) {
        var _spawned$data;
        if (cancelled) {
          return;
        }
        var spawnedId = spawned.ok ? (_spawned$data = spawned.data) === null || _spawned$data === void 0 ? void 0 : _spawned$data.session_id : null;
        if (!spawnedId) {
          setFailed(true);
          return;
        }
        setSessionId(spawnedId);
      })["catch"](function (failure) {
        if (cancelled) {
          return;
        }
        console.error("échec du lancement de la session keytest", failure);
        setFailed(true);
      });
    })["catch"](function (failure) {
      if (cancelled) {
        return;
      }
      console.error("échec de la lecture des sessions keytest existantes", failure);
      setFailed(true);
    });
    return function () {
      cancelled = true;
    };
    // token/user are stable for this page's life.
  }, [token, user === null || user === void 0 ? void 0 : user.username]);
  return {
    sessionId: sessionId,
    failed: failed
  };
}

// KeytestShell — keytest's OWN surface, deliberately not StreamingShell.
//
// The two pages look alike and mean different things. /streaming hosts a
// SESSION: it has an authority to obey, a pad to claim, a hand-over to answer,
// an AFK clock, an idle clock, an end to redirect on. Keytest has none of
// that — it is one person looking at their own controller. Borrowing the
// session shell made this page inherit machinery it cannot satisfy, and it
// showed: the shell writes into a `leaveRef` the route is expected to own, and
// this page never passed one, so opening it threw "Cannot set properties of
// undefined" before anything rendered (2026-08-25). It also passed a `preview`
// prop the shell does not declare and silently dropped.
//
// What IS shared stays shared, and it is the part that has no opinion about
// sessions: SessionStream for the picture, and useStreamexInput for the pad —
// which already accepts `preview` precisely for this page.
/**
 * Le hook d'entrée de CETTE session — un seul appel, jamais deux.
 *
 * Appeler les deux et choisir ensuite respecterait les règles des hooks, mais
 * ouvrirait DEUX connexions pour une seule image : c'est exactement la panne
 * « duplicate attempt » déjà corrigée une fois ici. Le `switch` est sûr pour
 * la même raison que celui de Streaming.jsx — le shell est monté avec
 * `key={session.id}`, donc la plateforme ne change jamais en cours de vie.
 */
function useKeytestInput(_ref) {
  var _CONTROLLER_PRESETS$p;
  var screenRef = _ref.screenRef,
    session = _ref.session,
    context = _ref.context,
    t = _ref.t,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? {} : _ref$options;
  // Même règle que le dispatcher de Streaming.jsx, pour la même raison :
  // c'est un hook partagé entre plateformes.
  var slot = options.slot,
    preview = options.preview,
    keytestPad = options.keytestPad;
  switch (session.platform) {
    // Le téléphone : même canal de contrôle que le rétro, et un pad qui
    // vient d'ici plutôt que de la console (elle n'en a pas).
    case "device":
      return (0,_stream_retrogaming_hooks_use_retrogaming_input_js__WEBPACK_IMPORTED_MODULE_12__.useRetrogamingInput)({
        screenRef: screenRef,
        session: session,
        context: context,
        t: t,
        options: {
          isWatching: false,
          virtualPad: keytestPad,
          virtualPadLabel: preview ? ((_CONTROLLER_PRESETS$p = _controllers_presets_js__WEBPACK_IMPORTED_MODULE_14__.CONTROLLER_PRESETS[preview]) === null || _CONTROLLER_PRESETS$p === void 0 ? void 0 : _CONTROLLER_PRESETS$p.label) || preview : t("streaming.controller.keyTest")
        }
      });
    default:
      return (0,_stream_streamex_hooks_use_streamex_input_js__WEBPACK_IMPORTED_MODULE_11__.useStreamexInput)({
        screenRef: screenRef,
        session: session,
        t: t,
        options: {
          isWatching: slot == null,
          preview: preview
        }
      });
  }
}

// LE MÊME MENU QUE LE STREAMING, EN PLUS PETIT.
//
// Cette page n'avait qu'une flèche de retour : changer de manette obligeait
// à quitter la session et à y revenir, ce qui rallume un conteneur pour
// regarder un autre pad. Trois gestes suffisent à l'éviter — le plein écran,
// la rotation, et le choix de la manette.
//
// Elle ne réutilise PAS `FloatingPanel` : celui-là parle de joueurs, de
// spectateurs, de sauvegardes et de triche, dont rien n'existe ici. Les
// morceaux qui comptaient vraiment — tourner l'écran — sont partagés au
// niveau du HOOK (`use-screen-rotation.js`), là où le partage a du sens.
//
// Même forme que le menu d'une partie depuis le 2026-10-19 (#408) : le titre
// en tête, « Quitter » à la fin — la barre du bas n'est plus. L'orientation
// s'est réglée dans Réglages (#406).
function KeytestMenu(_ref2) {
  var t = _ref2.t,
    title = _ref2.title,
    switchesStore = _ref2.switchesStore,
    presets = _ref2.presets,
    preset = _ref2.preset,
    onPresetChange = _ref2.onPresetChange,
    onExit = _ref2.onExit;
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_5__["default"].context);
  // ABONNÉ, PAS NOURRI. Cf. `switches-store.js` : ce panneau vit dans un
  // offcanvas, donc ses props sont un instantané gelé au moment de
  // l'ouverture. Recevoir `values`/`setValues` en prop faisait un
  // interrupteur qui ne bougeait jamais — « le plein écran reste sur off »,
  // signalé le 2026-09-09.
  var values = (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(switchesStore.subscribe, switchesStore.getSnapshot);
  var switchesForm = {
    values: values,
    setValues: switchesStore.setValues
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_20__.OffCanvas, {
    icon: "bi bi-controller",
    label: title,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_20__.SectionPanel, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(Form.Group, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(Form.SkeletonSwitch, {
          reverse: true,
          variant: "md",
          name: "isFullscreen",
          context: switchesForm,
          label: t("streaming.settings.fullscreen.label"),
          helpText: t("streaming.settings.fullscreen.help")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(Form.Group, {
        label: t("keytest.controllerLabel"),
        helpText: t("keytest.controllerHelp"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(Form.Select, {
          name: "preset",
          context: {
            values: {
              preset: preset || ""
            },
            setValues: function setValues(next) {
              return onPresetChange(next.preset);
            }
          },
          options: presets
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_20__.SectionPanel, {
      label: t("streaming.menu.quit.title"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_20__.ListElement, {
        light: true,
        icon: "bi bi-box-arrow-left",
        label: t("keytest.exitLabel"),
        onClick: function onClick() {
          context.offcanvas.close();
          onExit();
        }
      })
    })]
  });
}
function KeytestShell(_ref3) {
  var t = _ref3.t,
    session = _ref3.session,
    token = _ref3.token,
    context = _ref3.context,
    preview = _ref3.preview,
    username = _ref3.username,
    onExit = _ref3.onExit,
    onPresetChange = _ref3.onPresetChange;
  var screenRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // A pad, claimed. The child gates input on its queue, so without this the
  // picture plays and every button press is dropped — which is the entire
  // thing this page exists to show.
  var viewerIdOf = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _screenRef$current;
    return (_screenRef$current = screenRef.current) === null || _screenRef$current === void 0 ? void 0 : _screenRef$current.viewerId;
  }, []);
  // L'IDENTIFIANT DU CHILD, PAS CELUI DE LA SESSION.
  //
  // Ce sont deux choses, et elles ne coïncident que par accident sur le
  // serveur : la session s'appelle comme le gateway l'appelle. Sur le
  // téléphone non — la session est « device:keytest », le flux
  // « device-session ». Cette page passait `session.id` aux deux, donc elle
  // demandait au gateway un flux inexistant : aucune image, aucune erreur,
  // alors que /streaming affichait la MÊME session sans peine (il fait déjà
  // ce repli, voir son propre montage de SessionStream).
  var childId = session.childSessionId || session.id;
  var _useChildSlot = (0,_stream_shared_hooks_use_child_slot_js__WEBPACK_IMPORTED_MODULE_10__.useChildSlot)({
      sessionId: childId,
      token: token,
      enabled: Boolean(session),
      viewerIdOf: viewerIdOf
    }),
    slot = _useChildSlot.slot;
  // Keytest has no session phases to derive — one person, one controller,
  // nothing to obey. The only thing worth waiting for is the picture, so
  // that is the only thing the overlay ever says.
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hasVideo = _useState6[0],
    setHasVideo = _useState6[1];
  // isWatching false: the whole point is to press buttons and see them land.
  // isWatching follows the CHILD's answer, not an assumption: the pad is
  // only live once a seat is actually held.
  // LE PAD EST LE MÊME, LE TRANSPORT NON.
  //
  // Sur un serveur, KeyTest est une session streamex ; sur le téléphone,
  // c'est une session « device », que la page de streaming route déjà vers
  // le hook rétro (Streaming.jsx : « le téléphone sert maintenant le même
  // canal de contrôle »). On suit la même règle plutôt que d'en inventer
  // une pour cette page.
  var keytestPad = (0,_stream_streamex_KeyTestPad_jsx__WEBPACK_IMPORTED_MODULE_13__.useKeytestPad)(preview);
  var input = useKeytestInput({
    screenRef: screenRef,
    session: session,
    context: context,
    t: t,
    options: {
      slot: slot,
      preview: preview,
      keytestPad: keytestPad
    }
  });
  var controller = input.controller();
  var menuButtonStyle = (0,_stream_shared_hooks_use_streaming_menu_js__WEBPACK_IMPORTED_MODULE_23__.useMenuButtonStyle)(Boolean(controller === null || controller === void 0 ? void 0 : controller.Component));

  // Les trois réglages de cette page. Un objet, pas un magasin externe :
  // il n'y a qu'un composant qui les lit, et rien à tenir d'accord entre
  // deux arbres React comme sur la page de streaming.
  var shellRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return (0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_26__.isMobileDevice)() || (0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_26__.isTabletDevice)();
    }),
    _useState8 = _slicedToArray(_useState7, 1),
    isHandheld = _useState8[0];
  var isPortraitViewport = (0,_stream_shared_hooks_use_screen_rotation_js__WEBPACK_IMPORTED_MODULE_22__.usePortraitViewport)();
  // Un MAGASIN, pas un `useState` — le menu vit dans un offcanvas, dont les
  // props sont figées à l'ouverture (voir `switches-store.js`).
  var switchesStoreRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (!switchesStoreRef.current) {
    switchesStoreRef.current = (0,_stream_shared_switches_store_js__WEBPACK_IMPORTED_MODULE_25__.createSwitchesStore)({
      isFullscreen: false
    });
  }
  var switchesStore = switchesStoreRef.current;
  var switches = (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(switchesStore.subscribe, switchesStore.getSnapshot);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (switches.isFullscreen && shellRef.current) {
      (0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_26__.requestFullscreen)(shellRef.current)["catch"](function () {});
    } else if (!switches.isFullscreen && (0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_26__.isFullscreen)()) {
      (0,_shared_utils_device_detection_js__WEBPACK_IMPORTED_MODULE_26__.exitFullscreen)()["catch"](function () {});
    }
  }, [switches.isFullscreen]);

  // L'orientation de l'APPAREIL, choisie dans Réglages (#406).
  var screenOrientation = (0,_libs_screenOrientation_js__WEBPACK_IMPORTED_MODULE_24__.useScreenOrientation)();
  var rotateSurface = (0,_stream_shared_hooks_use_screen_rotation_js__WEBPACK_IMPORTED_MODULE_22__.useScreenRotation)(screenOrientation, {
    enabled: isHandheld,
    surfaceRef: shellRef,
    onFullscreen: function onFullscreen() {
      return switchesStore.setValues({
        isFullscreen: true
      });
    }
  });

  // Les autres préréglages, pour en changer sans quitter. Triés par
  // libellé : la table les déclare dans l'ordre où elles ont été écrites,
  // qui n'est celui de personne.
  var presets = Object.entries(_controllers_presets_js__WEBPACK_IMPORTED_MODULE_14__.CONTROLLER_PRESETS).map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
      value = _ref5[0],
      entry = _ref5[1];
    return {
      value: value,
      label: entry.label || value
    };
  }).sort(function (left, right) {
    return left.label.localeCompare(right.label);
  });
  var openMenu = function openMenu() {
    if (_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_5__["default"].overlayCount() > 0) {
      return;
    }
    context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(KeytestMenu, {
      t: t,
      title: (controller === null || controller === void 0 ? void 0 : controller.label) || t("streaming.controller.keyTest"),
      switchesStore: switchesStore,
      presets: presets,
      preset: preview,
      onPresetChange: onPresetChange,
      onExit: function onExit() {
        return confirmExitRef.current();
      }
    }), {
      size: 480
    });
  };
  var openMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(openMenu);
  openMenuRef.current = openMenu;

  // QUITTER ARRÊTE LA SESSION, donc on demande. Il n'y a pas de « quitter
  // sans arrêter » ici, contrairement au streaming : une session de test
  // n'a pas d'autres joueurs à qui elle survivrait. La confirmation existe
  // parce que le geste est sans retour, pas parce qu'il y a un choix.
  // LA MANETTE EST À L'ESSAI, PAS À L'INTERFACE (#407). Sans panneau ouvert,
  // la croix, A et B montrent ce qu'ils font sur le pad à l'écran ; la
  // navigation de Skeleton se tait — A actionnerait sinon le bouton qui a le
  // focus. Le menu ouvert, elle le sert. Il s'ouvre au doigt, ou par
  // L2 + Home tenus une seconde, comme en partie. Échap n'en est
  // pas : le pavé d'essai le garde (KeyTestPad).
  var overlays = _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_5__["default"].useOverlayCount();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_5__["default"].suspendNavigation(overlays === 0);
    if (overlays === 0) {
      var _document$activeEleme, _document$activeEleme2;
      (_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 || (_document$activeEleme2 = _document$activeEleme.blur) === null || _document$activeEleme2 === void 0 || _document$activeEleme2.call(_document$activeEleme);
    }
  }, [overlays]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      return _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_5__["default"].suspendNavigation(false);
    };
  }, []);
  var menuHold = (0,_stream_shared_hooks_use_streaming_menu_js__WEBPACK_IMPORTED_MODULE_23__.useMenuHotkey)(overlays === 0, function () {
    return openMenuRef.current();
  });
  var confirmExit = function confirmExit() {
    return context.modal.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
      className: "text-center",
      children: t("keytest.exitConfirm")
    }), {
      variant: "confirm",
      title: t("keytest.exitTitle"),
      confirmLabel: t("keytest.exitLabel"),
      cancelLabel: t("app.cancel"),
      onConfirm: onExit
    });
  };
  var confirmExitRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(confirmExit);
  confirmExitRef.current = confirmExit;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
    ref: shellRef,
    className: "d-flex flex-column overflow-hidden",
    style: _objectSpread({
      backgroundColor: "#000",
      // Pas la classe vh-100 : son !important passait devant la
      // hauteur de la rotation de repli, et elle ignorait le
      // demi-écran des manettes clipsées (#410, app.css).
      height: "var(--gameflex-visible-height)"
    }, (0,_stream_shared_hooks_use_screen_rotation_js__WEBPACK_IMPORTED_MODULE_22__.rotationSurfaceStyle)(rotateSurface, isPortraitViewport)),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_9__.SessionStream, {
      sessionId: childId,
      t: t,
      screenRef: screenRef,
      hasInput: true,
      username: username,
      muted: true
      // Through gatewayProps: SessionStream forwards the gateway's
      // own callbacks from there, and a top-level prop of the same
      // name is simply not read.
      ,
      gatewayProps: {
        onFirstVideoTrack: function onFirstVideoTrack() {
          return setHasVideo(true);
        }
      },
      connectingLabel: hasVideo ? _stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_9__.OVERLAY_HIDDEN : t("streaming.connection.phase.waitingVideo")
      // LE FEU VERT DU SOCKET STREAMEX, comme sur la page de
      // streaming : il ouvre une fois le viewer créé, pour l'annoncer
      // au child — sans lui, le child ne route aucune entrée de ce
      // socket. Pas sur le téléphone, dont le canal rétro se branche
      // autrement ici.
      ,
      onViewerReady: session.platform === "device" ? null : function () {
        var _input$onConnect;
        return (_input$onConnect = input.onConnect) === null || _input$onConnect === void 0 ? void 0 : _input$onConnect.call(input);
      }
    }), (controller === null || controller === void 0 ? void 0 : controller.Component) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
      className: "flex-shrink-0 position-absolute w-100",
      style: {
        bottom: "0",
        left: 0,
        zIndex: 1002
      },
      children: controller.Component
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "dark",
      className: "position-absolute rounded-circle d-flex align-items-center justify-content-center p-0",
      style: menuButtonStyle,
      title: t("streaming.menu.open"),
      "aria-label": t("streaming.menu.open"),
      onClick: openMenu,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("i", {
        className: "bi bi-list fs-4 text-white"
      })
    }), menuHold >= 0.1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
      className: "position-absolute top-50 start-50 translate-middle text-white text-center rounded-3 px-4 py-3",
      style: {
        zIndex: 1004,
        background: "rgba(0, 0, 0, 0.7)",
        minWidth: "260px",
        pointerEvents: "none"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
        className: "fw-semibold mb-2",
        children: t("streaming.menu.holdHint")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        now: Math.round(menuHold * 100),
        style: {
          height: "6px"
        }
      })]
    })]
  });
}

// KeytestLive — the Settings → Gamepad → "Test" page: a REAL route (the
// stream must survive a reload, and the offcanvas's own close fought the
// keytest pad's Escape blocking). It spawns (or reuses) the user's keytest
// session and renders it with the preset's controller. An unknown preset suffix streams the bare input-layer pad,
// same as the old ?preview= validation. Joiners from the Dashboard land on
// /streaming with the REAL id and get the bare pad there.
function KeytestLive() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)(),
    t = _useTranslation.t;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_5__["default"].context);
  var _useAuth = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_6__.useAuth)(),
    user = _useAuth.user,
    token = _useAuth.token;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
    preset = _useParams.preset;
  var preview = preset && _controllers_presets_js__WEBPACK_IMPORTED_MODULE_14__.CONTROLLER_PRESETS[preset] ? preset : null;
  var _useKeytestSessionId = useKeytestSessionId(token, user),
    sessionId = _useKeytestSessionId.sessionId,
    failed = _useKeytestSessionId.failed;
  var _useResolvedSession = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_8__.useResolvedSession)(sessionId),
    session = _useResolvedSession.session,
    isRequestTimeout = _useResolvedSession.isRequestTimeout;
  // reportIdle only: the shell that used to flip presence to "playing" is
  // gone, and a controller test is not a game anyone watches.
  var _usePresence = (0,_contexts_PresenceContext_jsx__WEBPACK_IMPORTED_MODULE_7__.usePresence)(),
    reportIdle = _usePresence.reportIdle;
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    terminateReason = _useState0[0],
    setTerminateReason = _useState0[1];

  // Leaving ENDS it. A keytest session is not a game anyone comes back to —
  // it exists to look at one controller, and its five-minute idle grace
  // would otherwise hold a container (and this user's one-session-at-a-time
  // slot) long after the person walked away. Unlike /streaming, where
  // leaving deliberately keeps the session alive for the others, there are
  // no others here.
  var onTerminate = function onTerminate() {
    reportIdle();
    if (sessionId) {
      // Fire and forget: the page is leaving either way, and a failed
      // stop still gets swept by the idle watchdog. Waiting on it would
      // only make the exit feel broken.
      //
      // Le téléphone n'a pas de veilleuse d'inactivité pour ça : sa vue
      // de test continuerait à dessiner et à encoder — d'où l'arrêt
      // explicite, pour l'appareil comme pour un conteneur.
      (0,_api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_15__.stopSession)((session === null || session === void 0 ? void 0 : session.platform) === "device" ? "device" : "streamex", sessionId, token)["catch"](function () {});
    }
    // A keytest session has no console catalog entry behind it
    // (/streamex/keytest doesn't exist as a Games route) — back to the
    // gamepad settings page it came from.
    navigate("/");
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (failed) {
      setTerminateReason(t("streaming.connection.state.failed"));
      return;
    }
    if (isRequestTimeout) {
      setTerminateReason(t("streaming.connection.state.sessionLookupTimeout"));
    }
  }, [failed, isRequestTimeout, t]);
  if (!session || !sessionId) {
    // The keytest session is still spawning (or being reused) — plain
    // overlay, nothing to stream yet.
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
      className: "overflow-hidden",
      style: {
        backgroundColor: "#000",
        minHeight: "var(--gameflex-visible-height)"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_20__.LoadingScreen, {
        launch: true,
        label: t("streaming.connection.state.connecting")
      })
    });
  }
  return terminateReason ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_20__.LoadingScreen, {
    launch: true,
    textOnFailure: terminateReason,
    onFailure: onTerminate
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_hooks_use_gamepad_jsx__WEBPACK_IMPORTED_MODULE_21__.GamepadProvider, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(KeytestShell, {
      t: t,
      session: session,
      token: token,
      context: context,
      preview: preview,
      username: user === null || user === void 0 ? void 0 : user.username,
      onExit: onTerminate
      // CHANGER DE PRÉRÉGLAGE EST UNE NAVIGATION, pas un
      // remontage : `key={session.id}` ne bouge pas, donc le shell
      // vit, le flux tient, et seul le pad rendu change. `replace`
      // pour que le bouton Retour ne parcoure pas la liste des
      // manettes qu'on a essayées.
      ,
      onPresetChange: function onPresetChange(next) {
        return navigate("/keytest/".concat(next), {
          replace: true
        });
      }
    }, session.id)
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-child-slot.js"
/*!***************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/hooks/use-child-slot.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useChildSlot: () => (/* binding */ useChildSlot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_child_session_ws_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-child-session-ws.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-child-session-ws.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;


// useChildSlot — hold a pad on a child-managed session, and nothing else.
//
// Since chantier-4 the child gates input on its own queue: a tab that never
// claims a slot can be connected, negotiated and streaming, and every button
// it sends is dropped. That is not session bookkeeping a simple page can skip
// — it IS the input path. Keytest learned this the hard way: the picture
// played, the pad rendered, and nothing happened (reported live 2026-08-25).
//
// Streaming.jsx runs a richer version of this (hand-over prompts, AFK, phases,
// end-of-session). This is the part every page needs whatever else it does:
// open the socket, name your viewer, ask for a seat, keep beating.
function useChildSlot(_ref) {
  var sessionId = _ref.sessionId,
    token = _ref.token,
    _ref$enabled = _ref.enabled,
    enabled = _ref$enabled === void 0 ? true : _ref$enabled,
    viewerIdOf = _ref.viewerIdOf;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    slot = _useState2[0],
    setSlot = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    ready = _useState4[0],
    setReady = _useState4[1];
  var claimedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var onState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message) {
    var _message$you$slotId, _message$you;
    setSlot((_message$you$slotId = (_message$you = message.you) === null || _message$you === void 0 ? void 0 : _message$you.slotId) !== null && _message$you$slotId !== void 0 ? _message$you$slotId : null);
    setReady(true);
  }, []);
  var socket = (0,_use_child_session_ws_js__WEBPACK_IMPORTED_MODULE_1__.useChildSessionWs)({
    sessionId: sessionId,
    token: token,
    enabled: enabled,
    onState: onState,
    onResult: function onResult() {}
  });

  // The tab holds TWO identities — a gateway viewer and this socket — and
  // only the tab knows both. Without the pairing the child cannot tell whose
  // keystrokes are whose, and gates everything.
  var announceViewer = socket.announceViewer;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled || !viewerIdOf) {
      return undefined;
    }

    // The viewer is created asynchronously by the video surface; poll
    // briefly rather than demand the caller thread a callback through.
    var timer = setInterval(function () {
      var viewerId = viewerIdOf();
      if (viewerId) {
        announceViewer(viewerId);
        clearInterval(timer);
      }
    }, 300);
    return function () {
      return clearInterval(timer);
    };
  }, [enabled, viewerIdOf, announceViewer]);

  // Ask for a seat, once, after the child has said where we stand — asking
  // before that is asking blind, and asking twice is asking to be refused.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled || !ready || claimedRef.current || slot != null) {
      return;
    }
    if (!socket.intent("join")) {
      return; // no socket yet — this reruns when the next state lands
    }
    claimedRef.current = true;
  }, [enabled, ready, slot, socket]);

  // Through a ref, so the interval's life is "as long as this page is on a
  // child-managed session" and NOT "as long as this callback keeps its
  // identity" — an interval rebuilt every render never reaches its period.
  var beatRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  beatRef.current = socket.beat;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled) {
      return undefined;
    }
    var timer = setInterval(function () {
      var _beatRef$current;
      return (_beatRef$current = beatRef.current) === null || _beatRef$current === void 0 ? void 0 : _beatRef$current.call(beatRef, false);
    }, _use_child_session_ws_js__WEBPACK_IMPORTED_MODULE_1__.CHILD_BEAT_INTERVAL_MS);
    return function () {
      return clearInterval(timer);
    };
  }, [enabled]);
  return {
    slot: slot,
    ready: ready
  };
}

/***/ }

}]);
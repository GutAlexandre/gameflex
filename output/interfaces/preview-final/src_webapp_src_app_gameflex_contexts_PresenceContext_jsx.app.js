"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_contexts_PresenceContext_jsx"],{

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

/***/ }

}]);
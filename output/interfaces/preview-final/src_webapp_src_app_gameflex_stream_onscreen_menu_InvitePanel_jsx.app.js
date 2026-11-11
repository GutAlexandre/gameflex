"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_onscreen_menu_InvitePanel_jsx"],{

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

/***/ "./src/webapp/src/app/gameflex/stream/onscreen/menu/InvitePanel.jsx"
/*!**************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/onscreen/menu/InvitePanel.jsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvitePanel: () => (/* binding */ InvitePanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _profile_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../profile/api.js */ "./src/webapp/src/app/gameflex/profile/api.js");
/* harmony import */ var _contexts_PresenceContext_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/PresenceContext.jsx */ "./src/webapp/src/app/gameflex/contexts/PresenceContext.jsx");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
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
// gameflex/shared/InvitePanel.jsx — member list for the "invite someone"
// menu button (all platforms). Members come from auth's
// GET /api/v1/users/members (every member, most recent connection first —
// offline included); the green badge overlays live presence
// (PresenceContext). Clicking a member opens a confirm modal, then
// sendInvite. Whether the invitation becomes "join" or "watch" is decided
// at ACCEPT time (slot availability), never here — see the plan's social
// flow doc.
//
// List markup mirrors Games.jsx's GameCard rows (icon + bold title + muted
// subtitle + chevron) so the panel looks like the rest of the app. `self`
// is the CURRENT user's username — you don't invite yourself.
;





function InvitePanel(_ref) {
  var session = _ref.session,
    token = _ref.token,
    _ref$self = _ref.self,
    self = _ref$self === void 0 ? null : _ref$self,
    context = _ref.context,
    t = _ref.t;
  var _usePresence = (0,_contexts_PresenceContext_jsx__WEBPACK_IMPORTED_MODULE_3__.usePresence)(),
    onlineUsers = _usePresence.users;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    members = _useState2[0],
    setMembers = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    feedback = _useState4[0],
    setFeedback = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cancelled = false;
    (0,_profile_api_js__WEBPACK_IMPORTED_MODULE_2__.listMembers)(token).then(function (result) {
      if (cancelled) return;
      if (result.ok) {
        var _result$item;
        setMembers(((_result$item = result.item) === null || _result$item === void 0 ? void 0 : _result$item.members) || []);
      } else {
        setFeedback({
          variant: "danger",
          message: t("streaming.invite.failed")
        });
      }
    });
    return function () {
      cancelled = true;
    };
  }, [token, t]);
  var onlineSet = new Set(onlineUsers.map(function (entry) {
    return entry.username;
  }));
  var handleInvite = function handleInvite(member) {
    var displayName = member.display_name || member.username;
    context.modal.open(t("streaming.invite.confirmMessage", {
      username: displayName
    }), {
      variant: "confirm",
      title: t("streaming.invite.title"),
      confirmLabel: t("streaming.invite.send"),
      cancelLabel: t("app.cancel"),
      onConfirm: function () {
        var _onConfirm = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          var result;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                setFeedback(null);
                _context.n = 1;
                return (0,_profile_api_js__WEBPACK_IMPORTED_MODULE_2__.sendInvite)(token, member.username, session.platform, session.consoleId, session.reference, session.id);
              case 1:
                result = _context.v;
                setFeedback(result.ok ? {
                  variant: "success",
                  message: t("streaming.invite.sent", {
                    username: displayName
                  })
                } : {
                  variant: "danger",
                  message: t("streaming.invite.failed")
                });
              case 2:
                return _context.a(2);
            }
          }, _callee);
        }));
        function onConfirm() {
          return _onConfirm.apply(this, arguments);
        }
        return onConfirm;
      }()
    });
  };
  var visibleMembers = (members || []).filter(function (member) {
    return self == null || member.username !== self;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.SectionPanel, {
    children: [feedback && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "small mb-0 text-".concat(feedback.variant),
      children: feedback.message
    }), members === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
      animation: "border",
      size: "sm",
      className: "align-self-center"
    }) : visibleMembers.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "text-muted small mb-0",
      children: t("streaming.invite.none")
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "d-flex flex-column gap-2 mt-3",
      children: visibleMembers.map(function (member) {
        var isOnline = onlineSet.has(member.username);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
            onClick: function onClick() {
              context.offcanvas.close();
              handleInvite(member);
            },
            icon: "bi bi-person",
            label: member.display_name || member.username,
            helpText: isOnline ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-success",
              children: t("streaming.invite.online")
            }) : t("streaming.invite.offline"),
            next: null
          })
        }, member.id);
      })
    })]
  });
}

/***/ }

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_remoteplay_service_input_service_js-src_webapp_src_app_gam-1e8bbb"],{

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/service/input.service.js"
/*!********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/service/input.service.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   remoteplayInputService: () => (/* binding */ remoteplayInputService)
/* harmony export */ });
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _libs_gameInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/gameInput.js */ "./src/webapp/src/app/gameflex/libs/gameInput.js");
/* harmony import */ var _gamepad_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamepad.service.js */ "./src/webapp/src/app/gameflex/stream/remoteplay/service/gamepad.service.js");
/* harmony import */ var _libs_serverBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/serverBase.js */ "./src/webapp/src/app/gameflex/libs/serverBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// stream/remoteplay/service/input.service.js — remote-play's input WebSocket, the SignalR replacement on the frontend.
//
// ONE JSON WebSocket per browser role against the remote-play service's
// /api/v1/remoteplay/input/ws (see internal/api/input_ws.go): bound at connect
// time via ?sessionId= (+ ?iceKey= — a viewer's own id — for a watcher's bind,
// which never takes the pad), fire-and-forget input, server pushes for
// rumble/health/control events. Replaces controller.service.js, streaming-hub.service.js and
// device-status-hub.service.js with a single transport.
//
// The public surface is the union of the three replaced services, so the
// four consumers (use-streaming-connection,
// use-device-status, Streaming.jsx) only change their import line.

;



// Tous les boutons qu'une entrée peut tenir — ceux de la manette, que le
// clavier et le pad tactile nomment de la même façon (voir setSuspended).
var RELEASABLE_BUTTONS = _toConsumableArray(new Set(Object.values(_gamepad_service_js__WEBPACK_IMPORTED_MODULE_2__.PS5_BUTTON_MAP)));


var RECONNECT_MIN_DELAY_MS = 1000;
var RECONNECT_MAX_DELAY_MS = 30000;
var REQUEST_TIMEOUT_MS = 5000;
function debugTrace() {
  if (typeof window !== "undefined" && window.__REMOTE_INPUT_DEBUG__) {
    var _console;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    (_console = console).debug.apply(_console, ["[remoteplay-input]"].concat(args));
  }
}

// decodeGatewayText — le canal de données livre du BINAIRE (voir
// dispatchGatewayMessage). On accepte les trois formes qu'un navigateur peut
// rendre : la chaîne, l'ArrayBuffer, et la vue typée. Le Blob est exclu
// exprès — il ne se lit qu'en asynchrone, et aucun navigateur ne le rend ici
// tant que `binaryType` vaut « arraybuffer », le défaut des canaux de données.
function decodeGatewayText(raw) {
  if (typeof raw === "string") {
    return raw;
  }
  if (raw instanceof ArrayBuffer) {
    return new TextDecoder().decode(new Uint8Array(raw));
  }
  if (ArrayBuffer.isView(raw)) {
    return new TextDecoder().decode(raw);
  }
  return null;
}
var RemoteplayInputService = /*#__PURE__*/function () {
  function RemoteplayInputService() {
    var _this = this;
    _classCallCheck(this, RemoteplayInputService);
    this.socket = null;
    this.sessionId = null;
    this.iceKey = null;
    this.boundSessionId = null;
    this.boundIceKey = null;
    this.boundViewerId = null;
    this.isConnecting = false;
    this.isManualDisconnect = false;
    this.reconnectAttempts = 0;
    this.reconnectTimer = null;

    // Phase B1: when set, controller messages ride the gateway's input
    // DataChannel (the retro/streamex path) instead of the input WS.
    this.gatewayInputSender = null;

    // LE MENU DE LA PARTIE OUVERT, LA CONSOLE N'ENTEND PLUS RIEN (#408) —
    // voir setSuspended. Toutes les entrées (manette, clavier, pad
    // tactile) passent par _sendController : c'est le seul endroit à
    // fermer.
    this.suspended = false;
    (0,_libs_gameInput_js__WEBPACK_IMPORTED_MODULE_1__.onGameInputSuspension)(function (suspended) {
      return _this.setSuspended(suspended);
    });
    this.rumbleListeners = new Set();
    this.stateListeners = new Set();
    this.healthUpdateListeners = new Set();
    this.devicesListeners = new Set();
    // L'ABONNEMENT À L'ÉTAT DES CONSOLES SURVIT À LA CONNEXION (2026-10-25).
    // Le serveur le range sur la connexion : une reconnexion (un proxy qui
    // coupe un WebSocket muet, un serveur redémarré) le perdait, et la
    // carte restait sur « Veille » jusqu'à ce qu'on revienne sur la page.
    // openSocket le renvoie à chaque connexion tant que ce drapeau est levé.
    this.devicesWanted = false;
    this.pendingPings = new Map(); // seq -> { resolve, timeout }
    this.pendingControllerState = null;

    // ICE restart callbacks kept for API compatibility — the backend
    // never pushed these events even over SignalR (they resolve via the
    // same fire-and-forget/timeout path as requestKeyframe).
    // chantier-4 — the gateway viewer id this page announced. It is what
    // the child's queue matches on, and it is NOT iceKey: iceKey collapses
    // to the sessionId for an owner, so two of the owner's own tabs would
    // be indistinguishable — and telling them apart is the whole model.
    this.viewerId = null;
  }

  // ── Transport ────────────────────────────────────────────────────────
  return _createClass(RemoteplayInputService, [{
    key: "socketURL",
    value: function socketURL() {
      var params = new URLSearchParams();
      if (this.sessionId) params.set("sessionId", this.sessionId);
      if (this.iceKey) params.set("iceKey", this.iceKey);
      if (this.viewerId) params.set("viewerId", this.viewerId);
      // /api/v1/remoteplay/* now requires a valid JWT (kernel's
      // remoteplayRouter, previously the one API surface with no auth
      // check at all) — a browser can't attach an Authorization header
      // to a WS handshake, same reason retro-gaming's own stream WS
      // carries it on ?token= (use-retrogaming-streaming-connection.js).
      // LE JETON DE L'HÔTE VISÉ, pas le nôtre (chantier 9, C9-P4).
      //
      // Ce socket porte la manette. Présenter notre jeton à un serveur
      // fédéré le fait refuser la poignée de main — et le symptôme n'est
      // pas « refusé », c'est une partie sans manette du tout.
      var token = (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_3__.streamAuthToken)() || (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_0__.getStoredToken)();
      if (token) params.set("token", token);
      var query = params.toString();
      // Under /api/v1/remoteplay like the rest of a game's stream: that
      // domain belongs to the kernel alone, so exactly one proxy entry can
      // claim the upgrade — which is what the separate /api-ws prefix had
      // been invented for (2026-08-25, ERR_CONNECTION_RESET, no controller).
      return (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_3__.wsUrl)("/api/v1/remoteplay/input/ws".concat(query ? "?".concat(query) : ""));
    }

    /**
     * Connect (or rebind) the socket. sessionId is the Takion session scope;
     * iceKey scopes ICE pushes (omit for the owner — defaults to sessionId
     * server-side).
     */
  }, {
    key: "connect",
    value: function connect(sessionId, iceKey) {
      this.sessionId = sessionId || this.sessionId;
      this.iceKey = iceKey || this.iceKey;
      if (!this.sessionId && !this.iceKey) {
        // Device-status-only connections (no session at all).
      }
      if (this.socket && this.socket.readyState === WebSocket.OPEN && !this.scopeChanged()) {
        return Promise.resolve();
      }
      this.isManualDisconnect = false;

      // Rebinding with different params reconnects the socket — the server
      // binding lives on the connection.
      if (this.socket) {
        try {
          this.socket.close();
        } catch (_unused) {
          // ignore
        }
        this.socket = null;
      }
      return this.openSocket();
    }
  }, {
    key: "openSocket",
    value: function openSocket() {
      var _this2 = this;
      this.isConnecting = true;
      this.boundSessionId = this.sessionId;
      this.boundIceKey = this.iceKey;
      this.boundViewerId = this.viewerId;
      this.notifyStateChange({
        isConnected: false,
        isConnecting: true
      });
      return new Promise(function (resolve, reject) {
        var socket = new WebSocket(_this2.socketURL());
        _this2.socket = socket;
        socket.onopen = function () {
          _this2.isConnecting = false;
          _this2.reconnectAttempts = 0;
          debugTrace("connected", _this2.socketURL());
          // Jamais sur le socket d'une PARTIE : il mène au conteneur de
          // session, qui n'a pas la liste des consoles — la demande l'y
          // abattait (signalé sur la 0.4.3, 2026-10-25).
          if (_this2.devicesWanted && !_this2.sessionId) {
            _this2.send({
              type: "subscribeDevices"
            });
          }
          _this2.notifyStateChange({
            isConnected: true,
            isConnecting: false
          });
          resolve();
        };
        socket.onmessage = function (event) {
          var message;
          try {
            message = JSON.parse(event.data);
          } catch (_unused2) {
            return;
          }
          _this2.handleServerMessage(message);
        };
        socket.onclose = function () {
          if (_this2.socket === socket) _this2.socket = null;
          _this2.failPendingRequests();
          _this2.isConnecting = false;
          _this2.notifyStateChange({
            isConnected: false,
            isConnecting: false
          });
          if (_this2.isManualDisconnect) return;
          _this2.scheduleReconnect();
        };
        socket.onerror = function () {
          reject(new Error("input websocket error"));
        };
      });
    }
  }, {
    key: "scopeChanged",
    value: function scopeChanged() {
      // The server binds sessionID/iceKey at connect time, so a different
      // scope (a viewer joining a session, say) needs a fresh socket.
      return this.sessionId !== this.boundSessionId || this.iceKey !== this.boundIceKey || this.viewerId !== this.boundViewerId;
    }
  }, {
    key: "scheduleReconnect",
    value: function scheduleReconnect() {
      var _this3 = this;
      var delay = Math.min(RECONNECT_MAX_DELAY_MS, RECONNECT_MIN_DELAY_MS * Math.pow(2, this.reconnectAttempts));
      this.reconnectAttempts++;
      debugTrace("reconnecting in", delay, "ms");
      this.reconnectTimer = setTimeout(function () {
        _this3.openSocket()["catch"](function () {});
      }, delay);
    }
  }, {
    key: "disconnect",
    value: function () {
      var _disconnect = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this.isManualDisconnect = true;
              clearTimeout(this.reconnectTimer);
              if (this.socket) {
                try {
                  this.socket.close();
                } catch (_unused3) {
                  // ignore
                }
              }
              this.socket = null;
              this.sessionId = null;
              this.iceKey = null;
              this.boundSessionId = null;
              this.boundIceKey = null;
              this.boundViewerId = null;
              this.failPendingRequests();
              this.notifyStateChange({
                isConnected: false,
                isConnecting: false
              });
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function disconnect() {
        return _disconnect.apply(this, arguments);
      }
      return disconnect;
    }()
  }, {
    key: "failPendingRequests",
    value: function failPendingRequests() {
      var _iterator = _createForOfIteratorHelper(this.pendingPings.values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
            resolve = _step$value.resolve,
            timeout = _step$value.timeout;
          clearTimeout(timeout);
          resolve(null);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.pendingPings.clear();
      if (this.pendingControllerState) {
        clearTimeout(this.pendingControllerState.timeout);
        this.pendingControllerState.reject(new Error("input websocket closed"));
        this.pendingControllerState = null;
      }
    }
  }, {
    key: "isConnected",
    value: function isConnected() {
      return !!this.socket && this.socket.readyState === WebSocket.OPEN && !!this.sessionId;
    }

    // Can controller input actually go out right now? Mirrors what
    // _sendController really does: the gateway DataChannel first, the raw
    // socket only as a fallback. isConnected() above answers a DIFFERENT
    // question (is the raw socket up) and must not be used as an input gate
    // — the stick loop did exactly that and silently dropped every stick
    // update while the DataChannel was perfectly alive, which is why buttons
    // worked and analog sticks did not (reported live 2026-08-24).
  }, {
    key: "canSendInput",
    value: function canSendInput() {
      return !!this.gatewayInputSender || this.isSocketOpen() && !!this.sessionId;
    }
  }, {
    key: "isSocketOpen",
    value: function isSocketOpen() {
      return !!this.socket && this.socket.readyState === WebSocket.OPEN;
    }
  }, {
    key: "send",
    value: function send(message) {
      if (!this.isSocketOpen()) return false;
      this.socket.send(JSON.stringify(message));
      return true;
    }

    // ── Server -> client events ──────────────────────────────────────────
  }, {
    key: "handleServerMessage",
    value: function handleServerMessage(message) {
      switch (message.type) {
        case "pong":
          {
            var pending = this.pendingPings.get(message.echo);
            if (pending) {
              clearTimeout(pending.timeout);
              this.pendingPings["delete"](message.echo);
              pending.resolve(message);
            }
            break;
          }
        case "controllerState":
          {
            if (this.pendingControllerState) {
              clearTimeout(this.pendingControllerState.timeout);
              var resolve = this.pendingControllerState.resolve;
              this.pendingControllerState = null;
              resolve(message.state);
            }
            break;
          }
        case "rumble":
          this.notifyRumble(this.normalizeRumblePayload(message));
          break;
        case "health":
          this.healthUpdateListeners.forEach(function (listener) {
            return listener(message.health);
          });
          break;
        case "devices":
          this.devicesListeners.forEach(function (listener) {
            return listener(message.devices);
          });
          break;
        default:
          debugTrace("unhandled server message", message.type);
      }
    }

    // ── Controller surface (ex-controller.service.js) ────────────────────

    // Phase B1: the owner page registers the gateway DataChannel as the
    // controller transport once it opens — send* below then bypass the WS.
  }, {
    key: "setGatewayInputSender",
    value: function setGatewayInputSender(sender) {
      this.gatewayInputSender = sender;
    }
  }, {
    key: "clearGatewayInputSender",
    value: function clearGatewayInputSender() {
      this.gatewayInputSender = null;
    }

    // B2: true once the gateway DataChannel carries the input — the hub
    // connection is then not needed (and binding it would re-create the
    // old phantom-holder problem).
  }, {
    key: "hasGatewaySender",
    value: function hasGatewaySender() {
      return Boolean(this.gatewayInputSender);
    }

    // B2 downlink: messages pushed from the child over the gateway input
    // DataChannel (rumble to the holder, etc.). Same dispatch shapes as
    // the hub _handleMessage path so listeners stay single-sourced.
  }, {
    key: "dispatchGatewayMessage",
    value: function dispatchGatewayMessage(raw) {
      var _message;
      // DÉCODER AVANT DE PARSER. Le canal de données livre du BINAIRE —
      // le gateway écrit `DataChannel.Send([]byte)`, donc la page reçoit
      // un ArrayBuffer, jamais une chaîne.
      //
      // `JSON.parse` d'un ArrayBuffer ne lit pas son contenu : il le passe
      // par `String()`, obtient « [object ArrayBuffer] », et lève. Le
      // `catch` renvoyait alors sans rien dire, et TOUTES les vibrations
      // de la PS5 disparaissaient ici — le serveur journalisait pourtant
      // « envoyé à gino », et la sonde de la page disait « reçu par la
      // page — ArrayBuffer ». Les deux étaient vrais : le message arrivait
      // bien, et se faisait jeter à la ligne suivante (2026-09-09).
      //
      // `decodeGatewayText` existait déjà, écrite pour ce cas précis, et
      // n'était appelée nulle part — une fonction posée puis oubliée au
      // moment du câblage, le même motif que les autres pertes de la
      // refonte.
      var text = decodeGatewayText(raw);
      if (text === null) {
        console.warn("[remoteplay-input] message du gateway illisible:", raw);
        return;
      }
      var message;
      try {
        message = JSON.parse(text);
      } catch (error) {
        // Un JSON invalide n'est pas une forme qu'on ne sait pas lire :
        // c'est une anomalie, et la taire est ce qui a coûté ce bug.
        console.warn("[remoteplay-input] JSON du gateway invalide:", text.slice(0, 200));
        return;
      }
      if (((_message = message) === null || _message === void 0 ? void 0 : _message.type) === "rumble") {
        this.notifyRumble(this.normalizeRumblePayload(message.payload));
      }
    }

    // SE TAIRE EN RELÂCHANT TOUT. Les deux boutons tenus cinq secondes pour
    // ouvrir le menu — et tout ce qui était enfoncé à ce moment-là — sont
    // relâchés AVANT le silence : sinon la console les garderait enfoncés
    // jusqu'à la fermeture du menu. Relâcher un bouton qui ne l'était pas ne
    // fait rien.
  }, {
    key: "setSuspended",
    value: function setSuspended(suspended) {
      if (suspended === this.suspended) {
        return;
      }
      if (suspended) {
        var _iterator2 = _createForOfIteratorHelper(RELEASABLE_BUTTONS),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var button = _step2.value;
            this._sendController({
              type: "button",
              button: button,
              action: "release",
              delayMs: 0
            });
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this._sendController({
          type: "sticks",
          lx: 0,
          ly: 0,
          rx: 0,
          ry: 0
        });
        this._sendController({
          type: "triggers",
          l2: 0,
          r2: 0
        });
      }
      this.suspended = suspended;
    }
  }, {
    key: "_sendController",
    value: function _sendController(message) {
      if (this.suspended) {
        return;
      }
      if (this.gatewayInputSender) {
        this.gatewayInputSender.send(message);
        return;
      }
      if (!this.isSocketOpen() || !this.sessionId) return;
      this.send(message);
    }
  }, {
    key: "sendButton",
    value: function () {
      var _sendButton = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(buttonName) {
        var action,
          delayMs,
          actualDelay,
          _args2 = arguments;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              action = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : "tap";
              delayMs = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 0;
              actualDelay = action === "tap" ? delayMs || 100 : delayMs || 0;
              this._sendController({
                type: "button",
                button: buttonName,
                action: action,
                delayMs: actualDelay
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function sendButton(_x) {
        return _sendButton.apply(this, arguments);
      }
      return sendButton;
    }()
  }, {
    key: "sendStick",
    value: function () {
      var _sendStick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(stickType, x, y) {
        var type;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              type = stickType === "LEFT" ? "leftStick" : "rightStick";
              this._sendController({
                type: type,
                x: x,
                y: y
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function sendStick(_x2, _x3, _x4) {
        return _sendStick.apply(this, arguments);
      }
      return sendStick;
    }()
  }, {
    key: "sendSticks",
    value: function () {
      var _sendSticks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(leftX, leftY, rightX, rightY) {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              this._sendController({
                type: "sticks",
                lx: leftX,
                ly: leftY,
                rx: rightX,
                ry: rightY
              });
            case 1:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function sendSticks(_x5, _x6, _x7, _x8) {
        return _sendSticks.apply(this, arguments);
      }
      return sendSticks;
    }()
  }, {
    key: "sendTriggers",
    value: function () {
      var _sendTriggers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(l2, r2) {
        var clampedL2, clampedR2;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              clampedL2 = Math.max(0, Math.min(1, l2));
              clampedR2 = Math.max(0, Math.min(1, r2));
              this._sendController({
                type: "triggers",
                l2: clampedL2,
                r2: clampedR2
              });
            case 1:
              return _context5.a(2);
          }
        }, _callee5, this);
      }));
      function sendTriggers(_x9, _x0) {
        return _sendTriggers.apply(this, arguments);
      }
      return sendTriggers;
    }() // One finger on the touchpad: which one (0 or 1), down or lifted, and
    // where — from 0 to 1 from the top-left corner. The host scales it to the
    // console's own pad (a DualShock 4 pad is shorter than a DualSense one),
    // so the page never needs to know which console it is talking to.
  }, {
    key: "sendTouch",
    value: function () {
      var _sendTouch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(finger, down, x, y) {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              this._sendController({
                type: "touch",
                finger: finger,
                down: down,
                x: x,
                y: y
              });
            case 1:
              return _context6.a(2);
          }
        }, _callee6, this);
      }));
      function sendTouch(_x1, _x10, _x11, _x12) {
        return _sendTouch.apply(this, arguments);
      }
      return sendTouch;
    }()
    /**
     * Round-trip probe (profil/GamepadParameters.jsx "Connexion serveur") —
     * the server echoes the sequence number with its own timestamp.
     */
  }, {
    key: "ping",
    value: (function () {
      var _ping = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(seq) {
        var _this4 = this;
        var clientSentAt;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (this.isSocketOpen()) {
                _context7.n = 1;
                break;
              }
              throw new Error("input websocket unavailable");
            case 1:
              clientSentAt = Date.now();
              return _context7.a(2, new Promise(function (resolve) {
                var timeout = setTimeout(function () {
                  _this4.pendingPings["delete"](seq);
                  resolve(null);
                }, REQUEST_TIMEOUT_MS);
                _this4.pendingPings.set(seq, {
                  resolve: resolve,
                  timeout: timeout
                });
                if (!_this4.send({
                  type: "ping",
                  echo: seq
                })) {
                  clearTimeout(timeout);
                  _this4.pendingPings["delete"](seq);
                  resolve(null);
                }
              }).then(function (result) {
                return result ? _objectSpread(_objectSpread({}, result), {}, {
                  clientSentAt: clientSentAt,
                  clientReceivedAt: Date.now()
                }) : null;
              }));
          }
        }, _callee7, this);
      }));
      function ping(_x13) {
        return _ping.apply(this, arguments);
      }
      return ping;
    }()
    /**
     * Reads back the server's own interpreted ControllerState for this
     * session — the other half of GamepadParameters.jsx's real-controller
     * diagnostic.
     */
    )
  }, {
    key: "getControllerState",
    value: function getControllerState() {
      var _this5 = this;
      if (!this.isSocketOpen() || !this.sessionId) {
        return Promise.reject(new Error("input websocket unavailable"));
      }
      return new Promise(function (resolve, reject) {
        _this5.pendingControllerState = {
          resolve: resolve,
          reject: reject,
          timeout: setTimeout(function () {
            _this5.pendingControllerState = null;
            reject(new Error("getControllerState timeout"));
          }, REQUEST_TIMEOUT_MS)
        };
        if (!_this5.send({
          type: "getControllerState"
        })) {
          clearTimeout(_this5.pendingControllerState.timeout);
          _this5.pendingControllerState = null;
          reject(new Error("input websocket send failed"));
        }
      });
    }
  }, {
    key: "onRumble",
    value: function onRumble(listener) {
      var _this6 = this;
      this.rumbleListeners.add(listener);
      return function () {
        return _this6.rumbleListeners["delete"](listener);
      };
    }
  }, {
    key: "onStateChange",
    value: function onStateChange(listener) {
      var _this7 = this;
      this.stateListeners.add(listener);
      return function () {
        return _this7.stateListeners["delete"](listener);
      };
    }
  }, {
    key: "notifyStateChange",
    value: function notifyStateChange(state) {
      this.stateListeners.forEach(function (listener) {
        return listener(state);
      });
    }
  }, {
    key: "normalizeRumblePayload",
    value: function normalizeRumblePayload(payload) {
      var _payload$rawLeft, _payload$rawRight, _payload$left, _payload$right;
      if (!payload || _typeof(payload) !== "object") return null;
      var ensureNumber = function ensureNumber(value, fallback) {
        return typeof value === "number" && Number.isFinite(value) ? value : fallback;
      };
      var clampToByte = function clampToByte(value) {
        if (!Number.isFinite(value)) return 0;
        if (value <= 0) return 0;
        if (value >= 255) return 255;
        return Math.round(value);
      };
      var rawLeft = clampToByte(ensureNumber((_payload$rawLeft = payload.rawLeft) !== null && _payload$rawLeft !== void 0 ? _payload$rawLeft : payload.left, 0));
      var rawRight = clampToByte(ensureNumber((_payload$rawRight = payload.rawRight) !== null && _payload$rawRight !== void 0 ? _payload$rawRight : payload.right, 0));
      var adjustedLeft = clampToByte(ensureNumber((_payload$left = payload.left) !== null && _payload$left !== void 0 ? _payload$left : payload.rawLeft, rawLeft));
      var adjustedRight = clampToByte(ensureNumber((_payload$right = payload.right) !== null && _payload$right !== void 0 ? _payload$right : payload.rawRight, rawRight));
      return {
        unknown: clampToByte(ensureNumber(payload.unknown, 0)),
        rawLeft: rawLeft,
        rawRight: rawRight,
        left: adjustedLeft,
        right: adjustedRight,
        multiplier: ensureNumber(payload.multiplier, 1),
        ps5RumbleIntensity: ensureNumber(payload.ps5RumbleIntensity, 0),
        ps5TriggerIntensity: ensureNumber(payload.ps5TriggerIntensity, 0),
        timestamp: typeof payload.timestamp === "string" ? payload.timestamp : null
      };
    }
  }, {
    key: "notifyRumble",
    value: function notifyRumble(event) {
      this.rumbleListeners.forEach(function (listener) {
        try {
          listener(event);
        } catch (error) {
          console.warn("Rumble event handling failed:", error);
        }
      });
    }

    // ── Streaming surface (ex-streaming-hub.service.js) ──────────────────
  }, {
    key: "joinSession",
    value: function () {
      var _joinSession = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(sessionId, iceKey) {
        var viewerId,
          _args8 = arguments,
          _t;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              viewerId = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : null;
              if (sessionId) {
                _context8.n = 1;
                break;
              }
              return _context8.a(2);
            case 1:
              if (!(this.sessionId !== sessionId || this.iceKey !== (iceKey || sessionId) || viewerId && this.viewerId !== viewerId)) {
                _context8.n = 5;
                break;
              }
              this.sessionId = sessionId;
              this.iceKey = iceKey || sessionId;
              if (viewerId) this.viewerId = viewerId;
              _context8.p = 2;
              _context8.n = 3;
              return this.connect(sessionId, this.iceKey);
            case 3:
              _context8.n = 5;
              break;
            case 4:
              _context8.p = 4;
              _t = _context8.v;
            case 5:
              return _context8.a(2);
          }
        }, _callee8, this, [[2, 4]]);
      }));
      function joinSession(_x14, _x15) {
        return _joinSession.apply(this, arguments);
      }
      return joinSession;
    }()
  }, {
    key: "requestKeyframe",
    value: function () {
      var _requestKeyframe = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              if (!(!this.isSocketOpen() || !this.sessionId)) {
                _context9.n = 1;
                break;
              }
              return _context9.a(2, false);
            case 1:
              this.send({
                type: "requestKeyframe"
              });
              // Fire-and-forget, same observable behavior as before (the server
              // never acknowledged these even over SignalR).
              return _context9.a(2, true);
          }
        }, _callee9, this);
      }));
      function requestKeyframe() {
        return _requestKeyframe.apply(this, arguments);
      }
      return requestKeyframe;
    }()
  }, {
    key: "forceResetReorderQueue",
    value: function () {
      var _forceResetReorderQueue = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              if (!(!this.isSocketOpen() || !this.sessionId)) {
                _context0.n = 1;
                break;
              }
              return _context0.a(2, false);
            case 1:
              this.send({
                type: "forceResetReorderQueue"
              });
              return _context0.a(2, true);
          }
        }, _callee0, this);
      }));
      function forceResetReorderQueue() {
        return _forceResetReorderQueue.apply(this, arguments);
      }
      return forceResetReorderQueue;
    }()
  }, {
    key: "reportNetworkLoss",
    value: function () {
      var _reportNetworkLoss = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(ratio) {
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              if (!(typeof ratio !== "number" || !Number.isFinite(ratio))) {
                _context1.n = 1;
                break;
              }
              return _context1.a(2);
            case 1:
              this.send({
                type: "reportNetworkStats",
                ratio: ratio
              });
            case 2:
              return _context1.a(2);
          }
        }, _callee1, this);
      }));
      function reportNetworkLoss(_x16) {
        return _reportNetworkLoss.apply(this, arguments);
      }
      return reportNetworkLoss;
    }()
  }, {
    key: "onHealthUpdate",
    value: function onHealthUpdate(listener) {
      var _this8 = this;
      this.healthUpdateListeners.add(listener);
      return function () {
        return _this8.healthUpdateListeners["delete"](listener);
      };
    }

    // ── Device-status surface (ex-device-status-hub.service.js) ──────────
  }, {
    key: "onDevices",
    value: function onDevices(listener) {
      var _this9 = this;
      this.devicesListeners.add(listener);
      return function () {
        return _this9.devicesListeners["delete"](listener);
      };
    }
  }, {
    key: "subscribeDevices",
    value: function subscribeDevices() {
      this.devicesWanted = true;
      if (!this.isSocketOpen()) {
        // L'ouverture s'abonne d'elle-même (openSocket).
        return this.connect(null, null);
      }
      // Le socket d'une partie ne porte pas la liste : l'abonnement attend
      // la prochaine connexion au service (openSocket).
      if (!this.sessionId) {
        this.send({
          type: "subscribeDevices"
        });
      }
      return Promise.resolve();
    }
  }]);
}(); // Singleton instance — one socket per page role, shared by the hooks.
var remoteplayInputService = new RemoteplayInputService();

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/service/playstation.service.js"
/*!**************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/service/playstation.service.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playStationService: () => (/* binding */ playStationService)
/* harmony export */ });
/* harmony import */ var _service_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/service/api-client */ "./src/webapp/src/app/service/api-client.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
;

// Device info type

// Bind device request type

// User device type

/**
 * PlayStation device service
 */
var playStationService = {
  /**
   * Discover PlayStation consoles on the local network
   */
  discoverDevices: function () {
    var _discoverDevices = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(timeoutMs) {
      var params;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            params = timeoutMs ? "?timeoutMs=".concat(timeoutMs) : "";
            return _context.a(2, (0,_service_api_client__WEBPACK_IMPORTED_MODULE_0__.apiRequest)("/playstation/discover".concat(params), {
              method: "GET"
            }));
        }
      }, _callee);
    }));
    function discoverDevices(_x) {
      return _discoverDevices.apply(this, arguments);
    }
    return discoverDevices;
  }(),
  /**
   * Discover a PlayStation console at a specific IP
   */
  discoverDevice: function () {
    var _discoverDevice = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(hostIp, timeoutMs) {
      var params;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            params = timeoutMs ? "?timeoutMs=".concat(timeoutMs) : "";
            return _context2.a(2, (0,_service_api_client__WEBPACK_IMPORTED_MODULE_0__.apiRequest)("/playstation/discover/".concat(hostIp).concat(params), {
              method: "GET"
            }));
        }
      }, _callee2);
    }));
    function discoverDevice(_x2, _x3) {
      return _discoverDevice.apply(this, arguments);
    }
    return discoverDevice;
  }(),
  /**
   * Bind a PS console to the current user
   */
  bindDevice: function () {
    var _bindDevice = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(data) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            return _context3.a(2, (0,_service_api_client__WEBPACK_IMPORTED_MODULE_0__.apiRequest)("/playstation/bind", {
              method: "POST",
              body: JSON.stringify(data)
            }));
        }
      }, _callee3);
    }));
    function bindDevice(_x4) {
      return _bindDevice.apply(this, arguments);
    }
    return bindDevice;
  }(),
  /**
   * Get the list of devices bound to the current user
   */
  getMyDevices: function () {
    var _getMyDevices = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            return _context4.a(2, (0,_service_api_client__WEBPACK_IMPORTED_MODULE_0__.apiRequest)("/playstation/my-devices", {
              method: "GET"
            }));
        }
      }, _callee4);
    }));
    function getMyDevices() {
      return _getMyDevices.apply(this, arguments);
    }
    return getMyDevices;
  }(),
  /**
   * Wake up console from standby
   */
  wakeUpConsole: function () {
    var _wakeUpConsole = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(userDeviceId) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            return _context5.a(2, (0,_service_api_client__WEBPACK_IMPORTED_MODULE_0__.apiRequest)("/playstation/wake/".concat(encodeURIComponent(userDeviceId)), {
              method: "POST"
            }));
        }
      }, _callee5);
    }));
    function wakeUpConsole(_x5) {
      return _wakeUpConsole.apply(this, arguments);
    }
    return wakeUpConsole;
  }(),
  /**
   * Get device streaming settings
   */
  getDeviceSettings: function () {
    var _getDeviceSettings = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(deviceId) {
      var host,
        _args6 = arguments;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            host = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : null;
            return _context6.a(2, (0,_service_api_client__WEBPACK_IMPORTED_MODULE_0__.apiRequest)("/playstation/device-settings/".concat(deviceId), {
              method: "GET",
              host: host
            }));
        }
      }, _callee6);
    }));
    function getDeviceSettings(_x6) {
      return _getDeviceSettings.apply(this, arguments);
    }
    return getDeviceSettings;
  }(),
  /**
   * Update device streaming settings
   */
  updateDeviceSettings: function () {
    var _updateDeviceSettings = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(deviceId, data) {
      var host,
        _args7 = arguments;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            host = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : null;
            return _context7.a(2, (0,_service_api_client__WEBPACK_IMPORTED_MODULE_0__.apiRequest)("/playstation/device-settings/".concat(deviceId), {
              method: "POST",
              body: JSON.stringify(data),
              host: host
            }));
        }
      }, _callee7);
    }));
    function updateDeviceSettings(_x7, _x8) {
      return _updateDeviceSettings.apply(this, arguments);
    }
    return updateDeviceSettings;
  }()
};

/***/ }

}]);
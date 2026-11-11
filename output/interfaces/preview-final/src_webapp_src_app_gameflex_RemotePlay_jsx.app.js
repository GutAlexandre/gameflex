"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_RemotePlay_jsx"],{

/***/ "./src/webapp/src/app/gameflex/RemotePlay.jsx"
/*!****************************************************!*\
  !*** ./src/webapp/src/app/gameflex/RemotePlay.jsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemotePlay)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./src/webapp/src/node_modules/react-router/dist/index.js");
/* harmony import */ var _libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/sessionLinks.js */ "./src/webapp/src/app/gameflex/libs/sessionLinks.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./src/webapp/src/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/ListGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../skeleton/skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var _contexts_ConsolesContext_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contexts/ConsolesContext.jsx */ "./src/webapp/src/app/gameflex/contexts/ConsolesContext.jsx");
/* harmony import */ var _api_remoteplay_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/remoteplay.js */ "./src/webapp/src/app/gameflex/api/remoteplay.js");
/* harmony import */ var _libs_capabilities_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./libs/capabilities.js */ "./src/webapp/src/app/gameflex/libs/capabilities.js");
/* harmony import */ var _libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./libs/federatedHost.js */ "./src/webapp/src/app/gameflex/libs/federatedHost.js");
/* harmony import */ var _libs_federationSession_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./libs/federationSession.js */ "./src/webapp/src/app/gameflex/libs/federationSession.js");
/* harmony import */ var _libs_consoleGrants_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./libs/consoleGrants.js */ "./src/webapp/src/app/gameflex/libs/consoleGrants.js");
/* harmony import */ var _shared_FederatedAccountPanel_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/FederatedAccountPanel.jsx */ "./src/webapp/src/app/gameflex/shared/FederatedAccountPanel.jsx");
/* harmony import */ var _shared_LaunchConflict_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/LaunchConflict.jsx */ "./src/webapp/src/app/gameflex/shared/LaunchConflict.jsx");
/* harmony import */ var _stream_remoteplay_service_playstation_service_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stream/remoteplay/service/playstation.service.js */ "./src/webapp/src/app/gameflex/stream/remoteplay/service/playstation.service.js");
/* harmony import */ var _stream_shared_StreamSettings_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stream/shared/StreamSettings.jsx */ "./src/webapp/src/app/gameflex/stream/shared/StreamSettings.jsx");
/* harmony import */ var _gameflex_stream_remoteplay_service_streaming_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/gameflex/stream/remoteplay/service/streaming.service */ "./src/webapp/src/app/gameflex/stream/remoteplay/service/streaming.service.js");
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./libs/SessionPool.js */ "./src/webapp/src/app/gameflex/libs/SessionPool.js");
/* harmony import */ var _libs_streamingSettingsStorage_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./libs/streamingSettingsStorage.js */ "./src/webapp/src/app/gameflex/libs/streamingSettingsStorage.js");
/* harmony import */ var _stream_remoteplay_hooks_use_device_status_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./stream/remoteplay/hooks/use-device-status.js */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-device-status.js");
/* harmony import */ var _stream_remoteplay_hooks_use_federated_device_status_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./stream/remoteplay/hooks/use-federated-device-status.js */ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-federated-device-status.js");
/* harmony import */ var _profile_settings_admin_storage_SourceSelector_jsx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./profile/settings/admin/storage/SourceSelector.jsx */ "./src/webapp/src/app/gameflex/profile/settings/admin/storage/SourceSelector.jsx");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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





















// LE MÊME SÉLECTEUR QUE LA LUDOTHÈQUE ET QUE L'ADMINISTRATION, pas un troisième.
// « D'où je liste » se pose ici exactement comme ailleurs ; en écrire un autre
// finirait par le nommer autrement ou oublier son aide.



var Form = _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Form;
var Ruleset = _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Ruleset;

// Only PlayStation is backed by a real implementation (golang/src/internal/
// remote/playstation) — other remoteplay-method consoles (internal/consoles
// registry) are listed for the sidebar but have no server-side support yet.
// LES IDENTIFIANTS DU JEU À DISTANCE PORTENT `rp-` (2026-09-10).
//
// Le préfixe distingue la console jouée à distance de son émulation, qui garde
// l'identifiant simple — c'est la variante à distance qui est provisoire, voir
// `shared/consoles/registry.go` pour le raisonnement.
var PLATFORM_BY_CONSOLE = {
  "rp-ps4": "playstation",
  "rp-ps5": "playstation",
  "rp-xboxseries": "xbox",
  "rp-steam": "steam",
  "rp-switch2": "nintendo"
};

// D'OÙ VIENT CETTE CONSOLE — d'ici, ou de la machine de quelqu'un d'autre.
//
// Deux PS5 portent souvent le même nom et toujours le même type : ce qui
// les distingue est le serveur qui les tient. Sans cette mention, choisir
// entre elles revient à choisir au hasard (demandé le 2026-09-07).
//
// `source` est le nom du serveur fédéré, tel qu'il a été ajouté ici. Son
// absence veut dire « cette machine », et c'est le seul cas qui se traduit :
// le nom d'un serveur, lui, ne se traduit pas.
function deviceSourceLabel(device, t) {
  return device.source || t("remoteplay.device.sourceLocal");
}
function DeviceCard(_ref) {
  var device = _ref.device,
    statusMap = _ref.statusMap,
    t = _ref.t,
    onClick = _ref.onClick;
  // hasActiveSession (from DeviceOut, golang/src/internal/api/handlers.go)
  // overrides the plain online/standby/offline badge — someone else is
  // already streaming this console, distinct from just being reachable.
  // Same amber accent + wording as the source app's DeviceCard.jsx.
  //
  // CORROBORATED against the kernel's session pool — see the detail panel's
  // `busy`. A badge that says "in use" about a free console is not a
  // cosmetic problem: it is the reason the owner stops trying.
  var liveSession = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_21__.useSession)(device.id);
  var st = device.hasActiveSession && liveSession ? {
    bg: "warning",
    label: t("remoteplay.device.sessionActive")
  } : statusMap[device.status] || {
    bg: "secondary",
    label: device.status
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_26__.ListElement, {
    onClick: onClick,
    icon: "bi bi-playstation",
    label: device.hostName || device.hostId,
    helpText: "".concat(device.hostType, " \xB7 ").concat(device.ipAddress, " (").concat(deviceSourceLabel(device, t), ")"),
    next: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
      className: "d-flex justify-content-end align-items-end gap-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        bg: st.bg,
        className: "rounded-pill px-3 py-2",
        style: {
          fontSize: "0.75rem"
        },
        children: st.label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("i", {
        className: "bi bi-chevron-right text-muted fs-5 flex-shrink-0"
      })]
    })
  });
}

// How long the Turn-on button stays out of reach after a wake packet. Wake-on-
// LAN gets no acknowledgement, so this is not a protocol timeout — it is how
// long we are willing to say "wait" before admitting the console is not coming.
var WAKE_TIMEOUT_MS = 30000;

// ── Offcanvas: détail d'un appareil + actions ──────────────────────────────
function DeviceDetailPanel(_ref2) {
  var _parseFederatedId;
  var initialDevice = _ref2.device,
    statusMap = _ref2.statusMap,
    t = _ref2.t,
    context = _ref2.context,
    onChanged = _ref2.onChanged;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var _useAuth = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_20__.useAuth)(),
    user = _useAuth.user,
    isAdmin = _useAuth.isAdmin,
    token = _useAuth.token;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialDevice),
    _useState2 = _slicedToArray(_useState, 2),
    device = _useState2[0],
    setDevice = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    pendingAction = _useState4[0],
    setPendingAction = _useState4[1];
  // A DEADLINE, not a boolean: "waking until" survives re-renders, makes the
  // 30s cap explicit, and cannot be left stuck on by a missed reset. A
  // console that never answers must not disable its own button for good.
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    wakingUntil = _useState6[0],
    setWakingUntil = _useState6[1];
  var isAwake = device.status === "online" || device.status === "awake";
  var isWaking = wakingUntil > 0 && !isAwake;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    isLoading = _useState8[0],
    setIsLoading = _useState8[1];
  // CETTE CONSOLE EST-ELLE CHEZ QUELQU'UN D'AUTRE ?
  //
  // `serverId` ne vient QUE de la fédération (voir handleRemoteDevices) :
  // une console d'ici n'en a pas, et n'en aura jamais. C'est donc lui qui
  // décide de tout ce qui suit — pas un test de plateforme, pas une
  // devinette sur l'adresse.
  var federatedServer = device.serverId ? {
    id: device.serverId,
    link: device.link,
    name: device.source
  } : null;
  // La session CHEZ LUI, au nom de NOTRE compte de chez lui : notre kernel
  // l'échange contre le jeton qu'on y a reçu et collé ici une fois (chantier
  // 20). Tant qu'elle n'est pas là — pas de jeton, ou il le refuse —, on ne
  // touche pas à sa console : le panneau montre où coller le jeton.
  var _useFederationSession = (0,_libs_federationSession_js__WEBPACK_IMPORTED_MODULE_13__.useFederationSession)(federatedServer === null || federatedServer === void 0 ? void 0 : federatedServer.id),
    account = _useFederationSession.session,
    refusal = _useFederationSession.code,
    isOpening = _useFederationSession.isLoading;
  // CE COMPTE-LÀ LANCE-T-IL CETTE CONSOLE CHEZ LUI : ses consoles (`rp-ps5`…).
  // Le lien nous montre toutes ses consoles à distance ; jouer sur l'une
  // d'elles reste une affaire de compte.
  var grantedThere = Boolean(account) && (0,_libs_consoleGrants_js__WEBPACK_IMPORTED_MODULE_14__.allows)(account.consoles, {
    id: "rp-".concat(String(device.hostType || "").toLowerCase())
  });
  var needsSignIn = Boolean(federatedServer) && (!account || !grantedThere);
  // CE QU'IL FAUT POUR TOUCHER CETTE CONSOLE : chez qui, et avec quoi.
  //
  // Null pour une console d'ici — les appels partent alors comme avant, sur
  // notre propre kernel. Null AUSSI tant qu'on n'a pas de session là-bas :
  // un appel sans elle se ferait refuser, et le panneau dit déjà pourquoi.
  var remoteHost = federatedServer && account ? {
    origin: federatedServer.link,
    token: account.token
  } : null;
  // L'identifiant tel que L'HÔTE le connaît. Le préfixe `srv<id>:` est à
  // nous seuls — chez lui, cette console porte son nom d'origine, et lui
  // envoyer notre écriture ne rendrait jamais rien.
  var remoteDeviceId = federatedServer ? ((_parseFederatedId = (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_12__.parseFederatedId)(device.id)) === null || _parseFederatedId === void 0 ? void 0 : _parseFederatedId.id) || device.id : device.id;
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      resolution: "720p",
      frameRate: "60",
      bitrate: "auto"
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    values = _useState0[0],
    setValues = _useState0[1];
  var formContext = {
    values: values,
    setValues: setValues,
    files: {},
    setFiles: function setFiles() {},
    rulesets: {}
  };

  // The panel is opened with a snapshot of `device` (a plain prop, not a
  // live subscription — it's rendered through an offcanvas portal, not as
  // a normal re-rendering child of DeviceList) — without this, waking the
  // console never updates the Power/Connect button here, only a fresh
  // fetch would. Same "device-status" SignalR hub DeviceList itself uses
  // below, filtered down to just this device by hostId.
  var onDevicesUpdate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (devices) {
    var match = devices.find(function (d) {
      return d.hostId === initialDevice.hostId;
    });
    if (match) setDevice(function (prev) {
      return _objectSpread(_objectSpread({}, prev), match);
    });
  }, [initialDevice.hostId]);
  // LE HUB NE CONNAÎT QUE LES CONSOLES D'ICI, et il apparie par `hostId`.
  //
  // Laissé branché sur une console fédérée, il lui collerait l'état d'une
  // console LOCALE qui porte le même hostId — cas très ordinaire, puisque
  // deux salons ont chacun leur 192.168.1.x. Le panneau montrerait alors la
  // veille d'une autre machine.
  (0,_stream_remoteplay_hooks_use_device_status_js__WEBPACK_IMPORTED_MODULE_23__.useDeviceStatus)({
    onDevicesUpdate: onDevicesUpdate,
    onStatusUpdate: onDevicesUpdate,
    enabled: !federatedServer && (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_11__.can)("spawnsSessions")
  });
  // … et une console fédérée se relit chez son serveur, par la liste
  // fédérée : sans quoi « Allumer » la laissait sur « Veille » ici.
  var onFederatedDevices = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (devices) {
    var match = devices.find(function (d) {
      return d.id === initialDevice.id;
    });
    if (match) setDevice(function (prev) {
      return _objectSpread(_objectSpread({}, prev), match);
    });
  }, [initialDevice.id]);
  (0,_stream_remoteplay_hooks_use_federated_device_status_js__WEBPACK_IMPORTED_MODULE_24__.useFederatedDeviceStatus)({
    enabled: Boolean(federatedServer),
    onDevices: onFederatedDevices
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cancelled = false;

    // LES RÉGLAGES APPARTIENNENT À CELUI QUI TIENT LA CONSOLE.
    //
    // Tant qu'on n'a pas de session chez lui, il n'y a rien à demander :
    // les demander à NOTRE serveur ne rendrait qu'une erreur, et une toast
    // rouge à chaque ouverture de panneau. Le panneau dit déjà pourquoi.
    if (federatedServer && !remoteHost) {
      setIsLoading(false);
      return undefined;
    }
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var result, local, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return _stream_remoteplay_service_playstation_service_js__WEBPACK_IMPORTED_MODULE_17__.playStationService.getDeviceSettings(remoteDeviceId, remoteHost);
          case 1:
            result = _context.v;
            if (!cancelled) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            if (result.success && result.data) {
              // Local (per-user, per-hostType) preference wins over the
              // server's device-wide row — see streamingSettingsStorage.js.
              // Falls back to whatever's saved server-side, then hardcoded
              // defaults, so the form is never empty on first visit.
              local = (0,_libs_streamingSettingsStorage_js__WEBPACK_IMPORTED_MODULE_22__.loadStreamingSettings)(device.hostType);
              setValues({
                resolution: (local === null || local === void 0 ? void 0 : local.resolution) || result.data.settings.resolution || "720p",
                frameRate: (local === null || local === void 0 ? void 0 : local.frameRate) || result.data.settings.frameRate || "60",
                bitrate: (local === null || local === void 0 ? void 0 : local.bitrate) || result.data.settings.bitrate || "auto"
              });
            } else {
              context.toast.open(result.errorMessage || t("remoteplay.settings.loadFailed"), {
                variant: "error"
              });
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            if (!cancelled) {
              // UN REFUS DE L'AMI REDEMANDE LA SESSION, il n'affiche pas
              // une erreur : elle vaut un temps, et il la juge lui-même.
              // Oubliée, notre kernel la ré-échange — ou dit, par le
              // panneau, que l'ami refuse désormais notre jeton.
              if (federatedServer && isUnauthorized(_t)) {
                (0,_libs_federationSession_js__WEBPACK_IMPORTED_MODULE_13__.forgetFederationToken)(account === null || account === void 0 ? void 0 : account.token);
              } else {
                context.toast.open((_t === null || _t === void 0 ? void 0 : _t.message) || t("remoteplay.settings.loadFailed"), {
                  variant: "error"
                });
              }
            }
          case 4:
            _context.p = 4;
            // LE PANNEAU S'OUVRE, QUOI QU'IL ARRIVE. Ses réglages ont leurs
            // valeurs par défaut, et le reste — réveiller, se connecter,
            // oublier la console — reste à portée de main. Un serveur muet
            // ne doit pas emprisonner l'écran.
            if (!cancelled) setIsLoading(false);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3, 4, 5]]);
    }))();
    return function () {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [device.id, Boolean(remoteHost)]);

  // Two ways out, and both must exist: the console turns up (isAwake), or
  // the clock runs out. Bound to wakingUntil alone so a status poll landing
  // every second cannot keep rebuilding the timer and pushing the deadline
  // away — a console that never answers must not disable its button for good.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (wakingUntil === 0) {
      return undefined;
    }
    var timer = setTimeout(function () {
      return setWakingUntil(0);
    }, Math.max(0, wakingUntil - Date.now()));
    return function () {
      return clearTimeout(timer);
    };
  }, [wakingUntil]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isAwake) {
      setWakingUntil(0);
    }
  }, [isAwake]);
  var handleWake = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setPendingAction("wake");
            _context2.p = 1;
            _context2.n = 2;
            return (0,_api_remoteplay_js__WEBPACK_IMPORTED_MODULE_10__.wakeDevice)(remoteDeviceId, remoteHost);
          case 2:
            result = _context2.v;
            // Wake-on-LAN is a shout into the dark: the packet leaves, and the
            // console answers by turning up as "online" in the status poll — or
            // never. So the button stays out of reach until one of those two
            // happens, and 30s is the point where we stop waiting rather than
            // leave someone staring at a control they cannot press.
            if (result.ok) {
              setWakingUntil(Date.now() + WAKE_TIMEOUT_MS);
            }
            context.toast.open(result.ok ? t("remoteplay.device.wakeSent") : result.errorMessage || t("remoteplay.device.wakeFailed"), {
              variant: result.ok ? "success" : "error"
            });
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error("échec du réveil de la console", _t2);
            context.toast.open(t("remoteplay.device.wakeFailed"), {
              variant: "error"
            });
          case 4:
            _context2.p = 4;
            setPendingAction(null);
            return _context2.f(4);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3, 4, 5]]);
    }));
    return function handleWake() {
      return _ref4.apply(this, arguments);
    };
  }();
  var _handleConnect = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var result, sessionResponse, rawMessage, sessionData, sessionId, _t3, _t4;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            // The backend has no per-session settings override — ConnectWebRTC's
            // launch_spec always reads the device's saved settings row (see
            // resolveDeviceStreamSettings in playstation_handlers.go), so saving
            // here (right before launch) is the only way the form's current
            // values actually reach the stream. Saved to localStorage in
            // parallel so *this* browser's preference survives independently of
            // whatever the device row ends up holding after someone else connects.
            setPendingAction("connect");
            (0,_libs_streamingSettingsStorage_js__WEBPACK_IMPORTED_MODULE_22__.saveStreamingSettings)(device.hostType, values);
            // Même piège qu'à l'ouverture du panneau : un `apiRequest` qui lance
            // sautait tout le reste, et le bouton gardait son « … » sans jamais
            // revenir. Un enregistrement raté n'est pas fatal — on le dit, et on
            // tente quand même la session, qui a sa propre issue juste en dessous.
            _context3.p = 1;
            _context3.n = 2;
            return _stream_remoteplay_service_playstation_service_js__WEBPACK_IMPORTED_MODULE_17__.playStationService.updateDeviceSettings(remoteDeviceId, values, remoteHost);
          case 2:
            result = _context3.v;
            if (!result.success) {
              context.toast.open(result.errorMessage || t("remoteplay.settings.saveFailed"), {
                variant: "error"
              });
            }
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            context.toast.open((_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || t("remoteplay.settings.saveFailed"), {
              variant: "error"
            });
          case 4:
            _context3.p = 4;
            _context3.n = 5;
            return _gameflex_stream_remoteplay_service_streaming_service__WEBPACK_IMPORTED_MODULE_19__.streamingService.startSession(device.hostId,
            // LE NOM SOUS LEQUEL ON EST CONNU LÀ-BAS, pas celui d'ici.
            // C'est lui qui prendra la place dans la file de joueurs de
            // l'hôte : y envoyer notre nom local ferait entrer dans sa
            // file quelqu'un qui n'existe pas chez lui.
            remoteHost ? account.username : user === null || user === void 0 ? void 0 : user.username, remoteHost);
          case 5:
            sessionResponse = _context3.v;
            _context3.n = 8;
            break;
          case 6:
            _context3.p = 6;
            _t4 = _context3.v;
            setPendingAction(null);
            // UNE AUTRE PARTIE EST LÀ : le même choix que sur le catalogue
            // (shared/LaunchConflict.jsx) — y retourner, la terminer, ou
            // arrêter celle où l'on joue déjà.
            if (!(0,_shared_LaunchConflict_jsx__WEBPACK_IMPORTED_MODULE_16__.handleLaunchConflict)({
              result: _t4 === null || _t4 === void 0 ? void 0 : _t4.result,
              context: context,
              t: t,
              token: token,
              host: remoteHost,
              navigate: navigate,
              retryLaunch: function retryLaunch() {
                return _handleConnect();
              }
            })) {
              _context3.n = 7;
              break;
            }
            return _context3.a(2);
          case 7:
            // The PS5 itself refuses a handshake for a few seconds after the
            // previous session closed — session.go rejects at two different
            // points depending on timing ("init rejected: HTTP 403" or
            // "ctrl rejected: HTTP 403", session.go:126/191) — the backend
            // wraps either as a technical 500, but for the user it's just a
            // cooldown, so show that instead of the generic failure message.
            // Confirmed live (2026-08-22): a "ctrl rejected" case was falling
            // through to the generic message because this only matched
            // "init rejected".
            rawMessage = _t4 instanceof Error ? _t4.message : "";
            context.toast.open(rawMessage.includes("init rejected") || rawMessage.includes("ctrl rejected") ? t("remoteplay.connect.cooldown") : t("streaming.connection.errors.sessionCreateFailed"), {
              variant: "error"
            });
            return _context3.a(2);
          case 8:
            setPendingAction(null);
            if (sessionResponse.success) {
              _context3.n = 9;
              break;
            }
            context.toast.open(sessionResponse.errorMessage || t("streaming.connection.errors.sessionCreateFailed"), {
              variant: "error"
            });
            return _context3.a(2);
          case 9:
            sessionData = sessionResponse.data || sessionResponse.result || {};
            sessionId = sessionData.id || sessionData.Id || sessionData.sessionId || sessionData.session_id; // A plain navigation, not an offcanvas — see Streaming.jsx for why
            // (a fullscreen offcanvas kept growing skeleton.js's generic
            // offcanvas API with streaming-only concerns for a single caller).
            // offcanvas.close() first — unlike Wake (you stay on this panel to
            // see the result), Connect leaves it entirely for a fullscreen page;
            // without closing it explicitly it just stays open underneath,
            // reappearing once the streaming page's own Exit navigates back here.
            context.offcanvas.close();
            // Connect IS the intent to play (see buildStreamingUrl). Without it
            // the page lands in watch on a session nobody holds — for remoteplay
            // that means no controller at all, since the child's queue is now the
            // only thing that opens the input path.
            // L'IDENTIFIANT REPART PRÉFIXÉ quand la session vit ailleurs.
            //
            // L'hôte l'a frappé dans SON espace, et deux serveurs y frappent les
            // mêmes ; sans le préfixe, la page de streaming irait chercher cette
            // session dans notre propre façade — au mieux elle ne trouverait
            // rien, au pire elle trouverait l'homonyme d'ici. Même raison, même
            // écriture que pour un jeu fédéré depuis le chantier 6.
            navigate((0,_libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_2__.buildStreamingUrl)({
              sessionId: federatedServer ? (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_12__.federatedId)(federatedServer.id, sessionId) : sessionId,
              play: true
            }));
          case 10:
            return _context3.a(2);
        }
      }, _callee3, null, [[4, 6], [1, 3]]);
    }));
    return function handleConnect() {
      return _ref5.apply(this, arguments);
    };
  }();
  // Someone else already has an active session on this device
  // (hasActiveSession) — join as a spectator instead of starting a new
  // session (la porte rendrait simplement la session existante). Le
  // serveur indexe les sessions par identifiant d'APPAREIL — c'est le
  // contrat que `launchRemoteplay` respecte, et c'est pourquoi
  // `device.id` doubles as the session id to attach to here — no separate
  // lookup needed.
  // Is the live session on this device MINE? A device with an active
  // session offers WATCH — correct for somebody else's game, wrong for my
  // own, which is how "I connected, saw nothing, left, and could not get
  // back in" happened: the only way back was a watch link, and a watch
  // link is inert by design. The Dashboard has had this rule since
  // chantier-3 ("take my session back"); this page never got it.
  var liveSession = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_21__.useSession)(device.id);
  var isMySession = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_21__.isOwnSession)(liveSession, user === null || user === void 0 ? void 0 : user.username);
  // hasActiveSession must be CORROBORATED. It comes from a map in the
  // remoteplay service that nothing reliably cleans (its own comment says
  // so): the entry outlives the stream, stays hidden while the console is
  // in standby, and reappears the moment it wakes — so a console nobody is
  // using answers "someone is connected" and never offers Play again
  // (reported live 2026-08-25: "j'ai rallumé la PS5 et le bouton n'est
  // jamais passé à play").
  //
  // The kernel's session pool is the registry of REAL sessions. A device
  // claiming one the kernel has never heard of is a leak, not a session.
  // Deliberately not the reverse check (trusting the device over the pool):
  // being wrong this way offers Play on a console somebody else is using,
  // and starting a session is idempotent per device, while being wrong the
  // other way locks the owner out of their own console for good.
  var busy = !!device.hasActiveSession && !!liveSession;
  var handleResume = function handleResume() {
    context.offcanvas.close();
    navigate((0,_libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_2__.buildStreamingUrl)({
      sessionId: device.id,
      play: true
    }));
  };
  var handleWatch = function handleWatch() {
    // Same reason as handleConnect above — this also leaves the panel
    // for a fullscreen page. No more separate /watch route — a single
    // /streaming decides owner/player/spectate itself from
    // session.me.role (see Streaming.jsx's own doc); deviceName/
    // consoleId still come from the session itself (libs/SessionPool.js).
    context.offcanvas.close();
    // Watch carries no intent — deliberately. This is the path for a
    // device someone else is already using.
    navigate((0,_libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_2__.buildStreamingUrl)({
      sessionId: device.id
    }));
  };
  var handleDelete = function handleDelete() {
    context.modal.open(t("remoteplay.device.deleteConfirmMessage", {
      name: device.hostName || device.hostId
    }), {
      variant: "confirm",
      title: t("remoteplay.device.deleteConfirmTitle"),
      confirmLabel: t("remoteplay.device.deleteConfirmLabel"),
      cancelLabel: t("remoteplay.device.deleteCancelLabel"),
      onConfirm: function () {
        var _onConfirm = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
          var result, _t5;
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.p = _context4.n) {
              case 0:
                setPendingAction("delete");
                _context4.p = 1;
                _context4.n = 2;
                return (0,_api_remoteplay_js__WEBPACK_IMPORTED_MODULE_10__.deleteDevice)(device.id);
              case 2:
                result = _context4.v;
                if (result.ok) {
                  context.offcanvas.close();
                  onChanged({
                    removed: device.id
                  });
                } else {
                  context.toast.open(result.errorMessage || t("remoteplay.device.deleteFailed"), {
                    variant: "error"
                  });
                }
                _context4.n = 4;
                break;
              case 3:
                _context4.p = 3;
                _t5 = _context4.v;
                console.error("échec de la suppression de l'appareil", _t5);
                context.toast.open(t("remoteplay.device.deleteFailed"), {
                  variant: "error"
                });
              case 4:
                _context4.p = 4;
                setPendingAction(null);
                return _context4.f(4);
              case 5:
                return _context4.a(2);
            }
          }, _callee4, null, [[1, 3, 4, 5]]);
        }));
        function onConfirm() {
          return _onConfirm.apply(this, arguments);
        }
        return onConfirm;
      }()
    });
  };
  var st = device.hasActiveSession ? {
    bg: "warning",
    label: t("remoteplay.device.sessionActive")
  } : statusMap[device.status] || {
    bg: "secondary",
    label: device.status
  };
  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_26__.AsyncSectionPanel, {
      isLoading: true
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_26__.OffCanvas, {
    icon: "bi bi-playstation",
    label: device.hostName || device.hostId,
    helpText: "".concat(device.hostType, " \xB7 ").concat(device.ipAddress, " \xB7 (").concat(deviceSourceLabel(device, t), ")"),
    callback: function () {
      // TANT QU'ON N'A PAS DE SESSION LÀ-BAS, il n'y a rien à
      // faire : une tentative se ferait refuser par le serveur d'en
      // face, ce qui est vrai mais illisible. Avec elle, les appels
      // partent chez lui (C9-P4b) et le bouton reprend son sens.
      if (needsSignIn) {
        return null;
      }
      if (busy) {
        return isMySession ? handleResume : handleWatch;
      } else if (device.status === "standby" || device.status === "offline") {
        return handleWake;
      } else if (isAwake) {
        return _handleConnect;
      }
      return null;
    }(),
    buttonLabel: function () {
      if (needsSignIn) {
        return isOpening ? "•••" : t("federation.notPlayable");
      }
      if (busy) {
        return isMySession ? t("dashboard.mySessions.resume") : t("remoteplay.device.watch");
      } else if (isWaking) {
        return t("remoteplay.device.turningOn");
      } else if (device.status === "standby" || device.status === "offline") {
        return t("remoteplay.device.turnOn");
      } else if (isAwake) {
        return t("remoteplay.device.play");
      }
      return t("remoteplay.device.busy");
    }(),
    isDisabled: needsSignIn || pendingAction !== null || isWaking,
    isPending: pendingAction === "connect" || pendingAction === "wake" || pendingAction === "delete",
    helpButton: isAdmin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "danger",
      onClick: handleDelete,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("i", {
        className: "bi bi-trash"
      })
    }) : null,
    children: [federatedServer && !isOpening && (account ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_FederatedAccountPanel_jsx__WEBPACK_IMPORTED_MODULE_15__.FederatedAccount, {
        server: federatedServer,
        account: account,
        t: t
      }), !grantedThere && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_FederatedAccountPanel_jsx__WEBPACK_IMPORTED_MODULE_15__.FederatedRefusal, {
        server: federatedServer,
        code: "remoteLaunchRefused",
        t: t
      })]
    }) : refusal === "noFederatedAccount" || refusal === "accountRefused" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_FederatedAccountPanel_jsx__WEBPACK_IMPORTED_MODULE_15__.FederatedTokenForm, {
      server: federatedServer,
      refused: refusal === "accountRefused",
      t: t,
      context: context
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_FederatedAccountPanel_jsx__WEBPACK_IMPORTED_MODULE_15__.FederatedRefusal, {
      server: federatedServer,
      code: refusal,
      t: t
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_26__.SectionPanel, {
      label: t("remoteplay.device.details"),
      helpText: t("remoteplay.device.detailsHelp"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
        className: "d-flex flex-column gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(DetailRow, {
          label: t("remoteplay.device.type"),
          value: device.hostType
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(DetailRow, {
          label: t("remoteplay.device.ip"),
          value: device.ipAddress
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(DetailRow, {
          label: t("remoteplay.device.status"),
          value: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
            bg: st.bg,
            className: "rounded-pill px-3 py-1",
            style: {
              fontSize: "0.75rem"
            },
            children: st.label
          })
        })]
      }), isAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
        className: "mt-3 border-top pt-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "danger",
          onClick: handleDelete,
          className: "d-flex justify-content-center w-100",
          children: t("remoteplay.device.delete")
        })
      })]
    }), !needsSignIn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_stream_shared_StreamSettings_jsx__WEBPACK_IMPORTED_MODULE_18__.StreamSettings, {
      t: t,
      context: formContext,
      toast: context.toast
    })]
  });
}

// UNE LIGNE SANS VALEUR NE S'AFFICHE PAS.
//
// « PSN ID » et « Status » restaient à l'écran, vides, sur une console
// appairée depuis le téléphone : le premier n'est délibérément pas publié par
// son kernel, le second manquait (2026-09-10). Un libellé suivi de rien se lit
// comme un défaut, alors que c'est parfois simplement une chose qu'on ne sait
// pas — la même règle « pas de section vide » que le reste du menu.
function DetailRow(_ref6) {
  var label = _ref6.label,
    value = _ref6.value;
  if (value === null || value === undefined || value === "") {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
    className: "d-flex justify-content-between align-items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("span", {
      className: "text-muted small",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("span", {
      className: "text-body fw-semibold small",
      children: value
    })]
  });
}

// ── Offcanvas: enregistrer un nouvel appareil ──────────────────────────────
// Platform/model are fixed by the console the user picked in the sidebar —
// no need to ask again here (unlike a generic cross-platform form).
var IDENTIFIER_LABEL_FALLBACK = {
  playstation: "PSN ID",
  xbox: "Gamertag",
  steam: "Steam"
};

// Le site qui donne l'identifiant de compte PSN (Base64) qu'attend
// l'appairage d'une console.
var PSN_ACCOUNT_ID_URL = "https://psn.flipscreen.games/";
function RegisterPanel(_ref7) {
  var platform = _ref7.platform,
    hostType = _ref7.hostType,
    consoleName = _ref7.consoleName,
    t = _ref7.t,
    context = _ref7.context,
    onRegistered = _ref7.onRegistered;
  // Hooks must run unconditionally — the "unsupported platform" early
  // return happens further down, after they're declared.
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: "",
      ip: "",
      identifier: "",
      pin: ""
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    values = _useState10[0],
    setValues = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isSubmitting = _useState12[0],
    setIsSubmitting = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isDiscovering = _useState14[0],
    setIsDiscovering = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    discovered = _useState16[0],
    setDiscovered = _useState16[1];
  var title = t("remoteplay.register.title", {
    console: consoleName
  });

  // Temporary: only PlayStation is supported for now, so the other consoles just show a "not supported yet" message.
  // The form is still rendered for them, but the submit button is disabled.
  if (platform !== "playstation") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
      className: "d-flex flex-column h-100",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
        className: "d-flex align-items-center justify-content-between gap-3 mb-3 border-bottom pb-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("h5", {
          className: "fw-bold mb-0",
          children: title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("p", {
        className: "text-muted",
        children: t("remoteplay.notSupportedYet", {
          platform: consoleName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
        className: "d-flex gap-2 mt-auto border-top pt-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "secondary",
          className: "w-25 py-2",
          onClick: function onClick() {
            return context.offcanvas.close();
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("i", {
            className: "bi bi-arrow-left"
          })
        })
      })]
    });
  }
  var rulesets = {
    name: function name(data) {
      return !data.name || data.name.length < 2 ? Ruleset.isInvalid(t("form.required")) : null;
    },
    ip: function ip(data) {
      return !data.ip ? Ruleset.isInvalid(t("form.required")) : null;
    },
    identifier: function identifier(data) {
      return !data.identifier ? Ruleset.isInvalid(t("form.required")) : null;
    },
    pin: function pin(data) {
      if (data.pin === null || data.pin === undefined || data.pin === "") return Ruleset.isInvalid(t("form.required"));
      if (!/^\d{1,8}$/.test(String(data.pin))) return Ruleset.isInvalid(t("remoteplay.register.pinInvalid"));
      return null;
    }
  };
  var formContext = {
    values: values,
    setValues: setValues,
    files: {},
    setFiles: function setFiles() {},
    rulesets: rulesets
  };
  var identifierLabel = t("remoteplay.register.identifierLabel.".concat(platform), IDENTIFIER_LABEL_FALLBACK[platform] || "ID");
  var handleDiscover = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var result, found, _t6;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            setIsDiscovering(true);
            setDiscovered([]);
            _context5.p = 1;
            _context5.n = 2;
            return _stream_remoteplay_service_playstation_service_js__WEBPACK_IMPORTED_MODULE_17__.playStationService.discoverDevices();
          case 2:
            result = _context5.v;
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t6 = _context5.v;
            // Troisième fois le même piège. Ici l'appel reste chez nous, mais
            // la diffusion est refusée à une application Android
            // (`netlinkrib: permission denied`) — un cas très réel.
            setIsDiscovering(false);
            context.toast.open((_t6 === null || _t6 === void 0 ? void 0 : _t6.message) || t("remoteplay.register.discoverFailed"), {
              variant: "error"
            });
            return _context5.a(2);
          case 4:
            setIsDiscovering(false);
            if (result.success) {
              found = result.data || [];
              setDiscovered(found);
              if (found.length === 0) {
                context.toast.open(t("remoteplay.register.discoverEmpty"), {
                  variant: "normal"
                });
              }
            } else {
              context.toast.open(result.errorMessage || t("remoteplay.register.discoverFailed"), {
                variant: "error"
              });
            }
          case 5:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    return function handleDiscover() {
      return _ref8.apply(this, arguments);
    };
  }();
  var applyDiscovered = function applyDiscovered(device) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      ip: device.ip,
      name: values.name || device.name || ""
    }));
    setDiscovered([]);
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var result, _t7;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            setIsSubmitting(true);
            _context6.p = 1;
            _context6.n = 2;
            return (0,_api_remoteplay_js__WEBPACK_IMPORTED_MODULE_10__.registerDevice)(_objectSpread(_objectSpread({}, values), {}, {
              hostType: hostType
            }));
          case 2:
            result = _context6.v;
            if (result.ok) {
              context.toast.open(t("remoteplay.register.success"), {
                variant: "success"
              });
              context.offcanvas.close();
              onRegistered();
            } else {
              context.toast.open(result.errorMessage || t("remoteplay.register.failure"), {
                variant: "error"
              });
            }
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t7 = _context6.v;
            console.error("échec de l'enregistrement de l'appareil", _t7);
            context.toast.open(t("remoteplay.register.failure"), {
              variant: "error"
            });
          case 4:
            _context6.p = 4;
            setIsSubmitting(false);
            return _context6.f(4);
          case 5:
            return _context6.a(2);
        }
      }, _callee6, null, [[1, 3, 4, 5]]);
    }));
    return function handleSubmit() {
      return _ref9.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_26__.OffCanvas, {
    icon: "bi bi-playstation",
    label: title,
    helpText: t("remoteplay.register.helpText"),
    isDisabled: isSubmitting || isDiscovering,
    buttonLabel: isSubmitting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      animation: "border",
      size: "sm"
    }) : t("remoteplay.register.submit"),
    callback: handleSubmit,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_26__.SectionPanel, {
      label: t("remoteplay.register.formTitle"),
      helpText: t("remoteplay.register.formHelp"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(Form, {
        context: formContext
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(Form.Group, {
        label: t("remoteplay.register.name"),
        helpText: t("remoteplay.register.nameHelp"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(Form.Text, {
          name: "name",
          context: formContext,
          props: {
            placeholder: t("remoteplay.register.namePlaceholder")
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(Form.Group, {
        label: t("remoteplay.register.ip"),
        helpText: t("remoteplay.register.ipHelp"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
          className: "d-flex gap-2 align-items-start",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
            className: "flex-grow-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(Form.Text, {
              name: "ip",
              context: formContext,
              props: {
                placeholder: t("remoteplay.register.ipPlaceholder")
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
            variant: "secondary",
            title: t("remoteplay.register.discover"),
            "aria-label": t("remoteplay.register.discover"),
            disabled: isDiscovering,
            onClick: handleDiscover,
            children: isDiscovering ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
              animation: "border",
              size: "sm"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("i", {
              className: "bi bi-broadcast"
            })
          })]
        }), discovered.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mt-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
            className: "text-muted small px-2 pt-1 pb-2",
            children: t("remoteplay.register.discoverResultsLabel")
          }), discovered.map(function (device) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
              action: true,
              onClick: function onClick() {
                return applyDiscovered(device);
              },
              className: "d-flex justify-content-between align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("span", {
                children: device.name || device.ip
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("span", {
                className: "text-muted small",
                children: [device.hostType, " \xB7 ", device.ip]
              })]
            }, device.ip);
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(Form.Group, {
        label: identifierLabel,
        helpText: t("remoteplay.register.identifierHint"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(Form.Text, {
          name: "identifier",
          context: formContext
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          as: "a",
          href: PSN_ACCOUNT_ID_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "link",
          size: "sm",
          className: "mt-2 p-0 text-decoration-none",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
            className: "d-flex align-items-center justify-content-end",
            children: t("remoteplay.register.getViaPsnLogin")
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(Form.Group, {
        label: t("remoteplay.register.pin"),
        helpText: t("remoteplay.register.pinHelp"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(Form.IntFloat, {
          name: "pin",
          context: formContext,
          min: 0,
          max: 99999999,
          step: 1,
          props: {
            placeholder: t("remoteplay.register.pinPlaceholder")
          }
        })
      })]
    })
  });
}

// ── Liste des appareils d'une console donnée ───────────────────────────────
function DeviceList(_ref0) {
  var platform = _ref0.platform,
    hostType = _ref0.hostType,
    consoleName = _ref0.consoleName,
    t = _ref0.t,
    context = _ref0.context;
  // Keys must match the Go backend's actual status strings exactly
  // (listDevicesWithLiveStatus / handleWakeUp in playstation_handlers.go
  // only ever emit "awake"/"standby"/"offline", never "online") — a stale
  // "online" key here meant every genuinely-awake device fell through to
  // the {bg:"secondary", label: device.status} fallback, showing the raw
  // untranslated word "awake" instead of a proper badge.
  var statusMap = {
    awake: {
      bg: "success",
      label: t("remoteplay.status.awake")
    },
    standby: {
      bg: "warning",
      label: t("remoteplay.status.standby")
    },
    offline: {
      bg: "secondary",
      label: t("remoteplay.status.offline")
    }
  };
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    devices = _useState18[0],
    setDevices = _useState18[1];
  // LES CONSOLES D'AILLEURS VIVENT À PART, et ce n'est pas un détail de
  // rangement : le hub de statut ci-dessous pousse la liste LOCALE en
  // entier, à chaque changement. Fusionner les deux dans un seul état
  // ferait disparaître les fédérées au premier réveil de console d'ici.
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    federatedDevices = _useState20[0],
    setFederatedDevices = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState22 = _slicedToArray(_useState21, 2),
    isLoading = _useState22[0],
    setIsLoading = _useState22[1];
  // Cet hôte peut-il appairer une console de SON réseau — et donc en tenir
  // une liste à lui ?
  //
  // C'était `spawnsSessions`, ce qui revenait à dire « un hôte qui n'ouvre
  // pas de session ne peut pas appairer ». Vrai par accident tant qu'un
  // téléphone ne parlait pas aux consoles ; faux depuis qu'il sert
  // lui-même les routes remote-play (C9-P6). Une capacité doit dire ce
  // qu'elle est.
  //
  // Et ces consoles sont celles de QUI JOUE ICI : sur un téléphone, de son
  // propriétaire (`playsHere`). Un membre n'a ni à les voir — le carnet
  // porte leurs clés — ni à en ajouter (2026-10-08).
  var _useAuth2 = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_20__.useAuth)(),
    playsHere = _useAuth2.playsHere;
  var hostsDevices = (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_11__.can)("pairsConsoles") && playsHere;

  // Explicit one-shot re-fetch for actions this component itself triggers
  // (register/delete) — snappier than waiting for the next hub push.
  // Background status changes (wake, session start/end, the server's own
  // 5s TCP-reachability poll) instead arrive live via the "device-status"
  // hub below — without it, e.g. waking a console never flips its card
  // from Standby to Online without a manual reload.
  var refresh = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var result, federated;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if (!hostsDevices) {
              _context7.n = 2;
              break;
            }
            _context7.n = 1;
            return (0,_api_remoteplay_js__WEBPACK_IMPORTED_MODULE_10__.listDevices)();
          case 1:
            result = _context7.v;
            if (result.ok) {
              setDevices(result.data || []);
            } else {
              context.toast.open(result.errorMessage || t("remoteplay.loadFailed"), {
                variant: "error"
              });
            }
          case 2:
            _context7.n = 3;
            return (0,_api_remoteplay_js__WEBPACK_IMPORTED_MODULE_10__.listFederatedDevices)();
          case 3:
            federated = _context7.v;
            setFederatedDevices(federated.ok ? federated.data || [] : []);
            setIsLoading(false);
          case 4:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function refresh() {
      return _ref1.apply(this, arguments);
    };
  }();
  var onDevicesUpdate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (updated) {
    setDevices(updated);
    setIsLoading(false);
  }, []);
  (0,_stream_remoteplay_hooks_use_device_status_js__WEBPACK_IMPORTED_MODULE_23__.useDeviceStatus)({
    onDevicesUpdate: onDevicesUpdate,
    onStatusUpdate: onDevicesUpdate,
    enabled: hostsDevices
  });
  // Les consoles d'ailleurs n'ont pas ce WebSocket : elles se relisent.
  var onFederatedDevices = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (updated) {
    return setFederatedDevices(updated);
  }, []);
  (0,_stream_remoteplay_hooks_use_federated_device_status_js__WEBPACK_IMPORTED_MODULE_24__.useFederatedDeviceStatus)({
    enabled: federatedDevices.length > 0,
    onDevices: onFederatedDevices
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // UNE SOURCE À LA FOIS, comme dans la ludothèque (#166).
  //
  // Les deux listes étaient FUSIONNÉES — d'ici puis d'ailleurs — ce qui
  // mêlait dans un même défilement des consoles qu'on allume d'un geste et
  // des consoles qu'il faut d'abord emprunter à quelqu'un. La question qu'on
  // se pose devant cet écran est « qu'est-ce que J'AI » ou « qu'est-ce que
  // MON AMI prête », jamais les deux à la fois.
  //
  // Le descripteur est celui de la ludothèque, mot pour mot (`local` ou
  // `peer:<id>`) : deux écrans qui posent la même question doivent y répondre
  // dans la même langue, sinon chacun invente la sienne.
  var toutesLesConsoles = platform === "playstation" ? [].concat(_toConsumableArray(devices), _toConsumableArray(federatedDevices)).filter(function (device) {
    return String(device.hostType).toUpperCase() === hostType;
  }) : [];

  // LE LOCAL OUVRE TOUJOURS LA LISTE, même seul : le sélecteur ne sert pas
  // qu'à choisir, il dit aussi d'où vient ce qu'on regarde.
  var availableSources = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var trouves = new Map();
    var _iterator = _createForOfIteratorHelper(toutesLesConsoles),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var device = _step.value;
        if (!device.serverId) {
          continue;
        }
        var valeur = "peer:".concat(device.serverId);
        if (!trouves.has(valeur)) {
          trouves.set(valeur, device.source || t("remoteplay.device.sourceLocal"));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return [{
      value: "local",
      label: t("remoteplay.device.sourceLocal")
    }].concat(_toConsumableArray(_toConsumableArray(trouves.entries()).map(function (_ref10) {
      var _ref11 = _slicedToArray(_ref10, 2),
        value = _ref11[0],
        label = _ref11[1];
      return {
        value: value,
        label: label
      };
    }).sort(function (a, b) {
      return a.label.localeCompare(b.label);
    })));
  }, [toutesLesConsoles, t]);
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("local"),
    _useState24 = _slicedToArray(_useState23, 2),
    source = _useState24[0],
    setSource = _useState24[1];
  // Un pair oublié depuis le dernier affichage retombe sur le local : laisser
  // le sélecteur sur un choix absent montrerait une liste vide en prétendant
  // filtrer.
  var selectedSource = availableSources.some(function (option) {
    return option.value === source;
  }) ? source : "local";
  var devicesForConsole = toutesLesConsoles.filter(function (device) {
    return device.serverId ? selectedSource === "peer:".concat(device.serverId) : selectedSource === "local";
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_profile_settings_admin_storage_SourceSelector_jsx__WEBPACK_IMPORTED_MODULE_25__["default"], {
      t: t,
      value: selectedSource,
      onChange: setSource,
      options: availableSources,
      canRefresh: false,
      label: t("remoteplay.device.sourceTitle"),
      helpText: t("remoteplay.device.sourceHelp")
    }), hostsDevices && selectedSource === "local" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_26__.ListElement, {
      light: true,
      onClick: function onClick() {
        return context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(RegisterPanel, {
          platform: platform,
          hostType: hostType,
          consoleName: consoleName,
          t: t,
          context: context,
          onRegistered: refresh
        }), {
          size: 600
        });
      },
      icon: "bi bi-plus-lg",
      label: t("remoteplay.addDevice"),
      helpText: t("remoteplay.addDeviceDesc")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_26__.ListingElement, {
      callback: function callback(item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(DeviceCard, {
          device: item,
          statusMap: statusMap,
          t: t,
          onClick: function onClick() {
            return context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(DeviceDetailPanel, {
              device: item,
              statusMap: statusMap,
              t: t,
              context: context,
              onChanged: function onChanged(_ref12) {
                var removed = _ref12.removed;
                return setDevices(function (current) {
                  return (
                    // L'appareil retiré part de la liste, SUR
                    // PLACE (#295) : elle ne se relit pas.
                    current.filter(function (other) {
                      return other.id !== removed;
                    })
                  );
                });
              }
            }), {
              size: 600
            });
          }
        }, item.id);
      },
      items: devicesForConsole,
      itemCount: devicesForConsole.length,
      isLoading: isLoading,
      texts: {
        placeholderSearch: null,
        itemsFound: t("remoteplay.devicesFound"),
        noItemsFound: t("remoteplay.noDevicesFound")
      }
    })]
  });
}

// « Ce serveur ne nous connaît pas » se lit dans le STATUT que porte l'erreur
// d'`apiRequest`. On fouillait son message tant que les services Go refusaient
// en texte brut et que la lecture JSON échouait avant qu'on regarde le 401.
function isUnauthorized(error) {
  return (error === null || error === void 0 ? void 0 : error.status) === 401 || (error === null || error === void 0 ? void 0 : error.status) === 403;
}

// ── Page: liste des appareils d'une console donnée ─────────────────────────
function RemotePlay() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
    t = _useTranslation.t;
  var _useAuth3 = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_20__.useAuth)(),
    playsHere = _useAuth3.playsHere;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].context);
  var consoles = (0,_contexts_ConsolesContext_jsx__WEBPACK_IMPORTED_MODULE_9__.useConsoles)();
  var consoleId = location.pathname.split("/").filter(Boolean)[1] || "";
  var consoleMeta = consoles.find(function (c) {
    return c.id === consoleId && c.method === "remoteplay";
  });
  var consoleName = (consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.name) || consoleId.toUpperCase();
  var platform = PLATFORM_BY_CONSOLE[consoleId] || "playstation";
  // LE PRÉFIXE N'EST PAS UN TYPE DE MATÉRIEL.
  //
  // `hostType` est ce que la CONSOLE dit d'elle-même (« PS5 »), et c'est
  // sur lui que la liste d'appareils filtre. Le tirer de l'identifiant tel
  // quel donnerait « RP-PS5 », qui ne correspond à aucune console — la
  // liste serait vide sans que rien ne le dise (2026-09-10, en préfixant
  // les identifiants du jeu à distance).
  var hostType = consoleId.replace(/^rp-/, "").toUpperCase();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_26__.Page, {
    label: consoleName
    /* Le sous-titre PROMETTAIT d'ajouter un appareil sur un hôte qui
       n'a pas le bouton — le téléphone, dont la même capacité
       `pairsConsoles` masque l'ajout plus bas. Une page qui annonce
       un geste impossible se lit comme un bug de l'application, et
       c'en est un : signalé le 2026-09-09 (« je fais comment pour
       tester ? »). Elle dit maintenant ce qui est vrai chez elle.
       NUANCE DEPUIS LE 2026-09-19 : le bouton dépend AUSSI de la
       source regardée (local seulement). Ce sous-titre ne suit pas
       cette seconde condition, délibérément — il décrit ce que l'hôte
       SAIT faire, pas ce que la vue courante propose, et le faire
       changer au fil du sélecteur le rendrait mouvant sans rien
       apprendre. */,
    helpText: (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_11__.can)("pairsConsoles") && playsHere ? t("remoteplay.devicesDescription") : t("remoteplay.devicesDescriptionRemote"),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(DeviceList, {
      platform: platform,
      hostType: hostType,
      consoleName: consoleName,
      t: t,
      context: context
    })
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/api/remoteplay.js"
/*!*******************************************************!*\
  !*** ./src/webapp/src/app/gameflex/api/remoteplay.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteDevice: () => (/* binding */ deleteDevice),
/* harmony export */   listDevices: () => (/* binding */ listDevices),
/* harmony export */   listFederatedDevices: () => (/* binding */ listFederatedDevices),
/* harmony export */   registerDevice: () => (/* binding */ registerDevice),
/* harmony export */   wakeDevice: () => (/* binding */ wakeDevice)
/* harmony export */ });
/* harmony import */ var _libs_serverBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/serverBase.js */ "./src/webapp/src/app/gameflex/libs/serverBase.js");
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/federatedHost.js */ "./src/webapp/src/app/gameflex/libs/federatedHost.js");
/* harmony import */ var _shared_utils_error_code_translator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/error-code-translator.js */ "./src/webapp/src/app/gameflex/shared/utils/error-code-translator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["host"];
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
;



// Thin wrapper around remoteplay-bin — the PlayStation consoles and the PSN
// account, under /api/v1/playstation. The stream of a running game is
// another domain, /api/v1/remoteplay, served by the kernel (see
// service/api-client.js).
// Envelope is {success, data, message} / {success:false, errorMessage} —
// different from the Python backend's {state, item, exception} used
// elsewhere in gameflex/ (see skeleton/examples/backendinteraction).

var PLAYSTATION = "/api/v1/playstation";
function api(_x) {
  return _api.apply(this, arguments);
}
function _api() {
  _api = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(path) {
    var options,
      host,
      rest,
      res,
      token,
      json,
      _args = arguments,
      _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          // L'HÔTE VISÉ, quand la console n'est pas d'ici (chantier 9, C9-P4).
          // Adresse et jeton voyagent ensemble, passés à l'appel — voir la note du
          // client de streaming, qui suit exactement la même règle.
          host = options.host, rest = _objectWithoutProperties(options, _excluded);
          // Le jeton, attaché ICI aussi.
          //
          // Ce module et `stream/remoteplay/service/api-client.js` appellent le
          // MÊME service ; un chantier de sécurité précédent avait ajouté
          // l'en-tête dans l'autre, et celui-ci est resté en clair. Personne ne
          // s'en est aperçu pour une raison qui vaut d'être retenue : le service
          // n'exigeait rien, donc l'oubli ne se voyait pas — c'est en fermant le
          // service (2026-08-27) que la page a cessé de charger ses appareils.
          //
          // getStoredToken plutôt qu'un paramètre : ce module n'est pas un
          // composant et n'a pas de contexte. Il rend null sur un appareil sans
          // compte, où ces appels DOIVENT échouer (voir chantier 6, C6-P11).
          // Le jeton de l'hôte visé quand la page en vise un (C9-P4c), le nôtre
          // sinon. Même ordre que dans le client de streaming, et pour la même
          // raison : deux façons de choisir finiraient par ne plus dire pareil.
          token = host ? host.token : (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_0__.streamAuthToken)() || (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_1__.getStoredToken)();
          _context.p = 1;
          _context.n = 2;
          return fetch(host !== null && host !== void 0 && host.origin ? "".concat(host.origin).concat(path) : (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_0__.apiUrl)(path), _objectSpread({
            headers: _objectSpread(_objectSpread({
              "Content-Type": "application/json"
            }, token ? {
              Authorization: "Bearer ".concat(token)
            } : {}), rest.headers || {})
          }, rest));
        case 2:
          res = _context.v;
          _context.n = 4;
          break;
        case 3:
          _context.p = 3;
          _t = _context.v;
          return _context.a(2, (0,_shared_utils_error_code_translator_js__WEBPACK_IMPORTED_MODULE_3__.serverUnreachable)(host !== null && host !== void 0 && host.origin ? (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_2__.federatedServerName)(host.origin) : ""));
        case 4:
          _context.n = 5;
          return res.json()["catch"](function () {
            return (0,_shared_utils_error_code_translator_js__WEBPACK_IMPORTED_MODULE_3__.invalidResponse)();
          });
        case 5:
          json = _context.v;
          return _context.a(2, _objectSpread(_objectSpread({}, json), {}, {
            ok: res.ok && json.success !== false
          }));
      }
    }, _callee, null, [[1, 3]]);
  }));
  return _api.apply(this, arguments);
}
function listDevices() {
  return api("".concat(PLAYSTATION, "/my-devices"));
}

/**
 * Les consoles à distance des serveurs FÉDÉRÉS (chantier 9, C9-P2).
 *
 * Demandée à notre propre kernel, et non aux serveurs d'en face : le jeton
 * d'un serveur enregistré vit dans sa base et n'en sort jamais — c'est ce qui
 * ouvre le catalogue de quelqu'un d'autre. La page n'a donc rien à présenter
 * là-bas, et c'est le kernel qui va chercher (voir handleRemoteDevices).
 *
 * Chaque console repart avec `source` (le nom du serveur, affiché sous elle)
 * et `serverId` (par quoi on retrouvera où s'y connecter). Un serveur muet
 * est sauté sans le dire : une liste ne dépend pas du routeur d'un autre.
 */
function listFederatedDevices() {
  return api("/api/v1/servers/remoteplay/devices");
}
function registerDevice(_ref) {
  var name = _ref.name,
    ip = _ref.ip,
    identifier = _ref.identifier,
    pin = _ref.pin,
    _ref$hostType = _ref.hostType,
    hostType = _ref$hostType === void 0 ? "PS5" : _ref$hostType;
  return api("".concat(PLAYSTATION, "/bind"), {
    method: "POST",
    body: JSON.stringify({
      deviceName: name,
      hostIp: ip,
      accountId: identifier,
      pin: pin,
      hostType: hostType
    })
  });
}
function wakeDevice(deviceId) {
  var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return api("".concat(PLAYSTATION, "/wake/").concat(encodeURIComponent(deviceId)), {
    method: "POST",
    host: host
  });
}
function deleteDevice(deviceId) {
  return api("".concat(PLAYSTATION, "/devices/").concat(encodeURIComponent(deviceId)), {
    method: "DELETE"
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/libs/streamingSettingsStorage.js"
/*!**********************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/libs/streamingSettingsStorage.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStreamingSettings: () => (/* binding */ loadStreamingSettings),
/* harmony export */   saveStreamingSettings: () => (/* binding */ saveStreamingSettings)
/* harmony export */ });
// Per-user, per-platform streaming quality preference (resolution/frameRate/
// bitrate), kept in this browser's localStorage rather than only on the
// server. The Go backend has a single settings row per *device*
// (golang/src/internal/api/playstation_handlers.go, resolveDeviceStreamSettings
// — read by ConnectWebRTC's launch_spec, no per-session override exists), so
// several people sharing the same console would otherwise keep overwriting
// each other's preference. Keying by hostType (e.g. "PS4"/"PS5") instead of a
// specific device id means the preference follows the user across any
// device of that type, and each browser/user keeps their own — matching the
// intent of "chacun garde son settings, par rapport à la plateforme".
var STORAGE_PREFIX = "remoteplay-streaming-settings:";

// UNE PRÉFÉRENCE PEUT SURVIVRE À L'OPTION QU'ELLE DÉSIGNE.
//
// Le 2026-09-20, « 480p » a été retiré de l'échelle (voir `StreamSettings.jsx`)
// parce que la PS5 refuse de l'ouvrir. Les navigateurs, eux, gardaient la
// préférence : elle serait revenue dans le formulaire, aurait affiché une
// valeur absente de la liste, et un simple « Enregistrer » l'aurait réécrite
// côté serveur. Une préférence périmée est donc OUBLIÉE — l'appelant retombe
// alors sur son propre défaut, ce qu'il sait déjà faire (`|| { … }`). Même
// chose pour « 360p » entre son retrait du 2026-10-26 et son retour du
// 2026-11-06 (#636).
//
// Cette liste doit suivre celle de `STREAM_OPTIONS`. Elle est recopiée plutôt
// qu'importée pour qu'un module de stockage ne dépende pas d'un composant React
// — le prix est cette ligne à tenir à jour, et ce commentaire le dit.
var KNOWN_RESOLUTIONS = ["360p", "540p", "720p", "1080p"];
function loadStreamingSettings(hostType) {
  try {
    var raw = localStorage.getItem(STORAGE_PREFIX + hostType);
    var stored = raw ? JSON.parse(raw) : null;
    if (stored && stored.resolution && !KNOWN_RESOLUTIONS.includes(stored.resolution)) {
      return null;
    }
    return stored;
  } catch (_unused) {
    return null;
  }
}
function saveStreamingSettings(hostType, values) {
  try {
    localStorage.setItem(STORAGE_PREFIX + hostType, JSON.stringify(values));
  } catch (_unused2) {
    // localStorage unavailable (private browsing, quota, disabled) —
    // non-fatal, the server-side save below is what actually matters
    // for the upcoming session anyway.
  }
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/shared/LaunchConflict.jsx"
/*!***************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/shared/LaunchConflict.jsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleLaunchConflict: () => (/* binding */ handleLaunchConflict)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../skeleton/skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var _api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/spawnSessions.js */ "./src/webapp/src/app/gameflex/api/spawnSessions.js");
/* harmony import */ var _libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/sessionLinks.js */ "./src/webapp/src/app/gameflex/libs/sessionLinks.js");
/* harmony import */ var _libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/federatedHost.js */ "./src/webapp/src/app/gameflex/libs/federatedHost.js");
/* harmony import */ var _libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/SessionPool.js */ "./src/webapp/src/app/gameflex/libs/SessionPool.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
;







// UN LANCEMENT REFUSÉ PARCE QU'UNE AUTRE PARTIE EST LÀ — et ce qu'on propose.
//
// Deux refus du kernel, une seule réponse de la page, pour toutes les pages
// qui lancent (le catalogue, les consoles remote play) :
//
//   - « tu joues déjà ailleurs » (writeAlreadyPlaying) : arrêter l'autre
//     partie, puis relancer ;
//   - « ta partie continue sans toi » (writeOwnedGameGoesOn, #276) : d'autres y
//     jouent, et relancer la leur coupait en silence. On propose d'y
//     retourner, ou de la terminer pour tout le monde.
//
// Rend true quand le refus était l'un des deux et qu'un choix a été proposé.

function handleLaunchConflict(_ref) {
  var result = _ref.result,
    context = _ref.context,
    t = _ref.t,
    token = _ref.token,
    _ref$host = _ref.host,
    host = _ref$host === void 0 ? null : _ref$host,
    navigate = _ref.navigate,
    retryLaunch = _ref.retryLaunch;
  if (!(result !== null && result !== void 0 && result.activeSessionId)) {
    return false;
  }
  var other = {
    id: result.activeSessionId,
    platform: result.activeSessionPlatform,
    reference: result.activeSessionReference
  };
  // CHEZ CELUI QUI A REFUSÉ, pas chez nous. Le conflit vient du serveur
  // qu'on vient d'interroger : l'identifiant qu'il rend est de chez lui.
  // L'arrêter ici ne trouverait rien — ou, deux serveurs frappant les mêmes
  // identifiants, trouverait l'homonyme d'ici et arrêterait la mauvaise
  // partie (même raison que le préfixe `srv<id>:`).
  var endAndRelaunch = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var stopResult;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return (0,_api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_3__.stopSession)(other.platform, other.id, token, host);
          case 1:
            stopResult = _context.v;
            if (stopResult.ok) {
              _context.n = 2;
              break;
            }
            context.toast.open(t("streaming.conflict.switchFailed"), {
              variant: "error"
            });
            return _context.a(2);
          case 2:
            retryLaunch();
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function endAndRelaunch() {
      return _ref2.apply(this, arguments);
    };
  }();
  if (result.ownedGameGoesOn) {
    context.modal.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(OwnedGameGoesOn, {
      t: t,
      title: result.activeSessionTitle,
      players: result.activeSessionPlayers || [],
      onReturn: function onReturn() {
        return navigate((0,_libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_4__.buildStreamingUrl)({
          sessionId: host ? (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_5__.federatedId)(host.serverId, other.id) : other.id,
          play: true
        }));
      },
      onEnd: endAndRelaunch
    }), {
      variant: "normal",
      size: 600
    });
    return true;
  }
  context.modal.open(t("streaming.conflict.switchMessage"), {
    variant: "confirm",
    title: t("streaming.conflict.switchTitle"),
    confirmLabel: t("streaming.conflict.switchLabel"),
    cancelLabel: t("app.cancel"),
    onConfirm: endAndRelaunch
  });
  return true;
}

// Les trois issues, dans la même forme que la fenêtre de sortie
// (QuitConfirmModal, Streaming.jsx) : y retourner — sa place l'attend —, la
// terminer pour tout le monde, ou ne rien faire.
function OwnedGameGoesOn(_ref3) {
  var t = _ref3.t,
    title = _ref3.title,
    players = _ref3.players,
    onReturn = _ref3.onReturn,
    onEnd = _ref3.onEnd;
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_2__["default"].context);
  var displayNames = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_6__.useDisplayNames)();
  var names = players.map(function (username) {
    return displayNames[username] || username;
  }).join(", ");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "text-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
      className: "bi bi-people-fill d-block mb-3 text-primary",
      style: {
        fontSize: "4.5rem"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
      className: "modal-title fw-bold mb-2",
      children: t("streaming.conflict.ownedTitle")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
      className: "mb-0",
      children: t("streaming.conflict.ownedMessage", {
        title: title,
        players: names
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "d-flex gap-0 mt-4 pt-1 border-top",
      style: {
        marginLeft: "-1rem",
        marginRight: "-1rem",
        marginBottom: "-1rem"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "link",
        className: "text-decoration-none flex-fill rounded-0 m-0 py-3 border-end",
        onClick: function onClick() {
          return context.modal.close();
        },
        children: t("app.cancel")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "link",
        className: "text-decoration-none flex-fill rounded-0 m-0 py-3 border-end",
        onClick: function onClick() {
          context.modal.close();
          onEnd();
        },
        children: t("streaming.conflict.ownedEnd")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "link",
        className: "text-decoration-none flex-fill rounded-0 m-0 py-3 fw-semibold",
        onClick: function onClick() {
          context.modal.close();
          onReturn();
        },
        children: t("streaming.conflict.ownedReturn")
      })]
    })]
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-device-status.js"
/*!**********************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-device-status.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDeviceStatus: () => (/* binding */ useDeviceStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/gameflex/stream/remoteplay/service/input.service */ "./src/webapp/src/app/gameflex/stream/remoteplay/service/input.service.js");



/**
 * Live device status via the unified input WebSocket (see
 * stream/remoteplay/service/input.service.js) — replaces the previous 5s HTTP
 * poll of GET /playstation/my-devices. External contract unchanged:
 * onDevicesUpdate fires once with the initial snapshot, onStatusUpdate
 * fires on any subsequent status/hasActiveSession change per device.
 *
 * `enabled` (défaut vrai) : un hôte qui n'ouvre pas de session n'a pas ce
 * service, donc pas ce WebSocket. Sans ce drapeau, l'application passait son
 * temps à retenter une connexion qui n'existe pas, et la console du
 * navigateur noyait les vraies pannes sous ses avertissements (chantier 9).
 */
function useDeviceStatus(_ref) {
  var onDevicesUpdate = _ref.onDevicesUpdate,
    onStatusUpdate = _ref.onStatusUpdate,
    _ref$enabled = _ref.enabled,
    enabled = _ref$enabled === void 0 ? true : _ref$enabled;
  var previousDevicesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var hasReceivedFirstUpdateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled) {
      return undefined;
    }
    var cancelled = false;
    var handleDevices = function handleDevices(devices) {
      if (cancelled || !devices) return;
      var prevDevices = previousDevicesRef.current;
      if (!hasReceivedFirstUpdateRef.current) {
        hasReceivedFirstUpdateRef.current = true;
        onDevicesUpdate(devices);
      } else {
        var hasChanges = devices.some(function (d) {
          var prev = prevDevices.find(function (p) {
            return p.hostId === d.hostId;
          });
          return !prev || prev.status !== d.status || prev.hasActiveSession !== d.hasActiveSession;
        });
        if (hasChanges) {
          onStatusUpdate(devices);
        }
      }
      previousDevicesRef.current = devices;
    };
    var unsubscribe = _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_1__.remoteplayInputService.onDevices(handleDevices);

    // The service pushes an immediate snapshot on subscribe, so no
    // separate initial HTTP fetch is needed — and the singleton means
    // every consumer shares one underlying WebSocket.
    _gameflex_stream_remoteplay_service_input_service__WEBPACK_IMPORTED_MODULE_1__.remoteplayInputService.subscribeDevices()["catch"](function (error) {
      console.warn("device-status connect failed:", error);
    });
    return function () {
      cancelled = true;
      unsubscribe();
      // Deliberately not calling disconnect() here — the connection
      // is a shared singleton and stays open across unmounts so
      // navigating back to this page doesn't pay a reconnect cost.
    };
  }, [onDevicesUpdate, onStatusUpdate, enabled]);
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-federated-device-status.js"
/*!********************************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/remoteplay/hooks/use-federated-device-status.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFederatedDeviceStatus: () => (/* binding */ useFederatedDeviceStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gameflex_api_remoteplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/gameflex/api/remoteplay */ "./src/webapp/src/app/gameflex/api/remoteplay.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
;


// LES CONSOLES FÉDÉRÉES N'ONT PAS D'ÉTAT EN DIRECT (2026-10-25).
//
// Le WebSocket d'état (use-device-status.js) ne connaît que les consoles
// d'ici. Une console prêtée par un serveur fédéré restait donc sur « Veille »
// après « Allumer », carte et panneau, jusqu'à ce qu'on quitte la page (le
// porteur, depuis le téléphone). Son état se relit par la liste fédérée, que
// notre kernel va chercher chez chaque serveur — au rythme du sondage que le
// service d'ici fait de ses propres consoles, et seulement quand la page se
// voit.
var FEDERATED_POLL_MS = 5000;

/**
 * Relit les consoles fédérées toutes les 5 s tant que `enabled`, et passe la
 * liste à `onDevices` — la même forme que listFederatedDevices().data.
 */
function useFederatedDeviceStatus(_ref) {
  var enabled = _ref.enabled,
    onDevices = _ref.onDevices;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled) {
      return undefined;
    }
    var cancelled = false;
    var timer = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var result;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!document.hidden) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.n = 2;
            return (0,_gameflex_api_remoteplay__WEBPACK_IMPORTED_MODULE_1__.listFederatedDevices)();
          case 2:
            result = _context.v;
            if (!cancelled && result.ok) {
              onDevices(result.data || []);
            }
          case 3:
            return _context.a(2);
        }
      }, _callee);
    })), FEDERATED_POLL_MS);
    return function () {
      cancelled = true;
      clearInterval(timer);
    };
  }, [enabled, onDevices]);
}

/***/ }

}]);
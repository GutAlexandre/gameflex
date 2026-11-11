"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_shared_SessionStream_jsx"],{

/***/ "./src/webapp/src/app/gameflex/stream/shared/SessionStream.jsx"
/*!*********************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/SessionStream.jsx ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LaunchBackdrop: () => (/* binding */ LaunchBackdrop),
/* harmony export */   LaunchBar: () => (/* binding */ LaunchBar),
/* harmony export */   LaunchScreen: () => (/* binding */ LaunchScreen),
/* harmony export */   OVERLAY_HIDDEN: () => (/* binding */ OVERLAY_HIDDEN),
/* harmony export */   SessionStream: () => (/* binding */ SessionStream),
/* harmony export */   StreamingConnectingOverlay: () => (/* binding */ StreamingConnectingOverlay)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _GatewayWebRTC_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GatewayWebRTC.jsx */ "./src/webapp/src/app/gameflex/stream/shared/GatewayWebRTC.jsx");
/* harmony import */ var _launch_backdrop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./launch-backdrop.js */ "./src/webapp/src/app/gameflex/stream/shared/launch-backdrop.js");
/* harmony import */ var _gateway_helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gateway-helpers.js */ "./src/webapp/src/app/gameflex/stream/shared/gateway-helpers.js");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var _hooks_use_streaming_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/use-streaming-menu.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-streaming-menu.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
;







// The one "connecting" surface — shared between the video-first preview
// (before the session resolves) and StreamingShell's own overlay (while the
// platform hook negotiates), so the page never visibly swaps components at
// the resolution boundary: identical pixels before and after.
// What a caller passes as connectingLabel when the picture is there and the
// overlay should get out of the way.

var OVERLAY_HIDDEN = "live";

// What the video surface shows while no picture has arrived yet: a spinner
// and what is being waited for.
function StreamingConnectingOverlay(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "position-absolute top-0 start-0 w-100 h-100 text-center d-flex flex-column align-items-center justify-content-center text-white gap-3 px-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      animation: "border"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_6__.ProgressBar, {})]
  });
}

// LE FOND DE L'ÉCRAN DE LANCEMENT (chantier 35) — la vidéo de l'intro, que la
// passerelle tient figée pendant le chargement puis fait jouer avant le jeu.
// L'écran n'a pas d'image à lui.
//
// `launch` — `{streamId, host, username}` : le flux du lancement, dont la
// balise <video> passe d'un écran à l'autre sans s'interrompre
// (launch-backdrop.js). `stream` — un MediaStream déjà reçu : celui de la page
// de jeu, pour qui la rejoint en spectateur.
function LaunchBackdrop(_ref2) {
  var _launch$host;
  var _ref2$launch = _ref2.launch,
    launch = _ref2$launch === void 0 ? null : _ref2$launch,
    _ref2$stream = _ref2.stream,
    stream = _ref2$stream === void 0 ? null : _ref2$stream;
  var holderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var streamId = (launch === null || launch === void 0 ? void 0 : launch.streamId) || null;

  // AVANT LA PEINTURE, et c'est ce qui rend le passage invisible : l'écran
  // qui part et celui qui arrive changent dans le même rendu, et la balise
  // change de parent sans avoir quitté la page assez longtemps pour
  // s'arrêter. Si elle s'est arrêtée (une page chargée à la demande), elle
  // repart ici.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    var _holderRef$current;
    if (!streamId) {
      return undefined;
    }
    var backdrop = (0,_launch_backdrop_js__WEBPACK_IMPORTED_MODULE_4__.acquireBackdrop)(launch);
    (_holderRef$current = holderRef.current) === null || _holderRef$current === void 0 || _holderRef$current.appendChild(backdrop.video);
    backdrop.video.play()["catch"](function () {});
    return function () {
      return (0,_launch_backdrop_js__WEBPACK_IMPORTED_MODULE_4__.releaseBackdrop)(backdrop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [streamId, launch === null || launch === void 0 || (_launch$host = launch.host) === null || _launch$host === void 0 ? void 0 : _launch$host.origin, launch === null || launch === void 0 ? void 0 : launch.username]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var video = videoRef.current;
    if (video && stream && video.srcObject !== stream) {
      video.srcObject = stream;
      video.play()["catch"](function () {});
    }
  }, [stream]);
  if (streamId) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ref: holderRef,
      className: "position-absolute top-0 start-0 w-100 h-100"
    });
  }
  if (stream) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("video", {
      ref: videoRef,
      muted: true,
      autoPlay: true,
      playsInline: true,
      disableRemotePlayback: true,
      poster: _gateway_helpers_js__WEBPACK_IMPORTED_MODULE_5__.NO_POSTER,
      className: "position-absolute top-0 start-0 w-100 h-100",
      style: {
        objectFit: "cover",
        pointerEvents: "none"
      }
    });
  }
  return null;
}

// LA LIGNE DES ÉTAPES (chantier 35 ; le porteur, 2026-10-26 : « les steps
// passent en une ligne qui change, middle-bottom de l'écran »). Elle dit
// l'étape en cours — la dernière reçue — et le renseignement que seul le
// serveur pouvait donner (le cœur, la géométrie du jeu). Un échec, lui, se dit
// en entier : l'étape qui a échoué et la raison.
//
// `data-step` porte l'IDENTIFIANT, pas le libellé traduit : c'est lui qui est
// stable, et c'est donc lui qu'une sonde doit lire.
//
// CENTRÉE, SUR TROIS LIGNES (le porteur, 2026-10-29) : le spinner, plus gros,
// AU-DESSUS des textes ; l'étape ; ce qu'elle attend en dessous, toujours sur
// sa propre ligne. Une étape en erreur met `action` — « Signaler l'erreur » —
// à la place du spinner.
function LaunchLine(_ref3) {
  var t = _ref3.t,
    label = _ref3.label,
    steps = _ref3.steps,
    failed = _ref3.failed,
    error = _ref3.error,
    action = _ref3.action;
  var current = Array.isArray(steps) && steps.length > 0 ? steps[steps.length - 1] : null;
  var stepLabel = current ? t("streaming.connection.step.".concat(current.step)) : null;
  if (failed) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "d-flex flex-column align-items-center gap-1 text-center",
      "data-step": current === null || current === void 0 ? void 0 : current.step,
      "data-state": "error",
      style: {
        maxWidth: 560
      },
      children: [action && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "mb-2",
        children: action
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "fw-semibold text-danger",
        children: label
      }), (stepLabel || error) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "small text-break",
        children: [stepLabel, error].filter(Boolean).join(" — ")
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "d-flex flex-column align-items-center gap-1 text-center",
    "data-step": current === null || current === void 0 ? void 0 : current.step,
    "data-state": current === null || current === void 0 ? void 0 : current.state,
    style: {
      maxWidth: "100%"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      animation: "border",
      className: "mb-2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
      className: "fw-semibold text-break",
      children: stepLabel || label
    }), (current === null || current === void 0 ? void 0 : current.detail) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
      className: "small text-white-50 text-break",
      children: current.detail
    })]
  });
}

// L'ÉCRAN DU LANCEMENT — le fond de l'intro, la ligne des étapes, et les
// gestes qui vont avec (#191, #287, chantier 35).
//
// LE MÊME PARTOUT où l'on attend un lancement : la page des jeux dès le clic
// sur « Jouer » (la réponse du kernel peut prendre des minutes : un jeu
// distant descend d'abord), puis la page de jeu jusqu'à la première image du
// JEU — pas celle de l'intro. Trois écrans écrits chacun à sa façon
// finissaient par diverger — c'est ainsi que l'un d'eux avait perdu toute
// sortie.
//
// « ANNULER » Y EST TOUJOURS (décidé par le porteur le 2026-10-10). Cet écran
// couvre la page entière, barre du bas comprise : sans bouton à lui, une image
// qui n'arrivait jamais ne laissait que le bouton retour du navigateur. C'est
// une croix dans un cercle, en haut à droite, depuis le 2026-10-29 — la même
// quand une étape échoue : elle ferme la partie, et c'est tout ce qu'il faut
// (le porteur : « il n'y a pas besoin de retourner à l'accueil quand il y a
// une erreur »). « Signaler l'erreur » (#191) prend la place du spinner.
//
// TOUJOURS SOMBRE, dans les deux thèmes : son fond est une vidéo, ou l'image
// qui l'attend — la première de l'intro, le fond GameFlex (LAUNCH_SCREEN_BACKGROUND,
// le porteur, 2026-11-06) —, et le texte se lit dessus.
//
// `fixed` — par-dessus l'application entière (la page des jeux, sa barre de
// navigation) plutôt que dans le cadre de la page de jeu. `backdrop` — les
// props de LaunchBackdrop ; absent, le fond GameFlex reste seul.
function LaunchScreen(_ref4) {
  var t = _ref4.t,
    label = _ref4.label,
    _ref4$steps = _ref4.steps,
    steps = _ref4$steps === void 0 ? null : _ref4$steps,
    zIndex = _ref4.zIndex,
    _ref4$fixed = _ref4.fixed,
    fixed = _ref4$fixed === void 0 ? false : _ref4$fixed,
    _ref4$backdrop = _ref4.backdrop,
    backdrop = _ref4$backdrop === void 0 ? null : _ref4$backdrop,
    _ref4$onCancel = _ref4.onCancel,
    onCancel = _ref4$onCancel === void 0 ? null : _ref4$onCancel,
    _ref4$failed = _ref4.failed,
    failed = _ref4$failed === void 0 ? false : _ref4$failed,
    _ref4$error = _ref4.error,
    error = _ref4$error === void 0 ? null : _ref4$error,
    _ref4$onReport = _ref4.onReport,
    onReport = _ref4$onReport === void 0 ? null : _ref4$onReport,
    _ref4$reportState = _ref4.reportState,
    reportState = _ref4$reportState === void 0 ? null : _ref4$reportState;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "".concat(fixed ? "position-fixed" : "position-absolute", " top-0 start-0 w-100 h-100 overflow-hidden"),
    style: {
      background: _launch_backdrop_js__WEBPACK_IMPORTED_MODULE_4__.LAUNCH_SCREEN_BACKGROUND,
      zIndex: zIndex
    },
    children: [backdrop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(LaunchBackdrop, _objectSpread({}, backdrop)), onCancel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "dark",
      className: "position-absolute rounded-circle d-flex align-items-center justify-content-center p-0",
      style: _objectSpread(_objectSpread({}, _hooks_use_streaming_menu_js__WEBPACK_IMPORTED_MODULE_7__.ROUND_BUTTON_LOOK), {}, {
        top: "max(12px, env(safe-area-inset-top))",
        right: "max(12px, env(safe-area-inset-right))",
        zIndex: 1
      }),
      title: t("app.cancel"),
      "aria-label": t("app.cancel"),
      onClick: onCancel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
        className: "bi bi-x-lg fs-4 text-white"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(LaunchBar, {
      t: t,
      label: label,
      steps: steps,
      failed: failed,
      error: error,
      action: failed && onReport ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "danger",
        disabled: reportState === "sending" || reportState === "sent",
        onClick: onReport,
        children: reportState === "sent" ? t("streaming.launch.reported") : t("streaming.launch.report")
      }) : null,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_6__.ProgressBar, {})
    })]
  });
}

// LA BARRE DU LANCEMENT — la ligne des étapes, collée en bas : le haut de
// l'écran est à l'intro, et les boutons (`children`) sont là où la main les
// cherche. Le dégradé garde la ligne lisible quelle que soit l'image derrière.
// Celle de l'écran de lancement, et seule, par-dessus la vidéo d'une partie
// dont la passerelle tient l'intro (#520) : la même ligne, par quelque chemin
// qu'on arrive.
function LaunchBar(_ref5) {
  var t = _ref5.t,
    label = _ref5.label,
    _ref5$steps = _ref5.steps,
    steps = _ref5$steps === void 0 ? null : _ref5$steps,
    _ref5$failed = _ref5.failed,
    failed = _ref5$failed === void 0 ? false : _ref5$failed,
    _ref5$error = _ref5.error,
    error = _ref5$error === void 0 ? null : _ref5$error,
    _ref5$action = _ref5.action,
    action = _ref5$action === void 0 ? null : _ref5$action,
    _ref5$children = _ref5.children,
    children = _ref5$children === void 0 ? null : _ref5$children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "position-absolute bottom-0 start-0 w-100 px-3 pb-3 pt-5 d-flex flex-column align-items-center gap-2 text-white",
    style: {
      background: _launch_backdrop_js__WEBPACK_IMPORTED_MODULE_4__.LAUNCH_BAR_GRADIENT
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(LaunchLine, {
      t: t,
      label: label,
      steps: steps,
      failed: failed,
      error: error,
      action: action
    }), children]
  });
}

// How many 2s cycles the video-first preview retries before giving up — a
// fresh session registers on the gateway only once its child attaches (a
// few seconds), but an invalid sessionId must not retry forever (the
// lookup timeout surfaces the real error instead).
var MAX_PREVIEW_ATTEMPTS = 30;

// SessionStream — THE video surface, for every platform and every role.
//
// The video attaches from the sessionId ALONE: no authentication, no role,
// no platform WebSocket. If the session has frames, they play — YouTube
// style: the picture never waits for anything else, the menus and the
// controller do. One viewer per mounted instance, created once and kept
// until unmount.
//
// This is deliberately the SAME component behind the Dashboard's "live now"
// thumbnails and behind /streaming. Before (2026-08-24) the streaming page
// mounted this, then threw it away at the kernel's first private push and
// built a SECOND viewer inside the platform hook's WS onOpen — that swap was
// the visible "screen exchange" going Watch → Streaming, and that second
// viewer attached once on the child's "started" message with no retry, so a
// missed "started" meant no picture at all while the input DataChannel was
// up ("no video but the controller works"). The thumbnails never had the bug
// precisely because they only ever used this path.
//
// hasInput — whether the gateway negotiates an "input" DataChannel in the
// SDP offer. This is decided by AUTHENTICATION, never by role: the role can
// change at any moment (takeover, handover, join) and renegotiating the SDP
// would restart the video, which is exactly the bug we are removing. Both
// children already drop input arriving from a viewer with no assigned pad
// (retro: handleGatewayInput's viewerPorts lookup, stream_session.go;
// streamex: OnInput's gatewaySlots lookup, cmd/streamex/main.go), so an
// authenticated spectator holding an unused channel changes nothing. Anonymous
// viewers never get a channel at all.
//
// screenRef — optional. Pass one to share this component's viewer with a
// platform hook (which sends input through it and reads `.viewerId` for its
// own wire message). Omit it for a read-only surface like a thumbnail.
// maxAttempts null = keep retrying while mounted (a dashboard card must
// recover whenever the owner finally starts streaming).
function SessionStream(_ref6) {
  var sessionId = _ref6.sessionId,
    t = _ref6.t,
    _ref6$screenRef = _ref6.screenRef,
    screenRef = _ref6$screenRef === void 0 ? null : _ref6$screenRef,
    _ref6$hasInput = _ref6.hasInput,
    hasInput = _ref6$hasInput === void 0 ? false : _ref6$hasInput,
    _ref6$username = _ref6.username,
    username = _ref6$username === void 0 ? null : _ref6$username,
    _ref6$muted = _ref6.muted,
    muted = _ref6$muted === void 0 ? true : _ref6$muted,
    _ref6$onAutoplayForce = _ref6.onAutoplayForcedMute,
    onAutoplayForcedMute = _ref6$onAutoplayForce === void 0 ? null : _ref6$onAutoplayForce,
    _ref6$onVideoSilent = _ref6.onVideoSilent,
    _onVideoSilent = _ref6$onVideoSilent === void 0 ? null : _ref6$onVideoSilent,
    _ref6$onViewerReady = _ref6.onViewerReady,
    onViewerReady = _ref6$onViewerReady === void 0 ? null : _ref6$onViewerReady,
    _ref6$maxAttempts = _ref6.maxAttempts,
    maxAttempts = _ref6$maxAttempts === void 0 ? MAX_PREVIEW_ATTEMPTS : _ref6$maxAttempts,
    _ref6$pictureTimeoutM = _ref6.pictureTimeoutMs,
    pictureTimeoutMs = _ref6$pictureTimeoutM === void 0 ? 12000 : _ref6$pictureTimeoutM,
    _ref6$showOverlay = _ref6.showOverlay,
    showOverlay = _ref6$showOverlay === void 0 ? true : _ref6$showOverlay,
    _ref6$connectingLabel = _ref6.connectingLabel,
    connectingLabel = _ref6$connectingLabel === void 0 ? null : _ref6$connectingLabel,
    _ref6$fillHeight = _ref6.fillHeight,
    fillHeight = _ref6$fillHeight === void 0 ? false : _ref6$fillHeight,
    _ref6$children = _ref6.children,
    children = _ref6$children === void 0 ? null : _ref6$children,
    _ref6$gatewayProps = _ref6.gatewayProps,
    gatewayProps = _ref6$gatewayProps === void 0 ? null : _ref6$gatewayProps,
    _ref6$host = _ref6.host,
    host = _ref6$host === void 0 ? null : _ref6$host,
    _ref6$quality = _ref6.quality,
    quality = _ref6$quality === void 0 ? null : _ref6$quality,
    _ref6$onQuality = _ref6.onQuality,
    onQuality = _ref6$onQuality === void 0 ? null : _ref6$onQuality,
    _ref6$preview = _ref6.preview,
    preview = _ref6$preview === void 0 ? false : _ref6$preview,
    _ref6$onIntro = _ref6.onIntro,
    onIntro = _ref6$onIntro === void 0 ? null : _ref6$onIntro,
    _ref6$launch = _ref6.launch,
    launch = _ref6$launch === void 0 ? null : _ref6$launch;
  var ownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var attemptRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  // Recommencer depuis l'extérieur de l'effet — c'est la surveillance du
  // mouvement de l'image qui le demande, et elle vit dans le composant
  // vidéo. Posé par l'effet ci-dessous, retiré avec lui.
  var restartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // Une image a-t-elle été DÉCODÉE ? Distinct de « la piste est arrivée » :
  // c'est la différence entre attendre et attendre pour rien.
  var sawPictureRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var pictureDeadlineRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // The caller's ref (when given) and our own must point at the SAME
  // component instance — one viewer, one PeerConnection.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(screenRef, function () {
    return ownRef.current;
  }, []);

  // onViewerReady may change identity every render (an inline arrow from
  // the page); the attach effect must not restart because of it.
  var onViewerReadyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onViewerReady);
  onViewerReadyRef.current = onViewerReady;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cancelled = false;
    var retryTimer = null;
    attemptRef.current = 0;
    sawPictureRef.current = false;
    var canRetry = function canRetry() {
      return maxAttempts === null || attemptRef.current < maxAttempts;
    };

    // TOUT RECOMMENCER — le seul chemin de reprise, quelle qu'en soit la
    // raison. On rend le viewer AVANT : sinon chaque tentative en laisse
    // un derrière elle, et l'hôte encode pour des fantômes.
    var restart = function restart() {
      var _ownRef$current, _ownRef$current$clean;
      if (cancelled) {
        return;
      }
      clearTimeout(retryTimer);
      clearTimeout(pictureDeadlineRef.current);
      (_ownRef$current = ownRef.current) === null || _ownRef$current === void 0 || (_ownRef$current$clean = _ownRef$current.cleanup) === null || _ownRef$current$clean === void 0 || _ownRef$current$clean.call(_ownRef$current);
      // L'image d'avant ne prouve rien sur celle d'après : la prochaine
      // négociation doit refaire ses preuves, sinon son échéance
      // s'annule d'elle-même au premier tour.
      sawPictureRef.current = false;
      if (canRetry()) {
        attemptRef.current += 1;
        retryTimer = setTimeout(_attempt, 0);
      }
    };
    var _attempt = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _ownRef$current2, _ownRef$current3, _onViewerReadyRef$cur;
        var viewer, attached, _ownRef$current4, _ownRef$current4$clea, deadline;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!cancelled) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _context.n = 2;
              return (_ownRef$current2 = ownRef.current) === null || _ownRef$current2 === void 0 ? void 0 : _ownRef$current2.createViewer({
                hasInput: hasInput,
                username: username,
                quality: quality,
                preview: preview,
                launch: launch
              });
            case 2:
              viewer = _context.v;
              if (!cancelled) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              if (viewer) {
                _context.n = 4;
                break;
              }
              // No stream registered on the gateway yet (fresh session,
              // child not attached) — retry a bounded number of times.
              if (canRetry()) {
                attemptRef.current += 1;
                retryTimer = setTimeout(_attempt, 2000);
              }
              return _context.a(2);
            case 4:
              _context.n = 5;
              return (_ownRef$current3 = ownRef.current) === null || _ownRef$current3 === void 0 ? void 0 : _ownRef$current3.attach();
            case 5:
              attached = _context.v;
              if (!cancelled) {
                _context.n = 6;
                break;
              }
              return _context.a(2);
            case 6:
              if (attached) {
                _context.n = 7;
                break;
              }
              // ON REND LE VIEWER AVANT DE RECOMMENCER.
              //
              // `createViewer` a réussi — le gateway a donc ouvert un
              // viewer pour nous — et c'est `attach` qui a échoué. Sans ce
              // ménage, la tentative suivante en ouvre un SECOND et
              // personne ne ferme le premier : chaque viewer fantôme est un
              // encodage et un envoi de plus, à la charge de l'hôte.
              //
              // Sur un serveur ça se voyait peu (le conteneur démarre une
              // fois, la fenêtre d'échec est courte). Sur le téléphone,
              // depuis que la porte « prêt » a disparu (C8-P4), cette
              // boucle s'exerce à chaque ouverture de partie — et l'hôte
              // qui encode est celui qui joue.
              (_ownRef$current4 = ownRef.current) === null || _ownRef$current4 === void 0 || (_ownRef$current4$clea = _ownRef$current4.cleanup) === null || _ownRef$current4$clea === void 0 || _ownRef$current4$clea.call(_ownRef$current4);
              if (canRetry()) {
                attemptRef.current += 1;
                retryTimer = setTimeout(_attempt, 2000);
              }
              return _context.a(2);
            case 7:
              // UN VIEWER ATTACHÉ N'EST PAS UNE IMAGE.
              //
              // La boucle ne reprenait que sur un échec VISIBLE — pas de flux
              // enregistré, ou une négociation refusée. Le cas qui manquait est
              // celui qui ne dit rien : tout réussit, et aucune image n'arrive
              // jamais. La page attendait alors indéfiniment, sans erreur.
              //
              // Sur remote-play c'est le cas ordinaire, pas l'exception : la
              // console n'émet une image-clé QUE sur demande, et une demande
              // qui se perd n'est jamais réémise. D'où le symptôme signalé le
              // 2026-09-07 — l'image n'arrivait qu'au moment où un AUTRE
              // spectateur ouvrait la session ailleurs, parce que son arrivée
              // provoquait la demande que cette page-ci ne refaisait pas.
              //
              // Le tableau de bord n'a jamais montré le problème : ses
              // vignettes réessaient jusqu'à ce qu'une image arrive.
              deadline = setTimeout(function () {
                if (cancelled || sawPictureRef.current) {
                  return;
                }
                restart();
              }, pictureTimeoutMs);
              pictureDeadlineRef.current = deadline;

              // The platform hook can now put this viewerId on its own wire
              // (retro's start/join/spectate, streamex's WS query) instead of
              // creating a second viewer of its own.
              (_onViewerReadyRef$cur = onViewerReadyRef.current) === null || _onViewerReadyRef$cur === void 0 || _onViewerReadyRef$cur.call(onViewerReadyRef, viewer.viewerId);
            case 8:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function attempt() {
        return _ref7.apply(this, arguments);
      };
    }();
    restartRef.current = restart;
    _attempt();
    return function () {
      var _ownRef$current5, _ownRef$current5$clea;
      cancelled = true;
      restartRef.current = null;
      clearTimeout(retryTimer);
      clearTimeout(pictureDeadlineRef.current);
      // ON REND LE VIEWER. Il ne se rendait PAS.
      //
      // Cet effet se rejoue dès que l'identité change — et elle change
      // normalement : `username` est nul au premier rendu, puis vaut le
      // porteur du jeton une fois lu. Chaque passage ouvrait donc un
      // viewer de plus sur l'hôte, et aucun ne repartait.
      //
      // Sur un serveur ça se paie en encodages inutiles. Sur le
      // téléphone, l'hôte qui encode EST celui qui joue : relevé le
      // 2026-09-08 dans le journal d'un vrai appareil — trois viewers
      // ajoutés en 1,4 s, ZÉRO retiré, et l'application abattue deux
      // secondes après le lancement. Le ménage que la boucle de reprise
      // faisait déjà entre deux tentatives (`restart`) manquait au seul
      // endroit qui compte vraiment : la sortie.
      (_ownRef$current5 = ownRef.current) === null || _ownRef$current5 === void 0 || (_ownRef$current5$clea = _ownRef$current5.cleanup) === null || _ownRef$current5$clea === void 0 || _ownRef$current5$clea.call(_ownRef$current5);
    };
  }, [sessionId, hasInput, username, maxAttempts, pictureTimeoutMs]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    style: _objectSpread({
      zIndex: 1000,
      position: "relative",
      overflow: "hidden"
    }, fillHeight ? {
      height: "100%"
    } : {
      maxHeight: "var(--gameflex-visible-height)"
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_GatewayWebRTC_jsx__WEBPACK_IMPORTED_MODULE_3__.GatewayWebRTC, _objectSpread(_objectSpread({
      ref: ownRef,
      sessionId: sessionId,
      host: host,
      muted: muted
      // A caller that asks for a muted surface means it: the
      // autoplay fade-in would otherwise unmute the element on
      // its own the moment playback starts, so the Dashboard
      // thumbnails started making noise (reported live
      // 2026-08-24). Once the caller flips `muted` to false the
      // element unmutes through the prop above, as it should.
      ,
      keepMuted: muted,
      onAutoplayForcedMute: onAutoplayForcedMute,
      onQuality: onQuality,
      onIntro: onIntro
      // UNE IMAGE QUI S'ARRÊTE EST UNE RAISON DE RECOMMENCER, pas
      // une consigne à donner au joueur. La page disait « attendez
      // quelques secondes, ou actualisez » — c'est-à-dire qu'elle
      // demandait à la main ce qu'elle savait faire toute seule, et
      // un rafraîchissement fait perdre la manette au passage.
      //
      // Toutes plateformes : le compteur d'images décodées est la
      // même preuve partout, et une console qui se tait ne dit pas
      // pourquoi. La négociation reprend donc à zéro — c'est aussi
      // ce qui redemande une image-clé à la source.
      ,
      onVideoSilent: function onVideoSilent(silent) {
        _onVideoSilent === null || _onVideoSilent === void 0 || _onVideoSilent(silent);
        if (silent) {
          var _restartRef$current;
          (_restartRef$current = restartRef.current) === null || _restartRef$current === void 0 || _restartRef$current.call(restartRef);
        }
      }
    }, gatewayProps || {}), {}, {
      onFirstVideoTrack: function onFirstVideoTrack() {
        var _gatewayProps$onFirst;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        gatewayProps === null || gatewayProps === void 0 || (_gatewayProps$onFirst = gatewayProps.onFirstVideoTrack) === null || _gatewayProps$onFirst === void 0 || _gatewayProps$onFirst.call.apply(_gatewayProps$onFirst, [gatewayProps].concat(args));
      },
      onFirstPicture: function onFirstPicture() {
        var _gatewayProps$onFirst2;
        // La boucle s'arrête ICI, et nulle part ailleurs : c'est
        // le seul signal qui prouve qu'il y a une image.
        sawPictureRef.current = true;
        clearTimeout(pictureDeadlineRef.current);
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        gatewayProps === null || gatewayProps === void 0 || (_gatewayProps$onFirst2 = gatewayProps.onFirstPicture) === null || _gatewayProps$onFirst2 === void 0 || _gatewayProps$onFirst2.call.apply(_gatewayProps$onFirst2, [gatewayProps].concat(args));
      },
      children: [showOverlay && connectingLabel !== OVERLAY_HIDDEN && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(StreamingConnectingOverlay, {
        label: connectingLabel || t("streaming.connection.state.connecting")
      }), children]
    }))
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-streaming-menu.js"
/*!*******************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/hooks/use-streaming-menu.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUND_BUTTON_LOOK: () => (/* binding */ ROUND_BUTTON_LOOK),
/* harmony export */   useIdleVisibility: () => (/* binding */ useIdleVisibility),
/* harmony export */   useMenuButtonStyle: () => (/* binding */ useMenuButtonStyle),
/* harmony export */   useMenuHotkey: () => (/* binding */ useMenuHotkey)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/keyMapping.js */ "./src/webapp/src/app/gameflex/libs/keyMapping.js");
/* harmony import */ var _libs_gameInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/gameInput.js */ "./src/webapp/src/app/gameflex/libs/gameInput.js");
/* harmony import */ var _onscreen_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../onscreen/Controllers.jsx */ "./src/webapp/src/app/gameflex/stream/onscreen/Controllers.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
;




// LE MENU D'UNE PARTIE, À LA MANETTE ET SANS BARRE (#408, #409 — le porteur,
// 2026-10-19).

// L2 + HOME (libs/gameInput.js, MENU_CHORD). C'était L3 + R3 jusqu'au
// 2026-10-21, puis Select + Start, pour les manettes clipsées sans sticks
// (#410) ; le porteur l'a changé le 2026-10-28 : Start tenu éteint plusieurs
// manettes GameSir. Home n'est pas un geste de jeu tant que L2 est tenu (il
// n'atteint plus le jeu) : une seconde suffit, là où Select + Start, deux
// boutons de jeu, en demandaient cinq — et un Home tenu longtemps éteint, lui
// aussi, certaines manettes.
var MENU_HOLD_MS = 1000;

// LE BOUTON ROND D'UN ÉCRAN DE JEU — celui du menu, et la croix qui annule un
// lancement (le porteur, 2026-10-29 : « un ✖️ dans un cercle (comme pour le
// bouton du menu) »). Sa forme s'écrit ici, une fois ; chacun pose sa place.
var ROUND_BUTTON_LOOK = {
  width: "48px",
  height: "48px",
  background: "rgba(0, 0, 0, 0.55)",
  border: "1px solid rgba(255, 255, 255, 0.35)"
};

// LE BOUTON DU MENU, EN BAS À GAUCHE (le porteur, 2026-10-22 : « Il faudra
// que le bouton menu passe en bas à gauche »). En haut à droite, la barre
// d'adresse de Chrome le cachait hors du plein écran. Sa place s'écrit ICI,
// une fois, pour la page de jeu et pour le test des touches : deux copies
// finissent par diverger.
var MENU_BUTTON_STYLE = _objectSpread({
  bottom: "max(12px, env(safe-area-inset-bottom))",
  left: "max(12px, env(safe-area-inset-left))",
  zIndex: 1003
}, ROUND_BUTTON_LOOK);

/**
 * LA PLACE DU BOUTON DU MENU : le coin en bas à gauche — sauf quand la manette
 * à l'écran est affichée en paysage. Sa colonne de gauche y met son stick, dans
 * ce coin même ; le bouton reste alors en bas, juste après elle. « Paysage »
 * se juge comme la manette le juge : la fenêtre plus large que haute.
 *
 * @param {boolean} padVisible la manette à l'écran est affichée
 * @returns {object} le style du bouton
 */
function useMenuButtonStyle(padVisible) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return window.innerWidth > window.innerHeight;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    landscape = _useState2[0],
    setLandscape = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var update = function update() {
      return setLandscape(window.innerWidth > window.innerHeight);
    };
    window.addEventListener("resize", update);
    return function () {
      return window.removeEventListener("resize", update);
    };
  }, []);
  if (!landscape) {
    // En portrait, remonté (PORTRAIT_LIFT) ; la manette passe au-dessus.
    return _objectSpread(_objectSpread({}, MENU_BUTTON_STYLE), {}, {
      bottom: "max(".concat(12 + _onscreen_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__.PORTRAIT_LIFT, "px, calc(env(safe-area-inset-bottom) + ").concat(_onscreen_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__.PORTRAIT_LIFT, "px))")
    });
  }
  if (!padVisible) {
    return MENU_BUTTON_STYLE;
  }
  return _objectSpread(_objectSpread({}, MENU_BUTTON_STYLE), {}, {
    left: "".concat(_onscreen_Controllers_jsx__WEBPACK_IMPORTED_MODULE_3__.PAD_COLUMN_WIDTH + 12, "px")
  });
}

/**
 * L2 + HOME TENUS UNE SECONDE OUVRENT LE MENU — le raccourci que le porteur a
 * choisi, pour la manette qui n'a pas de doigt pour toucher le bouton.
 *
 * Rend l'avancement (0 à 1) pour que la page le montre : sans rien voir, on
 * lâche avant la fin. Il faut relâcher pour réarmer : un menu
 * refermé les deux boutons encore enfoncés ne se rouvre pas aussitôt.
 *
 * Toutes les manettes branchées comptent — celle du joueur 2 aussi : le menu
 * est celui de l'appareil. Les manettes virtuelles du serveur n'en sont pas
 * (connectedGamepads les écarte).
 *
 * @param {boolean} enabled faux quand un panneau est déjà ouvert
 * @param {Function} onOpen ouvrir le menu
 * @returns {number} l'avancement de l'appui, de 0 à 1
 */
function useMenuHotkey(enabled, onOpen) {
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    progress = _useState4[0],
    setProgress = _useState4[1];
  // Le rappel dans une référence : l'avancement re-rend la page à chaque
  // pas, et un rappel neuf en dépendance relancerait la boucle — l'appui
  // repartirait de zéro, et n'aboutirait jamais.
  var onOpenRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onOpen);
  onOpenRef.current = onOpen;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!enabled) {
      setProgress(0);
      return undefined;
    }
    var raf;
    var since = null;
    var armed = true;
    var shown = 0;
    var show = function show(value) {
      if (value !== shown) {
        shown = value;
        setProgress(value);
      }
    };
    var _tick = function tick() {
      var held = (0,_libs_keyMapping_js__WEBPACK_IMPORTED_MODULE_1__.connectedGamepads)().some(function (pad) {
        return pad && _libs_gameInput_js__WEBPACK_IMPORTED_MODULE_2__.MENU_CHORD.every(function (index) {
          var _pad$buttons;
          return (_pad$buttons = pad.buttons) === null || _pad$buttons === void 0 || (_pad$buttons = _pad$buttons[index]) === null || _pad$buttons === void 0 ? void 0 : _pad$buttons.pressed;
        });
      });
      var now = performance.now();
      if (!held) {
        since = null;
        armed = true;
        show(0);
      } else if (armed) {
        since !== null && since !== void 0 ? since : since = now;
        // Par pas de 5 % : un rendu par image pour une barre qui n'a
        // que vingt positions utiles.
        var value = Math.min(1, Math.floor((now - since) / MENU_HOLD_MS * 20) / 20);
        show(value);
        if (value >= 1) {
          armed = false;
          since = null;
          show(0);
          onOpenRef.current();
        }
      }
      raf = requestAnimationFrame(_tick);
    };
    raf = requestAnimationFrame(_tick);
    return function () {
      return cancelAnimationFrame(raf);
    };
  }, [enabled]);
  return progress;
}

// Trois secondes sans un geste, et le bouton du menu s'efface.
var IDLE_MS = 3000;

/**
 * LE BOUTON DU MENU S'EFFACE PENDANT QU'ON JOUE, et revient au premier geste
 * — la souris qui bouge, un doigt posé sur l'image. Pas un doigt posé sur la
 * manette À L'ÉCRAN : on ne la quitte pas, et le bouton ne reviendrait plus
 * jamais en jeu tactile. Un appui long sur L2 + Home, ou Échap, ouvrent le menu
 * sans lui.
 *
 * Qui regarde, ou attend sa manette, le garde affiché : c'est par lui qu'on
 * prend la manette ou qu'on s'en va.
 *
 * @param {boolean} playing vrai quand cette page tient une manette et
 *        qu'aucun panneau n'est ouvert
 * @returns {boolean} faut-il montrer le bouton
 */
function useIdleVisibility(playing) {
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    visible = _useState6[0],
    setVisible = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!playing) {
      setVisible(true);
      return undefined;
    }
    var timer = setTimeout(function () {
      return setVisible(false);
    }, IDLE_MS);
    var wake = function wake(event) {
      var _event$target, _event$target$closest;
      if (event.pointerType !== "mouse" && (_event$target = event.target) !== null && _event$target !== void 0 && (_event$target$closest = _event$target.closest) !== null && _event$target$closest !== void 0 && _event$target$closest.call(_event$target, "[data-streaming-strip]")) {
        return;
      }
      setVisible(true);
      clearTimeout(timer);
      timer = setTimeout(function () {
        return setVisible(false);
      }, IDLE_MS);
    };
    window.addEventListener("pointermove", wake, {
      passive: true
    });
    window.addEventListener("pointerdown", wake, {
      passive: true
    });
    return function () {
      clearTimeout(timer);
      window.removeEventListener("pointermove", wake);
      window.removeEventListener("pointerdown", wake);
    };
  }, [playing]);
  return visible;
}

/***/ }

}]);
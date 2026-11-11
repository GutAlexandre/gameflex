"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_Dashboard_jsx"],{

/***/ "./src/webapp/src/app/gameflex/Dashboard.jsx"
/*!***************************************************!*\
  !*** ./src/webapp/src/app/gameflex/Dashboard.jsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./src/webapp/src/node_modules/react-router/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./src/webapp/src/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../skeleton/skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var _libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./libs/SessionPool.js */ "./src/webapp/src/app/gameflex/libs/SessionPool.js");
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stream/shared/SessionStream.jsx */ "./src/webapp/src/app/gameflex/stream/shared/SessionStream.jsx");
/* harmony import */ var _api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api/spawnSessions.js */ "./src/webapp/src/app/gameflex/api/spawnSessions.js");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var _libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./libs/sessionLinks.js */ "./src/webapp/src/app/gameflex/libs/sessionLinks.js");
/* harmony import */ var _libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./libs/federatedHost.js */ "./src/webapp/src/app/gameflex/libs/federatedHost.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
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












// Both ways back to a pad — JOIN and "take my session back" — are the same
// gesture: navigate with the intent to play (`?play=1`). The CHILD that runs
// the session decides; the streaming page carries the intent to it over the
// socket that will actually hold the slot. That socket does not exist yet at
// this point, which is precisely why the child, and not this button, is what
// decides. (The kernel used to grant a pad here itself — the v1 fallback —
// and answered 409 for every session its child owned; it no longer decides
// anything about who plays.)

// SessionDuration — depuis combien de temps la partie tourne (le porteur,
// 2026-10-25 : « dans Live now, il manque la durée de la session »). Lue sur
// `startedAt`, que le kernel publie — celle du conteneur pour une partie
// retrouvée après un redémarrage. Un chronomètre, `00:00:00`, qui avance à la
// seconde, à droite de la carte (le porteur : « sans l'icône, juste au format
// 00:00:00 ») ; sans texte, il n'a rien à traduire.

function SessionDuration(_ref) {
  var startedAt = _ref.startedAt;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return Date.now();
    }),
    _useState2 = _slicedToArray(_useState, 2),
    now = _useState2[0],
    setNow = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timer = setInterval(function () {
      return setNow(Date.now());
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, []);
  var started = new Date(startedAt).getTime();
  if (!startedAt || Number.isNaN(started)) {
    return null;
  }
  var seconds = Math.max(0, Math.floor((now - started) / 1000));
  var clock = [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60].map(function (part) {
    return String(part).padStart(2, "0");
  }).join(":");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
    className: "text-nowrap font-monospace",
    title: new Date(started).toLocaleString(),
    children: clock
  });
}
function LiveThumbnail(_ref2) {
  var _session$me;
  var session = _ref2.session;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)(),
    t = _useTranslation.t;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var _useAuth = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_10__.useAuth)(),
    user = _useAuth.user,
    token = _useAuth.token,
    isAdmin = _useAuth.isAdmin;
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].context);
  // v1 (chantier-3): joinable when a slot is free and the session is not
  // mine. NO platform whitelist any more — openSlots alone decides, which
  // is what makes the rule identical everywhere: the PS5 has a single pad
  // and its owner always holds it, so openSlots is 0 and only WATCH shows,
  // without a line of remoteplay-specific code. Joining your own game
  // makes no sense either way — an owner comes back through "Your
  // sessions" (reported live: "I joined myself, which is illogical").
  var isMine = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_9__.isOwnSession)(session, user === null || user === void 0 ? void 0 : user.username);
  // Already holding a pad on this session? Then there is nothing to join —
  // "one session, one player" applies to joiners too, so a second browser
  // must offer WATCH like any other extra tab (reported live 2026-08-25:
  // "a joiner still sees the join button on another browser").
  var alreadyPlaying = ((_session$me = session.me) === null || _session$me === void 0 ? void 0 : _session$me.padSlot) != null;
  var canJoin = !isMine && !alreadyPlaying && (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_9__.hasOpenSlot)(session);
  var streamingUrl = (0,_libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_14__.buildStreamingUrl)({
    sessionId: session.id
  });

  // UNE PARTIE D'AILLEURS SE REGARDE CHEZ ELLE. Son flux est diffusé par le
  // gateway de son hôte, sous l'identifiant que lui lui donne : demander
  // `srv1:…` au nôtre rendait un 404, et la vignette réessayait sans fin,
  // noire (relevé le 2026-10-09). L'adresse et le jeton se demandent à
  // notre kernel (`federatedHostOf`), comme pour arrêter la partie.
  var streamId = session.childSessionId || session.id;
  var federated = Boolean((0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_15__.parseFederatedId)(streamId));
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    remote = _useState4[0],
    setRemote = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!federated) {
      setRemote(null);
      return undefined;
    }
    var cancelled = false;
    (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_15__.federatedHostOf)(streamId).then(function (found) {
      if (!cancelled) {
        setRemote(found);
      }
    });
    return function () {
      cancelled = true;
    };
  }, [streamId, federated]);
  var streamHost = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return remote ? {
      origin: remote.link,
      token: remote.token
    } : null;
  }, [remote]);

  // JOIN declares the intent to play — never inferred from the connection.
  // The child decides once the page's socket to it exists; a refusal comes
  // back there, and the page simply stays watching.
  var goJoin = function goJoin() {
    navigate((0,_libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_14__.buildStreamingUrl)({
      sessionId: session.id,
      play: true
    }));
  };
  var goWatch = function goWatch() {
    return navigate(streamingUrl);
  };

  // UN ADMINISTRATEUR ARRÊTE LA PARTIE D'UN AUTRE (le porteur, 2026-10-25),
  // avec DEUX confirmations, « pour éviter les erreurs ». Pas celle d'un
  // serveur ami : nos droits s'arrêtent à nos parties. La sienne s'arrête
  // depuis « Vos sessions », plus haut.
  //
  // Le nom du propriétaire et le titre passent par un élément React, qui les
  // échappe : le titre et un texte de la fenêtre sont insérés tels quels
  // dans le HTML, et un nom d'affichage se choisit librement.
  var canStop = isAdmin && !isMine && !federated;
  var stopForEveryone = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var result;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return (0,_api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_12__.stopSession)(session.platform, session.id, token);
          case 1:
            result = _context.v;
            if (!result.ok) {
              context.toast.open(t("dashboard.live.stopFailed"), {
                variant: "error"
              });
            }
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function stopForEveryone() {
      return _ref3.apply(this, arguments);
    };
  }();
  var askStop = function askStop() {
    context.modal.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
      children: t("dashboard.live.stopFirstMessage", {
        owner: session.ownerDisplayName,
        title: session.title
      })
    }), {
      variant: "confirm",
      title: t("dashboard.live.stopFirstTitle"),
      confirmLabel: t("dashboard.live.stopContinue"),
      cancelLabel: t("app.cancel"),
      onConfirm: function onConfirm() {
        return context.modal.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
          children: t("dashboard.live.stopSecondMessage")
        }), {
          variant: "confirm",
          title: t("dashboard.live.stopSecondTitle"),
          confirmLabel: t("dashboard.live.stopConfirm"),
          cancelLabel: t("app.cancel"),
          onConfirm: stopForEveryone
        });
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "bg-black border-0 overflow-hidden w-100",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: "position-relative w-100",
      style: {
        height: "240px",
        zIndex: 0
      },
      children: [(!federated || remote) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_11__.SessionStream, {
        sessionId: federated ? remote.id : streamId,
        host: streamHost,
        t: t,
        maxAttempts: null,
        showOverlay: false,
        fillHeight: true,
        muted: true
        // LE 540p À 30 POUR UNE VIGNETTE (chantier 31, le
        // porteur) : là où la partie sait l'encoder.
        ,
        quality: "sd"
        // Une vignette n'ouvre pas la partie : pas d'intro
        // (chantier 35).
        ,
        preview: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        bg: "danger",
        className: "position-absolute top-0 start-0 m-2",
        children: t("dashboard.live.badge")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Body, {
      className: "bg-body-secondary d-flex flex-column gap-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: "d-flex align-items-start gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: "text-uppercase small fw-semibold flex-shrink-0",
          style: {
            minWidth: 48
          },
          children: session.consoleId
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: "flex-grow-1 text-truncate",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "fw-semibold text-truncate",
            children: session.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: " small text-truncate",
            children: session.ownerDisplayName
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: "small flex-shrink-0 text-end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
            children: [session.playerCount, "/", session.maxPlayers || session.playerCount + session.openSlots]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(SessionDuration, {
            startedAt: session.startedAt
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: "d-flex gap-2 mt-2",
        children: [canJoin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
            variant: "warning",
            className: "w-50",
            onClick: goJoin,
            children: t("dashboard.live.join")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
            variant: "info",
            className: "w-50",
            onClick: goWatch,
            children: t("dashboard.live.watch")
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "info",
          className: "w-100",
          onClick: goWatch,
          children: t("dashboard.live.watch")
        }), canStop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "danger",
          className: "flex-shrink-0",
          "aria-label": t("dashboard.live.stop"),
          title: t("dashboard.live.stop"),
          onClick: askStop,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("i", {
            className: "bi bi-power"
          })
        })]
      })]
    })]
  });
}

// Icon per platform — same set buildMenuItems (index.js) already uses for
// the matching menu sections, so a session's icon here matches where it
// came from (bi-controller: retro-gaming, bi-tv: streamex/"High
// Definition", bi-broadcast: remote-play).
var PLATFORM_ICON = {
  retrogaming: "bi-controller",
  streamex: "bi-tv",
  remoteplay: "bi-broadcast"
};

// IdleCountdown — how long an abandoned session has left before the kernel
// stops it. The remaining time is computed from the SERVER's own two values
// (idleSince + idleTimeout, both on the wire) rather than a rule copied into
// this file: a client-side copy of a server threshold drifts silently the
// day the server's changes, which is exactly how the AFK warning ended up
// firing at the wrong moment.
//
// Ticks on its own so the number actually counts down; renders nothing at
// all while somebody is playing (idleSince null = not idle).
function IdleCountdown(_ref4) {
  var session = _ref4.session,
    t = _ref4.t;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return Date.now();
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    now = _useState6[0],
    setNow = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!session.idleSince) {
      return undefined;
    }
    var timer = setInterval(function () {
      return setNow(Date.now());
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, [session.idleSince]);
  if (!session.idleSince || !session.idleTimeout) {
    return null;
  }
  var elapsed = Math.floor((now - new Date(session.idleSince).getTime()) / 1000);
  var left = session.idleTimeout - elapsed;
  if (left <= 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
      className: "text-danger",
      children: t("dashboard.mySessions.endingNow")
    });
  }
  var minutes = Math.floor(left / 60);
  var seconds = String(left % 60).padStart(2, "0");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
    className: "".concat(left <= 60 ? "text-danger" : "text-muted"),
    children: t("dashboard.mySessions.timeLeft", {
      time: "".concat(minutes, ":").concat(seconds)
    })
  });
}

// MySession — the user's OWN in-progress sessions, listed above Live Now.
// Exists because a session no longer dies the moment its owner disconnects
// (5-minute idle grace, see manager.go's watchdog): closing the tab by
// accident, or just navigating away to browse Games.jsx, used to mean the
// session was simply gone — now it's still there, reachable by clicking
// back into it (same sessionId → the Streaming page re-attaches instead of
// spawning a fresh container, both for retro-gaming AND remote-play, see
// use-retro-streaming-connection.js/use-streaming-connection.js's own
// reconnect handling). This list is what makes that discoverable instead of
// requiring the exact URL to still be in history — and the trash icon is
// what makes it possible to actually END one instead of just leaving it to
// expire on its own after 5 minutes idle.
//
// Deliberately renders nothing (not even an empty state) when the user has
// no session of their own — unlike Live Now, which is a permanent landmark,
// this is a personal reminder that shouldn't take up space when unused.
function MySession(_ref5) {
  var sessions = _ref5.sessions,
    username = _ref5.username,
    token = _ref5.token,
    t = _ref5.t;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].context);
  // Y compris une partie lancée chez un serveur fédéré : elle appartient à
  // notre compte de là-bas (voir isOwnSession).
  var mine = sessions.filter(function (s) {
    return (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_9__.isOwnSession)(s, username);
  });
  if (mine.length === 0) return null;

  // Opening the link WATCHES — it never gives the pad back (v1 R3). That
  // is what makes a streaming link safe to hand around: it cannot grant
  // control to anyone, its owner included.
  var handleWatch = function handleWatch(session) {
    navigate((0,_libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_14__.buildStreamingUrl)({
      sessionId: session.id
    }));
  };

  // …and this is the ONE way back to the pad: a declared intent. Same
  // endpoint and same server-side check as a spectator joining — the only
  // difference is the label, because "take my session back" and "join a
  // free slot" are the same operation once control stopped being
  // something you got by showing up.
  var handleResume = function handleResume(session) {
    navigate((0,_libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_14__.buildStreamingUrl)({
      sessionId: session.id,
      play: true
    }));
  };
  var handleStop = function handleStop(session) {
    context.modal.open(t("dashboard.mySessions.stopConfirmMessage"), {
      variant: "confirm",
      title: t("dashboard.mySessions.stopConfirmTitle"),
      confirmLabel: t("app.delete"),
      cancelLabel: t("app.cancel"),
      onConfirm: function () {
        var _onConfirm = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var federated, id, host, result;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                _context2.n = 1;
                return (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_15__.federatedHostOf)(session.id);
              case 1:
                federated = _context2.v;
                id = federated ? federated.id : session.id;
                host = federated ? {
                  origin: federated.link,
                  token: federated.token
                } : null;
                _context2.n = 2;
                return (0,_api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_12__.stopSession)(session.platform, id, token, host);
              case 2:
                result = _context2.v;
                if (!result.ok) {
                  context.toast.open(t("dashboard.mySessions.stopFailed"), {
                    variant: "error"
                  });
                }
                // No manual list update needed — the `sessions` push
                // (useSessionPool) removes it as soon as the backend drops
                // the record, same as every other session-pool consumer.
              case 3:
                return _context2.a(2);
            }
          }, _callee2);
        }));
        function onConfirm() {
          return _onConfirm.apply(this, arguments);
        }
        return onConfirm;
      }()
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    className: "mb-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("h6", {
      className: "fw-bold text-uppercase text-muted small mb-3",
      children: t("dashboard.mySessions.title")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      className: "d-flex flex-column gap-2",
      children: mine.map(function (session) {
        var _session$me3, _session$consoleId;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_13__.ListElement, {
          onClick: function onClick() {
            var _session$me2;
            if (((_session$me2 = session.me) === null || _session$me2 === void 0 ? void 0 : _session$me2.padSlot) == null) {
              handleResume(session);
            } else {
              handleWatch(session);
            }
          },
          icon: ((_session$me3 = session.me) === null || _session$me3 === void 0 ? void 0 : _session$me3.padSlot) == null ? "bi bi-arrow-right" : "bi ".concat(PLATFORM_ICON[session.platform] || "bi-controller"),
          label: session.title,
          helpText: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
            className: "d-flex gap-2 align-items-center justify-content-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
              children: (_session$consoleId = session.consoleId) === null || _session$consoleId === void 0 ? void 0 : _session$consoleId.toUpperCase()
            }), session.idleSince && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
              children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(IdleCountdown, {
                session: session,
                t: t
              })]
            })]
          }),
          next: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "d-flex gap-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
              variant: "danger",
              label: t("dashboard.mySessions.stop"),
              onClick: function onClick(e) {
                e.stopPropagation();
                handleStop(session);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("i", {
                className: "bi bi-power"
              })
            })
          })
        }, session.id);
      })
    })]
  });
}
function Dashboard() {
  var _useTranslation2 = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)(),
    t = _useTranslation2.t;
  var _useAuth2 = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_10__.useAuth)(),
    token = _useAuth2.token,
    user = _useAuth2.user;
  var sessions = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_9__.useSessionPool)();
  // Tracked by SESSION ID, not array position — the façade's
  // ordering is now sorted server-side (see internal/sessions/pool.go's
  // List()) so this mostly matters as defense in depth, but react-
  // bootstrap's Carousel is otherwise an uncontrolled, index-based
  // component: if `sessions` ever reorders between renders (a session
  // ending/starting shifts array positions) while tracking a raw index,
  // the "active" slide would silently jump to a DIFFERENT session's video
  // — this was the actual cause of "I started 2 sessions and only ever
  // saw one preview" before the backend sort was added.
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    activeSessionId = _useState8[0],
    setActiveSessionId = _useState8[1];
  var activeIndex = Math.max(0, sessions.findIndex(function (s) {
    return s.id === activeSessionId;
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "pt-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: "text-center mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        style: {
          fontSize: "5rem"
        },
        className: "mb-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("i", {
          className: "bi bi-controller"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("h1", {
        className: "fw-bold mb-2",
        children: t("dashboard.greeting", {
          name: (user === null || user === void 0 ? void 0 : user.display_name) || (user === null || user === void 0 ? void 0 : user.username)
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(MySession, {
      sessions: sessions,
      username: user === null || user === void 0 ? void 0 : user.username,
      token: token,
      t: t
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("h6", {
        className: "fw-bold text-uppercase text-muted small mb-3",
        children: t("dashboard.live.title")
      }), sessions.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          activeIndex: activeIndex,
          onSelect: function onSelect(idx) {
            var _sessions$idx;
            return setActiveSessionId((_sessions$idx = sessions[idx]) === null || _sessions$idx === void 0 ? void 0 : _sessions$idx.id);
          },
          interval: null,
          controls: sessions.length > 1,
          indicators: false,
          variant: "dark",
          children: sessions.map(function (session) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(LiveThumbnail, {
                session: session
              })
            }, session.id);
          })
        }), sessions.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: "d-flex justify-content-center gap-2 mt-3",
          children: sessions.map(function (session, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("button", {
              type: "button",
              "aria-label": t("dashboard.live.slideLabel", {
                position: i + 1,
                count: sessions.length
              }),
              className: "rounded-circle border-0 p-0",
              style: {
                width: 8,
                height: 8,
                background: i === activeIndex ? "#fff" : "rgba(255,255,255,0.35)"
              },
              onClick: function onClick() {
                return setActiveSessionId(session.id);
              }
            }, session.id);
          })
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: "text-center py-5 bg-body-secondary rounded",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: "position-relative d-inline-block mb-2",
          style: {
            fontSize: "3rem",
            opacity: 0.35
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("i", {
            className: "bi bi-broadcast"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("i", {
            className: "bi bi-slash-lg position-absolute top-0 start-0"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("h6", {
          className: "fw-bold mb-0 text-muted",
          children: t("dashboard.live.empty")
        })]
      })]
    })]
  });
}

/***/ }

}]);
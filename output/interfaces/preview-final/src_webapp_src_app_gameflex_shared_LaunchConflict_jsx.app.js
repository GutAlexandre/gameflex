"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_shared_LaunchConflict_jsx"],{

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

/***/ }

}]);
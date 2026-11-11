"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_games_Games_jsx"],{

/***/ "./src/webapp/src/app/gameflex/games/GameCard.jsx"
/*!********************************************************!*\
  !*** ./src/webapp/src/app/gameflex/games/GameCard.jsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameCard: () => (/* binding */ GameCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/localLibrary.js */ "./src/webapp/src/app/gameflex/libs/localLibrary.js");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var _GameStatus_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameStatus.jsx */ "./src/webapp/src/app/gameflex/games/GameStatus.jsx");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.js */ "./src/webapp/src/app/gameflex/games/helpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");






function GameCard(_ref) {
  var rom = _ref.rom,
    t = _ref.t,
    onClick = _ref.onClick;
  // PLUS DE BARRE DE TÉLÉCHARGEMENT SUR LA CARTE (chantier 14) : un jeu ne
  // descend plus d'ici pour être joué, et un téléchargement passe par le
  // navigateur, qui montre sa propre barre.

  // On n'annonce un compte de fichiers que si on en a compté.
  //
  // Deux sources rendent une liste vide sans que ce soit une erreur : un
  // serveur distant (il assemble un jeu multi-fichiers en un seul envoi)
  // et la bibliothèque du téléphone (le scanner rend un jeu, pas ses
  // pièces). « 0 fichier » y serait faux autant qu'inutile — et c'est la
  // même correction pour les deux, donc une seule règle plutôt qu'un cas
  // par origine.
  // « Local » plutôt qu'un compte de fichiers pour ce qui est ICI.
  //
  // « file » ne disait rien à personne : c'est le nombre de morceaux du
  // jeu, une information de rangement, et elle occupait la place de la
  // seule qu'on cherche des yeux dans une liste mêlée — d'où vient ce
  // jeu (demandé le 2026-09-01).
  var parts = [];
  parts.push((0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.formatSize)(rom.sizeBytes));

  // (rom.files || []) : a folder game with no files serializes as a null
  // list — never crash the whole list on one odd entry.
  if ((0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_1__.isRemoteSource)(rom.kind) && (rom.files || []).length > 0) {
    parts.push(t("retrogaming.files", {
      count: rom.files.length
    }));
  }

  // PLUS DE « N SOURCES » : une ligne EST une copie.
  //
  // Ce compteur répondait à « ce jeu existe-t-il ailleurs si celui d'ici ne
  // démarre pas ? » (2026-09-07), du temps où la liste repliait les copies
  // d'un même titre. La source se choisit désormais en haut de la liste :
  // chaque ligne vient d'un seul endroit, et l'icône le dit déjà.
  var details = parts.join(" · ");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_2__.ListElement, {
    onClick: onClick
    // Une icône différente pour ce qui n'est pas là : la première
    // chose qu'on regarde dans une liste est l'icône, pas le texte
    // sous le titre.
    ,
    icon: (0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_1__.isRemoteSource)(rom.kind) ? _helpers_js__WEBPACK_IMPORTED_MODULE_4__.ORIGIN_ICON[rom.kind] || "bi bi-hdd" : (rom.files || []).length > 1 ? "bi bi-collection-play" : "bi bi-disc"
    // LE STATUT, à côté du titre (chantier 30) : ce qu'on cherche des
    // yeux dans une liste, « est-ce que ça joue ? ».
    ,
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [rom.title, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_GameStatus_jsx__WEBPACK_IMPORTED_MODULE_3__.GameStatusBadge, {
        status: rom.status,
        t: t
      })]
    }),
    helpText: details
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/games/Games.jsx"
/*!*****************************************************!*\
  !*** ./src/webapp/src/app/gameflex/games/Games.jsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Games)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./src/webapp/src/node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./src/webapp/src/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./src/webapp/src/node_modules/react-router/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./src/webapp/src/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../skeleton/skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var _libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/localLibrary.js */ "./src/webapp/src/app/gameflex/libs/localLibrary.js");
/* harmony import */ var _libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../libs/federatedHost.js */ "./src/webapp/src/app/gameflex/libs/federatedHost.js");
/* harmony import */ var _libs_hostResources_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../libs/hostResources.js */ "./src/webapp/src/app/gameflex/libs/hostResources.js");
/* harmony import */ var _profile_settings_admin_storage_SourceSelector_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../profile/settings/admin/storage/SourceSelector.jsx */ "./src/webapp/src/app/gameflex/profile/settings/admin/storage/SourceSelector.jsx");
/* harmony import */ var _libs_capabilities_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../libs/capabilities.js */ "./src/webapp/src/app/gameflex/libs/capabilities.js");
/* harmony import */ var _contexts_ConsolesContext_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contexts/ConsolesContext.jsx */ "./src/webapp/src/app/gameflex/contexts/ConsolesContext.jsx");
/* harmony import */ var _api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api/retrogaming.js */ "./src/webapp/src/app/gameflex/api/retrogaming.js");
/* harmony import */ var _api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../api/spawnSessions.js */ "./src/webapp/src/app/gameflex/api/spawnSessions.js");
/* harmony import */ var _stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../stream/shared/SessionStream.jsx */ "./src/webapp/src/app/gameflex/stream/shared/SessionStream.jsx");
/* harmony import */ var _shared_LaunchConflict_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/LaunchConflict.jsx */ "./src/webapp/src/app/gameflex/shared/LaunchConflict.jsx");
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var _GameCard_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./GameCard.jsx */ "./src/webapp/src/app/gameflex/games/GameCard.jsx");
/* harmony import */ var _GameDetailPanel_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./GameDetailPanel.jsx */ "./src/webapp/src/app/gameflex/games/GameDetailPanel.jsx");
/* harmony import */ var _GameStatus_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./GameStatus.jsx */ "./src/webapp/src/app/gameflex/games/GameStatus.jsx");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers.js */ "./src/webapp/src/app/gameflex/games/helpers.js");
/* harmony import */ var _stream_shared_hooks_use_launch_progress_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../stream/shared/hooks/use-launch-progress.js */ "./src/webapp/src/app/gameflex/stream/shared/hooks/use-launch-progress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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























function Games() {
  var _launchScreen$failure;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)(),
    t = _useTranslation.t;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_6__["default"].context);
  var _useAuth = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_17__.useAuth)(),
    token = _useAuth.token,
    user = _useAuth.user;
  var consoles = (0,_contexts_ConsolesContext_jsx__WEBPACK_IMPORTED_MODULE_12__.useConsoles)();
  var consoleId = location.pathname.split("/").filter(Boolean)[1] || "";
  var consoleMeta = consoles.find(function (c) {
    return c.id === consoleId;
  });
  var consoleName = (consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.name) || consoleId.toUpperCase();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  // The URL's own ?page= is the source of truth (not a separate useState)
  // — that's what makes a refresh, or coming back from a game via the
  // streaming page's Exit, land back on the same page instead of
  // resetting to 1. setSearchParams pushes a new history entry by
  // default (not `replace`), so the browser Back button steps through
  // pagination too, same as any other in-app navigation.
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var currentPage = parseInt(searchParams.get("page"), 10) || 1;
  // L'ADRESSE D'À PRÉSENT, pas celle du rendu qui a créé la fonction : le
  // chargement de la liste l'appelle après un `await`, et le `prev` de
  // setSearchParams y réécrivait des paramètres déjà retirés — un `?game=`
  // servi revenait, et sa fiche s'ouvrait une seconde fois, restée ensuite
  // par-dessus la partie (2026-10-15).
  var setCurrentPage = function setCurrentPage(page) {
    var next = new URLSearchParams(window.location.search);
    if (page > 1) {
      next.set("page", String(page));
    } else {
      next["delete"]("page");
    }
    setSearchParams(next);
  };
  // Seeded from the URL's own ?q= (same reasoning as currentPage above) —
  // coming back from a game via Exit, or a refresh, restores the actual
  // search results list instead of the unfiltered one.
  var initialQuery = searchParams.get("q") || "";
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialQuery),
    _useState6 = _slicedToArray(_useState5, 2),
    searchInput = _useState6[0],
    setSearchInput = _useState6[1];
  // LE FILTRE PAR STATUT (chantier 30) : sur la liste déjà là, sans
  // requête — le statut est sur chaque jeu.
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    statuses = _useState8[0],
    setStatuses = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialQuery),
    _useState0 = _slicedToArray(_useState9, 2),
    searchQuery = _useState0[0],
    setSearchQuery = _useState0[1];

  // Debounce the search box before it triggers a new backend fetch.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timeout = setTimeout(function () {
      return setSearchQuery(searchInput);
    }, _helpers_js__WEBPACK_IMPORTED_MODULE_22__.SEARCH_DEBOUNCE_MS);
    return function () {
      return clearTimeout(timeout);
    };
  }, [searchInput]);

  // Mirrors searchQuery into the URL — `replace` (not push, unlike
  // setCurrentPage) since this fires on every debounced keystroke; a
  // history entry per letter typed would make the Back button useless.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setSearchParams(function (prev) {
      var next = new URLSearchParams(prev);
      if (searchQuery) {
        next.set("q", searchQuery);
      } else {
        next["delete"]("q");
      }
      return next;
    }, {
      replace: true
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // Skips resetting to page 1 on the very first load — the whole point of
  // reading `page` from the URL above is to restore whatever page the
  // user was on, which this effect would otherwise immediately stomp on
  // mount (it also runs once for the initial consoleId/searchQuery).
  // Later runs (an actual new search) still reset to page 1 as before.
  var isFirstLoad = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  // La recherche de la liste affichée : une liste RELUE avec la même
  // recherche (`libraryEpoch`, la bibliothèque du téléphone qui change) garde
  // sa page — sinon chaque relecture y ramenait à la page 1, retour d'une
  // partie compris.
  var listedQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(searchQuery);
  // Bumped by the native "library changed" event below: a game downloaded
  // during play just entered the library, and the open list must reclassify
  // it from remote to local without a reload (2026-08-30).
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    libraryEpoch = _useState10[0],
    setLibraryEpoch = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!(0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_7__.hasLocalLibrary)()) {
      return undefined;
    }

    // Idem : la liste se redessine quand elle a été RELUE, pas quand on
    // annonce qu'elle va l'être.
    return (0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_7__.onLocalLibraryReloaded)(function () {
      return setLibraryEpoch(function (epoch) {
        return epoch + 1;
      });
    });
  }, []);

  // LES SOURCES : la bibliothèque d'ici, et les serveurs fédérés (chantier
  // 14, 2026-10-12). Les partages montés n'y sont plus : ils ne servent qu'à
  // AJOUTER des jeux, dans Réglages › Jeux. Un serveur fédéré se choisit ici
  // pour voir SES jeux — les jouer chez lui, ou les télécharger.
  //
  // Null tant que la liste n'est pas arrivée : une adresse `?source=peer:3`
  // ne doit pas retomber sur le local au premier rendu.
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    servers = _useState12[0],
    setServers = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cancelled = false;
    (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_8__.federatedServers)().then(function (found) {
      if (!cancelled) {
        setServers(found || []);
      }
    });
    return function () {
      cancelled = true;
    };
  }, []);

  // LES DISQUES INTERNES DE CETTE MACHINE (chantier 23 ; ceux du téléphone
  // depuis le chantier 27) : chacun est une source à part, et ses jeux se
  // jouent ici. Null tant que la liste n'est pas arrivée, pour la même
  // raison que les serveurs ; une machine sans disque interne en a zéro.
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    disks = _useState14[0],
    setDisks = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cancelled = false;
    (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.listInternalDisks)().then(function (answer) {
      if (!cancelled) {
        setDisks(answer.ok ? (answer.data || []).filter(function (disk) {
          return disk.present;
        }) : []);
      }
    })["catch"](function () {
      if (!cancelled) {
        setDisks([]);
      }
    });
    return function () {
      cancelled = true;
    };
  }, []);
  // Les disques qui ont des jeux de CETTE console : une source vide pour elle
  // n'aurait rien à montrer.
  var consoleDisks = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (disks || []).filter(function (disk) {
      var _disk$consoles;
      return (((_disk$consoles = disk.consoles) === null || _disk$consoles === void 0 ? void 0 : _disk$consoles[consoleId]) || 0) > 0;
    });
  }, [disks, consoleId]);

  // DANS L'ADRESSE, comme la page et la recherche : revenir d'une partie
  // jouée chez un serveur fédéré ramène à SA liste.
  var requestedSource = searchParams.get("source") || "local";
  var setSource = function setSource(value) {
    setSearchParams(function (prev) {
      var next = new URLSearchParams(prev);
      if (value && value !== "local") {
        next.set("source", value);
      } else {
        next["delete"]("source");
      }
      next["delete"]("page");
      return next;
    });
  };
  // LE LOCAL OUVRE TOUJOURS LA LISTE, même quand il est seul : le sélecteur
  // ne sert pas qu'à choisir, il dit aussi d'où vient ce qu'on regarde
  // (demandé le 2026-09-18). La même grammaire que les écrans
  // d'administration : `local` | `peer:<id>`.
  var sourceOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return [{
      value: "local",
      label: t("retrogaming.origin.local")
    }].concat(_toConsumableArray(consoleDisks.map(function (disk) {
      return {
        value: "disk:".concat(disk.name),
        label: t("retrogaming.diskSource", {
          name: disk.name
        })
      };
    })), _toConsumableArray((servers || []).map(function (server) {
      return {
        value: "peer:".concat(server.id),
        label: server.hostname || server.link
      };
    }).sort(function (a, b) {
      return a.label.localeCompare(b.label);
    })));
  }, [servers, consoleDisks, t]);
  // Un serveur qui n'est plus enregistré retombe sur le local : laisser le
  // sélecteur sur un choix absent afficherait une liste vide en prétendant
  // filtrer.
  var selectedSource = servers === null || disks === null || sourceOptions.some(function (option) {
    return option.value === requestedSource;
  }) ? requestedSource : "local";
  var peerId = selectedSource.startsWith("peer:") ? selectedSource.slice("peer:".length) : null;
  var diskName = selectedSource.startsWith("disk:") ? selectedSource.slice("disk:".length) : null;
  // UNE CONSOLE DONT LES JEUX NE SONT QUE SUR UN DISQUE INTERNE s'ouvre sur
  // ce disque, une fois par visite : la bibliothèque n'aurait rien à montrer.
  // Choisir ensuite « bibliothèque » à la main n'y ramène pas.
  var diskPicked = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());

  // POURQUOI UN SERVEUR FÉDÉRÉ NE MONTRE RIEN : « denied » quand il nous
  // refuse l'accès, « offline » quand il ne répond pas. Une liste vide ne
  // dirait ni l'un ni l'autre.
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    refusal = _useState16[0],
    setRefusal = _useState16[1];
  // La source dont `items` est la liste : un lien `?game=` attend la bonne.
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    listedSource = _useState18[0],
    setListedSource = _useState18[1];

  // LES RESSOURCES DU SERVEUR FÉDÉRÉ CHOISI, telles qu'il les déclare
  // (relayées par notre kernel, `GET /api/v1/servers/{id}`) : une console
  // de bureau lancée chez lui joue avec les siennes, pas les nôtres. Null
  // tant qu'on ne les a pas, ou s'il n'en déclare pas.
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    peerResources = _useState20[0],
    setPeerResources = _useState20[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setPeerResources(null);
    if (!peerId || (consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.method) !== "streamex") {
      return undefined;
    }
    var cancelled = false;
    (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_8__.federatedServerNow)(peerId).then(function (known) {
      if (!cancelled) setPeerResources((known === null || known === void 0 ? void 0 : known.resources) || null);
    });
    return function () {
      cancelled = true;
    };
  }, [peerId, consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.method]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (peerId && servers === null || diskName && disks === null) {
      return undefined;
    }
    var cancelled = false;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var result;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            setIsLoading(true);
            // UNE SOURCE, UNE LISTE (chantier 14) : la bibliothèque, ou les
            // jeux d'UN serveur fédéré. Le kernel ne mêle plus rien — ni les
            // partages montés, ni les serveurs fédérés — à la bibliothèque.
            _context.n = 1;
            return (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.listRoms)(consoleId, searchQuery, null, peerId, diskName);
          case 1:
            result = _context.v;
            if (!cancelled) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            if (!(result.ok && selectedSource === "local" && !searchParams.get("source") && !searchQuery && (result.data || []).length === 0 && consoleDisks.length > 0 && !diskPicked.current.has(consoleId))) {
              _context.n = 3;
              break;
            }
            diskPicked.current.add(consoleId);
            setSource("disk:".concat(consoleDisks[0].name));
            return _context.a(2);
          case 3:
            if (result.ok) {
              setItems(result.data || []);
              setRefusal(null);
              if (!isFirstLoad.current && searchQuery !== listedQuery.current) {
                setCurrentPage(1);
              }
              listedQuery.current = searchQuery;
              isFirstLoad.current = false;
            } else if (peerId && (result.status === 403 || result.status === 502)) {
              setItems([]);
              setRefusal(result.status === 403 ? "denied" : "offline");
            } else {
              setItems([]);
              setRefusal(null);
              context.toast.open(result.errorMessage || t("retrogaming.loadFailed"), {
                variant: "error"
              });
            }
            setListedSource(selectedSource);
            setIsLoading(false);
          case 4:
            return _context.a(2);
        }
      }, _callee);
    }))();
    return function () {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consoleId, searchQuery, libraryEpoch, selectedSource, servers === null, disks === null]);

  // Un lancement refusé parce qu'une autre partie est là : le choix proposé
  // est le même sur toutes les pages qui lancent (shared/LaunchConflict.jsx).
  var handleConflict = function handleConflict(result, retryLaunch) {
    var host = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return (0,_shared_LaunchConflict_jsx__WEBPACK_IMPORTED_MODULE_16__.handleLaunchConflict)({
      result: result,
      context: context,
      t: t,
      token: token,
      host: host,
      navigate: navigate,
      retryLaunch: retryLaunch
    });
  };

  // L'ÉCRAN DU LANCEMENT, DÈS LE CLIC (#287, demandé par le porteur le
  // 2026-10-10 : « dès qu'on clique sur Play on doit voir l'écran de toutes
  // étapes qui défilent »). La réponse du lancement peut prendre des
  // minutes — un jeu distant descend d'abord, un conteneur démarre — et on
  // l'attendait ici, sur la fiche, sans rien montrer. Les étapes arrivent
  // pourtant déjà sur le canal de la commande (`onProgress`) : on les
  // affiche tout de suite, sur le même écran que la page de jeu, qui le
  // reprend à la réponse et le garde jusqu'à la première image.
  //
  // ANNULER pendant cette attente ne peut pas interrompre le kernel : son
  // lancement va au bout (le jeu descendu reste en cache). La partie qui en
  // naît est arrêtée à sa réponse, dès qu'elle a un identifiant.
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    launchScreen = _useState22[0],
    setLaunchScreen = _useState22[1];
  var launchRunRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // `host` — le serveur d'un ami quand le jeu se lance chez lui : le flux du
  // lancement, et donc le fond de l'écran, est sur SA passerelle.
  var openLaunchScreen = function openLaunchScreen(title) {
    var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var run = {
      cancelled: false
    };
    launchRunRef.current = run;
    context.offcanvas.close();
    setLaunchScreen({
      title: title,
      steps: [],
      failure: null,
      reportState: null,
      backdrop: null
    });
    var update = function update(change) {
      if (launchRunRef.current === run) {
        setLaunchScreen(function (screen) {
          return screen ? _objectSpread(_objectSpread({}, screen), change(screen)) : screen;
        });
      }
    };
    return {
      run: run,
      // La même lecture qu'useLaunchProgress, sur le canal de la
      // commande plutôt que sur le sujet du lancement.
      //
      // LE FOND D'ABORD (chantier 35) : le premier message, sans étape,
      // donne l'identifiant du lancement — l'écran se branche sur son
      // flux, où la passerelle tient l'image de l'intro. Sous le même
      // compte que la page de jeu qui suivra : l'intro ne se joue
      // qu'une fois par compte, et les deux la jouent ensemble.
      onProgress: function onProgress(message, frame) {
        if (frame !== null && frame !== void 0 && frame.launchId) {
          update(function (screen) {
            return screen.backdrop ? {} : {
              backdrop: {
                launch: {
                  streamId: frame.launchId,
                  host: host ? {
                    origin: host.origin,
                    token: host.token
                  } : null,
                  username: (host ? host.username : (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_17__.getStoredUsername)()) || null
                }
              }
            };
          });
        }
        if (!message) {
          return;
        }
        if (message.type === "failed") {
          run.failure = {
            step: message.step,
            error: message.error || null
          };
        }
        update(function (screen) {
          return {
            steps: (0,_stream_shared_hooks_use_launch_progress_js__WEBPACK_IMPORTED_MODULE_23__.withStep)(screen.steps, {
              step: message.step,
              detail: message.detail || null,
              state: message.type === "failed" ? "error" : "done",
              at: message.at || null
            }),
            failure: message.type === "failed" ? {
              step: message.step,
              error: message.error || null
            } : screen.failure
          };
        });
      },
      // Une étape en erreur garde l'écran (#191 : la croix et
      // « signaler ») ; un refus sans étape se dit par un message.
      failed: function failed() {
        return Boolean(run.failure);
      },
      close: function close() {
        if (launchRunRef.current === run) {
          launchRunRef.current = null;
          setLaunchScreen(null);
        }
      }
    };
  };
  var launchScreenRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  launchScreenRef.current = launchScreen;
  var cancelLaunchScreen = function cancelLaunchScreen() {
    if (launchRunRef.current) {
      launchRunRef.current.cancelled = true;
    }
    launchRunRef.current = null;
    setLaunchScreen(null);
  };

  // La partie née d'un lancement annulé s'arrête aussitôt — chez son hôte
  // quand elle vit ailleurs.
  var stopCancelledLaunch = function stopCancelledLaunch(platform, result, host) {
    var _result$data, _result$data2;
    var sessionId = result !== null && result !== void 0 && result.ok ? ((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.sessionId) || ((_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.session_id) : null;
    if (sessionId) {
      (0,_api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_14__.stopSession)(platform, sessionId, host ? host.token : token, host)["catch"](function () {});
    }
  };
  var sendLaunchReport = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var screen, result;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            screen = launchScreenRef.current;
            if (screen) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            setLaunchScreen(function (current) {
              return current ? _objectSpread(_objectSpread({}, current), {}, {
                reportState: "sending"
              }) : current;
            });
            _context2.n = 2;
            return (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.reportLaunchFailure)({
              context: "lancement (".concat(screen.title, ")"),
              steps: screen.steps,
              detail: screen.failure
            });
          case 2:
            result = _context2.v;
            setLaunchScreen(function (current) {
              return current ? _objectSpread(_objectSpread({}, current), {}, {
                reportState: result.ok ? "sent" : "failed"
              }) : current;
            });
            context.toast.open(result.ok ? t("streaming.launch.reported") : t("streaming.launch.reportFailed"), {
              variant: result.ok ? "success" : "error"
            });
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function sendLaunchReport() {
      return _ref2.apply(this, arguments);
    };
  }();

  // Creates the session server-side FIRST (see createSession's doc,
  // api/retrogaming.js) — the returned sessionId is the ONLY thing the
  // unified Streaming page (../Streaming.jsx) needs; a copy-pasted or
  // refreshed streaming link re-attaches to this same session instead of
  // spawning a duplicate.
  var _handlePlay = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(rom, core, bios, streamSettings) {
      var _parseFederatedId;
      var host,
        _screen,
        _result,
        _backParams,
        _result2$data,
        _screen2,
        _result2,
        _launchId,
        _backParams2,
        remoteReference,
        screen,
        result,
        launchId,
        backParams,
        _args3 = arguments;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            host = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : null;
            if (!((consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.method) === "streamex" && !host && !(0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_11__.can)("spawnsSessions"))) {
              _context3.n = 4;
              break;
            }
            _screen = openLaunchScreen(rom.title); // LES RÉGLAGES DE FLUX PARTENT AUSSI D'ICI. Ce chemin passait
            // `null` : le panneau s'affichait, se sauvegardait, et le
            // téléphone ouvrait son écran X en 720p à 60 images quoi qu'on
            // choisisse (signalé par le porteur le 2026-10-11).
            _context3.n = 1;
            return (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.createSession)(consoleId, rom.reference, rom.title, core || "", bios || "", user === null || user === void 0 ? void 0 : user.username, null, streamSettings, {
              onProgress: _screen.onProgress
            });
          case 1:
            _result = _context3.v;
            if (!_screen.run.cancelled) {
              _context3.n = 2;
              break;
            }
            stopCancelledLaunch("retrogaming", _result, null);
            return _context3.a(2);
          case 2:
            if (_result.ok) {
              _context3.n = 3;
              break;
            }
            if (!_screen.failed()) {
              _screen.close();
              context.toast.open(_result.errorMessage || t("retrogaming.loadFailed"), {
                variant: "error"
              });
            }
            return _context3.a(2);
          case 3:
            context.offcanvas.close();
            _backParams = new URLSearchParams({
              sessionId: _result.data.sessionId,
              page: String(currentPage)
            }); // Le fond de l'intro suit sur la page de jeu (chantier 35).
            if (_result.launchId) {
              _backParams.set("launchId", _result.launchId);
            }
            if (searchQuery) _backParams.set("q", searchQuery);
            if (selectedSource !== "local") _backParams.set("source", selectedSource);
            _backParams.set("play", "1");
            navigate("/streaming?".concat(_backParams.toString()));
            return _context3.a(2);
          case 4:
            if (!((consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.method) === "streamex")) {
              _context3.n = 9;
              break;
            }
            // `host` — LE JEU EST CHEZ QUELQU'UN, C'EST LUI QUI LE LANCE.
            //
            // Rien d'autre ne change : même route, même corps de requête,
            // même conteneur au bout. Ce qui change est à qui on le demande,
            // et avec quel jeton — le nôtre ne veut rien dire chez lui.
            _screen2 = openLaunchScreen(rom.title, host);
            _context3.n = 5;
            return (0,_api_spawnSessions_js__WEBPACK_IMPORTED_MODULE_14__.launchSession)(rom.title, consoleId, token, streamSettings, host, {
              onProgress: _screen2.onProgress,
              core: core
            });
          case 5:
            _result2 = _context3.v;
            if (!_screen2.run.cancelled) {
              _context3.n = 6;
              break;
            }
            stopCancelledLaunch("streamex", _result2, host);
            return _context3.a(2);
          case 6:
            // L'IDENTIFIANT DU LANCEMENT VIENT DU KERNEL, avec la réponse — et
            // SEULEMENT pour un lancement d'ici : jouer chez un pair lance sur
            // SON kernel, dont la page de jeu ne suivra pas le canal.
            _launchId = host ? null : _result2.launchId || null; // One player-session per user now covers streamex too (kernel
            // étape 4) — same switch-confirm flow as the retro path below.
            //
            // UN CONFLIT N'EST PAS UN ÉCHEC À SIGNALER : sa fenêtre prend la
            // main, et l'écran des étapes s'efface, même avec une étape en
            // erreur. Depuis #289 il passe AU-DESSUS des fenêtres de Skeleton,
            // et cachait le choix « Y retourner » (relevé par flows.js le
            // 2026-10-11).
            if (!handleConflict(_result2, function () {
              return _handlePlay(rom, core, bios, streamSettings, host);
            }, host)) {
              _context3.n = 7;
              break;
            }
            _screen2.close();
            return _context3.a(2);
          case 7:
            if (!_result2.ok && !_screen2.failed()) {
              _screen2.close();
            }
            if (!(!_result2.ok || !((_result2$data = _result2.data) !== null && _result2$data !== void 0 && _result2$data.session_id))) {
              _context3.n = 8;
              break;
            }
            if (!_screen2.failed()) {
              _screen2.close();
              context.toast.open(_result2.errorMessage || t("streaming.connection.errors.sessionCreateFailed"), {
                variant: "error"
              });
            }
            return _context3.a(2);
          case 8:
            // Même appel que les chemins rétro plus bas : la fiche
            // panel this was opened from must not stay open underneath the
            // streaming page (it would reappear on Exit).
            context.offcanvas.close();
            // Same unified page as every other platform — the session is
            // resolved via SessionPool (the sessions service now pushes its
            // spawned streamex sessions on the façade).
            // L'IDENTIFIANT REPART PRÉFIXÉ quand la session vit ailleurs :
            // l'hôte l'a frappé dans SON espace, et deux serveurs y frappent
            // les mêmes. Sans le préfixe, la page de streaming irait chercher
            // cette session dans notre propre façade — au mieux elle ne
            // trouverait rien, au pire l'homonyme d'ici. Même écriture que
            // pour une console fédérée (C9-P4) et pour un jeu (chantier 6).
            _backParams2 = new URLSearchParams({
              sessionId: host ? (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_8__.federatedId)(host.serverId, _result2.data.session_id) : _result2.data.session_id,
              page: String(currentPage)
            });
            if (_launchId) {
              _backParams2.set("launchId", _launchId);
            }
            if (searchQuery) _backParams2.set("q", searchQuery);
            if (selectedSource !== "local") _backParams2.set("source", selectedSource);
            // Launching a game is an intent to play — carry it, or the
            // player lands on a black watch screen of a session whose
            // emulator has not started, with no idea why.
            _backParams2.set("play", "1");
            navigate("/streaming?".concat(_backParams2.toString()));
            return _context3.a(2);
          case 9:
            if (core) {
              _context3.n = 10;
              break;
            }
            context.toast.open(t("retrogaming.noCoreConfigured"), {
              variant: "error"
            });
            return _context3.a(2);
          case 10:
            // ÉMULER CHEZ CELUI QUI A LE JEU (C9-P5).
            //
            // Même route, même corps de requête, même conteneur au bout : ce qui
            // change est à qui on le demande. Deux détails, et les deux sont des
            // défauts si on les oublie — la référence doit être LA SIENNE (notre
            // préfixe ne veut rien dire chez lui) et le nom doit être celui qu'on
            // porte chez lui (sa file de joueurs est indexée par nom).
            remoteReference = host ? (_parseFederatedId = (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_8__.parseFederatedId)(rom.reference)) === null || _parseFederatedId === void 0 ? void 0 : _parseFederatedId.id : null;
            screen = openLaunchScreen(rom.title, host);
            _context3.n = 11;
            return (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.createSession)(consoleId, remoteReference || rom.reference, rom.title, core, bios || "", host ? host.username : user === null || user === void 0 ? void 0 : user.username, host,
            // #150 — la résolution choisie part avec la demande de lancement,
            // comme pour streamex. Vide : la console garde sa géométrie.
            streamSettings, {
              onProgress: screen.onProgress
            });
          case 11:
            result = _context3.v;
            if (!screen.run.cancelled) {
              _context3.n = 12;
              break;
            }
            stopCancelledLaunch("retrogaming", result, host);
            return _context3.a(2);
          case 12:
            // L'IDENTIFIANT DU LANCEMENT (#191) vient du kernel, avec la réponse,
            // et SEULEMENT pour un lancement d'ici : émuler chez un pair lance
            // sur SON kernel — un écran d'étapes vide serait pire que pas
            // d'écran. Le téléphone en rend un depuis le chantier 35, pour le fond
            // de l'intro ; ses étapes, elles, passent par son flux de nouvelles.
            launchId = host ? null : result.launchId || null;
            if (result.ok) {
              _context3.n = 14;
              break;
            }
            if (!handleConflict(result, function () {
              return _handlePlay(rom, core, bios, streamSettings, host);
            }, host)) {
              _context3.n = 13;
              break;
            }
            screen.close();
            return _context3.a(2);
          case 13:
            if (!screen.failed()) {
              screen.close();
              context.toast.open(result.errorMessage || t("retrogaming.loadFailed"), {
                variant: "error"
              });
            }
            return _context3.a(2);
          case 14:
            // A plain navigation, not an offcanvas — same call made for remote-
            // play's Streaming/Watch pages: a fullscreen offcanvas kept growing
            // skeleton.js's generic offcanvas API with streaming-only concerns
            // for a single caller.
            // offcanvas.close() first — the game detail panel this was opened
            // from otherwise just stays open underneath, reappearing once the
            // streaming page's own Exit navigates back to /retrogaming/{consoleId}.
            context.offcanvas.close();
            // Carries the current page + search query along so Streaming.jsx's
            // Exit can send us back to the exact same filtered/paginated list
            // instead of resetting to the unfiltered page 1 (see currentPage/
            // searchQuery above) — pure UI navigation state, not part of the
            // session itself.
            // Préfixé quand la session vit ailleurs — même raison que pour
            // streamex et pour une console fédérée : deux serveurs frappent les
            // mêmes identifiants, et notre façade ne connaît pas la sienne.
            backParams = new URLSearchParams({
              sessionId: host ? (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_8__.federatedId)(host.serverId, result.data.sessionId) : result.data.sessionId,
              page: String(currentPage)
            }); // L'IDENTIFIANT VOYAGE AVEC LA SESSION (#191).
            //
            // On arrive ici APRÈS la réponse du lancement — volontairement : c'est cette
            // attente qui permet de garder le traitement du conflit « tu joues déjà
            // ailleurs », dont le bouton de reprise appartient à ce composant.
            // L'écran d'étapes n'est donc pas perdu pour autant : le kernel garde
            // le salon une minute après la fin, et la page de streaming rejoue tout
            // le lancement en s'abonnant.
            if (launchId) {
              backParams.set("launchId", launchId);
            }
            if (searchQuery) backParams.set("q", searchQuery);
            if (selectedSource !== "local") backParams.set("source", selectedSource);
            // Launching a game is an intent to play — carry it, or the
            // player lands on a black watch screen of a session whose
            // emulator has not started, with no idea why.
            backParams.set("play", "1");
            navigate("/streaming?".concat(backParams.toString()));
          case 15:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function handlePlay(_x, _x2, _x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  // Une seule façon d'ouvrir la fiche d'un jeu — le clic d'une vignette,
  // et le lien qui arrive d'ailleurs (voir l'effet `?game=` plus bas). Les
  // deux doivent passer par le même chemin, sinon l'un des deux finit par
  // manquer un prop.
  var openGameDetail = function openGameDetail(rom) {
    return context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_GameDetailPanel_jsx__WEBPACK_IMPORTED_MODULE_20__.GameDetailPanel, {
      rom: rom,
      consoleId: consoleId,
      consoleMeta: consoleMeta,
      t: t,
      context: context,
      onPlay: _handlePlay
    }), {
      size: 600
    });
  };

  // OUVRIR UN JEU DÉSIGNÉ PAR L'ADRESSE — `?game=<référence>`.
  //
  // Une adresse qui désigne un jeu le rouvre : on atterrit ICI — la page
  // qui possède déjà `handlePlay`, les variantes, le choix du cœur et du
  // BIOS.
  //
  // On attend que le catalogue soit chargé : la référence seule ne suffit
  // pas à construire une fiche, il faut le jeu entier. Et on retire le
  // paramètre une fois servi, sinon revenir en arrière rouvrirait le
  // panneau indéfiniment.
  //
  // UN JEU D'UN SERVEUR FÉDÉRÉ vit dans la liste de SON serveur (chantier
  // 14) : on la choisit d'abord, puis on attend qu'elle soit arrivée.
  var requestedGame = searchParams.get("game");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!requestedGame) {
      return;
    }
    var remote = (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_8__.parseFederatedId)(requestedGame);
    // Un lien qui désigne un disque interne (chantier 23) y reste : le jeu
    // a la même référence partout, c'est la source demandée qui dit où.
    var wanted = remote ? "peer:".concat(remote.serverId) : requestedSource.startsWith("disk:") ? requestedSource : "local";
    var forget = function forget() {
      return setSearchParams(function (prev) {
        var next = new URLSearchParams(prev);
        next["delete"]("game");
        return next;
      }, {
        replace: true
      });
    };
    if (requestedSource !== wanted) {
      setSource(wanted);
      return;
    }
    if (servers === null || disks === null || isLoading) {
      return;
    }
    // Son serveur n'est plus enregistré : le jeu n'a plus de liste.
    if (selectedSource !== wanted) {
      forget();
      context.toast.open(t("retrogaming.gameGone"), {
        variant: "error"
      });
      return;
    }
    if (listedSource !== wanted) {
      return;
    }
    var rom = items.find(function (item) {
      return item.reference === requestedGame;
    });
    forget();
    if (rom) {
      openGameDetail(rom);
    } else if (!remote && consoleDisks.length > 0) {
      // UN JEU QUI N'EST PLUS QUE SUR UN DISQUE INTERNE (chantier 23) :
      // sa référence est la même partout, on le cherche donc sur les
      // disques avant de le dire perdu — un lien doit le rouvrir.
      _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _iterator, _step, disk, found, onDisk, _t;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _iterator = _createForOfIteratorHelper(consoleDisks);
              _context4.p = 1;
              _iterator.s();
            case 2:
              if ((_step = _iterator.n()).done) {
                _context4.n = 5;
                break;
              }
              disk = _step.value;
              _context4.n = 3;
              return (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.listRoms)(consoleId, "", null, null, disk.name);
            case 3:
              found = _context4.v;
              onDisk = (found.ok ? found.data || [] : []).find(function (item) {
                return item.reference === requestedGame;
              });
              if (!onDisk) {
                _context4.n = 4;
                break;
              }
              openGameDetail(onDisk);
              return _context4.a(2);
            case 4:
              _context4.n = 2;
              break;
            case 5:
              _context4.n = 7;
              break;
            case 6:
              _context4.p = 6;
              _t = _context4.v;
              _iterator.e(_t);
            case 7:
              _context4.p = 7;
              _iterator.f();
              return _context4.f(7);
            case 8:
              context.toast.open(t("retrogaming.gameGone"), {
                variant: "error"
              });
            case 9:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 6, 7, 8]]);
      }))();
    } else {
      context.toast.open(t("retrogaming.gameGone"), {
        variant: "error"
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestedGame, requestedSource, selectedSource, listedSource, servers, isLoading, items]);
  var searchContext = {
    values: {
      q: searchInput,
      statuses: statuses
    },
    setValues: function setValues(v) {
      var _v$q;
      setSearchInput((_v$q = v.q) !== null && _v$q !== void 0 ? _v$q : searchInput);
      if (v.statuses && v.statuses !== statuses) {
        setStatuses(v.statuses);
        setCurrentPage(1);
      }
    }
  };
  var shown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return items.filter(function (item) {
      return (0,_GameStatus_jsx__WEBPACK_IMPORTED_MODULE_21__.matchesStatuses)(item, statuses);
    });
  }, [items, statuses]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_18__.Page, {
    label: t("retrogaming.gamesTitle", {
      console: consoleName
    }),
    helpText: t("retrogaming.gamesDescription"),
    children: [(consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.experimental) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "warning",
      className: "py-2 small d-flex align-items-start gap-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("i", {
        className: "bi bi-exclamation-triangle-fill mt-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("span", {
        children: consoleMeta.experimental === "heavy" ? t("retrogaming.experimentalHeavyWarning") : consoleMeta.experimental === "firmware" ? t("retrogaming.experimentalFirmwareWarning") : t("retrogaming.experimentalWarning")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_profile_settings_admin_storage_SourceSelector_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
      t: t,
      value: selectedSource,
      onChange: setSource,
      options: sourceOptions,
      canRefresh: false,
      label: t("retrogaming.origin.title"),
      helpText: t("retrogaming.filterSourceHelp")
    }), (consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.method) === "streamex" && function (_find) {
      var here = !peerId;
      var resources = here ? (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_11__.capabilities)().resources : peerResources;
      if (!resources) {
        return null;
      }
      var phone = here && (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_11__.capabilities)().platform === "android";
      var host = here ? t("retrogaming.thisServer") : ((_find = (servers || []).find(function (server) {
        return String(server.id) === peerId;
      })) === null || _find === void 0 ? void 0 : _find.hostname) || t("retrogaming.thatServer");
      var described = (0,_libs_hostResources_js__WEBPACK_IMPORTED_MODULE_9__.describeResources)(resources, t);
      var text = phone ? resources.gpu ? t("retrogaming.gpuAvailable") : t("retrogaming.noGpuWarning") : resources.gpu ? t("retrogaming.hostResources", {
        host: host,
        resources: described
      }) : t("retrogaming.hostNoGpu", {
        host: host,
        resources: described
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: resources.gpu ? "success" : "warning",
        className: "py-2 small d-flex align-items-start gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("i", {
          className: "bi bi-gpu-card mt-1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("span", {
          children: text
        })]
      });
    }(), refusal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "secondary",
      className: "small d-flex align-items-start gap-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("i", {
        className: "bi ".concat(refusal === "denied" ? "bi-shield-lock" : "bi-wifi-off", " mt-1")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("span", {
        children: t(refusal === "denied" ? "retrogaming.peerDenied" : "retrogaming.peerOffline")
      })]
    }), !refusal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_18__.ListingElement, {
      callback: function callback(item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_GameCard_jsx__WEBPACK_IMPORTED_MODULE_19__.GameCard, {
          rom: item,
          t: t,
          onClick: function onClick() {
            return openGameDetail(item);
          }
        }, item.reference);
      },
      items: shown.slice((currentPage - 1) * _helpers_js__WEBPACK_IMPORTED_MODULE_22__.ITEMS_PER_PAGE, currentPage * _helpers_js__WEBPACK_IMPORTED_MODULE_22__.ITEMS_PER_PAGE),
      itemCount: shown.length,
      itemsPerPage: _helpers_js__WEBPACK_IMPORTED_MODULE_22__.ITEMS_PER_PAGE,
      isLoading: isLoading,
      currentPage: currentPage,
      onPositionChange: setCurrentPage,
      search: {
        context: searchContext,
        placeholder: t("retrogaming.searchPlaceholder"),
        // LE PANNEAU DE FILTRES REVIENT POUR LE STATUT (chantier
        // 30), et seulement pour lui : la source se choisit
        // toujours au sélecteur au-dessus (2026-09-18).
        filters: {
          Component: function Component() {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_GameStatus_jsx__WEBPACK_IMPORTED_MODULE_21__.StatusFilter, {
              context: searchContext,
              t: t
            });
          }
        }
      },
      texts: {
        itemsFound: t("retrogaming.gamesFound"),
        noItemsFound: t("retrogaming.noGames")
      }
    }), launchScreen && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_stream_shared_SessionStream_jsx__WEBPACK_IMPORTED_MODULE_15__.LaunchScreen, {
      t: t,
      fixed: true,
      zIndex: 3400,
      label: launchScreen.failure ? t("streaming.launch.failed") : t("streaming.launch.title"),
      steps: launchScreen.steps.length > 0 ? launchScreen.steps : null,
      backdrop: launchScreen.backdrop,
      failed: Boolean(launchScreen.failure),
      error: ((_launchScreen$failure = launchScreen.failure) === null || _launchScreen$failure === void 0 ? void 0 : _launchScreen$failure.error) || null,
      onCancel: cancelLaunchScreen,
      onReport: sendLaunchReport,
      reportState: launchScreen.reportState
    }), document.body)]
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/libs/hostResources.js"
/*!***********************************************************!*\
  !*** ./src/webapp/src/app/gameflex/libs/hostResources.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   describeResources: () => (/* binding */ describeResources)
/* harmony export */ });
// LES RESSOURCES D'UNE MACHINE, EN UNE LIGNE (2026-10-23) — ce qu'elle offre à
// ses émulateurs de bureau, tel qu'elle le déclare (`resources` de
// /api/v1/capabilities, `host` du statut d'une partie : sessionstatus.Resources
// côté serveur). Une seule mise en forme, pour la page des jeux et pour le
// panneau Performance : deux écritures finiraient par ne plus dire la même
// chose.

/** Go au-dessus du gigaoctet, Mo en dessous — comme le panneau Performance. */
function size(bytes) {
  return bytes >= Math.pow(1024, 3) ? "".concat(Math.round(bytes / Math.pow(1024, 3)), " Go") : "".concat(Math.round(bytes / Math.pow(1024, 2)), " Mo");
}

/**
 * « GPU AMD (8 Go de mémoire vidéo) · 16 cœurs logiques · 38 Go de mémoire »,
 * ou null sans ressources. Ce que la machine ne dit pas est omis.
 */
function describeResources(resources, t) {
  if (!resources) {
    return null;
  }
  var parts = [];
  if (resources.gpu) {
    parts.push(resources.vramBytes > 0 ? t("resources.gpuVram", {
      gpu: resources.gpu,
      vram: size(resources.vramBytes)
    }) : t("resources.gpu", {
      gpu: resources.gpu
    }));
  } else {
    parts.push(t("resources.noGpu"));
  }
  if (resources.cpuThreads > 0) {
    parts.push(t("resources.threads", {
      count: resources.cpuThreads
    }));
  }
  if (resources.memoryBytes > 0) {
    parts.push(t("resources.memory", {
      size: size(resources.memoryBytes)
    }));
  }
  return parts.join(" · ");
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

/***/ }

}]);
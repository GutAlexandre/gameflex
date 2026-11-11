"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_shared_StreamSettings_jsx"],{

/***/ "./src/webapp/src/app/gameflex/stream/shared/StreamSettings.jsx"
/*!**********************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/StreamSettings.jsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STREAM_OPTIONS: () => (/* binding */ STREAM_OPTIONS),
/* harmony export */   StreamSettings: () => (/* binding */ StreamSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../skeleton/skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var _libs_network_probe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libs/network-probe.js */ "./src/webapp/src/app/gameflex/stream/shared/libs/network-probe.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;





var Form = _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_3__["default"].Form;

// LES RÉGLAGES DE FLUX — définition, images par seconde, débit.
//
// Le même panneau ET les mêmes options pour remote-play et pour streamex.
//
// Il était écrit deux fois, avec les MÊMES clés de traduction
// (`remoteplay.settings.*`) des deux côtés — ce qui disait déjà que c'était le
// même écran. Le panneau a été partagé le 2026-09-09 ; ses OPTIONS ne
// l'étaient pas, et les deux listes avaient dérivé : remote-play proposait
// 360p/540p et pas 480p, streamex l'inverse, avec des débits différents et
// une détection automatique d'un seul côté (2026-09-10).
//
// L'ARGUMENT ÉCARTÉ ALORS ÉTAIT LE BON, ET LA CONSOLE L'A TRANCHÉ.
//
// On avait écrit ici que « une PS5 déclare ce qu'elle sait faire, un conteneur
// prend ce qu'on lui donne » ne tenait pas, puisque les deux listes étaient
// deux tables écrites par nous. C'était confondre l'ENDROIT où la table est
// écrite avec ce qui la CONTRAINT : un conteneur rend la géométrie qu'on lui
// demande, une PS5 n'accepte que ses quatre modes de Remote Play.
//
// Le 2026-09-20, une session lancée en « 480p » a fait exactement ce que cet
// argument prédisait : poignée de main réussie, GKCrypt initialisé, puis la
// console raccroche en 0,7 s — « AvCap failed to initialize video ». 854×480
// n'est pas un mode qu'elle sait ouvrir.
//
// DÉCISION DE L'UTILISATEUR, LE JOUR MÊME : 480p disparaît PARTOUT — rétro,
// streamex et remote-play. On aurait pu ne le retirer que du remote-play et
// garder deux listes ; garder un réglage qui rend bien d'un côté et TUE une
// partie de l'autre est précisément le genre d'écart qui se paie plus tard.
// Une seule échelle, la même pour les trois.

/** L'échelle unique — les trois plateformes offrent exactement ceci. */
var STREAM_OPTIONS = {
  resolutions: [
  // Revenu le 2026-11-06 (#636) : un jeu que l'émulateur rend en 360p.
  {
    value: "360p",
    label: "360p"
  }, {
    value: "540p",
    label: "540p"
  }, {
    value: "720p",
    label: "720p"
  }, {
    value: "1080p",
    label: "1080p"
  }],
  frameRates: [{
    value: "30",
    label: "30 FPS"
  }, {
    value: "60",
    label: "60 FPS"
  }],
  // Le débit reste en kbps — c'est ce que les deux backends valident (le
  // kernel borne à 500-20000, le launch_spec de la PS5 y lit son plafond de
  // départ). Les libellés, eux, parlent la langue de tout le monde.
  bitrates: [{
    value: "auto",
    label: "Auto"
  }, {
    value: "2000",
    label: "2 Mbps"
  }, {
    value: "4000",
    label: "4 Mbps"
  }, {
    value: "8000",
    label: "8 Mbps"
  }, {
    value: "15000",
    label: "15 Mbps"
  }]
};

// `toast` : celui du contexte Skeleton, pas du formulaire. Le `context` d'un
// panneau de réglages est le contexte de FORMULAIRE (`values`/`setValues`) —
// il ne sait pas parler à l'écran, et c'est très bien ainsi. Absent, la
// détection s'applique en silence plutôt que de tomber en panne.
function StreamSettings(_ref) {
  var t = _ref.t,
    context = _ref.context,
    _ref$toast = _ref.toast,
    toast = _ref$toast === void 0 ? null : _ref$toast,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? STREAM_OPTIONS : _ref$options;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isProbing = _useState2[0],
    setIsProbing = _useState2[1];

  // LA DÉTECTION MESURE LE RÉSEAU, PAS LA CONSOLE.
  //
  // Elle sonde la latence et le débit vers notre propre API, puis propose
  // une définition et une cadence que le lien peut tenir. Rien là-dedans ne
  // regarde une PS5 — et c'est même EXACTEMENT le chemin qu'emprunte une
  // session streamex. Elle n'avait aucune raison de rester d'un seul côté.
  //
  // Le débit n'est délibérément pas proposé : il doit rester sur « Auto »
  // pour que l'adaptation temps réel (côté PS5 comme côté encodeur) fasse
  // son travail — voir le commentaire de `network-probe.js`.
  var autoDetect = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$probeNetworkAn, suggestion, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setIsProbing(true);
            _context.p = 1;
            _context.n = 2;
            return (0,_libs_network_probe_js__WEBPACK_IMPORTED_MODULE_5__.probeNetworkAndSuggestPreset)();
          case 2:
            _yield$probeNetworkAn = _context.v;
            suggestion = _yield$probeNetworkAn.suggestion;
            if (suggestion) {
              context.setValues(_objectSpread(_objectSpread({}, context.values), {}, {
                resolution: suggestion.resolution,
                frameRate: suggestion.frameRate
              }));
              toast === null || toast === void 0 || toast.open(t("remoteplay.settings.probeApplied"), {
                variant: "normal"
              });
            } else {
              toast === null || toast === void 0 || toast.open(t("remoteplay.settings.probeUnreachable"), {
                variant: "error"
              });
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            toast === null || toast === void 0 || toast.open(t("remoteplay.settings.probeFailed"), {
              variant: "error"
            });
          case 4:
            setIsProbing(false);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function autoDetect() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.SectionPanel, {
    label: t("remoteplay.settings.title"),
    helpText: t("remoteplay.settings.help"),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "mb-4 border-bottom pb-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "secondary",
        className: "flex-fill py-2 w-100",
        disabled: isProbing,
        onClick: autoDetect,
        children: [isProbing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          animation: "border",
          size: "sm",
          className: "me-2"
        }), t("remoteplay.settings.autoDetect")]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Form.Group, {
      label: t("remoteplay.settings.resolution"),
      helpText: t("remoteplay.settings.resolutionHelp"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Form.Select, {
        name: "resolution",
        context: context,
        options: options.resolutions || []
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Form.Group, {
      label: t("remoteplay.settings.frameRate"),
      helpText: t("remoteplay.settings.frameRateHelp"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Form.Select, {
        name: "frameRate",
        context: context,
        options: options.frameRates || []
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Form.Group, {
      label: t("remoteplay.settings.bitrate"),
      helpText: t("remoteplay.settings.bitrateHelp"),
      props: {
        style: {
          marginBottom: 0
        }
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Form.Select, {
        name: "bitrate",
        context: context,
        options: options.bitrates || []
      })
    })]
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/libs/network-probe.js"
/*!*************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/libs/network-probe.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   probeNetworkAndSuggestPreset: () => (/* binding */ probeNetworkAndSuggestPreset)
/* harmony export */ });
/* harmony import */ var _service_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/service/api-client */ "./src/webapp/src/app/service/api-client.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
;
var PING_ATTEMPTS = 3;
var PROBE_PAYLOAD_BYTES = 2 * 1024 * 1024; // 2MB, matches backend default
function measureLatencyMs() {
  return _measureLatencyMs.apply(this, arguments);
}
function _measureLatencyMs() {
  _measureLatencyMs = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var samples, i, start, response, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          samples = [];
          i = 0;
        case 1:
          if (!(i < PING_ATTEMPTS)) {
            _context.n = 6;
            break;
          }
          start = performance.now();
          _context.p = 2;
          _context.n = 3;
          return fetch("".concat(_service_api_client__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, "/playstation/health"), {
            cache: "no-store"
          });
        case 3:
          response = _context.v;
          // Une réponse en erreur n'est pas un aller-retour vers le serveur
          // qu'on veut mesurer : on ne la compte pas.
          if (response.ok) {
            samples.push(performance.now() - start);
          }
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
        case 5:
          i++;
          _context.n = 1;
          break;
        case 6:
          if (!(samples.length === 0)) {
            _context.n = 7;
            break;
          }
          return _context.a(2, null);
        case 7:
          samples.sort(function (a, b) {
            return a - b;
          });
          return _context.a(2, samples[Math.floor(samples.length / 2)]);
      }
    }, _callee, null, [[2, 4]]);
  }));
  return _measureLatencyMs.apply(this, arguments);
}
function measureThroughputKbps() {
  return _measureThroughputKbps.apply(this, arguments);
} // Rough, deliberately conservative resolution/fps suggestion — bitrate
// itself is intentionally NOT decided here, it should always stay "auto" so
// the PS5's own real-time bitrate adaptation (StreamSession.congestionLoop,
// fed by ReportClientNetworkLoss) handles the rest; this only picks a
// resolution/fps ceiling the link can plausibly sustain. Calibrated against
// a single real data point so far (see .memory/troubleshooting.md #30):
// ~30ms latency + good throughput -> 720p/60fps fine over VPN, ~60ms
// (same bitrate, no VPN) -> 720p/60fps freezes. Treat as a starting point to
// refine with more real-world reports, not a precise model.
function _measureThroughputKbps() {
  _measureThroughputKbps = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var start, response, blob, elapsedSeconds, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          start = performance.now();
          _context2.p = 1;
          _context2.n = 2;
          return fetch("".concat(_service_api_client__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, "/playstation/network-probe?sizeBytes=").concat(PROBE_PAYLOAD_BYTES), {
            cache: "no-store"
          });
        case 2:
          response = _context2.v;
          if (response.ok) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, null);
        case 3:
          _context2.n = 4;
          return response.blob();
        case 4:
          blob = _context2.v;
          elapsedSeconds = (performance.now() - start) / 1000;
          if (!(elapsedSeconds <= 0 || blob.size === 0)) {
            _context2.n = 5;
            break;
          }
          return _context2.a(2, null);
        case 5:
          return _context2.a(2, blob.size * 8 / elapsedSeconds / 1000);
        case 6:
          _context2.p = 6;
          _t2 = _context2.v;
          return _context2.a(2, null);
      }
    }, _callee2, null, [[1, 6]]);
  }));
  return _measureThroughputKbps.apply(this, arguments);
}
function suggestPreset(latencyMs, throughputKbps) {
  if (latencyMs === null || throughputKbps === null) {
    return null;
  }
  if (throughputKbps >= 20000 && latencyMs <= 40) {
    return {
      resolution: "1080p",
      frameRate: "60"
    };
  }
  if (throughputKbps >= 12000 && latencyMs <= 60) {
    return {
      resolution: "720p",
      frameRate: "60"
    };
  }
  if (throughputKbps >= 6000) {
    return {
      resolution: "540p",
      frameRate: "60"
    };
  }
  if (throughputKbps >= 3000) {
    return {
      resolution: "540p",
      frameRate: "30"
    };
  }
  // Le bas de l'échelle : 360p à 30, revenu le 2026-11-06 (#636).
  return {
    resolution: "360p",
    frameRate: "30"
  };
}

/**
 * Probes latency + download throughput to OUR backend (not the PS5 — the
 * backend<->PS5 leg is local/LAN and never the real bottleneck, see
 * troubleshooting.md #30) and suggests a resolution/fps preset. Caller
 * decides what to do with the suggestion (e.g. pre-fill a form field) —
 * this never applies or saves anything itself.
 */
function probeNetworkAndSuggestPreset() {
  return _probeNetworkAndSuggestPreset.apply(this, arguments);
}
function _probeNetworkAndSuggestPreset() {
  _probeNetworkAndSuggestPreset = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var _yield$Promise$all, _yield$Promise$all2, latencyMs, throughputKbps;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return Promise.all([measureLatencyMs(), measureThroughputKbps()]);
        case 1:
          _yield$Promise$all = _context3.v;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
          latencyMs = _yield$Promise$all2[0];
          throughputKbps = _yield$Promise$all2[1];
          return _context3.a(2, {
            latencyMs: latencyMs,
            throughputKbps: throughputKbps,
            suggestion: suggestPreset(latencyMs, throughputKbps)
          });
      }
    }, _callee3);
  }));
  return _probeNetworkAndSuggestPreset.apply(this, arguments);
}

/***/ }

}]);
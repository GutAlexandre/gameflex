"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_onscreen_FloatingPanel_jsx"],{

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

/***/ "./src/webapp/src/app/gameflex/stream/onscreen/FloatingPanel.jsx"
/*!***********************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/onscreen/FloatingPanel.jsx ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FloatingPanel: () => (/* binding */ FloatingPanel),
/* harmony export */   StreamingStatsPanel: () => (/* binding */ StreamingStatsPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../skeleton/skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var _libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/SessionPool.js */ "./src/webapp/src/app/gameflex/libs/SessionPool.js");
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var _onscreen_menu_InvitePanel_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../onscreen/menu/InvitePanel.jsx */ "./src/webapp/src/app/gameflex/stream/onscreen/menu/InvitePanel.jsx");
/* harmony import */ var _libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/sessionLinks.js */ "./src/webapp/src/app/gameflex/libs/sessionLinks.js");
/* harmony import */ var _libs_serverBase_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../libs/serverBase.js */ "./src/webapp/src/app/gameflex/libs/serverBase.js");
/* harmony import */ var _libs_capabilities_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libs/capabilities.js */ "./src/webapp/src/app/gameflex/libs/capabilities.js");
/* harmony import */ var _shared_utils_share_link_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/utils/share-link.js */ "./src/webapp/src/app/gameflex/shared/utils/share-link.js");
/* harmony import */ var _onscreen_menu_CheatsPanel_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../onscreen/menu/CheatsPanel.jsx */ "./src/webapp/src/app/gameflex/stream/onscreen/menu/CheatsPanel.jsx");
/* harmony import */ var _onscreen_menu_KeyboardPanel_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../onscreen/menu/KeyboardPanel.jsx */ "./src/webapp/src/app/gameflex/stream/onscreen/menu/KeyboardPanel.jsx");
/* harmony import */ var _onscreen_menu_SaveStatesPanel_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../onscreen/menu/SaveStatesPanel.jsx */ "./src/webapp/src/app/gameflex/stream/onscreen/menu/SaveStatesPanel.jsx");
/* harmony import */ var _onscreen_menu_HandoverPanel_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../onscreen/menu/HandoverPanel.jsx */ "./src/webapp/src/app/gameflex/stream/onscreen/menu/HandoverPanel.jsx");
/* harmony import */ var _libs_hostResources_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../libs/hostResources.js */ "./src/webapp/src/app/gameflex/libs/hostResources.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
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




var Form = _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_1__["default"].Form;











// The floating settings button + offcanvas — built entirely from
// input.options/input.controller/input.resourceMonitoringRef. A field left
// undefined/null simply doesn't render its section (same "undefined = no
// section" contract every menu in this app already uses).

function FloatingPanel(_ref) {
  var _input$extraProps, _session$me, _session$openSlots, _input$extraProps2, _input$extraProps3, _input$extraProps4, _input$extraProps5, _input$extraProps6, _input$extraProps7, _input$extraProps8;
  var t = _ref.t,
    session = _ref.session,
    input = _ref.input,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    isWatching = _ref.isWatching,
    switchesStore = _ref.switchesStore,
    controller = _ref.controller,
    sessionSend = _ref.sessionSend,
    players = _ref.players,
    _ref$watchers = _ref.watchers,
    watchers = _ref$watchers === void 0 ? [] : _ref$watchers,
    _ref$loan = _ref.loan,
    loan = _ref$loan === void 0 ? {} : _ref$loan,
    _ref$onQuit = _ref.onQuit,
    onQuit = _ref$onQuit === void 0 ? null : _ref$onQuit;
  var _useAuth = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_3__.useAuth)(),
    user = _useAuth.user,
    token = _useAuth.token;
  // Mon nom DANS CETTE PARTIE : celui de mon compte chez l'hôte quand elle
  // vit ailleurs (voir nameIn). Les joueurs et les spectateurs viennent de
  // son child et portent ses noms à lui.
  var self = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_2__.nameIn)(session, user === null || user === void 0 ? void 0 : user.username);
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_1__["default"].context);
  // Read live from the store (see createSwitchesStore's own doc above) —
  // NOT from a props snapshot, which would be frozen to whatever it was
  // when this panel was opened.
  var switches = (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(switchesStore.subscribe, switchesStore.getSnapshot);

  // LES DISQUES, demandés à l'ouverture du menu.
  //
  // Un jeu PS1 en plusieurs disques est un .m3u et ses .cue : sans ce
  // sélecteur, arriver au « insérez le disque 2 » signifiait la fin de la
  // partie. On DEMANDE, et on n'affiche rien quand la réponse annonce zéro
  // ou un disque — ce qui couvre du même geste le jeu à disque unique, le
  // core sans interface de disques, et l'hôte trop ancien pour savoir
  // répondre. Aucun drapeau de capacité à tenir à jour des deux côtés,
  // donc aucun qui puisse finir par mentir.
  //
  // C'est le hook de plateforme qui sait à QUI poser la question — le
  // serveur par sa WS, le téléphone par son API locale. Ce panneau ne le
  // sait pas, et c'est le contrat.
  var askDisks = (_input$extraProps = input.extraProps) === null || _input$extraProps === void 0 ? void 0 : _input$extraProps.disks;
  // La FONCTION en dépendance, pas l'objet qui la porte : `extraProps` est
  // reconstruit à chaque rendu du hook, et s'y accrocher relancerait la
  // question à chaque rendu — une requête en boucle pour une réponse qui ne
  // change pas.
  var listDisks = askDisks === null || askDisks === void 0 ? void 0 : askDisks.list;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      count: 0,
      current: -1
    }),
    _useState2 = _slicedToArray(_useState, 2),
    disks = _useState2[0],
    setDisks = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!listDisks) {
      return undefined;
    }
    var cancelled = false;
    Promise.resolve(listDisks()).then(function (found) {
      if (!cancelled && found) setDisks(found);
    });
    return function () {
      cancelled = true;
    };
  }, [listDisks]);
  var contextForm = {
    values: switches,
    setValues: function setValues(values) {
      context.offcanvas.close();
      switchesStore.setValues(values);
    }
  };
  // The handover request rides the façade WS (`requestslot`); the kernel
  // routes the prompt to the holder and the result back. `freeSlots` and
  // `swapDevice` lived here until v1 removed join/takeover from this panel —
  // see the comment on the participate section below for where to find them.
  // Everyone who could be asked, not just the first one found. With four
  // pads in play "the current player" is not a single person, and picking
  // the first match left the other three unreachable.
  var askable = (0,_onscreen_menu_HandoverPanel_jsx__WEBPACK_IMPORTED_MODULE_13__.handoverCandidates)(players, self);
  // The other direction. `watchers` comes from the child alone, so on a v1
  // session it is empty and this section simply is not there.
  var giveable = (0,_onscreen_menu_HandoverPanel_jsx__WEBPACK_IMPORTED_MODULE_13__.giveCandidates)(watchers, self);
  // A username is an account; a display name is what people call each other.
  // Anything addressed to a human names them the way they chose.
  var displayNames = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_2__.useDisplayNames)();
  var givePad = function givePad(username) {
    sessionSend({
      type: "giveslot",
      to: username
    });
    context.toast.open(t(lending ? "streaming.handover.lent" : "streaming.handover.given", {
      username: displayNames[username] || username
    }), {
      variant: "info"
    });
    context.offcanvas.close();
  };
  var askForPad = function askForPad(username) {
    sessionSend({
      type: "requestslot",
      to: username
    });
    context.toast.open(t("streaming.handover.sent"), {
      variant: "info"
    });
    context.offcanvas.close();
  };
  // Owner-only powers (2026-08-25). A JOINER is a guest on somebody
  // else's session: they play, they do not get to end it, overwrite its
  // save states, rewind it under the other players, or turn on cheats.
  // `!isWatching` was the wrong gate — it is true for every player, and a
  // joiner is a player.
  var isOwner = ((_session$me = session.me) === null || _session$me === void 0 ? void 0 : _session$me.role) === "owner" || (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_2__.isOwnSession)(session, user === null || user === void 0 ? void 0 : user.username);
  // DEUX GESTES pour passer sa manette (#274) : le propriétaire la PRÊTE —
  // il garde sa place et la reprend quand il veut — ; un invité DONNE sa
  // place, et la perd.
  var lending = isOwner;
  var giveKey = function giveKey(key) {
    return "streaming.handover.".concat(lending ? key.replace("give", "lend") : key);
  };
  var freeSlots = (_session$openSlots = session.openSlots) !== null && _session$openSlots !== void 0 ? _session$openSlots : 0;
  var saveLoad = (_input$extraProps2 = input.extraProps) === null || _input$extraProps2 === void 0 ? void 0 : _input$extraProps2.saves;
  var resetConsole = (_input$extraProps3 = input.extraProps) === null || _input$extraProps3 === void 0 ? void 0 : _input$extraProps3.reset;
  // Un jeu qui tourne SUR CET APPAREIL n'a pas les mêmes réglages qu'un
  // flux venu d'un serveur, et afficher un interrupteur qui ne fait rien est
  // pire que ne rien afficher — signalé le 2026-08-27.
  //
  // La liste s'est BEAUCOUP réduite le 2026-09-01, et c'était une faute de
  // ma part : ce test comparait un nom de plateforme supprimé depuis
  // C7-P3, il était donc TOUJOURS FAUX et ne masquait rien. En le
  // réparant, j'ai rendu vivants cinq masquages écrits pour un autre
  // état du produit — et le menu du téléphone a perdu d'un coup le
  // partage par lien et les performances, sans que personne l'ait demandé.
  //
  // Ce qui tombe encore, et seulement ça :
  //   son          — il sort du haut-parleur, pas du flux (le flux n'a pas
  //                  encore de piste audio : voir AudioCapture) ;
  //   cast         — il n'y a pas de page à envoyer sur un téléviseur, et
  //                  le partage se fait par LIEN, comme sur le web.
  //
  // Le reste — partage, performances, sauvegardes, voyage dans le temps —
  // est le même menu que le web. La règle est là : l'application montre
  // l'interface du web, à quelques fonctions près, et chaque exception se
  // justifie ligne à ligne ou n'existe pas.
  // SIX GARDES, SIX FAITS — plus un seul « suis-je un téléphone ? ».
  //
  // Il y avait ici `const onDevice = isNativeHost()`, qui cachait à lui
  // seul le son, le plein écran, le cast, le rembobinage et l'invitation.
  // Un test de plateforme employé six fois pour six questions différentes :
  // le jour où l'une d'elles change, les cinq autres changent avec.
  //
  // Et il avait DÉJÀ menti une fois. Le test lisait
  // `session.platform === "device"` ; cette plateforme a été supprimée par
  // C7-P3, donc il était toujours faux, et les gardes ne gardaient plus
  // rien — le menu du téléphone réaffichait tout. Une garde qui ne garde
  // plus est pire qu'une garde absente : elle donne l'impression que la
  // question est traitée.
  //
  // Chacune est maintenant DÉCLARÉE par l'hôte (C8-P5), et se lit toute
  // seule : `pageAudio` dit que couper le son de la page couperait
  // quelque chose, `rewind` que le cœur tient un historique d'états.
  // « Inviter quelqu'un » n'a pas la même forme partout : sur un serveur on
  // invite un COMPTE, sur un appareil on partage un lien que qui l'ouvre
  // rejoint. `invites` porte déjà cette différence depuis toujours.
  var invitesAccounts = (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_8__.capabilities)().invites === "accounts";
  // Le voyage dans le temps appartient aux plateformes qui émulent — une
  // question de session, pas d'hôte. Les deux n'en feront plus qu'une
  // après C8-P4.
  var timeTravelPlatform = session.platform === "retrogaming" || session.platform === "device";
  // Le lien à envoyer. Une partie du téléphone n'a pas d'identifiant de
  // session à partager — voir buildDeviceShareUrl.
  var shareUrl = (0,_libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_6__.isDeviceSession)(session) ? (0,_libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_6__.buildDeviceShareUrl)() : (0,_libs_sessionLinks_js__WEBPACK_IMPORTED_MODULE_6__.buildStreamingShareUrl)({
    sessionId: session.id
  });
  var cheats = (_input$extraProps4 = input.extraProps) === null || _input$extraProps4 === void 0 || (_input$extraProps4 = _input$extraProps4.cheats) === null || _input$extraProps4 === void 0 ? void 0 : _input$extraProps4.cheatsSupported;
  var keyboard = (_input$extraProps5 = input.extraProps) === null || _input$extraProps5 === void 0 ? void 0 : _input$extraProps5.keyboard;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isTyping = _useState4[0],
    setTyping = _useState4[1];
  // DEUX questions, pas une. `can("rewind")` dit si l'HÔTE tient un
  // historique d'états (le runtime du téléphone, lui, n'en tient aucun) ;
  // `rewindSupported` dit si CE CŒUR-LÀ peut le faire sans tout casser —
  // un état PS2 pèse 44 Mio, le sérialiser chaque seconde coûtait une
  // image par seconde, et donc des coupures de son (2026-09-08). La
  // réponse vient de la partie elle-même (message "started"), jamais d'une
  // liste de consoles tenue ici.
  var rewindSupported = (_input$extraProps6 = input.extraProps) === null || _input$extraProps6 === void 0 || (_input$extraProps6 = _input$extraProps6.timeTravelProps) === null || _input$extraProps6 === void 0 ? void 0 : _input$extraProps6.rewindSupported;
  // L'AVANCE RAPIDE AUSSI, déclarée par la partie : un invité de bureau du
  // téléphone (RPCS3, xemu…) ne la sait pas, et sa section ne proposait plus
  // qu'un interrupteur sans effet (le porteur, 2026-10-28 : « je peux voir le
  // rewind alors que c'est pas possible sur streamex »).
  var fastForwardSupported = (_input$extraProps7 = input.extraProps) === null || _input$extraProps7 === void 0 || (_input$extraProps7 = _input$extraProps7.timeTravelProps) === null || _input$extraProps7 === void 0 ? void 0 : _input$extraProps7.fastForwardSupported;
  var rewindOffered = (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_8__.can)("rewind") && rewindSupported;
  return (
    /*#__PURE__*/
    // LE TITRE DU JEU EST ICI (#408) : il a quitté l'écran de jeu, où il
    // tenait la barre du bas. Le porteur, le 2026-10-19 : « on l'enlève
    // pour le moment, peut-être le mettre dans menu ».
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.OffCanvas, {
      icon: "bi bi-controller",
      label: title,
      helpText: title ? t("streaming.menu.help") : null,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        style: {
          minHeight: 0,
          overflowY: "auto"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.SectionPanel, {
          label: t("streaming.settings.general.title"),
          helpText: t("streaming.settings.general.help"),
          children: [isWatching && (isOwner || freeSlots > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
            light: true,
            icon: "bi bi-controller",
            label: t("streaming.settings.join.action"),
            helpText: t("streaming.settings.join.help"),
            onClick: function onClick() {
              sessionSend({
                type: "requestslot"
              });
              context.offcanvas.close();
            },
            next: null
          }), loan.canReclaim && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
            light: true,
            icon: "bi bi-arrow-counterclockwise",
            label: t("streaming.handover.reclaim"),
            helpText: t("streaming.handover.reclaimHelp"),
            onClick: function onClick() {
              sessionSend({
                type: "reclaimslot"
              });
              context.offcanvas.close();
            },
            next: null
          }), loan.canReturn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
            light: true,
            icon: "bi bi-arrow-return-left",
            label: t("streaming.handover.return"),
            helpText: t("streaming.handover.returnHelp"),
            onClick: function onClick() {
              sessionSend({
                type: "returnslot"
              });
              context.offcanvas.close();
            },
            next: null
          }), isWatching && askable.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
            light: true,
            icon: "bi bi-controller",
            label: t("streaming.participate.handover"),
            helpText: t("streaming.participate.handoverHelp"),
            onClick: function onClick() {
              // One holder, no question to ask: opening a
              // list of one to tap the only row is a step
              // that exists purely to be got through.
              if (askable.length === 1) {
                askForPad(askable[0].username);
                return;
              }
              context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.OffCanvas, {
                icon: "bi bi-controller",
                label: t("streaming.participate.handover"),
                helpText: t("streaming.handover.chooseHelp"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_onscreen_menu_HandoverPanel_jsx__WEBPACK_IMPORTED_MODULE_13__.HandoverPanel, {
                  players: players,
                  self: self,
                  onAsk: askForPad,
                  context: context,
                  t: t
                })
              }), {
                size: 600
              });
            }
          }), !isWatching && !loan.canReclaim && giveable.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
            light: true,
            icon: "bi bi-hand-index-thumb",
            label: t(giveKey("giveTitle")),
            helpText: t(giveKey("giveHelp")),
            onClick: function onClick() {
              // One watcher, no list: opening a list of one
              // to tap its only row is a step that exists
              // purely to be got through. The confirmation
              // still happens — giving away the pad mid-game
              // is not a thing to do by brushing a menu.
              if (giveable.length === 1) {
                context.modal.open(t(giveKey("giveMessage"), {
                  username: displayNames[giveable[0].username] || giveable[0].username
                }), {
                  variant: "confirm",
                  title: t(giveKey("giveTitle")),
                  confirmLabel: t(giveKey("give")),
                  cancelLabel: t("app.cancel"),
                  onConfirm: function onConfirm() {
                    return givePad(giveable[0].username);
                  }
                });
                return;
              }
              context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.OffCanvas, {
                icon: "bi bi-hand-index-thumb",
                label: t(giveKey("giveTitle")),
                helpText: t(giveKey("giveHelp")),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_onscreen_menu_HandoverPanel_jsx__WEBPACK_IMPORTED_MODULE_13__.HandoverPanel, {
                  direction: "give",
                  lending: lending,
                  watchers: watchers,
                  self: self,
                  onGive: givePad,
                  context: context,
                  t: t
                })
              }), {
                size: 600
              });
            }
          }), (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_8__.can)("pageAudio") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.SkeletonSwitch, {
            reverse: true,
            variant: "md",
            name: "isSoundEnabled",
            context: contextForm,
            label: t("streaming.settings.sound.label"),
            helpText: t("streaming.settings.sound.help"),
            offText: t("streaming.settings.switch.muted")
          }), (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_8__.can)("fullscreen") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.SkeletonSwitch, {
            reverse: true,
            variant: "md",
            name: "isFullscreen",
            context: contextForm,
            label: t("streaming.settings.fullscreen.label"),
            helpText: t("streaming.settings.fullscreen.help")
          }), (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_8__.can)("castToTv") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.SkeletonSwitch, {
            reverse: true,
            variant: "md",
            name: "isChromeCasting",
            context: contextForm,
            label: t("streaming.settings.chromecast.label"),
            helpText: t("streaming.settings.chromecast.help"),
            onText: t("streaming.settings.switch.casting")
          }), !isWatching && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.SkeletonSwitch, {
              reverse: true,
              variant: "md",
              name: "isControllerVisible",
              context: contextForm,
              label: controller.label ? t("streaming.settings.controller.label", {
                name: controller.label
              }) : t("streaming.settings.controller.labelGeneric"),
              helpText: t("streaming.settings.controller.help"),
              onText: t("streaming.settings.switch.visible"),
              offText: t("streaming.settings.switch.hidden")
            }), switches.isControllerVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.SkeletonSwitch, {
              reverse: true,
              variant: "md",
              name: "isHapticFeedback",
              context: contextForm,
              label: t("streaming.settings.hapticFeedback.label"),
              helpText: t("streaming.settings.hapticFeedback.help")
            }), ((_input$extraProps8 = input.extraProps) === null || _input$extraProps8 === void 0 ? void 0 : _input$extraProps8.onChainWindowChange) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.SkeletonSwitch, {
              reverse: true,
              variant: "md",
              name: "isChainButtons300",
              context: contextForm,
              label: t("streaming.settings.chainButtons300.label"),
              helpText: t("streaming.settings.chainButtons300.help"),
              onText: "300 ms",
              offText: "100 ms"
            }), session.consoleId === "ps1" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.SkeletonSwitch, {
              reverse: true,
              variant: "md",
              name: "isDualShockController",
              context: contextForm,
              label: t("streaming.settings.dualShock.label"),
              helpText: t("streaming.settings.dualShock.help"),
              onText: t("streaming.settings.switch.dualshock"),
              offText: t("streaming.settings.switch.digitalPad")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.SkeletonSwitch, {
            reverse: true,
            variant: "md",
            name: "isRumbleEnabled",
            context: contextForm,
            label: t("streaming.settings.rumble.label"),
            helpText: t("streaming.settings.rumble.help")
          })]
        }), !isWatching && keyboard && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.SectionPanel, {
          label: t("streaming.settings.keyboard.title"),
          helpText: t("streaming.settings.keyboard.help"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
            icon: "bi bi-keyboard",
            label: t("streaming.settings.keyboard.open"),
            helpText: t("streaming.settings.keyboard.openHelp"),
            onClick: function onClick() {
              return setTyping(true);
            },
            children: isTyping ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_onscreen_menu_KeyboardPanel_jsx__WEBPACK_IMPORTED_MODULE_11__.KeyboardPanel, {
              typeText: keyboard.typeText,
              context: context,
              t: t
            }) : null
          })
        }), isOwner && !isWatching && timeTravelPlatform && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [(fastForwardSupported || rewindOffered) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.SectionPanel, {
            label: t("streaming.settings.timeTravel.title"),
            helpText: t("streaming.settings.timeTravel.help"),
            children: [rewindOffered && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.SkeletonSwitch, {
              reverse: true,
              variant: "md",
              name: "isRewinding",
              context: contextForm,
              label: t("streaming.settings.timeTravel.rewind"),
              helpText: t("streaming.settings.timeTravel.rewindHelp"),
              onText: t("streaming.settings.switch.rewinding")
            }), fastForwardSupported && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.SkeletonSwitch, {
              reverse: true,
              variant: "md",
              name: "isFastForwarding",
              context: contextForm,
              label: t("streaming.settings.timeTravel.fastForward"),
              helpText: t("streaming.settings.timeTravel.fastForwardHelp"),
              onText: t("streaming.settings.switch.forwarding")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.SectionPanel, {
            label: t("streaming.settings.session.title"),
            helpText: t("streaming.settings.session.help"),
            children: [disks.count > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.Group, {
              label: t("streaming.settings.disk.title"),
              helpText: t("streaming.settings.disk.help"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.Select, {
                name: "disk",
                context: {
                  values: {
                    disk: String(disks.current)
                  },
                  setValues: function () {
                    var _setValues = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(value) {
                      var index, state;
                      return _regenerator().w(function (_context) {
                        while (1) switch (_context.n) {
                          case 0:
                            index = Number(value.disk); // Optimiste à l'affichage, puis recalé sur
                            // ce que l'hôte dit avoir RÉELLEMENT monté :
                            // un choix refusé revient tout seul au
                            // disque précédent.
                            setDisks(function (state) {
                              return _objectSpread(_objectSpread({}, state), {}, {
                                current: index
                              });
                            });
                            _context.n = 1;
                            return askDisks.change(index);
                          case 1:
                            state = _context.v;
                            if (state !== null && state !== void 0 && state.error) {
                              context.toast.open(t("streaming.settings.disk.failed"), {
                                variant: "error"
                              });
                            }
                            if (state) {
                              setDisks({
                                count: state.count,
                                current: state.current
                              });
                            }
                          case 2:
                            return _context.a(2);
                        }
                      }, _callee);
                    }));
                    function setValues(_x) {
                      return _setValues.apply(this, arguments);
                    }
                    return setValues;
                  }(),
                  files: {},
                  setFiles: function setFiles() {},
                  rulesets: {}
                },
                options: Array.from({
                  length: disks.count
                }, function (unused, index) {
                  return {
                    value: String(index),
                    label: t("streaming.settings.disk.number", {
                      number: index + 1
                    })
                  };
                })
              })
            }), saveLoad && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
              icon: "bi bi-database",
              label: t("streaming.settings.saveStates.title"),
              helpText: t("streaming.settings.saveStates.help"),
              onClick: function onClick() {
                context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.OffCanvas, {
                  icon: "bi bi-database",
                  label: t("streaming.settings.saveStates.title"),
                  helpText: t("streaming.settings.saveStates.help"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_onscreen_menu_SaveStatesPanel_jsx__WEBPACK_IMPORTED_MODULE_12__.SaveStatesPanel, {
                    session: session,
                    username: self,
                    saveState: saveLoad.saveState,
                    loadState: saveLoad.loadState,
                    context: context,
                    t: t
                  })
                }), {
                  size: 600
                });
              }
            }), cheats && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
              icon: "bi bi-braces",
              label: t("streaming.settings.cheats.title"),
              helpText: t("streaming.settings.cheats.help"),
              onClick: function onClick() {
                context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.OffCanvas, {
                  icon: "bi bi-braces",
                  label: t("streaming.settings.cheats.title"),
                  helpText: t("streaming.settings.cheats.help"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_onscreen_menu_CheatsPanel_jsx__WEBPACK_IMPORTED_MODULE_10__.CheatsPanel, {
                    setCheats: input.extraProps.cheats.setCheats,
                    initialCheats: input.extraProps.cheats.initialCheats,
                    context: context,
                    t: t
                  })
                }), {
                  size: 600
                });
              }
            }), resetConsole && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
              icon: "bi bi-arrow-counterclockwise",
              label: t("streaming.settings.reset.title"),
              helpText: t("streaming.settings.reset.help"),
              onClick: function onClick() {
                context.modal.open(t("streaming.settings.reset.confirmMessage"), {
                  variant: "confirm",
                  title: t("streaming.settings.reset.confirmTitle"),
                  confirmLabel: t("streaming.settings.reset.confirm"),
                  cancelLabel: t("app.cancel"),
                  onConfirm: function onConfirm() {
                    return resetConsole();
                  }
                });
              }
            })]
          })]
        }), (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_7__.canInvite)() && shareUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.SectionPanel, {
          label: t("streaming.settings.share.title"),
          helpText: t("streaming.settings.share.help"),
          children: [!(0,_shared_utils_share_link_js__WEBPACK_IMPORTED_MODULE_9__.canShareLink)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
            icon: "bi bi-link-45deg",
            label: t("streaming.settings.share.copy"),
            helpText: t("streaming.settings.share.copyHelp"),
            onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
              var url;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    url = shareUrl;
                    _context2.n = 1;
                    return (0,_shared_utils_share_link_js__WEBPACK_IMPORTED_MODULE_9__.copyTextToClipboard)(url);
                  case 1:
                    if (!_context2.v) {
                      _context2.n = 2;
                      break;
                    }
                    context.toast.open(t("streaming.settings.share.copied"), {
                      variant: "success"
                    });
                    return _context2.a(2);
                  case 2:
                    // Never fail silently: on a plain-HTTP origin the
                    // clipboard is unavailable by design, so show the
                    // link and let the user copy it by hand.
                    context.modal.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                        children: t("streaming.settings.share.copyFailedMessage")
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                        className: "user-select-all text-break small mb-0",
                        children: url
                      })]
                    }), {
                      title: t("streaming.settings.share.copyFailedTitle")
                    });
                  case 3:
                    return _context2.a(2);
                }
              }, _callee2);
            })),
            next: null
          }), (0,_shared_utils_share_link_js__WEBPACK_IMPORTED_MODULE_9__.canShareLink)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
            icon: "bi bi-send",
            label: t("streaming.settings.share.send"),
            helpText: t("streaming.settings.share.sendHelp"),
            onClick: function onClick() {
              (0,_shared_utils_share_link_js__WEBPACK_IMPORTED_MODULE_9__.shareLink)({
                url: shareUrl,
                title: session.title || t("streaming.settings.share.title"),
                text: t("streaming.settings.share.copyHelp")
              });
            },
            next: null
          }), invitesAccounts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
            icon: "bi bi-person-plus",
            label: t("streaming.settings.invite.title"),
            helpText: t("streaming.settings.invite.help"),
            onClick: function onClick() {
              context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.OffCanvas, {
                icon: "bi bi-person-plus",
                label: t("streaming.settings.invite.title"),
                helpText: t("streaming.settings.invite.help"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_onscreen_menu_InvitePanel_jsx__WEBPACK_IMPORTED_MODULE_5__.InvitePanel, {
                  session: session,
                  token: token,
                  context: context,
                  t: t
                })
              }), {
                size: 600
              });
            }
          })]
        }), switches.videoAvailable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.SectionPanel, {
          label: t("streaming.settings.video.title"),
          helpText: t("streaming.settings.video.help"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.Group, {
            label: t("streaming.settings.video.label"),
            helpText: t("streaming.settings.video.now.".concat(switches.videoCurrent === "sd" ? "sd" : "hd")),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.Select, {
              name: "videoQuality",
              context: contextForm,
              options: ["auto", "current", "low"].map(function (value) {
                return {
                  value: value,
                  label: t("streaming.settings.video.".concat(value))
                };
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.SectionPanel, {
          label: t("streaming.settings.performance.title"),
          helpText: t("streaming.settings.performance.help"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Form.SkeletonSwitch, {
            reverse: true,
            variant: "md",
            name: "isResourceMonitoringVisible",
            context: contextForm,
            label: t("streaming.settings.performance.label"),
            onText: t("streaming.settings.switch.visible"),
            offText: t("streaming.settings.switch.hidden")
          })
        }), onQuit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.SectionPanel, {
          label: t("streaming.menu.quit.title"),
          helpText: t(isWatching ? "streaming.menu.quit.helpWatching" : "streaming.menu.quit.help"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_4__.ListElement, {
            light: true,
            icon: "bi bi-box-arrow-left",
            label: t("streaming.menu.quit.label"),
            onClick: function onClick() {
              context.offcanvas.close();
              onQuit();
            }
          })
        })]
      })
    })
  );
}

// The stats panel is generic across all 3 platforms and watch mode, 
// so it lives here instead of being duplicated inside each useXInput. 
// useElapsedSince — « En cours depuis 00:07:12 », qui AVANCE.
//
// Le serveur envoie l'INSTANT de démarrage, jamais une durée déjà calculée :
// une durée se périme en une seconde, et l'afficher telle quelle ferait
// sauter le compteur au rythme du sondage, deux secondes à la fois. Un
// instant, lui, ne se périme jamais — la page compte à sa propre cadence, et
// le chiffre reste juste même si le réseau bafouille.
function useElapsedSince(startedAt) {
  var started = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    var parsed = startedAt ? new Date(startedAt).getTime() : NaN;
    return Number.isFinite(parsed) ? parsed : null;
  }, [startedAt]);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    forceTick = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (started == null) {
      return undefined;
    }
    var timer = setInterval(function () {
      return forceTick(function (n) {
        return n + 1;
      });
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, [started]);
  if (started == null) {
    return null;
  }
  // Une horloge de client peut être en avance sur celle du serveur : un
  // compteur qui démarrerait à « -00:00:03 » serait plus troublant que faux.
  var seconds = Math.max(0, Math.floor((Date.now() - started) / 1000));
  var pad = function pad(n) {
    return String(n).padStart(2, "0");
  };
  return "".concat(pad(Math.floor(seconds / 3600)), ":").concat(pad(Math.floor(seconds / 60) % 60), ":").concat(pad(seconds % 60));
}

// LE TITRE D'UNE SECTION DU PANNEAU DE PERFORMANCES (le porteur, 2026-11-07 :
// « tu peux rajouter juste un horizontal bar ou des légendes pour créer des
// sections ») : sur toute la largeur de la grille, un trait au-dessus, sauf
// pour la première. Défini ici, une fois, pour toutes les sections.
function StatsSection(_ref3) {
  var title = _ref3.title,
    _ref3$first = _ref3.first,
    first = _ref3$first === void 0 ? false : _ref3$first;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
    className: "fw-bold text-uppercase small text-white text-opacity-50".concat(first ? "" : " border-top border-secondary pt-2 mt-2"),
    style: {
      gridColumn: "1 / -1"
    },
    children: title
  });
}
function StreamingStatsPanel(_ref4) {
  var _session$playerCount, _session$openSlots2, _session$me2, _stats$device, _stats$device2, _stats$resolution, _stats$resolution2;
  var stats = _ref4.stats,
    session = _ref4.session,
    t = _ref4.t;
  // != null is not enough for these: NaN and undefined both pass it, and
  // the panel then printed "NaN" and "undefinedxundefined" (React even warns
  // about the NaN child). A stat is shown when it is a real finite number,
  // and every other case is the same em dash the rest of the rows use.
  var num = function num(value) {
    return typeof value === "number" && Number.isFinite(value) ? value : null;
  };
  var rate = function rate(kbps) {
    return num(kbps) != null ? "".concat(Math.round(kbps), " kbps") : "—";
  };
  // Mo en dessous du gigaoctet, Go au-dessus : « 4341 Mo » se relit deux
  // fois, « 4,2 Go » se lit une.
  var bytes = function bytes(value) {
    var v = num(value);
    if (v == null) return null;
    return v >= Math.pow(1024, 3) ? "".concat((v / Math.pow(1024, 3)).toFixed(1), " Go") : "".concat(Math.round(v / Math.pow(1024, 2)), " Mo");
  };
  // L'ÉCART DEPUIS LE DÉBUT DE LA PARTIE, entre parenthèses (le porteur,
  // 2026-10-28 : « commencé à 20°, 34° vingt minutes plus tard : (+14°) »).
  // Le départ est la première mesure de la partie, gardée par le serveur
  // (sessionstatus.Baselines) : la même pour tous, et un rechargement ne la
  // remet pas à zéro. Rien sans départ connu.
  //
  // `from` — le relevé dont on parle : celui de la partie, ou celui du
  // téléphone qu'on tient (`stats.device`), chacun avec son propre départ.
  var start = (stats === null || stats === void 0 ? void 0 : stats.start) || {};
  var delta = function delta(field, format) {
    var _from$start;
    var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stats;
    var now = num(from === null || from === void 0 ? void 0 : from[field]);
    var then = num(from === null || from === void 0 || (_from$start = from.start) === null || _from$start === void 0 ? void 0 : _from$start[field]);
    if (now == null || then == null) return "";
    var difference = Math.round(now - then);
    var sign = difference > 0 ? "+" : difference < 0 ? "−" : "±";
    return " (".concat(sign).concat(format(Math.abs(difference)), ")");
  };
  var bytesDelta = function bytesDelta(field) {
    var now = num(stats === null || stats === void 0 ? void 0 : stats[field]);
    var then = num(start[field]);
    if (now == null || then == null || then === 0) return "";
    var difference = now - then;
    return " (".concat(difference < 0 ? "−" : "+").concat(bytes(Math.abs(difference)), ")");
  };
  var uptime = useElapsedSince(stats === null || stats === void 0 ? void 0 : stats.startedAt);
  // LA CHALEUR ET LA BATTERIE, DANS L'APPLICATION SEULEMENT (le porteur,
  // 2026-10-29 : sur un navigateur, « on ne voit pas les 2 autres lignes et
  // les icônes ») : celles du téléphone qu'on tient, puis celles de la
  // machine quand la partie tourne ailleurs — un serveur, ou le téléphone
  // d'un autre : « un téléphone peut être un serveur aussi ». Sur une
  // partie de ce téléphone, la machine EST lui : ses lignes seraient les
  // mêmes deux fois.
  var inApp = (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_8__.can)("devicePower");
  var machinePower = inApp && Boolean((0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_7__.streamHostOrigin)());
  // Players is internal server-side (json:"-") — the wire serves the
  // console's own maximum, and this tab's own pad via me.padSlot.
  //
  // `maxPlayers` et non la somme : `openSlots` réserve le siège 1 tant que
  // le propriétaire ne joue pas, donc l'addition perd ce siège. Même
  // compteur que Dashboard.jsx, même raison.
  var maxSlots = (session === null || session === void 0 ? void 0 : session.maxPlayers) || ((_session$playerCount = session === null || session === void 0 ? void 0 : session.playerCount) !== null && _session$playerCount !== void 0 ? _session$playerCount : 0) + ((_session$openSlots2 = session === null || session === void 0 ? void 0 : session.openSlots) !== null && _session$openSlots2 !== void 0 ? _session$openSlots2 : 0);
  var padSlot = session === null || session === void 0 || (_session$me2 = session.me) === null || _session$me2 === void 0 ? void 0 : _session$me2.padSlot;

  // « 960x540 (−50 %) » : la scène que l'émulateur fait calculer au jeu, et
  // sa réduction en hauteur par rapport à l'image que le jeu rend (le
  // porteur, 2026-11-07). La scène seule quand l'image du jeu manque.
  var emulatorResolution = function emulatorResolution() {
    var scene = stats === null || stats === void 0 ? void 0 : stats.emulatorResolution;
    if (!scene) return null;
    var sceneHeight = Number(scene.split("x")[1]);
    var gameHeight = Number(String((stats === null || stats === void 0 ? void 0 : stats.gameResolution) || "").split("x")[1]);
    if (!(sceneHeight > 0) || !(gameHeight > 0)) return scene;
    var percent = Math.round((sceneHeight / gameHeight - 1) * 100);
    var sign = percent > 0 ? "+" : percent < 0 ? "−" : "";
    return "".concat(scene, " (").concat(sign).concat(Math.abs(percent), " %)");
  };
  return (
    /*#__PURE__*/
    // EN COLONNES SUR TOUTE LA LARGEUR (le porteur, 2026-10-28) : une
    // seule colonne de vingt lignes débordait la hauteur d'un téléphone
    // couché ; la largeur entière les range côte à côte.
    //
    // EN SECTIONS (le porteur, 2026-11-07 : « séparer les informations qui
    // concernent le Gateway avec celles qui concernent l'émulateur, la
    // machine ») : le téléphone qu'on tient, la partie, le flux, l'émulateur,
    // la machine. Chaque section commence par StatsSection.
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        columnGap: "2rem",
        rowGap: "0.25rem"
      },
      children: [inApp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(StatsSection, {
          title: t("streaming.page.stats.sections.phone"),
          first: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "d-flex justify-content-between gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            className: "text-white text-opacity-75",
            children: t("streaming.page.stats.phoneTemperature")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            children: num(stats === null || stats === void 0 || (_stats$device = stats.device) === null || _stats$device === void 0 ? void 0 : _stats$device.temperatureCelsius) != null ? "".concat(Math.round(stats.device.temperatureCelsius), " \xB0C").concat(delta("temperatureCelsius", function (v) {
              return "".concat(v, " \xB0C");
            }, stats.device)) : "—"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "d-flex justify-content-between gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            className: "text-white text-opacity-75",
            children: t("streaming.page.stats.phoneBattery")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            children: num(stats === null || stats === void 0 || (_stats$device2 = stats.device) === null || _stats$device2 === void 0 ? void 0 : _stats$device2.batteryPercent) != null ? "".concat(Math.round(stats.device.batteryPercent), " %").concat(delta("batteryPercent", function (v) {
              return "".concat(v, " %");
            }, stats.device)) : "—"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(StatsSection, {
        title: t("streaming.page.stats.sections.session"),
        first: !inApp
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.uptime")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          style: {
            fontVariantNumeric: "tabular-nums"
          },
          children: uptime !== null && uptime !== void 0 ? uptime : "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.slot")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: padSlot != null && maxSlots > 0 ? "".concat(padSlot, "/").concat(maxSlots) : "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(StatsSection, {
        title: t("streaming.page.stats.sections.gateway")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.resolution")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: num(stats === null || stats === void 0 || (_stats$resolution = stats.resolution) === null || _stats$resolution === void 0 ? void 0 : _stats$resolution.width) != null && num(stats === null || stats === void 0 || (_stats$resolution2 = stats.resolution) === null || _stats$resolution2 === void 0 ? void 0 : _stats$resolution2.height) != null ? "".concat(stats.resolution.width, "x").concat(stats.resolution.height) : "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.fps")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: num(stats === null || stats === void 0 ? void 0 : stats.fps) != null ? Math.round(stats.fps) : "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.downloadRate")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: rate(stats === null || stats === void 0 ? void 0 : stats.downloadKbps)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.uploadRate")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: rate(stats === null || stats === void 0 ? void 0 : stats.uploadKbps)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.bitrate")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: rate(stats === null || stats === void 0 ? void 0 : stats.videoBitrateKbps)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.latency")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: num(stats === null || stats === void 0 ? void 0 : stats.latencyMs) != null ? "".concat(Math.round(stats.latencyMs), " ms") : "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(StatsSection, {
        title: t("streaming.page.stats.sections.emulator")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.emulator")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-end",
          children: (stats === null || stats === void 0 ? void 0 : stats.emulator) || "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.gameResolution")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: (stats === null || stats === void 0 ? void 0 : stats.gameResolution) || "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.emulatorResolution")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: emulatorResolution() || "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.emulationFps")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: num(stats === null || stats === void 0 ? void 0 : stats.emulationFps) != null ? "".concat(Math.round(stats.emulationFps)) : "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.cpuEmulator")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: num(stats === null || stats === void 0 ? void 0 : stats.cpuPercent) != null ? "".concat(Math.round(stats.cpuPercent), " %").concat(delta("cpuPercent", function (v) {
            return "".concat(v, " %");
          })) : "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.ram")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: bytes(stats === null || stats === void 0 ? void 0 : stats.rssBytes) != null ? "".concat(bytes(stats.rssBytes)).concat(bytesDelta("rssBytes")) : "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.containerRam")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: bytes(stats === null || stats === void 0 ? void 0 : stats.containerRssBytes) != null ? "".concat(bytes(stats.containerRssBytes)).concat(bytes(stats === null || stats === void 0 ? void 0 : stats.containerLimitBytes) ? " / ".concat(bytes(stats.containerLimitBytes)) : "") : "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.diskRead")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: num(stats === null || stats === void 0 ? void 0 : stats.diskReadBytesPerSec) != null ? "".concat((stats.diskReadBytesPerSec / Math.pow(1024, 2)).toFixed(stats.diskReadBytesPerSec < 10 * Math.pow(1024, 2) ? 1 : 0), " Mo/s") : "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(StatsSection, {
        title: t("streaming.page.stats.sections.host")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.host")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-end",
          children: (0,_libs_hostResources_js__WEBPACK_IMPORTED_MODULE_14__.describeResources)(stats === null || stats === void 0 ? void 0 : stats.host, t) || "—"
        })]
      }), machinePower && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "d-flex justify-content-between gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            className: "text-white text-opacity-75",
            children: t("streaming.page.stats.temperature")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            children: num(stats === null || stats === void 0 ? void 0 : stats.temperatureCelsius) != null ? "".concat(Math.round(stats.temperatureCelsius), " \xB0C").concat(delta("temperatureCelsius", function (v) {
              return "".concat(v, " \xB0C");
            })) : "—"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "d-flex justify-content-between gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            className: "text-white text-opacity-75",
            children: t("streaming.page.stats.battery")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            children: num(stats === null || stats === void 0 ? void 0 : stats.batteryPercent) != null ? "".concat(Math.round(stats.batteryPercent), " %").concat(delta("batteryPercent", function (v) {
              return "".concat(v, " %");
            })) : "—"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.gpuBusyPercent")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: num(stats === null || stats === void 0 ? void 0 : stats.gpuBusyPercent) != null ? "".concat(Math.round(stats.gpuBusyPercent), " %") : "—"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "d-flex justify-content-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-white text-opacity-75",
          children: t("streaming.page.stats.vramUsedBytes")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: bytes(stats === null || stats === void 0 ? void 0 : stats.vramUsedBytes) != null ? "".concat(bytes(stats.vramUsedBytes)).concat(bytes(stats === null || stats === void 0 ? void 0 : stats.vramTotalBytes) ? " / ".concat(bytes(stats.vramTotalBytes)) : "").concat(bytesDelta("vramUsedBytes")) : "—"
        })]
      })]
    })
  );
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/onscreen/menu/HandoverPanel.jsx"
/*!****************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/onscreen/menu/HandoverPanel.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HandoverPanel: () => (/* binding */ HandoverPanel),
/* harmony export */   giveCandidates: () => (/* binding */ giveCandidates),
/* harmony export */   handoverCandidates: () => (/* binding */ handoverCandidates)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/SessionPool.js */ "./src/webapp/src/app/gameflex/libs/SessionPool.js");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
// HandoverPanel — WHO do you ask for the pad?
//
// The request itself has always existed (FloatingPanel emits `requestslot`,
// the holder answers a prompt, the result comes back). What was missing is the
// choice: with several pads in play, "the current player" is not a single
// person, and the old code silently picked the FIRST one it found. On a
// four-pad session that meant asking whoever happened to be first in the list,
// with no way to reach the other three.
//
// So this panel lists the people actually holding a pad right now, and asking
// one is one tap. It is only worth showing when there IS a choice — with a
// single holder, FloatingPanel skips the panel and asks directly.
//
// The list comes from `players`, the live roster the page already receives
// (the child's own state for a chantier-4 session, the façade otherwise) —
// never from a fetch of its own, which would show a different truth than the
// pads on screen.
//
// It serves BOTH directions of a hand-over (2026-08-25):
//
//   ask  — a watcher asks a holder for the pad. The holder answers a prompt.
//   give — a holder passes the pad to a watcher, unasked. Nobody answers:
//          giving is not a request, and a controller held out across a sofa
//          is not a negotiation.
//
// The give direction is the one that was missing, and it is why hand-over
// existed in the first place: remote-play has ONE pad and JOIN is
// structurally impossible there, so this is the only way it ever moves.




// Who can be asked: someone holding a pad, who is not you. A watcher has
// nothing to hand over, and asking yourself is not a thing.
// Who can be GIVEN the pad: somebody present, holding nothing, who is not
// you. Reported by the child only (`watchers`); on the v1 path it is empty and
// the entry never appears, which is the honest outcome — that model never knew
// who was watching.

function giveCandidates(watchers, self) {
  return (watchers || []).filter(function (username) {
    return username && username !== self;
  }).map(function (username) {
    return {
      username: username
    };
  });
}
function handoverCandidates(players, self) {
  return (players || []).filter(function (player) {
    return player.username !== self && (player.role === "player" || player.role === "owner")
    // A LENT pad is nobody's to hand over: only its owner takes it back
    // (#274). Asking for it would only ever be refused.
    && !player.lentTo;
  });
}
function HandoverPanel(_ref) {
  var players = _ref.players,
    _ref$watchers = _ref.watchers,
    watchers = _ref$watchers === void 0 ? [] : _ref$watchers,
    _ref$self = _ref.self,
    self = _ref$self === void 0 ? null : _ref$self,
    onAsk = _ref.onAsk,
    onGive = _ref.onGive,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "ask" : _ref$direction,
    _ref$lending = _ref.lending,
    lending = _ref$lending === void 0 ? false : _ref$lending,
    context = _ref.context,
    t = _ref.t;
  var giving = direction === "give";
  var giveKey = function giveKey(key) {
    return "streaming.handover.".concat(lending ? key.replace("give", "lend") : key);
  };
  var candidates = giving ? giveCandidates(watchers, self) : handoverCandidates(players, self);
  // A username is an ACCOUNT, a display name is what people call each other.
  // Everything addressed to a human names them the way they chose; the raw
  // username stays for keys, comparisons and the wire.
  var displayNames = (0,_libs_SessionPool_js__WEBPACK_IMPORTED_MODULE_1__.useDisplayNames)();
  var nameOf = function nameOf(username) {
    return displayNames[username] || username;
  };

  // Confirmed either way, and for the same reason: both hand a controller to
  // somebody else. Giving takes effect immediately once confirmed — the
  // recipient is not asked, because being handed a controller is not a
  // question.
  var act = function act(player) {
    context.modal.open(t(giving ? giveKey("giveMessage") : "streaming.handover.askMessage", {
      username: nameOf(player.username)
    }), {
      variant: "confirm",
      title: t(giving ? giveKey("giveTitle") : "streaming.participate.handover"),
      confirmLabel: t(giving ? giveKey("give") : "streaming.handover.ask"),
      cancelLabel: t("app.cancel"),
      onConfirm: function onConfirm() {
        return (giving ? onGive : onAsk)(player.username);
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_2__.SectionPanel, {
    children: candidates.length === 0 ?
    /*#__PURE__*/
    // Reachable: everyone can leave between the tap that opened
    // this panel and its first render.
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "text-muted small mb-0",
      children: t(giving ? "streaming.handover.noneToGive" : "streaming.handover.noneToAsk")
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "d-flex flex-column gap-2 mt-3",
      children: candidates.map(function (player) {
        var _player$slot, _player$slot2;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_2__.ListElement, {
            onClick: function onClick() {
              context.offcanvas.close();
              act(player);
            },
            icon: "bi bi-controller",
            label: nameOf(player.username),
            helpText: giving ? t("streaming.handover.isWatching") : player.role === "owner" ? t("streaming.handover.isOwner", {
              slot: (_player$slot = player.slot) !== null && _player$slot !== void 0 ? _player$slot : 1
            }) : t("streaming.handover.isPlayer", {
              slot: (_player$slot2 = player.slot) !== null && _player$slot2 !== void 0 ? _player$slot2 : "?"
            }),
            next: null
          })
        }, player.username);
      })
    })
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/onscreen/menu/KeyboardPanel.jsx"
/*!****************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/onscreen/menu/KeyboardPanel.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyboardPanel: () => (/* binding */ KeyboardPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../skeleton/skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;



var Form = _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_1__["default"].Form;

// LE CLAVIER DU TÉLÉPHONE, DANS LE MENU (#420, le porteur, 2026-10-29 : « je
// n'ai pas de clavier qui s'affiche pour entrer le nom depuis l'émulateur »).
//
// Un champ du téléphone, qui ouvre SON clavier, et un bouton qui tape ce
// qu'on y a écrit dans le jeu, puis Entrée — comme un clavier branché. Le
// premier besoin est la fenêtre « Create Profile » de Xenia, qui ne se remplit
// qu'au clavier ; tout autre champ de texte d'un émulateur en profite.
//
// Le menu se ferme d'abord : on voit le texte arriver.
function KeyboardPanel(_ref) {
  var typeText = _ref.typeText,
    context = _ref.context,
    t = _ref.t;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1];
  var send = function send() {
    var typed = text;
    setText("");
    context.offcanvas.close();
    typeText(typed).then(function (_ref2) {
      var missing = _ref2.missing;
      if (missing.length > 0) {
        context.toast.open(t("streaming.settings.keyboard.missing", {
          characters: missing.join(" ")
        }), {
          variant: "warning"
        });
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "pt-2 mt-2 border-top",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Form.Group, {
      label: t("streaming.settings.keyboard.textLabel"),
      helpText: t("streaming.settings.keyboard.textHelp"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Form.Text, {
        name: "typedText",
        context: {
          values: {
            typedText: text
          },
          setValues: function setValues(values) {
            var _values$typedText;
            return setText((_values$typedText = values.typedText) !== null && _values$typedText !== void 0 ? _values$typedText : "");
          },
          files: {},
          setFiles: function setFiles() {},
          rulesets: {}
        },
        props: {
          autoFocus: true,
          autoComplete: "off",
          autoCapitalize: "off",
          spellCheck: false,
          onKeyDown: function onKeyDown(event) {
            return event.key === "Enter" && text && send();
          }
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_2__.FormButton, {
      callback: send,
      label: t("streaming.settings.keyboard.send"),
      isDisabled: !text
    })]
  });
}

/***/ }

}]);
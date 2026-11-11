"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_games_GameDetailPanel_jsx"],{

/***/ "./src/webapp/src/app/gameflex/games/GameDetailPanel.jsx"
/*!***************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/games/GameDetailPanel.jsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameDetailPanel: () => (/* binding */ GameDetailPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../skeleton/skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var _stream_shared_StreamSettings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stream/shared/StreamSettings.jsx */ "./src/webapp/src/app/gameflex/stream/shared/StreamSettings.jsx");
/* harmony import */ var _libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/localLibrary.js */ "./src/webapp/src/app/gameflex/libs/localLibrary.js");
/* harmony import */ var _libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/federatedHost.js */ "./src/webapp/src/app/gameflex/libs/federatedHost.js");
/* harmony import */ var _libs_federationSession_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/federationSession.js */ "./src/webapp/src/app/gameflex/libs/federationSession.js");
/* harmony import */ var _libs_consoleGrants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/consoleGrants.js */ "./src/webapp/src/app/gameflex/libs/consoleGrants.js");
/* harmony import */ var _shared_FederatedAccountPanel_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/FederatedAccountPanel.jsx */ "./src/webapp/src/app/gameflex/shared/FederatedAccountPanel.jsx");
/* harmony import */ var _GameStatus_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GameStatus.jsx */ "./src/webapp/src/app/gameflex/games/GameStatus.jsx");
/* harmony import */ var _libs_launch_mode_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../libs/launch-mode.js */ "./src/webapp/src/app/gameflex/libs/launch-mode.js");
/* harmony import */ var _libs_capabilities_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../libs/capabilities.js */ "./src/webapp/src/app/gameflex/libs/capabilities.js");
/* harmony import */ var _contexts_ConsolesContext_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contexts/ConsolesContext.jsx */ "./src/webapp/src/app/gameflex/contexts/ConsolesContext.jsx");
/* harmony import */ var _api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api/retrogaming.js */ "./src/webapp/src/app/gameflex/api/retrogaming.js");
/* harmony import */ var _profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../profile/auth/AuthContext.jsx */ "./tests/pi-tv/fixtures/interfaces/auth.jsx");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var _libs_streamingSettingsStorage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../libs/streamingSettingsStorage.js */ "./src/webapp/src/app/gameflex/libs/streamingSettingsStorage.js");
/* harmony import */ var _GameSource_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./GameSource.jsx */ "./src/webapp/src/app/gameflex/games/GameSource.jsx");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers.js */ "./src/webapp/src/app/gameflex/games/helpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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



















var Form = _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_2__["default"].Form;

// ── Offcanvas: infos du jeu + bouton Play ──────────────────────────────────
function GameDetailPanel(_ref) {
  var _parseFederatedId, _checked$found, _checked$found2, _federatedPlay$sessio;
  var rom = _ref.rom,
    consoleId = _ref.consoleId,
    consoleMeta = _ref.consoleMeta,
    t = _ref.t,
    context = _ref.context,
    onPlay = _ref.onPlay;
  var _useAuth = (0,_profile_auth_AuthContext_jsx__WEBPACK_IMPORTED_MODULE_14__.useAuth)(),
    playsHere = _useAuth.playsHere,
    user = _useAuth.user;
  // EN TÊTE, et pas au milieu du composant : les effets plus bas les lisent
  // dans leurs tableaux de dépendances, qui sont évalués PENDANT le rendu.
  // Déclarés après eux, `onDevice` tombait dans sa zone morte temporelle et
  // la fiche d'un jeu jetait « Cannot access 'onDevice' before
  // initialization » à chaque ouverture, sur le web comme sur l'appareil
  // (introduit le 2026-08-30 avec « déjà dans la bibliothèque »).
  var onDevice = (0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_4__.hasLocalLibrary)();
  // LE REGISTRE, pour savoir quels BIOS cette console RÉCLAME (#162).
  //
  // La page portait ses propres tables (`REQUIRED_BIOS`/`OPTIONAL_BIOS`) ;
  // elles vivent maintenant dans `registry.go` (#161) et voyagent par
  // `GET /api/v1/consoles`, que ce contexte interroge déjà. Deux tables
  // décrivant la même chose avaient d'ailleurs fini par diverger — sur la
  // Switch, et sur un `saturn_bios.bin` que le registre ne connaissait pas.
  var consoles = (0,_contexts_ConsolesContext_jsx__WEBPACK_IMPORTED_MODULE_12__.useConsoles)();
  // UNE ENTRÉE, UNE COPIE, UNE SOURCE.
  //
  // La fiche ne choisit plus d'où part le jeu : c'est fait EN AMONT, par le
  // sélecteur de la liste. `rom.variants` — le repliement qui unifiait les
  // copies d'un même titre — n'existe plus, et le second sélecteur que
  // portait cette fiche est parti avec. Deux endroits posaient la même
  // question et le second pouvait contredire le premier : on filtrait la
  // liste sur « kDrive », puis la fiche lançait la copie locale, élue par un
  // tri que personne n'avait demandé.
  //
  // Le couple (source, identifiant) ne voyage pas à part : il est DANS
  // l'entrée (`kind`, `serverId`, `mountId`), et `sourceOf` le rend ici
  // comme dans la liste — une seule question, une seule réponse.

  // LA COPIE LOCALE, indépendamment de la source affichée.
  //
  // Elle répond à « ce jeu est-il déjà dans la bibliothèque d'ici ? », par
  // l'UUID (chantier 14). Pour un jeu d'ici, elle pilote le bouton
  // télécharger/retirer. Pour celui d'un serveur fédéré, elle ne change RIEN
  // à ce qui part : un jeu de la liste d'un ami ne se lance que chez lui (le
  // porteur, 2026-10-13) ; elle rend seulement juste le refus d'« Ici »
  // (`also-in-library` plutôt que « pas dans la bibliothèque »).
  // La prop date de l'ouverture du panneau et ne peut pas connaître une
  // copie posée depuis : on la cherche donc nous-mêmes, à chaque relecture
  // de la bibliothèque (signalé le 2026-09-02).
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    localCopy = _useState2[0],
    setLocalCopy = _useState2[1];

  // L'ÉMULATEUR D'ABORD, LA SOURCE ENSUITE — et pas l'inverse.
  //
  // La fiche demandait « d'où vient le jeu ? » puis « avec quoi le
  // lancer ? ». C'est le bon ordre tant que tout se passe ici ; il devient
  // faux dès qu'un émulateur peut vivre ailleurs, parce que c'est LUI qui
  // décide des sources acceptables, et pas le contraire.
  //
  // LA RÈGLE, ET SON MOTIF : un émulateur fédéré n'accepte que les jeux de
  // SON serveur. Pas par pureté de modèle — parce qu'on ignore l'espace
  // libre de la machine d'un ami, et surtout parce que lui faire exécuter
  // un fichier venu d'une troisième source serait lui faire ouvrir la porte
  // à n'importe quoi. Un serveur fédéré prête son catalogue et ses
  // ressources, à quelqu'un qui a un compte chez lui : rien d'autre.
  //
  // Un émulateur d'ici, lui, ne joue que la bibliothèque d'ici : un jeu
  // d'ailleurs n'y descend plus pour être joué (chantier 14, 2026-10-12) —
  // on l'ajoute par Réglages › Jeux, ou on le joue chez son serveur.
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    servers = _useState4[0],
    setServers = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cancelled = false;
    // RELUE À L'OUVERTURE : ce que chaque pair nous ouvre (« Consoles »)
    // décide de Play, et peut avoir changé depuis le début de la page.
    (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_5__.federatedServers)({
      fresh: true
    }).then(function (found) {
      if (!cancelled) {
        setServers(found || []);
      }
    });
    return function () {
      cancelled = true;
    };
  }, []);
  var cores = (consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.cores) || [];
  // CET HÔTE-CI SAIT-IL LANCER CETTE CONSOLE ?
  //
  // Une console streamex demande un émulateur en conteneur : un téléphone
  // n'en a pas, et n'en aura pas. Le rétro, lui, tourne partout — un cœur
  // libretro se charge dans le processus.
  // Une console streamex demande un ÉMULATEUR — pas forcément un conteneur.
  // Un serveur en ouvre un ; un téléphone charge une bibliothèque et la
  // pilote (Eden pour la Switch). D'où deux réponses possibles, et non
  // plus la seule `spawnsSessions`, qui disait « non » à tout téléphone.
  //
  // `localEmulators` ne liste que ce qui est réellement INSTALLÉ : proposer
  // un lancement local qui échoue serait pire que de n'en pas proposer,
  // surtout à côté d'un serveur qui sait le faire.
  var canRunHere = (consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.method) === "streamex" ? (0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_11__.can)("spawnsSessions") || ((0,_libs_capabilities_js__WEBPACK_IMPORTED_MODULE_11__.capabilities)().localEmulators || []).includes(consoleId) : true;
  // UNE CIBLE DE LANCEMENT = UN ÉMULATEUR, LÀ OÙ EST LE JEU.
  //
  // Un jeu d'ici ne se joue qu'ici, celui d'un ami que chez lui (chantier
  // 14) : `launchModeFor` refusait d'office toute autre cible. La fiche les
  // proposait pourtant toutes — les cœurs de chaque serveur connu, à côté de
  // ceux d'ici. Le porteur, 2026-10-22 : « ça ne sert à rien de lister les
  // bios, émulateurs des autres sources. Quel intérêt de montrer aux users
  // que le core existe chez d'autres ? ». Ne restent que les émulateurs de
  // l'endroit du jeu ; un jeu d'un partage monté garde ceux d'ici, dont le
  // refus dit qu'il faut d'abord l'ajouter.
  var origin = (0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_4__.sourceOf)(rom);
  var launchTargets = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (origin.source === "federation") {
      var server = servers.find(function (candidate) {
        return String(candidate.id) === String(origin.id);
      });
      return server ? cores.map(function (core) {
        return {
          id: "srv".concat(server.id, ":").concat(core),
          core: core,
          server: server
        };
      }) : [];
    }
    return canRunHere ? cores.map(function (core) {
      return {
        id: "here:".concat(core),
        core: core,
        server: null
      };
    }) : [];
    // `cores` est un tableau neuf à chaque rendu (`consoleMeta?.cores ||
    // []`) : dépendre de lui ne mémoïserait rien. On dépend de son
    // CONTENU, qui, lui, ne change qu'avec la console.
  }, [cores.join(","), canRunHere, servers, origin.source, origin.id]);

  // QUELS ÉMULATEURS SONT RÉELLEMENT LÀ.
  //
  // `launchTargets` se construit depuis `consoleMeta.cores`, c'est-à-dire
  // les cœurs DÉCLARÉS au registre — jamais ceux présents sur le disque. Le
  // sélecteur proposait donc des émulateurs absents, et le garde du bouton
  // lisait `const noCore = false`, une constante en dur : rien ne vérifiait
  // la présence d'un cœur (mesuré le 2026-09-17, #163).
  //
  // La route, elle, le dit depuis toujours : `/cores` rend les cœurs de la
  // console « installés ou non », chacun avec son `installed`.
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    coreFiles = _useState6[0],
    setCoreFiles = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // LE TÉLÉPHONE AUSSI (2026-10-16) : il rend la même liste, à la même
    // forme (`serveConsoleCores`), et ses cœurs vivent dans
    // cores/<console>/ comme au serveur. On ne lui demandait rien — et
    // « Jouer » n'y était jamais grisé, puisqu'un cœur absent se
    // téléchargeait au lancement. Plus rien ne se télécharge seul : c'est
    // l'admin, depuis Réglages → Émulateurs.
    var cancelled = false;
    (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.listCores)(consoleId).then(function (result) {
      if (!cancelled && result.ok) setCoreFiles(result.data || []);
    });
    return function () {
      cancelled = true;
    };
  }, [consoleId]);
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedTargetId = _useState8[0],
    setSelectedTargetId = _useState8[1];
  // LA CIBLE PAR DÉFAUT, tant qu'on n'en a pas choisi — le serveur du jeu
  // pour un jeu fédéré, ici pour un jeu de la bibliothèque. La règle et son
  // histoire : `defaultLaunchTarget`.
  var defaultTarget = (0,_libs_launch_mode_js__WEBPACK_IMPORTED_MODULE_10__.defaultLaunchTarget)(launchTargets, {
    gameServerId: rom.serverId,
    cores: coreFiles
  });
  // La cible retenue, ou celle par défaut. Dérivé plutôt que stocké : la
  // liste change avec les serveurs connus, et un identifiant qui n'y est
  // plus laisserait le panneau sur un choix qui n'existe pas.
  var selectedTarget = launchTargets.find(function (target) {
    return target.id === selectedTargetId;
  }) || defaultTarget;
  var targetServer = (selectedTarget === null || selectedTarget === void 0 ? void 0 : selectedTarget.server) || null;
  var runsElsewhere = Boolean(targetServer);

  // `selectedCore` reste ce qu'il était pour tout le reste du panneau (BIOS
  // manquants, appel de lancement) — il vient juste de la cible désormais.
  var selectedCore = (selectedTarget === null || selectedTarget === void 0 ? void 0 : selectedTarget.core) || null;

  // CE SERVEUR, DEMANDÉ CHEZ LUI À L'OUVERTURE (chantier 15) : s'il répond,
  // et s'il accepte encore notre lien, vérifiés à l'instant. La liste des
  // serveurs disait ce que la copie de son listing savait, et un accès retiré
  // entre-temps n'y paraissait pas : Play restait, et le lancement échouait
  // chez lui (relevé par le porteur le 2026-10-13).
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    checked = _useState0[0],
    setChecked = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!targetServer) {
      setChecked(null);
      return undefined;
    }
    var cancelled = false;
    setChecked(null);
    (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_5__.federatedServerNow)(targetServer.id).then(function (found) {
      if (!cancelled) {
        setChecked({
          id: targetServer.id,
          found: found
        });
      }
    });
    return function () {
      cancelled = true;
    };
  }, [targetServer === null || targetServer === void 0 ? void 0 : targetServer.id]);
  var federatedServer = targetServer ? {
    id: targetServer.id,
    link: targetServer.link,
    name: targetServer.hostname
  } : null;
  // QUI JOUE CHEZ LUI (chantier 20) : notre compte de chez lui, par le jeton
  // qu'on y a reçu et collé ici une fois — sa session, ou pourquoi il n'y en
  // a pas (pas de jeton, jeton refusé). Ses consoles disent ce qu'il y lance.
  var federatedPlay = (0,_libs_federationSession_js__WEBPACK_IMPORTED_MODULE_6__.useFederationSession)((federatedServer === null || federatedServer === void 0 ? void 0 : federatedServer.id) || null);
  // Les questions sont parties, les réponses pas encore : Play attend, sans
  // refus à dire.
  var checking = Boolean(targetServer) && ((checked === null || checked === void 0 ? void 0 : checked.id) !== targetServer.id || federatedPlay.isLoading);
  // BIOS choice — most consoles have nothing to pick (biosList stays
  // empty and the whole section below just doesn't render, see
  // golang/internal/retrogaming/bios.go's biosConsoleDir), so this is a
  // separate fetch rather than part of consoleMeta (which every console
  // page needs regardless). "" (the default/library-picked BIOS,
  // whatever that resolves to for this core) is always the first option
  // — selecting one of the real files is opt-in.
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    biosList = _useState10[0],
    setBiosList = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedBios = _useState12[0],
    setSelectedBios = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isLaunching = _useState14[0],
    setIsLaunching = _useState14[1];
  // Stream settings — passed to the launch and mapped by the kernel onto
  // the session's resolution, frame rate and bitrate. Same localStorage
  // persistence as the remote-play panel (streamingSettingsStorage), keyed
  // by console id.
  //
  // LE RÉTRO AUSSI, ET À LA MÊME RÈGLE (#332, décision du porteur le
  // 2026-10-11 : « il faut que ça fonctionne aussi comme les autres » —
  // jouer en ligne dépend de la connexion de chacun). Le panneau s'affichait
  // pour le rétro depuis #150, mais seules les consoles de bureau envoyaient
  // leurs réglages : une NES gardait sa géométrie d'époque quoi qu'on
  // choisisse. La condition est écrite UNE fois, pour l'affichage, la
  // sauvegarde et le lancement.
  var takesStreamSettings = (consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.method) === "streamex" || (consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.method) === "retrogaming";
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return (0,_libs_streamingSettingsStorage_js__WEBPACK_IMPORTED_MODULE_16__.loadStreamingSettings)(consoleId) || {
        // 540p et non 480p : ce dernier a été retiré de l'échelle le
        // 2026-09-20 (voir StreamSettings.jsx). 540p est le mode
        // survivant le plus proche.
        //
        // 60 IMAGES PAR SECONDE, et non 30 (décision du porteur le
        // 2026-10-14) : les cœurs rétro tournent à 60, la cadence du
        // flux ne doit pas en jeter une sur deux par défaut. Un choix
        // déjà enregistré pour la console reste le sien.
        resolution: "540p",
        frameRate: "60",
        bitrate: "auto"
      };
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    streamSettings = _useState16[0],
    setStreamSettings = _useState16[1];
  var streamSettingsContext = {
    values: streamSettings,
    setValues: function setValues(v) {
      return setStreamSettings(v);
    },
    files: {},
    setFiles: function setFiles() {},
    rulesets: {}
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ((0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_4__.hasLocalLibrary)()) {
      // AUCUN sélecteur sur l'appareil, et c'est délibéré.
      //
      // Les BIOS du téléphone vivent tous dans un même dossier, sans
      // rangement par console : les proposer tous donnait une liste où
      // il fallait deviner lequel va avec quoi — un choix que le web ne
      // demande jamais, puisqu'il n'affiche la liste que pour les
      // consoles qui en ont vraiment.
      //
      // Un core libretro trouve son BIOS TOUT SEUL dans le dossier
      // système, par son nom. Il n'y a donc rien à choisir. Ce qu'il
      // faut, c'est le dire quand il manque — voir needsBios ci-dessous.
      setBiosList([]);
      return undefined;
    }
    var cancelled = false;
    (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.listBios)(consoleId).then(function (result) {
      if (!cancelled && result.ok) setBiosList(result.data || []);
    });
    return function () {
      cancelled = true;
    };
  }, [consoleId]);

  // La question « ce cœur est-il là ? » vit dans `libs/launch-mode.js`
  // (`coreMissingOn`) : une règle écrite en condition dans le JSX ne
  // s'éprouve pas, et celle-ci ne peut PAS l'être à l'écran — tous les cœurs
  // déclarés sont installés sur cette machine.

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isDownloading = _useState18[0],
    setIsDownloading = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isRemoving = _useState20[0],
    setIsRemoving = _useState20[1];
  // Un jeu déjà chez soi n'a rien à retélécharger : sur un appareil, le
  // bouton se ferme au lieu de proposer une copie qui ne servira jamais.
  //
  // Réévalué à chaque changement de bibliothèque, pas seulement à
  // l'ouverture : le jeu peut ENTRER pendant que la fiche est ouverte —
  // c'est même le cas normal, puisque c'est cette fiche qui l'a demandé.
  // « Déjà chez moi » n'est plus un état à tenir à jour : c'est la copie
  // locale, ou son absence. Deux états pour une seule vérité finissent
  // toujours par ne plus dire la même chose.
  var alreadyLocal = Boolean(localCopy);
  // L'UUID DU JEU, sans le préfixe d'un serveur fédéré (`srv<id>:<uuid>`) :
  // c'est par lui, et plus par le titre, qu'une copie d'ici se reconnaît
  // (chantier 14). Un nom écrit autrement est un autre jeu.
  var gameId = ((_parseFederatedId = (0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_5__.parseFederatedId)(rom.reference)) === null || _parseFederatedId === void 0 ? void 0 : _parseFederatedId.id) || rom.reference;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cancelled = false;
    // Même objet tant que rien n'a changé : sans cette garde, chaque
    // relecture rend une référence neuve et relance le rendu.
    var settle = function settle(found) {
      if (!cancelled) {
        setLocalCopy(function (current) {
          return (current === null || current === void 0 ? void 0 : current.reference) === (found === null || found === void 0 ? void 0 : found.reference) ? current : found;
        });
      }
    };

    // SUR LE SERVEUR, un jeu d'ici est sa propre copie ; un jeu fédéré se
    // cherche dans la liste d'ici, une fois, à l'ouverture de la fiche.
    if (!onDevice) {
      if (!(0,_libs_federatedHost_js__WEBPACK_IMPORTED_MODULE_5__.parseFederatedId)(rom.reference)) {
        settle((0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_4__.sourceOf)(rom).source === "local" ? rom : null);
        return function () {
          cancelled = true;
        };
      }
      ;(0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.listRoms)(consoleId).then(function (answer) {
        return settle((answer.ok ? answer.data || [] : []).find(function (game) {
          return game.reference === gameId;
        }) || null);
      })["catch"](function () {
        return settle(null);
      });
      return function () {
        cancelled = true;
      };
    }

    // SUR LE TÉLÉPHONE, LA MÊME LISTE QU'AU SERVEUR (chantier 15) : celle
    // de son listing, que le kernel refait avant d'annoncer qu'un jeu est
    // entré ou sorti — la fiche la relit alors. Elle ne lisait plus un
    // scan gardé par la page (`/api/v1/library/games`, supprimée). La
    // garde reste : un jeu d'un partage s'était reconnu LUI-MÊME comme
    // présent, et la fiche proposait de retirer ce qui n'y avait jamais
    // été (2026-09-02).
    var look = function look() {
      return (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.listRoms)(consoleId).then(function (answer) {
        return settle((answer.ok ? answer.data || [] : []).find(function (game) {
          return !(0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_4__.isRemoteSource)(game.kind) && game.reference === gameId;
        }) || null);
      })["catch"](function () {
        return settle(null);
      });
    };
    look();

    // Le signal « RELUE », pas « changée » : entre les deux il y a une
    // lecture, et répondre trop tôt fait relire l'ancien cache. Le jeu
    // venait d'entrer dans la bibliothèque et la fiche n'en savait
    // rien — il fallait la fermer et la rouvrir (signalé le 2026-09-02).
    // Le menu des consoles avait eu exactement ce défaut.
    var unsubscribe = (0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_4__.onLocalLibraryReloaded)(look);
    return function () {
      cancelled = true;
      unsubscribe();
    };
  }, [onDevice, consoleId, gameId]);

  // LE NAVIGATEUR TÉLÉCHARGE, PLUS LA PAGE.
  //
  // Elle le faisait elle-même — `fetch` avec l'en-tête, puis un blob remis au
  // navigateur — parce qu'un lien ne peut pas porter d'`Authorization` et que
  // toute route `/api/v1/retrogaming` en exige un. Ça marchait, et ça perdait
  // tout ce que le navigateur sait faire : sa barre de progression, la
  // reprise après coupure, le dossier Téléchargements — et un jeu de
  // plusieurs gigaoctets passait d'abord ENTIER par la mémoire de l'onglet.
  //
  // On demande donc un TICKET, dont l'émission est authentifiée, et on ouvre
  // l'adresse qu'il déverrouille. Le ticket ne porte aucune identité, ne vaut
  // que pour CE jeu, expire en une minute et se consomme au premier usage :
  // voir `retro_download_ticket.go`, qui dit pourquoi c'est un ticket tenu
  // par le serveur et non une signature rejouable.
  //
  // UN VRAI LIEN `<a download>` (chantier 14, demandé par le porteur) : c'est
  // l'utilisateur qui décide, dans son navigateur, où le jeu atterrit. Le nom
  // vient du serveur (`Content-Disposition`), d'où un `download` vide. Un jeu
  // d'un serveur fédéré passe par notre kernel, qui le relaie : le jeton de
  // ce serveur ne sort pas d'ici.
  var handleDownload = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _answer$data, answer, ticket, url, link, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setIsDownloading(true);
            _context.p = 1;
            _context.n = 2;
            return (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.downloadTicket)(consoleId, rom.reference);
          case 2:
            answer = _context.v;
            ticket = answer === null || answer === void 0 || (_answer$data = answer.data) === null || _answer$data === void 0 ? void 0 : _answer$data.ticket;
            if (!(!(answer !== null && answer !== void 0 && answer.ok) || !ticket)) {
              _context.n = 3;
              break;
            }
            throw new Error("no ticket");
          case 3:
            url = (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.ticketDownloadUrl)(ticket); // SUR LE TÉLÉPHONE, SON NAVIGATEUR : la WebView ne télécharge
            // pas, et elle consommerait le ticket (`handToBrowser`).
            _context.n = 4;
            return (0,_api_retrogaming_js__WEBPACK_IMPORTED_MODULE_13__.handToBrowser)(url);
          case 4:
            if (!_context.v) {
              _context.n = 5;
              break;
            }
            context.toast.open(t("retrogaming.detail.downloadInBrowser"), {
              variant: "success"
            });
            return _context.a(2);
          case 5:
            link = document.createElement("a");
            link.href = url;
            link.download = "";
            link.rel = "noopener";
            document.body.appendChild(link);
            link.click();
            link.remove();
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            context.toast.open(t("retrogaming.detail.downloadFailed"), {
              variant: "error"
            });
          case 7:
            _context.p = 7;
            setIsDownloading(false);
            return _context.f(7);
          case 8:
            return _context.a(2);
        }
      }, _callee, null, [[1, 6, 7, 8]]);
    }));
    return function handleDownload() {
      return _ref2.apply(this, arguments);
    };
  }();
  var targetFormContext = {
    values: {
      target: (selectedTarget === null || selectedTarget === void 0 ? void 0 : selectedTarget.id) || ""
    },
    setValues: function setValues(value) {
      return setSelectedTargetId(value.target);
    },
    files: {},
    setFiles: function setFiles() {},
    rulesets: {}
  };
  var biosFormContext = {
    values: {
      bios: selectedBios
    },
    setValues: function setValues(v) {
      return setSelectedBios(v.bios);
    },
    files: {},
    setFiles: function setFiles() {},
    rulesets: {}
  };

  // Les consoles dont le core REFUSE de démarrer sans BIOS.
  //
  // Une liste courte et assumée, pas une table de vérité : ce sont celles
  // où l'absence donne un écran noir sans un mot, ce qu'on passe ensuite une
  // soirée à diagnostiquer. Partout ailleurs le core se débrouille, et
  // avertir à tort serait pire que se taire.
  //
  // Le core trouve son BIOS tout seul dans le dossier système, par son nom :
  // il n'y a rien à CHOISIR, seulement à signaler quand il manque.
  //
  // Et « manque » veut dire : LE BIOS DE CETTE CONSOLE, pas un fichier
  // quelconque. Le test comptait le contenu du dossier — un gba_bios.bin
  // suffisait donc à déclarer une PlayStation prête, et pcsx_rearmed
  // partait sur son BIOS HLE approximatif : écran noir, aucun message.
  // LES BIOS PRÉSENTS, SELON L'HÔTE QUI RÉPOND.
  //
  // Une règle, deux inventaires : l'appareil range ses BIOS dans sa propre
  // bibliothèque (`deviceBiosNames`), le serveur les sert par
  // `GET /api/v1/retrogaming/{console}/bios` — c'est `biosList`, déjà
  // chargé plus haut pour le sélecteur. Sans cette distinction, la règle
  // lue depuis le module de l'appareil aurait déclaré TOUT manquant sur le
  // web, et bloqué les jeux PS1 et Saturn.
  var presentBios = onDevice ? (0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_4__.deviceBiosNames)(consoleId) : biosList;
  // Ce qui manque VRAIMENT : « au moins un suffit » (des révisions du même
  // BIOS), sémantique que le registre porte désormais. La PS1 n'est plus
  // dedans — ses dumps y sont FACULTATIFS depuis #144, le cœur se rabattant
  // sur son BIOS émulé : on les propose sans bloquer.
  var missingBios = (0,_libs_launch_mode_js__WEBPACK_IMPORTED_MODULE_10__.missingRequiredBios)(consoles, consoleId, presentBios);
  var biosMissing = missingBios.length > 0;

  // LES OPTIONS DE BIOS : L'ATTENDU, PAS SEULEMENT LE PRÉSENT (#163/#162).
  //
  // Le sélecteur se construisait sur `biosList`, c'est-à-dire sur `/bios`,
  // qui ne liste QUE ce que le disque porte (`ListBiosEntries`). Tout ce
  // qu'il rendait était donc présent par construction, et aucune option ne
  // pouvait s'afficher désactivée — alors que c'est exactement ce qui a été
  // demandé le 2026-09-17 : « l'option du sélecteur doit être en disabled
  // (pas le selectbox) ».
  //
  // On part donc du registre (requis PUIS facultatifs, dans cet ordre), et
  // on ajoute à la suite ce que le disque porte en plus — un dump que le
  // registre ne nomme pas reste choisissable, il n'y a aucune raison de le
  // cacher à qui l'a déposé.
  var biosOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var expected = (0,_libs_launch_mode_js__WEBPACK_IMPORTED_MODULE_10__.expectedBiosFor)(consoles, consoleId);
    var seen = new Set();
    var names = [];
    for (var _i = 0, _arr = [].concat(_toConsumableArray(expected.required), _toConsumableArray(expected.optional)); _i < _arr.length; _i++) {
      var name = _arr[_i];
      var key = String(name).toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        names.push(name);
      }
    }
    var _iterator = _createForOfIteratorHelper(biosList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var entry = _step.value;
        var _name = typeof entry === "string" ? entry : entry.name;
        var _key = String(_name).toLowerCase();
        if (_name && !seen.has(_key)) {
          seen.add(_key);
          names.push(_name);
        }
      }

      // Le premier choix reste « celui que la bibliothèque décide » : c'est
      // le cœur qui balaie son dossier, et ne rien choisir est le cas
      // ordinaire.
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return [{
      value: "",
      label: t("retrogaming.detail.biosDefault")
    }].concat(_toConsumableArray(names.map(function (name) {
      return {
        value: name,
        label: name,
        // ABSENT = DÉSACTIVÉ, et l'option reste VISIBLE : on lit ainsi
        // ce qui manque, au lieu de l'ignorer. Le sac d'attributs vient
        // de #160, précisément pour ça.
        attributes: {
          disabled: !(0,_libs_launch_mode_js__WEBPACK_IMPORTED_MODULE_10__.biosIsPresent)(presentBios, name)
        }
      };
    })));
  }, [consoles, consoleId, biosList, presentBios, t]);
  // CE QUI VA SE PASSER, EN UN SEUL ENDROIT (#163).
  //
  // La décision vivait dispersée dans le `isDisabled` du bouton : un
  // empilement de six conditions qui savait dire « mort » sans dire
  // pourquoi. `launchModeFor` rend le couple (mode, refus), donc l'écran
  // peut enfin l'expliquer — et chaque entrée est maintenant dite
  // honnêtement, ce qui n'était pas le cas tant que `noCore` valait `false`
  // en dur et que les BIOS n'étaient vérifiés que sur l'appareil (#162).
  //
  // `sourceOnline` VIENT DE LA QUESTION POSÉE À L'OUVERTURE (chantier 15) :
  // le serveur visé a-t-il répondu, à l'instant (`GET /api/v1/servers/{id}`).
  // C'est le signal vivant qui manquait — `server-offline` ne se produisait
  // jamais ici, faute de lui. Une cible d'ici n'en dépend pas.
  // Les possibilités qu'un refus propose, une par ligne — rien quand il
  // n'en propose pas.
  var noLaunchSteps = function noLaunchSteps(slug) {
    var steps = t("retrogaming.detail.noLaunchSteps.".concat(slug), {
      returnObjects: true,
      defaultValue: []
    });
    return Array.isArray(steps) ? steps : [];
  };
  var launchDecision = (0,_libs_launch_mode_js__WEBPACK_IMPORTED_MODULE_10__.launchModeFor)({
    source: (0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_4__.sourceOf)(rom).source,
    inLibrary: alreadyLocal,
    target: selectedTarget !== null && selectedTarget !== void 0 && selectedTarget.server ? "peer" : "here",
    sourceOnline: checking || !targetServer || (checked === null || checked === void 0 || (_checked$found = checked.found) === null || _checked$found === void 0 ? void 0 : _checked$found.online) !== false,
    // IL A RÉVOQUÉ NOTRE LIEN (chantier 20) : ses jeux ne se lisent plus.
    tokenRefused: !checking && (checked === null || checked === void 0 || (_checked$found2 = checked.found) === null || _checked$found2 === void 0 ? void 0 : _checked$found2.refused) === true,
    // NOTRE COMPTE CHEZ LUI (chantier 20) : son jeton collé, accepté, et
    // ce qu'il y lance — les consoles de sa session. Chez un ami, ce sont
    // ses droits à lui qui comptent, pas ceux d'ici.
    signedIn: Boolean(federatedPlay.session),
    accountRefused: federatedPlay.code === "accountRefused",
    remoteLaunch: checking || (0,_libs_consoleGrants_js__WEBPACK_IMPORTED_MODULE_7__.allows)((_federatedPlay$sessio = federatedPlay.session) === null || _federatedPlay$sessio === void 0 ? void 0 : _federatedPlay$sessio.consoles, consoleMeta),
    // CE COMPTE-CI LANCE-T-IL CETTE CONSOLE ICI (chantier 20).
    consoleGranted: (0,_libs_consoleGrants_js__WEBPACK_IMPORTED_MODULE_7__.allows)(user === null || user === void 0 ? void 0 : user.consoles, consoleMeta),
    coreAvailable: Boolean(selectedCore) && !(0,_libs_launch_mode_js__WEBPACK_IMPORTED_MODULE_10__.coreMissingOn)(selectedTarget, coreFiles),
    // Les BIOS lus ici sont les NÔTRES : chez un pair, c'est lui qui
    // juge, comme pour le cœur (`coreMissingOn`).
    biosAvailable: runsElsewhere || !biosMissing,
    playsHere: playsHere
  });
  var handleLaunch = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var remoteHost, opened;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!isLaunching) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            setIsLaunching(true);
            _context2.p = 2;
            // PLUS RIEN NE DESCEND AVANT DE JOUER (chantier 14) : un jeu d'ici
            // part tel quel, un jeu fédéré part chez son serveur. Ce bouton
            // téléchargeait un jeu distant dans la bibliothèque du téléphone
            // avant de l'ouvrir ; `launchModeFor` refuse désormais un jeu qui
            // n'est pas dans la bibliothèque, ici.
            // Saved right before launching (same order as remote-play's Connect)
            // so THIS browser keeps its own preference for the next launch.
            // LA SESSION CHEZ L'AMI, au moment de jouer (chantier 20) : notre
            // kernel l'échange contre le jeton de notre compte chez lui.
            // Refusée, le lancement ne part pas, et la raison se dit.
            // `username` voyage avec le reste parce que la file de joueurs de
            // l'hôte est indexée par nom — le nôtre n'y désigne personne
            // (C9-P4).
            remoteHost = null;
            if (!(runsElsewhere && federatedServer)) {
              _context2.n = 5;
              break;
            }
            _context2.n = 3;
            return (0,_libs_federationSession_js__WEBPACK_IMPORTED_MODULE_6__.federationSession)(federatedServer.id);
          case 3:
            opened = _context2.v;
            if (opened.ok) {
              _context2.n = 4;
              break;
            }
            context.toast.open(t("common.errorCodes.".concat(opened.code === "serverUnreachable" ? "peerUnreachable" : opened.code), {
              server: federatedServer.name,
              defaultValue: t("common.errorCodes.peerUnreachable", {
                server: federatedServer.name
              })
            }), {
              variant: "error"
            });
            return _context2.a(2);
          case 4:
            remoteHost = {
              serverId: federatedServer.id,
              origin: federatedServer.link,
              token: opened.session.token,
              username: opened.session.username
            };
          case 5:
            if (takesStreamSettings) {
              (0,_libs_streamingSettingsStorage_js__WEBPACK_IMPORTED_MODULE_16__.saveStreamingSettings)(consoleId, streamSettings);
            }
            _context2.n = 6;
            return onPlay(rom, selectedCore, selectedBios, takesStreamSettings ? streamSettings : null, remoteHost);
          case 6:
            _context2.p = 6;
            setIsLaunching(false);
            return _context2.f(6);
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[2,, 6, 7]]);
    }));
    return function handleLaunch() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleRemoveLocal = function handleRemoveLocal() {
    context.modal.open(t("retrogaming.detail.removeConfirm"), {
      variant: "confirm",
      title: rom.title,
      confirmLabel: t("app.delete"),
      cancelLabel: t("app.cancel"),
      onConfirm: function () {
        var _onConfirm = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
          var error, _t2;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.p = _context3.n) {
              case 0:
                setIsRemoving(true);
                _context3.p = 1;
                _context3.n = 2;
                return (0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_4__.deviceRemoveGame)(rom.reference);
              case 2:
                error = _context3.v;
                if (!error) {
                  _context3.n = 3;
                  break;
                }
                context.toast.open(t("retrogaming.detail.removeFailed"), {
                  variant: "error"
                });
                return _context3.a(2);
              case 3:
                _context3.n = 4;
                return (0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_4__.rescanLocalLibrary)();
              case 4:
                context.toast.open(t("retrogaming.detail.removed"), {
                  variant: "success"
                });
                _context3.n = 6;
                break;
              case 5:
                _context3.p = 5;
                _t2 = _context3.v;
                context.toast.open(t("retrogaming.detail.removeFailed"), {
                  variant: "error"
                });
              case 6:
                _context3.p = 6;
                setIsRemoving(false);
                return _context3.f(6);
              case 7:
                return _context3.a(2);
            }
          }, _callee3, null, [[1, 5, 6, 7]]);
        }));
        function onConfirm() {
          return _onConfirm.apply(this, arguments);
        }
        return onConfirm;
      }()
    });
  };

  // `handleAddToLibrary` a été SUPPRIMÉE le 2026-09-18. Elle faisait ranger un
  // jeu distant dans la LUDOTHÈQUE par le kernel (route `/import`), depuis
  // l'écran d'un joueur — or la ludothèque est partagée et un rôle `user` n'a
  // rien à y écrire. Un téléchargement va chez la personne, jamais dans la
  // bibliothèque ; c'est un administrateur qui l'y ajoute, par Réglages ›
  // Jeux (chantier 14).

  // RETIRER écrit sur la machine qui tient le jeu : c'est au propriétaire du
  // téléphone seul (`playsHere`), pour une copie qui est sur le téléphone.
  // Tous les autres TÉLÉCHARGENT — un membre, un invité, le serveur : le
  // fichier va dans leur navigateur, rien ne s'écrit ici (chantier 14).
  // Pour un jeu d'ICI seulement : la liste d'un serveur fédéré ne fait que
  // télécharger, même quand le même fichier est aussi sur le téléphone.
  var removable = onDevice && alreadyLocal && playsHere && (0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_4__.sourceOf)(rom).source === "local";
  var downloadLabel = removable ? t("retrogaming.detail.remove") : isDownloading ? t("retrogaming.detail.downloading") : "".concat(t("retrogaming.detail.downloadRom"), " (").concat((0,_helpers_js__WEBPACK_IMPORTED_MODULE_18__.formatSize)(rom.sizeBytes), ")");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_15__.OffCanvas, {
    icon: "bi bi-controller",
    label: rom.title,
    helpText: (consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.publisher) + " · " + (consoleMeta === null || consoleMeta === void 0 ? void 0 : consoleMeta.name),
    callback: function callback() {
      return handleLaunch();
    }
    // LA DÉCISION D'ABORD, LE GESTE ENSUITE.
    //
    // `launchDecision` couvre tout ce qui relève du LANCEMENT — cœur,
    // BIOS, jeu absent, authentification chez le pair, et depuis le
    // chantier 14 un jeu qui n'est pas dans la bibliothèque d'ici.
    ,
    isDisabled: !launchDecision.canLaunch || !selectedTarget || checking,
    buttonLabel: t("games.play")
    // The launch can take a while (spawn + boot the emulator + readiness poll) —
    // the button must LOOK busy during it, not just swallow extra clicks
    // silently (isLaunching guard) or the user re-clicks and relaunches.
    ,
    isPending: isLaunching,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_15__.SectionPanel, {
      children: [!checking && launchDecision.noLaunch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: "alert alert-secondary py-2 px-3 small mb-3",
        role: "status",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("i", {
          className: "bi bi-info-circle me-2"
        }), t("retrogaming.detail.noLaunch.".concat(launchDecision.noLaunch)), noLaunchSteps(launchDecision.noLaunch).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("ul", {
          className: "mb-0 mt-1 ps-4",
          children: noLaunchSteps(launchDecision.noLaunch).map(function (step) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("li", {
              children: step
            }, step);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(Form.Group, {
        label: t("retrogaming.origin.title"),
        helpText: t("retrogaming.origin.titleHelp"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_GameSource_jsx__WEBPACK_IMPORTED_MODULE_17__.GameSource, {
          rom: rom,
          t: t
        })
      }), rom.engine && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(Form.Group, {
        label: t("retrogaming.engine.title"),
        helpText: t("retrogaming.engine.titleHelp"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
          className: "d-flex align-items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("i", {
            className: "bi bi-cpu"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("span", {
            children: t("retrogaming.engine.names.".concat(rom.engine))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(Form.Group, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "w-100 d-inline-flex align-items-center justify-content-center gap-2",
          variant: removable ? "danger" : "secondary",
          onClick: removable ? handleRemoveLocal : handleDownload,
          disabled: isDownloading || isRemoving,
          title: removable ? t("retrogaming.detail.removeHelp") : t("retrogaming.detail.download"),
          children: [removable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("i", {
            className: "bi bi-trash"
          }), downloadLabel]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("hr", {}), launchTargets.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
        className: "text-muted small mb-3",
        children: t("retrogaming.detail.noEmulator")
      }), launchTargets.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(Form.Group, {
        label: t("retrogaming.detail.emulator"),
        helpText: t("retrogaming.detail.emulatorHelp"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(Form.Select, {
          name: "target",
          context: targetFormContext,
          options: launchTargets.map(function (target) {
            return {
              attributes: {
                disabled: (0,_libs_launch_mode_js__WEBPACK_IMPORTED_MODULE_10__.coreMissingOn)(target, coreFiles)
              },
              value: target.id,
              // LE NOM DU CŒUR SEUL : l'endroit est celui
              // du jeu, déjà dit par sa provenance, et il
              // n'y en a plus qu'un (2026-10-22).
              label: target.core
            };
          })
        })
      }), !runsElsewhere && biosOptions.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(Form.Group, {
        label: t("retrogaming.detail.bios"),
        helpText: t("retrogaming.detail.biosHelp2"),
        props: {
          style: {
            marginBottom: 0
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(Form.Select, {
          name: "bios",
          context: biosFormContext,
          options: biosOptions
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_GameStatus_jsx__WEBPACK_IMPORTED_MODULE_9__.GameStatusDetails, {
      status: rom.status,
      t: t
    }), runsElsewhere && federatedServer && !checking && launchDecision.noLaunch !== _libs_launch_mode_js__WEBPACK_IMPORTED_MODULE_10__.NO_LAUNCH.serverOffline && launchDecision.noLaunch !== _libs_launch_mode_js__WEBPACK_IMPORTED_MODULE_10__.NO_LAUNCH.federationRefused && (federatedPlay.session ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_shared_FederatedAccountPanel_jsx__WEBPACK_IMPORTED_MODULE_8__.FederatedAccount, {
      server: federatedServer,
      account: federatedPlay.session,
      t: t
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_shared_FederatedAccountPanel_jsx__WEBPACK_IMPORTED_MODULE_8__.FederatedTokenForm, {
      server: federatedServer,
      refused: federatedPlay.code === "accountRefused",
      t: t,
      context: context
    })), takesStreamSettings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_stream_shared_StreamSettings_jsx__WEBPACK_IMPORTED_MODULE_3__.StreamSettings, {
      t: t,
      context: streamSettingsContext,
      toast: context.toast
    })]
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/games/GameSource.jsx"
/*!**********************************************************!*\
  !*** ./src/webapp/src/app/gameflex/games/GameSource.jsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameSource: () => (/* binding */ GameSource)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/localLibrary.js */ "./src/webapp/src/app/gameflex/libs/localLibrary.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "./src/webapp/src/app/gameflex/games/helpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");




function GameSource(_ref) {
  var rom = _ref.rom,
    t = _ref.t;
  var kind = rom.kind || "local";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "d-flex align-items-center gap-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
      className: _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ORIGIN_ICON[kind] || "bi bi-hdd"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      children: t(_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ORIGIN_LABEL[kind] || "retrogaming.origin.unknown")
    }), (0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_1__.isRemoteSource)(kind) && rom.source && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
      className: "text-muted text-truncate",
      children: ["\xB7 ", rom.source]
    }), !(0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_1__.isRemoteSource)(kind) && rom.disk && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
      className: "text-muted text-truncate",
      children: ["\xB7 ", t("retrogaming.origin.disk", {
        name: rom.disk
      })]
    })]
  });
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/libs/launch-mode.js"
/*!*********************************************************!*\
  !*** ./src/webapp/src/app/gameflex/libs/launch-mode.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NO_LAUNCH: () => (/* binding */ NO_LAUNCH),
/* harmony export */   biosIsPresent: () => (/* binding */ biosIsPresent),
/* harmony export */   coreMissingOn: () => (/* binding */ coreMissingOn),
/* harmony export */   defaultLaunchTarget: () => (/* binding */ defaultLaunchTarget),
/* harmony export */   expectedBiosFor: () => (/* binding */ expectedBiosFor),
/* harmony export */   launchModeFor: () => (/* binding */ launchModeFor),
/* harmony export */   missingRequiredBios: () => (/* binding */ missingRequiredBios)
/* harmony export */ });
// CE QUI VA SE PASSER SI ON APPUIE SUR JOUER — la décision, et rien d'autre.
//
// DES MODES DE LANCEMENT, ET DES REFUS QUI SE NOMMENT. Vocabulaire corrigé
// par l'utilisateur le 2026-09-18, en trois temps :
//
//   « Pour lancer un jeu il n'y a pas 5 modes à proprement parler, il n'y en a
//     que 3. Et les 2 autres sont des noLaunch. »
//   « Missing est divisé en 2 : core missing ou bios missing, du coup c'est des
//     noLaunch pour full et hybride. »
//   « Un autre état d'erreur qu'on peut avoir : server offline (si le serveur
//     federated ou remote content est offline). »
//
// Puis le chantier 14 (2026-10-12) a retiré le troisième : le mode `hybrid` —
// un jeu d'ailleurs copié dans un cache pour être joué ici — n'existe plus.
// « Mettre en cache dans gameflex/cache/roms, c'est exactement comme mettre dans
// gameflex/roms » (le porteur) : un jeu d'ailleurs entre dans la bibliothèque
// par Réglages › Jeux, ou se joue chez son serveur.
//
// Ce n'est pas qu'une affaire de mots. Pour le JOUEUR il n'y a que deux façons
// de lancer un jeu ; les autres cas ne sont pas des modes mais des
// empêchements, et un empêchement doit dire CE QUI MANQUE — « il manque le
// cœur », « il manque le BIOS » et « le serveur ne répond pas » ne se corrigent
// pas du tout au même endroit.
//
//   Modes (le jeu part) :
//     1. `full`        jeu, cœur et BIOS sont tous ICI ;
//     2. `federated`   tout est chez le pair, et on y joue sous SON compte de
//                      chez lui : le jeton qu'on y a reçu, collé ici une fois
//                      à la place de l'identifiant et du mot de passe
//                      d'autrefois (chantier 20).
//
//   Refus (rien ne part) :
//     - `server-offline`  le pair ne répond pas. Refus de `federated` ;
//     - `federation-refused` le pair répond, et refuse le jeton du LIEN — il
//                         l'a révoqué. Ses jeux ne se lisent plus d'ici, pour
//                         personne (chantier 20). Refus de `federated` ;
//     - `unauthorised`    on n'a pas collé le jeton de son compte chez lui :
//                         ses jeux se voient et se téléchargent, ils ne s'y
//                         lancent pas. Refus de `federated` ;
//     - `account-refused` il refuse le jeton qu'on a collé — désactivé, échu,
//                         régénéré, compte supprimé. Refus de `federated` ;
//     - `remote-launch-refused` notre compte chez lui ne lance pas cette
//                         console (ses consoles, chantier 20). Refus de
//                         `federated` ;
//     - `console-not-granted` ce compte-ci ne lance pas cette console ICI
//                         (chantier 20). Refus de `full` : chez un pair, ce
//                         sont ses droits à lui qui comptent ;
//     - `owner-only`      ici, seul un administrateur lance une partie — le
//                         propriétaire d'un téléphone, d'ordinaire
//                         (`onlyAdminsLaunch`, 2026-10-08). Refus de `full` ;
//                         jamais de `federated`, qui suit les règles du pair ;
//     - `not-in-library`  le jeu n'est pas dans la bibliothèque d'ici : il vient
//                         d'un serveur fédéré. Refus de `full` — on l'ajoute par
//                         Réglages › Jeux, ou on le joue chez son serveur
//                         (chantier 14) ;
//     - `game-missing`    le pair visé n'a pas ce jeu. Confirmé par
//                         l'utilisateur, et pour une raison qui vaut d'être
//                         écrite : en fédéré, « on ne sait jamais si le jeu est
//                         toujours sur le serveur ou pas avant le lancement ».
//                         La bibliothèque du pair change sans nous prévenir ;
//     - `core-missing`    le cœur choisi n'est pas là ;
//     - `bios-missing`    le BIOS requis n'est pas là.
//
// L'ORDRE DES REFUS EST UNE DÉCISION, PAS UN HASARD : joignabilité, puis
// authentification, puis droits, puis inventaire. On ne sait rien de ce qu'un
// serveur contient tant qu'on ne l'atteint pas, et rien de ce qu'il nous laisse
// lancer tant qu'on n'y est pas entré. Dire « colle ton jeton » d'un serveur
// éteint serait un mauvais conseil ; dire « il manque un cœur » à qui n'a pas
// le droit de jouer serait une devinette.
//
// `server-offline` NE CONCERNE JAMAIS `full` : un jeu d'ici, avec son cœur
// d'ici, ne dépend d'aucun serveur. D'où la valeur par défaut « en ligne » —
// une information absente ne doit pas bloquer un lancement purement local.
//
// LE MODE RESTE RENSEIGNÉ MÊME QUAND C'EST REFUSÉ, et c'est tout l'intérêt du
// couple : c'est lui qui permet de dire « ce jeu se lancerait ici, mais il
// manque le cœur ». Une chaîne unique ne savait dire que « missing ».
//
// CHEZ LE PAIR, UN CŒUR OU UN BIOS ABSENT SE DIT DANS LE SÉLECTEUR, pas ici :
// « le jeu a comme possibilité 3 bios mais le serveur n'en a que 2, alors le
// 3ème est indisponible (disabled) ». Cette fonction reste néanmoins TOTALE —
// si un appelant annonce quand même une indisponibilité pour une cible
// distante, elle la nomme au lieu de prétendre que tout va bien.
//
// REMOTE PLAY N'EST PAS CONCERNÉ, et il ne faut pas essayer de le faire passer
// par ici : il lance une CONSOLE, pas un jeu. Il n'a donc ni cœur, ni BIOS, ni
// jeu à trouver — sa question est « la console répond-elle, et ai-je le droit
// de m'y attacher », qui n'est pas celle-ci.
//
// POURQUOI UNE FONCTION PURE, DANS SON PROPRE FICHIER. La décision vivait
// dispersée dans le JSX — un empilement de conditions sur un `isDisabled`
// (`Games.jsx`), qui savait dire « le bouton est mort » sans jamais dire
// POURQUOI. On ne pouvait donc ni l'expliquer à l'écran, ni l'éprouver. C'est
// la leçon de `zipPolicyFor`, que j'avais écrite à l'envers faute de l'avoir
// nommée : une règle qui n'a pas de nom n'a pas de test.
//
// DEUX VERROUS MORTS QUE CE FICHIER REMPLACE, et c'est la mesure qui les a
// trouvés (2026-09-17) :
//
//   - `const noCore = false;` — une constante en dur au milieu du garde-fou.
//     La page n'avait AUCUNE notion de la présence d'un cœur, donc le refus
//     `core-missing` n'était pas « difficile à calculer », il était désactivé.
//   - `biosMissing` n'était évalué que `onDevice` (sur le téléphone), donc
//     toujours faux sur le serveur — même conclusion.
//
// La donnée, elle, existait déjà : `GET /api/v1/retrogaming/{console}/cores`
// rend un `installed` par cœur, et `/bios` son équivalent. C'est l'appelant
// qui les lit et les passe ici ; cette fonction ne va rien chercher.

/** Les deux modes de lancement — ce que fait le jeu quand il part. */
var LAUNCH_MODES = Object.freeze({
  full: "full",
  federated: "federated"
});

/** Les empêchements — chacun nomme ce qui manque, jamais un « missing » global. */
var NO_LAUNCH = Object.freeze({
  serverOffline: "server-offline",
  // Le pair répond, et refuse le jeton du LIEN (chantier 20) : il l'a
  // révoqué. Un administrateur d'ici rajoute le serveur avec le nouveau.
  federationRefused: "federation-refused",
  // Pas de jeton de notre compte chez ce pair : la fiche montre où le
  // coller. Ses jeux se voient et se téléchargent.
  unauthorised: "unauthorised",
  // Le pair refuse le jeton qu'on a collé (chantier 20) : désactivé, échu,
  // régénéré, ou son compte supprimé. On en colle un nouveau.
  accountRefused: "account-refused",
  // Ce compte-ci ne lance pas cette console ICI (chantier 20) : ses consoles
  // se règlent dans Réglages › Membres. Il en voit et télécharge les jeux.
  consoleNotGranted: "console-not-granted",
  // Notre compte chez ce pair ne lance pas cette console chez lui (chantier
  // 20) : ses jeux s'y voient et se téléchargent, ils ne s'y lancent pas.
  remoteLaunchRefused: "remote-launch-refused",
  ownerOnly: "owner-only",
  notInLibrary: "not-in-library",
  // Le même fichier (même UUID) EST dans la bibliothèque d'ici, mais la fiche
  // montre celui d'un serveur fédéré : il se lance depuis la source « Ici »,
  // pas d'ici — un jeu de la liste d'un ami ne part que chez lui.
  alsoInLibrary: "also-in-library",
  gameMissing: "game-missing",
  coreMissing: "core-missing",
  biosMissing: "bios-missing"
});

/**
 * La décision de lancement, pour UNE cible choisie.
 *
 * @param {object} decision
 * @param {"local"|"federation"|"distance"} decision.source d'où vient le jeu
 *        (le couple rendu par `sourceOf`, libs/sources.js). Tout ce qui n'est
 *        pas `local` n'est pas dans la bibliothèque d'ici.
 * @param {"here"|"peer"} decision.target où l'émulateur tournera.
 * @param {boolean} [decision.sourceOnline=true] la source distante répond-elle.
 *        Vrai par défaut : un lancement purement local n'en dépend pas, et une
 *        information absente ne doit pas le bloquer.
 * @param {boolean} [decision.tokenRefused=false] le pair refuse-t-il le jeton
 *        du LIEN — il l'a révoqué (`refused`, `GET /api/v1/servers/{id}`).
 * @param {boolean} [decision.signedIn=false] a-t-on une session chez le pair :
 *        le jeton de notre compte chez lui, collé ici (chantier 20).
 * @param {boolean} [decision.accountRefused=false] le pair refuse-t-il ce
 *        jeton-là (`accountRefused`, `GET /api/v1/servers/{id}/session`).
 * @param {boolean} [decision.remoteLaunch=true] notre compte chez le pair
 *        lance-t-il cette console chez lui : les consoles de sa session.
 * @param {boolean} [decision.consoleGranted=true] ce compte-ci lance-t-il cette
 *        console ICI (`user.consoles`, chantier 20). Chez un pair, ce sont ses
 *        droits à lui qui comptent.
 * @param {boolean} decision.coreAvailable le cœur choisi est-il présent —
 *        **sur la cible**, pas ici.
 * @param {boolean} decision.biosAvailable de même pour les BIOS. Une console
 *        qui n'en exige aucun est « satisfaite » : c'est à l'appelant de le
 *        dire (voir BiosRequiredFor côté registre, #161).
 * @param {boolean} [decision.gameAvailable=true] la cible a-t-elle ce jeu. Un
 *        émulateur fédéré ne lit que les jeux de SON serveur.
 * @param {boolean} [decision.playsHere=true] ce compte peut-il lancer une
 *        partie sur CET hôte (`playsHere`, AuthContext). Faux pour un membre
 *        sur un téléphone, où seul le propriétaire lance.
 * @param {boolean} [decision.inLibrary=false] pour un jeu d'ailleurs : le même
 *        fichier (même UUID) est-il AUSSI dans la bibliothèque d'ici ? Il ne
 *        part pas d'ici pour autant — le refus le dit seulement juste.
 * @returns {{mode: string, noLaunch: string|null, canLaunch: boolean}} le mode
 *        qu'emprunterait ce lancement, et ce qui l'empêche s'il y a lieu.
 */
function launchModeFor(_ref) {
  var source = _ref.source,
    _ref$target = _ref.target,
    target = _ref$target === void 0 ? "here" : _ref$target,
    _ref$sourceOnline = _ref.sourceOnline,
    sourceOnline = _ref$sourceOnline === void 0 ? true : _ref$sourceOnline,
    _ref$tokenRefused = _ref.tokenRefused,
    tokenRefused = _ref$tokenRefused === void 0 ? false : _ref$tokenRefused,
    _ref$signedIn = _ref.signedIn,
    signedIn = _ref$signedIn === void 0 ? false : _ref$signedIn,
    _ref$accountRefused = _ref.accountRefused,
    accountRefused = _ref$accountRefused === void 0 ? false : _ref$accountRefused,
    _ref$remoteLaunch = _ref.remoteLaunch,
    remoteLaunch = _ref$remoteLaunch === void 0 ? true : _ref$remoteLaunch,
    _ref$consoleGranted = _ref.consoleGranted,
    consoleGranted = _ref$consoleGranted === void 0 ? true : _ref$consoleGranted,
    _ref$coreAvailable = _ref.coreAvailable,
    coreAvailable = _ref$coreAvailable === void 0 ? false : _ref$coreAvailable,
    _ref$biosAvailable = _ref.biosAvailable,
    biosAvailable = _ref$biosAvailable === void 0 ? false : _ref$biosAvailable,
    _ref$gameAvailable = _ref.gameAvailable,
    gameAvailable = _ref$gameAvailable === void 0 ? true : _ref$gameAvailable,
    _ref$playsHere = _ref.playsHere,
    playsHere = _ref$playsHere === void 0 ? true : _ref$playsHere,
    _ref$inLibrary = _ref.inLibrary,
    inLibrary = _ref$inLibrary === void 0 ? false : _ref$inLibrary;
  if (target === "peer") {
    // JOIGNABILITÉ D'ABORD : un pair éteint ne peut pas non plus nous
    // ouvrir de session, et « colle ton jeton » serait un mauvais conseil.
    if (!sourceOnline) {
      return decided(LAUNCH_MODES.federated, NO_LAUNCH.serverOffline);
    }
    // IL RÉPOND, ET A RÉVOQUÉ NOTRE LIEN : ses jeux ne se lisent plus d'ici.
    if (tokenRefused) {
      return decided(LAUNCH_MODES.federated, NO_LAUNCH.federationRefused);
    }
    // PUIS QUI JOUE CHEZ LUI (chantier 20) : le jeton de notre compte de
    // chez lui — pas collé, ou refusé —, puis ce que ce compte y lance.
    if (accountRefused) {
      return decided(LAUNCH_MODES.federated, NO_LAUNCH.accountRefused);
    }
    if (!signedIn) {
      return decided(LAUNCH_MODES.federated, NO_LAUNCH.unauthorised);
    }
    if (!remoteLaunch) {
      return decided(LAUNCH_MODES.federated, NO_LAUNCH.remoteLaunchRefused);
    }
    return decided(LAUNCH_MODES.federated, whatIsMissing({
      gameAvailable: gameAvailable,
      coreAvailable: coreAvailable,
      biosAvailable: biosAvailable
    }));
  }
  var mode = LAUNCH_MODES.full;

  // À QUI EST L'HÔTE, d'abord : un membre d'un téléphone n'y lance rien, et
  // lui nommer un cœur absent serait lui suggérer une réparation qu'il ne
  // peut pas faire.
  if (!playsHere) {
    return decided(mode, NO_LAUNCH.ownerOnly);
  }
  // PUIS CE QUE CE COMPTE LANCE (chantier 20) : sans la console, il en voit
  // et télécharge les jeux, sans y jouer.
  if (!consoleGranted) {
    return decided(mode, NO_LAUNCH.consoleNotGranted);
  }

  // UN JEU D'AILLEURS NE PART PAS D'ICI (chantier 14). Le porteur, le
  // 2026-10-13 : un jeu de la liste d'un serveur fédéré se lance chez lui,
  // si on y est autorisé ; sinon l'administrateur l'ajoute à la bibliothèque
  // par Réglages › Jeux, et il se lance depuis la source « Ici ». Même quand
  // le même fichier y est déjà : c'est alors la copie d'ici qu'on lance, de
  // là. Avant l'inventaire — nommer un cœur absent pour un jeu qui ne
  // partira de toute façon pas d'ici serait un mauvais conseil.
  if (source !== "local") {
    return decided(mode, inLibrary ? NO_LAUNCH.alsoInLibrary : NO_LAUNCH.notInLibrary);
  }

  // ICI, LE CŒUR ET LES BIOS SONT OBLIGATOIRES : plus rien ne se télécharge
  // au lancement (#143), donc un cœur absent n'est plus une attente, c'est un
  // refus.
  return decided(mode, whatIsMissing({
    gameAvailable: gameAvailable,
    coreAvailable: coreAvailable,
    biosAvailable: biosAvailable
  }));
}

/**
 * Ce qui manque, dans l'ordre où ça se répare — ou null si rien ne manque.
 *
 * LE CŒUR AVANT LE BIOS : c'est lui qui fait tourner le jeu, et un BIOS sans
 * émulateur ne sert à rien. Quand les deux manquent, l'écran nomme donc le
 * premier geste à faire, pas les deux à la fois.
 */
function whatIsMissing(_ref2) {
  var gameAvailable = _ref2.gameAvailable,
    coreAvailable = _ref2.coreAvailable,
    biosAvailable = _ref2.biosAvailable;
  if (!gameAvailable) {
    return NO_LAUNCH.gameMissing;
  }
  if (!coreAvailable) {
    return NO_LAUNCH.coreMissing;
  }
  if (!biosAvailable) {
    return NO_LAUNCH.biosMissing;
  }
  return null;
}

/**
 * Le cœur de cette cible est-il ABSENT, à notre connaissance ?
 *
 * Sert à montrer une option d'émulateur désactivée plutôt qu'à la taire
 * (#163) : lire le nom de ce qui manque fait partie de ce qu'on est venu voir.
 *
 * ELLE VIT ICI, ET NON EN CONDITION DANS LE JSX, pour la raison qui a donné ce
 * fichier : une règle écrite dans un attribut ne s'éprouve pas. Sur la machine
 * de développement, TOUS les cœurs déclarés sont installés (mesuré le
 * 2026-09-18, 33 consoles, zéro absent) — l'écran ne peut donc rien prouver,
 * et seuls des cas fabriqués le peuvent.
 *
 * @param {{core: string, server: object|null}} target la cible choisie.
 * @param {{name: string, installed: boolean}[]} cores ce que `/cores` a rendu
 *        pour cette console : les cœurs DÉCLARÉS, chacun avec sa présence.
 * @returns {boolean} vrai seulement quand on SAIT qu'il manque.
 */
function coreMissingOn(target, cores) {
  // UNE CIBLE CHEZ UN PAIR NE SE JUGE PAS D'ICI : son inventaire ne nous est
  // pas servi (`fetchRequiredCores` est une route d'administration). On ne
  // désactive donc pas son option — s'il y a un refus, il viendra de lui.
  if (!target || target.server) {
    return false;
  }

  // RIEN DE CONNU = RIEN À AFFIRMER. Tant que la liste n'est pas arrivée, ou
  // qu'elle est vide (l'appareil ne range pas ses cœurs là), aucune option
  // n'est condamnée. C'est `noCore = false` à l'envers : ne pas mentir dans
  // l'autre sens non plus.
  if (!Array.isArray(cores) || cores.length === 0) {
    return false;
  }
  return !cores.some(function (core) {
    return core.installed && core.name === target.core;
  });
}

/**
 * La cible d'une fiche tant qu'on n'en a pas choisi.
 *
 * UN JEU D'UN SERVEUR FÉDÉRÉ S'OUVRE SUR SON SERVEUR : ici ne le joue plus
 * (chantier 14), il n'y a donc rien d'autre à proposer d'abord. Jusque-là, il
 * ne s'y ouvrait que quand ici ne pouvait pas le jouer — trop gros pour notre
 * cache, ou cœur absent (#292). Même quand il est AUSSI dans la bibliothèque
 * d'ici (le même UUID) : un jeu de la liste d'un ami ne part que chez lui (le
 * porteur, 2026-10-13).
 *
 * UN JEU D'ICI s'ouvre sur la première cible d'ici dont le cœur est là, sinon
 * sur la première d'ici. Une liste de cœurs inconnue ne condamne rien
 * (`coreMissingOn`) : tant qu'elle n'est pas arrivée, c'est la première.
 *
 * @param {Array<{id: string, core: string, server: object|null}>} targets
 * @param {object} context
 * @param {number|string|null} [context.gameServerId] le serveur d'où vient le
 *        jeu, s'il vient d'un pair.
 * @param {Array} [context.cores] les cœurs d'ici, avec leur `installed`.
 */
function defaultLaunchTarget(targets) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref3$gameServerId = _ref3.gameServerId,
    gameServerId = _ref3$gameServerId === void 0 ? null : _ref3$gameServerId,
    _ref3$cores = _ref3.cores,
    cores = _ref3$cores === void 0 ? [] : _ref3$cores;
  if (gameServerId != null) {
    return targets.find(function (target) {
      var _target$server;
      return String((_target$server = target.server) === null || _target$server === void 0 ? void 0 : _target$server.id) === String(gameServerId);
    }) || targets[0] || null;
  }
  return targets.find(function (target) {
    return !target.server && !coreMissingOn(target, cores);
  }) || targets.find(function (target) {
    return !target.server;
  }) || targets[0] || null;
}

// ── QUELS BIOS MANQUENT (#162) ──────────────────────────────────────────
//
// Ces deux règles vivaient dans `localLibrary.js`, sur ses propres tables
// `REQUIRED_BIOS` / `OPTIONAL_BIOS`. Elles sont ici pour deux raisons : le
// registre est désormais la source unique (`bios` / `biosOptional`, #161), et
// surtout elles sont devenues PURES — la présence leur arrive en argument —
// donc éprouvables dans node, ce que `localLibrary.js` ne permet pas (il
// dépend de `sources.js`, `deviceStream.js`, `capabilities`…).
//
// `biosAvailable` de `launchModeFor` se calcule avec la première : c'est la
// même question, posée une fois.

/** L'entrée de registre d'une console, ou null. */
function consoleEntry(consoles, consoleId) {
  if (!Array.isArray(consoles)) {
    return null;
  }
  return consoles.find(function (entry) {
    return entry && entry.id === consoleId;
  }) || null;
}

/**
 * Les noms présents, en minuscules — les dumps circulent en `SCPH5501.BIN`
 * autant qu'en `scph5501.bin`.
 *
 * Tolère les deux formes : une chaîne, ou un objet `{name}` — c'est ce que
 * `/bios` rend (avec sa taille) et ce que l'appareil rend parfois nu.
 */
function loweredNames(names) {
  return new Set((Array.isArray(names) ? names : []).map(function (entry) {
    return String(entry && entry.name ? entry.name : entry).toLowerCase();
  }));
}

/**
 * Les BIOS REQUIS qui manquent — ou une liste vide.
 *
 * « AU MOINS UN SUFFIT » : ce sont des révisions du même BIOS, et c'est la
 * sémantique que le registre porte (`BiosRequiredFor`, côté Go). Tant que l'un
 * des noms est là, rien ne manque ; sinon on rend la liste entière, parce que
 * l'écran propose de récupérer n'importe lequel.
 *
 * LA PRÉSENCE ARRIVE EN ARGUMENT, une règle pour deux hôtes : l'appareil range
 * ses BIOS dans sa bibliothèque, le serveur les sert par
 * `GET /api/v1/retrogaming/{console}/bios`. Lire l'un des deux ici aurait
 * déclaré tout manquant sur l'autre.
 */
function missingRequiredBios(consoles, consoleId, presentNames) {
  var _consoleEntry;
  var wanted = ((_consoleEntry = consoleEntry(consoles, consoleId)) === null || _consoleEntry === void 0 ? void 0 : _consoleEntry.bios) || [];
  if (wanted.length === 0) {
    return [];
  }
  var present = loweredNames(presentNames);
  return wanted.some(function (name) {
    return present.has(String(name).toLowerCase());
  }) ? [] : wanted;
}

/**
 * Ce que cette console ATTEND, requis et facultatifs séparés.
 *
 * La règle ci-dessus rend ce qui MANQUE ; un sélecteur, lui, doit
 * proposer l'attendu — sinon il n'offre que ce qui est déjà là, et une option
 * ne peut jamais s'afficher désactivée. C'est précisément ce que `/bios`
 * empêchait : il ne liste que le disque (`ListBiosEntries`), donc tout ce
 * qu'il rend est présent par construction (#162).
 *
 * Rend deux tableaux vides pour une console qui ne déclare rien, ou pour un
 * registre pas encore chargé : l'appelant boucle dessus, il ne teste pas.
 */
function expectedBiosFor(consoles, consoleId) {
  var entry = consoleEntry(consoles, consoleId);
  return {
    required: (entry === null || entry === void 0 ? void 0 : entry.bios) || [],
    optional: (entry === null || entry === void 0 ? void 0 : entry.biosOptional) || []
  };
}

/**
 * Un nom est-il présent dans cet inventaire ?
 *
 * Exposée parce que le sélecteur en a besoin option par option — la même
 * comparaison que les deux règles, donc au même endroit plutôt qu'une seconde
 * écriture qui oublierait la casse ou la forme objet.
 */
function biosIsPresent(presentNames, name) {
  return loweredNames(presentNames).has(String(name).toLowerCase());
}

/** Le couple, sous une seule forme — pour que `canLaunch` ne se calcule pas deux fois. */
function decided(mode, noLaunch) {
  return {
    mode: mode,
    noLaunch: noLaunch,
    canLaunch: noLaunch === null
  };
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

/***/ }

}]);
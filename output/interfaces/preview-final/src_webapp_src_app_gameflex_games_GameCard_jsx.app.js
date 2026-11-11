"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_games_GameCard_jsx"],{

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

/***/ }

}]);
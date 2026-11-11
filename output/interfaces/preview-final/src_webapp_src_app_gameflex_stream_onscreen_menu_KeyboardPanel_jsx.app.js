"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_onscreen_menu_KeyboardPanel_jsx"],{

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
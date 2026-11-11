"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_onscreen_menu_CheatsPanel_jsx"],{

/***/ "./src/webapp/src/app/gameflex/stream/onscreen/menu/CheatsPanel.jsx"
/*!**************************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/onscreen/menu/CheatsPanel.jsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheatsPanel: () => (/* binding */ CheatsPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../skeleton/skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var _shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/templates/Essentials.jsx */ "./src/webapp/src/app/gameflex/shared/templates/Essentials.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
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




var Form = _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_2__["default"].Form;
var Ruleset = _skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_2__["default"].Ruleset;

// Cheats panel (menu redesign) — its own component for the same frozen-
// snapshot reason as SaveStatesPanel: the entry list, the form fields and the
// editing index all live HERE, and every mutation pushes the full list to
// the server immediately (setCheats is whole-list by contract, see
// stream_session.go's handleSetCheats).
//
// Persisted server-side now (saves/{username}/cheats/{reference}/*.txt,
// written by handleSetCheats on every push) — initialCheats seeds the list
// from what the "offer" message already carried (see
// use-retro-streaming-connection.js), so a returning player sees their
// cheats again instead of an empty list every session.
function CheatsPanel(_ref) {
  var setCheats = _ref.setCheats,
    _ref$initialCheats = _ref.initialCheats,
    initialCheats = _ref$initialCheats === void 0 ? [] : _ref$initialCheats,
    context = _ref.context,
    t = _ref.t;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialCheats),
    _useState2 = _slicedToArray(_useState, 2),
    entries = _useState2[0],
    setEntries = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    nameInput = _useState4[0],
    setNameInput = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    codeInput = _useState6[0],
    setCodeInput = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    editingIndex = _useState8[0],
    setEditingIndex = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isPending = _useState0[0],
    setIsPending = _useState0[1];
  var pushEntries = function pushEntries(next, onDone) {
    setIsPending(true);
    setCheats(next, function (error) {
      setIsPending(false);
      if (error) {
        context.toast.open(error, {
          variant: "error"
        });
      }
      onDone === null || onDone === void 0 || onDone();
    });
  };
  var handleValidate = function handleValidate() {
    var code = codeInput.trim();
    if (!code) return;
    var entry = {
      code: code,
      enabled: true,
      description: nameInput.trim()
    };
    var next = editingIndex === null ? [].concat(_toConsumableArray(entries), [entry]) : entries.map(function (c, i) {
      return i === editingIndex ? _objectSpread(_objectSpread({}, c), {}, {
        code: code
      }) : c;
    });
    setEntries(next);
    pushEntries(next, function () {
      setNameInput("");
      setCodeInput("");
      setEditingIndex(null);
    });
  };
  var handleToggle = function handleToggle(index) {
    var next = entries.map(function (c, i) {
      return i === index ? _objectSpread(_objectSpread({}, c), {}, {
        enabled: !c.enabled
      }) : c;
    });
    setEntries(next);
    pushEntries(next);
  };
  var handleDelete = function handleDelete(index) {
    context.modal.open(t("retrogaming.streaming.cheatDeleteConfirm"), {
      variant: "confirm",
      title: t("retrogaming.streaming.menuCheats"),
      confirmLabel: t("app.delete"),
      cancelLabel: t("app.cancel"),
      onConfirm: function onConfirm() {
        var next = entries.filter(function (_, i) {
          return i !== index;
        });
        setEntries(next);
        pushEntries(next);
      }
    });
  };
  var handleEdit = function handleEdit(index) {
    var entry = entries[index];
    setNameInput(entry.description || "");
    setCodeInput(entry.code);
    setEditingIndex(index);
  };
  var isFormValid = codeInput.trim().length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_3__.SectionPanel, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Form.Group, {
        label: t("retrogaming.streaming.cheatNameLabel"),
        helpText: t("retrogaming.streaming.cheatNameHelp"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Form.Text, {
          name: "cheatName",
          context: {
            values: {
              cheatName: nameInput
            },
            setValues: function setValues(v) {
              var _v$cheatName;
              return setNameInput((_v$cheatName = v.cheatName) !== null && _v$cheatName !== void 0 ? _v$cheatName : "");
            },
            files: {},
            setFiles: function setFiles() {},
            rulesets: {
              cheatName: function cheatName() {
                return editingIndex !== null ? Ruleset.isDisabled("") : null;
              }
            }
          },
          props: {
            placeholder: t("retrogaming.streaming.cheatNamePlaceholder")
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Form.Group, {
        label: t("retrogaming.streaming.cheatCodeLabel"),
        helpText: t("retrogaming.streaming.cheatCodeHelp"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Form.Longtext, {
          name: "cheatCode",
          context: {
            values: {
              cheatCode: codeInput
            },
            setValues: function setValues(v) {
              var _v$cheatCode;
              return setCodeInput((_v$cheatCode = v.cheatCode) !== null && _v$cheatCode !== void 0 ? _v$cheatCode : "");
            },
            files: {},
            setFiles: function setFiles() {},
            rulesets: {}
          },
          props: {
            placeholder: t("retrogaming.streaming.cheatCodePlaceholder")
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_3__.FormButton, {
        callback: handleValidate,
        label: t(editingIndex === null ? "retrogaming.streaming.cheatAdd" : "retrogaming.streaming.cheatUpdate"),
        isDisabled: !isFormValid || isPending,
        isPending: isPending
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_3__.SectionPanel, {
      label: t("retrogaming.streaming.cheatListTitle"),
      helpText: t("retrogaming.streaming.cheatListHelp"),
      children: entries.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "d-flex flex-column gap-2",
        children: entries.map(function (cheat, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared_templates_Essentials_jsx__WEBPACK_IMPORTED_MODULE_3__.ListElement, {
            icon: "bi bi-braces",
            onClick: function onClick() {
              if (editingIndex === index) {
                setEditingIndex(null);
                setNameInput("");
                setCodeInput("");
              } else {
                handleEdit(index);
              }
            },
            label: cheat.description || cheat.code,
            helpText: cheat.description ? cheat.code : null,
            next: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Form.SkeletonSwitch, {
              reverse: true,
              name: "cheatEnabled".concat(index),
              context: {
                values: _defineProperty({}, "cheatEnabled".concat(index), cheat.enabled),
                setValues: function setValues() {
                  return handleToggle(index);
                },
                files: {},
                setFiles: function setFiles() {},
                rulesets: {}
              }
            }),
            children: editingIndex === index && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "pt-2 mt-2 border-top",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
                variant: "danger",
                className: "w-100",
                title: t("app.delete"),
                onClick: function onClick() {
                  return handleDelete(index);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                  className: "bi bi-trash"
                })
              })
            })
          }, index);
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "text-muted small mb-0",
        children: t("retrogaming.streaming.cheatListEmpty")
      })
    })]
  });
}

/***/ }

}]);
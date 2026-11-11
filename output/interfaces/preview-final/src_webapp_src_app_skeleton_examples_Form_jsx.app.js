"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_skeleton_examples_Form_jsx"],{

/***/ "./src/webapp/src/app/skeleton/examples/Form.jsx"
/*!*******************************************************!*\
  !*** ./src/webapp/src/app/skeleton/examples/Form.jsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormDoc)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Accordion.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _skeleton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;



var Form = _skeleton_js__WEBPACK_IMPORTED_MODULE_4__["default"].Form;
var Ruleset = _skeleton_js__WEBPACK_IMPORTED_MODULE_4__["default"].Ruleset;
function CodeBlock(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Code" : _ref$title,
    children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "mb-0",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
      eventKey: "0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Header, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
          className: "bi bi-code-slash me-2"
        }), title]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Body, {
        className: "bg-body-tertiary p-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("pre", {
          className: "mb-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            style: {
              fontSize: "0.875rem"
            },
            children: children
          })
        })
      })]
    })
  });
}
function FormDoc() {
  var context_ = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_js__WEBPACK_IMPORTED_MODULE_4__["default"].context);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    files = _useState4[0],
    setFiles = _useState4[1];
  var rulesets = {};
  rulesets["text"] = function (data) {
    if (data.intFloat < 18) {
      return Ruleset.isDisabled("Text input is disabled if the number is less than 18");
    }
    if (!data.text || data.text.length < 3) {
      return Ruleset.isInvalid("Text must be at least 3 characters");
    }
    if (!data.text || data.text.length > 30) {
      return Ruleset.isInvalid("Text must be at most 30 characters");
    }
    return null;
  };
  rulesets["password_strength"] = function (data) {
    if (!data.password || data.passwordStrength < 3) {
      return Ruleset.isInvalid("Password strength must be at least 3 (out of 5)");
    }
    return null;
  };

  // We create the ruleset instances here to be able to use them within each other's validation logic
  var dateRuleset = Ruleset.fallback();
  rulesets["date"] = function (data) {
    if (!data.date) {
      return Ruleset.isInvalid("Please select a date");
    }
    if (new Date(data.date) < new Date("2000-05-11") || new Date(data.date) > new Date("2016-03-21")) {
      return Ruleset.isInvalid("Selected date ".concat(data.date, " is out of range. Please select a date between May 11, 2000 and March 21, 2016"));
    }
    return null;
  };

  // We initialize the ruleset instances here to be able to use them within each other's validation logic
  dateRuleset = Ruleset(rulesets["date"], values, "date");
  rulesets["dateRange"] = function (data) {
    if (!data.dateRange || data.dateRange.length !== 2 || !data.dateRange[0] || !data.dateRange[1]) {
      return Ruleset.isInvalid("Please select a date range");
    }
    var countDays = (new Date(data.dateRange[1]) - new Date(data.dateRange[0])) / (1000 * 60 * 60 * 24);
    if (countDays < 5) {
      return Ruleset.isInvalid("Please select a date range of at least 5 days");
    }
    return null;
  };
  rulesets["skeletonRadio"] = function (data) {
    if (!data.skeletonRadio) {
      return Ruleset.isInvalid("Please select a radio option");
    }
    return null;
  };
  rulesets["skeletonCheckbox"] = function (data) {
    if (!data.skeletonCheckbox || data.skeletonCheckbox.length < 2) {
      return Ruleset.isInvalid("Please select at least two checkbox options");
    }
    return null;
  };
  rulesets["skeletonFile"] = function (data) {
    if (!data.skeletonFile || data.skeletonFile.length === 0) {
      return Ruleset.isInvalid("Please upload at least one file");
    }
    return null;
  };
  rulesets["skeletonSwitchMode"] = function (data) {
    if (!data.skeletonSwitchMode || data.skeletonSwitchMode === "") {
      return Ruleset.isInvalid("Please select a switch mode option");
    }
    return null;
  };
  rulesets["skeletonSwitch"] = function (data) {
    if (!data.skeletonSwitch) {
      return Ruleset.isInvalid("Please select a switch option");
    }
    return null;
  };
  rulesets["skeletonRange"] = function (data) {
    if (!data.skeletonRange || data.skeletonRange <= 0 || data.skeletonRange > 999) {
      return Ruleset.isInvalid("Please select a value between 0 and 999");
    }
    return null;
  };
  rulesets["skeletonList"] = function (data) {
    if (!data.skeletonList || data.skeletonList.length === 0) {
      return Ruleset.isInvalid("Please add at least one item to the list");
    }
    return null;
  };
  rulesets["skeletonSmallForm"] = function (data) {
    if (!data.skeletonSmallForm || data.skeletonSmallForm.length === 0) {
      return Ruleset.isInvalid("Please add at least one SkeletonSmallForm item");
    } else if (data.skeletonSmallForm && data.skeletonSmallForm.length > 3) {
      return Ruleset.isInvalid("Maximum SkeletonSmallForm reached (3 items max)");
    }
    return null;
  };
  rulesets["skeletonSmallForm.nested"] = function (i) {
    // key name must ends with .nested to work.
    // The callback will receive the item index as parameter (starting from 0) and should return an object with the rulesets for that specific item
    return {
      hide: function hide(data) {
        return i == 1 ? Ruleset.isHidden() : null;
      },
      // hide the second item (index 1) for demonstration purposes
      contact: function contact(data) {
        if (!data.contact || data.contact.length < 3) {
          return Ruleset.isInvalid("Skeleton Small Form contact must be at least 3 characters");
        }
        return null;
      },
      contactDate: function contactDate(data) {
        if (i != 1 && !data.contactDate) {
          return Ruleset.isInvalid("Please select a date");
        }
        return null;
      },
      contactTime: function contactTime(data) {
        if (i != 1 && !data.contactTime) {
          return Ruleset.isInvalid("Please select a time");
        }
        return null;
      }
    };
  };
  var context = {
    values: values,
    setValues: setValues,
    files: files,
    setFiles: setFiles,
    rulesets: rulesets
  };
  var CustomSkeletonSmallFormComponent = function CustomSkeletonSmallFormComponent(_ref2) {
    var name = _ref2.name,
      context = _ref2.context;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: context.rulesets.hide(context.i) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "text-muted",
        children: "No more details can be added for this item."
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [context.i, ") Illustration of how to implement custom components within a Skeleton Small Form"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "d-flex justify-content-between gap-2 p-3 rounded skeleton-surface-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "w-100",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
              label: "Date",
              styles: {
                marginBottom: '0'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Date, {
                name: "contactDate",
                context: context
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "w-100",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
              label: "Time",
              styles: {
                marginBottom: '0'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Time, {
                name: "contactTime",
                context: context
              })
            })
          })]
        })]
      })
    });
  };
  var searchTerms = ["Apple", "Apricot", "Avocado", "Banana", "Blueberry", "Cantaloupe", "Cherry", "Clementine", "Date", "Dragonfruit", "Durian", "Elderberry", "Fig", "Grape", "Grapefruit", "Guava"];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isPending = _useState6[0],
    setPending = _useState6[1];
  var InputResult = function InputResult(_ref3) {
    var _ref3$name = _ref3.name,
      name = _ref3$name === void 0 ? [] : _ref3$name;
    var toJson = {};
    name.forEach(function (n) {
      if (context.files[n] !== undefined) {
        toJson[n] = {
          "Files": context.files[n].map(function (f) {
            return {
              name: f.name,
              size: f.size,
              type: f.type
            };
          })
        };
      } else {
        toJson[n] = context.values[n] || null;
      }
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("pre", {
      className: "bg-body-tertiary border mb-4 p-2 rounded",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
        style: {
          fontSize: "0.8rem"
        },
        children: JSON.stringify(toJson, null, 4)
      })
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
        className: "display-5 fw-bold mb-3",
        children: "Form"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        className: "lead text-muted",
        children: ["Form components with built-in validation (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "Ruleset"
        }), ") and submission (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "Form.submit"
        }), ") \u2014 every field below is live, backed by the same shared ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "context"
        }), "."]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Form, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "border-bottom pb-2 mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
            bg: "primary",
            className: "me-2",
            children: "1"
          }), "Text inputs"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.SearchText"
          }), " (async suggestions), ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.Text"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.Password"
          }), " (with strength meter), ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.Longtext"
          }), "."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
            className: "text-muted mb-3",
            children: "RESULT"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Search Text",
            helpText: "Please enter your search text",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.SearchText, {
              name: "searchText",
              callback: function callback(term) {
                return term ? searchTerms.filter(function (t) {
                  return t.toLowerCase().includes(term.toLowerCase());
                }).map(function (t) {
                  return {
                    value: t,
                    label: "Fruit: ".concat(t)
                  };
                }) : [];
              },
              context: context
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["searchText"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Text",
            helpText: "Please enter your text",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Text, {
              name: "text",
              context: context
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["text"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Password",
            helpText: "Please enter your password",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Password, {
              name: "password",
              context: context,
              withStrengthEvaluation: true
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["password", "password_strength"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Long Text (Textarea)",
            helpText: "Please enter a longer text",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Longtext, {
              name: "longtext",
              context: context,
              props: {
                rows: 3
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["longtext"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CodeBlock, {
          children: "<Form.Group label=\"Search Text\">\n    <Form.SearchText name=\"searchText\" context={context}\n        callback={(term) => term ? mySearch(term) : []} />\n</Form.Group>\n<Form.Group label=\"Text\"><Form.Text name=\"text\" context={context} /></Form.Group>\n<Form.Group label=\"Password\">\n    <Form.Password name=\"password\" context={context} withStrengthEvaluation={true} />\n</Form.Group>\n<Form.Group label=\"Long Text\"><Form.Longtext name=\"longtext\" context={context} props={{ rows: 3 }} /></Form.Group>"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "border-bottom pb-2 mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
            bg: "primary",
            className: "me-2",
            children: "2"
          }), "Numbers"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.IntFloat"
          }), " \u2014 bounded numeric input with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "min"
          }), "/", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "max"
          }), "/", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "step"
          }), "."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
            className: "text-muted mb-3",
            children: "RESULT"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Int/Float",
            helpText: "Please enter a number/float",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.IntFloat, {
              name: "intFloat",
              context: context,
              min: 18,
              max: 50,
              step: 1
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["intFloat"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CodeBlock, {
          children: "<Form.Group label=\"Int/Float\">\n    <Form.IntFloat name=\"intFloat\" context={context} min={18} max={50} step={1} />\n</Form.Group>"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "border-bottom pb-2 mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
            bg: "primary",
            className: "me-2",
            children: "3"
          }), "Date & Time"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.Date"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.Datetime"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.DateRange"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.DatetimeRange"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.Time"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.TimeRange"
          }), " \u2014 all hand-rolled (no native ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "<input type=\"date\">"
          }), ")."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
            className: "text-muted mb-3",
            children: "RESULT"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Date",
            helpText: "Please enter your date",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Date, {
              name: "date",
              context: context
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["date"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Datetime",
            helpText: "Please enter your datetime",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Datetime, {
              name: "datetime",
              context: context
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["datetime", "datetime_time"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Date Range",
            helpText: "Please enter your date range",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.DateRange, {
              name: "dateRange",
              minDate: "2026-05-11",
              maxDate: "2027-06-20",
              context: context
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["dateRange"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Datetime Range",
            helpText: "Please enter your datetime range",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.DatetimeRange, {
              name: "datetimeRange",
              context: context
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["datetimeRange", "datetimeRange_time"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Time",
            helpText: "Please enter your time",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Time, {
              name: "time",
              context: context
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["time"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Time Range",
            helpText: "Please enter your time range",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.TimeRange, {
              name: "timeRange",
              context: context
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["timeRange"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CodeBlock, {
          children: "<Form.Date name=\"date\" context={context} />\n<Form.Datetime name=\"datetime\" context={context} />\n<Form.DateRange name=\"dateRange\" minDate=\"2026-05-11\" maxDate=\"2027-06-20\" context={context} />\n<Form.DatetimeRange name=\"datetimeRange\" context={context} />\n<Form.Time name=\"time\" context={context} />\n<Form.TimeRange name=\"timeRange\" context={context} />"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "border-bottom pb-2 mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
            bg: "primary",
            className: "me-2",
            children: "4"
          }), "Selection"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.Select"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.Checkbox"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.Multicheckbox"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.Radio"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.Switch"
          }), " \u2014 thin wrappers over native Bootstrap form controls."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
            className: "text-muted mb-3",
            children: "RESULT"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Select",
            helpText: "Please choose an option",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Select, {
              name: "select",
              context: context,
              options: [{
                value: "",
                label: "Select an option"
              }, {
                value: "red",
                label: "Red"
              }, {
                value: "green",
                label: "Green"
              }, {
                value: "blue",
                label: "Blue"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["select"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Checkbox",
            helpText: "Please check the box",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Checkbox, {
              name: "checkbox",
              context: context,
              label: "Some text for the checkbox"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["checkbox"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Multiple choice (Multicheckbox)",
            helpText: "Select one or more options you like",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Multicheckbox, {
              name: "multicheckbox",
              context: context,
              options: [{
                value: "apple",
                label: "Apple"
              }, {
                value: "banana",
                label: "Banana"
              }, {
                value: "cherry",
                label: "Cherry"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["multicheckbox"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Radio buttons",
            helpText: "Select one option",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Radio, {
              name: "radio",
              context: context,
              options: [{
                value: "male",
                label: "Male"
              }, {
                value: "female",
                label: "Female"
              }, {
                value: "other",
                label: "Other"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["radio"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Form.Group, {
            label: "Switches",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Switch, {
              name: "switch1",
              context: context,
              label: "A simple switch",
              helpText: "Toggle this switch on or off."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Switch, {
              name: "switch2",
              context: context,
              label: "A second switch",
              helpText: "Toggle this switch on or off."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["switch1", "switch2"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CodeBlock, {
          children: "<Form.Select name=\"select\" context={context} options={[{ value: \"red\", label: \"Red\" }]} />\n<Form.Checkbox name=\"checkbox\" context={context} label=\"Some text\" />\n<Form.Multicheckbox name=\"multicheckbox\" context={context} options={[{ value: \"apple\", label: \"Apple\" }]} />\n<Form.Radio name=\"radio\" context={context} options={[{ value: \"male\", label: \"Male\" }]} />\n<Form.Switch name=\"switch1\" context={context} label=\"A simple switch\" />"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "border-bottom pb-2 mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
            bg: "primary",
            className: "me-2",
            children: "5"
          }), "Skeleton custom components"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: ["Card-style inputs specific to this template \u2014 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.Range"
          }), " (filled track), ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.SkeletonSwitch"
          }), " (pill), ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.SkeletonRadio"
          }), "/", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "SkeletonCheckbox"
          }), " (icon cards), ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.SkeletonSwitchMode"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.SkeletonList"
          }), "."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
            className: "text-muted mb-3",
            children: "RESULT"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Skeleton Range",
            helpText: "A range component with a filled track.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Range, {
              name: "skeletonRange",
              context: context,
              min: 0,
              max: 1000,
              step: 10
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["skeletonRange"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Form.Group, {
            label: "Skeleton Switch",
            helpText: "A pill-style switch.",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.SkeletonSwitch, {
              name: "skeletonSwitch",
              context: context,
              label: "Skeleton Switch"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.SkeletonSwitch, {
              name: "skeletonSwitch2",
              context: context,
              reverse: true,
              label: "Skeleton Switch (reversed)"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["skeletonSwitch", "skeletonSwitch2"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Skeleton Radio",
            helpText: "Icon-card radio options.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.SkeletonRadio, {
              name: "skeletonRadio",
              context: context,
              options: [{
                icon: "bi bi-laptop",
                title: "Laptop",
                subtitle: "This is the first option"
              }, {
                icon: "bi bi-phone",
                title: "Phone",
                subtitle: "This is the second option"
              }, {
                icon: "bi bi-tv",
                title: "TV",
                subtitle: "This is the third option"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["skeletonRadio"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Skeleton Checkbox",
            helpText: "Icon-card checkbox options.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.SkeletonCheckbox, {
              name: "skeletonCheckbox",
              context: context,
              options: [{
                icon: "bi bi-apple",
                title: "Apple",
                subtitle: "This is the first option"
              }, {
                icon: "bi bi-amd",
                title: "AMD",
                subtitle: "This is the second option"
              }, {
                icon: "bi bi-amazon",
                title: "Amazon",
                subtitle: "This is the third option"
              }, {
                icon: "bi bi-bing",
                title: "Bing",
                subtitle: "This is the fourth option"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["skeletonCheckbox"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Skeleton Switch Mode",
            helpText: "Segmented single-choice switch.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.SkeletonSwitchMode, {
              name: "skeletonSwitchMode",
              context: context,
              options: [{
                icon: "bi bi-sun",
                label: "Light",
                value: "light"
              }, {
                icon: "bi bi-moon",
                label: "Dark",
                value: "dark"
              }, {
                icon: "bi bi-laptop",
                label: "System",
                value: "system"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["skeletonSwitchMode"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Skeleton List",
            helpText: "Repeatable single-value list.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.SkeletonList, {
              name: "skeletonList",
              inputType: "select",
              context: context,
              options: [{
                value: "",
                label: "---"
              }, {
                value: "Harry Potter and the Sorcerer's Stone",
                label: "Harry Potter and the Sorcerer's Stone"
              }, {
                value: "The Lord of the Rings: The Fellowship of the Ring",
                label: "The Lord of the Rings: The Fellowship of the Ring"
              }, {
                value: "To Kill a Mockingbird",
                label: "To Kill a Mockingbird"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["skeletonList"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CodeBlock, {
          children: "<Form.Range name=\"skeletonRange\" context={context} min={0} max={1000} step={10} />\n<Form.SkeletonSwitch name=\"skeletonSwitch\" context={context} label=\"Skeleton Switch\" />\n<Form.SkeletonRadio name=\"skeletonRadio\" context={context} options={[{ icon: \"bi bi-laptop\", title: \"Laptop\", subtitle: \"...\" }]} />\n<Form.SkeletonCheckbox name=\"skeletonCheckbox\" context={context} options={[{ icon: \"bi bi-apple\", title: \"Apple\", subtitle: \"...\" }]} />\n<Form.SkeletonSwitchMode name=\"skeletonSwitchMode\" context={context} options={[{ icon: \"bi bi-sun\", label: \"Light\", value: \"light\" }]} />\n<Form.SkeletonList name=\"skeletonList\" inputType=\"select\" context={context} options={[{ value: \"x\", label: \"X\" }]} />"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "border-bottom pb-2 mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
            bg: "primary",
            className: "me-2",
            children: "6"
          }), "File upload"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.File"
          }), " \u2014 drag & drop, multi-file, with previews and per-file progress tracked in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "context.values[name]"
          }), " once submitted via ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.submit"
          }), "."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
            className: "text-muted mb-3",
            children: "RESULT"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Skeleton File",
            helpText: "Upload up to 5 files.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.File, {
              name: "skeletonFile",
              context: context,
              maxFiles: 5
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["skeletonFile"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CodeBlock, {
          children: "<Form.Group label=\"Skeleton File\">\n    <Form.File name=\"skeletonFile\" context={context} maxFiles={5} />\n</Form.Group>"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "border-bottom pb-2 mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
            bg: "primary",
            className: "me-2",
            children: "7"
          }), "Repeatable groups"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.SkeletonSmallForm"
          }), " \u2014 a repeatable array of field groups, mixing built-in fields with a fully custom component (per-item rulesets via the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "\"name.nested\""
          }), " convention)."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
            className: "text-muted mb-3",
            children: "RESULT"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.Group, {
            label: "Skeleton Small Form",
            helpText: "Add up to 3 items.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form.SkeletonSmallForm, {
              name: "skeletonSmallForm",
              context: context,
              maxItems: 3,
              fields: [{
                component: Form.Group,
                props: {
                  helpText: "Please enter the item details",
                  styles: {
                    marginBottom: '1rem'
                  },
                  children: [{
                    component: Form.Text,
                    props: {
                      name: "contact",
                      props: {
                        placeholder: "Contact name"
                      }
                    }
                  }]
                }
              }, {
                component: CustomSkeletonSmallFormComponent,
                props: {
                  name: "customComponent",
                  context: context
                }
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputResult, {
            name: ["skeletonSmallForm"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CodeBlock, {
          children: "// rulesets[\"skeletonSmallForm.nested\"] = (i) => ({\n//     contact: (data) => (!data.contact || data.contact.length < 3)\n//         ? Ruleset.isInvalid(\"At least 3 characters\") : null,\n// });\n<Form.SkeletonSmallForm name=\"skeletonSmallForm\" context={context} maxItems={3} fields={[\n    { component: Form.Group, props: { children: [{ component: Form.Text, props: { name: \"contact\" } }] } },\n    { component: CustomSkeletonSmallFormComponent, props: { name: \"customComponent\", context } },\n]} />"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "border-bottom pb-2 mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
            bg: "primary",
            className: "me-2",
            children: "8"
          }), "Validation with Ruleset"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: ["Each field can be tied to a rule in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "context.rulesets"
          }), " returning ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Ruleset.isInvalid(message)"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Ruleset.isDisabled(message)"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Ruleset.isHidden()"
          }), ", or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "null"
          }), " when valid.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Ruleset.hasFeedbacks(context)"
          }), " walks every ruleset (including nested array rulesets) and returns ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "null"
          }), " once the whole form is valid."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
            className: "text-muted mb-3",
            children: "RESULT \u2014 live feedback state"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("pre", {
            className: "bg-body-tertiary border mb-0 p-2 rounded",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              style: {
                fontSize: "0.8rem"
              },
              children: JSON.stringify(Ruleset.hasFeedbacks(context), null, 4)
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CodeBlock, {
          children: "rulesets[\"text\"] = (data) => {\n    if (!data.text || data.text.length < 3) {\n        return Ruleset.isInvalid(\"Text must be at least 3 characters\");\n    }\n    return null;\n};\nconst isFormValid = Ruleset.hasFeedbacks(context) === null;"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "border-bottom pb-2 mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
            bg: "primary",
            className: "me-2",
            children: "9"
          }), "Submitting the form"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "Form.submit(url, context, options)"
          }), " posts ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "context.values"
          }), " once, then uploads every file in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "context.files"
          }), " in parallel (one request each, so each gets its own progress event) \u2014 see ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "context.values[name][i].pValue"
          }), " update live while uploading."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
            className: "text-muted mb-3",
            children: "RESULT"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "d-flex justify-content-end gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
              variant: "outline-secondary",
              onClick: function onClick() {
                return setValues({});
              },
              children: "Reset"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
              variant: "primary",
              className: "px-5",
              disabled: isPending,
              onClick: function onClick() {
                setPending(true);
                // This demo posts to the shipped example REST endpoint just to show a real round trip —
                // point this at your own model's endpoint (see DeclarativeBase.REST() server-side).
                Form.submit("/api/consoles", context, {
                  headers: {},
                  method: "POST"
                }).then(function (_ref4) {
                  var responses = _ref4.responses;
                  setPending(false);
                  context_.toast.open("Server responded (".concat(responses.length, " response(s)) \u2014 see console for details"), {
                    variant: "info",
                    title: "Form submitted"
                  });
                  console.log("Response from server:", responses);
                })["catch"](function (error) {
                  setPending(false);
                  context_.toast.open("Submit failed — see console for details", {
                    variant: "error",
                    title: "Error"
                  });
                  console.error("Error submitting form:", error);
                });
              },
              children: isPending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-circle-notch fa-spin"
              }) : "Submit"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CodeBlock, {
          children: "Form.submit(\"/api/your-endpoint\", context, { headers: {}, method: \"POST\" })\n    .then(({ responses }) => context.toast.open(\"Submitted\", { variant: \"success\" }))\n    .catch(error => context.toast.open(\"Submit failed\", { variant: \"error\" }));"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
        className: "border-bottom pb-2 mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          bg: "secondary",
          className: "me-2",
          children: "API"
        }), "API Reference"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h6", {
        className: "mt-4 mb-2",
        children: ["Shared ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "context"
        }), " shape"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "table-responsive mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                style: {
                  width: "30%"
                },
                children: "Key"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                children: "Description"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "values"
                }), " / ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "setValues"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: "Field values (primitives, arrays, JSON objects)."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "files"
                }), " / ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "setFiles"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
                children: ["Real ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "File"
                }), " objects for upload fields only."]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "rulesets"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: "Map of field name \u2192 validation function."
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
        className: "mt-4 mb-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "Ruleset"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "table-responsive mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                style: {
                  width: "30%"
                },
                children: "Method"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                children: "Description"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "Ruleset.isInvalid(message)"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: "Marks the field invalid with a feedback message."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "Ruleset.isDisabled(message)"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: "Disables the field."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "Ruleset.isHidden()"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
                children: ["Hides the field (and its ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "Form.Group"
                }), ")."]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "Ruleset.hasFeedbacks(context)"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
                children: ["Returns ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "null"
                }), " if every ruleset passes, otherwise the first feedback found."]
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
        className: "mt-4 mb-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "Form.submit(url, context, options, submitId?)"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "table-responsive",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                style: {
                  width: "30%"
                },
                children: "Parameter"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                children: "Description"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "url"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
                children: ["Endpoint receiving the values POST; each file is posted to the same URL with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "?submit_id=&i="
                }), " appended."]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "context"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
                children: ["The shared form context (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "values"
                }), "/", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "files"
                }), ")."]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: "options"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                  children: '{ headers, method }'
                }), " forwarded to every request."]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: "Returns"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("code", {
                  children: ["Promise<", '{ responses: [...] }', ">"]
                }), " \u2014 one response per request (values + each file)."]
              })]
            })]
          })]
        })
      })]
    })]
  });
}

/***/ }

}]);
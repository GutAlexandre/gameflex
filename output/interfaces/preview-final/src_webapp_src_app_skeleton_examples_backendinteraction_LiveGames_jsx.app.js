"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_skeleton_examples_backendinteraction_LiveGames_jsx"],{

/***/ "./src/webapp/src/app/skeleton/examples/backendinteraction/LiveGames.jsx"
/*!*******************************************************************************!*\
  !*** ./src/webapp/src/app/skeleton/examples/backendinteraction/LiveGames.jsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LiveGames)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./src/webapp/src/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _skeleton_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
;




var Form = _skeleton_js__WEBPACK_IMPORTED_MODULE_7__["default"].Form;
var Ruleset = _skeleton_js__WEBPACK_IMPORTED_MODULE_7__["default"].Ruleset;

// Demo-only: the dev server only proxies /api to the backend, so uploaded images
// (served from the backend's own /src/public mount) are linked to directly here.
var BACKEND_ORIGIN = "http://localhost:10102";
var GENRE_OPTIONS = ["RPG", "Action", "Platformer", "Puzzle", "Adventure", "Simulation", "Sports", "Racing", "Fighting", "Shooter"];
var RELEASE_YEAR_OPTIONS = Array.from({
  length: 2030 - 1970 + 1
}, function (_, i) {
  return 2030 - i;
});
function api(_x) {
  return _api.apply(this, arguments);
}
function _api() {
  _api = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(url) {
    var options,
      res,
      json,
      _args0 = arguments;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          options = _args0.length > 1 && _args0[1] !== undefined ? _args0[1] : {};
          _context0.n = 1;
          return fetch(url, options);
        case 1:
          res = _context0.v;
          if (!(res.status === 204)) {
            _context0.n = 2;
            break;
          }
          return _context0.a(2, {
            state: "success",
            item: null,
            ok: true
          });
        case 2:
          _context0.n = 3;
          return res.json()["catch"](function () {
            return {
              state: "failed",
              exception: {
                detail: "Invalid server response"
              }
            };
          });
        case 3:
          json = _context0.v;
          return _context0.a(2, _objectSpread(_objectSpread({}, json), {}, {
            ok: res.ok
          }));
      }
    }, _callee0);
  }));
  return _api.apply(this, arguments);
}
function photoUrl(photo) {
  if (!photo) {
    return null;
  }
  return photo.startsWith("/") ? "".concat(BACKEND_ORIGIN).concat(photo) : null;
}

// Manages the many-to-many Game <-> Console links for one game, using the
// game-consoles REST endpoint directly (LIST + POST + DELETE).
function ConsoleLinker(_ref) {
  var gameId = _ref.gameId,
    allConsoles = _ref.allConsoles,
    context = _ref.context;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    links = _useState2[0],
    setLinks = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isPending = _useState6[0],
    setPending = _useState6[1];
  var fetchLinks = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var result;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            setPending(true);
            _context.n = 1;
            return api("/api/game-consoles?items_per_page=50&search=".concat(encodeURIComponent(JSON.stringify({
              game_id: gameId
            }))));
          case 1:
            result = _context.v;
            setLinks(result.items || []);
            setPending(false);
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function fetchLinks() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchLinks();
  }, [gameId]);
  var linkConsole = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var result, _result$exception;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (selected) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.n = 2;
            return api("/api/game-consoles", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                game_id: gameId,
                console_id: selected
              })
            });
          case 2:
            result = _context2.v;
            if (result.ok) {
              setSelected("");
              fetchLinks();
            } else {
              context.toast.open(((_result$exception = result.exception) === null || _result$exception === void 0 ? void 0 : _result$exception.detail) || "Could not link console", {
                variant: "error"
              });
            }
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function linkConsole() {
      return _ref3.apply(this, arguments);
    };
  }();
  var unlink = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(linkId) {
      var result;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return api("/api/game-consoles/".concat(linkId), {
              method: "DELETE"
            });
          case 1:
            result = _context3.v;
            if (result.ok) {
              fetchLinks();
            } else {
              context.toast.open("Could not unlink console", {
                variant: "error"
              });
            }
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function unlink(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  var linkedIds = links.map(function (link) {
    return link.console_id;
  });
  var availableConsoles = allConsoles.filter(function (console) {
    return !linkedIds.includes(console.id);
  });
  var linkerContext = {
    values: {
      console: selected
    },
    setValues: function setValues(values) {
      return setSelected(values.console || "");
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "d-flex flex-wrap gap-2 mb-2",
      children: isPending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: "sm",
        animation: "border"
      }) : links.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "text-muted small",
        children: "No consoles linked yet."
      }) : links.map(function (link) {
        var _allConsoles$find;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
          bg: "secondary",
          className: "d-flex align-items-center gap-2 py-2",
          children: [((_allConsoles$find = allConsoles.find(function (console) {
            return console.id === link.console_id;
          })) === null || _allConsoles$find === void 0 ? void 0 : _allConsoles$find.name) || link.console_id, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
            className: "bi bi-x-circle",
            role: "button",
            tabIndex: 0,
            onClick: function onClick() {
              return unlink(link.id);
            },
            onKeyDown: _skeleton_js__WEBPACK_IMPORTED_MODULE_7__["default"].keyActivate(function () {
              return unlink(link.id);
            })
          })]
        }, link.id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "d-flex gap-2 align-items-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "flex-grow-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Select, {
          name: "console",
          context: linkerContext,
          options: [{
            value: "",
            label: "Link a console…"
          }].concat(_toConsumableArray(availableConsoles.map(function (console) {
            return {
              value: console.id,
              label: console.name
            };
          }))),
          props: {
            size: "sm"
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "sm",
        variant: "outline-primary",
        disabled: !selected,
        onClick: linkConsole,
        children: "Link"
      })]
    })]
  });
}

// Create/edit panel — a real Skeleton.Form posting multipart/form-data straight
// to the games REST endpoint (POST for create, PATCH for edit), including files.
function GameFormPanel(_ref5) {
  var context = _ref5.context,
    _ref5$game = _ref5.game,
    game = _ref5$game === void 0 ? null : _ref5$game,
    allConsoles = _ref5.allConsoles,
    onSaved = _ref5.onSaved;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      publisher: (game === null || game === void 0 ? void 0 : game.publisher) || "",
      title: (game === null || game === void 0 ? void 0 : game.title) || "",
      license: (game === null || game === void 0 ? void 0 : game.license) || "",
      description: (game === null || game === void 0 ? void 0 : game.description) || "",
      release_date: (game === null || game === void 0 ? void 0 : game.release_date) || "",
      genre: (game === null || game === void 0 ? void 0 : game.genre) || []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    values = _useState8[0],
    setValues = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState0 = _slicedToArray(_useState9, 2),
    files = _useState0[0],
    setFiles = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isPending = _useState10[0],
    setPending = _useState10[1];
  var rulesets = {
    publisher: function publisher(data) {
      return !data.publisher || data.publisher.length < 2 ? Ruleset.isInvalid("Publisher is required") : null;
    },
    title: function title(data) {
      return !data.title || data.title.length < 2 ? Ruleset.isInvalid("Title is required") : null;
    }
  };
  var formContext = {
    values: values,
    setValues: setValues,
    files: files,
    setFiles: setFiles,
    rulesets: rulesets
  };
  var isValid = Ruleset.hasFeedbacks(formContext) === null;
  var handleSave = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var _files$photo, _files$path;
      var formData, result, _result$exception2, _result$exception2$ma, _result$exception3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            setPending(true);
            formData = new FormData();
            Object.entries(values).forEach(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                name = _ref8[0],
                value = _ref8[1];
              // "photo"/"path" are handled below via `files` — Form.File writes its own
              // preview bookkeeping ({name, pValue} entries) into values[name] as soon as
              // it renders, even when no file was picked, so this generic loop must not
              // forward those two keys or it submits a bogus "[]"/stringified preview.
              if (name === "photo" || name === "path") {
                return;
              }
              if (value === null || value === undefined || value === "") {
                return;
              }
              formData.append(name, _typeof(value) === "object" ? JSON.stringify(value) : value);
            });
            if ((_files$photo = files.photo) !== null && _files$photo !== void 0 && _files$photo[0]) {
              formData.append("photo", files.photo[0]);
            }
            if ((_files$path = files.path) !== null && _files$path !== void 0 && _files$path[0]) {
              formData.append("path", files.path[0]);
            }
            _context4.n = 1;
            return api(game ? "/api/games/".concat(game.id) : "/api/games", {
              method: game ? "PATCH" : "POST",
              body: formData
            });
          case 1:
            result = _context4.v;
            setPending(false);
            if (result.ok) {
              context.toast.open("\"".concat(values.title, "\" ").concat(game ? "updated" : "created"), {
                variant: "success"
              });
              context.offcanvas.close();
              onSaved();
            } else {
              context.alert(((_result$exception2 = result.exception) === null || _result$exception2 === void 0 || (_result$exception2 = _result$exception2.detail) === null || _result$exception2 === void 0 || (_result$exception2$ma = _result$exception2.map) === null || _result$exception2$ma === void 0 ? void 0 : _result$exception2$ma.call(_result$exception2, function (d) {
                return d.message;
              }).join(", ")) || ((_result$exception3 = result.exception) === null || _result$exception3 === void 0 ? void 0 : _result$exception3.detail) || "Save failed", {
                variant: "error",
                title: "Could not save"
              });
            }
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function handleSave() {
      return _ref6.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Form, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Publisher",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Text, {
          name: "publisher",
          context: formContext
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Title",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Text, {
          name: "title",
          context: formContext
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "License",
        helpText: "Franchise/series name",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Text, {
          name: "license",
          context: formContext
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Release year",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Select, {
          name: "release_date",
          context: formContext,
          options: [{
            value: "",
            label: "—"
          }].concat(_toConsumableArray(RELEASE_YEAR_OPTIONS.map(function (year) {
            return {
              value: year,
              label: year
            };
          })))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Genre",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.SkeletonList, {
          name: "genre",
          context: formContext,
          inputType: "select",
          options: GENRE_OPTIONS.map(function (g) {
            return {
              value: g,
              label: g
            };
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Description",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Longtext, {
          name: "description",
          context: formContext,
          props: {
            rows: 3
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Cover photo",
        helpText: "Max 1MB",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.File, {
          name: "photo",
          context: formContext,
          accept: "image/*"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "ROM file",
        helpText: "Max 15MB",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.File, {
          name: "path",
          context: formContext
        })
      })]
    }), game ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
      label: "Consoles",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ConsoleLinker, {
        gameId: game.id,
        allConsoles: allConsoles,
        context: context
      })
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "d-flex justify-content-end gap-2 mt-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "outline-secondary",
        onClick: function onClick() {
          return context.offcanvas.close();
        },
        children: "Cancel"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "primary",
        disabled: !isValid || isPending,
        onClick: handleSave,
        children: isPending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          size: "sm",
          animation: "border"
        }) : game ? "Save changes" : "Create game"
      })]
    })]
  });
}
var ITEMS_PER_PAGE = 10;
var MIN_PENDING_MS = 500;
function LiveGames() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_js__WEBPACK_IMPORTED_MODULE_7__["default"].context);
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var initialPage = Math.max(1, parseInt(searchParams.get("page")) || 1);
  // Tracks the page we ourselves last pushed into the URL, so the
  // "sync back from the URL" effect below can tell a real browser
  // back/forward navigation (ref stays stale) apart from a re-render
  // triggered by our own setSearchParams call (ref already matches).
  var currentUrlPageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialPage);
  var isFirstSortRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    items = _useState12[0],
    setItems = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      count: 0,
      page: initialPage
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    pagination = _useState14[0],
    setPagination = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState16 = _slicedToArray(_useState15, 2),
    isPending = _useState16[0],
    setPending = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    searchText = _useState18[0],
    setSearchText = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("id"),
    _useState20 = _slicedToArray(_useState19, 2),
    sortField = _useState20[0],
    setSortField = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState22 = _slicedToArray(_useState21, 2),
    sortDesc = _useState22[0],
    setSortDesc = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    allConsoles = _useState24[0],
    setAllConsoles = _useState24[1];
  var fetchGames = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var page,
        startedAt,
        params,
        result,
        elapsed,
        _args5 = arguments;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            page = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : 1;
            setPending(true);
            startedAt = Date.now();
            params = new URLSearchParams({
              page: page,
              items_per_page: ITEMS_PER_PAGE,
              include_unbound: 1,
              sorts: JSON.stringify(_defineProperty({}, sortField, sortDesc ? -1 : 1))
            });
            if (searchText) {
              params.set("search", JSON.stringify([{
                title: {
                  like: searchText
                }
              }, {
                publisher: {
                  like: searchText
                }
              }]));
            }
            _context5.n = 1;
            return api("/api/games?".concat(params.toString()));
          case 1:
            result = _context5.v;
            // Demo-only: on localhost this resolves in a few ms, too fast to actually
            // see the placeholder rows this page demonstrates. Pad out to a minimum
            // visible duration rather than dropping the delay somewhere less honest
            // (like a fake setTimeout instead of a real fetch).
            elapsed = Date.now() - startedAt;
            if (!(elapsed < MIN_PENDING_MS)) {
              _context5.n = 2;
              break;
            }
            _context5.n = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, MIN_PENDING_MS - elapsed);
            });
          case 2:
            setItems(result.items || []);
            // The backend's own pagination.items_per_page reflects how many items
            // this particular page actually returned (e.g. fewer on a trailing
            // page), not the requested page size — never feed it back into the
            // next request or the pager would shrink to match the last page visited.
            setPagination(result.pagination ? _objectSpread(_objectSpread({}, result.pagination), {}, {
              items_per_page: ITEMS_PER_PAGE
            }) : pagination);
            setPending(false);
          case 3:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function fetchGames() {
      return _ref9.apply(this, arguments);
    };
  }();
  var fetchConsoles = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var result;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.n = 1;
            return api("/api/consoles?items_per_page=100");
          case 1:
            result = _context6.v;
            setAllConsoles(result.items || []);
          case 2:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function fetchConsoles() {
      return _ref0.apply(this, arguments);
    };
  }();

  // User-driven navigation (pager, search, sort reset): push ?page= into the
  // URL/history *and* fetch. Plain fetchGames() calls (initial load, refresh
  // after edit/delete on the same page, browser back/forward) never push —
  // pushing there would either duplicate the current history entry or fight
  // the navigation that's already in progress.
  var goToPage = function goToPage(page) {
    currentUrlPageRef.current = page;
    if ((parseInt(searchParams.get("page")) || 1) !== page) {
      setSearchParams(function (prev) {
        var next = new URLSearchParams(prev);
        if (page > 1) {
          next.set("page", page);
        } else {
          next["delete"]("page");
        }
        return next;
      });
    }
    fetchGames(page);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchConsoles();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchGames(initialPage);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isFirstSortRef.current) {
      isFirstSortRef.current = false;
      return;
    }
    goToPage(1);
  }, [sortField, sortDesc]);

  // Browser back/forward changes the URL without us calling goToPage — pick
  // that up here and fetch the page the URL now points to.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var page = Math.max(1, parseInt(searchParams.get("page")) || 1);
    if (page !== currentUrlPageRef.current) {
      currentUrlPageRef.current = page;
      fetchGames(page);
    }
  }, [searchParams]);
  var pager = _skeleton_js__WEBPACK_IMPORTED_MODULE_7__["default"].usePagination({
    isPending: isPending,
    currentPosition: pagination.page,
    itemCount: pagination.count,
    itemsPerPage: ITEMS_PER_PAGE,
    onPositionChange: function onPositionChange(page) {
      return goToPage(page);
    }
  });
  var openCreate = function openCreate() {
    context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(GameFormPanel, {
      context: context,
      allConsoles: allConsoles,
      onSaved: function onSaved() {
        return goToPage(1);
      }
    }), {
      title: "New game",
      size: 480
    });
  };
  var openEdit = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(game) {
      var result;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.n = 1;
            return api("/api/games/".concat(game.id));
          case 1:
            result = _context7.v;
            if (result.ok) {
              _context7.n = 2;
              break;
            }
            context.toast.open("Could not load this game", {
              variant: "error"
            });
            return _context7.a(2);
          case 2:
            context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(GameFormPanel, {
              context: context,
              game: result.item,
              allConsoles: allConsoles,
              onSaved: function onSaved() {
                return fetchGames(pagination.page);
              }
            }), {
              title: "Edit: ".concat(game.title),
              size: 480
            });
          case 3:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function openEdit(_x3) {
      return _ref1.apply(this, arguments);
    };
  }();
  var confirmDelete = function confirmDelete(game) {
    context.modal.open("Delete \"".concat(game.title, "\"? This cannot be undone."), {
      variant: "confirm",
      title: "Delete game",
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      onConfirm: function () {
        var _onConfirm = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
          var result;
          return _regenerator().w(function (_context8) {
            while (1) switch (_context8.n) {
              case 0:
                _context8.n = 1;
                return api("/api/games/".concat(game.id), {
                  method: "DELETE"
                });
              case 1:
                result = _context8.v;
                if (result.ok) {
                  context.toast.open("\"".concat(game.title, "\" deleted"), {
                    variant: "success"
                  });
                  fetchGames(pagination.page);
                } else {
                  context.toast.open("Delete failed", {
                    variant: "error"
                  });
                }
              case 2:
                return _context8.a(2);
            }
          }, _callee8);
        }));
        function onConfirm() {
          return _onConfirm.apply(this, arguments);
        }
        return onConfirm;
      }()
    });
  };

  // Demo-only: this in-memory backend has no persistence,
  // so this is the only way to undo whatever visitors have created/edited/deleted.
  var confirmResetDatabase = function confirmResetDatabase() {
    context.modal.open("This resets the entire demo dataset (games, consoles, and their links) back to the original seed data. Anything you created, edited, or uploaded will be lost.", {
      variant: "confirm",
      title: "Reset demo database",
      confirmLabel: "Reset",
      cancelLabel: "Cancel",
      onConfirm: function () {
        var _onConfirm2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
          var result;
          return _regenerator().w(function (_context9) {
            while (1) switch (_context9.n) {
              case 0:
                _context9.n = 1;
                return api("/api/retrogaming/reset", {
                  method: "POST"
                });
              case 1:
                result = _context9.v;
                if (result.ok) {
                  context.toast.open("Demo database reset", {
                    variant: "success"
                  });
                  fetchConsoles();
                  goToPage(1);
                } else {
                  context.toast.open("Reset failed", {
                    variant: "error"
                  });
                }
              case 2:
                return _context9.a(2);
            }
          }, _callee9);
        }));
        function onConfirm() {
          return _onConfirm2.apply(this, arguments);
        }
        return onConfirm;
      }()
    });
  };

  // Filter/sort inputs are Skeleton.Form components too — they don't need
  // validation rulesets, just a { values, setValues } context to read/write.
  var filterContext = {
    values: {
      search: searchText,
      sort: sortField
    },
    setValues: function setValues(values) {
      setSearchText(values.search || "");
      setSortField(values.sort || "id");
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "mb-4 d-flex justify-content-between align-items-start flex-wrap gap-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
          className: "display-5 fw-bold mb-3",
          children: "Live Games"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
          className: "lead text-muted mb-0",
          children: ["A fully working CRUD screen wired to the real backend example (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
            children: "/api/games"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
            children: "/api/consoles"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
            children: "/api/game-consoles"
          }), ") \u2014 listing, search, sort, pagination, create/edit with file upload, delete, and many-to-many relation management."]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "outline-danger",
        size: "sm",
        onClick: confirmResetDatabase,
        className: "text-nowrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
          className: "bi bi-arrow-counterclockwise me-1"
        }), "Reset demo data"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "g-2 mb-3 align-items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        md: 5,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "d-flex gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "flex-grow-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.SearchText, {
              name: "search",
              context: filterContext,
              props: {
                placeholder: "Search title or publisher…",
                onKeyDown: function onKeyDown(e) {
                  return e.key === "Enter" && goToPage(1);
                }
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
            variant: "outline-secondary",
            onClick: function onClick() {
              return goToPage(1);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
              className: "bi bi-search"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        md: 4,
        className: "d-flex gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "flex-grow-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Select, {
            name: "sort",
            context: filterContext,
            options: [{
              value: "id",
              label: "Sort: ID"
            }, {
              value: "title",
              label: "Sort: Title"
            }, {
              value: "release_date",
              label: "Sort: Release year"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "outline-secondary",
          onClick: function onClick() {
            return setSortDesc(!sortDesc);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
            className: "bi bi-sort-".concat(sortDesc ? "down" : "up")
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        md: 3,
        className: "text-end",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "primary",
          onClick: openCreate,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
            className: "bi bi-plus-lg me-1"
          }), "New game"]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_skeleton_js__WEBPACK_IMPORTED_MODULE_7__["default"].Table, {
      isPending: isPending,
      itemsPerPage: ITEMS_PER_PAGE,
      itemCount: pagination.count,
      labels: {
        photo: {
          title: "",
          css: {
            width: "56px"
          },
          placeholder: function placeholder() {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "placeholder rounded",
              style: {
                width: 40,
                height: 40
              }
            });
          },
          callback: function callback(item) {
            return photoUrl(item.photo) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: photoUrl(item.photo),
              alt: "",
              style: {
                width: 40,
                height: 40,
                objectFit: "cover",
                borderRadius: 6
              }
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "d-flex align-items-center justify-content-center bg-body-secondary rounded",
              style: {
                width: 40,
                height: 40
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                className: "bi bi-controller text-muted"
              })
            });
          }
        },
        title: {
          title: "Title",
          // Wrapped in the exact same classes as the real line below
          // (not just a hardcoded height) — a bare .placeholder span's
          // own height tracks raw font-size, not line-height, so it
          // renders shorter than the actual text line it's replacing.
          placeholder: function placeholder() {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "fw-semibold",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "placeholder col-8"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "text-muted small",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "placeholder col-5"
                })
              })]
            });
          },
          callback: function callback(item) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "fw-semibold",
                children: item.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "text-muted small",
                children: [item.publisher, item.release_date ? " \xB7 ".concat(item.release_date) : ""]
              })]
            });
          }
        },
        genre: {
          title: "Genre",
          callback: function callback(item) {
            return (item.genre || []).map(function (g) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
                bg: "info",
                className: "me-1",
                children: g
              }, g);
            });
          }
        },
        consoles: {
          title: "Consoles",
          callback: function callback(item) {
            return item.count_consoles > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
              bg: "secondary",
              children: [item.count_consoles, " linked"]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "text-muted small",
              children: "none"
            });
          }
        },
        edit: {
          title: "",
          css: {
            width: "40px",
            textAlign: "center"
          },
          callback: function callback(item) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
              className: "bi bi-pencil text-primary",
              role: "button",
              tabIndex: 0,
              onClick: function onClick() {
                return openEdit(item);
              },
              onKeyDown: _skeleton_js__WEBPACK_IMPORTED_MODULE_7__["default"].keyActivate(function () {
                return openEdit(item);
              })
            });
          }
        },
        "delete": {
          title: "",
          css: {
            width: "40px",
            textAlign: "center"
          },
          callback: function callback(item) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
              className: "bi bi-trash text-danger",
              role: "button",
              tabIndex: 0,
              onClick: function onClick() {
                return confirmDelete(item);
              },
              onKeyDown: _skeleton_js__WEBPACK_IMPORTED_MODULE_7__["default"].keyActivate(function () {
                return confirmDelete(item);
              })
            });
          }
        }
      },
      items: items
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(pager.PrevNext, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(pager.Selectbox, {})
    })]
  });
}

/***/ }

}]);
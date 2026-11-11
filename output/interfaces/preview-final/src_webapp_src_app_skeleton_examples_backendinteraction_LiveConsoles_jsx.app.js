"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_skeleton_examples_backendinteraction_LiveConsoles_jsx"],{

/***/ "./src/webapp/src/app/skeleton/examples/backendinteraction/LiveConsoles.jsx"
/*!**********************************************************************************!*\
  !*** ./src/webapp/src/app/skeleton/examples/backendinteraction/LiveConsoles.jsx ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LiveConsoles)
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
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
function api(_x) {
  return _api.apply(this, arguments);
} // Create/edit panel — posts JSON straight to the consoles REST endpoint.
// "id" is the primary key here (a user-chosen slug, e.g. "snes"), so it's
// only editable at creation time.
function _api() {
  _api = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(url) {
    var options,
      res,
      json,
      _args5 = arguments;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          options = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
          _context5.n = 1;
          return fetch(url, options);
        case 1:
          res = _context5.v;
          if (!(res.status === 204)) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, {
            state: "success",
            item: null,
            ok: true
          });
        case 2:
          _context5.n = 3;
          return res.json()["catch"](function () {
            return {
              state: "failed",
              exception: {
                detail: "Invalid server response"
              }
            };
          });
        case 3:
          json = _context5.v;
          return _context5.a(2, _objectSpread(_objectSpread({}, json), {}, {
            ok: res.ok
          }));
      }
    }, _callee5);
  }));
  return _api.apply(this, arguments);
}
function ConsoleFormPanel(_ref) {
  var context = _ref.context,
    _ref$console_ = _ref.console_,
    console_ = _ref$console_ === void 0 ? null : _ref$console_,
    onSaved = _ref.onSaved;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      id: (console_ === null || console_ === void 0 ? void 0 : console_.id) || "",
      name: (console_ === null || console_ === void 0 ? void 0 : console_.name) || "",
      short_name: (console_ === null || console_ === void 0 ? void 0 : console_.short_name) || "",
      core: (console_ === null || console_ === void 0 ? void 0 : console_.core) || "",
      manufacturer: (console_ === null || console_ === void 0 ? void 0 : console_.manufacturer) || "",
      release_date: (console_ === null || console_ === void 0 ? void 0 : console_.release_date) || ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isPending = _useState4[0],
    setPending = _useState4[1];
  var rulesets = {
    id: function id(data) {
      return !data.id || data.id.length < 2 ? Ruleset.isInvalid("A short id is required (e.g. \"snes\")") : null;
    },
    name: function name(data) {
      return !data.name || data.name.length < 2 ? Ruleset.isInvalid("Name is required") : null;
    },
    core: function core(data) {
      return !data.core ? Ruleset.isInvalid("Emulator core is required") : null;
    }
  };
  var formContext = {
    values: values,
    setValues: setValues,
    files: {},
    setFiles: function setFiles() {},
    rulesets: rulesets
  };
  var isValid = Ruleset.hasFeedbacks(formContext) === null;
  var handleSave = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var payload, result, _result$exception, _result$exception$map, _result$exception2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            setPending(true);
            payload = {};
            Object.entries(values).forEach(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                name = _ref4[0],
                value = _ref4[1];
              if (value !== "" && value !== null && value !== undefined) {
                payload[name] = value;
              }
            });
            _context.n = 1;
            return api(console_ ? "/api/consoles/".concat(console_.id) : "/api/consoles", {
              method: console_ ? "PATCH" : "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(console_ ? _objectSpread(_objectSpread({}, payload), {}, {
                id: console_.id
              }) : payload)
            });
          case 1:
            result = _context.v;
            setPending(false);
            if (result.ok) {
              context.toast.open("\"".concat(values.name, "\" ").concat(console_ ? "updated" : "created"), {
                variant: "success"
              });
              context.offcanvas.close();
              onSaved();
            } else {
              context.alert(((_result$exception = result.exception) === null || _result$exception === void 0 || (_result$exception = _result$exception.detail) === null || _result$exception === void 0 || (_result$exception$map = _result$exception.map) === null || _result$exception$map === void 0 ? void 0 : _result$exception$map.call(_result$exception, function (d) {
                return d.message;
              }).join(", ")) || ((_result$exception2 = result.exception) === null || _result$exception2 === void 0 ? void 0 : _result$exception2.detail) || "Save failed", {
                variant: "error",
                title: "Could not save"
              });
            }
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleSave() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Form, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "ID",
        helpText: "Short slug, e.g. \"snes\" \u2014 cannot be changed later",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Text, {
          name: "id",
          context: formContext,
          props: {
            autoComplete: "off",
            disabled: !!console_
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Name",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Text, {
          name: "name",
          context: formContext
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Short name",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Text, {
          name: "short_name",
          context: formContext
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Emulator core",
        helpText: "e.g. \"snes9x\"",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Text, {
          name: "core",
          context: formContext
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Manufacturer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Text, {
          name: "manufacturer",
          context: formContext
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Release year",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.IntFloat, {
          name: "release_date",
          context: formContext,
          min: 1970,
          max: 2030,
          step: 1
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
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
        }) : console_ ? "Save changes" : "Create console"
      })]
    })]
  });
}
var ITEMS_PER_PAGE = 10;
var MIN_PENDING_MS = 500;
function LiveConsoles() {
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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    items = _useState6[0],
    setItems = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      count: 0,
      page: initialPage
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    pagination = _useState8[0],
    setPagination = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState0 = _slicedToArray(_useState9, 2),
    isPending = _useState0[0],
    setPending = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    searchText = _useState10[0],
    setSearchText = _useState10[1];
  var fetchConsoles = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var page,
        startedAt,
        params,
        result,
        elapsed,
        _args2 = arguments;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            page = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
            setPending(true);
            startedAt = Date.now();
            params = new URLSearchParams({
              page: page,
              items_per_page: ITEMS_PER_PAGE,
              include_unbound: 1
            });
            if (searchText) {
              params.set("search", JSON.stringify([{
                name: {
                  like: searchText
                }
              }, {
                manufacturer: {
                  like: searchText
                }
              }]));
            }
            _context2.n = 1;
            return api("/api/consoles?".concat(params.toString()));
          case 1:
            result = _context2.v;
            // Demo-only: on localhost this resolves in a few ms, too fast to actually
            // see the placeholder rows this page demonstrates. Pad out to a minimum
            // visible duration rather than dropping the delay somewhere less honest
            // (like a fake setTimeout instead of a real fetch).
            elapsed = Date.now() - startedAt;
            if (!(elapsed < MIN_PENDING_MS)) {
              _context2.n = 2;
              break;
            }
            _context2.n = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, MIN_PENDING_MS - elapsed);
            });
          case 2:
            setItems(result.items || []);
            // The backend's own pagination.items_per_page reflects how many items
            // this particular page actually returned (e.g. 3 on a trailing page),
            // not the requested page size — never feed it back into the next
            // request or the pager would shrink to match the last page visited.
            setPagination(result.pagination ? _objectSpread(_objectSpread({}, result.pagination), {}, {
              items_per_page: ITEMS_PER_PAGE
            }) : pagination);
            setPending(false);
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function fetchConsoles() {
      return _ref5.apply(this, arguments);
    };
  }();

  // User-driven navigation (pager, search reset): push ?page= into the
  // URL/history *and* fetch. Plain fetchConsoles() calls (initial load,
  // refresh after edit/delete on the same page, browser back/forward)
  // never push — pushing there would either duplicate the current history
  // entry or fight the navigation that's already in progress.
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
    fetchConsoles(page);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchConsoles(initialPage);
  }, []);

  // Browser back/forward changes the URL without us calling goToPage — pick
  // that up here and fetch the page the URL now points to.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var page = Math.max(1, parseInt(searchParams.get("page")) || 1);
    if (page !== currentUrlPageRef.current) {
      currentUrlPageRef.current = page;
      fetchConsoles(page);
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
    context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ConsoleFormPanel, {
      context: context,
      onSaved: function onSaved() {
        return goToPage(1);
      }
    }), {
      title: "New console",
      size: 420
    });
  };
  var openEdit = function openEdit(console_) {
    context.offcanvas.open(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ConsoleFormPanel, {
      context: context,
      console_: console_,
      onSaved: function onSaved() {
        return fetchConsoles(pagination.page);
      }
    }), {
      title: "Edit: ".concat(console_.name),
      size: 420
    });
  };
  var confirmDelete = function confirmDelete(console_) {
    context.modal.open("Delete \"".concat(console_.name, "\"? Games linked to it will lose this console."), {
      variant: "confirm",
      title: "Delete console",
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      onConfirm: function () {
        var _onConfirm = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
          var result;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.n) {
              case 0:
                _context3.n = 1;
                return api("/api/consoles/".concat(console_.id), {
                  method: "DELETE"
                });
              case 1:
                result = _context3.v;
                if (result.ok) {
                  context.toast.open("\"".concat(console_.name, "\" deleted"), {
                    variant: "success"
                  });
                  fetchConsoles(pagination.page);
                } else {
                  context.toast.open("Delete failed", {
                    variant: "error"
                  });
                }
              case 2:
                return _context3.a(2);
            }
          }, _callee3);
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
        var _onConfirm2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
          var result;
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.n) {
              case 0:
                _context4.n = 1;
                return api("/api/retrogaming/reset", {
                  method: "POST"
                });
              case 1:
                result = _context4.v;
                if (result.ok) {
                  context.toast.open("Demo database reset", {
                    variant: "success"
                  });
                  goToPage(1);
                } else {
                  context.toast.open("Reset failed", {
                    variant: "error"
                  });
                }
              case 2:
                return _context4.a(2);
            }
          }, _callee4);
        }));
        function onConfirm() {
          return _onConfirm2.apply(this, arguments);
        }
        return onConfirm;
      }()
    });
  };

  // The search input is a Skeleton.Form component too — it doesn't need
  // validation rulesets, just a { values, setValues } context to read/write.
  var filterContext = {
    values: {
      search: searchText
    },
    setValues: function setValues(values) {
      return setSearchText(values.search || "");
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "mb-4 d-flex justify-content-between align-items-start flex-wrap gap-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
          className: "display-5 fw-bold mb-3",
          children: "Live Consoles"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
          className: "lead text-muted mb-0",
          children: ["A second screen against the same backend example (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
            children: "/api/consoles"
          }), ") \u2014 a simpler CRUD without file upload, complementing the Games screen."]
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
        md: 8,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "d-flex gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "flex-grow-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.SearchText, {
              name: "search",
              context: filterContext,
              props: {
                placeholder: "Search name or manufacturer…",
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        md: 4,
        className: "text-end",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "primary",
          onClick: openCreate,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
            className: "bi bi-plus-lg me-1"
          }), "New console"]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_skeleton_js__WEBPACK_IMPORTED_MODULE_7__["default"].Table, {
      isPending: isPending,
      itemsPerPage: ITEMS_PER_PAGE,
      itemCount: pagination.count,
      labels: {
        name: {
          title: "Console",
          // Wrapped in the exact same classes as the real line below
          // (not just a hardcoded height) — a bare .placeholder span's
          // own height tracks raw font-size, not line-height, so it
          // renders shorter than the actual text line it's replacing.
          // Matching the wrapper classes keeps this correct even if
          // the base font scale changes later.
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
                children: item.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "text-muted small",
                children: [item.id, " \xB7 ", item.manufacturer, item.release_date ? " \xB7 ".concat(item.release_date) : ""]
              })]
            });
          }
        },
        core: {
          title: "Core",
          callback: "core"
        },
        games: {
          title: "Games",
          callback: function callback(item) {
            return item.count_games > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
              bg: "secondary",
              children: item.count_games
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "text-muted small",
              children: "0"
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
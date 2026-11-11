"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_skeleton_examples_backendinteraction_LiveAuth_jsx"],{

/***/ "./src/webapp/src/app/skeleton/examples/backendinteraction/LiveAuth.jsx"
/*!******************************************************************************!*\
  !*** ./src/webapp/src/app/skeleton/examples/backendinteraction/LiveAuth.jsx ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LiveAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _skeleton_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
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

// Demo-only: a real app would keep the token in memory + a refresh-token/httpOnly
// cookie flow instead of localStorage, but localStorage keeps this example short.
var TOKEN_STORAGE_KEY = "skeleton-demo-auth-token";
function api(_x) {
  return _api.apply(this, arguments);
}
function _api() {
  _api = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(url) {
    var options,
      res,
      json,
      _args6 = arguments;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
          _context6.n = 1;
          return fetch(url, options);
        case 1:
          res = _context6.v;
          if (!(res.status === 204)) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, {
            state: "success",
            item: null,
            ok: true
          });
        case 2:
          _context6.n = 3;
          return res.json()["catch"](function () {
            return {
              state: "failed",
              exception: {
                detail: "Invalid server response"
              }
            };
          });
        case 3:
          json = _context6.v;
          return _context6.a(2, _objectSpread(_objectSpread({}, json), {}, {
            ok: res.ok
          }));
      }
    }, _callee6);
  }));
  return _api.apply(this, arguments);
}
function authHeaders(token) {
  return token ? {
    Authorization: "Bearer ".concat(token)
  } : {};
}

// Shared username/password form for both the register and login cards below.
function CredentialsForm(_ref) {
  var submitLabel = _ref.submitLabel,
    onSubmit = _ref.onSubmit,
    isPending = _ref.isPending;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      username: "",
      password: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var rulesets = {
    username: function username(data) {
      return !data.username || data.username.length < 3 ? Ruleset.isInvalid("At least 3 characters") : null;
    },
    password: function password(data) {
      return !data.password || data.password.length < 6 ? Ruleset.isInvalid("At least 6 characters") : null;
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Form, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Username",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Text, {
          name: "username",
          context: formContext,
          props: {
            autoComplete: "username"
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Group, {
        label: "Password",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Form.Text, {
          name: "password",
          context: formContext,
          props: {
            type: "password",
            autoComplete: "current-password"
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "mt-2",
      variant: "primary",
      disabled: !isValid || isPending,
      onClick: function onClick() {
        return onSubmit(values);
      },
      children: isPending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: "sm",
        animation: "border"
      }) : submitLabel
    })]
  });
}
function LiveAuth() {
  var _secretResult$excepti;
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_js__WEBPACK_IMPORTED_MODULE_7__["default"].context);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return localStorage.getItem(TOKEN_STORAGE_KEY) || "";
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    token = _useState4[0],
    setToken = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    user = _useState6[0],
    setUser = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isPending = _useState8[0],
    setPending = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    secretResult = _useState0[0],
    setSecretResult = _useState0[1];
  var fetchMe = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(currentToken) {
      var result;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (currentToken) {
              _context.n = 1;
              break;
            }
            setUser(null);
            return _context.a(2);
          case 1:
            _context.n = 2;
            return api("/api/auth/me", {
              headers: authHeaders(currentToken)
            });
          case 2:
            result = _context.v;
            if (result.ok) {
              setUser(result.item);
            } else {
              // Token expired, or the users table got wiped by "Reset demo data" — drop it.
              setToken("");
              localStorage.removeItem(TOKEN_STORAGE_KEY);
              setUser(null);
            }
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function fetchMe(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchMe(token);
  }, []);
  var handleAuthResult = function handleAuthResult(result, successMessage) {
    if (result.ok) {
      setToken(result.item.access_token);
      localStorage.setItem(TOKEN_STORAGE_KEY, result.item.access_token);
      setUser(result.item.user);
      setSecretResult(null);
      context.toast.open(successMessage, {
        variant: "success"
      });
    } else {
      var _result$exception;
      context.toast.open(((_result$exception = result.exception) === null || _result$exception === void 0 ? void 0 : _result$exception.detail) || "Request failed", {
        variant: "error"
      });
    }
  };
  var register = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(values) {
      var result;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            setPending(true);
            _context2.n = 1;
            return api("/api/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(values)
            });
          case 1:
            result = _context2.v;
            setPending(false);
            handleAuthResult(result, "Account \"".concat(values.username, "\" created \u2014 logged in"));
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function register(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var login = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(values) {
      var result;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            setPending(true);
            _context3.n = 1;
            return api("/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(values)
            });
          case 1:
            result = _context3.v;
            setPending(false);
            handleAuthResult(result, "Logged in as \"".concat(values.username, "\""));
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function login(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var logout = function logout() {
    setToken("");
    setUser(null);
    setSecretResult(null);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    context.toast.open("Logged out", {
      variant: "info"
    });
  };
  var callSecret = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(withToken) {
      var result;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return api("/api/auth/secret", {
              headers: withToken ? authHeaders(token) : {}
            });
          case 1:
            result = _context4.v;
            setSecretResult(result);
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function callSecret(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
  var confirmResetDatabase = function confirmResetDatabase() {
    context.modal.open("This resets the entire demo dataset — games, consoles, their links, and every registered account (they all share the same in-memory database) — back to the original seed data.", {
      variant: "confirm",
      title: "Reset demo database",
      confirmLabel: "Reset",
      cancelLabel: "Cancel",
      onConfirm: function () {
        var _onConfirm = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
          var result;
          return _regenerator().w(function (_context5) {
            while (1) switch (_context5.n) {
              case 0:
                _context5.n = 1;
                return api("/api/retrogaming/reset", {
                  method: "POST"
                });
              case 1:
                result = _context5.v;
                if (result.ok) {
                  context.toast.open("Demo database reset — you've been logged out", {
                    variant: "success"
                  });
                  logout();
                } else {
                  context.toast.open("Reset failed", {
                    variant: "error"
                  });
                }
              case 2:
                return _context5.a(2);
            }
          }, _callee5);
        }));
        function onConfirm() {
          return _onConfirm.apply(this, arguments);
        }
        return onConfirm;
      }()
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "mb-4 d-flex justify-content-between align-items-start flex-wrap gap-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
          className: "display-5 fw-bold mb-3",
          children: "Live Auth"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
          className: "lead text-muted mb-0",
          children: ["A minimal JWT auth flow against the real backend (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
            children: "/api/auth/register"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
            children: "/api/auth/login"
          }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
            children: "/api/auth/me"
          }), ") \u2014 register or log in, then call a route protected with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
            children: "Depends(get_current_user)"
          }), " to see the token actually enforced."]
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
    }), user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "success",
      className: "d-flex justify-content-between align-items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: ["Logged in as ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", {
          children: user.username
        }), " (id ", user.id, ") \u2014 account created ", new Date(user.created_at).toLocaleString(), "."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "sm",
        variant: "outline-secondary",
        onClick: logout,
        children: "Log out"
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "g-4 mb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        md: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          body: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
            className: "h5",
            children: "Register"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            className: "text-muted small",
            children: "Creates a new account (password hashed with bcrypt) and logs you in immediately."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(CredentialsForm, {
            submitLabel: "Create account",
            onSubmit: register,
            isPending: isPending
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        md: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          body: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
            className: "h5",
            children: "Log in"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            className: "text-muted small",
            children: "Use an account you already registered above."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(CredentialsForm, {
            submitLabel: "Log in",
            onSubmit: login,
            isPending: isPending
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      body: true,
      className: "mb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
        className: "h5",
        children: "Call a protected route"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
        className: "text-muted small mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
          children: "GET /api/auth/secret"
        }), " requires ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
          children: "Depends(get_current_user)"
        }), " server-side \u2014 it 401s without a valid bearer token, regardless of whether you're logged in on this page."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "d-flex gap-2 mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "primary",
          disabled: !token,
          onClick: function onClick() {
            return callSecret(true);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
            className: "bi bi-shield-lock me-1"
          }), "Call with token"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "outline-secondary",
          onClick: function onClick() {
            return callSecret(false);
          },
          children: "Call without token"
        })]
      }), secretResult ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: secretResult.ok ? "success" : "danger",
        className: "mb-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", {
          children: secretResult.ok ? "200 OK" : "401 Unauthorized"
        }), " \u2014", " ", secretResult.ok ? secretResult.item.message : ((_secretResult$excepti = secretResult.exception) === null || _secretResult$excepti === void 0 ? void 0 : _secretResult$excepti.detail) || "Request failed"]
      }) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      body: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
        className: "h5",
        children: "How it's wired"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("pre", {
        className: "bg-body-tertiary border rounded p-3 small mb-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
          children: "// Frontend: attach the token from localStorage to any protected call.\nfetch(\"/api/auth/secret\", {\n    headers: { Authorization: `Bearer ${token}` },\n});\n\n// Backend (python/src/app/example/auth.py): a reusable dependency.\nasync def get_current_user(credentials = Depends(bearer_scheme)) -> User:\n    payload = jwt.decode(credentials.credentials, JWT_SECRET, algorithms=[JWT_ALGORITHM])\n    ...\n    return user\n\n# Protect any route \u2014 custom or otherwise \u2014 the same way:\n@app.get(\"/api/auth/secret\")\nasync def secret(current_user: User = Depends(get_current_user)):\n    return {\"message\": f\"Hello {current_user.username}\"}"
        })
      })]
    })]
  });
}

/***/ }

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_skeleton_examples_TablePagination_jsx"],{

/***/ "./src/webapp/src/app/skeleton/examples/TablePagination.jsx"
/*!******************************************************************!*\
  !*** ./src/webapp/src/app/skeleton/examples/TablePagination.jsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TablePaginationDoc)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Accordion.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./src/webapp/src/node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var _skeleton_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../skeleton.js */ "./src/webapp/src/app/skeleton/skeleton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
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



function CodeBlock(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Code" : _ref$title,
    children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "mb-0",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
      eventKey: "0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Header, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", {
          className: "bi bi-code-slash me-2"
        }), title]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Body, {
        className: "bg-body-tertiary p-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("pre", {
          className: "mb-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
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
function TablePaginationDoc() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].context);

  // Example 1: Basic Table
  var basicItems = [{
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin"
  }, {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User"
  }, {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Manager"
  }];

  // Example 2: Table with Checkboxes
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedItems = _useState2[0],
    setSelectedItems = _useState2[1];
  var checkboxItems = [{
    id: 1,
    product: "Laptop",
    price: 999,
    stock: 15
  }, {
    id: 2,
    product: "Mouse",
    price: 25,
    stock: 50
  }, {
    id: 3,
    product: "Keyboard",
    price: 75,
    stock: 30
  }, {
    id: 4,
    product: "Monitor",
    price: 350,
    stock: 8
  }];

  // Example 3: Table with Inline Editing
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 1,
      title: "Task 1",
      status: "pending",
      priority: "high"
    }, {
      id: 2,
      title: "Task 2",
      status: "completed",
      priority: "low"
    }, {
      id: 3,
      title: "Task 3",
      status: "in-progress",
      priority: "medium"
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    editableItems = _useState4[0],
    setEditableItems = _useState4[1];
  var inlineEditor = function inlineEditor(item, dismissInline) {
    if (!item) {
      // Add new item
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
          className: "mb-3",
          children: "Create New Task"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            var formData = new FormData(e.target);
            var newItem = {
              id: Math.max.apply(Math, _toConsumableArray(editableItems.map(function (i) {
                return i.id;
              }))) + 1,
              title: formData.get('title'),
              status: formData.get('status'),
              priority: formData.get('priority')
            };
            setEditableItems([].concat(_toConsumableArray(editableItems), [newItem]));
            context.toast.open("Task created successfully", {
              variant: "success",
              title: "Created"
            });
            dismissInline();
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "g-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 4,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Control, {
                name: "title",
                placeholder: "Title",
                required: true
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 3,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Select, {
                name: "status",
                required: true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                  value: "pending",
                  children: "Pending"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                  value: "in-progress",
                  children: "In Progress"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                  value: "completed",
                  children: "Completed"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 3,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Select, {
                name: "priority",
                required: true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                  value: "low",
                  children: "Low"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                  value: "medium",
                  children: "Medium"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                  value: "high",
                  children: "High"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 2,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
                type: "submit",
                className: "w-100",
                variant: "success",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", {
                  className: "bi bi-check"
                }), " Create"]
              })
            })]
          })
        })]
      });
    }

    // Edit existing item
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h6", {
        className: "mb-3",
        children: ["Edit Task: ", item.title]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
          var formData = new FormData(e.target);
          var updatedItem = _objectSpread(_objectSpread({}, item), {}, {
            title: formData.get('title'),
            status: formData.get('status'),
            priority: formData.get('priority')
          });
          setEditableItems(editableItems.map(function (i) {
            return i.id === item.id ? updatedItem : i;
          }));
          context.toast.open("Task updated successfully", {
            variant: "success",
            title: "Updated"
          });
          dismissInline();
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "g-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
            md: 4,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Control, {
              name: "title",
              defaultValue: item.title,
              required: true
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
            md: 3,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Select, {
              name: "status",
              defaultValue: item.status,
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                value: "pending",
                children: "Pending"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                value: "in-progress",
                children: "In Progress"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                value: "completed",
                children: "Completed"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
            md: 3,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Select, {
              name: "priority",
              defaultValue: item.priority,
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                value: "low",
                children: "Low"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                value: "medium",
                children: "Medium"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                value: "high",
                children: "High"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
            md: 2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
              type: "submit",
              className: "w-100",
              variant: "primary",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", {
                className: "bi bi-check"
              }), " Save"]
            })
          })]
        })
      })]
    });
  };

  // Example 4: Table with Action Panels
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 1,
      order: "#1001",
      customer: "John Doe",
      total: 150,
      status: "shipped"
    }, {
      id: 2,
      order: "#1002",
      customer: "Jane Smith",
      total: 250,
      status: "pending"
    }, {
      id: 3,
      order: "#1003",
      customer: "Bob Johnson",
      total: 99,
      status: "delivered"
    }]),
    _useState6 = _slicedToArray(_useState5, 2),
    actionItems = _useState6[0],
    setActionItems = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    actionSelected = _useState8[0],
    setActionSelected = _useState8[1];

  // Example 5: Standard Pagination
  var allPaginatedItems = Array.from({
    length: 53
  }, function (_, i) {
    return {
      id: i + 1,
      product: "Product ".concat(i + 1),
      price: Math.floor(Math.random() * 1000) + 10,
      category: ['Electronics', 'Clothing', 'Food', 'Books'][Math.floor(Math.random() * 4)]
    };
  });
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isPending5 = _useState0[0],
    setIsPending5 = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState10 = _slicedToArray(_useState1, 2),
    currentPage5 = _useState10[0],
    setCurrentPage5 = _useState10[1];
  var itemsPerPage5 = 5;
  var pagination5 = _skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].usePagination({
    isPending: isPending5,
    currentPosition: currentPage5,
    itemCount: allPaginatedItems.length,
    itemsPerPage: itemsPerPage5,
    onPositionChange: function onPositionChange(newPage) {
      setIsPending5(true);
      setCurrentPage5(newPage);
      setTimeout(function () {
        return setIsPending5(false);
      }, 300);
    },
    maxButtons: 7
  });
  var visibleItems5 = allPaginatedItems.slice((currentPage5 - 1) * itemsPerPage5, currentPage5 * itemsPerPage5);

  // Example 6: Token-Based Pagination
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isPending6 = _useState12[0],
    setIsPending6 = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    tokenItems = _useState14[0],
    setTokenItems = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    totalCount6 = _useState16[0],
    setTotalCount6 = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    currentToken = _useState18[0],
    setCurrentToken = _useState18[1];
  var _Skeleton$usePaginati = _skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].usePagination.TokenBased({
      isPending: isPending6,
      onTokenChange: function onTokenChange(token) {
        setIsPending6(true);
        setCurrentToken(token);

        // Simulate API call
        setTimeout(function () {
          var mockData = generateMockPage(token);
          setTokenItems(mockData.items);
          var total = setPaginationToken(token, mockData.nextToken, 5, mockData.items.length);
          setTotalCount6(total); // Update total count based on items loaded
          setIsPending6(false);
        }, 500);
      },
      limitSwitch: true,
      maxButtons: 7
    }),
    _Skeleton$usePaginati2 = _slicedToArray(_Skeleton$usePaginati, 3),
    tokenPagination = _Skeleton$usePaginati2[0],
    setPaginationToken = _Skeleton$usePaginati2[1],
    resetPagination = _Skeleton$usePaginati2[2];

  // Initialize token pagination on mount
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (tokenItems.length === 0) {
      setIsPending6(true);
      setTimeout(function () {
        var mockData = generateMockPage(null);
        setTokenItems(mockData.items);
        var total = setPaginationToken(null, mockData.nextToken, 5, mockData.items.length);
        setTotalCount6(total); // Update total count based on items loaded
        setIsPending6(false);
      }, 500);
    }
  }, []);
  function generateMockPage(token) {
    var pageNum = token ? parseInt(token.split('-')[1]) : 1;
    var hasNext = pageNum < 5; // Only 5 pages total

    return {
      items: Array.from({
        length: 5
      }, function (_, i) {
        return {
          id: "".concat(pageNum, "-").concat(i + 1),
          name: "Item ".concat((pageNum - 1) * 5 + i + 1),
          value: Math.floor(Math.random() * 100)
        };
      }),
      nextToken: hasNext ? "page-".concat(pageNum + 1) : null
    };
  }

  // Example 7: Skeleton.usePagination.DataTable
  var allDataTableItems = Array.from({
    length: 30
  }, function (_, i) {
    return {
      id: i + 1,
      user: "User ".concat(i + 1),
      email: "user".concat(i + 1, "@example.com"),
      joined: "2024-".concat(String(Math.floor(Math.random() * 12) + 1).padStart(2, '0'), "-").concat(String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'))
    };
  });
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isPending7 = _useState20[0],
    setIsPending7 = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState22 = _slicedToArray(_useState21, 2),
    currentPage7 = _useState22[0],
    setCurrentPage7 = _useState22[1];
  var itemsPerPage7 = 6;
  var _Skeleton$usePaginati3 = _skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].usePagination.DataTable({
      isPending: isPending7,
      items: allDataTableItems,
      currentPosition: currentPage7,
      itemsPerPage: itemsPerPage7,
      onPositionChange: function onPositionChange(newPage) {
        setIsPending7(true);
        setCurrentPage7(newPage);
        setTimeout(function () {
          return setIsPending7(false);
        }, 300);
      },
      maxButtons: 9
    }),
    _Skeleton$usePaginati4 = _slicedToArray(_Skeleton$usePaginati3, 2),
    pagination7 = _Skeleton$usePaginati4[0],
    paginatedItems7 = _Skeleton$usePaginati4[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
        className: "display-5 fw-bold mb-3",
        children: "Table & Pagination"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        className: "lead text-muted",
        children: "Data tables with inline editing, checkboxes, custom actions, and flexible pagination strategies."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h2", {
        className: "border-bottom pb-2 mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          bg: "primary",
          className: "me-2",
          children: "1"
        }), "Basic Table"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        children: "Create a simple data table with custom labels and callbacks for dynamic content."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
          className: "text-muted mb-3",
          children: "RESULT"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Table, {
          labels: {
            id: {
              title: "ID",
              css: {
                width: '60px',
                fontWeight: 'bold'
              },
              callback: "id"
            },
            name: {
              title: "Name",
              callback: "name"
            },
            email: {
              title: "Email",
              callback: "email"
            },
            role: {
              title: "Role",
              css: {
                width: '120px'
              },
              callback: function callback(item) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  bg: item.role === 'Admin' ? 'danger' : item.role === 'Manager' ? 'warning' : 'secondary',
                  children: item.role
                });
              }
            }
          },
          items: basicItems,
          itemCount: basicItems.length,
          itemsPerPage: 10
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(CodeBlock, {
        children: "import React from 'react';\nimport Skeleton from \"../skeleton.js\";\nimport { Badge } from 'react-bootstrap';\n\nfunction BasicTable() {\n    const items = [\n        { id: 1, name: \"John Doe\", email: \"john@example.com\", role: \"Admin\" },\n        { id: 2, name: \"Jane Smith\", email: \"jane@example.com\", role: \"User\" },\n        { id: 3, name: \"Bob Johnson\", email: \"bob@example.com\", role: \"Manager\" }\n    ];\n\n    return (\n        <Skeleton.Table\n            labels={{\n                id: {\n                    title: \"ID\",\n                    css: { width: '60px', fontWeight: 'bold' },\n                    callback: \"id\"\n                },\n                name: {\n                    title: \"Name\",\n                    callback: \"name\"\n                },\n                email: {\n                    title: \"Email\",\n                    callback: \"email\"\n                },\n                role: {\n                    title: \"Role\",\n                    css: { width: '120px' },\n                    callback: (item) => (\n                        <Badge bg={\n                            item.role === 'Admin' ? 'danger' :\n                            item.role === 'Manager' ? 'warning' : 'secondary'\n                        }>\n                            {item.role}\n                        </Badge>\n                    )\n                }\n            }}\n            items={items}\n            itemCount={items.length}\n            itemsPerPage={10}\n        />\n    );\n}\n\nexport default BasicTable;"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h2", {
        className: "border-bottom pb-2 mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          bg: "primary",
          className: "me-2",
          children: "2"
        }), "Table with Checkboxes"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
        children: ["Use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "Skeleton.Table.label.checkbox()"
        }), " to add checkboxes for selecting items. The checkbox header selects/deselects all items on the current page."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
          className: "text-muted mb-3",
          children: "RESULT"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "mb-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
            variant: "info",
            className: "mb-2 py-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("small", {
              children: ["Selected: ", selectedItems.length, " item(s)"]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Table, {
          labels: {
            checkbox: _skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Table.label.checkbox(checkboxItems, selectedItems, setSelectedItems),
            product: {
              title: "Product",
              callback: "product"
            },
            price: {
              title: "Price",
              callback: function callback(item) {
                return "$".concat(item.price);
              }
            },
            stock: {
              title: "Stock",
              callback: function callback(item) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  bg: item.stock > 20 ? 'success' : item.stock > 10 ? 'warning' : 'danger',
                  children: [item.stock, " units"]
                });
              }
            }
          },
          items: checkboxItems,
          itemCount: checkboxItems.length,
          itemsPerPage: 10,
          selectedItems: selectedItems
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(CodeBlock, {
        children: "import React, { useState } from 'react';\nimport Skeleton from \"../skeleton.js\";\nimport { Badge, Alert } from 'react-bootstrap';\n\nfunction CheckboxTable() {\n    const [selectedItems, setSelectedItems] = useState([]);\n\n    const items = [\n        { id: 1, product: \"Laptop\", price: 999, stock: 15 },\n        { id: 2, product: \"Mouse\", price: 25, stock: 50 },\n        { id: 3, product: \"Keyboard\", price: 75, stock: 30 },\n        { id: 4, product: \"Monitor\", price: 350, stock: 8 }\n    ];\n\n    return (\n        <>\n            <Alert variant=\"info\" className=\"mb-2 py-2\">\n                <small>Selected: {selectedItems.length} item(s)</small>\n            </Alert>\n\n            <Skeleton.Table\n                labels={{\n                    checkbox: Skeleton.Table.label.checkbox(\n                        items,              // Current items\n                        selectedItems,      // Selected IDs\n                        setSelectedItems    // Setter function\n                    ),\n                    product: {\n                        title: \"Product\",\n                        callback: \"product\"\n                    },\n                    price: {\n                        title: \"Price\",\n                        callback: (item) => `$${item.price}`\n                    },\n                    stock: {\n                        title: \"Stock\",\n                        callback: (item) => (\n                            <Badge bg={item.stock > 20 ? 'success' : item.stock > 10 ? 'warning' : 'danger'}>\n                                {item.stock} units\n                            </Badge>\n                        )\n                    }\n                }}\n                items={items}\n                itemCount={items.length}\n                itemsPerPage={10}\n                selectedItems={selectedItems}\n            />\n        </>\n    );\n}\n\nexport default CheckboxTable;"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h2", {
        className: "border-bottom pb-2 mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          bg: "primary",
          className: "me-2",
          children: "3"
        }), "Inline Editing"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
        children: ["Enable inline editing with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "inlinePlus"
        }), " prop. Use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "Skeleton.Table.label.update()"
        }), "and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "Skeleton.Table.label.delete()"
        }), " for edit/delete actions. Click the + icon to add new items."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
          className: "text-muted mb-3",
          children: "RESULT"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Table, {
          labels: {
            edit: _skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Table.label.update(inlineEditor),
            "delete": _skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Table.label["delete"](function (item, dismissInline) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                  className: "mb-3",
                  children: ["Delete task: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("strong", {
                    children: item.title
                  }), "?"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  variant: "danger",
                  size: "sm",
                  className: "me-2",
                  onClick: function onClick() {
                    setEditableItems(editableItems.filter(function (i) {
                      return i.id !== item.id;
                    }));
                    context.toast.open("Task deleted", {
                      variant: "success",
                      title: "Deleted"
                    });
                    dismissInline();
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", {
                    className: "bi bi-trash"
                  }), " Confirm Delete"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  variant: "secondary",
                  size: "sm",
                  onClick: dismissInline,
                  children: "Cancel"
                })]
              });
            }),
            title: {
              title: "Task",
              callback: "title"
            },
            status: {
              title: "Status",
              css: {
                width: '120px'
              },
              callback: function callback(item) {
                var colors = {
                  pending: 'warning',
                  'in-progress': 'info',
                  completed: 'success'
                };
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  bg: colors[item.status],
                  children: item.status
                });
              }
            },
            priority: {
              title: "Priority",
              css: {
                width: '100px'
              },
              callback: function callback(item) {
                var colors = {
                  low: 'secondary',
                  medium: 'primary',
                  high: 'danger'
                };
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  bg: colors[item.priority],
                  children: item.priority
                });
              }
            }
          },
          items: editableItems,
          itemCount: editableItems.length,
          itemsPerPage: 10,
          inlinePlus: inlineEditor
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(CodeBlock, {
        children: "import React, { useState } from 'react';\nimport Skeleton from \"../skeleton.js\";\nimport { Button, Badge, Form, Row, Col } from 'react-bootstrap';\n\nfunction InlineEditTable() {\n    const [items, setItems] = useState([\n        { id: 1, title: \"Task 1\", status: \"pending\", priority: \"high\" },\n        { id: 2, title: \"Task 2\", status: \"completed\", priority: \"low\" },\n        { id: 3, title: \"Task 3\", status: \"in-progress\", priority: \"medium\" }\n    ]);\n\n    const inlineEditor = (item, dismissInline) => {\n        if (!item) {\n            // Add new item form\n            return (\n                <div>\n                    <h6 className=\"mb-3\">Create New Task</h6>\n                    <Form onSubmit={(e) => {\n                        e.preventDefault();\n                        const formData = new FormData(e.target);\n                        const newItem = {\n                            id: Math.max(...items.map(i => i.id)) + 1,\n                            title: formData.get('title'),\n                            status: formData.get('status'),\n                            priority: formData.get('priority')\n                        };\n                        setItems([...items, newItem]);\n                        dismissInline();\n                    }}>\n                        <Row className=\"g-2\">\n                            <Col md={4}>\n                                <Form.Control name=\"title\" placeholder=\"Title\" required />\n                            </Col>\n                            <Col md={3}>\n                                <Form.Select name=\"status\" required>\n                                    <option value=\"pending\">Pending</option>\n                                    <option value=\"in-progress\">In Progress</option>\n                                    <option value=\"completed\">Completed</option>\n                                </Form.Select>\n                            </Col>\n                            <Col md={3}>\n                                <Form.Select name=\"priority\" required>\n                                    <option value=\"low\">Low</option>\n                                    <option value=\"medium\">Medium</option>\n                                    <option value=\"high\">High</option>\n                                </Form.Select>\n                            </Col>\n                            <Col md={2}>\n                                <Button type=\"submit\" className=\"w-100\" variant=\"success\">\n                                    Create\n                                </Button>\n                            </Col>\n                        </Row>\n                    </Form>\n                </div>\n            );\n        }\n\n        // Edit existing item form\n        return (\n            <div>\n                <h6 className=\"mb-3\">Edit Task: {item.title}</h6>\n                <Form onSubmit={(e) => {\n                    e.preventDefault();\n                    const formData = new FormData(e.target);\n                    const updatedItem = {\n                        ...item,\n                        title: formData.get('title'),\n                        status: formData.get('status'),\n                        priority: formData.get('priority')\n                    };\n                    setItems(items.map(i => i.id === item.id ? updatedItem : i));\n                    dismissInline();\n                }}>\n                    <Row className=\"g-2\">\n                        <Col md={4}>\n                            <Form.Control name=\"title\" defaultValue={item.title} required />\n                        </Col>\n                        <Col md={3}>\n                            <Form.Select name=\"status\" defaultValue={item.status} required>\n                                <option value=\"pending\">Pending</option>\n                                <option value=\"in-progress\">In Progress</option>\n                                <option value=\"completed\">Completed</option>\n                            </Form.Select>\n                        </Col>\n                        <Col md={3}>\n                            <Form.Select name=\"priority\" defaultValue={item.priority} required>\n                                <option value=\"low\">Low</option>\n                                <option value=\"medium\">Medium</option>\n                                <option value=\"high\">High</option>\n                            </Form.Select>\n                        </Col>\n                        <Col md={2}>\n                            <Button type=\"submit\" className=\"w-100\" variant=\"primary\">\n                                Save\n                            </Button>\n                        </Col>\n                    </Row>\n                </Form>\n            </div>\n        );\n    };\n\n    return (\n        <Skeleton.Table\n            labels={{\n                edit: Skeleton.Table.label.update(inlineEditor),\n                delete: Skeleton.Table.label.delete((item, dismissInline) => {\n                    return (\n                        <div className=\"text-center\">\n                            <p className=\"mb-3\">Delete task: <strong>{item.title}</strong>?</p>\n                            <Button\n                                variant=\"danger\"\n                                size=\"sm\"\n                                className=\"me-2\"\n                                onClick={() => {\n                                    setItems(items.filter(i => i.id !== item.id));\n                                    dismissInline();\n                                }}\n                            >\n                                Confirm Delete\n                            </Button>\n                            <Button variant=\"secondary\" size=\"sm\" onClick={dismissInline}>\n                                Cancel\n                            </Button>\n                        </div>\n                    );\n                }),\n                title: {\n                    title: \"Task\",\n                    callback: \"title\"\n                },\n                status: {\n                    title: \"Status\",\n                    css: { width: '120px' },\n                    callback: (item) => {\n                        const colors = { pending: 'warning', 'in-progress': 'info', completed: 'success' };\n                        return <Badge bg={colors[item.status]}>{item.status}</Badge>;\n                    }\n                },\n                priority: {\n                    title: \"Priority\",\n                    css: { width: '100px' },\n                    callback: (item) => {\n                        const colors = { low: 'secondary', medium: 'primary', high: 'danger' };\n                        return <Badge bg={colors[item.priority]}>{item.priority}</Badge>;\n                    }\n                }\n            }}\n            items={items}\n            itemCount={items.length}\n            itemsPerPage={10}\n            inlinePlus={inlineEditor}\n        />\n    );\n}\n\nexport default InlineEditTable;"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h2", {
        className: "border-bottom pb-2 mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          bg: "primary",
          className: "me-2",
          children: "4"
        }), "Table with Action Panels"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
        children: ["Add dropdown action panels using ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "somePanels"
        }), " prop. Use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "Skeleton.Table.actionPanel()"
        }), "to create organized action menus with headers and dividers."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
          className: "text-muted mb-3",
          children: "RESULT"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Table, {
          labels: {
            checkbox: _skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Table.label.checkbox(actionItems, actionSelected, setActionSelected),
            order: {
              title: "Order #",
              callback: "order"
            },
            customer: {
              title: "Customer",
              callback: "customer"
            },
            total: {
              title: "Total",
              callback: function callback(item) {
                return "$".concat(item.total);
              }
            },
            status: {
              title: "Status",
              css: {
                width: '120px'
              },
              callback: function callback(item) {
                var colors = {
                  pending: 'warning',
                  shipped: 'info',
                  delivered: 'success'
                };
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  bg: colors[item.status],
                  children: item.status
                });
              }
            }
          },
          items: actionItems,
          itemCount: actionItems.length,
          itemsPerPage: 10,
          selectedItems: actionSelected,
          somePanels: [{
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", {
                className: "bi bi-filter"
              }), " Filters"]
            }),
            width: '300px',
            content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "p-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
                className: "mb-3",
                children: "Filter Orders"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
                className: "mb-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Label, {
                  children: "Status"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Select, {
                  size: "sm",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                    children: "All"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                    children: "Pending"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                    children: "Shipped"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                    children: "Delivered"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
                size: "sm",
                variant: "primary",
                className: "w-100",
                children: "Apply Filters"
              })]
            })
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", {
                className: "bi bi-gear"
              }), " Actions"]
            }),
            width: '350px',
            content: _skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Table.actionPanel({
              "Bulk Actions": [{
                label: "Export Selected (".concat(actionSelected.length, ")"),
                icon: "bi bi-download",
                callback: function callback() {
                  return context.toast.open("Exporting selected items...", {
                    variant: "info",
                    title: "Export"
                  });
                }
              }, {
                label: "Mark as Shipped",
                icon: "bi bi-truck",
                callback: function callback() {
                  return context.toast.open("Orders marked as shipped", {
                    variant: "success",
                    title: "Updated"
                  });
                }
              }],
              "Table Options": [{
                label: "Refresh",
                icon: "bi bi-arrow-clockwise",
                callback: function callback() {
                  return setActionSelected([]);
                }
              }, {
                label: "Print",
                icon: "bi bi-printer",
                callback: function callback() {
                  return window.print();
                }
              }],
              "Danger Zone": [{
                label: "Delete Selected",
                icon: "bi bi-trash",
                callback: function callback() {
                  return context.alert("This will delete selected orders", {
                    variant: "warning",
                    title: "Warning"
                  });
                }
              }]
            })
          }]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(CodeBlock, {
        children: "import React, { useState } from 'react';\nimport Skeleton from \"../skeleton.js\";\nimport { Badge, Form, Button } from 'react-bootstrap';\n\nfunction ActionPanelTable() {\n    const [items, setItems] = useState([\n        { id: 1, order: \"#1001\", customer: \"John Doe\", total: 150, status: \"shipped\" },\n        { id: 2, order: \"#1002\", customer: \"Jane Smith\", total: 250, status: \"pending\" },\n        { id: 3, order: \"#1003\", customer: \"Bob Johnson\", total: 99, status: \"delivered\" }\n    ]);\n    const [selectedItems, setSelectedItems] = useState([]);\n\n    return (\n        <Skeleton.Table\n            labels={{\n                checkbox: Skeleton.Table.label.checkbox(items, selectedItems, setSelectedItems),\n                order: {\n                    title: \"Order #\",\n                    callback: \"order\"\n                },\n                customer: {\n                    title: \"Customer\",\n                    callback: \"customer\"\n                },\n                total: {\n                    title: \"Total\",\n                    callback: (item) => `$${item.total}`\n                },\n                status: {\n                    title: \"Status\",\n                    css: { width: '120px' },\n                    callback: (item) => {\n                        const colors = { pending: 'warning', shipped: 'info', delivered: 'success' };\n                        return <Badge bg={colors[item.status]}>{item.status}</Badge>;\n                    }\n                }\n            }}\n            items={items}\n            itemCount={items.length}\n            itemsPerPage={10}\n            selectedItems={selectedItems}\n            somePanels={[\n                {\n                    label: <><i className=\"bi bi-filter\"></i> Filters</>,\n                    width: '300px',\n                    content: (\n                        <div className=\"p-3\">\n                            <h6 className=\"mb-3\">Filter Orders</h6>\n                            <Form.Group className=\"mb-2\">\n                                <Form.Label>Status</Form.Label>\n                                <Form.Select size=\"sm\">\n                                    <option>All</option>\n                                    <option>Pending</option>\n                                    <option>Shipped</option>\n                                    <option>Delivered</option>\n                                </Form.Select>\n                            </Form.Group>\n                            <Button size=\"sm\" variant=\"primary\" className=\"w-100\">\n                                Apply Filters\n                            </Button>\n                        </div>\n                    )\n                },\n                {\n                    label: <><i className=\"bi bi-gear\"></i> Actions</>,\n                    width: '350px',\n                    content: Skeleton.Table.actionPanel({\n                        \"Bulk Actions\": [\n                            {\n                                label: `Export Selected (${selectedItems.length})`,\n                                icon: \"bi bi-download\",\n                                callback: () => console.log(\"Export selected items...\")\n                            },\n                            {\n                                label: \"Mark as Shipped\",\n                                icon: \"bi bi-truck\",\n                                callback: () => console.log(\"Marking as shipped...\")\n                            }\n                        ],\n                        \"Table Options\": [\n                            {\n                                label: \"Refresh\",\n                                icon: \"bi bi-arrow-clockwise\",\n                                callback: () => setSelectedItems([])\n                            },\n                            {\n                                label: \"Print\",\n                                icon: \"bi bi-printer\",\n                                callback: () => window.print()\n                            }\n                        ],\n                        \"Danger Zone\": [\n                            {\n                                label: \"Delete Selected\",\n                                icon: \"bi bi-trash\",\n                                callback: () => console.log(\"Delete selected...\")\n                            }\n                        ]\n                    })\n                }\n            ]}\n        />\n    );\n}\n\nexport default ActionPanelTable;"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h2", {
        className: "border-bottom pb-2 mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          bg: "primary",
          className: "me-2",
          children: "5"
        }), "Standard Pagination"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
        children: ["Use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "usePagination"
        }), " hook for standard page-based navigation. Provides multiple UI components: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "PrevNext"
        }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "Buttons"
        }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "Inputbox"
        }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "Selectbox"
        }), "."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
        children: ["While ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "isPending"
        }), ", each column renders ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "itemsPerPage"
        }), " placeholder rows by default (or the number of rows already on screen, if there were any \u2014 see ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "items.length"
        }), " below) using a generic single-line bar. Give a column an optional ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "placeholder"
        }), " render function to match its real shape instead \u2014 important for any column taller than one line (a title + subtitle, an image), otherwise the table's height jumps the moment real data arrives. The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "product"
        }), " column below demonstrates this."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
          className: "text-muted mb-3",
          children: "RESULT"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Table, {
          labels: {
            id: {
              title: "ID",
              css: {
                width: '60px'
              }
            },
            product: {
              title: "Product",
              // Matches the real cell's shape (a bolded name + muted SKU
              // line) — wrapped in the same classes as the real content,
              // not a hardcoded height, so it still lines up if the base
              // font scale ever changes (no custom CSS — see CODE_CONVENTIONS.md).
              placeholder: function placeholder() {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                    className: "fw-semibold",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                      className: "placeholder col-6"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                    className: "text-muted small",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                      className: "placeholder col-4"
                    })
                  })]
                });
              },
              callback: function callback(item) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                    className: "fw-semibold",
                    children: item.product
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                    className: "text-muted small",
                    children: ["SKU-", String(item.id).padStart(4, '0')]
                  })]
                });
              }
            },
            price: {
              title: "Price",
              callback: function callback(item) {
                return "$".concat(item.price);
              }
            },
            category: {
              title: "Category",
              callback: "category"
            }
          },
          items: visibleItems5,
          itemCount: allPaginatedItems.length,
          itemsPerPage: itemsPerPage5,
          isPending: isPending5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "mt-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
            className: "text-muted mb-2",
            children: "Navigation with Buttons:"
          }), pagination5.PrevNext({
            children: pagination5.Buttons(),
            limitSwitch: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "mt-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
            className: "text-muted mb-2",
            children: "Navigation with Selectbox:"
          }), pagination5.PrevNext({
            children: pagination5.Selectbox(),
            limitSwitch: false
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "mt-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
            className: "text-muted mb-2",
            children: "Navigation with Inputbox:"
          }), pagination5.PrevNext({
            children: pagination5.Inputbox({
              text: "GO"
            }),
            limitSwitch: true
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(CodeBlock, {
        children: "import React, { useState } from 'react';\nimport Skeleton from \"../skeleton.js\";\n\nfunction ProductTable() {\n    // Generate 50 items\n    const allItems = Array.from({ length: 50 }, (_, i) => ({\n        id: i + 1,\n        product: `Product ${i + 1}`,\n        price: Math.floor(Math.random() * 1000) + 10,\n        category: ['Electronics', 'Clothing', 'Food', 'Books'][Math.floor(Math.random() * 4)]\n    }));\n\n    const [isPending, setIsPending] = useState(false);\n    const [currentPage, setCurrentPage] = useState(1);\n    const itemsPerPage = 5;\n\n    const pagination = Skeleton.usePagination({\n        isPending,\n        currentPosition: currentPage,\n        itemCount: allItems.length,\n        itemsPerPage,\n        onPositionChange: (newPage) => {\n            setIsPending(true);\n            setCurrentPage(newPage);\n            setTimeout(() => setIsPending(false), 300);\n        },\n        maxButtons: 7\n    });\n\n    // Slice items for current page\n    const visibleItems = allItems.slice(\n        (currentPage - 1) * itemsPerPage,\n        currentPage * itemsPerPage\n    );\n\n    return (\n        <>\n            <Skeleton.Table\n                labels={{\n                    id: { title: \"ID\", css: { width: '60px' }, callback: \"id\" },\n                    product: {\n                        title: \"Product\",\n                        // Optional \u2014 shapes the placeholder cell to match this\n                        // column's real (two-line) content. Without it, isPending\n                        // falls back to a generic single-line bar, which is fine\n                        // for single-line columns like \"price\"/\"category\" below.\n                        placeholder: () => (\n                            <div>\n                                <div className=\"fw-semibold\"><span className=\"placeholder col-6\"></span></div>\n                                <div className=\"text-muted small\"><span className=\"placeholder col-4\"></span></div>\n                            </div>\n                        ),\n                        callback: (item) => (\n                            <div>\n                                <div className=\"fw-semibold\">{item.product}</div>\n                                <div className=\"text-muted small\">SKU-{String(item.id).padStart(4, '0')}</div>\n                            </div>\n                        ),\n                    },\n                    price: { title: \"Price\", callback: (item) => `$${item.price}` },\n                    category: { title: \"Category\", callback: \"category\" }\n                }}\n                items={visibleItems}\n                itemCount={allItems.length}\n                itemsPerPage={itemsPerPage}\n                isPending={isPending}\n            />\n            \n            {/* Navigation with Buttons */}\n            {pagination.PrevNext({ \n                children: pagination.Buttons(),\n                limitSwitch: true\n            })}\n\n            {/* Or with Selectbox */}\n            {pagination.PrevNext({ \n                children: pagination.Selectbox()\n            })}\n\n            {/* Or with Inputbox */}\n            {pagination.PrevNext({ \n                children: pagination.Inputbox({ text: \"GO\" })\n            })}\n        </>\n    );\n}\n\nexport default ProductTable;"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h2", {
        className: "border-bottom pb-2 mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          bg: "primary",
          className: "me-2",
          children: "6"
        }), "Token-Based Pagination"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
        children: ["Use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "Skeleton.usePagination.TokenBased()"
        }), " for cursor/token-based pagination. Ideal for APIs that return next page tokens instead of page numbers."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
          className: "text-muted mb-3",
          children: "RESULT"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Table, {
          labels: {
            id: {
              title: "ID",
              callback: "id"
            },
            name: {
              title: "Name",
              callback: "name"
            },
            value: {
              title: "Value",
              callback: function callback(item) {
                return "".concat(item.value, "%");
              }
            }
          },
          items: tokenItems,
          itemCount: totalCount6,
          itemsPerPage: 5,
          isPending: isPending6
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "mt-3",
          children: tokenPagination
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "mt-3 text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
            variant: "outline-secondary",
            size: "sm",
            onClick: resetPagination,
            disabled: isPending6,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", {
              className: "bi bi-arrow-clockwise me-1"
            }), "Reset Pagination"]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(CodeBlock, {
        children: "import React, { useState, useEffect } from 'react';\nimport Skeleton from \"../skeleton.js\";\nimport { Button } from 'react-bootstrap';\n\nfunction TokenPaginatedTable() {\n    const [isPending, setIsPending] = useState(false);\n    const [items, setItems] = useState([]);\n\n    const [pagination, setPaginationToken, resetPagination] = \n        Skeleton.usePagination.TokenBased({\n            isPending,\n            onTokenChange: (token) => {\n                setIsPending(true);\n                \n                // Simulate API call\n                fetch(`/api/items?cursor=${token}`)\n                    .then(res => res.json())\n                    .then(data => {\n                        setItems(data.items);\n                        \n                        // Register this page with pagination\n                        setPaginationToken(\n                            token,              // Current page token\n                            data.nextToken,     // Next page token (or null if last page)\n                            data.itemsPerPage,  // Items per page\n                            data.items.length   // Current page item count\n                        );\n                        \n                        setIsPending(false);\n                    });\n            },\n            limitSwitch: true,\n            maxButtons: 7\n        });\n\n    // Initialize on mount\n    useEffect(() => {\n        // Initial load will trigger onTokenChange with null token\n    }, []);\n\n    return (\n        <>\n            <Skeleton.Table\n                labels={{\n                    id: { title: \"ID\", callback: \"id\" },\n                    name: { title: \"Name\", callback: \"name\" },\n                    value: { title: \"Value\", callback: (item) => `${item.value}%` }\n                }}\n                items={items}\n                itemCount={items.length}\n                itemsPerPage={5}\n                isPending={isPending}\n            />\n            \n            {/* Render pagination component */}\n            {pagination}\n\n            {/* Reset button */}\n            <div className=\"text-center mt-3\">\n                <Button \n                    variant=\"outline-secondary\" \n                    size=\"sm\" \n                    onClick={resetPagination}\n                    disabled={isPending}\n                >\n                    Reset Pagination\n                </Button>\n            </div>\n        </>\n    );\n}\n\nexport default TokenPaginatedTable;"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h2", {
        className: "border-bottom pb-2 mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          bg: "primary",
          className: "me-2",
          children: "7"
        }), "Skeleton.usePagination.DataTable Helper"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
        children: ["Use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "Skeleton.usePagination.DataTable()"
        }), " for quick in-memory pagination. It automatically slices your items array and returns both pagination component and paginated items."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
          className: "text-muted mb-3",
          children: "RESULT"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_skeleton_js__WEBPACK_IMPORTED_MODULE_8__["default"].Table, {
          labels: {
            id: {
              title: "ID",
              css: {
                width: '60px'
              }
            },
            user: {
              title: "Username",
              callback: "user"
            },
            email: {
              title: "Email",
              callback: "email"
            },
            joined: {
              title: "Joined",
              css: {
                width: '120px'
              },
              callback: "joined"
            }
          },
          items: paginatedItems7,
          itemCount: allDataTableItems.length,
          itemsPerPage: itemsPerPage7,
          isPending: isPending7
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "mt-3",
          children: pagination7.PrevNext({
            children: pagination7.Buttons(),
            limitSwitch: true
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(CodeBlock, {
        children: "import React, { useState } from 'react';\nimport Skeleton from \"../skeleton.js\";\n\nfunction UserTable() {\n    // Generate 30 users\n    const date = String(Math.floor(Math.random() * 28) + 1);\n    const month = String(Math.floor(Math.random() * 12) + 1);\n    const allItems = Array.from({ length: 30 }, (_, i) => ({\n        id: i + 1,\n        user: `User ${i + 1}`,\n        email: `user${i + 1}@example.com`,\n        joined: `2024-${month.padStart(2, '0')}-${date.padStart(2, '0')}`\n    }));\n\n    const [isPending, setIsPending] = useState(false);\n    const [currentPage, setCurrentPage] = useState(1);\n    const itemsPerPage = 6;\n\n    // DataTable helper returns [pagination, paginatedItems]\n    const [pagination, paginatedItems] = Skeleton.usePagination.DataTable({\n        isPending,\n        items: allItems,                // Full items array\n        currentPosition: currentPage,\n        itemsPerPage: itemsPerPage,\n        onPositionChange: (newPage) => {\n            setIsPending(true);\n            setCurrentPage(newPage);\n            setTimeout(() => setIsPending(false), 300);\n        },\n        maxButtons: 9\n    });\n\n    return (\n        <>\n            {/* paginatedItems is automatically sliced! */}\n            <Skeleton.Table\n                labels={{\n                    id: { title: \"ID\", css: { width: '60px' }, callback: \"id\" },\n                    user: { title: \"Username\", callback: \"user\" },\n                    email: { title: \"Email\", callback: \"email\" },\n                    joined: { title: \"Joined\", css: { width: '120px' }, callback: \"joined\" }\n                }}\n                items={paginatedItems}\n                itemCount={allItems.length}\n                itemsPerPage={itemsPerPage}\n                isPending={isPending}\n            />\n\n            {/* Use pagination components */}\n            {pagination.PrevNext({ \n                children: pagination.Buttons(),\n                limitSwitch: true \n            })}\n\n            {/* Alternative: just buttons */}\n            {/* {pagination.Buttons()} */}\n\n            {/* Or selectbox */}\n            {/* {pagination.Selectbox()} */}\n        </>\n    );\n}\n\nexport default UserTable;"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h2", {
        className: "border-bottom pb-2 mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          bg: "secondary",
          className: "me-2",
          children: "API"
        }), "API Reference"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
        className: "mt-4 mb-3",
        children: "Table Props"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "table-responsive mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                style: {
                  width: "25%"
                },
                children: "Prop"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                style: {
                  width: "20%"
                },
                children: "Type"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                style: {
                  width: "15%"
                },
                children: "Default"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                children: "Description"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "labels"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Object"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: '{}'
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("td", {
                children: ["Column definitions. Each key is a column, value can be:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("small", {
                  className: "text-muted",
                  children: ["\u2022 String: Column title", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), "\u2022 Object: ", '{', "title, css, callback", '}']
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "items"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Array"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "[]"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Array of data items to display"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "itemCount"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Number"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "0"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Total number of items (for displaying count)"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "itemsPerPage"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Number"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "20"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Number of items per page (affects loading skeleton)"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "isPending"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Boolean"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "false"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Shows loading skeleton when true"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "selectedItems"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Array"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "[]"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Array of selected item IDs (for checkbox state)"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "inlinePlus"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Function"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "null"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("td", {
                children: ["Callback for inline editing/adding. Receives:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("small", {
                  className: "text-muted",
                  children: ["\u2022 item: Item being edited (null for new)", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), "\u2022 dismissInline: Function to close inline editor"]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "somePanels"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Array"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "[]"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("td", {
                children: ["Action panel dropdowns in table header. Each panel:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("small", {
                  className: "text-muted",
                  children: ["\u2022 label: React element", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), "\u2022 width: Panel width (default: '400px')", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), "\u2022 content: React element"]
                })]
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
        className: "mt-5 mb-3",
        children: "Skeleton.Table.label Methods"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "table-responsive mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                style: {
                  width: "40%"
                },
                children: "Method"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                children: "Description"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "Skeleton.Table.label.checkbox(items, selected, setSelected, keyname)"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("td", {
                children: ["Creates checkbox column with select-all header", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("small", {
                  className: "text-muted",
                  children: ["\u2022 items: Current page items", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), "\u2022 selected: Selected IDs array", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), "\u2022 setSelected: State setter", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), "\u2022 keyname: ID field name (default: \"id\")"]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "Skeleton.Table.label.update(callback)"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("td", {
                children: ["Creates edit icon column", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("small", {
                  className: "text-muted",
                  children: "\u2022 callback: Function(item, dismissInline) returning JSX"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "Skeleton.Table.label.delete(callback)"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("td", {
                children: ["Creates delete icon column", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("small", {
                  className: "text-muted",
                  children: "\u2022 callback: Function(item, dismissInline) returning JSX"
                })]
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
        className: "mt-5 mb-3",
        children: "Skeleton.Table.actionPanel()"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "table-responsive mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                style: {
                  width: "40%"
                },
                children: "Method"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                children: "Description"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("tbody", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "Skeleton.Table.actionPanel(config)"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("td", {
                children: ["Creates action menu with sections", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("small", {
                  className: "text-muted",
                  children: ["\u2022 config: Object with section names as keys", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), "\u2022 Each section: Array of ", '{', " label, icon, callback ", '}']
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
        className: "mt-5 mb-3",
        children: "usePagination Hook"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "table-responsive mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                style: {
                  width: "30%"
                },
                children: "Parameter"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                style: {
                  width: "20%"
                },
                children: "Type"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                children: "Description"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "isPending"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Boolean"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Disables pagination controls"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "currentPosition"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Number"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Current page number (1-indexed)"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "itemCount"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Number"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Total number of items"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "itemsPerPage"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Number"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Items per page"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "onPositionChange"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Function"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Callback(newPage) when page changes"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "maxButtons"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Number"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Number of page buttons (default: 11)"
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
        className: "mt-4 mb-2",
        children: "Returns Object:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "table-responsive mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                style: {
                  width: "35%"
                },
                children: "Component"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                children: "Description"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("code", {
                  children: ["PrevNext(", '{', " children, limitSwitch ", '}', ")"]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Wrapper with prev/next buttons"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "Buttons()"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Numbered page buttons"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "Selectbox()"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Dropdown page selector"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("code", {
                  children: ["Inputbox(", '{', " text ", '}', ")"]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Manual page input"
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
        className: "mt-5 mb-3",
        children: "Skeleton.usePagination.TokenBased"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "table-responsive mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                style: {
                  width: "30%"
                },
                children: "Parameter"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                children: "Description"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "isPending"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Boolean - disables controls"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "onTokenChange"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Function(token) - called when page changes"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "limitSwitch"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Boolean - show first/last buttons (default: true)"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "maxButtons"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Number - max page buttons (default: 9)"
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
        className: "mt-4 mb-2",
        children: "Returns Array: [PaginationComponent, setPaginationToken, resetPagination]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "table-responsive mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                style: {
                  width: "30%"
                },
                children: "Return Value"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                children: "Description"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "PaginationComponent"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "JSX element to render"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "setPaginationToken"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("td", {
                children: ["Function(currentToken, nextToken, itemsPerPage, itemCount)", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("small", {
                  className: "text-muted",
                  children: "Call after fetching data to register page"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "resetPagination"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Function() - resets to first page"
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
        className: "mt-5 mb-3",
        children: "Skeleton.usePagination.DataTable"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "table-responsive",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                style: {
                  width: "30%"
                },
                children: "Parameter"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                children: "Description"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("tbody", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "Same as usePagination"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("td", {
                children: ["Plus: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
                  children: "items"
                }), " array (full dataset)"]
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h6", {
        className: "mt-3 mb-2",
        children: "Returns Array: [PaginationObject, PaginatedItems]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("small", {
        className: "text-muted",
        children: "PaginationObject same as usePagination return. PaginatedItems is automatically sliced array."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "alert alert-info border-0 mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", {
          className: "bi bi-info-circle me-2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("strong", {
          children: "Note:"
        }), " For client-side pagination of static data, use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "Skeleton.usePagination.DataTable"
        }), ". For server-side pagination, use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "usePagination"
        }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("code", {
          children: "Skeleton.usePagination.TokenBased"
        }), "."]
      })]
    })]
  });
}

/***/ }

}]);
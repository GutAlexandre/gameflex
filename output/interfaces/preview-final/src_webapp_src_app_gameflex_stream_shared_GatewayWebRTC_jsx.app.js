"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_stream_shared_GatewayWebRTC_jsx"],{

/***/ "./src/webapp/src/app/gameflex/stream/libs/webrtc-stats.js"
/*!*****************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/libs/webrtc-stats.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fallbackRateDeltas: () => (/* binding */ fallbackRateDeltas),
/* harmony export */   nextCounters: () => (/* binding */ nextCounters),
/* harmony export */   nextFallbackCounters: () => (/* binding */ nextFallbackCounters),
/* harmony export */   parseFallbackControl: () => (/* binding */ parseFallbackControl),
/* harmony export */   rateDeltas: () => (/* binding */ rateDeltas),
/* harmony export */   scanWebRTCReport: () => (/* binding */ scanWebRTCReport),
/* harmony export */   smoothFallbackLatency: () => (/* binding */ smoothFallbackLatency)
/* harmony export */ });
// Shared WebRTC getStats() harvesting for the streaming pages — the exact
// same report scan and rate math used by remote-play (hooks/
// use-streaming-connection.js) and streamex (gameflex/streamex/
// Streaming.jsx), extracted so the two consumers can't drift apart. Pure
// functions only: each caller keeps its own state wiring.

// scanWebRTCReport walks one getStats() report and returns the raw
// counters both panels need. Frames/loss/jitter only come from the VIDEO
// inbound stream; latency from the nominated candidate pair.
function scanWebRTCReport(report) {
  var inboundBytes = 0;
  var outboundBytes = 0;
  var videoInboundBytes = 0;
  var frameWidth = null;
  var frameHeight = null;
  var framesDecoded = null;
  var latencyMs = null;
  var videoPacketsLost = null;
  var videoJitterMs = null;
  report.forEach(function (entry) {
    if (entry.type === "inbound-rtp" && !entry.isRemote) {
      var bytes = typeof entry.bytesReceived === "number" ? entry.bytesReceived : 0;
      inboundBytes += bytes;
      if (entry.kind === "video") {
        videoInboundBytes += bytes;
        if (typeof entry.frameWidth === "number") frameWidth = entry.frameWidth;
        if (typeof entry.frameHeight === "number") frameHeight = entry.frameHeight;
        if (typeof entry.framesDecoded === "number") framesDecoded = entry.framesDecoded;
        if (typeof entry.packetsLost === "number") videoPacketsLost = entry.packetsLost;
        if (typeof entry.jitter === "number") videoJitterMs = entry.jitter * 1000;
      }
    }
    if (entry.type === "outbound-rtp" && !entry.isRemote && typeof entry.bytesSent === "number") {
      outboundBytes += entry.bytesSent;
    }
    if (entry.type === "candidate-pair" && entry.state === "succeeded" && entry.nominated && typeof entry.currentRoundTripTime === "number") {
      latencyMs = entry.currentRoundTripTime * 1000;
    }
  });
  return {
    inboundBytes: inboundBytes,
    outboundBytes: outboundBytes,
    videoInboundBytes: videoInboundBytes,
    frameWidth: frameWidth,
    frameHeight: frameHeight,
    framesDecoded: framesDecoded,
    latencyMs: latencyMs,
    videoPacketsLost: videoPacketsLost,
    videoJitterMs: videoJitterMs
  };
}

// rateDeltas turns two harvests into per-second rates (kbps) and fps.
// previous is the caller's snapshot of a prior scan (the shape returned by
// nextCounters); null when the elapsed window is not positive.
function rateDeltas(previous, now, harvested) {
  var elapsedSeconds = (now - previous.timestamp) / 1000;
  if (elapsedSeconds <= 0) return null;
  var downloadKbps = Math.max(0, (harvested.inboundBytes - previous.inboundBytes) * 8 / elapsedSeconds / 1000);
  var uploadKbps = Math.max(0, (harvested.outboundBytes - previous.outboundBytes) * 8 / elapsedSeconds / 1000);
  var videoBitrateKbps = Math.max(0, (harvested.videoInboundBytes - previous.videoInboundBytes) * 8 / elapsedSeconds / 1000);
  var fps = null;
  if (harvested.framesDecoded !== null && previous.framesDecoded !== null) {
    var framesDiff = Math.max(0, harvested.framesDecoded - previous.framesDecoded);
    fps = framesDiff / elapsedSeconds;
    if (!Number.isFinite(fps) || fps < 0) fps = null;
  }
  return {
    downloadKbps: downloadKbps,
    uploadKbps: uploadKbps,
    videoBitrateKbps: videoBitrateKbps,
    fps: fps
  };
}

// nextCounters is the snapshot to store for the NEXT tick — timestamps the
// scan and keeps only what rateDeltas needs.
function nextCounters(now, harvested, previousFrames) {
  var _ref, _harvested$framesDeco;
  return {
    timestamp: now,
    inboundBytes: harvested.inboundBytes,
    outboundBytes: harvested.outboundBytes,
    videoInboundBytes: harvested.videoInboundBytes,
    framesDecoded: (_ref = (_harvested$framesDeco = harvested.framesDecoded) !== null && _harvested$framesDeco !== void 0 ? _harvested$framesDeco : previousFrames) !== null && _ref !== void 0 ? _ref : 0
  };
}

// The HTTPS fallback has no RTCPeerConnection report: these are application
// counters collected where GameSocket receives/sends its framed payloads and
// where WebCodecs outputs a decoded frame. They deliberately exclude HTTP,
// TLS and base64 bridge overhead, which the browser does not expose.
function fallbackRateDeltas(previous, now, current) {
  var elapsedSeconds = (now - previous.timestamp) / 1000;
  if (elapsedSeconds <= 0) return null;
  return {
    downloadKbps: Math.max(0, (current.downloadBytes - previous.downloadBytes) * 8 / elapsedSeconds / 1000),
    uploadKbps: Math.max(0, (current.uploadBytes - previous.uploadBytes) * 8 / elapsedSeconds / 1000),
    videoBitrateKbps: Math.max(0, (current.videoBytes - previous.videoBytes) * 8 / elapsedSeconds / 1000),
    fps: Math.max(0, (current.decodedFrames - previous.decodedFrames) / elapsedSeconds)
  };
}
function nextFallbackCounters(now, current) {
  return {
    timestamp: now,
    downloadBytes: current.downloadBytes,
    uploadBytes: current.uploadBytes,
    videoBytes: current.videoBytes,
    decodedFrames: current.decodedFrames
  };
}
function parseFallbackControl(data) {
  if (typeof data !== "string") return null;
  try {
    return JSON.parse(data);
  } catch (_unused) {
    return {
      type: data
    };
  }
}
function smoothFallbackLatency(previous, sample) {
  if (typeof sample !== "number" || !Number.isFinite(sample)) return previous;
  var safeSample = Math.max(0, sample);
  return previous == null ? safeSample : previous * 0.8 + safeSample * 0.2;
}

/***/ },

/***/ "./src/webapp/src/app/gameflex/stream/shared/GatewayWebRTC.jsx"
/*!*********************************************************************!*\
  !*** ./src/webapp/src/app/gameflex/stream/shared/GatewayWebRTC.jsx ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GatewayWebRTC: () => (/* binding */ GatewayWebRTC)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_gateway_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/gateway.js */ "./src/webapp/src/app/gameflex/api/gateway.js");
/* harmony import */ var _libs_GameSocket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/GameSocket.js */ "./src/webapp/src/app/gameflex/libs/GameSocket.js");
/* harmony import */ var _libs_webrtcLatencyHints_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/webrtcLatencyHints.js */ "./src/webapp/src/app/gameflex/libs/webrtcLatencyHints.js");
/* harmony import */ var _libs_webrtc_stats_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/webrtc-stats.js */ "./src/webapp/src/app/gameflex/stream/libs/webrtc-stats.js");
/* harmony import */ var _gateway_helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gateway-helpers.js */ "./src/webapp/src/app/gameflex/stream/shared/gateway-helpers.js");
/* harmony import */ var _libs_serverBase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/serverBase.js */ "./src/webapp/src/app/gameflex/libs/serverBase.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;







// GatewayVideoScreen — the ONE way any platform (retro-gaming, streamex,
// remote-play) pulls video/audio from gateway-webrtc. Extracted from
// use-retro-streaming-connection.js (the cleanest of the three duplicated
// implementations this replaces) — see docs/wiggly-rolling-plum plan
// "Composant GatewayVideoScreen partagé" for the full context on why three
// near-identical copies of this existed.
//
// The negotiation is two-step, not one, and that's why this is an
// IMPERATIVE-handle component (a ref), not a plain declarative
// `<GatewayVideoScreen sessionId />`:
//   1. createViewer(...) asks the gateway for a viewer+offer SDP. This can
//      happen the moment a platform knows its sessionId — no dependency on
//      anything else. The viewerId it returns has to ride the PLATFORM's
//      own "start"/"join"/session-open message (the child needs it to map
//      gateway input to the right port/pad), so the caller needs it back
//      before attach().
//   2. attach() finishes the job (RTCPeerConnection, ontrack, the ICE
//      loop, the answer) — only once the platform's own protocol has
//      acknowledged the session is ready to receive media (retro's
//      "started" message, streamex's "session" message, etc.). Calling it
//      before that ack would just mean setRemoteDescription-ing an offer
//      the child hasn't necessarily finished registering yet.
//
// What this component does NOT know about: save-states, cheats, slots,
// chain-window, PS5 control hand-off — anything past "get me the pixels
// and a way to send/receive DataChannel bytes" belongs to each platform's
// own (much smaller) hook layered on top via onMessage/sendMessage.

// How long frames may stop advancing before the picture is called dead. Well
// above a stutter, well below the patience of someone staring at a frozen
// screen wondering whether it is them.

var VIDEO_SILENCE_MS = 6000;
var PUBLIC_FALLBACK_DELAY_MS = 3000;
function concatBytes(parts) {
  var size = parts.reduce(function (total, part) {
    return total + part.byteLength;
  }, 0);
  var joined = new Uint8Array(size);
  var offset = 0;
  var _iterator = _createForOfIteratorHelper(parts),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var part = _step.value;
      joined.set(part, offset);
      offset += part.byteLength;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return joined;
}

// Annex-B can carry one or several NAL units, with either three- or
// four-byte start codes. Only the type is needed here: 5 = IDR, 7 = SPS,
// 8 = PPS.
function annexBNalTypes(data) {
  var types = [];
  for (var i = 0; i + 3 < data.byteLength; i += 1) {
    var header = -1;
    if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 1) {
      header = i + 3;
    } else if (i + 4 < data.byteLength && data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0 && data[i + 3] === 1) {
      header = i + 4;
    }
    if (header >= 0 && header < data.byteLength) {
      types.push(data[header] & 0x1f);
      i = header;
    }
  }
  return types;
}
function emptyFallbackStats() {
  return {
    downloadBytes: 0,
    uploadBytes: 0,
    videoBytes: 0,
    decodedFrames: 0,
    width: null,
    height: null,
    latencyMs: null
  };
}
function messageByteLength(data) {
  if (typeof data === "string") {
    return new TextEncoder().encode(data).byteLength;
  }
  if (data instanceof Blob) {
    return data.size;
  }
  if (ArrayBuffer.isView(data)) {
    return data.byteLength;
  }
  if (data instanceof ArrayBuffer) {
    return data.byteLength;
  }
  return 0;
}
var GatewayWebRTC = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function GatewayWebRTC(_ref, ref) {
  var sessionId = _ref.sessionId,
    _ref$muted = _ref.muted,
    muted = _ref$muted === void 0 ? false : _ref$muted,
    _ref$keepMuted = _ref.keepMuted,
    keepMuted = _ref$keepMuted === void 0 ? false : _ref$keepMuted,
    _ref$combinedAudioVid = _ref.combinedAudioVideo,
    combinedAudioVideo = _ref$combinedAudioVid === void 0 ? false : _ref$combinedAudioVid,
    _ref$onFirstPicture = _ref.onFirstPicture,
    onFirstPicture = _ref$onFirstPicture === void 0 ? null : _ref$onFirstPicture,
    _ref$host = _ref.host,
    host = _ref$host === void 0 ? null : _ref$host,
    onConnectionStateChange = _ref.onConnectionStateChange,
    onStatsUpdate = _ref.onStatsUpdate,
    onMessage = _ref.onMessage,
    children = _ref.children,
    _ref$onFirstVideoTrac = _ref.onFirstVideoTrack,
    onFirstVideoTrack = _ref$onFirstVideoTrac === void 0 ? null : _ref$onFirstVideoTrac,
    _ref$onVideoSilent = _ref.onVideoSilent,
    onVideoSilent = _ref$onVideoSilent === void 0 ? null : _ref$onVideoSilent,
    _ref$onIceConnectionS = _ref.onIceConnectionStateChange,
    onIceConnectionStateChange = _ref$onIceConnectionS === void 0 ? null : _ref$onIceConnectionS,
    _ref$onAutoplayForced = _ref.onAutoplayForcedMute,
    onAutoplayForcedMute = _ref$onAutoplayForced === void 0 ? null : _ref$onAutoplayForced,
    _ref$onQuality = _ref.onQuality,
    onQuality = _ref$onQuality === void 0 ? null : _ref$onQuality,
    _ref$onIntro = _ref.onIntro,
    onIntro = _ref$onIntro === void 0 ? null : _ref$onIntro;
  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var fallbackCanvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var pcRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // Keyed by DataChannel label — "input" is the one every platform uses
  // today; remote-play also opens its own "keepalive" ping/pong channel
  // alongside it (see sendMessage/onMessage's label param below).
  var dataChannelsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
  var gatewayRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var detachAudioPlayRetryRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var detachVideoPlayRetryRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var hasVideoTrackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var combinedAudioVideoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(combinedAudioVideo);
  combinedAudioVideoRef.current = combinedAudioVideo;
  var onFirstPictureRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onFirstPicture);
  onFirstPictureRef.current = onFirstPicture;

  // Kept as refs, not effect deps — attach()/ontrack are wired once per
  // connection attempt and must always call the LATEST callback/prop
  // without tearing down and re-running the whole negotiation whenever a
  // parent re-render hands in a fresh closure (same pattern already used
  // elsewhere in this codebase, e.g. handleStreamHealthCheck's refs).
  var onConnectionStateChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onConnectionStateChange);
  onConnectionStateChangeRef.current = onConnectionStateChange;
  var onStatsUpdateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onStatsUpdate);
  onStatsUpdateRef.current = onStatsUpdate;
  var onMessageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onMessage);
  onMessageRef.current = onMessage;
  var onQualityRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onQuality);
  onQualityRef.current = onQuality;
  var onIntroRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onIntro);
  onIntroRef.current = onIntro;
  var keepMutedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(keepMuted);
  keepMutedRef.current = keepMuted;
  var onFirstVideoTrackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onFirstVideoTrack);
  onFirstVideoTrackRef.current = onFirstVideoTrack;
  var videoSilenceTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // Le rappel « une image vient d'être affichée » se réarme lui-même : il
  // faut donc de quoi l'annuler, sinon il survit à la piste qu'il observait.
  var detachFrameCallbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // L'origine chez qui vit le viewer courant — null quand c'est le nôtre.
  var viewerHostRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // LE DERNIER VIEWER DE CE COMPOSANT, gardé après qu'il est rendu : le
  // suivant le cite (`resume`), et la passerelle ne lui rejoue pas l'intro
  // s'il était arrivé au jeu (chantier 35). Un nouveau composant — une page
  // qu'on ouvre — n'en a pas, et la voit.
  var lastViewerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // Lu au moment de négocier, pas en dépendance : l'appelant construit
  // l'objet dans son rendu.
  var hostRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(host);
  hostRef.current = host;
  // Le socket de négociation du viewer courant, le temps qu'elle dure.
  var signalSocketRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var fallbackSocketRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var fallbackDecoderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var fallbackTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var fallbackConfigRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var fallbackTimestampRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var fallbackConnectedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var fallbackStatsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(emptyFallbackStats());
  var firstPictureReportedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var onVideoSilentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onVideoSilent);
  onVideoSilentRef.current = onVideoSilent;
  var onIceConnectionStateChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onIceConnectionStateChange);
  onIceConnectionStateChangeRef.current = onIceConnectionStateChange;
  var onAutoplayForcedMuteRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onAutoplayForcedMute);
  onAutoplayForcedMuteRef.current = onAutoplayForcedMute;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isStatsEnabled = _useState2[0],
    setIsStatsEnabled = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    fallbackVisible = _useState4[0],
    setFallbackVisible = _useState4[1];
  var previousStatsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var statsIntervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var setStatsMonitoring = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (enabled) {
    setIsStatsEnabled(enabled);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isStatsEnabled) {
      var _onStatsUpdateRef$cur;
      if (statsIntervalRef.current !== null) {
        clearInterval(statsIntervalRef.current);
        statsIntervalRef.current = null;
      }
      previousStatsRef.current = null;
      (_onStatsUpdateRef$cur = onStatsUpdateRef.current) === null || _onStatsUpdateRef$cur === void 0 || _onStatsUpdateRef$cur.call(onStatsUpdateRef, null);
      return undefined;
    }
    var tick = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var now, _previousStatsRef$cur, _onStatsUpdateRef$cur2, _rates$downloadKbps, _rates$uploadKbps, _rates$videoBitrateKb, _rates$fps, current, previous, rates, peer, _previousStatsRef$cur2, _onStatsUpdateRef$cur3, _harvested$latencyMs, report, harvested, _previous, downloadKbps, uploadKbps, fps, _rates, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              now = performance.now();
              if (!fallbackConnectedRef.current) {
                _context.n = 1;
                break;
              }
              current = fallbackStatsRef.current;
              previous = ((_previousStatsRef$cur = previousStatsRef.current) === null || _previousStatsRef$cur === void 0 ? void 0 : _previousStatsRef$cur.transport) === "fallback" ? previousStatsRef.current : null;
              rates = previous ? (0,_libs_webrtc_stats_js__WEBPACK_IMPORTED_MODULE_4__.fallbackRateDeltas)(previous, now, current) : null;
              previousStatsRef.current = _objectSpread({
                transport: "fallback"
              }, (0,_libs_webrtc_stats_js__WEBPACK_IMPORTED_MODULE_4__.nextFallbackCounters)(now, current));
              (_onStatsUpdateRef$cur2 = onStatsUpdateRef.current) === null || _onStatsUpdateRef$cur2 === void 0 || _onStatsUpdateRef$cur2.call(onStatsUpdateRef, {
                downloadBytes: current.downloadBytes,
                uploadBytes: current.uploadBytes,
                downloadKbps: (_rates$downloadKbps = rates === null || rates === void 0 ? void 0 : rates.downloadKbps) !== null && _rates$downloadKbps !== void 0 ? _rates$downloadKbps : null,
                uploadKbps: (_rates$uploadKbps = rates === null || rates === void 0 ? void 0 : rates.uploadKbps) !== null && _rates$uploadKbps !== void 0 ? _rates$uploadKbps : null,
                videoBitrateKbps: (_rates$videoBitrateKb = rates === null || rates === void 0 ? void 0 : rates.videoBitrateKbps) !== null && _rates$videoBitrateKb !== void 0 ? _rates$videoBitrateKb : null,
                fps: (_rates$fps = rates === null || rates === void 0 ? void 0 : rates.fps) !== null && _rates$fps !== void 0 ? _rates$fps : null,
                resolution: current.width && current.height ? {
                  width: current.width,
                  height: current.height
                } : null,
                latencyMs: current.latencyMs,
                latencyKind: "bridge-rtt"
              });
              return _context.a(2);
            case 1:
              peer = pcRef.current;
              if (peer) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              _context.p = 2;
              _context.n = 3;
              return peer.getStats();
            case 3:
              report = _context.v;
              harvested = (0,_libs_webrtc_stats_js__WEBPACK_IMPORTED_MODULE_4__.scanWebRTCReport)(report);
              _previous = ((_previousStatsRef$cur2 = previousStatsRef.current) === null || _previousStatsRef$cur2 === void 0 ? void 0 : _previousStatsRef$cur2.transport) === "webrtc" ? previousStatsRef.current : null;
              downloadKbps = null;
              uploadKbps = null;
              fps = null;
              if (_previous) {
                _rates = (0,_libs_webrtc_stats_js__WEBPACK_IMPORTED_MODULE_4__.rateDeltas)(_previous, now, harvested);
                if (_rates) {
                  downloadKbps = _rates.downloadKbps;
                  uploadKbps = _rates.uploadKbps;
                  fps = _rates.fps;
                }
              }
              previousStatsRef.current = _objectSpread({
                transport: "webrtc"
              }, (0,_libs_webrtc_stats_js__WEBPACK_IMPORTED_MODULE_4__.nextCounters)(now, harvested, _previous === null || _previous === void 0 ? void 0 : _previous.framesDecoded));
              (_onStatsUpdateRef$cur3 = onStatsUpdateRef.current) === null || _onStatsUpdateRef$cur3 === void 0 || _onStatsUpdateRef$cur3.call(onStatsUpdateRef, {
                downloadKbps: downloadKbps != null && downloadKbps >= 0 ? downloadKbps : null,
                uploadKbps: uploadKbps != null && uploadKbps >= 0 ? uploadKbps : null,
                videoBitrateKbps: downloadKbps != null ? downloadKbps : null,
                fps: fps != null && Number.isFinite(fps) ? fps : null,
                resolution: harvested.frameWidth && harvested.frameHeight ? {
                  width: harvested.frameWidth,
                  height: harvested.frameHeight
                } : null,
                latencyMs: (_harvested$latencyMs = harvested.latencyMs) !== null && _harvested$latencyMs !== void 0 ? _harvested$latencyMs : null
              });
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4]]);
      }));
      return function tick() {
        return _ref2.apply(this, arguments);
      };
    }();
    tick();
    statsIntervalRef.current = setInterval(tick, 1000);
    return function () {
      if (statsIntervalRef.current !== null) {
        clearInterval(statsIntervalRef.current);
        statsIntervalRef.current = null;
      }
    };
  }, [isStatsEnabled]);
  var closeFallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    clearTimeout(fallbackTimerRef.current);
    fallbackTimerRef.current = null;
    var socket = fallbackSocketRef.current;
    fallbackSocketRef.current = null;
    if (socket && socket.readyState < 2) {
      socket.close();
    }
    var decoder = fallbackDecoderRef.current;
    fallbackDecoderRef.current = null;
    if (decoder && decoder.state !== "closed") {
      decoder.close();
    }
    fallbackConfigRef.current = [];
    fallbackTimestampRef.current = 0;
    fallbackConnectedRef.current = false;
    setFallbackVisible(false);
  }, []);
  var reportFirstPicture = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _onFirstPictureRef$cu;
    if (firstPictureReportedRef.current) {
      return;
    }
    firstPictureReportedRef.current = true;
    (_onFirstPictureRef$cu = onFirstPictureRef.current) === null || _onFirstPictureRef$cu === void 0 || _onFirstPictureRef$cu.call(onFirstPictureRef);
  }, []);
  var openFallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var gateway = gatewayRef.current;
    if (!gateway || fallbackSocketRef.current || typeof globalThis.VideoDecoder === "undefined" || typeof globalThis.EncodedVideoChunk === "undefined") {
      return;
    }
    var decoder;
    try {
      decoder = new globalThis.VideoDecoder({
        output: function output(frame) {
          try {
            var _canvas$getContext;
            var canvas = fallbackCanvasRef.current;
            var width = frame.displayWidth || frame.codedWidth;
            var height = frame.displayHeight || frame.codedHeight;
            if (!canvas || !width || !height) {
              return;
            }
            if (canvas.width !== width || canvas.height !== height) {
              canvas.width = width;
              canvas.height = height;
            }
            (_canvas$getContext = canvas.getContext("2d", {
              alpha: false
            })) === null || _canvas$getContext === void 0 || _canvas$getContext.drawImage(frame, 0, 0, width, height);
            var fallbackStats = fallbackStatsRef.current;
            fallbackStats.decodedFrames += 1;
            fallbackStats.width = width;
            fallbackStats.height = height;
            setFallbackVisible(true);
            reportFirstPicture();
            if (!fallbackConnectedRef.current) {
              var _onVideoSilentRef$cur, _onConnectionStateCha;
              fallbackConnectedRef.current = true;
              (_onVideoSilentRef$cur = onVideoSilentRef.current) === null || _onVideoSilentRef$cur === void 0 || _onVideoSilentRef$cur.call(onVideoSilentRef, false);
              (_onConnectionStateCha = onConnectionStateChangeRef.current) === null || _onConnectionStateCha === void 0 || _onConnectionStateCha.call(onConnectionStateChangeRef, "connected");
            }
          } finally {
            frame.close();
          }
        },
        error: function error() {
          // A corrupt frame must not tear down the page. The normal
          // SessionStream deadline can create a fresh viewer.
        }
      });
      decoder.configure({
        codec: "avc1.42E01F",
        optimizeForLatency: true,
        hardwareAcceleration: "prefer-hardware"
      });
    } catch (_unused2) {
      var _decoder;
      (_decoder = decoder) === null || _decoder === void 0 || _decoder.close();
      return;
    }
    fallbackDecoderRef.current = decoder;
    fallbackConfigRef.current = [];
    fallbackTimestampRef.current = 0;
    fallbackStatsRef.current = emptyFallbackStats();
    previousStatsRef.current = null;
    var socket = (0,_libs_GameSocket_js__WEBPACK_IMPORTED_MODULE_2__.gameSocket)((0,_api_gateway_js__WEBPACK_IMPORTED_MODULE_1__.gatewayViewerFallbackUrl)(gateway.sessionId, gateway.viewerId, viewerHostRef.current));
    socket.binaryType = "arraybuffer";
    fallbackSocketRef.current = socket;
    socket.onmessage = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(event) {
        var control, pong, buffer, view, kind, durationNs, payload, nalTypes, key, data, duration, timestamp;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!(fallbackSocketRef.current !== socket || fallbackDecoderRef.current !== decoder)) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              fallbackStatsRef.current.downloadBytes += messageByteLength(event.data);
              if (!(typeof event.data === "string")) {
                _context2.n = 2;
                break;
              }
              control = (0,_libs_webrtc_stats_js__WEBPACK_IMPORTED_MODULE_4__.parseFallbackControl)(event.data);
              if ((control === null || control === void 0 ? void 0 : control.type) === "fallback-ping") {
                pong = JSON.stringify(_objectSpread(_objectSpread({}, control), {}, {
                  type: "fallback-pong"
                }));
                socket.send(pong);
                fallbackStatsRef.current.uploadBytes += messageByteLength(pong);
              } else if ((control === null || control === void 0 ? void 0 : control.type) === "fallback-latency") {
                fallbackStatsRef.current.latencyMs = (0,_libs_webrtc_stats_js__WEBPACK_IMPORTED_MODULE_4__.smoothFallbackLatency)(fallbackStatsRef.current.latencyMs, control.latencyMs);
              }
              return _context2.a(2);
            case 2:
              buffer = event.data;
              if (!(buffer instanceof Blob)) {
                _context2.n = 4;
                break;
              }
              _context2.n = 3;
              return buffer.arrayBuffer();
            case 3:
              buffer = _context2.v;
            case 4:
              if (!(!(buffer instanceof ArrayBuffer) || buffer.byteLength < 10 || decoder.state !== "configured")) {
                _context2.n = 5;
                break;
              }
              return _context2.a(2);
            case 5:
              view = new DataView(buffer);
              kind = view.getUint8(0);
              if (!(kind !== 0)) {
                _context2.n = 6;
                break;
              }
              return _context2.a(2);
            case 6:
              durationNs = view.getBigUint64(1, false);
              payload = new Uint8Array(buffer, 9);
              fallbackStatsRef.current.videoBytes += payload.byteLength;
              nalTypes = annexBNalTypes(payload);
              if (!(durationNs === 0n && nalTypes.some(function (type) {
                return type === 7 || type === 8;
              }))) {
                _context2.n = 7;
                break;
              }
              fallbackConfigRef.current.push(payload.slice());
              return _context2.a(2);
            case 7:
              key = nalTypes.includes(5);
              data = key && fallbackConfigRef.current.length > 0 ? concatBytes([].concat(_toConsumableArray(fallbackConfigRef.current), [payload])) : payload;
              if (key) {
                fallbackConfigRef.current = [];
              }
              duration = Math.max(1, Number(durationNs / 1000n));
              try {
                timestamp = fallbackTimestampRef.current;
                decoder.decode(new globalThis.EncodedVideoChunk({
                  type: key ? "key" : "delta",
                  timestamp: timestamp,
                  duration: duration,
                  data: data
                }));
                fallbackTimestampRef.current += duration;
              } catch (_unused3) {
                // Decoder backpressure or a frame arriving during cleanup: the
                // next IDR/SPS/PPS sequence can recover without killing input.
              }
            case 8:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }();
    socket.onclose = function () {
      if (fallbackSocketRef.current === socket) {
        closeFallback();
      }
    };
  }, [closeFallback, reportFirstPicture]);
  var cleanup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _detachAudioPlayRetry, _signalSocketRef$curr, _detachVideoPlayRetry, _detachFrameCallbackR, _videoRef$current, _audioRef$current;
    closeFallback();
    (_detachAudioPlayRetry = detachAudioPlayRetryRef.current) === null || _detachAudioPlayRetry === void 0 || _detachAudioPlayRetry.call(detachAudioPlayRetryRef);
    (_signalSocketRef$curr = signalSocketRef.current) === null || _signalSocketRef$curr === void 0 || _signalSocketRef$curr.close();
    signalSocketRef.current = null;
    if (gatewayRef.current) {
      (0,_api_gateway_js__WEBPACK_IMPORTED_MODULE_1__.gatewayViewerDelete)(gatewayRef.current.sessionId, gatewayRef.current.viewerId, viewerHostRef.current);
      gatewayRef.current = null;
    }
    var _iterator2 = _createForOfIteratorHelper(dataChannelsRef.current.values()),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var channel = _step2.value;
        channel.close();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    dataChannelsRef.current.clear();
    hasVideoTrackRef.current = false;
    if (pcRef.current) {
      pcRef.current.close();
      pcRef.current = null;
    }
    (_detachVideoPlayRetry = detachVideoPlayRetryRef.current) === null || _detachVideoPlayRetry === void 0 || _detachVideoPlayRetry.call(detachVideoPlayRetryRef);
    clearInterval(videoSilenceTimerRef.current);
    (_detachFrameCallbackR = detachFrameCallbackRef.current) === null || _detachFrameCallbackR === void 0 || _detachFrameCallbackR.call(detachFrameCallbackRef);
    if ((_videoRef$current = videoRef.current) !== null && _videoRef$current !== void 0 && _videoRef$current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(function (tr) {
        return tr.stop();
      });
      videoRef.current.srcObject = null;
    }
    if ((_audioRef$current = audioRef.current) !== null && _audioRef$current !== void 0 && _audioRef$current.srcObject) {
      audioRef.current.srcObject.getTracks().forEach(function (tr) {
        return tr.stop();
      });
      audioRef.current.srcObject = null;
    }
  }, [closeFallback]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      return cleanup();
    };
  }, [cleanup]);

  // Step 1 — see the component doc above.
  //
  // sessionId param — an override for the `sessionId` prop, for a caller
  // whose session id isn't known until partway through its OWN connect
  // flow (remote-play's owner offer only learns it from
  // streamingService.createOffer's response, deep inside connect() —
  // unlike retro/streamex, which always know it up front and never pass
  // this). Falls back to the prop, so retro/streamex are unaffected.
  var createViewer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var _gateway;
    var _ref5,
      _ref5$hasInput,
      hasInput,
      username,
      sessionIdOverride,
      _ref5$quality,
      quality,
      _ref5$preview,
      preview,
      _ref5$launch,
      launch,
      effectiveSessionId,
      _signalSocketRef$curr2,
      gateway,
      _hostRef$current,
      _hostRef$current2,
      _args3 = arguments,
      _t2;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _ref5 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, _ref5$hasInput = _ref5.hasInput, hasInput = _ref5$hasInput === void 0 ? false : _ref5$hasInput, username = _ref5.username, sessionIdOverride = _ref5.sessionId, _ref5$quality = _ref5.quality, quality = _ref5$quality === void 0 ? null : _ref5$quality, _ref5$preview = _ref5.preview, preview = _ref5$preview === void 0 ? false : _ref5$preview, _ref5$launch = _ref5.launch, launch = _ref5$launch === void 0 ? null : _ref5$launch;
          effectiveSessionId = sessionIdOverride !== null && sessionIdOverride !== void 0 ? sessionIdOverride : sessionId;
          closeFallback();
          firstPictureReportedRef.current = false;
          // One component instance owns ONE viewer at a time: a platform
          // reconnect calls createViewer again on the SAME mounted
          // component (retro's spectate→start transition, a retry loop),
          // and the gateway keeps a viewer's bridge + UDP ICE socket
          // until it is explicitly deleted — overwriting the ref without
          // deleting leaked a socket per reconnect, and the gateway's
          // ICE port range filled up completely (9201-9300, 2026-08-24:
          // no video anywhere until the gateway was restarted). Release
          // the superseded viewer first.
          if (gatewayRef.current) {
            (_signalSocketRef$curr2 = signalSocketRef.current) === null || _signalSocketRef$curr2 === void 0 || _signalSocketRef$curr2.close();
            signalSocketRef.current = null;
            (0,_api_gateway_js__WEBPACK_IMPORTED_MODULE_1__.gatewayViewerDelete)(gatewayRef.current.sessionId, gatewayRef.current.viewerId, viewerHostRef.current);
            gatewayRef.current = null;
          }
          gateway = null;
          _context3.p = 1;
          // L'hôte de CE viewer, retenu au moment où il naît : c'est
          // chez lui qu'il faudra le rendre, et la page aura peut-être
          // déjà rendu son adresse à ce moment-là (voir
          // gatewayViewerDelete).
          viewerHostRef.current = ((_hostRef$current = hostRef.current) === null || _hostRef$current === void 0 ? void 0 : _hostRef$current.origin) || (0,_libs_serverBase_js__WEBPACK_IMPORTED_MODULE_6__.streamHostOrigin)();
          _context3.n = 2;
          return (0,_api_gateway_js__WEBPACK_IMPORTED_MODULE_1__.gatewayViewerOffer)(effectiveSessionId, !!hasInput, username, ((_hostRef$current2 = hostRef.current) === null || _hostRef$current2 === void 0 ? void 0 : _hostRef$current2.origin) || null, {
            quality: quality,
            preview: preview,
            launch: launch,
            resume: lastViewerIdRef.current
          });
        case 2:
          gateway = _context3.v;
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t2 = _context3.v;
          gateway = null;
        case 4:
          if ((_gateway = gateway) !== null && _gateway !== void 0 && _gateway.viewerId) {
            _context3.n = 5;
            break;
          }
          gatewayRef.current = null;
          return _context3.a(2, null);
        case 5:
          gatewayRef.current = {
            sessionId: effectiveSessionId,
            viewerId: gateway.viewerId,
            sdp: gateway.sdp
          };
          lastViewerIdRef.current = gateway.viewerId;
          return _context3.a(2, {
            viewerId: gateway.viewerId,
            sdp: gateway.sdp
          });
      }
    }, _callee3, null, [[1, 3]]);
  })), [closeFallback, sessionId]);

  // Step 2 — see the component doc above. Uses the SAME offer SDP
  // createViewer already got (the platform's own "started"/ack message
  // never carries a fresh one) — nothing to pass in.
  var attach = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    var _hostRef$current3;
    var gateway, _onConnectionStateCha2, _yield$buildIceServer, iceServers, pc;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          gateway = gatewayRef.current;
          if (gateway) {
            _context5.n = 1;
            break;
          }
          (_onConnectionStateCha2 = onConnectionStateChangeRef.current) === null || _onConnectionStateCha2 === void 0 || _onConnectionStateCha2.call(onConnectionStateChangeRef, "failed");
          return _context5.a(2, false);
        case 1:
          closeFallback();
          if (pcRef.current) {
            pcRef.current.close();
            pcRef.current = null;
          }
          _context5.n = 2;
          return (0,_gateway_helpers_js__WEBPACK_IMPORTED_MODULE_5__.buildIceServers)(hostRef.current);
        case 2:
          _yield$buildIceServer = _context5.v;
          iceServers = _yield$buildIceServer.iceServers;
          // One PeerConnection shape for every platform. A relay-only policy
          // and per-platform constructor options used to be opt-in props that
          // only remote-play passed; both were dropped (2026-08-24) — remote
          // connections work with or without TURN on all three platforms, and
          // max-bundle / rtcp-mux are Chrome's own defaults anyway.
          pc = new RTCPeerConnection({
            iceServers: iceServers
          });
          pcRef.current = pc;
          clearTimeout(fallbackTimerRef.current);
          fallbackTimerRef.current = setTimeout(function () {
            if (pcRef.current === pc && pc.connectionState !== "connected") {
              openFallback();
            }
          }, PUBLIC_FALLBACK_DELAY_MS);
          pc.ontrack = function (event) {
            var _detachAudioPlayRetry2;
            // See webrtcLatencyHints.js's doc — without this the browser's
            // own jitter buffer can hold video back by a couple of
            // seconds before settling.
            (0,_libs_webrtcLatencyHints_js__WEBPACK_IMPORTED_MODULE_3__.applyReceiverLatencyHints)(event.receiver);
            if (event.track.kind === "video") {
              var _detachVideoPlayRetry2, _detachFrameCallbackR2;
              var video = videoRef.current;
              if (!video) {
                // The <video> unmounted while a track was still in flight
                // (SessionStream → StreamingShell transition, viewer
                // cleanup) — the track belongs to a peer being torn down,
                // there is nothing to attach it to.
                return;
              }
              var _stream = video.srcObject || new MediaStream();
              _stream.addTrack(event.track);
              if (video.srcObject !== _stream) {
                video.srcObject = _stream;
              }

              // …and ASK it to play. autoPlay alone is a request the
              // browser may refuse, and nothing here ever checked. The audio
              // path has had this retry for months; the video path relied on
              // an attribute and lost the argument silently.
              var attemptVideoPlay = function attemptVideoPlay() {
                if (video.paused) {
                  video.play()["catch"](function () {});
                }
              };
              attemptVideoPlay();
              (_detachVideoPlayRetry2 = detachVideoPlayRetryRef.current) === null || _detachVideoPlayRetry2 === void 0 || _detachVideoPlayRetry2.call(detachVideoPlayRetryRef);
              video.addEventListener("canplay", attemptVideoPlay);
              video.addEventListener("waiting", attemptVideoPlay);
              detachVideoPlayRetryRef.current = function () {
                video.removeEventListener("canplay", attemptVideoPlay);
                video.removeEventListener("waiting", attemptVideoPlay);
                detachVideoPlayRetryRef.current = null;
              };
              if (!hasVideoTrackRef.current) {
                var _onFirstVideoTrackRef;
                hasVideoTrackRef.current = true;
                (_onFirstVideoTrackRef = onFirstVideoTrackRef.current) === null || _onFirstVideoTrackRef === void 0 || _onFirstVideoTrackRef.call(onFirstVideoTrackRef);
              }

              // Is the picture still MOVING? A dead source keeps the track,
              // the connection and the last frame's dimensions — which is
              // why a console someone switched off still reads 1920x1080
              // while the frame counter, the bitrate and the FPS all sit at
              // zero (reported live 2026-08-25). Only the count of decoded
              // frames tells the difference between a still picture and a
              // stopped one.
              //
              // Polled rather than event-driven on purpose: a MediaStream
              // does not reliably fire `waiting` when its remote peer simply
              // stops sending, and silence is the one thing that emits
              // nothing by definition.
              clearInterval(videoSilenceTimerRef.current);
              // DEUX TÉMOINS, PAS UN.
              //
              // Le compteur d'images décodées est le plus précis — et il
              // n'est pas fiable partout. Sur le navigateur d'un téléphone,
              // il se fige alors que la lecture continue : la page annonçait
              // alors « la console a cessé d'envoyer la vidéo » par-dessus
              // un jeu manifestement en train de tourner, puis quittait la
              // partie vingt-cinq secondes plus tard (signalé en jouant à
              // Crash Team Racing, 2026-09-08 — capture à l'appui).
              //
              // `currentTime` est le second témoin : un élément média qui
              // lit avance son horloge, sur tous les navigateurs, sans
              // exception ni préfixe. Il est moins fin — il avance aussi
              // pendant une image figée — mais c'est exactement ce qu'on
              // veut ici : la question n'est pas « l'image bouge-t-elle ? »
              // mais « la console envoie-t-elle encore quelque chose ? ».
              //
              // On ne déclare le silence que si les DEUX se taisent. Un
              // faux positif coûte une partie ; un faux négatif coûte
              // quelques secondes d'écran noir avant que le vrai signal
              // (la connexion qui tombe) ne prenne le relais.
              var readFrames = function readFrames() {
                var _ref7, _video$getVideoPlayba, _video$getVideoPlayba2;
                return (_ref7 = (_video$getVideoPlayba = (_video$getVideoPlayba2 = video.getVideoPlaybackQuality) === null || _video$getVideoPlayba2 === void 0 ? void 0 : _video$getVideoPlayba2.call(video).totalVideoFrames) !== null && _video$getVideoPlayba !== void 0 ? _video$getVideoPlayba : video.webkitDecodedFrameCount) !== null && _ref7 !== void 0 ? _ref7 : 0;
              };
              var readClock = function readClock() {
                return Number.isFinite(video.currentTime) ? video.currentTime : 0;
              };
              var lastFrames = readFrames();
              var lastClock = readClock();
              var lastAdvanceAt = Date.now();

              // LE TÉMOIN QUI RÉPOND VRAIMENT À LA QUESTION POSÉE.
              //
              // Les deux témoins ci-dessus sont côté AFFICHAGE : le compteur
              // d'images décodées de l'élément, et son horloge. Ils se
              // taisent aussi quand c'est le navigateur qui arrête de
              // présenter — onglet en arrière-plan, compositeur qui bride,
              // plateforme qui ne tient pas ces compteurs à jour. Le message
              // qu'on affiche alors accuse la console d'avoir cessé
              // d'émettre, ce qui est un tout autre diagnostic.
              //
              // Vu en vrai le 2026-09-10 : « la console a cessé d'envoyer la
              // vidéo » par-dessus une partie PSP qui tournait, panneau de
              // statistiques à l'appui — 1435 kbps en réception, 60 images
              // par seconde décodées, 60 en émulation.
              //
              // Le récepteur, lui, sait ce qui ARRIVE. S'il avance, la
              // console émet : quoi qu'il arrive à l'écran, ce message-là est
              // faux. On lui donne donc un droit de veto.
              var inboundFrames = -1;
              var inboundBytes = -1;
              var inboundAdvanceAt = Date.now();
              // Tant qu'aucun relevé n'a abouti, le récepteur ne vote pas :
              // sans statistiques (vieux navigateur, connexion fermée), on
              // retombe sur les témoins de l'élément plutôt que de ne plus
              // jamais rien signaler.
              var inboundSeen = false;
              var sampleInbound = /*#__PURE__*/function () {
                var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
                  var peer, frames, bytes, _t3;
                  return _regenerator().w(function (_context4) {
                    while (1) switch (_context4.p = _context4.n) {
                      case 0:
                        peer = pcRef.current;
                        if (peer !== null && peer !== void 0 && peer.getStats) {
                          _context4.n = 1;
                          break;
                        }
                        return _context4.a(2);
                      case 1:
                        _context4.p = 1;
                        frames = 0;
                        bytes = 0;
                        _context4.n = 2;
                        return peer.getStats();
                      case 2:
                        _context4.v.forEach(function (entry) {
                          var isVideo = entry.kind === "video" || entry.mediaType === "video";
                          if (entry.type === "inbound-rtp" && isVideo) {
                            frames += entry.framesDecoded || 0;
                            bytes += entry.bytesReceived || 0;
                          }
                        });
                        inboundSeen = true;
                        if (frames > inboundFrames || bytes > inboundBytes) {
                          inboundFrames = frames;
                          inboundBytes = bytes;
                          inboundAdvanceAt = Date.now();
                        }
                        _context4.n = 4;
                        break;
                      case 3:
                        _context4.p = 3;
                        _t3 = _context4.v;
                      case 4:
                        return _context4.a(2);
                    }
                  }, _callee4, null, [[1, 3]]);
                }));
                return function sampleInbound() {
                  return _ref8.apply(this, arguments);
                };
              }();
              // NOTHING is reported until the picture has moved at least
              // once. A stream that has not started yet is silent too, and
              // calling that a stopped console is what happened to remote-
              // play: a PS5 waits seconds for its first IDR, so the counter
              // sat at zero long enough to trip this, while retro and
              // streamex decode within a second and never did (reported live
              // 2026-08-25). Silence BEFORE the first frame is a wait, and
              // the page already has a phase for that.
              var seenMotion = false;
              var reportedSilent = false;

              // UN TROISIÈME TÉMOIN, ET LE SEUL QUI NE DÉDUISE RIEN.
              //
              // Les deux autres comptent ou chronomètrent, et se trompent
              // chacun à leur façon : le compteur d'images se fige sur
              // certains navigateurs de téléphone, et l'horloge d'un élément
              // média avance ou non selon l'implémentation quand la source
              // est un MediaStream. Le faux message est revenu malgré les
              // deux réunis (signalé le 2026-09-09, capture d'un jeu
              // manifestement en train de tourner).
              //
              // `requestVideoFrameCallback` ne répond pas à la même
              // question : le navigateur appelle ce rappel QUAND IL VIENT
              // D'AFFICHER UNE IMAGE. Il n'y a rien à comparer, rien qui
              // puisse se figer — si le rappel arrive, une image est passée
              // à l'écran. C'est exactement la question posée, et cette API
              // existe pour elle.
              //
              // Les deux anciens témoins restent, en repli, pour les
              // navigateurs qui ne l'ont pas : un témoin imparfait vaut
              // mieux que pas de témoin.
              //
              // ET LA PREMIÈRE IMAGE LÈVE TOUT VERDICT DE SILENCE, y compris
              // celui d'un attachement PRÉCÉDENT. `reportedSilent` est propre
              // à cet attachement : quand l'ancien avait annoncé le silence
              // pendant une reconnexion (la reprise de manette coupe le flux
              // plus de six secondes), le nouveau ne le levait jamais — le
              // message « stopped sending video » restait sur un jeu qui
              // tournait, et la page quittait la partie vingt-cinq secondes
              // plus tard (vu sur l'écran fixe de Spider-Man 3, PS3,
              // 2026-10-08).
              var markPresented = function markPresented() {
                lastAdvanceAt = Date.now();
                if (!seenMotion) {
                  var _onVideoSilentRef$cur2;
                  seenMotion = true;
                  reportFirstPicture();
                  (_onVideoSilentRef$cur2 = onVideoSilentRef.current) === null || _onVideoSilentRef$cur2 === void 0 || _onVideoSilentRef$cur2.call(onVideoSilentRef, false);
                }
                if (reportedSilent) {
                  var _onVideoSilentRef$cur3;
                  reportedSilent = false;
                  (_onVideoSilentRef$cur3 = onVideoSilentRef.current) === null || _onVideoSilentRef$cur3 === void 0 || _onVideoSilentRef$cur3.call(onVideoSilentRef, false);
                }
              };
              (_detachFrameCallbackR2 = detachFrameCallbackRef.current) === null || _detachFrameCallbackR2 === void 0 || _detachFrameCallbackR2.call(detachFrameCallbackRef);
              if (typeof video.requestVideoFrameCallback === "function") {
                var handle = null;
                var _onPresented = function onPresented() {
                  markPresented();
                  handle = video.requestVideoFrameCallback(_onPresented);
                };
                handle = video.requestVideoFrameCallback(_onPresented);
                detachFrameCallbackRef.current = function () {
                  if (handle !== null) {
                    var _video$cancelVideoFra;
                    (_video$cancelVideoFra = video.cancelVideoFrameCallback) === null || _video$cancelVideoFra === void 0 || _video$cancelVideoFra.call(video, handle);
                    handle = null;
                  }
                  detachFrameCallbackRef.current = null;
                };
              }
              videoSilenceTimerRef.current = setInterval(function () {
                var _onVideoSilentRef$cur7;
                // A PAUSED element decodes nothing — of course the counter
                // stops. Calling that a dead console accused the source of
                // a choice the viewer made, put "the console has stopped
                // sending video" on screen and then left the session ten
                // seconds later (reported live 2026-08-25). This became
                // reachable the day `controls` was added to the element:
                // pausing went from impossible to one click.
                //
                // The clock is pushed forward rather than merely skipped,
                // so resuming does not immediately fire on a timestamp
                // from before the pause.
                // Lancé sans attendre : son résultat sert au tour suivant,
                // et un relevé lent ne doit pas décaler l'horloge de ce
                // détecteur.
                void sampleInbound();
                if (video.paused || video.ended) {
                  lastFrames = readFrames();
                  lastClock = readClock();
                  lastAdvanceAt = Date.now();
                  if (reportedSilent) {
                    var _onVideoSilentRef$cur4;
                    reportedSilent = false;
                    (_onVideoSilentRef$cur4 = onVideoSilentRef.current) === null || _onVideoSilentRef$cur4 === void 0 || _onVideoSilentRef$cur4.call(onVideoSilentRef, false);
                  }
                  return;
                }
                var frames = readFrames();
                var clock = readClock();
                var now = Date.now();
                if (frames > lastFrames || clock > lastClock) {
                  lastFrames = frames;
                  lastClock = clock;
                  lastAdvanceAt = now;
                  // LA PREMIÈRE IMAGE RÉELLEMENT DÉCODÉE — pas la piste
                  // qui arrive, pas la connexion qui s'établit. C'est le
                  // seul événement qui prouve qu'il y a une image, et le
                  // seul sur lequel un appelant puisse renoncer à
                  // réessayer.
                  if (!seenMotion) {
                    var _onVideoSilentRef$cur5;
                    reportFirstPicture();
                    // Lève le verdict d'un attachement précédent —
                    // voir markPresented.
                    (_onVideoSilentRef$cur5 = onVideoSilentRef.current) === null || _onVideoSilentRef$cur5 === void 0 || _onVideoSilentRef$cur5.call(onVideoSilentRef, false);
                  }
                  seenMotion = true;
                }

                // LE RÉCEPTEUR TRANCHE, DANS LES DEUX SENS, QUAND IL RÉPOND.
                //
                // Il n'avait qu'un veto : des octets qui arrivent encore
                // veulent dire que la source émet, et l'écran a un autre
                // problème. Mais l'inverse manquait — un témoin de
                // l'élément qui avance suffisait à tout taire. Sur le S25
                // (2026-10-17, #397), la connexion d'une partie PSP est
                // tombée quand le réseau mobile a changé les adresses du
                // téléphone : plus un octet reçu, et pourtant aucun silence
                // déclaré, donc aucune reprise — « Waiting for the video… »
                // jusqu'à ce que le joueur quitte. L'horloge de l'élément y
                // continuait d'avancer, comme le décrit le second témoin.
                // Reproduit dans l'émulateur en lui faisant faire de même
                // (tools/webtest/phone-netchange.js, CLOCK=avance).
                //
                // La source ne se tait jamais d'elle-même : le moteur
                // envoie chaque trame, la capture X une image toutes les
                // 400 ms au moins sur un écran fixe, les serveurs à cadence
                // fixe. Un récepteur muet est donc une connexion morte.
                //
                // Sans relevé abouti (vieux navigateur), les témoins de
                // l'élément décident seuls, comme avant.
                var quiet = inboundSeen ? now - inboundAdvanceAt > VIDEO_SILENCE_MS : now - lastAdvanceAt > VIDEO_SILENCE_MS;
                if (!quiet) {
                  if (reportedSilent) {
                    var _onVideoSilentRef$cur6;
                    reportedSilent = false;
                    (_onVideoSilentRef$cur6 = onVideoSilentRef.current) === null || _onVideoSilentRef$cur6 === void 0 || _onVideoSilentRef$cur6.call(onVideoSilentRef, false);
                  }
                  return;
                }

                // Long enough that a hiccup or a tab in the background is
                // not called a dead console.
                if (!seenMotion || reportedSilent) {
                  return;
                }
                reportedSilent = true;
                (_onVideoSilentRef$cur7 = onVideoSilentRef.current) === null || _onVideoSilentRef$cur7 === void 0 || _onVideoSilentRef$cur7.call(onVideoSilentRef, true);
              }, 2000);
              return;
            }

            // Le son sur SON PROPRE élément par défaut — deux pistes
            // indépendantes, deux horloges, pas de latence importée. En mode
            // combiné il rejoint l'élément vidéo, parce que la source d'en
            // face n'en fait qu'une (voir combinedAudioVideo, plus haut).
            // Politique d'autoplay identique dans les deux cas : démarrer
            // muet, jouer, remonter le volume une fois la lecture partie.
            var target = combinedAudioVideoRef.current ? videoRef.current : audioRef.current;
            if (!target) {
              return;
            }

            // Mute BEFORE handing the element a stream. autoPlay fires as
            // soon as srcObject lands, and an UNMUTED autoplay with no user
            // activation is blocked outright — the "playing" event never
            // comes, so the unmute/fade-in below never runs and the audio
            // stays silent for good. Muted autoplay is always allowed, so
            // this ordering is what makes the whole sequence reachable.
            var originalVolume = target.volume;
            target.muted = true;
            target.volume = 0;
            var stream = target.srcObject || new MediaStream();
            stream.addTrack(event.track);
            if (target.srcObject !== stream) {
              target.srcObject = stream;
            }

            // Shared fallback for both autoplay-block paths below: resume
            // muted (muted playback is never blocked) and tell the caller
            // the truth so its mute switch can follow.
            var resumeMutedAfterAutoplayBlock = function resumeMutedAfterAutoplayBlock() {
              var _onAutoplayForcedMute;
              target.muted = true;
              target.volume = 0;
              target.play()["catch"](function () {});
              (_onAutoplayForcedMute = onAutoplayForcedMuteRef.current) === null || _onAutoplayForcedMute === void 0 || _onAutoplayForcedMute.call(onAutoplayForcedMuteRef);
            };
            var attemptPlay = function attemptPlay() {
              if (target.paused) {
                target.play()["catch"](function () {});
              }
            };
            (_detachAudioPlayRetry2 = detachAudioPlayRetryRef.current) === null || _detachAudioPlayRetry2 === void 0 || _detachAudioPlayRetry2.call(detachAudioPlayRetryRef);
            detachAudioPlayRetryRef.current = function () {
              target.removeEventListener("canplay", attemptPlay);
              target.removeEventListener("waiting", attemptPlay);
              detachAudioPlayRetryRef.current = null;
            };
            var hasStartedPlaying = false;
            target.addEventListener("playing", function () {
              if (hasStartedPlaying) {
                return;
              }
              hasStartedPlaying = true;
              if (keepMutedRef.current) {
                // Stay muted, but put the VOLUME back: ontrack zeroed
                // it for the fade-in that we are skipping here, and a
                // caller that later unmutes (the user flipping the
                // sound switch) would otherwise get a perfectly
                // unmuted element playing at volume 0.
                target.volume = originalVolume > 0 ? originalVolume : 1;
                return;
              }

              // NE PAS TENTER CE QUE LE NAVIGATEUR VA REFUSER.
              //
              // Sans geste de l'utilisateur sur ce document, démuter un
              // élément démarré en lecture automatique fait PAUSER
              // Chrome, avec son propre avertissement dans la console
              // (« Unmuting failed and the element was paused
              // instead… »). Le repli ci-dessous rattrapait le coup,
              // mais au prix d'un à-coup et d'un message alarmant pour
              // une situation parfaitement normale — signalé comme une
              // erreur le 2026-09-10, sur une session qui marchait.
              //
              // `navigator.userActivation` répond à la question avant
              // qu'on la pose. Sans activation, on reste muet tout de
              // suite et l'interrupteur de son dit la vérité : le
              // premier appui du joueur vaudra activation, et le son
              // suivra à ce moment-là.
              if (navigator.userActivation && navigator.userActivation.hasBeenActive === false) {
                resumeMutedAfterAutoplayBlock();
                return;
              }

              // Le navigateur peut quand même refuser (une activation
              // ancienne ne vaut pas toujours), donc le filet reste :
              // on tente, et si la lecture est rejetée on remet en muet
              // et on relance — le flux continue.
              target.muted = false;
              var unmutePlay = target.play();
              if (unmutePlay && typeof unmutePlay["catch"] === "function") {
                unmutePlay["catch"](function () {
                  return resumeMutedAfterAutoplayBlock();
                });
              }

              // Chrome's pause path rejects NO promise — it just
              // pauses the element. Watch for that pause within a
              // short window (a later user-driven pause must not be
              // mistaken for the block) and fall back the same way.
              var _onPausedAfterUnmute = function onPausedAfterUnmute() {
                window.clearTimeout(pauseWatchTimeout);
                target.removeEventListener("pause", _onPausedAfterUnmute);
                resumeMutedAfterAutoplayBlock();
              };
              target.addEventListener("pause", _onPausedAfterUnmute);
              var pauseWatchTimeout = window.setTimeout(function () {
                target.removeEventListener("pause", _onPausedAfterUnmute);
              }, 800);
              var targetVolume = originalVolume > 0 ? originalVolume : 1;
              var startTime = performance.now();
              var fadeDurationMs = 500;
              var _fadeIn = function fadeIn(timestamp) {
                var progress = Math.min(1, (timestamp - startTime) / fadeDurationMs);
                target.volume = Math.max(0, Math.min(1, targetVolume * progress));
                if (progress < 1) {
                  requestAnimationFrame(_fadeIn);
                }
              };
              requestAnimationFrame(_fadeIn);
            }, {
              once: true
            });
            target.addEventListener("loadedmetadata", attemptPlay, {
              once: true
            });
            target.addEventListener("canplay", attemptPlay);
            target.addEventListener("waiting", attemptPlay);
            attemptPlay();
          };

          // A device-streaming platform (remote-play — PS5 today, other
          // consoles later) can open more than one labeled channel (e.g. a
          // "keepalive" ping/pong channel alongside "input") — retro/streamex
          // only ever open one ("input"), so onMessageRef's default label
          // param keeps their call sites unchanged.
          pc.ondatachannel = function (event) {
            var channel = event.channel;
            dataChannelsRef.current.set(channel.label, channel);
            channel.onclose = function () {
              return dataChannelsRef.current["delete"](channel.label);
            };
            // LE CANAL DE CONTRÔLE DU DOUBLE FLUX (chantier 31) : ce que la
            // passerelle envoie à ce spectateur, et s'il peut avoir le 540p.
            if (channel.label === "control") {
              channel.onmessage = function (msg) {
                try {
                  var state = JSON.parse(msg.data);
                  if ((state === null || state === void 0 ? void 0 : state.type) === "quality") {
                    var _onQualityRef$current;
                    (_onQualityRef$current = onQualityRef.current) === null || _onQualityRef$current === void 0 || _onQualityRef$current.call(onQualityRef, {
                      current: state.current,
                      want: state.want,
                      available: !!state.available
                    });
                  } else if ((state === null || state === void 0 ? void 0 : state.type) === "intro") {
                    var _onIntroRef$current;
                    (_onIntroRef$current = onIntroRef.current) === null || _onIntroRef$current === void 0 || _onIntroRef$current.call(onIntroRef, state.phase, state.game || null, state.expect || null);
                  }
                } catch (_unused6) {
                  // Un message illisible ne dit rien.
                }
              };
              return;
            }
            channel.onmessage = function (msg) {
              var _onMessageRef$current;
              return (_onMessageRef$current = onMessageRef.current) === null || _onMessageRef$current === void 0 ? void 0 : _onMessageRef$current.call(onMessageRef, msg.data, channel.label);
            };
          };
          pc.onconnectionstatechange = function () {
            var _onConnectionStateCha3;
            if (pc.connectionState === "connected") {
              closeFallback();
            } else if (fallbackConnectedRef.current) {
              // The framed-H264 transport is presenting pictures. Keep the
              // peer alive so WebRTC can still take priority if it connects,
              // but do not let its failed/closed state overwrite the
              // fallback's `connected` state in the platform hook.
              return;
            }
            (_onConnectionStateCha3 = onConnectionStateChangeRef.current) === null || _onConnectionStateCha3 === void 0 || _onConnectionStateCha3.call(onConnectionStateChangeRef, pc.connectionState);
          };
          pc.oniceconnectionstatechange = function () {
            var _onIceConnectionState;
            (_onIceConnectionState = onIceConnectionStateChangeRef.current) === null || _onIceConnectionState === void 0 || _onIceConnectionState.call(onIceConnectionStateChangeRef, pc.iceConnectionState);
          };

          // LA NÉGOCIATION SUR UN SEUL SOCKET — voir answerGatewayOffer. Le
          // socket se garde le temps qu'elle dure, pour être fermé si la page
          // s'en va avant.
          _context5.n = 3;
          return (0,_gateway_helpers_js__WEBPACK_IMPORTED_MODULE_5__.answerGatewayOffer)(pc, gateway, ((_hostRef$current3 = hostRef.current) === null || _hostRef$current3 === void 0 ? void 0 : _hostRef$current3.origin) || null, function (socket) {
            var _signalSocketRef$curr3;
            (_signalSocketRef$curr3 = signalSocketRef.current) === null || _signalSocketRef$curr3 === void 0 || _signalSocketRef$curr3.close();
            signalSocketRef.current = socket;
            socket.addEventListener("close", function () {
              if (signalSocketRef.current === socket) {
                signalSocketRef.current = null;
              }
            });
          });
        case 3:
          return _context5.a(2, true);
      }
    }, _callee5);
  })), [closeFallback, openFallback, reportFirstPicture]);

  // label — defaults to "input" (the one channel retro/streamex ever
  // open); a device-streaming platform opening a second channel (e.g.
  // "keepalive") passes its own label. A message for a channel that
  // isn't open yet/anymore is silently dropped, same as before.
  // Rend VRAI quand le message est réellement parti.
  //
  // Il ne rendait rien, et un canal fermé était donc indistinguable d'un
  // envoi réussi. L'appelant qui avait un second chemin (le WebSocket de sa
  // plateforme) ne pouvait pas savoir qu'il fallait le prendre : il rendait
  // la main en croyant avoir envoyé. C'est ce qui a coûté toute une soirée
  // de manette morte sur streamex (2026-09-07) — le canal n'était pas
  // ouvert, le WebSocket l'était, et personne ne le lui a demandé.
  var sendMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data) {
    var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "input";
    var channel = dataChannelsRef.current.get(label);
    if ((channel === null || channel === void 0 ? void 0 : channel.readyState) === "open") {
      channel.send(data);
      return true;
    }
    var fallback = fallbackSocketRef.current;
    if ((fallback === null || fallback === void 0 ? void 0 : fallback.readyState) === WebSocket.OPEN) {
      fallback.send(data);
      fallbackStatsRef.current.uploadBytes += messageByteLength(data);
      return true;
    }
    return false;
  }, []);

  // renegotiate — for a device pushing a FRESH offer outside the normal
  // gateway ICE-restart-on-disconnect path (a console's own signaling
  // channel telling the browser "here's a new offer, the network
  // changed"). Applies it to the SAME RTCPeerConnection this component
  // already owns, re-applies latency hints to the resulting receivers
  // (a plain renegotiation doesn't refire ontrack for tracks that
  // already existed), and returns the answer SDP for the caller to push
  // back wherever the offer came from — NOT the negotiation socket, since
  // this offer didn't come from the gateway's own viewer-offer route.
  // Retro/streamex have no such path and never call this.
  var renegotiate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(offerSdp) {
      var pc, answer, answerSdp;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            pc = pcRef.current;
            if (pc) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2, null);
          case 1:
            _context6.n = 2;
            return pc.setRemoteDescription({
              type: "offer",
              sdp: offerSdp
            });
          case 2:
            _context6.n = 3;
            return pc.createAnswer();
          case 3:
            answer = _context6.v;
            answerSdp = (0,_gateway_helpers_js__WEBPACK_IMPORTED_MODULE_5__.applyLowLatencyAnswerSdp)(answer.sdp);
            _context6.n = 4;
            return pc.setLocalDescription({
              type: answer.type,
              sdp: answerSdp
            });
          case 4:
            pc.getReceivers().forEach(function (receiver) {
              return (0,_libs_webrtcLatencyHints_js__WEBPACK_IMPORTED_MODULE_3__.applyReceiverLatencyHints)(receiver);
            });
            return _context6.a(2, answerSdp);
        }
      }, _callee6);
    }));
    return function (_x2) {
      return _ref9.apply(this, arguments);
    };
  }(), []);

  // setQuality — demander à la passerelle un flux pour ce spectateur
  // (`hd`, `sd`, chantier 31) ; il basculera sur sa prochaine image clé.
  var setQuality = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (want) {
    return sendMessage(JSON.stringify({
      type: "quality",
      want: want
    }), "control");
  }, [sendMessage]);

  // getRawStats — an escape hatch for a caller that needs getStats()
  // continuously (remote-play's network-loss sampling for bitrate
  // adaptation runs regardless of whether the debug panel is open,
  // unlike setStatsMonitoring's own gated polling above). Returns null
  // if there's no live peer connection yet.
  var getRawStats = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _pcRef$current$getSta, _pcRef$current;
    return (_pcRef$current$getSta = (_pcRef$current = pcRef.current) === null || _pcRef$current === void 0 ? void 0 : _pcRef$current.getStats()) !== null && _pcRef$current$getSta !== void 0 ? _pcRef$current$getSta : null;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      createViewer: createViewer,
      attach: attach,
      cleanup: cleanup,
      sendMessage: sendMessage,
      setStatsMonitoring: setStatsMonitoring,
      renegotiate: renegotiate,
      getRawStats: getRawStats,
      setQuality: setQuality,
      // Real DOM access for callers that need actual browser APIs a
      // data callback can't provide (e.g. Blackscreen.jsx's
      // usePictureInPictureOnHide calling video.requestPictureInPicture()
      // directly) — a getter so it always reflects the current node,
      // not a stale one captured when the handle object was built.
      get videoElement() {
        return videoRef.current;
      },
      // viewerId of the viewer this component currently owns, or null.
      // The PAGE creates the viewer now (one per page, from the
      // sessionId alone — see SessionStream), so a platform hook that
      // must put its own viewerId on the wire (retro's start/join/
      // spectate message, streamex's WS query) reads it from here
      // instead of calling createViewer a second time and tearing the
      // video back down.
      get viewerId() {
        var _gatewayRef$current$v, _gatewayRef$current;
        return (_gatewayRef$current$v = (_gatewayRef$current = gatewayRef.current) === null || _gatewayRef$current === void 0 ? void 0 : _gatewayRef$current.viewerId) !== null && _gatewayRef$current$v !== void 0 ? _gatewayRef$current$v : null;
      },
      get iceConnectionState() {
        var _pcRef$current$iceCon, _pcRef$current2;
        return (_pcRef$current$iceCon = (_pcRef$current2 = pcRef.current) === null || _pcRef$current2 === void 0 ? void 0 : _pcRef$current2.iceConnectionState) !== null && _pcRef$current$iceCon !== void 0 ? _pcRef$current$iceCon : null;
      }
    };
  }, [createViewer, attach, cleanup, sendMessage, setStatsMonitoring, renegotiate, getRawStats, setQuality]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("video", {
      ref: videoRef,
      autoPlay: true,
      playsInline: true
      // Rien tant qu'aucune image n'est là, pas l'affiche de la
      // WebView d'Android (NO_POSTER).
      ,
      poster: _gateway_helpers_js__WEBPACK_IMPORTED_MODULE_5__.NO_POSTER
      // ALWAYS muted, and that costs nothing: the sound is on the
      // <audio> sibling below, so this element never carries an
      // audio track. It used to follow the mute switch, which meant
      // that with sound on it was an UNMUTED element trying to
      // autoplay without a user gesture — blocked outright. The
      // stream then arrived, the bytes counted up, and the element
      // sat paused: the black screen at the start of every session,
      // which a manual play() fixed and which is why poking another
      // tab sometimes "woke it up" (found by the user, 2026-08-25).
      // EN MODE COMBINÉ, C'EST CET ÉLÉMENT QUI PORTE LE SON — le
      // museler pour toujours le supprimerait purement et
      // simplement. Sinon il reste muet en permanence, sans que ça
      // coûte quoi que ce soit : la piste audio est sur l'élément
      // voisin.
      ,
      muted: combinedAudioVideo ? muted : true,
      style: {
        width: "100%",
        minWidth: "100%",
        maxWidth: "100vw",
        minHeight: "100%",
        maxHeight: "var(--gameflex-visible-height)",
        alignSelf: "flex-start",
        objectFit: "contain",
        display: fallbackVisible ? "none" : "block"
        // THE WHOLE PICTURE IN ITS BOX — the caller gave this element a box with a
        // real height (a fullscreen surface, a thumbnail) and
        // wants the WHOLE picture inside it. Without a height the
        // element only obeys its width, so a 4:3 game on a 16:9
        // screen computes taller than the screen and the surface
        // clips it: picture off the top and bottom, and a video
        // that looks zoomed (reported live 2026-08-25 in
        // fullscreen). `contain` letterboxes instead of cropping —
        // black bars are the honest answer to a shape mismatch.
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("canvas", {
      ref: fallbackCanvasRef,
      "aria-label": "Flux vid\xE9o",
      style: {
        display: fallbackVisible ? "block" : "none",
        width: "100%",
        minWidth: "100%",
        maxWidth: "100vw",
        height: "auto",
        maxHeight: "var(--gameflex-visible-height)",
        alignSelf: "flex-start"
      }
    }), audioRef && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("audio", {
      ref: audioRef,
      autoPlay: true,
      muted: muted
    }), children]
  });
});


/***/ }

}]);
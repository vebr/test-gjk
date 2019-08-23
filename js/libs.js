// I'm using gojek default vendor libs javascript, I remove plugins persley.js 
function _extends() {
  return (_extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  }).apply(this, arguments)
}
function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}! function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";

  function n(e, t, n) {
    var i, r = (t = t || J).createElement("script");
    if (r.text = e, n)
      for (i in pe) n[i] && (r[i] = n[i]);
    t.head.appendChild(r).parentNode.removeChild(r)
  }

  function i(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[oe.call(e)] || "object" : typeof e
  }

  function r(e) {
    var t = !!e && "length" in e && e.length,
      n = i(e);
    return !de(e) && !ce(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }

  function o(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }

  function s(e, t, n) {
    return de(t) ? fe.grep(e, function(e, i) {
      return !!t.call(e, i, e) !== n
    }) : t.nodeType ? fe.grep(e, function(e) {
      return e === t !== n
    }) : "string" != typeof t ? fe.grep(e, function(e) {
      return ie.call(t, e) > -1 !== n
    }) : fe.filter(t, e, n)
  }

  function a(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }

  function l(e) {
    return e
  }

  function u(e) {
    throw e
  }

  function d(e, t, n, i) {
    var r;
    try {
      e && de(r = e.promise) ? r.call(e).done(t).fail(n) : e && de(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }

  function c() {
    J.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), fe.ready()
  }

  function p(e, t) {
    return t.toUpperCase()
  }

  function f(e) {
    return e.replace(Ae, "ms-").replace(Ee, p)
  }

  function h() {
    this.expando = fe.expando + h.uid++
  }

  function v(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (i = "data-" + t.replace(Pe, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
        try {
          n = function(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e)
          }(n)
        } catch (e) {}
        je.set(e, t, n)
      } else n = void 0;
    return n
  }

  function g(e, t, n, i) {
    var r, o, s = 20,
      a = i ? function() {
        return i.cur()
      } : function() {
        return fe.css(e, t, "")
      },
      l = a(),
      u = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
      d = (fe.cssNumber[t] || "px" !== u && +l) && qe.exec(fe.css(e, t));
    if (d && d[3] !== u) {
      for (l /= 2, u = u || d[3], d = +l || 1; s--;) fe.style(e, t, d + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), d /= o;
      d *= 2, fe.style(e, t, d + u), n = n || []
    }
    return n && (d = +d || +l || 0, r = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = d, i.end = r)), r
  }

  function m(e) {
    var t, n = e.ownerDocument,
      i = e.nodeName,
      r = Ie[i];
    return r || (t = n.body.appendChild(n.createElement(i)), r = fe.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ie[i] = r, r)
  }

  function y(e, t) {
    for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Oe.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Le(i) && (r[o] = m(i))) : "none" !== n && (r[o] = "none", Oe.set(i, "display", n)));
    for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
    return e
  }

  function w(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? fe.merge([e], n) : n
  }

  function b(e, t) {
    for (var n = 0, i = e.length; n < i; n++) Oe.set(e[n], "globalEval", !t || Oe.get(t[n], "globalEval"))
  }

  function x(e, t, n, r, o) {
    for (var s, a, l, u, d, c, p = t.createDocumentFragment(), f = [], h = 0, v = e.length; h < v; h++)
      if ((s = e[h]) || 0 === s)
        if ("object" === i(s)) fe.merge(f, s.nodeType ? [s] : s);
        else if (Xe.test(s)) {
      for (a = a || p.appendChild(t.createElement("div")), l = (Re.exec(s) || ["", ""])[1].toLowerCase(), u = Ve[l] || Ve._default, a.innerHTML = u[1] + fe.htmlPrefilter(s) + u[2], c = u[0]; c--;) a = a.lastChild;
      fe.merge(f, a.childNodes), (a = p.firstChild).textContent = ""
    } else f.push(t.createTextNode(s));
    for (p.textContent = "", h = 0; s = f[h++];)
      if (r && fe.inArray(s, r) > -1) o && o.push(s);
      else if (d = fe.contains(s.ownerDocument, s), a = w(p.appendChild(s), "script"), d && b(a), n)
      for (c = 0; s = a[c++];) We.test(s.type || "") && n.push(s);
    return p
  }

  function T() {
    return !0
  }

  function k() {
    return !1
  }

  function C() {
    try {
      return J.activeElement
    } catch (e) {}
  }

  function S(e, t, n, i, r, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) S(e, a, n, i, t[a], o);
      return e
    }
    if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = k;
    else if (!r) return e;
    return 1 === o && (s = r, (r = function(e) {
      return fe().off(e), s.apply(this, arguments)
    }).guid = s.guid || (s.guid = fe.guid++)), e.each(function() {
      fe.event.add(this, t, r, i, n)
    })
  }

  function $(e, t) {
    return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") && fe(e).children("tbody")[0] || e
  }

  function _(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function A(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function E(e, t) {
    var n, i, r, o, s, a, l, u;
    if (1 === t.nodeType) {
      if (Oe.hasData(e) && (o = Oe.access(e), s = Oe.set(t, o), u = o.events))
        for (r in delete s.handle, s.events = {}, u)
          for (n = 0, i = u[r].length; n < i; n++) fe.event.add(t, r, u[r][n]);
      je.hasData(e) && (a = je.access(e), l = fe.extend({}, a), je.set(t, l))
    }
  }

  function D(e, t, i, r) {
    t = te.apply([], t);
    var o, s, a, l, u, d, c = 0,
      p = e.length,
      f = p - 1,
      h = t[0],
      v = de(h);
    if (v || p > 1 && "string" == typeof h && !ue.checkClone && et.test(h)) return e.each(function(n) {
      var o = e.eq(n);
      v && (t[0] = h.call(this, n, o.html())), D(o, t, i, r)
    });
    if (p && (s = (o = x(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
      for (l = (a = fe.map(w(o, "script"), _)).length; c < p; c++) u = o, c !== f && (u = fe.clone(u, !0, !0), l && fe.merge(a, w(u, "script"))), i.call(e[c], u, c);
      if (l)
        for (d = a[a.length - 1].ownerDocument, fe.map(a, A), c = 0; c < l; c++) u = a[c], We.test(u.type || "") && !Oe.access(u, "globalEval") && fe.contains(d, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? fe._evalUrl && fe._evalUrl(u.src) : n(u.textContent.replace(tt, ""), d, u))
    }
    return e
  }

  function O(e, t, n) {
    for (var i, r = t ? fe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || fe.cleanData(w(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && b(w(i, "script")), i.parentNode.removeChild(i));
    return e
  }

  function j(e, t, n) {
    var i, r, o, s, a = e.style;
    return (n = n || it(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || fe.contains(e.ownerDocument, e) || (s = fe.style(e, t)), !ue.pixelBoxStyles() && nt.test(s) && rt.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
  }

  function F(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }

  function P(e) {
    var t = fe.cssProps[e];
    return t || (t = fe.cssProps[e] = function(e) {
      if (e in dt) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = ut.length; n--;)
        if ((e = ut[n] + t) in dt) return e
    }(e) || e), t
  }

  function N(e, t, n) {
    var i = qe.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }

  function q(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2) "margin" === n && (l += fe.css(e, n + Me[s], !0, r)), i ? ("content" === n && (l -= fe.css(e, "padding" + Me[s], !0, r)), "margin" !== n && (l -= fe.css(e, "border" + Me[s] + "Width", !0, r))) : (l += fe.css(e, "padding" + Me[s], !0, r), "padding" !== n ? l += fe.css(e, "border" + Me[s] + "Width", !0, r) : a += fe.css(e, "border" + Me[s] + "Width", !0, r));
    return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
  }

  function M(e, t, n) {
    var i = it(e),
      r = j(e, t, i),
      o = "border-box" === fe.css(e, "boxSizing", !1, i),
      s = o;
    if (nt.test(r)) {
      if (!n) return r;
      r = "auto"
    }
    return s = s && (ue.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === fe.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + q(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
  }

  function L(e, t, n, i, r) {
    return new L.prototype.init(e, t, n, i, r)
  }

  function H() {
    pt && (!1 === J.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(H) : e.setTimeout(H, fe.fx.interval), fe.fx.tick())
  }

  function I() {
    return e.setTimeout(function() {
      ct = void 0
    }), ct = Date.now()
  }

  function z(e, t) {
    var n, i = 0,
      r = {
        height: e
      };
    for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Me[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function R(e, t, n) {
    for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, s = r.length; o < s; o++)
      if (i = r[o].call(n, t, e)) return i
  }

  function W(e, t, n) {
    var i, r, o = 0,
      s = W.prefilters.length,
      a = fe.Deferred().always(function() {
        delete l.elem
      }),
      l = function() {
        if (r) return !1;
        for (var t = ct || I(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
        return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
      },
      u = a.promise({
        elem: e,
        props: fe.extend({}, t),
        opts: fe.extend(!0, {
          specialEasing: {},
          easing: fe.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: ct || I(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var i = fe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
          return u.tweens.push(i), i
        },
        stop: function(t) {
          var n = 0,
            i = t ? u.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) u.tweens[n].run(1);
          return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
        }
      }),
      d = u.props;
    for ((function(e, t) {
        var n, i, r, o, s;
        for (n in e)
          if (r = t[i = f(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = fe.cssHooks[i]) && "expand" in s)
            for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
          else t[i] = r
      }(d, u.opts.specialEasing)); o < s; o++)
      if (i = W.prefilters[o].call(u, e, d, u.opts)) return de(i.stop) && (fe._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
    return fe.map(d, R, u), de(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), fe.fx.timer(fe.extend(l, {
      elem: e,
      anim: u,
      queue: u.opts.queue
    })), u
  }

  function V(e) {
    return (e.match(Ce) || []).join(" ")
  }

  function U(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function B(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(Ce) || []
  }

  function X(e, t, n, r) {
    var o;
    if (Array.isArray(t)) fe.each(t, function(t, i) {
      n || St.test(e) ? r(e, i) : X(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
    });
    else if (n || "object" !== i(t)) r(e, t);
    else
      for (o in t) X(e + "[" + o + "]", t[o], n, r)
  }

  function Y(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, r = 0,
        o = t.toLowerCase().match(Ce) || [];
      if (de(n))
        for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
    }
  }

  function Z(e, t, n, i) {
    function r(a) {
      var l;
      return o[a] = !0, fe.each(e[a] || [], function(e, a) {
        var u = a(t, n, i);
        return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
      }), l
    }
    var o = {},
      s = e === qt;
    return r(t.dataTypes[0]) || !o["*"] && r("*")
  }

  function G(e, t) {
    var n, i, r = fe.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && fe.extend(!0, e, i), e
  }
  var Q = [],
    J = e.document,
    K = Object.getPrototypeOf,
    ee = Q.slice,
    te = Q.concat,
    ne = Q.push,
    ie = Q.indexOf,
    re = {},
    oe = re.toString,
    se = re.hasOwnProperty,
    ae = se.toString,
    le = ae.call(Object),
    ue = {},
    de = function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
    },
    ce = function(e) {
      return null != e && e === e.window
    },
    pe = {
      type: !0,
      src: !0,
      noModule: !0
    },
    fe = function(e, t) {
      return new fe.fn.init(e, t)
    },
    he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  fe.fn = fe.prototype = {
    jquery: "3.3.1",
    constructor: fe,
    length: 0,
    toArray: function() {
      return ee.call(this)
    },
    get: function(e) {
      return null == e ? ee.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function(e) {
      var t = fe.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function(e) {
      return fe.each(this, e)
    },
    map: function(e) {
      return this.pushStack(fe.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(ee.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: ne,
    sort: Q.sort,
    splice: Q.splice
  }, fe.extend = fe.fn.extend = function() {
    var e, t, n, i, r, o, s = arguments[0] || {},
      a = 1,
      l = arguments.length,
      u = !1;
    for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || de(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
      if (null != (e = arguments[a]))
        for (t in e) n = s[t], s !== (i = e[t]) && (u && i && (fe.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && fe.isPlainObject(n) ? n : {}, s[t] = fe.extend(u, o, i)) : void 0 !== i && (s[t] = i));
    return s
  }, fe.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isPlainObject: function(e) {
      var t, n;
      return !(!e || "[object Object]" !== oe.call(e) || (t = K(e)) && ("function" != typeof(n = se.call(t, "constructor") && t.constructor) || ae.call(n) !== le))
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    globalEval: function(e) {
      n(e)
    },
    each: function(e, t) {
      var n, i = 0;
      if (r(e))
        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
      else
        for (i in e)
          if (!1 === t.call(e[i], i, e[i])) break;
      return e
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(he, "")
    },
    makeArray: function(e, t) {
      var n = t || [];
      return null != e && (r(Object(e)) ? fe.merge(n, "string" == typeof e ? [e] : e) : ne.call(n, e)), n
    },
    inArray: function(e, t, n) {
      return null == t ? -1 : ie.call(t, e, n)
    },
    merge: function(e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
      return e.length = r, e
    },
    grep: function(e, t, n) {
      for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
      return i
    },
    map: function(e, t, n) {
      var i, o, s = 0,
        a = [];
      if (r(e))
        for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && a.push(o);
      else
        for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
      return te.apply([], a)
    },
    guid: 1,
    support: ue
  }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = Q[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    re["[object " + t + "]"] = t.toLowerCase()
  });
  var ve = function(e) {
    function t(e, t, n, i) {
      var r, o, s, a, l, d, p, f = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
      if (!i && ((t ? t.ownerDocument || t : M) !== E && A(t), t = t || E, O)) {
        if (11 !== h && (l = fe.exec(e)))
          if (r = l[1]) {
            if (9 === h) {
              if (!(s = t.getElementById(r))) return n;
              if (s.id === r) return n.push(s), n
            } else if (f && (s = f.getElementById(r)) && N(t, s) && s.id === r) return n.push(s), n
          } else {
            if (l[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
            if ((r = l[3]) && y.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(r)), n
          } if (y.qsa && !R[e + " "] && (!j || !j.test(e))) {
          if (1 !== h) f = t, p = e;
          else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? a = a.replace(me, ye) : t.setAttribute("id", a = q), o = (d = T(e)).length; o--;) d[o] = "#" + a + " " + c(d[o]);
            p = d.join(","), f = he.test(e) && u(t.parentNode) || t
          }
          if (p) try {
            return Y.apply(n, f.querySelectorAll(p)), n
          } catch (e) {} finally {
            a === q && t.removeAttribute("id")
          }
        }
      }
      return C(e.replace(ie, "$1"), t, n, i)
    }

    function n() {
      var e = [];
      return function t(n, i) {
        return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i
      }
    }

    function i(e) {
      return e[q] = !0, e
    }

    function r(e) {
      var t = E.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
    }

    function s(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function a(e) {
      return function(t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && be(t) === e : t.disabled === e : "label" in t && t.disabled === e
      }
    }

    function l(e) {
      return i(function(t) {
        return t = +t, i(function(n, i) {
          for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
        })
      })
    }

    function u(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }

    function d() {}

    function c(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i
    }

    function p(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        s = n && "parentNode" === o,
        a = H++;
      return t.first ? function(t, n, r) {
        for (; t = t[i];)
          if (1 === t.nodeType || s) return e(t, n, r);
        return !1
      } : function(t, n, l) {
        var u, d, c, p = [L, a];
        if (l) {
          for (; t = t[i];)
            if ((1 === t.nodeType || s) && e(t, n, l)) return !0
        } else
          for (; t = t[i];)
            if (1 === t.nodeType || s)
              if (d = (c = t[q] || (t[q] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
              else {
                if ((u = d[o]) && u[0] === L && u[1] === a) return p[2] = u[2];
                if (d[o] = p, p[2] = e(t, n, l)) return !0
              } return !1
      }
    }

    function f(e) {
      return e.length > 1 ? function(t, n, i) {
        for (var r = e.length; r--;)
          if (!e[r](t, n, i)) return !1;
        return !0
      } : e[0]
    }

    function h(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
      return s
    }

    function v(e, n, r, o, s, a) {
      return o && !o[q] && (o = v(o)), s && !s[q] && (s = v(s, a)), i(function(i, a, l, u) {
        var d, c, p, f = [],
          v = [],
          g = a.length,
          m = i || function(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i
          }(n || "*", l.nodeType ? [l] : l, []),
          y = !e || !i && n ? m : h(m, f, e, l, u),
          w = r ? s || (i ? e : g || o) ? [] : a : y;
        if (r && r(y, w, l, u), o)
          for (d = h(w, v), o(d, [], l, u), c = d.length; c--;)(p = d[c]) && (w[v[c]] = !(y[v[c]] = p));
        if (i) {
          if (s || e) {
            if (s) {
              for (d = [], c = w.length; c--;)(p = w[c]) && d.push(y[c] = p);
              s(null, w = [], d, u)
            }
            for (c = w.length; c--;)(p = w[c]) && (d = s ? G(i, p) : f[c]) > -1 && (i[d] = !(a[d] = p))
          }
        } else w = h(w === a ? w.splice(g, w.length) : w), s ? s(null, a, w, u) : Y.apply(a, w)
      })
    }

    function g(e) {
      for (var t, n, i, r = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = p(function(e) {
          return e === t
        }, s, !0), u = p(function(e) {
          return G(t, e) > -1
        }, s, !0), d = [function(e, n, i) {
          var r = !o && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
          return t = null, r
        }]; a < r; a++)
        if (n = w.relative[e[a].type]) d = [p(f(d), n)];
        else {
          if ((n = w.filter[e[a].type].apply(null, e[a].matches))[q]) {
            for (i = ++a; i < r && !w.relative[e[i].type]; i++);
            return v(a > 1 && f(d), a > 1 && c(e.slice(0, a - 1).concat({
              value: " " === e[a - 2].type ? "*" : ""
            })).replace(ie, "$1"), n, a < i && g(e.slice(a, i)), i < r && g(e = e.slice(i)), i < r && c(e))
          }
          d.push(n)
        } return f(d)
    }
    var m, y, w, b, x, T, k, C, S, $, _, A, E, D, O, j, F, P, N, q = "sizzle" + 1 * new Date,
      M = e.document,
      L = 0,
      H = 0,
      I = n(),
      z = n(),
      R = n(),
      W = function(e, t) {
        return e === t && (_ = !0), 0
      },
      V = {}.hasOwnProperty,
      U = [],
      B = U.pop,
      X = U.push,
      Y = U.push,
      Z = U.slice,
      G = function(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          if (e[n] === t) return n;
        return -1
      },
      Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      J = "[\\x20\\t\\r\\n\\f]",
      K = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ee = "\\[" + J + "*(" + K + ")(?:" + J + "*([*^$|!~]?=)" + J + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + K + "))|)" + J + "*\\]",
      te = ":(" + K + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ee + ")*)|.*)\\)|)",
      ne = new RegExp(J + "+", "g"),
      ie = new RegExp("^" + J + "+|((?:^|[^\\\\])(?:\\\\.)*)" + J + "+$", "g"),
      re = new RegExp("^" + J + "*," + J + "*"),
      oe = new RegExp("^" + J + "*([>+~]|" + J + ")" + J + "*"),
      se = new RegExp("=" + J + "*([^\\]'\"]*?)" + J + "*\\]", "g"),
      ae = new RegExp(te),
      le = new RegExp("^" + K + "$"),
      ue = {
        ID: new RegExp("^#(" + K + ")"),
        CLASS: new RegExp("^\\.(" + K + ")"),
        TAG: new RegExp("^(" + K + "|[*])"),
        ATTR: new RegExp("^" + ee),
        PSEUDO: new RegExp("^" + te),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + J + "*(even|odd|(([+-]|)(\\d*)n|)" + J + "*(?:([+-]|)" + J + "*(\\d+)|))" + J + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + Q + ")$", "i"),
        needsContext: new RegExp("^" + J + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + J + "*((?:-\\d)?\\d*)" + J + "*\\)|)(?=[^-]|$)", "i")
      },
      de = /^(?:input|select|textarea|button)$/i,
      ce = /^h\d$/i,
      pe = /^[^{]+\{\s*\[native \w/,
      fe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      he = /[+~]/,
      ve = new RegExp("\\\\([\\da-f]{1,6}" + J + "?|(" + J + ")|.)", "ig"),
      ge = function(e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      },
      me = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ye = function(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      },
      we = function() {
        A()
      },
      be = p(function(e) {
        return !0 === e.disabled && ("form" in e || "label" in e)
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      Y.apply(U = Z.call(M.childNodes), M.childNodes), U[M.childNodes.length].nodeType
    } catch (e) {
      Y = {
        apply: U.length ? function(e, t) {
          X.apply(e, Z.call(t))
        } : function(e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];);
          e.length = n - 1
        }
      }
    }
    for (m in y = t.support = {}, x = t.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, A = t.setDocument = function(e) {
        var t, n, i = e ? e.ownerDocument || e : M;
        return i !== E && 9 === i.nodeType && i.documentElement ? (D = (E = i).documentElement, O = !x(E), M !== E && (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), y.attributes = r(function(e) {
          return e.className = "i", !e.getAttribute("className")
        }), y.getElementsByTagName = r(function(e) {
          return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
        }), y.getElementsByClassName = pe.test(E.getElementsByClassName), y.getById = r(function(e) {
          return D.appendChild(e).id = q, !E.getElementsByName || !E.getElementsByName(q).length
        }), y.getById ? (w.filter.ID = function(e) {
          var t = e.replace(ve, ge);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }, w.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && O) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }) : (w.filter.ID = function(e) {
          var t = e.replace(ve, ge);
          return function(e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t
          }
        }, w.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && O) {
            var n, i, r, o = t.getElementById(e);
            if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
            }
            return []
          }
        }), w.find.TAG = y.getElementsByTagName ? function(e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) : void 0
        } : function(e, t) {
          var n, i = [],
            r = 0,
            o = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
            return i
          }
          return o
        }, w.find.CLASS = y.getElementsByClassName && function(e, t) {
          if (void 0 !== t.getElementsByClassName && O) return t.getElementsByClassName(e)
        }, F = [], j = [], (y.qsa = pe.test(E.querySelectorAll)) && (r(function(e) {
          D.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + J + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + J + "*(?:value|" + Q + ")"), e.querySelectorAll("[id~=" + q + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || j.push(".#.+[+~]")
        }), r(function(e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = E.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + J + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && j.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
        })), (y.matchesSelector = pe.test(P = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(e) {
          y.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), F.push("!=", te)
        }), j = j.length && new RegExp(j.join("|")), F = F.length && new RegExp(F.join("|")), t = pe.test(D.compareDocumentPosition), N = t || pe.test(D.contains) ? function(e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
        } : function(e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        }, W = t ? function(e, t) {
          if (e === t) return _ = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === M && N(M, e) ? -1 : t === E || t.ownerDocument === M && N(M, t) ? 1 : $ ? G($, e) - G($, t) : 0 : 4 & n ? -1 : 1)
        } : function(e, t) {
          if (e === t) return _ = !0, 0;
          var n, i = 0,
            r = e.parentNode,
            o = t.parentNode,
            a = [e],
            l = [t];
          if (!r || !o) return e === E ? -1 : t === E ? 1 : r ? -1 : o ? 1 : $ ? G($, e) - G($, t) : 0;
          if (r === o) return s(e, t);
          for (n = e; n = n.parentNode;) a.unshift(n);
          for (n = t; n = n.parentNode;) l.unshift(n);
          for (; a[i] === l[i];) i++;
          return i ? s(a[i], l[i]) : a[i] === M ? -1 : l[i] === M ? 1 : 0
        }, E) : E
      }, t.matches = function(e, n) {
        return t(e, null, null, n)
      }, t.matchesSelector = function(e, n) {
        if ((e.ownerDocument || e) !== E && A(e), n = n.replace(se, "='$1']"), y.matchesSelector && O && !R[n + " "] && (!F || !F.test(n)) && (!j || !j.test(n))) try {
          var i = P.call(e, n);
          if (i || y.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
        } catch (e) {}
        return t(n, E, null, [e]).length > 0
      }, t.contains = function(e, t) {
        return (e.ownerDocument || e) !== E && A(e), N(e, t)
      }, t.attr = function(e, t) {
        (e.ownerDocument || e) !== E && A(e);
        var n = w.attrHandle[t.toLowerCase()],
          i = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
        return void 0 !== i ? i : y.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }, t.escape = function(e) {
        return (e + "").replace(me, ye)
      }, t.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, t.uniqueSort = function(e) {
        var t, n = [],
          i = 0,
          r = 0;
        if (_ = !y.detectDuplicates, $ = !y.sortStable && e.slice(0), e.sort(W), _) {
          for (; t = e[r++];) t === e[r] && (i = n.push(r));
          for (; i--;) e.splice(n[i], 1)
        }
        return $ = null, e
      }, b = t.getText = function(e) {
        var t, n = "",
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += b(e)
          } else if (3 === r || 4 === r) return e.nodeValue
        } else
          for (; t = e[i++];) n += b(t);
        return n
      }, (w = t.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: ue,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(ve, ge), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ge), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, n = !e[6] && e[2];
            return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ae.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(ve, ge).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(e) {
            var t = I[e + " "];
            return t || (t = new RegExp("(^|" + J + ")" + e + "(" + J + "|$)")) && I(e, function(e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, n, i) {
            return function(r) {
              var o = t.attr(r, e);
              return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ne, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function(e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === r ? function(e) {
              return !!e.parentNode
            } : function(t, n, l) {
              var u, d, c, p, f, h, v = o !== s ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                m = a && t.nodeName.toLowerCase(),
                y = !l && !a,
                w = !1;
              if (g) {
                if (o) {
                  for (; v;) {
                    for (p = t; p = p[v];)
                      if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                    h = v = "only" === e && !h && "nextSibling"
                  }
                  return !0
                }
                if (h = [s ? g.firstChild : g.lastChild], s && y) {
                  for (w = (f = (u = (d = (c = (p = g)[q] || (p[q] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] || [])[0] === L && u[1]) && u[2], p = f && g.childNodes[f]; p = ++f && p && p[v] || (w = f = 0) || h.pop();)
                    if (1 === p.nodeType && ++w && p === t) {
                      d[e] = [L, f, w];
                      break
                    }
                } else if (y && (w = f = (u = (d = (c = (p = t)[q] || (p[q] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] || [])[0] === L && u[1]), !1 === w)
                  for (;
                    (p = ++f && p && p[v] || (w = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++w || (y && ((d = (c = p[q] || (p[q] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] = [L, w]), p !== t)););
                return (w -= r) === i || w % i == 0 && w / i >= 0
              }
            }
          },
          PSEUDO: function(e, n) {
            var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
            return o[q] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
              for (var i, r = o(e, n), s = r.length; s--;) e[i = G(e, r[s])] = !(t[i] = r[s])
            }) : function(e) {
              return o(e, 0, r)
            }) : o
          }
        },
        pseudos: {
          not: i(function(e) {
            var t = [],
              n = [],
              r = k(e.replace(ie, "$1"));
            return r[q] ? i(function(e, t, n, i) {
              for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
            }) : function(e, i, o) {
              return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
            }
          }),
          has: i(function(e) {
            return function(n) {
              return t(e, n).length > 0
            }
          }),
          contains: i(function(e) {
            return e = e.replace(ve, ge),
              function(t) {
                return (t.textContent || t.innerText || b(t)).indexOf(e) > -1
              }
          }),
          lang: i(function(e) {
            return le.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ge).toLowerCase(),
              function(t) {
                var n;
                do {
                  if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
          }),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          },
          root: function(e) {
            return e === D
          },
          focus: function(e) {
            return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: a(!1),
          disabled: a(!0),
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function(e) {
            return !w.pseudos.empty(e)
          },
          header: function(e) {
            return ce.test(e.nodeName)
          },
          input: function(e) {
            return de.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: l(function() {
            return [0]
          }),
          last: l(function(e, t) {
            return [t - 1]
          }),
          eq: l(function(e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: l(function(e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }),
          odd: l(function(e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }),
          lt: l(function(e, t, n) {
            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
            return e
          }),
          gt: l(function(e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
            return e
          })
        }
      }).pseudos.nth = w.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) w.pseudos[m] = function(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }(m);
    for (m in {
        submit: !0,
        reset: !0
      }) w.pseudos[m] = function(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }(m);
    return d.prototype = w.filters = w.pseudos, w.setFilters = new d, T = t.tokenize = function(e, n) {
      var i, r, o, s, a, l, u, d = z[e + " "];
      if (d) return n ? 0 : d.slice(0);
      for (a = e, l = [], u = w.preFilter; a;) {
        for (s in i && !(r = re.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = oe.exec(a)) && (i = r.shift(), o.push({
            value: i,
            type: r[0].replace(ie, " ")
          }), a = a.slice(i.length)), w.filter) !(r = ue[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
          value: i,
          type: s,
          matches: r
        }), a = a.slice(i.length));
        if (!i) break
      }
      return n ? a.length : a ? t.error(e) : z(e, l).slice(0)
    }, k = t.compile = function(e, n) {
      var r, o = [],
        s = [],
        a = R[e + " "];
      if (!a) {
        for (n || (n = T(e)), r = n.length; r--;)(a = g(n[r]))[q] ? o.push(a) : s.push(a);
        (a = R(e, function(e, n) {
          var r = n.length > 0,
            o = e.length > 0,
            s = function(i, s, a, l, u) {
              var d, c, p, f = 0,
                v = "0",
                g = i && [],
                m = [],
                y = S,
                b = i || o && w.find.TAG("*", u),
                x = L += null == y ? 1 : Math.random() || .1,
                T = b.length;
              for (u && (S = s === E || s || u); v !== T && null != (d = b[v]); v++) {
                if (o && d) {
                  for (c = 0, s || d.ownerDocument === E || (A(d), a = !O); p = e[c++];)
                    if (p(d, s || E, a)) {
                      l.push(d);
                      break
                    } u && (L = x)
                }
                r && ((d = !p && d) && f--, i && g.push(d))
              }
              if (f += v, r && v !== f) {
                for (c = 0; p = n[c++];) p(g, m, s, a);
                if (i) {
                  if (f > 0)
                    for (; v--;) g[v] || m[v] || (m[v] = B.call(l));
                  m = h(m)
                }
                Y.apply(l, m), u && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
              }
              return u && (L = x, S = y), g
            };
          return r ? i(s) : s
        }(s, o))).selector = e
      }
      return a
    }, C = t.select = function(e, t, n, i) {
      var r, o, s, a, l, d = "function" == typeof e && e,
        p = !i && T(e = d.selector || e);
      if (n = n || [], 1 === p.length) {
        if ((o = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && O && w.relative[o[1].type]) {
          if (!(t = (w.find.ID(s.matches[0].replace(ve, ge), t) || [])[0])) return n;
          d && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (r = ue.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
          if ((l = w.find[a]) && (i = l(s.matches[0].replace(ve, ge), he.test(o[0].type) && u(t.parentNode) || t))) {
            if (o.splice(r, 1), !(e = i.length && c(o))) return Y.apply(n, i), n;
            break
          }
      }
      return (d || k(e, p))(i, t, !O, n, !t || he.test(e) && u(t.parentNode) || t), n
    }, y.sortStable = q.split("").sort(W).join("") === q, y.detectDuplicates = !!_, A(), y.sortDetached = r(function(e) {
      return 1 & e.compareDocumentPosition(E.createElement("fieldset"))
    }), r(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function(e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), y.attributes && r(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || o("value", function(e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), r(function(e) {
      return null == e.getAttribute("disabled")
    }) || o(Q, function(e, t, n) {
      var i;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }), t
  }(e);
  fe.find = ve, fe.expr = ve.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ve.uniqueSort, fe.text = ve.getText, fe.isXMLDoc = ve.isXML, fe.contains = ve.contains, fe.escapeSelector = ve.escape;
  var ge = function(e, t, n) {
      for (var i = [], r = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (r && fe(e).is(n)) break;
          i.push(e)
        } return i
    },
    me = function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    ye = fe.expr.match.needsContext,
    we = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  fe.filter = function(e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, fe.fn.extend({
    find: function(e) {
      var t, n, i = this.length,
        r = this;
      if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
        for (t = 0; t < i; t++)
          if (fe.contains(r[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < i; t++) fe.find(e, r[t], n);
      return i > 1 ? fe.uniqueSort(n) : n
    },
    filter: function(e) {
      return this.pushStack(s(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(s(this, e || [], !0))
    },
    is: function(e) {
      return !!s(this, "string" == typeof e && ye.test(e) ? fe(e) : e || [], !1).length
    }
  });
  var be, xe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (fe.fn.init = function(e, t, n) {
    var i, r;
    if (!e) return this;
    if (n = n || be, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : xe.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), we.test(i[1]) && fe.isPlainObject(t))
          for (i in t) de(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return (r = J.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : de(e) ? void 0 !== n.ready ? n.ready(e) : e(fe) : fe.makeArray(e, this)
  }).prototype = fe.fn, be = fe(J);
  var Te = /^(?:parents|prev(?:Until|All))/,
    ke = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  fe.fn.extend({
    has: function(e) {
      var t = fe(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++)
          if (fe.contains(this, t[e])) return !0
      })
    },
    closest: function(e, t) {
      var n, i = 0,
        r = this.length,
        o = [],
        s = "string" != typeof e && fe(e);
      if (!ye.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
              o.push(n);
              break
            } return this.pushStack(o.length > 1 ? fe.uniqueSort(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? ie.call(fe(e), this[0]) : ie.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), fe.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return ge(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return ge(e, "parentNode", n)
    },
    next: function(e) {
      return a(e, "nextSibling")
    },
    prev: function(e) {
      return a(e, "previousSibling")
    },
    nextAll: function(e) {
      return ge(e, "nextSibling")
    },
    prevAll: function(e) {
      return ge(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return ge(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return ge(e, "previousSibling", n)
    },
    siblings: function(e) {
      return me((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return me(e.firstChild)
    },
    contents: function(e) {
      return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), fe.merge([], e.childNodes))
    }
  }, function(e, t) {
    fe.fn[e] = function(n, i) {
      var r = fe.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = fe.filter(i, r)), this.length > 1 && (ke[e] || fe.uniqueSort(r), Te.test(e) && r.reverse()), this.pushStack(r)
    }
  });
  var Ce = /[^\x20\t\r\n\f]+/g;
  fe.Callbacks = function(e) {
    e = "string" == typeof e ? function(e) {
      var t = {};
      return fe.each(e.match(Ce) || [], function(e, n) {
        t[n] = !0
      }), t
    }(e) : fe.extend({}, e);
    var t, n, r, o, s = [],
      a = [],
      l = -1,
      u = function() {
        for (o = o || e.once, r = t = !0; a.length; l = -1)
          for (n = a.shift(); ++l < s.length;) !1 === s[l].apply(n[0], n[1]) && e.stopOnFalse && (l = s.length, n = !1);
        e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
      },
      d = {
        add: function() {
          return s && (n && !t && (l = s.length - 1, a.push(n)), function t(n) {
            fe.each(n, function(n, r) {
              de(r) ? e.unique && d.has(r) || s.push(r) : r && r.length && "string" !== i(r) && t(r)
            })
          }(arguments), n && !t && u()), this
        },
        remove: function() {
          return fe.each(arguments, function(e, t) {
            for (var n;
              (n = fe.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= l && l--
          }), this
        },
        has: function(e) {
          return e ? fe.inArray(e, s) > -1 : s.length > 0
        },
        empty: function() {
          return s && (s = []), this
        },
        disable: function() {
          return o = a = [], s = n = "", this
        },
        disabled: function() {
          return !s
        },
        lock: function() {
          return o = a = [], n || t || (s = n = ""), this
        },
        locked: function() {
          return !!o
        },
        fireWith: function(e, n) {
          return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
        },
        fire: function() {
          return d.fireWith(this, arguments), this
        },
        fired: function() {
          return !!r
        }
      };
    return d
  }, fe.extend({
    Deferred: function(t) {
      var n = [
          ["notify", "progress", fe.Callbacks("memory"), fe.Callbacks("memory"), 2],
          ["resolve", "done", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 1, "rejected"]
        ],
        i = "pending",
        r = {
          state: function() {
            return i
          },
          always: function() {
            return o.done(arguments).fail(arguments), this
          },
          catch: function(e) {
            return r.then(null, e)
          },
          pipe: function() {
            var e = arguments;
            return fe.Deferred(function(t) {
              fe.each(n, function(n, i) {
                var r = de(e[i[4]]) && e[i[4]];
                o[i[1]](function() {
                  var e = r && r.apply(this, arguments);
                  e && de(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          then: function(t, i, r) {
            function o(t, n, i, r) {
              return function() {
                var a = this,
                  d = arguments,
                  c = function() {
                    var e, c;
                    if (!(t < s)) {
                      if ((e = i.apply(a, d)) === n.promise()) throw new TypeError("Thenable self-resolution");
                      c = e && ("object" == typeof e || "function" == typeof e) && e.then, de(c) ? r ? c.call(e, o(s, n, l, r), o(s, n, u, r)) : (s++, c.call(e, o(s, n, l, r), o(s, n, u, r), o(s, n, l, n.notifyWith))) : (i !== l && (a = void 0, d = [e]), (r || n.resolveWith)(a, d))
                    }
                  },
                  p = r ? c : function() {
                    try {
                      c()
                    } catch (e) {
                      fe.Deferred.exceptionHook && fe.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== u && (a = void 0, d = [e]), n.rejectWith(a, d))
                    }
                  };
                t ? p() : (fe.Deferred.getStackHook && (p.stackTrace = fe.Deferred.getStackHook()), e.setTimeout(p))
              }
            }
            var s = 0;
            return fe.Deferred(function(e) {
              n[0][3].add(o(0, e, de(r) ? r : l, e.notifyWith)), n[1][3].add(o(0, e, de(t) ? t : l)), n[2][3].add(o(0, e, de(i) ? i : u))
            }).promise()
          },
          promise: function(e) {
            return null != e ? fe.extend(e, r) : r
          }
        },
        o = {};
      return fe.each(n, function(e, t) {
        var s = t[2],
          a = t[5];
        r[t[1]] = s.add, a && s.add(function() {
          i = a
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function() {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
        }, o[t[0] + "With"] = s.fireWith
      }), r.promise(o), t && t.call(o, o), o
    },
    when: function(e) {
      var t = arguments.length,
        n = t,
        i = Array(n),
        r = ee.call(arguments),
        o = fe.Deferred(),
        s = function(e) {
          return function(n) {
            i[e] = this, r[e] = arguments.length > 1 ? ee.call(arguments) : n, --t || o.resolveWith(i, r)
          }
        };
      if (t <= 1 && (d(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || de(r[n] && r[n].then))) return o.then();
      for (; n--;) d(r[n], s(n), o.reject);
      return o.promise()
    }
  });
  var Se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  fe.Deferred.exceptionHook = function(t, n) {
    e.console && e.console.warn && t && Se.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }, fe.readyException = function(t) {
    e.setTimeout(function() {
      throw t
    })
  };
  var $e = fe.Deferred();
  fe.fn.ready = function(e) {
    return $e.then(e).catch(function(e) {
      fe.readyException(e)
    }), this
  }, fe.extend({
    isReady: !1,
    readyWait: 1,
    ready: function(e) {
      (!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, !0 !== e && --fe.readyWait > 0 || $e.resolveWith(J, [fe]))
    }
  }), fe.ready.then = $e.then, "complete" === J.readyState || "loading" !== J.readyState && !J.documentElement.doScroll ? e.setTimeout(fe.ready) : (J.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
  var _e = function(e, t, n, r, o, s, a) {
      var l = 0,
        u = e.length,
        d = null == n;
      if ("object" === i(n))
        for (l in o = !0, n) _e(e, t, l, n[l], !0, s, a);
      else if (void 0 !== r && (o = !0, de(r) || (a = !0), d && (a ? (t.call(e, r), t = null) : (d = t, t = function(e, t, n) {
          return d.call(fe(e), n)
        })), t))
        for (; l < u; l++) t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)));
      return o ? e : d ? t.call(e) : u ? t(e[0], n) : s
    },
    Ae = /^-ms-/,
    Ee = /-([a-z])/g,
    De = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
  h.uid = 1, h.prototype = {
    cache: function(e) {
      var t = e[this.expando];
      return t || (t = {}, De(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function(e, t, n) {
      var i, r = this.cache(e);
      if ("string" == typeof t) r[f(t)] = n;
      else
        for (i in t) r[f(i)] = t[i];
      return r
    },
    get: function(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][f(t)]
    },
    access: function(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function(e, t) {
      var n, i = e[this.expando];
      if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(f) : (t = f(t)) in i ? [t] : t.match(Ce) || []).length;
          for (; n--;) delete i[t[n]]
        }(void 0 === t || fe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function(e) {
      var t = e[this.expando];
      return void 0 !== t && !fe.isEmptyObject(t)
    }
  };
  var Oe = new h,
    je = new h,
    Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Pe = /[A-Z]/g;
  fe.extend({
    hasData: function(e) {
      return je.hasData(e) || Oe.hasData(e)
    },
    data: function(e, t, n) {
      return je.access(e, t, n)
    },
    removeData: function(e, t) {
      je.remove(e, t)
    },
    _data: function(e, t, n) {
      return Oe.access(e, t, n)
    },
    _removeData: function(e, t) {
      Oe.remove(e, t)
    }
  }), fe.fn.extend({
    data: function(e, t) {
      var n, i, r, o = this[0],
        s = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (r = je.get(o), 1 === o.nodeType && !Oe.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = f(i.slice(5)), v(o, i, r[i]));
          Oe.set(o, "hasDataAttrs", !0)
        }
        return r
      }
      return "object" == typeof e ? this.each(function() {
        je.set(this, e)
      }) : _e(this, function(t) {
        var n;
        if (o && void 0 === t) return void 0 !== (n = je.get(o, e)) ? n : void 0 !== (n = v(o, e)) ? n : void 0;
        this.each(function() {
          je.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    },
    removeData: function(e) {
      return this.each(function() {
        je.remove(this, e)
      })
    }
  }), fe.extend({
    queue: function(e, t, n) {
      var i;
      if (e) return t = (t || "fx") + "queue", i = Oe.get(e, t), n && (!i || Array.isArray(n) ? i = Oe.access(e, t, fe.makeArray(n)) : i.push(n)), i || []
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = fe.queue(e, t),
        i = n.length,
        r = n.shift(),
        o = fe._queueHooks(e, t);
      "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
        fe.dequeue(e, t)
      }, o)), !i && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return Oe.get(e, n) || Oe.access(e, n, {
        empty: fe.Callbacks("once memory").add(function() {
          Oe.remove(e, [t + "queue", n])
        })
      })
    }
  }), fe.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var n = fe.queue(this, e, t);
        fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        fe.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, i = 1,
        r = fe.Deferred(),
        o = this,
        s = this.length,
        a = function() {
          --i || r.resolveWith(o, [o])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Oe.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      return a(), r.promise(t)
    }
  });
  var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    qe = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
    Me = ["Top", "Right", "Bottom", "Left"],
    Le = function(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && fe.contains(e.ownerDocument, e) && "none" === fe.css(e, "display")
    },
    He = function(e, t, n, i) {
      var r, o, s = {};
      for (o in t) s[o] = e.style[o], e.style[o] = t[o];
      for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
      return r
    },
    Ie = {};
  fe.fn.extend({
    show: function() {
      return y(this, !0)
    },
    hide: function() {
      return y(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        Le(this) ? fe(this).show() : fe(this).hide()
      })
    }
  });
  var ze = /^(?:checkbox|radio)$/i,
    Re = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    We = /^$|^module$|\/(?:java|ecma)script/i,
    Ve = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
  var Ue, Be, Xe = /<|&#?\w+;/;
  Ue = J.createDocumentFragment().appendChild(J.createElement("div")), (Be = J.createElement("input")).setAttribute("type", "radio"), Be.setAttribute("checked", "checked"), Be.setAttribute("name", "t"), Ue.appendChild(Be), ue.checkClone = Ue.cloneNode(!0).cloneNode(!0).lastChild.checked, Ue.innerHTML = "<textarea>x</textarea>", ue.noCloneChecked = !!Ue.cloneNode(!0).lastChild.defaultValue;
  var Ye = J.documentElement,
    Ze = /^key/,
    Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Qe = /^([^.]*)(?:\.(.+)|)/;
  fe.event = {
    global: {},
    add: function(e, t, n, i, r) {
      var o, s, a, l, u, d, c, p, f, h, v, g = Oe.get(e);
      if (g)
        for (n.handler && (n = (o = n).handler, r = o.selector), r && fe.find.matchesSelector(Ye, r), n.guid || (n.guid = fe.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
            return void 0 !== fe && fe.event.triggered !== t.type ? fe.event.dispatch.apply(e, arguments) : void 0
          }), u = (t = (t || "").match(Ce) || [""]).length; u--;) f = v = (a = Qe.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), f && (c = fe.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, c = fe.event.special[f] || {}, d = fe.extend({
          type: f,
          origType: v,
          data: i,
          handler: n,
          guid: n.guid,
          selector: r,
          needsContext: r && fe.expr.match.needsContext.test(r),
          namespace: h.join(".")
        }, o), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), fe.event.global[f] = !0)
    },
    remove: function(e, t, n, i, r) {
      var o, s, a, l, u, d, c, p, f, h, v, g = Oe.hasData(e) && Oe.get(e);
      if (g && (l = g.events)) {
        for (u = (t = (t || "").match(Ce) || [""]).length; u--;)
          if (f = v = (a = Qe.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
            for (c = fe.event.special[f] || {}, p = l[f = (i ? c.delegateType : c.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) d = p[o], !r && v !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(o, 1), d.selector && p.delegateCount--, c.remove && c.remove.call(e, d));
            s && !p.length && (c.teardown && !1 !== c.teardown.call(e, h, g.handle) || fe.removeEvent(e, f, g.handle), delete l[f])
          } else
            for (f in l) fe.event.remove(e, f + t[u], n, i, !0);
        fe.isEmptyObject(l) && Oe.remove(e, "handle events")
      }
    },
    dispatch: function(e) {
      var t, n, i, r, o, s, a = fe.event.fix(e),
        l = new Array(arguments.length),
        u = (Oe.get(this, "events") || {})[a.type] || [],
        d = fe.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (a.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, a)) {
        for (s = fe.event.handlers.call(this, a, u), t = 0;
          (r = s[t++]) && !a.isPropagationStopped();)
          for (a.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((fe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, a), a.result
      }
    },
    handlers: function(e, t) {
      var n, i, r, o, s, a = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !("click" === e.type && e.button >= 1))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? fe(r, this).index(u) > -1 : fe.find(r, this, null, [u]).length), s[r] && o.push(i);
            o.length && a.push({
              elem: u,
              handlers: o
            })
          } return u = this, l < t.length && a.push({
        elem: u,
        handlers: t.slice(l)
      }), a
    },
    addProp: function(e, t) {
      Object.defineProperty(fe.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: de(t) ? function() {
          if (this.originalEvent) return t(this.originalEvent)
        } : function() {
          if (this.originalEvent) return this.originalEvent[e]
        },
        set: function(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          })
        }
      })
    },
    fix: function(e) {
      return e[fe.expando] ? e : new fe.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== C() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === C() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
        },
        _default: function(e) {
          return o(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, fe.removeEvent = function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, fe.Event = function(e, t) {
    if (!(this instanceof fe.Event)) return new fe.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? T : k, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[fe.expando] = !0
  }, fe.Event.prototype = {
    constructor: fe.Event,
    isDefaultPrevented: k,
    isPropagationStopped: k,
    isImmediatePropagationStopped: k,
    isSimulated: !1,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = T, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = T, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = T, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, fe.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function(e) {
      var t = e.button;
      return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, fe.event.addProp), fe.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    fe.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, i = e.relatedTarget,
          r = e.handleObj;
        return i && (i === this || fe.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), fe.fn.extend({
    on: function(e, t, n, i) {
      return S(this, e, t, n, i)
    },
    one: function(e, t, n, i) {
      return S(this, e, t, n, i, 1)
    },
    off: function(e, t, n) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (r in e) this.off(r, t, e[r]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = k), this.each(function() {
        fe.event.remove(this, e, n, t)
      })
    }
  });
  var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ke = /<script|<style|<link/i,
    et = /checked\s*(?:[^=]|=\s*.checked.)/i,
    tt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  fe.extend({
    htmlPrefilter: function(e) {
      return e.replace(Je, "<$1></$2>")
    },
    clone: function(e, t, n) {
      var i, r, o, s, a, l, u, d = e.cloneNode(!0),
        c = fe.contains(e.ownerDocument, e);
      if (!(ue.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
        for (s = w(d), i = 0, r = (o = w(e)).length; i < r; i++) a = o[i], "input" === (u = (l = s[i]).nodeName.toLowerCase()) && ze.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
      if (t)
        if (n)
          for (o = o || w(e), s = s || w(d), i = 0, r = o.length; i < r; i++) E(o[i], s[i]);
        else E(e, d);
      return (s = w(d, "script")).length > 0 && b(s, !c && w(e, "script")), d
    },
    cleanData: function(e) {
      for (var t, n, i, r = fe.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (De(n)) {
          if (t = n[Oe.expando]) {
            if (t.events)
              for (i in t.events) r[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, t.handle);
            n[Oe.expando] = void 0
          }
          n[je.expando] && (n[je.expando] = void 0)
        }
    }
  }), fe.fn.extend({
    detach: function(e) {
      return O(this, e, !0)
    },
    remove: function(e) {
      return O(this, e)
    },
    text: function(e) {
      return _e(this, function(e) {
        return void 0 === e ? fe.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function() {
      return D(this, arguments, function(e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $(this, e).appendChild(e)
      })
    },
    prepend: function() {
      return D(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = $(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return D(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return D(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (fe.cleanData(w(e, !1)), e.textContent = "");
      return this
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return fe.clone(this, e, t)
      })
    },
    html: function(e) {
      return _e(this, function(e) {
        var t = this[0] || {},
          n = 0,
          i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Ke.test(e) && !Ve[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = fe.htmlPrefilter(e);
          try {
            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (fe.cleanData(w(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = [];
      return D(this, arguments, function(t) {
        var n = this.parentNode;
        fe.inArray(this, e) < 0 && (fe.cleanData(w(this)), n && n.replaceChild(t, this))
      }, e)
    }
  }), fe.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    fe.fn[e] = function(e) {
      for (var n, i = [], r = fe(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), fe(r[s])[t](n), ne.apply(i, n.get());
      return this.pushStack(i)
    }
  });
  var nt = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
    it = function(t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e), n.getComputedStyle(t)
    },
    rt = new RegExp(Me.join("|"), "i");
  ! function() {
    function t() {
      if (u) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ye.appendChild(l).appendChild(u);
        var t = e.getComputedStyle(u);
        i = "1%" !== t.top, a = 12 === n(t.marginLeft), u.style.right = "60%", s = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", o = 36 === u.offsetWidth || "absolute", Ye.removeChild(l), u = null
      }
    }

    function n(e) {
      return Math.round(parseFloat(e))
    }
    var i, r, o, s, a, l = J.createElement("div"),
      u = J.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ue.clearCloneStyle = "content-box" === u.style.backgroundClip, fe.extend(ue, {
      boxSizingReliable: function() {
        return t(), r
      },
      pixelBoxStyles: function() {
        return t(), s
      },
      pixelPosition: function() {
        return t(), i
      },
      reliableMarginLeft: function() {
        return t(), a
      },
      scrollboxSize: function() {
        return t(), o
      }
    }))
  }();
  var ot = /^(none|table(?!-c[ea]).+)/,
    st = /^--/,
    at = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    lt = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    ut = ["Webkit", "Moz", "ms"],
    dt = J.createElement("div").style;
  fe.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = j(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, o, s, a = f(t),
          l = st.test(t),
          u = e.style;
        if (l || (t = P(a)), s = fe.cssHooks[t] || fe.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
        "string" == (o = typeof n) && (r = qe.exec(n)) && r[1] && (n = g(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (fe.cssNumber[a] ? "" : "px")), ue.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
      }
    },
    css: function(e, t, n, i) {
      var r, o, s, a = f(t);
      return st.test(t) || (t = P(a)), (s = fe.cssHooks[t] || fe.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = j(e, t, i)), "normal" === r && t in lt && (r = lt[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
    }
  }), fe.each(["height", "width"], function(e, t) {
    fe.cssHooks[t] = {
      get: function(e, n, i) {
        if (n) return !ot.test(fe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? M(e, t, i) : He(e, at, function() {
          return M(e, t, i)
        })
      },
      set: function(e, n, i) {
        var r, o = it(e),
          s = "border-box" === fe.css(e, "boxSizing", !1, o),
          a = i && q(e, t, i, s, o);
        return s && ue.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - q(e, t, "border", !1, o) - .5)), a && (r = qe.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = fe.css(e, t)), N(0, n, a)
      }
    }
  }), fe.cssHooks.marginLeft = F(ue.reliableMarginLeft, function(e, t) {
    if (t) return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
      marginLeft: 0
    }, function() {
      return e.getBoundingClientRect().left
    })) + "px"
  }), fe.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    fe.cssHooks[e + t] = {
      expand: function(n) {
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Me[i] + t] = o[i] || o[i - 2] || o[0];
        return r
      }
    }, "margin" !== e && (fe.cssHooks[e + t].set = N)
  }), fe.fn.extend({
    css: function(e, t) {
      return _e(this, function(e, t, n) {
        var i, r, o = {},
          s = 0;
        if (Array.isArray(t)) {
          for (i = it(e), r = t.length; s < r; s++) o[t[s]] = fe.css(e, t[s], !1, i);
          return o
        }
        return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
      }, e, t, arguments.length > 1)
    }
  }), fe.Tween = L, L.prototype = {
    constructor: L,
    init: function(e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (fe.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = L.propHooks[this.prop];
      return e && e.get ? e.get(this) : L.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = L.propHooks[this.prop];
      return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
    }
  }, L.prototype.init.prototype = L.prototype, L.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      },
      set: function(e) {
        fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, fe.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, fe.fx = L.prototype.init, fe.fx.step = {};
  var ct, pt, ft = /^(?:toggle|show|hide)$/,
    ht = /queueHooks$/;
  fe.Animation = fe.extend(W, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return g(n.elem, e, qe.exec(t), n), n
        }]
      },
      tweener: function(e, t) {
        de(e) ? (t = e, e = ["*"]) : e = e.match(Ce);
        for (var n, i = 0, r = e.length; i < r; i++) n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
      },
      prefilters: [function(e, t, n) {
        var i, r, o, s, a, l, u, d, c = "width" in t || "height" in t,
          p = this,
          f = {},
          h = e.style,
          v = e.nodeType && Le(e),
          g = Oe.get(e, "fxshow");
        for (i in n.queue || (null == (s = fe._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
            s.unqueued || a()
          }), s.unqueued++, p.always(function() {
            p.always(function() {
              s.unqueued--, fe.queue(e, "fx").length || s.empty.fire()
            })
          })), t)
          if (r = t[i], ft.test(r)) {
            if (delete t[i], o = o || "toggle" === r, r === (v ? "hide" : "show")) {
              if ("show" !== r || !g || void 0 === g[i]) continue;
              v = !0
            }
            f[i] = g && g[i] || fe.style(e, i)
          } if ((l = !fe.isEmptyObject(t)) || !fe.isEmptyObject(f))
          for (i in c && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = g && g.display) && (u = Oe.get(e, "display")), "none" === (d = fe.css(e, "display")) && (u ? d = u : (y([e], !0), u = e.style.display || u, d = fe.css(e, "display"), y([e]))), ("inline" === d || "inline-block" === d && null != u) && "none" === fe.css(e, "float") && (l || (p.done(function() {
              h.display = u
            }), null == u && (d = h.display, u = "none" === d ? "" : d)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
              h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), l = !1, f) l || (g ? "hidden" in g && (v = g.hidden) : g = Oe.access(e, "fxshow", {
            display: u
          }), o && (g.hidden = !v), v && y([e], !0), p.done(function() {
            for (i in v || y([e]), Oe.remove(e, "fxshow"), f) fe.style(e, i, f[i])
          })), l = R(v ? g[i] : 0, i, p), i in g || (g[i] = l.start, v && (l.end = l.start, l.start = 0))
      }],
      prefilter: function(e, t) {
        t ? W.prefilters.unshift(e) : W.prefilters.push(e)
      }
    }), fe.speed = function(e, t, n) {
      var i = e && "object" == typeof e ? fe.extend({}, e) : {
        complete: n || !n && t || de(e) && e,
        duration: e,
        easing: n && t || t && !de(t) && t
      };
      return fe.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in fe.fx.speeds ? i.duration = fe.fx.speeds[i.duration] : i.duration = fe.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
        de(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue)
      }, i
    }, fe.fn.extend({
      fadeTo: function(e, t, n, i) {
        return this.filter(Le).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, i)
      },
      animate: function(e, t, n, i) {
        var r = fe.isEmptyObject(e),
          o = fe.speed(t, n, i),
          s = function() {
            var t = W(this, fe.extend({}, e), o);
            (r || Oe.get(this, "finish")) && t.stop(!0)
          };
        return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function(e, t, n) {
        var i = function(e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            r = null != e && e + "queueHooks",
            o = fe.timers,
            s = Oe.get(this);
          if (r) s[r] && s[r].stop && i(s[r]);
          else
            for (r in s) s[r] && s[r].stop && ht.test(r) && i(s[r]);
          for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
          !t && n || fe.dequeue(this, e)
        })
      },
      finish: function(e) {
        return !1 !== e && (e = e || "fx"), this.each(function() {
          var t, n = Oe.get(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            o = fe.timers,
            s = i ? i.length : 0;
          for (n.finish = !0, fe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
          delete n.finish
        })
      }
    }), fe.each(["toggle", "show", "hide"], function(e, t) {
      var n = fe.fn[t];
      fe.fn[t] = function(e, i, r) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, i, r)
      }
    }), fe.each({
      slideDown: z("show"),
      slideUp: z("hide"),
      slideToggle: z("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      fe.fn[e] = function(e, n, i) {
        return this.animate(t, e, n, i)
      }
    }), fe.timers = [], fe.fx.tick = function() {
      var e, t = 0,
        n = fe.timers;
      for (ct = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || fe.fx.stop(), ct = void 0
    }, fe.fx.timer = function(e) {
      fe.timers.push(e), fe.fx.start()
    }, fe.fx.interval = 13, fe.fx.start = function() {
      pt || (pt = !0, H())
    }, fe.fx.stop = function() {
      pt = null
    }, fe.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, fe.fn.delay = function(t, n) {
      return t = fe.fx && fe.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
        var r = e.setTimeout(n, t);
        i.stop = function() {
          e.clearTimeout(r)
        }
      })
    },
    function() {
      var e = J.createElement("input"),
        t = J.createElement("select").appendChild(J.createElement("option"));
      e.type = "checkbox", ue.checkOn = "" !== e.value, ue.optSelected = t.selected, (e = J.createElement("input")).value = "t", e.type = "radio", ue.radioValue = "t" === e.value
    }();
  var vt, gt = fe.expr.attrHandle;
  fe.fn.extend({
    attr: function(e, t) {
      return _e(this, fe.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        fe.removeAttr(this, e)
      })
    }
  }), fe.extend({
    attr: function(e, t, n) {
      var i, r, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? fe.prop(e, t, n) : (1 === o && fe.isXMLDoc(e) || (r = fe.attrHooks[t.toLowerCase()] || (fe.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void fe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = fe.find.attr(e, t)) ? void 0 : i)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!ue.radioValue && "radio" === t && o(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function(e, t) {
      var n, i = 0,
        r = t && t.match(Ce);
      if (r && 1 === e.nodeType)
        for (; n = r[i++];) e.removeAttribute(n)
    }
  }), vt = {
    set: function(e, t, n) {
      return !1 === t ? fe.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = gt[t] || fe.find.attr;
    gt[t] = function(e, t, i) {
      var r, o, s = t.toLowerCase();
      return i || (o = gt[s], gt[s] = r, r = null != n(e, t, i) ? s : null, gt[s] = o), r
    }
  });
  var mt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  fe.fn.extend({
    prop: function(e, t) {
      return _e(this, fe.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[fe.propFix[e] || e]
      })
    }
  }), fe.extend({
    prop: function(e, t, n) {
      var i, r, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, r = fe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = fe.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : mt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), ue.optSelected || (fe.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    fe.propFix[this.toLowerCase()] = this
  }), fe.fn.extend({
    addClass: function(e) {
      var t, n, i, r, o, s, a, l = 0;
      if (de(e)) return this.each(function(t) {
        fe(this).addClass(e.call(this, t, U(this)))
      });
      if ((t = B(e)).length)
        for (; n = this[l++];)
          if (r = U(n), i = 1 === n.nodeType && " " + V(r) + " ") {
            for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
            r !== (a = V(i)) && n.setAttribute("class", a)
          } return this
    },
    removeClass: function(e) {
      var t, n, i, r, o, s, a, l = 0;
      if (de(e)) return this.each(function(t) {
        fe(this).removeClass(e.call(this, t, U(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = B(e)).length)
        for (; n = this[l++];)
          if (r = U(n), i = 1 === n.nodeType && " " + V(r) + " ") {
            for (s = 0; o = t[s++];)
              for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
            r !== (a = V(i)) && n.setAttribute("class", a)
          } return this
    },
    toggleClass: function(e, t) {
      var n = typeof e,
        i = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : de(e) ? this.each(function(n) {
        fe(this).toggleClass(e.call(this, n, U(this), t), t)
      }) : this.each(function() {
        var t, r, o, s;
        if (i)
          for (r = 0, o = fe(this), s = B(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        else void 0 !== e && "boolean" !== n || ((t = U(this)) && Oe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Oe.get(this, "__className__") || ""))
      })
    },
    hasClass: function(e) {
      var t, n, i = 0;
      for (t = " " + e + " "; n = this[i++];)
        if (1 === n.nodeType && (" " + V(U(n)) + " ").indexOf(t) > -1) return !0;
      return !1
    }
  });
  var wt = /\r/g;
  fe.fn.extend({
    val: function(e) {
      var t, n, i, r = this[0];
      return arguments.length ? (i = de(e), this.each(function(n) {
        var r;
        1 === this.nodeType && (null == (r = i ? e.call(this, n, fe(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = fe.map(r, function(e) {
          return null == e ? "" : e + ""
        })), (t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
      })) : r ? (t = fe.valHooks[r.type] || fe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
    }
  }), fe.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = fe.find.attr(e, "value");
          return null != t ? t : V(fe.text(e))
        }
      },
      select: {
        get: function(e) {
          var t, n, i, r = e.options,
            s = e.selectedIndex,
            a = "select-one" === e.type,
            l = a ? null : [],
            u = a ? s + 1 : r.length;
          for (i = s < 0 ? u : a ? s : 0; i < u; i++)
            if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
              if (t = fe(n).val(), a) return t;
              l.push(t)
            } return l
        },
        set: function(e, t) {
          for (var n, i, r = e.options, o = fe.makeArray(t), s = r.length; s--;)((i = r[s]).selected = fe.inArray(fe.valHooks.option.get(i), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), fe.each(["radio", "checkbox"], function() {
    fe.valHooks[this] = {
      set: function(e, t) {
        if (Array.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) > -1
      }
    }, ue.checkOn || (fe.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), ue.focusin = "onfocusin" in e;
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function(e) {
      e.stopPropagation()
    };
  fe.extend(fe.event, {
    trigger: function(t, n, i, r) {
      var o, s, a, l, u, d, c, p, f = [i || J],
        h = se.call(t, "type") ? t.type : t,
        v = se.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = p = a = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !bt.test(h + fe.event.triggered) && (h.indexOf(".") > -1 && (v = h.split("."), h = v.shift(), v.sort()), u = h.indexOf(":") < 0 && "on" + h, (t = t[fe.expando] ? t : new fe.Event(h, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : fe.makeArray(n, [t]), c = fe.event.special[h] || {}, r || !c.trigger || !1 !== c.trigger.apply(i, n))) {
        if (!r && !c.noBubble && !ce(i)) {
          for (l = c.delegateType || h, bt.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
          a === (i.ownerDocument || J) && f.push(a.defaultView || a.parentWindow || e)
        }
        for (o = 0;
          (s = f[o++]) && !t.isPropagationStopped();) p = s, t.type = o > 1 ? l : c.bindType || h, (d = (Oe.get(s, "events") || {})[t.type] && Oe.get(s, "handle")) && d.apply(s, n), (d = u && s[u]) && d.apply && De(s) && (t.result = d.apply(s, n), !1 === t.result && t.preventDefault());
        return t.type = h, r || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), n) || !De(i) || u && de(i[h]) && !ce(i) && ((a = i[u]) && (i[u] = null), fe.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, xt), i[h](), t.isPropagationStopped() && p.removeEventListener(h, xt), fe.event.triggered = void 0, a && (i[u] = a)), t.result
      }
    },
    simulate: function(e, t, n) {
      var i = fe.extend(new fe.Event, n, {
        type: e,
        isSimulated: !0
      });
      fe.event.trigger(i, null, t)
    }
  }), fe.fn.extend({
    trigger: function(e, t) {
      return this.each(function() {
        fe.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) return fe.event.trigger(e, t, n, !0)
    }
  }), ue.focusin || fe.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      fe.event.simulate(t, e.target, fe.event.fix(e))
    };
    fe.event.special[t] = {
      setup: function() {
        var i = this.ownerDocument || this,
          r = Oe.access(i, t);
        r || i.addEventListener(e, n, !0), Oe.access(i, t, (r || 0) + 1)
      },
      teardown: function() {
        var i = this.ownerDocument || this,
          r = Oe.access(i, t) - 1;
        r ? Oe.access(i, t, r) : (i.removeEventListener(e, n, !0), Oe.remove(i, t))
      }
    }
  });
  var Tt = e.location,
    kt = Date.now(),
    Ct = /\?/;
  fe.parseXML = function(t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (e) {
      n = void 0
    }
    return n && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n
  };
  var St = /\[\]$/,
    $t = /\r?\n/g,
    _t = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;
  fe.param = function(e, t) {
    var n, i = [],
      r = function(e, t) {
        var n = de(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
    if (Array.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
      r(this.name, this.value)
    });
    else
      for (n in e) X(n, e[n], t, r);
    return i.join("&")
  }, fe.fn.extend({
    serialize: function() {
      return fe.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = fe.prop(this, "elements");
        return e ? fe.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !fe(this).is(":disabled") && At.test(this.nodeName) && !_t.test(e) && (this.checked || !ze.test(e))
      }).map(function(e, t) {
        var n = fe(this).val();
        return null == n ? null : Array.isArray(n) ? fe.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace($t, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace($t, "\r\n")
        }
      }).get()
    }
  });
  var Et = /%20/g,
    Dt = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Nt = {},
    qt = {},
    Mt = "*/".concat("*"),
    Lt = J.createElement("a");
  Lt.href = Tt.href, fe.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Mt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": fe.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? G(G(e, fe.ajaxSettings), t) : G(fe.ajaxSettings, e)
    },
    ajaxPrefilter: Y(Nt),
    ajaxTransport: Y(qt),
    ajax: function(t, n) {
      function i(t, n, i, a) {
        var u, p, f, b, x, T = n;
        d || (d = !0, l && e.clearTimeout(l), r = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (b = function(e, t, n) {
          for (var i, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i)
            for (r in a)
              if (a[r] && a[r].test(i)) {
                l.unshift(r);
                break
              } if (l[0] in n) o = l[0];
          else {
            for (r in n) {
              if (!l[0] || e.converters[r + " " + l[0]]) {
                o = r;
                break
              }
              s || (s = r)
            }
            o = o || s
          }
          if (o) return o !== l[0] && l.unshift(o), n[o]
        }(h, k, i)), b = function(e, t, n, i) {
          var r, o, s, a, l, u = {},
            d = e.dataTypes.slice();
          if (d[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
          for (o = d.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = d.shift())
              if ("*" === o) o = l;
              else if ("*" !== l && l !== o) {
            if (!(s = u[l + " " + o] || u["* " + o]))
              for (r in u)
                if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                  !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], d.unshift(a[1]));
                  break
                } if (!0 !== s)
              if (s && e.throws) t = s(t);
              else try {
                t = s(t)
              } catch (e) {
                return {
                  state: "parsererror",
                  error: s ? e : "No conversion from " + l + " to " + o
                }
              }
          }
          return {
            state: "success",
            data: t
          }
        }(h, b, k, u), u ? (h.ifModified && ((x = k.getResponseHeader("Last-Modified")) && (fe.lastModified[o] = x), (x = k.getResponseHeader("etag")) && (fe.etag[o] = x)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, u = !(f = b.error))) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || T) + "", u ? m.resolveWith(v, [p, T, k]) : m.rejectWith(v, [k, T, f]), k.statusCode(w), w = void 0, c && g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, h, u ? p : f]), y.fireWith(v, [k, T]), c && (g.trigger("ajaxComplete", [k, h]), --fe.active || fe.event.trigger("ajaxStop")))
      }
      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var r, o, s, a, l, u, d, c, p, f, h = fe.ajaxSetup({}, n),
        v = h.context || h,
        g = h.context && (v.nodeType || v.jquery) ? fe(v) : fe.event,
        m = fe.Deferred(),
        y = fe.Callbacks("once memory"),
        w = h.statusCode || {},
        b = {},
        x = {},
        T = "canceled",
        k = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (d) {
              if (!a)
                for (a = {}; t = jt.exec(s);) a[t[1].toLowerCase()] = t[2];
              t = a[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return d ? s : null
          },
          setRequestHeader: function(e, t) {
            return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this
          },
          overrideMimeType: function(e) {
            return null == d && (h.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (d) k.always(e[k.status]);
              else
                for (t in e) w[t] = [w[t], e[t]];
            return this
          },
          abort: function(e) {
            var t = e || T;
            return r && r.abort(t), i(0, t), this
          }
        };
      if (m.promise(k), h.url = ((t || h.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ce) || [""], null == h.crossDomain) {
        u = J.createElement("a");
        try {
          u.href = h.url, u.href = u.href, h.crossDomain = Lt.protocol + "//" + Lt.host != u.protocol + "//" + u.host
        } catch (e) {
          h.crossDomain = !0
        }
      }
      if (h.data && h.processData && "string" != typeof h.data && (h.data = fe.param(h.data, h.traditional)), Z(Nt, h, n, k), d) return k;
      for (p in (c = fe.event && h.global) && 0 == fe.active++ && fe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ft.test(h.type), o = h.url.replace(Dt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Et, "+")) : (f = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Ct.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ot, "$1"), f = (Ct.test(o) ? "&" : "?") + "_=" + kt++ + f), h.url = o + f), h.ifModified && (fe.lastModified[o] && k.setRequestHeader("If-Modified-Since", fe.lastModified[o]), fe.etag[o] && k.setRequestHeader("If-None-Match", fe.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : h.accepts["*"]), h.headers) k.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(v, k, h) || d)) return k.abort();
      if (T = "abort", y.add(h.complete), k.done(h.success), k.fail(h.error), r = Z(qt, h, n, k)) {
        if (k.readyState = 1, c && g.trigger("ajaxSend", [k, h]), d) return k;
        h.async && h.timeout > 0 && (l = e.setTimeout(function() {
          k.abort("timeout")
        }, h.timeout));
        try {
          d = !1, r.send(b, i)
        } catch (e) {
          if (d) throw e;
          i(-1, e)
        }
      } else i(-1, "No Transport");
      return k
    },
    getJSON: function(e, t, n) {
      return fe.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return fe.get(e, void 0, t, "script")
    }
  }), fe.each(["get", "post"], function(e, t) {
    fe[t] = function(e, n, i, r) {
      return de(n) && (r = r || i, i = n, n = void 0), fe.ajax(fe.extend({
        url: e,
        type: t,
        dataType: r,
        data: n,
        success: i
      }, fe.isPlainObject(e) && e))
    }
  }), fe._evalUrl = function(e) {
    return fe.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    })
  }, fe.fn.extend({
    wrapAll: function(e) {
      var t;
      return this[0] && (de(e) && (e = e.call(this[0])), t = fe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function(e) {
      return de(e) ? this.each(function(t) {
        fe(this).wrapInner(e.call(this, t))
      }) : this.each(function() {
        var t = fe(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = de(e);
      return this.each(function(n) {
        fe(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function(e) {
      return this.parent(e).not("body").each(function() {
        fe(this).replaceWith(this.childNodes)
      }), this
    }
  }), fe.expr.pseudos.hidden = function(e) {
    return !fe.expr.pseudos.visible(e)
  }, fe.expr.pseudos.visible = function(e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, fe.ajaxSettings.xhr = function() {
    try {
      return new e.XMLHttpRequest
    } catch (e) {}
  };
  var Ht = {
      0: 200,
      1223: 204
    },
    It = fe.ajaxSettings.xhr();
  ue.cors = !!It && "withCredentials" in It, ue.ajax = It = !!It, fe.ajaxTransport(function(t) {
    var n, i;
    if (ue.cors || It && !t.crossDomain) return {
      send: function(r, o) {
        var s, a = t.xhr();
        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
          for (s in t.xhrFields) a[s] = t.xhrFields[s];
        for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
        n = function(e) {
          return function() {
            n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ht[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
              binary: a.response
            } : {
              text: a.responseText
            }, a.getAllResponseHeaders()))
          }
        }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
          4 === a.readyState && e.setTimeout(function() {
            n && i()
          })
        }, n = n("abort");
        try {
          a.send(t.hasContent && t.data || null)
        } catch (e) {
          if (n) throw e
        }
      },
      abort: function() {
        n && n()
      }
    }
  }), fe.ajaxPrefilter(function(e) {
    e.crossDomain && (e.contents.script = !1)
  }), fe.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {
        return fe.globalEval(e), e
      }
    }
  }), fe.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), fe.ajaxTransport("script", function(e) {
    var t, n;
    if (e.crossDomain) return {
      send: function(i, r) {
        t = fe("<script>").prop({
          charset: e.scriptCharset,
          src: e.url
        }).on("load error", n = function(e) {
          t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
        }), J.head.appendChild(t[0])
      },
      abort: function() {
        n && n()
      }
    }
  });
  var zt, Rt = [],
    Wt = /(=)\?(?=&|$)|\?\?/;
  fe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Rt.pop() || fe.expando + "_" + kt++;
      return this[e] = !0, e
    }
  }), fe.ajaxPrefilter("json jsonp", function(t, n, i) {
    var r, o, s, a = !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");
    if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = de(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Wt, "$1" + r) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
      return s || fe.error(r + " was not called"), s[0]
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
      s = arguments
    }, i.always(function() {
      void 0 === o ? fe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Rt.push(r)), s && de(o) && o(s[0]), s = o = void 0
    }), "script"
  }), ue.createHTMLDocument = ((zt = J.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), fe.parseHTML = function(e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (ue.createHTMLDocument ? ((i = (t = J.implementation.createHTMLDocument("")).createElement("base")).href = J.location.href, t.head.appendChild(i)) : t = J), o = !n && [], (r = we.exec(e)) ? [t.createElement(r[1])] : (r = x([e], t, o), o && o.length && fe(o).remove(), fe.merge([], r.childNodes)));
    var i, r, o
  }, fe.fn.load = function(e, t, n) {
    var i, r, o, s = this,
      a = e.indexOf(" ");
    return a > -1 && (i = V(e.slice(a)), e = e.slice(0, a)), de(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && fe.ajax({
      url: e,
      type: r || "GET",
      dataType: "html",
      data: t
    }).done(function(e) {
      o = arguments, s.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e)
    }).always(n && function(e, t) {
      s.each(function() {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    fe.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), fe.expr.pseudos.animated = function(e) {
    return fe.grep(fe.timers, function(t) {
      return e === t.elem
    }).length
  }, fe.offset = {
    setOffset: function(e, t, n) {
      var i, r, o, s, a, l, u = fe.css(e, "position"),
        d = fe(e),
        c = {};
      "static" === u && (e.style.position = "relative"), a = d.offset(), o = fe.css(e, "top"), l = fe.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = d.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), de(t) && (t = t.call(e, n, fe.extend({}, a))), null != t.top && (c.top = t.top - a.top + s), null != t.left && (c.left = t.left - a.left + r), "using" in t ? t.using.call(e, c) : d.css(c)
    }
  }, fe.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {
        fe.offset.setOffset(this, e, t)
      });
      var t, n, i = this[0];
      return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function() {
      if (this[0]) {
        var e, t, n, i = this[0],
          r = {
            top: 0,
            left: 0
          };
        if ("fixed" === fe.css(i, "position")) t = i.getBoundingClientRect();
        else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === fe.css(e, "position");) e = e.parentNode;
          e && e !== i && 1 === e.nodeType && ((r = fe(e).offset()).top += fe.css(e, "borderTopWidth", !0), r.left += fe.css(e, "borderLeftWidth", !0))
        }
        return {
          top: t.top - r.top - fe.css(i, "marginTop", !0),
          left: t.left - r.left - fe.css(i, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent; e && "static" === fe.css(e, "position");) e = e.offsetParent;
        return e || Ye
      })
    }
  }), fe.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = "pageYOffset" === t;
    fe.fn[e] = function(i) {
      return _e(this, function(e, i, r) {
        var o;
        if (ce(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
      }, e, i, arguments.length)
    }
  }), fe.each(["top", "left"], function(e, t) {
    fe.cssHooks[t] = F(ue.pixelPosition, function(e, n) {
      if (n) return n = j(e, t), nt.test(n) ? fe(e).position()[t] + "px" : n
    })
  }), fe.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    fe.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, i) {
      fe.fn[i] = function(r, o) {
        var s = arguments.length && (n || "boolean" != typeof r),
          a = n || (!0 === r || !0 === o ? "margin" : "border");
        return _e(this, function(t, n, r) {
          var o;
          return ce(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? fe.css(t, n, a) : fe.style(t, n, r, a)
        }, t, s ? r : void 0, s)
      }
    })
  }), fe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
    fe.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), fe.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), fe.fn.extend({
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, i) {
      return this.on(t, e, n, i)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), fe.proxy = function(e, t) {
    var n, i, r;
    if ("string" == typeof t && (n = e[t], t = e, e = n), de(e)) return i = ee.call(arguments, 2), (r = function() {
      return e.apply(t || this, i.concat(ee.call(arguments)))
    }).guid = e.guid = e.guid || fe.guid++, r
  }, fe.holdReady = function(e) {
    e ? fe.readyWait++ : fe.ready(!0)
  }, fe.isArray = Array.isArray, fe.parseJSON = JSON.parse, fe.nodeName = o, fe.isFunction = de, fe.isWindow = ce, fe.camelCase = f, fe.type = i, fe.now = Date.now, fe.isNumeric = function(e) {
    var t = fe.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return fe
  });
  var Vt = e.jQuery,
    Ut = e.$;
  return fe.noConflict = function(t) {
    return e.$ === fe && (e.$ = Ut), t && e.jQuery === fe && (e.jQuery = Vt), fe
  }, t || (e.jQuery = e.$ = fe), fe
}),
function(e, t) {
  "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.LazyLoad = t()
}(this, function() {
  "use strict";
  var e = "undefined" != typeof window,
    t = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
    n = e && "IntersectionObserver" in window,
    i = e && "classList" in document.createElement("p"),
    r = {
      elements_selector: "img",
      container: t || e ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      load_delay: 0,
      auto_unobserve: !0,
      callback_enter: null,
      callback_exit: null,
      callback_reveal: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      use_native: !1
    },
    o = function(e, t) {
      var n, i = new e(t);
      try {
        n = new CustomEvent("LazyLoad::Initialized", {
          detail: {
            instance: i
          }
        })
      } catch (e) {
        (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
          instance: i
        })
      }
      window.dispatchEvent(n)
    },
    s = function(e, t) {
      return e.getAttribute("data-" + t)
    },
    a = function(e, t, n) {
      var i = "data-" + t;
      null !== n ? e.setAttribute(i, n) : e.removeAttribute(i)
    },
    l = function(e) {
      return "true" === s(e, "was-processed")
    },
    u = function(e, t) {
      return a(e, "ll-timeout", t)
    },
    d = function(e) {
      return s(e, "ll-timeout")
    },
    c = function(e, t) {
      e && e(t)
    },
    p = function(e, t) {
      e._loadingCount += t, 0 === e._elements.length && 0 === e._loadingCount && c(e._settings.callback_finish)
    },
    f = function(e) {
      for (var t, n = [], i = 0; t = e.children[i]; i += 1) "SOURCE" === t.tagName && n.push(t);
      return n
    },
    h = function(e, t, n) {
      n && e.setAttribute(t, n)
    },
    v = function(e, t) {
      h(e, "sizes", s(e, t.data_sizes)), h(e, "srcset", s(e, t.data_srcset)), h(e, "src", s(e, t.data_src))
    },
    g = {
      IMG: function(e, t) {
        var n = e.parentNode;
        n && "PICTURE" === n.tagName && f(n).forEach(function(e) {
          v(e, t)
        }), v(e, t)
      },
      IFRAME: function(e, t) {
        h(e, "src", s(e, t.data_src))
      },
      VIDEO: function(e, t) {
        f(e).forEach(function(e) {
          h(e, "src", s(e, t.data_src))
        }), h(e, "src", s(e, t.data_src)), e.load()
      }
    },
    m = function(e, t) {
      i ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
    },
    y = function(e, t, n) {
      e.addEventListener(t, n, {passive: true})
    },
    w = function(e, t, n) {
      e.removeEventListener(t, n)
    },
    b = function(e, t, n) {
      w(e, "load", t), w(e, "loadeddata", t), w(e, "error", n)
    },
    x = function(e, t, n) {
      var r = n._settings,
        o = t ? r.class_loaded : r.class_error,
        s = t ? r.callback_loaded : r.callback_error,
        a = e.target;
      ! function(e, t) {
        i ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
      }(a, r.class_loading), m(a, o), c(s, a), p(n, -1)
    },
    T = ["IMG", "IFRAME", "VIDEO"],
    k = function(e, t) {
      var n = t._observer;
      S(e, t), n && t._settings.auto_unobserve && n.unobserve(e)
    },
    C = function(e) {
      var t = d(e);
      t && (clearTimeout(t), u(e, null))
    },
    S = function(e, t, n) {
      var i = t._settings;
      !n && l(e) || (T.indexOf(e.tagName) > -1 && (function(e, t) {
        var n = function n(r) {
            x(r, !0, t), b(e, n, i)
          },
          i = function i(r) {
            x(r, !1, t), b(e, n, i)
          };
        ! function(e, t, n) {
          y(e, "load", t), y(e, "loadeddata", t), y(e, "error", n)
        }(e, n, i)
      }(e, t), m(e, i.class_loading)), function(e, t) {
        var n, i, r = t._settings,
          o = e.tagName,
          a = g[o];
        if (a) return a(e, r), p(t, 1), void(t._elements = (n = t._elements, i = e, n.filter(function(e) {
          return e !== i
        })));
        ! function(e, t) {
          var n = s(e, t.data_src),
            i = s(e, t.data_bg);
          n && (e.style.backgroundImage = 'url("'.concat(n, '")')), i && (e.style.backgroundImage = i)
        }(e, r)
      }(e, t), function(e) {
        a(e, "was-processed", "true")
      }(e), c(i.callback_reveal, e), c(i.callback_set, e))
    },
    $ = ["IMG", "IFRAME"],
    _ = function(e, t) {
      return function(e) {
        return e.filter(function(e) {
          return !l(e)
        })
      }((n = e || function(e) {
        return e.container.querySelectorAll(e.elements_selector)
      }(t), Array.prototype.slice.call(n)));
      var n
    },
    A = function(e, t) {
      this._settings = function(e) {
          return _extends({}, r, e)
        }(e), this._loadingCount = 0,
        function(e) {
          return !!n && (e._observer = new IntersectionObserver(function(t) {
            t.forEach(function(t) {
              return function(e) {
                return e.isIntersecting || e.intersectionRatio > 0
              }(t) ? function(e, t) {
                var n = t._settings;
                c(n.callback_enter, e), n.load_delay ? function(e, t) {
                  var n = t._settings.load_delay,
                    i = d(e);
                  i || (i = setTimeout(function() {
                    k(e, t), C(e)
                  }, n), u(e, i))
                }(e, t) : k(e, t)
              }(t.target, e) : function(e, t) {
                var n = t._settings;
                c(n.callback_exit, e), n.load_delay && C(e)
              }(t.target, e)
            })
          }, {
            root: (t = e._settings).container === document ? null : t.container,
            rootMargin: t.thresholds || t.threshold + "px"
          }), !0);
          var t
        }(this), this.update(t)
    };
  return A.prototype = {
    update: function(e) {
      var n, i = this,
        r = this._settings;
      this._elements = _(e, r), !t && this._observer ? (r.use_native && "loading" in HTMLImageElement.prototype && ((n = this)._elements.forEach(function(e) {
        -1 !== $.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), S(e, n))
      }), this._elements = _(e, r)), this._elements.forEach(function(e) {
        i._observer.observe(e)
      })) : this.loadAll()
    },
    destroy: function() {
      var e = this;
      this._observer && (this._elements.forEach(function(t) {
        e._observer.unobserve(t)
      }), this._observer = null), this._elements = null, this._settings = null
    },
    load: function(e, t) {
      S(e, this, t)
    },
    loadAll: function() {
      var e = this;
      this._elements.forEach(function(t) {
        k(t, e)
      })
    }
  }, e && function(e, t) {
    if (t)
      if (t.length)
        for (var n, i = 0; n = t[i]; i += 1) o(e, n);
      else o(e, t)
  }(A, window.lazyLoadOptions), A
}),
function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
  "use strict";
  var t = window.Slick || {};
  (t = function() {
    var t = 0;
    return function(n, i) {
      var r, o = this;
      o.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: e(n),
        appendDots: e(n),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function(t, n) {
          return e('<button type="button" />').text(n + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, o.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, e.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = e(n), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = e(n).data("slick") || {}, o.options = e.extend({}, o.defaults, i, r), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = e.proxy(o.autoPlay, o), o.autoPlayClear = e.proxy(o.autoPlayClear, o), o.autoPlayIterator = e.proxy(o.autoPlayIterator, o), o.changeSlide = e.proxy(o.changeSlide, o), o.clickHandler = e.proxy(o.clickHandler, o), o.selectHandler = e.proxy(o.selectHandler, o), o.setPosition = e.proxy(o.setPosition, o), o.swipeHandler = e.proxy(o.swipeHandler, o), o.dragHandler = e.proxy(o.dragHandler, o), o.keyHandler = e.proxy(o.keyHandler, o), o.instanceUid = t++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
    }
  }()).prototype.activateADA = function() {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    })
  }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
    var r = this;
    if ("boolean" == typeof n) i = n, n = null;
    else if (n < 0 || n >= r.slideCount) return !1;
    r.unload(), "number" == typeof n ? 0 === n && 0 === r.$slides.length ? e(t).appendTo(r.$slideTrack) : i ? e(t).insertBefore(r.$slides.eq(n)) : e(t).insertAfter(r.$slides.eq(n)) : !0 === i ? e(t).prependTo(r.$slideTrack) : e(t).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(t, n) {
      e(n).attr("data-slick-index", t)
    }), r.$slidesCache = r.$slides, r.reinit()
  }, t.prototype.animateHeight = function() {
    var e = this;
    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.animate({
        height: t
      }, e.options.speed)
    }
  }, t.prototype.animateSlide = function(t, n) {
    var i = {},
      r = this;
    r.animateHeight(), !0 === r.options.rtl && !1 === r.options.vertical && (t = -t), !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({
      left: t
    }, r.options.speed, r.options.easing, n) : r.$slideTrack.animate({
      top: t
    }, r.options.speed, r.options.easing, n) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), e({
      animStart: r.currentLeft
    }).animate({
      animStart: t
    }, {
      duration: r.options.speed,
      easing: r.options.easing,
      step: function(e) {
        e = Math.ceil(e), !1 === r.options.vertical ? (i[r.animType] = "translate(" + e + "px, 0px)", r.$slideTrack.css(i)) : (i[r.animType] = "translate(0px," + e + "px)", r.$slideTrack.css(i))
      },
      complete: function() {
        n && n.call()
      }
    })) : (r.applyTransition(), t = Math.ceil(t), !1 === r.options.vertical ? i[r.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[r.animType] = "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(i), n && setTimeout(function() {
      r.disableTransition(), n.call()
    }, r.options.speed))
  }, t.prototype.getNavTarget = function() {
    var t = this.options.asNavFor;
    return t && null !== t && (t = e(t).not(this.$slider)), t
  }, t.prototype.asNavFor = function(t) {
    var n = this.getNavTarget();
    null !== n && "object" == typeof n && n.each(function() {
      var n = e(this).slick("getSlick");
      n.unslicked || n.slideHandler(t, !0)
    })
  }, t.prototype.applyTransition = function(e) {
    var t = this,
      n = {};
    !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
  }, t.prototype.autoPlay = function() {
    var e = this;
    e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
  }, t.prototype.autoPlayClear = function() {
    this.autoPlayTimer && clearInterval(this.autoPlayTimer)
  }, t.prototype.autoPlayIterator = function() {
    var e = this,
      t = e.currentSlide + e.options.slidesToScroll;
    e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
  }, t.prototype.buildArrows = function() {
    var t = this;
    !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, t.prototype.buildDots = function() {
    var t, n, i = this;
    if (!0 === i.options.dots) {
      for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
      i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
    }
  }, t.prototype.buildOut = function() {
    var t = this;
    t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
      e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
    }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable pl-0")
  }, t.prototype.buildRows = function() {
    var e, t, n, i, r, o, s, a = this;
    if (i = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
      for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), e = 0; e < r; e++) {
        var l = document.createElement("div");
        for (t = 0; t < a.options.rows; t++) {
          var u = document.createElement("div");
          for (n = 0; n < a.options.slidesPerRow; n++) {
            var d = e * s + (t * a.options.slidesPerRow + n);
            o.get(d) && u.appendChild(o.get(d))
          }
          l.appendChild(u)
        }
        i.appendChild(l)
      }
      a.$slider.empty().append(i), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, t.prototype.checkResponsive = function(t, n) {
    var i, r, o, s = this,
      a = !1,
      l = s.$slider.width(),
      u = window.innerWidth || e(window).width();
    if ("window" === s.respondTo ? o = u : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(u, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
      for (i in r = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (r = s.breakpoints[i]) : o > s.breakpoints[i] && (r = s.breakpoints[i]));
      null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || n) && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = r) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = r), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
    }
  }, t.prototype.changeSlide = function(t, n) {
    var i, r, o = this,
      s = e(t.currentTarget);
    switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, t.data.message) {
      case "previous":
        r = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - r, !1, n);
        break;
      case "next":
        r = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + r, !1, n);
        break;
      case "index":
        var a = 0 === t.data.index ? 0 : t.data.index || s.index() * o.options.slidesToScroll;
        o.slideHandler(o.checkNavigable(a), !1, n), s.children().trigger("focus");
        break;
      default:
        return
    }
  }, t.prototype.checkNavigable = function(e) {
    var t, n;
    if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
    else
      for (var i in t) {
        if (e < t[i]) {
          e = n;
          break
        }
        n = t[i]
      }
    return e
  }, t.prototype.cleanUpEvents = function() {
    var t = this;
    t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
  }, t.prototype.cleanUpSlideEvents = function() {
    var t = this;
    t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }, t.prototype.cleanUpRows = function() {
    var e, t = this;
    t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
  }, t.prototype.clickHandler = function(e) {
    !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
  }, t.prototype.destroy = function(t) {
    var n = this;
    n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
      e(this).attr("style", e(this).data("originalStyling"))
    }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
  }, t.prototype.disableTransition = function(e) {
    var t = this,
      n = {};
    n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
  }, t.prototype.fadeSlide = function(e, t) {
    var n = this;
    !1 === n.cssTransitions ? (n.$slides.eq(e).css({
      zIndex: n.options.zIndex
    }), n.$slides.eq(e).animate({
      opacity: 1
    }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
      opacity: 1,
      zIndex: n.options.zIndex
    }), t && setTimeout(function() {
      n.disableTransition(e), t.call()
    }, n.options.speed))
  }, t.prototype.fadeSlideOut = function(e) {
    var t = this;
    !1 === t.cssTransitions ? t.$slides.eq(e).animate({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }))
  }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
    var t = this;
    null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
  }, t.prototype.focusHandler = function() {
    var t = this;
    t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) {
      n.stopImmediatePropagation();
      var i = e(this);
      setTimeout(function() {
        t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
      }, 0)
    })
  }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
    return this.currentSlide
  }, t.prototype.getDotCount = function() {
    var e = this,
      t = 0,
      n = 0,
      i = 0;
    if (!0 === e.options.infinite)
      if (e.slideCount <= e.options.slidesToShow) ++i;
      else
        for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    else if (!0 === e.options.centerMode) i = e.slideCount;
    else if (e.options.asNavFor)
      for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
    return i - 1
  }, t.prototype.getLeft = function(e) {
    var t, n, i, r, o = this,
      s = 0;
    return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? r = -1.5 : 1 === o.options.slidesToShow && (r = -2)), s = n * o.options.slidesToShow * r), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + s, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
  }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
    return this.options[e]
  }, t.prototype.getNavigableIndexes = function() {
    var e, t = this,
      n = 0,
      i = 0,
      r = [];
    for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) r.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    return r
  }, t.prototype.getSlick = function() {
    return this
  }, t.prototype.getSlideCount = function() {
    var t, n, i = this;
    return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(r, o) {
      if (o.offsetLeft - n + e(o).outerWidth() / 2 > -1 * i.swipeLeft) return t = o, !1
    }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
  }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(e)
      }
    }, t)
  }, t.prototype.init = function(t) {
    var n = this;
    e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
  }, t.prototype.initADA = function() {
    var t = this,
      n = Math.ceil(t.slideCount / t.options.slidesToShow),
      i = t.getNavigableIndexes().filter(function(e) {
        return e >= 0 && e < t.slideCount
      });
    t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
      var r = i.indexOf(n);
      e(this).attr({
        role: "tabpanel",
        id: "slick-slide" + t.instanceUid + n,
        tabindex: -1
      }), -1 !== r && e(this).attr({
        "aria-describedby": "slick-slide-control" + t.instanceUid + r
      })
    }), t.$dots.attr("role", "tablist").find("li").each(function(r) {
      var o = i[r];
      e(this).attr({
        role: "presentation"
      }), e(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + t.instanceUid + r,
        "aria-controls": "slick-slide" + t.instanceUid + o,
        "aria-label": r + 1 + " of " + n,
        "aria-selected": null,
        tabindex: "-1"
      })
    }).eq(t.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());
    for (var r = t.currentSlide, o = r + t.options.slidesToShow; r < o; r++) t.$slides.eq(r).attr("tabindex", 0);
    t.activateADA()
  }, t.prototype.initArrowEvents = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
  }, t.prototype.initDotEvents = function() {
    var t = this;
    !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
      message: "index"
    }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }, t.prototype.initSlideEvents = function() {
    var t = this;
    t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
  }, t.prototype.initializeEvents = function() {
    var t = this;
    t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
  }, t.prototype.initUI = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
  }, t.prototype.keyHandler = function(e) {
    var t = this;
    e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
      data: {
        message: !0 === t.options.rtl ? "next" : "previous"
      }
    }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
      data: {
        message: !0 === t.options.rtl ? "previous" : "next"
      }
    }))
  }, t.prototype.lazyLoad = function() {
    function t(t) {
      e("img[data-lazy]", t).each(function() {
        var t = e(this),
          n = e(this).attr("data-lazy"),
          i = e(this).attr("data-srcset"),
          r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
          s = document.createElement("img");
        s.onload = function() {
          t.animate({
            opacity: 0
          }, 100, function() {
            i && (t.attr("srcset", i), r && t.attr("sizes", r)), t.attr("src", n).animate({
              opacity: 1
            }, 200, function() {
              t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
            }), o.$slider.trigger("lazyLoaded", [o, t, n])
          })
        }, s.onerror = function() {
          t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, n])
        }, s.src = n
      })
    }
    var n, i, r, o = this;
    if (!0 === o.options.centerMode ? !0 === o.options.infinite ? r = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), r = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, r = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (i > 0 && i--, r <= o.slideCount && r++)), n = o.$slider.find(".slick-slide").slice(i, r), "anticipated" === o.options.lazyLoad)
      for (var s = i - 1, a = r, l = o.$slider.find(".slick-slide"), u = 0; u < o.options.slidesToScroll; u++) s < 0 && (s = o.slideCount - 1), n = (n = n.add(l.eq(s))).add(l.eq(a)), s--, a++;
    t(n), o.slideCount <= o.options.slidesToShow ? t(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? t(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && t(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
  }, t.prototype.loadSlider = function() {
    var e = this;
    e.setPosition(), e.$slideTrack.css({
      opacity: 1
    }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
  }, t.prototype.next = t.prototype.slickNext = function() {
    this.changeSlide({
      data: {
        message: "next"
      }
    })
  }, t.prototype.orientationChange = function() {
    this.checkResponsive(), this.setPosition()
  }, t.prototype.pause = t.prototype.slickPause = function() {
    this.autoPlayClear(), this.paused = !0
  }, t.prototype.play = t.prototype.slickPlay = function() {
    var e = this;
    e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
  }, t.prototype.postSlide = function(t) {
    var n = this;
    n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
  }, t.prototype.prev = t.prototype.slickPrev = function() {
    this.changeSlide({
      data: {
        message: "previous"
      }
    })
  }, t.prototype.preventDefault = function(e) {
    e.preventDefault()
  }, t.prototype.progressiveLazyLoad = function(t) {
    t = t || 1;
    var n, i, r, o, s, a = this,
      l = e("img[data-lazy]", a.$slider);
    l.length ? (n = l.first(), i = n.attr("data-lazy"), r = n.attr("data-srcset"), o = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
      r && (n.attr("srcset", r), o && n.attr("sizes", o)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
    }, s.onerror = function() {
      t < 3 ? setTimeout(function() {
        a.progressiveLazyLoad(t + 1)
      }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
    }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
  }, t.prototype.refresh = function(t) {
    var n, i, r = this;
    i = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > i && (r.currentSlide = i), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), n = r.currentSlide, r.destroy(!0), e.extend(r, r.initials, {
      currentSlide: n
    }), r.init(), t || r.changeSlide({
      data: {
        message: "index",
        index: n
      }
    }, !1)
  }, t.prototype.registerBreakpoints = function() {
    var t, n, i, r = this,
      o = r.options.responsive || null;
    if ("array" === e.type(o) && o.length) {
      for (t in r.respondTo = r.options.respondTo || "window", o)
        if (i = r.breakpoints.length - 1, o.hasOwnProperty(t)) {
          for (n = o[t].breakpoint; i >= 0;) r.breakpoints[i] && r.breakpoints[i] === n && r.breakpoints.splice(i, 1), i--;
          r.breakpoints.push(n), r.breakpointSettings[n] = o[t].settings
        } r.breakpoints.sort(function(e, t) {
        return r.options.mobileFirst ? e - t : t - e
      })
    }
  }, t.prototype.reinit = function() {
    var t = this;
    t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
  }, t.prototype.resize = function() {
    var t = this;
    e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
      t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
    }, 50))
  }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
    var i = this;
    if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
    i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
  }, t.prototype.setCSS = function(e) {
    var t, n, i = this,
      r = {};
    !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", r[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(r) : (r = {}, !1 === i.cssTransitions ? (r[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(r)) : (r[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(r)))
  }, t.prototype.setDimensions = function() {
    var e = this;
    !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
      padding: "0px " + e.options.centerPadding
    }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
      padding: e.options.centerPadding + " 0px"
    })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow - 8), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
    !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
  }, t.prototype.setFade = function() {
    var t, n = this;
    n.$slides.each(function(i, r) {
      t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(r).css({
        position: "relative",
        right: t,
        top: 0,
        zIndex: n.options.zIndex - 2,
        opacity: 0
      }) : e(r).css({
        position: "relative",
        left: t,
        top: 0,
        zIndex: n.options.zIndex - 2,
        opacity: 0
      })
    }), n.$slides.eq(n.currentSlide).css({
      zIndex: n.options.zIndex - 1,
      opacity: 1
    })
  }, t.prototype.setHeight = function() {
    var e = this;
    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.css("height", t)
    }
  }, t.prototype.setOption = t.prototype.slickSetOption = function() {
    var t, n, i, r, o, s = this,
      a = !1;
    if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], o = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], r = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[i] = r;
    else if ("multiple" === o) e.each(i, function(e, t) {
      s.options[e] = t
    });
    else if ("responsive" === o)
      for (n in r)
        if ("array" !== e.type(s.options.responsive)) s.options.responsive = [r[n]];
        else {
          for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === r[n].breakpoint && s.options.responsive.splice(t, 1), t--;
          s.options.responsive.push(r[n])
        } a && (s.unload(), s.reinit())
  }, t.prototype.setPosition = function() {
    var e = this;
    e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
  }, t.prototype.setProps = function() {
    var e = this,
      t = document.body.style;
    e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
  }, t.prototype.setSlideClasses = function(e) {
    var t, n, i, r, o = this;
    if (n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode) {
      var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
      t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = o.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")
    } else e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, i = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? n.slice(i - (o.options.slidesToShow - r), i + r).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
  }, t.prototype.setupInfinite = function() {
    var t, n, i, r = this;
    if (!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && (n = null, r.slideCount > r.options.slidesToShow)) {
      for (i = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, t = r.slideCount; t > r.slideCount - i; t -= 1) n = t - 1, e(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
      for (t = 0; t < i + r.slideCount; t += 1) n = t, e(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
      r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
        e(this).attr("id", "")
      })
    }
  }, t.prototype.interrupt = function(e) {
    e || this.autoPlay(), this.interrupted = e
  }, t.prototype.selectHandler = function(t) {
    var n = this,
      i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
      r = parseInt(i.attr("data-slick-index"));
    r || (r = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(r, !1, !0) : n.slideHandler(r)
  }, t.prototype.slideHandler = function(e, t, n) {
    var i, r, o, s, a, l = null,
      u = this;
    if (t = t || !1, !(!0 === u.animating && !0 === u.options.waitForAnimate || !0 === u.options.fade && u.currentSlide === e))
      if (!1 === t && u.asNavFor(e), i = e, l = u.getLeft(i), s = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft, !1 === u.options.infinite && !1 === u.options.centerMode && (e < 0 || e > u.getDotCount() * u.options.slidesToScroll)) !1 === u.options.fade && (i = u.currentSlide, !0 !== n ? u.animateSlide(s, function() {
        u.postSlide(i)
      }) : u.postSlide(i));
      else if (!1 === u.options.infinite && !0 === u.options.centerMode && (e < 0 || e > u.slideCount - u.options.slidesToScroll)) !1 === u.options.fade && (i = u.currentSlide, !0 !== n ? u.animateSlide(s, function() {
      u.postSlide(i)
    }) : u.postSlide(i));
    else {
      if (u.options.autoplay && clearInterval(u.autoPlayTimer), r = i < 0 ? u.slideCount % u.options.slidesToScroll != 0 ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + i : i >= u.slideCount ? u.slideCount % u.options.slidesToScroll != 0 ? 0 : i - u.slideCount : i, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, r]), o = u.currentSlide, u.currentSlide = r, u.setSlideClasses(u.currentSlide), u.options.asNavFor && (a = (a = u.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(u.currentSlide), u.updateDots(), u.updateArrows(), !0 === u.options.fade) return !0 !== n ? (u.fadeSlideOut(o), u.fadeSlide(r, function() {
        u.postSlide(r)
      })) : u.postSlide(r), void u.animateHeight();
      !0 !== n ? u.animateSlide(l, function() {
        u.postSlide(r)
      }) : u.postSlide(r)
    }
  }, t.prototype.startLoad = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
  }, t.prototype.swipeDirection = function() {
    var e, t, n, i, r = this;
    return e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === r.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === r.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
  }, t.prototype.swipeEnd = function(e) {
    var t, n, i = this;
    if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
    if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
    if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
      switch (n = i.swipeDirection()) {
        case "left":
        case "down":
          t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
          break;
        case "right":
        case "up":
          t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
      }
      "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
    } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
  }, t.prototype.swipeHandler = function(e) {
    var t = this;
    if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
      case "start":
        t.swipeStart(e);
        break;
      case "move":
        t.swipeMove(e);
        break;
      case "end":
        t.swipeEnd(e)
    }
  }, t.prototype.swipeMove = function(e) {
    var t, n, i, r, o, s, a = this;
    return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || o && 1 !== o.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * r : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * r, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * r), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
  }, t.prototype.swipeStart = function(e) {
    var t, n = this;
    if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
    void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
  }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
    var e = this;
    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
  }, t.prototype.unload = function() {
    var t = this;
    e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, t.prototype.unslick = function(e) {
    var t = this;
    t.$slider.trigger("unslick", [t, e]), t.destroy()
  }, t.prototype.updateArrows = function() {
    var e = this;
    Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, t.prototype.updateDots = function() {
    var e = this;
    null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
  }, t.prototype.visibility = function() {
    var e = this;
    e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
  }, e.fn.slick = function() {
    var e, n, i = this,
      r = arguments[0],
      o = Array.prototype.slice.call(arguments, 1),
      s = i.length;
    for (e = 0; e < s; e++)
      if ("object" == typeof r || void 0 === r ? i[e].slick = new t(i[e], r) : n = i[e].slick[r].apply(i[e].slick, o), void 0 !== n) return n;
    return i
  }
});
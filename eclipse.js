
    /*! For license information please see home.js.LICENSE */ ! function(i) {
        var a = {};

        function r(t) { if (a[t]) return a[t].exports; var e = a[t] = { i: t, l: !1, exports: {} }; return i[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports } r.m = i, r.c = a, r.d = function(t, e, i) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i }) }, r.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                for (var a in e) r.d(i, a, function(t) { return e[t] }.bind(null, a));
            return i
        }, r.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return r.d(e, "a", e), e }, r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "", r(r.s = 62)
    }([function(t, e) { t = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = t) }, function(t, e, i) {
        var a = i(35)("wks"),
            r = i(15),
            s = i(0).Symbol,
            n = "function" == typeof s;
        (t.exports = function(t) { return a[t] || (a[t] = n && s[t] || (n ? s : r)("Symbol." + t)) }).store = a
    }, function(e, t, i) {! function(t) { e.exports = t.jQuery = i(24) }.call(this, i(11)) }, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e, i) { t.exports = !i(5)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e) {
        var i = {}.toString;
        t.exports = function(t) { return i.call(t).slice(8, -1) }
    }, function(t, e, i) {
        var a = i(17),
            r = i(28);
        t.exports = i(4) ? function(t, e, i) { return a.f(t, e, r(1, i)) } : function(t, e, i) { return t[e] = i, t }
    }, function(t, e, i) {
        var s = i(18);
        t.exports = function(a, r, t) {
            if (s(a), void 0 === r) return a;
            switch (t) {
                case 1:
                    return function(t) { return a.call(r, t) };
                case 2:
                    return function(t, e) { return a.call(r, t, e) };
                case 3:
                    return function(t, e, i) { return a.call(r, t, e, i) }
            }
            return function() { return a.apply(r, arguments) }
        }
    }, function(t, e) { t = t.exports = { version: "2.4.0" }; "number" == typeof __e && (__e = t) }, function(t, e, i) {
        var f = i(0),
            u = i(9),
            x = i(7),
            y = i(14),
            k = i(8),
            g = "prototype",
            v = function(t, e, i) {
                var a, r, s, n = t & v.F,
                    o = t & v.G,
                    h = t & v.S,
                    l = t & v.P,
                    p = t & v.B,
                    c = o ? f : h ? f[e] || (f[e] = {}) : (f[e] || {})[g],
                    m = o ? u : u[e] || (u[e] = {}),
                    d = m[g] || (m[g] = {});
                for (a in i = o ? e : i) r = ((s = !n && c && void 0 !== c[a]) ? c : i)[a], s = p && s ? k(r, f) : l && "function" == typeof r ? k(Function.call, r) : r, c && y(c, a, r, t & v.U), m[a] != r && x(m, a, s), l && d[a] != r && (d[a] = r)
            };
        f.core = u, v.F = 1, v.G = 2, v.S = 4, v.P = 8, v.B = 16, v.W = 32, v.U = 64, v.R = 128, t.exports = v
    }, function(t, e) { var i = function() { return this }(); try { i = i || new Function("return this")() } catch (t) { "object" == typeof window && (i = window) } t.exports = i }, function(t, e, i) {
        "use strict";
        var a = i(10),
            r = i(23)(5),
            s = "find",
            n = !0;
        s in [] && Array(1)[s](function() { n = !1 }), a(a.P + a.F * n, "Array", { find: function(t) { return r(this, t, 1 < arguments.length ? arguments[1] : void 0) } }), i(53)(s)
    }, function(t, e, i) {
        var a = i(3);
        t.exports = function(t) { if (!a(t)) throw TypeError(t + " is not an object!"); return t }
    }, function(t, e, i) {
        var s = i(0),
            n = i(7),
            o = i(22),
            h = i(15)("src"),
            a = "toString",
            r = Function[a],
            l = ("" + r).split(a);
        i(9).inspectSource = function(t) { return r.call(t) }, (t.exports = function(t, e, i, a) {
            var r = "function" == typeof i;
            r && (o(i, "name") || n(i, "name", e)), t[e] !== i && (r && (o(i, h) || n(i, h, t[e] ? "" + t[e] : l.join(String(e)))), t === s ? t[e] = i : a ? t[e] ? t[e] = i : n(t, e, i) : (delete t[e], n(t, e, i)))
        })(Function.prototype, a, function() { return "function" == typeof this && this[h] || r.call(this) })
    }, function(t, e) {
        var i = 0,
            a = Math.random();
        t.exports = function(t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + a).toString(36)) }
    }, function(t, e) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on  " + t); return t } }, function(t, e, i) {
        var a = i(13),
            r = i(26),
            s = i(27),
            n = Object.defineProperty;
        e.f = i(4) ? Object.defineProperty : function(t, e, i) {
            if (a(t), e = s(e, !0), a(i), r) try { return n(t, e, i) } catch (t) {}
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
            return "value" in i && (t[e] = i.value), t
        }
    }, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(t + " is not a function!"); return t } }, function(t, e, i) {
        var a = i(31),
            r = Math.min;
        t.exports = function(t) { return 0 < t ? r(a(t), 9007199254740991) : 0 }
    }, function(t) { t.exports = JSON.parse('{"v":"5.4.3","fr":25,"ip":0,"op":100,"w":1920,"h":1080,"nm":"avatar","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 9","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":87,"s":[100],"e":[0]},{"t":99}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[959.75,699.5,0],"ix":2},"a":{"a":0,"k":[-0.25,159.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"n":["0p667_1_0p167_0p167","0p667_1_0p167_0p167","0p667_1_0p167_0"],"t":5,"s":[28.999999999999996,0,100],"e":[100,100,100]},{"t":11}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[84.5,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[-84.5,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-1,28],[-106,120],[-81.5,138.5],[-22.5,158.5],[8.5,159.5],[59.5,148.5],[105.5,120]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":250,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 8","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":87,"s":[100],"e":[0]},{"t":99}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"n":"0p667_1_0p167_0p167","t":6,"s":[960,660.634,0],"e":[960,480.634,0],"to":[0,-30,0],"ti":[0,28,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":13,"s":[960,480.63400000000007,0],"e":[960,492.634,0],"to":[0,-28,0],"ti":[0,-2,0]},{"t":16}],"ix":2},"a":{"a":0,"k":[6.953,-1.047,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,5.728]},"n":["0p667_1_0p167_0p167","0p667_1_0p167_0p167","0p667_1_0p167_5p728"],"t":6,"s":[22,22,100],"e":[35,35,100]},{"t":13}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[321.906,321.906],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[6.953,-1.047],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":6,"op":256,"st":6,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 7","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":87,"s":[100],"e":[0]},{"t":99}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,538.953,0],"ix":2},"a":{"a":0,"k":[6.953,-1.047,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[321.906,321.906],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.953,-1.047],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":0,"s":[0],"e":[100]},{"t":11}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":250,"op":250,"st":0,"bm":0,"hidden":0},{"ddd":0,"ind":4,"ty":1,"nm":"White Solid 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2},"a":{"a":0,"k":[960,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"sw":1920,"sh":1080,"sc":"#ffffff","ip":250,"op":250,"st":0,"bm":0,"hidden":0}],"markers":[]}') }, function(t, e, i) {
        var a = i(3),
            r = i(0).document,
            s = a(r) && a(r.createElement);
        t.exports = function(t) { return s ? r.createElement(t) : {} }
    }, function(t, e) {
        var i = {}.hasOwnProperty;
        t.exports = function(t, e) { return i.call(t, e) }
    }, function(t, e, i) {
        var g = i(8),
            v = i(29),
            b = i(30),
            E = i(19),
            a = i(32);
        t.exports = function(c, t) {
            var m = 1 == c,
                d = 2 == c,
                f = 3 == c,
                u = 4 == c,
                x = 6 == c,
                y = 5 == c || x,
                k = t || a;
            return function(t, e, i) {
                for (var a, r, s = b(t), n = v(s), o = g(e, i, 3), h = E(n.length), l = 0, p = m ? k(t, h) : d ? k(t, 0) : void 0; l < h; l++)
                    if ((y || l in n) && (r = o(a = n[l], l, s), c))
                        if (m) p[l] = r;
                        else if (r) switch (c) {
                    case 3:
                        return !0;
                    case 5:
                        return a;
                    case 6:
                        return l;
                    case 2:
                        p.push(a)
                } else if (u) return !1;
                return x ? -1 : f || u ? u : p
            }
        }
    }, function(e, t, i) {! function(t) { e.exports = t.$ = i(25) }.call(this, i(11)) }, function(Ze, ti, t) {
        var ei;
        ! function(t, e) { "use strict"; "object" == typeof Ze.exports ? Ze.exports = t.document ? e(t, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, function(E, t) {
            "use strict";

            function u(t) { return null != t && t === t.window }
            var e = [],
                i = Object.getPrototypeOf,
                o = e.slice,
                x = e.flat ? function(t) { return e.flat.call(t) } : function(t) { return e.concat.apply([], t) },
                h = e.push,
                r = e.indexOf,
                a = {},
                s = a.toString,
                y = a.hasOwnProperty,
                n = y.toString,
                l = n.call(Object),
                k = {},
                g = function(t) { return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item },
                A = E.document,
                p = { type: !0, src: !0, nonce: !0, noModule: !0 };

            function v(t, e, i) {
                var a, r, s = (i = i || A).createElement("script");
                if (s.text = t, e)
                    for (a in p)(r = e[a] || e.getAttribute && e.getAttribute(a)) && s.setAttribute(a, r);
                i.head.appendChild(s).parentNode.removeChild(s)
            }

            function f(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? a[s.call(t)] || "object" : typeof t }
            var S = function(t, e) { return new S.fn.init(t, e) };

            function c(t) {
                var e = !!t && "length" in t && t.length,
                    i = f(t);
                return !g(t) && !u(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
            }
            S.fn = S.prototype = {
                jquery: "3.6.0",
                constructor: S,
                length: 0,
                toArray: function() { return o.call(this) },
                get: function(t) { return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t] },
                pushStack: function(t) { t = S.merge(this.constructor(), t); return t.prevObject = this, t },
                each: function(t) { return S.each(this, t) },
                map: function(i) { return this.pushStack(S.map(this, function(t, e) { return i.call(t, e, t) })) },
                slice: function() { return this.pushStack(o.apply(this, arguments)) },
                first: function() { return this.eq(0) },
                last: function() { return this.eq(-1) },
                even: function() { return this.pushStack(S.grep(this, function(t, e) { return (e + 1) % 2 })) },
                odd: function() { return this.pushStack(S.grep(this, function(t, e) { return e % 2 })) },
                eq: function(t) {
                    var e = this.length,
                        t = +t + (t < 0 ? e : 0);
                    return this.pushStack(0 <= t && t < e ? [this[t]] : [])
                },
                end: function() { return this.prevObject || this.constructor() },
                push: h,
                sort: e.sort,
                splice: e.splice
            }, S.extend = S.fn.extend = function() {
                var t, e, i, a, r, s = arguments[0] || {},
                    n = 1,
                    o = arguments.length,
                    h = !1;
                for ("boolean" == typeof s && (h = s, s = arguments[n] || {}, n++), "object" == typeof s || g(s) || (s = {}), n === o && (s = this, n--); n < o; n++)
                    if (null != (t = arguments[n]))
                        for (e in t) i = t[e], "__proto__" !== e && s !== i && (h && i && (S.isPlainObject(i) || (a = Array.isArray(i))) ? (r = s[e], r = a && !Array.isArray(r) ? [] : a || S.isPlainObject(r) ? r : {}, a = !1, s[e] = S.extend(h, r, i)) : void 0 !== i && (s[e] = i));
                return s
            }, S.extend({
                expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) { throw new Error(t) },
                noop: function() {},
                isPlainObject: function(t) { return !(!t || "[object Object]" !== s.call(t)) && (!(t = i(t)) || "function" == typeof(t = y.call(t, "constructor") && t.constructor) && n.call(t) === l) },
                isEmptyObject: function(t) { for (var e in t) return !1; return !0 },
                globalEval: function(t, e, i) { v(t, { nonce: e && e.nonce }, i) },
                each: function(t, e) {
                    var i, a = 0;
                    if (c(t))
                        for (i = t.length; a < i && !1 !== e.call(t[a], a, t[a]); a++);
                    else
                        for (a in t)
                            if (!1 === e.call(t[a], a, t[a])) break;
                    return t
                },
                makeArray: function(t, e) { e = e || []; return null != t && (c(Object(t)) ? S.merge(e, "string" == typeof t ? [t] : t) : h.call(e, t)), e },
                inArray: function(t, e, i) { return null == e ? -1 : r.call(e, t, i) },
                merge: function(t, e) { for (var i = +e.length, a = 0, r = t.length; a < i; a++) t[r++] = e[a]; return t.length = r, t },
                grep: function(t, e, i) { for (var a = [], r = 0, s = t.length, n = !i; r < s; r++) !e(t[r], r) != n && a.push(t[r]); return a },
                map: function(t, e, i) {
                    var a, r, s = 0,
                        n = [];
                    if (c(t))
                        for (a = t.length; s < a; s++) null != (r = e(t[s], s, i)) && n.push(r);
                    else
                        for (s in t) null != (r = e(t[s], s, i)) && n.push(r);
                    return x(n)
                },
                guid: 1,
                support: k
            }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = e[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) { a["[object " + e + "]"] = e.toLowerCase() });
            var m = function(i) {
                function c(t, e) { return t = "0x" + t.slice(1) - 65536, e || (t < 0 ? String.fromCharCode(65536 + t) : String.fromCharCode(t >> 10 | 55296, 1023 & t | 56320)) }

                function a() { E() }
                var t, m, v, s, r, d, f, u, b, h, l, E, A, n, S, x, o, p, y, D = "sizzle" + +new Date,
                    k = i.document,
                    _ = 0,
                    g = 0,
                    P = ht(),
                    T = ht(),
                    w = ht(),
                    C = ht(),
                    B = function(t, e) { return t === e && (l = !0), 0 },
                    V = {}.hasOwnProperty,
                    e = [],
                    F = e.pop,
                    G = e.push,
                    M = e.push,
                    I = e.slice,
                    R = function(t, e) {
                        for (var i = 0, a = t.length; i < a; i++)
                            if (t[i] === e) return i;
                        return -1
                    },
                    L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    N = "[\\x20\\t\\r\\n\\f]",
                    z = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    O = "\\[" + N + "*(" + z + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + N + "*\\]",
                    j = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
                    H = new RegExp(N + "+", "g"),
                    q = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
                    $ = new RegExp("^" + N + "*," + N + "*"),
                    W = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
                    Q = new RegExp(N + "|>"),
                    U = new RegExp(j),
                    J = new RegExp("^" + z + "$"),
                    X = { ID: new RegExp("^#(" + z + ")"), CLASS: new RegExp("^\\.(" + z + ")"), TAG: new RegExp("^(" + z + "|[*])"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + j), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"), bool: new RegExp("^(?:" + L + ")$", "i"), needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i") },
                    Y = /HTML$/i,
                    K = /^(?:input|select|textarea|button)$/i,
                    Z = /^h\d$/i,
                    tt = /^[^{]+\{\s*\[native \w/,
                    et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    it = /[+~]/,
                    at = new RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])", "g"),
                    rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    st = function(t, e) { return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t },
                    nt = kt(function(t) { return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
                try { M.apply(e = I.call(k.childNodes), k.childNodes), e[k.childNodes.length].nodeType } catch (t) {
                    M = {
                        apply: e.length ? function(t, e) { G.apply(t, I.call(e)) } : function(t, e) {
                            for (var i = t.length, a = 0; t[i++] = e[a++];);
                            t.length = i - 1
                        }
                    }
                }

                function ot(e, t, i, a) {
                    var r, s, n, o, h, l, p = t && t.ownerDocument,
                        c = t ? t.nodeType : 9;
                    if (i = i || [], "string" != typeof e || !e || 1 !== c && 9 !== c && 11 !== c) return i;
                    if (!a && (E(t), t = t || A, S)) {
                        if (11 !== c && (o = et.exec(e)))
                            if (l = o[1]) { if (9 === c) { if (!(s = t.getElementById(l))) return i; if (s.id === l) return i.push(s), i } else if (p && (s = p.getElementById(l)) && y(t, s) && s.id === l) return i.push(s), i } else { if (o[2]) return M.apply(i, t.getElementsByTagName(e)), i; if ((l = o[3]) && m.getElementsByClassName && t.getElementsByClassName) return M.apply(i, t.getElementsByClassName(l)), i } if (m.qsa && !C[e + " "] && (!x || !x.test(e)) && (1 !== c || "object" !== t.nodeName.toLowerCase())) {
                            if (l = e, p = t, 1 === c && (Q.test(e) || W.test(e))) {
                                for ((p = it.test(e) && ut(t.parentNode) || t) === t && m.scope || ((n = t.getAttribute("id")) ? n = n.replace(rt, st) : t.setAttribute("id", n = D)), r = (h = d(e)).length; r--;) h[r] = (n ? "#" + n : ":scope") + " " + yt(h[r]);
                                l = h.join(",")
                            }
                            try { return M.apply(i, p.querySelectorAll(l)), i } catch (t) { C(e, !0) } finally { n === D && t.removeAttribute("id") }
                        }
                    }
                    return u(e.replace(q, "$1"), t, i, a)
                }

                function ht() {
                    var i = [];

                    function a(t, e) { return i.push(t + " ") > v.cacheLength && delete a[i.shift()], a[t + " "] = e }
                    return a
                }

                function lt(t) { return t[D] = !0, t }

                function pt(t) { var e = A.createElement("fieldset"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

                function ct(t, e) { for (var i = t.split("|"), a = i.length; a--;) v.attrHandle[i[a]] = e }

                function mt(t, e) {
                    var i = e && t,
                        a = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (a) return a;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === e) return -1;
                    return t ? 1 : -1
                }

                function dt(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && nt(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

                function ft(n) { return lt(function(s) { return s = +s, lt(function(t, e) { for (var i, a = n([], t.length, s), r = a.length; r--;) t[i = a[r]] && (t[i] = !(e[i] = t[i])) }) }) }

                function ut(t) { return t && void 0 !== t.getElementsByTagName && t }
                for (t in m = ot.support = {}, r = ot.isXML = function(t) {
                        var e = t && t.namespaceURI,
                            t = t && (t.ownerDocument || t).documentElement;
                        return !Y.test(e || t && t.nodeName || "HTML")
                    }, E = ot.setDocument = function(t) {
                        var e, t = t ? t.ownerDocument || t : k;
                        return t != A && 9 === t.nodeType && t.documentElement && (n = (A = t).documentElement, S = !r(A), k != A && (e = A.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", a, !1) : e.attachEvent && e.attachEvent("onunload", a)), m.scope = pt(function(t) { return n.appendChild(t).appendChild(A.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length }), m.attributes = pt(function(t) { return t.className = "i", !t.getAttribute("className") }), m.getElementsByTagName = pt(function(t) { return t.appendChild(A.createComment("")), !t.getElementsByTagName("*").length }), m.getElementsByClassName = tt.test(A.getElementsByClassName), m.getById = pt(function(t) { return n.appendChild(t).id = D, !A.getElementsByName || !A.getElementsByName(D).length }), m.getById ? (v.filter.ID = function(t) { var e = t.replace(at, c); return function(t) { return t.getAttribute("id") === e } }, v.find.ID = function(t, e) { if (void 0 !== e.getElementById && S) { t = e.getElementById(t); return t ? [t] : [] } }) : (v.filter.ID = function(t) { var e = t.replace(at, c); return function(t) { t = void 0 !== t.getAttributeNode && t.getAttributeNode("id"); return t && t.value === e } }, v.find.ID = function(t, e) {
                            if (void 0 !== e.getElementById && S) {
                                var i, a, r, s = e.getElementById(t);
                                if (s) {
                                    if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                                    for (r = e.getElementsByName(t), a = 0; s = r[a++];)
                                        if ((i = s.getAttributeNode("id")) && i.value === t) return [s]
                                }
                                return []
                            }
                        }), v.find.TAG = m.getElementsByTagName ? function(t, e) { return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : m.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) {
                            var i, a = [],
                                r = 0,
                                s = e.getElementsByTagName(t);
                            if ("*" !== t) return s;
                            for (; i = s[r++];) 1 === i.nodeType && a.push(i);
                            return a
                        }, v.find.CLASS = m.getElementsByClassName && function(t, e) { if (void 0 !== e.getElementsByClassName && S) return e.getElementsByClassName(t) }, o = [], x = [], (m.qsa = tt.test(A.querySelectorAll)) && (pt(function(t) {
                            var e;
                            n.appendChild(t).innerHTML = "<a id='" + D + "'></a><select id='" + D + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && x.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || x.push("\\[" + N + "*(?:value|" + L + ")"), t.querySelectorAll("[id~=" + D + "-]").length || x.push("~="), (e = A.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || x.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || x.push(":checked"), t.querySelectorAll("a#" + D + "+*").length || x.push(".#.+[+~]"), t.querySelectorAll("\\\f"), x.push("[\\r\\n\\f]")
                        }), pt(function(t) {
                            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var e = A.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && x.push("name" + N + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && x.push(":enabled", ":disabled"), n.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && x.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), x.push(",.*:")
                        })), (m.matchesSelector = tt.test(p = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && pt(function(t) { m.disconnectedMatch = p.call(t, "*"), p.call(t, "[s!='']:x"), o.push("!=", j) }), x = x.length && new RegExp(x.join("|")), o = o.length && new RegExp(o.join("|")), e = tt.test(n.compareDocumentPosition), y = e || tt.test(n.contains) ? function(t, e) {
                            var i = 9 === t.nodeType ? t.documentElement : t,
                                e = e && e.parentNode;
                            return t === e || !(!e || 1 !== e.nodeType || !(i.contains ? i.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)))
                        } : function(t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1
                        }, B = e ? function(t, e) { if (t === e) return l = !0, 0; var i = !t.compareDocumentPosition - !e.compareDocumentPosition; return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !m.sortDetached && e.compareDocumentPosition(t) === i ? t == A || t.ownerDocument == k && y(k, t) ? -1 : e == A || e.ownerDocument == k && y(k, e) ? 1 : h ? R(h, t) - R(h, e) : 0 : 4 & i ? -1 : 1) } : function(t, e) {
                            if (t === e) return l = !0, 0;
                            var i, a = 0,
                                r = t.parentNode,
                                s = e.parentNode,
                                n = [t],
                                o = [e];
                            if (!r || !s) return t == A ? -1 : e == A ? 1 : r ? -1 : s ? 1 : h ? R(h, t) - R(h, e) : 0;
                            if (r === s) return mt(t, e);
                            for (i = t; i = i.parentNode;) n.unshift(i);
                            for (i = e; i = i.parentNode;) o.unshift(i);
                            for (; n[a] === o[a];) a++;
                            return a ? mt(n[a], o[a]) : n[a] == k ? -1 : o[a] == k ? 1 : 0
                        }), A
                    }, ot.matches = function(t, e) { return ot(t, null, null, e) }, ot.matchesSelector = function(t, e) {
                        if (E(t), m.matchesSelector && S && !C[e + " "] && (!o || !o.test(e)) && (!x || !x.test(e))) try { var i = p.call(t, e); if (i || m.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i } catch (t) { C(e, !0) }
                        return 0 < ot(e, A, null, [t]).length
                    }, ot.contains = function(t, e) { return (t.ownerDocument || t) != A && E(t), y(t, e) }, ot.attr = function(t, e) {
                        (t.ownerDocument || t) != A && E(t);
                        var i = v.attrHandle[e.toLowerCase()],
                            i = i && V.call(v.attrHandle, e.toLowerCase()) ? i(t, e, !S) : void 0;
                        return void 0 !== i ? i : m.attributes || !S ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                    }, ot.escape = function(t) { return (t + "").replace(rt, st) }, ot.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, ot.uniqueSort = function(t) {
                        var e, i = [],
                            a = 0,
                            r = 0;
                        if (l = !m.detectDuplicates, h = !m.sortStable && t.slice(0), t.sort(B), l) { for (; e = t[r++];) e === t[r] && (a = i.push(r)); for (; a--;) t.splice(i[a], 1) }
                        return h = null, t
                    }, s = ot.getText = function(t) {
                        var e, i = "",
                            a = 0,
                            r = t.nodeType;
                        if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) i += s(t) } else if (3 === r || 4 === r) return t.nodeValue } else
                            for (; e = t[a++];) i += s(e);
                        return i
                    }, (v = ot.selectors = {
                        cacheLength: 50,
                        createPseudo: lt,
                        match: X,
                        attrHandle: {},
                        find: {},
                        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                        preFilter: { ATTR: function(t) { return t[1] = t[1].replace(at, c), t[3] = (t[3] || t[4] || t[5] || "").replace(at, c), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t }, PSEUDO: function(t) { var e, i = !t[6] && t[2]; return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && U.test(i) && (e = d(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3)) } },
                        filter: {
                            TAG: function(t) { var e = t.replace(at, c).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } },
                            CLASS: function(t) { var e = P[t + " "]; return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && P(t, function(t) { return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "") }) },
                            ATTR: function(e, i, a) { return function(t) { t = ot.attr(t, e); return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === a : "!=" === i ? t !== a : "^=" === i ? a && 0 === t.indexOf(a) : "*=" === i ? a && -1 < t.indexOf(a) : "$=" === i ? a && t.slice(-a.length) === a : "~=" === i ? -1 < (" " + t.replace(H, " ") + " ").indexOf(a) : "|=" === i && (t === a || t.slice(0, a.length + 1) === a + "-")) } },
                            CHILD: function(f, t, e, u, x) {
                                var y = "nth" !== f.slice(0, 3),
                                    k = "last" !== f.slice(-4),
                                    g = "of-type" === t;
                                return 1 === u && 0 === x ? function(t) { return !!t.parentNode } : function(t, e, i) {
                                    var a, r, s, n, o, h, l = y != k ? "nextSibling" : "previousSibling",
                                        p = t.parentNode,
                                        c = g && t.nodeName.toLowerCase(),
                                        m = !i && !g,
                                        d = !1;
                                    if (p) {
                                        if (y) {
                                            for (; l;) {
                                                for (n = t; n = n[l];)
                                                    if (g ? n.nodeName.toLowerCase() === c : 1 === n.nodeType) return !1;
                                                h = l = "only" === f && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [k ? p.firstChild : p.lastChild], k && m) {
                                            for (d = (o = (a = (r = (s = (n = p)[D] || (n[D] = {}))[n.uniqueID] || (s[n.uniqueID] = {}))[f] || [])[0] === _ && a[1]) && a[2], n = o && p.childNodes[o]; n = ++o && n && n[l] || (d = o = 0) || h.pop();)
                                                if (1 === n.nodeType && ++d && n === t) { r[f] = [_, o, d]; break }
                                        } else if (!1 === (d = m ? o = (a = (r = (s = (n = t)[D] || (n[D] = {}))[n.uniqueID] || (s[n.uniqueID] = {}))[f] || [])[0] === _ && a[1] : d))
                                            for (;
                                                (n = ++o && n && n[l] || (d = o = 0) || h.pop()) && ((g ? n.nodeName.toLowerCase() !== c : 1 !== n.nodeType) || !++d || (m && ((r = (s = n[D] || (n[D] = {}))[n.uniqueID] || (s[n.uniqueID] = {}))[f] = [_, d]), n !== t)););
                                        return (d -= x) === u || d % u == 0 && 0 <= d / u
                                    }
                                }
                            },
                            PSEUDO: function(t, s) { var e, n = v.pseudos[t] || v.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t); return n[D] ? n(s) : 1 < n.length ? (e = [t, t, "", s], v.setFilters.hasOwnProperty(t.toLowerCase()) ? lt(function(t, e) { for (var i, a = n(t, s), r = a.length; r--;) t[i = R(t, a[r])] = !(e[i] = a[r]) }) : function(t) { return n(t, 0, e) }) : n }
                        },
                        pseudos: {
                            not: lt(function(t) {
                                var a = [],
                                    r = [],
                                    o = f(t.replace(q, "$1"));
                                return o[D] ? lt(function(t, e, i, a) { for (var r, s = o(t, null, a, []), n = t.length; n--;)(r = s[n]) && (t[n] = !(e[n] = r)) }) : function(t, e, i) { return a[0] = t, o(a, null, i, r), a[0] = null, !r.pop() }
                            }),
                            has: lt(function(e) { return function(t) { return 0 < ot(e, t).length } }),
                            contains: lt(function(e) {
                                return e = e.replace(at, c),
                                    function(t) { return -1 < (t.textContent || s(t)).indexOf(e) }
                            }),
                            lang: lt(function(i) {
                                return J.test(i || "") || ot.error("unsupported lang: " + i), i = i.replace(at, c).toLowerCase(),
                                    function(t) {
                                        var e;
                                        do { if (e = S ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) { var e = i.location && i.location.hash; return e && e.slice(1) === t.id },
                            root: function(t) { return t === n },
                            focus: function(t) { return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) },
                            enabled: dt(!1),
                            disabled: dt(!0),
                            checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected },
                            selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected },
                            empty: function(t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(t) { return !v.pseudos.empty(t) },
                            header: function(t) { return Z.test(t.nodeName) },
                            input: function(t) { return K.test(t.nodeName) },
                            button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e },
                            text: function(t) { return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (t = t.getAttribute("type")) || "text" === t.toLowerCase()) },
                            first: ft(function() { return [0] }),
                            last: ft(function(t, e) { return [e - 1] }),
                            eq: ft(function(t, e, i) { return [i < 0 ? i + e : i] }),
                            even: ft(function(t, e) { for (var i = 0; i < e; i += 2) t.push(i); return t }),
                            odd: ft(function(t, e) { for (var i = 1; i < e; i += 2) t.push(i); return t }),
                            lt: ft(function(t, e, i) { for (var a = i < 0 ? i + e : e < i ? e : i; 0 <= --a;) t.push(a); return t }),
                            gt: ft(function(t, e, i) { for (var a = i < 0 ? i + e : i; ++a < e;) t.push(a); return t })
                        }
                    }).pseudos.nth = v.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) v.pseudos[t] = function(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }(t);
                for (t in { submit: !0, reset: !0 }) v.pseudos[t] = function(i) { return function(t) { var e = t.nodeName.toLowerCase(); return ("input" === e || "button" === e) && t.type === i } }(t);

                function xt() {}

                function yt(t) { for (var e = 0, i = t.length, a = ""; e < i; e++) a += t[e].value; return a }

                function kt(n, t, e) {
                    var o = t.dir,
                        h = t.next,
                        l = h || o,
                        p = e && "parentNode" === l,
                        c = g++;
                    return t.first ? function(t, e, i) {
                        for (; t = t[o];)
                            if (1 === t.nodeType || p) return n(t, e, i);
                        return !1
                    } : function(t, e, i) {
                        var a, r, s = [_, c];
                        if (i) {
                            for (; t = t[o];)
                                if ((1 === t.nodeType || p) && n(t, e, i)) return !0
                        } else
                            for (; t = t[o];)
                                if (1 === t.nodeType || p)
                                    if (a = (r = t[D] || (t[D] = {}))[t.uniqueID] || (r[t.uniqueID] = {}), h && h === t.nodeName.toLowerCase()) t = t[o] || t;
                                    else { if ((r = a[l]) && r[0] === _ && r[1] === c) return s[2] = r[2]; if ((a[l] = s)[2] = n(t, e, i)) return !0 } return !1
                    }
                }

                function gt(r) {
                    return 1 < r.length ? function(t, e, i) {
                        for (var a = r.length; a--;)
                            if (!r[a](t, e, i)) return !1;
                        return !0
                    } : r[0]
                }

                function vt(t, e, i, a, r) { for (var s, n = [], o = 0, h = t.length, l = null != e; o < h; o++)(s = t[o]) && (i && !i(s, a, r) || (n.push(s), l && e.push(o))); return n }

                function bt(d, f, u, x, y, t) {
                    return x && !x[D] && (x = bt(x)), y && !y[D] && (y = bt(y, t)), lt(function(t, e, i, a) {
                        var r, s, n, o = [],
                            h = [],
                            l = e.length,
                            p = t || function(t, e, i) { for (var a = 0, r = e.length; a < r; a++) ot(t, e[a], i); return i }(f || "*", i.nodeType ? [i] : i, []),
                            c = !d || !t && f ? p : vt(p, o, d, i, a),
                            m = u ? y || (t ? d : l || x) ? [] : e : c;
                        if (u && u(c, m, i, a), x)
                            for (r = vt(m, h), x(r, [], i, a), s = r.length; s--;)(n = r[s]) && (m[h[s]] = !(c[h[s]] = n));
                        if (t) {
                            if (y || d) {
                                if (y) {
                                    for (r = [], s = m.length; s--;)(n = m[s]) && r.push(c[s] = n);
                                    y(null, m = [], r, a)
                                }
                                for (s = m.length; s--;)(n = m[s]) && -1 < (r = y ? R(t, n) : o[s]) && (t[r] = !(e[r] = n))
                            }
                        } else m = vt(m === e ? m.splice(l, m.length) : m), y ? y(null, e, m, a) : M.apply(e, m)
                    })
                }

                function Et(x, y) {
                    function t(t, e, i, a, r) {
                        var s, n, o, h = 0,
                            l = "0",
                            p = t && [],
                            c = [],
                            m = b,
                            d = t || g && v.find.TAG("*", r),
                            f = _ += null == m ? 1 : Math.random() || .1,
                            u = d.length;
                        for (r && (b = e == A || e || r); l !== u && null != (s = d[l]); l++) {
                            if (g && s) {
                                for (n = 0, e || s.ownerDocument == A || (E(s), i = !S); o = x[n++];)
                                    if (o(s, e || A, i)) { a.push(s); break } r && (_ = f)
                            }
                            k && ((s = !o && s) && h--, t && p.push(s))
                        }
                        if (h += l, k && l !== h) {
                            for (n = 0; o = y[n++];) o(p, c, e, i);
                            if (t) {
                                if (0 < h)
                                    for (; l--;) p[l] || c[l] || (c[l] = F.call(a));
                                c = vt(c)
                            }
                            M.apply(a, c), r && !t && 0 < c.length && 1 < h + y.length && ot.uniqueSort(a)
                        }
                        return r && (_ = f, b = m), p
                    }
                    var k = 0 < y.length,
                        g = 0 < x.length;
                    return k ? lt(t) : t
                }
                return xt.prototype = v.filters = v.pseudos, v.setFilters = new xt, d = ot.tokenize = function(t, e) { var i, a, r, s, n, o, h, l = T[t + " "]; if (l) return e ? 0 : l.slice(0); for (n = t, o = [], h = v.preFilter; n;) { for (s in i && !(a = $.exec(n)) || (a && (n = n.slice(a[0].length) || n), o.push(r = [])), i = !1, (a = W.exec(n)) && (i = a.shift(), r.push({ value: i, type: a[0].replace(q, " ") }), n = n.slice(i.length)), v.filter) !(a = X[s].exec(n)) || h[s] && !(a = h[s](a)) || (i = a.shift(), r.push({ value: i, type: s, matches: a }), n = n.slice(i.length)); if (!i) break } return e ? n.length : n ? ot.error(t) : T(t, o).slice(0) }, f = ot.compile = function(t, e) {
                    var i, a = [],
                        r = [],
                        s = w[t + " "];
                    if (!s) {
                        for (i = (e = e || d(t)).length; i--;)((s = function t(e) {
                            for (var a, i, r, s = e.length, n = v.relative[e[0].type], o = n || v.relative[" "], h = n ? 1 : 0, l = kt(function(t) { return t === a }, o, !0), p = kt(function(t) { return -1 < R(a, t) }, o, !0), c = [function(t, e, i) { return i = !n && (i || e !== b) || ((a = e).nodeType ? l : p)(t, e, i), a = null, i }]; h < s; h++)
                                if (i = v.relative[e[h].type]) c = [kt(gt(c), i)];
                                else { if ((i = v.filter[e[h].type].apply(null, e[h].matches))[D]) { for (r = ++h; r < s && !v.relative[e[r].type]; r++); return bt(1 < h && gt(c), 1 < h && yt(e.slice(0, h - 1).concat({ value: " " === e[h - 2].type ? "*" : "" })).replace(q, "$1"), i, h < r && t(e.slice(h, r)), r < s && t(e = e.slice(r)), r < s && yt(e)) } c.push(i) } return gt(c)
                        }(e[i]))[D] ? a : r).push(s);
                        (s = w(t, Et(r, a))).selector = t
                    }
                    return s
                }, u = ot.select = function(t, e, i, a) {
                    var r, s, n, o, h, l = "function" == typeof t && t,
                        p = !a && d(t = l.selector || t);
                    if (i = i || [], 1 === p.length) {
                        if (2 < (s = p[0] = p[0].slice(0)).length && "ID" === (n = s[0]).type && 9 === e.nodeType && S && v.relative[s[1].type]) {
                            if (!(e = (v.find.ID(n.matches[0].replace(at, c), e) || [])[0])) return i;
                            l && (e = e.parentNode), t = t.slice(s.shift().value.length)
                        }
                        for (r = X.needsContext.test(t) ? 0 : s.length; r-- && (n = s[r], !v.relative[o = n.type]);)
                            if ((h = v.find[o]) && (a = h(n.matches[0].replace(at, c), it.test(s[0].type) && ut(e.parentNode) || e))) { if (s.splice(r, 1), !(t = a.length && yt(s))) return M.apply(i, a), i; break }
                    }
                    return (l || f(t, p))(a, e, !S, i, !e || it.test(t) && ut(e.parentNode) || e), i
                }, m.sortStable = D.split("").sort(B).join("") === D, m.detectDuplicates = !!l, E(), m.sortDetached = pt(function(t) { return 1 & t.compareDocumentPosition(A.createElement("fieldset")) }), pt(function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || ct("type|href|height|width", function(t, e, i) { if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), m.attributes && pt(function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || ct("value", function(t, e, i) { if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue }), pt(function(t) { return null == t.getAttribute("disabled") }) || ct(L, function(t, e, i) { if (!i) return !0 === t[e] ? e.toLowerCase() : (e = t.getAttributeNode(e)) && e.specified ? e.value : null }), ot
            }(E);
            S.find = m, S.expr = m.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = m.uniqueSort, S.text = m.getText, S.isXMLDoc = m.isXML, S.contains = m.contains, S.escapeSelector = m.escape;

            function d(t, e, i) {
                for (var a = [], r = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && S(t).is(i)) break;
                        a.push(t)
                    } return a
            }

            function b(t, e) { for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t); return i }
            var D = S.expr.match.needsContext;

            function _(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() }
            var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function T(t, i, a) { return g(i) ? S.grep(t, function(t, e) { return !!i.call(t, e, t) !== a }) : i.nodeType ? S.grep(t, function(t) { return t === i !== a }) : "string" != typeof i ? S.grep(t, function(t) { return -1 < r.call(i, t) !== a }) : S.filter(i, t, a) } S.filter = function(t, e, i) { var a = e[0]; return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === a.nodeType ? S.find.matchesSelector(a, t) ? [a] : [] : S.find.matches(t, S.grep(e, function(t) { return 1 === t.nodeType })) }, S.fn.extend({
                find: function(t) {
                    var e, i, a = this.length,
                        r = this;
                    if ("string" != typeof t) return this.pushStack(S(t).filter(function() {
                        for (e = 0; e < a; e++)
                            if (S.contains(r[e], this)) return !0
                    }));
                    for (i = this.pushStack([]), e = 0; e < a; e++) S.find(t, r[e], i);
                    return 1 < a ? S.uniqueSort(i) : i
                },
                filter: function(t) { return this.pushStack(T(this, t || [], !1)) },
                not: function(t) { return this.pushStack(T(this, t || [], !0)) },
                is: function(t) { return !!T(this, "string" == typeof t && D.test(t) ? S(t) : t || [], !1).length }
            });
            var w = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (S.fn.init = function(t, e, i) {
                if (!t) return this;
                if (i = i || C, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : g(t) ? void 0 !== i.ready ? i.ready(t) : t(S) : S.makeArray(t, this);
                if (!(a = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : w.exec(t)) || !a[1] && e) return (!e || e.jquery ? e || i : this.constructor(e)).find(t);
                if (a[1]) {
                    if (e = e instanceof S ? e[0] : e, S.merge(this, S.parseHTML(a[1], e && e.nodeType ? e.ownerDocument || e : A, !0)), P.test(a[1]) && S.isPlainObject(e))
                        for (var a in e) g(this[a]) ? this[a](e[a]) : this.attr(a, e[a]);
                    return this
                }
                return (t = A.getElementById(a[2])) && (this[0] = t, this.length = 1), this
            }).prototype = S.fn;
            var C = S(A),
                B = /^(?:parents|prev(?:Until|All))/,
                V = { children: !0, contents: !0, next: !0, prev: !0 };

            function F(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t
            }
            S.fn.extend({
                has: function(t) {
                    var e = S(t, this),
                        i = e.length;
                    return this.filter(function() {
                        for (var t = 0; t < i; t++)
                            if (S.contains(this, e[t])) return !0
                    })
                },
                closest: function(t, e) {
                    var i, a = 0,
                        r = this.length,
                        s = [],
                        n = "string" != typeof t && S(t);
                    if (!D.test(t))
                        for (; a < r; a++)
                            for (i = this[a]; i && i !== e; i = i.parentNode)
                                if (i.nodeType < 11 && (n ? -1 < n.index(i) : 1 === i.nodeType && S.find.matchesSelector(i, t))) { s.push(i); break } return this.pushStack(1 < s.length ? S.uniqueSort(s) : s)
                },
                index: function(t) { return t ? "string" == typeof t ? r.call(S(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
                add: function(t, e) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(t, e)))) },
                addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }
            }), S.each({ parent: function(t) { t = t.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(t) { return d(t, "parentNode") }, parentsUntil: function(t, e, i) { return d(t, "parentNode", i) }, next: function(t) { return F(t, "nextSibling") }, prev: function(t) { return F(t, "previousSibling") }, nextAll: function(t) { return d(t, "nextSibling") }, prevAll: function(t) { return d(t, "previousSibling") }, nextUntil: function(t, e, i) { return d(t, "nextSibling", i) }, prevUntil: function(t, e, i) { return d(t, "previousSibling", i) }, siblings: function(t) { return b((t.parentNode || {}).firstChild, t) }, children: function(t) { return b(t.firstChild) }, contents: function(t) { return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (_(t, "template") && (t = t.content || t), S.merge([], t.childNodes)) } }, function(a, r) { S.fn[a] = function(t, e) { var i = S.map(this, r, t); return (e = "Until" !== a.slice(-5) ? t : e) && "string" == typeof e && (i = S.filter(e, i)), 1 < this.length && (V[a] || S.uniqueSort(i), B.test(a) && i.reverse()), this.pushStack(i) } });
            var G = /[^\x20\t\r\n\f]+/g;

            function M(t) { return t }

            function I(t) { throw t }

            function R(t, e, i, a) { var r; try { t && g(r = t.promise) ? r.call(t).done(e).fail(i) : t && g(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(a)) } catch (t) { i.apply(void 0, [t]) } } S.Callbacks = function(a) {
                var t, i;
                a = "string" == typeof a ? (t = a, i = {}, S.each(t.match(G) || [], function(t, e) { i[e] = !0 }), i) : S.extend({}, a);

                function r() {
                    for (o = o || a.once, n = s = !0; l.length; p = -1)
                        for (e = l.shift(); ++p < h.length;) !1 === h[p].apply(e[0], e[1]) && a.stopOnFalse && (p = h.length, e = !1);
                    a.memory || (e = !1), s = !1, o && (h = e ? [] : "")
                }
                var s, e, n, o, h = [],
                    l = [],
                    p = -1,
                    c = { add: function() { return h && (e && !s && (p = h.length - 1, l.push(e)), function i(t) { S.each(t, function(t, e) { g(e) ? a.unique && c.has(e) || h.push(e) : e && e.length && "string" !== f(e) && i(e) }) }(arguments), e && !s && r()), this }, remove: function() { return S.each(arguments, function(t, e) { for (var i; - 1 < (i = S.inArray(e, h, i));) h.splice(i, 1), i <= p && p-- }), this }, has: function(t) { return t ? -1 < S.inArray(t, h) : 0 < h.length }, empty: function() { return h = h && [], this }, disable: function() { return o = l = [], h = e = "", this }, disabled: function() { return !h }, lock: function() { return o = l = [], e || s || (h = e = ""), this }, locked: function() { return !!o }, fireWith: function(t, e) { return o || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), s || r()), this }, fire: function() { return c.fireWith(this, arguments), this }, fired: function() { return !!n } };
                return c
            }, S.extend({
                Deferred: function(t) {
                    var s = [
                            ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                            ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        n = {
                            state: function() { return r },
                            always: function() { return o.done(arguments).fail(arguments), this },
                            catch: function(t) { return n.then(null, t) },
                            pipe: function() {
                                var r = arguments;
                                return S.Deferred(function(a) {
                                    S.each(s, function(t, e) {
                                        var i = g(r[e[4]]) && r[e[4]];
                                        o[e[1]](function() {
                                            var t = i && i.apply(this, arguments);
                                            t && g(t.promise) ? t.promise().progress(a.notify).done(a.resolve).fail(a.reject) : a[e[0] + "With"](this, i ? [t] : arguments)
                                        })
                                    }), r = null
                                }).promise()
                            },
                            then: function(e, i, a) {
                                var h = 0;

                                function l(r, s, n, o) {
                                    return function() {
                                        function t() {
                                            var t, e;
                                            if (!(r < h)) {
                                                if ((t = n.apply(i, a)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                                e = t && ("object" == typeof t || "function" == typeof t) && t.then, g(e) ? o ? e.call(t, l(h, s, M, o), l(h, s, I, o)) : (h++, e.call(t, l(h, s, M, o), l(h, s, I, o), l(h, s, M, s.notifyWith))) : (n !== M && (i = void 0, a = [t]), (o || s.resolveWith)(i, a))
                                            }
                                        }
                                        var i = this,
                                            a = arguments,
                                            e = o ? t : function() { try { t() } catch (t) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(t, e.stackTrace), h <= r + 1 && (n !== I && (i = void 0, a = [t]), s.rejectWith(i, a)) } };
                                        r ? e() : (S.Deferred.getStackHook && (e.stackTrace = S.Deferred.getStackHook()), E.setTimeout(e))
                                    }
                                }
                                return S.Deferred(function(t) { s[0][3].add(l(0, t, g(a) ? a : M, t.notifyWith)), s[1][3].add(l(0, t, g(e) ? e : M)), s[2][3].add(l(0, t, g(i) ? i : I)) }).promise()
                            },
                            promise: function(t) { return null != t ? S.extend(t, n) : n }
                        },
                        o = {};
                    return S.each(s, function(t, e) {
                        var i = e[2],
                            a = e[5];
                        n[e[1]] = i.add, a && i.add(function() { r = a }, s[3 - t][2].disable, s[3 - t][3].disable, s[0][2].lock, s[0][3].lock), i.add(e[3].fire), o[e[0]] = function() { return o[e[0] + "With"](this === o ? void 0 : this, arguments), this }, o[e[0] + "With"] = i.fireWith
                    }), n.promise(o), t && t.call(o, o), o
                },
                when: function(t) {
                    function e(e) { return function(t) { r[e] = this, s[e] = 1 < arguments.length ? o.call(arguments) : t, --i || n.resolveWith(r, s) } }
                    var i = arguments.length,
                        a = i,
                        r = Array(a),
                        s = o.call(arguments),
                        n = S.Deferred();
                    if (i <= 1 && (R(t, n.done(e(a)).resolve, n.reject, !i), "pending" === n.state() || g(s[a] && s[a].then))) return n.then();
                    for (; a--;) R(s[a], e(a), n.reject);
                    return n.promise()
                }
            });
            var L = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            S.Deferred.exceptionHook = function(t, e) { E.console && E.console.warn && t && L.test(t.name) && E.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e) }, S.readyException = function(t) { E.setTimeout(function() { throw t }) };
            var N = S.Deferred();

            function z() { A.removeEventListener("DOMContentLoaded", z), E.removeEventListener("load", z), S.ready() } S.fn.ready = function(t) { return N.then(t).catch(function(t) { S.readyException(t) }), this }, S.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(t) {
                    (!0 === t ? --S.readyWait : S.isReady) || (S.isReady = !0) !== t && 0 < --S.readyWait || N.resolveWith(A, [S])
                }
            }), S.ready.then = N.then, "complete" === A.readyState || "loading" !== A.readyState && !A.documentElement.doScroll ? E.setTimeout(S.ready) : (A.addEventListener("DOMContentLoaded", z), E.addEventListener("load", z));
            var O = function(t, e, i, a, r, s, n) {
                    var o = 0,
                        h = t.length,
                        l = null == i;
                    if ("object" === f(i))
                        for (o in r = !0, i) O(t, e, o, i[o], !0, s, n);
                    else if (void 0 !== a && (r = !0, g(a) || (n = !0), e = l ? n ? (e.call(t, a), null) : (l = e, function(t, e, i) { return l.call(S(t), i) }) : e))
                        for (; o < h; o++) e(t[o], i, n ? a : a.call(t[o], o, e(t[o], i)));
                    return r ? t : l ? e.call(t) : h ? e(t[0], i) : s
                },
                j = /^-ms-/,
                H = /-([a-z])/g;

            function q(t, e) { return e.toUpperCase() }

            function $(t) { return t.replace(j, "ms-").replace(H, q) }

            function W(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType }

            function Q() { this.expando = S.expando + Q.uid++ } Q.uid = 1, Q.prototype = {
                cache: function(t) { var e = t[this.expando]; return e || (e = {}, W(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e },
                set: function(t, e, i) {
                    var a, r = this.cache(t);
                    if ("string" == typeof e) r[$(e)] = i;
                    else
                        for (a in e) r[$(a)] = e[a];
                    return r
                },
                get: function(t, e) { return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][$(e)] },
                access: function(t, e, i) { return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e) },
                remove: function(t, e) { var i, a = t[this.expando]; if (void 0 !== a) { if (void 0 !== e) { i = (e = Array.isArray(e) ? e.map($) : (e = $(e)) in a ? [e] : e.match(G) || []).length; for (; i--;) delete a[e[i]] } void 0 !== e && !S.isEmptyObject(a) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]) } },
                hasData: function(t) { t = t[this.expando]; return void 0 !== t && !S.isEmptyObject(t) }
            };
            var U = new Q,
                J = new Q,
                X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Y = /[A-Z]/g;

            function K(t, e, i) {
                var a, r;
                if (void 0 === i && 1 === t.nodeType)
                    if (a = "data-" + e.replace(Y, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(a))) { try { i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : X.test(r) ? JSON.parse(r) : r) } catch (t) {} J.set(t, e, i) } else i = void 0;
                return i
            }
            S.extend({ hasData: function(t) { return J.hasData(t) || U.hasData(t) }, data: function(t, e, i) { return J.access(t, e, i) }, removeData: function(t, e) { J.remove(t, e) }, _data: function(t, e, i) { return U.access(t, e, i) }, _removeData: function(t, e) { U.remove(t, e) } }), S.fn.extend({
                data: function(i, t) {
                    var e, a, r, s = this[0],
                        n = s && s.attributes;
                    if (void 0 !== i) return "object" == typeof i ? this.each(function() { J.set(this, i) }) : O(this, function(t) { var e; return s && void 0 === t ? void 0 !== (e = J.get(s, i)) || void 0 !== (e = K(s, i)) ? e : void 0 : void this.each(function() { J.set(this, i, t) }) }, null, t, 1 < arguments.length, null, !0);
                    if (this.length && (r = J.get(s), 1 === s.nodeType && !U.get(s, "hasDataAttrs"))) {
                        for (e = n.length; e--;) n[e] && 0 === (a = n[e].name).indexOf("data-") && (a = $(a.slice(5)), K(s, a, r[a]));
                        U.set(s, "hasDataAttrs", !0)
                    }
                    return r
                },
                removeData: function(t) { return this.each(function() { J.remove(this, t) }) }
            }), S.extend({
                queue: function(t, e, i) { var a; if (t) return a = U.get(t, e = (e || "fx") + "queue"), i && (!a || Array.isArray(i) ? a = U.access(t, e, S.makeArray(i)) : a.push(i)), a || [] },
                dequeue: function(t, e) {
                    var i = S.queue(t, e = e || "fx"),
                        a = i.length,
                        r = i.shift(),
                        s = S._queueHooks(t, e);
                    "inprogress" === r && (r = i.shift(), a--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, function() { S.dequeue(t, e) }, s)), !a && s && s.empty.fire()
                },
                _queueHooks: function(t, e) { var i = e + "queueHooks"; return U.get(t, i) || U.access(t, i, { empty: S.Callbacks("once memory").add(function() { U.remove(t, [e + "queue", i]) }) }) }
            }), S.fn.extend({
                queue: function(e, i) {
                    var t = 2;
                    return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? S.queue(this[0], e) : void 0 === i ? this : this.each(function() {
                        var t = S.queue(this, e, i);
                        S._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && S.dequeue(this, e)
                    })
                },
                dequeue: function(t) { return this.each(function() { S.dequeue(this, t) }) },
                clearQueue: function(t) { return this.queue(t || "fx", []) },
                promise: function(t, e) {
                    function i() {--r || s.resolveWith(n, [n]) }
                    var a, r = 1,
                        s = S.Deferred(),
                        n = this,
                        o = this.length;
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(a = U.get(n[o], t + "queueHooks")) && a.empty && (r++, a.empty.add(i));
                    return i(), s.promise(e)
                }
            });
            var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                tt = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
                et = ["Top", "Right", "Bottom", "Left"],
                it = A.documentElement,
                at = function(t) { return S.contains(t.ownerDocument, t) },
                rt = { composed: !0 };
            it.getRootNode && (at = function(t) { return S.contains(t.ownerDocument, t) || t.getRootNode(rt) === t.ownerDocument });
            var st = function(t, e) { return "none" === (t = e || t).style.display || "" === t.style.display && at(t) && "none" === S.css(t, "display") };

            function nt(t, e, i, a) {
                var r, s, n = 20,
                    o = a ? function() { return a.cur() } : function() { return S.css(t, e, "") },
                    h = o(),
                    l = i && i[3] || (S.cssNumber[e] ? "" : "px"),
                    p = t.nodeType && (S.cssNumber[e] || "px" !== l && +h) && tt.exec(S.css(t, e));
                if (p && p[3] !== l) {
                    for (l = l || p[3], p = +(h /= 2) || 1; n--;) S.style(t, e, p + l), (1 - s) * (1 - (s = o() / h || .5)) <= 0 && (n = 0), p /= s;
                    S.style(t, e, (p *= 2) + l), i = i || []
                }
                return i && (p = +p || +h || 0, r = i[1] ? p + (i[1] + 1) * i[2] : +i[2], a && (a.unit = l, a.start = p, a.end = r)), r
            }
            var ot = {};

            function ht(t, e) { for (var i, a, r, s, n, o = [], h = 0, l = t.length; h < l; h++)(a = t[h]).style && (i = a.style.display, e ? ("none" === i && (o[h] = U.get(a, "display") || null, o[h] || (a.style.display = "")), "" === a.style.display && st(a) && (o[h] = (n = s = void 0, s = (r = a).ownerDocument, n = r.nodeName, (r = ot[n]) || (s = s.body.appendChild(s.createElement(n)), r = S.css(s, "display"), s.parentNode.removeChild(s), ot[n] = r = "none" === r ? "block" : r)))) : "none" !== i && (o[h] = "none", U.set(a, "display", i))); for (h = 0; h < l; h++) null != o[h] && (t[h].style.display = o[h]); return t } S.fn.extend({ show: function() { return ht(this, !0) }, hide: function() { return ht(this) }, toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { st(this) ? S(this).show() : S(this).hide() }) } });
            var lt = /^(?:checkbox|radio)$/i,
                pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ct = /^$|^module$|\/(?:java|ecma)script/i;
            Qe = A.createDocumentFragment().appendChild(A.createElement("div")), (m = A.createElement("input")).setAttribute("type", "radio"), m.setAttribute("checked", "checked"), m.setAttribute("name", "t"), Qe.appendChild(m), k.checkClone = Qe.cloneNode(!0).cloneNode(!0).lastChild.checked, Qe.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!Qe.cloneNode(!0).lastChild.defaultValue, Qe.innerHTML = "<option></option>", k.option = !!Qe.lastChild;
            var mt = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

            function dt(t, e) { var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : []; return void 0 === e || e && _(t, e) ? S.merge([t], i) : i }

            function ft(t, e) { for (var i = 0, a = t.length; i < a; i++) U.set(t[i], "globalEval", !e || U.get(e[i], "globalEval")) } mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td, k.option || (mt.optgroup = mt.option = [1, "<select multiple='multiple'>", "</select>"]);
            var ut = /<|&#?\w+;/;

            function xt(t, e, i, a, r) {
                for (var s, n, o, h, l, p = e.createDocumentFragment(), c = [], m = 0, d = t.length; m < d; m++)
                    if ((s = t[m]) || 0 === s)
                        if ("object" === f(s)) S.merge(c, s.nodeType ? [s] : s);
                        else if (ut.test(s)) {
                    for (n = n || p.appendChild(e.createElement("div")), o = (pt.exec(s) || ["", ""])[1].toLowerCase(), o = mt[o] || mt._default, n.innerHTML = o[1] + S.htmlPrefilter(s) + o[2], l = o[0]; l--;) n = n.lastChild;
                    S.merge(c, n.childNodes), (n = p.firstChild).textContent = ""
                } else c.push(e.createTextNode(s));
                for (p.textContent = "", m = 0; s = c[m++];)
                    if (a && -1 < S.inArray(s, a)) r && r.push(s);
                    else if (h = at(s), n = dt(p.appendChild(s), "script"), h && ft(n), i)
                    for (l = 0; s = n[l++];) ct.test(s.type || "") && i.push(s);
                return p
            }
            var yt = /^([^.]*)(?:\.(.+)|)/;

            function kt() { return !0 }

            function gt() { return !1 }

            function vt(t, e) { return t === function() { try { return A.activeElement } catch (t) {} }() == ("focus" === e) }

            function bt(t, e, i, a, r, s) {
                var n, o;
                if ("object" == typeof e) { for (o in "string" != typeof i && (a = a || i, i = void 0), e) bt(t, o, i, a, e[o], s); return t }
                if (null == a && null == r ? (r = i, a = i = void 0) : null == r && ("string" == typeof i ? (r = a, a = void 0) : (r = a, a = i, i = void 0)), !1 === r) r = gt;
                else if (!r) return t;
                return 1 === s && (n = r, (r = function(t) { return S().off(t), n.apply(this, arguments) }).guid = n.guid || (n.guid = S.guid++)), t.each(function() { S.event.add(this, e, r, a, i) })
            }

            function Et(t, r, s) {
                s ? (U.set(t, r, !1), S.event.add(t, r, {
                    namespace: !1,
                    handler: function(t) {
                        var e, i, a = U.get(this, r);
                        if (1 & t.isTrigger && this[r]) {
                            if (a.length)(S.event.special[r] || {}).delegateType && t.stopPropagation();
                            else if (a = o.call(arguments), U.set(this, r, a), e = s(this, r), this[r](), a !== (i = U.get(this, r)) || e ? U.set(this, r, !1) : i = {}, a !== i) return t.stopImmediatePropagation(), t.preventDefault(), i && i.value
                        } else a.length && (U.set(this, r, { value: S.event.trigger(S.extend(a[0], S.Event.prototype), a.slice(1), this) }), t.stopImmediatePropagation())
                    }
                })) : void 0 === U.get(t, r) && S.event.add(t, r, kt)
            }
            S.event = {
                global: {},
                add: function(e, t, i, a, r) {
                    var s, n, o, h, l, p, c, m, d, f = U.get(e);
                    if (W(e))
                        for (i.handler && (i = (s = i).handler, r = s.selector), r && S.find.matchesSelector(it, r), i.guid || (i.guid = S.guid++), (o = f.events) || (o = f.events = Object.create(null)), (n = f.handle) || (n = f.handle = function(t) { return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0 }), h = (t = (t || "").match(G) || [""]).length; h--;) c = d = (l = yt.exec(t[h]) || [])[1], m = (l[2] || "").split(".").sort(), c && (p = S.event.special[c] || {}, c = (r ? p.delegateType : p.bindType) || c, p = S.event.special[c] || {}, l = S.extend({ type: c, origType: d, data: a, handler: i, guid: i.guid, selector: r, needsContext: r && S.expr.match.needsContext.test(r), namespace: m.join(".") }, s), (d = o[c]) || ((d = o[c] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(e, a, m, n) || e.addEventListener && e.addEventListener(c, n)), p.add && (p.add.call(e, l), l.handler.guid || (l.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, l) : d.push(l), S.event.global[c] = !0)
                },
                remove: function(t, e, i, a, r) {
                    var s, n, o, h, l, p, c, m, d, f, u, x = U.hasData(t) && U.get(t);
                    if (x && (h = x.events)) {
                        for (l = (e = (e || "").match(G) || [""]).length; l--;)
                            if (d = u = (o = yt.exec(e[l]) || [])[1], f = (o[2] || "").split(".").sort(), d) {
                                for (c = S.event.special[d] || {}, m = h[d = (a ? c.delegateType : c.bindType) || d] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), n = s = m.length; s--;) p = m[s], !r && u !== p.origType || i && i.guid !== p.guid || o && !o.test(p.namespace) || a && a !== p.selector && ("**" !== a || !p.selector) || (m.splice(s, 1), p.selector && m.delegateCount--, c.remove && c.remove.call(t, p));
                                n && !m.length && (c.teardown && !1 !== c.teardown.call(t, f, x.handle) || S.removeEvent(t, d, x.handle), delete h[d])
                            } else
                                for (d in h) S.event.remove(t, d + e[l], i, a, !0);
                        S.isEmptyObject(h) && U.remove(t, "handle events")
                    }
                },
                dispatch: function(t) {
                    var e, i, a, r, s, n = new Array(arguments.length),
                        o = S.event.fix(t),
                        h = (U.get(this, "events") || Object.create(null))[o.type] || [],
                        t = S.event.special[o.type] || {};
                    for (n[0] = o, e = 1; e < arguments.length; e++) n[e] = arguments[e];
                    if (o.delegateTarget = this, !t.preDispatch || !1 !== t.preDispatch.call(this, o)) {
                        for (s = S.event.handlers.call(this, o, h), e = 0;
                            (a = s[e++]) && !o.isPropagationStopped();)
                            for (o.currentTarget = a.elem, i = 0;
                                (r = a.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !1 !== r.namespace && !o.rnamespace.test(r.namespace) || (o.handleObj = r, o.data = r.data, void 0 !== (r = ((S.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, n)) && !1 === (o.result = r) && (o.preventDefault(), o.stopPropagation()));
                        return t.postDispatch && t.postDispatch.call(this, o), o.result
                    }
                },
                handlers: function(t, e) {
                    var i, a, r, s, n, o = [],
                        h = e.delegateCount,
                        l = t.target;
                    if (h && l.nodeType && !("click" === t.type && 1 <= t.button))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
                                for (s = [], n = {}, i = 0; i < h; i++) void 0 === n[r = (a = e[i]).selector + " "] && (n[r] = a.needsContext ? -1 < S(r, this).index(l) : S.find(r, this, null, [l]).length), n[r] && s.push(a);
                                s.length && o.push({ elem: l, handlers: s })
                            } return l = this, h < e.length && o.push({ elem: l, handlers: e.slice(h) }), o
                },
                addProp: function(e, t) { Object.defineProperty(S.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
                fix: function(t) { return t[S.expando] ? t : new S.Event(t) },
                special: { load: { noBubble: !0 }, click: { setup: function(t) { t = this || t; return lt.test(t.type) && t.click && _(t, "input") && Et(t, "click", kt), !1 }, trigger: function(t) { t = this || t; return lt.test(t.type) && t.click && _(t, "input") && Et(t, "click"), !0 }, _default: function(t) { t = t.target; return lt.test(t.type) && t.click && _(t, "input") && U.get(t, "click") || _(t, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } }
            }, S.removeEvent = function(t, e, i) { t.removeEventListener && t.removeEventListener(e, i) }, S.Event = function(t, e) {
                if (!(this instanceof S.Event)) return new S.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? kt : gt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && S.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[S.expando] = !0
            }, S.Event.prototype = {
                constructor: S.Event,
                isDefaultPrevented: gt,
                isPropagationStopped: gt,
                isImmediatePropagationStopped: gt,
                isSimulated: !1,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = kt, t && !this.isSimulated && t.preventDefault()
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = kt, t && !this.isSimulated && t.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = kt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(t, e) { S.event.special[t] = { setup: function() { return Et(this, t, vt), !1 }, trigger: function() { return Et(this, t), !0 }, _default: function() { return !0 }, delegateType: e } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, r) {
                S.event.special[t] = {
                    delegateType: r,
                    bindType: r,
                    handle: function(t) {
                        var e, i = t.relatedTarget,
                            a = t.handleObj;
                        return i && (i === this || S.contains(this, i)) || (t.type = a.origType, e = a.handler.apply(this, arguments), t.type = r), e
                    }
                }
            }), S.fn.extend({ on: function(t, e, i, a) { return bt(this, t, e, i, a) }, one: function(t, e, i, a) { return bt(this, t, e, i, a, 1) }, off: function(t, e, i) { var a, r; if (t && t.preventDefault && t.handleObj) return a = t.handleObj, S(t.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this; if ("object" != typeof t) return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = gt), this.each(function() { S.event.remove(this, t, i, e) }); for (r in t) this.off(r, e, t[r]); return this } });
            var At = /<script|<style|<link/i,
                St = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function _t(t, e) { return _(t, "table") && _(11 !== e.nodeType ? e : e.firstChild, "tr") && S(t).children("tbody")[0] || t }

            function Pt(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

            function Tt(t) { return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t }

            function wt(t, e) {
                var i, a, r, s;
                if (1 === e.nodeType) {
                    if (U.hasData(t) && (s = U.get(t).events))
                        for (r in U.remove(e, "handle events"), s)
                            for (i = 0, a = s[r].length; i < a; i++) S.event.add(e, r, s[r][i]);
                    J.hasData(t) && (t = J.access(t), t = S.extend({}, t), J.set(e, t))
                }
            }

            function Ct(i, a, r, s) {
                a = x(a);
                var t, e, n, o, h, l, p = 0,
                    c = i.length,
                    m = c - 1,
                    d = a[0],
                    f = g(d);
                if (f || 1 < c && "string" == typeof d && !k.checkClone && St.test(d)) return i.each(function(t) {
                    var e = i.eq(t);
                    f && (a[0] = d.call(this, t, e.html())), Ct(e, a, r, s)
                });
                if (c && (e = (t = xt(a, i[0].ownerDocument, !1, i, s)).firstChild, 1 === t.childNodes.length && (t = e), e || s)) {
                    for (o = (n = S.map(dt(t, "script"), Pt)).length; p < c; p++) h = t, p !== m && (h = S.clone(h, !0, !0), o && S.merge(n, dt(h, "script"))), r.call(i[p], h, p);
                    if (o)
                        for (l = n[n.length - 1].ownerDocument, S.map(n, Tt), p = 0; p < o; p++) h = n[p], ct.test(h.type || "") && !U.access(h, "globalEval") && S.contains(l, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? S._evalUrl && !h.noModule && S._evalUrl(h.src, { nonce: h.nonce || h.getAttribute("nonce") }, l) : v(h.textContent.replace(Dt, ""), h, l))
                }
                return i
            }

            function Bt(t, e, i) { for (var a, r = e ? S.filter(e, t) : t, s = 0; null != (a = r[s]); s++) i || 1 !== a.nodeType || S.cleanData(dt(a)), a.parentNode && (i && at(a) && ft(dt(a, "script")), a.parentNode.removeChild(a)); return t } S.extend({
                htmlPrefilter: function(t) { return t },
                clone: function(t, e, i) {
                    var a, r, s, n, o, h, l, p = t.cloneNode(!0),
                        c = at(t);
                    if (!(k.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || S.isXMLDoc(t)))
                        for (n = dt(p), a = 0, r = (s = dt(t)).length; a < r; a++) o = s[a], h = n[a], l = void 0, "input" === (l = h.nodeName.toLowerCase()) && lt.test(o.type) ? h.checked = o.checked : "input" !== l && "textarea" !== l || (h.defaultValue = o.defaultValue);
                    if (e)
                        if (i)
                            for (s = s || dt(t), n = n || dt(p), a = 0, r = s.length; a < r; a++) wt(s[a], n[a]);
                        else wt(t, p);
                    return 0 < (n = dt(p, "script")).length && ft(n, !c && dt(t, "script")), p
                },
                cleanData: function(t) {
                    for (var e, i, a, r = S.event.special, s = 0; void 0 !== (i = t[s]); s++)
                        if (W(i)) {
                            if (e = i[U.expando]) {
                                if (e.events)
                                    for (a in e.events) r[a] ? S.event.remove(i, a) : S.removeEvent(i, a, e.handle);
                                i[U.expando] = void 0
                            }
                            i[J.expando] && (i[J.expando] = void 0)
                        }
                }
            }), S.fn.extend({
                detach: function(t) { return Bt(this, t, !0) },
                remove: function(t) { return Bt(this, t) },
                text: function(t) { return O(this, function(t) { return void 0 === t ? S.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t) }) }, null, t, arguments.length) },
                append: function() { return Ct(this, arguments, function(t) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _t(this, t).appendChild(t) }) },
                prepend: function() {
                    return Ct(this, arguments, function(t) {
                        var e;
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = _t(this, t)).insertBefore(t, e.firstChild)
                    })
                },
                before: function() { return Ct(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) },
                after: function() { return Ct(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) },
                empty: function() { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (S.cleanData(dt(t, !1)), t.textContent = ""); return this },
                clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function() { return S.clone(this, t, e) }) },
                html: function(t) {
                    return O(this, function(t) {
                        var e = this[0] || {},
                            i = 0,
                            a = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !At.test(t) && !mt[(pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = S.htmlPrefilter(t);
                            try {
                                for (; i < a; i++) 1 === (e = this[i] || {}).nodeType && (S.cleanData(dt(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function() {
                    var i = [];
                    return Ct(this, arguments, function(t) {
                        var e = this.parentNode;
                        S.inArray(this, i) < 0 && (S.cleanData(dt(this)), e && e.replaceChild(t, this))
                    }, i)
                }
            }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, n) { S.fn[t] = function(t) { for (var e, i = [], a = S(t), r = a.length - 1, s = 0; s <= r; s++) e = s === r ? this : this.clone(!0), S(a[s])[n](e), h.apply(i, e.get()); return this.pushStack(i) } });

            function Vt(t, e, i) { var a, r = {}; for (a in e) r[a] = t.style[a], t.style[a] = e[a]; for (a in i = i.call(t), e) t.style[a] = r[a]; return i }
            var Ft, Gt, Mt, It, Rt, Lt, Nt, zt, Ot = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
                jt = function(t) { var e = t.ownerDocument.defaultView; return (e = !e || !e.opener ? E : e).getComputedStyle(t) },
                Ht = new RegExp(et.join("|"), "i");

            function qt() {
                var t;
                zt && (Nt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", zt.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", it.appendChild(Nt).appendChild(zt), t = E.getComputedStyle(zt), Ft = "1%" !== t.top, Lt = 12 === $t(t.marginLeft), zt.style.right = "60%", It = 36 === $t(t.right), Gt = 36 === $t(t.width), zt.style.position = "absolute", Mt = 12 === $t(zt.offsetWidth / 3), it.removeChild(Nt), zt = null)
            }

            function $t(t) { return Math.round(parseFloat(t)) }

            function Wt(t, e, i) { var a, r, s = t.style; return (i = i || jt(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || at(t) || (r = S.style(t, e)), !k.pixelBoxStyles() && Ot.test(r) && Ht.test(e) && (a = s.width, t = s.minWidth, e = s.maxWidth, s.minWidth = s.maxWidth = s.width = r, r = i.width, s.width = a, s.minWidth = t, s.maxWidth = e)), void 0 !== r ? r + "" : r }

            function Qt(t, e) {
                return {
                    get: function() {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            Nt = A.createElement("div"), (zt = A.createElement("div")).style && (zt.style.backgroundClip = "content-box", zt.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === zt.style.backgroundClip, S.extend(k, { boxSizingReliable: function() { return qt(), Gt }, pixelBoxStyles: function() { return qt(), It }, pixelPosition: function() { return qt(), Ft }, reliableMarginLeft: function() { return qt(), Lt }, scrollboxSize: function() { return qt(), Mt }, reliableTrDimensions: function() { var t, e, i; return null == Rt && (t = A.createElement("table"), e = A.createElement("tr"), i = A.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", e.style.cssText = "border:1px solid", e.style.height = "1px", i.style.height = "9px", i.style.display = "block", it.appendChild(t).appendChild(e).appendChild(i), i = E.getComputedStyle(e), Rt = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === e.offsetHeight, it.removeChild(t)), Rt } }));
            var Ut = ["Webkit", "Moz", "ms"],
                Jt = A.createElement("div").style,
                Xt = {};

            function Yt(t) {
                var e = S.cssProps[t] || Xt[t];
                return e || (t in Jt ? t : Xt[t] = function(t) {
                    for (var e = t[0].toUpperCase() + t.slice(1), i = Ut.length; i--;)
                        if ((t = Ut[i] + e) in Jt) return t
                }(t) || t)
            }
            var Kt = /^(none|table(?!-c[ea]).+)/,
                Zt = /^--/,
                te = { position: "absolute", visibility: "hidden", display: "block" },
                ee = { letterSpacing: "0", fontWeight: "400" };

            function ie(t, e, i) { var a = tt.exec(e); return a ? Math.max(0, a[2] - (i || 0)) + (a[3] || "px") : e }

            function ae(t, e, i, a, r, s) {
                var n = "width" === e ? 1 : 0,
                    o = 0,
                    h = 0;
                if (i === (a ? "border" : "content")) return 0;
                for (; n < 4; n += 2) "margin" === i && (h += S.css(t, i + et[n], !0, r)), a ? ("content" === i && (h -= S.css(t, "padding" + et[n], !0, r)), "margin" !== i && (h -= S.css(t, "border" + et[n] + "Width", !0, r))) : (h += S.css(t, "padding" + et[n], !0, r), "padding" !== i ? h += S.css(t, "border" + et[n] + "Width", !0, r) : o += S.css(t, "border" + et[n] + "Width", !0, r));
                return !a && 0 <= s && (h += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - h - o - .5)) || 0), h
            }

            function re(t, e, i) {
                var a = jt(t),
                    r = (!k.boxSizingReliable() || i) && "border-box" === S.css(t, "boxSizing", !1, a),
                    s = r,
                    n = Wt(t, e, a),
                    o = "offset" + e[0].toUpperCase() + e.slice(1);
                if (Ot.test(n)) {
                    if (!i) return n;
                    n = "auto"
                }
                return (!k.boxSizingReliable() && r || !k.reliableTrDimensions() && _(t, "tr") || "auto" === n || !parseFloat(n) && "inline" === S.css(t, "display", !1, a)) && t.getClientRects().length && (r = "border-box" === S.css(t, "boxSizing", !1, a), (s = o in t) && (n = t[o])), (n = parseFloat(n) || 0) + ae(t, e, i || (r ? "border" : "content"), s, a, n) + "px"
            }

            function se(t, e, i, a, r) { return new se.prototype.init(t, e, i, a, r) } S.extend({
                cssHooks: { opacity: { get: function(t, e) { if (e) { t = Wt(t, "opacity"); return "" === t ? "1" : t } } } },
                cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                cssProps: {},
                style: function(t, e, i, a) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var r, s, n, o = $(e),
                            h = Zt.test(e),
                            l = t.style;
                        if (h || (e = Yt(o)), n = S.cssHooks[e] || S.cssHooks[o], void 0 === i) return n && "get" in n && void 0 !== (r = n.get(t, !1, a)) ? r : l[e];
                        "string" === (s = typeof i) && (r = tt.exec(i)) && r[1] && (i = nt(t, e, r), s = "number"), null != i && i == i && ("number" !== s || h || (i += r && r[3] || (S.cssNumber[o] ? "" : "px")), k.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), n && "set" in n && void 0 === (i = n.set(t, i, a)) || (h ? l.setProperty(e, i) : l[e] = i))
                    }
                },
                css: function(t, e, i, a) { var r, s = $(e); return Zt.test(e) || (e = Yt(s)), "normal" === (r = void 0 === (r = (s = S.cssHooks[e] || S.cssHooks[s]) && "get" in s ? s.get(t, !0, i) : r) ? Wt(t, e, a) : r) && e in ee && (r = ee[e]), "" === i || i ? (e = parseFloat(r), !0 === i || isFinite(e) ? e || 0 : r) : r }
            }), S.each(["height", "width"], function(t, o) {
                S.cssHooks[o] = {
                    get: function(t, e, i) { if (e) return !Kt.test(S.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? re(t, o, i) : Vt(t, te, function() { return re(t, o, i) }) },
                    set: function(t, e, i) {
                        var a, r = jt(t),
                            s = !k.scrollboxSize() && "absolute" === r.position,
                            n = (s || i) && "border-box" === S.css(t, "boxSizing", !1, r),
                            i = i ? ae(t, o, i, n, r) : 0;
                        return n && s && (i -= Math.ceil(t["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(r[o]) - ae(t, o, "border", !1, r) - .5)), i && (a = tt.exec(e)) && "px" !== (a[3] || "px") && (t.style[o] = e, e = S.css(t, o)), ie(0, e, i)
                    }
                }
            }), S.cssHooks.marginLeft = Qt(k.reliableMarginLeft, function(t, e) { if (e) return (parseFloat(Wt(t, "marginLeft")) || t.getBoundingClientRect().left - Vt(t, { marginLeft: 0 }, function() { return t.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function(r, s) { S.cssHooks[r + s] = { expand: function(t) { for (var e = 0, i = {}, a = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[r + et[e] + s] = a[e] || a[e - 2] || a[0]; return i } }, "margin" !== r && (S.cssHooks[r + s].set = ie) }), S.fn.extend({
                css: function(t, e) {
                    return O(this, function(t, e, i) {
                        var a, r, s = {},
                            n = 0;
                        if (Array.isArray(e)) { for (a = jt(t), r = e.length; n < r; n++) s[e[n]] = S.css(t, e[n], !1, a); return s }
                        return void 0 !== i ? S.style(t, e, i) : S.css(t, e)
                    }, t, e, 1 < arguments.length)
                }
            }), (S.Tween = se).prototype = { constructor: se, init: function(t, e, i, a, r, s) { this.elem = t, this.prop = i, this.easing = r || S.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = a, this.unit = s || (S.cssNumber[i] ? "" : "px") }, cur: function() { var t = se.propHooks[this.prop]; return (t && t.get ? t : se.propHooks._default).get(this) }, run: function(t) { var e, i = se.propHooks[this.prop]; return this.options.duration ? this.pos = e = S.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (i && i.set ? i : se.propHooks._default).set(this), this } }, se.prototype.init.prototype = se.prototype, se.propHooks = { _default: { get: function(t) { return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (t = S.css(t.elem, t.prop, "")) && "auto" !== t ? t : 0 }, set: function(t) { S.fx.step[t.prop] ? S.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !S.cssHooks[t.prop] && null == t.elem.style[Yt(t.prop)] ? t.elem[t.prop] = t.now : S.style(t.elem, t.prop, t.now + t.unit) } } }, se.propHooks.scrollTop = se.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, S.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 }, _default: "swing" }, S.fx = se.prototype.init, S.fx.step = {};
            var ne, oe, he = /^(?:toggle|show|hide)$/,
                le = /queueHooks$/;

            function pe() { oe && (!1 === A.hidden && E.requestAnimationFrame ? E.requestAnimationFrame(pe) : E.setTimeout(pe, S.fx.interval), S.fx.tick()) }

            function ce() { return E.setTimeout(function() { ne = void 0 }), ne = Date.now() }

            function me(t, e) {
                var i, a = 0,
                    r = { height: t };
                for (e = e ? 1 : 0; a < 4; a += 2 - e) r["margin" + (i = et[a])] = r["padding" + i] = t;
                return e && (r.opacity = r.width = t), r
            }

            function de(t, e, i) {
                for (var a, r = (fe.tweeners[e] || []).concat(fe.tweeners["*"]), s = 0, n = r.length; s < n; s++)
                    if (a = r[s].call(i, e, t)) return a
            }

            function fe(r, t, e) {
                var i, s, a = 0,
                    n = fe.prefilters.length,
                    o = S.Deferred().always(function() { delete h.elem }),
                    h = function() { if (s) return !1; for (var t = ne || ce(), t = Math.max(0, l.startTime + l.duration - t), e = 1 - (t / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++) l.tweens[i].run(e); return o.notifyWith(r, [l, e, t]), e < 1 && a ? t : (a || o.notifyWith(r, [l, 1, 0]), o.resolveWith(r, [l]), !1) },
                    l = o.promise({
                        elem: r,
                        props: S.extend({}, t),
                        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, e),
                        originalProperties: t,
                        originalOptions: e,
                        startTime: ne || ce(),
                        duration: e.duration,
                        tweens: [],
                        createTween: function(t, e) { t = S.Tween(r, l.opts, t, e, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(t), t },
                        stop: function(t) {
                            var e = 0,
                                i = t ? l.tweens.length : 0;
                            if (s) return this;
                            for (s = !0; e < i; e++) l.tweens[e].run(1);
                            return t ? (o.notifyWith(r, [l, 1, 0]), o.resolveWith(r, [l, t])) : o.rejectWith(r, [l, t]), this
                        }
                    }),
                    p = l.props;
                for (! function(t, e) {
                        var i, a, r, s, n;
                        for (i in t)
                            if (r = e[a = $(i)], s = t[i], Array.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== a && (t[a] = s, delete t[i]), (n = S.cssHooks[a]) && "expand" in n)
                                for (i in s = n.expand(s), delete t[a], s) i in t || (t[i] = s[i], e[i] = r);
                            else e[a] = r
                    }(p, l.opts.specialEasing); a < n; a++)
                    if (i = fe.prefilters[a].call(l, r, p, l.opts)) return g(i.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)), i;
                return S.map(p, de, l), g(l.opts.start) && l.opts.start.call(r, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(h, { elem: r, anim: l, queue: l.opts.queue })), l
            }
            S.Animation = S.extend(fe, {
                tweeners: { "*": [function(t, e) { var i = this.createTween(t, e); return nt(i.elem, t, tt.exec(e), i), i }] },
                tweener: function(t, e) { for (var i, a = 0, r = (t = g(t) ? (e = t, ["*"]) : t.match(G)).length; a < r; a++) i = t[a], fe.tweeners[i] = fe.tweeners[i] || [], fe.tweeners[i].unshift(e) },
                prefilters: [function(t, e, i) {
                    var a, r, s, n, o, h, l, p = "width" in e || "height" in e,
                        c = this,
                        m = {},
                        d = t.style,
                        f = t.nodeType && st(t),
                        u = U.get(t, "fxshow");
                    for (a in i.queue || (null == (n = S._queueHooks(t, "fx")).unqueued && (n.unqueued = 0, o = n.empty.fire, n.empty.fire = function() { n.unqueued || o() }), n.unqueued++, c.always(function() { c.always(function() { n.unqueued--, S.queue(t, "fx").length || n.empty.fire() }) })), e)
                        if (r = e[a], he.test(r)) {
                            if (delete e[a], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                                if ("show" !== r || !u || void 0 === u[a]) continue;
                                f = !0
                            }
                            m[a] = u && u[a] || S.style(t, a)
                        } if ((h = !S.isEmptyObject(e)) || !S.isEmptyObject(m))
                        for (a in p && 1 === t.nodeType && (i.overflow = [d.overflow, d.overflowX, d.overflowY], null == (l = u && u.display) && (l = U.get(t, "display")), "none" === (p = S.css(t, "display")) && (l ? p = l : (ht([t], !0), l = t.style.display || l, p = S.css(t, "display"), ht([t]))), ("inline" === p || "inline-block" === p && null != l) && "none" === S.css(t, "float") && (h || (c.done(function() { d.display = l }), null == l && (p = d.display, l = "none" === p ? "" : p)), d.display = "inline-block")), i.overflow && (d.overflow = "hidden", c.always(function() { d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2] })), h = !1, m) h || (u ? "hidden" in u && (f = u.hidden) : u = U.access(t, "fxshow", { display: l }), s && (u.hidden = !f), f && ht([t], !0), c.done(function() { for (a in f || ht([t]), U.remove(t, "fxshow"), m) S.style(t, a, m[a]) })), h = de(f ? u[a] : 0, a, c), a in u || (u[a] = h.start, f && (h.end = h.start, h.start = 0))
                }],
                prefilter: function(t, e) { e ? fe.prefilters.unshift(t) : fe.prefilters.push(t) }
            }), S.speed = function(t, e, i) { var a = t && "object" == typeof t ? S.extend({}, t) : { complete: i || !i && e || g(t) && t, duration: t, easing: i && e || e && !g(e) && e }; return S.fx.off ? a.duration = 0 : "number" != typeof a.duration && (a.duration in S.fx.speeds ? a.duration = S.fx.speeds[a.duration] : a.duration = S.fx.speeds._default), null != a.queue && !0 !== a.queue || (a.queue = "fx"), a.old = a.complete, a.complete = function() { g(a.old) && a.old.call(this), a.queue && S.dequeue(this, a.queue) }, a }, S.fn.extend({
                fadeTo: function(t, e, i, a) { return this.filter(st).css("opacity", 0).show().end().animate({ opacity: e }, t, i, a) },
                animate: function(e, t, i, a) {
                    var r = S.isEmptyObject(e),
                        s = S.speed(t, i, a),
                        a = function() {
                            var t = fe(this, S.extend({}, e), s);
                            (r || U.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
                },
                stop: function(r, t, s) {
                    function n(t) {
                        var e = t.stop;
                        delete t.stop, e(s)
                    }
                    return "string" != typeof r && (s = t, t = r, r = void 0), t && this.queue(r || "fx", []), this.each(function() {
                        var t = !0,
                            e = null != r && r + "queueHooks",
                            i = S.timers,
                            a = U.get(this);
                        if (e) a[e] && a[e].stop && n(a[e]);
                        else
                            for (e in a) a[e] && a[e].stop && le.test(e) && n(a[e]);
                        for (e = i.length; e--;) i[e].elem !== this || null != r && i[e].queue !== r || (i[e].anim.stop(s), t = !1, i.splice(e, 1));
                        !t && s || S.dequeue(this, r)
                    })
                },
                finish: function(n) {
                    return !1 !== n && (n = n || "fx"), this.each(function() {
                        var t, e = U.get(this),
                            i = e[n + "queue"],
                            a = e[n + "queueHooks"],
                            r = S.timers,
                            s = i ? i.length : 0;
                        for (e.finish = !0, S.queue(this, n, []), a && a.stop && a.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === n && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete e.finish
                    })
                }
            }), S.each(["toggle", "show", "hide"], function(t, a) {
                var r = S.fn[a];
                S.fn[a] = function(t, e, i) { return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(me(a, !0), t, e, i) }
            }), S.each({ slideDown: me("show"), slideUp: me("hide"), slideToggle: me("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, a) { S.fn[t] = function(t, e, i) { return this.animate(a, t, e, i) } }), S.timers = [], S.fx.tick = function() {
                var t, e = 0,
                    i = S.timers;
                for (ne = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || S.fx.stop(), ne = void 0
            }, S.fx.timer = function(t) { S.timers.push(t), S.fx.start() }, S.fx.interval = 13, S.fx.start = function() { oe || (oe = !0, pe()) }, S.fx.stop = function() { oe = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(a, t) {
                return a = S.fx && S.fx.speeds[a] || a, this.queue(t = t || "fx", function(t, e) {
                    var i = E.setTimeout(t, a);
                    e.stop = function() { E.clearTimeout(i) }
                })
            }, Qe = A.createElement("input"), Z = A.createElement("select").appendChild(A.createElement("option")), Qe.type = "checkbox", k.checkOn = "" !== Qe.value, k.optSelected = Z.selected, (Qe = A.createElement("input")).value = "t", Qe.type = "radio", k.radioValue = "t" === Qe.value;
            var ue, xe = S.expr.attrHandle;
            S.fn.extend({ attr: function(t, e) { return O(this, S.attr, t, e, 1 < arguments.length) }, removeAttr: function(t) { return this.each(function() { S.removeAttr(this, t) }) } }), S.extend({
                attr: function(t, e, i) { var a, r, s = t.nodeType; if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? S.prop(t, e, i) : (1 === s && S.isXMLDoc(t) || (r = S.attrHooks[e.toLowerCase()] || (S.expr.match.bool.test(e) ? ue : void 0)), void 0 !== i ? null === i ? void S.removeAttr(t, e) : r && "set" in r && void 0 !== (a = r.set(t, i, e)) ? a : (t.setAttribute(e, i + ""), i) : !(r && "get" in r && null !== (a = r.get(t, e))) && null == (a = S.find.attr(t, e)) ? void 0 : a) },
                attrHooks: { type: { set: function(t, e) { if (!k.radioValue && "radio" === e && _(t, "input")) { var i = t.value; return t.setAttribute("type", e), i && (t.value = i), e } } } },
                removeAttr: function(t, e) {
                    var i, a = 0,
                        r = e && e.match(G);
                    if (r && 1 === t.nodeType)
                        for (; i = r[a++];) t.removeAttribute(i)
                }
            }), ue = { set: function(t, e, i) { return !1 === e ? S.removeAttr(t, i) : t.setAttribute(i, i), i } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(t, e) {
                var n = xe[e] || S.find.attr;
                xe[e] = function(t, e, i) { var a, r, s = e.toLowerCase(); return i || (r = xe[s], xe[s] = a, a = null != n(t, e, i) ? s : null, xe[s] = r), a }
            });
            var ye = /^(?:input|select|textarea|button)$/i,
                ke = /^(?:a|area)$/i;

            function ge(t) { return (t.match(G) || []).join(" ") }

            function ve(t) { return t.getAttribute && t.getAttribute("class") || "" }

            function be(t) { return Array.isArray(t) ? t : "string" == typeof t && t.match(G) || [] } S.fn.extend({ prop: function(t, e) { return O(this, S.prop, t, e, 1 < arguments.length) }, removeProp: function(t) { return this.each(function() { delete this[S.propFix[t] || t] }) } }), S.extend({ prop: function(t, e, i) { var a, r, s = t.nodeType; if (3 !== s && 8 !== s && 2 !== s) return 1 === s && S.isXMLDoc(t) || (e = S.propFix[e] || e, r = S.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (a = r.set(t, i, e)) ? a : t[e] = i : r && "get" in r && null !== (a = r.get(t, e)) ? a : t[e] }, propHooks: { tabIndex: { get: function(t) { var e = S.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : ye.test(t.nodeName) || ke.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), k.optSelected || (S.propHooks.selected = {
                get: function(t) { t = t.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
                set: function(t) {
                    t = t.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { S.propFix[this.toLowerCase()] = this }), S.fn.extend({
                addClass: function(e) {
                    var t, i, a, r, s, n, o = 0;
                    if (g(e)) return this.each(function(t) { S(this).addClass(e.call(this, t, ve(this))) });
                    if ((t = be(e)).length)
                        for (; i = this[o++];)
                            if (n = ve(i), a = 1 === i.nodeType && " " + ge(n) + " ") {
                                for (s = 0; r = t[s++];) a.indexOf(" " + r + " ") < 0 && (a += r + " ");
                                n !== (n = ge(a)) && i.setAttribute("class", n)
                            } return this
                },
                removeClass: function(e) {
                    var t, i, a, r, s, n, o = 0;
                    if (g(e)) return this.each(function(t) { S(this).removeClass(e.call(this, t, ve(this))) });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = be(e)).length)
                        for (; i = this[o++];)
                            if (n = ve(i), a = 1 === i.nodeType && " " + ge(n) + " ") {
                                for (s = 0; r = t[s++];)
                                    for (; - 1 < a.indexOf(" " + r + " ");) a = a.replace(" " + r + " ", " ");
                                n !== (n = ge(a)) && i.setAttribute("class", n)
                            } return this
                },
                toggleClass: function(r, e) {
                    var s = typeof r,
                        n = "string" == s || Array.isArray(r);
                    return "boolean" == typeof e && n ? e ? this.addClass(r) : this.removeClass(r) : g(r) ? this.each(function(t) { S(this).toggleClass(r.call(this, t, ve(this), e), e) }) : this.each(function() {
                        var t, e, i, a;
                        if (n)
                            for (e = 0, i = S(this), a = be(r); t = a[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else void 0 !== r && "boolean" != s || ((t = ve(this)) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", !t && !1 !== r && U.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(t) {
                    for (var e, i = 0, a = " " + t + " "; e = this[i++];)
                        if (1 === e.nodeType && -1 < (" " + ge(ve(e)) + " ").indexOf(a)) return !0;
                    return !1
                }
            });
            var Ee = /\r/g;
            S.fn.extend({ val: function(e) { var i, t, a, r = this[0]; return arguments.length ? (a = g(e), this.each(function(t) { 1 === this.nodeType && (null == (t = a ? e.call(this, t, S(this).val()) : e) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(t) { return null == t ? "" : t + "" })), (i = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t)) })) : r ? (i = S.valHooks[r.type] || S.valHooks[r.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(r, "value")) ? t : "string" == typeof(t = r.value) ? t.replace(Ee, "") : null == t ? "" : t : void 0 } }), S.extend({
                valHooks: {
                    option: { get: function(t) { var e = S.find.attr(t, "value"); return null != e ? e : ge(S.text(t)) } },
                    select: {
                        get: function(t) {
                            for (var e, i = t.options, a = t.selectedIndex, r = "select-one" === t.type, s = r ? null : [], n = r ? a + 1 : i.length, o = a < 0 ? n : r ? a : 0; o < n; o++)
                                if (((e = i[o]).selected || o === a) && !e.disabled && (!e.parentNode.disabled || !_(e.parentNode, "optgroup"))) {
                                    if (e = S(e).val(), r) return e;
                                    s.push(e)
                                } return s
                        },
                        set: function(t, e) { for (var i, a, r = t.options, s = S.makeArray(e), n = r.length; n--;)((a = r[n]).selected = -1 < S.inArray(S.valHooks.option.get(a), s)) && (i = !0); return i || (t.selectedIndex = -1), s }
                    }
                }
            }), S.each(["radio", "checkbox"], function() { S.valHooks[this] = { set: function(t, e) { if (Array.isArray(e)) return t.checked = -1 < S.inArray(S(t).val(), e) } }, k.checkOn || (S.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) }), k.focusin = "onfocusin" in E;

            function Ae(t) { t.stopPropagation() }
            var Se = /^(?:focusinfocus|focusoutblur)$/;
            S.extend(S.event, {
                trigger: function(t, e, i, a) {
                    var r, s, n, o, h, l, p, c = [i || A],
                        m = y.call(t, "type") ? t.type : t,
                        d = y.call(t, "namespace") ? t.namespace.split(".") : [],
                        f = p = s = i = i || A;
                    if (3 !== i.nodeType && 8 !== i.nodeType && !Se.test(m + S.event.triggered) && (-1 < m.indexOf(".") && (m = (d = m.split(".")).shift(), d.sort()), o = m.indexOf(":") < 0 && "on" + m, (t = t[S.expando] ? t : new S.Event(m, "object" == typeof t && t)).isTrigger = a ? 2 : 3, t.namespace = d.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : S.makeArray(e, [t]), l = S.event.special[m] || {}, a || !l.trigger || !1 !== l.trigger.apply(i, e))) {
                        if (!a && !l.noBubble && !u(i)) {
                            for (n = l.delegateType || m, Se.test(n + m) || (f = f.parentNode); f; f = f.parentNode) c.push(f), s = f;
                            s === (i.ownerDocument || A) && c.push(s.defaultView || s.parentWindow || E)
                        }
                        for (r = 0;
                            (f = c[r++]) && !t.isPropagationStopped();) p = f, t.type = 1 < r ? n : l.bindType || m, (h = (U.get(f, "events") || Object.create(null))[t.type] && U.get(f, "handle")) && h.apply(f, e), (h = o && f[o]) && h.apply && W(f) && (t.result = h.apply(f, e), !1 === t.result && t.preventDefault());
                        return t.type = m, a || t.isDefaultPrevented() || l._default && !1 !== l._default.apply(c.pop(), e) || !W(i) || o && g(i[m]) && !u(i) && ((s = i[o]) && (i[o] = null), S.event.triggered = m, t.isPropagationStopped() && p.addEventListener(m, Ae), i[m](), t.isPropagationStopped() && p.removeEventListener(m, Ae), S.event.triggered = void 0, s && (i[o] = s)), t.result
                    }
                },
                simulate: function(t, e, i) {
                    t = S.extend(new S.Event, i, { type: t, isSimulated: !0 });
                    S.event.trigger(t, null, e)
                }
            }), S.fn.extend({ trigger: function(t, e) { return this.each(function() { S.event.trigger(t, e, this) }) }, triggerHandler: function(t, e) { var i = this[0]; if (i) return S.event.trigger(t, e, i, !0) } }), k.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(i, a) {
                function r(t) { S.event.simulate(a, t.target, S.event.fix(t)) } S.event.special[a] = {
                    setup: function() {
                        var t = this.ownerDocument || this.document || this,
                            e = U.access(t, a);
                        e || t.addEventListener(i, r, !0), U.access(t, a, (e || 0) + 1)
                    },
                    teardown: function() {
                        var t = this.ownerDocument || this.document || this,
                            e = U.access(t, a) - 1;
                        e ? U.access(t, a, e) : (t.removeEventListener(i, r, !0), U.remove(t, a))
                    }
                }
            });
            var De = E.location,
                _e = { guid: Date.now() },
                Pe = /\?/;
            S.parseXML = function(t) { var e, i; if (!t || "string" != typeof t) return null; try { e = (new E.DOMParser).parseFromString(t, "text/xml") } catch (t) {} return i = e && e.getElementsByTagName("parsererror")[0], e && !i || S.error("Invalid XML: " + (i ? S.map(i.childNodes, function(t) { return t.textContent }).join("\n") : t)), e };
            var Te = /\[\]$/,
                we = /\r?\n/g,
                Ce = /^(?:submit|button|image|reset|file)$/i,
                Be = /^(?:input|select|textarea|keygen)/i;
            S.param = function(t, e) {
                function i(t, e) { e = g(e) ? e() : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e) }
                var a, r = [];
                if (null == t) return "";
                if (Array.isArray(t) || t.jquery && !S.isPlainObject(t)) S.each(t, function() { i(this.name, this.value) });
                else
                    for (a in t) ! function i(a, t, r, s) {
                        if (Array.isArray(t)) S.each(t, function(t, e) { r || Te.test(a) ? s(a, e) : i(a + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, r, s) });
                        else if (r || "object" !== f(t)) s(a, t);
                        else
                            for (var e in t) i(a + "[" + e + "]", t[e], r, s)
                    }(a, t[a], e, i);
                return r.join("&")
            }, S.fn.extend({ serialize: function() { return S.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var t = S.prop(this, "elements"); return t ? S.makeArray(t) : this }).filter(function() { var t = this.type; return this.name && !S(this).is(":disabled") && Be.test(this.nodeName) && !Ce.test(t) && (this.checked || !lt.test(t)) }).map(function(t, e) { var i = S(this).val(); return null == i ? null : Array.isArray(i) ? S.map(i, function(t) { return { name: e.name, value: t.replace(we, "\r\n") } }) : { name: e.name, value: i.replace(we, "\r\n") } }).get() } });
            var Ve = /%20/g,
                Fe = /#.*$/,
                Ge = /([?&])_=[^&]*/,
                Me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ie = /^(?:GET|HEAD)$/,
                Re = /^\/\//,
                Le = {},
                Ne = {},
                ze = "*/".concat("*"),
                Oe = A.createElement("a");

            function je(s) {
                return function(t, e) {
                    "string" != typeof t && (e = t, t = "*");
                    var i, a = 0,
                        r = t.toLowerCase().match(G) || [];
                    if (g(e))
                        for (; i = r[a++];) "+" === i[0] ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(e)) : (s[i] = s[i] || []).push(e)
                }
            }

            function He(e, a, r, s) {
                var n = {},
                    o = e === Ne;

                function h(t) { var i; return n[t] = !0, S.each(e[t] || [], function(t, e) { e = e(a, r, s); return "string" != typeof e || o || n[e] ? o ? !(i = e) : void 0 : (a.dataTypes.unshift(e), h(e), !1) }), i }
                return h(a.dataTypes[0]) || !n["*"] && h("*")
            }

            function qe(t, e) { var i, a, r = S.ajaxSettings.flatOptions || {}; for (i in e) void 0 !== e[i] && ((r[i] ? t : a = a || {})[i] = e[i]); return a && S.extend(!0, t, a), t } Oe.href = De.href, S.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: { url: De.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(De.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ze, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } },
                ajaxSetup: function(t, e) { return e ? qe(qe(t, S.ajaxSettings), e) : qe(S.ajaxSettings, t) },
                ajaxPrefilter: je(Le),
                ajaxTransport: je(Ne),
                ajax: function(t, e) {
                    "object" == typeof t && (e = t, t = void 0);
                    var h, l, p, i, c, m, d, a, r, f = S.ajaxSetup({}, e = e || {}),
                        u = f.context || f,
                        x = f.context && (u.nodeType || u.jquery) ? S(u) : S.event,
                        y = S.Deferred(),
                        k = S.Callbacks("once memory"),
                        g = f.statusCode || {},
                        s = {},
                        n = {},
                        o = "canceled",
                        v = {
                            readyState: 0,
                            getResponseHeader: function(t) {
                                var e;
                                if (m) {
                                    if (!i)
                                        for (i = {}; e = Me.exec(p);) i[e[1].toLowerCase() + " "] = (i[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                    e = i[t.toLowerCase() + " "]
                                }
                                return null == e ? null : e.join(", ")
                            },
                            getAllResponseHeaders: function() { return m ? p : null },
                            setRequestHeader: function(t, e) { return null == m && (t = n[t.toLowerCase()] = n[t.toLowerCase()] || t, s[t] = e), this },
                            overrideMimeType: function(t) { return null == m && (f.mimeType = t), this },
                            statusCode: function(t) {
                                if (t)
                                    if (m) v.always(t[v.status]);
                                    else
                                        for (var e in t) g[e] = [g[e], t[e]];
                                return this
                            },
                            abort: function(t) { t = t || o; return h && h.abort(t), b(0, t), this }
                        };
                    if (y.promise(v), f.url = ((t || f.url || De.href) + "").replace(Re, De.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(G) || [""], null == f.crossDomain) { r = A.createElement("a"); try { r.href = f.url, r.href = r.href, f.crossDomain = Oe.protocol + "//" + Oe.host != r.protocol + "//" + r.host } catch (t) { f.crossDomain = !0 } }
                    if (f.data && f.processData && "string" != typeof f.data && (f.data = S.param(f.data, f.traditional)), He(Le, f, e, v), m) return v;
                    for (a in (d = S.event && f.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ie.test(f.type), l = f.url.replace(Fe, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ve, "+")) : (r = f.url.slice(l.length), f.data && (f.processData || "string" == typeof f.data) && (l += (Pe.test(l) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (l = l.replace(Ge, "$1"), r = (Pe.test(l) ? "&" : "?") + "_=" + _e.guid++ + r), f.url = l + r), f.ifModified && (S.lastModified[l] && v.setRequestHeader("If-Modified-Since", S.lastModified[l]), S.etag[l] && v.setRequestHeader("If-None-Match", S.etag[l])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && v.setRequestHeader("Content-Type", f.contentType), v.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : f.accepts["*"]), f.headers) v.setRequestHeader(a, f.headers[a]);
                    if (f.beforeSend && (!1 === f.beforeSend.call(u, v, f) || m)) return v.abort();
                    if (o = "abort", k.add(f.complete), v.done(f.success), v.fail(f.error), h = He(Ne, f, e, v)) {
                        if (v.readyState = 1, d && x.trigger("ajaxSend", [v, f]), m) return v;
                        f.async && 0 < f.timeout && (c = E.setTimeout(function() { v.abort("timeout") }, f.timeout));
                        try { m = !1, h.send(s, b) } catch (t) {
                            if (m) throw t;
                            b(-1, t)
                        }
                    } else b(-1, "No Transport");

                    function b(t, e, i, a) {
                        var r, s, n, o = e;
                        m || (m = !0, c && E.clearTimeout(c), h = void 0, p = a || "", v.readyState = 0 < t ? 4 : 0, a = 200 <= t && t < 300 || 304 === t, i && (n = function(t, e, i) {
                            for (var a, r, s, n, o = t.contents, h = t.dataTypes;
                                "*" === h[0];) h.shift(), void 0 === a && (a = t.mimeType || e.getResponseHeader("Content-Type"));
                            if (a)
                                for (r in o)
                                    if (o[r] && o[r].test(a)) { h.unshift(r); break } if (h[0] in i) s = h[0];
                            else { for (r in i) { if (!h[0] || t.converters[r + " " + h[0]]) { s = r; break } n = n || r } s = s || n }
                            if (s) return s !== h[0] && h.unshift(s), i[s]
                        }(f, v, i)), !a && -1 < S.inArray("script", f.dataTypes) && S.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), n = function(t, e, i, a) {
                            var r, s, n, o, h, l = {},
                                p = t.dataTypes.slice();
                            if (p[1])
                                for (n in t.converters) l[n.toLowerCase()] = t.converters[n];
                            for (s = p.shift(); s;)
                                if (t.responseFields[s] && (i[t.responseFields[s]] = e), !h && a && t.dataFilter && (e = t.dataFilter(e, t.dataType)), h = s, s = p.shift())
                                    if ("*" === s) s = h;
                                    else if ("*" !== h && h !== s) {
                                if (!(n = l[h + " " + s] || l["* " + s]))
                                    for (r in l)
                                        if (o = r.split(" "), o[1] === s && (n = l[h + " " + o[0]] || l["* " + o[0]])) {!0 === n ? n = l[r] : !0 !== l[r] && (s = o[0], p.unshift(o[1])); break } if (!0 !== n)
                                    if (n && t.throws) e = n(e);
                                    else try { e = n(e) } catch (t) { return { state: "parsererror", error: n ? t : "No conversion from " + h + " to " + s } }
                            }
                            return { state: "success", data: e }
                        }(f, n, v, a), a ? (f.ifModified && ((i = v.getResponseHeader("Last-Modified")) && (S.lastModified[l] = i), (i = v.getResponseHeader("etag")) && (S.etag[l] = i)), 204 === t || "HEAD" === f.type ? o = "nocontent" : 304 === t ? o = "notmodified" : (o = n.state, r = n.data, a = !(s = n.error))) : (s = o, !t && o || (o = "error", t < 0 && (t = 0))), v.status = t, v.statusText = (e || o) + "", a ? y.resolveWith(u, [r, o, v]) : y.rejectWith(u, [v, o, s]), v.statusCode(g), g = void 0, d && x.trigger(a ? "ajaxSuccess" : "ajaxError", [v, f, a ? r : s]), k.fireWith(u, [v, o]), d && (x.trigger("ajaxComplete", [v, f]), --S.active || S.event.trigger("ajaxStop")))
                    }
                    return v
                },
                getJSON: function(t, e, i) { return S.get(t, e, i, "json") },
                getScript: function(t, e) { return S.get(t, void 0, e, "script") }
            }), S.each(["get", "post"], function(t, r) { S[r] = function(t, e, i, a) { return g(e) && (a = a || i, i = e, e = void 0), S.ajax(S.extend({ url: t, type: r, dataType: a, data: e, success: i }, S.isPlainObject(t) && t)) } }), S.ajaxPrefilter(function(t) { for (var e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "") }), S._evalUrl = function(t, e, i) { return S.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(t) { S.globalEval(t, e, i) } }) }, S.fn.extend({
                wrapAll: function(t) { return this[0] && (g(t) && (t = t.call(this[0])), t = S(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t }).append(this)), this },
                wrapInner: function(i) {
                    return g(i) ? this.each(function(t) { S(this).wrapInner(i.call(this, t)) }) : this.each(function() {
                        var t = S(this),
                            e = t.contents();
                        e.length ? e.wrapAll(i) : t.append(i)
                    })
                },
                wrap: function(e) { var i = g(e); return this.each(function(t) { S(this).wrapAll(i ? e.call(this, t) : e) }) },
                unwrap: function(t) { return this.parent(t).not("body").each(function() { S(this).replaceWith(this.childNodes) }), this }
            }), S.expr.pseudos.hidden = function(t) { return !S.expr.pseudos.visible(t) }, S.expr.pseudos.visible = function(t) { return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) }, S.ajaxSettings.xhr = function() { try { return new E.XMLHttpRequest } catch (t) {} };
            var $e = { 0: 200, 1223: 204 },
                We = S.ajaxSettings.xhr();
            k.cors = !!We && "withCredentials" in We, k.ajax = We = !!We, S.ajaxTransport(function(r) {
                var s, n;
                if (k.cors || We && !r.crossDomain) return {
                    send: function(t, e) {
                        var i, a = r.xhr();
                        if (a.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                            for (i in r.xhrFields) a[i] = r.xhrFields[i];
                        for (i in r.mimeType && a.overrideMimeType && a.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) a.setRequestHeader(i, t[i]);
                        s = function(t) { return function() { s && (s = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? e(0, "error") : e(a.status, a.statusText) : e($e[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())) } }, a.onload = s(), n = a.onerror = a.ontimeout = s("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() { 4 === a.readyState && E.setTimeout(function() { s && n() }) }, s = s("abort");
                        try { a.send(r.hasContent && r.data || null) } catch (t) { if (s) throw t }
                    },
                    abort: function() { s && s() }
                }
            }), S.ajaxPrefilter(function(t) { t.crossDomain && (t.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(t) { return S.globalEval(t), t } } }), S.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") }), S.ajaxTransport("script", function(i) { var a, r; if (i.crossDomain || i.scriptAttrs) return { send: function(t, e) { a = S("<script>").attr(i.scriptAttrs || {}).prop({ charset: i.scriptCharset, src: i.url }).on("load error", r = function(t) { a.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type) }), A.head.appendChild(a[0]) }, abort: function() { r && r() } } });
            var Qe, Ue = [],
                Je = /(=)\?(?=&|$)|\?\?/;
            S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = Ue.pop() || S.expando + "_" + _e.guid++; return this[t] = !0, t } }), S.ajaxPrefilter("json jsonp", function(t, e, i) { var a, r, s, n = !1 !== t.jsonp && (Je.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Je.test(t.data) && "data"); if (n || "jsonp" === t.dataTypes[0]) return a = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, n ? t[n] = t[n].replace(Je, "$1" + a) : !1 !== t.jsonp && (t.url += (Pe.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function() { return s || S.error(a + " was not called"), s[0] }, t.dataTypes[0] = "json", r = E[a], E[a] = function() { s = arguments }, i.always(function() { void 0 === r ? S(E).removeProp(a) : E[a] = r, t[a] && (t.jsonpCallback = e.jsonpCallback, Ue.push(a)), s && g(r) && r(s[0]), s = r = void 0 }), "script" }), k.createHTMLDocument = ((Qe = A.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qe.childNodes.length), S.parseHTML = function(t, e, i) { return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (k.createHTMLDocument ? ((a = (e = A.implementation.createHTMLDocument("")).createElement("base")).href = A.location.href, e.head.appendChild(a)) : e = A), a = !i && [], (i = P.exec(t)) ? [e.createElement(i[1])] : (i = xt([t], e, a), a && a.length && S(a).remove(), S.merge([], i.childNodes))); var a }, S.fn.load = function(t, e, i) {
                var a, r, s, n = this,
                    o = t.indexOf(" ");
                return -1 < o && (a = ge(t.slice(o)), t = t.slice(0, o)), g(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < n.length && S.ajax({ url: t, type: r || "GET", dataType: "html", data: e }).done(function(t) { s = arguments, n.html(a ? S("<div>").append(S.parseHTML(t)).find(a) : t) }).always(i && function(t, e) { n.each(function() { i.apply(this, s || [t.responseText, e, t]) }) }), this
            }, S.expr.pseudos.animated = function(e) { return S.grep(S.timers, function(t) { return e === t.elem }).length }, S.offset = {
                setOffset: function(t, e, i) {
                    var a, r, s, n, o = S.css(t, "position"),
                        h = S(t),
                        l = {};
                    "static" === o && (t.style.position = "relative"), s = h.offset(), a = S.css(t, "top"), n = S.css(t, "left"), n = ("absolute" === o || "fixed" === o) && -1 < (a + n).indexOf("auto") ? (r = (o = h.position()).top, o.left) : (r = parseFloat(a) || 0, parseFloat(n) || 0), null != (e = g(e) ? e.call(t, i, S.extend({}, s)) : e).top && (l.top = e.top - s.top + r), null != e.left && (l.left = e.left - s.left + n), "using" in e ? e.using.call(t, l) : h.css(l)
                }
            }, S.fn.extend({
                offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { S.offset.setOffset(this, e, t) }); var t, i = this[0]; return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), i = i.ownerDocument.defaultView, { top: t.top + i.pageYOffset, left: t.left + i.pageXOffset }) : { top: 0, left: 0 } : void 0 },
                position: function() {
                    if (this[0]) {
                        var t, e, i, a = this[0],
                            r = { top: 0, left: 0 };
                        if ("fixed" === S.css(a, "position")) e = a.getBoundingClientRect();
                        else {
                            for (e = this.offset(), i = a.ownerDocument, t = a.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === S.css(t, "position");) t = t.parentNode;
                            t && t !== a && 1 === t.nodeType && ((r = S(t).offset()).top += S.css(t, "borderTopWidth", !0), r.left += S.css(t, "borderLeftWidth", !0))
                        }
                        return { top: e.top - r.top - S.css(a, "marginTop", !0), left: e.left - r.left - S.css(a, "marginLeft", !0) }
                    }
                },
                offsetParent: function() { return this.map(function() { for (var t = this.offsetParent; t && "static" === S.css(t, "position");) t = t.offsetParent; return t || it }) }
            }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, r) {
                var s = "pageYOffset" === r;
                S.fn[e] = function(t) { return O(this, function(t, e, i) { var a; return u(t) ? a = t : 9 === t.nodeType && (a = t.defaultView), void 0 === i ? a ? a[r] : t[e] : void(a ? a.scrollTo(s ? a.pageXOffset : i, s ? i : a.pageYOffset) : t[e] = i) }, e, t, arguments.length) }
            }), S.each(["top", "left"], function(t, i) { S.cssHooks[i] = Qt(k.pixelPosition, function(t, e) { if (e) return e = Wt(t, i), Ot.test(e) ? S(t).position()[i] + "px" : e }) }), S.each({ Height: "height", Width: "width" }, function(n, o) {
                S.each({ padding: "inner" + n, content: o, "": "outer" + n }, function(a, s) {
                    S.fn[s] = function(t, e) {
                        var i = arguments.length && (a || "boolean" != typeof t),
                            r = a || (!0 === t || !0 === e ? "margin" : "border");
                        return O(this, function(t, e, i) { var a; return u(t) ? 0 === s.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + n], a["scroll" + n], t.body["offset" + n], a["offset" + n], a["client" + n])) : void 0 === i ? S.css(t, e, r) : S.style(t, e, i, r) }, o, i ? t : void 0, i)
                    }
                })
            }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { S.fn[e] = function(t) { return this.on(e, t) } }), S.fn.extend({ bind: function(t, e, i) { return this.on(t, null, e, i) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, i, a) { return this.on(e, t, i, a) }, undelegate: function(t, e, i) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i) }, hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, i) { S.fn[i] = function(t, e) { return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i) } });
            var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            S.proxy = function(t, e) { var i, a; if ("string" == typeof e && (a = t[e], e = t, t = a), g(t)) return i = o.call(arguments, 2), (a = function() { return t.apply(e || this, i.concat(o.call(arguments))) }).guid = t.guid = t.guid || S.guid++, a }, S.holdReady = function(t) { t ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = _, S.isFunction = g, S.isWindow = u, S.camelCase = $, S.type = f, S.now = Date.now, S.isNumeric = function(t) { var e = S.type(t); return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t)) }, S.trim = function(t) { return null == t ? "" : (t + "").replace(Xe, "") }, void 0 === (ei = function() { return S }.apply(ti, [])) || (Ze.exports = ei);
            var Ye = E.jQuery,
                Ke = E.$;
            return S.noConflict = function(t) { return E.$ === S && (E.$ = Ke), t && E.jQuery === S && (E.jQuery = Ye), S }, void 0 === t && (E.jQuery = E.$ = S), S
        })
    }, function(t, e, i) { t.exports = !i(4) && !i(5)(function() { return 7 != Object.defineProperty(i(21)("div"), "a", { get: function() { return 7 } }).a }) }, function(t, e, i) {
        var r = i(3);
        t.exports = function(t, e) { if (!r(t)) return t; var i, a; if (e && "function" == typeof(i = t.toString) && !r(a = i.call(t))) return a; if ("function" == typeof(i = t.valueOf) && !r(a = i.call(t))) return a; if (!e && "function" == typeof(i = t.toString) && !r(a = i.call(t))) return a; throw TypeError("Can't convert object to primitive value") }
    }, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e, i) {
        var a = i(6);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) { return "String" == a(t) ? t.split("") : Object(t) }
    }, function(t, e, i) {
        var a = i(16);
        t.exports = function(t) { return Object(a(t)) }
    }, function(t, e) {
        var i = Math.ceil,
            a = Math.floor;
        t.exports = function(t) { return isNaN(t = +t) ? 0 : (0 < t ? a : i)(t) }
    }, function(t, e, i) {
        var a = i(33);
        t.exports = function(t, e) { return new(a(t))(e) }
    }, function(t, e, i) {
        var a = i(3),
            r = i(34),
            s = i(1)("species");
        t.exports = function(t) { var e; return r(t) && ("function" != typeof(e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), a(e) && null === (e = e[s]) && (e = void 0)), void 0 === e ? Array : e }
    }, function(t, e, i) {
        var a = i(6);
        t.exports = Array.isArray || function(t) { return "Array" == a(t) }
    }, function(t, e, i) {
        var a = i(0),
            i = "__core-js_shared__",
            r = a[i] || (a[i] = {});
        t.exports = function(t) { return r[t] || (r[t] = {}) }
    }, function(t, n, b) {
        "use strict";
        ! function(o) {
            b.d(n, "a", function() { return a });
            var t = b(12),
                t = b(37),
                h = b.n(t),
                e = b(38),
                i = b(39),
                r = b(40),
                s = b(41),
                l = b(42),
                p = b(43),
                c = b(44),
                m = b(20),
                d = b(45),
                f = b(46),
                u = b(47),
                x = b(48),
                y = b(49),
                k = b(50),
                g = b(51),
                v = b(52),
                a = function(a) {
                    var n = { bell: e, mail: i, money: r, qrcode: s, qrcode2: l, support: p, user: c, user1: m, user2: m, wallet: d, wallet2: f, whatsapp: u, postpaid: x, card: y, cloud: k, agent: g, job: v };
                    a.each(function(t, e) {
                        var i = a[t].closest(".lottie-w");
                        ! function(t, e) {
                            var i = { container: t, renderer: "svg", loop: !0, autoplay: !1, animationData: n[o(e).find(t).attr("animation-path")] };
                            o(t).hasClass("once") && (i.loop = !1), e.addEventListener("mouseenter", function() { "true" === o(t).attr("animate-first") && !1 === r && a.stop(), a.play() }), e.addEventListener("mouseleave", function() { "true" === o(t).attr("animate-first") && !1 === r ? (r = !0, a.play(), s()) : a.stop() });
                            var a = h.a.loadAnimation(i),
                                r = !0;

                            function s() { "true" === o(t).attr("animate-first") && o(t).hasClass("half") && !0 === r ? (a.play(), a.addEventListener("enterFrame", function(t) { a.currentFrame > a.totalFrames / 2 && a.pause() }), r = !1) : "true" === o(t).attr("animate-first") && o(t).hasClass("beforeLast2") && !0 === r ? (a.play(), a.addEventListener("enterFrame", function(t) { a.currentFrame > a.totalFrames - 2 && a.pause() }), r = !1) : "true" === o(t).attr("animate-first") && !0 === r && (a.play(), a.addEventListener("enterFrame", function(t) { a.currentFrame > a.totalFrames - 1 && a.pause() }), r = !1) } s()
                        }(a[t], i)
                    })
                }
        }.call(this, b(2))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__, uO, vO;
        "undefined" != typeof navigator && (uO = window || {}, vO = function(window) {
            "use strict";
            var svgNS = "http://www.w3.org/2000/svg",
                locationHref = "",
                initialDefaultFrame = -999999,
                subframeEnabled = !0,
                expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                cachedColors = {},
                bmRnd, bmPow = Math.pow,
                bmSqrt = Math.sqrt,
                bmFloor = Math.floor,
                bmMax = Math.max,
                bmMin = Math.min,
                BMMath = {};

            function ProjectInterface() { return {} }! function() { for (var t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], e = t.length, i = 0; i < e; i += 1) BMMath[t[i]] = Math[t[i]] }(), BMMath.random = Math.random, BMMath.abs = function(t) { if ("object" == typeof t && t.length) { for (var e = createSizedArray(t.length), i = t.length, a = 0; a < i; a += 1) e[a] = Math.abs(t[a]); return e } return Math.abs(t) };
            var defaultCurveSegments = 150,
                degToRads = Math.PI / 180,
                roundCorner = .5519;

            function roundValues(t) { bmRnd = t ? Math.round : function(t) { return t } }

            function styleDiv(t) { t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d" }

            function BMEnterFrameEvent(t, e, i, a) { this.type = t, this.currentTime = e, this.totalTime = i, this.direction = a < 0 ? -1 : 1 }

            function BMCompleteEvent(t, e) { this.type = t, this.direction = e < 0 ? -1 : 1 }

            function BMCompleteLoopEvent(t, e, i, a) { this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = a < 0 ? -1 : 1 }

            function BMSegmentStartEvent(t, e, i) { this.type = t, this.firstFrame = e, this.totalFrames = i }

            function BMDestroyEvent(t, e) { this.type = t, this.target = e }

            function BMRenderFrameErrorEvent(t, e) { this.type = "renderFrameError", this.nativeError = t, this.currentTime = e }

            function BMConfigErrorEvent(t) { this.type = "configError", this.nativeError = t }

            function BMAnimationConfigErrorEvent(t, e) { this.type = t, this.nativeError = e } roundValues(!1);
            var createElementID = (_O = 0, function() { return "__lottie_element_" + (_O += 1) }),
                _O;

            function HSVtoRGB(t, e, i) {
                var a, r, s, n = Math.floor(6 * t),
                    t = 6 * t - n,
                    o = i * (1 - e),
                    h = i * (1 - t * e),
                    l = i * (1 - (1 - t) * e);
                switch (n % 6) {
                    case 0:
                        a = i, r = l, s = o;
                        break;
                    case 1:
                        a = h, r = i, s = o;
                        break;
                    case 2:
                        a = o, r = i, s = l;
                        break;
                    case 3:
                        a = o, r = h, s = i;
                        break;
                    case 4:
                        a = l, r = o, s = i;
                        break;
                    case 5:
                        a = i, r = o, s = h
                }
                return [a, r, s]
            }

            function RGBtoHSV(t, e, i) {
                var a, r = Math.max(t, e, i),
                    s = Math.min(t, e, i),
                    n = r - s,
                    o = 0 === r ? 0 : n / r,
                    h = r / 255;
                switch (r) {
                    case s:
                        a = 0;
                        break;
                    case t:
                        a = e - i + n * (e < i ? 6 : 0), a /= 6 * n;
                        break;
                    case e:
                        a = i - t + 2 * n, a /= 6 * n;
                        break;
                    case i:
                        a = t - e + 4 * n, a /= 6 * n
                }
                return [a, o, h]
            }

            function addSaturationToRGB(t, e) { t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return t[1] += e, 1 < t[1] ? t[1] = 1 : t[1] <= 0 && (t[1] = 0), HSVtoRGB(t[0], t[1], t[2]) }

            function addBrightnessToRGB(t, e) { t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return t[2] += e, 1 < t[2] ? t[2] = 1 : t[2] < 0 && (t[2] = 0), HSVtoRGB(t[0], t[1], t[2]) }

            function addHueToRGB(t, e) { t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return t[0] += e / 360, 1 < t[0] ? --t[0] : t[0] < 0 && (t[0] += 1), HSVtoRGB(t[0], t[1], t[2]) }
            var rgbToHex = function() { for (var t, a = [], e = 0; e < 256; e += 1) t = e.toString(16), a[e] = 1 === t.length ? "0" + t : t; return function(t, e, i) { return "#" + a[t = t < 0 ? 0 : t] + a[e = e < 0 ? 0 : e] + a[i = i < 0 ? 0 : i] } }();

            function BaseEvent() {} BaseEvent.prototype = {
                triggerEvent: function(t, e) {
                    if (this._cbs[t])
                        for (var i = this._cbs[t].length, a = 0; a < i; a += 1) this._cbs[t][a](e)
                },
                addEventListener: function(t, e) {
                    return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                        function() { this.removeEventListener(t, e) }.bind(this)
                },
                removeEventListener: function(t, e) {
                    if (e) {
                        if (this._cbs[t]) {
                            for (var i = 0, a = this._cbs[t].length; i < a;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), --i, --a), i += 1;
                            this._cbs[t].length || (this._cbs[t] = null)
                        }
                    } else this._cbs[t] = null
                }
            };
            var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, e) { return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : UP(t, e) } : UP;

            function UP(t, e) {
                var i, a = 0,
                    r = [];
                switch (t) {
                    case "int16":
                    case "uint8c":
                        i = 1;
                        break;
                    default:
                        i = 1.1
                }
                for (a = 0; a < e; a += 1) r.push(i);
                return r
            }

            function createSizedArray(t) { return Array.apply(null, { length: t }) }

            function createNS(t) { return document.createElementNS(svgNS, t) }

            function createTag(t) { return document.createElement(t) }

            function DynamicPropertyContainer() {} DynamicPropertyContainer.prototype = { addDynamicProperty: function(t) {-1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0) }, iterateDynamicProperties: function() { this._mdf = !1; for (var t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0) }, initDynamicPropertyContainer: function(t) { this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1 } };
            var getBlendMode = (iQ = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }, function(t) { return iQ[t] || "" }),
                iQ, Matrix = (kQ = Math.cos, lQ = Math.sin, mQ = Math.tan, nQ = Math.round, function() { this.reset = oQ, this.rotate = pQ, this.rotateX = qQ, this.rotateY = rQ, this.rotateZ = sQ, this.skew = uQ, this.skewFromAxis = vQ, this.shear = tQ, this.scale = wQ, this.setTransform = xQ, this.translate = yQ, this.transform = zQ, this.applyToPoint = EQ, this.applyToX = FQ, this.applyToY = GQ, this.applyToZ = HQ, this.applyToPointArray = MQ, this.applyToTriplePoints = LQ, this.applyToPointStringified = NQ, this.toCSS = OQ, this.to2dCSS = QQ, this.clone = CQ, this.cloneFromProps = DQ, this.equals = BQ, this.inversePoints = KQ, this.inversePoint = JQ, this.getInverseMatrix = IQ, this._t = this.transform, this.isIdentity = AQ, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset() }),
                kQ, lQ, mQ, nQ;

            function oQ() { return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this }

            function pQ(t) {
                if (0 === t) return this;
                var e = kQ(t),
                    t = lQ(t);
                return this._t(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function qQ(t) {
                if (0 === t) return this;
                var e = kQ(t),
                    t = lQ(t);
                return this._t(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1)
            }

            function rQ(t) {
                if (0 === t) return this;
                var e = kQ(t),
                    t = lQ(t);
                return this._t(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1)
            }

            function sQ(t) {
                if (0 === t) return this;
                var e = kQ(t),
                    t = lQ(t);
                return this._t(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function tQ(t, e) { return this._t(1, e, t, 1, 0, 0) }

            function uQ(t, e) { return this.shear(mQ(t), mQ(e)) }

            function vQ(t, e) {
                var i = kQ(e),
                    e = lQ(e);
                return this._t(i, e, 0, 0, -e, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, mQ(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(i, -e, 0, 0, e, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function wQ(t, e, i) { return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1) }

            function xQ(t, e, i, a, r, s, n, o, h, l, p, c, m, d, f, u) { return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = a, this.props[4] = r, this.props[5] = s, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = c, this.props[12] = m, this.props[13] = d, this.props[14] = f, this.props[15] = u, this }

            function yQ(t, e, i) { return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this }

            function zQ(t, e, i, a, r, s, n, o, h, l, p, c, m, d, f, u) {
                var x = this.props;
                if (1 === t && 0 === e && 0 === i && 0 === a && 0 === r && 1 === s && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === c) return x[12] = x[12] * t + x[15] * m, x[13] = x[13] * s + x[15] * d, x[14] = x[14] * p + x[15] * f, x[15] *= u, this._identityCalculated = !1, this;
                var y = x[0],
                    k = x[1],
                    g = x[2],
                    v = x[3],
                    b = x[4],
                    E = x[5],
                    A = x[6],
                    S = x[7],
                    D = x[8],
                    _ = x[9],
                    P = x[10],
                    T = x[11],
                    w = x[12],
                    C = x[13],
                    B = x[14],
                    V = x[15];
                return x[0] = y * t + k * r + g * h + v * m, x[1] = y * e + k * s + g * l + v * d, x[2] = y * i + k * n + g * p + v * f, x[3] = y * a + k * o + g * c + v * u, x[4] = b * t + E * r + A * h + S * m, x[5] = b * e + E * s + A * l + S * d, x[6] = b * i + E * n + A * p + S * f, x[7] = b * a + E * o + A * c + S * u, x[8] = D * t + _ * r + P * h + T * m, x[9] = D * e + _ * s + P * l + T * d, x[10] = D * i + _ * n + P * p + T * f, x[11] = D * a + _ * o + P * c + T * u, x[12] = w * t + C * r + B * h + V * m, x[13] = w * e + C * s + B * l + V * d, x[14] = w * i + C * n + B * p + V * f, x[15] = w * a + C * o + B * c + V * u, this._identityCalculated = !1, this
            }

            function AQ() { return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity }

            function BQ(t) {
                for (var e = 0; e < 16;) {
                    if (t.props[e] !== this.props[e]) return !1;
                    e += 1
                }
                return !0
            }

            function CQ(t) { for (var e = 0; e < 16; e += 1) t.props[e] = this.props[e]; return t }

            function DQ(t) { for (var e = 0; e < 16; e += 1) this.props[e] = t[e] }

            function EQ(t, e, i) { return { x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14] } }

            function FQ(t, e, i) { return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12] }

            function GQ(t, e, i) { return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13] }

            function HQ(t, e, i) { return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14] }

            function IQ() {
                var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                    e = this.props[5] / t,
                    i = -this.props[1] / t,
                    a = -this.props[4] / t,
                    r = this.props[0] / t,
                    s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                    n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                    t = new Matrix;
                return t.props[0] = e, t.props[1] = i, t.props[4] = a, t.props[5] = r, t.props[12] = s, t.props[13] = n, t
            }

            function JQ(t) { return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0) }

            function KQ(t) { for (var e = t.length, i = [], a = 0; a < e; a += 1) i[a] = JQ(t[a]); return i }

            function LQ(t, e, i) { var a, r, s, n, o, h, l = createTypedArray("float32", 6); return this.isIdentity() ? (l[0] = t[0], l[1] = t[1], l[2] = e[0], l[3] = e[1], l[4] = i[0], l[5] = i[1]) : (a = this.props[0], r = this.props[1], s = this.props[4], n = this.props[5], o = this.props[12], h = this.props[13], l[0] = t[0] * a + t[1] * s + o, l[1] = t[0] * r + t[1] * n + h, l[2] = e[0] * a + e[1] * s + o, l[3] = e[0] * r + e[1] * n + h, l[4] = i[0] * a + i[1] * s + o, l[5] = i[0] * r + i[1] * n + h), l }

            function MQ(t, e, i) { i = this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]; return i }

            function NQ(t, e) { if (this.isIdentity()) return t + "," + e; var i = this.props; return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100 }

            function OQ() { for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += nQ(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1; return i }

            function PQ(t) { return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? nQ(1e4 * t) / 1e4 : t }

            function QQ() { var t = this.props; return "matrix(" + PQ(t[0]) + "," + PQ(t[1]) + "," + PQ(t[4]) + "," + PQ(t[5]) + "," + PQ(t[12]) + "," + PQ(t[13]) + ")" }! function(s, n) {
                var o, h = this,
                    l = 256,
                    p = 6,
                    c = "random",
                    m = n.pow(l, p),
                    d = n.pow(2, 52),
                    f = 2 * d,
                    u = l - 1;

                function x(t) {
                    var e, i = t.length,
                        n = this,
                        a = 0,
                        r = n.i = n.j = 0,
                        s = n.S = [];
                    for (i || (t = [i++]); a < l;) s[a] = a++;
                    for (a = 0; a < l; a++) s[a] = s[r = u & r + t[a % i] + (e = s[a])], s[r] = e;
                    n.g = function(t) { for (var e, i = 0, a = n.i, r = n.j, s = n.S; t--;) e = s[a = u & a + 1], i = i * l + s[u & (s[a] = s[r = u & r + e]) + (s[r] = e)]; return n.i = a, n.j = r, i }
                }

                function y(t, e) { return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e }

                function k(t, e) { for (var i, a = t + "", r = 0; r < a.length;) e[u & r] = u & (i ^= 19 * e[u & r]) + a.charCodeAt(r++); return g(e) }

                function g(t) { return String.fromCharCode.apply(0, t) } n["seed" + c] = function(t, e, i) {
                    var a = [],
                        t = k(function t(e, i) {
                            var a, r = [],
                                s = typeof e;
                            if (i && "object" == s)
                                for (a in e) try { r.push(t(e[a], i - 1)) } catch (t) {}
                            return r.length ? r : "string" == s ? e : e + "\0"
                        }((e = !0 === e ? { entropy: !0 } : e || {}).entropy ? [t, g(s)] : null === t ? function() { try { if (o) return g(o.randomBytes(l)); var e = new Uint8Array(l); return (h.crypto || h.msCrypto).getRandomValues(e), g(e) } catch (t) { e = h.navigator, e = e && e.plugins; return [+new Date, h, e, h.screen, g(s)] } }() : t, 3), a),
                        r = new x(a);
                    return (a = function() { for (var t = r.g(p), e = m, i = 0; t < d;) t = (t + i) * l, e *= l, i = r.g(1); for (; f <= t;) t /= 2, e /= 2, i >>>= 1; return (t + i) / e }).int32 = function() { return 0 | r.g(4) }, a.quick = function() { return r.g(4) / 4294967296 }, a.double = a, k(g(r.S), s), (e.pass || i || function(t, e, i, a) { return a && (a.S && y(a, r), t.state = function() { return y(r, {}) }), i ? (n[c] = t, e) : t })(a, t, "global" in e ? e.global : this == n, e.state)
                }, k(n.random(), s)
            }([], BMMath);
            var BezierFactory = (CU = {
                    getBezierEasing: function(t, e, i, a, r) {
                        r = r || ("bez_" + t + "_" + e + "_" + i + "_" + a).replace(/\./g, "p");
                        if (DU[r]) return DU[r];
                        a = new TU([t, e, i, a]);
                        return DU[r] = a
                    }
                }, DU = {}, JU = 11, KU = 1 / (JU - 1), LU = "function" == typeof Float32Array, TU.prototype = {
                    get: function(t) {
                        var e = this._p[0],
                            i = this._p[1],
                            a = this._p[2],
                            r = this._p[3];
                        return this._precomputed || this._precompute(), e === i && a === r ? t : 0 === t ? 0 : 1 === t ? 1 : PU(this._getTForX(t), i, r)
                    },
                    _precompute: function() {
                        var t = this._p[0],
                            e = this._p[1],
                            i = this._p[2],
                            a = this._p[3];
                        this._precomputed = !0, t === e && i === a || this._calcSampleValues()
                    },
                    _calcSampleValues: function() { for (var t = this._p[0], e = this._p[2], i = 0; i < JU; ++i) this._mSampleValues[i] = PU(i * KU, t, e) },
                    _getTForX: function(t) {
                        for (var e = this._p[0], i = this._p[2], a = this._mSampleValues, r = 0, s = 1, n = JU - 1; s !== n && a[s] <= t; ++s) r += KU;
                        var o = r + (t - a[--s]) / (a[s + 1] - a[s]) * KU,
                            h = QU(o, e, i);
                        return .001 <= h ? function(t, e, i, a) {
                            for (var r = 0; r < 4; ++r) {
                                var s = QU(e, i, a);
                                if (0 === s) return e;
                                e -= (PU(e, i, a) - t) / s
                            }
                            return e
                        }(t, o, e, i) : 0 === h ? o : function(t, e, i, a, r) { for (var s, n, o = 0; 0 < (s = PU(n = e + (i - e) / 2, a, r) - t) ? i = n : e = n, 1e-7 < Math.abs(s) && ++o < 10;); return n }(t, r, r + KU, e, i)
                    }
                }, CU),
                CU, DU, JU, KU, LU;

            function MU(t, e) { return 1 - 3 * e + 3 * t }

            function PU(t, e, i) { return ((MU(e, i) * t + (3 * i - 6 * e)) * t + 3 * e) * t }

            function QU(t, e, i) { return 3 * MU(e, i) * t * t + 2 * (3 * i - 6 * e) * t + 3 * e }

            function TU(t) { this._p = t, this._mSampleValues = new(LU ? Float32Array : Array)(JU), this._precomputed = !1, this.get = this.get.bind(this) }

            function extendPrototype(t, e) {
                for (var i, a = t.length, r = 0; r < a; r += 1)
                    for (var s in i = t[r].prototype) Object.prototype.hasOwnProperty.call(i, s) && (e.prototype[s] = i[s])
            }

            function getDescriptor(t, e) { return Object.getOwnPropertyDescriptor(t, e) }

            function createProxyFunction(t) {
                function e() {}
                return e.prototype = t, e
            }

            function bezFunction() {
                var _ = Math;

                function x(t, e, i, a, r, s) { e = t * a + e * r + i * s - r * a - s * t - i * e; return -.001 < e && e < .001 }
                var p = function(t, e, i, a) {
                    for (var r, s, n, o, h = defaultCurveSegments, l = 0, p = [], c = [], m = bezierLengthPool.newElement(), d = i.length, f = 0; f < h; f += 1) {
                        for (n = f / (h - 1), r = o = 0; r < d; r += 1) s = bmPow(1 - n, 3) * t[r] + 3 * bmPow(1 - n, 2) * n * i[r] + 3 * (1 - n) * bmPow(n, 2) * a[r] + bmPow(n, 3) * e[r], p[r] = s, null !== c[r] && (o += bmPow(p[r] - c[r], 2)), c[r] = p[r];
                        o && (l += o = bmSqrt(o)), m.percents[f] = n, m.lengths[f] = l
                    }
                    return m.addedLength = l, m
                };

                function y(t) { this.segmentLength = 0, this.points = new Array(t) }

                function k(t, e) { this.partialLength = t, this.point = e }
                var g, t = (g = {}, function(t, e, i, a) {
                    var r = (t[0] + "_" + t[1] + "_" + e[0] + "_" + e[1] + "_" + i[0] + "_" + i[1] + "_" + a[0] + "_" + a[1]).replace(/\./g, "p");
                    if (!g[r]) {
                        for (var s, n, o, h, l, p = defaultCurveSegments, c = 0, m = null, d = new y(p = 2 === t.length && (t[0] !== e[0] || t[1] !== e[1]) && x(t[0], t[1], e[0], e[1], t[0] + i[0], t[1] + i[1]) && x(t[0], t[1], e[0], e[1], e[0] + a[0], e[1] + a[1]) ? 2 : p), f = i.length, u = 0; u < p; u += 1) {
                            for (l = createSizedArray(f), o = u / (p - 1), s = h = 0; s < f; s += 1) n = bmPow(1 - o, 3) * t[s] + 3 * bmPow(1 - o, 2) * o * (t[s] + i[s]) + 3 * (1 - o) * bmPow(o, 2) * (e[s] + a[s]) + bmPow(o, 3) * e[s], l[s] = n, null !== m && (h += bmPow(l[s] - m[s], 2));
                            c += h = bmSqrt(h), d.points[u] = new k(h, l), m = l
                        }
                        d.segmentLength = c, g[r] = d
                    }
                    return g[r]
                });

                function P(t, e) {
                    var i = e.percents,
                        a = e.lengths,
                        r = i.length,
                        s = bmFloor((r - 1) * t),
                        n = t * e.addedLength,
                        o = 0;
                    if (s === r - 1 || 0 === s || n === a[s]) return i[s];
                    for (var h = a[s] > n ? -1 : 1, l = !0; l;)
                        if (a[s] <= n && a[s + 1] > n ? (o = (n - a[s]) / (a[s + 1] - a[s]), l = !1) : s += h, s < 0 || r - 1 <= s) {
                            if (s === r - 1) return i[s];
                            l = !1
                        } return i[s] + (i[s + 1] - i[s]) * o
                }
                var T = createTypedArray("float32", 8);
                return {
                    getSegmentsLength: function(t) { for (var e = segmentsLengthPool.newElement(), i = t.c, a = t.v, r = t.o, s = t.i, n = t._length, o = e.lengths, h = 0, l = 0; l < n - 1; l += 1) o[l] = p(a[l], a[l + 1], r[l], s[l + 1]), h += o[l].addedLength; return i && n && (o[l] = p(a[l], a[0], r[l], s[0]), h += o[l].addedLength), e.totalLength = h, e },
                    getNewSegment: function(t, e, i, a, r, s, n) { r < 0 ? r = 0 : 1 < r && (r = 1); for (var o = P(r, n), r = P(s = 1 < s ? 1 : s, n), h = t.length, l = (s = 1 - o) * s * s, p = o * s * s * 3, c = o * o * s * 3, m = o * o * o, d = s * s * (n = 1 - r), f = o * s * n + s * o * n + s * s * r, u = o * o * n + s * o * r + o * s * r, x = o * o * r, y = s * n * n, k = o * n * n + s * r * n + s * n * r, g = o * r * n + s * r * r + o * n * r, v = o * r * r, b = n * n * n, E = r * n * n + n * r * n + n * n * r, A = r * r * n + n * r * r + r * n * r, S = r * r * r, D = 0; D < h; D += 1) T[4 * D] = _.round(1e3 * (l * t[D] + p * i[D] + c * a[D] + m * e[D])) / 1e3, T[4 * D + 1] = _.round(1e3 * (d * t[D] + f * i[D] + u * a[D] + x * e[D])) / 1e3, T[4 * D + 2] = _.round(1e3 * (y * t[D] + k * i[D] + g * a[D] + v * e[D])) / 1e3, T[4 * D + 3] = _.round(1e3 * (b * t[D] + E * i[D] + A * a[D] + S * e[D])) / 1e3; return T },
                    getPointInSegment: function(t, e, i, a, r, s) { return r = P(r, s), s = 1 - r, [_.round(1e3 * (s * s * s * t[0] + (r * s * s + s * r * s + s * s * r) * i[0] + (r * r * s + s * r * r + r * s * r) * a[0] + r * r * r * e[0])) / 1e3, _.round(1e3 * (s * s * s * t[1] + (r * s * s + s * r * s + s * s * r) * i[1] + (r * r * s + s * r * r + r * s * r) * a[1] + r * r * r * e[1])) / 1e3] },
                    buildBezierData: t,
                    pointOnLine2D: x,
                    pointOnLine3D: function(t, e, i, a, r, s, n, o, h) {
                        if (0 === i && 0 === s && 0 === h) return x(t, e, a, r, n, o);
                        var l = _.sqrt(_.pow(a - t, 2) + _.pow(r - e, 2) + _.pow(s - i, 2)),
                            i = _.sqrt(_.pow(n - t, 2) + _.pow(o - e, 2) + _.pow(h - i, 2)),
                            s = _.sqrt(_.pow(n - a, 2) + _.pow(o - r, 2) + _.pow(h - s, 2));
                        return -1e-4 < (s = i < l ? s < l ? l - i - s : s - i - l : i < s ? s - i - l : i - l - s) && s < 1e-4
                    }
                }
            }! function() {
                for (var r = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
                    var e = (new Date).getTime(),
                        i = Math.max(0, 16 - (e - r)),
                        a = setTimeout(function() { t(e + i) }, i);
                    return r = e + i, a
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) { clearTimeout(t) })
            }();
            var bez = bezFunction();

            function dataFunctionManager() {
                function c(t, e, i) {
                    for (var a, r, s, n = t.length, o = 0; o < n; o += 1)
                        if ("ks" in (s = t[o]) && !s.completed) {
                            if (s.completed = !0, s.tt && (t[o - 1].td = s.tt), s.hasMask)
                                for (var h = s.masksProperties, l = h.length, p = 0; p < l; p += 1)
                                    if (h[p].pt.k.i) m(h[p].pt.k);
                                    else
                                        for (r = h[p].pt.k.length, a = 0; a < r; a += 1) h[p].pt.k[a].s && m(h[p].pt.k[a].s[0]), h[p].pt.k[a].e && m(h[p].pt.k[a].e[0]);
                            0 === s.ty ? (s.layers = function(t, e) {
                                var i = 0,
                                    a = e.length;
                                for (; i < a;) {
                                    if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);
                                    i += 1
                                }
                                return null
                            }(s.refId, e), c(s.layers, e, i)) : 4 === s.ty ? function t(e) {
                                var i;
                                var a = e.length;
                                var r;
                                var s;
                                for (i = a - 1; 0 <= i; --i)
                                    if ("sh" === e[i].ty)
                                        if (e[i].ks.k.i) m(e[i].ks.k);
                                        else
                                            for (s = e[i].ks.k.length, r = 0; r < s; r += 1) e[i].ks.k[r].s && m(e[i].ks.k[r].s[0]), e[i].ks.k[r].e && m(e[i].ks.k[r].e[0]);
                                else "gr" === e[i].ty && t(e[i].it)
                            }(s.shapes) : 5 === s.ty && (0 !== (s = s).t.a.length || "m" in s.t.p || (s.singleShape = !0))
                        }
                }

                function m(t) { for (var e = t.i.length, i = 0; i < e; i += 1) t.i[i][0] += t.v[i][0], t.i[i][1] += t.v[i][1], t.o[i][0] += t.v[i][0], t.o[i][1] += t.v[i][1] }

                function o(t, e) { e = e ? e.split(".") : [100, 100, 100]; return t[0] > e[0] || !(e[0] > t[0]) && (t[1] > e[1] || !(e[1] > t[1]) && (t[2] > e[2] || (e[2], void t[2]))) }
                var a, i = (a = [4, 4, 14], function(t) {
                    if (o(a, t.v) && (r(t.layers), t.assets))
                        for (var e = t.assets.length, i = 0; i < e; i += 1) t.assets[i].layers && r(t.assets[i].layers)
                });

                function r(t) { for (var e, i, a = t.length, r = 0; r < a; r += 1) 5 === t[r].ty && (e = t[r], i = void 0, i = e.t.d, e.t.d = { k: [{ s: i, t: 0 }] }) }
                var h, s, n = (h = [4, 7, 99], function(t) {
                        if (t.chars && !o(h, t.v))
                            for (var e, i, a, r, s = t.chars.length, n = 0; n < s; n += 1)
                                if (t.chars[n].data && t.chars[n].data.shapes)
                                    for (i = (r = t.chars[n].data.shapes[0].it).length, e = 0; e < i; e += 1)(a = r[e].ks.k).__converted || (m(r[e].ks.k), a.__converted = !0)
                    }),
                    l = (s = [4, 1, 9], function(t) {
                        if (o(s, t.v) && (p(t.layers), t.assets))
                            for (var e = t.assets.length, i = 0; i < e; i += 1) t.assets[i].layers && p(t.assets[i].layers)
                    });

                function p(t) {
                    for (var e = t.length, i = 0; i < e; i += 1) 4 === t[i].ty && ! function t(e) {
                        for (var i, a, r = e.length, s = 0; s < r; s += 1)
                            if ("gr" === e[s].ty) t(e[s].it);
                            else if ("fl" === e[s].ty || "st" === e[s].ty)
                            if (e[s].c.k && e[s].c.k[0].i)
                                for (a = e[s].c.k.length, i = 0; i < a; i += 1) e[s].c.k[i].s && (e[s].c.k[i].s[0] /= 255, e[s].c.k[i].s[1] /= 255, e[s].c.k[i].s[2] /= 255, e[s].c.k[i].s[3] /= 255), e[s].c.k[i].e && (e[s].c.k[i].e[0] /= 255, e[s].c.k[i].e[1] /= 255, e[s].c.k[i].e[2] /= 255, e[s].c.k[i].e[3] /= 255);
                            else e[s].c.k[0] /= 255, e[s].c.k[1] /= 255, e[s].c.k[2] /= 255, e[s].c.k[3] /= 255
                    }(t[i].shapes)
                }
                var d, f = (d = [4, 4, 18], function(t) {
                    if (o(d, t.v) && (u(t.layers), t.assets))
                        for (var e = t.assets.length, i = 0; i < e; i += 1) t.assets[i].layers && u(t.assets[i].layers)
                });

                function u(t) {
                    for (var e, i, a, r = t.length, s = 0; s < r; s += 1) {
                        if ((e = t[s]).hasMask)
                            for (var n = e.masksProperties, o = n.length, h = 0; h < o; h += 1)
                                if (n[h].pt.k.i) n[h].pt.k.c = n[h].cl;
                                else
                                    for (a = n[h].pt.k.length, i = 0; i < a; i += 1) n[h].pt.k[i].s && (n[h].pt.k[i].s[0].c = n[h].cl), n[h].pt.k[i].e && (n[h].pt.k[i].e[0].c = n[h].cl);
                        4 === e.ty && ! function t(e) {
                            for (var i, a, r = e.length - 1; 0 <= r; --r)
                                if ("sh" === e[r].ty)
                                    if (e[r].ks.k.i) e[r].ks.k.c = e[r].closed;
                                    else
                                        for (a = e[r].ks.k.length, i = 0; i < a; i += 1) e[r].ks.k[i].s && (e[r].ks.k[i].s[0].c = e[r].closed), e[r].ks.k[i].e && (e[r].ks.k[i].e[0].c = e[r].closed);
                            else "gr" === e[r].ty && t(e[r].it)
                        }(e.shapes)
                    }
                }
                var t = { completeData: function(t, e) { t.__complete || (l(t), i(t), n(t), f(t), c(t.layers, t.assets, e), t.__complete = !0) } };
                return t.checkColors = l, t.checkChars = n, t.checkShapes = f, t.completeLayers = c, t
            }
            var dataManager = dataFunctionManager();

            function getFontProperties(t) {
                for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", a = "normal", r = e.length, s = 0; s < r; s += 1) switch (e[s].toLowerCase()) {
                    case "italic":
                        a = "italic";
                        break;
                    case "bold":
                        i = "700";
                        break;
                    case "black":
                        i = "900";
                        break;
                    case "medium":
                        i = "500";
                        break;
                    case "regular":
                    case "normal":
                        i = "400";
                        break;
                    case "light":
                    case "thin":
                        i = "200"
                }
                return { style: a, weight: t.fWeight || i }
            }
            var FontManager = (y$ = { w: 0, size: 0, shapes: [] }, z$ = (z$ = []).concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]), L$.getCombinedCharacterCodes = function() { return z$ }, L$.prototype = {
                    addChars: function(t) {
                        if (t) {
                            this.chars || (this.chars = []);
                            for (var e, i, a = t.length, r = this.chars.length, s = 0; s < a; s += 1) {
                                for (e = 0, i = !1; e < r;) this.chars[e].style === t[s].style && this.chars[e].fFamily === t[s].fFamily && this.chars[e].ch === t[s].ch && (i = !0), e += 1;
                                i || (this.chars.push(t[s]), r += 1)
                            }
                        }
                    },
                    addFonts: function(t, e) {
                        if (t) {
                            if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                            for (var i = t.list, a = i.length, r = a, s = 0; s < a; s += 1) {
                                var n, o, h, l, p = !0;
                                if (i[s].loaded = !1, i[s].monoCase = B$(i[s].fFamily, "monospace"), i[s].sansCase = B$(i[s].fFamily, "sans-serif"), i[s].fPath) {
                                    if ("p" === i[s].fOrigin || 3 === i[s].origin)(p = 0 < (h = document.querySelectorAll('style[f-forigin="p"][f-family="' + i[s].fFamily + '"], style[f-origin="3"][f-family="' + i[s].fFamily + '"]')).length ? !1 : p) && ((o = createTag("style")).setAttribute("f-forigin", i[s].fOrigin), o.setAttribute("f-origin", i[s].origin), o.setAttribute("f-family", i[s].fFamily), o.type = "text/css", o.innerText = "@font-face {font-family: " + i[s].fFamily + "; font-style: normal; src: url('" + i[s].fPath + "');}", e.appendChild(o));
                                    else if ("g" === i[s].fOrigin || 1 === i[s].origin) {
                                        for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), n = 0; n < h.length; n += 1) - 1 !== h[n].href.indexOf(i[s].fPath) && (p = !1);
                                        p && ((l = createTag("link")).setAttribute("f-forigin", i[s].fOrigin), l.setAttribute("f-origin", i[s].origin), l.type = "text/css", l.rel = "stylesheet", l.href = i[s].fPath, document.body.appendChild(l))
                                    } else if ("t" === i[s].fOrigin || 2 === i[s].origin) {
                                        for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), n = 0; n < h.length; n += 1) i[s].fPath === h[n].src && (p = !1);
                                        p && ((l = createTag("link")).setAttribute("f-forigin", i[s].fOrigin), l.setAttribute("f-origin", i[s].origin), l.setAttribute("rel", "stylesheet"), l.setAttribute("href", i[s].fPath), e.appendChild(l))
                                    }
                                } else i[s].loaded = !0, --r;
                                i[s].helper = function(t, e) {
                                    var i = createNS("text");
                                    i.style.fontSize = "100px";
                                    var a = getFontProperties(e);
                                    return i.setAttribute("font-family", e.fFamily), i.setAttribute("font-style", a.style), i.setAttribute("font-weight", a.weight), i.textContent = "1", e.fClass ? (i.style.fontFamily = "inherit", i.setAttribute("class", e.fClass)) : i.style.fontFamily = e.fFamily, t.appendChild(i), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, i
                                }(e, i[s]), i[s].cache = {}, this.fonts.push(i[s])
                            }
                            0 === r ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else this.isLoaded = !0
                    },
                    getCharData: function(t, e, i) {
                        for (var a = 0, r = this.chars.length; a < r;) {
                            if (this.chars[a].ch === t && this.chars[a].style === e && this.chars[a].fFamily === i) return this.chars[a];
                            a += 1
                        }
                        return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", t, e, i)), y$
                    },
                    getFontByName: function(t) {
                        for (var e = 0, i = this.fonts.length; e < i;) {
                            if (this.fonts[e].fName === t) return this.fonts[e];
                            e += 1
                        }
                        return this.fonts[0]
                    },
                    measureText: function(t, e, i) {
                        var a, r, s = this.getFontByName(e),
                            n = t.charCodeAt(0);
                        return s.cache[n + 1] || (a = s.helper, " " === t ? (a.textContent = "|" + t + "|", r = a.getComputedTextLength(), a.textContent = "||", e = a.getComputedTextLength(), s.cache[n + 1] = (r - e) / 100) : (a.textContent = t, s.cache[n + 1] = a.getComputedTextLength() / 100)), s.cache[n + 1] * i
                    },
                    checkLoadedFonts: function() {
                        for (var t, e, i = this.fonts.length, a = i, r = 0; r < i; r += 1) this.fonts[r].loaded ? --a : "n" === this.fonts[r].fOrigin || 0 === this.fonts[r].origin ? this.fonts[r].loaded = !0 : (t = this.fonts[r].monoCase.node, e = this.fonts[r].monoCase.w, t.offsetWidth !== e ? (--a, this.fonts[r].loaded = !0) : (t = this.fonts[r].sansCase.node, e = this.fonts[r].sansCase.w, t.offsetWidth !== e && (--a, this.fonts[r].loaded = !0)), this.fonts[r].loaded && (this.fonts[r].sansCase.parent.parentNode.removeChild(this.fonts[r].sansCase.parent), this.fonts[r].monoCase.parent.parentNode.removeChild(this.fonts[r].monoCase.parent)));
                        0 !== a && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    },
                    setIsLoaded: function() { this.isLoaded = !0 }
                }, L$),
                y$, z$;

            function B$(t, e) {
                var i = createTag("span");
                i.style.fontFamily = e;
                var a = createTag("span");
                a.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(a), document.body.appendChild(i);
                var r = a.offsetWidth;
                return a.style.fontFamily = function(t) { for (var e = t.split(","), i = e.length, a = [], r = 0; r < i; r += 1) "sans-serif" !== e[r] && "monospace" !== e[r] && a.push(e[r]); return a.join(",") }(t) + ", " + e, { node: a, w: r, parent: i }
            }

            function L$() { this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this) }
            var PropertyFactory = (N_ = initialDefaultFrame, O_ = Math.abs, {
                    getProp: function(t, e, i, a, r) {
                        var s;
                        if (e.k.length)
                            if ("number" == typeof e.k[0]) s = new Y_(t, e, a, r);
                            else switch (i) {
                                case 0:
                                    s = new Z_(t, e, a, r);
                                    break;
                                case 1:
                                    s = new $_(t, e, a, r)
                            } else s = new X_(t, e, a, r);
                        return s.effectsSequence.length && r.addDynamicProperty(s), s
                    }
                }),
                N_, O_;

            function P_(t, e) {
                var i, a = this.offsetTime;
                "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                for (var r, s, n, o = e.lastIndex, h = o, l = this.keyframes.length - 1, p = !0; p;) { if (r = this.keyframes[h], s = this.keyframes[h + 1], h === l - 1 && t >= s.t - a) { r.h && (r = s), o = 0; break } if (s.t - a > t) { o = h; break } h < l - 1 ? h += 1 : (o = 0, p = !1) }
                var c, m, d, f, u, x = s.t - a,
                    y = r.t - a;
                if (r.to) {
                    r.bezierData || (r.bezierData = bez.buildBezierData(r.s, s.s || r.e, r.to, r.ti));
                    var k = r.bezierData;
                    if (x <= t || t < y)
                        for (var g = x <= t ? k.points.length - 1 : 0, v = k.points[g].point.length, b = 0; b < v; b += 1) i[b] = k.points[g].point[b];
                    else { r.__fnct ? n = r.__fnct : (n = BezierFactory.getBezierEasing(r.o.x, r.o.y, r.i.x, r.i.y, r.n).get, r.__fnct = n); for (var E, A = n((t - y) / (x - y)), S = k.segmentLength * A, D = e.lastFrame < t && e._lastKeyframeIndex === h ? e._lastAddedLength : 0, _ = e.lastFrame < t && e._lastKeyframeIndex === h ? e._lastPoint : 0, p = !0, P = k.points.length; p;) { if (D += k.points[_].partialLength, 0 == S || 0 === A || _ === k.points.length - 1) { for (v = k.points[_].point.length, b = 0; b < v; b += 1) i[b] = k.points[_].point[b]; break } if (D <= S && S < D + k.points[_ + 1].partialLength) { for (E = (S - D) / k.points[_ + 1].partialLength, v = k.points[_].point.length, b = 0; b < v; b += 1) i[b] = k.points[_].point[b] + (k.points[_ + 1].point[b] - k.points[_].point[b]) * E; break } _ < P - 1 ? _ += 1 : p = !1 } e._lastPoint = _, e._lastAddedLength = D - k.points[_].partialLength, e._lastKeyframeIndex = h }
                } else {
                    var T, w, C, B, V, F, G, l = r.s.length,
                        M = s.s || r.e;
                    if (this.sh && 1 !== r.h) x <= t ? (i[0] = M[0], i[1] = M[1], i[2] = M[2]) : t <= y ? (i[0] = r.s[0], i[1] = r.s[1], i[2] = r.s[2]) : (F = S_(r.s), G = S_(M), c = i, m = function(t, e, i) {
                        var a, r = [],
                            s = t[0],
                            n = t[1],
                            o = t[2],
                            h = t[3],
                            l = e[0],
                            p = e[1],
                            c = e[2],
                            m = e[3];
                        (t = s * l + n * p + o * c + h * m) < 0 && (t = -t, l = -l, p = -p, c = -c, m = -m);
                        i = 1e-6 < 1 - t ? (e = Math.acos(t), t = Math.sin(e), a = Math.sin((1 - i) * e) / t, Math.sin(i * e) / t) : (a = 1 - i, i);
                        return r[0] = a * s + i * l, r[1] = a * n + i * p, r[2] = a * o + i * c, r[3] = a * h + i * m, r
                    }(F, G, (t - y) / (x - y)), d = m[0], f = m[1], u = m[2], F = m[3], G = Math.atan2(2 * f * F - 2 * d * u, 1 - 2 * f * f - 2 * u * u), m = Math.asin(2 * d * f + 2 * u * F), u = Math.atan2(2 * d * F - 2 * f * u, 1 - 2 * d * d - 2 * u * u), c[0] = G / degToRads, c[1] = m / degToRads, c[2] = u / degToRads);
                    else
                        for (h = 0; h < l; h += 1) 1 !== r.h && (A = x <= t ? 1 : t < y ? 0 : (r.o.x.constructor === Array ? (r.__fnct || (r.__fnct = []), r.__fnct[h] ? n = r.__fnct[h] : (T = void 0 === r.o.x[h] ? r.o.x[0] : r.o.x[h], w = void 0 === r.o.y[h] ? r.o.y[0] : r.o.y[h], C = void 0 === r.i.x[h] ? r.i.x[0] : r.i.x[h], B = void 0 === r.i.y[h] ? r.i.y[0] : r.i.y[h], n = BezierFactory.getBezierEasing(T, w, C, B).get, r.__fnct[h] = n)) : r.__fnct ? n = r.__fnct : (T = r.o.x, w = r.o.y, C = r.i.x, B = r.i.y, n = BezierFactory.getBezierEasing(T, w, C, B).get, r.__fnct = n), n((t - y) / (x - y)))), M = s.s || r.e, V = 1 === r.h ? r.s[h] : r.s[h] + (M[h] - r.s[h]) * A, "multidimensional" === this.propType ? i[h] = V : i = V
                }
                return e.lastIndex = o, i
            }

            function S_(t) {
                var e = t[0] * degToRads,
                    i = t[1] * degToRads,
                    a = t[2] * degToRads,
                    r = Math.cos(e / 2),
                    s = Math.cos(i / 2),
                    t = Math.cos(a / 2),
                    e = Math.sin(e / 2),
                    i = Math.sin(i / 2),
                    a = Math.sin(a / 2);
                return [e * i * t + r * s * a, e * s * t + r * i * a, r * i * t - e * s * a, r * s * t - e * i * a]
            }

            function T_() {
                var t = this.comp.renderedFrame - this.offsetTime,
                    e = this.keyframes[0].t - this.offsetTime,
                    i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                return t === this._caching.lastFrame || this._caching.lastFrame !== N_ && (this._caching.lastFrame >= i && i <= t || this._caching.lastFrame < e && t < e) || (this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0), e = this.interpolateValue(t, this._caching), this.pv = e), this._caching.lastFrame = t, this.pv
            }

            function U_(t) {
                var e;
                if ("unidimensional" === this.propType) e = t * this.mult, 1e-5 < O_(this.v - e) && (this.v = e, this._mdf = !0);
                else
                    for (var i = 0, a = this.v.length; i < a;) e = t[i] * this.mult, 1e-5 < O_(this.v[i] - e) && (this.v[i] = e, this._mdf = !0), i += 1
            }

            function V_() {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                    if (this.lock) this.setVValue(this.pv);
                    else {
                        this.lock = !0, this._mdf = this._isFirstFrame;
                        for (var t = this.effectsSequence.length, e = this.kf ? this.pv : this.data.k, i = 0; i < t; i += 1) e = this.effectsSequence[i](e);
                        this.setVValue(e), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
            }

            function W_(t) { this.effectsSequence.push(t), this.container.addDynamicProperty(this) }

            function X_(t, e, i, a) { this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = a, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = V_, this.setVValue = U_, this.addEffect = W_ }

            function Y_(t, e, i, a) {
                var r;
                this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = a, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                var s = e.k.length;
                for (this.v = createTypedArray("float32", s), this.pv = createTypedArray("float32", s), this.vel = createTypedArray("float32", s), r = 0; r < s; r += 1) this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r];
                this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = V_, this.setVValue = U_, this.addEffect = W_
            }

            function Z_(t, e, i, a) { this.propType = "unidimensional", this.keyframes = e.k, this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: N_, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = a, this.comp = t.comp, this.v = N_, this.pv = N_, this._isFirstFrame = !0, this.getValue = V_, this.setVValue = U_, this.interpolateValue = P_, this.effectsSequence = [T_.bind(this)], this.addEffect = W_ }

            function $_(t, e, i, a) {
                this.propType = "multidimensional";
                for (var r, s, n, o, h = e.k.length, l = 0; l < h - 1; l += 1) e.k[l].to && e.k[l].s && e.k[l + 1] && e.k[l + 1].s && (r = e.k[l].s, s = e.k[l + 1].s, n = e.k[l].to, o = e.k[l].ti, (2 === r.length && (r[0] !== s[0] || r[1] !== s[1]) && bez.pointOnLine2D(r[0], r[1], s[0], s[1], r[0] + n[0], r[1] + n[1]) && bez.pointOnLine2D(r[0], r[1], s[0], s[1], s[0] + o[0], s[1] + o[1]) || 3 === r.length && (r[0] !== s[0] || r[1] !== s[1] || r[2] !== s[2]) && bez.pointOnLine3D(r[0], r[1], r[2], s[0], s[1], s[2], r[0] + n[0], r[1] + n[1], r[2] + n[2]) && bez.pointOnLine3D(r[0], r[1], r[2], s[0], s[1], s[2], s[0] + o[0], s[1] + o[1], s[2] + o[2])) && (e.k[l].to = null, e.k[l].ti = null), r[0] === s[0] && r[1] === s[1] && 0 === n[0] && 0 === n[1] && 0 === o[0] && 0 === o[1] && (2 === r.length || r[2] === s[2] && 0 === n[2] && 0 === o[2]) && (e.k[l].to = null, e.k[l].ti = null));
                this.effectsSequence = [T_.bind(this)], this.data = e, this.keyframes = e.k, this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = a, this.comp = t.comp, this.getValue = V_, this.setVValue = U_, this.interpolateValue = P_, this.frameId = -1;
                var p = e.k[0].s.length;
                for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), l = 0; l < p; l += 1) this.v[l] = N_, this.pv[l] = N_;
                this._caching = { lastFrame: N_, lastIndex: 0, value: createTypedArray("float32", p) }, this.addEffect = W_
            }
            var TransformPropertyFactory = (i2 = [0, 0], o2.prototype = {
                    applyToMatrix: function(t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function(t) {
                        var e, i, a, r;
                        this.elem.globalData.frameId !== this.frameId && (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), (this._mdf || t) && (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented && (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime ? i = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (e = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime)) : this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime ? (e = [], i = [], a = this.px, t = this.py, a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (e[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), e[1] = t.getValueAtTime((t.keyframes[0].t + .01) / r, 0), i[0] = a.getValueAtTime(a.keyframes[0].t / r, 0), i[1] = t.getValueAtTime(t.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (e[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), e[1] = t.getValueAtTime(t.keyframes[t.keyframes.length - 1].t / r, 0), i[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0), i[1] = t.getValueAtTime((t.keyframes[t.keyframes.length - 1].t - .01) / r, 0)) : (e = [a.pv, t.pv], i[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime), i[1] = t.getValueAtTime((t._caching.lastFrame + t.offsetTime - .01) / r, t.offsetTime))) : e = i = i2, this.v.rotate(-Math.atan2(e[1] - i[1], e[0] - i[0]))), this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])), this.frameId = this.elem.globalData.frameId)
                    },
                    precalculateMatrix: function() {
                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    },
                    autoOrient: function() {}
                }, extendPrototype([DynamicPropertyContainer], o2), o2.prototype.addDynamicProperty = function(t) { this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0 }, o2.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function(t, e, i) { return new o2(t, e, i) } }),
                i2;

            function o2(t, e, i) {
                if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || { k: [0, 0, 0] }, 1, 0, this), e.rx) {
                    if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti)
                        for (var a = e.or.k.length, r = 0; r < a; r += 1) e.or.k[r].to = null, e.or.k[r].ti = null;
                    this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                } else this.r = PropertyFactory.getProp(t, e.r || { k: 0 }, 0, degToRads, this);
                e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || { k: [100, 100, 100] }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = { _mdf: !1, v: 1 }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
            }

            function ShapePath() { this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength) } ShapePath.prototype.setPathData = function(t, e) { this.c = t, this.setLength(e); for (var i = 0; i < e;) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1 }, ShapePath.prototype.setLength = function(t) {
                for (; this._maxLength < t;) this.doubleArrayLength();
                this._length = t
            }, ShapePath.prototype.doubleArrayLength = function() { this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2 }, ShapePath.prototype.setXYAt = function(t, e, i, a, r) {
                var s;
                switch (this._length = Math.max(this._length, a + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                    case "v":
                        s = this.v;
                        break;
                    case "i":
                        s = this.i;
                        break;
                    case "o":
                        s = this.o;
                        break;
                    default:
                        s = []
                }
                s[a] && (!s[a] || r) || (s[a] = pointPool.newElement()), s[a][0] = t, s[a][1] = e
            }, ShapePath.prototype.setTripleAt = function(t, e, i, a, r, s, n, o) { this.setXYAt(t, e, "v", n, o), this.setXYAt(i, a, "o", n, o), this.setXYAt(r, s, "i", n, o) }, ShapePath.prototype.reverse = function() {
                var t = new ShapePath;
                t.setPathData(this.c, this._length);
                var e = this.v,
                    i = this.o,
                    a = this.i,
                    r = 0;
                this.c && (t.setTripleAt(e[0][0], e[0][1], a[0][0], a[0][1], i[0][0], i[0][1], 0, !1), r = 1);
                for (var s = this._length - 1, n = this._length, o = r; o < n; o += 1) t.setTripleAt(e[s][0], e[s][1], a[s][0], a[s][1], i[s][0], i[s][1], o, !1), --s;
                return t
            };
            var ShapePropertyFactory = function() {
                    var r = -999999;

                    function t(t, e, i) {
                        var a, r, s, n, o, h, l, p = i.lastIndex,
                            c = this.keyframes;
                        if (t < c[0].t - this.offsetTime) a = c[0].s[0], r = !0, p = 0;
                        else if (t >= c[c.length - 1].t - this.offsetTime) a = (c[c.length - 1].s ? c[c.length - 1].s : c[c.length - 2].e)[0], r = !0;
                        else {
                            for (var m, d, f, u, x, y = p, k = c.length - 1, g = !0; g && (m = c[y], !((d = c[y + 1]).t - this.offsetTime > t));) y < k - 1 ? y += 1 : g = !1;
                            p = y, (r = 1 === m.h) || (u = t >= d.t - this.offsetTime ? 1 : t < m.t - this.offsetTime ? 0 : (m.__fnct ? f = m.__fnct : (f = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get, m.__fnct = f), f((t - (m.t - this.offsetTime)) / (d.t - this.offsetTime - (m.t - this.offsetTime)))), x = (d.s || m.e)[0]), a = m.s[0]
                        }
                        for (o = e._length, h = a.i[0].length, i.lastIndex = p, s = 0; s < o; s += 1)
                            for (n = 0; n < h; n += 1) l = r ? a.i[s][n] : a.i[s][n] + (x.i[s][n] - a.i[s][n]) * u, e.i[s][n] = l, l = r ? a.o[s][n] : a.o[s][n] + (x.o[s][n] - a.o[s][n]) * u, e.o[s][n] = l, l = r ? a.v[s][n] : a.v[s][n] + (x.v[s][n] - a.v[s][n]) * u, e.v[s][n] = l
                    }

                    function a() { this.paths = this.localShapeCollection }

                    function e(t) {
                        ! function(t, e) {
                            if (t._length === e._length && t.c === e.c) {
                                for (var i = t._length, a = 0; a < i; a += 1)
                                    if (t.v[a][0] !== e.v[a][0] || t.v[a][1] !== e.v[a][1] || t.o[a][0] !== e.o[a][0] || t.o[a][1] !== e.o[a][1] || t.i[a][0] !== e.i[a][0] || t.i[a][1] !== e.i[a][1]) return;
                                return 1
                            }
                        }(this.v, t) && (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                    }

                    function i() {
                        if (this.elem.globalData.frameId !== this.frameId)
                            if (this.effectsSequence.length)
                                if (this.lock) this.setVValue(this.pv);
                                else {
                                    this.lock = !0, this._mdf = !1;
                                    for (var t = this.kf ? this.pv : (this.data.ks || this.data.pt).k, e = this.effectsSequence.length, i = 0; i < e; i += 1) t = this.effectsSequence[i](t);
                                    this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                        else this._mdf = !1
                    }

                    function s(t, e, i) {
                        this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                        e = (3 === i ? e.pt : e.ks).k;
                        this.v = shapePool.clone(e), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = a, this.effectsSequence = []
                    }

                    function n(t) { this.effectsSequence.push(t), this.container.addDynamicProperty(this) }

                    function o(t, e, i) {
                        this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = (3 === i ? e.pt : e.ks).k, this.k = !0, this.kf = !0;
                        e = this.keyframes[0].s[0].i.length;
                        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, e), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = r, this.reset = a, this._caching = { lastFrame: r, lastIndex: 0 }, this.effectsSequence = [function() {
                            var t = this.comp.renderedFrame - this.offsetTime,
                                e = this.keyframes[0].t - this.offsetTime,
                                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                a = this._caching.lastFrame;
                            return a !== r && (a < e && t < e || i < a && i < t) || (this._caching.lastIndex = a < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
                        }.bind(this)]
                    }
                    s.prototype.interpolateShape = t, s.prototype.getValue = i, s.prototype.setVValue = e, s.prototype.addEffect = n, o.prototype.getValue = i, o.prototype.interpolateShape = t, o.prototype.setVValue = e, o.prototype.addEffect = n;
                    var h, l = (h = roundCorner, p.prototype = {
                        reset: a,
                        getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath()) },
                        convertEllToPath: function() {
                            var t = this.p.v[0],
                                e = this.p.v[1],
                                i = this.s.v[0] / 2,
                                a = this.s.v[1] / 2,
                                r = 3 !== this.d,
                                s = this.v;
                            s.v[0][0] = t, s.v[0][1] = e - a, s.v[1][0] = r ? t + i : t - i, s.v[1][1] = e, s.v[2][0] = t, s.v[2][1] = e + a, s.v[3][0] = r ? t - i : t + i, s.v[3][1] = e, s.i[0][0] = r ? t - i * h : t + i * h, s.i[0][1] = e - a, s.i[1][0] = r ? t + i : t - i, s.i[1][1] = e - a * h, s.i[2][0] = r ? t + i * h : t - i * h, s.i[2][1] = e + a, s.i[3][0] = r ? t - i : t + i, s.i[3][1] = e + a * h, s.o[0][0] = r ? t + i * h : t - i * h, s.o[0][1] = e - a, s.o[1][0] = r ? t + i : t - i, s.o[1][1] = e + a * h, s.o[2][0] = r ? t - i * h : t + i * h, s.o[2][1] = e + a, s.o[3][0] = r ? t - i : t + i, s.o[3][1] = e - a * h
                        }
                    }, extendPrototype([DynamicPropertyContainer], p), p);

                    function p(t, e) { this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath()) }
                    var c = (m.prototype = {
                        reset: a,
                        getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath()) },
                        convertStarToPath: function() {
                            var t = 2 * Math.floor(this.pt.v),
                                e = 2 * Math.PI / t,
                                i = !0,
                                a = this.or.v,
                                r = this.ir.v,
                                s = this.os.v,
                                n = this.is.v,
                                o = 2 * Math.PI * a / (2 * t),
                                h = 2 * Math.PI * r / (2 * t),
                                l = -Math.PI / 2;
                            l += this.r.v;
                            for (var p = 3 === this.data.d ? -1 : 1, c = this.v._length = 0; c < t; c += 1) {
                                var m = i ? s : n,
                                    d = i ? o : h,
                                    f = (y = i ? a : r) * Math.cos(l),
                                    u = y * Math.sin(l),
                                    x = 0 === f && 0 === u ? 0 : u / Math.sqrt(f * f + u * u),
                                    y = 0 === f && 0 === u ? 0 : -f / Math.sqrt(f * f + u * u);
                                f += +this.p.v[0], u += +this.p.v[1], this.v.setTripleAt(f, u, f - x * d * m * p, u - y * d * m * p, f + x * d * m * p, u + y * d * m * p, c, !0), i = !i, l += e * p
                            }
                        },
                        convertPolygonToPath: function() {
                            var t, e = Math.floor(this.pt.v),
                                i = 2 * Math.PI / e,
                                a = this.or.v,
                                r = this.os.v,
                                s = 2 * Math.PI * a / (4 * e),
                                n = .5 * -Math.PI,
                                o = 3 === this.data.d ? -1 : 1;
                            for (n += this.r.v, t = this.v._length = 0; t < e; t += 1) {
                                var h = a * Math.cos(n),
                                    l = a * Math.sin(n),
                                    p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                    c = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * s * r * o, l - c * s * r * o, h + p * s * r * o, l + c * s * r * o, t, !0), n += i * o
                            }
                            this.paths.length = 0, this.paths[0] = this.v
                        }
                    }, extendPrototype([DynamicPropertyContainer], m), m);

                    function m(t, e) { this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath()) }
                    var d = (f.prototype = {
                        convertRectToPath: function() {
                            var t = this.p.v[0],
                                e = this.p.v[1],
                                i = this.s.v[0] / 2,
                                a = this.s.v[1] / 2,
                                r = bmMin(i, a, this.r.v),
                                s = r * (1 - roundCorner);
                            this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - a + r, t + i, e - a + r, t + i, e - a + s, 0, !0), this.v.setTripleAt(t + i, e + a - r, t + i, e + a - s, t + i, e + a - r, 1, !0), 0 !== r ? (this.v.setTripleAt(t + i - r, e + a, t + i - r, e + a, t + i - s, e + a, 2, !0), this.v.setTripleAt(t - i + r, e + a, t - i + s, e + a, t - i + r, e + a, 3, !0), this.v.setTripleAt(t - i, e + a - r, t - i, e + a - r, t - i, e + a - s, 4, !0), this.v.setTripleAt(t - i, e - a + r, t - i, e - a + s, t - i, e - a + r, 5, !0), this.v.setTripleAt(t - i + r, e - a, t - i + r, e - a, t - i + s, e - a, 6, !0), this.v.setTripleAt(t + i - r, e - a, t + i - s, e - a, t + i - r, e - a, 7, !0)) : (this.v.setTripleAt(t - i, e + a, t - i + s, e + a, t - i, e + a, 2), this.v.setTripleAt(t - i, e - a, t - i, e - a + s, t - i, e - a, 3))) : (this.v.setTripleAt(t + i, e - a + r, t + i, e - a + s, t + i, e - a + r, 0, !0), 0 !== r ? (this.v.setTripleAt(t + i - r, e - a, t + i - r, e - a, t + i - s, e - a, 1, !0), this.v.setTripleAt(t - i + r, e - a, t - i + s, e - a, t - i + r, e - a, 2, !0), this.v.setTripleAt(t - i, e - a + r, t - i, e - a + r, t - i, e - a + s, 3, !0), this.v.setTripleAt(t - i, e + a - r, t - i, e + a - s, t - i, e + a - r, 4, !0), this.v.setTripleAt(t - i + r, e + a, t - i + r, e + a, t - i + s, e + a, 5, !0), this.v.setTripleAt(t + i - r, e + a, t + i - s, e + a, t + i - r, e + a, 6, !0), this.v.setTripleAt(t + i, e + a - r, t + i, e + a - r, t + i, e + a - s, 7, !0)) : (this.v.setTripleAt(t - i, e - a, t - i + s, e - a, t - i, e - a, 1, !0), this.v.setTripleAt(t - i, e + a, t - i, e + a - s, t - i, e + a, 2, !0), this.v.setTripleAt(t + i, e + a, t + i - s, e + a, t + i, e + a, 3, !0)))
                        },
                        getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath()) },
                        reset: a
                    }, extendPrototype([DynamicPropertyContainer], f), f);

                    function f(t, e) { this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath()) }
                    var u = { getShapeProp: function(t, e, i) { var a; return 3 === i || 4 === i ? a = new((3 === i ? e.pt : e.ks).k.length ? o : s)(t, e, i) : 5 === i ? a = new d(t, e) : 6 === i ? a = new l(t, e) : 7 === i && (a = new c(t, e)), a.k && t.addDynamicProperty(a), a }, getConstructorFunction: function() { return s }, getKeyframedConstructorFunction: function() { return o } };
                    return u
                }(),
                ShapeModifiers = (o5 = {}, p5 = {}, o5.registerModifier = function(t, e) { p5[t] || (p5[t] = e) }, o5.getModifier = function(t, e, i) { return new p5[t](e, i) }, o5),
                o5, p5;

            function ShapeModifier() {}

            function TrimModifier() {}

            function RoundCornersModifier() {}

            function PuckerAndBloatModifier() {}

            function RepeaterModifier() {}

            function ShapeCollection() { this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength) }

            function DashProperty(t, e, i, a) {
                this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(a);
                for (var r, s = e.length || 0, n = 0; n < s; n += 1) r = PropertyFactory.getProp(t, e[n].v, 0, 0, this), this.k = r.k || this.k, this.dataProps[n] = { n: e[n].n, p: r };
                this.k || this.getValue(!0), this._isAnimated = this.k
            }

            function GradientProperty(t, e, i) {
                this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                var a = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                this.o = createTypedArray("float32", a), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = a, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
            }
            ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                var e;
                this.closed || (t.sh.container.addDynamicProperty(t.sh), e = { shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection() }, this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated())
            }, ShapeModifier.prototype.init = function(t, e) { this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0) }, ShapeModifier.prototype.processKeys = function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties()) }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) { this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length }, TrimModifier.prototype.addShapeToModifier = function(t) { t.pathsData = [] }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, a, r) {
                var s = [];
                e <= 1 ? s.push({ s: t, e: e }) : 1 <= t ? s.push({ s: t - 1, e: e - 1 }) : (s.push({ s: t, e: 1 }), s.push({ s: 0, e: e - 1 }));
                for (var n, o, h = [], l = s.length, p = 0; p < l; p += 1)(o = s[p]).e * r < a || o.s * r > a + i || (n = o.s * r <= a ? 0 : (o.s * r - a) / i, o = o.e * r >= a + i ? 1 : (o.e * r - a) / i, h.push([n, o]));
                return h.length || h.push([0, 0]), h
            }, TrimModifier.prototype.releasePathsData = function(t) { for (var e = t.length, i = 0; i < e; i += 1) segmentsLengthPool.release(t[i]); return t.length = 0, t }, TrimModifier.prototype.processShapes = function(t) {
                var e, i, a, r;
                this._mdf || t ? ((e = this.o.v % 360 / 360) < 0 && (e += 1), i = 1 < this.s.v ? 1 + e : this.s.v < 0 ? 0 + e : this.s.v + e, (a = 1 < this.e.v ? 1 + e : this.e.v < 0 ? 0 + e : this.e.v + e) < i && (e = i, i = a, a = e), i = 1e-4 * Math.round(1e4 * i), a = 1e-4 * Math.round(1e4 * a), this.sValue = i, this.eValue = a) : (i = this.sValue, a = this.eValue);
                var s, n, o, h, l, p = this.shapes.length,
                    c = 0;
                if (a === i)
                    for (u = 0; u < p; u += 1) this.shapes[u].localShapeCollection.releaseShapes(), this.shapes[u].shape._mdf = !0, this.shapes[u].shape.paths = this.shapes[u].localShapeCollection, this._mdf && (this.shapes[u].pathsData.length = 0);
                else if (1 === a && 0 === i || 0 === a && 1 === i) {
                    if (this._mdf)
                        for (u = 0; u < p; u += 1) this.shapes[u].pathsData.length = 0, this.shapes[u].shape._mdf = !0
                } else {
                    for (var m, d, f = [], u = 0; u < p; u += 1)
                        if ((m = this.shapes[u]).shape._mdf || this._mdf || t || 2 === this.m) {
                            if (n = (r = m.shape.paths)._length, l = 0, !m.shape._mdf && m.pathsData.length) l = m.totalShapeLength;
                            else {
                                for (o = this.releasePathsData(m.pathsData), s = 0; s < n; s += 1) h = bez.getSegmentsLength(r.shapes[s]), o.push(h), l += h.totalLength;
                                m.totalShapeLength = l, m.pathsData = o
                            }
                            c += l, m.shape._mdf = !0
                        } else m.shape.paths = m.localShapeCollection;
                    var x, y = i,
                        k = a,
                        g = 0;
                    for (u = p - 1; 0 <= u; --u)
                        if ((m = this.shapes[u]).shape._mdf) {
                            for ((d = m.localShapeCollection).releaseShapes(), 2 === this.m && 1 < p ? (x = this.calculateShapeEdges(i, a, m.totalShapeLength, g, c), g += m.totalShapeLength) : x = [
                                    [y, k]
                                ], n = x.length, s = 0; s < n; s += 1) {
                                y = x[s][0], k = x[s][1], f.length = 0, k <= 1 ? f.push({ s: m.totalShapeLength * y, e: m.totalShapeLength * k }) : 1 <= y ? f.push({ s: m.totalShapeLength * (y - 1), e: m.totalShapeLength * (k - 1) }) : (f.push({ s: m.totalShapeLength * y, e: m.totalShapeLength }), f.push({ s: 0, e: m.totalShapeLength * (k - 1) }));
                                var v, b = this.addShapes(m, f[0]);
                                f[0].s !== f[0].e && (1 < f.length && (b = m.shape.paths.shapes[m.shape.paths._length - 1].c ? (v = b.pop(), this.addPaths(b, d), this.addShapes(m, f[1], v)) : (this.addPaths(b, d), this.addShapes(m, f[1]))), this.addPaths(b, d))
                            }
                            m.shape.paths = d
                        }
                }
            }, TrimModifier.prototype.addPaths = function(t, e) { for (var i = t.length, a = 0; a < i; a += 1) e.addShape(t[a]) }, TrimModifier.prototype.addSegment = function(t, e, i, a, r, s, n) { r.setXYAt(e[0], e[1], "o", s), r.setXYAt(i[0], i[1], "i", s + 1), n && r.setXYAt(t[0], t[1], "v", s), r.setXYAt(a[0], a[1], "v", s + 1) }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, a) { e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), a && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1) }, TrimModifier.prototype.addShapes = function(t, e, i) {
                var a, r, s, n, o, h, l, p, c = t.pathsData,
                    m = t.shape.paths.shapes,
                    d = t.shape.paths._length,
                    f = 0,
                    u = [],
                    x = !0,
                    y = i ? (n = i._length, i._length) : (i = shapePool.newElement(), n = 0);
                for (u.push(i), a = 0; a < d; a += 1) {
                    for (o = c[a].lengths, i.c = m[a].c, s = m[a].c ? o.length : o.length + 1, r = 1; r < s; r += 1)
                        if (f + (p = o[r - 1]).addedLength < e.s) f += p.addedLength, i.c = !1;
                        else { if (f > e.e) { i.c = !1; break } e.s <= f && e.e >= f + p.addedLength ? (this.addSegment(m[a].v[r - 1], m[a].o[r - 1], m[a].i[r], m[a].v[r], i, n, x), x = !1) : (h = bez.getNewSegment(m[a].v[r - 1], m[a].v[r], m[a].o[r - 1], m[a].i[r], (e.s - f) / p.addedLength, (e.e - f) / p.addedLength, o[r - 1]), this.addSegmentFromArray(h, i, n, x), i.c = x = !1), f += p.addedLength, n += 1 } if (m[a].c && o.length && (p = o[r - 1], f <= e.e ? (l = o[r - 1].addedLength, e.s <= f && e.e >= f + l ? (this.addSegment(m[a].v[r - 1], m[a].o[r - 1], m[a].i[0], m[a].v[0], i, n, x), x = !1) : (h = bez.getNewSegment(m[a].v[r - 1], m[a].v[0], m[a].o[r - 1], m[a].i[0], (e.s - f) / l, (e.e - f) / l, o[r - 1]), this.addSegmentFromArray(h, i, n, x), i.c = x = !1)) : i.c = !1, f += p.addedLength, n += 1), i._length && (i.setXYAt(i.v[y][0], i.v[y][1], "i", y), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), f > e.e) break;
                    a < d - 1 && (i = shapePool.newElement(), x = !0, u.push(i), n = 0)
                }
                return u
            }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) { this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length }, RoundCornersModifier.prototype.processPath = function(t, e) {
                var i = shapePool.newElement();
                i.c = t.c;
                for (var a, r, s, n, o, h, l, p, c, m, d, f, u = t._length, x = 0, y = 0; y < u; y += 1) a = t.v[y], s = t.o[y], r = t.i[y], a[0] === s[0] && a[1] === s[1] && a[0] === r[0] && a[1] === r[1] ? 0 !== y && y !== u - 1 || t.c ? (n = 0 === y ? t.v[u - 1] : t.v[y - 1], h = (o = Math.sqrt(Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2))) ? Math.min(o / 2, e) / o : 0, d = a[0] + (n[0] - a[0]) * h, f = a[1] - (a[1] - n[1]) * h, c = (l = d) - (l - a[0]) * roundCorner, m = (p = f) - (p - a[1]) * roundCorner, i.setTripleAt(l, p, c, m, d, f, x), x += 1, n = y === u - 1 ? t.v[0] : t.v[y + 1], h = (o = Math.sqrt(Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2))) ? Math.min(o / 2, e) / o : 0, c = a[0] + (n[0] - a[0]) * h, m = a[1] + (n[1] - a[1]) * h, d = (l = c) - (l - a[0]) * roundCorner, f = (p = m) - (p - a[1]) * roundCorner, i.setTripleAt(l, p, c, m, d, f, x)) : i.setTripleAt(a[0], a[1], s[0], s[1], r[0], r[1], x) : i.setTripleAt(t.v[y][0], t.v[y][1], t.o[y][0], t.o[y][1], t.i[y][0], t.i[y][1], x), x += 1;
                return i
            }, RoundCornersModifier.prototype.processShapes = function(t) {
                var e, i, a, r = this.shapes.length,
                    s = this.rd.v;
                if (0 !== s)
                    for (var n, o, h = 0; h < r; h += 1) {
                        if (o = (n = this.shapes[h]).localShapeCollection, n.shape._mdf || this._mdf || t)
                            for (o.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, a = n.shape.paths._length, i = 0; i < a; i += 1) o.addShape(this.processPath(e[i], s));
                        n.shape.paths = n.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) { this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                for (var i = e / 100, a = [0, 0], r = t._length, s = 0, s = 0; s < r; s += 1) a[0] += t.v[s][0], a[1] += t.v[s][1];
                a[0] /= r, a[1] /= r;
                var n, o, h, l, p, c, m = shapePool.newElement();
                for (m.c = t.c, s = 0; s < r; s += 1) n = t.v[s][0] + (a[0] - t.v[s][0]) * i, o = t.v[s][1] + (a[1] - t.v[s][1]) * i, h = t.o[s][0] + (a[0] - t.o[s][0]) * -i, l = t.o[s][1] + (a[1] - t.o[s][1]) * -i, p = t.i[s][0] + (a[0] - t.i[s][0]) * -i, c = t.i[s][1] + (a[1] - t.i[s][1]) * -i, m.setTripleAt(n, o, h, l, p, c, s);
                return m
            }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
                var e, i, a, r = this.shapes.length,
                    s = this.amount.v;
                if (0 !== s)
                    for (var n, o, h = 0; h < r; h += 1) {
                        if (o = (n = this.shapes[h]).localShapeCollection, n.shape._mdf || this._mdf || t)
                            for (o.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, a = n.shape.paths._length, i = 0; i < a; i += 1) o.addShape(this.processPath(e[i], s));
                        n.shape.paths = n.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) { this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, a, r, s) {
                var n = s ? -1 : 1,
                    o = a.s.v[0] + (1 - a.s.v[0]) * (1 - r),
                    h = a.s.v[1] + (1 - a.s.v[1]) * (1 - r);
                t.translate(a.p.v[0] * n * r, a.p.v[1] * n * r, a.p.v[2]), e.translate(-a.a.v[0], -a.a.v[1], a.a.v[2]), e.rotate(-a.r.v * n * r), e.translate(a.a.v[0], a.a.v[1], a.a.v[2]), i.translate(-a.a.v[0], -a.a.v[1], a.a.v[2]), i.scale(s ? 1 / o : o, s ? 1 / h : h), i.translate(a.a.v[0], a.a.v[1], a.a.v[2])
            }, RepeaterModifier.prototype.init = function(t, e, i, a) {
                for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = a, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); 0 < i;) this._elements.unshift(e[--i]);
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }, RepeaterModifier.prototype.resetElements = function(t) { for (var e = t.length, i = 0; i < e; i += 1) t[i]._processed = !1, "gr" === t[i].ty && this.resetElements(t[i].it) }, RepeaterModifier.prototype.cloneElements = function(t) { t = JSON.parse(JSON.stringify(t)); return this.resetElements(t), t }, RepeaterModifier.prototype.changeGroupRender = function(t, e) { for (var i = t.length, a = 0; a < i; a += 1) t[a]._render = e, "gr" === t[a].ty && this.changeGroupRender(t[a].it, e) }, RepeaterModifier.prototype.processShapes = function(t) {
                var e, i, a, r, s;
                if (this._mdf || t) {
                    var n, o = Math.ceil(this.c.v);
                    if (this._groups.length < o) {
                        for (; this._groups.length < o;) {
                            var h = { it: this.cloneElements(this._elements), ty: "gr" };
                            h.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
                        }
                        this.elem.reloadShapes()
                    }
                    for (a = s = 0; a <= this._groups.length - 1; a += 1) this._groups[a]._render = n = s < o, this.changeGroupRender(this._groups[a].it, n), s += 1;
                    this._currentCopies = o;
                    var l = this.o.v,
                        t = l % 1,
                        p = 0 < l ? Math.floor(l) : Math.ceil(l),
                        c = this.pMatrix.props,
                        m = this.rMatrix.props,
                        d = this.sMatrix.props;
                    this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                    var f, u, x = 0;
                    if (0 < l) {
                        for (; x < p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
                        t && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, t, !1), x += t)
                    } else if (l < 0) {
                        for (; p < x;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), --x;
                        t && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -t, !0), x -= t)
                    }
                    for (a = 1 === this.data.m ? 0 : this._currentCopies - 1, r = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
                        if (u = (i = (e = this.elemsData[a].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (a / (this._currentCopies - 1)), 0 !== x) {
                            for ((0 !== a && 1 === r || a !== this._currentCopies - 1 && -1 === r) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), f = 0; f < u; f += 1) i[f] = this.matrix.props[f];
                            this.matrix.reset()
                        } else
                            for (this.matrix.reset(), f = 0; f < u; f += 1) i[f] = this.matrix.props[f];
                        x += 1, --s, a += r
                    }
                } else
                    for (s = this._currentCopies, a = 0, r = 1; s;) i = (e = this.elemsData[a].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, --s, a += r
            }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) { this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1 }, ShapeCollection.prototype.releaseShapes = function() {
                for (var t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
                this._length = 0
            }, DashProperty.prototype.getValue = function(t) {
                if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                    var e = 0,
                        i = this.dataProps.length;
                    for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                }
            }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
                for (var i = 0, a = this.o.length / 2; i < a;) {
                    if (.01 < Math.abs(t[4 * i] - t[4 * e + 2 * i])) return !1;
                    i += 1
                }
                return !0
            }, GradientProperty.prototype.checkCollapsable = function() {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s)
                    for (var t = 0, e = this.data.k.k.length; t < e;) {
                        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                        t += 1
                    } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                return !0
            }, GradientProperty.prototype.getValue = function(t) {
                if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                    for (var e, i, a = 4 * this.data.p, r = 0; r < a; r += 1) e = r % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[r] * e), this.c[r] !== i && (this.c[r] = i, this._cmdf = !t);
                    if (this.o.length)
                        for (a = this.prop.v.length, r = 4 * this.data.p; r < a; r += 1) e = r % 2 == 0 ? 100 : 1, i = r % 2 == 0 ? Math.round(100 * this.prop.v[r]) : this.prop.v[r], this.o[r - 4 * this.data.p] !== i && (this.o[r - 4 * this.data.p] = i, this._omdf = !t);
                    this._mdf = !t
                }
            }, extendPrototype([DynamicPropertyContainer], GradientProperty);
            var buildShapeString = function(t, e, i, a) { if (0 === e) return ""; for (var r = t.o, s = t.i, n = t.v, o = " M" + a.applyToPointStringified(n[0][0], n[0][1]), h = 1; h < e; h += 1) o += " C" + a.applyToPointStringified(r[h - 1][0], r[h - 1][1]) + " " + a.applyToPointStringified(s[h][0], s[h][1]) + " " + a.applyToPointStringified(n[h][0], n[h][1]); return i && e && (o += " C" + a.applyToPointStringified(r[h - 1][0], r[h - 1][1]) + " " + a.applyToPointStringified(s[0][0], s[0][1]) + " " + a.applyToPointStringified(n[0][0], n[0][1]), o += "z"), o },
                audioControllerFactory = (s9.prototype = { addAudio: function(t) { this.audios.push(t) }, pause: function() { for (var t = this.audios.length, e = 0; e < t; e += 1) this.audios[e].pause() }, resume: function() { for (var t = this.audios.length, e = 0; e < t; e += 1) this.audios[e].resume() }, setRate: function(t) { for (var e = this.audios.length, i = 0; i < e; i += 1) this.audios[i].setRate(t) }, createAudio: function(t) { return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({ src: [t] }) : { isPlaying: !1, play: function() { this.isPlaying = !0 }, seek: function() { this.isPlaying = !1 }, playing: function() {}, rate: function() {}, setVolume: function() {} } }, setAudioFactory: function(t) { this.audioFactory = t }, setVolume: function(t) { this._volume = t, this._updateVolume() }, mute: function() { this._isMuted = !0, this._updateVolume() }, unmute: function() { this._isMuted = !1, this._updateVolume() }, getVolume: function() { return this._volume }, _updateVolume: function() { for (var t = this.audios.length, e = 0; e < t; e += 1) this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1)) } }, function() { return new s9 });

            function s9(t) { this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1 }
            var ImagePreloader = (H9 = function() {
                    var t = createTag("canvas");
                    t.width = 1, t.height = 1;
                    var e = t.getContext("2d");
                    return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                }(), U9.prototype = {
                    loadAssets: function(t, e) { this.imagesLoadedCb = e; for (var i = t.length, a = 0; a < i; a += 1) t[a].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[a]))) },
                    setAssetsPath: function(t) { this.assetsPath = t || "" },
                    setPath: function(t) { this.path = t || "" },
                    loaded: function() { return this.totalImages === this.loadedAssets },
                    destroy: function() { this.imagesLoadedCb = null, this.images.length = 0 },
                    getImage: function(t) {
                        for (var e = 0, i = this.images.length; e < i;) {
                            if (this.images[e].assetData === t) return this.images[e].img;
                            e += 1
                        }
                        return null
                    },
                    createImgData: function(t) {
                        var e = J9(t, this.assetsPath, this.path),
                            i = createTag("img");
                        i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() { a.img = H9, this._imageLoaded() }.bind(this), !1), i.src = e;
                        var a = { img: i, assetData: t };
                        return a
                    },
                    createImageData: function(t) {
                        var e = J9(t, this.assetsPath, this.path),
                            i = createNS("image");
                        isSafari ? this.testImageLoaded(i) : i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() { a.img = H9, this._imageLoaded() }.bind(this), !1), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this._elementHelper.append(i);
                        var a = { img: i, assetData: t };
                        return a
                    },
                    imageLoaded: I9,
                    setCacheType: function(t, e) { "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this) }
                }, U9),
                H9;

            function I9() { this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null) }

            function J9(t, e, i) { var a = ""; return t.e ? a = t.p : e ? a = e + (e = -1 !== (e = t.p).indexOf("images/") ? e.split("/")[1] : e) : (a = i, a += t.u || "", a += t.p), a }

            function U9() {
                this._imageLoaded = I9.bind(this), this.testImageLoaded = function(t) {
                    var e = 0,
                        i = setInterval(function() {
                            (t.getBBox().width || 500 < e) && (this._imageLoaded(), clearInterval(i)), e += 1
                        }.bind(this), 50)
                }.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = []
            }
            var featureSupport = (xaa = { maskType: !0 }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (xaa.maskType = !1), xaa),
                xaa, filtersFactory = (yaa = {}, yaa.createFilter = function(t) { var e = createNS("filter"); return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e }, yaa.createAlphaToLuminanceFilter = function() { var t = createNS("feColorMatrix"); return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t }, yaa),
                yaa, assetLoader = {
                    load: function(t, e, i) {
                        var a, r = new XMLHttpRequest;
                        r.open("GET", t, !0);
                        try { r.responseType = "json" } catch (t) {} r.send(), r.onreadystatechange = function() {
                            if (4 === r.readyState)
                                if (200 === r.status) a = Eaa(r), e(a);
                                else try { a = Eaa(r), e(a) } catch (t) { i && i(t) }
                        }
                    }
                };

            function Eaa(t) { return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null }

            function TextAnimatorProperty(t, e, i) { this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i) }

            function TextAnimatorDataProperty(t, e, i) {
                var a = { propType: !1 },
                    r = PropertyFactory.getProp,
                    s = e.a;
                this.a = { r: s.r ? r(t, s.r, 0, degToRads, i) : a, rx: s.rx ? r(t, s.rx, 0, degToRads, i) : a, ry: s.ry ? r(t, s.ry, 0, degToRads, i) : a, sk: s.sk ? r(t, s.sk, 0, degToRads, i) : a, sa: s.sa ? r(t, s.sa, 0, degToRads, i) : a, s: s.s ? r(t, s.s, 1, .01, i) : a, a: s.a ? r(t, s.a, 1, 0, i) : a, o: s.o ? r(t, s.o, 0, .01, i) : a, p: s.p ? r(t, s.p, 1, 0, i) : a, sw: s.sw ? r(t, s.sw, 0, 0, i) : a, sc: s.sc ? r(t, s.sc, 1, 0, i) : a, fc: s.fc ? r(t, s.fc, 1, 0, i) : a, fh: s.fh ? r(t, s.fh, 0, 0, i) : a, fs: s.fs ? r(t, s.fs, 0, .01, i) : a, fb: s.fb ? r(t, s.fb, 0, .01, i) : a, t: s.t ? r(t, s.t, 0, 0, i) : a }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
            }

            function LetterProps(t, e, i, a, r, s) { this.o = t, this.sw = e, this.sc = i, this.fc = a, this.m = r, this.p = s, this._mdf = { o: !0, sw: !!e, sc: !!i, fc: !!a, m: !0, p: !0 } }

            function TextProperty(t, e) { this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: !1, strokeColorAnim: !1, strokeWidthAnim: !1, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: !1 }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData) } TextAnimatorProperty.prototype.searchProperties = function() {
                for (var t, e = this._textData.a.length, i = PropertyFactory.getProp, a = 0; a < e; a += 1) t = this._textData.a[a], this._animatorsData[a] = new TextAnimatorDataProperty(this._elem, t, this);
                this._textData.p && "m" in this._textData.p ? (this._pathData = { f: i(this._elem, this._textData.p.f, 0, 0, this), l: i(this._elem, this._textData.p.l, 0, 0, this), r: this._textData.p.r, m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
            }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                    this._isFirstFrame = !1;
                    var i, a, r, s, n, o, h, l, p, c, m, d, f, u = this._moreOptions.alignment.v,
                        x = this._animatorsData,
                        y = this._textData,
                        k = this.mHelper,
                        g = this._renderType,
                        v = this.renderedLetters.length,
                        b = t.l;
                    if (this._hasMaskedPath) {
                        if (f = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                            for (var E, A = f.v, S = { tLength: 0, segments: [] }, D = (A = this._pathData.r ? A.reverse() : A)._length - 1, _ = m = 0; _ < D; _ += 1) E = bez.buildBezierData(A.v[_], A.v[_ + 1], [A.o[_][0] - A.v[_][0], A.o[_][1] - A.v[_][1]], [A.i[_ + 1][0] - A.v[_ + 1][0], A.i[_ + 1][1] - A.v[_ + 1][1]]), S.tLength += E.segmentLength, S.segments.push(E), m += E.segmentLength;
                            _ = D, f.v.c && (E = bez.buildBezierData(A.v[_], A.v[0], [A.o[_][0] - A.v[_][0], A.o[_][1] - A.v[_][1]], [A.i[0][0] - A.v[0][0], A.i[0][1] - A.v[0][1]]), S.tLength += E.segmentLength, S.segments.push(E), m += E.segmentLength), this._pathData.pi = S
                        }
                        if (S = this._pathData.pi, i = this._pathData.f.v, n = 1, s = !(r = o = 0), p = S.segments, i < 0 && f.v.c)
                            for (S.tLength < Math.abs(i) && (i = -Math.abs(i) % S.tLength), n = (l = p[o = p.length - 1].points).length - 1; i < 0;) i += l[n].partialLength, --n < 0 && (n = (l = p[--o].points).length - 1);
                        h = (l = p[o].points)[n - 1], c = (a = l[n]).partialLength
                    }
                    D = b.length;
                    var P, T, w, C, B, V, F, G, M, I, R, L, N, z, O, j, H = 0,
                        q = 0,
                        $ = 1.2 * t.finalSize * .714,
                        W = !0,
                        Q = x.length,
                        U = -1,
                        J = i,
                        X = o,
                        Y = n,
                        K = -1,
                        Z = "",
                        tt = this.defaultPropsArray;
                    if (2 === t.j || 1 === t.j) {
                        var et = 0,
                            it = 0,
                            at = 2 === t.j ? -.5 : -1,
                            rt = 0,
                            st = !0;
                        for (_ = 0; _ < D; _ += 1)
                            if (b[_].n) {
                                for (et && (et += it); rt < _;) b[rt].animatorJustifyOffset = et, rt += 1;
                                st = !(et = 0)
                            } else {
                                for (ot = 0; ot < Q; ot += 1)(P = x[ot].a).t.propType && (st && 2 === t.j && (it += P.t.v * at), (w = x[ot].s.getMult(b[_].anIndexes[ot], y.a[ot].s.totalChars)).length ? et += P.t.v * w[0] * at : et += P.t.v * w * at);
                                st = !1
                            } for (et && (et += it); rt < _;) b[rt].animatorJustifyOffset = et, rt += 1
                    }
                    for (_ = 0; _ < D; _ += 1) {
                        if (k.reset(), F = 1, b[_].n) H = 0, q += t.yOffset, q += W ? 1 : 0, i = J, W = !1, this._hasMaskedPath && (h = (l = p[o = X].points)[(n = Y) - 1], c = (a = l[n]).partialLength, r = 0), O = L = z = Z = "", tt = this.defaultPropsArray;
                        else {
                            if (this._hasMaskedPath) {
                                if (K !== b[_].line) {
                                    switch (t.j) {
                                        case 1:
                                            i += m - t.lineWidths[b[_].line];
                                            break;
                                        case 2:
                                            i += (m - t.lineWidths[b[_].line]) / 2
                                    }
                                    K = b[_].line
                                }
                                U !== b[_].ind && (b[U] && (i += b[U].extra), i += b[_].an / 2, U = b[_].ind), i += u[0] * b[_].an * .005;
                                for (var nt = 0, ot = 0; ot < Q; ot += 1)(P = x[ot].a).p.propType && ((w = x[ot].s.getMult(b[_].anIndexes[ot], y.a[ot].s.totalChars)).length ? nt += P.p.v[0] * w[0] : nt += P.p.v[0] * w), P.a.propType && ((w = x[ot].s.getMult(b[_].anIndexes[ot], y.a[ot].s.totalChars)).length ? nt += P.a.v[0] * w[0] : nt += P.a.v[0] * w);
                                for (s = !0; s;) i + nt <= r + c || !l ? (d = (i + nt - r) / a.partialLength, B = h.point[0] + (a.point[0] - h.point[0]) * d, V = h.point[1] + (a.point[1] - h.point[1]) * d, k.translate(-u[0] * b[_].an * .005, -u[1] * $ * .01), s = !1) : l && (r += a.partialLength, (n += 1) >= l.length && (n = 0, l = p[o += 1] ? p[o].points : f.v.c ? p[o = n = 0].points : (r -= a.partialLength, null)), l && (h = a, c = (a = l[n]).partialLength));
                                C = b[_].an / 2 - b[_].add, k.translate(-C, 0, 0)
                            } else C = b[_].an / 2 - b[_].add, k.translate(-C, 0, 0), k.translate(-u[0] * b[_].an * .005, -u[1] * $ * .01, 0);
                            for (ot = 0; ot < Q; ot += 1)(P = x[ot].a).t.propType && (w = x[ot].s.getMult(b[_].anIndexes[ot], y.a[ot].s.totalChars), 0 === H && 0 === t.j || (this._hasMaskedPath ? w.length ? i += P.t.v * w[0] : i += P.t.v * w : w.length ? H += P.t.v * w[0] : H += P.t.v * w));
                            for (t.strokeWidthAnim && (M = t.sw || 0), t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (I = [t.fc[0], t.fc[1], t.fc[2]]), ot = 0; ot < Q; ot += 1)(P = x[ot].a).a.propType && ((w = x[ot].s.getMult(b[_].anIndexes[ot], y.a[ot].s.totalChars)).length ? k.translate(-P.a.v[0] * w[0], -P.a.v[1] * w[1], P.a.v[2] * w[2]) : k.translate(-P.a.v[0] * w, -P.a.v[1] * w, P.a.v[2] * w));
                            for (ot = 0; ot < Q; ot += 1)(P = x[ot].a).s.propType && ((w = x[ot].s.getMult(b[_].anIndexes[ot], y.a[ot].s.totalChars)).length ? k.scale(1 + (P.s.v[0] - 1) * w[0], 1 + (P.s.v[1] - 1) * w[1], 1) : k.scale(1 + (P.s.v[0] - 1) * w, 1 + (P.s.v[1] - 1) * w, 1));
                            for (ot = 0; ot < Q; ot += 1) {
                                if (P = x[ot].a, w = x[ot].s.getMult(b[_].anIndexes[ot], y.a[ot].s.totalChars), P.sk.propType && (w.length ? k.skewFromAxis(-P.sk.v * w[0], P.sa.v * w[1]) : k.skewFromAxis(-P.sk.v * w, P.sa.v * w)), P.r.propType && (w.length ? k.rotateZ(-P.r.v * w[2]) : k.rotateZ(-P.r.v * w)), P.ry.propType && (w.length ? k.rotateY(P.ry.v * w[1]) : k.rotateY(P.ry.v * w)), P.rx.propType && (w.length ? k.rotateX(P.rx.v * w[0]) : k.rotateX(P.rx.v * w)), P.o.propType && (w.length ? F += (P.o.v * w[0] - F) * w[0] : F += (P.o.v * w - F) * w), t.strokeWidthAnim && P.sw.propType && (w.length ? M += P.sw.v * w[0] : M += P.sw.v * w), t.strokeColorAnim && P.sc.propType)
                                    for (R = 0; R < 3; R += 1) w.length ? G[R] += (P.sc.v[R] - G[R]) * w[0] : G[R] += (P.sc.v[R] - G[R]) * w;
                                if (t.fillColorAnim && t.fc) {
                                    if (P.fc.propType)
                                        for (R = 0; R < 3; R += 1) w.length ? I[R] += (P.fc.v[R] - I[R]) * w[0] : I[R] += (P.fc.v[R] - I[R]) * w;
                                    P.fh.propType && (I = w.length ? addHueToRGB(I, P.fh.v * w[0]) : addHueToRGB(I, P.fh.v * w)), P.fs.propType && (I = w.length ? addSaturationToRGB(I, P.fs.v * w[0]) : addSaturationToRGB(I, P.fs.v * w)), P.fb.propType && (I = w.length ? addBrightnessToRGB(I, P.fb.v * w[0]) : addBrightnessToRGB(I, P.fb.v * w))
                                }
                            }
                            for (ot = 0; ot < Q; ot += 1)(P = x[ot].a).p.propType && (w = x[ot].s.getMult(b[_].anIndexes[ot], y.a[ot].s.totalChars), this._hasMaskedPath ? w.length ? k.translate(0, P.p.v[1] * w[0], -P.p.v[2] * w[1]) : k.translate(0, P.p.v[1] * w, -P.p.v[2] * w) : w.length ? k.translate(P.p.v[0] * w[0], P.p.v[1] * w[1], -P.p.v[2] * w[2]) : k.translate(P.p.v[0] * w, P.p.v[1] * w, -P.p.v[2] * w));
                            if (t.strokeWidthAnim && (L = M < 0 ? 0 : M), t.strokeColorAnim && (N = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), t.fillColorAnim && t.fc && (z = "rgb(" + Math.round(255 * I[0]) + "," + Math.round(255 * I[1]) + "," + Math.round(255 * I[2]) + ")"), this._hasMaskedPath) k.translate(0, -t.ls), k.translate(0, u[1] * $ * .01 + q, 0), y.p.p && (j = (a.point[1] - h.point[1]) / (a.point[0] - h.point[0]), j = 180 * Math.atan(j) / Math.PI, a.point[0] < h.point[0] && (j += 180), k.rotate(-j * Math.PI / 180)), k.translate(B, V, 0), i -= u[0] * b[_].an * .005, b[_ + 1] && U !== b[_ + 1].ind && (i += b[_].an / 2, i += .001 * t.tr * t.finalSize);
                            else {
                                switch (k.translate(H, q, 0), t.ps && k.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                    case 1:
                                        k.translate(b[_].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[b[_].line]), 0, 0);
                                        break;
                                    case 2:
                                        k.translate(b[_].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[b[_].line]) / 2, 0, 0)
                                }
                                k.translate(0, -t.ls), k.translate(C, 0, 0), k.translate(u[0] * b[_].an * .005, u[1] * $ * .01, 0), H += b[_].l + .001 * t.tr * t.finalSize
                            }
                            "html" === g ? Z = k.toCSS() : "svg" === g ? Z = k.to2dCSS() : tt = [k.props[0], k.props[1], k.props[2], k.props[3], k.props[4], k.props[5], k.props[6], k.props[7], k.props[8], k.props[9], k.props[10], k.props[11], k.props[12], k.props[13], k.props[14], k.props[15]], O = F
                        }
                        v <= _ ? (T = new LetterProps(O, L, N, z, Z, tt), this.renderedLetters.push(T), v += 1, this.lettersChangedFlag = !0) : (T = this.renderedLetters[_], this.lettersChangedFlag = T.update(O, L, N, z, Z, tt) || this.lettersChangedFlag)
                    }
                }
            }, TextAnimatorProperty.prototype.getValue = function() { this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties()) }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, i, a, r, s) { this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1; var n = this._mdf.p = !1; return this.o !== t && (this.o = t, n = this._mdf.o = !0), this.sw !== e && (this.sw = e, n = this._mdf.sw = !0), this.sc !== i && (this.sc = i, n = this._mdf.sc = !0), this.fc !== a && (this.fc = a, n = this._mdf.fc = !0), this.m !== r && (this.m = r, n = this._mdf.m = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, n = this._mdf.p = !0), n }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) { for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t }, TextProperty.prototype.setCurrentData = function(t) { t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0 }, TextProperty.prototype.searchProperty = function() { return this.searchKeyframes() }, TextProperty.prototype.searchKeyframes = function() { return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf }, TextProperty.prototype.addEffect = function(t) { this.effectsSequence.push(t), this.elem.addDynamicProperty(this) }, TextProperty.prototype.getValue = function(t) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var e = this.currentData,
                        i = this.keysIndex;
                    if (this.lock) this.setCurrentData(this.currentData);
                    else {
                        this.lock = !0, this._mdf = !1;
                        for (var a = this.effectsSequence.length, r = t || this.data.d.k[this.keysIndex].s, s = 0; s < a; s += 1) r = i !== this.keysIndex ? this.effectsSequence[s](r, r.t) : this.effectsSequence[s](this.currentData, r.t);
                        e !== r && this.setCurrentData(r), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }
            }, TextProperty.prototype.getKeyframeValue = function() { for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, a = t.length; i <= a - 1 && !(i === a - 1 || t[i + 1].t > e);) i += 1; return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s }, TextProperty.prototype.buildFinalText = function(t) { for (var e, i = FontManager.getCombinedCharacterCodes(), a = [], r = 0, s = t.length; r < s;) e = t.charCodeAt(r), -1 !== i.indexOf(e) ? a[a.length - 1] += t.charAt(r) : 55296 <= e && e <= 56319 && 56320 <= (e = t.charCodeAt(r + 1)) && e <= 57343 ? (a.push(t.substr(r, 2)), r += 1) : a.push(t.charAt(r)), r += 1; return a }, TextProperty.prototype.completeTextData = function(t) {
                t.__complete = !0;
                var e, i, a, r = this.elem.globalData.fontManager,
                    s = this.data,
                    n = [],
                    o = 0,
                    h = s.m.g,
                    l = 0,
                    p = 0,
                    c = 0,
                    m = [],
                    d = 0,
                    f = 0,
                    u = r.getFontByName(t.f),
                    x = 0,
                    y = getFontProperties(u);
                t.fWeight = y.weight, t.fStyle = y.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), D = t.finalText.length, t.finalLineHeight = t.lh;
                var k, g = t.tr / 1e3 * t.finalSize;
                if (t.sz)
                    for (var v = !0, b = t.sz[0], E = t.sz[1]; v;) {
                        for (var A, S = 0, d = 0, D = (A = this.buildFinalText(t.t)).length, g = t.tr / 1e3 * t.finalSize, _ = -1, P = 0; P < D; P += 1) k = A[P].charCodeAt(0), e = !1, " " === A[P] ? _ = P : 13 !== k && 3 !== k || (e = !(d = 0), S += t.finalLineHeight || 1.2 * t.finalSize), b < d + (x = r.chars ? (a = r.getCharData(A[P], u.fStyle, u.fFamily), e ? 0 : a.w * t.finalSize / 100) : r.measureText(A[P], t.f, t.finalSize)) && " " !== A[P] ? (-1 === _ ? D += 1 : P = _, S += t.finalLineHeight || 1.2 * t.finalSize, A.splice(P, _ === P ? 1 : 0, "\r"), _ = -1, d = 0) : (d += x, d += g);
                        S += u.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && E < S ? (--t.finalSize, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = A, D = t.finalText.length, v = !1)
                    }
                d = -g;
                var T, x = 0,
                    w = 0;
                for (P = 0; P < D; P += 1)
                    if (e = !1, 13 === (k = (T = t.finalText[P]).charCodeAt(0)) || 3 === k ? (w = 0, m.push(d), f = f < d ? d : f, d = -2 * g, e = !(i = ""), c += 1) : i = T, x = r.chars ? (a = r.getCharData(T, u.fStyle, r.getFontByName(t.f).fFamily), e ? 0 : a.w * t.finalSize / 100) : r.measureText(i, t.f, t.finalSize), " " === T ? w += x + g : (d += x + g + w, w = 0), n.push({ l: x, an: x, add: l, n: e, anIndexes: [], val: i, line: c, animatorJustifyOffset: 0 }), 2 == h) {
                        if (l += x, "" === i || " " === i || P === D - 1) {
                            for ("" !== i && " " !== i || (l -= x); p <= P;) n[p].an = l, n[p].ind = o, n[p].extra = x, p += 1;
                            o += 1, l = 0
                        }
                    } else if (3 == h) {
                    if (l += x, "" === i || P === D - 1) {
                        for ("" === i && (l -= x); p <= P;) n[p].an = l, n[p].ind = o, n[p].extra = x, p += 1;
                        l = 0, o += 1
                    }
                } else n[o].ind = o, n[o].extra = 0, o += 1;
                if (t.l = n, f = f < d ? d : f, m.push(d), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                else switch (t.boxWidth = f, t.j) {
                    case 1:
                        t.justifyOffset = -t.boxWidth;
                        break;
                    case 2:
                        t.justifyOffset = -t.boxWidth / 2;
                        break;
                    default:
                        t.justifyOffset = 0
                }
                t.lineWidths = m;
                for (var C, B, V, F, G = s.a, M = G.length, I = [], R = 0; R < M; R += 1) {
                    for ((C = G[R]).a.sc && (t.strokeColorAnim = !0), C.a.sw && (t.strokeWidthAnim = !0), (C.a.fc || C.a.fh || C.a.fs || C.a.fb) && (t.fillColorAnim = !0), V = C.s.b, P = F = 0; P < D; P += 1)(B = n[P]).anIndexes[R] = F, (1 == V && "" !== B.val || 2 == V && "" !== B.val && " " !== B.val || 3 == V && (B.n || " " == B.val || P == D - 1) || 4 == V && (B.n || P == D - 1)) && (1 === C.s.rn && I.push(F), F += 1);
                    s.a[R].s.totalChars = F;
                    var L, N = -1;
                    if (1 === C.s.rn)
                        for (P = 0; P < D; P += 1) N != (B = n[P]).anIndexes[R] && (N = B.anIndexes[R], L = I.splice(Math.floor(Math.random() * I.length), 1)[0]), B.anIndexes[R] = L
                }
                t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = u.ascent * t.finalSize / 100
            }, TextProperty.prototype.updateDocumentData = function(t, e) {
                e = void 0 === e ? this.keysIndex : e;
                var i = this.copyData({}, this.data.d.k[e].s),
                    i = this.copyData(i, t);
                this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.recalculate = function(t) {
                t = this.data.d.k[t].s;
                t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
            }, TextProperty.prototype.canResizeFont = function(t) { this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this) }, TextProperty.prototype.setMinimumFontSize = function(t) { this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this) };
            var TextSelectorProp = (Mda = Math.max, Nda = Math.min, Oda = Math.floor, Pda.prototype = {
                    getMult: function(t) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var e = 0,
                            i = 0,
                            a = 1,
                            r = 1;
                        0 < this.ne.v ? e = this.ne.v / 100 : i = -this.ne.v / 100, 0 < this.xe.v ? a = 1 - this.xe.v / 100 : r = 1 + this.xe.v / 100;
                        var s = BezierFactory.getBezierEasing(e, i, a, r).get,
                            n = 0,
                            e = this.finalS,
                            i = this.finalE,
                            a = this.data.sh;
                        return (n = 2 === a ? s(n = i === e ? i <= t ? 1 : 0 : Mda(0, Nda(.5 / (i - e) + (t - e) / (i - e), 1))) : 3 === a ? s(n = i === e ? i <= t ? 0 : 1 : 1 - Mda(0, Nda(.5 / (i - e) + (t - e) / (i - e), 1))) : 4 === a ? (i === e ? n = 0 : (n = Mda(0, Nda(.5 / (i - e) + (t - e) / (i - e), 1))) < .5 ? n *= 2 : n = 1 - 2 * (n - .5), s(n)) : s(n = 5 === a ? i === e ? 0 : (s = -(r = i - e) / 2 + (t = Nda(Mda(0, t + .5 - e), i - e)), r = r / 2, Math.sqrt(1 - s * s / (r * r))) : 6 === a ? i === e ? 0 : (t = Nda(Mda(0, t + .5 - e), i - e), (1 + Math.cos(Math.PI + 2 * Math.PI * t / (i - e))) / 2) : t >= Oda(e) ? Mda(0, Nda(t - e < 0 ? Nda(i, 1) - (e - t) : i - t, 1)) : n)) * this.a.v
                    },
                    getValue: function(t) {
                        this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            i = this.o.v / e,
                            t = this.s.v / e + i,
                            e = this.e.v / e + i;
                        e < t && (i = t, t = e, e = i), this.finalS = t, this.finalE = e
                    }
                }, extendPrototype([DynamicPropertyContainer], Pda), { getTextSelectorProp: function(t, e, i) { return new Pda(t, e) } }),
                Mda, Nda, Oda;

            function Pda(t, e) { this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || { k: 0 }, 0, 0, this), "e" in e ? this.e = PropertyFactory.getProp(t, e.e, 0, 0, this) : this.e = { v: 100 }, this.o = PropertyFactory.getProp(t, e.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || { k: 0 }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue() }
            var poolFactory = function(t, e, i) {
                    var a = 0,
                        r = t,
                        s = createSizedArray(r);
                    return {
                        newElement: function() {
                            var t;
                            t = a ? s[--a] : e();
                            return t
                        },
                        release: function(t) {
                            a === r && (s = pooling.double(s), r *= 2);
                            i && i(t);
                            s[a] = t, a += 1
                        }
                    }
                },
                pooling = { double: function(t) { return t.concat(createSizedArray(t.length)) } },
                pointPool = poolFactory(8, function() { return createTypedArray("float32", 2) }),
                shapePool = (Eea = poolFactory(4, function() { return new ShapePath }, function(t) {
                    for (var e = t._length, i = 0; i < e; i += 1) pointPool.release(t.v[i]), pointPool.release(t.i[i]), pointPool.release(t.o[i]), t.v[i] = null, t.i[i] = null, t.o[i] = null;
                    t._length = 0, t.c = !1
                }), Eea.clone = function(t) {
                    var e, i = Eea.newElement(),
                        a = void 0 === t._length ? t.v.length : t._length;
                    for (i.setLength(a), i.c = t.c, e = 0; e < a; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                    return i
                }, Eea),
                Eea, shapeCollectionPool = (Mea = {
                    newShapeCollection: function() {
                        var t;
                        t = Nea ? Pea[--Nea] : new ShapeCollection;
                        return t
                    },
                    release: function(t) {
                        var e, i = t._length;
                        for (e = 0; e < i; e += 1) shapePool.release(t.shapes[e]);
                        t._length = 0, Nea === Oea && (Pea = pooling.double(Pea), Oea *= 2);
                        Pea[Nea] = t, Nea += 1
                    }
                }, Nea = 0, Oea = 4, Pea = createSizedArray(Oea), Mea),
                Mea, Nea, Oea, Pea, segmentsLengthPool = poolFactory(8, function() { return { lengths: [], totalLength: 0 } }, function(t) {
                    for (var e = t.lengths.length, i = 0; i < e; i += 1) bezierLengthPool.release(t.lengths[i]);
                    t.lengths.length = 0
                }),
                bezierLengthPool = poolFactory(8, function() { return { addedLength: 0, percents: createTypedArray("float32", defaultCurveSegments), lengths: createTypedArray("float32", defaultCurveSegments) } });

            function BaseRenderer() {}

            function SVGRenderer(t, e) {
                this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                var i, a = "";
                e && e.title && (t = createNS("title"), i = createElementID(), t.setAttribute("id", i), t.textContent = e.title, this.svgElement.appendChild(t), a += i), e && e.description && (i = createNS("desc"), r = createElementID(), i.setAttribute("id", r), i.textContent = e.description, this.svgElement.appendChild(i), a += " " + r), a && this.svgElement.setAttribute("aria-labelledby", a);
                var r = createNS("defs");
                this.svgElement.appendChild(r);
                a = createNS("g");
                this.svgElement.appendChild(a), this.layerElement = a, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", progressiveLoad: e && e.progressiveLoad || !1, hideOnTransparent: !(e && !1 === e.hideOnTransparent), viewBoxOnly: e && e.viewBoxOnly || !1, viewBoxSize: e && e.viewBoxSize || !1, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" } }, this.globalData = { _mdf: !1, frameNum: -1, defs: r, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
            }

            function CanvasRenderer(t, e) { this.animationItem = t, this.renderConfig = { clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || !1, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", className: e && e.className || "", id: e && e.id || "" }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas" }

            function HybridRenderer(t, e) { this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && !1 === e.hideOnTransparent), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" } }, this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html" }

            function MaskElement(t, e, i) {
                this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                var a, r = this.globalData.defs,
                    s = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = createSizedArray(s), this.solidPath = "";
                for (var n, o, h, l, p = this.masksProperties, c = 0, m = [], d = createElementID(), f = "clipPath", u = "clip-path", x = 0; x < s; x += 1)
                    if (("a" !== p[x].mode && "n" !== p[x].mode || p[x].inv || 100 !== p[x].o.k || p[x].o.x) && (u = f = "mask"), "s" !== p[x].mode && "i" !== p[x].mode || 0 !== c ? n = null : ((n = createNS("rect")).setAttribute("fill", "#ffffff"), n.setAttribute("width", this.element.comp.data.w || 0), n.setAttribute("height", this.element.comp.data.h || 0), m.push(n)), a = createNS("path"), "n" === p[x].mode) this.viewData[x] = { op: PropertyFactory.getProp(this.element, p[x].o, 0, .01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, p[x], 3), elem: a, lastPath: "" }, r.appendChild(a);
                    else {
                        if (c += 1, a.setAttribute("fill", "s" === p[x].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 0 !== p[x].x.k ? (u = f = "mask", h = PropertyFactory.getProp(this.element, p[x].x, 0, null, this.element), l = createElementID(), (v = createNS("filter")).setAttribute("id", l), (o = createNS("feMorphology")).setAttribute("operator", "erode"), o.setAttribute("in", "SourceGraphic"), o.setAttribute("radius", "0"), v.appendChild(o), r.appendChild(v), a.setAttribute("stroke", "s" === p[x].mode ? "#000000" : "#ffffff")) : h = o = null, this.storedData[x] = { elem: a, x: h, expan: o, lastPath: "", lastOperator: "", filterId: l, lastRadius: 0 }, "i" === p[x].mode) {
                            for (var y = m.length, k = createNS("g"), g = 0; g < y; g += 1) k.appendChild(m[g]);
                            var v = createNS("mask");
                            v.setAttribute("mask-type", "alpha"), v.setAttribute("id", d + "_" + c), v.appendChild(a), r.appendChild(v), k.setAttribute("mask", "url(" + locationHref + "#" + d + "_" + c + ")"), m.length = 0, m.push(k)
                        } else m.push(a);
                        p[x].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[x] = { elem: a, lastPath: "", op: PropertyFactory.getProp(this.element, p[x].o, 0, .01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, p[x], 3), invRect: n }, this.viewData[x].prop.k || this.drawPath(p[x], this.viewData[x].prop.v, this.viewData[x])
                    } for (this.maskElement = createNS(f), s = m.length, x = 0; x < s; x += 1) this.maskElement.appendChild(m[x]);
                0 < c && (this.maskElement.setAttribute("id", d), this.element.maskedElement.setAttribute(u, "url(" + locationHref + "#" + d + ")"), r.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
            }

            function HierarchyElement() {}

            function FrameElement() {}

            function TransformElement() {}

            function RenderableElement() {}

            function RenderableDOMElement() {}

            function ProcessedElement(t, e) { this.elem = t, this.pos = e }

            function SVGStyleData(t, e) { this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null }

            function SVGShapeData(t, e, i) { this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k; for (var a = 0, r = t.length; a < r;) { if (t[a].mProps.dynamicProperties.length) { this._isAnimated = !0; break } a += 1 } }

            function SVGTransformData(t, e, i) { this.transform = { mProps: t, op: e, container: i }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length }

            function SVGStrokeStyleData(t, e, i) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated }

            function SVGFillStyleData(t, e, i) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i }

            function SVGGradientFillStyleData(t, e, i) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i) }

            function SVGGradientStrokeStyleData(t, e, i) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated }

            function ShapeGroupData() { this.it = [], this.prevViewData = [], this.gr = createNS("g") } BaseRenderer.prototype.checkLayers = function(t) {
                var e, i, a = this.layers.length;
                for (this.completeLayers = !0, e = a - 1; 0 <= e; --e) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                this.checkPendingElements()
            }, BaseRenderer.prototype.createItem = function(t) {
                switch (t.ty) {
                    case 2:
                        return this.createImage(t);
                    case 0:
                        return this.createComp(t);
                    case 1:
                        return this.createSolid(t);
                    case 3:
                        return this.createNull(t);
                    case 4:
                        return this.createShape(t);
                    case 5:
                        return this.createText(t);
                    case 6:
                        return this.createAudio(t);
                    case 13:
                        return this.createCamera(t);
                    default:
                        return this.createNull(t)
                }
            }, BaseRenderer.prototype.createCamera = function() { throw new Error("You're using a 3d camera. Try the html renderer.") }, BaseRenderer.prototype.createAudio = function(t) { return new AudioElement(t, this.globalData, this) }, BaseRenderer.prototype.buildAllItems = function() {
                for (var t = this.layers.length, e = 0; e < t; e += 1) this.buildItem(e);
                this.checkPendingElements()
            }, BaseRenderer.prototype.includeLayers = function(t) {
                this.completeLayers = !1;
                for (var e, i = t.length, a = this.layers.length, r = 0; r < i; r += 1)
                    for (e = 0; e < a;) { if (this.layers[e].id === t[r].id) { this.layers[e] = t[r]; break } e += 1 }
            }, BaseRenderer.prototype.setProjectInterface = function(t) { this.globalData.projectInterface = t }, BaseRenderer.prototype.initItems = function() { this.globalData.progressiveLoad || this.buildAllItems() }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) { for (var a = this.elements, r = this.layers, s = 0, n = r.length; s < n;) r[s].ind == e && (a[s] && !0 !== a[s] ? (i.push(a[s]), a[s].setAsParent(), void 0 !== r[s].parent ? this.buildElementParenting(t, r[s].parent, i) : t.setHierarchy(i)) : (this.buildItem(s), this.addPendingElement(t))), s += 1 }, BaseRenderer.prototype.addPendingElement = function(t) { this.pendingElements.push(t) }, BaseRenderer.prototype.searchExtraCompositions = function(t) { for (var e, i = t.length, a = 0; a < i; a += 1) t[a].xt && ((e = this.createComp(t[a])).initExpressions(), this.globalData.projectInterface.registerComposition(e)) }, BaseRenderer.prototype.setupGlobalData = function(t, e) { this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h } }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) { return new NullElement(t, this.globalData, this) }, SVGRenderer.prototype.createShape = function(t) { return new SVGShapeElement(t, this.globalData, this) }, SVGRenderer.prototype.createText = function(t) { return new SVGTextLottieElement(t, this.globalData, this) }, SVGRenderer.prototype.createImage = function(t) { return new IImageElement(t, this.globalData, this) }, SVGRenderer.prototype.createComp = function(t) { return new SVGCompElement(t, this.globalData, this) }, SVGRenderer.prototype.createSolid = function(t) { return new ISolidElement(t, this.globalData, this) }, SVGRenderer.prototype.configAnimation = function(t) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                var e = this.globalData.defs;
                this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                var i = createNS("clipPath"),
                    a = createNS("rect");
                a.setAttribute("width", t.w), a.setAttribute("height", t.h), a.setAttribute("x", 0), a.setAttribute("y", 0);
                var r = createElementID();
                i.setAttribute("id", r), i.appendChild(a), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + r + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
            }, SVGRenderer.prototype.destroy = function() {
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                for (var t = this.layers ? this.layers.length : 0, e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
                var e, i = this.elements;
                i[t] || 99 === this.layers[t].ty || (i[t] = !0, e = this.createItem(this.layers[t]), i[t] = e, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(e), e.initExpressions()), this.appendElementInPos(e, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? e.setMatte(i[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(e))))
            }, SVGRenderer.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) {
                    var t = this.pendingElements.pop();
                    if (t.checkParenting(), t.data.tt)
                        for (var e = 0, i = this.elements.length; e < i;) { if (this.elements[e] === t) { t.setMatte(this.elements[e - 1].layerId); break } e += 1 }
                }
            }, SVGRenderer.prototype.renderFrame = function(t) {
                if (this.renderedFrame !== t && !this.destroyed) {
                    var e;
                    null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                    var i = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t), e = i - 1; 0 <= e; --e)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                    if (this.globalData._mdf)
                        for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }
            }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
                t = t.getBaseElement();
                if (t) {
                    for (var i, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (i = this.elements[a].getBaseElement()), a += 1;
                    i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
                }
            }, SVGRenderer.prototype.hide = function() { this.layerElement.style.display = "none" }, SVGRenderer.prototype.show = function() { this.layerElement.style.display = "block" }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) { return new CVShapeElement(t, this.globalData, this) }, CanvasRenderer.prototype.createText = function(t) { return new CVTextElement(t, this.globalData, this) }, CanvasRenderer.prototype.createImage = function(t) { return new CVImageElement(t, this.globalData, this) }, CanvasRenderer.prototype.createComp = function(t) { return new CVCompElement(t, this.globalData, this) }, CanvasRenderer.prototype.createSolid = function(t) { return new CVSolidElement(t, this.globalData, this) }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
                var e;
                1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || (this.renderConfig.clearCanvas ? (this.transformMat.cloneFromProps(t), e = this.contextData.cTr.props, this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props), e = this.contextData.cTr.props, this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])) : this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]))
            }, CanvasRenderer.prototype.ctxOpacity = function(t) {
                if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
                this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
            }, CanvasRenderer.prototype.reset = function() { this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore() }, CanvasRenderer.prototype.save = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && this.canvasContext.save();
                    var e = this.contextData.cTr.props;
                    this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                    for (var i = this.contextData.saved[this.contextData.cArrPos], a = 0; a < 16; a += 1) i[a] = e[a];
                    this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
                } else this.canvasContext.save()
            }, CanvasRenderer.prototype.restore = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), --this.contextData.cArrPos;
                    for (var e = this.contextData.saved[this.contextData.cArrPos], i = this.contextData.cTr.props, a = 0; a < 16; a += 1) i[a] = e[a];
                    this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]), e = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = e, this.globalData.currentGlobalAlpha !== e && (this.canvasContext.globalAlpha = e, this.globalData.currentGlobalAlpha = e)
                } else this.canvasContext.restore()
            }, CanvasRenderer.prototype.configAnimation = function(t) {
                var e, i;
                this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), (e = this.animationItem.container.style).width = "100%", e.height = "100%", e.transformOrigin = i = "0px 0px 0px", e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, (this.globalData.renderer = this).globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
            }, CanvasRenderer.prototype.updateContainerSize = function() {
                var t, e, i, a, r, s, n;
                this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice") ? (i = (s = this.renderConfig.preserveAspectRatio.split(" "))[1] || "meet", a = (n = s[0] || "xMidYMid").substr(0, 4), r = n.substr(4), (s = t / e) < (n = this.transformCanvas.w / this.transformCanvas.h) && "meet" === i || n < s && "slice" === i ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === a && (n < s && "meet" === i || s < n && "slice" === i) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === a && (n < s && "meet" === i || s < n && "slice" === i) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === r && (s < n && "meet" === i || n < s && "slice" === i) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === r && (s < n && "meet" === i || n < s && "slice" === i) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0) : ("none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0), this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
            }, CanvasRenderer.prototype.destroy = function() {
                this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
                for (var t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; --t) this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
            }, CanvasRenderer.prototype.renderFrame = function(t, e) {
                if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                    var i;
                    this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                    var a = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t), i = 0; i < a; i += 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                    if (this.globalData._mdf) { for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = a - 1; 0 <= i; --i)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();!0 !== this.renderConfig.clearCanvas && this.restore() }
                }
            }, CanvasRenderer.prototype.buildItem = function(t) {
                var e, i = this.elements;
                i[t] || 99 === this.layers[t].ty || (e = this.createItem(this.layers[t], this, this.globalData), (i[t] = e).initExpressions())
            }, CanvasRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting() }, CanvasRenderer.prototype.hide = function() { this.animationItem.container.style.display = "none" }, CanvasRenderer.prototype.show = function() { this.animationItem.container.style.display = "block" }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting() }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
                var i = t.getBaseElement();
                if (i) {
                    t = this.layers[e];
                    if (t.ddd && this.supports3d) this.addTo3dContainer(i, e);
                    else if (this.threeDElements) this.addTo3dContainer(i, e);
                    else {
                        for (var a, r, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (r = this.elements[s], a = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : r.getBaseElement()) || a), s += 1;
                        a ? t.ddd && this.supports3d || this.layerElement.insertBefore(i, a) : t.ddd && this.supports3d || this.layerElement.appendChild(i)
                    }
                }
            }, HybridRenderer.prototype.createShape = function(t) { return new(this.supports3d ? HShapeElement : SVGShapeElement)(t, this.globalData, this) }, HybridRenderer.prototype.createText = function(t) { return new(this.supports3d ? HTextElement : SVGTextLottieElement)(t, this.globalData, this) }, HybridRenderer.prototype.createCamera = function(t) { return this.camera = new HCameraElement(t, this.globalData, this), this.camera }, HybridRenderer.prototype.createImage = function(t) { return new(this.supports3d ? HImageElement : IImageElement)(t, this.globalData, this) }, HybridRenderer.prototype.createComp = function(t) { return new(this.supports3d ? HCompElement : SVGCompElement)(t, this.globalData, this) }, HybridRenderer.prototype.createSolid = function(t) { return new(this.supports3d ? HSolidElement : ISolidElement)(t, this.globalData, this) }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
                for (var e = 0, i = this.threeDElements.length; e < i;) {
                    if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                    e += 1
                }
                return null
            }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
                var i = createTag("div");
                styleDiv(i);
                var a, r, s = createTag("div");
                styleDiv(s), "3d" === e && ((a = i.style).width = this.globalData.compSize.w + "px", a.height = this.globalData.compSize.h + "px", a.webkitTransformOrigin = r = "50% 50%", a.mozTransformOrigin = r, a.transformOrigin = r, (a = s.style).transform = r = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)", a.webkitTransform = r), i.appendChild(s);
                e = { container: s, perspectiveElem: i, startPos: t, endPos: t, type: e };
                return this.threeDElements.push(e), e
            }, HybridRenderer.prototype.build3dContainers = function() { for (var t, e = this.layers.length, i = "", a = 0; a < e; a += 1) this.layers[a].ddd && 3 !== this.layers[a].ty ? (t = "3d" !== i ? this.createThreeDContainer(a, i = "3d") : t).endPos = Math.max(t.endPos, a) : (t = "2d" !== i ? this.createThreeDContainer(a, i = "2d") : t).endPos = Math.max(t.endPos, a); for (a = (e = this.threeDElements.length) - 1; 0 <= a; --a) this.resizerElem.appendChild(this.threeDElements[a].perspectiveElem) }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
                for (var i = 0, a = this.threeDElements.length; i < a;) {
                    if (e <= this.threeDElements[i].endPos) {
                        for (var r, s = this.threeDElements[i].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (r = this.elements[s].getBaseElement()), s += 1;
                        r ? this.threeDElements[i].container.insertBefore(t, r) : this.threeDElements[i].container.appendChild(t);
                        break
                    }
                    i += 1
                }
            }, HybridRenderer.prototype.configAnimation = function(t) {
                var e = createTag("div"),
                    i = this.animationItem.wrapper,
                    a = e.style;
                a.width = t.w + "px", a.height = t.h + "px", styleDiv(this.resizerElem = e), a.transformStyle = "flat", a.mozTransformStyle = "flat", a.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), a.overflow = "hidden";
                e = createNS("svg");
                e.setAttribute("width", "1"), e.setAttribute("height", "1"), styleDiv(e), this.resizerElem.appendChild(e);
                a = createNS("defs");
                e.appendChild(a), this.data = t, this.setupGlobalData(t, e), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
            }, HybridRenderer.prototype.destroy = function() {
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                for (var t = this.layers ? this.layers.length : 0, e = 0; e < t; e += 1) this.elements[e].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, HybridRenderer.prototype.updateContainerSize = function() {
                var t, e, i, a = this.animationItem.wrapper.offsetWidth,
                    r = this.animationItem.wrapper.offsetHeight,
                    a = a / r < this.globalData.compSize.w / this.globalData.compSize.h ? (t = a / this.globalData.compSize.w, e = a / this.globalData.compSize.w, i = 0, (r - this.globalData.compSize.h * (a / this.globalData.compSize.w)) / 2) : (t = r / this.globalData.compSize.h, e = r / this.globalData.compSize.h, i = (a - this.globalData.compSize.w * (r / this.globalData.compSize.h)) / 2, 0),
                    r = this.resizerElem.style;
                r.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + a + ",0,1)", r.transform = r.webkitTransform
            }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() { this.resizerElem.style.display = "none" }, HybridRenderer.prototype.show = function() { this.resizerElem.style.display = "block" }, HybridRenderer.prototype.initItems = function() {
                if (this.buildAllItems(), this.camera) this.camera.setup();
                else
                    for (var t = this.globalData.compSize.w, e = this.globalData.compSize.h, i = this.threeDElements.length, a = 0; a < i; a += 1) {
                        var r = this.threeDElements[a].perspectiveElem.style;
                        r.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px", r.perspective = r.webkitPerspective
                    }
            }, HybridRenderer.prototype.searchExtraCompositions = function(t) { for (var e, i = t.length, a = createTag("div"), r = 0; r < i; r += 1) t[r].xt && ((e = this.createComp(t[r], a, this.globalData.comp, null)).initExpressions(), this.globalData.projectInterface.registerComposition(e)) }, MaskElement.prototype.getMaskProperty = function(t) { return this.viewData[t].prop }, MaskElement.prototype.renderFrame = function(t) { for (var e, i = this.element.finalTransform.mat, a = this.masksProperties.length, r = 0; r < a; r += 1)(this.viewData[r].prop._mdf || t) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || t) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), "n" !== this.masksProperties[r].mode && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[r].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || t) && (e = this.storedData[r].expan, this.storedData[r].x.v < 0 ? ("erode" !== this.storedData[r].lastOperator && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[r].filterId + ")")), e.setAttribute("radius", -this.storedData[r].x.v)) : ("dilate" !== this.storedData[r].lastOperator && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", 2 * this.storedData[r].x.v)))) }, MaskElement.prototype.getMaskelement = function() { return this.maskElement }, MaskElement.prototype.createLayerSolidPath = function() { var t = "M0,0 "; return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " " }, MaskElement.prototype.drawPath = function(t, e, i) {
                for (var a, r = " M" + e.v[0][0] + "," + e.v[0][1], s = e._length, n = 1; n < s; n += 1) r += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[n][0] + "," + e.i[n][1] + " " + e.v[n][0] + "," + e.v[n][1];
                e.c && 1 < s && (r += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== r && (a = "", i.elem && (e.c && (a = t.inv ? this.solidPath + r : r), i.elem.setAttribute("d", a)), i.lastPath = r)
            }, MaskElement.prototype.destroy = function() { this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null }, HierarchyElement.prototype = { initHierarchy: function() { this.hierarchy = [], this._isParent = !1, this.checkParenting() }, setHierarchy: function(t) { this.hierarchy = t }, setAsParent: function() { this._isParent = !0 }, checkParenting: function() { void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []) } }, FrameElement.prototype = { initFrame: function() { this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1 }, prepareProperties: function(t, e) { for (var i = this.dynamicProperties.length, a = 0; a < i; a += 1)(e || this._isParent && "transform" === this.dynamicProperties[a].propType) && (this.dynamicProperties[a].getValue(), this.dynamicProperties[a]._mdf && (this.globalData._mdf = !0, this._mdf = !0)) }, addDynamicProperty: function(t) {-1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t) } }, TransformElement.prototype = {
                initTransform: function() { this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: !1, _opMdf: !1, mat: new Matrix }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty },
                renderTransform: function() {
                    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                        var t, e = this.finalTransform.mat,
                            i = 0,
                            a = this.hierarchy.length;
                        if (!this.finalTransform._matMdf)
                            for (; i < a;) { if (this.hierarchy[i].finalTransform.mProp._mdf) { this.finalTransform._matMdf = !0; break } i += 1 }
                        if (this.finalTransform._matMdf)
                            for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < a; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                    }
                },
                globalToLocal: function(t) {
                    var e = [];
                    e.push(this.finalTransform);
                    for (var i = !0, a = this.comp; i;) a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : i = !1;
                    for (var r, s = e.length, n = 0; n < s; n += 1) r = e[n].mat.applyToPointArray(0, 0, 0), t = [t[0] - r[0], t[1] - r[1], 0];
                    return t
                },
                mHelper: new Matrix
            }, RenderableElement.prototype = { initRenderable: function() { this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [] }, addRenderableComponent: function(t) {-1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t) }, removeRenderableComponent: function(t) {-1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1) }, prepareRenderableFrame: function(t) { this.checkLayerLimits(t) }, checkTransparency: function() { this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show()) }, checkLayerLimits: function(t) { this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide()) }, renderRenderable: function() { for (var t = this.renderableComponents.length, e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame) }, sourceRectAtTime: function() { return { top: 0, left: 0, width: 100, height: 100 } }, getLayerSize: function() { return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height } } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function(t, e, i) { this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide() }, hide: function() { this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0) }, show: function() { this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0) }, renderFrame: function() { this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1)) }, renderInnerContent: function() {}, prepareFrame: function(t) { this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency() }, destroy: function() { this.innerElem = null, this.destroyBaseElement() } })], RenderableDOMElement), SVGStyleData.prototype.reset = function() { this.d = "", this._mdf = !1 }, SVGShapeData.prototype.setAsAnimated = function() { this._isAnimated = !0 }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) { this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                var i = createElementID(),
                    a = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                a.setAttribute("id", i), a.setAttribute("spreadMethod", "pad"), a.setAttribute("gradientUnits", "userSpaceOnUse");
                for (var r, s = [], n = 4 * e.g.p, o = 0; o < n; o += 4) r = createNS("stop"), a.appendChild(r), s.push(r);
                t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + i + ")"), this.gf = a, this.cst = s
            }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var i, a = createNS("mask"),
                        r = createNS("path");
                    a.appendChild(r);
                    var s = createElementID(),
                        n = createElementID();
                    a.setAttribute("id", n);
                    var o = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                    o.setAttribute("id", s), o.setAttribute("spreadMethod", "pad"), o.setAttribute("gradientUnits", "userSpaceOnUse");
                    for (var h = (t.g.k.k[0].s || t.g.k.k).length, l = this.stops, p = 4 * t.g.p; p < h; p += 2)(i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), o.appendChild(i), l.push(i);
                    r.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + s + ")"), this.of = o, this.ms = a, this.ost = l, this.maskId = n, e.msElem = r
                }
            }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
            var SVGElementsRenderer = (nka = new Matrix, oka = new Matrix, {
                    createRenderFunction: function(t) {
                        switch (t.ty) {
                            case "fl":
                                return tka;
                            case "gf":
                                return vka;
                            case "gs":
                                return uka;
                            case "st":
                                return wka;
                            case "sh":
                            case "el":
                            case "rc":
                            case "sr":
                                return ska;
                            case "tr":
                                return rka;
                            default:
                                return null
                        }
                    }
                }),
                nka, oka;

            function rka(t, e, i) {
                (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function ska(t, e, i) {
                for (var a, r, s, n, o, h, l, p, c, m, d = e.styles.length, f = e.lvl, u = 0; u < d; u += 1) {
                    if (n = e.sh._mdf || i, e.styles[u].lvl < f) {
                        for (l = oka.reset(), c = f - e.styles[u].lvl, m = e.transformers.length - 1; !n && 0 < c;) n = e.transformers[m].mProps._mdf || n, --c, --m;
                        if (n)
                            for (c = f - e.styles[u].lvl, m = e.transformers.length - 1; 0 < c;) p = e.transformers[m].mProps.v.props, l.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), --c, --m
                    } else l = nka;
                    if (r = (h = e.sh.paths)._length, n) {
                        for (s = "", a = 0; a < r; a += 1)(o = h.shapes[a]) && o._length && (s += buildShapeString(o, o._length, o.c, l));
                        e.caches[u] = s
                    } else s = e.caches[u];
                    e.styles[u].d += !0 === t.hd ? "" : s, e.styles[u]._mdf = n || e.styles[u]._mdf
                }
            }

            function tka(t, e, i) {
                var a = e.style;
                (e.c._mdf || i) && a.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && a.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function uka(t, e, i) { vka(t, e, i), wka(0, e, i) }

            function vka(t, e, i) {
                var a, r, s, n, o = e.gf,
                    h = e.g._hasOpacity,
                    l = e.s.v,
                    p = e.e.v;
                if ((e.o._mdf || i) && (r = "gf" === t.ty ? "fill-opacity" : "stroke-opacity", e.style.pElem.setAttribute(r, e.o.v)), (e.s._mdf || i) && (r = "x1" == (a = 1 === t.t ? "x1" : "cx") ? "y1" : "cy", o.setAttribute(a, l[0]), o.setAttribute(r, l[1]), h && !e.g._collapsable && (e.of.setAttribute(a, l[0]), e.of.setAttribute(r, l[1]))), e.g._cmdf || i)
                    for (var c = e.cst, m = e.g.c, d = c.length, f = 0; f < d; f += 1)(s = c[f]).setAttribute("offset", m[4 * f] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * f + 1] + "," + m[4 * f + 2] + "," + m[4 * f + 3] + ")");
                if (h && (e.g._omdf || i)) { var u = e.g.o; for (d = (c = e.g._collapsable ? e.cst : e.ost).length, f = 0; f < d; f += 1) s = c[f], e.g._collapsable || s.setAttribute("offset", u[2 * f] + "%"), s.setAttribute("stop-opacity", u[2 * f + 1]) } 1 === t.t ? (e.e._mdf || i) && (o.setAttribute("x2", p[0]), o.setAttribute("y2", p[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", p[0]), e.of.setAttribute("y2", p[1]))) : ((e.s._mdf || e.e._mdf || i) && (n = Math.sqrt(Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)), o.setAttribute("r", n), h && !e.g._collapsable && e.of.setAttribute("r", n)), (e.e._mdf || e.h._mdf || e.a._mdf || i) && (n = n || Math.sqrt(Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)), i = Math.atan2(p[1] - l[1], p[0] - l[0]), 1 <= (p = e.h.v) ? p = .99 : p <= -1 && (p = -.99), n = n * p, p = Math.cos(i + e.a.v) * n + l[0], l = Math.sin(i + e.a.v) * n + l[1], o.setAttribute("fx", p), o.setAttribute("fy", l), h && !e.g._collapsable && (e.of.setAttribute("fx", p), e.of.setAttribute("fy", l))))
            }

            function wka(t, e, i) {
                var a = e.style,
                    r = e.d;
                r && (r._mdf || i) && r.dashStr && (a.pElem.setAttribute("stroke-dasharray", r.dashStr), a.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])), e.c && (e.c._mdf || i) && a.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && a.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (a.pElem.setAttribute("stroke-width", e.w.v), a.msElem && a.msElem.setAttribute("stroke-width", e.w.v))
            }

            function ShapeTransformManager() { this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0 }

            function CVShapeData(t, e, i, a) { this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0]; var r = 4; "rc" === e.ty ? r = 5 : "el" === e.ty ? r = 6 : "sr" === e.ty && (r = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, r, t); for (var s, n = i.length, o = 0; o < n; o += 1) i[o].closed || (s = { transforms: a.addTransformSequence(i[o].transforms), trNodes: [] }, this.styledShapes.push(s), i[o].elements.push(s)) }

            function BaseElement() {}

            function NullElement(t, e, i) { this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy() }

            function SVGBaseElement() {}

            function IShapeElement() {}

            function ITextElement() {}

            function ICompElement() {}

            function IImageElement(t, e, i) { this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h } }

            function ISolidElement(t, e, i) { this.initElement(t, e, i) }

            function AudioElement(t, e, i) {
                this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
                i = this.globalData.getAssetsPath(this.assetData);
                this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 }
            }

            function SVGCompElement(t, e, i) { this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

            function SVGTextLottieElement(t, e, i) { this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i) }

            function SVGShapeElement(t, e, i) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [] }

            function SVGTintFilter(t, e) {
                this.filterManager = e;
                var i = createNS("feColorMatrix");
                i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = createNS("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 === e.effectElements[2].p.v && !e.effectElements[2].p.k || (e = createNS("feMerge"), t.appendChild(e), (t = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), e.appendChild(t), (t = createNS("feMergeNode")).setAttribute("in", "f2"), e.appendChild(t))
            }

            function SVGFillFilter(t, e) {
                this.filterManager = e;
                e = createNS("feColorMatrix");
                e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(e), this.matrixFilter = e
            }

            function SVGGaussianBlurEffect(t, e) {
                t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                e = createNS("feGaussianBlur");
                t.appendChild(e), this.feGaussianBlur = e
            }

            function SVGStrokeEffect(t, e) { this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = [] }

            function SVGTritoneFilter(t, e) {
                this.filterManager = e;
                e = createNS("feColorMatrix");
                e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "linearRGB"), e.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.setAttribute("result", "f1"), t.appendChild(e);
                e = createNS("feComponentTransfer");
                e.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(e), this.matrixFilter = e;
                t = createNS("feFuncR");
                t.setAttribute("type", "table"), e.appendChild(t), this.feFuncR = t;
                t = createNS("feFuncG");
                t.setAttribute("type", "table"), e.appendChild(t), this.feFuncG = t;
                t = createNS("feFuncB");
                t.setAttribute("type", "table"), e.appendChild(t), this.feFuncB = t
            }

            function SVGProLevelsFilter(t, e) {
                this.filterManager = e;
                var i = this.filterManager.effectElements,
                    e = createNS("feComponentTransfer");
                (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", e)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", e)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", e)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", e)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (e.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(e), e = createNS("feComponentTransfer")), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (e.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(e), this.feFuncRComposed = this.createFeFunc("feFuncR", e), this.feFuncGComposed = this.createFeFunc("feFuncG", e), this.feFuncBComposed = this.createFeFunc("feFuncB", e))
            }

            function SVGDropShadowEffect(t, e) {
                var i = e.container.globalData.renderConfig.filterSize;
                t.setAttribute("x", i.x), t.setAttribute("y", i.y), t.setAttribute("width", i.width), t.setAttribute("height", i.height), this.filterManager = e;
                e = createNS("feGaussianBlur");
                e.setAttribute("in", "SourceAlpha"), e.setAttribute("result", "drop_shadow_1"), e.setAttribute("stdDeviation", "0"), this.feGaussianBlur = e, t.appendChild(e);
                e = createNS("feOffset");
                e.setAttribute("dx", "25"), e.setAttribute("dy", "0"), e.setAttribute("in", "drop_shadow_1"), e.setAttribute("result", "drop_shadow_2"), this.feOffset = e, t.appendChild(e);
                e = createNS("feFlood");
                e.setAttribute("flood-color", "#00ff00"), e.setAttribute("flood-opacity", "1"), e.setAttribute("result", "drop_shadow_3"), this.feFlood = e, t.appendChild(e);
                e = createNS("feComposite");
                e.setAttribute("in", "drop_shadow_3"), e.setAttribute("in2", "drop_shadow_2"), e.setAttribute("operator", "in"), e.setAttribute("result", "drop_shadow_4"), t.appendChild(e);
                e = createNS("feMerge");
                t.appendChild(e), t = createNS("feMergeNode"), e.appendChild(t), (t = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = t, this.feMerge = e, this.originalNodeAdded = !1, e.appendChild(t)
            }
            ShapeTransformManager.prototype = {
                addTransformSequence: function(t) { for (var e = t.length, i = "_", a = 0; a < e; a += 1) i += t[a].transform.key + "_"; var r = this.sequences[i]; return r || (r = { transforms: [].concat(t), finalTransform: new Matrix, _mdf: !1 }, this.sequences[i] = r, this.sequenceList.push(r)), r },
                processSequence: function(t, e) {
                    for (var i, a = 0, r = t.transforms.length, s = e; a < r && !e;) { if (t.transforms[a].transform.mProps._mdf) { s = !0; break } a += 1 }
                    if (s)
                        for (t.finalTransform.reset(), a = r - 1; 0 <= a; --a) i = t.transforms[a].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
                    t._mdf = s
                },
                processSequences: function(t) { for (var e = this.sequenceList.length, i = 0; i < e; i += 1) this.processSequence(this.sequenceList[i], t) },
                getNewKey: function() { return this.transform_key_count += 1, "_" + this.transform_key_count }
            }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
                checkMasks: function() {
                    if (!this.data.hasMask) return !1;
                    for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                        if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                        t += 1
                    }
                    return !1
                },
                initExpressions: function() {
                    this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
                },
                setBlendMode: function() {
                    var t = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                },
                initBaseData: function(t, e, i) { this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties) },
                getType: function() { return this.type },
                sourceRectAtTime: function() {}
            }, NullElement.prototype.prepareFrame = function(t) { this.prepareProperties(t, !0) }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() { return null }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
                initRendererElement: function() { this.layerElement = createNS("g") },
                createContainerElements: function() {
                    this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                    var t, e, i, a, r, s, n, o = null;
                    this.data.td ? 3 == this.data.td || 1 == this.data.td ? ((a = createNS("mask")).setAttribute("id", this.layerId), a.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), a.appendChild(this.layerElement), this.globalData.defs.appendChild(o = a), featureSupport.maskType || 1 != this.data.td || (a.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), a.appendChild(o = r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))) : 2 == this.data.td && ((s = createNS("mask")).setAttribute("id", this.layerId), s.setAttribute("mask-type", "alpha"), n = createNS("g"), s.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t), (i = createNS("feComponentTransfer")).setAttribute("in", "SourceGraphic"), e.appendChild(i), (a = createNS("feFuncA")).setAttribute("type", "table"), a.setAttribute("tableValues", "1.0 0.0"), i.appendChild(a), this.globalData.defs.appendChild(e), (a = createNS("rect")).setAttribute("width", this.comp.data.w), a.setAttribute("height", this.comp.data.h), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("fill", "#ffffff"), a.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(a), n.appendChild(this.layerElement), o = n, featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), n.appendChild(a), r.appendChild(this.layerElement), n.appendChild(o = r)), this.globalData.defs.appendChild(s)) : this.data.tt ? (this.matteElement.appendChild(this.layerElement), o = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.ty || this.data.hd || (n = createNS("clipPath"), (r = createNS("path")).setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z"), s = createElementID(), n.setAttribute("id", s), n.appendChild(r), this.globalData.defs.appendChild(n), this.checkMasks() ? ((n = createNS("g")).setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"), n.appendChild(this.layerElement), this.transformedElement = n, o ? o.appendChild(this.transformedElement) : this.baseElement = this.transformedElement) : this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")")), 0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() { this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v) },
                destroyBaseElement: function() { this.layerElement = null, this.matteElement = null, this.maskManager.destroy() },
                getBaseElement: function() { return this.data.hd ? null : this.baseElement },
                createRenderableComponents: function() { this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this) },
                setMatte: function(t) { this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")") }
            }, IShapeElement.prototype = {
                addShapeToModifiers: function(t) { for (var e = this.shapeModifiers.length, i = 0; i < e; i += 1) this.shapeModifiers[i].addShape(t) },
                isShapeInAnimatedModifiers: function(t) {
                    for (var e = this.shapeModifiers.length; 0 < e;)
                        if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                    return !1
                },
                renderModifiers: function() { if (this.shapeModifiers.length) { for (var t = this.shapes.length, e = 0; e < t; e += 1) this.shapes[e].sh.reset(); for (e = (t = this.shapeModifiers.length) - 1; 0 <= e; --e) this.shapeModifiers[e].processShapes(this._isFirstFrame) } },
                lcEnum: { 1: "butt", 2: "round", 3: "square" },
                ljEnum: { 1: "miter", 2: "round", 3: "bevel" },
                searchProcessedElement: function(t) {
                    for (var e = this.processedElements, i = 0, a = e.length; i < a;) {
                        if (e[i].elem === t) return e[i].pos;
                        i += 1
                    }
                    return 0
                },
                addProcessedElement: function(t, e) {
                    for (var i = this.processedElements, a = i.length; a;)
                        if (i[--a].elem === t) return void(i[a].pos = e);
                    i.push(new ProcessedElement(t, e))
                },
                prepareFrame: function(t) { this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange) }
            }, ITextElement.prototype.initElement = function(t, e, i) { this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties) }, ITextElement.prototype.prepareFrame = function(t) { this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1) }, ITextElement.prototype.createPathShape = function(t, e) { for (var i, a = e.length, r = "", s = 0; s < a; s += 1) i = e[s].ks.k, r += buildShapeString(i, i.i.length, !0, t); return r }, ITextElement.prototype.updateDocumentData = function(t, e) { this.textProperty.updateDocumentData(t, e) }, ITextElement.prototype.canResizeFont = function(t) { this.textProperty.canResizeFont(t) }, ITextElement.prototype.setMinimumFontSize = function(t) { this.textProperty.setMinimumFontSize(t) }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, a, r) {
                switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                    case 1:
                        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                        break;
                    case 2:
                        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                }
                e.translate(a, r, 0)
            }, ITextElement.prototype.buildColor = function(t) { return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")" }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) { this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide() }, ICompElement.prototype.prepareFrame = function(t) {
                if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                    var e;
                    this.tm._placeholder ? this.renderedFrame = t / this.data.sr : ((i = this.tm.v) === this.data.op && (i = this.data.op - 1), this.renderedFrame = i);
                    var i = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame), e = i - 1; 0 <= e; --e)(this.completeLayers || this.elements[e]) && (this.elements[e].prepareFrame(this.renderedFrame - this.layers[e].st), this.elements[e]._mdf && (this._mdf = !0))
                }
            }, ICompElement.prototype.renderInnerContent = function() { for (var t = this.layers.length, e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame() }, ICompElement.prototype.setElements = function(t) { this.elements = t }, ICompElement.prototype.getElements = function() { return this.elements }, ICompElement.prototype.destroyElements = function() { for (var t = this.layers.length, e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy() }, ICompElement.prototype.destroy = function() { this.destroyElements(), this.destroyBaseElement() }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
            }, IImageElement.prototype.sourceRectAtTime = function() { return this.sourceRect }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                var t = createNS("rect");
                t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
            }, AudioElement.prototype.prepareFrame = function(t) { this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder ? this._currentTime = t / this.data.sr : (t = this.tm.v, this._currentTime = t) }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() { this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || .1 < Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek())) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0)) }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() { this.audio.pause(), this._isPlaying = !1 }, AudioElement.prototype.pause = function() { this.audio.pause(), this._isPlaying = !1, this._canPlay = !1 }, AudioElement.prototype.resume = function() { this._canPlay = !0 }, AudioElement.prototype.setRate = function(t) { this.audio.rate(t) }, AudioElement.prototype.volume = function(t) { this.audio.volume(t) }, AudioElement.prototype.getBaseElement = function() { return null }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() { this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text")) }, SVGTextLottieElement.prototype.buildTextContents = function(t) { for (var e = 0, i = t.length, a = [], r = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (a.push(r), r = "") : r += t[e], e += 1; return a.push(r), a }, SVGTextLottieElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t ? t.l.length : 0), t.fc ? this.layerElement.setAttribute("fill", this.buildColor(t.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), t.sc && (this.layerElement.setAttribute("stroke", this.buildColor(t.sc)), this.layerElement.setAttribute("stroke-width", t.sw)), this.layerElement.setAttribute("font-size", t.finalSize);
                var e, i, a = this.globalData.fontManager.getFontByName(t.f);
                a.fClass ? this.layerElement.setAttribute("class", a.fClass) : (this.layerElement.setAttribute("font-family", a.fFamily), e = t.fWeight, i = t.fStyle, this.layerElement.setAttribute("font-style", i), this.layerElement.setAttribute("font-weight", e)), this.layerElement.setAttribute("aria-label", t.t);
                var r, s = t.l || [],
                    n = !!this.globalData.fontManager.chars;
                g = s.length;
                var o = this.mHelper,
                    h = "",
                    l = this.data.singleShape,
                    p = 0,
                    c = 0,
                    m = !0,
                    d = .001 * t.tr * t.finalSize;
                if (!l || n || t.sz) {
                    var f, u = this.textSpans.length;
                    for (v = 0; v < g; v += 1) n && l && 0 !== v || (r = v < u ? this.textSpans[v] : createNS(n ? "path" : "text"), u <= v && (r.setAttribute("stroke-linecap", "butt"), r.setAttribute("stroke-linejoin", "round"), r.setAttribute("stroke-miterlimit", "4"), this.textSpans[v] = r, this.layerElement.appendChild(r)), r.style.display = "inherit"), o.reset(), o.scale(t.finalSize / 100, t.finalSize / 100), l && (s[v].n && (p = -d, c += t.yOffset, c += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(t, o, s[v].line, p, c), p += s[v].l || 0, p += d), n ? (f = (f = (f = this.globalData.fontManager.getCharData(t.finalText[v], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && f.data || {}).shapes ? f.shapes[0].it : [], l ? h += this.createPathShape(o, f) : r.setAttribute("d", this.createPathShape(o, f))) : (l && r.setAttribute("transform", "translate(" + o.props[12] + "," + o.props[13] + ")"), r.textContent = s[v].val, r.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                    l && r && r.setAttribute("d", h)
                } else {
                    var x = this.textContainer,
                        y = "start";
                    switch (t.j) {
                        case 1:
                            y = "end";
                            break;
                        case 2:
                            y = "middle";
                            break;
                        default:
                            y = "start"
                    }
                    x.setAttribute("text-anchor", y), x.setAttribute("letter-spacing", d);
                    for (var k = this.buildTextContents(t.finalText), g = k.length, c = t.ps ? t.ps[1] + t.ascent : 0, v = 0; v < g; v += 1)(r = this.textSpans[v] || createNS("tspan")).textContent = k[v], r.setAttribute("x", 0), r.setAttribute("y", c), r.style.display = "inherit", x.appendChild(r), this.textSpans[v] = r, c += t.finalLineHeight;
                    this.layerElement.appendChild(x)
                }
                for (; v < this.textSpans.length;) this.textSpans[v].style.display = "none", v += 1;
                this._sizeChanged = !0
            }, SVGTextLottieElement.prototype.sourceRectAtTime = function() { var t; return this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged && (this._sizeChanged = !1, t = this.layerElement.getBBox(), this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height }), this.bbox }, SVGTextLottieElement.prototype.renderInnerContent = function() { if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) { this._sizeChanged = !0; for (var t, e, i = this.textAnimator.renderedLetters, a = this.textProperty.currentData.l, r = a.length, s = 0; s < r; s += 1) a[s].n || (t = i[s], e = this.textSpans[s], t._mdf.m && e.setAttribute("transform", t.m), t._mdf.o && e.setAttribute("opacity", t.o), t._mdf.sw && e.setAttribute("stroke-width", t.sw), t._mdf.sc && e.setAttribute("stroke", t.sc), t._mdf.fc && e.setAttribute("fill", t.fc)) } }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() { this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes() }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                for (var t, e, i, a = this.shapes.length, r = this.stylesList.length, s = [], n = !1, o = 0; o < r; o += 1) {
                    for (i = this.stylesList[o], n = !1, t = s.length = 0; t < a; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (s.push(e), n = e._isAnimated || n);
                    1 < s.length && n && this.setShapesAsAnimated(s)
                }
            }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) { for (var e = t.length, i = 0; i < e; i += 1) t[i].setAsAnimated() }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                var i, a = new SVGStyleData(t, e),
                    e = a.pElem;
                return "st" === t.ty ? i = new SVGStrokeStyleData(this, t, a) : "fl" === t.ty ? i = new SVGFillStyleData(this, t, a) : "gf" !== t.ty && "gs" !== t.ty || (i = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, a), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), e.setAttribute("mask", "url(" + locationHref + "#" + i.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (e.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), e.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), e.setAttribute("fill-opacity", "0"), 1 === t.lj && e.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && e.setAttribute("fill-rule", "evenodd"), t.ln && e.setAttribute("id", t.ln), t.cl && e.setAttribute("class", t.cl), t.bm && (e.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(a), this.addToAnimatedContents(t, i), i
            }, SVGShapeElement.prototype.createGroupElement = function(t) { var e = new ShapeGroupData; return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                var i = TransformPropertyFactory.getTransformProperty(this, t, this),
                    e = new SVGTransformData(i, i.o, e);
                return this.addToAnimatedContents(t, e), e
            }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
                var a = 4;
                "rc" === t.ty ? a = 5 : "el" === t.ty ? a = 6 : "sr" === t.ty && (a = 7);
                a = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, a, this));
                return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
            }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                for (var i = 0, a = this.animatedContents.length; i < a;) {
                    if (this.animatedContents[i].element === e) return;
                    i += 1
                }
                this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t })
            }, SVGShapeElement.prototype.setElementStyles = function(t) { for (var e = t.styles, i = this.stylesList.length, a = 0; a < i; a += 1) this.stylesList[a].closed || e.push(this.stylesList[a]) }, SVGShapeElement.prototype.reloadShapes = function() {
                this._isFirstFrame = !0;
                for (var t = this.itemsData.length, e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                this.renderModifiers()
            }, SVGShapeElement.prototype.searchShapes = function(t, e, i, a, r, s, n) {
                for (var o, h, l, p, c, m = [].concat(s), d = t.length - 1, f = [], u = [], x = d; 0 <= x; --x) {
                    if ((c = this.searchProcessedElement(t[x])) ? e[x] = i[c - 1] : t[x]._render = n, "fl" === t[x].ty || "st" === t[x].ty || "gf" === t[x].ty || "gs" === t[x].ty) c ? e[x].style.closed = !1 : e[x] = this.createStyleElement(t[x], r), t[x]._render && a.appendChild(e[x].style.pElem), f.push(e[x].style);
                    else if ("gr" === t[x].ty) {
                        if (c)
                            for (h = e[x].it.length, o = 0; o < h; o += 1) e[x].prevViewData[o] = e[x].it[o];
                        else e[x] = this.createGroupElement(t[x]);
                        this.searchShapes(t[x].it, e[x].it, e[x].prevViewData, e[x].gr, r + 1, m, n), t[x]._render && a.appendChild(e[x].gr)
                    } else "tr" === t[x].ty ? (c || (e[x] = this.createTransformElement(t[x], a)), l = e[x].transform, m.push(l)) : "sh" === t[x].ty || "rc" === t[x].ty || "el" === t[x].ty || "sr" === t[x].ty ? (c || (e[x] = this.createShapeElement(t[x], m, r)), this.setElementStyles(e[x])) : "tm" === t[x].ty || "rd" === t[x].ty || "ms" === t[x].ty || "pb" === t[x].ty ? (c ? (p = e[x]).closed = !1 : ((p = ShapeModifiers.getModifier(t[x].ty)).init(this, t[x]), e[x] = p, this.shapeModifiers.push(p)), u.push(p)) : "rp" === t[x].ty && (c ? (p = e[x]).closed = !0 : (p = ShapeModifiers.getModifier(t[x].ty), (e[x] = p).init(this, t, x, e), this.shapeModifiers.push(p), n = !1), u.push(p));
                    this.addProcessedElement(t[x], x + 1)
                }
                for (d = f.length, x = 0; x < d; x += 1) f[x].closed = !0;
                for (d = u.length, x = 0; x < d; x += 1) u[x].closed = !0
            }, SVGShapeElement.prototype.renderInnerContent = function() { this.renderModifiers(); for (var t = this.stylesList.length, e = 0; e < t; e += 1) this.stylesList[e].reset(); for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0")) }, SVGShapeElement.prototype.renderShape = function() { for (var t, e = this.animatedContents.length, i = 0; i < e; i += 1) t = this.animatedContents[i], (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame) }, SVGShapeElement.prototype.destroy = function() { this.destroyBaseElement(), this.shapesData = null, this.itemsData = null }, SVGTintFilter.prototype.renderFrame = function(t) {
                var e, i;
                (t || this.filterManager._mdf) && (e = this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v, t = this.filterManager.effectElements[2].p.v / 100, this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + t + " 0"))
            }, SVGFillFilter.prototype.renderFrame = function(t) {
                var e;
                (t || this.filterManager._mdf) && (e = this.filterManager.effectElements[2].p.v, t = this.filterManager.effectElements[6].p.v, this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + t + " 0"))
            }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                var e;
                (t || this.filterManager._mdf) && (e = .3 * this.filterManager.effectElements[0].p.v, t = this.filterManager.effectElements[1].p.v, this.feGaussianBlur.setAttribute("stdDeviation", (3 == t ? 0 : e) + " " + (2 == t ? 0 : e)), e = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate", this.feGaussianBlur.setAttribute("edgeMode", e))
            }, SVGStrokeEffect.prototype.initialize = function() {
                var t, e, i, a, r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (1 === this.filterManager.effectElements[1].p.v ? (a = this.elem.maskManager.masksProperties.length, i = 0) : a = (i = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < a; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({ p: t, m: i });
                if (3 === this.filterManager.effectElements[10].p.v) {
                    var s = createNS("mask"),
                        n = createElementID();
                    s.setAttribute("id", n), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
                    var o = createNS("g");
                    for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); r[0];) o.appendChild(r[0]);
                    this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
                } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                    if (2 === this.filterManager.effectElements[10].p.v)
                        for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length;) this.elem.layerElement.removeChild(r[0]);
                    this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
                }
                this.initialized = !0, this.pathMasker = e
            }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                this.initialized || this.initialize();
                for (var e, i, a = this.paths.length, r = 0; r < a; r += 1)
                    if (-1 !== this.paths[r].m && (l = this.elem.maskManager.viewData[this.paths[r].m], e = this.paths[r].p, (t || this.filterManager._mdf || l.prop._mdf) && e.setAttribute("d", l.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || l.prop._mdf)) {
                        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                            for (var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), n = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), o = e.getTotalLength(), h = "0 0 0 " + o * s + " ", l = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01, p = Math.floor(o * (n - s) / l), c = 0; c < p; c += 1) h += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                            h += "0 " + 10 * o + " 0 0"
                        } else h = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                        e.setAttribute("stroke-dasharray", h)
                    }(t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), 1 !== this.filterManager.effectElements[10].p.v && 2 !== this.filterManager.effectElements[10].p.v || (t || this.filterManager.effectElements[3].p._mdf) && (i = this.filterManager.effectElements[3].p.v, this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * i[0]) + "," + bmFloor(255 * i[1]) + "," + bmFloor(255 * i[2]) + ")"))
            }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                var e, i, a, r;
                (t || this.filterManager._mdf) && (r = this.filterManager.effectElements[0].p.v, e = this.filterManager.effectElements[1].p.v, a = (i = this.filterManager.effectElements[2].p.v)[0] + " " + e[0] + " " + r[0], t = i[1] + " " + e[1] + " " + r[1], r = i[2] + " " + e[2] + " " + r[2], this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", t), this.feFuncB.setAttribute("tableValues", r))
            }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) { t = createNS(t); return t.setAttribute("type", "table"), e.appendChild(t), t }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, a, r) { for (var s, n = 0, o = Math.min(t, e), h = Math.max(t, e), l = Array.call(null, { length: 256 }), p = 0, c = r - a, m = e - t; n <= 256;) s = (s = n / 256) <= o ? m < 0 ? r : a : h <= s ? m < 0 ? a : r : a + c * Math.pow((s - t) / m, 1 / i), l[p] = s, p += 1, n += 256 / 255; return l.join(" ") }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                var e, i;
                (t || this.filterManager._mdf) && (i = this.filterManager.effectElements, this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e)))
            }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
                var e, i;
                (t || this.filterManager._mdf) && ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), (t || this.filterManager.effectElements[0].p._mdf) && (i = this.filterManager.effectElements[0].p.v, this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * i[0]), Math.round(255 * i[1]), Math.round(255 * i[2])))), (t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), (t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) && (e = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, t = e * Math.cos(i), i = e * Math.sin(i), this.feOffset.setAttribute("dx", t), this.feOffset.setAttribute("dy", i)))
            };
            var _svgMatteSymbols = [];

            function SVGMatte3Effect(t, e, i) { this.initialized = !1, this.filterManager = e, this.filterElem = t, (this.elem = i).matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement }

            function SVGEffects(t) {
                var e, i, a = t.data.ef ? t.data.ef.length : 0,
                    r = createElementID(),
                    s = filtersFactory.createFilter(r),
                    n = 0;
                for (this.filters = [], e = 0; e < a; e += 1) i = null, 20 === t.data.ef[e].ty ? (n += 1, i = new SVGTintFilter(s, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, i = new SVGFillFilter(s, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, i = new SVGTritoneFilter(s, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, i = new SVGProLevelsFilter(s, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, i = new SVGDropShadowEffect(s, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(s, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, i = new SVGGaussianBlurEffect(s, t.effectsManager.effectElements[e])), i && this.filters.push(i);
                n && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this)
            }

            function CVContextData() {
                var t;
                this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
                for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
                this._length = 15
            }

            function CVBaseElement() {}

            function CVImageElement(t, e, i) { this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, i) }

            function CVCompElement(t, e, i) { this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

            function CVMaskElement(t, e) {
                this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                for (var i = this.masksProperties.length, a = !1, r = 0; r < i; r += 1) "n" !== this.masksProperties[r].mode && (a = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
                (this.hasMasks = a) && this.element.addRenderableComponent(this)
            }

            function CVShapeElement(t, e, i) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i) }

            function CVSolidElement(t, e, i) { this.initElement(t, e, i) }

            function CVTextElement(t, e, i) { this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, i) }

            function CVEffects() {}

            function HBaseElement() {}

            function HSolidElement(t, e, i) { this.initElement(t, e, i) }

            function HCompElement(t, e, i) { this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

            function HShapeElement(t, e, i) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 } }

            function HTextElement(t, e, i) { this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i) }

            function HImageElement(t, e, i) { this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i) }

            function HCameraElement(t, e, i) {
                this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
                i = PropertyFactory.getProp;
                if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to)
                    for (var a = t.ks.or.k.length, r = 0; r < a; r += 1) t.ks.or.k[r].to = null, t.ks.or.k[r].ti = null;
                this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = { mProp: this }
            }

            function HEffects() {} SVGMatte3Effect.prototype.findSymbol = function(t) {
                for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
                    if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                    e += 1
                }
                return null
            }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                var i = t.layerElement.parentNode;
                if (i) {
                    for (var a, r = i.children, s = 0, n = r.length; s < n && r[s] !== t.layerElement;) s += 1;
                    s <= n - 2 && (a = r[s + 1]);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + e), a ? i.insertBefore(o, a) : i.appendChild(o)
                }
            }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                var i, a, r, s;
                this.findSymbol(e) || (i = createElementID(), (a = createNS("mask")).setAttribute("id", e.layerId), a.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e), (r = t.globalData.defs).appendChild(a), (s = createNS("symbol")).setAttribute("id", i), this.replaceInParent(e, i), s.appendChild(e.layerElement), r.appendChild(s), (s = createNS("use")).setAttribute("href", "#" + i), a.appendChild(s), e.data.hd = !1, e.show()), t.setMatte(e.layerId)
            }, SVGMatte3Effect.prototype.initialize = function() {
                for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, a = e.length; i < a;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
                this.initialized = !0
            }, SVGMatte3Effect.prototype.renderFrame = function() { this.initialized || this.initialize() }, SVGEffects.prototype.renderFrame = function(t) { for (var e = this.filters.length, i = 0; i < e; i += 1) this.filters[i].renderFrame(t) }, CVContextData.prototype.duplicate = function() {
                var t = 2 * this._length,
                    e = this.savedOp;
                this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                for (var i = 0, i = this._length; i < t; i += 1) this.saved[i] = createTypedArray("float32", 16);
                this._length = t
            }, CVContextData.prototype.reset = function() { this.cArrPos = 0, this.cTr.reset(), this.cO = 1 }, CVBaseElement.prototype = {
                createElements: function() {},
                initRendererElement: function() {},
                createContainerElements: function() { this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this) },
                createContent: function() {},
                setBlendMode: function() {
                    var t, e = this.globalData;
                    e.blendMode !== this.data.bm && (e.blendMode = this.data.bm, t = getBlendMode(this.data.bm), e.canvasContext.globalCompositeOperation = t)
                },
                createRenderableComponents: function() { this.maskManager = new CVMaskElement(this.data, this) },
                hideElement: function() { this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0) },
                showElement: function() { this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0) },
                renderFrame: function() {
                    var t;
                    this.hidden || this.data.hd || (this.renderTransform(), this.renderRenderable(), this.setBlendMode(), t = 0 === this.data.ty, this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                destroy: function() { this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy() },
                mHelper: new Matrix
            }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() { var t, e, i, a, r, s, n, o, h;!this.img.width || this.assetData.w === this.img.width && this.assetData.h === this.img.height || ((t = createTag("canvas")).width = this.assetData.w, t.height = this.assetData.h, e = t.getContext("2d"), i = this.img.width, a = this.img.height, s = this.assetData.w / this.assetData.h, h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio, s < (r = i / a) && "xMidYMid slice" === h || r < s && "xMidYMid slice" !== h ? n = (o = a) * s : o = (n = i) / s, e.drawImage(this.img, (i - n) / 2, (a - o) / 2, n, o, 0, 0, this.assetData.w, this.assetData.h), this.img = t) }, CVImageElement.prototype.renderInnerContent = function() { this.canvasContext.drawImage(this.img, 0, 0) }, CVImageElement.prototype.destroy = function() { this.img = null }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                var t = this.canvasContext;
                t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip();
                for (var e = this.layers.length - 1; 0 <= e; --e)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }, CVCompElement.prototype.destroy = function() {
                for (var t = this.layers.length - 1; 0 <= t; --t) this.elements[t] && this.elements[t].destroy();
                this.layers = null, this.elements = null
            }, CVMaskElement.prototype.renderFrame = function() {
                if (this.hasMasks) {
                    var t, e, i, a, r = this.element.finalTransform.mat,
                        s = this.element.canvasContext,
                        n = this.masksProperties.length;
                    for (s.beginPath(), t = 0; t < n; t += 1)
                        if ("n" !== this.masksProperties[t].mode) {
                            this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), a = this.viewData[t].v, e = r.applyToPointArray(a.v[0][0], a.v[0][1], 0), s.moveTo(e[0], e[1]);
                            for (var o = a._length, h = 1; h < o; h += 1) i = r.applyToTriplePoints(a.o[h - 1], a.i[h], a.v[h]), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                            i = r.applyToTriplePoints(a.o[h - 1], a.i[0], a.v[0]), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                        } this.element.globalData.renderer.save(!0), s.clip()
                }
            }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() { this.element = null }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() { this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []) }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                var i = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: !0 === t.hd },
                    a = {};
                return "fl" === t.ty || "st" === t.ty ? (a.c = PropertyFactory.getProp(this, t.c, 1, 255, this), a.c.k || (i.co = "rgb(" + bmFloor(a.c.v[0]) + "," + bmFloor(a.c.v[1]) + "," + bmFloor(a.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (a.s = PropertyFactory.getProp(this, t.s, 1, null, this), a.e = PropertyFactory.getProp(this, t.e, 1, null, this), a.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, .01, this), a.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), a.g = new GradientProperty(this, t.g, this)), a.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty ? (i.lc = this.lcEnum[t.lc] || "round", i.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (i.ml = t.ml), a.w = PropertyFactory.getProp(this, t.w, 0, null, this), a.w.k || (i.wi = a.w.v), t.d && (e = new DashProperty(this, t.d, "canvas", this), a.d = e, a.d.k || (i.da = a.d.dashArray, i.do = a.d.dashoffset[0]))) : i.r = 2 === t.r ? "evenodd" : "nonzero", this.stylesList.push(i), a.style = i, a
            }, CVShapeElement.prototype.createGroupElement = function() { return { it: [], prevViewData: [] } }, CVShapeElement.prototype.createTransformElement = function(t) { return { transform: { opacity: 1, _opMdf: !1, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, t.o, 0, .01, this), mProps: TransformPropertyFactory.getTransformProperty(this, t, this) } } }, CVShapeElement.prototype.createShapeElement = function(t) { t = new CVShapeData(this, t, this.stylesList, this.transformsManager); return this.shapes.push(t), this.addShapeToModifiers(t), t }, CVShapeElement.prototype.reloadShapes = function() {
                this._isFirstFrame = !0;
                for (var t = this.itemsData.length, e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
            }, CVShapeElement.prototype.addTransformToStyleList = function(t) { for (var e = this.stylesList.length, i = 0; i < e; i += 1) this.stylesList[i].closed || this.stylesList[i].transforms.push(t) }, CVShapeElement.prototype.removeTransformFromStyleList = function() { for (var t = this.stylesList.length, e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop() }, CVShapeElement.prototype.closeStyles = function(t) { for (var e = t.length, i = 0; i < e; i += 1) t[i].closed = !0 }, CVShapeElement.prototype.searchShapes = function(t, e, i, a, r) {
                for (var s, n, o, h, l, p = t.length - 1, c = [], m = [], d = [].concat(r), f = p; 0 <= f; --f) {
                    if ((o = this.searchProcessedElement(t[f])) ? e[f] = i[o - 1] : t[f]._shouldRender = a, "fl" === t[f].ty || "st" === t[f].ty || "gf" === t[f].ty || "gs" === t[f].ty) o ? e[f].style.closed = !1 : e[f] = this.createStyleElement(t[f], d), c.push(e[f].style);
                    else if ("gr" === t[f].ty) {
                        if (o)
                            for (n = e[f].it.length, s = 0; s < n; s += 1) e[f].prevViewData[s] = e[f].it[s];
                        else e[f] = this.createGroupElement(t[f]);
                        this.searchShapes(t[f].it, e[f].it, e[f].prevViewData, a, d)
                    } else "tr" === t[f].ty ? (o || (l = this.createTransformElement(t[f]), e[f] = l), d.push(e[f]), this.addTransformToStyleList(e[f])) : "sh" === t[f].ty || "rc" === t[f].ty || "el" === t[f].ty || "sr" === t[f].ty ? o || (e[f] = this.createShapeElement(t[f])) : "tm" === t[f].ty || "rd" === t[f].ty || "pb" === t[f].ty ? (o ? (h = e[f]).closed = !1 : ((h = ShapeModifiers.getModifier(t[f].ty)).init(this, t[f]), e[f] = h, this.shapeModifiers.push(h)), m.push(h)) : "rp" === t[f].ty && (o ? (h = e[f]).closed = !0 : (h = ShapeModifiers.getModifier(t[f].ty), (e[f] = h).init(this, t, f, e), this.shapeModifiers.push(h), a = !1), m.push(h));
                    this.addProcessedElement(t[f], f + 1)
                }
                for (this.removeTransformFromStyleList(), this.closeStyles(c), p = m.length, f = 0; f < p; f += 1) m[f].closed = !0
            }, CVShapeElement.prototype.renderInnerContent = function() { this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0) }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
            }, CVShapeElement.prototype.drawLayer = function() {
                for (var t, e, i, a, r, s, n, o, h = this.stylesList.length, l = this.globalData.renderer, p = this.globalData.canvasContext, c = 0; c < h; c += 1)
                    if (("st" !== (n = (o = this.stylesList[c]).type) && "gs" !== n || 0 !== o.wi) && o.data._shouldRender && 0 !== o.coOp && 0 !== this.globalData.currentGlobalAlpha) { for (l.save(), r = o.elements, "st" === n || "gs" === n ? (p.strokeStyle = "st" === n ? o.co : o.grd, p.lineWidth = o.wi, p.lineCap = o.lc, p.lineJoin = o.lj, p.miterLimit = o.ml || 0) : p.fillStyle = "fl" === n ? o.co : o.grd, l.ctxOpacity(o.coOp), "st" !== n && "gs" !== n && p.beginPath(), l.ctxTransform(o.preTransforms.finalTransform.props), e = r.length, t = 0; t < e; t += 1) { for ("st" !== n && "gs" !== n || (p.beginPath(), o.da && (p.setLineDash(o.da), p.lineDashOffset = o.do)), a = (s = r[t].trNodes).length, i = 0; i < a; i += 1) "m" === s[i].t ? p.moveTo(s[i].p[0], s[i].p[1]) : "c" === s[i].t ? p.bezierCurveTo(s[i].pts[0], s[i].pts[1], s[i].pts[2], s[i].pts[3], s[i].pts[4], s[i].pts[5]) : p.closePath(); "st" !== n && "gs" !== n || (p.stroke(), o.da && p.setLineDash(this.dashResetter)) } "st" !== n && "gs" !== n && p.fill(o.r), l.restore() }
            }, CVShapeElement.prototype.renderShape = function(t, e, i, a) {
                for (var r = t, s = e.length - 1; 0 <= s; --s) "tr" === e[s].ty ? (r = i[s].transform, this.renderShapeTransform(t, r)) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], i[s]) : "fl" === e[s].ty ? this.renderFill(e[s], i[s], r) : "st" === e[s].ty ? this.renderStroke(e[s], i[s], r) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], i[s], r) : "gr" === e[s].ty ? this.renderShape(r, e[s].it, i[s].it) : e[s].ty;
                a && this.drawLayer()
            }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                    var i, a, r = t.trNodes,
                        s = e.paths,
                        n = s._length;
                    r.length = 0;
                    for (var o = t.transforms.finalTransform, h = 0; h < n; h += 1) {
                        var l = s.shapes[h];
                        if (l && l.v) {
                            for (a = l._length, i = 1; i < a; i += 1) 1 === i && r.push({ t: "m", p: o.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), r.push({ t: "c", pts: o.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i]) });
                            1 === a && r.push({ t: "m", p: o.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), l.c && a && (r.push({ t: "c", pts: o.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0]) }), r.push({ t: "z" }))
                        }
                    }
                    t.trNodes = r
                }
            }, CVShapeElement.prototype.renderPath = function(t, e) {
                if (!0 !== t.hd && t._shouldRender)
                    for (var i = e.styledShapes.length, a = 0; a < i; a += 1) this.renderStyledShape(e.styledShapes[a], e.sh)
            }, CVShapeElement.prototype.renderFill = function(t, e, i) {
                var a = e.style;
                (e.c._mdf || this._isFirstFrame) && (a.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (a.coOp = e.o.v * i.opacity)
            }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
                var a = e.style;
                if (!a.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                    var r, s, n, o, h = this.globalData.canvasContext,
                        l = e.s.v,
                        p = e.e.v;
                    o = 1 === t.t ? h.createLinearGradient(l[0], l[1], p[0], p[1]) : (r = Math.sqrt(Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)), s = Math.atan2(p[1] - l[1], p[0] - l[0]), 1 <= (n = e.h.v) ? n = .99 : n <= -1 && (n = -.99), p = r * n, n = Math.cos(s + e.a.v) * p + l[0], p = Math.sin(s + e.a.v) * p + l[1], h.createRadialGradient(n, p, 0, l[0], l[1], r));
                    for (var c = t.g.p, m = e.g.c, d = 1, f = 0; f < c; f += 1) e.g._hasOpacity && e.g._collapsable && (d = e.g.o[2 * f + 1]), o.addColorStop(m[4 * f] / 100, "rgba(" + m[4 * f + 1] + "," + m[4 * f + 2] + "," + m[4 * f + 3] + "," + d + ")");
                    a.grd = o
                }
                a.coOp = e.o.v * i.opacity
            }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
                var a = e.style,
                    r = e.d;
                r && (r._mdf || this._isFirstFrame) && (a.da = r.dashArray, a.do = r.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (a.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (a.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (a.wi = e.w.v)
            }, CVShapeElement.prototype.destroy = function() { this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0 }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                var t = this.canvasContext;
                t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = !1;
                t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                e = !1;
                t.sc && (e = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                var i, a, r, s, n, o, h, l, p, c = this.globalData.fontManager.getFontByName(t.f),
                    m = t.l,
                    d = this.mHelper;
                this.stroke = e, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily;
                for (var f = t.finalText.length, u = this.data.singleShape, x = .001 * t.tr * t.finalSize, y = 0, k = 0, g = !0, v = 0, b = 0; b < f; b += 1) {
                    for (i = (i = this.globalData.fontManager.getCharData(t.finalText[b], c.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && i.data || {}, d.reset(), u && m[b].n && (y = -x, k += t.yOffset, k += g ? 1 : 0, g = !1), o = (s = i.shapes ? i.shapes[0].it : []).length, d.scale(t.finalSize / 100, t.finalSize / 100), u && this.applyTextPropertiesToMatrix(t, d, m[b].line, y, k), l = createSizedArray(o), n = 0; n < o; n += 1) {
                        for (r = s[n].ks.k.i.length, h = s[n].ks.k, p = [], a = 1; a < r; a += 1) 1 === a && p.push(d.applyToX(h.v[0][0], h.v[0][1], 0), d.applyToY(h.v[0][0], h.v[0][1], 0)), p.push(d.applyToX(h.o[a - 1][0], h.o[a - 1][1], 0), d.applyToY(h.o[a - 1][0], h.o[a - 1][1], 0), d.applyToX(h.i[a][0], h.i[a][1], 0), d.applyToY(h.i[a][0], h.i[a][1], 0), d.applyToX(h.v[a][0], h.v[a][1], 0), d.applyToY(h.v[a][0], h.v[a][1], 0));
                        p.push(d.applyToX(h.o[a - 1][0], h.o[a - 1][1], 0), d.applyToY(h.o[a - 1][0], h.o[a - 1][1], 0), d.applyToX(h.i[0][0], h.i[0][1], 0), d.applyToY(h.i[0][0], h.i[0][1], 0), d.applyToX(h.v[0][0], h.v[0][1], 0), d.applyToY(h.v[0][0], h.v[0][1], 0)), l[n] = p
                    }
                    u && (y += m[b].l, y += x), this.textSpans[v] ? this.textSpans[v].elem = l : this.textSpans[v] = { elem: l }, v += 1
                }
            }, CVTextElement.prototype.renderInnerContent = function() {
                var t, e, i, a, r = this.canvasContext;
                r.font = this.values.fValue, r.lineCap = "butt", r.lineJoin = "miter", r.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                for (var s, n, o, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l, p = l.length, c = null, m = null, d = null, f = 0; f < p; f += 1)
                    if (!l[f].n) {
                        if ((s = h[f]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(s.p), this.globalData.renderer.ctxOpacity(s.o)), this.fill) {
                            for (s && s.fc ? c !== s.fc && (c = s.fc, r.fillStyle = s.fc) : c !== this.values.fill && (c = this.values.fill, r.fillStyle = this.values.fill), e = (n = this.textSpans[f].elem).length, this.globalData.canvasContext.beginPath(), t = 0; t < e; t += 1)
                                for (a = (o = n[t]).length, this.globalData.canvasContext.moveTo(o[0], o[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(o[i], o[i + 1], o[i + 2], o[i + 3], o[i + 4], o[i + 5]);
                            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                        }
                        if (this.stroke) {
                            for (s && s.sw ? d !== s.sw && (d = s.sw, r.lineWidth = s.sw) : d !== this.values.sWidth && (d = this.values.sWidth, r.lineWidth = this.values.sWidth), s && s.sc ? m !== s.sc && (m = s.sc, r.strokeStyle = s.sc) : m !== this.values.stroke && (m = this.values.stroke, r.strokeStyle = this.values.stroke), e = (n = this.textSpans[f].elem).length, this.globalData.canvasContext.beginPath(), t = 0; t < e; t += 1)
                                for (a = (o = n[t]).length, this.globalData.canvasContext.moveTo(o[0], o[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(o[i], o[i + 1], o[i + 2], o[i + 3], o[i + 4], o[i + 5]);
                            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                        }
                        s && this.globalData.renderer.restore()
                    }
            }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
                checkBlendMode: function() {},
                initRendererElement: function() { this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement) },
                createContainerElements: function() { this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode() },
                renderElement: function() {
                    var t, e = this.transformedElement ? this.transformedElement.style : {};
                    this.finalTransform._matMdf && (t = this.finalTransform.mat.toCSS(), e.transform = t, e.webkitTransform = t), this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
                },
                renderFrame: function() { this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1)) },
                destroy: function() { this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null) },
                createRenderableComponents: function() { this.maskManager = new MaskElement(this.data, this, this.globalData) },
                addEffects: function() {},
                setMatte: function() {}
            }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                var t;
                this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
            }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() { this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                for (var i, a = 0; a < e;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
                i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
            }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                var t, e;
                this.baseElement.style.fontSize = 0, this.data.hasMask ? (this.layerElement.appendChild(this.shapesContainer), t = this.svgElement) : (t = createNS("svg"), e = this.comp.data || this.globalData.compSize, t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)), this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
            }, HShapeElement.prototype.getTransformedPoint = function(t, e) { for (var i = t.length, a = 0; a < i; a += 1) e = t[a].mProps.v.applyToPointArray(e[0], e[1], 0); return e }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                var i, a, r, s, n, o = t.sh.v,
                    h = t.transformers,
                    l = o._length;
                if (!(l <= 1)) {
                    for (i = 0; i < l - 1; i += 1) a = this.getTransformedPoint(h, o.v[i]), r = this.getTransformedPoint(h, o.o[i]), s = this.getTransformedPoint(h, o.i[i + 1]), n = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(a, r, s, n, e);
                    o.c && (a = this.getTransformedPoint(h, o.v[i]), r = this.getTransformedPoint(h, o.o[i]), s = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(a, r, s, n, e))
                }
            }, HShapeElement.prototype.checkBounds = function(t, e, i, a, r) {
                this.getBoundsOfCurve(t, e, i, a);
                a = this.shapeBoundingBox;
                r.x = bmMin(a.left, r.x), r.xMax = bmMax(a.right, r.xMax), r.y = bmMin(a.top, r.y), r.yMax = bmMax(a.bottom, r.yMax)
            }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, a) {
                for (var r, s, n, o, h = [
                        [t[0], a[0]],
                        [t[1], a[1]]
                    ], l = 0; l < 2; ++l) r = 6 * t[l] - 12 * e[l] + 6 * i[l], o = -3 * t[l] + 9 * e[l] - 9 * i[l] + 3 * a[l], n = 3 * e[l] - 3 * t[l], r |= 0, n |= 0, 0 == (o |= 0) && 0 == r || (0 == o ? 0 < (s = -n / r) && s < 1 && h[l].push(this.calculateF(s, t, e, i, a, l)) : 0 <= (s = r * r - 4 * n * o) && (0 < (n = (-r + bmSqrt(s)) / (2 * o)) && n < 1 && h[l].push(this.calculateF(n, t, e, i, a, l)), 0 < (o = (-r - bmSqrt(s)) / (2 * o)) && o < 1 && h[l].push(this.calculateF(o, t, e, i, a, l))));
                this.shapeBoundingBox.left = bmMin.apply(null, h[0]), this.shapeBoundingBox.top = bmMin.apply(null, h[1]), this.shapeBoundingBox.right = bmMax.apply(null, h[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, h[1])
            }, HShapeElement.prototype.calculateF = function(t, e, i, a, r, s) { return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * i[s] + 3 * (1 - t) * bmPow(t, 2) * a[s] + bmPow(t, 3) * r[s] }, HShapeElement.prototype.calculateBoundingBox = function(t, e) { for (var i = t.length, a = 0; a < i; a += 1) t[a] && t[a].sh ? this.calculateShapeBoundingBox(t[a], e) : t[a] && t[a].it && this.calculateBoundingBox(t[a].it, e) }, HShapeElement.prototype.currentBoxContains = function(t) { return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height }, HShapeElement.prototype.renderInnerContent = function() {
                var t, e;
                this._renderShapeFrame(), this.hidden || !this._isFirstFrame && !this._mdf || ((e = this.tempBoundingBox).x = t = 999999, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e) || (t = !1, this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), t = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), t = !0), !t && this.currentBBox.x === e.x && this.currentBBox.y === e.y || (this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.shapeCont.style, e = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)", t.transform = e, t.webkitTransform = e)))
            }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                var t;
                this.isMasked = this.checkMasks(), this.isMasked ? (this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH), t = createNS("g"), this.maskedElement.appendChild(t), this.innerElem = t) : (this.renderType = "html", this.innerElem = this.layerElement), this.checkParenting()
            }, HTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = this.innerElem.style,
                    i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                var a, r = this.globalData.fontManager.getFontByName(t.f);
                this.globalData.fontManager.chars || (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", r.fClass ? this.innerElem.className = r.fClass : (e.fontFamily = r.fFamily, a = t.fWeight, i = t.fStyle, e.fontStyle = i, e.fontWeight = a));
                for (var s, n, o, h, l, p, c, m, d = t.l, f = d.length, u = this.mHelper, x = 0, y = 0; y < f; y += 1) this.globalData.fontManager.chars ? (this.textPaths[x] ? s = this.textPaths[x] : ((s = createNS("path")).setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[x] ? o = (n = this.textSpans[x]).children[0] : ((n = createTag("div")).style.lineHeight = 0, (o = createNS("svg")).appendChild(s), styleDiv(n)))) : this.isMasked ? s = this.textPaths[x] || createNS("text") : this.textSpans[x] ? (n = this.textSpans[x], s = this.textPaths[x]) : (styleDiv(n = createTag("span")), styleDiv(s = createTag("span")), n.appendChild(s)), this.globalData.fontManager.chars ? (p = (l = this.globalData.fontManager.getCharData(t.finalText[y], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) ? l.data : null, u.reset(), p && p.shapes && (l = p.shapes[0].it, u.scale(t.finalSize / 100, t.finalSize / 100), h = this.createPathShape(u, l), s.setAttribute("d", h)), this.isMasked ? this.innerElem.appendChild(s) : (this.innerElem.appendChild(n), p && p.shapes ? (document.body.appendChild(o), m = o.getBBox(), o.setAttribute("width", m.width + 2), o.setAttribute("height", m.height + 2), o.setAttribute("viewBox", m.x - 1 + " " + (m.y - 1) + " " + (m.width + 2) + " " + (m.height + 2)), p = o.style, c = "translate(" + (m.x - 1) + "px," + (m.y - 1) + "px)", p.transform = c, p.webkitTransform = c, d[y].yOffset = m.y - 1) : (o.setAttribute("width", 1), o.setAttribute("height", 1)), n.appendChild(o))) : (s.textContent = d[y].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(s) : (this.innerElem.appendChild(n), c = s.style, m = "translate3d(0," + -t.finalSize / 1.2 + "px,0)", c.transform = m, c.webkitTransform = m)), this.isMasked ? this.textSpans[x] = s : this.textSpans[x] = n, this.textSpans[x].style.display = "block", this.textPaths[x] = s, x += 1;
                for (; x < this.textSpans.length;) this.textSpans[x].style.display = "none", x += 1
            }, HTextElement.prototype.renderInnerContent = function() {
                var t;
                if (this.data.singleShape) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                    this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style, r = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)", t.transform = r, t.webkitTransform = r)
                }
                if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                    for (var e, i, a, r, s = 0, n = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l, h = o.length, l = 0; l < h; l += 1) o[l].n ? s += 1 : (i = this.textSpans[l], a = this.textPaths[l], e = n[s], s += 1, e._mdf.m && (this.isMasked ? i.setAttribute("transform", e.m) : (i.style.webkitTransform = e.m, i.style.transform = e.m)), i.style.opacity = e.o, e.sw && e._mdf.sw && a.setAttribute("stroke-width", e.sw), e.sc && e._mdf.sc && a.setAttribute("stroke", e.sc), e.fc && e._mdf.fc && (a.setAttribute("fill", e.fc), a.style.color = e.fc));
                    this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf) && (r = this.innerElem.getBBox(), this.currentBBox.w !== r.width && (this.currentBBox.w = r.width, this.svgElement.setAttribute("width", r.width)), this.currentBBox.h !== r.height && (this.currentBBox.h = r.height, this.svgElement.setAttribute("height", r.height)), this.currentBBox.w === r.width + 2 && this.currentBBox.h === r.height + 2 && this.currentBBox.x === r.x - 1 && this.currentBBox.y === r.y - 1 || (this.currentBBox.w = r.width + 2, this.currentBBox.h = r.height + 2, this.currentBBox.x = r.x - 1, this.currentBBox.y = r.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style, r = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)", t.transform = r, t.webkitTransform = r))
                }
            }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData),
                    e = new Image;
                this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
            }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() { for (var t, e, i, a, r, s = this.comp.threeDElements.length, n = 0; n < s; n += 1) "3d" === (r = this.comp.threeDElements[n]).type && (t = r.perspectiveElem.style, e = r.container.style, i = this.pe.v + "px", a = "0px 0px 0px", r = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)", t.perspective = i, t.webkitPerspective = i, e.transformOrigin = a, e.mozTransformOrigin = a, e.webkitTransformOrigin = a, t.transform = r, t.webkitTransform = r) }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                var t, e, i = this._isFirstFrame;
                if (this.hierarchy)
                    for (h = this.hierarchy.length, l = 0; l < h; l += 1) i = this.hierarchy[l].finalTransform.mProp._mdf || i;
                if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                    if (this.mat.reset(), this.hierarchy)
                        for (l = h = this.hierarchy.length - 1; 0 <= l; --l) {
                            var a = this.hierarchy[l].finalTransform.mProp;
                            this.mat.translate(-a.p.v[0], -a.p.v[1], a.p.v[2]), this.mat.rotateX(-a.or.v[0]).rotateY(-a.or.v[1]).rotateZ(a.or.v[2]), this.mat.rotateX(-a.rx.v).rotateY(-a.ry.v).rotateZ(a.rz.v), this.mat.scale(1 / a.s.v[0], 1 / a.s.v[1], 1 / a.s.v[2]), this.mat.translate(a.a.v[0], a.a.v[1], a.a.v[2])
                        }
                    this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a && (e = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]], t = Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2)), e = [e[0] / t, e[1] / t, e[2] / t], t = Math.sqrt(e[2] * e[2] + e[0] * e[0]), t = Math.atan2(e[1], t), e = Math.atan2(e[0], -e[2]), this.mat.rotateY(e).rotateX(-t)), this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                    var r = !this._prevMat.equals(this.mat);
                    if ((r || this.pe._mdf) && this.comp.threeDElements) {
                        for (var s, n, o, h = this.comp.threeDElements.length, l = 0; l < h; l += 1) "3d" === (o = this.comp.threeDElements[l]).type && (r && (s = this.mat.toCSS(), (n = o.container.style).transform = s, n.webkitTransform = s), this.pe._mdf && ((o = o.perspectiveElem.style).perspective = this.pe.v + "px", o.webkitPerspective = this.pe.v + "px"));
                        this.mat.clone(this._prevMat)
                    }
                }
                this._isFirstFrame = !1
            }, HCameraElement.prototype.prepareFrame = function(t) { this.prepareProperties(t, !0) }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() { return null }, HEffects.prototype.renderFrame = function() {};
            var animationManager = (iya = {}, jya = [], kya = 0, lya = 0, mya = 0, nya = !0, oya = !1, iya.registerAnimation = qya, iya.loadAnimation = function(t) { var e = new AnimationItem; return uya(e, null), e.setParams(t), e }, iya.setSpeed = function(t, e) { for (var i = 0; i < lya; i += 1) jya[i].animation.setSpeed(t, e) }, iya.setDirection = function(t, e) { for (var i = 0; i < lya; i += 1) jya[i].animation.setDirection(t, e) }, iya.play = function(t) { for (var e = 0; e < lya; e += 1) jya[e].animation.play(t) }, iya.pause = function(t) { for (var e = 0; e < lya; e += 1) jya[e].animation.pause(t) }, iya.stop = function(t) { for (var e = 0; e < lya; e += 1) jya[e].animation.stop(t) }, iya.togglePause = function(t) { for (var e = 0; e < lya; e += 1) jya[e].animation.togglePause(t) }, iya.searchAnimations = function(t, e, i) {
                    for (var a, r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), s = r.length, n = 0; n < s; n += 1) i && r[n].setAttribute("data-bm-type", i), qya(r[n], t);
                    e && 0 === s && (i = i || "svg", (a = document.getElementsByTagName("body")[0]).innerText = "", (e = createTag("div")).style.width = "100%", e.style.height = "100%", e.setAttribute("data-bm-type", i), a.appendChild(e), qya(e, t))
                }, iya.resize = function() { for (var t = 0; t < lya; t += 1) jya[t].animation.resize() }, iya.goToAndStop = function(t, e, i) { for (var a = 0; a < lya; a += 1) jya[a].animation.goToAndStop(t, e, i) }, iya.destroy = function(t) { for (var e = lya - 1; 0 <= e; --e) jya[e].animation.destroy(t) }, iya.freeze = function() { oya = !0 }, iya.unfreeze = function() { oya = !1, Iya() }, iya.setVolume = function(t, e) { for (var i = 0; i < lya; i += 1) jya[i].animation.setVolume(t, e) }, iya.mute = function(t) { for (var e = 0; e < lya; e += 1) jya[e].animation.mute(t) }, iya.unmute = function(t) { for (var e = 0; e < lya; e += 1) jya[e].animation.unmute(t) }, iya.getRegisteredAnimations = function() { for (var t = jya.length, e = [], i = 0; i < t; i += 1) e.push(jya[i].animation); return e }, iya),
                iya, jya, kya, lya, mya, nya, oya;

            function pya(t) { for (var e = 0, i = t.target; e < lya;) jya[e].animation === i && (jya.splice(e, 1), --e, --lya, i.isPaused || tya()), e += 1 }

            function qya(t, e) {
                if (!t) return null;
                for (var i = 0; i < lya;) {
                    if (jya[i].elem === t && null !== jya[i].elem) return jya[i].animation;
                    i += 1
                }
                var a = new AnimationItem;
                return uya(a, t), a.setData(t, e), a
            }

            function sya() { mya += 1, Iya() }

            function tya() {--mya }

            function uya(t, e) { t.addEventListener("destroy", pya), t.addEventListener("_active", sya), t.addEventListener("_idle", tya), jya.push({ elem: e, animation: t }), lya += 1 }

            function zya(t) {
                for (var e = t - kya, i = 0; i < lya; i += 1) jya[i].animation.advanceTime(e);
                kya = t, mya && !oya ? window.requestAnimationFrame(zya) : nya = !0
            }

            function Aya(t) { kya = t, window.requestAnimationFrame(zya) }

            function Iya() {!oya && mya && nya && (window.requestAnimationFrame(Aya), nya = !1) }
            var AnimationItem = function() { this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory() };
            extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                var e = "svg";
                switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
                    case "canvas":
                        this.renderer = new CanvasRenderer(this, t.rendererSettings);
                        break;
                    case "svg":
                        this.renderer = new SVGRenderer(this, t.rendererSettings);
                        break;
                    default:
                        this.renderer = new HybridRenderer(this, t.rendererSettings)
                }
                this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name || "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() { this.trigger("data_failed") }.bind(this)))
            }, AnimationItem.prototype.setData = function(t, e) {
                var i = { wrapper: t, animationData: e = e && "object" != typeof e ? JSON.parse(e) : e },
                    e = t.attributes;
                i.path = e.getNamedItem("data-animation-path") ? e.getNamedItem("data-animation-path").value : e.getNamedItem("data-bm-path") ? e.getNamedItem("data-bm-path").value : e.getNamedItem("bm-path") ? e.getNamedItem("bm-path").value : "", i.animType = e.getNamedItem("data-anim-type") ? e.getNamedItem("data-anim-type").value : e.getNamedItem("data-bm-type") ? e.getNamedItem("data-bm-type").value : e.getNamedItem("bm-type") ? e.getNamedItem("bm-type").value : e.getNamedItem("data-bm-renderer") ? e.getNamedItem("data-bm-renderer").value : e.getNamedItem("bm-renderer") ? e.getNamedItem("bm-renderer").value : "canvas";
                t = e.getNamedItem("data-anim-loop") ? e.getNamedItem("data-anim-loop").value : e.getNamedItem("data-bm-loop") ? e.getNamedItem("data-bm-loop").value : e.getNamedItem("bm-loop") ? e.getNamedItem("bm-loop").value : "";
                "false" === t ? i.loop = !1 : "true" === t ? i.loop = !0 : "" !== t && (i.loop = parseInt(t, 10));
                t = e.getNamedItem("data-anim-autoplay") ? e.getNamedItem("data-anim-autoplay").value : e.getNamedItem("data-bm-autoplay") ? e.getNamedItem("data-bm-autoplay").value : !e.getNamedItem("bm-autoplay") || e.getNamedItem("bm-autoplay").value;
                i.autoplay = "false" !== t, i.name = e.getNamedItem("data-name") ? e.getNamedItem("data-name").value : e.getNamedItem("data-bm-name") ? e.getNamedItem("data-bm-name").value : e.getNamedItem("bm-name") ? e.getNamedItem("bm-name").value : "", "false" === (e.getNamedItem("data-anim-prerender") ? e.getNamedItem("data-anim-prerender").value : e.getNamedItem("data-bm-prerender") ? e.getNamedItem("data-bm-prerender").value : e.getNamedItem("bm-prerender") ? e.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i)
            }, AnimationItem.prototype.includeLayers = function(t) {
                t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                for (var e, i = this.animationData.layers, a = i.length, r = t.layers, s = r.length, n = 0; n < s; n += 1)
                    for (e = 0; e < a;) { if (i[e].id === r[n].id) { i[e] = r[n]; break } e += 1 }
                if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                    for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
                this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
            }, AnimationItem.prototype.loadNextSegment = function() {
                var t = this.animationData.segments;
                if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                t = t.shift();
                this.timeCompleted = t.time * this.frameRate;
                t = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1, assetLoader.load(t, this.includeLayers.bind(this), function() { this.trigger("data_failed") }.bind(this))
            }, AnimationItem.prototype.loadSegments = function() { this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment() }, AnimationItem.prototype.imagesLoaded = function() { this.trigger("loaded_images"), this.checkLoaded() }, AnimationItem.prototype.preloadImages = function() { this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this)) }, AnimationItem.prototype.configAnimation = function(t) { if (this.renderer) try { this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause() } catch (t) { this.triggerConfigError(t) } }, AnimationItem.prototype.waitForFontsLoaded = function() { this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20)) }, AnimationItem.prototype.checkLoaded = function() { this.isLoaded || !this.renderer.globalData.fontManager.isLoaded || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() { this.trigger("DOMLoaded") }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()) }, AnimationItem.prototype.resize = function() { this.renderer.updateContainerSize() }, AnimationItem.prototype.setSubframe = function(t) { this.isSubframeEnabled = !!t }, AnimationItem.prototype.gotoFrame = function() { this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame() }, AnimationItem.prototype.renderFrame = function() { if (!1 !== this.isLoaded) try { this.renderer.renderFrame(this.currentFrame + this.firstFrame) } catch (t) { this.triggerRenderFrameError(t) } }, AnimationItem.prototype.play = function(t) { t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active"))) }, AnimationItem.prototype.pause = function(t) { t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause()) }, AnimationItem.prototype.togglePause = function(t) { t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause()) }, AnimationItem.prototype.stop = function(t) { t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0)) }, AnimationItem.prototype.goToAndStop = function(t, e, i) { i && this.name !== i || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause()) }, AnimationItem.prototype.goToAndPlay = function(t, e, i) { this.goToAndStop(t, e, i), this.play() }, AnimationItem.prototype.advanceTime = function(t) { var e;!0 !== this.isPaused && !1 !== this.isLoaded && (e = !1, (t = this.currentRawFrame + t * this.frameModifier) >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (e = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (e = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), e && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))) }, AnimationItem.prototype.adjustSegment = function(t, e) { this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart") }, AnimationItem.prototype.setSegment = function(t, e) {
                var i = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
            }, AnimationItem.prototype.playSegments = function(t, e) {
                if (e && (this.segments.length = 0), "object" == typeof t[0])
                    for (var i = t.length, a = 0; a < i; a += 1) this.segments.push(t[a]);
                else this.segments.push(t);
                this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
            }, AnimationItem.prototype.resetSegments = function(t) { this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0) }, AnimationItem.prototype.checkSegments = function(t) { return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0) }, AnimationItem.prototype.destroy = function(t) { t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null) }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) { this.currentRawFrame = t, this.gotoFrame() }, AnimationItem.prototype.setSpeed = function(t) { this.playSpeed = t, this.updaFrameModifier() }, AnimationItem.prototype.setDirection = function(t) { this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier() }, AnimationItem.prototype.setVolume = function(t, e) { e && this.name !== e || this.audioController.setVolume(t) }, AnimationItem.prototype.getVolume = function() { return this.audioController.getVolume() }, AnimationItem.prototype.mute = function(t) { t && this.name !== t || this.audioController.mute() }, AnimationItem.prototype.unmute = function(t) { t && this.name !== t || this.audioController.unmute() }, AnimationItem.prototype.updaFrameModifier = function() { this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection) }, AnimationItem.prototype.getPath = function() { return this.path }, AnimationItem.prototype.getAssetsPath = function(t) { var e, i = ""; return t.e ? i = t.p : this.assetsPath ? (-1 !== (e = t.p).indexOf("images/") && (e = e.split("/")[1]), i = this.assetsPath + e) : (i = this.path, i += t.u || "", i += t.p), i }, AnimationItem.prototype.getAssetData = function(t) {
                for (var e = 0, i = this.assets.length; e < i;) {
                    if (t === this.assets[e].id) return this.assets[e];
                    e += 1
                }
                return null
            }, AnimationItem.prototype.hide = function() { this.renderer.hide() }, AnimationItem.prototype.show = function() { this.renderer.show() }, AnimationItem.prototype.getDuration = function(t) { return t ? this.totalFrames : this.totalFrames / this.frameRate }, AnimationItem.prototype.trigger = function(t) {
                if (this._cbs && this._cbs[t]) switch (t) {
                    case "enterFrame":
                        this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                        break;
                    case "loopComplete":
                        this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(t, new BMDestroyEvent(t, this));
                        break;
                    default:
                        this.triggerEvent(t)
                }
                "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
            }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                t = new BMRenderFrameErrorEvent(t, this.currentFrame);
                this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
            }, AnimationItem.prototype.triggerConfigError = function(t) {
                t = new BMConfigErrorEvent(t, this.currentFrame);
                this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
            };
            var Expressions = (aBa = {}, aBa.initExpressions = function(t) {
                    var e = 0,
                        i = [];
                    t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() { e += 1 }, t.renderer.globalData.popExpression = function() {
                        0 === --e && function() {
                            var t, e = i.length;
                            for (t = 0; t < e; t += 1) i[t].release();
                            i.length = 0
                        }()
                    }, t.renderer.globalData.registerExpressionProperty = function(t) {-1 === i.indexOf(t) && i.push(t) }
                }, aBa),
                aBa, expressionsPlugin = Expressions,
                ExpressionManager = function() {
                    var ob = {},
                        Math = BMMath,
                        window = null,
                        document = null;

                    function $bm_isInstanceOfArray(t) { return t.constructor === Array || t.constructor === Float32Array }

                    function isNumerable(t, e) { return "number" === t || "boolean" === t || "string" === t || e instanceof Number }

                    function $bm_neg(t) { var e = typeof t; if ("number" == e || "boolean" == e || t instanceof Number) return -t; if ($bm_isInstanceOfArray(t)) { for (var i = t.length, a = [], r = 0; r < i; r += 1) a[r] = -t[r]; return a } return t.propType ? t.v : -t }
                    var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                        easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                        easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                    function sum(t, e) {
                        var i = typeof t,
                            a = typeof e;
                        if ("string" == i || "string" == a) return t + e;
                        if (isNumerable(i, t) && isNumerable(a, e)) return t + e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) return (t = t.slice(0))[0] += e, t;
                        if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) { for (var r = 0, s = t.length, n = e.length, o = []; r < s || r < n;)("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? o[r] = t[r] + e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1; return o }
                        return 0
                    }
                    var add = sum;

                    function sub(t, e) {
                        var i = typeof t,
                            a = typeof e;
                        if (isNumerable(i, t) && isNumerable(a, e)) return (t = "string" == i ? parseInt(t, 10) : t) - (e = "string" == a ? parseInt(e, 10) : e);
                        if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) return (t = t.slice(0))[0] -= e, t;
                        if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) { for (var r = 0, s = t.length, n = e.length, o = []; r < s || r < n;)("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? o[r] = t[r] - e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1; return o }
                        return 0
                    }

                    function mul(t, e) {
                        var i, a, r, s = typeof t,
                            n = typeof e;
                        if (isNumerable(s, t) && isNumerable(n, e)) return t * e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) { for (r = t.length, i = createTypedArray("float32", r), a = 0; a < r; a += 1) i[a] = t[a] * e; return i }
                        if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) { for (r = e.length, i = createTypedArray("float32", r), a = 0; a < r; a += 1) i[a] = t * e[a]; return i }
                        return 0
                    }

                    function div(t, e) {
                        var i, a, r, s = typeof t,
                            n = typeof e;
                        if (isNumerable(s, t) && isNumerable(n, e)) return t / e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) { for (r = t.length, i = createTypedArray("float32", r), a = 0; a < r; a += 1) i[a] = t[a] / e; return i }
                        if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) { for (r = e.length, i = createTypedArray("float32", r), a = 0; a < r; a += 1) i[a] = t / e[a]; return i }
                        return 0
                    }

                    function mod(t, e) { return (t = "string" == typeof t ? parseInt(t, 10) : t) % (e = "string" == typeof e ? parseInt(e, 10) : e) }
                    var $bm_sum = sum,
                        $bm_sub = sub,
                        $bm_mul = mul,
                        $bm_div = div,
                        $bm_mod = mod;

                    function clamp(t, e, i) { var a; return i < e && (a = i, i = e, e = a), Math.min(Math.max(t, e), i) }

                    function radiansToDegrees(t) { return t / degToRads }
                    var radians_to_degrees = radiansToDegrees;

                    function degreesToRadians(t) { return t * degToRads }
                    var degrees_to_radians = radiansToDegrees,
                        helperLengthArray = [0, 0, 0, 0, 0, 0];

                    function length(t, e) { if ("number" == typeof t || t instanceof Number) return Math.abs(t - (e = e || 0)); for (var i = Math.min(t.length, (e = e || helperLengthArray).length), a = 0, r = 0; r < i; r += 1) a += Math.pow(e[r] - t[r], 2); return Math.sqrt(a) }

                    function normalize(t) { return div(t, length(t)) }

                    function rgbToHsl(t) {
                        var e = t[0],
                            i = t[1],
                            a = t[2],
                            r = Math.max(e, i, a),
                            s = Math.min(e, i, a);
                        if (r === s) 0;
                        else {
                            switch (r) {
                                case e:
                                    0;
                                    break;
                                case i:
                                    0;
                                    break;
                                case a:
                                    0
                            }
                            0
                        }
                        return t[3], 1
                    }

                    function hue2rgb(t, e, i) { return i < 0 && (i += 1), 1 < i && --i, i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t }

                    function hslToRgb(t) {
                        var e = t[0],
                            i = t[1],
                            a = t[2];
                        return 0 === i ? 0 : (hue2rgb(i = 2 * a - (a = a < .5 ? a * (1 + i) : a + i - a * i), a, e + 1 / 3), hue2rgb(i, a, e), hue2rgb(i, a, e - 1 / 3)), t[3], 1
                    }

                    function linear(t, e, i, a, r) { var s; if (void 0 !== a && void 0 !== r || (a = e, r = i, e = 0, i = 1), i < e && (s = i, i = e, e = s), t <= e) return a; if (i <= t) return r; var n = i === e ? 0 : (t - e) / (i - e); if (!a.length) return a + (r - a) * n; for (var o = a.length, h = createTypedArray("float32", o), l = 0; l < o; l += 1) h[l] = a[l] + (r[l] - a[l]) * n; return h }

                    function random(t, e) {
                        if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                            var i = e.length;
                            t = t || createTypedArray("float32", i);
                            for (var a = createTypedArray("float32", i), r = BMMath.random(), s = 0; s < i; s += 1) a[s] = t[s] + r * (e[s] - t[s]);
                            return a
                        }
                        return (t = void 0 === t ? 0 : t) + BMMath.random() * (e - t)
                    }

                    function createPath(t, e, i, a) {
                        var r = t.length,
                            s = shapePool.newElement();
                        s.setPathData(!!a, r);
                        for (var n, o, h = [0, 0], l = 0; l < r; l += 1) n = e && e[l] ? e[l] : h, o = i && i[l] ? i[l] : h, s.setTripleAt(t[l][0], t[l][1], o[0] + t[l][0], o[1] + t[l][1], n[0] + t[l][0], n[1] + t[l][1], l, !0);
                        return s
                    }

                    function initiateExpression(elem, data, property) {
                        var val = data.x,
                            needsVelocity = /velocity(?![\w\d])/.test(val),
                            _needsRandom = -1 !== val.indexOf("random"),
                            elemType = elem.data.ty,
                            transform, $bm_transform, content, effect, thisProperty = property;
                        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() { return thisProperty.v } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                        var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                            outPoint = elem.data.op / elem.comp.globalData.frameRate,
                            width = elem.data.sw || 0,
                            height = elem.data.sh || 0,
                            name = elem.data.nm,
                            loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                            numKeys = property.kf ? data.k.length : 0,
                            active = !this.data || !0 !== this.data.hd,
                            wiggle = function(t, e) {
                                for (var i = this.pv.length || 1, a = createTypedArray("float32", i), r = Math.floor(5 * time), s = 0, n = 0; s < r;) {
                                    for (n = 0; n < i; n += 1) a[n] += -e + 2 * e * BMMath.random();
                                    s += 1
                                }
                                var o = 5 * time,
                                    h = o - Math.floor(o),
                                    l = createTypedArray("float32", i);
                                if (1 < i) { for (n = 0; n < i; n += 1) l[n] = this.pv[n] + a[n] + (-e + 2 * e * BMMath.random()) * h; return l }
                                return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
                            }.bind(this);

                        function loopInDuration(t, e) { return loopIn(t, e, !0) }

                        function loopOutDuration(t, e) { return loopOut(t, e, !0) } thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                            time, velocity, value, text, textIndex, textTotal, selectorValue;

                        function lookAt(t, e) { t = [e[0] - t[0], e[1] - t[1], e[2] - t[2]], Math.atan2(t[0], Math.sqrt(t[1] * t[1] + t[2] * t[2])), Math.atan2(t[1], t[2]); return 1 }

                        function easeOut(t, e, i, a, r) { return applyEase(easeOutBez, t, e, i, a, r) }

                        function easeIn(t, e, i, a, r) { return applyEase(easeInBez, t, e, i, a, r) }

                        function ease(t, e, i, a, r) { return applyEase(easeInOutBez, t, e, i, a, r) }

                        function applyEase(t, e, i, a, r, s) { void 0 === r ? (r = i, s = a) : e = (e - i) / (a - i), 1 < e ? e = 1 : e < 0 && (e = 0); var n = t(e); if ($bm_isInstanceOfArray(r)) { for (var o = r.length, h = createTypedArray("float32", o), l = 0; l < o; l += 1) h[l] = (s[l] - r[l]) * n + r[l]; return h } return (s - r) * n + r }

                        function nearestKey(t) {
                            var e, i, a, r = data.k.length;
                            if (data.k.length && "number" != typeof data.k[0])
                                if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, a = data.k[0].t;
                                else { for (e = 0; e < r - 1; e += 1) { if (t === data.k[e].t) { i = e + 1, a = data.k[e].t; break } if (t > data.k[e].t && t < data.k[e + 1].t) { a = t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, data.k[e + 1].t) : (i = e + 1, data.k[e].t); break } } - 1 === i && (i = e + 1, a = data.k[e].t) }
                            else a = i = 0;
                            var s = {};
                            return s.index = i, s.time = a / elem.comp.globalData.frameRate, s
                        }

                        function key(t) { if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t); for (var e = { time: data.k[--t].t / elem.comp.globalData.frameRate, value: [] }, i = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e, a = i.length, r = 0; r < a; r += 1) e[r] = i[r], e.value[r] = i[r]; return e }

                        function framesToTime(t, e) { return t / (e = e || elem.comp.globalData.frameRate) }

                        function timeToFrames(t, e) { return (t = !t && 0 !== t ? time : t) * (e = e || elem.comp.globalData.frameRate) }

                        function seedRandom(t) { BMMath.seedrandom(randSeed + t) }

                        function sourceRectAtTime() { return elem.sourceRectAtTime() }

                        function substring(t, e) { return "string" == typeof value && (void 0 === e ? value.substring(t) : value.substring(t, e)) }

                        function substr(t, e) { return "string" == typeof value && (void 0 === e ? value.substr(t) : value.substr(t, e)) }

                        function posterizeTime(t) { time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time) }
                        var index = elem.data.ind,
                            hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                            parent, randSeed = Math.floor(1e6 * Math.random()),
                            globalData = elem.globalData;

                        function executeExpression(t) { return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect = effect || thisLayer(4), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = "shape" === scoped_bm_rt.propType ? scoped_bm_rt.v : scoped_bm_rt) }
                        return executeExpression
                    }
                    return ob.initiateExpression = initiateExpression, ob
                }(),
                expressionHelpers = {
                    searchExpressions: function(t, e, i) { e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i))) },
                    getSpeedAtTime: function(t) {
                        var e = this.getValueAtTime(t),
                            i = this.getValueAtTime(t + -.01),
                            a = 0;
                        if (e.length) {
                            for (var r = 0; r < e.length; r += 1) a += Math.pow(i[r] - e[r], 2);
                            a = 100 * Math.sqrt(a)
                        } else a = 0;
                        return a
                    },
                    getVelocityAtTime: function(t) {
                        if (void 0 !== this.vel) return this.vel;
                        var e = this.getValueAtTime(t),
                            i = this.getValueAtTime(t + -.001);
                        if (e.length)
                            for (var a = createTypedArray("float32", e.length), r = 0; r < e.length; r += 1) a[r] = (i[r] - e[r]) / -.001;
                        else a = (i - e) / -.001;
                        return a
                    },
                    getValueAtTime: function(t) { return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value },
                    getStaticValueAtTime: function() { return this.pv },
                    setGroupProperty: function(t) { this.propertyGroup = t }
                };
            ! function() {
                function n(t, e, i) {
                    if (!this.k || !this.keyframes) return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var a, r, s, n, o, h = this.comp.renderedFrame,
                        l = this.keyframes,
                        p = l[l.length - 1].t;
                    if (h <= p) return this.pv;
                    if (i ? r = p - (a = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), a = p - (r = l[l.length - 1 - e].t)), "pingpong" === t) { if (Math.floor((h - r) / a) % 2 != 0) return this.getValueAtTime((a - (h - r) % a + r) / this.comp.globalData.frameRate, 0) } else {
                        if ("offset" === t) {
                            var c = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                                m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                d = this.getValueAtTime(((h - r) % a + r) / this.comp.globalData.frameRate, 0),
                                f = Math.floor((h - r) / a);
                            if (this.pv.length) { for (n = (o = new Array(c.length)).length, s = 0; s < n; s += 1) o[s] = (m[s] - c[s]) * f + d[s]; return o }
                            return (m - c) * f + d
                        }
                        if ("continue" === t) {
                            var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                x = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) { for (n = (o = new Array(u.length)).length, s = 0; s < n; s += 1) o[s] = u[s] + (u[s] - x[s]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4; return o }
                            return u + (h - p) / .001 * (u - x)
                        }
                    }
                    return this.getValueAtTime(((h - r) % a + r) / this.comp.globalData.frameRate, 0)
                }

                function o(t, e, i) {
                    if (!this.k) return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var a, r, s, n, o, h = this.comp.renderedFrame,
                        l = this.keyframes,
                        p = l[0].t;
                    if (p <= h) return this.pv;
                    if (i ? r = p + (a = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : a = (r = l[e = !e || e > l.length - 1 ? l.length - 1 : e].t) - p, "pingpong" === t) { if (Math.floor((p - h) / a) % 2 == 0) return this.getValueAtTime(((p - h) % a + p) / this.comp.globalData.frameRate, 0) } else {
                        if ("offset" === t) {
                            var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                m = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                                d = this.getValueAtTime((a - (p - h) % a + p) / this.comp.globalData.frameRate, 0),
                                f = Math.floor((p - h) / a) + 1;
                            if (this.pv.length) { for (n = (o = new Array(c.length)).length, s = 0; s < n; s += 1) o[s] = d[s] - (m[s] - c[s]) * f; return o }
                            return d - (m - c) * f
                        }
                        if ("continue" === t) {
                            var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                x = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) { for (n = (o = new Array(u.length)).length, s = 0; s < n; s += 1) o[s] = u[s] + (u[s] - x[s]) * (p - h) / .001; return o }
                            return u + (u - x) * (p - h) / .001
                        }
                    }
                    return this.getValueAtTime((a - ((p - h) % a + p)) / this.comp.globalData.frameRate, 0)
                }

                function h(t, e) {
                    if (!this.k) return this.pv;
                    if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                    for (var i, a = this.comp.renderedFrame / this.comp.globalData.frameRate, r = a - t, s = 1 < e ? (a + t - r) / (e - 1) : 1, n = 0, o = 0, h = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; n < e;) {
                        if (i = this.getValueAtTime(r + n * s), this.pv.length)
                            for (o = 0; o < this.pv.length; o += 1) h[o] += i[o];
                        else h += i;
                        n += 1
                    }
                    if (this.pv.length)
                        for (o = 0; o < this.pv.length; o += 1) h[o] /= e;
                    else h /= e;
                    return h
                }
                var a = TransformPropertyFactory.getTransformProperty;
                TransformPropertyFactory.getTransformProperty = function(t, e, i) { i = a(t, e, i); return i.dynamicProperties.length ? i.getValueAtTime = function(t) { this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix }); var e, i, a, r, s, n, o = this._transformCachingAtTime.v; return o.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && (e = this.a.getValueAtTime(t), o.translate(-e[0] * this.a.mult, -e[1] * this.a.mult, e[2] * this.a.mult)), this.appliedTransformations < 2 && (i = this.s.getValueAtTime(t), o.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult)), this.sk && this.appliedTransformations < 3 && (e = this.sk.getValueAtTime(t), i = this.sa.getValueAtTime(t), o.skewFromAxis(-e * this.sk.mult, i * this.sa.mult)), this.r && this.appliedTransformations < 4 ? (a = this.r.getValueAtTime(t), o.rotate(-a * this.r.mult)) : !this.r && this.appliedTransformations < 4 && (a = this.rz.getValueAtTime(t), r = this.ry.getValueAtTime(t), s = this.rx.getValueAtTime(t), n = this.or.getValueAtTime(t), o.rotateZ(-a * this.rz.mult).rotateY(r * this.ry.mult).rotateX(s * this.rx.mult).rotateZ(-n[2] * this.or.mult).rotateY(n[1] * this.or.mult).rotateX(n[0] * this.or.mult)), this.data.p && this.data.p.s ? (r = this.px.getValueAtTime(t), s = this.py.getValueAtTime(t), this.data.p.z ? (n = this.pz.getValueAtTime(t), o.translate(r * this.px.mult, s * this.py.mult, -n * this.pz.mult)) : o.translate(r * this.px.mult, s * this.py.mult, 0)) : (t = this.p.getValueAtTime(t), o.translate(t[0] * this.p.mult, t[1] * this.p.mult, -t[2] * this.p.mult)), o }.bind(i) : i.getValueAtTime = function() { return this.v.clone(new Matrix) }.bind(i), i.setGroupProperty = expressionHelpers.setGroupProperty, i };
                var l = PropertyFactory.getProp;
                PropertyFactory.getProp = function(t, e, i, a, r) {
                    var s = l(t, e, i, a, r);
                    s.kf ? s.getValueAtTime = expressionHelpers.getValueAtTime.bind(s) : s.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s.loopOut = n, s.loopIn = o, s.smooth = h, s.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(s), s.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(s), s.numKeys = 1 === e.a ? e.k.length : 0, s.propertyIndex = e.ix;
                    a = 0;
                    return 0 !== i && (a = createTypedArray("float32", (1 === e.a ? e.k[0].s : e.k).length)), s._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: a }, expressionHelpers.searchExpressions(t, e, s), s.k && r.addDynamicProperty(s), s
                };
                var t = ShapePropertyFactory.getConstructorFunction(),
                    e = ShapePropertyFactory.getKeyframedConstructorFunction();

                function i() {} i.prototype = {
                    vertices: function(t, e) { this.k && this.getValue(); for (var i = this.v, a = (i = void 0 !== e ? this.getValueAtTime(e, 0) : i)._length, r = i[t], s = i.v, n = createSizedArray(a), o = 0; o < a; o += 1) n[o] = "i" === t || "o" === t ? [r[o][0] - s[o][0], r[o][1] - s[o][1]] : [r[o][0], r[o][1]]; return n },
                    points: function(t) { return this.vertices("v", t) },
                    inTangents: function(t) { return this.vertices("i", t) },
                    outTangents: function(t) { return this.vertices("o", t) },
                    isClosed: function() { return this.v.c },
                    pointOnPath: function(t, e) {
                        var i = this.v;
                        void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                        for (var e = this._segmentsLength, a = e.lengths, r = e.totalLength * t, s = 0, n = a.length, o = 0; s < n;) {
                            if (o + a[s].addedLength > r) {
                                var h = i.c && s === n - 1 ? 0 : s + 1,
                                    l = (r - o) / a[s].addedLength,
                                    p = bez.getPointInSegment(i.v[s], i.v[h], i.o[s], i.i[h], l, a[s]);
                                break
                            }
                            o += a[s].addedLength, s += 1
                        }
                        return p = p || (i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]])
                    },
                    vectorOnPath: function(t, e, i) {
                        1 == t ? t = this.v.c : 0 == t && (t = .999);
                        var a = this.pointOnPath(t, e),
                            t = this.pointOnPath(t + .001, e),
                            e = t[0] - a[0],
                            t = t[1] - a[1],
                            a = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2));
                        return 0 === a ? [0, 0] : "tangent" === i ? [e / a, t / a] : [-t / a, e / a]
                    },
                    tangentOnPath: function(t, e) { return this.vectorOnPath(t, e, "tangent") },
                    normalOnPath: function(t, e) { return this.vectorOnPath(t, e, "normal") },
                    setGroupProperty: expressionHelpers.setGroupProperty,
                    getValueAtTime: expressionHelpers.getStaticValueAtTime
                }, extendPrototype([i], t), extendPrototype([i], e), e.prototype.getValueAtTime = function(t) { return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue }, e.prototype.initiateExpression = ExpressionManager.initiateExpression;
                var s = ShapePropertyFactory.getShapeProp;
                ShapePropertyFactory.getShapeProp = function(t, e, i, a, r) { r = s(t, e, i, a, r); return r.propertyIndex = e.ix, r.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, r) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, r), r.k && t.addDynamicProperty(r), r }
            }(), TextProperty.prototype.getExpressionValue = function(t, e) {
                var i = this.calculateExpression(e);
                if (t.t === i) return t;
                e = {};
                return this.copyData(e, t), e.t = i.toString(), e.__complete = !1, e
            }, TextProperty.prototype.searchProperty = function() {
                var t = this.searchKeyframes(),
                    e = this.searchExpressions();
                return this.kf = t || e, this.kf
            }, TextProperty.prototype.searchExpressions = function() { return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null };
            var ShapePathInterface = function(t, e, i) {
                    var a = e.sh;

                    function r(t) { return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? r.path : null } e = propertyGroupFactory(r, i);
                    return a.setGroupProperty(PropertyInterface("Path", e)), Object.defineProperties(r, { path: { get: function() { return a.k && a.getValue(), a } }, shape: { get: function() { return a.k && a.getValue(), a } }, _name: { value: t.nm }, ix: { value: t.ix }, propertyIndex: { value: t.ix }, mn: { value: t.mn }, propertyGroup: { value: i } }), r
                },
                propertyGroupFactory = function(e, i) { return function(t) { return (t = void 0 === t ? 1 : t) <= 0 ? e : i(t - 1) } },
                PropertyInterface = function(t, e) { var i = { _name: t }; return function(t) { return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1) } },
                ShapeExpressionInterface = function(t, e, a) {
                    var r;

                    function i(t) {
                        if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? a : r[t - 1];
                        for (var e = 0, i = r.length; e < i;) {
                            if (r[e]._name === t) return r[e];
                            e += 1
                        }
                        return null
                    }
                    return i.propertyGroup = propertyGroupFactory(i, function() { return a }), r = GHa(t, e, i.propertyGroup), i.numProperties = r.length, i._name = "Contents", i
                };

            function GHa(t, e, i) {
                for (var a = [], r = t ? t.length : 0, s = 0; s < r; s += 1) "gr" === t[s].ty ? a.push(function(t, e, i) {
                    var a = function(t) {
                        switch (t) {
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return a.content;
                            default:
                                return a.transform
                        }
                    };
                    a.propertyGroup = propertyGroupFactory(a, i);
                    i = function(t, e, i) {
                        function a(t) {
                            for (var e = 0, i = r.length; e < i;) {
                                if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t) return r[e];
                                e += 1
                            }
                            return "number" == typeof t ? r[t - 1] : null
                        }
                        var r;
                        a.propertyGroup = propertyGroupFactory(a, i), r = GHa(t.it, e.it, a.propertyGroup), a.numProperties = r.length;
                        e = MHa(t.it[t.it.length - 1], e.it[e.it.length - 1], a.propertyGroup);
                        return a.transform = e, a.propertyIndex = t.cix, a._name = t.nm, a
                    }(t, e, a.propertyGroup), e = MHa(t.it[t.it.length - 1], e.it[e.it.length - 1], a.propertyGroup);
                    return a.content = i, a.transform = e, Object.defineProperty(a, "_name", { get: function() { return t.nm } }), a.numProperties = t.np, a.propertyIndex = t.ix, a.nm = t.nm, a.mn = t.mn, a
                }(t[s], e[s], i)) : "fl" === t[s].ty ? a.push(function(t, e, i) {
                    function a(t) { return "Color" === t || "color" === t ? a.color : "Opacity" === t || "opacity" === t ? a.opacity : null }
                    return Object.defineProperties(a, { color: { get: ExpressionPropertyInterface(e.c) }, opacity: { get: ExpressionPropertyInterface(e.o) }, _name: { value: t.nm }, mn: { value: t.mn } }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), a
                }(t[s], e[s], i)) : "st" === t[s].ty ? a.push(function(e, i, t) {
                    var a, t = propertyGroupFactory(o, t),
                        r = propertyGroupFactory(n, t);
                    var s = e.d ? e.d.length : 0,
                        n = {};
                    for (a = 0; a < s; a += 1) ! function(t) { Object.defineProperty(n, e.d[t].nm, { get: ExpressionPropertyInterface(i.d.dataProps[t].p) }) }(a), i.d.dataProps[a].p.setGroupProperty(r);

                    function o(t) { return "Color" === t || "color" === t ? o.color : "Opacity" === t || "opacity" === t ? o.opacity : "Stroke Width" === t || "stroke width" === t ? o.strokeWidth : null }
                    return Object.defineProperties(o, { color: { get: ExpressionPropertyInterface(i.c) }, opacity: { get: ExpressionPropertyInterface(i.o) }, strokeWidth: { get: ExpressionPropertyInterface(i.w) }, dash: { get: function() { return n } }, _name: { value: e.nm }, mn: { value: e.mn } }), i.c.setGroupProperty(PropertyInterface("Color", t)), i.o.setGroupProperty(PropertyInterface("Opacity", t)), i.w.setGroupProperty(PropertyInterface("Stroke Width", t)), o
                }(t[s], e[s], i)) : "tm" === t[s].ty ? a.push(function(e, t, i) {
                    function a(t) { return t === e.e.ix || "End" === t || "end" === t ? a.end : t === e.s.ix ? a.start : t === e.o.ix ? a.offset : null }
                    var r = propertyGroupFactory(a, i);
                    return a.propertyIndex = e.ix, t.s.setGroupProperty(PropertyInterface("Start", r)), t.e.setGroupProperty(PropertyInterface("End", r)), t.o.setGroupProperty(PropertyInterface("Offset", r)), a.propertyIndex = e.ix, a.propertyGroup = i, Object.defineProperties(a, { start: { get: ExpressionPropertyInterface(t.s) }, end: { get: ExpressionPropertyInterface(t.e) }, offset: { get: ExpressionPropertyInterface(t.o) }, _name: { value: e.nm } }), a.mn = e.mn, a
                }(t[s], e[s], i)) : "tr" === t[s].ty || ("el" === t[s].ty ? a.push(function(e, t, i) {
                    function a(t) { return e.p.ix === t ? a.position : e.s.ix === t ? a.size : null } i = propertyGroupFactory(a, i);
                    a.propertyIndex = e.ix;
                    t = "tm" === t.sh.ty ? t.sh.prop : t.sh;
                    return t.s.setGroupProperty(PropertyInterface("Size", i)), t.p.setGroupProperty(PropertyInterface("Position", i)), Object.defineProperties(a, { size: { get: ExpressionPropertyInterface(t.s) }, position: { get: ExpressionPropertyInterface(t.p) }, _name: { value: e.nm } }), a.mn = e.mn, a
                }(t[s], e[s], i)) : "sr" === t[s].ty ? a.push(function(e, t, i) {
                    function a(t) { return e.p.ix === t ? a.position : e.r.ix === t ? a.rotation : e.pt.ix === t ? a.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? a.outerRadius : e.os.ix === t ? a.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? a.innerRoundness : null : a.innerRadius } i = propertyGroupFactory(a, i), t = "tm" === t.sh.ty ? t.sh.prop : t.sh;
                    a.propertyIndex = e.ix, t.or.setGroupProperty(PropertyInterface("Outer Radius", i)), t.os.setGroupProperty(PropertyInterface("Outer Roundness", i)), t.pt.setGroupProperty(PropertyInterface("Points", i)), t.p.setGroupProperty(PropertyInterface("Position", i)), t.r.setGroupProperty(PropertyInterface("Rotation", i)), e.ir && (t.ir.setGroupProperty(PropertyInterface("Inner Radius", i)), t.is.setGroupProperty(PropertyInterface("Inner Roundness", i)));
                    return Object.defineProperties(a, { position: { get: ExpressionPropertyInterface(t.p) }, rotation: { get: ExpressionPropertyInterface(t.r) }, points: { get: ExpressionPropertyInterface(t.pt) }, outerRadius: { get: ExpressionPropertyInterface(t.or) }, outerRoundness: { get: ExpressionPropertyInterface(t.os) }, innerRadius: { get: ExpressionPropertyInterface(t.ir) }, innerRoundness: { get: ExpressionPropertyInterface(t.is) }, _name: { value: e.nm } }), a.mn = e.mn, a
                }(t[s], e[s], i)) : "sh" === t[s].ty ? a.push(ShapePathInterface(t[s], e[s], i)) : "rc" === t[s].ty ? a.push(function(e, t, i) {
                    function a(t) { return e.p.ix === t ? a.position : e.r.ix === t ? a.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? a.size : null } i = propertyGroupFactory(a, i), t = "tm" === t.sh.ty ? t.sh.prop : t.sh;
                    return a.propertyIndex = e.ix, t.p.setGroupProperty(PropertyInterface("Position", i)), t.s.setGroupProperty(PropertyInterface("Size", i)), t.r.setGroupProperty(PropertyInterface("Rotation", i)), Object.defineProperties(a, { position: { get: ExpressionPropertyInterface(t.p) }, roundness: { get: ExpressionPropertyInterface(t.r) }, size: { get: ExpressionPropertyInterface(t.s) }, _name: { value: e.nm } }), a.mn = e.mn, a
                }(t[s], e[s], i)) : "rd" === t[s].ty ? a.push(function(e, t, i) {
                    function a(t) { return e.r.ix === t || "Round Corners 1" === t ? a.radius : null } i = propertyGroupFactory(a, i);
                    return a.propertyIndex = e.ix, t.rd.setGroupProperty(PropertyInterface("Radius", i)), Object.defineProperties(a, { radius: { get: ExpressionPropertyInterface(t.rd) }, _name: { value: e.nm } }), a.mn = e.mn, a
                }(t[s], e[s], i)) : "rp" === t[s].ty && a.push(function(e, t, i) {
                    function a(t) { return e.c.ix === t || "Copies" === t ? a.copies : e.o.ix === t || "Offset" === t ? a.offset : null } i = propertyGroupFactory(a, i);
                    return a.propertyIndex = e.ix, t.c.setGroupProperty(PropertyInterface("Copies", i)), t.o.setGroupProperty(PropertyInterface("Offset", i)), Object.defineProperties(a, { copies: { get: ExpressionPropertyInterface(t.c) }, offset: { get: ExpressionPropertyInterface(t.o) }, _name: { value: e.nm } }), a.mn = e.mn, a
                }(t[s], e[s], i)));
                return a
            }

            function MHa(e, t, i) {
                function a(t) { return e.a.ix === t || "Anchor Point" === t ? a.anchorPoint : e.o.ix === t || "Opacity" === t ? a.opacity : e.p.ix === t || "Position" === t ? a.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? a.rotation : e.s.ix === t || "Scale" === t ? a.scale : e.sk && e.sk.ix === t || "Skew" === t ? a.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? a.skewAxis : null }
                var r = propertyGroupFactory(a, i);
                return t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", r)), t.transform.mProps.p.setGroupProperty(PropertyInterface("Position", r)), t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", r)), t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", r)), t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", r)), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", r)), t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", r))), t.transform.op.setGroupProperty(PropertyInterface("Opacity", r)), Object.defineProperties(a, { opacity: { get: ExpressionPropertyInterface(t.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(t.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(t.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(t.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(t.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(t.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(t.transform.mProps.sa) }, _name: { value: e.nm } }), a.ty = "tr", a.mn = e.mn, a.propertyGroup = i, a
            }
            var TextExpressionInterface = function(e) {
                    var i;

                    function a(t) { return "ADBE Text Document" !== t ? null : a.sourceText }
                    return Object.defineProperty(a, "sourceText", { get: function() { e.textProperty.getValue(); var t = e.textProperty.currentData.t; return void 0 !== t && (e.textProperty.currentData.t = void 0, (i = new String(t)).value = t || new String(t)), i } }), a
                },
                LayerExpressionInterface = function(e) {
                    function i(t) {
                        switch (t) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return i.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return a;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return i.effect;
                            case "ADBE Text Properties":
                                return i.textInterface;
                            default:
                                return null
                        }
                    }
                    i.getMatrix = NJa, i.invertPoint = TJa, i.applyPoint = SJa, i.toWorld = PJa, i.toWorldVec = OJa, i.fromWorld = RJa, i.fromWorldVec = QJa, i.toComp = PJa, i.fromComp = UJa, i.sampleImage = VJa, i.sourceRectAtTime = e.sourceRectAtTime.bind(e);
                    var a, t = getDescriptor(a = TransformExpressionInterface((i._elem = e).finalTransform.mProp), "anchorPoint");
                    return Object.defineProperties(i, { hasParent: { get: function() { return e.hierarchy.length } }, parent: { get: function() { return e.hierarchy[0].layerInterface } }, rotation: getDescriptor(a, "rotation"), scale: getDescriptor(a, "scale"), position: getDescriptor(a, "position"), opacity: getDescriptor(a, "opacity"), anchorPoint: t, anchor_point: t, transform: { get: function() { return a } }, active: { get: function() { return e.isInRange } } }), i.startTime = e.data.st, i.index = e.data.ind, i.source = e.data.refId, i.height = 0 === e.data.ty ? e.data.h : 100, i.width = 0 === e.data.ty ? e.data.w : 100, i.inPoint = e.data.ip / e.comp.globalData.frameRate, i.outPoint = e.data.op / e.comp.globalData.frameRate, i._name = e.data.nm, i.registerMaskInterface = function(t) { i.mask = new MaskManagerInterface(t, e) }, i.registerEffectsInterface = function(t) { i.effect = t }, i
                };

            function NJa(t) { var e = new Matrix; return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e }

            function OJa(t, e) { e = this.getMatrix(e); return e.props[12] = 0, e.props[13] = 0, e.props[14] = 0, this.applyPoint(e, t) }

            function PJa(t, e) { e = this.getMatrix(e); return this.applyPoint(e, t) }

            function QJa(t, e) { e = this.getMatrix(e); return e.props[12] = 0, e.props[13] = 0, e.props[14] = 0, this.invertPoint(e, t) }

            function RJa(t, e) { e = this.getMatrix(e); return this.invertPoint(e, t) }

            function SJa(t, e) {
                if (this._elem.hierarchy && this._elem.hierarchy.length)
                    for (var i = this._elem.hierarchy.length, a = 0; a < i; a += 1) this._elem.hierarchy[a].finalTransform.mProp.applyToMatrix(t);
                return t.applyToPointArray(e[0], e[1], e[2] || 0)
            }

            function TJa(t, e) {
                if (this._elem.hierarchy && this._elem.hierarchy.length)
                    for (var i = this._elem.hierarchy.length, a = 0; a < i; a += 1) this._elem.hierarchy[a].finalTransform.mProp.applyToMatrix(t);
                return t.inversePoint(e)
            }

            function UJa(t) { var e = new Matrix; if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) { for (var i = this._elem.hierarchy.length, a = 0; a < i; a += 1) this._elem.hierarchy[a].finalTransform.mProp.applyToMatrix(e); return e.inversePoint(t) } return e.inversePoint(t) }

            function VJa() { return [1, 1, 1, 1] }
            var CompExpressionInterface = function(a) {
                    function t(t) {
                        for (var e = 0, i = a.layers.length; e < i;) {
                            if (a.layers[e].nm === t || a.layers[e].ind === t) return a.elements[e].layerInterface;
                            e += 1
                        }
                        return null
                    }
                    return Object.defineProperty(t, "_name", { value: a.data.nm }), (t.layer = t).pixelAspect = 1, t.height = a.data.h || a.globalData.compSize.h, t.width = a.data.w || a.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / a.globalData.frameRate, t.displayStartTime = 0, t.numLayers = a.layers.length, t
                },
                TransformExpressionInterface = function(t) {
                    function e(t) {
                        switch (t) {
                            case "scale":
                            case "Scale":
                            case "ADBE Scale":
                            case 6:
                                return e.scale;
                            case "rotation":
                            case "Rotation":
                            case "ADBE Rotation":
                            case "ADBE Rotate Z":
                            case 10:
                                return e.rotation;
                            case "ADBE Rotate X":
                                return e.xRotation;
                            case "ADBE Rotate Y":
                                return e.yRotation;
                            case "position":
                            case "Position":
                            case "ADBE Position":
                            case 2:
                                return e.position;
                            case "ADBE Position_0":
                                return e.xPosition;
                            case "ADBE Position_1":
                                return e.yPosition;
                            case "ADBE Position_2":
                                return e.zPosition;
                            case "anchorPoint":
                            case "AnchorPoint":
                            case "Anchor Point":
                            case "ADBE AnchorPoint":
                            case 1:
                                return e.anchorPoint;
                            case "opacity":
                            case "Opacity":
                            case 11:
                                return e.opacity;
                            default:
                                return null
                        }
                    }
                    var i, a, r, s;
                    return Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) }), t.p ? s = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), a = ExpressionPropertyInterface(t.py), t.pz && (r = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", { get: function() { return t.p ? s() : [i(), a(), r ? r() : 0] } }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e
                },
                ProjectInterface = function() {
                    function t(t) {
                        for (var e = 0, i = this.compositions.length; e < i;) {
                            if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                            e += 1
                        }
                        return null
                    }
                    return t.compositions = [], t.currentFrame = 0, t.registerComposition = RKa, t
                };

            function RKa(t) { this.compositions.push(t) }
            var EffectsExpressionInterface = {
                createEffectsInterface: function(t, e) {
                    if (t.effectsManager) {
                        var i, a = [],
                            r = t.data.ef,
                            s = t.effectsManager.effectElements.length;
                        for (i = 0; i < s; i += 1) a.push(function t(r, e, i, a) {
                            function s(t) {
                                for (var e = r.ef, i = 0, a = e.length; i < a;) {
                                    if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? o[i] : o[i]();
                                    i += 1
                                }
                                throw new Error
                            }
                            var n = propertyGroupFactory(s, i);
                            var o = [];
                            var h;
                            var l = r.ef.length;
                            for (h = 0; h < l; h += 1) 5 === r.ef[h].ty ? o.push(t(r.ef[h], e.effectElements[h], e.effectElements[h].propertyGroup, a)) : o.push($Ka(e.effectElements[h], r.ef[h].ty, a, n));
                            "ADBE Color Control" === r.mn && Object.defineProperty(s, "color", { get: function() { return o[0]() } });
                            Object.defineProperties(s, { numProperties: { get: function() { return r.np } }, _name: { value: r.nm }, propertyGroup: { value: n } });
                            s.enabled = 0 !== r.en;
                            s.active = s.enabled;
                            return s
                        }(r[i], t.effectsManager.effectElements[i], e, t));
                        var n = t.data.ef || [],
                            o = function(t) {
                                for (i = 0, s = n.length; i < s;) {
                                    if (t === n[i].nm || t === n[i].mn || t === n[i].ix) return a[i];
                                    i += 1
                                }
                                return null
                            };
                        return Object.defineProperty(o, "numProperties", { get: function() { return n.length } }), o
                    }
                    return null
                }
            };

            function $Ka(t, e, i, a) {
                var r = ExpressionPropertyInterface(t.p);
                return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", a)),
                    function() { return 10 === e ? i.comp.compInterface(t.p.v) : r() }
            }
            var MaskManagerInterface = function() {
                    function t(t, e) { this._mask = t, this._data = e } Object.defineProperty(t.prototype, "maskPath", { get: function() { return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop } }), Object.defineProperty(t.prototype, "maskOpacity", { get: function() { return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v } });
                    return function(e) {
                        for (var i = createSizedArray(e.viewData.length), a = e.viewData.length, r = 0; r < a; r += 1) i[r] = new t(e.viewData[r], e.masksProperties[r]);
                        return function(t) {
                            for (r = 0; r < a;) {
                                if (e.masksProperties[r].nm === t) return i[r];
                                r += 1
                            }
                            return null
                        }
                    }
                }(),
                ExpressionPropertyInterface = (LLa = { pv: 0, v: 0, mult: 1 }, MLa = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 }, function(t) { return t ? "unidimensional" === t.propType ? (i = 1 / (e = !((e = t) && "pv" in e) ? LLa : e).mult, a = e.pv * i, (r = new Number(a)).value = a, NLa(r, e, "unidimensional"), function() { return e.k && e.getValue(), a = e.v * i, r.value !== a && ((r = new Number(a)).value = a, NLa(r, e, "unidimensional")), r }) : (n = 1 / (s = !((s = t) && "pv" in s) ? MLa : s).mult, o = s.data && s.data.l || s.pv.length, h = createTypedArray("float32", o), l = createTypedArray("float32", o), h.value = l, NLa(h, s, "multidimensional"), function() { s.k && s.getValue(); for (var t = 0; t < o; t += 1) l[t] = s.v[t] * n, h[t] = l[t]; return h }) : QLa; var e, i, a, r, s, n, o, h, l }),
                LLa, MLa, hMa;

            function NLa(a, r, s) {
                Object.defineProperty(a, "velocity", { get: function() { return r.getVelocityAtTime(r.comp.currentFrame) } }), a.numKeys = r.keyframes ? r.keyframes.length : 0, a.key = function(t) {
                    if (!a.numKeys) return 0;
                    var e = "",
                        e = "s" in r.keyframes[t - 1] ? r.keyframes[t - 1].s : "e" in r.keyframes[t - 2] ? r.keyframes[t - 2].e : r.keyframes[t - 2].s,
                        i = "unidimensional" === s ? new Number(e) : Object.assign({}, e);
                    return i.time = r.keyframes[t - 1].t / r.elem.comp.globalData.frameRate, i.value = "unidimensional" === s ? e[0] : e, i
                }, a.valueAtTime = r.getValueAtTime, a.speedAtTime = r.getSpeedAtTime, a.velocityAtTime = r.getVelocityAtTime, a.propertyGroup = r.propertyGroup
            }

            function QLa() { return LLa }

            function SliderEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, i) }

            function AngleEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, i) }

            function ColorEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 1, 0, i) }

            function PointEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 1, 0, i) }

            function LayerIndexEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, i) }

            function MaskIndexEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, i) }

            function CheckboxEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, i) }

            function NoValueEffect() { this.p = {} }

            function EffectsManager(t, e) {
                var i = t.ef || [];
                this.effectElements = [];
                for (var a, r = i.length, s = 0; s < r; s += 1) a = new GroupEffect(i[s], e), this.effectElements.push(a)
            }

            function GroupEffect(t, e) { this.init(t, e) } hMa = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function(t, e, i) { return 1 === e.t ? new TextExpressionSelectorPropFactory(t, e, i) : hMa(t, e, i) }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                for (var i, a = this.data.ef.length, r = this.data.ef, s = 0; s < a; s += 1) {
                    switch (i = null, r[s].ty) {
                        case 0:
                            i = new SliderEffect(r[s], e, this);
                            break;
                        case 1:
                            i = new AngleEffect(r[s], e, this);
                            break;
                        case 2:
                            i = new ColorEffect(r[s], e, this);
                            break;
                        case 3:
                            i = new PointEffect(r[s], e, this);
                            break;
                        case 4:
                        case 7:
                            i = new CheckboxEffect(r[s], e, this);
                            break;
                        case 10:
                            i = new LayerIndexEffect(r[s], e, this);
                            break;
                        case 11:
                            i = new MaskIndexEffect(r[s], e, this);
                            break;
                        case 5:
                            i = new EffectsManager(r[s], e, this);
                            break;
                        default:
                            i = new NoValueEffect(r[s], e, this)
                    }
                    i && this.effectElements.push(i)
                }
            };
            var lottie = {};

            function setLocationHref(t) { locationHref = t }

            function searchAnimations() {!0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations() }

            function setSubframeRendering(t) { subframeEnabled = t }

            function loadAnimation(t) { return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t) }

            function setQuality(t) {
                if ("string" == typeof t) switch (t) {
                    case "high":
                        defaultCurveSegments = 200;
                        break;
                    default:
                    case "medium":
                        defaultCurveSegments = 50;
                        break;
                    case "low":
                        defaultCurveSegments = 10
                } else !isNaN(t) && 1 < t && (defaultCurveSegments = t);
                roundValues(!(50 <= defaultCurveSegments))
            }

            function inBrowser() { return "undefined" != typeof navigator }

            function installPlugin(t, e) { "expressions" === t && (expressionsPlugin = e) }

            function getFactory(t) {
                switch (t) {
                    case "propertyFactory":
                        return PropertyFactory;
                    case "shapePropertyFactory":
                        return ShapePropertyFactory;
                    case "matrix":
                        return Matrix;
                    default:
                        return null
                }
            }

            function checkReady() { "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations()) }

            function getQueryVariable(t) { for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) { var a = e[i].split("="); if (decodeURIComponent(a[0]) == t) return decodeURIComponent(a[1]) } return null } lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.__getFactory = getFactory, lottie.version = "5.7.6";
            var standalone = "__[STANDALONE]__",
                animationData = "__[ANIMATIONDATA]__",
                renderer = "",
                queryString, scripts, index, myScript, queryString, renderer;
            standalone && (scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" }, queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer"));
            var readyStateCheckInterval = setInterval(checkReady, 100);
            return lottie
        }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() { return vO(uO) }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(t) { t.exports = JSON.parse('{"v":"5.5.2","fr":25,"ip":0,"op":125,"w":400,"h":400,"nm":"Notif","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"#Sound","ln":"Sound","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":146,"ix":10},"p":{"a":0,"k":[100,242,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[30.25,0],[92.25,0]],"c":false},"ix":2},"nm":"TracÃ© 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":11,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":17,"s":[8]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[1],"y":[0]},"t":31,"s":[8]},{"t":36,"s":[0]}],"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"rp","c":{"a":0,"k":3,"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":3,"tr":{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":24,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transformer"},"nm":"RÃ©pÃ©tition 1","mn":"ADBE Vector Filter - Repeater","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"Forme 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":14,"s":[0]},{"t":36,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":11,"s":[0]},{"t":36,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"RÃ©duire les tracÃ©s 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":37,"op":37,"st":11,"bm":0,"hidden":11},{"ddd":0,"ind":2,"ty":4,"nm":"#Notif","ln":"Notif","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[258,147,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[77,77],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"TracÃ© d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.029,0.029],"y":[0.81,0.81]},"t":13,"s":[0,0]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":20,"s":[110,110]},{"i":{"x":[0.365,0.365],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":25,"s":[95,95]},{"i":{"x":[0.833,0.833],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":30,"s":[100,100]},{"i":{"x":[0.531,0.531],"y":[1,1]},"o":{"x":[0.504,0.504],"y":[0,0]},"t":85,"s":[100,100]},{"i":{"x":[0.942,0.942],"y":[0.183,0.183]},"o":{"x":[0.566,0.566],"y":[0,0]},"t":96,"s":[110,110]},{"t":102,"s":[0,0]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":13,"op":125,"st":13,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"#bell","ln":"bell","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,131,0],"ix":2},"a":{"a":0,"k":[0,-61,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"s","pt":{"a":1,"k":[{"i":{"x":0.245,"y":1},"o":{"x":0,"y":0},"t":13,"s":[{"i":[[1.657,0],[0,-1.657],[-1.657,0],[0,1.657]],"o":[[-1.657,0],[0,1.657],[1.657,0],[0,-1.657]],"v":[[58,-48],[55,-45],[58,-42],[61,-45]],"c":true}]},{"i":{"x":0.179,"y":1},"o":{"x":0.879,"y":0},"t":20,"s":[{"i":[[31.204,0],[0,-31.204],[-31.204,0],[0,31.204]],"o":[[-31.204,0],[0,31.204],[31.204,0],[0,-31.204]],"v":[[58,-101.5],[1.5,-45],[58,11.5],[114.5,-45]],"c":true}]},{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":25,"s":[{"i":[[27.89,0],[0,-27.89],[-27.89,0],[0,27.89]],"o":[[-27.89,0],[0,27.89],[27.89,0],[0,-27.89]],"v":[[58,-95.5],[7.5,-45],[58,5.5],[108.5,-45]],"c":true}]},{"t":30,"s":[{"i":[[29.271,0],[0,-29.271],[-29.271,0],[0,29.271]],"o":[[-29.271,0],[0,29.271],[29.271,0],[0,-29.271]],"v":[[58,-98],[5,-45],[58,8],[111,-45]],"c":true}],"h":1},{"i":{"x":0.174,"y":1},"o":{"x":0.506,"y":0},"t":85,"s":[{"i":[[29.271,0],[0,-29.271],[-29.271,0],[0,29.271]],"o":[[-29.271,0],[0,29.271],[29.271,0],[0,-29.271]],"v":[[58,-98],[5,-45],[58,8],[111,-45]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":0.877,"y":0},"t":96,"s":[{"i":[[31.066,0],[0,-31.066],[-31.066,0],[0,31.066]],"o":[[-31.066,0],[0,31.066],[31.066,0],[0,-31.066]],"v":[[58,-101.25],[1.75,-45],[58,11.25],[114.25,-45]],"c":true}]},{"t":102,"s":[{"i":[[1.657,0],[0,-1.657],[-1.657,0],[0,1.657]],"o":[[-1.657,0],[0,1.657],[1.657,0],[0,-1.657]],"v":[[58,-48],[55,-45],[58,-42],[61,-45]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Masque 2"}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-10.625,0.125],[10.493,0],[0,10.493]],"o":[[0,10.493],[-10.493,0],[8.875,0.125]],"v":[[19,7],[0,26],[-19,7]],"c":true},"ix":2},"nm":"TracÃ© 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0.749019622803,0.749019622803,0.749019622803,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0,0,0,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":92,"s":[0,0,0,1]},{"t":105,"s":[0.749019622803,0.749019622803,0.749019622803,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.323,"y":0},"t":5,"s":[0,80],"to":[1.294,0],"ti":[-2.444,0]},{"i":{"x":0.859,"y":1},"o":{"x":1,"y":0},"t":10,"s":[37.734,80],"to":[1.592,0],"ti":[-0.772,0]},{"i":{"x":1,"y":1},"o":{"x":0.948,"y":0},"t":14,"s":[-46.779,80],"to":[4.603,0],"ti":[-5.029,0]},{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":20,"s":[43,80],"to":[3.38,0],"ti":[1.395,0]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":23,"s":[22.058,80],"to":[-1.563,0],"ti":[-2.657,0]},{"t":26,"s":[43,80],"h":1},{"i":{"x":0,"y":1},"o":{"x":0,"y":0},"t":45,"s":[43,80],"to":[0,0],"ti":[0,0]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":54,"s":[-30,80],"to":[0,0],"ti":[0,0]},{"i":{"x":0,"y":1},"o":{"x":0,"y":0},"t":63,"s":[38,80],"to":[0,0],"ti":[0,0]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":67,"s":[12,80],"to":[0,0],"ti":[0,0]},{"i":{"x":0,"y":0},"o":{"x":0.167,"y":0.167},"t":70,"s":[38,80],"to":[0,0],"ti":[0,0]},{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":85,"s":[38,80],"to":[0,0],"ti":[0,0]},{"t":113,"s":[0,80]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[36,36],"ix":2},"p":{"a":0,"k":[0,-78],"ix":3},"nm":"TracÃ© d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,-24.853],[0,-13.182],[0,0],[0,0],[0,0],[7.406,0],[40.554,0],[0,0],[0,0],[0,0],[0,13.183],[0,0],[-31.204,0]],"o":[[0,0],[0,13.182],[0,0],[0,0],[0,0],[-38.406,0],[-7.406,0],[0,0],[0,0],[0,0],[0,-13.183],[0,-24.853],[31.204,0]],"v":[[56.5,-30],[56.428,5.364],[61.675,26.111],[77.886,61.5],[77.886,69.25],[70.776,75.75],[-70.082,75.75],[-77.932,69.125],[-77.932,62.338],[-61.528,25.846],[-56.571,4.91],[-56.5,-30],[0,-75]],"c":true},"ix":2},"nm":"TracÃ© 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0.749019622803,0.749019622803,0.749019622803,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0,0,0,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":92,"s":[0,0,0,1]},{"t":105,"s":[0.749019622803,0.749019622803,0.749019622803,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,-69],"ix":2},"a":{"a":0,"k":[0,-69],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"bell","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.022,-65.5],"ix":2},"a":{"a":0,"k":[-0.022,-65.5],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[1],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":5,"s":[0]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.123],"y":[0]},"t":10,"s":[31.207]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":20,"s":[15]},{"i":{"x":[0.594],"y":[1]},"o":{"x":[0.025],"y":[0.726]},"t":45,"s":[15]},{"i":{"x":[1],"y":[1]},"o":{"x":[0.937],"y":[0]},"t":54,"s":[38]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":63,"s":[15]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":85,"s":[15]},{"t":113,"s":[0]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0}],"markers":[{"tm":5,"cm":"#start-input","dr":0},{"tm":30,"cm":"#end-output","dr":0},{"tm":45,"cm":"#start-ring","dr":0},{"tm":65,"cm":"#end-ring","dr":0},{"tm":85,"cm":"#start-output","dr":0},{"tm":113,"cm":"#end-output","dr":0}]}') }, function(t) { t.exports = JSON.parse('{"v":"5.5.2","fr":60,"ip":0,"op":119,"w":124,"h":124,"nm":"email sent","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"speed lines ","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-10.251,14.688,0],"ix":2},"a":{"a":0,"k":[8.93,7.009,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[16.861,1],[8.769,1]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[16.861,7.008],[1,7.008]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[16.861,13.017],[8.769,13.017]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":69,"s":[0]},{"t":75,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32,"s":[0]},{"t":38,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":4,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":25,"op":145,"st":25,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"details ","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[23.271,14.688,0],"ix":2},"a":{"a":0,"k":[16.793,1,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[1,1],[32.585,1]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":13,"op":83,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"paper plane ","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":5,"s":[-5]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":20,"s":[365]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25,"s":[358]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":29,"s":[360]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":53,"s":[360]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":54,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":74,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":79,"s":[-5]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":94,"s":[365]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":99,"s":[358]},{"t":103,"s":[360]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.539,"y":0},"t":29,"s":[71.216,62,0],"to":[16.333,0,0],"ti":[16.667,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":53,"s":[169.216,62,0],"to":[-16.667,0,0],"ti":[16.333,0,0]},{"i":{"x":0.461,"y":1},"o":{"x":0.167,"y":0.167},"t":54,"s":[-28.784,62,0],"to":[-16.333,0,0],"ti":[-16.667,0,0]},{"t":78,"s":[71.216,62,0]}],"ix":2},"a":{"a":0,"k":[19.657,14.688,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-9.418,-3.554],[0,0],[0,0],[-0.292,0.556],[0,0],[0,0],[-0.589,-0.221]],"o":[[0,0],[0,0],[-0.589,0.221],[0,0],[0,0],[-0.292,-0.557],[0,0]],"v":[[19.406,0],[19.406,0],[-18.266,14.217],[-19.115,13.26],[-12.178,0],[-19.115,-13.259],[-18.266,-14.217]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[19.657,14.688],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":13,"op":83,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"details 2","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[20.227,13.464,0],"ix":2},"a":{"a":0,"k":[19.731,9.898,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":83,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.358,-1.675],[-5.354,-1.306]],"c":false}]},{"t":87,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[5.503,3.449],[-5.503,-3.449]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[28.96,15.348],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":83,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[1.527,-1.435],[-11.191,-1.507]],"c":false}]},{"t":87,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[5.181,-3.449],[-5.181,3.449]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[10.181,15.347],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":83,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[13.462,3.774],[-0.814,3.942],[-16.755,4.131]],"c":false}]},{"t":87,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[14.732,-4.757],[-0.443,4.757],[-14.732,-4.757]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[19.731,9.757],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":83,"op":124,"st":74,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"full envelope 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":74,"s":[360]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":78,"s":[5]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":93,"s":[365]},{"t":98,"s":[360]}],"ix":10},"p":{"a":0,"k":[62,62,0],"ix":2},"a":{"a":0,"k":[20.409,15.464,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":83,"s":[{"i":[[0,0],[0,0],[0.007,0],[0,0],[0.023,0.011],[0,0],[0,0],[0,0],[0,1.93],[0,0],[0,0],[-1.764,-0.59],[0,0]],"o":[[0,0],[0.021,0.003],[0,0],[-0.012,0.031],[0,0],[0,0],[0,0],[-1.931,0],[0,0],[0,0],[0,-1.931],[0,0],[0,0]],"v":[[1.395,-1.396],[9.205,1.451],[10.201,1.847],[10.222,1.895],[10.175,1.934],[9.444,2.336],[-9.411,9.009],[-20.954,13.722],[-28.089,15.243],[-21.027,1.921],[-28.039,-10.891],[-24.878,-11.242],[-12.218,-6.564]],"c":true}]},{"t":87,"s":[{"i":[[0,0],[0,0],[0,-1.931],[0,0],[1.931,0],[0,0],[0,0],[0,0],[0,1.93],[0,0],[0,0],[-1.931,0],[0,0]],"o":[[0,0],[1.931,0],[0,0],[0,1.93],[0,0],[0,0],[0,0],[-1.931,0],[0,0],[0,0],[0,-1.931],[0,0],[0,0]],"v":[[0.805,-15.214],[16.661,-15.214],[20.159,-11.718],[20.159,11.718],[16.661,15.214],[10.676,15.214],[-10.87,15.214],[-16.661,15.214],[-20.159,11.718],[-20.159,-1.112],[-20.159,-11.718],[-16.661,-15.214],[-4.257,-15.214]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[20.408,15.464],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":83,"op":124,"st":74,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"details ","parent":7,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[20.227,13.464,0],"ix":2},"a":{"a":0,"k":[19.731,9.898,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[5.503,3.449],[-5.503,-3.449]],"c":false}]},{"t":13,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.358,-1.675],[-5.354,-1.306]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[28.96,15.348],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[5.181,-3.449],[-5.181,3.449]],"c":false}]},{"t":13,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[1.527,-1.435],[-11.191,-1.507]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[10.181,15.347],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[14.732,-4.757],[-0.443,4.757],[-14.732,-4.757]],"c":false}]},{"t":13,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[13.462,3.774],[-0.814,3.942],[-16.755,4.131]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[19.731,9.757],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":13,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"full envelope","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":5,"s":[-5]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":20,"s":[365]},{"t":24,"s":[360]}],"ix":10},"p":{"a":0,"k":[62,62,0],"ix":2},"a":{"a":0,"k":[20.409,15.464,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[{"i":[[0,0],[0,0],[0,-1.931],[0,0],[1.931,0],[0,0],[0,0],[0,0],[0,1.93],[0,0],[0,0],[-1.931,0],[0,0]],"o":[[0,0],[1.931,0],[0,0],[0,1.93],[0,0],[0,0],[0,0],[-1.931,0],[0,0],[0,0],[0,-1.931],[0,0],[0,0]],"v":[[0.805,-15.214],[16.661,-15.214],[20.159,-11.718],[20.159,11.718],[16.661,15.214],[10.676,15.214],[-10.87,15.214],[-16.661,15.214],[-20.159,11.718],[-20.159,-1.112],[-20.159,-11.718],[-16.661,-15.214],[-4.257,-15.214]],"c":true}]},{"t":13,"s":[{"i":[[0,0],[0,0],[0.007,0],[0,0],[0.023,0.011],[0,0],[0,0],[0,0],[0,1.93],[0,0],[0,0],[-1.764,-0.59],[0,0]],"o":[[0,0],[0.021,0.003],[0,0],[-0.012,0.031],[0,0],[0,0],[0,0],[-1.931,0],[0,0],[0,0],[0,-1.931],[0,0],[0,0]],"v":[[1.395,-1.396],[9.205,1.451],[10.201,1.847],[10.222,1.895],[10.175,1.934],[9.444,2.336],[-9.411,9.009],[-20.954,13.722],[-28.089,15.243],[-21.027,1.921],[-28.039,-10.891],[-24.878,-11.242],[-12.218,-6.564]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[20.408,15.464],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":13,"st":0,"bm":0}],"markers":[]}') }, function(t) { t.exports = JSON.parse('{"v":"5.5.10","fr":25,"ip":0,"op":75,"w":360,"h":360,"nm":"2","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":3,"nm":"NULL CONTROL","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.47],"y":[1]},"o":{"x":[0.53],"y":[0]},"t":0,"s":[0]},{"t":49,"s":[360]}],"ix":10},"p":{"a":0,"k":[180.107,179.927,0],"ix":2},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[107,107,100],"ix":6}},"ao":0,"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 41 Outlines - Group 2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[107.11,116.158,0],"ix":2},"a":{"a":0,"k":[69.531,80.983,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.503,0],[0,-1.502],[20.6,-2.663],[0,0],[1.063,1.062],[1.061,-1.063],[0,0],[-1.063,-1.061],[0,0],[-0.697,0],[-0.529,0.531],[1.063,1.061],[0,0],[0,24.198],[0,0]],"o":[[-1.502,0],[0,21.316],[0,0],[1.063,-1.061],[-1.062,-1.063],[0,0],[-1.063,1.061],[0,0],[0.53,0.531],[0.696,0],[1.063,-1.062],[0,0],[23.438,-2.854],[0,0],[0,-1.502]],"v":[[22.974,-28.66],[20.254,-25.904],[-16.319,15.717],[-13.104,12.5],[-13.104,8.654],[-16.95,8.654],[-24.632,16.336],[-24.632,20.181],[-16.95,27.863],[-15.026,28.66],[-13.104,27.863],[-13.104,24.017],[-15.965,21.155],[25.694,-25.904],[25.694,-25.975]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[69.398,80.983],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 41 Outlines - Group 4","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[84.994,-33.292,0],"ix":2},"a":{"a":0,"k":[59.292,11.793,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.45,-0.395],[0,0],[-0.221,0],[-0.313,1.232],[1.455,0.369],[0,0],[0.395,-1.45]],"o":[[0,0],[0.226,0.057],[1.217,0],[0.369,-1.456],[0,0],[-1.449,-0.393],[-0.393,1.449]],"v":[[-0.776,2.755],[-0.592,2.803],[0.077,2.887],[2.714,0.835],[0.746,-2.47],[0.65,-2.495],[-2.689,-0.582]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[59.242,11.743],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.315,0.315],"y":[1,1]},"o":{"x":[0.27,0.27],"y":[0,0]},"t":11,"s":[0,0]},{"i":{"x":[0.729,0.729],"y":[1,1]},"o":{"x":[0.68,0.68],"y":[0,0]},"t":26,"s":[100,100]},{"t":42,"s":[0,0]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Layer 41 Outlines - Group 3","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[108.341,-23.731,0],"ix":2},"a":{"a":0,"k":[70.101,16.22,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.304,-0.745],[-0.468,0],[-0.506,0.864],[1.296,0.761],[0,0],[0.747,-1.305]],"o":[[0.433,0.255],[0.934,0],[0.762,-1.294],[0,0],[-1.304,-0.742],[-0.744,1.304]],"v":[[-1.339,2.573],[0.036,2.948],[2.383,1.604],[1.415,-2.117],[1.263,-2.206],[-2.401,-1.165]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[70.051,16.17],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.315,0.315],"y":[1,1]},"o":{"x":[0.27,0.27],"y":[0,0]},"t":9,"s":[0,0]},{"i":{"x":[0.729,0.729],"y":[1,1]},"o":{"x":[0.68,0.68],"y":[0,0]},"t":24,"s":[100,100]},{"t":40,"s":[0,0]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Layer 41 Outlines - Group 6","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[128.271,-8.252,0],"ix":2},"a":{"a":0,"k":[79.328,23.386,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.697,0],[-0.529,0.531],[1.064,1.062],[0,0],[1.062,-1.063],[-1.062,-1.061]],"o":[[0.531,0.531],[0.695,0],[1.064,-1.062],[0,0],[-1.061,-1.063],[-1.062,1.062],[0,0]],"v":[[-1.872,2.108],[0.051,2.904],[1.973,2.108],[1.973,-1.739],[1.873,-1.841],[-1.975,-1.841],[-1.975,2.005]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[79.278,23.336],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.315,0.315],"y":[1,1]},"o":{"x":[0.27,0.27],"y":[0,0]},"t":7,"s":[0,0]},{"i":{"x":[0.729,0.729],"y":[1,1]},"o":{"x":[0.68,0.68],"y":[0,0]},"t":22,"s":[100,100]},{"t":38,"s":[0,0]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Layer 41 Outlines - Group 7","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[143.624,11.598,0],"ix":2},"a":{"a":0,"k":[86.435,32.576,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.926,0],[-0.436,0.262],[0.771,1.29],[0,0],[1.303,-0.746],[-0.744,-1.305]],"o":[[0.508,0.854],[0.475,0],[1.292,-0.769],[0,0],[-0.746,-1.305],[-1.306,0.746],[0,0]],"v":[[-2.299,1.649],[0.038,2.977],[1.429,2.591],[2.371,-1.138],[2.326,-1.217],[-1.384,-2.23],[-2.399,1.482]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[86.385,32.526],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.315,0.315],"y":[1,1]},"o":{"x":[0.27,0.27],"y":[0,0]},"t":5,"s":[0,0]},{"i":{"x":[0.729,0.729],"y":[1,1]},"o":{"x":[0.68,0.68],"y":[0,0]},"t":20,"s":[100,100]},{"t":36,"s":[0,0]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 41 Outlines - Group 5","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[153.278,34.96,0],"ix":2},"a":{"a":0,"k":[90.905,43.392,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.393,-1.451],[0,0],[-1.198,0],[-0.239,0.065],[0.395,1.45],[0,0],[1.45,-0.391]],"o":[[0,0],[0.329,1.211],[0.235,0],[1.449,-0.394],[0,0],[-0.393,-1.449],[-1.449,0.393]],"v":[[-2.645,0.791],[-2.607,0.931],[0.017,2.938],[0.731,2.843],[2.643,-0.495],[2.605,-0.634],[-0.732,-2.547]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[90.855,43.342],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.315,0.315],"y":[1,1]},"o":{"x":[0.27,0.27],"y":[0,0]},"t":3,"s":[0,0]},{"i":{"x":[0.729,0.729],"y":[1,1]},"o":{"x":[0.68,0.68],"y":[0,0]},"t":18,"s":[100,100]},{"t":34,"s":[0,0]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Layer 41 Outlines - Group 8","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[12.675,4.254,0],"ix":2},"a":{"a":0,"k":[25.811,29.176,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,1.503],[-20.602,2.662],[0,0],[-1.062,-1.062],[-0.695,0],[-0.532,0.532],[0,0],[1.063,1.062],[0,0],[1.061,-1.063],[-1.062,-1.062],[0,0],[0,-24.196],[0,0],[-1.502,0]],"o":[[0,-21.314],[0,0],[-1.062,1.061],[0.532,0.532],[0.696,0],[0,0],[1.063,-1.062],[0,0],[-1.061,-1.063],[-1.062,1.062],[0,0],[-23.438,2.855],[0,0],[0,1.501],[1.502,0]],"v":[[-20.254,26.036],[16.32,-15.584],[13.103,-12.367],[13.103,-8.521],[15.026,-7.724],[16.95,-8.521],[24.631,-16.202],[24.631,-20.049],[16.95,-27.73],[13.103,-27.73],[13.103,-23.883],[15.964,-21.023],[-25.694,26.036],[-25.694,26.109],[-22.974,28.793]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[25.944,29.043],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Layer 41 Outlines - Group 11","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-33.278,85.03,0],"ix":2},"a":{"a":0,"k":[4.536,66.572,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.395,1.45],[0,0],[1.451,-0.39],[-0.394,-1.45],[0,0],[-1.198,0],[-0.237,0.063]],"o":[[0,0],[-0.393,-1.45],[-1.45,0.394],[0,0],[0.329,1.211],[0.235,0],[1.451,-0.394]],"v":[[2.644,-0.495],[2.605,-0.635],[-0.731,-2.548],[-2.645,0.79],[-2.606,0.93],[0.017,2.938],[0.73,2.843]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[4.486,66.522],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.315,0.315],"y":[1,1]},"o":{"x":[0.27,0.27],"y":[0,0]},"t":3,"s":[0,0]},{"i":{"x":[0.73,0.73],"y":[1,1]},"o":{"x":[0.68,0.68],"y":[0,0]},"t":18,"s":[100,100]},{"t":34,"s":[0,0]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Layer 41 Outlines - Group 12","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-23.622,108.196,0],"ix":2},"a":{"a":0,"k":[9.007,77.297,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.292,-0.771],[-0.771,-1.289],[0,0],[-0.943,0],[-0.426,0.243],[0.746,1.304]],"o":[[-0.77,-1.291],[-1.29,0.77],[0,0],[0.502,0.878],[0.459,0],[1.304,-0.745],[0,0]],"v":[[2.299,-1.263],[-1.432,-2.204],[-2.372,1.523],[-2.326,1.606],[0.036,2.975],[1.385,2.617],[2.398,-1.094]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.957,77.247],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.315,0.315],"y":[1,1]},"o":{"x":[0.27,0.27],"y":[0,0]},"t":5,"s":[0,0]},{"i":{"x":[0.73,0.73],"y":[1,1]},"o":{"x":[0.68,0.68],"y":[0,0]},"t":20,"s":[100,100]},{"t":36,"s":[0,0]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Layer 41 Outlines - Group 13","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-8.27,128.304,0],"ix":2},"a":{"a":0,"k":[16.114,86.606,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.061,-1.063],[-1.063,-1.061],[0,0],[-0.696,0],[-0.532,0.53],[1.061,1.063]],"o":[[-1.062,-1.063],[-1.063,1.062],[0,0],[0.531,0.53],[0.696,0],[1.061,-1.063],[0,0]],"v":[[1.872,-1.841],[-1.974,-1.841],[-1.974,2.004],[-1.872,2.108],[0.051,2.904],[1.976,2.108],[1.976,-1.74]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[16.064,86.556],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.315,0.315],"y":[1,1]},"o":{"x":[0.27,0.27],"y":[0,0]},"t":7,"s":[0,0]},{"i":{"x":[0.73,0.73],"y":[1,1]},"o":{"x":[0.68,0.68],"y":[0,0]},"t":22,"s":[100,100]},{"t":38,"s":[0,0]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Layer 41 Outlines - Group 10","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[11.662,143.517,0],"ix":2},"a":{"a":0,"k":[25.342,93.649,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.304,0.746],[0.761,-1.297],[-1.295,-0.761],[0,0],[-0.444,0],[-0.506,0.886]],"o":[[-1.294,-0.763],[-0.761,1.294],[0,0],[0.419,0.24],[0.937,0],[0.745,-1.304]],"v":[[1.34,-2.185],[-2.385,-1.215],[-1.417,2.507],[-1.263,2.595],[0.049,2.947],[2.401,1.556]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[25.292,93.599],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.315,0.315],"y":[1,1]},"o":{"x":[0.27,0.27],"y":[0,0]},"t":9,"s":[0,0]},{"i":{"x":[0.73,0.73],"y":[1,1]},"o":{"x":[0.68,0.68],"y":[0,0]},"t":24,"s":[100,100]},{"t":40,"s":[0,0]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Layer 41 Outlines - Group 9","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[35.008,153.292,0],"ix":2},"a":{"a":0,"k":[36.15,98.175,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.451,0.393],[0,0],[0.368,-1.455],[-1.456,-0.37],[0,0],[-0.235,0],[-0.328,1.211]],"o":[[0,0],[-1.456,-0.368],[-0.369,1.457],[0,0],[0.238,0.065],[1.199,0],[0.394,-1.451]],"v":[[0.776,-2.465],[0.592,-2.514],[-2.713,-0.546],[-0.746,2.759],[-0.65,2.785],[0.064,2.882],[2.689,0.873]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[36.1,98.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.315,0.315],"y":[1,1]},"o":{"x":[0.27,0.27],"y":[0,0]},"t":11,"s":[0,0]},{"i":{"x":[0.73,0.73],"y":[1,1]},"o":{"x":[0.68,0.68],"y":[0,0]},"t":26,"s":[100,100]},{"t":42,"s":[0,0]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Layer 43 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[179.894,180.132,0],"ix":2},"a":{"a":0,"k":[15.082,27.502,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.934,-1.025],[0.783,-0.255],[0,0],[-0.468,-0.532],[0,-1.786]],"o":[[-0.508,0.559],[0,0],[0.85,0.519],[0.913,1.037],[0,1.704]],"v":[[4.748,14.873],[2.798,16.08],[2.798,4.969],[4.778,6.544],[6.148,10.779]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0.315,0.295],[0,1.52],[-0.924,1.099],[-0.503,0.266],[0,0]],"o":[[-1.047,-0.987],[0,-1.642],[0.378,-0.45],[0,0],[-0.449,-0.313]],"v":[[-3.736,-6.836],[-5.306,-10.594],[-3.921,-14.704],[-2.582,-15.755],[-2.582,-5.922]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[2.228,2.198],[3.764,1.369],[0,0],[-0.449,-0.519],[-0.14,-1.798],[-0.606,0],[0,0],[0,0],[2.649,2.463],[3.214,0.416],[0,0],[0.415,0],[0,0],[-0.008,-0.42],[0,0],[2.043,-1.781],[0,-3.674],[-2.32,-2.053],[-3.391,-1.384],[0,0],[0.519,0.561],[0.133,2.251],[0.614,0],[0,0],[0,0],[-3.018,-2.37],[-2.933,-0.449],[0,0],[-0.414,0],[0,0],[-0.008,0.408],[0,0],[-2.134,1.798],[0,3.838]],"o":[[-2.025,-1.996],[0,0],[0.615,0.295],[0.87,1.008],[0.047,0.605],[0,0],[0,0],[0.082,-4.147],[-2.078,-1.934],[0,0],[0,-0.415],[0,0],[-0.421,0],[0,0],[-2.911,0.407],[-2.648,2.309],[0,3.696],[1.885,1.669],[0,0],[-0.743,-0.306],[-0.986,-1.067],[-0.036,-0.613],[0,0],[0,0],[-0.103,4.844],[2.249,1.767],[0,0],[0,0.415],[0,0],[0.409,0],[0,0],[3.276,-0.326],[2.607,-2.196],[0,-3.717]],"v":[[11.491,1.848],[2.798,-3.198],[2.798,-15.75],[4.41,-14.549],[5.924,-10.341],[7.087,-9.269],[14.402,-9.269],[14.463,-9.453],[10.613,-19.37],[2.71,-22.881],[2.71,-26.5],[1.96,-27.252],[-1.903,-27.252],[-2.655,-26.485],[-2.582,-22.875],[-10.019,-19.601],[-13.991,-10.625],[-10.511,-2.002],[-2.582,2.576],[-2.582,15.849],[-4.491,14.567],[-6.17,9.591],[-7.335,8.498],[-14.668,8.498],[-14.73,8.685],[-10.356,19.508],[-2.582,22.831],[-2.582,26.5],[-1.832,27.252],[1.975,27.252],[2.725,26.516],[2.798,22.943],[10.923,19.771],[14.832,10.718]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.5568627450980392,0.5568627450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[15.082,27.502],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Layer 44 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[179.999,180.133,0],"ix":2},"a":{"a":0,"k":[33.283,33.283,0],"ix":1},"s":{"a":0,"k":[216,216,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,18.244],[18.243,0],[0,-18.244],[-18.243,0]],"o":[[0,-18.244],[-18.243,0],[0,18.244],[18.243,0]],"v":[[33.033,0],[0,-33.033],[-33.033,0],[0,33.033]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[33.283,33.283],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":0,"ty":0,"nm":"LFPre-comp 2","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[180,180,0],"ix":2},"a":{"a":0,"k":[180,180,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":360,"h":360,"ip":0,"op":75,"st":0,"bm":0},{"ddd":0,"ind":0,"ty":0,"nm":"LFPre-comp 2","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[180,180,0],"ix":2},"a":{"a":0,"k":[180,180,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":360,"h":360,"ip":0,"op":75,"st":0,"bm":0}],"chars":[],"markers":[]}') }, function(t) { t.exports = JSON.parse('{"v":"5.5.5","fr":29.9700012207031,"ip":0,"op":53.0000021587343,"w":700,"h":700,"nm":"Comp 1","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[350,350,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,-100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[700,700],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":13,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[84.571,84.571],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":70,"ix":1},"e":{"a":0,"k":80,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":600.000024438501,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[350,350,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[700,700],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":13,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[84.571,84.571],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":70,"ix":1},"e":{"a":0,"k":80,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":600.000024438501,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[350,350,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,-100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[700,700],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":13,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[84.571,84.571],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":70,"ix":1},"e":{"a":0,"k":80,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":600.000024438501,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[350,350,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[700,700],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":13,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[84.571,84.571],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":70,"ix":1},"e":{"a":0,"k":80,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":600.000024438501,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":1,"y":0},"t":0,"s":[351,90,0],"to":[0,86.833,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":26.329,"s":[351,611,0],"to":[0,0,0],"ti":[0,86.833,0]},{"t":52.0000021180034,"s":[351,90,0]}],"ix":2},"a":{"a":0,"k":[1,-260,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-266,-260],[268,-260]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.266666636747,0.266666636747,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":13,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600.000024438501,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Pre-comp 1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[350,350,0],"ix":2},"a":{"a":0,"k":[350,350,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":700,"h":700,"ip":0,"op":600.000024438501,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"qr-code Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[350,350,0],"ix":2},"a":{"a":0,"k":[256,256,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,40],[20,40],[20,-40],[-20,-40]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[20,277],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-40,-20],[40,-20],[40,20],[-40,20]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[160,217],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-59.5,-40],[-59.5,40],[-19.5,40],[-19.5,0.001],[19.499,0.001],[19.499,40],[59.5,40],[59.5,0.001],[20.5,0.001],[20.5,-40]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[299.5,472],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,-38],[20,-38],[20,38],[-20,38]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[220,394],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-36,-38.5],[-36,38.5],[4,38.5],[4,1.5],[36,1.5],[36,-38.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[436,473.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,-20],[20,-20],[20,20],[-20,20]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[420,375],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,-20],[20,-20],[20,20],[-20,20]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[380,415],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,-20],[20,-20],[20,20],[-20,20]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[340,297],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,40],[20,40],[20,-39.999],[-20,-39.999]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[492,395],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-37,-59.5],[-37,-19.5],[-76,-19.5],[-76,20.5],[-36,20.5],[-36,59.5],[76,59.5],[76,-20.5],[36,-20.5],[36,-59.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-36,-19.5],[36,-19.5],[36,19.501],[-36,19.501]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[436,256.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":4,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,-40],[20,-40],[20,40],[-20,40]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[300,237],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0,39],[0,0],[-40,0],[-40,-79],[-80,-79],[-80,1],[-40,1],[-40,40],[0,40],[0,79],[80,79],[80,39]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[280,316],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0,-40],[0,0],[-40,0],[-40,40],[40,40],[40,-40]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[240,157],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":2,"cix":2,"bm":0,"ix":13,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,20],[20,20],[20,-20],[-20,-20]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[260,20],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":2,"cix":2,"bm":0,"ix":14,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,-38.5],[20,-38.5],[20,38.5],[-20,38.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[220,78.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"bm":0,"ix":15,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,-20],[20,-20],[20,20],[-20,20]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[300,97],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"bm":0,"ix":16,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.5,0],[0.5,-40],[-39.5,-40],[-39.5,0],[-0.5,0],[-0.5,40],[39.5,40],[39.5,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[119.5,277],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"bm":0,"ix":17,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,-20],[20,-20],[20,20],[-20,20]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[60,217],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"bm":0,"ix":18,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,-20],[20,-20],[20,20],[-20,20]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[85,427],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"bm":0,"ix":19,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-85,85],[85,85],[85,-85],[-85,-85]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[-85,-85]],"c":false},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-45,-45],[45,-45],[45,45],[-45,45]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[85,427],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":5,"cix":2,"bm":0,"ix":20,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,-20],[20,-20],[20,20],[-20,20]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[427,85],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"bm":0,"ix":21,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-85,85],[85,85],[85,-85],[-85,-85]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[-85,-85]],"c":false},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-45,-45],[45,-45],[45,45],[-45,45]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[427,85],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":5,"cix":2,"bm":0,"ix":22,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-20,-20],[20,-20],[20,20],[-20,20]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[85,85],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"bm":0,"ix":23,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-85,85],[85,85],[85,-85],[-85,-85]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[-85,-85]],"c":false},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-45,-45],[45,-45],[45,45],[-45,45]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7764705882352941,0.7764705882352941,0.7764705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[85,85],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":5,"cix":2,"bm":0,"ix":24,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600.000024438501,"st":0,"bm":0}],"markers":[]}') }, function(t) { t.exports = JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.9","a":"","k":"","d":"","tc":""},"fr":30,"ip":0,"op":90,"w":300,"h":300,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 24","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":180,"ix":10},"p":{"a":0,"k":[276.875,278,0],"ix":2},"a":{"a":0,"k":[-130.5,-133,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-130.5,-67],[-130.5,-133],[-64.5,-132.75]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"t":50,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":-1,"op":90,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 23","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":270,"ix":10},"p":{"a":0,"k":[24.5,276.5,0],"ix":2},"a":{"a":0,"k":[-130.5,-133,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-130.5,-67],[-130.5,-133],[-64.5,-132.75]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[0]},{"t":45,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":-5,"op":91,"st":-5,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 22","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[276.875,24,0],"ix":2},"a":{"a":0,"k":[-130.5,-133,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-130.5,-67],[-130.5,-133],[-64.5,-132.75]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[0]},{"t":40,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":-10,"op":90,"st":-10,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 21","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[24.5,24,0],"ix":2},"a":{"a":0,"k":[-130.5,-133,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-130.5,-67],[-130.5,-133],[-64.5,-132.75]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[0]},{"t":35,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":-15,"op":90,"st":-15,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 20","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[11,-88],[11,-66.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 19","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-10.75,-66],[-10.5,-104.25],[32,-104.25],[32,-67.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Shape Layer 18","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[70.5,-17.5],[70.5,16],[88.875,16]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Shape Layer 17","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-108.75,-11.5],[14.75,-11.5],[15,15.25],[-109.25,15.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0]},{"t":25,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":5,"op":95,"st":5,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Shape Layer 16","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":1,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Shape Layer 15","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[66.75,-31.75],[104.5,-31.75],[104.5,39.25]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[0]},{"t":35,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":15,"op":105,"st":15,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Shape Layer 14","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-108.75,35.5],[-46.125,35.625]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0]},{"t":25,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":5,"op":95,"st":5,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Shape Layer 13","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-9.5,48.5],[-9.438,93.125]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"t":30,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":10,"op":100,"st":10,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Shape Layer 12","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-30,93.5],[-30,36],[-5,36]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Shape Layer 11","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[51.75,-36],[51.75,20.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Shape Layer 10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[8.25,35.5],[80,35.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0]},{"t":25,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":5,"op":95,"st":5,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Shape Layer 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-108.75,-33.625],[20,-33.75]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,2],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Shape Layer 8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[148.75,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[33.75,48],[33.75,109.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[0]},{"t":35,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":15,"op":105,"st":15,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Shape Layer 7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-34,106],[13,106],[13,48.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Shape Layer 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-31.5,-108.75],[-31.5,-50.875],[34.5,-50.875],[34.5,20.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"t":30,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":10,"op":100,"st":10,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"Shape Layer 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[228.125,229.25,0],"ix":2},"a":{"a":0,"k":[-86,-79,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[9.125,9.125],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-86.438,-79.562],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[53,53],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-86,-79],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[228.125,72.25,0],"ix":2},"a":{"a":0,"k":[-86,-79,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[9.125,9.125],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-86.438,-79.562],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[53,53],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-86,-79],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0]},{"t":25,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":5,"op":95,"st":5,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"Shape Layer 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[72.125,229.25,0],"ix":2},"a":{"a":0,"k":[-86,-79,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[9.125,9.125],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-86.438,-79.562],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[53,53],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-86,-79],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[72.125,72.25,0],"ix":2},"a":{"a":0,"k":[-86,-79,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[9.125,9.125],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-86.438,-79.562],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[53,53],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-86,-79],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0]},{"t":25,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim In Path","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":5,"op":95,"st":5,"bm":0}],"markers":[]}') }, function(t) { t.exports = JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":240,"w":288,"h":288,"nm":"24","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 3 Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":150,"s":[0]},{"t":226,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[137.954,150.95,0],"ix":2},"a":{"a":0,"k":[60.32,40.961,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[2.962,5.409],[2.962,-8.484],[20.043,-8.484],[20.043,5.409],[29.039,5.409],[29.039,20.782],[20.043,20.782],[20.043,39.8],[2.962,39.8],[2.962,20.782],[-29.039,20.782],[-29.039,7.23],[-0.684,-39.8],[18.677,-39.8],[-8.312,5.409]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[91.351,41.872],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.013,2.847],[0,2.658],[1.746,1.785],[2.732,0],[4.48,-7.135],[0,0],[-4.441,2.962],[-6.872,0],[-5.201,-4.364],[0,-7.517],[2.087,-3.758],[5.618,-5.845],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[2.011,-2.847],[0,-2.658],[-1.747,-1.783],[-5.012,0],[0,0],[3.72,-5.769],[4.442,-2.96],[6.87,0],[5.2,4.367],[0,4.099],[-2.089,3.758],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[4.707,-4.783]],"v":[[6.036,-7.858],[9.055,-16.113],[6.434,-22.776],[-0.284,-25.451],[-14.52,-14.747],[-28.755,-23.174],[-16.512,-36.271],[0.456,-40.711],[18.563,-34.164],[26.363,-16.341],[23.232,-4.555],[11.673,9.85],[-2.676,24.768],[28.755,24.768],[28.755,40.711],[-27.387,40.711],[-27.387,27.501],[-4.042,3.587]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[29.004,40.961],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":31,"s":[40]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":61,"s":[80]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":91,"s":[120]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":121,"s":[160]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":150,"s":[180]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":181,"s":[200]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":210,"s":[240]},{"t":239,"s":[280]}],"ix":10},"p":{"a":0,"k":[135.054,147.614,0],"ix":2},"a":{"a":0,"k":[113.087,119.271,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.011,-1.196],[-0.011,-1.196],[-0.021,-2.392],[0,0],[-0.573,-0.015],[-0.573,-0.014],[-1.146,-0.026],[0,0],[-0.073,1.195],[-0.072,1.195],[-0.144,2.389],[0,0],[0,0],[0.655,0.018],[1.312,0.031]],"o":[[0.012,1.196],[0.01,1.196],[0,0],[1.146,0.031],[0.573,0.015],[0.573,0.014],[0,0],[0.144,-2.387],[0.072,-1.194],[0.071,-1.194],[0,0],[-1.312,-0.035],[0,0],[-0.656,-0.017],[0,0],[0.021,2.392]],"v":[[-3.902,-3.676],[-3.869,-0.088],[-3.837,3.501],[-3.805,7.089],[-2.087,7.136],[-0.368,7.181],[1.35,7.224],[3.069,7.264],[3.285,3.683],[3.502,0.101],[3.718,-3.481],[3.934,-7.063],[1.967,-7.116],[0,-7.167],[-1.967,-7.218],[-3.934,-7.264]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[115.836,19.883],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.843,-0.122],[0.844,-0.123],[1.684,-0.248],[0,0],[-0.225,-1.175],[-0.225,-1.175],[-0.45,-2.349],[0,0],[-0.736,0.107],[-0.735,0.108],[-0.367,0.054],[-0.736,0.11],[0,0],[0.119,1.191],[0.118,1.189],[0.236,2.381]],"o":[[0,0],[-0.843,0.122],[-0.842,0.123],[0,0],[0.45,2.35],[0.225,1.174],[0.226,1.175],[0,0],[1.472,-0.211],[0.736,-0.107],[0.735,-0.107],[0.368,-0.054],[0,0],[-0.237,-2.38],[-0.119,-1.19],[-0.118,-1.19],[0,0],[0,0]],"v":[[3.081,-7.602],[1.817,-7.421],[-0.712,-7.055],[-3.24,-6.686],[-5.766,-6.314],[-5.09,-2.789],[-4.415,0.735],[-3.738,4.259],[-3.063,7.783],[-0.855,7.468],[1.353,7.148],[3.559,6.826],[4.662,6.664],[5.766,6.5],[5.411,2.929],[5.056,-0.641],[4.701,-4.211],[4.346,-7.783]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[97.352,20.953],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.398,-0.124],[0.399,-0.124],[0.398,-0.125],[0.015,-0.006],[0,0],[0,0],[-0.434,-1.115],[-0.434,-1.115],[-0.868,-2.23],[0,0],[-0.014,0.005],[-0.349,0.109],[-0.347,0.109],[-0.347,0.109],[-0.694,0.218],[0,0],[0.331,1.149],[0.331,1.149],[0.662,2.3]],"o":[[-0.398,0.124],[-0.399,0.125],[-0.398,0.125],[-0.015,0.005],[0,0],[0.868,2.229],[0.433,1.115],[0.435,1.114],[0,0],[2.824,-1.025],[0.014,-0.004],[0.347,-0.108],[0.346,-0.108],[0.347,-0.108],[0,0],[-0.661,-2.298],[-0.331,-1.151],[-0.331,-1.15],[0,0],[-0.797,0.247]],"v":[[1.661,-7.951],[0.467,-7.579],[-0.729,-7.205],[-1.923,-6.831],[-1.968,-6.815],[-6.826,-5.053],[-5.523,-1.71],[-4.222,1.635],[-2.92,4.979],[-1.619,8.323],[2.617,6.785],[2.657,6.772],[3.7,6.448],[4.742,6.123],[5.784,5.797],[6.826,5.47],[5.834,2.023],[4.842,-1.426],[3.849,-4.874],[2.857,-8.323]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[78.79,25.34],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.745,-0.413],[0.744,-0.415],[1.487,-0.832],[0,0],[-0.629,-1.018],[-0.63,-1.018],[-1.257,-2.035],[0,0],[-0.65,0.361],[0,0],[-1.297,0.726],[0,0],[0.534,1.07],[0.533,1.071],[1.067,2.141]],"o":[[-0.744,0.414],[-0.744,0.415],[0,0],[1.258,2.035],[0.629,1.018],[0.628,1.018],[0,0],[1.301,-0.72],[0.65,-0.361],[0,0],[0,0],[-1.067,-2.141],[-0.533,-1.07],[-0.534,-1.071],[0,0],[0,0]],"v":[[-0.971,-7.354],[-3.205,-6.113],[-5.437,-4.868],[-7.667,-3.62],[-5.781,-0.568],[-3.895,2.486],[-2.008,5.538],[-0.123,8.592],[1.827,7.512],[3.776,6.43],[5.723,5.344],[7.667,4.255],[6.066,1.042],[4.466,-2.169],[2.866,-5.381],[1.265,-8.592]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[61.353,33.017],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.599,-0.487],[0.598,-0.488],[0.598,-0.49],[0.012,-0.011],[0.445,-0.398],[0,0],[-0.8,-0.889],[-0.8,-0.889],[-1.601,-1.779],[0,0],[-0.011,0.009],[-0.524,0.426],[-0.524,0.426],[-0.523,0.428],[-1.045,0.857],[0,0],[0.718,0.955],[0.718,0.956],[1.436,1.914]],"o":[[-0.598,0.488],[-0.598,0.489],[-0.598,0.49],[-0.012,0.01],[0,0],[1.6,1.777],[0.8,0.89],[0.8,0.889],[0,0],[0.389,-0.348],[0.011,-0.009],[0.524,-0.426],[0.524,-0.427],[0.523,-0.428],[0,0],[-1.436,-1.913],[-0.718,-0.957],[-0.719,-0.958],[0,0],[-1.199,0.974]],"v":[[-2.164,-7.116],[-3.96,-5.652],[-5.755,-4.185],[-7.547,-2.716],[-7.583,-2.685],[-8.25,-2.089],[-5.849,0.577],[-3.447,3.244],[-1.046,5.911],[1.355,8.578],[1.938,8.056],[1.97,8.029],[3.543,6.751],[5.114,5.471],[6.683,4.188],[8.25,2.903],[6.096,0.033],[3.943,-2.837],[1.788,-5.708],[-0.366,-8.578]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.61,43.734],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.202,-2.598],[0,0],[-0.947,-0.731],[-0.947,-0.731],[-1.893,-1.462],[0,0],[0,0],[0.876,0.813],[0.876,0.814],[1.753,1.628]],"o":[[1.893,1.463],[0.945,0.731],[0.946,0.732],[0,0],[0,0],[-1.752,-1.627],[-0.876,-0.813],[-0.877,-0.815],[0,0],[-2.202,2.599]],"v":[[-8.562,-0.491],[-5.722,1.703],[-2.883,3.897],[-0.043,6.09],[2.796,8.285],[8.562,1.481],[5.933,-0.961],[3.304,-3.4],[0.674,-5.842],[-1.956,-8.285]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[32.046,57.087],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-1.064,-0.547],[-1.064,-0.548],[-2.126,-1.095],[-1.479,2.577],[0,0],[1.01,0.643],[1.009,0.642],[2.018,1.284]],"o":[[2.127,1.096],[1.063,0.548],[1.063,0.548],[0,0],[1.48,-2.576],[-2.018,-1.283],[-1.01,-0.642],[-1.008,-0.642],[0,0],[0,0]],"v":[[-8.598,1.145],[-5.408,2.788],[-2.217,4.431],[0.973,6.075],[4.161,7.717],[8.598,-0.011],[5.572,-1.937],[2.544,-3.864],[-0.484,-5.79],[-3.51,-7.717]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[21.12,72.676],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.134,-3.212],[0,0],[-1.145,-0.347],[-1.144,-0.346],[-2.29,-0.693],[0,0],[0,0],[1.109,0.448],[1.109,0.449],[2.217,0.897]],"o":[[2.29,0.693],[1.144,0.347],[1.145,0.346],[0,0],[0,0],[-2.218,-0.897],[-1.109,-0.449],[-1.109,-0.449],[0,0],[-1.134,3.212]],"v":[[-8.353,2.739],[-4.918,3.778],[-1.484,4.818],[1.95,5.858],[5.385,6.898],[8.353,-1.512],[5.027,-2.859],[1.7,-4.206],[-1.626,-5.551],[-4.952,-6.898]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[13.214,90.007],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.538,-3.362],[0,0],[-1.188,-0.136],[-1.188,-0.135],[0,0],[-0.47,2.937],[0,0],[1.172,0.242],[1.172,0.242],[2.342,0.484]],"o":[[2.377,0.271],[1.188,0.136],[1.189,0.135],[0,0],[0.47,-2.938],[-2.343,-0.484],[-1.172,-0.242],[-1.171,-0.242],[0,0],[-0.539,3.362]],"v":[[-7.835,4.229],[-4.27,4.636],[-0.705,5.043],[2.86,5.449],[6.425,5.857],[7.835,-2.954],[4.321,-3.68],[0.807,-4.406],[-2.708,-5.132],[-6.221,-5.857]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.567,108.504],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.072,-3.403],[0,0],[-1.193,0.08],[-1.193,0.08],[0,0],[0.064,2.974],[0,0],[0,0],[0,0],[2.392,0.057]],"o":[[2.388,-0.157],[1.193,-0.08],[1.194,-0.079],[0,0],[-0.063,-2.974],[0,0],[0,0],[0,0],[0,0],[0.072,3.403]],"v":[[-7.053,5.105],[-3.473,4.869],[0.107,4.63],[3.689,4.392],[7.27,4.156],[7.079,-4.767],[3.492,-4.851],[-0.094,-4.936],[-3.682,-5.021],[-7.27,-5.105]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7.3,128.027],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.182,-0.186],[1.182,-0.186],[2.363,-0.373],[-0.683,-3.338],[0,0],[-1.159,0.292],[-1.159,0.292],[-2.32,0.585],[0.596,2.913]],"o":[[-1.182,0.186],[-1.181,0.188],[0,0],[0.683,3.336],[2.319,-0.585],[1.16,-0.292],[1.16,-0.292],[0,0],[-0.596,-2.914],[-2.363,0.372]],"v":[[2.651,-5.566],[-0.894,-5.007],[-4.438,-4.447],[-7.983,-3.887],[-5.935,6.124],[-2.456,5.245],[1.024,4.369],[4.503,3.492],[7.983,2.614],[6.195,-6.124]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[9.366,147.174],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.129,-0.398],[0,0],[2.257,-0.793],[0,0],[0,0],[-1.087,0.497],[-1.088,0.499],[-2.175,0.995],[1.113,2.758]],"o":[[-1.128,0.397],[0,0],[0,0],[0,0],[2.175,-0.996],[1.087,-0.498],[1.088,-0.499],[0,0],[-1.113,-2.757],[-2.257,0.794]],"v":[[1.715,-5.933],[-1.67,-4.742],[-5.055,-3.552],[-8.44,-2.363],[-4.611,7.124],[-1.348,5.631],[1.914,4.138],[5.177,2.643],[8.44,1.15],[5.101,-7.123]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[14.819,165.447],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.038,-0.595],[1.038,-0.594],[0,0],[-1.826,-2.875],[0,0],[-0.979,0.685],[-0.98,0.687],[-1.959,1.372],[1.594,2.51]],"o":[[-1.038,0.595],[-1.039,0.594],[0,0],[1.826,2.876],[1.959,-1.371],[0.98,-0.687],[0.98,-0.687],[0,0],[-1.594,-2.51],[-2.075,1.19]],"v":[[0.723,-6.098],[-2.391,-4.313],[-5.505,-2.53],[-8.618,-0.745],[-3.139,7.882],[-0.2,5.824],[2.74,3.766],[5.678,1.706],[8.618,-0.353],[3.835,-7.882]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[23.499,182.407],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":2,"cix":2,"bm":0,"ix":13,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.915,-0.771],[0.913,-0.771],[1.829,-1.543],[0,0],[-0.416,-0.481],[-0.01,-0.012],[-3.387,-3.582],[0,0],[-0.841,0.849],[-0.842,0.85],[-1.685,1.7],[0,0],[0.009,0.011],[0.365,0.422],[0.327,0.379]],"o":[[-0.914,0.772],[-0.913,0.771],[0,0],[0.374,0.433],[0.417,0.481],[0.01,0.012],[0,0],[1.683,-1.699],[0.841,-0.85],[0.843,-0.85],[0,0],[-2.962,-3.133],[-0.009,-0.011],[-0.365,-0.421],[0,0],[-1.829,1.543]],"v":[[-0.285,-6.064],[-3.028,-3.751],[-5.77,-1.437],[-8.513,0.878],[-7.952,1.527],[-6.703,2.971],[-6.672,3.007],[-1.591,8.378],[0.935,5.829],[3.46,3.281],[5.987,0.732],[8.513,-1.816],[4.069,-6.516],[4.042,-6.546],[2.949,-7.811],[2.458,-8.378]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[35.105,197.507],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":2,"cix":2,"bm":0,"ix":14,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.763,-0.922],[0.763,-0.922],[1.524,-1.843],[-2.721,-2.05],[0,0],[-0.676,0.988],[-0.675,0.988],[0,0],[0,0]],"o":[[-0.761,0.922],[-0.762,0.922],[0,0],[2.722,2.049],[1.35,-1.976],[0.675,-0.987],[0.675,-0.987],[0,0],[0,0],[-1.524,1.844]],"v":[[-1.276,-5.839],[-3.562,-3.073],[-5.848,-0.307],[-8.133,2.458],[0.032,8.605],[2.057,5.643],[4.083,2.68],[6.107,-0.283],[8.133,-3.244],[1.012,-8.605]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[49.218,210.284],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"bm":0,"ix":15,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.583,-1.045],[0.584,-1.044],[0,0],[0,0],[0,0],[-1.888,-0.869],[0,0],[-0.486,1.093],[-0.486,1.093],[-0.97,2.186],[0,0],[0,0],[3.643,1.884]],"o":[[-0.582,1.044],[-0.582,1.045],[0,0],[4.177,2.159],[0,0],[0,0],[0.969,-2.187],[0.485,-1.093],[0.485,-1.093],[0,0],[-1.646,-0.758],[0,0],[0,0],[-1.165,2.09]],"v":[[-2.239,-5.415],[-3.986,-2.281],[-5.734,0.853],[-7.48,3.987],[-1.215,7.225],[-1.172,7.247],[1.66,8.551],[3.115,5.271],[4.571,1.991],[6.026,-1.289],[7.48,-4.569],[5.011,-5.707],[4.974,-5.725],[-0.491,-8.551]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[65.42,220.28],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"bm":0,"ix":16,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.385,-1.133],[0.385,-1.133],[0.768,-2.266],[-3.272,-0.946],[0,0],[-0.28,1.162],[-0.28,1.163],[-0.56,2.326],[2.856,0.827]],"o":[[-0.384,1.133],[-0.384,1.133],[0,0],[3.271,0.946],[0.561,-2.325],[0.28,-1.164],[0.281,-1.163],[0,0],[-2.856,-0.827],[-0.768,2.265]],"v":[[-3.132,-4.817],[-4.285,-1.419],[-5.437,1.979],[-6.589,5.378],[3.227,8.217],[4.066,4.73],[4.908,1.24],[5.749,-2.249],[6.589,-5.736],[-1.98,-8.217]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[83.177,227.166],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"bm":0,"ix":17,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.175,-1.183],[0.174,-1.184],[0.348,-2.366],[0,0],[-0.016,-0.001],[-0.278,-0.017],[0,0],[0,0],[-0.067,1.194],[0,0],[0,0],[0.014,0.001],[5.648,0.586]],"o":[[-0.174,1.183],[-0.173,1.183],[0,0],[6.465,0.671],[0.016,0.001],[0,0],[0,0],[0,0],[0.067,-1.194],[0,0],[-0.242,-0.014],[-0.014,-0.001],[0,0],[-0.349,2.367]],"v":[[-3.916,-4.067],[-4.44,-0.517],[-4.962,3.033],[-5.485,6.583],[4.213,7.588],[4.26,7.593],[4.676,7.617],[4.878,4.034],[5.08,0.452],[5.282,-3.13],[5.485,-6.714],[5.122,-6.734],[5.081,-6.739],[-3.392,-7.617]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[101.918,230.743],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"bm":0,"ix":18,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.967,-0.233],[0,0],[-0.04,-1.195],[0,0],[-0.081,-2.391],[-3.397,0.267],[0,0],[0.147,1.186],[0.147,1.188],[0.295,2.374]],"o":[[0.08,2.392],[0.039,1.196],[0,0],[0,0],[3.397,-0.267],[-0.295,-2.374],[-0.147,-1.187],[-0.147,-1.188],[0,0],[-2.967,0.234]],"v":[[-5.337,-6.823],[-5.216,-3.236],[-5.096,0.35],[-4.976,3.937],[-4.855,7.523],[5.337,6.72],[4.893,3.159],[4.451,-0.401],[4.009,-3.963],[3.565,-7.524]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[121.663,230.954],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"bm":0,"ix":19,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.873,-0.763],[0,0],[-0.254,-1.169],[-0.255,-1.169],[-0.508,-2.336],[-3.292,0.874],[0,0],[0.358,1.14],[0.359,1.142],[0.719,2.283]],"o":[[0.509,2.337],[0.254,1.168],[0.254,1.169],[0,0],[3.293,-0.873],[-0.718,-2.283],[-0.36,-1.141],[-0.36,-1.142],[0,0],[-2.872,0.764]],"v":[[-6.464,-5.867],[-5.701,-2.361],[-4.938,1.145],[-4.175,4.652],[-3.413,8.157],[6.465,5.535],[5.388,2.112],[4.311,-1.31],[3.233,-4.734],[2.155,-8.157]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[140.485,227.798],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":2,"cix":2,"bm":0,"ix":20,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.687,-1.271],[0,0],[-0.462,-1.104],[-0.461,-1.104],[-0.924,-2.207],[-3.082,1.456],[0,0],[0.56,1.057],[0.56,1.057],[1.12,2.113]],"o":[[0.924,2.207],[0.461,1.104],[0.461,1.103],[0,0],[3.081,-1.457],[-1.121,-2.115],[-0.559,-1.057],[-0.56,-1.057],[0,0],[-2.687,1.269]],"v":[[-7.391,-4.716],[-6.006,-1.406],[-4.621,1.905],[-3.237,5.216],[-1.852,8.526],[7.39,4.156],[5.709,0.985],[4.029,-2.186],[2.349,-5.357],[0.669,-8.526]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[158.401,221.297],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"bm":0,"ix":21,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.416,-1.736],[0,0],[-0.655,-1.003],[-0.655,-1.001],[-1.308,-2.003],[-2.765,1.988],[0,0],[0.742,0.94],[0.742,0.939],[0,0]],"o":[[1.308,2.004],[0.655,1.002],[0.653,1.001],[0,0],[2.765,-1.988],[-1.482,-1.878],[-0.742,-0.939],[-0.742,-0.939],[0,0],[-2.416,1.737]],"v":[[-8.07,-3.405],[-6.109,-0.4],[-4.146,2.605],[-2.185,5.609],[-0.224,8.615],[8.071,2.651],[5.848,-0.167],[3.624,-2.982],[1.4,-5.798],[-0.823,-8.615]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[174.821,211.646],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"bm":0,"ix":22,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.068,-2.138],[0,0],[-0.821,-0.869],[-0.821,-0.87],[-1.643,-1.738],[-2.366,2.447],[0,0],[0.896,0.792],[0,0],[0,0]],"o":[[1.643,1.739],[0.821,0.868],[0.822,0.869],[0,0],[2.366,-2.447],[0,0],[-0.896,-0.792],[0,0],[0,0],[-2.068,2.138]],"v":[[-8.479,-2.008],[-6.013,0.599],[-3.549,3.206],[-1.084,5.814],[1.382,8.423],[8.48,1.081],[5.791,-1.294],[3.103,-3.671],[0.413,-6.047],[-2.276,-8.423]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[189.231,199.199],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"bm":0,"ix":23,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.646,-2.473],[0,0],[-0.964,-0.707],[-0.964,-0.708],[-1.929,-1.415],[-1.888,2.836],[0,0],[1.024,0.616],[1.026,0.617],[2.05,1.233]],"o":[[1.928,1.415],[0.964,0.707],[0.965,0.708],[0,0],[1.887,-2.835],[-2.05,-1.233],[-1.025,-0.616],[-1.026,-0.618],[0,0],[-1.646,2.472]],"v":[[-8.618,-0.535],[-5.725,1.587],[-2.832,3.709],[0.061,5.832],[2.955,7.954],[8.618,-0.553],[5.543,-2.403],[2.47,-4.253],[-0.606,-6.103],[-3.68,-7.954]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[201.169,184.369],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":2,"cix":2,"bm":0,"ix":24,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.138,-0.288],[0,0],[-1.076,-0.521],[-1.076,-0.522],[-2.154,-1.042],[0,0],[-0.007,0.013],[0,0],[0,0],[1.118,0.421],[1.121,0.421],[2.239,0.843]],"o":[[0,0],[0,0],[2.152,1.042],[1.076,0.521],[1.077,0.522],[0,0],[0.159,-0.331],[0.006,-0.014],[0,0],[-2.239,-0.843],[-1.119,-0.42],[-1.121,-0.421],[0,0],[-2.192,5.149]],"v":[[-8.249,0.5],[-8.266,0.538],[-8.474,0.971],[-5.244,2.534],[-2.015,4.097],[1.216,5.661],[4.446,7.223],[4.685,6.726],[4.704,6.684],[8.474,-2.169],[5.116,-3.434],[1.758,-4.696],[-1.602,-5.96],[-4.96,-7.223]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[210.206,167.608],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":2,"cix":2,"bm":0,"ix":25,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.165,-0.724],[0.165,-0.724],[0.326,-1.45],[0,0],[-1.153,-0.319],[-1.152,-0.318],[-2.305,-0.635],[0,0],[-0.19,0.83],[0,0],[-0.375,1.661],[0,0],[1.177,0.213],[0,0],[2.354,0.426]],"o":[[-0.166,0.724],[-0.165,0.725],[0,0],[2.306,0.637],[1.154,0.317],[1.153,0.316],[0,0],[0.384,-1.659],[0.19,-0.83],[0,0],[0,0],[-2.353,-0.426],[-1.177,-0.214],[0,0],[0,0],[0,0]],"v":[[-6.572,-4.084],[-7.069,-1.911],[-7.563,0.264],[-8.053,2.44],[-4.595,3.395],[-1.135,4.35],[2.324,5.303],[5.782,6.257],[6.356,3.769],[6.925,1.279],[7.491,-1.212],[8.053,-3.703],[4.522,-4.341],[0.991,-4.981],[-2.54,-5.62],[-6.071,-6.258]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[216.058,149.463],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":2,"cix":2,"bm":0,"ix":26,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.196,-0.001],[1.196,0],[2.392,-0.002],[0,0],[0.015,-0.505],[0.014,-0.504],[0.014,-0.505],[0,-0.014],[0,0],[0,0],[-1.191,-0.106],[0,0],[-2.383,-0.213],[0,0],[-0.001,0.015],[-0.018,0.578],[0,0],[-0.018,0.577],[-0.033,1.153]],"o":[[-1.195,0.001],[-1.196,0.001],[0,0],[-0.031,1.008],[-0.016,0.504],[-0.015,0.503],[-0.014,0.505],[-0.001,0.013],[0,0],[2.382,0.212],[1.191,0.107],[0,0],[0,0],[0.162,-2.153],[0,-0.016],[0.019,-0.577],[0,0],[0.017,-0.577],[0,0],[-2.392,0.002]],"v":[[3.783,-5.098],[0.196,-5.095],[-3.392,-5.092],[-6.981,-5.088],[-7.028,-3.575],[-7.074,-2.062],[-7.118,-0.551],[-7.161,0.963],[-7.163,1.004],[-7.373,3.825],[-3.799,4.143],[-0.226,4.463],[3.349,4.782],[6.922,5.101],[7.165,1.872],[7.166,1.824],[7.22,0.092],[7.273,-1.639],[7.324,-3.37],[7.372,-5.101]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[218.552,130.537],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":2,"cix":2,"bm":0,"ix":27,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.176,-0.216],[1.177,-0.215],[2.353,-0.431],[0,0],[-0.101,-0.737],[0,0],[0,0],[0,0],[-1.192,0.109],[-1.192,0.109],[-2.383,0.216],[0,0],[0.116,0.844],[0.116,0.845],[0,0]],"o":[[-1.175,0.216],[-1.177,0.216],[0,0],[0.198,1.474],[0.101,0.737],[0,0],[0,0],[2.383,-0.218],[1.191,-0.109],[1.19,-0.109],[0,0],[-0.228,-1.688],[-0.116,-0.843],[-0.116,-0.843],[0,0],[0,0]],"v":[[2.835,-5.066],[-0.693,-4.419],[-4.223,-3.772],[-7.753,-3.125],[-7.456,-0.915],[-7.154,1.296],[-6.85,3.504],[-6.542,5.714],[-2.969,5.388],[0.605,5.061],[4.178,4.735],[7.753,4.41],[7.41,1.878],[7.065,-0.653],[6.717,-3.184],[6.365,-5.714]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[217.704,110.819],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":2,"cix":2,"bm":0,"ix":28,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.118,-0.424],[0,0],[2.236,-0.849],[0,0],[-0.208,-0.582],[-0.005,-0.013],[-1.013,-3.294],[0,0],[-1.151,0.321],[0,0],[-2.303,0.642],[0,0],[0.006,0.015],[0,0],[0.479,1.333]],"o":[[-1.118,0.425],[0,0],[0,0],[0.416,1.163],[0.208,0.582],[0.005,0.012],[0,0],[2.304,-0.642],[1.153,-0.322],[0,0],[0,0],[-1.162,-3.777],[-0.006,-0.015],[0,0],[0,0],[0,0]],"v":[[1.759,-5.508],[-1.595,-4.234],[-4.949,-2.959],[-8.304,-1.686],[-7.68,0.058],[-7.055,1.802],[-7.041,1.841],[-5.521,6.782],[-2.065,5.819],[1.391,4.855],[4.848,3.891],[8.304,2.927],[6.562,-2.739],[6.546,-2.784],[5.832,-4.783],[5.113,-6.782]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[213.469,92.221],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 29","np":2,"cix":2,"bm":0,"ix":29,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.023,-0.621],[1.023,-0.621],[2.045,-1.24],[0,0],[-0.358,-0.653],[-0.357,-0.651],[-0.716,-1.303],[0,0],[-1.075,0.525],[-1.076,0.525],[-2.151,1.048],[0,0],[0.408,0.748],[0.41,0.747],[0.82,1.494]],"o":[[-1.024,0.62],[-1.023,0.62],[0,0],[0.709,1.307],[0.355,0.652],[0.356,0.651],[0,0],[2.149,-1.05],[1.075,-0.525],[1.075,-0.525],[0,0],[-0.813,-1.498],[-0.408,-0.747],[-0.41,-0.748],[0,0],[-2.045,1.24]],"v":[[0.619,-5.774],[-2.45,-3.913],[-5.518,-2.052],[-8.586,-0.191],[-7.523,1.768],[-6.455,3.726],[-5.386,5.68],[-4.313,7.635],[-1.089,6.06],[2.136,4.486],[5.361,2.912],[8.585,1.338],[7.365,-0.909],[6.142,-3.152],[4.915,-5.394],[3.686,-7.635]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[205.936,74.721],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 30","np":2,"cix":2,"bm":0,"ix":30,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.895,-0.794],[0.896,-0.794],[1.79,-1.586],[0,0],[-0.468,-0.579],[-0.468,-0.577],[-0.939,-1.155],[0,0],[-0.963,0.711],[-0.963,0.71],[-1.924,1.421],[0,0],[0.536,0.662],[0,0],[1.074,1.32]],"o":[[-0.895,0.792],[-0.896,0.793],[0,0],[0,0],[0.467,0.579],[0.469,0.578],[0,0],[1.925,-1.42],[0.963,-0.711],[0.962,-0.711],[0,0],[-1.067,-1.325],[-0.534,-0.662],[0,0],[0,0],[-1.79,1.587]],"v":[[-0.527,-5.85],[-3.212,-3.47],[-5.898,-1.09],[-8.583,1.289],[-7.184,3.028],[-5.781,4.764],[-4.374,6.498],[-2.965,8.23],[-0.077,6.1],[2.809,3.969],[5.697,1.838],[8.583,-0.293],[6.982,-2.28],[5.376,-4.266],[3.768,-6.249],[2.159,-8.23]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[195.348,58.89],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 31","np":2,"cix":2,"bm":0,"ix":31,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.938,-0.012],[0.938,-0.035],[1.871,-0.182],[3.687,-0.742],[3.594,-1.108],[3.465,-1.463],[0.015,-0.006],[0.831,-0.363],[0.822,-0.383],[1.598,-0.861],[3.007,-2.029],[2.798,-2.307],[2.564,-2.563],[0.011,-0.011],[2.307,-2.798],[2.029,-3.006],[1.73,-3.189],[1.413,-3.342],[0.006,-0.015],[1.108,-3.595],[0.742,-3.686],[0.372,-3.74],[0.002,-3.753],[0,0],[-1.608,-7.647],[-2.815,-6.657],[-0.007,-0.016],[-10.256,-10.252],[-0.012,-0.012],[-13.372,-5.652],[-0.014,-0.006],[-15.018,0.009],[0,0],[-13.855,5.868],[-0.014,0.007],[-10.253,10.256],[0,0],[-2.307,2.797],[-2.028,3.006],[-1.73,3.189],[-1.414,3.341],[-0.005,0.015],[-1.11,3.596],[-0.742,3.689],[-0.371,3.742],[-0.161,1.872],[-0.005,3.756],[0,0],[0,0],[0,0],[0,0],[0.105,-1.639],[0,0],[0.649,-3.218],[0.967,-3.136],[1.276,-3.022],[0.006,-0.012],[1.51,-2.783],[1.771,-2.625],[2.015,-2.444],[2.239,-2.24],[0,0],[11.663,-4.929],[0.013,-0.005],[13.146,0.004],[0,0],[12.085,5.117],[0.012,0.005],[8.958,8.962],[0.01,0.01],[4.929,11.662],[0,0],[1.291,6.171],[0,6.83],[0,0],[-0.324,3.267],[-0.648,3.216],[-0.967,3.135],[-1.277,3.022],[-0.006,0.013],[-1.509,2.782],[-1.771,2.624],[-2.015,2.445],[-2.24,2.241],[-0.01,0.01],[-2.444,2.014],[-2.625,1.771],[-2.783,1.509],[-1.423,0.693],[-0.717,0.334],[-0.725,0.317],[-0.012,0.006],[-3.135,0.966],[-3.216,0.648],[-3.267,0.324],[-1.64,0.088],[-0.821,0.029],[-0.82,0.01],[0,0],[-3.216,-0.315],[-1.601,-0.232],[-0.798,-0.127],[-0.795,-0.147],[-1.568,-0.388],[-0.781,-0.205],[-0.776,-0.225],[-0.77,-0.244],[-0.764,-0.263],[-0.757,-0.282],[-1.498,-0.601],[0,0],[-0.459,1.104],[0,0],[0,0],[0,0],[0.867,0.323],[0.874,0.302],[0.883,0.28],[0.889,0.258],[0.895,0.236],[1.815,0.364],[0.91,0.168],[0.914,0.146],[1.842,0.184],[3.698,0.002]],"o":[[-0.939,0.013],[-0.938,0.035],[-1.875,0.099],[-3.74,0.372],[-3.686,0.742],[-3.594,1.109],[-0.014,0.007],[-0.831,0.364],[-0.822,0.384],[-1.632,0.794],[-3.187,1.73],[-3.007,2.028],[-2.798,2.306],[-0.012,0.01],[-2.564,2.564],[-2.306,2.798],[-2.028,3.007],[-1.73,3.189],[-0.007,0.015],[-1.464,3.464],[-1.109,3.593],[-0.743,3.687],[-0.371,3.74],[0,0],[0.001,7.802],[1.48,7.074],[0.006,0.015],[5.652,13.37],[0.012,0.012],[10.253,10.256],[0.015,0.006],[13.855,5.868],[0,0],[15.019,0.009],[0.015,-0.006],[13.372,-5.652],[0,0],[2.563,-2.564],[2.306,-2.798],[2.028,-3.007],[1.73,-3.187],[0.006,-0.016],[1.465,-3.466],[1.108,-3.596],[0.743,-3.689],[0,0],[0.123,-1.875],[0,0],[0,0],[0,0],[0,0],[-0.004,3.289],[-0.142,1.635],[-0.324,3.268],[-0.647,3.217],[-0.967,3.136],[-0.006,0.013],[-1.232,2.915],[-1.51,2.783],[-1.771,2.625],[-2.014,2.444],[0,0],[-8.958,8.962],[-0.012,0.005],[-12.086,5.117],[0,0],[-13.145,0.004],[-0.013,-0.005],[-11.662,-4.929],[-0.01,-0.009],[-8.962,-8.96],[0,0],[-2.455,-5.806],[-1.402,-6.671],[0,0],[0,-3.286],[0.325,-3.266],[0.648,-3.215],[0.966,-3.133],[0.005,-0.012],[1.233,-2.915],[1.51,-2.783],[1.77,-2.627],[2.015,-2.444],[0.01,-0.009],[2.241,-2.239],[2.445,-2.015],[2.625,-1.771],[1.394,-0.751],[0.718,-0.334],[0.725,-0.318],[0.012,-0.006],[3.022,-1.276],[3.132,-0.967],[3.215,-0.647],[1.633,-0.158],[0.82,-0.032],[0.822,-0.011],[0,0],[3.236,0.001],[1.609,0.162],[0.796,0.128],[0.794,0.148],[1.583,0.318],[0.78,0.205],[0.775,0.225],[0.77,0.244],[0.764,0.263],[0.757,0.282],[0,0],[0,0],[0.459,-1.105],[0,0],[0,0],[-1.719,-0.69],[-0.868,-0.323],[-0.876,-0.302],[-0.883,-0.28],[-0.888,-0.257],[-0.894,-0.236],[-1.799,-0.446],[-0.911,-0.169],[-0.914,-0.147],[-1.832,-0.267],[-3.683,-0.361],[0,0]],"v":[[-0.024,-112.967],[-2.84,-112.93],[-5.655,-112.826],[-11.275,-112.408],[-22.424,-110.736],[-33.354,-107.958],[-43.951,-104.096],[-43.994,-104.077],[-46.487,-102.986],[-48.953,-101.835],[-53.798,-99.355],[-63.097,-93.714],[-71.81,-87.206],[-79.86,-79.896],[-79.893,-79.863],[-87.204,-71.814],[-93.711,-63.1],[-99.353,-53.801],[-104.073,-43.997],[-104.092,-43.954],[-107.953,-33.357],[-110.732,-22.428],[-112.404,-11.279],[-112.963,-0.029],[-112.963,0.02],[-110.553,23.283],[-104.092,43.945],[-104.073,43.991],[-79.894,79.854],[-79.86,79.889],[-43.994,104.068],[-43.951,104.087],[-0.024,112.958],[0.023,112.958],[43.95,104.087],[43.993,104.068],[79.859,79.889],[79.893,79.854],[87.202,71.807],[93.709,63.092],[99.351,53.792],[104.072,43.991],[104.09,43.945],[107.954,33.344],[110.734,22.408],[112.404,11.253],[112.648,8.443],[112.963,-0.003],[109.372,-0.003],[105.786,-0.003],[102.196,-0.003],[98.609,-0.003],[98.333,7.385],[98.122,9.839],[96.662,19.574],[94.239,29.112],[90.87,38.357],[90.854,38.395],[86.735,46.948],[81.811,55.065],[76.126,62.676],[69.742,69.708],[69.712,69.738],[38.398,90.85],[38.36,90.867],[0.02,98.604],[-0.022,98.604],[-38.362,90.867],[-38.4,90.85],[-69.713,69.738],[-69.742,69.708],[-90.855,38.395],[-90.871,38.357],[-96.505,20.337],[-98.609,0.016],[-98.609,-0.025],[-98.121,-9.863],[-96.662,-19.592],[-94.238,-29.126],[-90.871,-38.365],[-90.855,-38.404],[-86.737,-46.956],[-81.811,-55.072],[-76.128,-62.684],[-69.742,-69.717],[-69.713,-69.745],[-62.681,-76.132],[-55.07,-81.814],[-46.952,-86.74],[-42.726,-88.904],[-40.575,-89.906],[-38.4,-90.859],[-38.362,-90.876],[-29.12,-94.242],[-19.589,-96.665],[-9.858,-98.124],[-4.947,-98.488],[-2.486,-98.581],[-0.022,-98.613],[0.02,-98.613],[9.708,-98.139],[14.521,-97.549],[16.912,-97.167],[19.295,-96.725],[24.021,-95.665],[26.364,-95.048],[28.691,-94.374],[30.999,-93.641],[33.29,-92.852],[35.559,-92.007],[37.807,-91.107],[39.184,-94.421],[40.562,-97.734],[41.938,-101.048],[43.316,-104.361],[40.738,-105.395],[38.135,-106.363],[35.508,-107.268],[32.859,-108.109],[30.191,-108.882],[27.506,-109.589],[22.087,-110.803],[19.355,-111.309],[16.614,-111.749],[11.103,-112.423],[0.023,-112.967]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[112.962,125.582],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 32","np":2,"cix":2,"bm":0,"ix":32,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-28.609,23.321],[28.608,25.263],[1.689,-25.263]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[159.155,25.513],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 33","np":2,"cix":2,"bm":0,"ix":33,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0}],"markers":[]}') }, function(t) { t.exports = JSON.parse('{"v":"5.4.3","fr":25,"ip":0,"op":100,"w":1920,"h":1080,"nm":"avatar","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 9","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":87,"s":[100],"e":[0]},{"t":99}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[959.75,699.5,0],"ix":2},"a":{"a":0,"k":[-0.25,159.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"n":["0p667_1_0p167_0p167","0p667_1_0p167_0p167","0p667_1_0p167_0"],"t":5,"s":[28.999999999999996,0,100],"e":[100,100,100]},{"t":11}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[84.5,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[-84.5,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-1,28],[-106,120],[-81.5,138.5],[-22.5,158.5],[8.5,159.5],[59.5,148.5],[105.5,120]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.4235294117647059,0.4627450980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":250,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 8","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":87,"s":[100],"e":[0]},{"t":99}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"n":"0p667_1_0p167_0p167","t":6,"s":[960,660.634,0],"e":[960,480.634,0],"to":[0,-30,0],"ti":[0,28,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":13,"s":[960,480.63400000000007,0],"e":[960,492.634,0],"to":[0,-28,0],"ti":[0,-2,0]},{"t":16}],"ix":2},"a":{"a":0,"k":[6.953,-1.047,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,5.728]},"n":["0p667_1_0p167_0p167","0p667_1_0p167_0p167","0p667_1_0p167_5p728"],"t":6,"s":[22,22,100],"e":[35,35,100]},{"t":13}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[321.906,321.906],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.4235294117647059,0.4627450980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[6.953,-1.047],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":6,"op":256,"st":6,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 7","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":87,"s":[100],"e":[0]},{"t":99}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,538.953,0],"ix":2},"a":{"a":0,"k":[6.953,-1.047,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[321.906,321.906],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.4235294117647059,0.4627450980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.953,-1.047],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":0,"s":[0],"e":[100]},{"t":11}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":250,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":1,"nm":"White Solid 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2},"a":{"a":0,"k":[960,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"sw":1920,"sh":1080,"sc":"#ffffff","ip":250,"op":250,"st":0,"bm":0,"hidden":0}],"markers":[]}') }, function(t) { t.exports = JSON.parse('{"v":"5.7.3","fr":30,"ip":0,"op":90,"w":1000,"h":1000,"nm":"wallet","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"coin4 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":34,"s":[-58]},{"t":35,"s":[-5]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":1,"y":0},"t":23,"s":[704.525,-19.4,0],"to":[3.667,111.226,0],"ti":[-3.667,-111.226,0]},{"t":34,"s":[726.525,647.957,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.729,3.729],[0,0],[-3.596,-3.862],[0,0],[3.862,-3.596],[0,0],[3.595,3.863],[0,0]],"o":[[0,0],[3.995,-3.729],[0,0],[3.73,3.995],[0,0],[-3.996,3.728],[0,0],[-3.597,-3.996]],"v":[[-40.885,-38.888],[-36.225,-43.283],[-22.507,-42.883],[41.152,25.172],[40.753,38.889],[36.092,43.284],[22.374,42.884],[-41.285,-25.169]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[64.859,66.989],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.729,3.729],[0,0],[-3.595,-3.863],[0,0],[-3.862,3.595],[0,0],[3.595,3.862],[0,0]],"o":[[0,0],[-3.861,3.729],[0,0],[3.729,3.863],[0,0],[-3.996,3.729],[0,0],[-3.597,-3.863]],"v":[[-37.888,-41.684],[-35.092,-44.215],[-35.492,-30.497],[28.168,37.556],[41.884,37.956],[39.089,40.486],[25.371,40.087],[-38.288,-27.967]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.7568627450980392,0.027450980392156862,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[63.993,67.789],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.996,-3.729],[0,0],[-3.596,-3.863],[0,0],[3.862,-3.596],[0,0],[3.596,3.862],[0,0]],"o":[[0,0],[3.995,-3.728],[0,0],[3.729,3.996],[0,0],[3.861,-3.73],[0,0],[-3.596,-3.862]],"v":[[-38.591,-41.024],[-41.387,-38.494],[-27.67,-38.094],[35.989,29.959],[35.59,43.677],[38.387,41.147],[38.786,27.429],[-24.873,-40.625]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.952999997606,0.752999997606,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[65.36,66.595],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.729,3.729],[0,0],[-3.596,-3.862],[0,0],[3.862,-3.596],[0,0],[3.595,3.863],[0,0]],"o":[[0,0],[3.995,-3.729],[0,0],[3.73,3.995],[0,0],[-3.996,3.728],[0,0],[-3.597,-3.996]],"v":[[-40.885,-38.888],[-36.225,-43.283],[-22.507,-42.883],[41.152,25.172],[40.753,38.889],[36.092,43.284],[22.374,42.884],[-41.285,-25.169]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.7568627450980392,0.027450980392156862,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[64.859,66.989],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":23,"op":90,"st":23,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"coin3 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":1,"y":0},"t":8,"s":[704.337,-91.721,0],"to":[0,130,0],"ti":[0,-130,0]},{"t":30,"s":[704.337,688.279,0]}],"ix":2},"a":{"a":0,"k":[76.312,32.962,0],"ix":1},"s":{"a":0,"k":[100,93.932,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.46],[0,0],[-5.327,0],[0,0],[0,-5.328],[0,0],[5.327,0],[0,0]],"o":[[0,0],[0,-5.328],[0,0],[5.327,0],[0,0],[0,5.327],[0,0],[-5.327,0]],"v":[[-56.334,3.263],[-56.334,-3.262],[-46.612,-12.985],[46.612,-12.985],[56.334,-3.262],[56.334,3.263],[46.612,12.985],[-46.612,12.985]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[76.312,32.962],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.327],[0,0],[-5.327,0],[0,0],[0,5.328],[0,0],[5.327,0],[0,0]],"o":[[0,0],[0,5.328],[0,0],[5.327,0],[0,0],[0,5.327],[0,0],[-5.327,0]],"v":[[-56.334,-2.997],[-56.334,-6.725],[-46.612,2.996],[46.612,2.996],[56.334,-6.725],[56.334,-2.997],[46.612,6.725],[-46.612,6.725]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.7568627450980392,0.027450980392156862,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.312,36.425],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-5.46],[0,0],[-5.327,0],[0,0],[0,-5.328],[0,0],[5.327,0],[0,0]],"o":[[0,0],[0,-5.328],[0,0],[5.327,0],[0,0],[0,-5.327],[0,0],[-5.327,0]],"v":[[-56.334,2.997],[-56.334,6.726],[-46.612,-2.996],[46.612,-2.996],[56.335,6.726],[56.335,2.997],[46.612,-6.725],[-46.612,-6.725]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.952999997606,0.752999997606,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.311,29.633],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.46],[0,0],[-5.327,0],[0,0],[0,-5.328],[0,0],[5.327,0],[0,0]],"o":[[0,0],[0,-5.328],[0,0],[5.327,0],[0,0],[0,5.327],[0,0],[-5.327,0]],"v":[[-56.334,3.263],[-56.334,-3.262],[-46.612,-12.985],[46.612,-12.985],[56.334,-3.262],[56.334,3.263],[46.612,12.985],[-46.612,12.985]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.7568627450980392,0.027450980392156862,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.312,32.962],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":8,"op":90,"st":8,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"coin2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":1,"y":0},"t":3,"s":[688.754,-65.884,0],"to":[0,130,0],"ti":[0,-130,0]},{"t":25,"s":[688.754,714.116,0]}],"ix":2},"a":{"a":0,"k":[76.312,32.962,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.134,5.46],[0,0],[-5.327,0],[0,0],[0,-5.328],[0,0],[5.326,0],[0,0]],"o":[[0,0],[0,-5.328],[0,0],[5.326,0],[0,0],[0,5.327],[0,0],[-5.327,0]],"v":[[-56.334,3.263],[-56.334,-3.263],[-46.612,-12.985],[46.612,-12.985],[56.334,-3.263],[56.334,3.263],[46.612,12.985],[-46.612,12.985]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[76.312,32.963],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.134,5.461],[0,0],[-5.327,0],[0,0],[0,5.328],[0,0],[5.326,0],[0,0]],"o":[[0,0],[0,5.328],[0,0],[5.326,0],[0,0],[0,5.327],[0,0],[-5.327,0]],"v":[[-56.334,-2.997],[-56.334,-6.726],[-46.612,2.996],[46.612,2.996],[56.334,-6.726],[56.334,-2.997],[46.612,6.726],[-46.612,6.726]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.7568627450980392,0.027450980392156862,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.312,36.292],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.134,-5.327],[0,0],[-5.327,0],[0,0],[0,-5.327],[0,0],[5.326,0],[0,0]],"o":[[0,0],[0,-5.327],[0,0],[5.326,0],[0,0],[0,-5.327],[0,0],[-5.327,0]],"v":[[-56.335,2.996],[-56.335,6.725],[-46.612,-2.997],[46.612,-2.997],[56.334,6.725],[56.334,2.996],[46.612,-6.726],[-46.612,-6.726]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.952999997606,0.752999997606,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.312,29.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.134,5.46],[0,0],[-5.327,0],[0,0],[0,-5.328],[0,0],[5.326,0],[0,0]],"o":[[0,0],[0,-5.328],[0,0],[5.326,0],[0,0],[0,5.327],[0,0],[-5.327,0]],"v":[[-56.334,3.263],[-56.334,-3.263],[-46.612,-12.985],[46.612,-12.985],[56.334,-3.263],[56.334,3.263],[46.612,12.985],[-46.612,12.985]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.7568627450980392,0.027450980392156862,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.312,32.963],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":3,"op":90,"st":3,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"coin1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":1,"y":0},"t":0,"s":[704.337,-40.048,0],"to":[0,130,0],"ti":[0,-130,0]},{"t":22,"s":[704.337,739.952,0]}],"ix":2},"a":{"a":0,"k":[76.312,32.962,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.46],[0,0],[-5.327,0],[0,0],[0,-5.328],[0,0],[5.327,0],[0,0]],"o":[[0,0],[0,-5.328],[0,0],[5.327,0],[0,0],[0,5.327],[0,0],[-5.327,0]],"v":[[-56.334,3.263],[-56.334,-3.262],[-46.612,-12.985],[46.612,-12.985],[56.334,-3.262],[56.334,3.263],[46.612,12.985],[-46.612,12.985]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[76.312,32.963],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.46],[0,0],[-5.327,0],[0,0],[0,5.327],[0,0],[5.327,0],[0,0]],"o":[[0,0],[0,5.327],[0,0],[5.327,0],[0,0],[0,5.327],[0,0],[-5.327,0]],"v":[[-56.334,-2.997],[-56.334,-6.725],[-46.612,2.997],[46.612,2.997],[56.334,-6.725],[56.334,-2.997],[46.612,6.725],[-46.612,6.725]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.7568627450980392,0.027450980392156862,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.312,36.292],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-5.327],[0,0],[-5.327,0],[0,0],[0,-5.328],[0,0],[5.327,0],[0,0]],"o":[[0,0],[0,-5.328],[0,0],[5.327,0],[0,0],[0,-5.327],[0,0],[-5.327,0]],"v":[[-56.334,2.997],[-56.334,6.726],[-46.612,-2.996],[46.612,-2.996],[56.335,6.726],[56.335,2.997],[46.612,-6.726],[-46.612,-6.726]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.952999997606,0.752999997606,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.311,29.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.46],[0,0],[-5.327,0],[0,0],[0,-5.328],[0,0],[5.327,0],[0,0]],"o":[[0,0],[0,-5.328],[0,0],[5.327,0],[0,0],[0,5.327],[0,0],[-5.327,0]],"v":[[-56.334,3.263],[-56.334,-3.262],[-46.612,-12.985],[46.612,-12.985],[56.334,-3.262],[56.334,3.263],[46.612,12.985],[-46.612,12.985]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.7568627450980392,0.027450980392156862,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.312,32.963],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"wallet","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[488.6480000000001,532.799,0],"ix":2},"a":{"a":0,"k":[272.016,239.721,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.927,-1.065],[1.864,8.79],[-4.261,1.065],[-2.53,-8.79]],"o":[[-5.062,1.065],[-1.732,-8.923],[4.129,-1.066],[2.53,8.923]],"v":[[1.945,15.848],[-8.177,2.131],[-5.913,-15.848],[8.603,-2.131]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.987999949736,0.933000033509,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[400.786,236.925],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-17.064],[17.064,0],[0,17.063],[-17.065,0]],"o":[[0,17.063],[-17.065,0],[0,-17.064],[17.064,0]],"v":[[30.898,0],[0,30.897],[-30.898,0],[0,-30.897]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[386.882,239.722],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-17.064],[17.064,0],[0,17.063],[-17.065,0]],"o":[[0,17.063],[-17.065,0],[0,-17.064],[17.064,0]],"v":[[30.898,0],[0,30.897],[-30.898,0],[0,-30.897]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.09411764705882353,0.6274509803921569,0.5725490196078431,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[386.882,239.722],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-4.395,0],[0,0],[0,-4.395],[0,0],[4.394,0],[0,0],[0,4.395]],"o":[[0,-4.395],[0,0],[4.394,0],[0,0],[0,4.395],[0,0],[-4.395,0],[0,0]],"v":[[-89.229,-35.958],[-81.238,-43.949],[81.239,-43.949],[89.229,-35.958],[89.229,35.959],[81.239,43.949],[-81.238,43.949],[-89.229,35.959]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5.327,"ix":5},"lc":2,"lj":2,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":13.104,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":15.724,"ix":2}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[418.845,239.721],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-17.064],[17.063,0],[0,17.064],[-17.065,0]],"o":[[0,17.064],[-17.065,0],[0,-17.064],[17.063,0]],"v":[[30.897,0],[0.001,30.897],[-30.897,0],[0.001,-30.897]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[378.892,243.717],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-17.064],[17.063,0],[0,17.064],[-17.065,0]],"o":[[0,17.064],[-17.065,0],[0,-17.064],[17.063,0]],"v":[[30.897,0],[0.001,30.897],[-30.897,0],[0.001,-30.897]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[378.892,243.717],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":4,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,13.317],[0,0],[-13.185,0],[0,0],[0,-13.185],[0,0],[13.185,0],[0,0]],"o":[[0,0],[0,-13.185],[0,0],[13.185,0],[0,0],[0,13.185],[0,0],[-13.185,0]],"v":[[-105.21,35.958],[-105.21,-35.958],[-81.238,-59.93],[81.238,-59.93],[105.21,-35.958],[105.21,35.958],[81.238,59.93],[-81.238,59.93]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[418.845,239.722],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,13.317],[0,0],[13.185,0],[0,0],[0,-13.185],[0,0],[13.184,0],[0,0]],"o":[[0,0],[0,-13.185],[0,0],[13.184,0],[0,0],[0,13.185],[0,0],[13.185,0]],"v":[[16.514,35.958],[16.514,-35.958],[-7.459,-59.93],[-16.514,-59.93],[7.457,-35.958],[7.457,35.958],[-16.514,59.93],[-7.459,59.93]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5098039215686274,0.7411764705882353,0.7176470588235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[507.542,239.722],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":4,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,13.317],[0,0],[-13.185,0],[0,0],[0,-13.185],[0,0],[-13.185,0],[0,0]],"o":[[0,0],[0,-13.185],[0,0],[-13.185,0],[0,0],[0,13.185],[0,0],[-13.185,0]],"v":[[-6.459,35.958],[-6.459,-35.958],[17.513,-59.93],[6.459,-59.93],[-17.513,-35.958],[-17.513,35.958],[6.459,59.93],[17.513,59.93]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5098039215686274,0.7411764705882353,0.7176470588235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[331.147,239.722],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":4,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,13.317],[0,0],[-13.185,0],[0,0],[0,-13.185],[0,0],[13.185,0],[0,0]],"o":[[0,0],[0,-13.185],[0,0],[13.185,0],[0,0],[0,13.185],[0,0],[-13.185,0]],"v":[[-105.21,35.958],[-105.21,-35.958],[-81.238,-59.93],[81.238,-59.93],[105.21,-35.958],[105.21,35.958],[81.238,59.93],[-81.238,59.93]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5098039215686274,0.7411764705882353,0.7176470588235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[418.845,239.722],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":4,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-27.967,0],[0,0],[0,-27.967],[0,0],[27.968,0],[0,0],[0,27.967],[0,0]],"o":[[0,0],[27.968,0],[0,0],[0,27.967],[0,0],[-27.967,0],[0,0],[-0.133,-27.967]],"v":[[-155.152,-190.445],[155.152,-190.445],[205.76,-139.837],[205.76,139.837],[155.152,190.445],[-155.019,190.445],[-205.626,139.837],[-205.626,-139.837]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5.327,"ix":5},"lc":2,"lj":2,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":18.589,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":13.278,"ix":2}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[257.034,239.722],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,44.215],[0,0],[-44.082,0],[0,0],[0,-44.082],[0,0],[44.082,0],[0,0]],"o":[[0,0],[0,-44.082],[0,0],[44.082,0],[0,0],[0,44.081],[0,0],[-44.216,0]],"v":[[-237.056,139.837],[-237.056,-139.837],[-157.149,-219.743],[157.15,-219.743],[237.057,-139.837],[237.057,139.837],[157.15,219.743],[-157.149,219.743]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[257.034,239.721],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,13.317],[0,0],[-13.185,0],[0,0],[0,-13.185],[0,0],[0,0]],"o":[[0,0],[0,-13.185],[0,0],[13.184,0],[0,0],[0,0],[-13.185,0]],"v":[[-97.552,35.958],[-97.552,-35.958],[-73.581,-59.93],[73.581,-59.93],[97.552,-35.958],[97.552,59.93],[-73.581,59.93]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[396.537,250.376],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":2,"cix":2,"bm":0,"ix":13,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,13.317],[0,0],[-13.185,0],[0,0],[0,-13.185],[0,0],[0,0]],"o":[[0,0],[0,-13.185],[0,0],[13.184,0],[0,0],[0,0],[-13.185,0]],"v":[[-97.552,35.958],[-97.552,-35.958],[-73.581,-59.93],[73.581,-59.93],[97.552,-35.958],[97.552,59.93],[-73.581,59.93]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[396.537,250.376],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":4,"cix":2,"bm":0,"ix":14,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,44.215],[0,0],[40.486,0],[0,0],[0,-44.082],[0,0],[40.486,0],[0,0]],"o":[[0,0],[0,-44.082],[0,0],[40.486,0],[0,0],[0,44.081],[0,0],[40.486,0]],"v":[[45.281,139.837],[45.281,-139.837],[-28.101,-219.743],[-45.281,-219.743],[28.1,-139.837],[28.1,139.837],[-45.281,219.743],[-28.101,219.743]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6862745098039216,0.8549019607843137,0.8352941176470589,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[448.81,239.721],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":4,"cix":2,"bm":0,"ix":15,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,44.215],[0,0],[-44.082,0],[0,0],[0,-44.082],[0,0],[-44.082,0],[0,0]],"o":[[0,0],[0,-44.082],[0,0],[-44.082,0],[0,0],[0,44.081],[0,0],[-44.082,0]],"v":[[-31.896,139.837],[-31.896,-139.837],[48.011,-219.743],[31.895,-219.743],[-48.011,-139.837],[-48.011,139.837],[31.895,219.743],[48.011,219.743]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6862745098039216,0.8549019607843137,0.8352941176470589,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[67.988,239.721],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":4,"cix":2,"bm":0,"ix":16,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,44.215],[0,0],[-44.082,0],[0,0],[0,-44.082],[0,0],[44.082,0],[0,0]],"o":[[0,0],[0,-44.082],[0,0],[44.082,0],[0,0],[0,44.081],[0,0],[-44.216,0]],"v":[[-237.056,139.837],[-237.056,-139.837],[-157.149,-219.743],[157.15,-219.743],[237.057,-139.837],[237.057,139.837],[157.15,219.743],[-157.149,219.743]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6862745098039216,0.8549019607843137,0.8352941176470589,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 2","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6862745098039216,0.8549019607843137,0.8352941176470589,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[257.034,239.721],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":5,"cix":2,"bm":0,"ix":17,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"note","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[0]},{"t":52,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":50,"s":[411.934,508.603,0],"to":[15.333,-18.785,0],"ti":[-15.333,18.785,0]},{"t":55,"s":[503.934,395.892,0]}],"ix":2},"a":{"a":0,"k":[194.808,242.603,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-25.229,0],[0,-25.228],[25.228,0],[0,25.228]],"o":[[25.228,0],[0,25.228],[-25.229,0],[0,-25.228]],"v":[[0,-45.68],[45.68,0],[0,45.68],[-45.68,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[208.111,214.458],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-25.229,0],[0,-25.228],[25.228,0],[0,25.228]],"o":[[25.228,0],[0,25.228],[-25.229,0],[0,-25.228]],"v":[[0,-45.68],[45.68,0],[0,45.68],[-45.68,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4745098039215686,0.7568627450980392,0.25882352941176473,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[208.111,214.458],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[11.103,-192.977],[145.181,-127.615],[-11.103,192.978],[-145.181,127.616]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[194.83,242.539],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-10.654,21.708],[0,0],[21.708,10.522],[0,0],[0,0],[0,0]],"o":[[0,0],[-10.521,21.708],[0,0],[0,0],[0,0],[-21.708,-10.521]],"v":[[115.532,-156.218],[59.864,-183.385],[1.532,-163.276],[-135.641,117.995],[-1.531,183.386],[135.641,-97.885]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[185.271,252.014],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-10.654,21.708],[0,0],[21.708,10.522],[0,0],[0,0],[0,0]],"o":[[0,0],[-10.521,21.708],[0,0],[0,0],[0,0],[-21.708,-10.521]],"v":[[115.532,-156.218],[59.864,-183.385],[1.532,-163.276],[-135.641,117.995],[-1.531,183.386],[135.641,-97.885]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.964999988032,0.976000019148,0.917999985639,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[185.271,252.014],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":4,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[174.831,-137.831],[-0.887,222.626],[-174.831,137.831],[0.887,-222.626]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4745098039215686,0.7568627450980392,0.25882352941176473,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[194.808,242.603],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false}],"ip":11,"op":90,"st":11,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"note2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":39,"s":[501.22099999999995,546.562,0],"to":[15.333,-18.785,0],"ti":[-15.333,18.785,0]},{"t":44,"s":[593.221,433.84999999999997,0]}],"ix":2},"a":{"a":0,"k":[236.363,221.911,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[14.516,16.514],[0,0],[0,0],[0,0],[0,0]],"o":[[0,-23.706],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[122.59,-104.012],[99.151,-165.806],[-122.723,16.114],[0.067,165.806],[122.723,65.258],[122.723,-104.012]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[142.598,258.087],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[14.516,16.514],[0,0],[0,0],[0,0],[0,0]],"o":[[0,-23.706],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[122.59,-104.012],[99.151,-165.806],[-122.723,16.114],[0.067,165.806],[122.723,65.258],[122.723,-104.012]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[142.598,258.087],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-25.229,0],[0,-25.228],[25.229,0],[0,25.228]],"o":[[25.229,0],[0,25.228],[-25.229,0],[0,-25.228]],"v":[[0.001,-45.68],[45.681,0],[0.001,45.68],[-45.681,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[260.127,202.02],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-25.229,0],[0,-25.228],[25.229,0],[0,25.228]],"o":[[25.229,0],[0,25.228],[-25.229,0],[0,-25.228]],"v":[[0.001,-45.68],[45.681,0],[0.001,45.68],[-45.681,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8352941176470589,0.8784313725490196,0.30196078431372547,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[260.127,202.02],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[90.615,-170.731],[185.182,-55.385],[-90.615,170.73],[-185.182,55.385]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.99,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[236.237,221.957],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-18.645,15.315],[0,0],[15.316,18.645],[0,0],[0,0],[0,0]],"o":[[0,0],[-18.645,15.316],[0,0],[0,0],[0,0],[-15.315,-18.512]],"v":[[171.333,-102.947],[132.046,-150.757],[70.651,-156.883],[-171.333,41.551],[-76.777,156.883],[165.207,-41.551]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.991,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[222.505,235.713],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-18.645,15.315],[0,0],[15.316,18.645],[0,0],[0,0],[0,0]],"o":[[0,0],[-18.645,15.316],[0,0],[0,0],[0,0],[-15.315,-18.512]],"v":[[171.333,-102.947],[132.046,-150.757],[70.651,-156.883],[-171.333,41.551],[-76.777,156.883],[165.207,-41.551]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.964999988032,0.976000019148,0.917999985639,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[222.505,235.713],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":4,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[216.388,-52.297],[-93.704,201.936],[-216.388,52.297],[93.704,-201.936]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7.99,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8352941176470589,0.8784313725490196,0.30196078431372547,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[236.363,221.911],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":3,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":90,"st":0,"bm":0}],"markers":[]}') }, function(t) { t.exports = JSON.parse('{"v":"5.4.3","fr":30,"ip":0,"op":60,"w":2048,"h":2048,"nm":"wallet_up_open","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":3,"nm":"ctrl","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1024,1024,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.58,0.58,0.58],"y":[1,1,1]},"o":{"x":[0.42,0.42,0.42],"y":[0,0,0]},"n":["0p58_1_0p42_0","0p58_1_0p42_0","0p58_1_0p42_0"],"t":0,"s":[0,0,100],"e":[398.598,398.598,100]},{"t":30}],"ix":6}},"ao":0,"ip":0,"op":31,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 3","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.58,"y":1},"o":{"x":0.42,"y":0},"n":"0p58_1_0p42_0","t":0,"s":[0,0,0],"e":[0,-28,0],"to":[0,-4.66666650772095,0],"ti":[0,0,0]},{"i":{"x":0.58,"y":1},"o":{"x":0.42,"y":0},"n":"0p58_1_0p42_0","t":10.011,"s":[0,-28,0],"e":[0,0,0],"to":[0,0,0],"ti":[0,-4.66666650772095,0]},{"t":29.9990234375}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[84.082,35.741],[21.817,-26.39],[21.817,123.969],[-22.632,123.969],[-22.632,-26.39],[-84.489,35.741],[-115.818,4.274],[-0.051,-111.575],[115.614,4.274]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":31,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[9.02,22.806],[0.158,0.391],[0.447,1.057],[24.416,20.315],[0.19,0.157],[0.656,0.528],[0.628,0.493],[0.217,0.169],[46.245,0],[0.034,0],[36.646,-45.343],[0,-47.682],[-110.457,0],[-35.832,53.944],[-0.152,0.232],[0,40.647]],"o":[[-0.155,-0.392],[-0.43,-1.066],[-12.561,-29.685],[-0.19,-0.158],[-0.649,-0.536],[-0.622,-0.5],[-0.216,-0.17],[-33.877,-26.385],[-0.033,0],[-62.79,0],[-27.792,34.388],[0,110.586],[69.56,0],[0.153,-0.231],[20.787,-31.578],[0,-26.02]],"v":[[186.02,-73.985],[185.543,-75.155],[184.237,-78.346],[127.747,-154.363],[127.18,-154.842],[125.214,-156.427],[123.349,-157.926],[122.695,-158.161],[0,-200],[-0.1,-200],[-155.551,-125.885],[-200,-0.167],[0,200],[166.647,110.464],[167.095,109.746],[200,-0.292]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.768627464771,0.796078443527,0.823529422283,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":31,"st":0,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":3,"nm":"scale","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[274.314,1665.438,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.24,0.24,0.24],"y":[1,1,1]},"o":{"x":[0.76,0.76,0.76],"y":[0,0,0]},"n":["0p24_1_0p76_0","0p24_1_0p76_0","0p24_1_0p76_0"],"t":0,"s":[0,0,100],"e":[400,400,100]},{"t":59.859375}],"ix":6}},"ao":0,"ip":0,"op":61,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 4","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[187.421,-160.36,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[17.67,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-17.672,0],[0,0],[0,17.67],[0,0],[0,36.967],[-36.969,0],[0,0]],"o":[[0,0],[0,0],[0,0],[-37.708,0],[0,0],[0,0],[0,17.67],[0,0],[17.67,0],[0,0],[-36.969,0],[0,-36.969],[0,0],[0,-17.672]],"v":[[155.292,-106.838],[133.871,-106.838],[133.83,-106.838],[-155.292,-106.838],[-187.421,-74.708],[-187.421,74.708],[-187.421,128.23],[-155.292,160.36],[155.292,160.36],[187.421,128.23],[187.421,93.724],[120.484,26.788],[187.421,-40.15],[187.421,-74.708]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":61,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 6","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.24,"y":1},"o":{"x":0.76,"y":0},"n":"0p24_1_0p76_0","t":26.056,"s":[187.421,-113.36,0],"e":[187.421,-160.36,0],"to":[0,-7.83333349227905,0],"ti":[0,7.83333349227905,0]},{"t":50}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[2.577,15.136],[0,0],[0,0],[0,0]],"o":[[-15.843,0],[0,0],[0,0],[-0.064,0.384],[0,0]],"v":[[-155.292,-106.838],[-186.962,-133.598],[-186.962,-133.598],[-186.964,-133.588],[-187.421,-74.708]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":61,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Layer 5","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.24,"y":1},"o":{"x":0.76,"y":0},"n":"0p24_1_0p76_0","t":26,"s":[160.855,-237.958,0],"e":[160.855,-293.958,0],"to":[0,-9.33333301544189,0],"ti":[0,9.33333301544189,0]},{"t":49.9443359375}],"ix":2},"a":{"a":0,"k":[-26.566,-133.599,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-15.843,0],[0,0],[0,0],[17.672,0],[0,0],[2.575,-15.138]],"o":[[0,0],[0,0],[0,-17.672],[0,0],[-15.843,0],[2.577,15.136]],"v":[[-155.292,-106.838],[133.83,-106.838],[133.83,-128.23],[101.7,-160.36],[-155.292,-160.36],[-186.962,-133.598]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.768627464771,0.796078443527,0.823529422283,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":61,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Layer 3","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.24,"y":1},"o":{"x":0.76,"y":0},"n":"0p24_1_0p76_0","t":21.057,"s":[238.905,-133.572,0],"e":[307.905,-133.572,0],"to":[11.5,0,0],"ti":[-11.5,0,0]},{"t":45}],"ix":2},"a":{"a":0,"k":[120.484,26.787,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-36.969],[-36.969,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,36.967],[0,0],[0,0],[0,0],[0,0],[-36.969,0]],"v":[[120.484,26.788],[187.421,93.724],[187.421,92.014],[187.421,65.239],[187.421,-13.374],[187.421,-40.15]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.768627464771,0.796078443527,0.823529422283,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":61,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"up_open","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[724,1274,0],"ix":2},"a":{"a":0,"k":[1024,1024,0],"ix":1},"s":{"a":0,"k":[56.00000000000001,56.00000000000001,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":30,"s":[0],"e":[0.967]},{"t":59,"s":[0.967],"h":1}],"ix":2},"w":2048,"h":2048,"ip":30,"op":61,"st":30,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"wallet_open","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1076.705,921.048,0],"ix":2},"a":{"a":0,"k":[1024,1024,0],"ix":1},"s":{"a":0,"k":[93,93,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[1.967]},{"t":59,"s":[1.967],"h":1}],"ix":2},"w":2048,"h":2048,"ip":0,"op":61,"st":0,"bm":0}],"markers":[]}') }, function(t) { t.exports = JSON.parse('{"v":"5.0.0","fr":10,"ip":0,"op":20,"w":50,"h":50,"ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"nm":"filled","ks":{"p":{"a":0,"k":[25,25]},"a":{"a":0,"k":[14,9,0]},"s":{"a":0,"k":[100,100,100]},"r":{"a":1,"k":[{"t":15,"s":[0],"i":{"x":[0.58],"y":[1]},"o":{"x":[0],"y":[0]},"e":[8]},{"t":16,"s":[8],"i":{"x":[0.58],"y":[1]},"o":{"x":[0],"y":[0]},"e":[0]},{"t":17}]},"o":{"a":0,"k":100}},"ao":0,"ip":0,"op":20,"st":0,"bm":0,"sr":1,"ty":4,"shapes":[{"ty":"gr","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.079,-1.482],[0,0],[0,0],[-1.83,0],[0,4.962],[4.962,0],[0,0],[0,-4.963]],"o":[[0,1.969],[0,0],[0,0],[1.423,0.942],[4.963,0],[0,-4.962],[0,0],[-4.963,0],[0,0]],"v":[[5,9],[6.713,14.275],[5.592,17.619],[9.051,16.513],[14.002,18],[23,9],[14.002,0],[13.998,0],[5,9]],"c":true},"nm":"Name","hd":false}},{"ty":"sh","d":1,"ks":{"a":0,"k":{"i":[[0,0],[0.687,-0.149],[2.068,0.857],[0.133,0.174],[0,1.292],[-0.264,0.27],[-0.344,0],[-0.09,-0.005],[-0.174,-0.417],[-0.063,-0.133],[0.09,-0.174],[0.133,-0.153],[0.133,-0.164],[-0.153,-0.264],[-0.779,-0.693],[-0.291,-0.121],[-0.159,0.169],[-0.253,0.354],[-0.239,-0.09],[-0.264,-0.132],[-0.064,-0.111],[0.217,-0.614]],"o":[[-0.217,0.613],[-0.47,0.1],[-2.645,-1.096],[-0.127,-0.174],[0,-1.292],[0.217,-0.221],[0.111,0],[0.264,0.012],[0.217,0.523],[0.065,0.133],[-0.085,0.18],[-0.132,0.153],[-0.122,0.143],[0.153,0.258],[1.005,0.895],[0.217,0.09],[0.202,-0.217],[0.18,-0.254],[0.243,0.084],[0.265,0.133],[0.063,0.112],[0,0]],"v":[[19.239,12.709],[17.473,13.979],[14.321,13.302],[9.84,9.344],[8.771,6.63],[9.691,4.439],[10.612,4.116],[10.913,4.126],[11.485,4.571],[12.293,6.518],[12.332,7.005],[12.04,7.418],[11.649,7.852],[11.543,8.413],[13.003,10.227],[15.114,11.529],[15.748,11.429],[16.451,10.497],[17.097,10.302],[18.89,11.153],[19.393,11.46],[19.239,12.709]],"c":true},"nm":"Name","hd":false}},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1]},"nm":"Stroke 1","o":{"a":1,"k":[{"t":10,"s":[100],"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"e":[0]},{"t":11}]},"w":{"a":0,"k":1},"lc":2,"lj":2,"ml":1,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":94}},{"n":"g","nm":"gap","v":{"a":0,"k":94}},{"n":"o","nm":"offset","v":{"a":1,"k":[{"t":0,"s":[94],"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"e":[93]},{"t":2,"s":[93],"i":{"x":[0.58],"y":[1]},"o":{"x":[0],"y":[0]},"e":[34]},{"t":10}]}}]},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1]},"nm":"Fill 1","hd":false,"o":{"a":1,"k":[{"t":11,"s":[0],"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"e":[100]},{"t":14}]},"r":2},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Object","hd":false}],"ln":"filled"}]}') }, function(t) { t.exports = JSON.parse('{"v":"5.7.6","fr":60,"ip":0,"op":164,"w":300,"h":300,"nm":"Capa 7/save-money","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Capa 7/save-money contornos","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":60,"s":[100]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":81,"s":[100]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":107,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":136,"s":[100]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":150,"s":[100]},{"t":163,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":0,"s":[142,-80,0],"to":[0,35.333,0],"ti":[0,-35.333,0]},{"t":80,"s":[142,132,0]}],"ix":2,"l":2},"a":{"a":0,"k":[36.5,75.5,0],"ix":1,"l":2},"s":{"a":0,"k":[39.914,39.914,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[9.876,-0.358],[0.912,-0.136],[0.016,9.206],[4.411,0],[0,-4.411],[-14.822,-4.069],[0,0],[-4.412,0],[0,4.411],[0,0],[1.798,17.384],[17.478,0.004],[0,10.016],[-10.016,0],[0,-10.017],[-4.411,0],[0,4.411],[15.793,3.331],[0,0],[4.411,0],[0,-4.411],[0,0],[-2.27,-16.936],[-17.088,0.004],[-0.18,-9.88]],"o":[[-0.9,-0.195],[-9.147,-1.064],[0,-4.411],[-4.412,0],[0.023,15.373],[0,0],[0,4.411],[4.411,0],[0,0],[17.108,-3.581],[-1.802,-17.384],[-10.016,0],[0,-10.017],[10.017,0],[0,4.411],[4.411,0],[-0.023,-16.14],[0,0],[0,-4.411],[-4.412,0],[0,0],[-16.484,4.502],[2.27,16.936],[9.884,0],[0.183,9.88]],"v":[[0.84,44.111],[-1.897,44.017],[-17.96,26.008],[-25.948,18.021],[-33.936,26.008],[-8.809,58.914],[-8.809,66.902],[-0.821,74.89],[7.167,66.902],[7.167,59.397],[34.104,22.498],[0.177,-8.101],[-17.96,-26.239],[0.177,-44.376],[18.315,-26.239],[26.303,-18.25],[34.291,-26.239],[7.167,-59.631],[7.167,-66.902],[-0.821,-74.89],[-8.809,-66.902],[-8.809,-59.144],[-33.632,-21.702],[0.177,7.872],[18.303,25.666]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[36.152,75.14],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Capa 6/save-money contornos","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":60,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":107,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":136,"s":[100]},{"t":163,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":0,"s":[142,-80,0],"to":[0,35.333,0],"ti":[0,-35.333,0]},{"t":80,"s":[142,132,0]}],"ix":2,"l":2},"a":{"a":0,"k":[116.5,116.5,0],"ix":1,"l":2},"s":{"a":0,"k":[39.914,39.914,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-55.125,0.062],[0,-55.152],[55.153,0],[0,55.154]],"o":[[55.153,0],[0,55.154],[-55.152,0],[0.063,-55.125]],"v":[[0,-99.86],[99.859,0],[0,99.861],[-99.86,0]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0.074,-63.944],[-63.976,0],[0,63.976],[63.977,0]],"o":[[0,63.976],[63.977,0],[0,-63.976],[-63.944,0.071]],"v":[[-115.836,0],[0,115.837],[115.836,0],[0,-115.837]],"c":true},"ix":2},"nm":"Trazado 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Combinar trazados 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[116.086,116.087],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Capa 4/save-money contornos","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":60,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":107,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":136,"s":[100]},{"t":163,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":0,"s":[142,-172,0],"to":[0,35.333,0],"ti":[0,-35.333,0]},{"t":80,"s":[142,40,0]}],"ix":2,"l":2},"a":{"a":0,"k":[8.5,46.5,0],"ix":1,"l":2},"s":{"a":0,"k":[64.706,61.29,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,4.412],[0,0],[4.412,0],[0,-4.411],[0,0],[-4.411,0]],"o":[[0,0],[0,-4.411],[-4.411,0],[0,0],[0,4.412],[4.412,0]],"v":[[7.988,37.944],[7.988,-37.944],[0,-45.932],[-7.988,-37.944],[-7.988,37.944],[0,45.932]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.238,46.182],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Capa 3/save-money contornos","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":60,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":107,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":136,"s":[100]},{"t":163,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":0,"s":[167,-159,0],"to":[0,35.333,0],"ti":[0,-35.333,0]},{"t":80,"s":[167,53,0]}],"ix":2,"l":2},"a":{"a":0,"k":[8.5,26.5,0],"ix":1,"l":2},"s":{"a":0,"k":[52.941,52.941,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,4.412],[0,0],[4.411,0],[0,-4.411],[0,0],[-4.412,0]],"o":[[0,0],[0,-4.411],[-4.412,0],[0,0],[0,4.412],[4.411,0]],"v":[[7.989,17.973],[7.989,-17.973],[0.001,-25.962],[-7.989,-17.973],[-7.989,17.973],[0.001,25.962]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.238,26.212],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Capa 2/save-money contornos","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":60,"s":[100]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":107,"s":[100]},{"i":{"x":[0.238],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":136,"s":[100]},{"t":163,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":0,"s":[112,-157,0],"to":[0,35.333,0],"ti":[0,-35.333,0]},{"t":80,"s":[112,55,0]}],"ix":2,"l":2},"a":{"a":0,"k":[8.5,26.5,0],"ix":1,"l":2},"s":{"a":0,"k":[52.941,52.941,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,4.412],[0,0],[4.411,0],[0,-4.411],[0,0],[-4.412,0]],"o":[[0,0],[0,-4.411],[-4.412,0],[0,0],[0,4.412],[4.411,0]],"v":[[7.989,17.973],[7.989,-17.973],[0.001,-25.962],[-7.989,-17.973],[-7.989,17.973],[0.001,25.962]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.239,26.212],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Capa 5/save-money contornos","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":60,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":107,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":136,"s":[100]},{"t":163,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[154,378,0],"to":[0,-23.667,0],"ti":[0,23.667,0]},{"t":60,"s":[154,236,0]}],"ix":2,"l":2},"a":{"a":0,"k":[215.5,81,0],"ix":1,"l":2},"s":{"a":0,"k":[58.237,58.025,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[18.652,3.81],[0,0],[10.091,-5.425],[0,0],[0,0],[-28.38,-14.787],[0,0],[-11.558,-0.335],[0,0],[-3.292,-15.898],[0,0],[0.125,-4.408],[-4.408,-0.121],[0,0],[0,0],[-0.117,4.322],[0.613,3.417],[0,0],[-0.062,0.031],[-7.488,-6.931]],"o":[[-17.354,7.832],[0,0],[-11.03,-3.116],[0,0],[0,0],[26.648,-17.725],[0,0],[10.274,5.304],[0,0],[16.226,0.468],[0,0],[-4.411,-0.121],[-0.121,4.412],[0,0],[0,0],[4.326,-0.004],[0.097,-3.471],[0,0],[0.062,-0.027],[9.104,-4.606],[0,0]],"v":[[59.746,56.637],[4.359,62.82],[-93.645,35.309],[-126.573,38.909],[-134.982,43.414],[-132.732,-38.39],[-43.527,-43.149],[-37.65,-40.103],[-4.487,-31.538],[53.283,-29.95],[86.581,-2.03],[0.532,-4.406],[-7.674,3.36],[0.092,11.567],[95.054,14.18],[95.275,14.18],[103.256,6.41],[102.483,-3.954],[166.666,-34.28],[166.853,-34.37],[194.453,-30.504]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-198.798,58.728],[-195.413,-64.309],[-148.041,-63.007],[-151.427,60.034]],"c":true},"ix":2},"nm":"Trazado 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[19.249,-9.685],[0,0],[18.238,0.515],[0,0],[8.133,4.2],[0,0],[30.065,-15.75],[0,0],[4.411,0.121],[0,0],[0.121,-4.411],[0,0],[-4.412,-0.121],[0,0],[0,0],[-0.118,4.326],[0,0],[0,0],[-7.057,-1.997],[0,0],[-0.176,-0.039],[-7.255,0.004],[-13.967,6.413],[-0.317,0.207],[0,0],[2.079,3.682]],"o":[[0,0],[-8.64,-16.069],[0,0],[-9.147,-0.261],[0,0],[-30.096,-15.687],[0,0],[0.121,-4.412],[0,0],[-4.411,-0.121],[0,0],[-0.121,4.412],[0,0],[0,0],[4.33,0],[0,0],[0,0],[6.459,-3.475],[0,0],[0.172,0.051],[7.103,1.486],[15.368,0.008],[0.344,-0.156],[0,0],[3.55,-2.297],[-10.578,-18.77]],"v":[[159.743,-48.676],[97.167,-19.111],[53.716,-45.923],[-4.05,-47.51],[-30.305,-54.289],[-36.183,-57.336],[-132.217,-57.234],[-131.85,-70.55],[-139.616,-78.757],[-202.96,-80.501],[-211.163,-72.735],[-214.989,66.271],[-207.223,74.478],[-143.879,76.221],[-143.661,76.221],[-135.672,68.451],[-135.489,61.801],[-119.033,52.99],[-97.966,50.685],[0.303,78.265],[0.821,78.394],[22.418,80.621],[66.942,70.905],[67.934,70.359],[210.414,-21.802],[213.031,-32.442]],"c":true},"ix":2},"nm":"Trazado 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Combinar trazados 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[215.36,80.872],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":7,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}],"markers":[],"comps":[]}') }, function(t) { t.exports = JSON.parse('{"v":"5.6.1","fr":60,"ip":0,"op":360,"w":148,"h":136,"nm":"Overview Cardratings Card Animation","ddd":0,"assets":[{"id":"image_0","w":114,"h":79,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAABPCAYAAAA3OZEOAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAADlUlEQVR4nO2d23LbMAxEIdv//8eR+9AwhaBdEKKdTovsmdFQkUmpo1Pwogdws5xt8rv4ezyzH5GoqjxJ/h5SYaxOlJHJuVJXrBEFZVIPv23kfFZHUt9HJo+dn65lIuNvUWLlP4GYg2TNylP7x+cfTKIvo0wJfZ1MGIrUDVw3sz8iPUxWdsS2ogYS9wSHrw9lPiyfuUZhN3At63IFJsphx07aepmbmT1jRKJx0QuMZSZUcFhXuofSjMs8wLpWJjEeErkG60Zv9lvcZkeBe2h3wotk0Tgk3m0uM95HcFhXGucdgx1c/xKLutY4Pnpp93Aeu1kziaxSlfi0Y7CUZ61mOCKjzFF6mWYSWQGNjWgV4EWnMmdjJBsf74ZFSmIdJsn/xgRHmVtl1opkovFSIq+BRMbrNzsuQ3xE+vqHLzvoQ4D/m0Umm70KTrbgZ9GYvlc2Rhq4CVtTonWlyJmJRBLTd5tNdmLJpHqxvo3gjO5xJg1NIOGEZxaRvmH1ENeovtOliMweyh4e64g5cca6vITLPgj4G84eoohcg73LUZbF3mYVkodJ2vvI3mXpPVdEiv8AiWyCRDZBIpsgkU2QyCZIZBMksgkS2QSJbIJENkEimyCRTZDIJkhkEySyCRLZBIlsgkQ2QSKbIJFNkMgmSGQTJLIJEtkEiWyCRDZBIpsgkU2QyCZIZBMksgkS2QSJbIJENqEikiVEr+xPIWqUt4VgRJEoE1O8WbZtgeReh20XEfOcp1zJs5MlUN9CKeawPOZmC+8wE5llvUdJY0cmQ6VtqVF5ryh4IEwkS56eSUSpmgVmRWJse2AWkRVx/lyJlGoMEX5XAX/MxJ4YIkcFn7XQPxRJ9PWVePc68b1WZFJiRMbMvCgR7Edo48dGiawzE4n2AKFjJupamUCUxdBH6XJmwx9KRWSMTN/2cK9ssuMloq0M0HgpiXVQwIzjw/Ju9gTqWs3OGX7HNf8PGNmTNdFZg00ko8xLk51xYy8rPmwn15RBeY043rEZbGnyw8ZIfx4F+i0M0NgomXPYOj1OcKJESjZr9Q/yi30/Q41joyTWQbPPGHnlZcjDzvL8Q8yO4iyUkvgaLDJnHwROM1jWtbKP33FHGAOlqIM+vPhztn48ke0OgPaaMFCituIaKDKz8tS2ImMmThJfhy32s48Ah2tZFEau1BVrpLKy69m+ExmS+H2kywxWZyZEwv4tqORXREny+6lEI+QX5aXEsDngi58AAAAASUVORK5CYII=","e":1}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"black","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0],"e":[6]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":21,"s":[6],"e":[-10]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":46,"s":[-10],"e":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":70,"s":[0],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":186,"s":[0],"e":[6]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":207,"s":[6],"e":[-10]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":232,"s":[-10],"e":[0]},{"t":256}],"ix":10},"p":{"a":0,"k":[29.136,75.103,0],"ix":2},"a":{"a":0,"k":[0.25,30.285,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.058,0],[0,-2.269],[2.269,0],[0.729,0.657],[1.058,0],[0,2.269],[-2.269,0],[-0.729,-0.657]],"o":[[2.269,0],[0,2.269],[-1.058,0],[-0.727,0.657],[-2.269,0],[0,-2.269],[1.058,0],[0.727,-0.657]],"v":[[2.75,-4.109],[6.858,-0.001],[2.75,4.109],[-0.001,3.051],[-2.75,4.109],[-6.858,-0.001],[-2.75,-4.109],[0.001,-3.051]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7333333333333333,0.7333333333333333,0.7333333333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[15.108,11.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.553,0],[0,0],[0,-0.552],[0,0],[0.553,0],[0,0],[0,0.553],[0,0]],"o":[[0,0],[0.553,0],[0,0],[0,0.553],[0,0],[-0.553,0],[0,0],[0,-0.552]],"v":[[-4.5,-3.5],[4.5,-3.5],[5.5,-2.5],[5.5,2.5],[4.5,3.5],[-4.5,3.5],[-5.5,2.5],[-5.5,-2.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7333333333333333,0.7333333333333333,0.7333333333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[80,47.321],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.966,0],[0,0],[0,-0.967],[0.966,0],[0,0],[0,0.966]],"o":[[0,0],[0.966,0],[0,0.966],[0,0],[-0.966,0],[0,-0.967]],"v":[[-11.75,-1.75],[11.75,-1.75],[13.5,0],[11.75,1.75],[-11.75,1.75],[-13.5,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7333333333333333,0.7333333333333333,0.7333333333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[21.75,38.036],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.966,0],[0,0],[0,-0.967],[0.966,0],[0,0],[0,0.966]],"o":[[0,0],[0.966,0],[0,0.966],[0,0],[-0.966,0],[0,-0.967]],"v":[[-16.75,-1.75],[16.75,-1.75],[18.5,0],[16.75,1.75],[-16.75,1.75],[-18.5,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7333333333333333,0.7333333333333333,0.7333333333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[26.75,30.036],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.694,8.601],[-22.73,1.893],[-0.183,-2.201],[0,-0.111],[0,0],[2.209,0],[0,0],[0.699,0.47],[-0.111,0.23]],"o":[[13.216,-8.301],[2.201,-0.183],[0.009,0.111],[0,0],[0,2.21],[0,0],[0,0],[-0.699,-0.47],[9.173,-19.059]],"v":[[-11.406,-13.986],[42.512,-29.276],[46.83,-25.622],[46.844,-25.29],[46.844,24.977],[42.844,28.977],[-43.479,28.977],[-44.718,28.497],[-45.708,27.507]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.4235294117647059,0.4627450980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[46.875,29.688],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.209,0],[0,0],[0,-2.209],[0,0],[2.209,0],[0,0],[0,2.21],[0,0]],"o":[[0,0],[2.209,0],[0,0],[0,2.21],[0,0],[-2.209,0],[0,0],[0,-2.209]],"v":[[-42.625,-29.286],[42.625,-29.286],[46.625,-25.286],[46.625,25.286],[42.625,29.286],[-42.625,29.286],[-46.625,25.286],[-46.625,-25.286]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4196078431372549,0.596078431372549,0.611764705882353,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[46.875,29.536],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"cc-shadow.ai","cl":"ai","parent":1,"refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[45.114,36.183,0],"ix":2},"a":{"a":0,"k":[57,39.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"purple","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[15],"e":[22]},{"i":{"x":[0.771],"y":[1]},"o":{"x":[0.355],"y":[0]},"t":21,"s":[22],"e":[-10]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.509],"y":[0]},"t":46,"s":[-10],"e":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":78,"s":[0],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":186,"s":[0],"e":[12]},{"i":{"x":[0.771],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":207,"s":[12],"e":[-10]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.509],"y":[0]},"t":233,"s":[-10],"e":[15]},{"t":265}],"ix":10},"p":{"a":0,"k":[29.268,73.667,0],"ix":2},"a":{"a":0,"k":[7.202,51.601,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.022,0.274],[-0.587,-2.192],[2.192,-0.587],[0.874,0.446],[1.022,-0.273],[0.588,2.191],[-2.192,0.587],[-0.873,-0.445]],"o":[[2.192,-0.587],[0.587,2.192],[-1.022,0.274],[-0.531,0.823],[-2.191,0.588],[-0.587,-2.192],[1.021,-0.274],[0.532,-0.822]],"v":[[1.593,-4.68],[6.625,-1.775],[3.72,3.257],[0.789,2.947],[-1.593,4.68],[-6.625,1.775],[-3.719,-3.257],[-0.789,-2.949]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7333333333333333,0.7333333333333333,0.7333333333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.115,31.184],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.534,0.143],[0,0],[-0.144,-0.533],[0,0],[0.533,-0.143],[0,0],[0.142,0.533],[0,0]],"o":[[0,0],[0.534,-0.143],[0,0],[0.142,0.533],[0,0],[-0.534,0.143],[0,0],[-0.144,-0.533]],"v":[[-5.251,-2.215],[3.441,-4.546],[4.667,-3.839],[5.961,0.992],[5.254,2.217],[-3.439,4.546],[-4.665,3.839],[-5.958,-0.992]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7333333333333333,0.7333333333333333,0.7333333333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[89.001,48.748],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.934,0.25],[0,0],[-0.25,-0.933],[0.934,-0.25],[0,0],[0.25,0.933]],"o":[[0,0],[0.934,-0.25],[0.251,0.934],[0,0],[-0.934,0.25],[-0.251,-0.934]],"v":[[-11.803,1.35],[10.896,-4.732],[13.04,-3.495],[11.803,-1.351],[-10.896,4.732],[-13.04,3.495]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7333333333333333,0.7333333333333333,0.7333333333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[30.333,54.855],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.934,0.25],[0,0],[-0.25,-0.933],[0.933,-0.25],[0,0],[0.25,0.933]],"o":[[0,0],[0.933,-0.25],[0.25,0.934],[0,0],[-0.933,0.25],[-0.25,-0.934]],"v":[[-16.633,2.645],[15.727,-6.025],[17.87,-4.788],[16.633,-2.646],[-15.727,6.025],[-17.87,4.788]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7333333333333333,0.7333333333333333,0.7333333333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[33.093,45.834],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-10.996,11.847],[-21.465,7.712],[-0.747,-2.08],[-0.029,-0.108],[0,0],[2.134,-0.572],[0,0],[0.764,0.3],[-0.043,0.226]],"o":[[10.617,-11.438],[2.079,-0.746],[0.037,0.104],[0,0],[0.571,2.134],[0,0],[0,0],[-0.764,-0.3],[3.928,-20.771]],"v":[[-21.9,-10.798],[26.223,-39.523],[31.34,-37.11],[31.44,-36.793],[44.45,11.761],[41.621,16.66],[-41.587,38.955],[-43.079,38.804],[-44.288,38.13]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.3803921568627451,0.054901960784313725,0.41568627450980394,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[59.533,40.738],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.134,0.572],[0,0],[-0.572,-2.134],[0,0],[2.134,-0.571],[0,0],[0.773,0.309],[0.34,1.267],[0,0]],"o":[[0,0],[2.134,-0.572],[0,0],[0.571,2.134],[0,0],[-0.866,0.232],[-1.132,-0.452],[0,0],[-0.571,-2.134]],"v":[[-48.752,-17.473],[33.593,-39.537],[38.492,-36.709],[51.581,12.14],[48.753,17.038],[-33.593,39.103],[-36.108,38.955],[-38.492,36.275],[-51.581,-12.574]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6862745098039216,0.5411764705882353,0.7411764705882353,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[52.402,40.359],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0}],"markers":[]}') }, function(t) { t.exports = JSON.parse('{"v":"5.7.1","fr":60,"ip":0,"op":120,"w":300,"h":300,"nm":"Clouds","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 10/weather elements Outlines 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.38,"y":1},"o":{"x":0.221,"y":0},"t":0,"s":[63.5,137,0],"to":[5.25,0,0],"ti":[-5.25,0,0]},{"t":34,"s":[95,137,0]}],"ix":2},"a":{"a":0,"k":[41.5,41.5,0],"ix":1},"s":{"a":0,"k":[189.282,189.282,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[10.069,-0.892],[0,0],[0,7.854],[-2.159,2.699],[-4.429,0],[-0.709,-0.177],[-0.425,0.459],[0.198,0.592],[0,1.482],[-2.728,2.728],[-3.943,0],[-0.627,-7.632],[-0.451,-0.289],[-0.501,0.186],[-2.08,0],[0,-10.134]],"o":[[0,0],[-7.829,-0.203],[0,-3.276],[2.899,-3.436],[0.625,0],[0.604,0.153],[0.424,-0.457],[-0.622,-1.872],[0,-3.829],[2.808,-2.808],[7.441,0],[0.044,0.533],[0.452,0.288],[2.07,-0.763],[10.133,0],[0,9.727]],"v":[[19.218,25.456],[-22.672,25.457],[-36.871,10.845],[-33.508,1.561],[-22.145,-3.766],[-20.164,-3.589],[-18.492,-4.087],[-18.125,-5.791],[-19.063,-10.845],[-14.77,-21.163],[-4.45,-25.456],[9.939,-11.846],[10.724,-10.542],[12.237,-10.379],[18.493,-11.528],[36.871,6.85]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[12.023,0],[1.805,-0.482],[8.512,0],[3.415,-3.417],[0,-4.8],[-0.283,-1.285],[0,0],[3.589,-4.255],[0,-4.051],[-9.713,-0.251],[0,0],[-0.048,0.004],[0,11.545]],"o":[[-1.811,0],[-1.673,-8.368],[-4.8,0],[-3.416,3.414],[0,1.159],[0,0],[-5.454,0],[-2.67,3.339],[0,9.693],[0,0],[0.048,0],[11.891,-1.012],[0,-12.022]],"v":[[18.493,-14.954],[13.055,-14.229],[-4.452,-28.881],[-17.192,-23.584],[-22.489,-10.845],[-22.067,-7.192],[-22.147,-7.192],[-36.154,-0.613],[-40.296,10.845],[-22.716,28.881],[19.292,28.881],[19.437,28.874],[40.296,6.849]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[41.5,29.857],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[10.069,-0.892],[0,0],[0,7.854],[-2.159,2.699],[-4.429,0],[-0.709,-0.177],[-0.425,0.459],[0.198,0.592],[0,1.482],[-2.728,2.728],[-3.943,0],[-0.627,-7.632],[-0.451,-0.289],[-0.501,0.186],[-2.08,0],[0,-10.134]],"o":[[0,0],[-7.829,-0.203],[0,-3.276],[2.899,-3.436],[0.625,0],[0.604,0.153],[0.424,-0.457],[-0.622,-1.872],[0,-3.829],[2.808,-2.808],[7.441,0],[0.044,0.533],[0.452,0.288],[2.07,-0.763],[10.133,0],[0,9.727]],"v":[[60.718,55.313],[18.828,55.314],[4.628,40.702],[7.992,31.418],[19.354,26.091],[21.335,26.268],[23.007,25.77],[23.375,24.066],[22.437,19.012],[26.729,8.694],[37.049,4.401],[51.438,18.011],[52.224,19.315],[53.736,19.478],[59.993,18.329],[78.371,36.707]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 10/weather elements Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.296,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[140.5,188,0],"to":[5.25,0,0],"ti":[-5.25,0,0]},{"t":20,"s":[172,188,0]}],"ix":2},"a":{"a":0,"k":[41.5,41.5,0],"ix":1},"s":{"a":0,"k":[302.114,302.114,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[10.069,-0.892],[0,0],[0,7.854],[-2.159,2.699],[-4.429,0],[-0.709,-0.177],[-0.425,0.459],[0.198,0.592],[0,1.482],[-2.728,2.728],[-3.943,0],[-0.627,-7.632],[-0.451,-0.289],[-0.501,0.186],[-2.08,0],[0,-10.134]],"o":[[0,0],[-7.829,-0.203],[0,-3.276],[2.899,-3.436],[0.625,0],[0.604,0.153],[0.424,-0.457],[-0.622,-1.872],[0,-3.829],[2.808,-2.808],[7.441,0],[0.044,0.533],[0.452,0.288],[2.07,-0.763],[10.133,0],[0,9.727]],"v":[[60.718,55.313],[18.828,55.314],[4.628,40.702],[7.992,31.418],[19.354,26.091],[21.335,26.268],[23.007,25.77],[23.375,24.066],[22.437,19.012],[26.729,8.694],[37.049,4.401],[51.438,18.011],[52.224,19.315],[53.736,19.478],[59.993,18.329],[78.371,36.707]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[10.069,-0.892],[0,0],[0,7.854],[-2.159,2.699],[-4.429,0],[-0.709,-0.177],[-0.425,0.459],[0.198,0.592],[0,1.482],[-2.728,2.728],[-3.943,0],[-0.627,-7.632],[-0.451,-0.289],[-0.501,0.186],[-2.08,0],[0,-10.134]],"o":[[0,0],[-7.829,-0.203],[0,-3.276],[2.899,-3.436],[0.625,0],[0.604,0.153],[0.424,-0.457],[-0.622,-1.872],[0,-3.829],[2.808,-2.808],[7.441,0],[0.044,0.533],[0.452,0.288],[2.07,-0.763],[10.133,0],[0,9.727]],"v":[[19.218,25.456],[-22.672,25.457],[-36.871,10.845],[-33.508,1.561],[-22.145,-3.766],[-20.164,-3.589],[-18.492,-4.087],[-18.125,-5.791],[-19.063,-10.845],[-14.77,-21.163],[-4.45,-25.456],[9.939,-11.846],[10.724,-10.542],[12.237,-10.379],[18.493,-11.528],[36.871,6.85]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[12.023,0],[1.805,-0.482],[8.512,0],[3.415,-3.417],[0,-4.8],[-0.283,-1.285],[0,0],[3.589,-4.255],[0,-4.051],[-9.713,-0.251],[0,0],[-0.048,0.004],[0,11.545]],"o":[[-1.811,0],[-1.673,-8.368],[-4.8,0],[-3.416,3.414],[0,1.159],[0,0],[-5.454,0],[-2.67,3.339],[0,9.693],[0,0],[0.048,0],[11.891,-1.012],[0,-12.022]],"v":[[18.493,-14.954],[13.055,-14.229],[-4.452,-28.881],[-17.192,-23.584],[-22.489,-10.845],[-22.067,-7.192],[-22.147,-7.192],[-36.154,-0.613],[-40.296,10.845],[-22.716,28.881],[19.292,28.881],[19.437,28.874],[40.296,6.849]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[41.5,29.857],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0}],"markers":[]}') }, function(t) { t.exports = JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":30,"ip":0,"op":67,"w":500,"h":500,"nm":"User","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"user Outlines 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[256,256,0],"ix":1},"s":{"a":0,"k":[83.548,83.548,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[83.964,0],[32.7,-102.619],[-30.317,0],[0,0],[9.205,28.886]],"o":[[-45.563,-64.58],[-111.52,0],[-9.205,28.886],[0,0],[30.317,0],[0,0]],"v":[[203.859,-10.945],[0,-117.578],[-238.745,59.221],[-195.927,117.577],[195.926,117.577],[238.745,59.221]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":40,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[256,373.578],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":22,"s":[0]},{"t":45,"s":[100]}],"ix":1},"e":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"user Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[250,248.26,0],"ix":2},"a":{"a":0,"k":[374.321,135.94,0],"ix":1},"s":{"a":0,"k":[83.548,83.548,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,64.065],[64.065,0],[0,-64.065],[-64.065,0]],"o":[[0,-64.065],[-64.065,0],[0,64.065],[64.065,0]],"v":[[116,0],[0,-116],[-116,0],[0,116]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.4549019607843137,0.4549019607843137,0.4549019607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":40,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[256,135.94],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":3,"s":[0]},{"t":22,"s":[100]}],"ix":1},"e":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":2,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":149,"st":-1,"bm":0}],"markers":[]}') }, function(t) { t.exports = JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":25,"ip":0,"op":375,"w":1080,"h":1080,"nm":"Icon_08","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 10 Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":10,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[75,72.25,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0],"y":[1,1,1]},"o":{"x":[0.7,0.7,0.7],"y":[0,0,0]},"t":0,"s":[580,580,100]},{"t":35,"s":[643.198,643.198,100]}],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Gradient Ramp","np":10,"mn":"ADBE Ramp","ix":1,"en":1,"ef":[{"ty":3,"nm":"Start of Ramp","mn":"ADBE Ramp-0001","ix":1,"v":{"a":0,"k":[15.5,1066],"ix":1}},{"ty":2,"nm":"Start Color","mn":"ADBE Ramp-0002","ix":2,"v":{"a":0,"k":[0,0.023529306054,1,1],"ix":2,"x":"var $bm_rt;\\n$bm_rt = comp(\'08. Business_3d_Portfolio\').layer(\'Color_control\').effect(\'Icon_Color_01\')(1);"}},{"ty":3,"nm":"End of Ramp","mn":"ADBE Ramp-0003","ix":3,"v":{"a":0,"k":[1064,24],"ix":3}},{"ty":2,"nm":"End Color","mn":"ADBE Ramp-0004","ix":4,"v":{"a":0,"k":[1,0.526797533035,0.949896216393,1],"ix":4,"x":"var $bm_rt;\\n$bm_rt = comp(\'08. Business_3d_Portfolio\').layer(\'Color_control\').effect(\'Icon_Color_02\')(1);"}},{"ty":7,"nm":"Ramp Shape","mn":"ADBE Ramp-0005","ix":5,"v":{"a":0,"k":1,"ix":5}},{"ty":0,"nm":"Ramp Scatter","mn":"ADBE Ramp-0006","ix":6,"v":{"a":0,"k":0,"ix":6}},{"ty":0,"nm":"Blend With Original","mn":"ADBE Ramp-0007","ix":7,"v":{"a":0,"k":0,"ix":7}},{"ty":6,"nm":"","mn":"ADBE Ramp-0008","ix":8,"v":0}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[5.452,0],[0,0],[0,-5.523],[0,0]],"o":[[0,0],[0,-5.523],[0,0],[-5.452,0],[0,0],[0,0]],"v":[[28,10],[28,0],[18.128,-10],[-18.128,-10],[-28,0],[-28,10]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.4235294117647059,0.4627450980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[74,25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[27,94.5],[27,97.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.4235294117647059,0.4627450980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-2.623,0],[0,0]],"o":[[0,0],[0,2.624],[0,0],[0,0]],"v":[[-8.5,-5.25],[-8.5,0.5],[-3.75,5.25],[8.5,5.25]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.4235294117647059,0.4627450980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[35.5,112.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.841,0],[0,0],[0,1.841],[0,0],[-1.841,0],[0,0],[0,-1.841],[0,0]],"o":[[0,0],[-1.841,0],[0,0],[0,-1.841],[0,0],[1.841,0],[0,0],[0,1.841]],"v":[[9.167,10],[-9.167,10],[-12.5,6.667],[-12.5,-6.667],[-9.167,-10],[9.167,-10],[12.5,-6.667],[12.5,6.667]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.4235294117647059,0.4627450980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[75,84.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[5.523,0],[0,0],[0,5.523],[0,0]],"o":[[0,0],[0,5.523],[0,0],[-5.523,0],[0,0],[0,0]],"v":[[46.5,-23.5],[46.5,13.5],[36.5,23.5],[-36.5,23.5],[-46.5,13.5],[-46.5,-23.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.4235294117647059,0.4627450980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[75,61],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[135,67.5],[135,74.999]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.4235294117647059,0.4627450980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[5.513,0],[0,0],[0,5.512],[0,0],[-5.513,0],[0,0],[0,-5.512],[0,0]],"o":[[0,0],[0,5.512],[0,0],[-5.513,0],[0,0],[0,-5.512],[0,0],[5.513,0],[0,0],[0,0]],"v":[[60,3],[60,36.52],[50.019,46.5],[-50.019,46.5],[-60,36.52],[-60,-36.519],[-50.019,-46.5],[50.019,-46.5],[60,-36.519],[60,-25.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.4235294117647059,0.4627450980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[75,83],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.7],"y":[0]},"t":0,"s":[0]},{"t":35,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":8,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":375,"st":0,"bm":0}],"markers":[]}') }, function(t, e, i) {
        var a = i(1)("unscopables"),
            r = Array.prototype;
        null == r[a] && i(7)(r, a, {}), t.exports = function(t) { r[a][t] = !0 }
    }, function(t, e, i) {
        var a = i(5);
        t.exports = function(t, e) { return !!t && a(function() { e ? t.call(null, function() {}, 1) : t.call(null) }) }
    }, function(t, e, a) {
        "use strict";
        ! function(t, e) {
            a(12), a(56), a(57);
            var n, i = a(36);
            (n = t)(document).ready(function() {
                var t, i, e;

                function a() {
                    n("body");
                    var t = n("#header"),
                        e = n(".header").height();
                    n(window).scroll(function() { n(this).scrollTop() > e ? t.addClass("sticky") : t.removeClass("sticky") })
                }
                991 < n(window).innerWidth() && (n(".main-menu-list li ul").each(function(t, e) {
                    var i = 0;
                    n(e).find(">li").each(function(t, e) { n(e).css("animation-delay", i + "s"), i += .3 })
                }), t = n("#auth-menu"), n("#auth-menu-desktop").append(t)), 575 < n(window).innerWidth() && (t = n("#languages"), n("#languages-desktop").append(t), t = n("#sub-menu"), n("#sub-menu-desktop").append(t)), n(window).innerWidth() <= 991 && (e = n(".main-menu-list > li"), i = -40, e.each(function(t, e) { n(e).css("transform", "translateY(".concat(i, "px)")), i -= 40 }), e = n("#auth-menu"), n("#auth-menu-mobile").append(e), n(".burger").on("click", function() {
                    var t = n(this);
                    t.hasClass("open") ? (t.removeClass("open"), n(".splash").removeClass("open"), n(".main-menu-list-w").removeClass("open"), n(".main-menu-list").removeClass("open"), n("body").removeAttr("style")) : (t.addClass("open"), n(".splash").addClass("open"), n(".main-menu-list-w").addClass("open"), n(".main-menu-list").addClass("open"), n("body").css("overflow", "hidden"))
                }), n(".main-menu-list li a").on("click", function(t) {
                    var e = n(this);
                    e.hasClass("has_dropDown") && t.preventDefault(), e.closest("li").find(">ul").slideToggle()
                })), n(window).innerWidth() <= 575 && (e = n("#languages"), n("#languages-mobile").append(e), e = n("#sub-menu"), n("#sub-menu-mobile").append(e)), a();
                var r = n("#upBtn");

                function s() { 300 < n(window).scrollTop() ? r.addClass("show") : r.removeClass("show") } r.on("click", function(t) { t.preventDefault(), n("html, body").stop().animate({ scrollTop: 0 }, 300) }), n(window).on("scroll", function() { s(), a() }), s()
            }), docReady(function() {
                setTimeout(function() {
                    var t = e(".lottie");
                    Object(i.a)(t)
                }, 2e3), document.addEventListener("lazybeforeunveil", function(t) {
                    var e = t.target.getAttribute("data-bg");
                    e && (t.target.style.backgroundImage = "url(" + e + ")")
                })
            })
        }.call(this, a(2), a(2))
    }, function(i, t, e) {
        ! function(t, e) {
            e = e(t, t.document, Date);
            t.lazySizes = e, i.exports && (i.exports = e)
        }("undefined" != typeof window ? window : {}, function(a, m, s) {
            "use strict";
            var d, f;
            if (! function() { var t, e = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", fastLoadedClass: "ls-is-cached", iframeLoadMode: 0, srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 }; for (t in f = a.lazySizesConfig || a.lazysizesConfig || {}, e) t in f || (f[t] = e[t]) }(), !m || !m.getElementsByClassName) return { init: function() {}, cfg: f, noSupport: !0 };

            function n(t, e) { return P[e] || (P[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), P[e].test(t[b]("class") || "") && P[e] }

            function p(t, e) { n(t, e) || t.setAttribute("class", (t[b]("class") || "").trim() + " " + e) }

            function c(t, e) {
                (e = n(t, e)) && t.setAttribute("class", (t[b]("class") || "").replace(e, " "))
            }

            function u(t, e, i, a, r) { var s = m.createEvent("Event"); return (i = i || {}).instance = d, s.initEvent(e, !a, !r), s.detail = i, t.dispatchEvent(s), s }

            function x(t, e) { var i;!g && (i = a.picturefill || f.pf) ? (e && e.src && !t[b]("srcset") && t.setAttribute("srcset", e.src), i({ reevaluate: !0, elements: [t] })) : e && e.src && (t.src = e.src) }

            function y(t, e) { return (getComputedStyle(t, null) || {})[e] }

            function r(t, e, i) { for (i = i || t.offsetWidth; i < f.minSize && e && !t._lazysizesWidth;) i = e.offsetWidth, e = e.parentNode; return i }
            var i, o, e, h, l, k = m.documentElement,
                g = a.HTMLPictureElement,
                v = "addEventListener",
                b = "getAttribute",
                t = a[v].bind(a),
                E = a.setTimeout,
                A = a.requestAnimationFrame || E,
                S = a.requestIdleCallback,
                D = /^picture$/i,
                _ = ["load", "error", "lazyincluded", "_lazyloaded"],
                P = {},
                T = Array.prototype.forEach,
                w = function(e, i, t) {
                    var a = t ? v : "removeEventListener";
                    t && w(e, i), _.forEach(function(t) { e[a](t, i) })
                },
                C = (h = [], l = e = [], V._lsFlush = B, V);

            function B() {
                var t = l;
                for (l = e.length ? h : e, o = !(i = !0); t.length;) t.shift()();
                i = !1
            }

            function V(t, e) { i && !e ? t.apply(this, arguments) : (l.push(t), o || (o = !0, (m.hidden ? E : A)(B))) }

            function F(i, t) {
                return t ? function() { C(i) } : function() {
                    var t = this,
                        e = arguments;
                    C(function() { i.apply(t, e) })
                }
            }

            function G(t) {
                var e, i, a = function() { e = null, t() },
                    r = function() {
                        var t = s.now() - i;
                        t < 99 ? E(r, 99 - t) : (S || a)(a)
                    };
                return function() { i = s.now(), e = e || E(r, 99) }
            }
            var M, I, R, L, N, z, O, j, H, q, $, W, Q, U, J, X, Y, K, Z, tt, et, it, at, rt, st, nt, ot, ht, lt, pt, ct, mt = (Z = /^img$/i, tt = /^iframe$/i, et = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent), rt = -1, Q = ut, J = at = it = 0, X = f.throttleDelay, Y = f.ricTimeout, K = S && 49 < Y ? function() { S(xt, { timeout: Y }), Y !== f.ricTimeout && (Y = f.ricTimeout) } : F(function() { E(xt) }, !0), nt = F(yt), ot = function(t) { nt({ target: t.target }) }, ht = F(function(e, t, i, a, r) {
                var s, n, o, h, l;
                (o = u(e, "lazybeforeunveil", t)).defaultPrevented || (a && (i ? p(e, f.autosizesClass) : e.setAttribute("sizes", a)), s = e[b](f.srcsetAttr), i = e[b](f.srcAttr), r && (n = (l = e.parentNode) && D.test(l.nodeName || "")), h = t.firesLoad || "src" in e && (s || i || n), o = { target: e }, p(e, f.loadingClass), h && (clearTimeout(R), R = E(dt, 2500), w(e, ot, !0)), n && T.call(l.getElementsByTagName("source"), kt), s ? e.setAttribute("srcset", s) : i && !n && (tt.test(e.nodeName) ? (a = i, 0 == (l = (t = e).getAttribute("data-load-mode") || f.iframeLoadMode) ? t.contentWindow.location.replace(a) : 1 == l && (t.src = a)) : e.src = i), r && (s || n) && x(e, { src: i })), e._lazyRace && delete e._lazyRace, c(e, f.lazyClass), C(function() {
                    var t = e.complete && 1 < e.naturalWidth;
                    h && !t || (t && p(e, f.fastLoadedClass), yt(o), e._lazyCache = !0, E(function() { "_lazyCache" in e && delete e._lazyCache }, 9)), "lazy" == e.loading && at--
                }, !0)
            }), pt = G(function() { f.loadMode = 3, st() }), ct = function() { I || (s.now() - N < 999 ? E(ct, 999) : (I = !0, f.loadMode = 3, st(), t("scroll", gt, !0))) }, {
                _: function() { N = s.now(), d.elements = m.getElementsByClassName(f.lazyClass), M = m.getElementsByClassName(f.lazyClass + " " + f.preloadClass), t("scroll", st, !0), t("resize", st, !0), t("pageshow", function(t) { var e;!t.persisted || (e = m.querySelectorAll("." + f.loadingClass)).length && e.forEach && A(function() { e.forEach(function(t) { t.complete && lt(t) }) }) }), a.MutationObserver ? new MutationObserver(st).observe(k, { childList: !0, subtree: !0, attributes: !0 }) : (k[v]("DOMNodeInserted", st, !0), k[v]("DOMAttrModified", st, !0), setInterval(st, 999)), t("hashchange", st, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(t) { m[v](t, st, !0) }), /d$|^c/.test(m.readyState) ? ct() : (t("load", ct), m[v]("DOMContentLoaded", st), E(ct, 2e4)), d.elements.length ? (ut(), C._lsFlush()) : st() },
                checkElems: st = function(t) {
                    var e;
                    (t = !0 === t) && (Y = 33), U || (U = !0, (e = X - (s.now() - J)) < 0 && (e = 0), t || e < 9 ? K() : E(K, e))
                },
                unveil: lt = function(t) {
                    var e, i, a, r;
                    t._lazyRace || (!(r = "auto" == (a = (i = Z.test(t.nodeName)) && (t[b](f.sizesAttr) || t[b]("sizes")))) && I || !i || !t[b]("src") && !t.srcset || t.complete || n(t, f.errorClass) || !n(t, f.lazyClass)) && (e = u(t, "lazyunveilread").detail, r && At.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, at++, ht(t, e, r, a, i))
                },
                _aLSL: gt
            });

            function dt(t) { at--, t && !(at < 0) && t.target || (at = 0) }

            function ft(t) { return (W = null == W ? "hidden" == y(m.body, "visibility") : W) || !("hidden" == y(t.parentNode, "visibility") && "hidden" == y(t, "visibility")) }

            function ut() {
                var t, e, i, a, r, s, n, o, h, l, p, c = d.elements;
                if ((L = f.loadMode) && at < 8 && (t = c.length)) {
                    for (e = 0, rt++; e < t; e++)
                        if (c[e] && !c[e]._lazyRace)
                            if (!et || d.prematureUnveil && d.prematureUnveil(c[e])) lt(c[e]);
                            else if ((n = c[e][b]("data-expand")) && (r = +n) || (r = it), h || (h = !f.expand || f.expand < 1 ? 500 < k.clientHeight && 500 < k.clientWidth ? 500 : 370 : f.expand, l = (d._defEx = h) * f.expFactor, p = f.hFac, W = null, it < l && at < 1 && 2 < rt && 2 < L && !m.hidden ? (it = l, rt = 0) : it = 1 < L && 1 < rt && at < 6 ? h : 0), o !== r && (z = innerWidth + r * p, O = innerHeight + r, s = -1 * r, o = r), l = c[e].getBoundingClientRect(), ($ = l.bottom) >= s && (j = l.top) <= O && (q = l.right) >= s * p && (H = l.left) <= z && ($ || q || H || j) && (f.loadHidden || ft(c[e])) && (I && at < 3 && !n && (L < 3 || rt < 4) || function(t, e) {
                            var i, a = t,
                                r = ft(t);
                            for (j -= e, $ += e, H -= e, q += e; r && (a = a.offsetParent) && a != m.body && a != k;)(r = 0 < (y(a, "opacity") || 1)) && "visible" != y(a, "overflow") && (i = a.getBoundingClientRect(), r = q > i.left && H < i.right && $ > i.top - 1 && j < i.bottom + 1);
                            return r
                        }(c[e], r))) { if (lt(c[e]), a = !0, 9 < at) break } else !a && I && !i && at < 4 && rt < 4 && 2 < L && (M[0] || f.preloadAfterLoad) && (M[0] || !n && ($ || q || H || j || "auto" != c[e][b](f.sizesAttr))) && (i = M[0] || c[e]);
                    i && !a && lt(i)
                }
            }

            function xt() { U = !1, J = s.now(), Q() }

            function yt(t) {
                var e = t.target;
                e._lazyCache ? delete e._lazyCache : (dt(t), p(e, f.loadedClass), c(e, f.loadingClass), w(e, ot), u(e, "lazyloaded"))
            }

            function kt(t) {
                var e, i = t[b](f.srcsetAttr);
                (e = f.customMedia[t[b]("data-media") || t[b]("media")]) && t.setAttribute("media", e), i && t.setAttribute("srcset", i)
            }

            function gt() { 3 == f.loadMode && (f.loadMode = 2), pt() }
            var vt, bt, Et, At = (bt = F(function(t, e, i, a) {
                var r, s, n;
                if (t._lazysizesWidth = a, t.setAttribute("sizes", a += "px"), D.test(e.nodeName || ""))
                    for (s = 0, n = (r = e.getElementsByTagName("source")).length; s < n; s++) r[s].setAttribute("sizes", a);
                i.detail.dataAttr || x(t, i.detail)
            }), {
                _: function() { vt = m.getElementsByClassName(f.autosizesClass), t("resize", Et) },
                checkElems: Et = G(function() {
                    var t, e = vt.length;
                    if (e)
                        for (t = 0; t < e; t++) St(vt[t])
                }),
                updateElem: St
            });

            function St(t, e, i) {
                var a = t.parentNode;
                a && (i = r(t, a, i), (e = u(t, "lazybeforesizes", { width: i, dataAttr: !!e })).defaultPrevented || (i = e.detail.width) && i !== t._lazysizesWidth && bt(t, a, e, i))
            }
            var Dt = function() {!Dt.i && m.getElementsByClassName && (Dt.i = !0, At._(), mt._()) };
            return E(function() { f.init && Dt() }), d = { cfg: f, autoSizer: At, loader: mt, init: Dt, uP: x, aC: p, rC: c, hC: n, fire: u, gW: r, rAF: C }
        })
    }, function(t, e) {
        ! function(t) {
            "use strict";
            t = t || window;
            var i = [],
                a = !1,
                r = !1;

            function s() {
                if (!a) {
                    a = !0;
                    for (var t = 0; t < i.length; t++) i[t].fn.call(window, i[t].ctx);
                    i = []
                }
            }

            function n() { "complete" === document.readyState && s() } t.docReady = function(t, e) {
                if ("function" != typeof t) throw new TypeError("callback for docReady(fn) must be a function");
                a ? setTimeout(function() { t(e) }, 1) : (i.push({ fn: t, ctx: e }), "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(s, 1) : r || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", s, !1), window.addEventListener("load", s, !1)) : (document.attachEvent("onreadystatechange", n), window.attachEvent("onload", s)), r = !0))
            }
        }(window)
    }, , , , , function(t, e, s) {
        "use strict";
        s.r(e),
            function(t) {
                var a, e = s(12),
                    i = s(63),
                    e = s(2),
                    i = s.n(e),
                    e = s(64),
                    e = s(65),
                    e = s(66),
                    e = (s(55), s(67)),
                    e = s(68),
                    r = "rtl" === i()("html").attr("dir");
                (a = t)(document).ready(function() {
                    var e, t, i = a(".js-animate");
                    i.length && (e = new IntersectionObserver(function(t, e) {
                        t.forEach(function(t) {
                            var e;
                            t.isIntersecting && (a(t.target).hasClass("activated") || (null != (e = a(t.target).find("div[class*='block_style']")) && e.addClass("animate"), a(t.target).addClass("activated")))
                        })
                    }, { root: null, rootMargin: "0px", threshold: .99 }), i.each(function(t) { e.observe(i[t]) })), t = r ? ["<i class='icon-arrow-right'></i>", "<i class='icon-arrow-left'></i>"] : ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"], a(".owl-main").owlCarousel({ rtl: r, margin: 0, items: 1, nav: !1, dots: !0, lazyLoad: !0, autoplay: !0, loop: !0, animateIn: "fadeIn", animateOut: "fadeOut", autoplayTimeout: 5e3, autoplayHoverPause: !0 }), a(".owl-testimonials").owlCarousel({ rtl: r, margin: 0, nav: !0, navText: t, dots: !0, lazyLoad: !0, autoplay: !0, loop: !0, slideTransition: "ease", autoplayTimeout: 3e3, autoplaySpeed: 1e3, autoplayHoverPause: !0, responsive: { 0: { items: 1 }, 768: { items: 2 } } })
                })
            }.call(this, s(2))
    }, function(t, e, i) {
        "use strict";
        var a = i(10),
            r = i(23)(0),
            i = i(54)([].forEach, !0);
        a(a.P + a.F * !i, "Array", { forEach: function(t) { return r(this, t, arguments[1]) } })
    }, function(t, e, i) {
        ! function(t, a) {
            function e(t, i) {
                var a = !1,
                    e = t.charAt(0).toUpperCase() + t.slice(1);
                return r.each((t + " " + o.join(e + " ") + e).split(" "), function(t, e) { if (n[e] !== s) return a = !i || e, !1 }), a
            }

            function i(t) { return e(t, !0) }
            var r, s, n, o, h, l, p, c, m, d, f, u, x, y, k, g, v, b, E, A, S, D, _, P, T, w, C, B, V;

            function F(t, e) { this.settings = null, this.options = w.extend({}, F.Defaults, e), this.$element = w(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, w.each(["onResize", "onThrottledResize"], w.proxy(function(t, e) { this._handlers[e] = w.proxy(this[e], this) }, this)), w.each(F.Plugins, w.proxy(function(t, e) { this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this) }, this)), w.each(F.Workers, w.proxy(function(t, e) { this._pipe.push({ filter: e.filter, run: w.proxy(e.run, this) }) }, this)), this.setup(), this.initialize() } w = window.Zepto || t, C = window, B = document, F.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, checkVisibility: !0, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: C, fallbackEasing: "swing", slideTransition: "", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, F.Width = { Default: "default", Inner: "inner", Outer: "outer" }, F.Type = { Event: "event", State: "state" }, F.Plugins = {}, F.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        var e = this.settings.margin || "",
                            i = !this.settings.autoWidth,
                            a = this.settings.rtl,
                            e = { width: "auto", "margin-left": a ? e : "", "margin-right": a ? "" : e };
                        i || this.$stage.children().css(e), t.css = e
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                            i = null,
                            a = this._items.length,
                            r = !this.settings.autoWidth,
                            s = [];
                        for (t.items = { merge: !1, width: e }; a--;) i = this._mergers[a], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, s[a] = r ? e * i : this._items[a].width();
                        this._widths = s
                    }
                }, {
                    filter: ["items", "settings"],
                    run: function() {
                        var t = [],
                            e = this._items,
                            i = this.settings,
                            a = Math.max(2 * i.items, 4),
                            r = 2 * Math.ceil(e.length / 2),
                            s = i.loop && e.length ? i.rewind ? a : Math.max(a, r) : 0,
                            n = "",
                            o = "";
                        for (s /= 2; 0 < s;) t.push(this.normalize(t.length / 2, !0)), n += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), o = e[t[t.length - 1]][0].outerHTML + o, --s;
                        this._clones = t, w(n).addClass("cloned").appendTo(this.$stage), w(o).addClass("cloned").prependTo(this.$stage)
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function() {
                        for (var t, e, i = this.settings.rtl ? 1 : -1, a = this._clones.length + this._items.length, r = -1, s = []; ++r < a;) t = s[r - 1] || 0, e = this._widths[this.relative(r)] + this.settings.margin, s.push(t + e * i);
                        this._coordinates = s
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function() {
                        var t = this.settings.stagePadding,
                            e = this._coordinates,
                            t = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };
                        this.$stage.css(t)
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        var e = this._coordinates.length,
                            i = !this.settings.autoWidth,
                            a = this.$stage.children();
                        if (i && t.items.merge)
                            for (; e--;) t.css.width = this._widths[this.relative(e)], a.eq(e).css(t.css);
                        else i && (t.css.width = t.items.width, a.css(t.css))
                    }
                }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
                    filter: ["width", "position", "items", "settings"],
                    run: function() {
                        for (var t, e, i = this.settings.rtl ? 1 : -1, a = 2 * this.settings.stagePadding, r = this.coordinates(this.current()) + a, s = r + this.width() * i, n = [], o = 0, h = this._coordinates.length; o < h; o++) t = this._coordinates[o - 1] || 0, e = Math.abs(this._coordinates[o]) + a * i, (this.op(t, "<=", r) && this.op(t, ">", s) || this.op(e, "<", r) && this.op(e, ">", s)) && n.push(o);
                        this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + n.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
                    }
                }], F.prototype.initializeStage = function() { this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = w("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(w("<div/>", { class: this.settings.stageOuterClass })), this.$element.append(this.$stage.parent())) }, F.prototype.initializeItems = function() {
                    var t = this.$element.find(".owl-item");
                    if (t.length) return this._items = t.get().map(function(t) { return w(t) }), this._mergers = this._items.map(function() { return 1 }), void this.refresh();
                    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
                }, F.prototype.initialize = function() {
                    var t, e;
                    this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : V, e = this.$element.children(e).width(), t.length && e <= 0 && this.preloadAutoWidthImages(t)), this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
                }, F.prototype.isVisible = function() { return !this.settings.checkVisibility || this.$element.is(":visible") }, F.prototype.setup = function() {
                    var e = this.viewport(),
                        t = this.options.responsive,
                        i = -1,
                        a = null;
                    t ? (w.each(t, function(t) { t <= e && i < t && (i = Number(t)) }), "function" == typeof(a = w.extend({}, this.options, t[i])).stagePadding && (a.stagePadding = a.stagePadding()), delete a.responsive, a.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : a = w.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: a } }), this._breakpoint = i, this.settings = a, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })
                }, F.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, F.prototype.prepare = function(t) { var e = this.trigger("prepare", { content: t }); return e.data || (e.data = w("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", { content: e.data }), e.data }, F.prototype.update = function() {
                    for (var t = 0, e = this._pipe.length, i = w.proxy(function(t) { return this[t] }, this._invalidated), a = {}; t < e;)(this._invalidated.all || 0 < w.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(a), t++;
                    this._invalidated = {}, this.is("valid") || this.enter("valid")
                }, F.prototype.width = function(t) {
                    switch (t = t || F.Width.Default) {
                        case F.Width.Inner:
                        case F.Width.Outer:
                            return this._width;
                        default:
                            return this._width - 2 * this.settings.stagePadding + this.settings.margin
                    }
                }, F.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, F.prototype.onThrottledResize = function() { C.clearTimeout(this.resizeTimer), this.resizeTimer = C.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, F.prototype.onResize = function() { return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) }, F.prototype.registerEventHandlers = function() { w.support.transition && this.$stage.on(w.support.transition.end + ".owl.core", w.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(C, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", w.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", w.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", w.proxy(this.onDragEnd, this))) }, F.prototype.onDragStart = function(t) {
                    var e = null;
                    3 !== t.which && (e = w.support.transform ? { x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4], y: e[16 === e.length ? 13 : 5] } : (e = this.$stage.position(), { x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left, y: e.top }), this.is("animating") && (w.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = w(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), w(B).on("mouseup.owl.core touchend.owl.core", w.proxy(this.onDragEnd, this)), w(B).one("mousemove.owl.core touchmove.owl.core", w.proxy(function(t) {
                        var e = this.difference(this._drag.pointer, this.pointer(t));
                        w(B).on("mousemove.owl.core touchmove.owl.core", w.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
                    }, this)))
                }, F.prototype.onDragMove = function(t) {
                    var e, i = null,
                        a = null,
                        r = this.difference(this._drag.pointer, this.pointer(t)),
                        s = this.difference(this._drag.stage.start, r);
                    this.is("dragging") && (t.preventDefault(), this.settings.loop ? (i = this.coordinates(this.minimum()), a = this.coordinates(this.maximum() + 1) - i, s.x = ((s.x - i) % a + a) % a + i) : (i = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), a = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), e = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, i + e), a + e)), this._drag.stage.current = s, this.animate(s.x))
                }, F.prototype.onDragEnd = function(t) {
                    var e = this.difference(this._drag.pointer, this.pointer(t)),
                        i = this._drag.stage.current,
                        t = 0 < e.x ^ this.settings.rtl ? "left" : "right";
                    w(B).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? t : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = t, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
                }, F.prototype.closest = function(i, a) {
                    var r = -1,
                        s = this.width(),
                        n = this.coordinates();
                    return this.settings.freeDrag || w.each(n, w.proxy(function(t, e) { return "left" === a && e - 30 < i && i < e + 30 ? r = t : "right" === a && e - s - 30 < i && i < e - s + 30 ? r = t + 1 : this.op(i, "<", e) && this.op(i, ">", n[t + 1] !== V ? n[t + 1] : e - s) && (r = "left" === a ? t + 1 : t), -1 === r }, this)), this.settings.loop || (this.op(i, ">", n[this.minimum()]) ? r = i = this.minimum() : this.op(i, "<", n[this.maximum()]) && (r = i = this.maximum())), r
                }, F.prototype.animate = function(t) {
                    var e = 0 < this.speed();
                    this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), w.support.transform3d && w.support.transition ? this.$stage.css({ transform: "translate3d(" + t + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") }) : e ? this.$stage.animate({ left: t + "px" }, this.speed(), this.settings.fallbackEasing, w.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: t + "px" })
                }, F.prototype.is = function(t) { return this._states.current[t] && 0 < this._states.current[t] }, F.prototype.current = function(t) { return t === V ? this._current : 0 === this._items.length ? V : (t = this.normalize(t), this._current !== t && ((e = this.trigger("change", { property: { name: "position", value: t } })).data !== V && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })), this._current); var e }, F.prototype.invalidate = function(t) { return "string" === w.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), w.map(this._invalidated, function(t, e) { return e }) }, F.prototype.reset = function(t) {
                    (t = this.normalize(t)) !== V && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
                }, F.prototype.normalize = function(t, e) {
                    var i = this._items.length,
                        e = e ? 0 : this._clones.length;
                    return !this.isNumeric(t) || i < 1 ? t = V : (t < 0 || i + e <= t) && (t = ((t - e / 2) % i + i) % i + e / 2), t
                }, F.prototype.relative = function(t) { return t -= this._clones.length / 2, this.normalize(t, !0) }, F.prototype.maximum = function(t) {
                    var e, i, a, r = this.settings,
                        s = this._coordinates.length;
                    if (r.loop) s = this._clones.length / 2 + this._items.length - 1;
                    else if (r.autoWidth || r.merge) {
                        if (e = this._items.length)
                            for (i = this._items[--e].width(), a = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > a););
                        s = e + 1
                    } else s = r.center ? this._items.length - 1 : this._items.length - r.items;
                    return t && (s -= this._clones.length / 2), Math.max(s, 0)
                }, F.prototype.minimum = function(t) { return t ? 0 : this._clones.length / 2 }, F.prototype.items = function(t) { return t === V ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, F.prototype.mergers = function(t) { return t === V ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, F.prototype.clones = function(i) {
                    function a(t) { return t % 2 == 0 ? r + t / 2 : e - (t + 1) / 2 }
                    var e = this._clones.length / 2,
                        r = e + this._items.length;
                    return i === V ? w.map(this._clones, function(t, e) { return a(e) }) : w.map(this._clones, function(t, e) { return t === i ? a(e) : null })
                }, F.prototype.speed = function(t) { return t !== V && (this._speed = t), this._speed }, F.prototype.coordinates = function(t) {
                    var e, i = 1,
                        a = t - 1;
                    return t === V ? w.map(this._coordinates, w.proxy(function(t, e) { return this.coordinates(e) }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, a = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[a] || 0)) / 2 * i) : e = this._coordinates[a] || 0, Math.ceil(e))
                }, F.prototype.duration = function(t, e, i) { return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed) }, F.prototype.to = function(t, e) {
                    var i, a = this.current(),
                        r = t - this.relative(a),
                        s = (0 < r) - (r < 0),
                        n = this._items.length,
                        o = this.minimum(),
                        h = this.maximum();
                    this.settings.loop ? (!this.settings.rewind && Math.abs(r) > n / 2 && (r += -1 * s * n), (i = (((t = a + r) - o) % n + n) % n + o) !== t && i - r <= h && 0 < i - r && this.reset(a = (t = i) - r)) : t = this.settings.rewind ? (t % (h += 1) + h) % h : Math.max(o, Math.min(h, t)), this.speed(this.duration(a, t, e)), this.current(t), this.isVisible() && this.update()
                }, F.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, F.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, F.prototype.onTransitionEnd = function(t) {
                    if (t !== V && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
                    this.leave("animating"), this.trigger("translated")
                }, F.prototype.viewport = function() { var t; return this.options.responsiveBaseElement !== C ? t = w(this.options.responsiveBaseElement).width() : C.innerWidth ? t = C.innerWidth : B.documentElement && B.documentElement.clientWidth ? t = B.documentElement.clientWidth : console.warn("Can not detect viewport width."), t }, F.prototype.replace = function(t) { this.$stage.empty(), this._items = [], t = t && (t instanceof a ? t : w(t)), (t = this.settings.nestedItemSelector ? t.find("." + this.settings.nestedItemSelector) : t).filter(function() { return 1 === this.nodeType }).each(w.proxy(function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, F.prototype.add = function(t, e) {
                    var i = this.relative(this._current);
                    e = e === V ? this._items.length : this.normalize(e, !0), t = t instanceof a ? t : w(t), this.trigger("add", { content: t, position: e }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", { content: t, position: e })
                }, F.prototype.remove = function(t) {
                    (t = this.normalize(t, !0)) !== V && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t }))
                }, F.prototype.preloadAutoWidthImages = function(t) { t.each(w.proxy(function(t, e) { this.enter("pre-loading"), e = w(e), w(new Image).one("load", w.proxy(function(t) { e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh() }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")) }, this)) }, F.prototype.destroy = function() {
                    for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), w(B).off(".owl.core"), !1 !== this.settings.responsive && (C.clearTimeout(this.resizeTimer), this.off(C, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
                    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
                }, F.prototype.op = function(t, e, i) {
                    var a = this.settings.rtl;
                    switch (e) {
                        case "<":
                            return a ? i < t : t < i;
                        case ">":
                            return a ? t < i : i < t;
                        case ">=":
                            return a ? t <= i : i <= t;
                        case "<=":
                            return a ? i <= t : t <= i
                    }
                }, F.prototype.on = function(t, e, i, a) { t.addEventListener ? t.addEventListener(e, i, a) : t.attachEvent && t.attachEvent("on" + e, i) }, F.prototype.off = function(t, e, i, a) { t.removeEventListener ? t.removeEventListener(e, i, a) : t.detachEvent && t.detachEvent("on" + e, i) }, F.prototype.trigger = function(t, e, i, a, r) {
                    var s = { item: { count: this._items.length, index: this.current() } },
                        n = w.camelCase(w.grep(["on", t, i], function(t) { return t }).join("-").toLowerCase()),
                        o = w.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), w.extend({ relatedTarget: this }, s, e));
                    return this._supress[t] || (w.each(this._plugins, function(t, e) { e.onTrigger && e.onTrigger(o) }), this.register({ type: F.Type.Event, name: t }), this.$element.trigger(o), this.settings && "function" == typeof this.settings[n] && this.settings[n].call(this, o)), o
                }, F.prototype.enter = function(t) { w.each([t].concat(this._states.tags[t] || []), w.proxy(function(t, e) { this._states.current[e] === V && (this._states.current[e] = 0), this._states.current[e]++ }, this)) }, F.prototype.leave = function(t) { w.each([t].concat(this._states.tags[t] || []), w.proxy(function(t, e) { this._states.current[e]-- }, this)) }, F.prototype.register = function(i) {
                    var e;
                    i.type === F.Type.Event ? (w.event.special[i.name] || (w.event.special[i.name] = {}), w.event.special[i.name].owl || (e = w.event.special[i.name]._default, w.event.special[i.name]._default = function(t) { return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments) }, w.event.special[i.name].owl = !0)) : i.type === F.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = w.grep(this._states.tags[i.name], w.proxy(function(t, e) { return w.inArray(t, this._states.tags[i.name]) === e }, this)))
                }, F.prototype.suppress = function(t) { w.each(t, w.proxy(function(t, e) { this._supress[e] = !0 }, this)) }, F.prototype.release = function(t) { w.each(t, w.proxy(function(t, e) { delete this._supress[e] }, this)) }, F.prototype.pointer = function(t) { var e = { x: null, y: null }; return (t = (t = t.originalEvent || t || C.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e }, F.prototype.isNumeric = function(t) { return !isNaN(parseFloat(t)) }, F.prototype.difference = function(t, e) { return { x: t.x - e.x, y: t.y - e.y } }, w.fn.owlCarousel = function(e) {
                    var a = Array.prototype.slice.call(arguments, 1);
                    return this.each(function() {
                        var t = w(this),
                            i = t.data("owl.carousel");
                        i || (i = new F(this, "object" == typeof e && e), t.data("owl.carousel", i), w.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) { i.register({ type: F.Type.Event, name: e }), i.$element.on(e + ".owl.carousel.core", w.proxy(function(t) { t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e])) }, i)) })), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, a)
                    })
                }, w.fn.owlCarousel.Constructor = F, _ = window.Zepto || t, P = window, document, (T = function(t) { this._core = t, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": _.proxy(function(t) { t.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = _.extend({}, T.Defaults, this._core.options), this._core.$element.on(this._handlers) }).Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, T.prototype.watch = function() { this._interval || (this._visible = this._core.isVisible(), this._interval = P.setInterval(_.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, T.prototype.refresh = function() { this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, T.prototype.destroy = function() { var t, e; for (t in P.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, _.fn.owlCarousel.Constructor.Plugins.AutoRefresh = T, A = window.Zepto || t, S = window, document, (D = function(t) {
                    this._core = t, this._loaded = [], this._handlers = {
                        "initialized.owl.carousel change.owl.carousel resized.owl.carousel": A.proxy(function(t) {
                            if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                                var e = this._core.settings,
                                    i = e.center && Math.ceil(e.items / 2) || e.items,
                                    a = e.center && -1 * i || 0,
                                    r = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + a,
                                    s = this._core.clones().length,
                                    n = A.proxy(function(t, e) { this.load(e) }, this);
                                for (0 < e.lazyLoadEager && (i += e.lazyLoadEager, e.loop && (r -= e.lazyLoadEager, i++)); a++ < i;) this.load(s / 2 + this._core.relative(r)), s && A.each(this._core.clones(this._core.relative(r)), n), r++
                            }
                        }, this)
                    }, this._core.options = A.extend({}, D.Defaults, this._core.options), this._core.$element.on(this._handlers)
                }).Defaults = { lazyLoad: !1, lazyLoadEager: 0 }, D.prototype.load = function(t) {
                    var e = this._core.$stage.children().eq(t),
                        t = e && e.find(".owl-lazy");
                    !t || -1 < A.inArray(e.get(0), this._loaded) || (t.each(A.proxy(function(t, e) {
                        var i = A(e),
                            a = 1 < S.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src") || i.attr("data-srcset");
                        this._core.trigger("load", { element: i, url: a }, "lazy"), i.is("img") ? i.one("load.owl.lazy", A.proxy(function() { i.css("opacity", 1), this._core.trigger("loaded", { element: i, url: a }, "lazy") }, this)).attr("src", a) : i.is("source") ? i.one("load.owl.lazy", A.proxy(function() { this._core.trigger("loaded", { element: i, url: a }, "lazy") }, this)).attr("srcset", a) : ((e = new Image).onload = A.proxy(function() { i.css({ "background-image": 'url("' + a + '")', opacity: "1" }), this._core.trigger("loaded", { element: i, url: a }, "lazy") }, this), e.src = a)
                    }, this)), this._loaded.push(e.get(0)))
                }, D.prototype.destroy = function() { var t, e; for (t in this.handlers) this._core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, A.fn.owlCarousel.Constructor.Plugins.Lazy = D, v = window.Zepto || t, b = window, document, (E = function(t) {
                    this._core = t, this._previousHeight = null, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": v.proxy(function(t) { t.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": v.proxy(function(t) { t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update() }, this), "loaded.owl.lazy": v.proxy(function(t) { t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = v.extend({}, E.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
                    var e = this;
                    v(b).on("load", function() { e._core.settings.autoHeight && e.update() }), v(b).resize(function() { e._core.settings.autoHeight && (null != e._intervalId && clearTimeout(e._intervalId), e._intervalId = setTimeout(function() { e.update() }, 250)) })
                }).Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, E.prototype.update = function() {
                    var t = this._core._current,
                        e = t + this._core.settings.items,
                        i = this._core.settings.lazyLoad,
                        t = this._core.$stage.children().toArray().slice(t, e),
                        a = [],
                        e = 0;
                    v.each(t, function(t, e) { a.push(v(e).height()) }), (e = Math.max.apply(null, a)) <= 1 && i && this._previousHeight && (e = this._previousHeight), this._previousHeight = e, this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
                }, E.prototype.destroy = function() { var t, e; for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, v.fn.owlCarousel.Constructor.Plugins.AutoHeight = E, y = window.Zepto || t, window, k = document, (g = function(t) { this._core = t, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": y.proxy(function(t) { t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this), "resize.owl.carousel": y.proxy(function(t) { t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault() }, this), "refreshed.owl.carousel": y.proxy(function(t) { t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this), "changed.owl.carousel": y.proxy(function(t) { t.namespace && "position" === t.property.name && this._playing && this.stop() }, this), "prepared.owl.carousel": y.proxy(function(t) { var e;!t.namespace || (e = y(t.content).find(".owl-video")).length && (e.css("display", "none"), this.fetch(e, y(t.content))) }, this) }, this._core.options = y.extend({}, g.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", y.proxy(function(t) { this.play(t) }, this)) }).Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, g.prototype.fetch = function(t, e) {
                    var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                        a = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                        r = t.attr("data-width") || this._core.settings.videoWidth,
                        s = t.attr("data-height") || this._core.settings.videoHeight,
                        n = t.attr("href");
                    if (!n) throw new Error("Missing video URL.");
                    if (-1 < (a = n.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
                    else if (-1 < a[3].indexOf("vimeo")) i = "vimeo";
                    else {
                        if (!(-1 < a[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
                        i = "vzaar"
                    }
                    a = a[6], this._videos[n] = { type: i, id: a, width: r, height: s }, e.attr("data-video", n), this.thumbnail(t, this._videos[n])
                }, g.prototype.thumbnail = function(e, t) {
                    function i(t) { a = l.lazyLoad ? y("<div/>", { class: "owl-video-tn " + h, srcType: t }) : y("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + t + ")" }), e.after(a), e.after('<div class="owl-video-play-icon"></div>') }
                    var a, r, s = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;" : "",
                        n = e.find("img"),
                        o = "src",
                        h = "",
                        l = this._core.settings;
                    if (e.wrap(y("<div/>", { class: "owl-video-wrapper", style: s })), this._core.settings.lazyLoad && (o = "data-src", h = "owl-lazy"), n.length) return i(n.attr(o)), n.remove(), !1;
                    "youtube" === t.type ? (r = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", i(r)) : "vimeo" === t.type ? y.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + t.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { r = t[0].thumbnail_large, i(r) } }) : "vzaar" === t.type && y.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + t.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { r = t.framegrab_url, i(r) } })
                }, g.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, g.prototype.play = function(t) {
                    var e = y(t.target).closest("." + this._core.settings.itemClass),
                        i = this._videos[e.attr("data-video")],
                        a = i.width || "100%",
                        r = i.height || this._core.$stage.height();
                    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), (t = y('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", r), t.attr("width", a), "youtube" === i.type ? t.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id) : "vimeo" === i.type ? t.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1") : "vzaar" === i.type && t.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"), y(t).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
                }, g.prototype.isInFullScreen = function() { var t = k.fullscreenElement || k.mozFullScreenElement || k.webkitFullscreenElement; return t && y(t).parent().hasClass("owl-video-frame") }, g.prototype.destroy = function() { var t, e; for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, y.fn.owlCarousel.Constructor.Plugins.Video = g, u = window.Zepto || t, window, document, (x = function(t) { this.core = t, this.core.options = u.extend({}, x.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = { "change.owl.carousel": u.proxy(function(t) { t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": u.proxy(function(t) { t.namespace && (this.swapping = "translated" == t.type) }, this), "translate.owl.carousel": u.proxy(function(t) { t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) }).Defaults = { animateOut: !1, animateIn: !1 }, x.prototype.swap = function() {
                    var t, e, i, a, r, s;
                    1 === this.core.settings.items && u.support.animation && u.support.transition && (this.core.speed(0), e = u.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous), a = this.core.$stage.children().eq(this.next), r = this.core.settings.animateIn, s = this.core.settings.animateOut, this.core.current() !== this.previous && (s && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(u.support.animation.end, e).css({ left: t + "px" }).addClass("animated owl-animated-out").addClass(s)), r && a.one(u.support.animation.end, e).addClass("animated owl-animated-in").addClass(r)))
                }, x.prototype.clear = function(t) { u(t.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, x.prototype.destroy = function() { var t, e; for (t in this.handlers) this.core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, u.fn.owlCarousel.Constructor.Plugins.Animate = x, c = window.Zepto || t, m = window, d = document, (f = function(t) { this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = { "changed.owl.carousel": c.proxy(function(t) { t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0) }, this), "initialized.owl.carousel": c.proxy(function(t) { t.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": c.proxy(function(t, e, i) { t.namespace && this.play(e, i) }, this), "stop.owl.autoplay": c.proxy(function(t) { t.namespace && this.stop() }, this), "mouseover.owl.autoplay": c.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": c.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": c.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": c.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = c.extend({}, f.Defaults, this._core.options) }).Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, f.prototype._next = function(t) { this._call = m.setTimeout(c.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || d.hidden || this._core.next(t || this._core.settings.autoplaySpeed) }, f.prototype.read = function() { return (new Date).getTime() - this._time }, f.prototype.play = function(t, e) {
                    var i;
                    this._core.is("rotating") || this._core.enter("rotating"), t = t || this._core.settings.autoplayTimeout, i = Math.min(this._time % (this._timeout || t), t), this._paused ? (this._time = this.read(), this._paused = !1) : m.clearTimeout(this._call), this._time += this.read() % t - i, this._timeout = t, this._call = m.setTimeout(c.proxy(this._next, this, e), t - i)
                }, f.prototype.stop = function() { this._core.is("rotating") && (this._time = 0, this._paused = !0, m.clearTimeout(this._call), this._core.leave("rotating")) }, f.prototype.pause = function() { this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, m.clearTimeout(this._call)) }, f.prototype.destroy = function() { var t, e; for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, c.fn.owlCarousel.Constructor.Plugins.autoplay = f,
                function(r) {
                    "use strict";
                    var e = function(t) { this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": r.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + r(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": r.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": r.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1) }, this), "changed.owl.carousel": r.proxy(function(t) { t.namespace && "position" == t.property.name && this.draw() }, this), "initialized.owl.carousel": r.proxy(function(t) { t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": r.proxy(function(t) { t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = r.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) };
                    e.Defaults = { nav: !1, navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'], navSpeed: !1, navElement: 'button type="button" role="presentation"', navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function() {
                        var t, i = this._core.settings;
                        for (t in this._controls.$relative = (i.navContainer ? r(i.navContainer) : r("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = r("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", r.proxy(function(t) { this.prev(i.navSpeed) }, this)), this._controls.$next = r("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", r.proxy(function(t) { this.next(i.navSpeed) }, this)), i.dotsData || (this._templates = [r('<button role="button">').addClass(i.dotClass).append(r("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? r(i.dotsContainer) : r("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", r.proxy(function(t) {
                                var e = (r(t.target).parent().is(this._controls.$absolute) ? r(t.target) : r(t.target).parent()).index();
                                t.preventDefault(), this.to(e, i.dotsSpeed)
                            }, this)), this._overrides) this._core[t] = r.proxy(this[t], this)
                    }, e.prototype.destroy = function() { var t, e, i, a, r = this._core.settings; for (t in this._handlers) this.$element.off(t, this._handlers[t]); for (e in this._controls) "$relative" === e && r.navContainer ? this._controls[e].html("") : this._controls[e].remove(); for (a in this.overides) this._core[a] = this._overrides[a]; for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, e.prototype.update = function() {
                        var t, e, i = this._core.clones().length / 2,
                            a = i + this._core.items().length,
                            r = this._core.maximum(!0),
                            s = this._core.settings,
                            n = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
                        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
                            for (this._pages = [], t = i, e = 0; t < a; t++) {
                                if (n <= e || 0 === e) {
                                    if (this._pages.push({ start: Math.min(r, t - i), end: t - i + n - 1 }), Math.min(r, t - i) === r) break;
                                    e = 0, 0
                                }
                                e += this._core.mergers(this._core.relative(t))
                            }
                    }, e.prototype.draw = function() {
                        var t = this._core.settings,
                            e = this._core.items().length <= t.items,
                            i = this._core.relative(this._core.current()),
                            a = t.loop || t.rewind;
                        this._controls.$relative.toggleClass("disabled", !t.nav || e), t.nav && (this._controls.$previous.toggleClass("disabled", !a && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !a && i >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !t.dots || e), t.dots && (e = this._pages.length - this._controls.$absolute.children().length, t.dotsData && 0 != e ? this._controls.$absolute.html(this._templates.join("")) : 0 < e ? this._controls.$absolute.append(new Array(1 + e).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(r.inArray(this.current(), this._pages)).addClass("active"))
                    }, e.prototype.onTrigger = function(t) {
                        var e = this._core.settings;
                        t.page = { index: r.inArray(this.current(), this._pages), count: this._pages.length, size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items) }
                    }, e.prototype.current = function() { var i = this._core.relative(this._core.current()); return r.grep(this._pages, r.proxy(function(t, e) { return t.start <= i && t.end >= i }, this)).pop() }, e.prototype.getPosition = function(t) { var e, i, a = this._core.settings; return "page" == a.slideBy ? (e = r.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += a.slideBy : e -= a.slideBy), e }, e.prototype.next = function(t) { r.proxy(this._overrides.to, this._core)(this.getPosition(!0), t) }, e.prototype.prev = function(t) { r.proxy(this._overrides.to, this._core)(this.getPosition(!1), t) }, e.prototype.to = function(t, e, i) {!i && this._pages.length ? (i = this._pages.length, r.proxy(this._overrides.to, this._core)(this._pages[(t % i + i) % i].start, e)) : r.proxy(this._overrides.to, this._core)(t, e) }, r.fn.owlCarousel.Constructor.Plugins.Navigation = e
                }(window.Zepto || t, (window, document)),
                function(a, r) {
                    "use strict";
                    var e = function(t) {
                        this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                            "initialized.owl.carousel": a.proxy(function(t) { t.namespace && "URLHash" === this._core.settings.startPosition && a(r).trigger("hashchange.owl.navigation") }, this),
                            "prepared.owl.carousel": a.proxy(function(t) { var e;!t.namespace || (e = a(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash")) && (this._hashes[e] = t.content) }, this),
                            "changed.owl.carousel": a.proxy(function(t) {
                                var i;
                                t.namespace && "position" === t.property.name && (i = this._core.items(this._core.relative(this._core.current())), (t = a.map(this._hashes, function(t, e) { return t === i ? e : null }).join()) && r.location.hash.slice(1) !== t && (r.location.hash = t))
                            }, this)
                        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(r).on("hashchange.owl.navigation", a.proxy(function(t) {
                            var e = r.location.hash.substring(1),
                                i = this._core.$stage.children(),
                                e = this._hashes[e] && i.index(this._hashes[e]);
                            void 0 !== e && e !== this._core.current() && this._core.to(this._core.relative(e), !1, !0)
                        }, this))
                    };
                    e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function() { var t, e; for (t in a(r).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
                }(window.Zepto || t, window, document), r = window.Zepto || t, window, s = void document, n = r("<support>").get(0).style, o = "Webkit Moz O ms".split(" "), h = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } }, l = function() { return !!e("transform") }, p = function() { return !!e("perspective") }, t = function() { return !!e("animation") },
                function() { return !!e("transition") }() && (r.support.transition = new String(i("transition")), r.support.transition.end = h.transition.end[r.support.transition]), t() && (r.support.animation = new String(i("animation")), r.support.animation.end = h.animation.end[r.support.animation]), l() && (r.support.transform = new String(i("transform")), r.support.transform3d = p())
        }.call(this, i(2), i(2))
    }, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}]);
    //# sourceMappingURL=home.js.map

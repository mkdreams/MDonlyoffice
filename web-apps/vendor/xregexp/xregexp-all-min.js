//XRegExp-All 3.0.0 <xregexp.com> MIT License
! function(a, b) {
    var c;
    "function" == typeof define ? define(b) : "object" == typeof exports ? (c = b(), ("object" == typeof module ? module.exports = c : exports).XRegExp = c) : a.XRegExp = b()
}(this, function() {
    var a = function(a) {
        "use strict";

        function u(a, d, e, f, g) {
            var h;
            if (a[c] = {
                    captureNames: d
                }, g) return a;
            if (a.__proto__) a.__proto__ = b.prototype;
            else
                for (h in b.prototype) a[h] = b.prototype[h];
            return a[c].source = e, a[c].flags = f ? f.split("").sort().join("") : f, a
        }

        function v(a) {
            return e.replace.call(a, /([\s\S])(?=[\s\S]*\1)/g, "")
        }

        function w(d, f) {
            if (!b.isRegExp(d)) throw new TypeError("Type RegExp expected");
            var g = d[c] || {},
                h = y(d),
                i = "",
                j = "",
                k = null,
                l = null;
            return f = f || {}, f.removeG && (j += "g"), f.removeY && (j += "y"), j && (h = e.replace.call(h, new RegExp("[" + j + "]+", "g"), "")), f.addG && (i += "g"), f.addY && (i += "y"), i && (h = v(h + i)), f.isInternalOnly || (g.source !== a && (k = g.source), null != g.flags && (l = i ? v(g.flags + i) : g.flags)), d = u(new RegExp(d.source, h), z(d) ? g.captureNames.slice(0) : null, k, l, f.isInternalOnly)
        }

        function x(a) {
            return parseInt(a, 16)
        }

        function y(a) {
            return q ? a.flags : e.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(a))[1]
        }

        function z(a) {
            return !(!a[c] || !a[c].captureNames)
        }

        function A(a) {
            return parseInt(a, 10).toString(16)
        }

        function B(a, b) {
            var d, c = a.length;
            for (d = 0; c > d; ++d)
                if (a[d] === b) return d;
            return -1
        }

        function C(a, b) {
            return s.call(a) === "[object " + b + "]"
        }

        function D(a, b, c) {
            return e.test.call(c.indexOf("x") > -1 ? /^(?:\s+|#.*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/ : /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/, a.slice(b))
        }

        function E(a) {
            for (; a.length < 4;) a = "0" + a;
            return a
        }

        function F(a, b) {
            var c;
            if (v(b) !== b) throw new SyntaxError("Invalid duplicate regex flag " + b);
            for (a = e.replace.call(a, /^\(\?([\w$]+)\)/, function(a, c) {
                    if (e.test.call(/[gy]/, c)) throw new SyntaxError("Cannot use flag g or y in mode modifier " + a);
                    return b = v(b + c), ""
                }), c = 0; c < b.length; ++c)
                if (!r[b.charAt(c)]) throw new SyntaxError("Unknown regex flag " + b.charAt(c));
            return {
                pattern: a,
                flags: b
            }
        }

        function G(a) {
            var c = {};
            return C(a, "String") ? (b.forEach(a, /[^\s,]+/, function(a) {
                c[a] = !0
            }), c) : a
        }

        function H(a) {
            if (!/^[\w$]$/.test(a)) throw new Error("Flag must be a single character A-Za-z0-9_$");
            r[a] = !0
        }

        function I(a, c, d, e, f) {
            for (var k, l, g = i.length, h = a.charAt(d), j = null; g--;)
                if (l = i[g], !(l.leadChar && l.leadChar !== h || l.scope !== e && "all" !== l.scope || l.flag && -1 === c.indexOf(l.flag)) && (k = b.exec(a, l.regex, d, "sticky"))) {
                    j = {
                        matchLength: k[0].length,
                        output: l.handler.call(f, k, e, c),
                        reparse: l.reparse
                    };
                    break
                }
            return j
        }

        function J(a) {
            d.astral = a
        }

        function K(a) {
            RegExp.prototype.exec = (a ? f : e).exec, RegExp.prototype.test = (a ? f : e).test, String.prototype.match = (a ? f : e).match, String.prototype.replace = (a ? f : e).replace, String.prototype.split = (a ? f : e).split, d.natives = a
        }

        function L(a) {
            if (null == a) throw new TypeError("Cannot convert null or undefined to object");
            return a
        }
        var b, t, c = "xregexp",
            d = {
                astral: !1,
                natives: !1
            },
            e = {
                exec: RegExp.prototype.exec,
                test: RegExp.prototype.test,
                match: String.prototype.match,
                replace: String.prototype.replace,
                split: String.prototype.split
            },
            f = {},
            g = {},
            h = {},
            i = [],
            j = "default",
            k = "class",
            l = {
                "default": /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
                "class": /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
            },
            m = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g,
            n = e.exec.call(/()??/, "")[1] === a,
            o = function() {
                var a = !0;
                try {
                    new RegExp("", "u")
                } catch (b) {
                    a = !1
                }
                return a
            }(),
            p = function() {
                var a = !0;
                try {
                    new RegExp("", "y")
                } catch (b) {
                    a = !1
                }
                return a
            }(),
            q = /a/.flags !== a,
            r = {
                g: !0,
                i: !0,
                m: !0,
                u: o,
                y: p
            },
            s = {}.toString;
        return b = function(c, d) {
            var n, o, p, q, r, f = {
                    hasNamedCapture: !1,
                    captureNames: []
                },
                g = j,
                i = "",
                m = 0;
            if (b.isRegExp(c)) {
                if (d !== a) throw new TypeError("Cannot supply flags when copying a RegExp");
                return w(c)
            }
            if (c = c === a ? "" : String(c), d = d === a ? "" : String(d), b.isInstalled("astral") && -1 === d.indexOf("A") && (d += "A"), h[c] || (h[c] = {}), !h[c][d]) {
                for (n = F(c, d), q = n.pattern, r = n.flags; m < q.length;) {
                    do n = I(q, r, m, g, f), n && n.reparse && (q = q.slice(0, m) + n.output + q.slice(m + n.matchLength)); while (n && n.reparse);
                    n ? (i += n.output, m += n.matchLength || 1) : (o = b.exec(q, l[g], m, "sticky")[0], i += o, m += o.length, "[" === o && g === j ? g = k : "]" === o && g === k && (g = j))
                }
                h[c][d] = {
                    pattern: e.replace.call(i, /\(\?:\)(?=\(\?:\))|^\(\?:\)|\(\?:\)$/g, ""),
                    flags: e.replace.call(r, /[^gimuy]+/g, ""),
                    captures: f.hasNamedCapture ? f.captureNames : null
                }
            }
            return p = h[c][d], u(new RegExp(p.pattern, p.flags), p.captures, c, d)
        }, b.prototype = new RegExp, b.version = "3.0.0", b.addToken = function(a, c, d) {
            d = d || {};
            var g, f = d.optionalFlags;
            if (d.flag && H(d.flag), f)
                for (f = e.split.call(f, ""), g = 0; g < f.length; ++g) H(f[g]);
            i.push({
                regex: w(a, {
                    addG: !0,
                    addY: p,
                    isInternalOnly: !0
                }),
                handler: c,
                scope: d.scope || j,
                flag: d.flag,
                reparse: d.reparse,
                leadChar: d.leadChar
            }), b.cache.flush("patterns")
        }, b.cache = function(a, c) {
            return g[a] || (g[a] = {}), g[a][c] || (g[a][c] = b(a, c))
        }, b.cache.flush = function(a) {
            "patterns" === a ? h = {} : g = {}
        }, b.escape = function(a) {
            return e.replace.call(L(a), /[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }, b.exec = function(a, b, d, e) {
            var i, j, g = "g",
                h = !1;
            return h = p && !!(e || b.sticky && e !== !1), h && (g += "y"), b[c] = b[c] || {}, j = b[c][g] || (b[c][g] = w(b, {
                addG: !0,
                addY: h,
                removeY: e === !1,
                isInternalOnly: !0
            })), j.lastIndex = d = d || 0, i = f.exec.call(j, a), e && i && i.index !== d && (i = null), b.global && (b.lastIndex = i ? j.lastIndex : 0), i
        }, b.forEach = function(a, c, d) {
            for (var g, e = 0, f = -1; g = b.exec(a, c, e);) d(g, ++f, a, c), e = g.index + (g[0].length || 1)
        }, b.globalize = function(a) {
            return w(a, {
                addG: !0
            })
        }, b.install = function(a) {
            a = G(a), !d.astral && a.astral && J(!0), !d.natives && a.natives && K(!0)
        }, b.isInstalled = function(a) {
            return !!d[a]
        }, b.isRegExp = function(a) {
            return "[object RegExp]" === s.call(a)
        }, b.match = function(a, b, d) {
            var h, i, f = b.global && "one" !== d || "all" === d,
                g = (f ? "g" : "") + (b.sticky ? "y" : "") || "noGY";
            return b[c] = b[c] || {}, i = b[c][g] || (b[c][g] = w(b, {
                addG: !!f,
                addY: !!b.sticky,
                removeG: "one" === d,
                isInternalOnly: !0
            })), h = e.match.call(L(a), i), b.global && (b.lastIndex = "one" === d && h ? h.index + h[0].length : 0), f ? h || [] : h && h[0]
        }, b.matchChain = function(a, c) {
            return function d(a, e) {
                var i, f = c[e].regex ? c[e] : {
                        regex: c[e]
                    },
                    g = [],
                    h = function(a) {
                        if (f.backref) {
                            if (!(a.hasOwnProperty(f.backref) || +f.backref < a.length)) throw new ReferenceError("Backreference to undefined group: " + f.backref);
                            g.push(a[f.backref] || "")
                        } else g.push(a[0])
                    };
                for (i = 0; i < a.length; ++i) b.forEach(a[i], f.regex, h);
                return e !== c.length - 1 && g.length ? d(g, e + 1) : g
            }([a], 0)
        }, b.replace = function(a, d, e, g) {
            var l, h = b.isRegExp(d),
                i = d.global && "one" !== g || "all" === g,
                j = (i ? "g" : "") + (d.sticky ? "y" : "") || "noGY",
                k = d;
            return h ? (d[c] = d[c] || {}, k = d[c][j] || (d[c][j] = w(d, {
                addG: !!i,
                addY: !!d.sticky,
                removeG: "one" === g,
                isInternalOnly: !0
            }))) : i && (k = new RegExp(b.escape(String(d)), "g")), l = f.replace.call(L(a), k, e), h && d.global && (d.lastIndex = 0), l
        }, b.replaceEach = function(a, c) {
            var d, e;
            for (d = 0; d < c.length; ++d) e = c[d], a = b.replace(a, e[0], e[1], e[2]);
            return a
        }, b.split = function(a, b, c) {
            return f.split.call(L(a), b, c)
        }, b.test = function(a, c, d, e) {
            return !!b.exec(a, c, d, e)
        }, b.uninstall = function(a) {
            a = G(a), d.astral && a.astral && J(!1), d.natives && a.natives && K(!1)
        }, b.union = function(a, d) {
            var i, j, k, m, f = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,
                g = [],
                h = 0,
                l = function(a, b, c) {
                    var d = j[h - i];
                    if (b) {
                        if (++h, d) return "(?<" + d + ">"
                    } else if (c) return "\\" + (+c + i);
                    return a
                };
            if (!C(a, "Array") || !a.length) throw new TypeError("Must provide a nonempty array of patterns to merge");
            for (m = 0; m < a.length; ++m) k = a[m], b.isRegExp(k) ? (i = h, j = k[c] && k[c].captureNames || [], g.push(e.replace.call(b(k.source).source, f, l))) : g.push(b.escape(k));
            return b(g.join("|"), d)
        }, f.exec = function(b) {
            var g, h, i, d = this.lastIndex,
                f = e.exec.apply(this, arguments);
            if (f) {
                if (!n && f.length > 1 && B(f, "") > -1 && (h = w(this, {
                        removeG: !0,
                        isInternalOnly: !0
                    }), e.replace.call(String(b).slice(f.index), h, function() {
                        var c, b = arguments.length;
                        for (c = 1; b - 2 > c; ++c) arguments[c] === a && (f[c] = a)
                    })), this[c] && this[c].captureNames)
                    for (i = 1; i < f.length; ++i) g = this[c].captureNames[i - 1], g && (f[g] = f[i]);
                this.global && !f[0].length && this.lastIndex > f.index && (this.lastIndex = f.index)
            }
            return this.global || (this.lastIndex = d), f
        }, f.test = function(a) {
            return !!f.exec.call(this, a)
        }, f.match = function(a) {
            var c;
            if (b.isRegExp(a)) {
                if (a.global) return c = e.match.apply(this, arguments), a.lastIndex = 0, c
            } else a = new RegExp(a);
            return f.exec.call(a, L(this))
        }, f.replace = function(d, f) {
            var h, i, j, g = b.isRegExp(d);
            return g ? (d[c] && (i = d[c].captureNames), h = d.lastIndex) : d += "", j = C(f, "Function") ? e.replace.call(String(this), d, function() {
                var c, b = arguments;
                if (i)
                    for (b[0] = new String(b[0]), c = 0; c < i.length; ++c) i[c] && (b[0][i[c]] = b[c + 1]);
                return g && d.global && (d.lastIndex = b[b.length - 2] + b[0].length), f.apply(a, b)
            }) : e.replace.call(null == this ? this : String(this), d, function() {
                var a = arguments;
                return e.replace.call(String(f), m, function(b, c, d) {
                    var e;
                    if (c) {
                        if (e = +c, e <= a.length - 3) return a[e] || "";
                        if (e = i ? B(i, c) : -1, 0 > e) throw new SyntaxError("Backreference to undefined group " + b);
                        return a[e + 1] || ""
                    }
                    if ("$" === d) return "$";
                    if ("&" === d || 0 === +d) return a[0];
                    if ("`" === d) return a[a.length - 1].slice(0, a[a.length - 2]);
                    if ("'" === d) return a[a.length - 1].slice(a[a.length - 2] + a[0].length);
                    if (d = +d, !isNaN(d)) {
                        if (d > a.length - 3) throw new SyntaxError("Backreference to undefined group " + b);
                        return a[d] || ""
                    }
                    throw new SyntaxError("Invalid token " + b)
                })
            }), g && (d.global ? d.lastIndex = 0 : d.lastIndex = h), j
        }, f.split = function(c, d) {
            if (!b.isRegExp(c)) return e.split.apply(this, arguments);
            var j, f = String(this),
                g = [],
                h = c.lastIndex,
                i = 0;
            return d = (d === a ? -1 : d) >>> 0, b.forEach(f, c, function(a) {
                a.index + a[0].length > i && (g.push(f.slice(i, a.index)), a.length > 1 && a.index < f.length && Array.prototype.push.apply(g, a.slice(1)), j = a[0].length, i = a.index + j)
            }), i === f.length ? (!e.test.call(c, "") || j) && g.push("") : g.push(f.slice(i)), c.lastIndex = h, g.length > d ? g.slice(0, d) : g
        }, t = b.addToken, t(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, function(a, b) {
            if ("B" === a[1] && b === j) return a[0];
            throw new SyntaxError("Invalid escape " + a[0])
        }, {
            scope: "all",
            leadChar: "\\"
        }), t(/\\u{([\dA-Fa-f]+)}/, function(a, b, c) {
            var d = x(a[1]);
            if (d > 1114111) throw new SyntaxError("Invalid Unicode code point " + a[0]);
            if (65535 >= d) return "\\u" + E(A(d));
            if (o && c.indexOf("u") > -1) return a[0];
            throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u")
        }, {
            scope: "all",
            leadChar: "\\"
        }), t(/\[(\^?)]/, function(a) {
            return a[1] ? "[\\s\\S]" : "\\b\\B"
        }, {
            leadChar: "["
        }), t(/\(\?#[^)]*\)/, function(a, b, c) {
            return D(a.input, a.index + a[0].length, c) ? "" : "(?:)"
        }, {
            leadChar: "("
        }), t(/\s+|#.*/, function(a, b, c) {
            return D(a.input, a.index + a[0].length, c) ? "" : "(?:)"
        }, {
            flag: "x"
        }), t(/\./, function() {
            return "[\\s\\S]"
        }, {
            flag: "s",
            leadChar: "."
        }), t(/\\k<([\w$]+)>/, function(a) {
            var b = isNaN(a[1]) ? B(this.captureNames, a[1]) + 1 : +a[1],
                c = a.index + a[0].length;
            if (!b || b > this.captureNames.length) throw new SyntaxError("Backreference to undefined group " + a[0]);
            return "\\" + b + (c === a.input.length || isNaN(a.input.charAt(c)) ? "" : "(?:)")
        }, {
            leadChar: "\\"
        }), t(/\\(\d+)/, function(a, b) {
            if (!(b === j && /^[1-9]/.test(a[1]) && +a[1] <= this.captureNames.length) && "0" !== a[1]) throw new SyntaxError("Cannot use octal escape or backreference to undefined group " + a[0]);
            return a[0]
        }, {
            scope: "all",
            leadChar: "\\"
        }), t(/\(\?P?<([\w$]+)>/, function(a) {
            if (!isNaN(a[1])) throw new SyntaxError("Cannot use integer as capture name " + a[0]);
            if ("length" === a[1] || "__proto__" === a[1]) throw new SyntaxError("Cannot use reserved word as capture name " + a[0]);
            if (B(this.captureNames, a[1]) > -1) throw new SyntaxError("Cannot use same name for multiple groups " + a[0]);
            return this.captureNames.push(a[1]), this.hasNamedCapture = !0, "("
        }, {
            leadChar: "("
        }), t(/\((?!\?)/, function(a, b, c) {
            return c.indexOf("n") > -1 ? "(?:" : (this.captureNames.push(null), "(")
        }, {
            optionalFlags: "n",
            leadChar: "("
        }), b
    }();
    return function(a) {
            "use strict";

            function e(a) {
                var b = /^\^/,
                    c = /\$$/;
                return b.test(a) && c.test(a.replace(/\\[\s\S]/g, "")) ? a.replace(b, "").replace(c, "") : a
            }

            function f(c) {
                return a.isRegExp(c) ? c[b] && c[b].captureNames ? c : a(c.source) : a(c)
            }
            var b = "xregexp",
                c = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,
                d = a.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, c], "g");
            a.build = function(g, h, i) {
                var m, p, q, r, j = /^\(\?([\w$]+)\)/.exec(g),
                    k = {},
                    l = 0,
                    n = 0,
                    o = [0];
                j && (i = i || "", j[1].replace(/./g, function(a) {
                    i += i.indexOf(a) > -1 ? "" : a
                }));
                for (r in h) h.hasOwnProperty(r) && (q = f(h[r]), k[r] = {
                    pattern: e(q.source),
                    names: q[b].captureNames || []
                });
                return g = f(g), p = g[b].captureNames || [], g = g.source.replace(d, function(a, b, d, e, f) {
                    var h, i, g = b || d;
                    if (g) {
                        if (!k.hasOwnProperty(g)) throw new ReferenceError("Undefined property " + a);
                        return b ? (h = p[n], o[++n] = ++l, i = "(?<" + (h || g) + ">") : i = "(?:", m = l, i + k[g].pattern.replace(c, function(a, b, c) {
                            if (b) {
                                if (h = k[g].names[l - m], ++l, h) return "(?<" + h + ">"
                            } else if (c) return "\\" + (+c + m);
                            return a
                        }) + ")"
                    }
                    if (e) {
                        if (h = p[n], o[++n] = ++l, h) return "(?<" + h + ">"
                    } else if (f) return "\\" + o[+f];
                    return a
                }), a(g, i)
            }
        }(a),
        function(a) {
            "use strict";

            function b(a, b, c, d) {
                return {
                    name: a,
                    value: b,
                    start: c,
                    end: d
                }
            }
            a.matchRecursive = function(c, d, e, f, g) {
                f = f || "", g = g || {};
                var r, s, t, u, v, h = f.indexOf("g") > -1,
                    i = f.indexOf("y") > -1,
                    j = f.replace(/y/g, ""),
                    k = g.escapeChar,
                    l = g.valueNames,
                    m = [],
                    n = 0,
                    o = 0,
                    p = 0,
                    q = 0;
                if (d = a(d, j), e = a(e, j), k) {
                    if (k.length > 1) throw new Error("Cannot use more than one escape character");
                    k = a.escape(k), v = new RegExp("(?:" + k + "[\\S\\s]|(?:(?!" + a.union([d, e]).source + ")[^" + k + "])+)+", f.replace(/[^imu]+/g, ""))
                }
                for (;;) {
                    if (k && (p += (a.exec(c, v, p, "sticky") || [""])[0].length), t = a.exec(c, d, p), u = a.exec(c, e, p), t && u && (t.index <= u.index ? u = null : t = null), t || u) o = (t || u).index, p = o + (t || u)[0].length;
                    else if (!n) break;
                    if (i && !n && o > q) break;
                    if (t) n || (r = o, s = p), ++n;
                    else {
                        if (!u || !n) throw new Error("Unbalanced delimiter found in string");
                        if (!--n && (l ? (l[0] && r > q && m.push(b(l[0], c.slice(q, r), q, r)), l[1] && m.push(b(l[1], c.slice(r, s), r, s)), l[2] && m.push(b(l[2], c.slice(s, o), s, o)), l[3] && m.push(b(l[3], c.slice(o, p), o, p))) : m.push(c.slice(s, o)), q = p, !h)) break
                    }
                    o === p && ++p
                }
                return h && !i && l && l[0] && c.length > q && m.push(b(l[0], c.slice(q), q, c.length)), m
            }
        }(a),
        function(a) {
            "use strict";

            function c(a) {
                return a.replace(/[- _]+/g, "").toLowerCase()
            }

            function d(a) {
                for (; a.length < 4;) a = "0" + a;
                return a
            }

            function e(a) {
                return parseInt(a, 16)
            }

            function f(a) {
                return parseInt(a, 10).toString(16)
            }

            function g(a) {
                var b = /^\\[xu](.+)/.exec(a);
                return b ? e(b[1]) : a.charCodeAt("\\" === a.charAt(0) ? 1 : 0)
            }

            function h(b) {
                var h, c = "",
                    e = -1;
                return a.forEach(b, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, function(a) {
                    h = g(a[1]), h > e + 1 && (c += "\\u" + d(f(e + 1)), h > e + 2 && (c += "-\\u" + d(f(h - 1)))), e = g(a[2] || a[1])
                }), 65535 > e && (c += "\\u" + d(f(e + 1)), 65534 > e && (c += "-\\uFFFF")), c
            }

            function i(a) {
                var c = "b!";
                return b[a][c] || (b[a][c] = h(b[a].bmp))
            }

            function j(a, c) {
                var d = b[a],
                    e = "";
                return d.bmp && !d.isBmpLast && (e = "[" + d.bmp + "]" + (d.astral ? "|" : "")), d.astral && (e += d.astral), d.isBmpLast && d.bmp && (e += (d.astral ? "|" : "") + "[" + d.bmp + "]"), c ? "(?:(?!" + e + ")(?:[\ud800-\udbff][\udc00-\udfff]|[\x00-\uffff]))" : "(?:" + e + ")"
            }

            function k(a, c) {
                var d = c ? "a!" : "a=";
                return b[a][d] || (b[a][d] = j(a, c))
            }
            var b = {};
            a.addToken(/\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/, function(a, d, e) {
                var f = "Invalid double negation ",
                    g = "Unknown Unicode token ",
                    h = "Unicode token missing data ",
                    j = "Astral mode required for Unicode token ",
                    l = "Astral mode does not support Unicode tokens within character classes",
                    m = "P" === a[1] || !!a[2],
                    n = e.indexOf("A") > -1,
                    o = c(a[4] || a[3]),
                    p = b[o];
                if ("P" === a[1] && a[2]) throw new SyntaxError(f + a[0]);
                if (!b.hasOwnProperty(o)) throw new SyntaxError(g + a[0]);
                if (p.inverseOf) {
                    if (o = c(p.inverseOf), !b.hasOwnProperty(o)) throw new ReferenceError(h + a[0] + " -> " + p.inverseOf);
                    p = b[o], m = !m
                }
                if (!p.bmp && !n) throw new SyntaxError(j + a[0]);
                if (n) {
                    if ("class" === d) throw new SyntaxError(l);
                    return k(o, m)
                }
                return "class" === d ? m ? i(o) : p.bmp : (m ? "[^" : "[") + p.bmp + "]"
            }, {
                scope: "all",
                optionalFlags: "A",
                leadChar: "\\"
            }), a.addUnicodeData = function(d) {
                var g, h, e = "Unicode token requires name",
                    f = "Unicode token has no character data ";
                for (h = 0; h < d.length; ++h) {
                    if (g = d[h], !g.name) throw new Error(e);
                    if (!(g.inverseOf || g.bmp || g.astral)) throw new Error(f + g.name);
                    b[c(g.name)] = g, g.alias && (b[c(g.alias)] = g)
                }
                a.cache.flush("patterns")
            }
        }(a),
        function(a) {
            "use strict";
            if (!a.addUnicodeData) throw new ReferenceError("Unicode Base must be loaded before Unicode Blocks");
            a.addUnicodeData([{
                name: "InAegean_Numbers",
                astral: "\ud800[\udd00-\udd3f]"
            }, {
                name: "InAhom",
                astral: "\ud805[\udf00-\udf3f]"
            }, {
                name: "InAlchemical_Symbols",
                astral: "\ud83d[\udf00-\udf7f]"
            }, {
                name: "InAlphabetic_Presentation_Forms",
                bmp: "\ufb00-\ufb4f"
            }, {
                name: "InAnatolian_Hieroglyphs",
                astral: "\ud811[\udc00-\ude7f]"
            }, {
                name: "InAncient_Greek_Musical_Notation",
                astral: "\ud834[\ude00-\ude4f]"
            }, {
                name: "InAncient_Greek_Numbers",
                astral: "\ud800[\udd40-\udd8f]"
            }, {
                name: "InAncient_Symbols",
                astral: "\ud800[\udd90-\uddcf]"
            }, {
                name: "InArabic",
                bmp: "\u0600-\u06ff"
            }, {
                name: "InArabic_Extended_A",
                bmp: "\u08a0-\u08ff"
            }, {
                name: "InArabic_Mathematical_Alphabetic_Symbols",
                astral: "\ud83b[\ude00-\udeff]"
            }, {
                name: "InArabic_Presentation_Forms_A",
                bmp: "\ufb50-\ufdff"
            }, {
                name: "InArabic_Presentation_Forms_B",
                bmp: "\ufe70-\ufeff"
            }, {
                name: "InArabic_Supplement",
                bmp: "\u0750-\u077f"
            }, {
                name: "InArmenian",
                bmp: "\u0530-\u058f"
            }, {
                name: "InArrows",
                bmp: "\u2190-\u21ff"
            }, {
                name: "InAvestan",
                astral: "\ud802[\udf00-\udf3f]"
            }, {
                name: "InBalinese",
                bmp: "\u1b00-\u1b7f"
            }, {
                name: "InBamum",
                bmp: "\ua6a0-\ua6ff"
            }, {
                name: "InBamum_Supplement",
                astral: "\ud81a[\udc00-\ude3f]"
            }, {
                name: "InBasic_Latin",
                bmp: "\x00-"
            }, {
                name: "InBassa_Vah",
                astral: "\ud81a[\uded0-\udeff]"
            }, {
                name: "InBatak",
                bmp: "\u1bc0-\u1bff"
            }, {
                name: "InBengali",
                bmp: "\u0980-\u09ff"
            }, {
                name: "InBlock_Elements",
                bmp: "\u2580-\u259f"
            }, {
                name: "InBopomofo",
                bmp: "\u3100-\u312f"
            }, {
                name: "InBopomofo_Extended",
                bmp: "\u31a0-\u31bf"
            }, {
                name: "InBox_Drawing",
                bmp: "\u2500-\u257f"
            }, {
                name: "InBrahmi",
                astral: "\ud804[\udc00-\udc7f]"
            }, {
                name: "InBraille_Patterns",
                bmp: "\u2800-\u28ff"
            }, {
                name: "InBuginese",
                bmp: "\u1a00-\u1a1f"
            }, {
                name: "InBuhid",
                bmp: "\u1740-\u175f"
            }, {
                name: "InByzantine_Musical_Symbols",
                astral: "\ud834[\udc00-\udcff]"
            }, {
                name: "InCJK_Compatibility",
                bmp: "\u3300-\u33ff"
            }, {
                name: "InCJK_Compatibility_Forms",
                bmp: "\ufe30-\ufe4f"
            }, {
                name: "InCJK_Compatibility_Ideographs",
                bmp: "\uf900-\ufaff"
            }, {
                name: "InCJK_Compatibility_Ideographs_Supplement",
                astral: "\ud87e[\udc00-\ude1f]"
            }, {
                name: "InCJK_Radicals_Supplement",
                bmp: "\u2e80-\u2eff"
            }, {
                name: "InCJK_Strokes",
                bmp: "\u31c0-\u31ef"
            }, {
                name: "InCJK_Symbols_and_Punctuation",
                bmp: "\u3000-\u303f"
            }, {
                name: "InCJK_Unified_Ideographs",
                bmp: "\u4e00-\u9fff"
            }, {
                name: "InCJK_Unified_Ideographs_Extension_A",
                bmp: "\u3400-\u4dbf"
            }, {
                name: "InCJK_Unified_Ideographs_Extension_B",
                astral: "[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\udedf]"
            }, {
                name: "InCJK_Unified_Ideographs_Extension_C",
                astral: "\ud86d[\udc00-\udf3f]|[\ud86a-\ud86c][\udc00-\udfff]|\ud869[\udf00-\udfff]"
            }, {
                name: "InCJK_Unified_Ideographs_Extension_D",
                astral: "\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1f]"
            }, {
                name: "InCJK_Unified_Ideographs_Extension_E",
                astral: "[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udeaf]|\ud86e[\udc20-\udfff]"
            }, {
                name: "InCarian",
                astral: "\ud800[\udea0-\udedf]"
            }, {
                name: "InCaucasian_Albanian",
                astral: "\ud801[\udd30-\udd6f]"
            }, {
                name: "InChakma",
                astral: "\ud804[\udd00-\udd4f]"
            }, {
                name: "InCham",
                bmp: "\uaa00-\uaa5f"
            }, {
                name: "InCherokee",
                bmp: "\u13a0-\u13ff"
            }, {
                name: "InCherokee_Supplement",
                bmp: "\uab70-\uabbf"
            }, {
                name: "InCombining_Diacritical_Marks",
                bmp: "\u0300-\u036f"
            }, {
                name: "InCombining_Diacritical_Marks_Extended",
                bmp: "\u1ab0-\u1aff"
            }, {
                name: "InCombining_Diacritical_Marks_Supplement",
                bmp: "\u1dc0-\u1dff"
            }, {
                name: "InCombining_Diacritical_Marks_for_Symbols",
                bmp: "\u20d0-\u20ff"
            }, {
                name: "InCombining_Half_Marks",
                bmp: "\ufe20-\ufe2f"
            }, {
                name: "InCommon_Indic_Number_Forms",
                bmp: "\ua830-\ua83f"
            }, {
                name: "InControl_Pictures",
                bmp: "\u2400-\u243f"
            }, {
                name: "InCoptic",
                bmp: "\u2c80-\u2cff"
            }, {
                name: "InCoptic_Epact_Numbers",
                astral: "\ud800[\udee0-\udeff]"
            }, {
                name: "InCounting_Rod_Numerals",
                astral: "\ud834[\udf60-\udf7f]"
            }, {
                name: "InCuneiform",
                astral: "\ud808[\udc00-\udfff]"
            }, {
                name: "InCuneiform_Numbers_and_Punctuation",
                astral: "\ud809[\udc00-\udc7f]"
            }, {
                name: "InCurrency_Symbols",
                bmp: "\u20a0-\u20cf"
            }, {
                name: "InCypriot_Syllabary",
                astral: "\ud802[\udc00-\udc3f]"
            }, {
                name: "InCyrillic",
                bmp: "\u0400-\u04ff"
            }, {
                name: "InCyrillic_Extended_A",
                bmp: "\u2de0-\u2dff"
            }, {
                name: "InCyrillic_Extended_B",
                bmp: "\ua640-\ua69f"
            }, {
                name: "InCyrillic_Supplement",
                bmp: "\u0500-\u052f"
            }, {
                name: "InDeseret",
                astral: "\ud801[\udc00-\udc4f]"
            }, {
                name: "InDevanagari",
                bmp: "\u0900-\u097f"
            }, {
                name: "InDevanagari_Extended",
                bmp: "\ua8e0-\ua8ff"
            }, {
                name: "InDingbats",
                bmp: "\u2700-\u27bf"
            }, {
                name: "InDomino_Tiles",
                astral: "\ud83c[\udc30-\udc9f]"
            }, {
                name: "InDuployan",
                astral: "\ud82f[\udc00-\udc9f]"
            }, {
                name: "InEarly_Dynastic_Cuneiform",
                astral: "\ud809[\udc80-\udd4f]"
            }, {
                name: "InEgyptian_Hieroglyphs",
                astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2f]"
            }, {
                name: "InElbasan",
                astral: "\ud801[\udd00-\udd2f]"
            }, {
                name: "InEmoticons",
                astral: "\ud83d[\ude00-\ude4f]"
            }, {
                name: "InEnclosed_Alphanumeric_Supplement",
                astral: "\ud83c[\udd00-\uddff]"
            }, {
                name: "InEnclosed_Alphanumerics",
                bmp: "\u2460-\u24ff"
            }, {
                name: "InEnclosed_CJK_Letters_and_Months",
                bmp: "\u3200-\u32ff"
            }, {
                name: "InEnclosed_Ideographic_Supplement",
                astral: "\ud83c[\ude00-\udeff]"
            }, {
                name: "InEthiopic",
                bmp: "\u1200-\u137f"
            }, {
                name: "InEthiopic_Extended",
                bmp: "\u2d80-\u2ddf"
            }, {
                name: "InEthiopic_Extended_A",
                bmp: "\uab00-\uab2f"
            }, {
                name: "InEthiopic_Supplement",
                bmp: "\u1380-\u139f"
            }, {
                name: "InGeneral_Punctuation",
                bmp: "\u2000-\u206f"
            }, {
                name: "InGeometric_Shapes",
                bmp: "\u25a0-\u25ff"
            }, {
                name: "InGeometric_Shapes_Extended",
                astral: "\ud83d[\udf80-\udfff]"
            }, {
                name: "InGeorgian",
                bmp: "\u10a0-\u10ff"
            }, {
                name: "InGeorgian_Supplement",
                bmp: "\u2d00-\u2d2f"
            }, {
                name: "InGlagolitic",
                bmp: "\u2c00-\u2c5f"
            }, {
                name: "InGothic",
                astral: "\ud800[\udf30-\udf4f]"
            }, {
                name: "InGrantha",
                astral: "\ud804[\udf00-\udf7f]"
            }, {
                name: "InGreek_Extended",
                bmp: "\u1f00-\u1fff"
            }, {
                name: "InGreek_and_Coptic",
                bmp: "\u0370-\u03ff"
            }, {
                name: "InGujarati",
                bmp: "\u0a80-\u0aff"
            }, {
                name: "InGurmukhi",
                bmp: "\u0a00-\u0a7f"
            }, {
                name: "InHalfwidth_and_Fullwidth_Forms",
                bmp: "\uff00-\uffef"
            }, {
                name: "InHangul_Compatibility_Jamo",
                bmp: "\u3130-\u318f"
            }, {
                name: "InHangul_Jamo",
                bmp: "\u1100-\u11ff"
            }, {
                name: "InHangul_Jamo_Extended_A",
                bmp: "\ua960-\ua97f"
            }, {
                name: "InHangul_Jamo_Extended_B",
                bmp: "\ud7b0-\ud7ff"
            }, {
                name: "InHangul_Syllables",
                bmp: "\uac00-\ud7af"
            }, {
                name: "InHanunoo",
                bmp: "\u1720-\u173f"
            }, {
                name: "InHatran",
                astral: "\ud802[\udce0-\udcff]"
            }, {
                name: "InHebrew",
                bmp: "\u0590-\u05ff"
            }, {
                name: "InHigh_Private_Use_Surrogates",
                bmp: "\udb80-\udbff"
            }, {
                name: "InHigh_Surrogates",
                bmp: "\ud800-\udb7f"
            }, {
                name: "InHiragana",
                bmp: "\u3040-\u309f"
            }, {
                name: "InIPA_Extensions",
                bmp: "\u0250-\u02af"
            }, {
                name: "InIdeographic_Description_Characters",
                bmp: "\u2ff0-\u2fff"
            }, {
                name: "InImperial_Aramaic",
                astral: "\ud802[\udc40-\udc5f]"
            }, {
                name: "InInscriptional_Pahlavi",
                astral: "\ud802[\udf60-\udf7f]"
            }, {
                name: "InInscriptional_Parthian",
                astral: "\ud802[\udf40-\udf5f]"
            }, {
                name: "InJavanese",
                bmp: "\ua980-\ua9df"
            }, {
                name: "InKaithi",
                astral: "\ud804[\udc80-\udccf]"
            }, {
                name: "InKana_Supplement",
                astral: "\ud82c[\udc00-\udcff]"
            }, {
                name: "InKanbun",
                bmp: "\u3190-\u319f"
            }, {
                name: "InKangxi_Radicals",
                bmp: "\u2f00-\u2fdf"
            }, {
                name: "InKannada",
                bmp: "\u0c80-\u0cff"
            }, {
                name: "InKatakana",
                bmp: "\u30a0-\u30ff"
            }, {
                name: "InKatakana_Phonetic_Extensions",
                bmp: "\u31f0-\u31ff"
            }, {
                name: "InKayah_Li",
                bmp: "\ua900-\ua92f"
            }, {
                name: "InKharoshthi",
                astral: "\ud802[\ude00-\ude5f]"
            }, {
                name: "InKhmer",
                bmp: "\u1780-\u17ff"
            }, {
                name: "InKhmer_Symbols",
                bmp: "\u19e0-\u19ff"
            }, {
                name: "InKhojki",
                astral: "\ud804[\ude00-\ude4f]"
            }, {
                name: "InKhudawadi",
                astral: "\ud804[\udeb0-\udeff]"
            }, {
                name: "InLao",
                bmp: "\u0e80-\u0eff"
            }, {
                name: "InLatin_Extended_Additional",
                bmp: "\u1e00-\u1eff"
            }, {
                name: "InLatin_Extended_A",
                bmp: "\u0100-\u017f"
            }, {
                name: "InLatin_Extended_B",
                bmp: "\u0180-\u024f"
            }, {
                name: "InLatin_Extended_C",
                bmp: "\u2c60-\u2c7f"
            }, {
                name: "InLatin_Extended_D",
                bmp: "\ua720-\ua7ff"
            }, {
                name: "InLatin_Extended_E",
                bmp: "\uab30-\uab6f"
            }, {
                name: "InLatin_1_Supplement",
                bmp: "\x80-\xff"
            }, {
                name: "InLepcha",
                bmp: "\u1c00-\u1c4f"
            }, {
                name: "InLetterlike_Symbols",
                bmp: "\u2100-\u214f"
            }, {
                name: "InLimbu",
                bmp: "\u1900-\u194f"
            }, {
                name: "InLinear_A",
                astral: "\ud801[\ude00-\udf7f]"
            }, {
                name: "InLinear_B_Ideograms",
                astral: "\ud800[\udc80-\udcff]"
            }, {
                name: "InLinear_B_Syllabary",
                astral: "\ud800[\udc00-\udc7f]"
            }, {
                name: "InLisu",
                bmp: "\ua4d0-\ua4ff"
            }, {
                name: "InLow_Surrogates",
                bmp: "\udc00-\udfff"
            }, {
                name: "InLycian",
                astral: "\ud800[\ude80-\ude9f]"
            }, {
                name: "InLydian",
                astral: "\ud802[\udd20-\udd3f]"
            }, {
                name: "InMahajani",
                astral: "\ud804[\udd50-\udd7f]"
            }, {
                name: "InMahjong_Tiles",
                astral: "\ud83c[\udc00-\udc2f]"
            }, {
                name: "InMalayalam",
                bmp: "\u0d00-\u0d7f"
            }, {
                name: "InMandaic",
                bmp: "\u0840-\u085f"
            }, {
                name: "InManichaean",
                astral: "\ud802[\udec0-\udeff]"
            }, {
                name: "InMathematical_Alphanumeric_Symbols",
                astral: "\ud835[\udc00-\udfff]"
            }, {
                name: "InMathematical_Operators",
                bmp: "\u2200-\u22ff"
            }, {
                name: "InMeetei_Mayek",
                bmp: "\uabc0-\uabff"
            }, {
                name: "InMeetei_Mayek_Extensions",
                bmp: "\uaae0-\uaaff"
            }, {
                name: "InMende_Kikakui",
                astral: "\ud83a[\udc00-\udcdf]"
            }, {
                name: "InMeroitic_Cursive",
                astral: "\ud802[\udda0-\uddff]"
            }, {
                name: "InMeroitic_Hieroglyphs",
                astral: "\ud802[\udd80-\udd9f]"
            }, {
                name: "InMiao",
                astral: "\ud81b[\udf00-\udf9f]"
            }, {
                name: "InMiscellaneous_Mathematical_Symbols_A",
                bmp: "\u27c0-\u27ef"
            }, {
                name: "InMiscellaneous_Mathematical_Symbols_B",
                bmp: "\u2980-\u29ff"
            }, {
                name: "InMiscellaneous_Symbols",
                bmp: "\u2600-\u26ff"
            }, {
                name: "InMiscellaneous_Symbols_and_Arrows",
                bmp: "\u2b00-\u2bff"
            }, {
                name: "InMiscellaneous_Symbols_and_Pictographs",
                astral: "\ud83d[\udc00-\uddff]|\ud83c[\udf00-\udfff]"
            }, {
                name: "InMiscellaneous_Technical",
                bmp: "\u2300-\u23ff"
            }, {
                name: "InModi",
                astral: "\ud805[\ude00-\ude5f]"
            }, {
                name: "InModifier_Tone_Letters",
                bmp: "\ua700-\ua71f"
            }, {
                name: "InMongolian",
                bmp: "\u1800-\u18af"
            }, {
                name: "InMro",
                astral: "\ud81a[\ude40-\ude6f]"
            }, {
                name: "InMultani",
                astral: "\ud804[\ude80-\udeaf]"
            }, {
                name: "InMusical_Symbols",
                astral: "\ud834[\udd00-\uddff]"
            }, {
                name: "InMyanmar",
                bmp: "\u1000-\u109f"
            }, {
                name: "InMyanmar_Extended_A",
                bmp: "\uaa60-\uaa7f"
            }, {
                name: "InMyanmar_Extended_B",
                bmp: "\ua9e0-\ua9ff"
            }, {
                name: "InNKo",
                bmp: "\u07c0-\u07ff"
            }, {
                name: "InNabataean",
                astral: "\ud802[\udc80-\udcaf]"
            }, {
                name: "InNew_Tai_Lue",
                bmp: "\u1980-\u19df"
            }, {
                name: "InNumber_Forms",
                bmp: "\u2150-\u218f"
            }, {
                name: "InOgham",
                bmp: "\u1680-\u169f"
            }, {
                name: "InOl_Chiki",
                bmp: "\u1c50-\u1c7f"
            }, {
                name: "InOld_Hungarian",
                astral: "\ud803[\udc80-\udcff]"
            }, {
                name: "InOld_Italic",
                astral: "\ud800[\udf00-\udf2f]"
            }, {
                name: "InOld_North_Arabian",
                astral: "\ud802[\ude80-\ude9f]"
            }, {
                name: "InOld_Permic",
                astral: "\ud800[\udf50-\udf7f]"
            }, {
                name: "InOld_Persian",
                astral: "\ud800[\udfa0-\udfdf]"
            }, {
                name: "InOld_South_Arabian",
                astral: "\ud802[\ude60-\ude7f]"
            }, {
                name: "InOld_Turkic",
                astral: "\ud803[\udc00-\udc4f]"
            }, {
                name: "InOptical_Character_Recognition",
                bmp: "\u2440-\u245f"
            }, {
                name: "InOriya",
                bmp: "\u0b00-\u0b7f"
            }, {
                name: "InOrnamental_Dingbats",
                astral: "\ud83d[\ude50-\ude7f]"
            }, {
                name: "InOsmanya",
                astral: "\ud801[\udc80-\udcaf]"
            }, {
                name: "InPahawh_Hmong",
                astral: "\ud81a[\udf00-\udf8f]"
            }, {
                name: "InPalmyrene",
                astral: "\ud802[\udc60-\udc7f]"
            }, {
                name: "InPau_Cin_Hau",
                astral: "\ud806[\udec0-\udeff]"
            }, {
                name: "InPhags_pa",
                bmp: "\ua840-\ua87f"
            }, {
                name: "InPhaistos_Disc",
                astral: "\ud800[\uddd0-\uddff]"
            }, {
                name: "InPhoenician",
                astral: "\ud802[\udd00-\udd1f]"
            }, {
                name: "InPhonetic_Extensions",
                bmp: "\u1d00-\u1d7f"
            }, {
                name: "InPhonetic_Extensions_Supplement",
                bmp: "\u1d80-\u1dbf"
            }, {
                name: "InPlaying_Cards",
                astral: "\ud83c[\udca0-\udcff]"
            }, {
                name: "InPrivate_Use_Area",
                bmp: "\ue000-\uf8ff"
            }, {
                name: "InPsalter_Pahlavi",
                astral: "\ud802[\udf80-\udfaf]"
            }, {
                name: "InRejang",
                bmp: "\ua930-\ua95f"
            }, {
                name: "InRumi_Numeral_Symbols",
                astral: "\ud803[\ude60-\ude7f]"
            }, {
                name: "InRunic",
                bmp: "\u16a0-\u16ff"
            }, {
                name: "InSamaritan",
                bmp: "\u0800-\u083f"
            }, {
                name: "InSaurashtra",
                bmp: "\ua880-\ua8df"
            }, {
                name: "InSharada",
                astral: "\ud804[\udd80-\udddf]"
            }, {
                name: "InShavian",
                astral: "\ud801[\udc50-\udc7f]"
            }, {
                name: "InShorthand_Format_Controls",
                astral: "\ud82f[\udca0-\udcaf]"
            }, {
                name: "InSiddham",
                astral: "\ud805[\udd80-\uddff]"
            }, {
                name: "InSinhala",
                bmp: "\u0d80-\u0dff"
            }, {
                name: "InSinhala_Archaic_Numbers",
                astral: "\ud804[\udde0-\uddff]"
            }, {
                name: "InSmall_Form_Variants",
                bmp: "\ufe50-\ufe6f"
            }, {
                name: "InSora_Sompeng",
                astral: "\ud804[\udcd0-\udcff]"
            }, {
                name: "InSpacing_Modifier_Letters",
                bmp: "\u02b0-\u02ff"
            }, {
                name: "InSpecials",
                bmp: "\ufff0-\uffff"
            }, {
                name: "InSundanese",
                bmp: "\u1b80-\u1bbf"
            }, {
                name: "InSundanese_Supplement",
                bmp: "\u1cc0-\u1ccf"
            }, {
                name: "InSuperscripts_and_Subscripts",
                bmp: "\u2070-\u209f"
            }, {
                name: "InSupplemental_Arrows_A",
                bmp: "\u27f0-\u27ff"
            }, {
                name: "InSupplemental_Arrows_B",
                bmp: "\u2900-\u297f"
            }, {
                name: "InSupplemental_Arrows_C",
                astral: "\ud83e[\udc00-\udcff]"
            }, {
                name: "InSupplemental_Mathematical_Operators",
                bmp: "\u2a00-\u2aff"
            }, {
                name: "InSupplemental_Punctuation",
                bmp: "\u2e00-\u2e7f"
            }, {
                name: "InSupplemental_Symbols_and_Pictographs",
                astral: "\ud83e[\udd00-\uddff]"
            }, {
                name: "InSupplementary_Private_Use_Area_A",
                astral: "[\udb80-\udbbf][\udc00-\udfff]"
            }, {
                name: "InSupplementary_Private_Use_Area_B",
                astral: "[\udbc0-\udbff][\udc00-\udfff]"
            }, {
                name: "InSutton_SignWriting",
                astral: "\ud836[\udc00-\udeaf]"
            }, {
                name: "InSyloti_Nagri",
                bmp: "\ua800-\ua82f"
            }, {
                name: "InSyriac",
                bmp: "\u0700-\u074f"
            }, {
                name: "InTagalog",
                bmp: "\u1700-\u171f"
            }, {
                name: "InTagbanwa",
                bmp: "\u1760-\u177f"
            }, {
                name: "InTags",
                astral: "\udb40[\udc00-\udc7f]"
            }, {
                name: "InTai_Le",
                bmp: "\u1950-\u197f"
            }, {
                name: "InTai_Tham",
                bmp: "\u1a20-\u1aaf"
            }, {
                name: "InTai_Viet",
                bmp: "\uaa80-\uaadf"
            }, {
                name: "InTai_Xuan_Jing_Symbols",
                astral: "\ud834[\udf00-\udf5f]"
            }, {
                name: "InTakri",
                astral: "\ud805[\ude80-\udecf]"
            }, {
                name: "InTamil",
                bmp: "\u0b80-\u0bff"
            }, {
                name: "InTelugu",
                bmp: "\u0c00-\u0c7f"
            }, {
                name: "InThaana",
                bmp: "\u0780-\u07bf"
            }, {
                name: "InThai",
                bmp: "\u0e00-\u0e7f"
            }, {
                name: "InTibetan",
                bmp: "\u0f00-\u0fff"
            }, {
                name: "InTifinagh",
                bmp: "\u2d30-\u2d7f"
            }, {
                name: "InTirhuta",
                astral: "\ud805[\udc80-\udcdf]"
            }, {
                name: "InTransport_and_Map_Symbols",
                astral: "\ud83d[\ude80-\udeff]"
            }, {
                name: "InUgaritic",
                astral: "\ud800[\udf80-\udf9f]"
            }, {
                name: "InUnified_Canadian_Aboriginal_Syllabics",
                bmp: "\u1400-\u167f"
            }, {
                name: "InUnified_Canadian_Aboriginal_Syllabics_Extended",
                bmp: "\u18b0-\u18ff"
            }, {
                name: "InVai",
                bmp: "\ua500-\ua63f"
            }, {
                name: "InVariation_Selectors",
                bmp: "\ufe00-\ufe0f"
            }, {
                name: "InVariation_Selectors_Supplement",
                astral: "\udb40[\udd00-\uddef]"
            }, {
                name: "InVedic_Extensions",
                bmp: "\u1cd0-\u1cff"
            }, {
                name: "InVertical_Forms",
                bmp: "\ufe10-\ufe1f"
            }, {
                name: "InWarang_Citi",
                astral: "\ud806[\udca0-\udcff]"
            }, {
                name: "InYi_Radicals",
                bmp: "\ua490-\ua4cf"
            }, {
                name: "InYi_Syllables",
                bmp: "\ua000-\ua48f"
            }, {
                name: "InYijing_Hexagram_Symbols",
                bmp: "\u4dc0-\u4dff"
            }])
        }(a),
        function(a) {
            "use strict";
            if (!a.addUnicodeData) throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
            a.addUnicodeData([{
                name: "C",
                alias: "Other",
                isBmpLast: !0,
                bmp: "\x00--\x9f\xad\u0378\u0379\u0380-\u0383\u038b\u038d\u03a2\u0530\u0557\u0558\u0560\u0588\u058b\u058c\u0590\u05c8-\u05cf\u05eb-\u05ef\u05f5-\u0605\u061c\u061d\u06dd\u070e\u070f\u074b\u074c\u07b2-\u07bf\u07fb-\u07ff\u082e\u082f\u083f\u085c\u085d\u085f-\u089f\u08b5-\u08e2\u0984\u098d\u098e\u0991\u0992\u09a9\u09b1\u09b3-\u09b5\u09ba\u09bb\u09c5\u09c6\u09c9\u09ca\u09cf-\u09d6\u09d8-\u09db\u09de\u09e4\u09e5\u09fc-\u0a00\u0a04\u0a0b-\u0a0e\u0a11\u0a12\u0a29\u0a31\u0a34\u0a37\u0a3a\u0a3b\u0a3d\u0a43-\u0a46\u0a49\u0a4a\u0a4e-\u0a50\u0a52-\u0a58\u0a5d\u0a5f-\u0a65\u0a76-\u0a80\u0a84\u0a8e\u0a92\u0aa9\u0ab1\u0ab4\u0aba\u0abb\u0ac6\u0aca\u0ace\u0acf\u0ad1-\u0adf\u0ae4\u0ae5\u0af2-\u0af8\u0afa-\u0b00\u0b04\u0b0d\u0b0e\u0b11\u0b12\u0b29\u0b31\u0b34\u0b3a\u0b3b\u0b45\u0b46\u0b49\u0b4a\u0b4e-\u0b55\u0b58-\u0b5b\u0b5e\u0b64\u0b65\u0b78-\u0b81\u0b84\u0b8b-\u0b8d\u0b91\u0b96-\u0b98\u0b9b\u0b9d\u0ba0-\u0ba2\u0ba5-\u0ba7\u0bab-\u0bad\u0bba-\u0bbd\u0bc3-\u0bc5\u0bc9\u0bce\u0bcf\u0bd1-\u0bd6\u0bd8-\u0be5\u0bfb-\u0bff\u0c04\u0c0d\u0c11\u0c29\u0c3a-\u0c3c\u0c45\u0c49\u0c4e-\u0c54\u0c57\u0c5b-\u0c5f\u0c64\u0c65\u0c70-\u0c77\u0c80\u0c84\u0c8d\u0c91\u0ca9\u0cb4\u0cba\u0cbb\u0cc5\u0cc9\u0cce-\u0cd4\u0cd7-\u0cdd\u0cdf\u0ce4\u0ce5\u0cf0\u0cf3-\u0d00\u0d04\u0d0d\u0d11\u0d3b\u0d3c\u0d45\u0d49\u0d4f-\u0d56\u0d58-\u0d5e\u0d64\u0d65\u0d76-\u0d78\u0d80\u0d81\u0d84\u0d97-\u0d99\u0db2\u0dbc\u0dbe\u0dbf\u0dc7-\u0dc9\u0dcb-\u0dce\u0dd5\u0dd7\u0de0-\u0de5\u0df0\u0df1\u0df5-\u0e00\u0e3b-\u0e3e\u0e5c-\u0e80\u0e83\u0e85\u0e86\u0e89\u0e8b\u0e8c\u0e8e-\u0e93\u0e98\u0ea0\u0ea4\u0ea6\u0ea8\u0ea9\u0eac\u0eba\u0ebe\u0ebf\u0ec5\u0ec7\u0ece\u0ecf\u0eda\u0edb\u0ee0-\u0eff\u0f48\u0f6d-\u0f70\u0f98\u0fbd\u0fcd\u0fdb-\u0fff\u10c6\u10c8-\u10cc\u10ce\u10cf\u1249\u124e\u124f\u1257\u1259\u125e\u125f\u1289\u128e\u128f\u12b1\u12b6\u12b7\u12bf\u12c1\u12c6\u12c7\u12d7\u1311\u1316\u1317\u135b\u135c\u137d-\u137f\u139a-\u139f\u13f6\u13f7\u13fe\u13ff\u169d-\u169f\u16f9-\u16ff\u170d\u1715-\u171f\u1737-\u173f\u1754-\u175f\u176d\u1771\u1774-\u177f\u17de\u17df\u17ea-\u17ef\u17fa-\u17ff\u180e\u180f\u181a-\u181f\u1878-\u187f\u18ab-\u18af\u18f6-\u18ff\u191f\u192c-\u192f\u193c-\u193f\u1941-\u1943\u196e\u196f\u1975-\u197f\u19ac-\u19af\u19ca-\u19cf\u19db-\u19dd\u1a1c\u1a1d\u1a5f\u1a7d\u1a7e\u1a8a-\u1a8f\u1a9a-\u1a9f\u1aae\u1aaf\u1abf-\u1aff\u1b4c-\u1b4f\u1b7d-\u1b7f\u1bf4-\u1bfb\u1c38-\u1c3a\u1c4a-\u1c4c\u1c80-\u1cbf\u1cc8-\u1ccf\u1cf7\u1cfa-\u1cff\u1df6-\u1dfb\u1f16\u1f17\u1f1e\u1f1f\u1f46\u1f47\u1f4e\u1f4f\u1f58\u1f5a\u1f5c\u1f5e\u1f7e\u1f7f\u1fb5\u1fc5\u1fd4\u1fd5\u1fdc\u1ff0\u1ff1\u1ff5\u1fff\u200b-\u200f\u202a-\u202e\u2060-\u206f\u2072\u2073\u208f\u209d-\u209f\u20bf-\u20cf\u20f1-\u20ff\u218c-\u218f\u23fb-\u23ff\u2427-\u243f\u244b-\u245f\u2b74\u2b75\u2b96\u2b97\u2bba-\u2bbc\u2bc9\u2bd2-\u2beb\u2bf0-\u2bff\u2c2f\u2c5f\u2cf4-\u2cf8\u2d26\u2d28-\u2d2c\u2d2e\u2d2f\u2d68-\u2d6e\u2d71-\u2d7e\u2d97-\u2d9f\u2da7\u2daf\u2db7\u2dbf\u2dc7\u2dcf\u2dd7\u2ddf\u2e43-\u2e7f\u2e9a\u2ef4-\u2eff\u2fd6-\u2fef\u2ffc-\u2fff\u3040\u3097\u3098\u3100-\u3104\u312e-\u3130\u318f\u31bb-\u31bf\u31e4-\u31ef\u321f\u32ff\u4db6-\u4dbf\u9fd6-\u9fff\ua48d-\ua48f\ua4c7-\ua4cf\ua62c-\ua63f\ua6f8-\ua6ff\ua7ae\ua7af\ua7b8-\ua7f6\ua82c-\ua82f\ua83a-\ua83f\ua878-\ua87f\ua8c5-\ua8cd\ua8da-\ua8df\ua8fe\ua8ff\ua954-\ua95e\ua97d-\ua97f\ua9ce\ua9da-\ua9dd\ua9ff\uaa37-\uaa3f\uaa4e\uaa4f\uaa5a\uaa5b\uaac3-\uaada\uaaf7-\uab00\uab07\uab08\uab0f\uab10\uab17-\uab1f\uab27\uab2f\uab66-\uab6f\uabee\uabef\uabfa-\uabff\ud7a4-\ud7af\ud7c7-\ud7ca\ud7fc-\uf8ff\ufa6e\ufa6f\ufada-\ufaff\ufb07-\ufb12\ufb18-\ufb1c\ufb37\ufb3d\ufb3f\ufb42\ufb45\ufbc2-\ufbd2\ufd40-\ufd4f\ufd90\ufd91\ufdc8-\ufdef\ufdfe\ufdff\ufe1a-\ufe1f\ufe53\ufe67\ufe6c-\ufe6f\ufe75\ufefd-\uff00\uffbf-\uffc1\uffc8\uffc9\uffd0\uffd1\uffd8\uffd9\uffdd-\uffdf\uffe7\uffef-\ufffb\ufffe\uffff",
                astral: "\ud834[\udcf6-\udcff\udd27\udd28\udd73-\udd7a\udde9-\uddff\ude46-\udeff\udf57-\udf5f\udf72-\udfff]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd2f\udd6c-\udd6f\udd9b-\udde5\ude03-\ude0f\ude3b-\ude3f\ude49-\ude4f\ude52-\udeff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|\ud81b[\udc00-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfff]|\ud86e[\udc1e\udc1f]|\ud83d[\udd7a\udda4\uded1-\udedf\udeed-\udeef\udef4-\udeff\udf74-\udf7f\udfd5-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8d-\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2f\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud869[\uded7-\udeff]|\ud83b[\udc00-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00-\udcff\uddf0-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcbd\udcc2-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd44-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3e-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf3b\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udfff]|\ud80d[\udc2f-\udfff]|\ud86d[\udf35-\udf3f]|[\ud807\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud81c-\ud82b\ud82d\ud82e\ud830-\ud833\ud837-\ud839\ud83f\ud874-\ud87d\ud87f-\udb3f\udb41-\udbff][\udc00-\udfff]|\ud806[\udc00-\udc9f\udcf3-\udcfe\udd00-\udebf\udef9-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd00-\ude5f\ude7f-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud805[\udc00-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude7f\udeb8-\udebf\udeca-\udeff\udf1a-\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude34-\ude37\ude3b-\ude3e\ude48-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud808[\udf9a-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca0-\udfff]|\ud82c[\udc02-\udfff]|\ud811[\ude47-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udd0f\udd19-\udd7f\udd85-\uddbf\uddc1-\udfff]|\ud873[\udea2-\udfff]"
            }, {
                name: "Cc",
                alias: "Control",
                bmp: "\x00--\x9f"
            }, {
                name: "Cf",
                alias: "Format",
                bmp: "\xad\u0600-\u0605\u061c\u06dd\u070f\u180e\u200b-\u200f\u202a-\u202e\u2060-\u2064\u2066-\u206f\ufeff\ufff9-\ufffb",
                astral: "\udb40[\udc01\udc20-\udc7f]|\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|\ud804\udcbd"
            }, {
                name: "Cn",
                alias: "Unassigned",
                bmp: "\u0378\u0379\u0380-\u0383\u038b\u038d\u03a2\u0530\u0557\u0558\u0560\u0588\u058b\u058c\u0590\u05c8-\u05cf\u05eb-\u05ef\u05f5-\u05ff\u061d\u070e\u074b\u074c\u07b2-\u07bf\u07fb-\u07ff\u082e\u082f\u083f\u085c\u085d\u085f-\u089f\u08b5-\u08e2\u0984\u098d\u098e\u0991\u0992\u09a9\u09b1\u09b3-\u09b5\u09ba\u09bb\u09c5\u09c6\u09c9\u09ca\u09cf-\u09d6\u09d8-\u09db\u09de\u09e4\u09e5\u09fc-\u0a00\u0a04\u0a0b-\u0a0e\u0a11\u0a12\u0a29\u0a31\u0a34\u0a37\u0a3a\u0a3b\u0a3d\u0a43-\u0a46\u0a49\u0a4a\u0a4e-\u0a50\u0a52-\u0a58\u0a5d\u0a5f-\u0a65\u0a76-\u0a80\u0a84\u0a8e\u0a92\u0aa9\u0ab1\u0ab4\u0aba\u0abb\u0ac6\u0aca\u0ace\u0acf\u0ad1-\u0adf\u0ae4\u0ae5\u0af2-\u0af8\u0afa-\u0b00\u0b04\u0b0d\u0b0e\u0b11\u0b12\u0b29\u0b31\u0b34\u0b3a\u0b3b\u0b45\u0b46\u0b49\u0b4a\u0b4e-\u0b55\u0b58-\u0b5b\u0b5e\u0b64\u0b65\u0b78-\u0b81\u0b84\u0b8b-\u0b8d\u0b91\u0b96-\u0b98\u0b9b\u0b9d\u0ba0-\u0ba2\u0ba5-\u0ba7\u0bab-\u0bad\u0bba-\u0bbd\u0bc3-\u0bc5\u0bc9\u0bce\u0bcf\u0bd1-\u0bd6\u0bd8-\u0be5\u0bfb-\u0bff\u0c04\u0c0d\u0c11\u0c29\u0c3a-\u0c3c\u0c45\u0c49\u0c4e-\u0c54\u0c57\u0c5b-\u0c5f\u0c64\u0c65\u0c70-\u0c77\u0c80\u0c84\u0c8d\u0c91\u0ca9\u0cb4\u0cba\u0cbb\u0cc5\u0cc9\u0cce-\u0cd4\u0cd7-\u0cdd\u0cdf\u0ce4\u0ce5\u0cf0\u0cf3-\u0d00\u0d04\u0d0d\u0d11\u0d3b\u0d3c\u0d45\u0d49\u0d4f-\u0d56\u0d58-\u0d5e\u0d64\u0d65\u0d76-\u0d78\u0d80\u0d81\u0d84\u0d97-\u0d99\u0db2\u0dbc\u0dbe\u0dbf\u0dc7-\u0dc9\u0dcb-\u0dce\u0dd5\u0dd7\u0de0-\u0de5\u0df0\u0df1\u0df5-\u0e00\u0e3b-\u0e3e\u0e5c-\u0e80\u0e83\u0e85\u0e86\u0e89\u0e8b\u0e8c\u0e8e-\u0e93\u0e98\u0ea0\u0ea4\u0ea6\u0ea8\u0ea9\u0eac\u0eba\u0ebe\u0ebf\u0ec5\u0ec7\u0ece\u0ecf\u0eda\u0edb\u0ee0-\u0eff\u0f48\u0f6d-\u0f70\u0f98\u0fbd\u0fcd\u0fdb-\u0fff\u10c6\u10c8-\u10cc\u10ce\u10cf\u1249\u124e\u124f\u1257\u1259\u125e\u125f\u1289\u128e\u128f\u12b1\u12b6\u12b7\u12bf\u12c1\u12c6\u12c7\u12d7\u1311\u1316\u1317\u135b\u135c\u137d-\u137f\u139a-\u139f\u13f6\u13f7\u13fe\u13ff\u169d-\u169f\u16f9-\u16ff\u170d\u1715-\u171f\u1737-\u173f\u1754-\u175f\u176d\u1771\u1774-\u177f\u17de\u17df\u17ea-\u17ef\u17fa-\u17ff\u180f\u181a-\u181f\u1878-\u187f\u18ab-\u18af\u18f6-\u18ff\u191f\u192c-\u192f\u193c-\u193f\u1941-\u1943\u196e\u196f\u1975-\u197f\u19ac-\u19af\u19ca-\u19cf\u19db-\u19dd\u1a1c\u1a1d\u1a5f\u1a7d\u1a7e\u1a8a-\u1a8f\u1a9a-\u1a9f\u1aae\u1aaf\u1abf-\u1aff\u1b4c-\u1b4f\u1b7d-\u1b7f\u1bf4-\u1bfb\u1c38-\u1c3a\u1c4a-\u1c4c\u1c80-\u1cbf\u1cc8-\u1ccf\u1cf7\u1cfa-\u1cff\u1df6-\u1dfb\u1f16\u1f17\u1f1e\u1f1f\u1f46\u1f47\u1f4e\u1f4f\u1f58\u1f5a\u1f5c\u1f5e\u1f7e\u1f7f\u1fb5\u1fc5\u1fd4\u1fd5\u1fdc\u1ff0\u1ff1\u1ff5\u1fff\u2065\u2072\u2073\u208f\u209d-\u209f\u20bf-\u20cf\u20f1-\u20ff\u218c-\u218f\u23fb-\u23ff\u2427-\u243f\u244b-\u245f\u2b74\u2b75\u2b96\u2b97\u2bba-\u2bbc\u2bc9\u2bd2-\u2beb\u2bf0-\u2bff\u2c2f\u2c5f\u2cf4-\u2cf8\u2d26\u2d28-\u2d2c\u2d2e\u2d2f\u2d68-\u2d6e\u2d71-\u2d7e\u2d97-\u2d9f\u2da7\u2daf\u2db7\u2dbf\u2dc7\u2dcf\u2dd7\u2ddf\u2e43-\u2e7f\u2e9a\u2ef4-\u2eff\u2fd6-\u2fef\u2ffc-\u2fff\u3040\u3097\u3098\u3100-\u3104\u312e-\u3130\u318f\u31bb-\u31bf\u31e4-\u31ef\u321f\u32ff\u4db6-\u4dbf\u9fd6-\u9fff\ua48d-\ua48f\ua4c7-\ua4cf\ua62c-\ua63f\ua6f8-\ua6ff\ua7ae\ua7af\ua7b8-\ua7f6\ua82c-\ua82f\ua83a-\ua83f\ua878-\ua87f\ua8c5-\ua8cd\ua8da-\ua8df\ua8fe\ua8ff\ua954-\ua95e\ua97d-\ua97f\ua9ce\ua9da-\ua9dd\ua9ff\uaa37-\uaa3f\uaa4e\uaa4f\uaa5a\uaa5b\uaac3-\uaada\uaaf7-\uab00\uab07\uab08\uab0f\uab10\uab17-\uab1f\uab27\uab2f\uab66-\uab6f\uabee\uabef\uabfa-\uabff\ud7a4-\ud7af\ud7c7-\ud7ca\ud7fc-\ud7ff\ufa6e\ufa6f\ufada-\ufaff\ufb07-\ufb12\ufb18-\ufb1c\ufb37\ufb3d\ufb3f\ufb42\ufb45\ufbc2-\ufbd2\ufd40-\ufd4f\ufd90\ufd91\ufdc8-\ufdef\ufdfe\ufdff\ufe1a-\ufe1f\ufe53\ufe67\ufe6c-\ufe6f\ufe75\ufefd\ufefe\uff00\uffbf-\uffc1\uffc8\uffc9\uffd0\uffd1\uffd8\uffd9\uffdd-\uffdf\uffe7\uffef-\ufff8\ufffe\uffff",
                astral: "\udb40[\udc00\udc02-\udc1f\udc80-\udcff\uddf0-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udde9-\uddff\ude46-\udeff\udf57-\udf5f\udf72-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd2f\udd6c-\udd6f\udd9b-\udde5\ude03-\ude0f\ude3b-\ude3f\ude49-\ude4f\ude52-\udeff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|\ud81b[\udc00-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfff]|\ud86e[\udc1e\udc1f]|\ud83d[\udd7a\udda4\uded1-\udedf\udeed-\udeef\udef4-\udeff\udf74-\udf7f\udfd5-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8d-\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2f\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud869[\uded7-\udeff]|\ud83b[\udc00-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|[\udbbf\udbff][\udffe\udfff]|\ud87e[\ude1e-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca4-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udfff]|\ud80d[\udc2f-\udfff]|\ud86d[\udf35-\udf3f]|[\ud807\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud81c-\ud82b\ud82d\ud82e\ud830-\ud833\ud837-\ud839\ud83f\ud874-\ud87d\ud87f-\udb3f\udb41-\udb7f][\udc00-\udfff]|\ud806[\udc00-\udc9f\udcf3-\udcfe\udd00-\udebf\udef9-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd00-\ude5f\ude7f-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud805[\udc00-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude7f\udeb8-\udebf\udeca-\udeff\udf1a-\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude34-\ude37\ude3b-\ude3e\ude48-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud808[\udf9a-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcc2-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd44-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3e-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf3b\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud82c[\udc02-\udfff]|\ud811[\ude47-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udd0f\udd19-\udd7f\udd85-\uddbf\uddc1-\udfff]|\ud873[\udea2-\udfff]"
            }, {
                name: "Co",
                alias: "Private_Use",
                bmp: "\ue000-\uf8ff",
                astral: "[\udb80-\udbbe\udbc0-\udbfe][\udc00-\udfff]|[\udbbf\udbff][\udc00-\udffd]"
            }, {
                name: "Cs",
                alias: "Surrogate",
                bmp: "\ud800-\udfff"
            }, {
                name: "L",
                alias: "Letter",
                bmp: "A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0-\u08b4\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16f1-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005\u3006\u3031-\u3035\u303b\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fd5\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6e5\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ad\ua7b0-\ua7b7\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab65\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
                astral: "\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2]|\ud83a[\udc00-\udcc4]|\ud801[\udc00-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf30-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud80d[\udc00-\udc2e]|\ud87e[\udc00-\ude1d]|\ud81b[\udf00-\udf44\udf50\udf93-\udf9f]|[\ud80c\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872][\udc00-\udfff]|\ud805[\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf19]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud809[\udc80-\udd43]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude33\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud808[\udc00-\udf99]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud806[\udca0-\udcdf\udcff\udec0-\udef8]|\ud811[\udc00-\ude46]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud82c[\udc00\udc01]|\ud873[\udc00-\udea1]"
            }, {
                name: "Ll",
                alias: "Lowercase_Letter",
                bmp: "a-z\xb5\xdf-\xf6\xf8-\xff\u0101\u0103\u0105\u0107\u0109\u010b\u010d\u010f\u0111\u0113\u0115\u0117\u0119\u011b\u011d\u011f\u0121\u0123\u0125\u0127\u0129\u012b\u012d\u012f\u0131\u0133\u0135\u0137\u0138\u013a\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u0149\u014b\u014d\u014f\u0151\u0153\u0155\u0157\u0159\u015b\u015d\u015f\u0161\u0163\u0165\u0167\u0169\u016b\u016d\u016f\u0171\u0173\u0175\u0177\u017a\u017c\u017e-\u0180\u0183\u0185\u0188\u018c\u018d\u0192\u0195\u0199-\u019b\u019e\u01a1\u01a3\u01a5\u01a8\u01aa\u01ab\u01ad\u01b0\u01b4\u01b6\u01b9\u01ba\u01bd-\u01bf\u01c6\u01c9\u01cc\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u01dd\u01df\u01e1\u01e3\u01e5\u01e7\u01e9\u01eb\u01ed\u01ef\u01f0\u01f3\u01f5\u01f9\u01fb\u01fd\u01ff\u0201\u0203\u0205\u0207\u0209\u020b\u020d\u020f\u0211\u0213\u0215\u0217\u0219\u021b\u021d\u021f\u0221\u0223\u0225\u0227\u0229\u022b\u022d\u022f\u0231\u0233-\u0239\u023c\u023f\u0240\u0242\u0247\u0249\u024b\u024d\u024f-\u0293\u0295-\u02af\u0371\u0373\u0377\u037b-\u037d\u0390\u03ac-\u03ce\u03d0\u03d1\u03d5-\u03d7\u03d9\u03db\u03dd\u03df\u03e1\u03e3\u03e5\u03e7\u03e9\u03eb\u03ed\u03ef-\u03f3\u03f5\u03f8\u03fb\u03fc\u0430-\u045f\u0461\u0463\u0465\u0467\u0469\u046b\u046d\u046f\u0471\u0473\u0475\u0477\u0479\u047b\u047d\u047f\u0481\u048b\u048d\u048f\u0491\u0493\u0495\u0497\u0499\u049b\u049d\u049f\u04a1\u04a3\u04a5\u04a7\u04a9\u04ab\u04ad\u04af\u04b1\u04b3\u04b5\u04b7\u04b9\u04bb\u04bd\u04bf\u04c2\u04c4\u04c6\u04c8\u04ca\u04cc\u04ce\u04cf\u04d1\u04d3\u04d5\u04d7\u04d9\u04db\u04dd\u04df\u04e1\u04e3\u04e5\u04e7\u04e9\u04eb\u04ed\u04ef\u04f1\u04f3\u04f5\u04f7\u04f9\u04fb\u04fd\u04ff\u0501\u0503\u0505\u0507\u0509\u050b\u050d\u050f\u0511\u0513\u0515\u0517\u0519\u051b\u051d\u051f\u0521\u0523\u0525\u0527\u0529\u052b\u052d\u052f\u0561-\u0587\u13f8-\u13fd\u1d00-\u1d2b\u1d6b-\u1d77\u1d79-\u1d9a\u1e01\u1e03\u1e05\u1e07\u1e09\u1e0b\u1e0d\u1e0f\u1e11\u1e13\u1e15\u1e17\u1e19\u1e1b\u1e1d\u1e1f\u1e21\u1e23\u1e25\u1e27\u1e29\u1e2b\u1e2d\u1e2f\u1e31\u1e33\u1e35\u1e37\u1e39\u1e3b\u1e3d\u1e3f\u1e41\u1e43\u1e45\u1e47\u1e49\u1e4b\u1e4d\u1e4f\u1e51\u1e53\u1e55\u1e57\u1e59\u1e5b\u1e5d\u1e5f\u1e61\u1e63\u1e65\u1e67\u1e69\u1e6b\u1e6d\u1e6f\u1e71\u1e73\u1e75\u1e77\u1e79\u1e7b\u1e7d\u1e7f\u1e81\u1e83\u1e85\u1e87\u1e89\u1e8b\u1e8d\u1e8f\u1e91\u1e93\u1e95-\u1e9d\u1e9f\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ebf\u1ec1\u1ec3\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9\u1efb\u1efd\u1eff-\u1f07\u1f10-\u1f15\u1f20-\u1f27\u1f30-\u1f37\u1f40-\u1f45\u1f50-\u1f57\u1f60-\u1f67\u1f70-\u1f7d\u1f80-\u1f87\u1f90-\u1f97\u1fa0-\u1fa7\u1fb0-\u1fb4\u1fb6\u1fb7\u1fbe\u1fc2-\u1fc4\u1fc6\u1fc7\u1fd0-\u1fd3\u1fd6\u1fd7\u1fe0-\u1fe7\u1ff2-\u1ff4\u1ff6\u1ff7\u210a\u210e\u210f\u2113\u212f\u2134\u2139\u213c\u213d\u2146-\u2149\u214e\u2184\u2c30-\u2c5e\u2c61\u2c65\u2c66\u2c68\u2c6a\u2c6c\u2c71\u2c73\u2c74\u2c76-\u2c7b\u2c81\u2c83\u2c85\u2c87\u2c89\u2c8b\u2c8d\u2c8f\u2c91\u2c93\u2c95\u2c97\u2c99\u2c9b\u2c9d\u2c9f\u2ca1\u2ca3\u2ca5\u2ca7\u2ca9\u2cab\u2cad\u2caf\u2cb1\u2cb3\u2cb5\u2cb7\u2cb9\u2cbb\u2cbd\u2cbf\u2cc1\u2cc3\u2cc5\u2cc7\u2cc9\u2ccb\u2ccd\u2ccf\u2cd1\u2cd3\u2cd5\u2cd7\u2cd9\u2cdb\u2cdd\u2cdf\u2ce1\u2ce3\u2ce4\u2cec\u2cee\u2cf3\u2d00-\u2d25\u2d27\u2d2d\ua641\ua643\ua645\ua647\ua649\ua64b\ua64d\ua64f\ua651\ua653\ua655\ua657\ua659\ua65b\ua65d\ua65f\ua661\ua663\ua665\ua667\ua669\ua66b\ua66d\ua681\ua683\ua685\ua687\ua689\ua68b\ua68d\ua68f\ua691\ua693\ua695\ua697\ua699\ua69b\ua723\ua725\ua727\ua729\ua72b\ua72d\ua72f-\ua731\ua733\ua735\ua737\ua739\ua73b\ua73d\ua73f\ua741\ua743\ua745\ua747\ua749\ua74b\ua74d\ua74f\ua751\ua753\ua755\ua757\ua759\ua75b\ua75d\ua75f\ua761\ua763\ua765\ua767\ua769\ua76b\ua76d\ua76f\ua771-\ua778\ua77a\ua77c\ua77f\ua781\ua783\ua785\ua787\ua78c\ua78e\ua791\ua793-\ua795\ua797\ua799\ua79b\ua79d\ua79f\ua7a1\ua7a3\ua7a5\ua7a7\ua7a9\ua7b5\ua7b7\ua7fa\uab30-\uab5a\uab60-\uab65\uab70-\uabbf\ufb00-\ufb06\ufb13-\ufb17\uff41-\uff5a",
                astral: "\ud803[\udcc0-\udcf2]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud801[\udc28-\udc4f]|\ud806[\udcc0-\udcdf]"
            }, {
                name: "Lm",
                alias: "Modifier_Letter",
                bmp: "\u02b0-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0374\u037a\u0559\u0640\u06e5\u06e6\u07f4\u07f5\u07fa\u081a\u0824\u0828\u0971\u0e46\u0ec6\u10fc\u17d7\u1843\u1aa7\u1c78-\u1c7d\u1d2c-\u1d6a\u1d78\u1d9b-\u1dbf\u2071\u207f\u2090-\u209c\u2c7c\u2c7d\u2d6f\u2e2f\u3005\u3031-\u3035\u303b\u309d\u309e\u30fc-\u30fe\ua015\ua4f8-\ua4fd\ua60c\ua67f\ua69c\ua69d\ua717-\ua71f\ua770\ua788\ua7f8\ua7f9\ua9cf\ua9e6\uaa70\uaadd\uaaf3\uaaf4\uab5c-\uab5f\uff70\uff9e\uff9f",
                astral: "\ud81a[\udf40-\udf43]|\ud81b[\udf93-\udf9f]"
            }, {
                name: "Lo",
                alias: "Other_Letter",
                bmp: "\xaa\xba\u01bb\u01c0-\u01c3\u0294\u05d0-\u05ea\u05f0-\u05f2\u0620-\u063f\u0641-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u0800-\u0815\u0840-\u0858\u08a0-\u08b4\u0904-\u0939\u093d\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e45\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10d0-\u10fa\u10fd-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16f1-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17dc\u1820-\u1842\u1844-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c77\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u2135-\u2138\u2d30-\u2d67\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3006\u303c\u3041-\u3096\u309f\u30a1-\u30fa\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fd5\ua000-\ua014\ua016-\ua48c\ua4d0-\ua4f7\ua500-\ua60b\ua610-\ua61f\ua62a\ua62b\ua66e\ua6a0-\ua6e5\ua78f\ua7f7\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9e0-\ua9e4\ua9e7-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa6f\uaa71-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb\uaadc\uaae0-\uaaea\uaaf2\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff66-\uff6f\uff71-\uff9d\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
                astral: "\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud83a[\udc00-\udcc4]|\ud803[\udc00-\udc48]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf30-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud80d[\udc00-\udc2e]|\ud87e[\udc00-\ude1d]|\ud81b[\udf00-\udf44\udf50]|[\ud80c\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872][\udc00-\udfff]|\ud805[\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf19]|\ud806[\udcff\udec0-\udef8]|\ud809[\udc80-\udd43]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude33\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud808[\udc00-\udf99]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf63-\udf77\udf7d-\udf8f]|\ud801[\udc50-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud811[\udc00-\ude46]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud82c[\udc00\udc01]|\ud873[\udc00-\udea1]"
            }, {
                name: "Lt",
                alias: "Titlecase_Letter",
                bmp: "\u01c5\u01c8\u01cb\u01f2\u1f88-\u1f8f\u1f98-\u1f9f\u1fa8-\u1faf\u1fbc\u1fcc\u1ffc"
            }, {
                name: "Lu",
                alias: "Uppercase_Letter",
                bmp: "A-Z\xc0-\xd6\xd8-\xde\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a\u012c\u012e\u0130\u0132\u0134\u0136\u0139\u013b\u013d\u013f\u0141\u0143\u0145\u0147\u014a\u014c\u014e\u0150\u0152\u0154\u0156\u0158\u015a\u015c\u015e\u0160\u0162\u0164\u0166\u0168\u016a\u016c\u016e\u0170\u0172\u0174\u0176\u0178\u0179\u017b\u017d\u0181\u0182\u0184\u0186\u0187\u0189-\u018b\u018e-\u0191\u0193\u0194\u0196-\u0198\u019c\u019d\u019f\u01a0\u01a2\u01a4\u01a6\u01a7\u01a9\u01ac\u01ae\u01af\u01b1-\u01b3\u01b5\u01b7\u01b8\u01bc\u01c4\u01c7\u01ca\u01cd\u01cf\u01d1\u01d3\u01d5\u01d7\u01d9\u01db\u01de\u01e0\u01e2\u01e4\u01e6\u01e8\u01ea\u01ec\u01ee\u01f1\u01f4\u01f6-\u01f8\u01fa\u01fc\u01fe\u0200\u0202\u0204\u0206\u0208\u020a\u020c\u020e\u0210\u0212\u0214\u0216\u0218\u021a\u021c\u021e\u0220\u0222\u0224\u0226\u0228\u022a\u022c\u022e\u0230\u0232\u023a\u023b\u023d\u023e\u0241\u0243-\u0246\u0248\u024a\u024c\u024e\u0370\u0372\u0376\u037f\u0386\u0388-\u038a\u038c\u038e\u038f\u0391-\u03a1\u03a3-\u03ab\u03cf\u03d2-\u03d4\u03d8\u03da\u03dc\u03de\u03e0\u03e2\u03e4\u03e6\u03e8\u03ea\u03ec\u03ee\u03f4\u03f7\u03f9\u03fa\u03fd-\u042f\u0460\u0462\u0464\u0466\u0468\u046a\u046c\u046e\u0470\u0472\u0474\u0476\u0478\u047a\u047c\u047e\u0480\u048a\u048c\u048e\u0490\u0492\u0494\u0496\u0498\u049a\u049c\u049e\u04a0\u04a2\u04a4\u04a6\u04a8\u04aa\u04ac\u04ae\u04b0\u04b2\u04b4\u04b6\u04b8\u04ba\u04bc\u04be\u04c0\u04c1\u04c3\u04c5\u04c7\u04c9\u04cb\u04cd\u04d0\u04d2\u04d4\u04d6\u04d8\u04da\u04dc\u04de\u04e0\u04e2\u04e4\u04e6\u04e8\u04ea\u04ec\u04ee\u04f0\u04f2\u04f4\u04f6\u04f8\u04fa\u04fc\u04fe\u0500\u0502\u0504\u0506\u0508\u050a\u050c\u050e\u0510\u0512\u0514\u0516\u0518\u051a\u051c\u051e\u0520\u0522\u0524\u0526\u0528\u052a\u052c\u052e\u0531-\u0556\u10a0-\u10c5\u10c7\u10cd\u13a0-\u13f5\u1e00\u1e02\u1e04\u1e06\u1e08\u1e0a\u1e0c\u1e0e\u1e10\u1e12\u1e14\u1e16\u1e18\u1e1a\u1e1c\u1e1e\u1e20\u1e22\u1e24\u1e26\u1e28\u1e2a\u1e2c\u1e2e\u1e30\u1e32\u1e34\u1e36\u1e38\u1e3a\u1e3c\u1e3e\u1e40\u1e42\u1e44\u1e46\u1e48\u1e4a\u1e4c\u1e4e\u1e50\u1e52\u1e54\u1e56\u1e58\u1e5a\u1e5c\u1e5e\u1e60\u1e62\u1e64\u1e66\u1e68\u1e6a\u1e6c\u1e6e\u1e70\u1e72\u1e74\u1e76\u1e78\u1e7a\u1e7c\u1e7e\u1e80\u1e82\u1e84\u1e86\u1e88\u1e8a\u1e8c\u1e8e\u1e90\u1e92\u1e94\u1e9e\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ebe\u1ec0\u1ec2\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1eec\u1eee\u1ef0\u1ef2\u1ef4\u1ef6\u1ef8\u1efa\u1efc\u1efe\u1f08-\u1f0f\u1f18-\u1f1d\u1f28-\u1f2f\u1f38-\u1f3f\u1f48-\u1f4d\u1f59\u1f5b\u1f5d\u1f5f\u1f68-\u1f6f\u1fb8-\u1fbb\u1fc8-\u1fcb\u1fd8-\u1fdb\u1fe8-\u1fec\u1ff8-\u1ffb\u2102\u2107\u210b-\u210d\u2110-\u2112\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u2130-\u2133\u213e\u213f\u2145\u2183\u2c00-\u2c2e\u2c60\u2c62-\u2c64\u2c67\u2c69\u2c6b\u2c6d-\u2c70\u2c72\u2c75\u2c7e-\u2c80\u2c82\u2c84\u2c86\u2c88\u2c8a\u2c8c\u2c8e\u2c90\u2c92\u2c94\u2c96\u2c98\u2c9a\u2c9c\u2c9e\u2ca0\u2ca2\u2ca4\u2ca6\u2ca8\u2caa\u2cac\u2cae\u2cb0\u2cb2\u2cb4\u2cb6\u2cb8\u2cba\u2cbc\u2cbe\u2cc0\u2cc2\u2cc4\u2cc6\u2cc8\u2cca\u2ccc\u2cce\u2cd0\u2cd2\u2cd4\u2cd6\u2cd8\u2cda\u2cdc\u2cde\u2ce0\u2ce2\u2ceb\u2ced\u2cf2\ua640\ua642\ua644\ua646\ua648\ua64a\ua64c\ua64e\ua650\ua652\ua654\ua656\ua658\ua65a\ua65c\ua65e\ua660\ua662\ua664\ua666\ua668\ua66a\ua66c\ua680\ua682\ua684\ua686\ua688\ua68a\ua68c\ua68e\ua690\ua692\ua694\ua696\ua698\ua69a\ua722\ua724\ua726\ua728\ua72a\ua72c\ua72e\ua732\ua734\ua736\ua738\ua73a\ua73c\ua73e\ua740\ua742\ua744\ua746\ua748\ua74a\ua74c\ua74e\ua750\ua752\ua754\ua756\ua758\ua75a\ua75c\ua75e\ua760\ua762\ua764\ua766\ua768\ua76a\ua76c\ua76e\ua779\ua77b\ua77d\ua77e\ua780\ua782\ua784\ua786\ua78b\ua78d\ua790\ua792\ua796\ua798\ua79a\ua79c\ua79e\ua7a0\ua7a2\ua7a4\ua7a6\ua7a8\ua7aa-\ua7ad\ua7b0-\ua7b4\ua7b6\uff21-\uff3a",
                astral: "\ud806[\udca0-\udcbf]|\ud803[\udc80-\udcb2]|\ud801[\udc00-\udc27]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]"
            }, {
                name: "M",
                alias: "Mark",
                bmp: "\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0c00-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d01-\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f\u109a-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u192b\u1930-\u193b\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f\u1ab0-\u1abe\u1b00-\u1b04\u1b34-\u1b44\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1be6-\u1bf3\u1c24-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1cf8\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u20d0-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9e5\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f",
                astral: "\ud805[\udcb0-\udcc3\uddaf-\uddb5\uddb8-\uddc0\udddc\udddd\ude30-\ude40\udeab-\udeb7\udf1d-\udf2b]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud804[\udc00-\udc02\udc38-\udc46\udc7f-\udc82\udcb0-\udcba\udd00-\udd02\udd27-\udd34\udd73\udd80-\udd82\uddb3-\uddc0\uddca-\uddcc\ude2c-\ude37\udedf-\udeea\udf00-\udf03\udf3c\udf3e-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63\udf66-\udf6c\udf70-\udf74]|\ud81b[\udf51-\udf7e\udf8f-\udf92]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud82f[\udc9d\udc9e]|\ud800[\uddfd\udee0\udf76-\udf7a]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud83a[\udcd0-\udcd6]|\udb40[\udd00-\uddef]"
            }, {
                name: "Mc",
                alias: "Spacing_Mark",
                bmp: "\u0903\u093b\u093e-\u0940\u0949-\u094c\u094e\u094f\u0982\u0983\u09be-\u09c0\u09c7\u09c8\u09cb\u09cc\u09d7\u0a03\u0a3e-\u0a40\u0a83\u0abe-\u0ac0\u0ac9\u0acb\u0acc\u0b02\u0b03\u0b3e\u0b40\u0b47\u0b48\u0b4b\u0b4c\u0b57\u0bbe\u0bbf\u0bc1\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd7\u0c01-\u0c03\u0c41-\u0c44\u0c82\u0c83\u0cbe\u0cc0-\u0cc4\u0cc7\u0cc8\u0cca\u0ccb\u0cd5\u0cd6\u0d02\u0d03\u0d3e-\u0d40\u0d46-\u0d48\u0d4a-\u0d4c\u0d57\u0d82\u0d83\u0dcf-\u0dd1\u0dd8-\u0ddf\u0df2\u0df3\u0f3e\u0f3f\u0f7f\u102b\u102c\u1031\u1038\u103b\u103c\u1056\u1057\u1062-\u1064\u1067-\u106d\u1083\u1084\u1087-\u108c\u108f\u109a-\u109c\u17b6\u17be-\u17c5\u17c7\u17c8\u1923-\u1926\u1929-\u192b\u1930\u1931\u1933-\u1938\u1a19\u1a1a\u1a55\u1a57\u1a61\u1a63\u1a64\u1a6d-\u1a72\u1b04\u1b35\u1b3b\u1b3d-\u1b41\u1b43\u1b44\u1b82\u1ba1\u1ba6\u1ba7\u1baa\u1be7\u1bea-\u1bec\u1bee\u1bf2\u1bf3\u1c24-\u1c2b\u1c34\u1c35\u1ce1\u1cf2\u1cf3\u302e\u302f\ua823\ua824\ua827\ua880\ua881\ua8b4-\ua8c3\ua952\ua953\ua983\ua9b4\ua9b5\ua9ba\ua9bb\ua9bd-\ua9c0\uaa2f\uaa30\uaa33\uaa34\uaa4d\uaa7b\uaa7d\uaaeb\uaaee\uaaef\uaaf5\uabe3\uabe4\uabe6\uabe7\uabe9\uabea\uabec",
                astral: "\ud834[\udd65\udd66\udd6d-\udd72]|\ud804[\udc00\udc02\udc82\udcb0-\udcb2\udcb7\udcb8\udd2c\udd82\uddb3-\uddb5\uddbf\uddc0\ude2c-\ude2e\ude32\ude33\ude35\udee0-\udee2\udf02\udf03\udf3e\udf3f\udf41-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63]|\ud805[\udcb0-\udcb2\udcb9\udcbb-\udcbe\udcc1\uddaf-\uddb1\uddb8-\uddbb\uddbe\ude30-\ude32\ude3b\ude3c\ude3e\udeac\udeae\udeaf\udeb6\udf20\udf21\udf26]|\ud81b[\udf51-\udf7e]"
            }, {
                name: "Me",
                alias: "Enclosing_Mark",
                bmp: "\u0488\u0489\u1abe\u20dd-\u20e0\u20e2-\u20e4\ua670-\ua672"
            }, {
                name: "Mn",
                alias: "Nonspacing_Mark",
                bmp: "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962\u0963\u0981\u09bc\u09c1-\u09c4\u09cd\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b62\u0b63\u0b82\u0bc0\u0bcd\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c81\u0cbc\u0cbf\u0cc6\u0ccc\u0ccd\u0ce2\u0ce3\u0d01\u0d41-\u0d44\u0d4d\u0d62\u0d63\u0dca\u0dd2-\u0dd4\u0dd6\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1bab-\u1bad\u1be6\u1be8\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u3099\u309a\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaec\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f",
                astral: "\ud805[\udcb3-\udcb8\udcba\udcbf\udcc0\udcc2\udcc3\uddb2-\uddb5\uddbc\uddbd\uddbf\uddc0\udddc\udddd\ude33-\ude3a\ude3d\ude3f\ude40\udeab\udead\udeb0-\udeb5\udeb7\udf1d-\udf1f\udf22-\udf25\udf27-\udf2b]|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud800[\uddfd\udee0\udf76-\udf7a]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud804[\udc01\udc38-\udc46\udc7f-\udc81\udcb3-\udcb6\udcb9\udcba\udd00-\udd02\udd27-\udd2b\udd2d-\udd34\udd73\udd80\udd81\uddb6-\uddbe\uddca-\uddcc\ude2f-\ude31\ude34\ude36\ude37\udedf\udee3-\udeea\udf00\udf01\udf3c\udf40\udf66-\udf6c\udf70-\udf74]|\ud83a[\udcd0-\udcd6]|\udb40[\udd00-\uddef]"
            }, {
                name: "N",
                alias: "Number",
                bmp: "0-9\xb2\xb3\xb9\xbc-\xbe\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u09f4-\u09f9\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0b72-\u0b77\u0be6-\u0bf2\u0c66-\u0c6f\u0c78-\u0c7e\u0ce6-\u0cef\u0d66-\u0d75\u0de6-\u0def\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f33\u1040-\u1049\u1090-\u1099\u1369-\u137c\u16ee-\u16f0\u17e0-\u17e9\u17f0-\u17f9\u1810-\u1819\u1946-\u194f\u19d0-\u19da\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249b\u24ea-\u24ff\u2776-\u2793\u2cfd\u3007\u3021-\u3029\u3038-\u303a\u3192-\u3195\u3220-\u3229\u3248-\u324f\u3251-\u325f\u3280-\u3289\u32b1-\u32bf\ua620-\ua629\ua6e6-\ua6ef\ua830-\ua835\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\ua9f0-\ua9f9\uaa50-\uaa59\uabf0-\uabf9\uff10-\uff19",
                astral: "\ud800[\udd07-\udd33\udd40-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23\udf41\udf4a\udfd1-\udfd5]|\ud801[\udca0-\udca9]|\ud803[\udcfa-\udcff\ude60-\ude7e]|\ud835[\udfce-\udfff]|\ud83a[\udcc7-\udccf]|\ud81a[\ude60-\ude69\udf50-\udf59\udf5b-\udf61]|\ud806[\udce0-\udcf2]|\ud804[\udc52-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udde1-\uddf4\udef0-\udef9]|\ud834[\udf60-\udf71]|\ud83c[\udd00-\udd0c]|\ud809[\udc00-\udc6e]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude47\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud805[\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf3b]"
            }, {
                name: "Nd",
                alias: "Decimal_Number",
                bmp: "0-9\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\u0de6-\u0def\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29\u1040-\u1049\u1090-\u1099\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\ua620-\ua629\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\ua9f0-\ua9f9\uaa50-\uaa59\uabf0-\uabf9\uff10-\uff19",
                astral: "\ud801[\udca0-\udca9]|\ud835[\udfce-\udfff]|\ud805[\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf39]|\ud806[\udce0-\udce9]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud81a[\ude60-\ude69\udf50-\udf59]"
            }, {
                name: "Nl",
                alias: "Letter_Number",
                bmp: "\u16ee-\u16f0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303a\ua6e6-\ua6ef",
                astral: "\ud809[\udc00-\udc6e]|\ud800[\udd40-\udd74\udf41\udf4a\udfd1-\udfd5]"
            }, {
                name: "No",
                alias: "Other_Number",
                bmp: "\xb2\xb3\xb9\xbc-\xbe\u09f4-\u09f9\u0b72-\u0b77\u0bf0-\u0bf2\u0c78-\u0c7e\u0d70-\u0d75\u0f2a-\u0f33\u1369-\u137c\u17f0-\u17f9\u19da\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215f\u2189\u2460-\u249b\u24ea-\u24ff\u2776-\u2793\u2cfd\u3192-\u3195\u3220-\u3229\u3248-\u324f\u3251-\u325f\u3280-\u3289\u32b1-\u32bf\ua830-\ua835",
                astral: "\ud804[\udc52-\udc65\udde1-\uddf4]|\ud803[\udcfa-\udcff\ude60-\ude7e]|\ud83c[\udd00-\udd0c]|\ud806[\udcea-\udcf2]|\ud83a[\udcc7-\udccf]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude47\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud805[\udf3a\udf3b]|\ud81a[\udf5b-\udf61]|\ud834[\udf60-\udf71]|\ud800[\udd07-\udd33\udd75-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23]"
            }, {
                name: "P",
                alias: "Punctuation",
                bmp: "!-#%-\\x2A,-/:;\\x3F@\\x5B-\\x5D_\\x7B}\xa1\xa7\xab\xb6\xb7\xbb\xbf\u037e\u0387\u055a-\u055f\u0589\u058a\u05be\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u0af0\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f14\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1360-\u1368\u1400\u166d\u166e\u169b\u169c\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cc0-\u1cc7\u1cd3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205e\u207d\u207e\u208d\u208e\u2308-\u230b\u2329\u232a\u2768-\u2775\u27c5\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc\u29fd\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00-\u2e2e\u2e30-\u2e42\u3001-\u3003\u3008-\u3011\u3014-\u301f\u3030\u303d\u30a0\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua8fc\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uaaf0\uaaf1\uabeb\ufd3e\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a\uff1b\uff1f\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65",
                astral: "\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud809[\udc70-\udc74]|\ud805[\udcc6\uddc1-\uddd7\ude41-\ude43\udf3c-\udf3e]|\ud836[\ude87-\ude8b]|\ud801\udd6f|\ud82f\udc9f|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc9\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud800[\udd00-\udd02\udf9f\udfd0]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]"
            }, {
                name: "Pc",
                alias: "Connector_Punctuation",
                bmp: "_\u203f\u2040\u2054\ufe33\ufe34\ufe4d-\ufe4f\uff3f"
            }, {
                name: "Pd",
                alias: "Dash_Punctuation",
                bmp: "\\x2D\u058a\u05be\u1400\u1806\u2010-\u2015\u2e17\u2e1a\u2e3a\u2e3b\u2e40\u301c\u3030\u30a0\ufe31\ufe32\ufe58\ufe63\uff0d"
            }, {
                name: "Pe",
                alias: "Close_Punctuation",
                bmp: "\\x29\\x5D}\u0f3b\u0f3d\u169c\u2046\u207e\u208e\u2309\u230b\u232a\u2769\u276b\u276d\u276f\u2771\u2773\u2775\u27c6\u27e7\u27e9\u27eb\u27ed\u27ef\u2984\u2986\u2988\u298a\u298c\u298e\u2990\u2992\u2994\u2996\u2998\u29d9\u29db\u29fd\u2e23\u2e25\u2e27\u2e29\u3009\u300b\u300d\u300f\u3011\u3015\u3017\u3019\u301b\u301e\u301f\ufd3e\ufe18\ufe36\ufe38\ufe3a\ufe3c\ufe3e\ufe40\ufe42\ufe44\ufe48\ufe5a\ufe5c\ufe5e\uff09\uff3d\uff5d\uff60\uff63"
            }, {
                name: "Pf",
                alias: "Final_Punctuation",
                bmp: "\xbb\u2019\u201d\u203a\u2e03\u2e05\u2e0a\u2e0d\u2e1d\u2e21"
            }, {
                name: "Pi",
                alias: "Initial_Punctuation",
                bmp: "\xab\u2018\u201b\u201c\u201f\u2039\u2e02\u2e04\u2e09\u2e0c\u2e1c\u2e20"
            }, {
                name: "Po",
                alias: "Other_Punctuation",
                bmp: "!-#%-'\\x2A,\\x2E/:;\\x3F@\\x5C\xa1\xa7\xb6\xb7\xbf\u037e\u0387\u055a-\u055f\u0589\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u0af0\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f14\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1360-\u1368\u166d\u166e\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u1805\u1807-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cc0-\u1cc7\u1cd3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203b-\u203e\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205e\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00\u2e01\u2e06-\u2e08\u2e0b\u2e0e-\u2e16\u2e18\u2e19\u2e1b\u2e1e\u2e1f\u2e2a-\u2e2e\u2e30-\u2e39\u2e3c-\u2e3f\u2e41\u3001-\u3003\u303d\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua8fc\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uaaf0\uaaf1\uabeb\ufe10-\ufe16\ufe19\ufe30\ufe45\ufe46\ufe49-\ufe4c\ufe50-\ufe52\ufe54-\ufe57\ufe5f-\ufe61\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff07\uff0a\uff0c\uff0e\uff0f\uff1a\uff1b\uff1f\uff20\uff3c\uff61\uff64\uff65",
                astral: "\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud809[\udc70-\udc74]|\ud805[\udcc6\uddc1-\uddd7\ude41-\ude43\udf3c-\udf3e]|\ud836[\ude87-\ude8b]|\ud801\udd6f|\ud82f\udc9f|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc9\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud800[\udd00-\udd02\udf9f\udfd0]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]"
            }, {
                name: "Ps",
                alias: "Open_Punctuation",
                bmp: "\\x28\\x5B\\x7B\u0f3a\u0f3c\u169b\u201a\u201e\u2045\u207d\u208d\u2308\u230a\u2329\u2768\u276a\u276c\u276e\u2770\u2772\u2774\u27c5\u27e6\u27e8\u27ea\u27ec\u27ee\u2983\u2985\u2987\u2989\u298b\u298d\u298f\u2991\u2993\u2995\u2997\u29d8\u29da\u29fc\u2e22\u2e24\u2e26\u2e28\u2e42\u3008\u300a\u300c\u300e\u3010\u3014\u3016\u3018\u301a\u301d\ufd3f\ufe17\ufe35\ufe37\ufe39\ufe3b\ufe3d\ufe3f\ufe41\ufe43\ufe47\ufe59\ufe5b\ufe5d\uff08\uff3b\uff5b\uff5f\uff62"
            }, {
                name: "S",
                alias: "Symbol",
                bmp: "\\x24\\x2B<->\\x5E`\\x7C~\xa2-\xa6\xa8\xa9\xac\xae-\xb1\xb4\xb8\xd7\xf7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u03f6\u0482\u058d-\u058f\u0606-\u0608\u060b\u060e\u060f\u06de\u06e9\u06fd\u06fe\u07f6\u09f2\u09f3\u09fa\u09fb\u0af1\u0b70\u0bf3-\u0bfa\u0c7f\u0d79\u0e3f\u0f01-\u0f03\u0f13\u0f15-\u0f17\u0f1a-\u0f1f\u0f34\u0f36\u0f38\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce\u0fcf\u0fd5-\u0fd8\u109e\u109f\u1390-\u1399\u17db\u1940\u19de-\u19ff\u1b61-\u1b6a\u1b74-\u1b7c\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u2044\u2052\u207a-\u207c\u208a-\u208c\u20a0-\u20be\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211e-\u2123\u2125\u2127\u2129\u212e\u213a\u213b\u2140-\u2144\u214a-\u214d\u214f\u218a\u218b\u2190-\u2307\u230c-\u2328\u232b-\u23fa\u2400-\u2426\u2440-\u244a\u249c-\u24e9\u2500-\u2767\u2794-\u27c4\u27c7-\u27e5\u27f0-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2b73\u2b76-\u2b95\u2b98-\u2bb9\u2bbd-\u2bc8\u2bca-\u2bd1\u2bec-\u2bef\u2ce5-\u2cea\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3004\u3012\u3013\u3020\u3036\u3037\u303e\u303f\u309b\u309c\u3190\u3191\u3196-\u319f\u31c0-\u31e3\u3200-\u321e\u322a-\u3247\u3250\u3260-\u327f\u328a-\u32b0\u32c0-\u32fe\u3300-\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua700-\ua716\ua720\ua721\ua789\ua78a\ua828-\ua82b\ua836-\ua839\uaa77-\uaa79\uab5b\ufb29\ufbb2-\ufbc1\ufdfc\ufdfd\ufe62\ufe64-\ufe66\ufe69\uff04\uff0b\uff1c-\uff1e\uff3e\uff40\uff5c\uff5e\uffe0-\uffe6\uffe8-\uffee\ufffc\ufffd",
                astral: "\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd10-\udd18\udd80-\udd84\uddc0]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd2e\udd30-\udd6b\udd70-\udd9a\udde6-\ude02\ude10-\ude3a\ude40-\ude48\ude50\ude51\udf00-\udfff]|\ud83d[\udc00-\udd79\udd7b-\udda3\udda5-\uded0\udee0-\udeec\udef0-\udef3\udf00-\udf73\udf80-\udfd4]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud800[\udd37-\udd3f\udd79-\udd89\udd8c\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud82f\udc9c|\ud805\udf3f|\ud802[\udc77\udc78\udec8]|\ud81a[\udf3c-\udf3f\udf45]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud83b[\udef0\udef1]"
            }, {
                name: "Sc",
                alias: "Currency_Symbol",
                bmp: "\\x24\xa2-\xa5\u058f\u060b\u09f2\u09f3\u09fb\u0af1\u0bf9\u0e3f\u17db\u20a0-\u20be\ua838\ufdfc\ufe69\uff04\uffe0\uffe1\uffe5\uffe6"
            }, {
                name: "Sk",
                alias: "Modifier_Symbol",
                bmp: "\\x5E`\xa8\xaf\xb4\xb8\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u309b\u309c\ua700-\ua716\ua720\ua721\ua789\ua78a\uab5b\ufbb2-\ufbc1\uff3e\uff40\uffe3",
                astral: "\ud83c[\udffb-\udfff]"
            }, {
                name: "Sm",
                alias: "Math_Symbol",
                bmp: "\\x2B<->\\x7C~\xac\xb1\xd7\xf7\u03f6\u0606-\u0608\u2044\u2052\u207a-\u207c\u208a-\u208c\u2118\u2140-\u2144\u214b\u2190-\u2194\u219a\u219b\u21a0\u21a3\u21a6\u21ae\u21ce\u21cf\u21d2\u21d4\u21f4-\u22ff\u2320\u2321\u237c\u239b-\u23b3\u23dc-\u23e1\u25b7\u25c1\u25f8-\u25ff\u266f\u27c0-\u27c4\u27c7-\u27e5\u27f0-\u27ff\u2900-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2aff\u2b30-\u2b44\u2b47-\u2b4c\ufb29\ufe62\ufe64-\ufe66\uff0b\uff1c-\uff1e\uff5c\uff5e\uffe2\uffe9-\uffec",
                astral: "\ud83b[\udef0\udef1]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]"
            }, {
                name: "So",
                alias: "Other_Symbol",
                bmp: "\xa6\xa9\xae\xb0\u0482\u058d\u058e\u060e\u060f\u06de\u06e9\u06fd\u06fe\u07f6\u09fa\u0b70\u0bf3-\u0bf8\u0bfa\u0c7f\u0d79\u0f01-\u0f03\u0f13\u0f15-\u0f17\u0f1a-\u0f1f\u0f34\u0f36\u0f38\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce\u0fcf\u0fd5-\u0fd8\u109e\u109f\u1390-\u1399\u1940\u19de-\u19ff\u1b61-\u1b6a\u1b74-\u1b7c\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211e-\u2123\u2125\u2127\u2129\u212e\u213a\u213b\u214a\u214c\u214d\u214f\u218a\u218b\u2195-\u2199\u219c-\u219f\u21a1\u21a2\u21a4\u21a5\u21a7-\u21ad\u21af-\u21cd\u21d0\u21d1\u21d3\u21d5-\u21f3\u2300-\u2307\u230c-\u231f\u2322-\u2328\u232b-\u237b\u237d-\u239a\u23b4-\u23db\u23e2-\u23fa\u2400-\u2426\u2440-\u244a\u249c-\u24e9\u2500-\u25b6\u25b8-\u25c0\u25c2-\u25f7\u2600-\u266e\u2670-\u2767\u2794-\u27bf\u2800-\u28ff\u2b00-\u2b2f\u2b45\u2b46\u2b4d-\u2b73\u2b76-\u2b95\u2b98-\u2bb9\u2bbd-\u2bc8\u2bca-\u2bd1\u2bec-\u2bef\u2ce5-\u2cea\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3004\u3012\u3013\u3020\u3036\u3037\u303e\u303f\u3190\u3191\u3196-\u319f\u31c0-\u31e3\u3200-\u321e\u322a-\u3247\u3250\u3260-\u327f\u328a-\u32b0\u32c0-\u32fe\u3300-\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua828-\ua82b\ua836\ua837\ua839\uaa77-\uaa79\ufdfd\uffe4\uffe8\uffed\uffee\ufffc\ufffd",
                astral: "\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd10-\udd18\udd80-\udd84\uddc0]|\ud83d[\udc00-\udd79\udd7b-\udda3\udda5-\uded0\udee0-\udeec\udef0-\udef3\udf00-\udf73\udf80-\udfd4]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd2e\udd30-\udd6b\udd70-\udd9a\udde6-\ude02\ude10-\ude3a\ude40-\ude48\ude50\ude51\udf00-\udffa]|\ud800[\udd37-\udd3f\udd79-\udd89\udd8c\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud82f\udc9c|\ud805\udf3f|\ud802[\udc77\udc78\udec8]|\ud81a[\udf3c-\udf3f\udf45]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]"
            }, {
                name: "Z",
                alias: "Separator",
                bmp: " \xa0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000"
            }, {
                name: "Zl",
                alias: "Line_Separator",
                bmp: "\u2028"
            }, {
                name: "Zp",
                alias: "Paragraph_Separator",
                bmp: "\u2029"
            }, {
                name: "Zs",
                alias: "Space_Separator",
                bmp: " \xa0\u1680\u2000-\u200a\u202f\u205f\u3000"
            }])
        }(a),
        function(a) {
            "use strict";
            if (!a.addUnicodeData) throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
            var b = [{
                name: "ASCII",
                bmp: "\x00-"
            }, {
                name: "Alphabetic",
                bmp: "A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0345\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u05b0-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0657\u0659-\u065f\u066e-\u06d3\u06d5-\u06dc\u06e1-\u06e8\u06ed-\u06ef\u06fa-\u06fc\u06ff\u0710-\u073f\u074d-\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0817\u081a-\u082c\u0840-\u0858\u08a0-\u08b4\u08e3-\u08e9\u08f0-\u093b\u093d-\u094c\u094e-\u0950\u0955-\u0963\u0971-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd-\u09c4\u09c7\u09c8\u09cb\u09cc\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09f0\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3e-\u0a42\u0a47\u0a48\u0a4b\u0a4c\u0a51\u0a59-\u0a5c\u0a5e\u0a70-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd-\u0ac5\u0ac7-\u0ac9\u0acb\u0acc\u0ad0\u0ae0-\u0ae3\u0af9\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d-\u0b44\u0b47\u0b48\u0b4b\u0b4c\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd0\u0bd7\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4c\u0c55\u0c56\u0c58-\u0c5a\u0c60-\u0c63\u0c81-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccc\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0cf1\u0cf2\u0d01-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4c\u0d4e\u0d57\u0d5f-\u0d63\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e46\u0e4d\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ecd\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f71-\u0f81\u0f88-\u0f97\u0f99-\u0fbc\u1000-\u1036\u1038\u103b-\u103f\u1050-\u1062\u1065-\u1068\u106e-\u1086\u108e\u109c\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135f\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17b3\u17b6-\u17c8\u17d7\u17dc\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u1938\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a1b\u1a20-\u1a5e\u1a61-\u1a74\u1aa7\u1b00-\u1b33\u1b35-\u1b43\u1b45-\u1b4b\u1b80-\u1ba9\u1bac-\u1baf\u1bba-\u1be5\u1be7-\u1bf1\u1c00-\u1c35\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1d00-\u1dbf\u1de7-\u1df4\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u24b6-\u24e9\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fd5\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua674-\ua67b\ua67f-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ad\ua7b0-\ua7b7\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua827\ua840-\ua873\ua880-\ua8c3\ua8f2-\ua8f7\ua8fb\ua8fd\ua90a-\ua92a\ua930-\ua952\ua960-\ua97c\ua980-\ua9b2\ua9b4-\ua9bf\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa60-\uaa76\uaa7a\uaa7e-\uaabe\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf5\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab65\uab70-\uabea\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
                astral: "\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud804[\udc00-\udc45\udc82-\udcb8\udcd0-\udce8\udd00-\udd32\udd50-\udd72\udd76\udd80-\uddbf\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude34\ude37\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udee8\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d-\udf44\udf47\udf48\udf4b\udf4c\udf50\udf57\udf5d-\udf63]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2]|\ud83a[\udc00-\udcc4]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf36\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud801[\udc00-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]|\ud80d[\udc00-\udc2e]|\ud87e[\udc00-\ude1d]|[\ud80c\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872][\udc00-\udfff]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9e]|\ud808[\udc00-\udf99]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud805[\udc80-\udcc1\udcc4\udcc5\udcc7\udd80-\uddb5\uddb8-\uddbe\uddd8-\udddd\ude00-\ude3e\ude40\ude44\ude80-\udeb5\udf00-\udf19\udf1d-\udf2a]|\ud809[\udc00-\udc6e\udc80-\udd43]|\ud806[\udca0-\udcdf\udcff\udec0-\udef8]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf30-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude33\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud811[\udc00-\ude46]|\ud82c[\udc00\udc01]|\ud81b[\udf00-\udf44\udf50-\udf7e\udf93-\udf9f]|\ud873[\udc00-\udea1]"
            }, {
                name: "Any",
                isBmpLast: !0,
                bmp: "\x00-\uffff",
                astral: "[\ud800-\udbff][\udc00-\udfff]"
            }, {
                name: "Default_Ignorable_Code_Point",
                bmp: "\xad\u034f\u061c\u115f\u1160\u17b4\u17b5\u180b-\u180e\u200b-\u200f\u202a-\u202e\u2060-\u206f\u3164\ufe00-\ufe0f\ufeff\uffa0\ufff0-\ufff8",
                astral: "[\udb40-\udb43][\udc00-\udfff]|\ud834[\udd73-\udd7a]|\ud82f[\udca0-\udca3]"
            }, {
                name: "Lowercase",
                bmp: "a-z\xaa\xb5\xba\xdf-\xf6\xf8-\xff\u0101\u0103\u0105\u0107\u0109\u010b\u010d\u010f\u0111\u0113\u0115\u0117\u0119\u011b\u011d\u011f\u0121\u0123\u0125\u0127\u0129\u012b\u012d\u012f\u0131\u0133\u0135\u0137\u0138\u013a\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u0149\u014b\u014d\u014f\u0151\u0153\u0155\u0157\u0159\u015b\u015d\u015f\u0161\u0163\u0165\u0167\u0169\u016b\u016d\u016f\u0171\u0173\u0175\u0177\u017a\u017c\u017e-\u0180\u0183\u0185\u0188\u018c\u018d\u0192\u0195\u0199-\u019b\u019e\u01a1\u01a3\u01a5\u01a8\u01aa\u01ab\u01ad\u01b0\u01b4\u01b6\u01b9\u01ba\u01bd-\u01bf\u01c6\u01c9\u01cc\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u01dd\u01df\u01e1\u01e3\u01e5\u01e7\u01e9\u01eb\u01ed\u01ef\u01f0\u01f3\u01f5\u01f9\u01fb\u01fd\u01ff\u0201\u0203\u0205\u0207\u0209\u020b\u020d\u020f\u0211\u0213\u0215\u0217\u0219\u021b\u021d\u021f\u0221\u0223\u0225\u0227\u0229\u022b\u022d\u022f\u0231\u0233-\u0239\u023c\u023f\u0240\u0242\u0247\u0249\u024b\u024d\u024f-\u0293\u0295-\u02b8\u02c0\u02c1\u02e0-\u02e4\u0345\u0371\u0373\u0377\u037a-\u037d\u0390\u03ac-\u03ce\u03d0\u03d1\u03d5-\u03d7\u03d9\u03db\u03dd\u03df\u03e1\u03e3\u03e5\u03e7\u03e9\u03eb\u03ed\u03ef-\u03f3\u03f5\u03f8\u03fb\u03fc\u0430-\u045f\u0461\u0463\u0465\u0467\u0469\u046b\u046d\u046f\u0471\u0473\u0475\u0477\u0479\u047b\u047d\u047f\u0481\u048b\u048d\u048f\u0491\u0493\u0495\u0497\u0499\u049b\u049d\u049f\u04a1\u04a3\u04a5\u04a7\u04a9\u04ab\u04ad\u04af\u04b1\u04b3\u04b5\u04b7\u04b9\u04bb\u04bd\u04bf\u04c2\u04c4\u04c6\u04c8\u04ca\u04cc\u04ce\u04cf\u04d1\u04d3\u04d5\u04d7\u04d9\u04db\u04dd\u04df\u04e1\u04e3\u04e5\u04e7\u04e9\u04eb\u04ed\u04ef\u04f1\u04f3\u04f5\u04f7\u04f9\u04fb\u04fd\u04ff\u0501\u0503\u0505\u0507\u0509\u050b\u050d\u050f\u0511\u0513\u0515\u0517\u0519\u051b\u051d\u051f\u0521\u0523\u0525\u0527\u0529\u052b\u052d\u052f\u0561-\u0587\u13f8-\u13fd\u1d00-\u1dbf\u1e01\u1e03\u1e05\u1e07\u1e09\u1e0b\u1e0d\u1e0f\u1e11\u1e13\u1e15\u1e17\u1e19\u1e1b\u1e1d\u1e1f\u1e21\u1e23\u1e25\u1e27\u1e29\u1e2b\u1e2d\u1e2f\u1e31\u1e33\u1e35\u1e37\u1e39\u1e3b\u1e3d\u1e3f\u1e41\u1e43\u1e45\u1e47\u1e49\u1e4b\u1e4d\u1e4f\u1e51\u1e53\u1e55\u1e57\u1e59\u1e5b\u1e5d\u1e5f\u1e61\u1e63\u1e65\u1e67\u1e69\u1e6b\u1e6d\u1e6f\u1e71\u1e73\u1e75\u1e77\u1e79\u1e7b\u1e7d\u1e7f\u1e81\u1e83\u1e85\u1e87\u1e89\u1e8b\u1e8d\u1e8f\u1e91\u1e93\u1e95-\u1e9d\u1e9f\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ebf\u1ec1\u1ec3\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9\u1efb\u1efd\u1eff-\u1f07\u1f10-\u1f15\u1f20-\u1f27\u1f30-\u1f37\u1f40-\u1f45\u1f50-\u1f57\u1f60-\u1f67\u1f70-\u1f7d\u1f80-\u1f87\u1f90-\u1f97\u1fa0-\u1fa7\u1fb0-\u1fb4\u1fb6\u1fb7\u1fbe\u1fc2-\u1fc4\u1fc6\u1fc7\u1fd0-\u1fd3\u1fd6\u1fd7\u1fe0-\u1fe7\u1ff2-\u1ff4\u1ff6\u1ff7\u2071\u207f\u2090-\u209c\u210a\u210e\u210f\u2113\u212f\u2134\u2139\u213c\u213d\u2146-\u2149\u214e\u2170-\u217f\u2184\u24d0-\u24e9\u2c30-\u2c5e\u2c61\u2c65\u2c66\u2c68\u2c6a\u2c6c\u2c71\u2c73\u2c74\u2c76-\u2c7d\u2c81\u2c83\u2c85\u2c87\u2c89\u2c8b\u2c8d\u2c8f\u2c91\u2c93\u2c95\u2c97\u2c99\u2c9b\u2c9d\u2c9f\u2ca1\u2ca3\u2ca5\u2ca7\u2ca9\u2cab\u2cad\u2caf\u2cb1\u2cb3\u2cb5\u2cb7\u2cb9\u2cbb\u2cbd\u2cbf\u2cc1\u2cc3\u2cc5\u2cc7\u2cc9\u2ccb\u2ccd\u2ccf\u2cd1\u2cd3\u2cd5\u2cd7\u2cd9\u2cdb\u2cdd\u2cdf\u2ce1\u2ce3\u2ce4\u2cec\u2cee\u2cf3\u2d00-\u2d25\u2d27\u2d2d\ua641\ua643\ua645\ua647\ua649\ua64b\ua64d\ua64f\ua651\ua653\ua655\ua657\ua659\ua65b\ua65d\ua65f\ua661\ua663\ua665\ua667\ua669\ua66b\ua66d\ua681\ua683\ua685\ua687\ua689\ua68b\ua68d\ua68f\ua691\ua693\ua695\ua697\ua699\ua69b-\ua69d\ua723\ua725\ua727\ua729\ua72b\ua72d\ua72f-\ua731\ua733\ua735\ua737\ua739\ua73b\ua73d\ua73f\ua741\ua743\ua745\ua747\ua749\ua74b\ua74d\ua74f\ua751\ua753\ua755\ua757\ua759\ua75b\ua75d\ua75f\ua761\ua763\ua765\ua767\ua769\ua76b\ua76d\ua76f-\ua778\ua77a\ua77c\ua77f\ua781\ua783\ua785\ua787\ua78c\ua78e\ua791\ua793-\ua795\ua797\ua799\ua79b\ua79d\ua79f\ua7a1\ua7a3\ua7a5\ua7a7\ua7a9\ua7b5\ua7b7\ua7f8-\ua7fa\uab30-\uab5a\uab5c-\uab65\uab70-\uabbf\ufb00-\ufb06\ufb13-\ufb17\uff41-\uff5a",
                astral: "\ud803[\udcc0-\udcf2]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud801[\udc28-\udc4f]|\ud806[\udcc0-\udcdf]"
            }, {
                name: "Noncharacter_Code_Point",
                bmp: "\ufdd0-\ufdef\ufffe\uffff",
                astral: "[\udb3f\udb7f\udbbf\udbff\ud83f\ud87f\ud8bf\udaff\ud97f\ud9bf\ud9ff\uda3f\ud8ff\udabf\uda7f\ud93f][\udffe\udfff]"
            }, {
                name: "Uppercase",
                bmp: "A-Z\xc0-\xd6\xd8-\xde\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a\u012c\u012e\u0130\u0132\u0134\u0136\u0139\u013b\u013d\u013f\u0141\u0143\u0145\u0147\u014a\u014c\u014e\u0150\u0152\u0154\u0156\u0158\u015a\u015c\u015e\u0160\u0162\u0164\u0166\u0168\u016a\u016c\u016e\u0170\u0172\u0174\u0176\u0178\u0179\u017b\u017d\u0181\u0182\u0184\u0186\u0187\u0189-\u018b\u018e-\u0191\u0193\u0194\u0196-\u0198\u019c\u019d\u019f\u01a0\u01a2\u01a4\u01a6\u01a7\u01a9\u01ac\u01ae\u01af\u01b1-\u01b3\u01b5\u01b7\u01b8\u01bc\u01c4\u01c7\u01ca\u01cd\u01cf\u01d1\u01d3\u01d5\u01d7\u01d9\u01db\u01de\u01e0\u01e2\u01e4\u01e6\u01e8\u01ea\u01ec\u01ee\u01f1\u01f4\u01f6-\u01f8\u01fa\u01fc\u01fe\u0200\u0202\u0204\u0206\u0208\u020a\u020c\u020e\u0210\u0212\u0214\u0216\u0218\u021a\u021c\u021e\u0220\u0222\u0224\u0226\u0228\u022a\u022c\u022e\u0230\u0232\u023a\u023b\u023d\u023e\u0241\u0243-\u0246\u0248\u024a\u024c\u024e\u0370\u0372\u0376\u037f\u0386\u0388-\u038a\u038c\u038e\u038f\u0391-\u03a1\u03a3-\u03ab\u03cf\u03d2-\u03d4\u03d8\u03da\u03dc\u03de\u03e0\u03e2\u03e4\u03e6\u03e8\u03ea\u03ec\u03ee\u03f4\u03f7\u03f9\u03fa\u03fd-\u042f\u0460\u0462\u0464\u0466\u0468\u046a\u046c\u046e\u0470\u0472\u0474\u0476\u0478\u047a\u047c\u047e\u0480\u048a\u048c\u048e\u0490\u0492\u0494\u0496\u0498\u049a\u049c\u049e\u04a0\u04a2\u04a4\u04a6\u04a8\u04aa\u04ac\u04ae\u04b0\u04b2\u04b4\u04b6\u04b8\u04ba\u04bc\u04be\u04c0\u04c1\u04c3\u04c5\u04c7\u04c9\u04cb\u04cd\u04d0\u04d2\u04d4\u04d6\u04d8\u04da\u04dc\u04de\u04e0\u04e2\u04e4\u04e6\u04e8\u04ea\u04ec\u04ee\u04f0\u04f2\u04f4\u04f6\u04f8\u04fa\u04fc\u04fe\u0500\u0502\u0504\u0506\u0508\u050a\u050c\u050e\u0510\u0512\u0514\u0516\u0518\u051a\u051c\u051e\u0520\u0522\u0524\u0526\u0528\u052a\u052c\u052e\u0531-\u0556\u10a0-\u10c5\u10c7\u10cd\u13a0-\u13f5\u1e00\u1e02\u1e04\u1e06\u1e08\u1e0a\u1e0c\u1e0e\u1e10\u1e12\u1e14\u1e16\u1e18\u1e1a\u1e1c\u1e1e\u1e20\u1e22\u1e24\u1e26\u1e28\u1e2a\u1e2c\u1e2e\u1e30\u1e32\u1e34\u1e36\u1e38\u1e3a\u1e3c\u1e3e\u1e40\u1e42\u1e44\u1e46\u1e48\u1e4a\u1e4c\u1e4e\u1e50\u1e52\u1e54\u1e56\u1e58\u1e5a\u1e5c\u1e5e\u1e60\u1e62\u1e64\u1e66\u1e68\u1e6a\u1e6c\u1e6e\u1e70\u1e72\u1e74\u1e76\u1e78\u1e7a\u1e7c\u1e7e\u1e80\u1e82\u1e84\u1e86\u1e88\u1e8a\u1e8c\u1e8e\u1e90\u1e92\u1e94\u1e9e\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ebe\u1ec0\u1ec2\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1eec\u1eee\u1ef0\u1ef2\u1ef4\u1ef6\u1ef8\u1efa\u1efc\u1efe\u1f08-\u1f0f\u1f18-\u1f1d\u1f28-\u1f2f\u1f38-\u1f3f\u1f48-\u1f4d\u1f59\u1f5b\u1f5d\u1f5f\u1f68-\u1f6f\u1fb8-\u1fbb\u1fc8-\u1fcb\u1fd8-\u1fdb\u1fe8-\u1fec\u1ff8-\u1ffb\u2102\u2107\u210b-\u210d\u2110-\u2112\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u2130-\u2133\u213e\u213f\u2145\u2160-\u216f\u2183\u24b6-\u24cf\u2c00-\u2c2e\u2c60\u2c62-\u2c64\u2c67\u2c69\u2c6b\u2c6d-\u2c70\u2c72\u2c75\u2c7e-\u2c80\u2c82\u2c84\u2c86\u2c88\u2c8a\u2c8c\u2c8e\u2c90\u2c92\u2c94\u2c96\u2c98\u2c9a\u2c9c\u2c9e\u2ca0\u2ca2\u2ca4\u2ca6\u2ca8\u2caa\u2cac\u2cae\u2cb0\u2cb2\u2cb4\u2cb6\u2cb8\u2cba\u2cbc\u2cbe\u2cc0\u2cc2\u2cc4\u2cc6\u2cc8\u2cca\u2ccc\u2cce\u2cd0\u2cd2\u2cd4\u2cd6\u2cd8\u2cda\u2cdc\u2cde\u2ce0\u2ce2\u2ceb\u2ced\u2cf2\ua640\ua642\ua644\ua646\ua648\ua64a\ua64c\ua64e\ua650\ua652\ua654\ua656\ua658\ua65a\ua65c\ua65e\ua660\ua662\ua664\ua666\ua668\ua66a\ua66c\ua680\ua682\ua684\ua686\ua688\ua68a\ua68c\ua68e\ua690\ua692\ua694\ua696\ua698\ua69a\ua722\ua724\ua726\ua728\ua72a\ua72c\ua72e\ua732\ua734\ua736\ua738\ua73a\ua73c\ua73e\ua740\ua742\ua744\ua746\ua748\ua74a\ua74c\ua74e\ua750\ua752\ua754\ua756\ua758\ua75a\ua75c\ua75e\ua760\ua762\ua764\ua766\ua768\ua76a\ua76c\ua76e\ua779\ua77b\ua77d\ua77e\ua780\ua782\ua784\ua786\ua78b\ua78d\ua790\ua792\ua796\ua798\ua79a\ua79c\ua79e\ua7a0\ua7a2\ua7a4\ua7a6\ua7a8\ua7aa-\ua7ad\ua7b0-\ua7b4\ua7b6\uff21-\uff3a",
                astral: "\ud806[\udca0-\udcbf]|\ud803[\udc80-\udcb2]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud801[\udc00-\udc27]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]"
            }, {
                name: "White_Space",
                bmp: "  -\r \x85\xa0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000"
            }];
            b.push({
                name: "Assigned",
                inverseOf: "Cn"
            }), a.addUnicodeData(b)
        }(a),
        function(a) {
            "use strict";
            if (!a.addUnicodeData) throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
            a.addUnicodeData([{
                name: "Ahom",
                astral: "\ud805[\udf00-\udf19\udf1d-\udf2b\udf30-\udf3f]"
            }, {
                name: "Anatolian_Hieroglyphs",
                astral: "\ud811[\udc00-\ude46]"
            }, {
                name: "Arabic",
                bmp: "\u0600-\u0604\u0606-\u060b\u060d-\u061a\u061e\u0620-\u063f\u0641-\u064a\u0656-\u066f\u0671-\u06dc\u06de-\u06ff\u0750-\u077f\u08a0-\u08b4\u08e3-\u08ff\ufb50-\ufbc1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfd\ufe70-\ufe74\ufe76-\ufefc",
                astral: "\ud803[\ude60-\ude7e]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb\udef0\udef1]"
            }, {
                name: "Armenian",
                bmp: "\u0531-\u0556\u0559-\u055f\u0561-\u0587\u058a\u058d-\u058f\ufb13-\ufb17"
            }, {
                name: "Avestan",
                astral: "\ud802[\udf00-\udf35\udf39-\udf3f]"
            }, {
                name: "Balinese",
                bmp: "\u1b00-\u1b4b\u1b50-\u1b7c"
            }, {
                name: "Bamum",
                bmp: "\ua6a0-\ua6f7",
                astral: "\ud81a[\udc00-\ude38]"
            }, {
                name: "Bassa_Vah",
                astral: "\ud81a[\uded0-\udeed\udef0-\udef5]"
            }, {
                name: "Batak",
                bmp: "\u1bc0-\u1bf3\u1bfc-\u1bff"
            }, {
                name: "Bengali",
                bmp: "\u0980-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09e6-\u09fb"
            }, {
                name: "Bopomofo",
                bmp: "\u02ea\u02eb\u3105-\u312d\u31a0-\u31ba"
            }, {
                name: "Brahmi",
                astral: "\ud804[\udc00-\udc4d\udc52-\udc6f\udc7f]"
            }, {
                name: "Braille",
                bmp: "\u2800-\u28ff"
            }, {
                name: "Buginese",
                bmp: "\u1a00-\u1a1b\u1a1e\u1a1f"
            }, {
                name: "Buhid",
                bmp: "\u1740-\u1753"
            }, {
                name: "Canadian_Aboriginal",
                bmp: "\u1400-\u167f\u18b0-\u18f5"
            }, {
                name: "Carian",
                astral: "\ud800[\udea0-\uded0]"
            }, {
                name: "Caucasian_Albanian",
                astral: "\ud801[\udd30-\udd63\udd6f]"
            }, {
                name: "Chakma",
                astral: "\ud804[\udd00-\udd34\udd36-\udd43]"
            }, {
                name: "Cham",
                bmp: "\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa5c-\uaa5f"
            }, {
                name: "Cherokee",
                bmp: "\u13a0-\u13f5\u13f8-\u13fd\uab70-\uabbf"
            }, {
                name: "Common",
                bmp: "\x00-@\\x5B-`\\x7B-\xa9\xab-\xb9\xbb-\xbf\xd7\xf7\u02b9-\u02df\u02e5-\u02e9\u02ec-\u02ff\u0374\u037e\u0385\u0387\u0589\u0605\u060c\u061b\u061c\u061f\u0640\u06dd\u0964\u0965\u0e3f\u0fd5-\u0fd8\u10fb\u16eb-\u16ed\u1735\u1736\u1802\u1803\u1805\u1cd3\u1ce1\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u2000-\u200b\u200e-\u2064\u2066-\u2070\u2074-\u207e\u2080-\u208e\u20a0-\u20be\u2100-\u2125\u2127-\u2129\u212c-\u2131\u2133-\u214d\u214f-\u215f\u2189-\u218b\u2190-\u23fa\u2400-\u2426\u2440-\u244a\u2460-\u27ff\u2900-\u2b73\u2b76-\u2b95\u2b98-\u2bb9\u2bbd-\u2bc8\u2bca-\u2bd1\u2bec-\u2bef\u2e00-\u2e42\u2ff0-\u2ffb\u3000-\u3004\u3006\u3008-\u3020\u3030-\u3037\u303c-\u303f\u309b\u309c\u30a0\u30fb\u30fc\u3190-\u319f\u31c0-\u31e3\u3220-\u325f\u327f-\u32cf\u3358-\u33ff\u4dc0-\u4dff\ua700-\ua721\ua788-\ua78a\ua830-\ua839\ua92e\ua9cf\uab5b\ufd3e\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe66\ufe68-\ufe6b\ufeff\uff01-\uff20\uff3b-\uff40\uff5b-\uff65\uff70\uff9e\uff9f\uffe0-\uffe6\uffe8-\uffee\ufff9-\ufffd",
                astral: "\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd10-\udd18\udd80-\udd84\uddc0]|\ud82f[\udca0-\udca3]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udfcb\udfce-\udfff]|\udb40[\udc01\udc20-\udc7f]|\ud83d[\udc00-\udd79\udd7b-\udda3\udda5-\uded0\udee0-\udeec\udef0-\udef3\udf00-\udf73\udf80-\udfd4]|\ud800[\udd00-\udd02\udd07-\udd33\udd37-\udd3f\udd90-\udd9b\uddd0-\uddfc\udee1-\udefb]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd66\udd6a-\udd7a\udd83\udd84\udd8c-\udda9\uddae-\udde8\udf00-\udf56\udf60-\udf71]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd00-\udd0c\udd10-\udd2e\udd30-\udd6b\udd70-\udd9a\udde6-\uddff\ude01\ude02\ude10-\ude3a\ude40-\ude48\ude50\ude51\udf00-\udfff]"
            }, {
                name: "Coptic",
                bmp: "\u03e2-\u03ef\u2c80-\u2cf3\u2cf9-\u2cff"
            }, {
                name: "Cuneiform",
                astral: "\ud809[\udc00-\udc6e\udc70-\udc74\udc80-\udd43]|\ud808[\udc00-\udf99]"
            }, {
                name: "Cypriot",
                astral: "\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f]"
            }, {
                name: "Cyrillic",
                bmp: "\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f"
            }, {
                name: "Deseret",
                astral: "\ud801[\udc00-\udc4f]"
            }, {
                name: "Devanagari",
                bmp: "\u0900-\u0950\u0953-\u0963\u0966-\u097f\ua8e0-\ua8fd"
            }, {
                name: "Duployan",
                astral: "\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9c-\udc9f]"
            }, {
                name: "Egyptian_Hieroglyphs",
                astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]"
            }, {
                name: "Elbasan",
                astral: "\ud801[\udd00-\udd27]"
            }, {
                name: "Ethiopic",
                bmp: "\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u137c\u1380-\u1399\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e"
            }, {
                name: "Georgian",
                bmp: "\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u10ff\u2d00-\u2d25\u2d27\u2d2d"
            }, {
                name: "Glagolitic",
                bmp: "\u2c00-\u2c2e\u2c30-\u2c5e"
            }, {
                name: "Gothic",
                astral: "\ud800[\udf30-\udf4a]"
            }, {
                name: "Grantha",
                astral: "\ud804[\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]"
            }, {
                name: "Greek",
                bmp: "\u0370-\u0373\u0375-\u0377\u037a-\u037d\u037f\u0384\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03e1\u03f0-\u03ff\u1d26-\u1d2a\u1d5d-\u1d61\u1d66-\u1d6a\u1dbf\u1f00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fc4\u1fc6-\u1fd3\u1fd6-\u1fdb\u1fdd-\u1fef\u1ff2-\u1ff4\u1ff6-\u1ffe\u2126\uab65",
                astral: "\ud800[\udd40-\udd8c\udda0]|\ud834[\ude00-\ude45]"
            }, {
                name: "Gujarati",
                bmp: "\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0af1\u0af9"
            }, {
                name: "Gurmukhi",
                bmp: "\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75"
            }, {
                name: "Han",
                bmp: "\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u3005\u3007\u3021-\u3029\u3038-\u303b\u3400-\u4db5\u4e00-\u9fd5\uf900-\ufa6d\ufa70-\ufad9",
                astral: "\ud86e[\udc00-\udc1d\udc20-\udfff]|[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud87e[\udc00-\ude1d]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud873[\udc00-\udea1]"
            }, {
                name: "Hangul",
                bmp: "\u1100-\u11ff\u302e\u302f\u3131-\u318e\u3200-\u321e\u3260-\u327e\ua960-\ua97c\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc"
            }, {
                name: "Hanunoo",
                bmp: "\u1720-\u1734"
            }, {
                name: "Hatran",
                astral: "\ud802[\udce0-\udcf2\udcf4\udcf5\udcfb-\udcff]"
            }, {
                name: "Hebrew",
                bmp: "\u0591-\u05c7\u05d0-\u05ea\u05f0-\u05f4\ufb1d-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufb4f"
            }, {
                name: "Hiragana",
                bmp: "\u3041-\u3096\u309d-\u309f",
                astral: "\ud82c\udc01|\ud83c\ude00"
            }, {
                name: "Imperial_Aramaic",
                astral: "\ud802[\udc40-\udc55\udc57-\udc5f]"
            }, {
                name: "Inherited",
                bmp: "\u0300-\u036f\u0485\u0486\u064b-\u0655\u0670\u0951\u0952\u1ab0-\u1abe\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c\u200d\u20d0-\u20f0\u302a-\u302d\u3099\u309a\ufe00-\ufe0f\ufe20-\ufe2d",
                astral: "\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad]|\ud800[\uddfd\udee0]|\udb40[\udd00-\uddef]"
            }, {
                name: "Inscriptional_Pahlavi",
                astral: "\ud802[\udf60-\udf72\udf78-\udf7f]"
            }, {
                name: "Inscriptional_Parthian",
                astral: "\ud802[\udf40-\udf55\udf58-\udf5f]"
            }, {
                name: "Javanese",
                bmp: "\ua980-\ua9cd\ua9d0-\ua9d9\ua9de\ua9df"
            }, {
                name: "Kaithi",
                astral: "\ud804[\udc80-\udcc1]"
            }, {
                name: "Kannada",
                bmp: "\u0c81-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1\u0cf2"
            }, {
                name: "Katakana",
                bmp: "\u30a1-\u30fa\u30fd-\u30ff\u31f0-\u31ff\u32d0-\u32fe\u3300-\u3357\uff66-\uff6f\uff71-\uff9d",
                astral: "\ud82c\udc00"
            }, {
                name: "Kayah_Li",
                bmp: "\ua900-\ua92d\ua92f"
            }, {
                name: "Kharoshthi",
                astral: "\ud802[\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude33\ude38-\ude3a\ude3f-\ude47\ude50-\ude58]"
            }, {
                name: "Khmer",
                bmp: "\u1780-\u17dd\u17e0-\u17e9\u17f0-\u17f9\u19e0-\u19ff"
            }, {
                name: "Khojki",
                astral: "\ud804[\ude00-\ude11\ude13-\ude3d]"
            }, {
                name: "Khudawadi",
                astral: "\ud804[\udeb0-\udeea\udef0-\udef9]"
            }, {
                name: "Lao",
                bmp: "\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf"
            }, {
                name: "Latin",
                bmp: "A-Za-z\xaa\xba\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u02e0-\u02e4\u1d00-\u1d25\u1d2c-\u1d5c\u1d62-\u1d65\u1d6b-\u1d77\u1d79-\u1dbe\u1e00-\u1eff\u2071\u207f\u2090-\u209c\u212a\u212b\u2132\u214e\u2160-\u2188\u2c60-\u2c7f\ua722-\ua787\ua78b-\ua7ad\ua7b0-\ua7b7\ua7f7-\ua7ff\uab30-\uab5a\uab5c-\uab64\ufb00-\ufb06\uff21-\uff3a\uff41-\uff5a"
            }, {
                name: "Lepcha",
                bmp: "\u1c00-\u1c37\u1c3b-\u1c49\u1c4d-\u1c4f"
            }, {
                name: "Limbu",
                bmp: "\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1940\u1944-\u194f"
            }, {
                name: "Linear_A",
                astral: "\ud801[\ude00-\udf36\udf40-\udf55\udf60-\udf67]"
            }, {
                name: "Linear_B",
                astral: "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa]"
            }, {
                name: "Lisu",
                bmp: "\ua4d0-\ua4ff"
            }, {
                name: "Lycian",
                astral: "\ud800[\ude80-\ude9c]"
            }, {
                name: "Lydian",
                astral: "\ud802[\udd20-\udd39\udd3f]"
            }, {
                name: "Mahajani",
                astral: "\ud804[\udd50-\udd76]"
            }, {
                name: "Malayalam",
                bmp: "\u0d01-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d5f-\u0d63\u0d66-\u0d75\u0d79-\u0d7f"
            }, {
                name: "Mandaic",
                bmp: "\u0840-\u085b\u085e"
            }, {
                name: "Manichaean",
                astral: "\ud802[\udec0-\udee6\udeeb-\udef6]"
            }, {
                name: "Meetei_Mayek",
                bmp: "\uaae0-\uaaf6\uabc0-\uabed\uabf0-\uabf9"
            }, {
                name: "Mende_Kikakui",
                astral: "\ud83a[\udc00-\udcc4\udcc7-\udcd6]"
            }, {
                name: "Meroitic_Cursive",
                astral: "\ud802[\udda0-\uddb7\uddbc-\uddcf\uddd2-\uddff]"
            }, {
                name: "Meroitic_Hieroglyphs",
                astral: "\ud802[\udd80-\udd9f]"
            }, {
                name: "Miao",
                astral: "\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]"
            }, {
                name: "Modi",
                astral: "\ud805[\ude00-\ude44\ude50-\ude59]"
            }, {
                name: "Mongolian",
                bmp: "\u1800\u1801\u1804\u1806-\u180e\u1810-\u1819\u1820-\u1877\u1880-\u18aa"
            }, {
                name: "Mro",
                astral: "\ud81a[\ude40-\ude5e\ude60-\ude69\ude6e\ude6f]"
            }, {
                name: "Multani",
                astral: "\ud804[\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea9]"
            }, {
                name: "Myanmar",
                bmp: "\u1000-\u109f\ua9e0-\ua9fe\uaa60-\uaa7f"
            }, {
                name: "Nabataean",
                astral: "\ud802[\udc80-\udc9e\udca7-\udcaf]"
            }, {
                name: "New_Tai_Lue",
                bmp: "\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19da\u19de\u19df"
            }, {
                name: "Nko",
                bmp: "\u07c0-\u07fa"
            }, {
                name: "Ogham",
                bmp: "\u1680-\u169c"
            }, {
                name: "Ol_Chiki",
                bmp: "\u1c50-\u1c7f"
            }, {
                name: "Old_Hungarian",
                astral: "\ud803[\udc80-\udcb2\udcc0-\udcf2\udcfa-\udcff]"
            }, {
                name: "Old_Italic",
                astral: "\ud800[\udf00-\udf23]"
            }, {
                name: "Old_North_Arabian",
                astral: "\ud802[\ude80-\ude9f]"
            }, {
                name: "Old_Permic",
                astral: "\ud800[\udf50-\udf7a]"
            }, {
                name: "Old_Persian",
                astral: "\ud800[\udfa0-\udfc3\udfc8-\udfd5]"
            }, {
                name: "Old_South_Arabian",
                astral: "\ud802[\ude60-\ude7f]"
            }, {
                name: "Old_Turkic",
                astral: "\ud803[\udc00-\udc48]"
            }, {
                name: "Oriya",
                bmp: "\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b66-\u0b77"
            }, {
                name: "Osmanya",
                astral: "\ud801[\udc80-\udc9d\udca0-\udca9]"
            }, {
                name: "Pahawh_Hmong",
                astral: "\ud81a[\udf00-\udf45\udf50-\udf59\udf5b-\udf61\udf63-\udf77\udf7d-\udf8f]"
            }, {
                name: "Palmyrene",
                astral: "\ud802[\udc60-\udc7f]"
            }, {
                name: "Pau_Cin_Hau",
                astral: "\ud806[\udec0-\udef8]"
            }, {
                name: "Phags_Pa",
                bmp: "\ua840-\ua877"
            }, {
                name: "Phoenician",
                astral: "\ud802[\udd00-\udd1b\udd1f]"
            }, {
                name: "Psalter_Pahlavi",
                astral: "\ud802[\udf80-\udf91\udf99-\udf9c\udfa9-\udfaf]"
            }, {
                name: "Rejang",
                bmp: "\ua930-\ua953\ua95f"
            }, {
                name: "Runic",
                bmp: "\u16a0-\u16ea\u16ee-\u16f8"
            }, {
                name: "Samaritan",
                bmp: "\u0800-\u082d\u0830-\u083e"
            }, {
                name: "Saurashtra",
                bmp: "\ua880-\ua8c4\ua8ce-\ua8d9"
            }, {
                name: "Sharada",
                astral: "\ud804[\udd80-\uddcd\uddd0-\udddf]"
            }, {
                name: "Shavian",
                astral: "\ud801[\udc50-\udc7f]"
            }, {
                name: "Siddham",
                astral: "\ud805[\udd80-\uddb5\uddb8-\udddd]"
            }, {
                name: "SignWriting",
                astral: "\ud836[\udc00-\ude8b\ude9b-\ude9f\udea1-\udeaf]"
            }, {
                name: "Sinhala",
                bmp: "\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df4",
                astral: "\ud804[\udde1-\uddf4]"
            }, {
                name: "Sora_Sompeng",
                astral: "\ud804[\udcd0-\udce8\udcf0-\udcf9]"
            }, {
                name: "Sundanese",
                bmp: "\u1b80-\u1bbf\u1cc0-\u1cc7"
            }, {
                name: "Syloti_Nagri",
                bmp: "\ua800-\ua82b"
            }, {
                name: "Syriac",
                bmp: "\u0700-\u070d\u070f-\u074a\u074d-\u074f"
            }, {
                name: "Tagalog",
                bmp: "\u1700-\u170c\u170e-\u1714"
            }, {
                name: "Tagbanwa",
                bmp: "\u1760-\u176c\u176e-\u1770\u1772\u1773"
            }, {
                name: "Tai_Le",
                bmp: "\u1950-\u196d\u1970-\u1974"
            }, {
                name: "Tai_Tham",
                bmp: "\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa0-\u1aad"
            }, {
                name: "Tai_Viet",
                bmp: "\uaa80-\uaac2\uaadb-\uaadf"
            }, {
                name: "Takri",
                astral: "\ud805[\ude80-\udeb7\udec0-\udec9]"
            }, {
                name: "Tamil",
                bmp: "\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bfa"
            }, {
                name: "Telugu",
                bmp: "\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58-\u0c5a\u0c60-\u0c63\u0c66-\u0c6f\u0c78-\u0c7f"
            }, {
                name: "Thaana",
                bmp: "\u0780-\u07b1"
            }, {
                name: "Thai",
                bmp: "\u0e01-\u0e3a\u0e40-\u0e5b"
            }, {
                name: "Tibetan",
                bmp: "\u0f00-\u0f47\u0f49-\u0f6c\u0f71-\u0f97\u0f99-\u0fbc\u0fbe-\u0fcc\u0fce-\u0fd4\u0fd9\u0fda"
            }, {
                name: "Tifinagh",
                bmp: "\u2d30-\u2d67\u2d6f\u2d70\u2d7f"
            }, {
                name: "Tirhuta",
                astral: "\ud805[\udc80-\udcc7\udcd0-\udcd9]"
            }, {
                name: "Ugaritic",
                astral: "\ud800[\udf80-\udf9d\udf9f]"
            }, {
                name: "Vai",
                bmp: "\ua500-\ua62b"
            }, {
                name: "Warang_Citi",
                astral: "\ud806[\udca0-\udcf2\udcff]"
            }, {
                name: "Yi",
                bmp: "\ua000-\ua48c\ua490-\ua4c6"
            }])
        }(a), a
});
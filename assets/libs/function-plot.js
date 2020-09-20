! function(t, n) { "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.functionPlot = n() : t.functionPlot = n() }(window, (function() {
    return function(t) {
        var n = {};

        function e(r) { if (n[r]) return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports }
        return e.m = t, e.c = n, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r }) }, e.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function(t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t)
                for (var i in t) e.d(r, i, function(n) { return t[n] }.bind(null, i));
            return r
        }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, e.p = "", e(e.s = 75)
    }([function(t, n, e) {
        "use strict";
        e.r(n),
            function(t) {
                e.d(n, "builtIn", (function() { return u })), e.d(n, "interval", (function() { return c }));
                var r = e(37),
                    i = e.n(r),
                    o = e(10);
                const a = { interval: e.n(o).a, builtIn: i.a };

                function s(n) {
                    function e(e, r) {
                        const i = e[r],
                            o = n + "_Expression_" + r,
                            s = n + "_Compiled_" + r;
                        i !== e[o] && (e[o] = i, e[s] = function(e) { if ("string" == typeof e) { const r = a[n](e); return t.math && "builtIn" === n ? { eval: r.evaluate || r.eval } : r } if ("function" == typeof e) return { eval: e }; throw Error("expression must be a string or a function") }(i))
                    }
                    return function(t, r, i) {
                        return e(t, r),
                            function(t, e) { return t[n + "_Compiled_" + e] }(t, r).eval(Object.assign({}, t.scope || {}, i))
                    }
                }
                t.math && (a.builtIn = t.math.compile);
                const u = s("builtIn"),
                    c = s("interval")
            }.call(this, e(17))
    }, , function(t, n) {
        function e() {}
        e.prototype.type = "Node", t.exports = e
    }, function(t, n, e) {
        "use strict";
        var r = { isInterval: function(t) { return "object" == typeof t && "number" == typeof t.lo && "number" == typeof t.hi }, isEmpty: function(t) { return t.lo > t.hi }, isWhole: function(t) { return t.lo === -1 / 0 && t.hi === 1 / 0 }, isSingleton: function(t) { return t.lo === t.hi }, zeroIn: function(t) { return r.hasValue(t, 0) }, hasValue: function(t, n) { return !r.isEmpty(t) && (t.lo <= n && n <= t.hi) }, hasInterval: function(t, n) { return !!r.isEmpty(t) || !r.isEmpty(n) && n.lo <= t.lo && t.hi <= n.hi }, intervalsOverlap: function(t, n) { return !r.isEmpty(t) && !r.isEmpty(n) && (t.lo <= n.lo && n.lo <= t.hi || n.lo <= t.lo && t.lo <= n.hi) } };
        t.exports = r
    }, function(t, n, e) {
        "use strict";
        var r = e(61);

        function i(t) { return t }

        function o(t) { return t === 1 / 0 ? t : r(t, -1 / 0) }

        function a(t) { return t === -1 / 0 ? t : r(t, 1 / 0) }
        var s = { safePrev: o, safeNext: a, prev: o, next: a };

        function u(t) { return t < 0 ? Math.ceil(t) : Math.floor(t) }
        s.addLo = function(t, n) { return this.prev(t + n) }, s.addHi = function(t, n) { return this.next(t + n) }, s.subLo = function(t, n) { return this.prev(t - n) }, s.subHi = function(t, n) { return this.next(t - n) }, s.mulLo = function(t, n) { return this.prev(t * n) }, s.mulHi = function(t, n) { return this.next(t * n) }, s.divLo = function(t, n) { return this.prev(t / n) }, s.divHi = function(t, n) { return this.next(t / n) }, s.intLo = function(t) { return u(this.prev(t)) }, s.intHi = function(t) { return u(this.next(t)) }, s.logLo = function(t) { return this.prev(Math.log(t)) }, s.logHi = function(t) { return this.next(Math.log(t)) }, s.expLo = function(t) { return this.prev(Math.exp(t)) }, s.expHi = function(t) { return this.next(Math.exp(t)) }, s.sinLo = function(t) { return this.prev(Math.sin(t)) }, s.sinHi = function(t) { return this.next(Math.sin(t)) }, s.cosLo = function(t) { return this.prev(Math.cos(t)) }, s.cosHi = function(t) { return this.next(Math.cos(t)) }, s.tanLo = function(t) { return this.prev(Math.tan(t)) }, s.tanHi = function(t) { return this.next(Math.tan(t)) }, s.asinLo = function(t) { return this.prev(Math.asin(t)) }, s.asinHi = function(t) { return this.next(Math.asin(t)) }, s.acosLo = function(t) { return this.prev(Math.acos(t)) }, s.acosHi = function(t) { return this.next(Math.acos(t)) }, s.atanLo = function(t) { return this.prev(Math.atan(t)) }, s.atanHi = function(t) { return this.next(Math.atan(t)) }, s.sinhLo = function(t) { return this.prev(Math.sinh(t)) }, s.sinhHi = function(t) { return this.next(Math.sinh(t)) }, s.coshLo = function(t) { return this.prev(Math.cosh(t)) }, s.coshHi = function(t) { return this.next(Math.cosh(t)) }, s.tanhLo = function(t) { return this.prev(Math.tanh(t)) }, s.tanhHi = function(t) { return this.next(Math.tanh(t)) }, s.powLo = function(t, n) { if (n % 1 != 0) return this.prev(Math.pow(t, n)); var e = 1 & n ? t : 1; for (n >>= 1; n > 0;) t = s.mulLo(t, t), 1 & n && (e = s.mulLo(t, e)), n >>= 1; return e }, s.powHi = function(t, n) { if (n % 1 != 0) return this.next(Math.pow(t, n)); var e = 1 & n ? t : 1; for (n >>= 1; n > 0;) t = s.mulHi(t, t), 1 & n && (e = s.mulHi(t, e)), n >>= 1; return e }, s.sqrtLo = function(t) { return this.prev(Math.sqrt(t)) }, s.sqrtHi = function(t) { return this.next(Math.sqrt(t)) }, s.disable = function() { this.next = this.prev = i }, s.enable = function() { this.next = a, this.prev = o }, t.exports = s
    }, function(t, n, e) {
        "use strict";
        var r = e(3),
            i = e(4);

        function o(t, n) {
            if (!(this instanceof o)) return new o(t, n);
            if (void 0 !== t && void 0 !== n) {
                if (r.isInterval(t)) {
                    if (!r.isSingleton(t)) throw new TypeError("Interval: interval `lo` must be a singleton");
                    t = t.lo
                }
                if (r.isInterval(n)) {
                    if (!r.isSingleton(n)) throw TypeError("Interval: interval `hi` must be a singleton");
                    n = n.hi
                }
            } else {
                if (void 0 !== t) return Array.isArray(t) ? o(t[0], t[1]) : o(t, t);
                t = n = 0
            }
            this.lo = void 0, this.hi = void 0, this.assign(t, n)
        }
        t.exports = o, o.factory = o, o.prototype.singleton = function(t) { return this.set(t, t) }, o.prototype.bounded = function(t, n) { return this.set(i.prev(t), i.next(n)) }, o.prototype.boundedSingleton = function(t) { return this.bounded(t, t) }, o.prototype.set = function(t, n) { return this.lo = t, this.hi = n, this }, o.prototype.assign = function(t, n) { if ("number" != typeof t || "number" != typeof n) throw TypeError("Interval#assign: arguments must be numbers"); return isNaN(t) || isNaN(n) || t > n ? this.setEmpty() : this.set(t, n) }, o.prototype.setEmpty = function() { return this.set(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY) }, o.prototype.setWhole = function() { return this.set(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) }, o.prototype.open = function(t, n) { return this.assign(i.safeNext(t), i.safePrev(n)) }, o.prototype.halfOpenLeft = function(t, n) { return this.assign(i.safeNext(t), n) }, o.prototype.halfOpenRight = function(t, n) { return this.assign(t, i.safePrev(n)) }, o.prototype.toArray = function() { return [this.lo, this.hi] }, o.prototype.clone = function() { return o().set(this.lo, this.hi) }
    }, function(t, n) { t.exports = function(t, n, e) { return n < e ? t < n ? n : t > e ? e : t : t < e ? e : t > n ? n : t } }, function(t, n, e) {
        "use strict";
        var r = e(5),
            i = e(32),
            o = 3.141592653589793,
            a = 3.1415926535897936,
            s = {};

        function u(t, n) { Object.defineProperty(s, t, { get: function() { return n() }, enumerable: !0 }) }
        i(s, { PI_LOW: o, PI_HIGH: a, PI_HALF_LOW: o / 2, PI_HALF_HIGH: a / 2, PI_TWICE_LOW: 2 * o, PI_TWICE_HIGH: 2 * a }), u("PI", (function() { return r(o, a) })), u("PI_HALF", (function() { return r(s.PI_HALF_LOW, s.PI_HALF_HIGH) })), u("PI_TWICE", (function() { return r(s.PI_TWICE_LOW, s.PI_TWICE_HIGH) })), u("ZERO", (function() { return r(0) })), u("ONE", (function() { return r(1) })), u("WHOLE", (function() { return r().setWhole() })), u("EMPTY", (function() { return r().setEmpty() })), t.exports = s
    }, , function(t, n, e) {
        var r = e(41);
        t.exports = function(t, n, e) { var i = r(t, n, (n - t) / (e - 1)); return i.length == e ? i : i.concat(n) }
    }, function(t, n, e) {
        "use strict";
        t.exports = e(58)
    }, , function(t, n, e) {
        "use strict";
        var r = e(5),
            i = e(4),
            o = e(3),
            a = e(7),
            s = e(68),
            u = { add: function(t, n) { return r(i.addLo(t.lo, n.lo), i.addHi(t.hi, n.hi)) }, subtract: function(t, n) { return r(i.subLo(t.lo, n.hi), i.subHi(t.hi, n.lo)) } };
        u.sub = u.subtract, u.multiply = function(t, n) {
            if (o.isEmpty(t) || o.isEmpty(n)) return a.EMPTY;
            var e = t.lo,
                s = t.hi,
                u = n.lo,
                c = n.hi,
                h = r();
            return e < 0 ? s > 0 ? u < 0 ? c > 0 ? (h.lo = Math.min(i.mulLo(e, c), i.mulLo(s, u)), h.hi = Math.max(i.mulHi(e, u), i.mulHi(s, c))) : (h.lo = i.mulLo(s, u), h.hi = i.mulHi(e, u)) : c > 0 ? (h.lo = i.mulLo(e, c), h.hi = i.mulHi(s, c)) : (h.lo = 0, h.hi = 0) : u < 0 ? c > 0 ? (h.lo = i.mulLo(e, c), h.hi = i.mulHi(e, u)) : (h.lo = i.mulLo(s, c), h.hi = i.mulHi(e, u)) : c > 0 ? (h.lo = i.mulLo(e, c), h.hi = i.mulHi(s, u)) : (h.lo = 0, h.hi = 0) : s > 0 ? u < 0 ? c > 0 ? (h.lo = i.mulLo(s, u), h.hi = i.mulHi(s, c)) : (h.lo = i.mulLo(s, u), h.hi = i.mulHi(e, c)) : c > 0 ? (h.lo = i.mulLo(e, u), h.hi = i.mulHi(s, c)) : (h.lo = 0, h.hi = 0) : (h.lo = 0, h.hi = 0), h
        }, u.mul = u.multiply, u.divide = function(t, n) { return o.isEmpty(t) || o.isEmpty(n) ? a.EMPTY : o.zeroIn(n) ? 0 !== n.lo ? 0 !== n.hi ? s.zero(t) : s.negative(t, n.lo) : 0 !== n.hi ? s.positive(t, n.hi) : a.EMPTY : s.nonZero(t, n) }, u.div = u.divide, u.positive = function(t) { return r(t.lo, t.hi) }, u.negative = function(t) { return r(-t.hi, -t.lo) }, t.exports = u
    }, , , function(t, n, e) {
        "use strict";
        t.exports = Math.log10 || function(t) { return Math.log(t) * Math.LOG10E }
    }, , function(t, n) {
        var e;
        e = function() { return this }();
        try { e = e || new Function("return this")() } catch (t) { "object" == typeof window && (e = window) }
        t.exports = e
    }, function(t, n, e) {
        "use strict";
        t.exports = e(43)
    }, function(t, n, e) {
        "use strict";
        t.exports.Lexer = e(20), t.exports.Parser = e(44), t.exports.nodeTypes = e(45)
    }, function(t, n, e) {
        var r = e(21),
            i = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
            o = { ",": !0, "(": !0, ")": !0, "[": !0, "]": !0, ";": !0, "~": !0, "!": !0, "+": !0, "-": !0, "*": !0, "/": !0, "%": !0, "^": !0, "**": !0, "|": !0, "&": !0, "^|": !0, "=": !0, ":": !0, "?": !0, "||": !0, "&&": !0, xor: !0, "==": !0, "!=": !0, "===": !0, "!==": !0, "<": !0, ">": !0, ">=": !0, "<=": !0, ">>>": !0, "<<": !0, ">>": !0 };

        function a(t) { return t >= "0" && t <= "9" }

        function s(t) { return t >= "a" && t <= "z" || t >= "A" && t <= "Z" || "$" === t || "_" === t }

        function u(t) { return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t }

        function c(t) { return o[t] }

        function h(t) { return "'" === t || '"' === t }

        function l() {}
        l.prototype.throwError = function(t, n) { n = void 0 === n ? this.index : n; var e = new Error(t + " at index " + n); throw e.index = n, e.description = t, e }, l.prototype.lex = function(t) {
            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                for (; u(this.peek());) this.consume();
                var n = this.peek(),
                    e = n + this.peek(1),
                    i = e + this.peek(2);
                c(i) ? (this.tokens.push({ type: r.DELIMITER, value: i }), this.consume(), this.consume(), this.consume()) : c(e) ? (this.tokens.push({ type: r.DELIMITER, value: e }), this.consume(), this.consume()) : c(n) ? (this.tokens.push({ type: r.DELIMITER, value: n }), this.consume()) : a(n) || "." === n && a(this.peek(1)) ? this.tokens.push({ type: r.NUMBER, value: this.readNumber() }) : h(n) ? this.tokens.push({ type: r.STRING, value: this.readString() }) : s(n) ? this.tokens.push({ type: r.SYMBOL, value: this.readIdentifier() }) : this.throwError("unexpected character " + n)
            }
            return this.tokens.push({ type: r.EOF }), this.tokens
        }, l.prototype.peek = function(t) { if (t = t || 0, !(this.index + t >= this.text.length)) return this.text.charAt(this.index + t) }, l.prototype.consume = function() { var t = this.peek(); return this.index += 1, t }, l.prototype.readNumber = function() {
            var t = "";
            if ("." === this.peek()) t += this.consume(), a(this.peek()) || this.throwError("number expected");
            else { for (; a(this.peek());) t += this.consume(); "." === this.peek() && (t += this.consume()) }
            for (; a(this.peek());) t += this.consume();
            if ("e" === this.peek() || "E" === this.peek())
                for (t += this.consume(), a(this.peek()) || "+" === this.peek() || "-" === this.peek() || this.throwError(), "+" !== this.peek() && "-" !== this.peek() || (t += this.consume()), a(this.peek()) || this.throwError("number expected"); a(this.peek());) t += this.consume();
            return t
        }, l.prototype.readIdentifier = function() { for (var t = ""; s(this.peek()) || a(this.peek());) t += this.consume(); return t }, l.prototype.readString = function() {
            for (var t, n = this.consume(), e = "";;) {
                var r = this.consume();
                if (r || this.throwError("string is not closed"), t) {
                    if ("u" === r) {
                        var o = this.text.substring(this.index + 1, this.index + 5);
                        o.match(/[\da-f]{4}/i) || this.throwError("invalid unicode escape"), this.index += 4, e += String.fromCharCode(parseInt(o, 16))
                    } else {
                        var a = i[r];
                        e += a || r
                    }
                    t = !1
                } else { if (r === n) break; "\\" === r ? t = !0 : e += r }
            }
            return e
        }, t.exports = l
    }, function(t, n) { t.exports = { EOF: 0, DELIMITER: 1, NUMBER: 2, STRING: 3, SYMBOL: 4 } }, function(t, n, e) {
        var r = e(2),
            i = { number: !0, string: !0, boolean: !0, undefined: !0, null: !0 };

        function o(t, n) {
            if (!i[n]) throw Error("unsupported type '" + n + "'");
            this.value = t, this.valueType = n
        }
        o.prototype = Object.create(r.prototype), o.prototype.type = "ConstantNode", t.exports = o
    }, function(t, n, e) {
        var r = e(2);

        function i(t, n) { this.op = t, this.args = n || [] }
        i.prototype = Object.create(r.prototype), i.prototype.type = "OperatorNode", t.exports = i
    }, function(t, n, e) {
        var r = e(2);

        function i(t, n) { this.op = t, this.argument = n }
        i.prototype = Object.create(r.prototype), i.prototype.type = "UnaryNode", t.exports = i
    }, function(t, n, e) {
        var r = e(2);

        function i(t) { this.name = t }
        i.prototype = Object.create(r.prototype), i.prototype.type = "SymbolNode", t.exports = i
    }, function(t, n, e) {
        var r = e(2);

        function i(t, n) { this.name = t, this.args = n }
        i.prototype = Object.create(r.prototype), i.prototype.type = "FunctionNode", t.exports = i
    }, function(t, n, e) {
        var r = e(2);

        function i(t) { this.nodes = t }
        i.prototype = Object.create(r.prototype), i.prototype.type = "ArrayNode", t.exports = i
    }, function(t, n, e) {
        var r = e(2);

        function i(t, n, e) { this.condition = t, this.trueExpr = n, this.falseExpr = e }
        i.prototype = Object.create(r.prototype), i.prototype.type = "ConditionalNode", t.exports = i
    }, function(t, n, e) {
        var r = e(2);

        function i(t, n) { this.name = t, this.expr = n }
        i.prototype = Object.create(r.prototype), i.prototype.type = "AssignmentNode", t.exports = i
    }, function(t, n, e) {
        var r = e(2);

        function i(t) { this.blocks = t }
        i.prototype = Object.create(r.prototype), i.prototype.type = "BlockNode", t.exports = i
    }, function(t, n, e) {
        "use strict";
        var r = Object.prototype.hasOwnProperty,
            i = Object.prototype.toString,
            o = Object.defineProperty,
            a = Object.getOwnPropertyDescriptor,
            s = function(t) { return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === i.call(t) },
            u = function(t) {
                if (!t || "[object Object]" !== i.call(t)) return !1;
                var n, e = r.call(t, "constructor"),
                    o = t.constructor && t.constructor.prototype && r.call(t.constructor.prototype, "isPrototypeOf");
                if (t.constructor && !e && !o) return !1;
                for (n in t);
                return void 0 === n || r.call(t, n)
            },
            c = function(t, n) { o && "__proto__" === n.name ? o(t, n.name, { enumerable: !0, configurable: !0, value: n.newValue, writable: !0 }) : t[n.name] = n.newValue },
            h = function(t, n) { if ("__proto__" === n) { if (!r.call(t, n)) return; if (a) return a(t, n).value } return t[n] };
        t.exports = function t() {
            var n, e, r, i, o, a, l = arguments[0],
                f = 1,
                p = arguments.length,
                m = !1;
            for ("boolean" == typeof l && (m = l, l = arguments[1] || {}, f = 2), (null == l || "object" != typeof l && "function" != typeof l) && (l = {}); f < p; ++f)
                if (null != (n = arguments[f]))
                    for (e in n) r = h(l, e), l !== (i = h(n, e)) && (m && i && (u(i) || (o = s(i))) ? (o ? (o = !1, a = r && s(r) ? r : []) : a = r && u(r) ? r : {}, c(l, { name: e, newValue: t(m, a, i) })) : void 0 !== i && c(l, { name: e, newValue: i }));
            return l
        }
    }, function(t, n) { t.exports = function(t) { for (var n = 1; n < arguments.length; n++) { var r = arguments[n]; for (var i in r) e.call(r, i) && (t[i] = r[i]) } return t }; var e = Object.prototype.hasOwnProperty }, function(t, n, e) {
        "use strict";
        var r = e(69),
            i = e(5),
            o = e(4),
            a = e(3),
            s = e(12),
            u = e(7),
            c = {
                fmod: function(t, n) {
                    if (a.isEmpty(t) || a.isEmpty(n)) return u.EMPTY;
                    var e = t.lo < 0 ? n.lo : n.hi,
                        r = t.lo / e;
                    return r = r < 0 ? Math.ceil(r) : Math.floor(r), s.sub(t, s.mul(n, i(r)))
                },
                multiplicativeInverse: function(t) { return a.isEmpty(t) ? u.EMPTY : a.zeroIn(t) ? 0 !== t.lo ? 0 !== t.hi ? u.WHOLE : i(Number.NEGATIVE_INFINITY, o.divHi(1, t.lo)) : 0 !== t.hi ? i(o.divLo(1, t.hi), Number.POSITIVE_INFINITY) : u.EMPTY : i(o.divLo(1, t.hi), o.divHi(1, t.lo)) },
                pow: function(t, n) {
                    if (a.isEmpty(t)) return u.EMPTY;
                    if ("object" == typeof n) {
                        if (!a.isSingleton(n)) return u.EMPTY;
                        n = n.lo
                    }
                    if (0 === n) return 0 === t.lo && 0 === t.hi ? u.EMPTY : u.ONE;
                    if (n < 0) return c.pow(c.multiplicativeInverse(t), -n);
                    if (r(n)) {
                        if (t.hi < 0) {
                            var e = o.powLo(-t.hi, n),
                                s = o.powHi(-t.lo, n);
                            return 1 & n ? i(-s, -e) : i(e, s)
                        }
                        return t.lo < 0 ? 1 & n ? i(-o.powLo(-t.lo, n), o.powHi(t.hi, n)) : i(0, o.powHi(Math.max(-t.lo, t.hi), n)) : i(o.powLo(t.lo, n), o.powHi(t.hi, n))
                    }
                    return console.warn("power is not an integer, you should use nth-root instead, returning an empty interval"), u.EMPTY
                },
                sqrt: function(t) { return c.nthRoot(t, 2) },
                nthRoot: function(t, n) {
                    if (a.isEmpty(t) || n < 0) return u.EMPTY;
                    if ("object" == typeof n) {
                        if (!a.isSingleton(n)) return u.EMPTY;
                        n = n.lo
                    }
                    var e = 1 / n;
                    if (t.hi < 0) {
                        if (1 & r(n) & n) {
                            var s = o.powHi(-t.lo, e),
                                c = o.powLo(-t.hi, e);
                            return i(-s, -c)
                        }
                        return i.EMPTY
                    }
                    if (t.lo < 0) { var h = o.powHi(t.hi, e); if (1 & r(n) & n) { var l = -o.powHi(-t.lo, e); return i(l, h) } return i(0, h) }
                    return i(o.powLo(t.lo, e), o.powHi(t.hi, e))
                }
            };
        t.exports = c
    }, function(t, n, e) {
        "use strict";
        var r = e(7),
            i = e(5),
            o = e(4),
            a = e(3),
            s = e(12),
            u = { exp: function(t) { return a.isEmpty(t) ? r.EMPTY : i(o.expLo(t.lo), o.expHi(t.hi)) }, log: function(t) { if (a.isEmpty(t)) return r.EMPTY; var n = t.lo <= 0 ? Number.NEGATIVE_INFINITY : o.logLo(t.lo); return i(n, o.logHi(t.hi)) } };
        u.ln = u.log, u.LOG_EXP_10 = u.log(i(10, 10)), u.log10 = function(t) { return a.isEmpty(t) ? r.EMPTY : s.div(u.log(t), u.LOG_EXP_10) }, u.LOG_EXP_2 = u.log(i(2, 2)), u.log2 = function(t) { return a.isEmpty(t) ? r.EMPTY : s.div(u.log(t), u.LOG_EXP_2) }, u.hull = function(t, n) {
            var e = a.isEmpty(t),
                o = a.isEmpty(n);
            return e && o ? r.EMPTY : e ? n.clone() : o ? t.clone() : i(Math.min(t.lo, n.lo), Math.max(t.hi, n.hi))
        }, u.intersection = function(t, n) {
            if (a.isEmpty(t) || a.isEmpty(n)) return r.EMPTY;
            var e = Math.max(t.lo, n.lo),
                o = Math.min(t.hi, n.hi);
            return e <= o ? i(e, o) : r.EMPTY
        }, u.union = function(t, n) { if (!a.intervalsOverlap(t, n)) throw Error("Interval#union: intervals do not overlap"); return i(Math.min(t.lo, n.lo), Math.max(t.hi, n.hi)) }, u.difference = function(t, n) { if (a.isEmpty(t) || a.isWhole(n)) return r.EMPTY; if (a.intervalsOverlap(t, n)) { if (t.lo < n.lo && n.hi < t.hi) throw Error("Interval.difference: difference creates multiple intervals"); return n.lo <= t.lo && n.hi === 1 / 0 || n.hi >= t.hi && n.lo === -1 / 0 ? r.EMPTY : n.lo <= t.lo ? i().halfOpenLeft(n.hi, t.hi) : i().halfOpenRight(t.lo, n.lo) } return i.clone(t) }, u.width = function(t) { return a.isEmpty(t) ? 0 : o.subHi(t.hi, t.lo) }, u.wid = u.width, u.abs = function(t) { return a.isEmpty(t) ? r.EMPTY : t.lo >= 0 ? i.clone(t) : t.hi <= 0 ? s.negative(t) : i(0, Math.max(-t.lo, t.hi)) }, u.max = function(t, n) {
            var e = a.isEmpty(t),
                o = a.isEmpty(n);
            return e && o ? r.EMPTY : e ? n.clone() : o ? t.clone() : i(Math.max(t.lo, n.lo), Math.max(t.hi, n.hi))
        }, u.min = function(t, n) {
            var e = a.isEmpty(t),
                o = a.isEmpty(n);
            return e && o ? r.EMPTY : e ? n.clone() : o ? t.clone() : i(Math.min(t.lo, n.lo), Math.min(t.hi, n.hi))
        }, u.clone = function(t) { return i().set(t.lo, t.hi) }, t.exports = u
    }, function(t, n, e) {
        "use strict";
        var r, i = "object" == typeof Reflect ? Reflect : null,
            o = i && "function" == typeof i.apply ? i.apply : function(t, n, e) { return Function.prototype.apply.call(t, n, e) };
        r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(t) { return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)) } : function(t) { return Object.getOwnPropertyNames(t) };
        var a = Number.isNaN || function(t) { return t != t };

        function s() { s.init.call(this) }
        t.exports = s, t.exports.once = function(t, n) {
            return new Promise((function(e, r) {
                function i() { void 0 !== o && t.removeListener("error", o), e([].slice.call(arguments)) }
                var o;
                "error" !== n && (o = function(e) { t.removeListener(n, i), r(e) }, t.once("error", o)), t.once(n, i)
            }))
        }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
        var u = 10;

        function c(t) { if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t) }

        function h(t) { return void 0 === t._maxListeners ? s.defaultMaxListeners : t._maxListeners }

        function l(t, n, e, r) {
            var i, o, a, s;
            if (c(e), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", n, e.listener ? e.listener : e), o = t._events), a = o[n]), void 0 === a) a = o[n] = e, ++t._eventsCount;
            else if ("function" == typeof a ? a = o[n] = r ? [e, a] : [a, e] : r ? a.unshift(e) : a.push(e), (i = h(t)) > 0 && a.length > i && !a.warned) {
                a.warned = !0;
                var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(n) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = n, u.count = a.length, s = u, console && console.warn && console.warn(s)
            }
            return t
        }

        function f() { if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments) }

        function p(t, n, e) {
            var r = { fired: !1, wrapFn: void 0, target: t, type: n, listener: e },
                i = f.bind(r);
            return i.listener = e, r.wrapFn = i, i
        }

        function m(t, n, e) { var r = t._events; if (void 0 === r) return []; var i = r[n]; return void 0 === i ? [] : "function" == typeof i ? e ? [i.listener || i] : [i] : e ? function(t) { for (var n = new Array(t.length), e = 0; e < n.length; ++e) n[e] = t[e].listener || t[e]; return n }(i) : d(i, i.length) }

        function y(t) { var n = this._events; if (void 0 !== n) { var e = n[t]; if ("function" == typeof e) return 1; if (void 0 !== e) return e.length } return 0 }

        function d(t, n) { for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t[r]; return e }
        Object.defineProperty(s, "defaultMaxListeners", {
            enumerable: !0,
            get: function() { return u },
            set: function(t) {
                if ("number" != typeof t || t < 0 || a(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                u = t
            }
        }), s.init = function() { void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0 }, s.prototype.setMaxListeners = function(t) { if ("number" != typeof t || t < 0 || a(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + "."); return this._maxListeners = t, this }, s.prototype.getMaxListeners = function() { return h(this) }, s.prototype.emit = function(t) {
            for (var n = [], e = 1; e < arguments.length; e++) n.push(arguments[e]);
            var r = "error" === t,
                i = this._events;
            if (void 0 !== i) r = r && void 0 === i.error;
            else if (!r) return !1;
            if (r) { var a; if (n.length > 0 && (a = n[0]), a instanceof Error) throw a; var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : "")); throw s.context = a, s }
            var u = i[t];
            if (void 0 === u) return !1;
            if ("function" == typeof u) o(u, this, n);
            else {
                var c = u.length,
                    h = d(u, c);
                for (e = 0; e < c; ++e) o(h[e], this, n)
            }
            return !0
        }, s.prototype.addListener = function(t, n) { return l(this, t, n, !1) }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(t, n) { return l(this, t, n, !0) }, s.prototype.once = function(t, n) { return c(n), this.on(t, p(this, t, n)), this }, s.prototype.prependOnceListener = function(t, n) { return c(n), this.prependListener(t, p(this, t, n)), this }, s.prototype.removeListener = function(t, n) {
            var e, r, i, o, a;
            if (c(n), void 0 === (r = this._events)) return this;
            if (void 0 === (e = r[t])) return this;
            if (e === n || e.listener === n) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, e.listener || n));
            else if ("function" != typeof e) {
                for (i = -1, o = e.length - 1; o >= 0; o--)
                    if (e[o] === n || e[o].listener === n) { a = e[o].listener, i = o; break }
                if (i < 0) return this;
                0 === i ? e.shift() : function(t, n) {
                    for (; n + 1 < t.length; n++) t[n] = t[n + 1];
                    t.pop()
                }(e, i), 1 === e.length && (r[t] = e[0]), void 0 !== r.removeListener && this.emit("removeListener", t, a || n)
            }
            return this
        }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(t) {
            var n, e, r;
            if (void 0 === (e = this._events)) return this;
            if (void 0 === e.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== e[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete e[t]), this;
            if (0 === arguments.length) { var i, o = Object.keys(e); for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i); return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this }
            if ("function" == typeof(n = e[t])) this.removeListener(t, n);
            else if (void 0 !== n)
                for (r = n.length - 1; r >= 0; r--) this.removeListener(t, n[r]);
            return this
        }, s.prototype.listeners = function(t) { return m(this, t, !0) }, s.prototype.rawListeners = function(t) { return m(this, t, !1) }, s.listenerCount = function(t, n) { return "function" == typeof t.listenerCount ? t.listenerCount(n) : y.call(t, n) }, s.prototype.listenerCount = y, s.prototype.eventNames = function() { return this._eventsCount > 0 ? r(this._events) : [] }
    }, function(t, n, e) {
        var r = e(9);
        t.exports = function(t, n, e) { return r(t, n, e).map((function(t) { return Math.pow(10, t) })) }
    }, function(t, n, e) {
        "use strict";
        t.exports = e(42)
    }, , , , function(t, n) {
        var e = /^\s+|\s+$/g,
            r = /^[-+]0x[0-9a-f]+$/i,
            i = /^0b[01]+$/i,
            o = /^0o[0-7]+$/i,
            a = /^(?:0|[1-9]\d*)$/,
            s = parseInt;
        var u = Object.prototype.toString,
            c = Math.ceil,
            h = Math.max;
        var l, f = (l = "length", function(t) { return null == t ? void 0 : t[l] });

        function p(t) { var n = m(t) ? u.call(t) : ""; return "[object Function]" == n || "[object GeneratorFunction]" == n }

        function m(t) { var n = typeof t; return !!t && ("object" == n || "function" == n) }

        function y(t) {
            return t ? (t = function(t) {
                if ("number" == typeof t) return t;
                if (function(t) { return "symbol" == typeof t || function(t) { return !!t && "object" == typeof t }(t) && "[object Symbol]" == u.call(t) }(t)) return NaN;
                if (m(t)) {
                    var n = p(t.valueOf) ? t.valueOf() : t;
                    t = m(n) ? n + "" : n
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(e, "");
                var a = i.test(t);
                return a || o.test(t) ? s(t.slice(2), a ? 2 : 8) : r.test(t) ? NaN : +t
            }(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
        }
        var d, v = function(t, n, e) {
            return e && "number" != typeof e && function(t, n, e) { if (!m(e)) return !1; var r = typeof n; return !!("number" == r ? function(t) { return null != t && function(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991 }(f(t)) && !p(t) }(e) && function(t, n) { return !!(n = null == n ? 9007199254740991 : n) && ("number" == typeof t || a.test(t)) && t > -1 && t % 1 == 0 && t < n }(n, e.length) : "string" == r && n in e) && function(t, n) { return t === n || t != t && n != n }(e[n], t) }(t, n, e) && (n = e = void 0), t = y(t), void 0 === n ? (n = t, t = 0) : n = y(n),
                function(t, n, e, r) { for (var i = -1, o = h(c((n - t) / (e || 1)), 0), a = Array(o); o--;) a[r ? o : ++i] = t, t += e; return a }(t, n, e = void 0 === e ? t < n ? 1 : -1 : y(e), d)
        };
        t.exports = v
    }, function(t, n, e) {
        "use strict";
        var r = e(18),
            i = e(57)();

        function o(t) {
            Object.keys(t).forEach((function(n) {
                var e = t[n];
                t[n] = i.factory(e)
            }))
        }
        t.exports = function(t) { return (new r).setDefs({ $$processScope: o }).parse(t).compile(i) }, t.exports.math = i
    }, function(t, n, e) {
        "use strict";
        var r = e(19).Parser,
            i = e(46),
            o = e(31);

        function a(t, n) { this.statements = [], this.defs = n || {}, this.interpreter = new i(this, t) }
        a.prototype.setDefs = function(t) { return this.defs = o(this.defs, t), this }, a.prototype.compile = function(t) {
            if (!t || "object" != typeof t && "function" != typeof t) throw TypeError("namespace must be an object");
            if ("function" != typeof t.factory) throw TypeError("namespace.factory must be a function");
            this.defs.ns = t, this.defs.$$mathCodegen = { getProperty: function(t, n, e) { if (t in n) return n[t]; if (t in e) return e[t]; throw SyntaxError('symbol "' + t + '" is undefined') }, functionProxy: function(t, n) { if ("function" != typeof t) throw SyntaxError('symbol "' + n + '" must be a function'); return t } }, this.defs.$$processScope = this.defs.$$processScope || function() {};
            var n = Object.keys(this.defs).map((function(t) { return "var " + t + ' = defs["' + t + '"]' }));
            if (!this.statements.length) throw Error("there are no statements saved in this generator, make sure you parse an expression before compiling it");
            this.statements[this.statements.length - 1] = "return " + this.statements[this.statements.length - 1];
            var e = this.statements.join(";"),
                r = n.join("\n") + "\n" + ["return {", "  eval: function (scope) {", "    scope = scope || {}", "    $$processScope(scope)", "    " + e, "  },", "  code: '" + e + "'", "}"].join("\n");
            return new Function("defs", r)(this.defs)
        }, a.prototype.parse = function(t) {
            var n = this,
                e = (new r).parse(t);
            return this.statements = e.blocks.map((function(t) { return n.interpreter.next(t) })), this
        }, t.exports = a
    }, function(t, n, e) {
        var r = e(21),
            i = e(20),
            o = e(22),
            a = e(23),
            s = e(24),
            u = e(25),
            c = e(26),
            h = e(27),
            l = e(28),
            f = e(29),
            p = e(30);

        function m() { this.lexer = new i, this.tokens = null }
        m.prototype.current = function() { return this.tokens[0] }, m.prototype.next = function() { return this.tokens[1] }, m.prototype.peek = function() {
            if (this.tokens.length)
                for (var t = this.tokens[0], n = 0; n < arguments.length; n += 1)
                    if (t.value === arguments[n]) return !0
        }, m.prototype.consume = function(t) { return this.tokens.shift() }, m.prototype.expect = function(t) { if (!this.peek(t)) throw Error("expected " + t); return this.consume() }, m.prototype.isEOF = function() { return this.current().type === r.EOF }, m.prototype.parse = function(t) { return this.tokens = this.lexer.lex(t), this.program() }, m.prototype.program = function() { for (var t = []; !this.isEOF();) t.push(this.assignment()), this.peek(";") && this.consume(); return this.end(), new p(t) }, m.prototype.assignment = function() { var t = this.ternary(); return t instanceof u && this.peek("=") ? (this.consume(), new f(t.name, this.assignment())) : t }, m.prototype.ternary = function() {
            var t = this.logicalOR();
            if (this.peek("?")) {
                this.consume();
                var n = this.ternary();
                this.expect(":");
                var e = this.ternary();
                return new l(t, n, e)
            }
            return t
        }, m.prototype.logicalOR = function() {
            var t = this.logicalXOR();
            if (this.peek("||")) {
                var n = this.consume(),
                    e = this.logicalOR();
                return new a(n.value, [t, e])
            }
            return t
        }, m.prototype.logicalXOR = function() {
            var t = this.logicalAND();
            if ("xor" === this.current().value) {
                var n = this.consume(),
                    e = this.logicalXOR();
                return new a(n.value, [t, e])
            }
            return t
        }, m.prototype.logicalAND = function() {
            var t = this.bitwiseOR();
            if (this.peek("&&")) {
                var n = this.consume(),
                    e = this.logicalAND();
                return new a(n.value, [t, e])
            }
            return t
        }, m.prototype.bitwiseOR = function() {
            var t = this.bitwiseXOR();
            if (this.peek("|")) {
                var n = this.consume(),
                    e = this.bitwiseOR();
                return new a(n.value, [t, e])
            }
            return t
        }, m.prototype.bitwiseXOR = function() {
            var t = this.bitwiseAND();
            if (this.peek("^|")) {
                var n = this.consume(),
                    e = this.bitwiseXOR();
                return new a(n.value, [t, e])
            }
            return t
        }, m.prototype.bitwiseAND = function() {
            var t = this.relational();
            if (this.peek("&")) {
                var n = this.consume(),
                    e = this.bitwiseAND();
                return new a(n.value, [t, e])
            }
            return t
        }, m.prototype.relational = function() {
            var t = this.shift();
            if (this.peek("==", "===", "!=", "!==", ">=", "<=", ">", "<")) {
                var n = this.consume(),
                    e = this.shift();
                return new a(n.value, [t, e])
            }
            return t
        }, m.prototype.shift = function() {
            var t = this.additive();
            if (this.peek(">>", "<<", ">>>")) {
                var n = this.consume(),
                    e = this.shift();
                return new a(n.value, [t, e])
            }
            return t
        }, m.prototype.additive = function() {
            for (var t = this.multiplicative(); this.peek("+", "-");) {
                var n = this.consume();
                t = new a(n.value, [t, this.multiplicative()])
            }
            return t
        }, m.prototype.multiplicative = function() { for (var t, n, e = this.unary(); this.peek("*", "/", "%");) t = this.consume(), e = new a(t.value, [e, this.unary()]); return this.current().type === r.SYMBOL || this.peek("(") || !(e.type instanceof o) && this.current().type === r.NUMBER ? (n = this.multiplicative(), new a("*", [e, n])) : e }, m.prototype.unary = function() {
            if (this.peek("-", "+", "~")) {
                var t = this.consume(),
                    n = this.unary();
                return new s(t.value, n)
            }
            return this.pow()
        }, m.prototype.pow = function() {
            var t = this.factorial();
            if (this.peek("^", "**")) {
                var n = this.consume(),
                    e = this.unary();
                return new a(n.value, [t, e])
            }
            return t
        }, m.prototype.factorial = function() { var t = this.symbol(); if (this.peek("!")) { var n = this.consume(); return new a(n.value, [t]) } return t }, m.prototype.symbol = function() { if (this.current().type === r.SYMBOL) { var t = this.consume(); return this.functionCall(t) } return this.string() }, m.prototype.functionCall = function(t) { var n = t.value; if (this.peek("(")) { this.consume(); for (var e = []; !this.peek(")") && !this.isEOF();) e.push(this.assignment()), this.peek(",") && this.consume(); return this.expect(")"), new c(n, e) } return new u(n) }, m.prototype.string = function() { return this.current().type === r.STRING ? new o(this.consume().value, "string") : this.array() }, m.prototype.array = function() { if (this.peek("[")) { this.consume(); for (var t = []; !this.peek("]") && !this.isEOF();) t.push(this.assignment()), this.peek(",") && this.consume(); return this.expect("]"), new h(t) } return this.number() }, m.prototype.number = function() { return this.current().type === r.NUMBER ? new o(this.consume().value, "number") : this.parentheses() }, m.prototype.parentheses = function() { if ("(" === this.current().value) { this.consume(); var t = this.assignment(); return this.expect(")"), t } return this.end() }, m.prototype.end = function() { if (this.current().type !== r.EOF) throw Error("unexpected end of expression") }, t.exports = m
    }, function(t, n, e) { t.exports = { ArrayNode: e(27), AssignmentNode: e(29), BlockNode: e(30), ConditionalNode: e(28), ConstantNode: e(22), FunctionNode: e(26), Node: e(2), OperatorNode: e(23), SymbolNode: e(25), UnaryNode: e(24) } }, function(t, n, e) {
        "use strict";
        var r = e(31),
            i = { ArrayNode: e(47), AssignmentNode: e(48), ConditionalNode: e(49), ConstantNode: e(50), FunctionNode: e(51), OperatorNode: e(52), SymbolNode: e(54), UnaryNode: e(55) },
            o = function(t, n) { this.owner = t, this.options = r({ factory: "ns.factory", raw: !1, rawArrayExpressionElements: !0, rawCallExpressionElements: !1 }, n) };
        r(o.prototype, i), o.prototype.next = function(t) { if (!(t.type in this)) throw new TypeError("the node type " + t.type + " is not implemented"); return this[t.type](t) }, o.prototype.rawify = function(t, n) {
            var e = this.options.raw;
            t && (this.options.raw = !0), n(), t && (this.options.raw = e)
        }, t.exports = o
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) {
            var n = this,
                e = [];
            this.rawify(this.options.rawArrayExpressionElements, (function() { e = t.nodes.map((function(t) { return n.next(t) })) }));
            var r = "[" + e.join(",") + "]";
            return this.options.raw ? r : this.options.factory + "(" + r + ")"
        }
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) { return 'scope["' + t.name + '"] = ' + this.next(t.expr) }
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) { return "(" + ("!!(" + this.next(t.condition) + ")") + " ? (" + this.next(t.trueExpr) + ") : (" + this.next(t.falseExpr) + ") )" }
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) { return this.options.raw ? t.value : this.options.factory + "(" + t.value + ")" }
    }, function(t, n, e) {
        "use strict";
        var r = e(19).nodeTypes.SymbolNode,
            i = function(t) { return "$$mathCodegen.functionProxy(" + this.next(new r(t.name)) + ', "' + t.name + '")' };
        t.exports = function(t) {
            var n = this,
                e = i.call(this, t),
                r = [];
            return this.rawify(this.options.rawCallExpressionElements, (function() { r = t.args.map((function(t) { return n.next(t) })) })), e + "(" + r.join(", ") + ")"
        }, t.exports.functionProxy = i
    }, function(t, n, e) {
        "use strict";
        var r = e(53);
        t.exports = function(t) { if (this.options.raw) return ["(" + this.next(t.args[0]), t.op, this.next(t.args[1]) + ")"].join(" "); var n = r[t.op]; if (!n) throw TypeError("unidentified operator"); return this.FunctionNode({ name: n, args: t.args }) }
    }, function(t, n, e) {
        "use strict";
        t.exports = { "+": "add", "-": "sub", "*": "mul", "/": "div", "^": "pow", "%": "mod", "!": "factorial", "|": "bitwiseOR", "^|": "bitwiseXOR", "&": "bitwiseAND", "||": "logicalOR", xor: "logicalXOR", "&&": "logicalAND", "<": "lessThan", ">": "greaterThan", "<=": "lessEqualThan", ">=": "greaterEqualThan", "===": "strictlyEqual", "==": "equal", "!==": "strictlyNotEqual", "!=": "notEqual", ">>": "shiftRight", "<<": "shiftLeft", ">>>": "unsignedRightShift" }
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) { return '$$mathCodegen.getProperty("' + t.name + '", scope, ns)' }
    }, function(t, n, e) {
        "use strict";
        var r = e(56);
        t.exports = function(t) { if (this.options.raw) return t.op + this.next(t.argument); if (!(t.op in r)) throw new SyntaxError(t.op + " not implemented"); var n = r[t.op]; return this.FunctionNode({ name: n, args: [t.argument] }) }
    }, function(t, n, e) {
        "use strict";
        t.exports = { "+": "positive", "-": "negative", "~": "oneComplement" }
    }, function(t, n, e) {
        "use strict";
        t.exports = function() { var t = Object.create(Math); return t.factory = function(t) { if ("number" != typeof t) throw new TypeError("built-in math factory only accepts numbers"); return Number(t) }, t.add = function(t, n) { return t + n }, t.sub = function(t, n) { return t - n }, t.mul = function(t, n) { return t * n }, t.div = function(t, n) { return t / n }, t.mod = function(t, n) { return t % n }, t.factorial = function(t) { for (var n = 1, e = 2; e <= t; e += 1) n *= e; return n }, t.nthRoot = function(t, n) { var e = n < 0; if (e && (n = -n), 0 === n) throw new Error("Root must be non-zero"); if (t < 0 && Math.abs(n) % 2 != 1) throw new Error("Root must be odd when a is negative."); if (0 === t) return 0; if (!isFinite(t)) return e ? 0 : t; var r = Math.pow(Math.abs(t), 1 / n); return r = t < 0 ? -r : r, e ? 1 / r : r }, t.logicalOR = function(t, n) { return t || n }, t.logicalXOR = function(t, n) { return t != n }, t.logicalAND = function(t, n) { return t && n }, t.bitwiseOR = function(t, n) { return t | n }, t.bitwiseXOR = function(t, n) { return t ^ n }, t.bitwiseAND = function(t, n) { return t & n }, t.lessThan = function(t, n) { return t < n }, t.lessEqualThan = function(t, n) { return t <= n }, t.greaterThan = function(t, n) { return t > n }, t.greaterEqualThan = function(t, n) { return t >= n }, t.equal = function(t, n) { return t == n }, t.strictlyEqual = function(t, n) { return t === n }, t.notEqual = function(t, n) { return t != n }, t.strictlyNotEqual = function(t, n) { return t !== n }, t.shiftRight = function(t, n) { return t >> n }, t.shiftLeft = function(t, n) { return t << n }, t.unsignedRightShift = function(t, n) { return t >>> n }, t.negative = function(t) { return -t }, t.positive = function(t) { return t }, t }
    }, function(t, n, e) {
        "use strict";
        var r = e(18),
            i = e(59);

        function o(t) { Object.keys(t).forEach((function(n) { var e = t[n]; "number" == typeof e || Array.isArray(e) ? t[n] = i.factory(e) : "object" == typeof e && "lo" in e && "hi" in e && (t[n] = i.factory(e.lo, e.hi)) })) }
        e(72)(i), t.exports = function(t) { return (new r).setDefs({ $$processScope: o }).parse(t).compile(i) }, t.exports.policies = e(73)(i), t.exports.Interval = i
    }, function(t, n, e) {
        "use strict";
        var r = e(32);
        e(60), t.exports = e(5), t.exports.rmath = e(4), t.exports.round = e(4), r(t.exports, e(7), e(67), e(12), e(33), e(71), e(34), e(3))
    }, function(t, n, e) {
        "use strict";
        Math.sinh = Math.sinh || function(t) { var n = Math.exp(t); return (n - 1 / n) / 2 }, Math.cosh = Math.cosh || function(t) { var n = Math.exp(t); return (n + 1 / n) / 2 }, Math.tanh = Math.tanh || function(t) { if (t === Number.POSITIVE_INFINITY) return 1; if (t === Number.NEGATIVE_INFINITY) return -1; var n = Math.exp(2 * t); return (n - 1) / (n + 1) }
    }, function(t, n, e) {
        "use strict";
        var r = e(62),
            i = Math.pow(2, -1074);
        t.exports = function(t, n) {
            if (isNaN(t) || isNaN(n)) return NaN;
            if (t === n) return t;
            if (0 === t) return n < 0 ? -i : i;
            var e = r.hi(t),
                o = r.lo(t);
            n > t == t > 0 ? o === -1 >>> 0 ? (e += 1, o = 0) : o += 1 : 0 === o ? (o = -1 >>> 0, e -= 1) : o -= 1;
            return r.pack(o, e)
        }
    }, function(t, n, e) {
        (function(n) {
            var e = !1;
            if ("undefined" != typeof Float64Array) {
                var r = new Float64Array(1),
                    i = new Uint32Array(r.buffer);
                if (r[0] = 1, e = !0, 1072693248 === i[1]) { t.exports = function(t) { return r[0] = t, [i[0], i[1]] }, t.exports.pack = function(t, n) { return i[0] = t, i[1] = n, r[0] }, t.exports.lo = function(t) { return r[0] = t, i[0] }, t.exports.hi = function(t) { return r[0] = t, i[1] } } else if (1072693248 === i[0]) { t.exports = function(t) { return r[0] = t, [i[1], i[0]] }, t.exports.pack = function(t, n) { return i[1] = t, i[0] = n, r[0] }, t.exports.lo = function(t) { return r[0] = t, i[1] }, t.exports.hi = function(t) { return r[0] = t, i[0] } } else e = !1
            }
            if (!e) {
                var o = new n(8);
                t.exports = function(t) { return o.writeDoubleLE(t, 0, !0), [o.readUInt32LE(0, !0), o.readUInt32LE(4, !0)] }, t.exports.pack = function(t, n) { return o.writeUInt32LE(t, 0, !0), o.writeUInt32LE(n, 4, !0), o.readDoubleLE(0, !0) }, t.exports.lo = function(t) { return o.writeDoubleLE(t, 0, !0), o.readUInt32LE(0, !0) }, t.exports.hi = function(t) { return o.writeDoubleLE(t, 0, !0), o.readUInt32LE(4, !0) }
            }
            t.exports.sign = function(n) { return t.exports.hi(n) >>> 31 }, t.exports.exponent = function(n) { return (t.exports.hi(n) << 1 >>> 21) - 1023 }, t.exports.fraction = function(n) {
                var e = t.exports.lo(n),
                    r = t.exports.hi(n),
                    i = 1048575 & r;
                return 2146435072 & r && (i += 1 << 20), [e, i]
            }, t.exports.denormalized = function(n) { return !(2146435072 & t.exports.hi(n)) }
        }).call(this, e(63).Buffer)
    }, function(t, n, e) {
        "use strict";
        (function(t) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <http://feross.org>
             * @license  MIT
             */
            var r = e(64),
                i = e(65),
                o = e(66);

            function a() { return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

            function s(t, n) { if (a() < n) throw new RangeError("Invalid typed array length"); return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(n)).__proto__ = u.prototype : (null === t && (t = new u(n)), t.length = n), t }

            function u(t, n, e) { if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, n, e); if ("number" == typeof t) { if ("string" == typeof n) throw new Error("If encoding is specified then the first argument must be a string"); return l(this, t) } return c(this, t, n, e) }

            function c(t, n, e, r) {
                if ("number" == typeof n) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && n instanceof ArrayBuffer ? function(t, n, e, r) {
                    if (n.byteLength, e < 0 || n.byteLength < e) throw new RangeError("'offset' is out of bounds");
                    if (n.byteLength < e + (r || 0)) throw new RangeError("'length' is out of bounds");
                    n = void 0 === e && void 0 === r ? new Uint8Array(n) : void 0 === r ? new Uint8Array(n, e) : new Uint8Array(n, e, r);
                    u.TYPED_ARRAY_SUPPORT ? (t = n).__proto__ = u.prototype : t = f(t, n);
                    return t
                }(t, n, e, r) : "string" == typeof n ? function(t, n, e) {
                    "string" == typeof e && "" !== e || (e = "utf8");
                    if (!u.isEncoding(e)) throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | m(n, e),
                        i = (t = s(t, r)).write(n, e);
                    i !== r && (t = t.slice(0, i));
                    return t
                }(t, n, e) : function(t, n) { if (u.isBuffer(n)) { var e = 0 | p(n.length); return 0 === (t = s(t, e)).length || n.copy(t, 0, 0, e), t } if (n) { if ("undefined" != typeof ArrayBuffer && n.buffer instanceof ArrayBuffer || "length" in n) return "number" != typeof n.length || (r = n.length) != r ? s(t, 0) : f(t, n); if ("Buffer" === n.type && o(n.data)) return f(t, n.data) } var r; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }(t, n)
            }

            function h(t) { if ("number" != typeof t) throw new TypeError('"size" argument must be a number'); if (t < 0) throw new RangeError('"size" argument must not be negative') }

            function l(t, n) {
                if (h(n), t = s(t, n < 0 ? 0 : 0 | p(n)), !u.TYPED_ARRAY_SUPPORT)
                    for (var e = 0; e < n; ++e) t[e] = 0;
                return t
            }

            function f(t, n) {
                var e = n.length < 0 ? 0 : 0 | p(n.length);
                t = s(t, e);
                for (var r = 0; r < e; r += 1) t[r] = 255 & n[r];
                return t
            }

            function p(t) { if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes"); return 0 | t }

            function m(t, n) {
                if (u.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var e = t.length;
                if (0 === e) return 0;
                for (var r = !1;;) switch (n) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return e;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return B(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * e;
                    case "hex":
                        return e >>> 1;
                    case "base64":
                        return U(t).length;
                    default:
                        if (r) return B(t).length;
                        n = ("" + n).toLowerCase(), r = !0
                }
            }

            function y(t, n, e) {
                var r = !1;
                if ((void 0 === n || n < 0) && (n = 0), n > this.length) return "";
                if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
                if ((e >>>= 0) <= (n >>>= 0)) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return S(this, n, e);
                    case "utf8":
                    case "utf-8":
                        return T(this, n, e);
                    case "ascii":
                        return k(this, n, e);
                    case "latin1":
                    case "binary":
                        return I(this, n, e);
                    case "base64":
                        return A(this, n, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return N(this, n, e);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0
                }
            }

            function d(t, n, e) {
                var r = t[n];
                t[n] = t[e], t[e] = r
            }

            function v(t, n, e, r, i) {
                if (0 === t.length) return -1;
                if ("string" == typeof e ? (r = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
                    if (i) return -1;
                    e = t.length - 1
                } else if (e < 0) {
                    if (!i) return -1;
                    e = 0
                }
                if ("string" == typeof n && (n = u.from(n, r)), u.isBuffer(n)) return 0 === n.length ? -1 : g(t, n, e, r, i);
                if ("number" == typeof n) return n &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, n, e) : Uint8Array.prototype.lastIndexOf.call(t, n, e) : g(t, [n], e, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function g(t, n, e, r, i) {
                var o, a = 1,
                    s = t.length,
                    u = n.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (t.length < 2 || n.length < 2) return -1;
                    a = 2, s /= 2, u /= 2, e /= 2
                }

                function c(t, n) { return 1 === a ? t[n] : t.readUInt16BE(n * a) }
                if (i) {
                    var h = -1;
                    for (o = e; o < s; o++)
                        if (c(t, o) === c(n, -1 === h ? 0 : o - h)) { if (-1 === h && (h = o), o - h + 1 === u) return h * a } else -1 !== h && (o -= o - h), h = -1
                } else
                    for (e + u > s && (e = s - u), o = e; o >= 0; o--) {
                        for (var l = !0, f = 0; f < u; f++)
                            if (c(t, o + f) !== c(n, f)) { l = !1; break }
                        if (l) return o
                    }
                return -1
            }

            function w(t, n, e, r) {
                e = Number(e) || 0;
                var i = t.length - e;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                var o = n.length;
                if (o % 2 != 0) throw new TypeError("Invalid hex string");
                r > o / 2 && (r = o / 2);
                for (var a = 0; a < r; ++a) {
                    var s = parseInt(n.substr(2 * a, 2), 16);
                    if (isNaN(s)) return a;
                    t[e + a] = s
                }
                return a
            }

            function x(t, n, e, r) { return F(B(n, t.length - e), t, e, r) }

            function _(t, n, e, r) { return F(function(t) { for (var n = [], e = 0; e < t.length; ++e) n.push(255 & t.charCodeAt(e)); return n }(n), t, e, r) }

            function b(t, n, e, r) { return _(t, n, e, r) }

            function E(t, n, e, r) { return F(U(n), t, e, r) }

            function M(t, n, e, r) { return F(function(t, n) { for (var e, r, i, o = [], a = 0; a < t.length && !((n -= 2) < 0); ++a) e = t.charCodeAt(a), r = e >> 8, i = e % 256, o.push(i), o.push(r); return o }(n, t.length - e), t, e, r) }

            function A(t, n, e) { return 0 === n && e === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(n, e)) }

            function T(t, n, e) {
                e = Math.min(t.length, e);
                for (var r = [], i = n; i < e;) {
                    var o, a, s, u, c = t[i],
                        h = null,
                        l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (i + l <= e) switch (l) {
                        case 1:
                            c < 128 && (h = c);
                            break;
                        case 2:
                            128 == (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (h = u);
                            break;
                        case 3:
                            o = t[i + 1], a = t[i + 2], 128 == (192 & o) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (h = u);
                            break;
                        case 4:
                            o = t[i + 1], a = t[i + 2], s = t[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (h = u)
                    }
                    null === h ? (h = 65533, l = 1) : h > 65535 && (h -= 65536, r.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), r.push(h), i += l
                }
                return function(t) {
                    var n = t.length;
                    if (n <= 4096) return String.fromCharCode.apply(String, t);
                    var e = "",
                        r = 0;
                    for (; r < n;) e += String.fromCharCode.apply(String, t.slice(r, r += 4096));
                    return e
                }(r)
            }
            n.Buffer = u, n.SlowBuffer = function(t) {+t != t && (t = 0); return u.alloc(+t) }, n.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() { try { var t = new Uint8Array(1); return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength } catch (t) { return !1 } }(), n.kMaxLength = a(), u.poolSize = 8192, u._augment = function(t) { return t.__proto__ = u.prototype, t }, u.from = function(t, n, e) { return c(null, t, n, e) }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: !0 })), u.alloc = function(t, n, e) { return function(t, n, e, r) { return h(n), n <= 0 ? s(t, n) : void 0 !== e ? "string" == typeof r ? s(t, n).fill(e, r) : s(t, n).fill(e) : s(t, n) }(null, t, n, e) }, u.allocUnsafe = function(t) { return l(null, t) }, u.allocUnsafeSlow = function(t) { return l(null, t) }, u.isBuffer = function(t) { return !(null == t || !t._isBuffer) }, u.compare = function(t, n) {
                if (!u.isBuffer(t) || !u.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
                if (t === n) return 0;
                for (var e = t.length, r = n.length, i = 0, o = Math.min(e, r); i < o; ++i)
                    if (t[i] !== n[i]) { e = t[i], r = n[i]; break }
                return e < r ? -1 : r < e ? 1 : 0
            }, u.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, u.concat = function(t, n) {
                if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return u.alloc(0);
                var e;
                if (void 0 === n)
                    for (n = 0, e = 0; e < t.length; ++e) n += t[e].length;
                var r = u.allocUnsafe(n),
                    i = 0;
                for (e = 0; e < t.length; ++e) {
                    var a = t[e];
                    if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(r, i), i += a.length
                }
                return r
            }, u.byteLength = m, u.prototype._isBuffer = !0, u.prototype.swap16 = function() { var t = this.length; if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var n = 0; n < t; n += 2) d(this, n, n + 1); return this }, u.prototype.swap32 = function() { var t = this.length; if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var n = 0; n < t; n += 4) d(this, n, n + 3), d(this, n + 1, n + 2); return this }, u.prototype.swap64 = function() { var t = this.length; if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var n = 0; n < t; n += 8) d(this, n, n + 7), d(this, n + 1, n + 6), d(this, n + 2, n + 5), d(this, n + 3, n + 4); return this }, u.prototype.toString = function() { var t = 0 | this.length; return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : y.apply(this, arguments) }, u.prototype.equals = function(t) { if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); return this === t || 0 === u.compare(this, t) }, u.prototype.inspect = function() {
                var t = "",
                    e = n.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (t += " ... ")), "<Buffer " + t + ">"
            }, u.prototype.compare = function(t, n, e, r, i) {
                if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === n && (n = 0), void 0 === e && (e = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), n < 0 || e > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                if (r >= i && n >= e) return 0;
                if (r >= i) return -1;
                if (n >= e) return 1;
                if (this === t) return 0;
                for (var o = (i >>>= 0) - (r >>>= 0), a = (e >>>= 0) - (n >>>= 0), s = Math.min(o, a), c = this.slice(r, i), h = t.slice(n, e), l = 0; l < s; ++l)
                    if (c[l] !== h[l]) { o = c[l], a = h[l]; break }
                return o < a ? -1 : a < o ? 1 : 0
            }, u.prototype.includes = function(t, n, e) { return -1 !== this.indexOf(t, n, e) }, u.prototype.indexOf = function(t, n, e) { return v(this, t, n, e, !0) }, u.prototype.lastIndexOf = function(t, n, e) { return v(this, t, n, e, !1) }, u.prototype.write = function(t, n, e, r) {
                if (void 0 === n) r = "utf8", e = this.length, n = 0;
                else if (void 0 === e && "string" == typeof n) r = n, e = this.length, n = 0;
                else {
                    if (!isFinite(n)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    n |= 0, isFinite(e) ? (e |= 0, void 0 === r && (r = "utf8")) : (r = e, e = void 0)
                }
                var i = this.length - n;
                if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var o = !1;;) switch (r) {
                    case "hex":
                        return w(this, t, n, e);
                    case "utf8":
                    case "utf-8":
                        return x(this, t, n, e);
                    case "ascii":
                        return _(this, t, n, e);
                    case "latin1":
                    case "binary":
                        return b(this, t, n, e);
                    case "base64":
                        return E(this, t, n, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return M(this, t, n, e);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), o = !0
                }
            }, u.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };

            function k(t, n, e) {
                var r = "";
                e = Math.min(t.length, e);
                for (var i = n; i < e; ++i) r += String.fromCharCode(127 & t[i]);
                return r
            }

            function I(t, n, e) {
                var r = "";
                e = Math.min(t.length, e);
                for (var i = n; i < e; ++i) r += String.fromCharCode(t[i]);
                return r
            }

            function S(t, n, e) {
                var r = t.length;
                (!n || n < 0) && (n = 0), (!e || e < 0 || e > r) && (e = r);
                for (var i = "", o = n; o < e; ++o) i += z(t[o]);
                return i
            }

            function N(t, n, e) { for (var r = t.slice(n, e), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]); return i }

            function L(t, n, e) { if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint"); if (t + n > e) throw new RangeError("Trying to access beyond buffer length") }

            function P(t, n, e, r, i, o) { if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (n > i || n < o) throw new RangeError('"value" argument is out of bounds'); if (e + r > t.length) throw new RangeError("Index out of range") }

            function O(t, n, e, r) { n < 0 && (n = 65535 + n + 1); for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i) t[e + i] = (n & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i) }

            function R(t, n, e, r) { n < 0 && (n = 4294967295 + n + 1); for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i) t[e + i] = n >>> 8 * (r ? i : 3 - i) & 255 }

            function H(t, n, e, r, i, o) { if (e + r > t.length) throw new RangeError("Index out of range"); if (e < 0) throw new RangeError("Index out of range") }

            function Y(t, n, e, r, o) { return o || H(t, 0, e, 4), i.write(t, n, e, r, 23, 4), e + 4 }

            function j(t, n, e, r, o) { return o || H(t, 0, e, 8), i.write(t, n, e, r, 52, 8), e + 8 }
            u.prototype.slice = function(t, n) {
                var e, r = this.length;
                if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), n < t && (n = t), u.TYPED_ARRAY_SUPPORT)(e = this.subarray(t, n)).__proto__ = u.prototype;
                else {
                    var i = n - t;
                    e = new u(i, void 0);
                    for (var o = 0; o < i; ++o) e[o] = this[o + t]
                }
                return e
            }, u.prototype.readUIntLE = function(t, n, e) { t |= 0, n |= 0, e || L(t, n, this.length); for (var r = this[t], i = 1, o = 0; ++o < n && (i *= 256);) r += this[t + o] * i; return r }, u.prototype.readUIntBE = function(t, n, e) { t |= 0, n |= 0, e || L(t, n, this.length); for (var r = this[t + --n], i = 1; n > 0 && (i *= 256);) r += this[t + --n] * i; return r }, u.prototype.readUInt8 = function(t, n) { return n || L(t, 1, this.length), this[t] }, u.prototype.readUInt16LE = function(t, n) { return n || L(t, 2, this.length), this[t] | this[t + 1] << 8 }, u.prototype.readUInt16BE = function(t, n) { return n || L(t, 2, this.length), this[t] << 8 | this[t + 1] }, u.prototype.readUInt32LE = function(t, n) { return n || L(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3] }, u.prototype.readUInt32BE = function(t, n) { return n || L(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]) }, u.prototype.readIntLE = function(t, n, e) { t |= 0, n |= 0, e || L(t, n, this.length); for (var r = this[t], i = 1, o = 0; ++o < n && (i *= 256);) r += this[t + o] * i; return r >= (i *= 128) && (r -= Math.pow(2, 8 * n)), r }, u.prototype.readIntBE = function(t, n, e) { t |= 0, n |= 0, e || L(t, n, this.length); for (var r = n, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i; return o >= (i *= 128) && (o -= Math.pow(2, 8 * n)), o }, u.prototype.readInt8 = function(t, n) { return n || L(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t] }, u.prototype.readInt16LE = function(t, n) { n || L(t, 2, this.length); var e = this[t] | this[t + 1] << 8; return 32768 & e ? 4294901760 | e : e }, u.prototype.readInt16BE = function(t, n) { n || L(t, 2, this.length); var e = this[t + 1] | this[t] << 8; return 32768 & e ? 4294901760 | e : e }, u.prototype.readInt32LE = function(t, n) { return n || L(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24 }, u.prototype.readInt32BE = function(t, n) { return n || L(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3] }, u.prototype.readFloatLE = function(t, n) { return n || L(t, 4, this.length), i.read(this, t, !0, 23, 4) }, u.prototype.readFloatBE = function(t, n) { return n || L(t, 4, this.length), i.read(this, t, !1, 23, 4) }, u.prototype.readDoubleLE = function(t, n) { return n || L(t, 8, this.length), i.read(this, t, !0, 52, 8) }, u.prototype.readDoubleBE = function(t, n) { return n || L(t, 8, this.length), i.read(this, t, !1, 52, 8) }, u.prototype.writeUIntLE = function(t, n, e, r) {
                (t = +t, n |= 0, e |= 0, r) || P(this, t, n, e, Math.pow(2, 8 * e) - 1, 0);
                var i = 1,
                    o = 0;
                for (this[n] = 255 & t; ++o < e && (i *= 256);) this[n + o] = t / i & 255;
                return n + e
            }, u.prototype.writeUIntBE = function(t, n, e, r) {
                (t = +t, n |= 0, e |= 0, r) || P(this, t, n, e, Math.pow(2, 8 * e) - 1, 0);
                var i = e - 1,
                    o = 1;
                for (this[n + i] = 255 & t; --i >= 0 && (o *= 256);) this[n + i] = t / o & 255;
                return n + e
            }, u.prototype.writeUInt8 = function(t, n, e) { return t = +t, n |= 0, e || P(this, t, n, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[n] = 255 & t, n + 1 }, u.prototype.writeUInt16LE = function(t, n, e) { return t = +t, n |= 0, e || P(this, t, n, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : O(this, t, n, !0), n + 2 }, u.prototype.writeUInt16BE = function(t, n, e) { return t = +t, n |= 0, e || P(this, t, n, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : O(this, t, n, !1), n + 2 }, u.prototype.writeUInt32LE = function(t, n, e) { return t = +t, n |= 0, e || P(this, t, n, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : R(this, t, n, !0), n + 4 }, u.prototype.writeUInt32BE = function(t, n, e) { return t = +t, n |= 0, e || P(this, t, n, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : R(this, t, n, !1), n + 4 }, u.prototype.writeIntLE = function(t, n, e, r) {
                if (t = +t, n |= 0, !r) {
                    var i = Math.pow(2, 8 * e - 1);
                    P(this, t, n, e, i - 1, -i)
                }
                var o = 0,
                    a = 1,
                    s = 0;
                for (this[n] = 255 & t; ++o < e && (a *= 256);) t < 0 && 0 === s && 0 !== this[n + o - 1] && (s = 1), this[n + o] = (t / a >> 0) - s & 255;
                return n + e
            }, u.prototype.writeIntBE = function(t, n, e, r) {
                if (t = +t, n |= 0, !r) {
                    var i = Math.pow(2, 8 * e - 1);
                    P(this, t, n, e, i - 1, -i)
                }
                var o = e - 1,
                    a = 1,
                    s = 0;
                for (this[n + o] = 255 & t; --o >= 0 && (a *= 256);) t < 0 && 0 === s && 0 !== this[n + o + 1] && (s = 1), this[n + o] = (t / a >> 0) - s & 255;
                return n + e
            }, u.prototype.writeInt8 = function(t, n, e) { return t = +t, n |= 0, e || P(this, t, n, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[n] = 255 & t, n + 1 }, u.prototype.writeInt16LE = function(t, n, e) { return t = +t, n |= 0, e || P(this, t, n, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : O(this, t, n, !0), n + 2 }, u.prototype.writeInt16BE = function(t, n, e) { return t = +t, n |= 0, e || P(this, t, n, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : O(this, t, n, !1), n + 2 }, u.prototype.writeInt32LE = function(t, n, e) { return t = +t, n |= 0, e || P(this, t, n, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : R(this, t, n, !0), n + 4 }, u.prototype.writeInt32BE = function(t, n, e) { return t = +t, n |= 0, e || P(this, t, n, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : R(this, t, n, !1), n + 4 }, u.prototype.writeFloatLE = function(t, n, e) { return Y(this, t, n, !0, e) }, u.prototype.writeFloatBE = function(t, n, e) { return Y(this, t, n, !1, e) }, u.prototype.writeDoubleLE = function(t, n, e) { return j(this, t, n, !0, e) }, u.prototype.writeDoubleBE = function(t, n, e) { return j(this, t, n, !1, e) }, u.prototype.copy = function(t, n, e, r) {
                if (e || (e = 0), r || 0 === r || (r = this.length), n >= t.length && (n = t.length), n || (n = 0), r > 0 && r < e && (r = e), r === e) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (n < 0) throw new RangeError("targetStart out of bounds");
                if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - n < r - e && (r = t.length - n + e);
                var i, o = r - e;
                if (this === t && e < n && n < r)
                    for (i = o - 1; i >= 0; --i) t[i + n] = this[i + e];
                else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i) t[i + n] = this[i + e];
                else Uint8Array.prototype.set.call(t, this.subarray(e, e + o), n);
                return o
            }, u.prototype.fill = function(t, n, e, r) {
                if ("string" == typeof t) {
                    if ("string" == typeof n ? (r = n, n = 0, e = this.length) : "string" == typeof e && (r = e, e = this.length), 1 === t.length) {
                        var i = t.charCodeAt(0);
                        i < 256 && (t = i)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof t && (t &= 255);
                if (n < 0 || this.length < n || this.length < e) throw new RangeError("Out of range index");
                if (e <= n) return this;
                var o;
                if (n >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t)
                    for (o = n; o < e; ++o) this[o] = t;
                else {
                    var a = u.isBuffer(t) ? t : B(new u(t, r).toString()),
                        s = a.length;
                    for (o = 0; o < e - n; ++o) this[o + n] = a[o % s]
                }
                return this
            };
            var C = /[^+\/0-9A-Za-z-_]/g;

            function z(t) { return t < 16 ? "0" + t.toString(16) : t.toString(16) }

            function B(t, n) {
                var e;
                n = n || 1 / 0;
                for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
                    if ((e = t.charCodeAt(a)) > 55295 && e < 57344) {
                        if (!i) {
                            if (e > 56319) {
                                (n -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === r) {
                                (n -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = e;
                            continue
                        }
                        if (e < 56320) {
                            (n -= 3) > -1 && o.push(239, 191, 189), i = e;
                            continue
                        }
                        e = 65536 + (i - 55296 << 10 | e - 56320)
                    } else i && (n -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, e < 128) {
                        if ((n -= 1) < 0) break;
                        o.push(e)
                    } else if (e < 2048) {
                        if ((n -= 2) < 0) break;
                        o.push(e >> 6 | 192, 63 & e | 128)
                    } else if (e < 65536) {
                        if ((n -= 3) < 0) break;
                        o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                    } else {
                        if (!(e < 1114112)) throw new Error("Invalid code point");
                        if ((n -= 4) < 0) break;
                        o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                    }
                }
                return o
            }

            function U(t) { return r.toByteArray(function(t) { if ((t = function(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }(t).replace(C, "")).length < 2) return ""; for (; t.length % 4 != 0;) t += "="; return t }(t)) }

            function F(t, n, e, r) { for (var i = 0; i < r && !(i + e >= n.length || i >= t.length); ++i) n[i + e] = t[i]; return i }
        }).call(this, e(17))
    }, function(t, n, e) {
        "use strict";
        n.byteLength = function(t) {
            var n = c(t),
                e = n[0],
                r = n[1];
            return 3 * (e + r) / 4 - r
        }, n.toByteArray = function(t) {
            for (var n, e = c(t), r = e[0], a = e[1], s = new o(function(t, n, e) { return 3 * (n + e) / 4 - e }(0, r, a)), u = 0, h = a > 0 ? r - 4 : r, l = 0; l < h; l += 4) n = i[t.charCodeAt(l)] << 18 | i[t.charCodeAt(l + 1)] << 12 | i[t.charCodeAt(l + 2)] << 6 | i[t.charCodeAt(l + 3)], s[u++] = n >> 16 & 255, s[u++] = n >> 8 & 255, s[u++] = 255 & n;
            2 === a && (n = i[t.charCodeAt(l)] << 2 | i[t.charCodeAt(l + 1)] >> 4, s[u++] = 255 & n);
            1 === a && (n = i[t.charCodeAt(l)] << 10 | i[t.charCodeAt(l + 1)] << 4 | i[t.charCodeAt(l + 2)] >> 2, s[u++] = n >> 8 & 255, s[u++] = 255 & n);
            return s
        }, n.fromByteArray = function(t) {
            for (var n, e = t.length, i = e % 3, o = [], a = 0, s = e - i; a < s; a += 16383) o.push(h(t, a, a + 16383 > s ? s : a + 16383));
            1 === i ? (n = t[e - 1], o.push(r[n >> 2] + r[n << 4 & 63] + "==")) : 2 === i && (n = (t[e - 2] << 8) + t[e - 1], o.push(r[n >> 10] + r[n >> 4 & 63] + r[n << 2 & 63] + "="));
            return o.join("")
        };
        for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) r[s] = a[s], i[a.charCodeAt(s)] = s;

        function c(t) { var n = t.length; if (n % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var e = t.indexOf("="); return -1 === e && (e = n), [e, e === n ? 0 : 4 - e % 4] }

        function h(t, n, e) { for (var i, o, a = [], s = n; s < e; s += 3) i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), a.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]); return a.join("") }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
    }, function(t, n) {
        n.read = function(t, n, e, r, i) {
            var o, a, s = 8 * i - r - 1,
                u = (1 << s) - 1,
                c = u >> 1,
                h = -7,
                l = e ? i - 1 : 0,
                f = e ? -1 : 1,
                p = t[n + l];
            for (l += f, o = p & (1 << -h) - 1, p >>= -h, h += s; h > 0; o = 256 * o + t[n + l], l += f, h -= 8);
            for (a = o & (1 << -h) - 1, o >>= -h, h += r; h > 0; a = 256 * a + t[n + l], l += f, h -= 8);
            if (0 === o) o = 1 - c;
            else {
                if (o === u) return a ? NaN : 1 / 0 * (p ? -1 : 1);
                a += Math.pow(2, r), o -= c
            }
            return (p ? -1 : 1) * a * Math.pow(2, o - r)
        }, n.write = function(t, n, e, r, i, o) {
            var a, s, u, c = 8 * o - i - 1,
                h = (1 << c) - 1,
                l = h >> 1,
                f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = r ? 0 : o - 1,
                m = r ? 1 : -1,
                y = n < 0 || 0 === n && 1 / n < 0 ? 1 : 0;
            for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (s = isNaN(n) ? 1 : 0, a = h) : (a = Math.floor(Math.log(n) / Math.LN2), n * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (n += a + l >= 1 ? f / u : f * Math.pow(2, 1 - l)) * u >= 2 && (a++, u /= 2), a + l >= h ? (s = 0, a = h) : a + l >= 1 ? (s = (n * u - 1) * Math.pow(2, i), a += l) : (s = n * Math.pow(2, l - 1) * Math.pow(2, i), a = 0)); i >= 8; t[e + p] = 255 & s, p += m, s /= 256, i -= 8);
            for (a = a << i | s, c += i; c > 0; t[e + p] = 255 & a, p += m, a /= 256, c -= 8);
            t[e + p - m] |= 128 * y
        }
    }, function(t, n) {
        var e = {}.toString;
        t.exports = Array.isArray || function(t) { return "[object Array]" == e.call(t) }
    }, function(t, n, e) {
        "use strict";
        var r = e(3),
            i = { equal: function(t, n) { return r.isEmpty(t) ? r.isEmpty(n) : !r.isEmpty(n) && t.lo === n.lo && t.hi === n.hi } };

        function o(t, n) { if (!t) throw new Error(n || "assertion failed") }

        function a(t, n) {
            if (!isFinite(t)) return o(t === n, "[Infinity] expected " + t + " to be " + n);
            o(Math.abs(t - n) < 1e-7, "expected " + t + " to be close to " + n)
        }
        i.almostEqual = function(t, n) { t = Array.isArray(t) ? t : t.toArray(), n = Array.isArray(n) ? n : n.toArray(), a(t[0], n[0]), a(t[1], n[1]) }, i.assertIncludes = function(t, n) { i.almostEqual(t, n), t = Array.isArray(t) ? t : t.toArray(), n = Array.isArray(n) ? n : n.toArray(), o(t[0] <= n[0], t[0] + " should be less/equal than " + n[0]), o(n[1] <= t[1], n[1] + " should be less/equal than " + t[1]) }, i.notEqual = function(t, n) { return r.isEmpty(t) ? !r.isEmpty(n) : r.isEmpty(n) || t.hi < n.lo || t.lo > n.hi }, i.lessThan = function(t, n) { return !r.isEmpty(t) && !r.isEmpty(n) && t.hi < n.lo }, i.lt = i.lessThan, i.greaterThan = function(t, n) { return !r.isEmpty(t) && !r.isEmpty(n) && t.lo > n.hi }, i.gt = i.greaterThan, i.lessEqualThan = function(t, n) { return !r.isEmpty(t) && !r.isEmpty(n) && t.hi <= n.lo }, i.leq = i.lessEqualThan, i.greaterEqualThan = function(t, n) { return !r.isEmpty(t) && !r.isEmpty(n) && t.lo >= n.hi }, i.geq = i.greaterEqualThan, t.exports = i
    }, function(t, n, e) {
        "use strict";
        var r = e(5),
            i = e(4),
            o = e(3),
            a = e(7),
            s = {
                nonZero: function(t, n) {
                    var e = t.lo,
                        o = t.hi,
                        a = n.lo,
                        s = n.hi,
                        u = r();
                    return o < 0 ? s < 0 ? (u.lo = i.divLo(o, a), u.hi = i.divHi(e, s)) : (u.lo = i.divLo(e, a), u.hi = i.divHi(o, s)) : e < 0 ? s < 0 ? (u.lo = i.divLo(o, s), u.hi = i.divHi(e, s)) : (u.lo = i.divLo(e, a), u.hi = i.divHi(o, a)) : s < 0 ? (u.lo = i.divLo(o, s), u.hi = i.divHi(e, a)) : (u.lo = i.divLo(e, s), u.hi = i.divHi(o, a)), u
                },
                positive: function(t, n) { return 0 === t.lo && 0 === t.hi ? t : o.zeroIn(t) ? a.WHOLE : t.hi < 0 ? r(Number.NEGATIVE_INFINITY, i.divHi(t.hi, n)) : r(i.divLo(t.lo, n), Number.POSITIVE_INFINITY) },
                negative: function(t, n) { return 0 === t.lo && 0 === t.hi ? t : o.zeroIn(t) ? a.WHOLE : t.hi < 0 ? r(i.divLo(t.hi, n), Number.POSITIVE_INFINITY) : r(Number.NEGATIVE_INFINITY, i.divHi(t.lo, n)) },
                zero: function(t) { return 0 === t.lo && 0 === t.hi ? t : a.WHOLE }
            };
        t.exports = s
    }, function(t, n, e) {
        "use strict";
        var r = e(70);
        t.exports = Number.isSafeInteger || function(t) { return "number" == typeof t && t == t && t !== 1 / 0 && t !== -1 / 0 && parseInt(t, 10) === t && Math.abs(t) <= r }
    }, function(t, n, e) {
        "use strict";
        t.exports = 9007199254740991
    }, function(t, n, e) {
        "use strict";
        var r = e(7),
            i = e(5),
            o = e(4),
            a = e(3),
            s = e(34),
            u = e(33),
            c = e(12),
            h = {};

        function l(t) { return !isFinite(t.lo) && t.lo === t.hi }

        function f(t) {
            if (t.lo < 0)
                if (t.lo === -1 / 0) t.lo = 0, t.hi = 1 / 0;
                else {
                    var n = Math.ceil(-t.lo / r.PI_TWICE_LOW);
                    t.lo += r.PI_TWICE_LOW * n, t.hi += r.PI_TWICE_LOW * n
                }
            return t
        }
        h.cos = function(t) {
            var n, e;
            if (a.isEmpty(t) || l(t)) return r.EMPTY;
            var p = i();
            p.set(t.lo, t.hi), f(p);
            var m = r.PI_TWICE,
                y = u.fmod(p, m);
            if (s.width(y) >= m.lo) return i(-1, 1);
            if (y.lo >= r.PI_HIGH) { var d = h.cos(c.sub(y, r.PI)); return c.negative(d) }
            var v = y.lo,
                g = y.hi;
            return n = o.cosLo(g), e = o.cosHi(v), g <= r.PI_LOW ? i(n, e) : g <= m.lo ? i(-1, Math.max(n, e)) : i(-1, 1)
        }, h.sin = function(t) { return a.isEmpty(t) || l(t) ? r.EMPTY : h.cos(c.sub(t, r.PI_HALF)) }, h.tan = function(t) {
            if (a.isEmpty(t) || l(t)) return r.EMPTY;
            var n = i();
            n.set(t.lo, t.hi), f(n);
            var e = r.PI,
                s = u.fmod(n, e);
            return s.lo >= r.PI_HALF_LOW && (s = c.sub(s, e)), s.lo <= -r.PI_HALF_LOW || s.hi >= r.PI_HALF_LOW ? r.WHOLE : i(o.tanLo(s.lo), o.tanHi(s.hi))
        }, h.asin = function(t) {
            if (a.isEmpty(t) || t.hi < -1 || t.lo > 1) return r.EMPTY;
            var n = t.lo <= -1 ? -r.PI_HALF_HIGH : o.asinLo(t.lo),
                e = t.hi >= 1 ? r.PI_HALF_HIGH : o.asinHi(t.hi);
            return i(n, e)
        }, h.acos = function(t) {
            if (a.isEmpty(t) || t.hi < -1 || t.lo > 1) return r.EMPTY;
            var n = t.hi >= 1 ? 0 : o.acosLo(t.hi),
                e = t.lo <= -1 ? r.PI_HIGH : o.acosHi(t.lo);
            return i(n, e)
        }, h.atan = function(t) { return a.isEmpty(t) ? r.EMPTY : i(o.atanLo(t.lo), o.atanHi(t.hi)) }, h.sinh = function(t) { return a.isEmpty(t) ? r.EMPTY : i(o.sinhLo(t.lo), o.sinhHi(t.hi)) }, h.cosh = function(t) { return a.isEmpty(t) ? r.EMPTY : t.hi < 0 ? i(o.coshLo(t.hi), o.coshHi(t.lo)) : t.lo >= 0 ? i(o.coshLo(t.lo), o.coshHi(t.hi)) : i(1, o.coshHi(-t.lo > t.hi ? t.lo : t.hi)) }, h.tanh = function(t) { return a.isEmpty(t) ? r.EMPTY : i(o.tanhLo(t.lo), o.tanhHi(t.hi)) }, t.exports = h
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) { t.mod = t.fmod, t.lessThan = t.lt, t.lessEqualThan = t.leq, t.greaterThan = t.gt, t.greaterEqualThan = t.geq, t.strictlyEqual = t.equal, t.strictlyNotEqual = t.notEqual, t.logicalAND = function(t, n) { return t && n }, t.logicalXOR = function(t, n) { return t ^ n }, t.logicalOR = function(t, n) { return t || n } }
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) { return { disableRounding: function() { t.rmath.disable() }, enableRounding: function() { t.rmath.enable() } } }
    }, function(t, n) {
        ! function(t, n) {
            try { t.querySelector(":scope body") } catch (e) {
                ["querySelector", "querySelectorAll"].forEach((function(e) {
                    var r = n[e];
                    n[e] = function(n) {
                        if (/(^|,)\s*:scope/.test(n)) {
                            var i = this.id;
                            this.id = "ID_" + Date.now(), n = n.replace(/((^|,)\s*):scope/g, "$1#" + this.id);
                            var o = t[e](n);
                            return this.id = i, o
                        }
                        return r.call(this, n)
                    }
                }))
            }
        }(window.document, Element.prototype)
    }, function(t, n, e) {
        "use strict";
        e.r(n);
        var r = {};
        e.r(r), e.d(r, "polyline", (function() { return Hi })), e.d(r, "interval", (function() { return zi })), e.d(r, "scatter", (function() { return Bi }));
        const i = Math.PI,
            o = 2 * i,
            a = o - 1e-6;

        function s() { this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "" }

        function u() { return new s }
        s.prototype = u.prototype = {
            constructor: s,
            moveTo: function(t, n) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) },
            closePath: function() { null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z") },
            lineTo: function(t, n) { this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n) },
            quadraticCurveTo: function(t, n, e, r) { this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r) },
            bezierCurveTo: function(t, n, e, r, i, o) { this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o) },
            arcTo: function(t, n, e, r, o) {
                t = +t, n = +n, e = +e, r = +r, o = +o;
                var a = this._x1,
                    s = this._y1,
                    u = e - t,
                    c = r - n,
                    h = a - t,
                    l = s - n,
                    f = h * h + l * l;
                if (o < 0) throw new Error("negative radius: " + o);
                if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
                else if (f > 1e-6)
                    if (Math.abs(l * u - c * h) > 1e-6 && o) {
                        var p = e - a,
                            m = r - s,
                            y = u * u + c * c,
                            d = p * p + m * m,
                            v = Math.sqrt(y),
                            g = Math.sqrt(f),
                            w = o * Math.tan((i - Math.acos((y + f - d) / (2 * v * g))) / 2),
                            x = w / g,
                            _ = w / v;
                        Math.abs(x - 1) > 1e-6 && (this._ += "L" + (t + x * h) + "," + (n + x * l)), this._ += "A" + o + "," + o + ",0,0," + +(l * p > h * m) + "," + (this._x1 = t + _ * u) + "," + (this._y1 = n + _ * c)
                    } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
                else;
            },
            arc: function(t, n, e, r, s, u) {
                t = +t, n = +n, u = !!u;
                var c = (e = +e) * Math.cos(r),
                    h = e * Math.sin(r),
                    l = t + c,
                    f = n + h,
                    p = 1 ^ u,
                    m = u ? r - s : s - r;
                if (e < 0) throw new Error("negative radius: " + e);
                null === this._x1 ? this._ += "M" + l + "," + f : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) && (this._ += "L" + l + "," + f), e && (m < 0 && (m = m % o + o), m > a ? this._ += "A" + e + "," + e + ",0,1," + p + "," + (t - c) + "," + (n - h) + "A" + e + "," + e + ",0,1," + p + "," + (this._x1 = l) + "," + (this._y1 = f) : m > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(m >= i) + "," + p + "," + (this._x1 = t + e * Math.cos(s)) + "," + (this._y1 = n + e * Math.sin(s))))
            },
            rect: function(t, n, e, r) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z" },
            toString: function() { return this._ }
        };
        var c = u,
            h = (Array.prototype.slice, function(t) { return "object" == typeof t && "length" in t ? t : Array.from(t) }),
            l = function(t) { return function() { return t } };

        function f(t) { this._context = t }
        f.prototype = {
            areaStart: function() { this._line = 0 },
            areaEnd: function() { this._line = NaN },
            lineStart: function() { this._point = 0 },
            lineEnd: function() {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        this._context.lineTo(t, n)
                }
            }
        };
        var p = function(t) { return new f(t) };

        function m(t) { return t[0] }

        function y(t) { return t[1] }
        var d = function(t, n) {
            var e = l(!0),
                r = null,
                i = p,
                o = null;

            function a(a) {
                var s, u, l, f = (a = h(a)).length,
                    p = !1;
                for (null == r && (o = i(l = c())), s = 0; s <= f; ++s) !(s < f && e(u = a[s], s, a)) === p && ((p = !p) ? o.lineStart() : o.lineEnd()), p && o.point(+t(u, s, a), +n(u, s, a));
                if (l) return o = null, l + "" || null
            }
            return t = "function" == typeof t ? t : void 0 === t ? m : l(t), n = "function" == typeof n ? n : void 0 === n ? y : l(n), a.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : l(+n), a) : t }, a.y = function(t) { return arguments.length ? (n = "function" == typeof t ? t : l(+t), a) : n }, a.defined = function(t) { return arguments.length ? (e = "function" == typeof t ? t : l(!!t), a) : e }, a.curve = function(t) { return arguments.length ? (i = t, null != r && (o = i(r)), a) : i }, a.context = function(t) { return arguments.length ? (null == t ? r = o = null : o = i(r = t), a) : r }, a
        };

        function v(t, n) { if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null; var e, r = t.slice(0, e); return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)] }
        var g = function(t) { return (t = v(Math.abs(t))) ? t[1] : NaN },
            w = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

        function x(t) { if (!(n = w.exec(t))) throw new Error("invalid format: " + t); var n; return new _({ fill: n[1], align: n[2], sign: n[3], symbol: n[4], zero: n[5], width: n[6], comma: n[7], precision: n[8] && n[8].slice(1), trim: n[9], type: n[10] }) }

        function _(t) { this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + "" }
        x.prototype = _.prototype, _.prototype.toString = function() { return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type };
        var b, E, M, A, T = function(t, n) {
                var e = v(t, n);
                if (!e) return t + "";
                var r = e[0],
                    i = e[1];
                return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
            },
            k = {
                "%": (t, n) => (100 * t).toFixed(n),
                b: t => Math.round(t).toString(2),
                c: t => t + "",
                d: function(t) { return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10) },
                e: (t, n) => t.toExponential(n),
                f: (t, n) => t.toFixed(n),
                g: (t, n) => t.toPrecision(n),
                o: t => Math.round(t).toString(8),
                p: (t, n) => T(100 * t, n),
                r: T,
                s: function(t, n) {
                    var e = v(t, n);
                    if (!e) return t + "";
                    var r = e[0],
                        i = e[1],
                        o = i - (b = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                        a = r.length;
                    return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + v(t, Math.max(0, n + o - 1))[0]
                },
                X: t => Math.round(t).toString(16).toUpperCase(),
                x: t => Math.round(t).toString(16)
            },
            I = function(t) { return t },
            S = Array.prototype.map,
            N = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
        E = function(t) {
            var n, e, r = void 0 === t.grouping || void 0 === t.thousands ? I : (n = S.call(t.grouping, Number), e = t.thousands + "", function(t, r) { for (var i = t.length, o = [], a = 0, s = n[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(t.substring(i -= s, i + s)), !((u += s + 1) > r));) s = n[a = (a + 1) % n.length]; return o.reverse().join(e) }),
                i = void 0 === t.currency ? "" : t.currency[0] + "",
                o = void 0 === t.currency ? "" : t.currency[1] + "",
                a = void 0 === t.decimal ? "." : t.decimal + "",
                s = void 0 === t.numerals ? I : function(t) { return function(n) { return n.replace(/[0-9]/g, (function(n) { return t[+n] })) } }(S.call(t.numerals, String)),
                u = void 0 === t.percent ? "%" : t.percent + "",
                c = void 0 === t.minus ? "−" : t.minus + "",
                h = void 0 === t.nan ? "NaN" : t.nan + "";

            function l(t) {
                var n = (t = x(t)).fill,
                    e = t.align,
                    l = t.sign,
                    f = t.symbol,
                    p = t.zero,
                    m = t.width,
                    y = t.comma,
                    d = t.precision,
                    v = t.trim,
                    g = t.type;
                "n" === g ? (y = !0, g = "g") : k[g] || (void 0 === d && (d = 12), v = !0, g = "g"), (p || "0" === n && "=" === e) && (p = !0, n = "0", e = "=");
                var w = "$" === f ? i : "#" === f && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "",
                    _ = "$" === f ? o : /[%p]/.test(g) ? u : "",
                    E = k[g],
                    M = /[defgprs%]/.test(g);

                function A(t) {
                    var i, o, u, f = w,
                        x = _;
                    if ("c" === g) x = E(t) + x, t = "";
                    else {
                        var A = (t = +t) < 0 || 1 / t < 0;
                        if (t = isNaN(t) ? h : E(Math.abs(t), d), v && (t = function(t) {
                                t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r) switch (t[r]) {
                                    case ".":
                                        i = n = r;
                                        break;
                                    case "0":
                                        0 === i && (i = r), n = r;
                                        break;
                                    default:
                                        if (!+t[r]) break t;
                                        i > 0 && (i = 0)
                                }
                                return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
                            }(t)), A && 0 == +t && "+" !== l && (A = !1), f = (A ? "(" === l ? l : c : "-" === l || "(" === l ? "" : l) + f, x = ("s" === g ? N[8 + b / 3] : "") + x + (A && "(" === l ? ")" : ""), M)
                            for (i = -1, o = t.length; ++i < o;)
                                if (48 > (u = t.charCodeAt(i)) || u > 57) { x = (46 === u ? a + t.slice(i + 1) : t.slice(i)) + x, t = t.slice(0, i); break }
                    }
                    y && !p && (t = r(t, 1 / 0));
                    var T = f.length + t.length + x.length,
                        k = T < m ? new Array(m - T + 1).join(n) : "";
                    switch (y && p && (t = r(k + t, k.length ? m - x.length : 1 / 0), k = ""), e) {
                        case "<":
                            t = f + t + x + k;
                            break;
                        case "=":
                            t = f + k + t + x;
                            break;
                        case "^":
                            t = k.slice(0, T = k.length >> 1) + f + t + x + k.slice(T);
                            break;
                        default:
                            t = k + f + t + x
                    }
                    return s(t)
                }
                return d = void 0 === d ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), A.toString = function() { return t + "" }, A
            }
            return {
                format: l,
                formatPrefix: function(t, n) {
                    var e = l(((t = x(t)).type = "f", t)),
                        r = 3 * Math.max(-8, Math.min(8, Math.floor(g(n) / 3))),
                        i = Math.pow(10, -r),
                        o = N[8 + r / 3];
                    return function(t) { return e(i * t) + o }
                }
            }
        }({ thousands: ",", grouping: [3], currency: ["$", ""] }), M = E.format, A = E.formatPrefix;
        var L = Math.sqrt(50),
            P = Math.sqrt(10),
            O = Math.sqrt(2),
            R = function(t, n, e) {
                var r, i, o, a, s = -1;
                if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
                if ((r = n < t) && (i = t, t = n, n = i), 0 === (a = H(t, n, e)) || !isFinite(a)) return [];
                if (a > 0)
                    for (t = Math.ceil(t / a), n = Math.floor(n / a), o = new Array(i = Math.ceil(n - t + 1)); ++s < i;) o[s] = (t + s) * a;
                else
                    for (a = -a, t = Math.ceil(t * a), n = Math.floor(n * a), o = new Array(i = Math.ceil(n - t + 1)); ++s < i;) o[s] = (t + s) / a;
                return r && o.reverse(), o
            };

        function H(t, n, e) {
            var r = (n - t) / Math.max(0, e),
                i = Math.floor(Math.log(r) / Math.LN10),
                o = r / Math.pow(10, i);
            return i >= 0 ? (o >= L ? 10 : o >= P ? 5 : o >= O ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= L ? 10 : o >= P ? 5 : o >= O ? 2 : 1)
        }
        var Y = function(t, n) { return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN },
            j = function(t) {
                let n = t,
                    e = t;

                function r(t, n, r, i) {
                    for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
                        const o = r + i >>> 1;
                        e(t[o], n) < 0 ? r = o + 1 : i = o
                    }
                    return r
                }
                return 1 === t.length && (n = (n, e) => t(n) - e, e = function(t) { return (n, e) => Y(t(n), e) }(t)), {
                    left: r,
                    center: function(t, e, i, o) { null == i && (i = 0), null == o && (o = t.length); const a = r(t, e, i, o - 1); return a > i && n(t[a - 1], e) > -n(t[a], e) ? a - 1 : a },
                    right: function(t, n, r, i) {
                        for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
                            const o = r + i >>> 1;
                            e(t[o], n) > 0 ? i = o : r = o + 1
                        }
                        return r
                    }
                }
            };
        const C = j(Y),
            z = C.right;
        C.left, j((function(t) { return null === t ? NaN : +t })).center;
        var B = z,
            U = function(t, n, e) { t.prototype = n.prototype = e, e.constructor = t };

        function F(t, n) { var e = Object.create(t.prototype); for (var r in n) e[r] = n[r]; return e }

        function D() {}
        var q = "\\s*([+-]?\\d+)\\s*",
            X = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            $ = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            V = /^#([0-9a-f]{3,8})$/,
            W = new RegExp("^rgb\\(" + [q, q, q] + "\\)$"),
            G = new RegExp("^rgb\\(" + [$, $, $] + "\\)$"),
            Z = new RegExp("^rgba\\(" + [q, q, q, X] + "\\)$"),
            K = new RegExp("^rgba\\(" + [$, $, $, X] + "\\)$"),
            Q = new RegExp("^hsl\\(" + [X, $, $] + "\\)$"),
            J = new RegExp("^hsla\\(" + [X, $, $, X] + "\\)$"),
            tt = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };

        function nt() { return this.rgb().formatHex() }

        function et() { return this.rgb().formatRgb() }

        function rt(t) { var n, e; return t = (t + "").trim().toLowerCase(), (n = V.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? it(n) : 3 === e ? new ut(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? ot(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? ot(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = W.exec(t)) ? new ut(n[1], n[2], n[3], 1) : (n = G.exec(t)) ? new ut(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Z.exec(t)) ? ot(n[1], n[2], n[3], n[4]) : (n = K.exec(t)) ? ot(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Q.exec(t)) ? ft(n[1], n[2] / 100, n[3] / 100, 1) : (n = J.exec(t)) ? ft(n[1], n[2] / 100, n[3] / 100, n[4]) : tt.hasOwnProperty(t) ? it(tt[t]) : "transparent" === t ? new ut(NaN, NaN, NaN, 0) : null }

        function it(t) { return new ut(t >> 16 & 255, t >> 8 & 255, 255 & t, 1) }

        function ot(t, n, e, r) { return r <= 0 && (t = n = e = NaN), new ut(t, n, e, r) }

        function at(t) { return t instanceof D || (t = rt(t)), t ? new ut((t = t.rgb()).r, t.g, t.b, t.opacity) : new ut }

        function st(t, n, e, r) { return 1 === arguments.length ? at(t) : new ut(t, n, e, null == r ? 1 : r) }

        function ut(t, n, e, r) { this.r = +t, this.g = +n, this.b = +e, this.opacity = +r }

        function ct() { return "#" + lt(this.r) + lt(this.g) + lt(this.b) }

        function ht() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")") }

        function lt(t) { return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16) }

        function ft(t, n, e, r) { return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new yt(t, n, e, r) }

        function pt(t) {
            if (t instanceof yt) return new yt(t.h, t.s, t.l, t.opacity);
            if (t instanceof D || (t = rt(t)), !t) return new yt;
            if (t instanceof yt) return t;
            var n = (t = t.rgb()).r / 255,
                e = t.g / 255,
                r = t.b / 255,
                i = Math.min(n, e, r),
                o = Math.max(n, e, r),
                a = NaN,
                s = o - i,
                u = (o + i) / 2;
            return s ? (a = n === o ? (e - r) / s + 6 * (e < r) : e === o ? (r - n) / s + 2 : (n - e) / s + 4, s /= u < .5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new yt(a, s, u, t.opacity)
        }

        function mt(t, n, e, r) { return 1 === arguments.length ? pt(t) : new yt(t, n, e, null == r ? 1 : r) }

        function yt(t, n, e, r) { this.h = +t, this.s = +n, this.l = +e, this.opacity = +r }

        function dt(t, n, e) { return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) }

        function vt(t, n, e, r, i) {
            var o = t * t,
                a = o * t;
            return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6
        }
        U(D, rt, { copy: function(t) { return Object.assign(new this.constructor, this, t) }, displayable: function() { return this.rgb().displayable() }, hex: nt, formatHex: nt, formatHsl: function() { return pt(this).formatHsl() }, formatRgb: et, toString: et }), U(ut, st, F(D, { brighter: function(t) { return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new ut(this.r * t, this.g * t, this.b * t, this.opacity) }, darker: function(t) { return t = null == t ? .7 : Math.pow(.7, t), new ut(this.r * t, this.g * t, this.b * t, this.opacity) }, rgb: function() { return this }, displayable: function() { return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1 }, hex: ct, formatHex: ct, formatRgb: ht, toString: ht })), U(yt, mt, F(D, {
            brighter: function(t) { return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new yt(this.h, this.s, this.l * t, this.opacity) },
            darker: function(t) { return t = null == t ? .7 : Math.pow(.7, t), new yt(this.h, this.s, this.l * t, this.opacity) },
            rgb: function() {
                var t = this.h % 360 + 360 * (this.h < 0),
                    n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                    e = this.l,
                    r = e + (e < .5 ? e : 1 - e) * n,
                    i = 2 * e - r;
                return new ut(dt(t >= 240 ? t - 240 : t + 120, i, r), dt(t, i, r), dt(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
            },
            displayable: function() { return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1 },
            formatHsl: function() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")") }
        }));
        var gt = t => () => t;

        function wt(t, n) { return function(e) { return t + e * n } }

        function xt(t) {
            return 1 == (t = +t) ? _t : function(n, e) {
                return e - n ? function(t, n, e) {
                    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                        function(r) { return Math.pow(t + r * n, e) }
                }(n, e, t) : gt(isNaN(n) ? e : n)
            }
        }

        function _t(t, n) { var e = n - t; return e ? wt(t, e) : gt(isNaN(t) ? n : t) }
        var bt = function t(n) {
            var e = xt(n);

            function r(t, n) {
                var r = e((t = st(t)).r, (n = st(n)).r),
                    i = e(t.g, n.g),
                    o = e(t.b, n.b),
                    a = _t(t.opacity, n.opacity);
                return function(n) { return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = a(n), t + "" }
            }
            return r.gamma = t, r
        }(1);

        function Et(t) {
            return function(n) {
                var e, r, i = n.length,
                    o = new Array(i),
                    a = new Array(i),
                    s = new Array(i);
                for (e = 0; e < i; ++e) r = st(n[e]), o[e] = r.r || 0, a[e] = r.g || 0, s[e] = r.b || 0;
                return o = t(o), a = t(a), s = t(s), r.opacity = 1,
                    function(t) { return r.r = o(t), r.g = a(t), r.b = s(t), r + "" }
            }
        }
        Et((function(t) {
            var n = t.length - 1;
            return function(e) {
                var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                    i = t[r],
                    o = t[r + 1],
                    a = r > 0 ? t[r - 1] : 2 * i - o,
                    s = r < n - 1 ? t[r + 2] : 2 * o - i;
                return vt((e - r / n) * n, a, i, o, s)
            }
        })), Et((function(t) {
            var n = t.length;
            return function(e) {
                var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                    i = t[(r + n - 1) % n],
                    o = t[r % n],
                    a = t[(r + 1) % n],
                    s = t[(r + 2) % n];
                return vt((e - r / n) * n, i, o, a, s)
            }
        }));
        var Mt = function(t, n) {
            n || (n = []);
            var e, r = t ? Math.min(n.length, t.length) : 0,
                i = n.slice();
            return function(o) { for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o; return i }
        };

        function At(t) { return ArrayBuffer.isView(t) && !(t instanceof DataView) }

        function Tt(t, n) {
            var e, r = n ? n.length : 0,
                i = t ? Math.min(r, t.length) : 0,
                o = new Array(i),
                a = new Array(r);
            for (e = 0; e < i; ++e) o[e] = Ot(t[e], n[e]);
            for (; e < r; ++e) a[e] = n[e];
            return function(t) { for (e = 0; e < i; ++e) a[e] = o[e](t); return a }
        }
        var kt = function(t, n) {
                var e = new Date;
                return t = +t, n = +n,
                    function(r) { return e.setTime(t * (1 - r) + n * r), e }
            },
            It = function(t, n) {
                return t = +t, n = +n,
                    function(e) { return t * (1 - e) + n * e }
            },
            St = function(t, n) {
                var e, r = {},
                    i = {};
                for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = Ot(t[e], n[e]) : i[e] = n[e];
                return function(t) { for (e in r) i[e] = r[e](t); return i }
            },
            Nt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            Lt = new RegExp(Nt.source, "g");
        var Pt = function(t, n) {
                var e, r, i, o = Nt.lastIndex = Lt.lastIndex = 0,
                    a = -1,
                    s = [],
                    u = [];
                for (t += "", n += "";
                    (e = Nt.exec(t)) && (r = Lt.exec(n));)(i = r.index) > o && (i = n.slice(o, i), s[a] ? s[a] += i : s[++a] = i), (e = e[0]) === (r = r[0]) ? s[a] ? s[a] += r : s[++a] = r : (s[++a] = null, u.push({ i: a, x: It(e, r) })), o = Lt.lastIndex;
                return o < n.length && (i = n.slice(o), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? u[0] ? function(t) { return function(n) { return t(n) + "" } }(u[0].x) : function(t) { return function() { return t } }(n) : (n = u.length, function(t) { for (var e, r = 0; r < n; ++r) s[(e = u[r]).i] = e.x(t); return s.join("") })
            },
            Ot = function(t, n) { var e, r = typeof n; return null == n || "boolean" === r ? gt(n) : ("number" === r ? It : "string" === r ? (e = rt(n)) ? (n = e, bt) : Pt : n instanceof rt ? bt : n instanceof Date ? kt : At(n) ? Mt : Array.isArray(n) ? Tt : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? St : It)(t, n) },
            Rt = function(t, n) {
                return t = +t, n = +n,
                    function(e) { return Math.round(t * (1 - e) + n * e) }
            },
            Ht = function(t) { return +t },
            Yt = [0, 1];

        function jt(t) { return t }

        function Ct(t, n) { return (n -= t = +t) ? function(e) { return (e - t) / n } : (e = isNaN(n) ? NaN : .5, function() { return e }); var e }

        function zt(t, n, e) {
            var r = t[0],
                i = t[1],
                o = n[0],
                a = n[1];
            return i < r ? (r = Ct(i, r), o = e(a, o)) : (r = Ct(r, i), o = e(o, a)),
                function(t) { return o(r(t)) }
        }

        function Bt(t, n, e) {
            var r = Math.min(t.length, n.length) - 1,
                i = new Array(r),
                o = new Array(r),
                a = -1;
            for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r;) i[a] = Ct(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
            return function(n) { var e = B(t, n, 1, r) - 1; return o[e](i[e](n)) }
        }

        function Ut(t, n) { return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown()) }

        function Ft() {
            var t, n, e, r, i, o, a = Yt,
                s = Yt,
                u = Ot,
                c = jt;

            function h() { var t, n, e, u = Math.min(a.length, s.length); return c !== jt && (t = a[0], n = a[u - 1], t > n && (e = t, t = n, n = e), c = function(e) { return Math.max(t, Math.min(n, e)) }), r = u > 2 ? Bt : zt, i = o = null, l }

            function l(n) { return isNaN(n = +n) ? e : (i || (i = r(a.map(t), s, u)))(t(c(n))) }
            return l.invert = function(e) { return c(n((o || (o = r(s, a.map(t), It)))(e))) }, l.domain = function(t) { return arguments.length ? (a = Array.from(t, Ht), h()) : a.slice() }, l.range = function(t) { return arguments.length ? (s = Array.from(t), h()) : s.slice() }, l.rangeRound = function(t) { return s = Array.from(t), u = Rt, h() }, l.clamp = function(t) { return arguments.length ? (c = !!t || jt, h()) : c !== jt }, l.interpolate = function(t) { return arguments.length ? (u = t, h()) : u }, l.unknown = function(t) { return arguments.length ? (e = t, l) : e },
                function(e, r) { return t = e, n = r, h() }
        }

        function Dt() { return Ft()(jt, jt) }

        function qt(t, n) {
            switch (arguments.length) {
                case 0:
                    break;
                case 1:
                    this.range(t);
                    break;
                default:
                    this.range(n).domain(t)
            }
            return this
        }
        var Xt = function(t, n, e, r) {
            var i, o = function(t, n, e) {
                var r = Math.abs(n - t) / Math.max(0, e),
                    i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                    o = r / i;
                return o >= L ? i *= 10 : o >= P ? i *= 5 : o >= O && (i *= 2), n < t ? -i : i
            }(t, n, e);
            switch ((r = x(null == r ? ",f" : r)).type) {
                case "s":
                    var a = Math.max(Math.abs(t), Math.abs(n));
                    return null != r.precision || isNaN(i = function(t, n) { return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(g(n) / 3))) - g(Math.abs(t))) }(o, a)) || (r.precision = i), A(r, a);
                case "":
                case "e":
                case "g":
                case "p":
                case "r":
                    null != r.precision || isNaN(i = function(t, n) { return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, g(n) - g(t)) + 1 }(o, Math.max(Math.abs(t), Math.abs(n)))) || (r.precision = i - ("e" === r.type));
                    break;
                case "f":
                case "%":
                    null != r.precision || isNaN(i = function(t) { return Math.max(0, -g(Math.abs(t))) }(o)) || (r.precision = i - 2 * ("%" === r.type))
            }
            return M(r)
        };

        function $t(t) {
            var n = t.domain;
            return t.ticks = function(t) { var e = n(); return R(e[0], e[e.length - 1], null == t ? 10 : t) }, t.tickFormat = function(t, e) { var r = n(); return Xt(r[0], r[r.length - 1], null == t ? 10 : t, e) }, t.nice = function(e) {
                null == e && (e = 10);
                var r, i, o = n(),
                    a = 0,
                    s = o.length - 1,
                    u = o[a],
                    c = o[s],
                    h = 10;
                for (c < u && (i = u, u = c, c = i, i = a, a = s, s = i); h-- > 0;) {
                    if ((i = H(u, c, e)) === r) return o[a] = u, o[s] = c, n(o);
                    if (i > 0) u = Math.floor(u / i) * i, c = Math.ceil(c / i) * i;
                    else {
                        if (!(i < 0)) break;
                        u = Math.ceil(u * i) / i, c = Math.floor(c * i) / i
                    }
                    r = i
                }
                return t
            }, t
        }

        function Vt(t) { return Math.log(t) }

        function Wt(t) { return Math.exp(t) }

        function Gt(t) { return -Math.log(-t) }

        function Zt(t) { return -Math.exp(-t) }

        function Kt(t) { return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t }

        function Qt(t) { return function(n) { return -t(-n) } }

        function Jt(t) {
            var n, e, r = t(Vt, Wt),
                i = r.domain,
                o = 10;

            function a() { return n = function(t) { return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(n) { return Math.log(n) / t }) }(o), e = function(t) { return 10 === t ? Kt : t === Math.E ? Math.exp : function(n) { return Math.pow(t, n) } }(o), i()[0] < 0 ? (n = Qt(n), e = Qt(e), t(Gt, Zt)) : t(Vt, Wt), r }
            return r.base = function(t) { return arguments.length ? (o = +t, a()) : o }, r.domain = function(t) { return arguments.length ? (i(t), a()) : i() }, r.ticks = function(t) {
                var r, a = i(),
                    s = a[0],
                    u = a[a.length - 1];
                (r = u < s) && (f = s, s = u, u = f);
                var c, h, l, f = n(s),
                    p = n(u),
                    m = null == t ? 10 : +t,
                    y = [];
                if (!(o % 1) && p - f < m) {
                    if (f = Math.floor(f), p = Math.ceil(p), s > 0) {
                        for (; f <= p; ++f)
                            for (h = 1, c = e(f); h < o; ++h)
                                if (!((l = c * h) < s)) {
                                    if (l > u) break;
                                    y.push(l)
                                }
                    } else
                        for (; f <= p; ++f)
                            for (h = o - 1, c = e(f); h >= 1; --h)
                                if (!((l = c * h) < s)) {
                                    if (l > u) break;
                                    y.push(l)
                                }
                    2 * y.length < m && (y = R(s, u, m))
                } else y = R(f, p, Math.min(p - f, m)).map(e);
                return r ? y.reverse() : y
            }, r.tickFormat = function(t, i) {
                if (null == i && (i = 10 === o ? ".0e" : ","), "function" != typeof i && (i = M(i)), t === 1 / 0) return i;
                null == t && (t = 10);
                var a = Math.max(1, o * t / r.ticks().length);
                return function(t) { var r = t / e(Math.round(n(t))); return r * o < o - .5 && (r *= o), r <= a ? i(t) : "" }
            }, r.nice = function() {
                return i(function(t, n) {
                    var e, r = 0,
                        i = (t = t.slice()).length - 1,
                        o = t[r],
                        a = t[i];
                    return a < o && (e = r, r = i, i = e, e = o, o = a, a = e), t[r] = n.floor(o), t[i] = n.ceil(a), t
                }(i(), { floor: function(t) { return e(Math.floor(n(t))) }, ceil: function(t) { return e(Math.ceil(n(t))) } }))
            }, r
        }
        var tn = Array.prototype.slice,
            nn = function(t) { return t };

        function en(t) { return "translate(" + (t + .5) + ",0)" }

        function rn(t) { return "translate(0," + (t + .5) + ")" }

        function on(t) { return n => +t(n) }

        function an(t) {
            var n = Math.max(0, t.bandwidth() - 1) / 2;
            return t.round() && (n = Math.round(n)),
                function(e) { return +t(e) + n }
        }

        function sn() { return !this.__axis }

        function un(t, n) {
            var e = [],
                r = null,
                i = null,
                o = 6,
                a = 6,
                s = 3,
                u = 1 === t || 4 === t ? -1 : 1,
                c = 4 === t || 2 === t ? "x" : "y",
                h = 1 === t || 3 === t ? en : rn;

            function l(l) {
                var f = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
                    p = null == i ? n.tickFormat ? n.tickFormat.apply(n, e) : nn : i,
                    m = Math.max(o, 0) + s,
                    y = n.range(),
                    d = +y[0] + .5,
                    v = +y[y.length - 1] + .5,
                    g = (n.bandwidth ? an : on)(n.copy()),
                    w = l.selection ? l.selection() : l,
                    x = w.selectAll(".domain").data([null]),
                    _ = w.selectAll(".tick").data(f, n).order(),
                    b = _.exit(),
                    E = _.enter().append("g").attr("class", "tick"),
                    M = _.select("line"),
                    A = _.select("text");
                x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), _ = _.merge(E), M = M.merge(E.append("line").attr("stroke", "currentColor").attr(c + "2", u * o)), A = A.merge(E.append("text").attr("fill", "currentColor").attr(c, u * m).attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")), l !== w && (x = x.transition(l), _ = _.transition(l), M = M.transition(l), A = A.transition(l), b = b.transition(l).attr("opacity", 1e-6).attr("transform", (function(t) { return isFinite(t = g(t)) ? h(t) : this.getAttribute("transform") })), E.attr("opacity", 1e-6).attr("transform", (function(t) { var n = this.parentNode.__axis; return h(n && isFinite(n = n(t)) ? n : g(t)) }))), b.remove(), x.attr("d", 4 === t || 2 == t ? a ? "M" + u * a + "," + d + "H0.5V" + v + "H" + u * a : "M0.5," + d + "V" + v : a ? "M" + d + "," + u * a + "V0.5H" + v + "V" + u * a : "M" + d + ",0.5H" + v), _.attr("opacity", 1).attr("transform", (function(t) { return h(g(t)) })), M.attr(c + "2", u * o), A.attr(c, u * m).text(p), w.filter(sn).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"), w.each((function() { this.__axis = g }))
            }
            return l.scale = function(t) { return arguments.length ? (n = t, l) : n }, l.ticks = function() { return e = tn.call(arguments), l }, l.tickArguments = function(t) { return arguments.length ? (e = null == t ? [] : tn.call(t), l) : e.slice() }, l.tickValues = function(t) { return arguments.length ? (r = null == t ? null : tn.call(t), l) : r && r.slice() }, l.tickFormat = function(t) { return arguments.length ? (i = t, l) : i }, l.tickSize = function(t) { return arguments.length ? (o = a = +t, l) : o }, l.tickSizeInner = function(t) { return arguments.length ? (o = +t, l) : o }, l.tickSizeOuter = function(t) { return arguments.length ? (a = +t, l) : a }, l.tickPadding = function(t) { return arguments.length ? (s = +t, l) : s }, l
        }
        var cn = { value: () => {} };

        function hn() {
            for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
                r[t] = []
            }
            return new ln(r)
        }

        function ln(t) { this._ = t }

        function fn(t, n) {
            return t.trim().split(/^|\s+/).map((function(t) {
                var e = "",
                    r = t.indexOf(".");
                if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                return { type: t, name: e }
            }))
        }

        function pn(t, n) {
            for (var e, r = 0, i = t.length; r < i; ++r)
                if ((e = t[r]).name === n) return e.value
        }

        function mn(t, n, e) {
            for (var r = 0, i = t.length; r < i; ++r)
                if (t[r].name === n) { t[r] = cn, t = t.slice(0, r).concat(t.slice(r + 1)); break }
            return null != e && t.push({ name: n, value: e }), t
        }
        ln.prototype = hn.prototype = {
            constructor: ln,
            on: function(t, n) {
                var e, r = this._,
                    i = fn(t + "", r),
                    o = -1,
                    a = i.length;
                if (!(arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++o < a;)
                        if (e = (t = i[o]).type) r[e] = mn(r[e], t.name, n);
                        else if (null == n)
                        for (e in r) r[e] = mn(r[e], t.name, null);
                    return this
                }
                for (; ++o < a;)
                    if ((e = (t = i[o]).type) && (e = pn(r[e], t.name))) return e
            },
            copy: function() {
                var t = {},
                    n = this._;
                for (var e in n) t[e] = n[e].slice();
                return new ln(t)
            },
            call: function(t, n) {
                if ((e = arguments.length - 2) > 0)
                    for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
            },
            apply: function(t, n, e) { if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t); for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e) }
        };
        var yn = hn;

        function dn() {}
        var vn = function(t) { return null == t ? dn : function() { return this.querySelector(t) } },
            gn = function(t) { return "object" == typeof t && "length" in t ? t : Array.from(t) };

        function wn() { return [] }
        var xn = function(t) { return null == t ? wn : function() { return this.querySelectorAll(t) } };
        var _n = function(t) { return function() { return this.matches(t) } };

        function bn(t) { return function(n) { return n.matches(t) } }
        var En = Array.prototype.find;

        function Mn() { return this.firstElementChild }
        var An = Array.prototype.filter;

        function Tn() { return this.children }
        var kn = function(t) { return new Array(t.length) };

        function In(t, n) { this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n }
        In.prototype = { constructor: In, appendChild: function(t) { return this._parent.insertBefore(t, this._next) }, insertBefore: function(t, n) { return this._parent.insertBefore(t, n) }, querySelector: function(t) { return this._parent.querySelector(t) }, querySelectorAll: function(t) { return this._parent.querySelectorAll(t) } };
        var Sn = function(t) { return function() { return t } };

        function Nn(t, n, e, r, i, o) { for (var a, s = 0, u = n.length, c = o.length; s < c; ++s)(a = n[s]) ? (a.__data__ = o[s], r[s] = a) : e[s] = new In(t, o[s]); for (; s < u; ++s)(a = n[s]) && (i[s] = a) }

        function Ln(t, n, e, r, i, o, a) {
            var s, u, c, h = new Map,
                l = n.length,
                f = o.length,
                p = new Array(l);
            for (s = 0; s < l; ++s)(u = n[s]) && (p[s] = c = a.call(u, u.__data__, s, n) + "", h.has(c) ? i[s] = u : h.set(c, u));
            for (s = 0; s < f; ++s) c = a.call(t, o[s], s, o) + "", (u = h.get(c)) ? (r[s] = u, u.__data__ = o[s], h.delete(c)) : e[s] = new In(t, o[s]);
            for (s = 0; s < l; ++s)(u = n[s]) && h.get(p[s]) === u && (i[s] = u)
        }

        function Pn(t) { return t.__data__ }

        function On(t, n) { return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN }
        var Rn = "http://www.w3.org/1999/xhtml",
            Hn = { svg: "http://www.w3.org/2000/svg", xhtml: Rn, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
            Yn = function(t) {
                var n = t += "",
                    e = n.indexOf(":");
                return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), Hn.hasOwnProperty(n) ? { space: Hn[n], local: t } : t
            };

        function jn(t) { return function() { this.removeAttribute(t) } }

        function Cn(t) { return function() { this.removeAttributeNS(t.space, t.local) } }

        function zn(t, n) { return function() { this.setAttribute(t, n) } }

        function Bn(t, n) { return function() { this.setAttributeNS(t.space, t.local, n) } }

        function Un(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
            }
        }

        function Fn(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
            }
        }
        var Dn = function(t) { return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView };

        function qn(t) { return function() { this.style.removeProperty(t) } }

        function Xn(t, n, e) { return function() { this.style.setProperty(t, n, e) } }

        function $n(t, n, e) {
            return function() {
                var r = n.apply(this, arguments);
                null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
            }
        }

        function Vn(t, n) { return t.style.getPropertyValue(n) || Dn(t).getComputedStyle(t, null).getPropertyValue(n) }

        function Wn(t) { return function() { delete this[t] } }

        function Gn(t, n) { return function() { this[t] = n } }

        function Zn(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? delete this[t] : this[t] = e
            }
        }

        function Kn(t) { return t.trim().split(/^|\s+/) }

        function Qn(t) { return t.classList || new Jn(t) }

        function Jn(t) { this._node = t, this._names = Kn(t.getAttribute("class") || "") }

        function te(t, n) { for (var e = Qn(t), r = -1, i = n.length; ++r < i;) e.add(n[r]) }

        function ne(t, n) { for (var e = Qn(t), r = -1, i = n.length; ++r < i;) e.remove(n[r]) }

        function ee(t) { return function() { te(this, t) } }

        function re(t) { return function() { ne(this, t) } }

        function ie(t, n) {
            return function() {
                (n.apply(this, arguments) ? te : ne)(this, t)
            }
        }
        Jn.prototype = {
            add: function(t) { this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" "))) },
            remove: function(t) {
                var n = this._names.indexOf(t);
                n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function(t) { return this._names.indexOf(t) >= 0 }
        };

        function oe() { this.textContent = "" }

        function ae(t) { return function() { this.textContent = t } }

        function se(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.textContent = null == n ? "" : n
            }
        }

        function ue() { this.innerHTML = "" }

        function ce(t) { return function() { this.innerHTML = t } }

        function he(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.innerHTML = null == n ? "" : n
            }
        }

        function le() { this.nextSibling && this.parentNode.appendChild(this) }

        function fe() { this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild) }

        function pe(t) {
            return function() {
                var n = this.ownerDocument,
                    e = this.namespaceURI;
                return e === Rn && n.documentElement.namespaceURI === Rn ? n.createElement(t) : n.createElementNS(e, t)
            }
        }

        function me(t) { return function() { return this.ownerDocument.createElementNS(t.space, t.local) } }
        var ye = function(t) { var n = Yn(t); return (n.local ? me : pe)(n) };

        function de() { return null }

        function ve() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        function ge() {
            var t = this.cloneNode(!1),
                n = this.parentNode;
            return n ? n.insertBefore(t, this.nextSibling) : t
        }

        function we() {
            var t = this.cloneNode(!0),
                n = this.parentNode;
            return n ? n.insertBefore(t, this.nextSibling) : t
        }

        function xe(t) {
            return t.trim().split(/^|\s+/).map((function(t) {
                var n = "",
                    e = t.indexOf(".");
                return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n }
            }))
        }

        function _e(t) { return function() { var n = this.__on; if (n) { for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.options);++i ? n.length = i : delete this.__on } } }

        function be(t, n, e) {
            return function() {
                var r, i = this.__on,
                    o = function(t) { return function(n) { t.call(this, n, this.__data__) } }(n);
                if (i)
                    for (var a = 0, s = i.length; a < s; ++a)
                        if ((r = i[a]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = e), void(r.value = n);
                this.addEventListener(t.type, o, e), r = { type: t.type, name: t.name, value: n, listener: o, options: e }, i ? i.push(r) : this.__on = [r]
            }
        }

        function Ee(t, n, e) {
            var r = Dn(t),
                i = r.CustomEvent;
            "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
        }

        function Me(t, n) { return function() { return Ee(this, t, n) } }

        function Ae(t, n) { return function() { return Ee(this, t, n.apply(this, arguments)) } }
        var Te = [null];

        function ke(t, n) { this._groups = t, this._parents = n }

        function Ie() {
            return new ke([
                [document.documentElement]
            ], Te)
        }
        ke.prototype = Ie.prototype = {
            constructor: ke,
            select: function(t) {
                "function" != typeof t && (t = vn(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, a, s = n[i], u = s.length, c = r[i] = new Array(u), h = 0; h < u; ++h)(o = s[h]) && (a = t.call(o, o.__data__, h, s)) && ("__data__" in o && (a.__data__ = o.__data__), c[h] = a);
                return new ke(r, this._parents)
            },
            selectAll: function(t) {
                t = "function" == typeof t ? function(t) { return function() { var n = t.apply(this, arguments); return null == n ? [] : gn(n) } }(t) : xn(t);
                for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
                    for (var a, s = n[o], u = s.length, c = 0; c < u; ++c)(a = s[c]) && (r.push(t.call(a, a.__data__, c, s)), i.push(a));
                return new ke(r, i)
            },
            selectChild: function(t) { return this.select(null == t ? Mn : function(t) { return function() { return En.call(this.children, t) } }("function" == typeof t ? t : bn(t))) },
            selectChildren: function(t) { return this.selectAll(null == t ? Tn : function(t) { return function() { return An.call(this.children, t) } }("function" == typeof t ? t : bn(t))) },
            filter: function(t) {
                "function" != typeof t && (t = _n(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, a = n[i], s = a.length, u = r[i] = [], c = 0; c < s; ++c)(o = a[c]) && t.call(o, o.__data__, c, a) && u.push(o);
                return new ke(r, this._parents)
            },
            data: function(t, n) {
                if (!arguments.length) return Array.from(this, Pn);
                var e = n ? Ln : Nn,
                    r = this._parents,
                    i = this._groups;
                "function" != typeof t && (t = Sn(t));
                for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), c = 0; c < o; ++c) {
                    var h = r[c],
                        l = i[c],
                        f = l.length,
                        p = gn(t.call(h, h && h.__data__, c, r)),
                        m = p.length,
                        y = s[c] = new Array(m),
                        d = a[c] = new Array(m),
                        v = u[c] = new Array(f);
                    e(h, l, y, d, v, p, n);
                    for (var g, w, x = 0, _ = 0; x < m; ++x)
                        if (g = y[x]) {
                            for (x >= _ && (_ = x + 1); !(w = d[_]) && ++_ < m;);
                            g._next = w || null
                        }
                }
                return (a = new ke(a, r))._enter = s, a._exit = u, a
            },
            enter: function() { return new ke(this._enter || this._groups.map(kn), this._parents) },
            exit: function() { return new ke(this._exit || this._groups.map(kn), this._parents) },
            join: function(t, n, e) {
                var r = this.enter(),
                    i = this,
                    o = this.exit();
                return r = "function" == typeof t ? t(r) : r.append(t + ""), null != n && (i = n(i)), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i
            },
            merge: function(t) {
                if (!(t instanceof ke)) throw new Error("invalid merge");
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
                    for (var u, c = n[s], h = e[s], l = c.length, f = a[s] = new Array(l), p = 0; p < l; ++p)(u = c[p] || h[p]) && (f[p] = u);
                for (; s < r; ++s) a[s] = n[s];
                return new ke(a, this._parents)
            },
            selection: function() { return this },
            order: function() {
                for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                    for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0;)(r = i[o]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), a = r);
                return this
            },
            sort: function(t) {
                function n(n, e) { return n && e ? t(n.__data__, e.__data__) : !n - !e }
                t || (t = On);
                for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                    for (var a, s = e[o], u = s.length, c = i[o] = new Array(u), h = 0; h < u; ++h)(a = s[h]) && (c[h] = a);
                    c.sort(n)
                }
                return new ke(i, this._parents).order()
            },
            call: function() { var t = arguments[0]; return arguments[0] = this, t.apply(null, arguments), this },
            nodes: function() { return Array.from(this) },
            node: function() {
                for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                    for (var r = t[n], i = 0, o = r.length; i < o; ++i) { var a = r[i]; if (a) return a }
                return null
            },
            size: function() { let t = 0; for (const n of this) ++t; return t },
            empty: function() { return !this.node() },
            each: function(t) {
                for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                    for (var i, o = n[e], a = 0, s = o.length; a < s; ++a)(i = o[a]) && t.call(i, i.__data__, a, o);
                return this
            },
            attr: function(t, n) { var e = Yn(t); if (arguments.length < 2) { var r = this.node(); return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e) } return this.each((null == n ? e.local ? Cn : jn : "function" == typeof n ? e.local ? Fn : Un : e.local ? Bn : zn)(e, n)) },
            style: function(t, n, e) { return arguments.length > 1 ? this.each((null == n ? qn : "function" == typeof n ? $n : Xn)(t, n, null == e ? "" : e)) : Vn(this.node(), t) },
            property: function(t, n) { return arguments.length > 1 ? this.each((null == n ? Wn : "function" == typeof n ? Zn : Gn)(t, n)) : this.node()[t] },
            classed: function(t, n) {
                var e = Kn(t + "");
                if (arguments.length < 2) {
                    for (var r = Qn(this.node()), i = -1, o = e.length; ++i < o;)
                        if (!r.contains(e[i])) return !1;
                    return !0
                }
                return this.each(("function" == typeof n ? ie : n ? ee : re)(e, n))
            },
            text: function(t) { return arguments.length ? this.each(null == t ? oe : ("function" == typeof t ? se : ae)(t)) : this.node().textContent },
            html: function(t) { return arguments.length ? this.each(null == t ? ue : ("function" == typeof t ? he : ce)(t)) : this.node().innerHTML },
            raise: function() { return this.each(le) },
            lower: function() { return this.each(fe) },
            append: function(t) { var n = "function" == typeof t ? t : ye(t); return this.select((function() { return this.appendChild(n.apply(this, arguments)) })) },
            insert: function(t, n) {
                var e = "function" == typeof t ? t : ye(t),
                    r = null == n ? de : "function" == typeof n ? n : vn(n);
                return this.select((function() { return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null) }))
            },
            remove: function() { return this.each(ve) },
            clone: function(t) { return this.select(t ? we : ge) },
            datum: function(t) { return arguments.length ? this.property("__data__", t) : this.node().__data__ },
            on: function(t, n, e) {
                var r, i, o = xe(t + ""),
                    a = o.length;
                if (!(arguments.length < 2)) { for (s = n ? be : _e, r = 0; r < a; ++r) this.each(s(o[r], n, e)); return this }
                var s = this.node().__on;
                if (s)
                    for (var u, c = 0, h = s.length; c < h; ++c)
                        for (r = 0, u = s[c]; r < a; ++r)
                            if ((i = o[r]).type === u.type && i.name === u.name) return u.value
            },
            dispatch: function(t, n) { return this.each(("function" == typeof n ? Ae : Me)(t, n)) },
            [Symbol.iterator]: function*() {
                for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                    for (var r, i = t[n], o = 0, a = i.length; o < a; ++o)(r = i[o]) && (yield r)
            }
        };
        var Se = Ie,
            Ne = function(t) {
                return "string" == typeof t ? new ke([
                    [document.querySelector(t)]
                ], [document.documentElement]) : new ke([
                    [t]
                ], Te)
            };
        var Le = function(t) { t.preventDefault(), t.stopImmediatePropagation() },
            Pe = function(t) {
                var n = t.document.documentElement,
                    e = Ne(t).on("dragstart.drag", Le, !0);
                "onselectstart" in n ? e.on("selectstart.drag", Le, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
            };

        function Oe(t, n) {
            var e = t.document.documentElement,
                r = Ne(t).on("dragstart.drag", null);
            n && (r.on("click.drag", Le, !0), setTimeout((function() { r.on("click.drag", null) }), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
        }

        function Re(t) { return ((t = Math.exp(t)) + 1 / t) / 2 }
        var He, Ye, je = function t(n, e, r) {
                function i(t, i) {
                    var o, a, s = t[0],
                        u = t[1],
                        c = t[2],
                        h = i[0],
                        l = i[1],
                        f = i[2],
                        p = h - s,
                        m = l - u,
                        y = p * p + m * m;
                    if (y < 1e-12) a = Math.log(f / c) / n, o = function(t) { return [s + t * p, u + t * m, c * Math.exp(n * t * a)] };
                    else {
                        var d = Math.sqrt(y),
                            v = (f * f - c * c + r * y) / (2 * c * e * d),
                            g = (f * f - c * c - r * y) / (2 * f * e * d),
                            w = Math.log(Math.sqrt(v * v + 1) - v),
                            x = Math.log(Math.sqrt(g * g + 1) - g);
                        a = (x - w) / n, o = function(t) {
                            var r, i = t * a,
                                o = Re(w),
                                h = c / (e * d) * (o * (r = n * i + w, ((r = Math.exp(2 * r)) - 1) / (r + 1)) - function(t) { return ((t = Math.exp(t)) - 1 / t) / 2 }(w));
                            return [s + h * p, u + h * m, c * o / Re(n * i + w)]
                        }
                    }
                    return o.duration = 1e3 * a * n / Math.SQRT2, o
                }
                return i.rho = function(n) {
                    var e = Math.max(.001, +n),
                        r = e * e;
                    return t(e, r, r * r)
                }, i
            }(Math.SQRT2, 2, 4),
            Ce = function(t, n) { if (t = function(t) { let n; for (; n = t.sourceEvent;) t = n; return t }(t), void 0 === n && (n = t.currentTarget), n) { var e = n.ownerSVGElement || n; if (e.createSVGPoint) { var r = e.createSVGPoint(); return r.x = t.clientX, r.y = t.clientY, [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y] } if (n.getBoundingClientRect) { var i = n.getBoundingClientRect(); return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop] } } return [t.pageX, t.pageY] },
            ze = 0,
            Be = 0,
            Ue = 0,
            Fe = 0,
            De = 0,
            qe = 0,
            Xe = "object" == typeof performance && performance.now ? performance : Date,
            $e = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) { setTimeout(t, 17) };

        function Ve() { return De || ($e(We), De = Xe.now() + qe) }

        function We() { De = 0 }

        function Ge() { this._call = this._time = this._next = null }

        function Ze(t, n, e) { var r = new Ge; return r.restart(t, n, e), r }

        function Ke() {
            De = (Fe = Xe.now()) + qe, ze = Be = 0;
            try {! function() { Ve(), ++ze; for (var t, n = He; n;)(t = De - n._time) >= 0 && n._call.call(null, t), n = n._next;--ze }() } finally {
                ze = 0,
                    function() {
                        var t, n, e = He,
                            r = 1 / 0;
                        for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : He = n);
                        Ye = t, Je(r)
                    }(), De = 0
            }
        }

        function Qe() {
            var t = Xe.now(),
                n = t - Fe;
            n > 1e3 && (qe -= n, Fe = t)
        }

        function Je(t) { ze || (Be && (Be = clearTimeout(Be)), t - De > 24 ? (t < 1 / 0 && (Be = setTimeout(Ke, t - Xe.now() - qe)), Ue && (Ue = clearInterval(Ue))) : (Ue || (Fe = Xe.now(), Ue = setInterval(Qe, 1e3)), ze = 1, $e(Ke))) }
        Ge.prototype = Ze.prototype = {
            constructor: Ge,
            restart: function(t, n, e) {
                if ("function" != typeof t) throw new TypeError("callback is not a function");
                e = (null == e ? Ve() : +e) + (null == n ? 0 : +n), this._next || Ye === this || (Ye ? Ye._next = this : He = this, Ye = this), this._call = t, this._time = e, Je()
            },
            stop: function() { this._call && (this._call = null, this._time = 1 / 0, Je()) }
        };
        var tr = function(t, n, e) { var r = new Ge; return n = null == n ? 0 : +n, r.restart(e => { r.stop(), t(e + n) }, n, e), r },
            nr = yn("start", "end", "cancel", "interrupt"),
            er = [],
            rr = function(t, n, e, r, i, o) {
                var a = t.__transition;
                if (a) { if (e in a) return } else t.__transition = {};
                ! function(t, n, e) {
                    var r, i = t.__transition;

                    function o(u) {
                        var c, h, l, f;
                        if (1 !== e.state) return s();
                        for (c in i)
                            if ((f = i[c]).name === e.name) {
                                if (3 === f.state) return tr(o);
                                4 === f.state ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete i[c]) : +c < n && (f.state = 6, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete i[c])
                            }
                        if (tr((function() { 3 === e.state && (e.state = 4, e.timer.restart(a, e.delay, e.time), a(u)) })), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) {
                            for (e.state = 3, r = new Array(l = e.tween.length), c = 0, h = -1; c < l; ++c)(f = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (r[++h] = f);
                            r.length = h + 1
                        }
                    }

                    function a(n) {
                        for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(s), e.state = 5, 1), o = -1, a = r.length; ++o < a;) r[o].call(t, i);
                        5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), s())
                    }

                    function s() {
                        for (var r in e.state = 6, e.timer.stop(), delete i[n], i) return;
                        delete t.__transition
                    }
                    i[n] = e, e.timer = Ze((function(t) { e.state = 1, e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay) }), 0, e.time)
                }(t, e, { name: n, index: r, group: i, on: nr, tween: er, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: 0 })
            };

        function ir(t, n) { var e = ar(t, n); if (e.state > 0) throw new Error("too late; already scheduled"); return e }

        function or(t, n) { var e = ar(t, n); if (e.state > 3) throw new Error("too late; already running"); return e }

        function ar(t, n) { var e = t.__transition; if (!e || !(e = e[n])) throw new Error("transition not found"); return e }
        var sr, ur = function(t, n) {
                var e, r, i, o = t.__transition,
                    a = !0;
                if (o) {
                    for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : a = !1;
                    a && delete t.__transition
                }
            },
            cr = 180 / Math.PI,
            hr = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
            lr = function(t, n, e, r, i, o) { var a, s, u; return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * cr, skewX: Math.atan(u) * cr, scaleX: a, scaleY: s } };

        function fr(t, n, e, r) {
            function i(t) { return t.length ? t.pop() + " " : "" }
            return function(o, a) {
                var s = [],
                    u = [];
                return o = t(o), a = t(a),
                    function(t, r, i, o, a, s) {
                        if (t !== i || r !== o) {
                            var u = a.push("translate(", null, n, null, e);
                            s.push({ i: u - 4, x: It(t, i) }, { i: u - 2, x: It(r, o) })
                        } else(i || o) && a.push("translate(" + i + n + o + e)
                    }(o.translateX, o.translateY, a.translateX, a.translateY, s, u),
                    function(t, n, e, o) { t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: It(t, n) })) : n && e.push(i(e) + "rotate(" + n + r) }(o.rotate, a.rotate, s, u),
                    function(t, n, e, o) { t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: It(t, n) }) : n && e.push(i(e) + "skewX(" + n + r) }(o.skewX, a.skewX, s, u),
                    function(t, n, e, r, o, a) {
                        if (t !== e || n !== r) {
                            var s = o.push(i(o) + "scale(", null, ",", null, ")");
                            a.push({ i: s - 4, x: It(t, e) }, { i: s - 2, x: It(n, r) })
                        } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
                    }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, s, u), o = a = null,
                    function(t) { for (var n, e = -1, r = u.length; ++e < r;) s[(n = u[e]).i] = n.x(t); return s.join("") }
            }
        }
        var pr = fr((function(t) { const n = new("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + ""); return n.isIdentity ? hr : lr(n.a, n.b, n.c, n.d, n.e, n.f) }), "px, ", "px)", "deg)"),
            mr = fr((function(t) { return null == t ? hr : (sr || (sr = document.createElementNS("http://www.w3.org/2000/svg", "g")), sr.setAttribute("transform", t), (t = sr.transform.baseVal.consolidate()) ? (t = t.matrix, lr(t.a, t.b, t.c, t.d, t.e, t.f)) : hr) }), ", ", ")", ")");

        function yr(t, n) {
            var e, r;
            return function() {
                var i = or(this, t),
                    o = i.tween;
                if (o !== e)
                    for (var a = 0, s = (r = e = o).length; a < s; ++a)
                        if (r[a].name === n) {
                            (r = r.slice()).splice(a, 1);
                            break
                        }
                i.tween = r
            }
        }

        function dr(t, n, e) {
            var r, i;
            if ("function" != typeof e) throw new Error;
            return function() {
                var o = or(this, t),
                    a = o.tween;
                if (a !== r) {
                    i = (r = a).slice();
                    for (var s = { name: n, value: e }, u = 0, c = i.length; u < c; ++u)
                        if (i[u].name === n) { i[u] = s; break }
                    u === c && i.push(s)
                }
                o.tween = i
            }
        }

        function vr(t, n, e) {
            var r = t._id;
            return t.each((function() {
                    var t = or(this, r);
                    (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                })),
                function(t) { return ar(t, r).value[n] }
        }
        var gr = function(t, n) { var e; return ("number" == typeof n ? It : n instanceof rt ? bt : (e = rt(n)) ? (n = e, bt) : Pt)(t, n) };

        function wr(t) { return function() { this.removeAttribute(t) } }

        function xr(t) { return function() { this.removeAttributeNS(t.space, t.local) } }

        function _r(t, n, e) { var r, i, o = e + ""; return function() { var a = this.getAttribute(t); return a === o ? null : a === r ? i : i = n(r = a, e) } }

        function br(t, n, e) { var r, i, o = e + ""; return function() { var a = this.getAttributeNS(t.space, t.local); return a === o ? null : a === r ? i : i = n(r = a, e) } }

        function Er(t, n, e) {
            var r, i, o;
            return function() {
                var a, s, u = e(this);
                if (null != u) return (a = this.getAttribute(t)) === (s = u + "") ? null : a === r && s === i ? o : (i = s, o = n(r = a, u));
                this.removeAttribute(t)
            }
        }

        function Mr(t, n, e) {
            var r, i, o;
            return function() {
                var a, s, u = e(this);
                if (null != u) return (a = this.getAttributeNS(t.space, t.local)) === (s = u + "") ? null : a === r && s === i ? o : (i = s, o = n(r = a, u));
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function Ar(t, n) { return function(e) { this.setAttribute(t, n.call(this, e)) } }

        function Tr(t, n) { return function(e) { this.setAttributeNS(t.space, t.local, n.call(this, e)) } }

        function kr(t, n) {
            var e, r;

            function i() { var i = n.apply(this, arguments); return i !== r && (e = (r = i) && Tr(t, i)), e }
            return i._value = n, i
        }

        function Ir(t, n) {
            var e, r;

            function i() { var i = n.apply(this, arguments); return i !== r && (e = (r = i) && Ar(t, i)), e }
            return i._value = n, i
        }

        function Sr(t, n) { return function() { ir(this, t).delay = +n.apply(this, arguments) } }

        function Nr(t, n) {
            return n = +n,
                function() { ir(this, t).delay = n }
        }

        function Lr(t, n) { return function() { or(this, t).duration = +n.apply(this, arguments) } }

        function Pr(t, n) {
            return n = +n,
                function() { or(this, t).duration = n }
        }

        function Or(t, n) { if ("function" != typeof n) throw new Error; return function() { or(this, t).ease = n } }

        function Rr(t, n, e) {
            var r, i, o = function(t) { return (t + "").trim().split(/^|\s+/).every((function(t) { var n = t.indexOf("."); return n >= 0 && (t = t.slice(0, n)), !t || "start" === t })) }(n) ? ir : or;
            return function() {
                var a = o(this, t),
                    s = a.on;
                s !== r && (i = (r = s).copy()).on(n, e), a.on = i
            }
        }
        var Hr = Se.prototype.constructor;

        function Yr(t) { return function() { this.style.removeProperty(t) } }

        function jr(t, n, e) { return function(r) { this.style.setProperty(t, n.call(this, r), e) } }

        function Cr(t, n, e) {
            var r, i;

            function o() { var o = n.apply(this, arguments); return o !== i && (r = (i = o) && jr(t, o, e)), r }
            return o._value = n, o
        }

        function zr(t) { return function(n) { this.textContent = t.call(this, n) } }

        function Br(t) {
            var n, e;

            function r() { var r = t.apply(this, arguments); return r !== e && (n = (e = r) && zr(r)), n }
            return r._value = t, r
        }
        var Ur = 0;

        function Fr(t, n, e, r) { this._groups = t, this._parents = n, this._name = e, this._id = r }

        function Dr() { return ++Ur }
        var qr = Se.prototype;
        Fr.prototype = function(t) { return Se().transition(t) }.prototype = {
            constructor: Fr,
            select: function(t) {
                var n = this._name,
                    e = this._id;
                "function" != typeof t && (t = vn(t));
                for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
                    for (var s, u, c = r[a], h = c.length, l = o[a] = new Array(h), f = 0; f < h; ++f)(s = c[f]) && (u = t.call(s, s.__data__, f, c)) && ("__data__" in s && (u.__data__ = s.__data__), l[f] = u, rr(l[f], n, e, f, l, ar(s, e)));
                return new Fr(o, this._parents, n, e)
            },
            selectAll: function(t) {
                var n = this._name,
                    e = this._id;
                "function" != typeof t && (t = xn(t));
                for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
                    for (var u, c = r[s], h = c.length, l = 0; l < h; ++l)
                        if (u = c[l]) {
                            for (var f, p = t.call(u, u.__data__, l, c), m = ar(u, e), y = 0, d = p.length; y < d; ++y)(f = p[y]) && rr(f, n, e, y, p, m);
                            o.push(p), a.push(u)
                        }
                return new Fr(o, a, n, e)
            },
            filter: function(t) {
                "function" != typeof t && (t = _n(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, a = n[i], s = a.length, u = r[i] = [], c = 0; c < s; ++c)(o = a[c]) && t.call(o, o.__data__, c, a) && u.push(o);
                return new Fr(r, this._parents, this._name, this._id)
            },
            merge: function(t) {
                if (t._id !== this._id) throw new Error;
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
                    for (var u, c = n[s], h = e[s], l = c.length, f = a[s] = new Array(l), p = 0; p < l; ++p)(u = c[p] || h[p]) && (f[p] = u);
                for (; s < r; ++s) a[s] = n[s];
                return new Fr(a, this._parents, this._name, this._id)
            },
            selection: function() { return new Hr(this._groups, this._parents) },
            transition: function() {
                for (var t = this._name, n = this._id, e = Dr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                    for (var a, s = r[o], u = s.length, c = 0; c < u; ++c)
                        if (a = s[c]) {
                            var h = ar(a, n);
                            rr(a, t, e, c, s, { time: h.time + h.delay + h.duration, delay: 0, duration: h.duration, ease: h.ease })
                        }
                return new Fr(r, this._parents, t, e)
            },
            call: qr.call,
            nodes: qr.nodes,
            node: qr.node,
            size: qr.size,
            empty: qr.empty,
            each: qr.each,
            on: function(t, n) { var e = this._id; return arguments.length < 2 ? ar(this.node(), e).on.on(t) : this.each(Rr(e, t, n)) },
            attr: function(t, n) {
                var e = Yn(t),
                    r = "transform" === e ? mr : gr;
                return this.attrTween(t, "function" == typeof n ? (e.local ? Mr : Er)(e, r, vr(this, "attr." + t, n)) : null == n ? (e.local ? xr : wr)(e) : (e.local ? br : _r)(e, r, n))
            },
            attrTween: function(t, n) { var e = "attr." + t; if (arguments.length < 2) return (e = this.tween(e)) && e._value; if (null == n) return this.tween(e, null); if ("function" != typeof n) throw new Error; var r = Yn(t); return this.tween(e, (r.local ? kr : Ir)(r, n)) },
            style: function(t, n, e) {
                var r = "transform" == (t += "") ? pr : gr;
                return null == n ? this.styleTween(t, function(t, n) {
                    var e, r, i;
                    return function() {
                        var o = Vn(this, t),
                            a = (this.style.removeProperty(t), Vn(this, t));
                        return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a)
                    }
                }(t, r)).on("end.style." + t, Yr(t)) : "function" == typeof n ? this.styleTween(t, function(t, n, e) {
                    var r, i, o;
                    return function() {
                        var a = Vn(this, t),
                            s = e(this),
                            u = s + "";
                        return null == s && (this.style.removeProperty(t), u = s = Vn(this, t)), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s))
                    }
                }(t, r, vr(this, "style." + t, n))).each(function(t, n) {
                    var e, r, i, o, a = "style." + n,
                        s = "end." + a;
                    return function() {
                        var u = or(this, t),
                            c = u.on,
                            h = null == u.value[a] ? o || (o = Yr(n)) : void 0;
                        c === e && i === h || (r = (e = c).copy()).on(s, i = h), u.on = r
                    }
                }(this._id, t)) : this.styleTween(t, function(t, n, e) { var r, i, o = e + ""; return function() { var a = Vn(this, t); return a === o ? null : a === r ? i : i = n(r = a, e) } }(t, r, n), e).on("end.style." + t, null)
            },
            styleTween: function(t, n, e) { var r = "style." + (t += ""); if (arguments.length < 2) return (r = this.tween(r)) && r._value; if (null == n) return this.tween(r, null); if ("function" != typeof n) throw new Error; return this.tween(r, Cr(t, n, null == e ? "" : e)) },
            text: function(t) {
                return this.tween("text", "function" == typeof t ? function(t) {
                    return function() {
                        var n = t(this);
                        this.textContent = null == n ? "" : n
                    }
                }(vr(this, "text", t)) : function(t) { return function() { this.textContent = t } }(null == t ? "" : t + ""))
            },
            textTween: function(t) { var n = "text"; if (arguments.length < 1) return (n = this.tween(n)) && n._value; if (null == t) return this.tween(n, null); if ("function" != typeof t) throw new Error; return this.tween(n, Br(t)) },
            remove: function() {
                return this.on("end.remove", (t = this._id, function() {
                    var n = this.parentNode;
                    for (var e in this.__transition)
                        if (+e !== t) return;
                    n && n.removeChild(this)
                }));
                var t
            },
            tween: function(t, n) {
                var e = this._id;
                if (t += "", arguments.length < 2) {
                    for (var r, i = ar(this.node(), e).tween, o = 0, a = i.length; o < a; ++o)
                        if ((r = i[o]).name === t) return r.value;
                    return null
                }
                return this.each((null == n ? yr : dr)(e, t, n))
            },
            delay: function(t) { var n = this._id; return arguments.length ? this.each(("function" == typeof t ? Sr : Nr)(n, t)) : ar(this.node(), n).delay },
            duration: function(t) { var n = this._id; return arguments.length ? this.each(("function" == typeof t ? Lr : Pr)(n, t)) : ar(this.node(), n).duration },
            ease: function(t) { var n = this._id; return arguments.length ? this.each(Or(n, t)) : ar(this.node(), n).ease },
            easeVarying: function(t) {
                if ("function" != typeof t) throw new Error;
                return this.each(function(t, n) {
                    return function() {
                        var e = n.apply(this, arguments);
                        if ("function" != typeof e) throw new Error;
                        or(this, t).ease = e
                    }
                }(this._id, t))
            },
            end: function() {
                var t, n, e = this,
                    r = e._id,
                    i = e.size();
                return new Promise((function(o, a) {
                    var s = { value: a },
                        u = { value: function() { 0 == --i && o() } };
                    e.each((function() {
                        var e = or(this, r),
                            i = e.on;
                        i !== t && ((n = (t = i).copy())._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), e.on = n
                    })), 0 === i && o()
                }))
            },
            [Symbol.iterator]: qr[Symbol.iterator]
        };
        var Xr = { time: null, delay: 0, duration: 250, ease: function(t) { return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2 } };

        function $r(t, n) {
            for (var e; !(e = t.__transition) || !(e = e[n]);)
                if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
            return e
        }
        Se.prototype.interrupt = function(t) { return this.each((function() { ur(this, t) })) }, Se.prototype.transition = function(t) {
            var n, e;
            t instanceof Fr ? (n = t._id, t = t._name) : (n = Dr(), (e = Xr).time = Ve(), t = null == t ? null : t + "");
            for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var a, s = r[o], u = s.length, c = 0; c < u; ++c)(a = s[c]) && rr(a, t, n, c, s, e || $r(a, n));
            return new Fr(r, this._parents, t, n)
        };
        var Vr = t => () => t;

        function Wr(t, { sourceEvent: n, target: e, transform: r, dispatch: i }) { Object.defineProperties(this, { type: { value: t, enumerable: !0, configurable: !0 }, sourceEvent: { value: n, enumerable: !0, configurable: !0 }, target: { value: e, enumerable: !0, configurable: !0 }, transform: { value: r, enumerable: !0, configurable: !0 }, _: { value: i } }) }

        function Gr(t, n, e) { this.k = t, this.x = n, this.y = e }
        Gr.prototype = { constructor: Gr, scale: function(t) { return 1 === t ? this : new Gr(this.k * t, this.x, this.y) }, translate: function(t, n) { return 0 === t & 0 === n ? this : new Gr(this.k, this.x + this.k * t, this.y + this.k * n) }, apply: function(t) { return [t[0] * this.k + this.x, t[1] * this.k + this.y] }, applyX: function(t) { return t * this.k + this.x }, applyY: function(t) { return t * this.k + this.y }, invert: function(t) { return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k] }, invertX: function(t) { return (t - this.x) / this.k }, invertY: function(t) { return (t - this.y) / this.k }, rescaleX: function(t) { return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t)) }, rescaleY: function(t) { return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t)) }, toString: function() { return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")" } };
        var Zr = new Gr(1, 0, 0);

        function Kr(t) { t.stopImmediatePropagation() }
        Gr.prototype;
        var Qr = function(t) { t.preventDefault(), t.stopImmediatePropagation() };

        function Jr(t) { return !(t.ctrlKey && "wheel" !== t.type || t.button) }

        function ti() {
            var t = this;
            return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
                [(t = t.viewBox.baseVal).x, t.y],
                [t.x + t.width, t.y + t.height]
            ] : [
                [0, 0],
                [t.width.baseVal.value, t.height.baseVal.value]
            ] : [
                [0, 0],
                [t.clientWidth, t.clientHeight]
            ]
        }

        function ni() { return this.__zoom || Zr }

        function ei(t) { return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey ? 10 : 1) }

        function ri() { return navigator.maxTouchPoints || "ontouchstart" in this }

        function ii(t, n, e) {
            var r = t.invertX(n[0][0]) - e[0][0],
                i = t.invertX(n[1][0]) - e[1][0],
                o = t.invertY(n[0][1]) - e[0][1],
                a = t.invertY(n[1][1]) - e[1][1];
            return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a))
        }
        var oi = e(35),
            ai = e.n(oi);
        var si = e(6),
            ui = e.n(si);
        const ci = { COLORS: ["steelblue", "red", "#05b378", "orange", "#4040e8", "yellow", "brown", "magenta", "cyan"].map((function(t) { return mt(t) })), DEFAULT_WIDTH: 550, DEFAULT_HEIGHT: 350, TIP_X_EPS: 1, DEFAULT_ITERATIONS: null };
        ci.MAX_ITERATIONS = 10 * ci.DEFAULT_WIDTH;
        var hi = ci,
            li = e(9),
            fi = e.n(li),
            pi = e(36),
            mi = e.n(pi),
            yi = e(15),
            di = e.n(yi);
        var vi = {
                isValidNumber: function(t) { return "number" == typeof t && !isNaN(t) },
                space: function(t, n, e) {
                    var r = n[0],
                        i = n[1];
                    return "log" === t.options.xAxis.type ? mi()(di()(r), di()(i), e) : fi()(r, i, e)
                },
                getterSetter: function(t, n) {
                    var e = this;
                    this[n] = function(r) { return arguments.length ? (t[n] = r, e) : t[n] }
                },
                sgn: function(t) { return t < 0 ? -1 : t > 0 ? 1 : 0 },
                color: function(t, n) { return t.color || hi.COLORS[n] }
            },
            gi = e(0);

        function wi(t, n, e, r, i) {
            if (!i) return { asymptote: !0, d0: t, d1: n };
            const o = t[0],
                a = n[0],
                s = fi()(o, a, 10);
            let u, c;
            for (let t = 0; t < 10; t += 1) {
                const n = s[t],
                    o = Object(gi.builtIn)(e, "fn", { x: n });
                if (t && u) { const t = o - u; if (vi.sgn(t) === r) return wi([c, u], [n, o], e, r, i - 1) }
                u = o, c = n
            }
            return { asymptote: !1, d0: t, d1: n }
        }

        function xi(t, n, e, r) {
            const i = vi.space(t, e, r),
                o = t.meta.yScale.domain(),
                a = o[1] - o[0],
                s = o[0] - 1e5 * a,
                u = o[1] + 1e5 * a;
            let c = [];
            for (let t = 0; t < i.length; t += 1) {
                const e = i[t],
                    r = Object(gi.builtIn)(n, "fn", { x: e });
                vi.isValidNumber(e) && vi.isValidNumber(r) && c.push([e, ui()(r, s, u)])
            }
            return c = function(t, n, e) {
                let r, i, o, a = [];
                const s = [],
                    u = t.meta.yScale.domain(),
                    c = u[0],
                    h = u[1];

                function l(t) { return t[1] = Math.min(t[1], h), t[1] = Math.max(t[1], c), t }
                for (e[0] && (a.push(e[0]), o = e[1][0] - e[0][0], i = vi.sgn(e[1][1] - e[0][1])), r = 1; r < e.length;) {
                    const t = e[r - 1][1],
                        u = e[r][1] - t,
                        c = vi.sgn(u);
                    if (i !== c && Math.abs(u / o) > 1) {
                        const t = wi(e[r - 1], e[r], n, c, 3);
                        t.asymptote && (a.push(l(t.d0)), s.push(a), a = [l(t.d1)])
                    }
                    i = c, a.push(e[r]), ++r
                }
                return a.length && s.push(a), s
            }(t, n, c), c
        }

        function _i(t, n, e, r) {
            const i = n.range || [0, 2 * Math.PI],
                o = vi.space(t, i, r),
                a = [];
            for (let t = 0; t < o.length; t += 1) {
                const e = o[t],
                    r = Object(gi.builtIn)(n, "x", { t: e }),
                    i = Object(gi.builtIn)(n, "y", { t: e });
                a.push([r, i])
            }
            return [a]
        }

        function bi(t, n, e, r) {
            const i = n.range || [-Math.PI, Math.PI],
                o = vi.space(t, i, r),
                a = [];
            for (let t = 0; t < o.length; t += 1) {
                const e = o[t],
                    r = Object(gi.builtIn)(n, "r", { theta: e }),
                    i = r * Math.cos(e),
                    s = r * Math.sin(e);
                a.push([i, s])
            }
            return [a]
        }

        function Ei(t, n, e, r) { return [n.points] }

        function Mi(t, n, e, r) {
            return n.offset = n.offset || [0, 0], [
                [n.offset, [n.vector[0] + n.offset[0], n.vector[1] + n.offset[1]]]
            ]
        }
        var Ai = function(t, n, e, r) { const i = { parametric: _i, polar: bi, points: Ei, vector: Mi, linear: xi }; if (!(n.fnType in i)) throw Error(n.fnType + " is not supported in the `builtIn` sampler"); return i[n.fnType].apply(null, arguments) },
            Ti = e(10),
            ki = e.n(Ti);
        const Ii = ki.a.Interval;

        function Si(t, n, e, r) {
            const i = vi.space(t, e, r),
                o = t.meta.xScale,
                a = t.meta.yScale,
                s = a.domain()[0],
                u = a.domain()[1],
                c = [];
            let h;
            for (h = 0; h < i.length - 1; h += 1) {
                const t = { lo: i[h], hi: i[h + 1] },
                    e = Object(gi.interval)(n, "fn", { x: t });
                Ii.isEmpty(e) || Ii.isWhole(e) || c.push([t, e]), Ii.isWhole(e) && c.push(null)
            }
            for (h = 1; h < c.length - 1; h += 1)
                if (!c[h]) {
                    const t = c[h - 1],
                        n = c[h + 1];
                    t && n && !Ii.intervalsOverlap(t[1], n[1]) && (t[1].lo > n[1].hi && (t[1].hi = Math.max(u, t[1].hi), n[1].lo = Math.min(s, n[1].lo)), t[1].hi < n[1].lo && (t[1].lo = Math.min(s, t[1].lo), n[1].hi = Math.max(u, n[1].hi)))
                }
            return c.scaledDx = o(i[1]) - o(i[0]), [c]
        }
        let Ni;

        function Li(t, n, e) {
            const r = Object(gi.interval)(e, "fn", { x: t, y: n });
            if (!Ii.zeroIn(r)) return this;
            if (function(t, n) { return Ii.width(t) < Ni }(t)) return this.push([t, n]), this;
            const i = t.lo + (t.hi - t.lo) / 2,
                o = n.lo + (n.hi - n.lo) / 2,
                a = { lo: i, hi: t.hi },
                s = { lo: t.lo, hi: i },
                u = { lo: o, hi: n.hi },
                c = { lo: n.lo, hi: o };
            Li.call(this, a, u, e), Li.call(this, a, c, e), Li.call(this, s, u, e), Li.call(this, s, c, e)
        }

        function Pi(t, n) {
            const e = t.meta.xScale,
                r = t.meta.xScale.domain(),
                i = t.meta.yScale.domain(),
                o = { lo: r[0], hi: r[1] },
                a = { lo: i[0], hi: i[1] },
                s = [];
            return Ni = e.invert(1) - e.invert(0), Li.call(s, o, a, n), s.scaledDx = 1, [s]
        }
        ki.a.policies.disableRounding();
        const Oi = { interval: function(t, n, e, r) { const i = { implicit: Pi, linear: Si }; if (!i.hasOwnProperty(n.fnType)) throw Error(n.fnType + " is not supported in the `interval` sampler"); return i[n.fnType].apply(null, arguments) }, builtIn: Ai };
        var Ri = function(t, n) {
            const e = function(t, n) { const e = n.range || [-1 / 0, 1 / 0]; return [Math.max(t.domain()[0], e[0]), Math.min(t.domain()[1], e[1])] }(t.meta.xScale, n),
                r = (0, Oi[n.sampler])(t, n, e, n.nSamples || Math.min(hi.MAX_ITERATIONS, hi.DEFAULT_ITERATIONS || 2 * t.meta.width));
            return t.emit("eval", r, n.index, n.isHelper), r
        };

        function Hi(t) {
            return function n(e) {
                e.each((function(e) {
                    const r = n.el = Ne(this),
                        i = e.index,
                        o = Ri(t, e),
                        a = vi.color(e, i),
                        s = r.selectAll(":scope > path.line").data(o),
                        u = t.meta.yScale.range();
                    let f = u[0],
                        v = u[1];
                    const g = f - v;

                    function w(n) { return ui()(t.meta.yScale(n[1]), v, f) }
                    f += 1e6 * g, v -= 1e6 * g, e.skipBoundsCheck && (f = 1 / 0, v = -1 / 0);
                    const x = d().curve(p).x((function(n) { return t.meta.xScale(n[0]) })).y(w),
                        _ = function(t, n, e) {
                            var r = null,
                                i = l(!0),
                                o = null,
                                a = p,
                                s = null;

                            function u(u) {
                                var l, f, p, m, y, d = (u = h(u)).length,
                                    v = !1,
                                    g = new Array(d),
                                    w = new Array(d);
                                for (null == o && (s = a(y = c())), l = 0; l <= d; ++l) {
                                    if (!(l < d && i(m = u[l], l, u)) === v)
                                        if (v = !v) f = l, s.areaStart(), s.lineStart();
                                        else {
                                            for (s.lineEnd(), s.lineStart(), p = l - 1; p >= f; --p) s.point(g[p], w[p]);
                                            s.lineEnd(), s.areaEnd()
                                        }
                                    v && (g[l] = +t(m, l, u), w[l] = +n(m, l, u), s.point(r ? +r(m, l, u) : g[l], e ? +e(m, l, u) : w[l]))
                                }
                                if (y) return s = null, y + "" || null
                            }

                            function f() { return d().defined(i).curve(a).context(o) }
                            return t = "function" == typeof t ? t : void 0 === t ? m : l(+t), n = "function" == typeof n ? n : l(void 0 === n ? 0 : +n), e = "function" == typeof e ? e : void 0 === e ? y : l(+e), u.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : l(+n), r = null, u) : t }, u.x0 = function(n) { return arguments.length ? (t = "function" == typeof n ? n : l(+n), u) : t }, u.x1 = function(t) { return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : l(+t), u) : r }, u.y = function(t) { return arguments.length ? (n = "function" == typeof t ? t : l(+t), e = null, u) : n }, u.y0 = function(t) { return arguments.length ? (n = "function" == typeof t ? t : l(+t), u) : n }, u.y1 = function(t) { return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : l(+t), u) : e }, u.lineX0 = u.lineY0 = function() { return f().x(t).y(n) }, u.lineY1 = function() { return f().x(t).y(e) }, u.lineX1 = function() { return f().x(r).y(n) }, u.defined = function(t) { return arguments.length ? (i = "function" == typeof t ? t : l(!!t), u) : i }, u.curve = function(t) { return arguments.length ? (a = t, null != o && (s = a(o)), u) : a }, u.context = function(t) { return arguments.length ? (null == t ? o = s = null : s = a(o = t), u) : o }, u
                        }().x((function(n) { return t.meta.yScale(n[0]) })).y0(t.meta.yScale(0)).y1(w),
                        b = s.enter().append("path").attr("class", "line line-" + i).attr("stroke-width", 1).attr("stroke-linecap", "round");
                    s.merge(b).each((function() {
                        const n = Ne(this);
                        let r;
                        e.closed ? (n.attr("fill", a), n.attr("fill-opacity", .3), r = _) : (n.attr("fill", "none"), r = x), n.attr("stroke", a).attr("marker-end", (function() { return "vector" === e.fnType ? "url(#" + t.markerId + ")" : null })).attr("d", r)
                    })), s.exit().remove()
                }))
            }
        }

        function Yi(t) { return t.hasOwnProperty("graphType") || (t.graphType = "interval"), t.hasOwnProperty("sampler") || (t.sampler = "interval" !== t.graphType ? "builtIn" : "interval"), t.hasOwnProperty("fnType") || (t.fnType = "linear"), t }

        function ji(t) {
            const n = Yi({ isHelper: !0, skipTip: !0, skipBoundsCheck: !0, nSamples: 2, graphType: "polyline" });
            let e;

            function r(t) { if (!t.derivative) return []; const e = "number" == typeof t.derivative.x0 ? t.derivative.x0 : 1 / 0; return n.index = t.index, n.scope = { m: Object(gi.builtIn)(t.derivative, "fn", { x: e }), x0: e, y0: Object(gi.builtIn)(t, "fn", { x: e }) }, n.fn = "m * (x - x0) + y0", [n] }

            function i(n) {
                const r = this;
                n.derivative && n.derivative.updateOnMouseMove && !n.derivative.$$mouseListener && (n.derivative.$$mouseListener = function({ x: t }) { n.derivative && (n.derivative.x0 = t), e(r) }, t.on("tip:update", n.derivative.$$mouseListener))
            }
            return e = function(n) {
                n.each((function(e) {
                    const o = Ne(this),
                        a = r.call(n, e);
                    i.call(n, e);
                    const s = o.selectAll("g.derivative").data(a),
                        u = s.enter().append("g").attr("class", "derivative");
                    s.merge(u).call(Hi(t)), s.merge(u).selectAll("path").attr("opacity", .5), s.exit().remove()
                }))
            }, e
        }

        function Ci(t) {
            const n = Yi({ isHelper: !0, skipTip: !0, skipBoundsCheck: !0, nSamples: 2, graphType: "polyline" });
            let e;

            function r(t, n) {
                if (!n.hasOwnProperty("x0")) throw Error("secant must have the property `x0` defined");
                n.scope = n.scope || {};
                const e = n.x0,
                    r = "number" == typeof n.x1 ? n.x1 : 1 / 0;
                var i;
                Object.assign(n.scope, { x0: e, x1: r, y0: Object(gi.builtIn)(t, "fn", { x: e }), y1: Object(gi.builtIn)(t, "fn", { x: r }) }), (i = n.scope).m = (i.y1 - i.y0) / (i.x1 - i.x0)
            }

            function i(t, n) { r(t, n), n.fn = "m * (x - x0) + y0" }

            function o(n, i) {
                const o = this;
                i.updateOnMouseMove && !i.$$mouseListener && (i.$$mouseListener = function({ x: t }) { i.x1 = t, r(n, i), e(o) }, t.on("tip:update", i.$$mouseListener))
            }

            function a(t) {
                const e = this,
                    r = [];
                t.secants = t.secants || [];
                for (let a = 0; a < t.secants.length; a += 1) {
                    const s = t.secants[a] = Object.assign({}, n, t.secants[a]);
                    s.index = t.index, s.fn || (i.call(e, t, s), o.call(e, t, s)), r.push(s)
                }
                return r
            }
            return e = function(n) {
                n.each((function(e) {
                    const r = Ne(this),
                        i = a.call(n, e),
                        o = r.selectAll("g.secant").data(i),
                        s = o.enter().append("g").attr("class", "secant");
                    o.merge(s).call(Hi(t)), o.merge(s).selectAll("path").attr("opacity", .5), o.exit().remove()
                }))
            }, e
        }

        function zi(t) {
            let n;
            const e = t.meta.xScale,
                r = t.meta.yScale;

            function i(t, e, r, i) {
                if (r > i) {
                    const t = r;
                    r = i, i = t
                }
                const o = Math.min(e, i),
                    a = Math.max(t, r);
                return a > o ? [-n, 0] : [a, o]
            }
            return function o(a) {
                a.each((function(a) {
                    const s = o.el = Ne(this),
                        u = a.index,
                        c = a.closed,
                        h = Ri(t, a),
                        l = s.selectAll(":scope > path.line").data(h);
                    n = Math.max(h[0].scaledDx, 1);
                    const f = l.enter().append("path").attr("class", "line line-" + u).attr("fill", "none");
                    l.merge(f).attr("stroke-width", n).attr("stroke", vi.color(a, u)).attr("opacity", c ? .5 : 1).attr("d", (function(t) {
                        return function(t, o) {
                            let a = "";
                            const s = r.range(),
                                u = Math.min.apply(Math, s),
                                c = Math.max.apply(Math, s);
                            for (let s = 0, h = t.length; s < h; s += 1)
                                if (t[s]) {
                                    const h = t[s][0],
                                        l = t[s][1];
                                    let f = l.lo,
                                        p = l.hi;
                                    o && (f = Math.min(f, 0), p = Math.max(p, 0));
                                    const m = e(h.lo) + t.scaledDx / 2,
                                        y = i(u, c, isFinite(p) ? r(p) : -1 / 0, isFinite(f) ? r(f) : 1 / 0),
                                        d = y[0],
                                        v = y[1];
                                    a += " M " + m + " " + d, a += " v " + Math.max(v - d, n)
                                }
                            return a
                        }(t, c)
                    })).attr(a.attr), l.exit().remove()
                }))
            }
        }

        function Bi(t) {
            const n = t.meta.xScale,
                e = t.meta.yScale;
            return function(r) {
                r.each((function(r) {
                    let i, o;
                    const a = r.index,
                        s = vi.color(r, a),
                        u = Ri(t, r),
                        c = [];
                    for (i = 0; i < u.length; i += 1)
                        for (o = 0; o < u[i].length; o += 1) c.push(u[i][o]);
                    const h = Ne(this).selectAll(":scope > circle").data(c),
                        l = h.enter().append("circle");
                    h.merge(l).attr("fill", mt(s.toString()).brighter(1.5)).attr("stroke", s).attr("opacity", .7).attr("r", 1).attr("cx", (function(t) { return n(t[0]) })).attr("cy", (function(t) { return e(t[1]) })).attr(r.attr), h.exit().remove()
                }))
            }
        }
        e(74);
        const Ui = { linear: function t() { var n = Dt(); return n.copy = function() { return Ut(n, t()) }, qt.apply(n, arguments), $t(n) }, log: function t() { var n = Jt(Ft()).domain([1, 10]); return n.copy = function() { return Ut(n, t()).base(n.base()) }, qt.apply(n, arguments), n } };
        class Fi extends ai.a {
            constructor(t) {
                super();
                const n = Math.random(),
                    e = String.fromCharCode(Math.floor(26 * n) + 97);
                this.id = t.id = e + n.toString(16).substr(2), Fi.cache[this.id] = this, this.linkedGraphs = [this], this.options = t, this.meta = {}, this.setUpEventListeners()
            }
            build() { return this.internalVars(), this.drawGraphWrapper(), this }
            internalVars() {
                const t = this,
                    n = this.meta.margin = { left: 40, right: 20, top: 20, bottom: 20 };
                this.options.title && (this.meta.margin.top = 40), this.meta.width = (this.options.width || hi.DEFAULT_WIDTH) - n.left - n.right, this.meta.height = (this.options.height || hi.DEFAULT_HEIGHT) - n.top - n.bottom, this.initializeAxes(), this.meta.zoomBehavior || (this.meta.zoomBehavior = function() {
                    var t, n, e, r = Jr,
                        i = ti,
                        o = ii,
                        a = ei,
                        s = ri,
                        u = [0, 1 / 0],
                        c = [
                            [-1 / 0, -1 / 0],
                            [1 / 0, 1 / 0]
                        ],
                        h = 250,
                        l = je,
                        f = yn("start", "zoom", "end"),
                        p = 0,
                        m = 10;

                    function y(t) { t.property("__zoom", ni).on("wheel.zoom", b).on("mousedown.zoom", E).on("dblclick.zoom", M).filter(s).on("touchstart.zoom", A).on("touchmove.zoom", T).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)") }

                    function d(t, n) { return (n = Math.max(u[0], Math.min(u[1], n))) === t.k ? t : new Gr(n, t.x, t.y) }

                    function v(t, n, e) {
                        var r = n[0] - e[0] * t.k,
                            i = n[1] - e[1] * t.k;
                        return r === t.x && i === t.y ? t : new Gr(t.k, r, i)
                    }

                    function g(t) { return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2] }

                    function w(t, n, e, r) {
                        t.on("start.zoom", (function() { x(this, arguments).event(r).start() })).on("interrupt.zoom end.zoom", (function() { x(this, arguments).event(r).end() })).tween("zoom", (function() {
                            var t = this,
                                o = arguments,
                                a = x(t, o).event(r),
                                s = i.apply(t, o),
                                u = null == e ? g(s) : "function" == typeof e ? e.apply(t, o) : e,
                                c = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]),
                                h = t.__zoom,
                                f = "function" == typeof n ? n.apply(t, o) : n,
                                p = l(h.invert(u).concat(c / h.k), f.invert(u).concat(c / f.k));
                            return function(t) {
                                if (1 === t) t = f;
                                else {
                                    var n = p(t),
                                        e = c / n[2];
                                    t = new Gr(e, u[0] - n[0] * e, u[1] - n[1] * e)
                                }
                                a.zoom(null, t)
                            }
                        }))
                    }

                    function x(t, n, e) { return !e && t.__zooming || new _(t, n) }

                    function _(t, n) { this.that = t, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = i.apply(t, n), this.taps = 0 }

                    function b(t, ...n) {
                        if (r.apply(this, arguments)) {
                            var e = x(this, n).event(t),
                                i = this.__zoom,
                                s = Math.max(u[0], Math.min(u[1], i.k * Math.pow(2, a.apply(this, arguments)))),
                                h = Ce(t);
                            if (e.wheel) e.mouse[0][0] === h[0] && e.mouse[0][1] === h[1] || (e.mouse[1] = i.invert(e.mouse[0] = h)), clearTimeout(e.wheel);
                            else {
                                if (i.k === s) return;
                                e.mouse = [h, i.invert(h)], ur(this), e.start()
                            }
                            Qr(t), e.wheel = setTimeout(l, 150), e.zoom("mouse", o(v(d(i, s), e.mouse[0], e.mouse[1]), e.extent, c))
                        }

                        function l() { e.wheel = null, e.end() }
                    }

                    function E(t, ...n) {
                        if (!e && r.apply(this, arguments)) {
                            var i = x(this, n, !0).event(t),
                                a = Ne(t.view).on("mousemove.zoom", f, !0).on("mouseup.zoom", m, !0),
                                s = Ce(t, u),
                                u = t.currentTarget,
                                h = t.clientX,
                                l = t.clientY;
                            Pe(t.view), Kr(t), i.mouse = [s, this.__zoom.invert(s)], ur(this), i.start()
                        }

                        function f(t) {
                            if (Qr(t), !i.moved) {
                                var n = t.clientX - h,
                                    e = t.clientY - l;
                                i.moved = n * n + e * e > p
                            }
                            i.event(t).zoom("mouse", o(v(i.that.__zoom, i.mouse[0] = Ce(t, u), i.mouse[1]), i.extent, c))
                        }

                        function m(t) { a.on("mousemove.zoom mouseup.zoom", null), Oe(t.view, i.moved), Qr(t), i.event(t).end() }
                    }

                    function M(t, ...n) {
                        if (r.apply(this, arguments)) {
                            var e = this.__zoom,
                                a = Ce(t.changedTouches ? t.changedTouches[0] : t, this),
                                s = e.invert(a),
                                u = e.k * (t.shiftKey ? .5 : 2),
                                l = o(v(d(e, u), a, s), i.apply(this, n), c);
                            Qr(t), h > 0 ? Ne(this).transition().duration(h).call(w, l, a, t) : Ne(this).call(y.transform, l, a, t)
                        }
                    }

                    function A(e, ...i) {
                        if (r.apply(this, arguments)) {
                            var o, a, s, u, c = e.touches,
                                h = c.length,
                                l = x(this, i, e.changedTouches.length === h).event(e);
                            for (Kr(e), a = 0; a < h; ++a) s = c[a], u = [u = Ce(s, this), this.__zoom.invert(u), s.identifier], l.touch0 ? l.touch1 || l.touch0[2] === u[2] || (l.touch1 = u, l.taps = 0) : (l.touch0 = u, o = !0, l.taps = 1 + !!t);
                            t && (t = clearTimeout(t)), o && (l.taps < 2 && (n = u[0], t = setTimeout((function() { t = null }), 500)), ur(this), l.start())
                        }
                    }

                    function T(t, ...n) {
                        if (this.__zooming) {
                            var e, r, i, a, s = x(this, n).event(t),
                                u = t.changedTouches,
                                h = u.length;
                            for (Qr(t), e = 0; e < h; ++e) r = u[e], i = Ce(r, this), s.touch0 && s.touch0[2] === r.identifier ? s.touch0[0] = i : s.touch1 && s.touch1[2] === r.identifier && (s.touch1[0] = i);
                            if (r = s.that.__zoom, s.touch1) {
                                var l = s.touch0[0],
                                    f = s.touch0[1],
                                    p = s.touch1[0],
                                    m = s.touch1[1],
                                    y = (y = p[0] - l[0]) * y + (y = p[1] - l[1]) * y,
                                    g = (g = m[0] - f[0]) * g + (g = m[1] - f[1]) * g;
                                r = d(r, Math.sqrt(y / g)), i = [(l[0] + p[0]) / 2, (l[1] + p[1]) / 2], a = [(f[0] + m[0]) / 2, (f[1] + m[1]) / 2]
                            } else {
                                if (!s.touch0) return;
                                i = s.touch0[0], a = s.touch0[1]
                            }
                            s.zoom("touch", o(v(r, i, a), s.extent, c))
                        }
                    }

                    function k(t, ...r) {
                        if (this.__zooming) {
                            var i, o, a = x(this, r).event(t),
                                s = t.changedTouches,
                                u = s.length;
                            for (Kr(t), e && clearTimeout(e), e = setTimeout((function() { e = null }), 500), i = 0; i < u; ++i) o = s[i], a.touch0 && a.touch0[2] === o.identifier ? delete a.touch0 : a.touch1 && a.touch1[2] === o.identifier && delete a.touch1;
                            if (a.touch1 && !a.touch0 && (a.touch0 = a.touch1, delete a.touch1), a.touch0) a.touch0[1] = this.__zoom.invert(a.touch0[0]);
                            else if (a.end(), 2 === a.taps && (o = Ce(o, this), Math.hypot(n[0] - o[0], n[1] - o[1]) < m)) {
                                var c = Ne(this).on("dblclick.zoom");
                                c && c.apply(this, arguments)
                            }
                        }
                    }
                    return y.transform = function(t, n, e, r) {
                        var i = t.selection ? t.selection() : t;
                        i.property("__zoom", ni), t !== i ? w(t, n, e, r) : i.interrupt().each((function() { x(this, arguments).event(r).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end() }))
                    }, y.scaleBy = function(t, n, e, r) {
                        y.scaleTo(t, (function() {
                            var t = this.__zoom.k,
                                e = "function" == typeof n ? n.apply(this, arguments) : n;
                            return t * e
                        }), e, r)
                    }, y.scaleTo = function(t, n, e, r) {
                        y.transform(t, (function() {
                            var t = i.apply(this, arguments),
                                r = this.__zoom,
                                a = null == e ? g(t) : "function" == typeof e ? e.apply(this, arguments) : e,
                                s = r.invert(a),
                                u = "function" == typeof n ? n.apply(this, arguments) : n;
                            return o(v(d(r, u), a, s), t, c)
                        }), e, r)
                    }, y.translateBy = function(t, n, e, r) { y.transform(t, (function() { return o(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), i.apply(this, arguments), c) }), null, r) }, y.translateTo = function(t, n, e, r, a) {
                        y.transform(t, (function() {
                            var t = i.apply(this, arguments),
                                a = this.__zoom,
                                s = null == r ? g(t) : "function" == typeof r ? r.apply(this, arguments) : r;
                            return o(Zr.translate(s[0], s[1]).scale(a.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, c)
                        }), r, a)
                    }, _.prototype = {
                        event: function(t) { return t && (this.sourceEvent = t), this },
                        start: function() { return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this },
                        zoom: function(t, n) { return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this },
                        end: function() { return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this },
                        emit: function(t) {
                            var n = Ne(this.that).datum();
                            f.call(t, this.that, new Wr(t, { sourceEvent: this.sourceEvent, target: y, type: t, transform: this.that.__zoom, dispatch: f }), n)
                        }
                    }, y.wheelDelta = function(t) { return arguments.length ? (a = "function" == typeof t ? t : Vr(+t), y) : a }, y.filter = function(t) { return arguments.length ? (r = "function" == typeof t ? t : Vr(!!t), y) : r }, y.touchable = function(t) { return arguments.length ? (s = "function" == typeof t ? t : Vr(!!t), y) : s }, y.extent = function(t) {
                        return arguments.length ? (i = "function" == typeof t ? t : Vr([
                            [+t[0][0], +t[0][1]],
                            [+t[1][0], +t[1][1]]
                        ]), y) : i
                    }, y.scaleExtent = function(t) { return arguments.length ? (u[0] = +t[0], u[1] = +t[1], y) : [u[0], u[1]] }, y.translateExtent = function(t) {
                        return arguments.length ? (c[0][0] = +t[0][0], c[1][0] = +t[1][0], c[0][1] = +t[0][1], c[1][1] = +t[1][1], y) : [
                            [c[0][0], c[0][1]],
                            [c[1][0], c[1][1]]
                        ]
                    }, y.constrain = function(t) { return arguments.length ? (o = t, y) : o }, y.duration = function(t) { return arguments.length ? (h = +t, y) : h }, y.interpolate = function(t) { return arguments.length ? (l = t, y) : l }, y.on = function() { var t = f.on.apply(f, arguments); return t === f ? y : t }, y.clickDistance = function(t) { return arguments.length ? (p = (t = +t) * t, y) : Math.sqrt(p) }, y.tapDistance = function(t) { return arguments.length ? (m = +t, y) : m }, y
                }().on("zoom", (function(n) { t.emit("all:zoom", n) })), t.meta.zoomBehavior.xScale = t.meta.xScale.copy(), t.meta.zoomBehavior.yScale = t.meta.yScale.copy()), t.meta.zoomBehavior.xScale.range(t.meta.xScale.range()), t.meta.zoomBehavior.yScale.range(t.meta.yScale.range())
            }
            initializeAxes() {
                const t = this,
                    n = M("~s"),
                    e = M("~e"),
                    r = function() { return function(t) { return t === +t && t === (0 | t) ? n(t) : e(t) } };
                this.options.xAxis = this.options.xAxis || {}, this.options.xAxis.type = this.options.xAxis.type || "linear", this.options.yAxis = this.options.yAxis || {}, this.options.yAxis.type = this.options.yAxis.type || "linear";
                const i = this.meta.xDomain = function(t) { if (t.domain) return t.domain; if ("linear" === t.type) { const t = 12; return [-t / 2, t / 2] } if ("log" === t.type) return [1, 10]; throw Error("axis type " + t.type + " unsupported") }(this.options.xAxis),
                    o = this.meta.yDomain = function(n) { if (n.domain) return n.domain; const e = function(n) { const e = n[1] - n[0]; return t.meta.height * e / t.meta.width }(i); if ("linear" === n.type) return [-e / 2, e / 2]; if ("log" === n.type) return [1, 10]; throw Error("axis type " + n.type + " unsupported") }(this.options.yAxis);
                if (i[0] >= i[1]) throw Error("the pair defining the x-domain is inverted");
                if (o[0] >= o[1]) throw Error("the pair defining the y-domain is inverted");
                this.meta.xScale || (this.meta.xScale = Ui[this.options.xAxis.type]()), this.meta.xScale.domain(i).range(this.options.xAxis.invert ? [this.meta.width, 0] : [0, this.meta.width]), this.meta.yScale || (this.meta.yScale = Ui[this.options.yAxis.type]()), this.meta.yScale.domain(o).range(this.options.yAxis.invert ? [0, this.meta.height] : [this.meta.height, 0]), this.meta.xAxis || (this.meta.xAxis = un(3, this.meta.xScale)), this.meta.xAxis.tickSize(this.options.grid ? -this.meta.height : 0).tickFormat(r(this.meta.xScale)), this.meta.yAxis || (this.meta.yAxis = function(t) { return un(4, t) }(this.meta.yScale)), this.meta.yAxis.tickSize(this.options.grid ? -this.meta.width : 0).tickFormat(r(this.meta.yScale)), this.line = d().x((function(n) { return t.meta.xScale(n[0]) })).y((function(n) { return t.meta.yScale(n[1]) }))
            }
            drawGraphWrapper() {
                const t = this.root = Ne(this.options.target).selectAll("svg").data([this.options]);
                this.root.enter = t.enter().append("svg").attr("class", "function-plot").attr("font-size", this.getFontSize()), t.merge(this.root.enter).attr("width", this.meta.width + this.meta.margin.left + this.meta.margin.right).attr("height", this.meta.height + this.meta.margin.top + this.meta.margin.bottom), this.buildTitle(), this.buildLegend(), this.buildCanvas(), this.buildClip(), this.buildAxis(), this.buildAxisLabel(), this.draw();
                const n = this.tip = function(t) {
                    t = Object.assign({ xLine: !1, yLine: !1, renderer: function(t, n) { return "(" + t.toFixed(3) + ", " + n.toFixed(3) + ")" }, owner: null }, t);
                    const n = d().x((function(t) { return t[0] })).y((function(t) { return t[1] }));

                    function e(t, e) { return t.append("path").datum(e).attr("stroke", "grey").attr("stroke-dasharray", "5,5").attr("opacity", .5).attr("d", n) }

                    function r(n) {
                        const i = n.selectAll("g.tip").data((function(t) { return [t] })),
                            o = i.enter().append("g").attr("class", "tip").attr("clip-path", "url(#function-plot-clip-" + t.owner.id + ")"),
                            a = r.join = i.merge(o).selectAll("g.inner-tip").data((function(t) { return [t] })),
                            s = r.enter = a.enter().append("g").attr("class", "inner-tip").style("display", "none").each((function() {
                                const n = Ne(this);
                                e(n, [
                                    [0, -t.owner.meta.height - 20],
                                    [0, t.owner.meta.height + 20]
                                ]).attr("class", "tip-x-line").style("display", "none"), e(n, [
                                    [-t.owner.meta.width - 20, 0],
                                    [t.owner.meta.width + 20, 0]
                                ]).attr("class", "tip-y-line").style("display", "none"), n.append("circle").attr("r", 3), n.append("text").attr("transform", "translate(5,-5)")
                            }));
                        a.merge(s).selectAll(".tip-x-line").style("display", t.xLine ? null : "none"), a.merge(s).selectAll(".tip-y-line").style("display", t.yLine ? null : "none")
                    }
                    return r.move = function(n) {
                        let e, i, o, a = 1 / 0,
                            s = -1;
                        const u = r.join.merge(r.enter),
                            c = t.owner.meta,
                            h = u.datum().data,
                            l = c.xScale,
                            f = c.yScale,
                            p = c.width,
                            m = c.height,
                            y = n.x,
                            d = n.y;
                        for (e = 0; e < h.length; e += 1) {
                            if (h[e].skipTip || "linear" !== h[e].fnType) continue;
                            const t = h[e].range || [-1e8, 1e8];
                            let n;
                            if (y > t[0] - hi.TIP_X_EPS && y < t[1] + hi.TIP_X_EPS) {
                                try { n = Object(gi.builtIn)(h[e], "fn", { x: y }) } catch (t) {}
                                if (vi.isValidNumber(n)) {
                                    const t = Math.abs(n - d);
                                    t < a && (a = t, s = e)
                                }
                            }
                        }
                        if (-1 !== s) {
                            i = y, h[s].range && (i = Math.max(i, h[s].range[0]), i = Math.min(i, h[s].range[1])), o = Object(gi.builtIn)(h[s], "fn", { x: i }), r.show(), t.owner.emit("tip:update", { x: i, y: o, index: s });
                            const n = ui()(i, l.invert(-20), l.invert(p + 20)),
                                e = ui()(o, f.invert(m + 20), f.invert(-20)),
                                a = vi.color(h[s], s);
                            u.style("color", "red"), u.attr("transform", "translate(" + l(n) + "," + f(e) + ")"), u.select("circle").attr("fill", a), u.select("text").attr("fill", a).text(t.renderer(i, o, s))
                        } else r.hide()
                    }, r.show = function() { r.join.merge(r.enter).style("display", null) }, r.hide = function() { r.join.merge(r.enter).style("display", "none") }, Object.keys(t).forEach((function(n) { vi.getterSetter.call(r, t, n) })), r
                }(Object.assign(this.options.tip || {}, { owner: this }));
                this.canvas.merge(this.canvas.enter).call(n), this.buildZoomHelper(), this.setUpPlugins()
            }
            buildTitle() {
                const t = this.root.merge(this.root.enter).selectAll("text.title").data((function(t) { return [t.title].filter(Boolean) }));
                t.enter().append("text").attr("class", "title").attr("y", this.meta.margin.top / 2).attr("x", this.meta.margin.left + this.meta.width / 2).attr("font-size", 25).attr("text-anchor", "middle").attr("alignment-baseline", "middle").text(this.options.title), t.exit().remove()
            }
            buildLegend() { this.root.enter.append("text").attr("class", "top-right-legend").attr("text-anchor", "end"), this.root.merge(this.root.enter).select(".top-right-legend").attr("y", this.meta.margin.top / 2).attr("x", this.meta.width + this.meta.margin.left) }
            buildCanvas() {
                const t = this.canvas = this.root.merge(this.root.enter).selectAll(".canvas").data((function(t) { return [t] }));
                this.canvas.enter = t.enter().append("g").attr("class", "canvas")
            }
            buildClip() {
                const t = this.id,
                    n = this.canvas.enter.append("defs");
                n.append("clipPath").attr("id", "function-plot-clip-" + t).append("rect").attr("class", "clip static-clip"), this.canvas.merge(this.canvas.enter).selectAll(".clip").attr("width", this.meta.width).attr("height", this.meta.height), this.markerId = this.id + "-marker", n.append("clipPath").append("marker").attr("id", this.markerId).attr("viewBox", "0 -5 10 10").attr("refX", 10).attr("markerWidth", 5).attr("markerHeight", 5).attr("orient", "auto").append("svg:path").attr("d", "M0,-5L10,0L0,5L0,0").attr("stroke-width", "0px").attr("fill-opacity", 1).attr("fill", "#777")
            }
            buildAxis() {
                const t = this.canvas.enter;
                t.append("g").attr("class", "x axis"), t.append("g").attr("class", "y axis"), this.canvas.merge(this.canvas.enter).select(".x.axis").attr("transform", "translate(0," + this.meta.height + ")").call(this.meta.xAxis), this.canvas.merge(this.canvas.enter).select(".y.axis").call(this.meta.yAxis)
            }
            buildAxisLabel() {
                const t = this.canvas,
                    n = t.merge(t.enter).selectAll("text.x.axis-label").data((function(t) { return [t.xAxis.label].filter(Boolean) })),
                    e = n.enter().append("text").attr("class", "x axis-label").attr("text-anchor", "end");
                n.merge(e).attr("x", this.meta.width).attr("y", this.meta.height - 6).text((function(t) { return t })), n.exit().remove();
                const r = t.merge(t.enter).selectAll("text.y.axis-label").data((function(t) { return [t.yAxis.label].filter(Boolean) })),
                    i = r.enter().append("text").attr("class", "y axis-label").attr("y", 6).attr("dy", ".75em").attr("text-anchor", "end").attr("transform", "rotate(-90)");
                r.merge(i).text((function(t) { return t })), r.exit().remove()
            }
            buildContent() {
                const t = this,
                    n = this.canvas;
                n.merge(n.enter).attr("transform", "translate(" + this.meta.margin.left + "," + this.meta.margin.top + ")");
                const e = this.content = n.merge(n.enter).selectAll(":scope > g.content").data((function(t) { return [t] })),
                    i = e.enter().append("g").attr("clip-path", "url(#function-plot-clip-" + this.id + ")").attr("class", "content");
                if ("linear" === this.options.xAxis.type) {
                    const t = e.merge(i).selectAll(":scope > path.y.origin").data([
                            [
                                [0, this.meta.yScale.domain()[0]],
                                [0, this.meta.yScale.domain()[1]]
                            ]
                        ]),
                        n = t.enter().append("path").attr("class", "y origin").attr("stroke", "black").attr("opacity", .2);
                    t.merge(n).attr("d", this.line)
                }
                if ("linear" === this.options.yAxis.type) {
                    const t = e.merge(i).selectAll(":scope > path.x.origin").data([
                            [
                                [this.meta.xScale.domain()[0], 0],
                                [this.meta.xScale.domain()[1], 0]
                            ]
                        ]),
                        n = t.enter().append("path").attr("class", "x origin").attr("stroke", "black").attr("opacity", .2);
                    t.merge(n).attr("d", this.line)
                }
                e.merge(i).call(function(t) {
                    let n;
                    const e = t.owner.meta.xScale,
                        r = t.owner.meta.yScale,
                        i = d().x((function(t) { return t[0] })).y((function(t) { return t[1] }));
                    return n = function(t) {
                        t.each((function() {
                            const t = Ne(this).selectAll("g.annotations").data((function(t) { return t.annotations || [] })),
                                n = t.enter().append("g").attr("class", "annotations"),
                                o = r.range(),
                                a = e.range(),
                                s = t.merge(n).selectAll("path").data((function(t) {
                                    return "x" in t ? [
                                        [
                                            [0, o[0]],
                                            [0, o[1]]
                                        ]
                                    ] : [
                                        [
                                            [a[0], 0],
                                            [a[1], 0]
                                        ]
                                    ]
                                }));
                            s.enter().append("path").attr("stroke", "#eee").attr("d", i), s.exit().remove();
                            const u = t.merge(n).selectAll("text").data((function(t) { return [{ text: t.text || "", hasX: "x" in t }] }));
                            u.enter().append("text").attr("y", (function(t) { return t.hasX ? 3 : 0 })).attr("x", (function(t) { return t.hasX ? 0 : 3 })).attr("dy", (function(t) { return t.hasX ? 5 : -5 })).attr("text-anchor", (function(t) { return t.hasX ? "end" : "" })).attr("transform", (function(t) { return t.hasX ? "rotate(-90)" : "" })).text((function(t) { return t.text })), u.exit().remove(), t.merge(n).attr("transform", (function(t) { return "x" in t ? "translate(" + e(t.x) + ", 0)" : "translate(0, " + r(t.y) + ")" })), t.exit().remove()
                        }))
                    }, n
                }({ owner: t }));
                const o = e.merge(i).selectAll(":scope > g.graph").data(t => t.data.map(Yi)),
                    a = o.enter().append("g").attr("class", "graph");
                o.merge(a).each((function(n, e) {
                    n.index = e;
                    const i = Ne(this);
                    var o;
                    i.call(r[n.graphType](t)), i.call((o = t, function(t) {
                        t.each((function() {
                            const t = Ne(this);
                            t.call(ji(o)), t.call(Ci(o))
                        }))
                    }))
                }))
            }
            buildZoomHelper() {
                const t = this;
                this.canvas.enter.append("rect").call(this.meta.zoomBehavior).attr("class", "zoom-and-drag").style("fill", "none").style("pointer-events", "all").on("mouseover", (function(n) { t.emit("all:mouseover", n) })).on("mouseout", (function(n) { t.emit("all:mouseout", n) })).on("mousemove", (function(n) { t.emit("all:mousemove", n) })), this.draggable = this.canvas.merge(this.canvas.enter).select(".zoom-and-drag").attr("width", this.meta.width).attr("height", this.meta.height)
            }
            setUpPlugins() {
                const t = this.options.plugins || [],
                    n = this;
                t.forEach((function(t) { t(n) }))
            }
            addLink() { for (let t = 0; t < arguments.length; t += 1) this.linkedGraphs.push(arguments[t]) }
            updateAxes() {
                const t = this.canvas.merge(this.canvas.enter);
                t.select(".x.axis").call(this.meta.xAxis), t.select(".y.axis").call(this.meta.yAxis), t.selectAll(".axis path, .axis line").attr("fill", "none").attr("stroke", "black").attr("shape-rendering", "crispedges").attr("opacity", .1)
            }
            syncOptions() { this.options.xAxis.domain = this.meta.xScale.domain(), this.options.yAxis.domain = this.meta.yScale.domain() }
            getFontSize() { return Math.max(Math.max(this.meta.width, this.meta.height) / 50, 8) }
            draw() { this.emit("before:draw"), this.syncOptions(), this.updateAxes(), this.buildContent(), this.emit("after:draw") }
            setUpEventListeners() {
                const t = this,
                    n = {
                        mousemove: function(n) { t.tip.move(n) },
                        mouseover: function() { t.tip.show() },
                        mouseout: function() { t.tip.hide() },
                        zoom: function({ transform: n }) {
                            if (t.options.disableZoom) return;
                            const e = n.rescaleX(t.meta.zoomBehavior.xScale).interpolate(Rt),
                                r = n.rescaleY(t.meta.zoomBehavior.yScale).interpolate(Rt);
                            t.meta.xScale.domain(e.domain()).range(e.range()), t.meta.yScale.domain(r.domain()).range(r.range())
                        },
                        "tip:update": function({ x: n, y: e, index: r }) {
                            const i = t.root.merge(t.root.enter).datum().data[r],
                                o = i.title || "",
                                a = i.renderer || function(t, n) { return t.toFixed(3) + ", " + n.toFixed(3) },
                                s = [];
                            o && s.push(o), s.push(a(n, e)), t.root.select(".top-right-legend").attr("fill", hi.COLORS[r]).text(s.join(" "))
                        }
                    },
                    e = {
                        mousemove: function(n) {
                            const e = Ce(n, t.draggable.node()),
                                r = { x: t.meta.xScale.invert(e[0]), y: t.meta.yScale.invert(e[1]) };
                            t.linkedGraphs.forEach((function(t) { t.emit("before:mousemove", r), t.emit("mousemove", r) }))
                        },
                        zoom: function(n) { t.linkedGraphs.forEach((function(e) { e.draggable.node().__zoom = t.draggable.node().__zoom, e.emit("zoom", n), e.draw() })), t.emit("all:mousemove", n) }
                    };
                Object.keys(n).forEach((function(r) {
                    !e[r] && t.on("all:" + r, (function() {
                        const n = Array.prototype.slice.call(arguments);
                        t.linkedGraphs.forEach((function(t) {
                            const e = n.slice();
                            e.unshift(r), t.emit.apply(t, e)
                        }))
                    })), t.on(r, n[r])
                })), Object.keys(e).forEach((function(n) { t.on("all:" + n, e[n]) }))
            }
        }

        function Di(t = {}) { t.data = t.data || []; let n = Fi.cache[t.id]; return n || (n = new Fi(t)), n.build() }
        Fi.cache = [], Di.globals = hi, Di.$eval = gi, Di.graphTypes = r;
        n.default = Di
    }]).default
}));
//# sourceMappingURL=function-plot.js.map
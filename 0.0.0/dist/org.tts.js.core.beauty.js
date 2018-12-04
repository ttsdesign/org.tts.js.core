(function(NS) {
    !function(NS) {
        const Define = function() {
            function o(v, w) {
                return {}.hasOwnProperty.call(v, w);
            }
            const q = function() {
                function v(F) {
                    return F.constructor ? F.constructor.name : null;
                }
                var E = Object.prototype.toString;
                return function(F) {
                    if (void 0 === F) return "undefined";
                    if (null === F) return "null";
                    var G = typeof F;
                    if ("boolean" == G) return "boolean";
                    if ("string" == G) return "string";
                    if ("number" == G) return "number";
                    if ("symbol" == G) return "symbol";
                    if ("function" == G) return function A(F) {
                        return "GeneratorFunction" === v(F);
                    }(F) ? "generatorfunction" : "function";
                    if (function w(F) {
                        return Array.isArray ? Array.isArray(F) : F instanceof Array;
                    }(F)) return "array";
                    if (function D(F) {
                        return F.constructor && "function" == typeof F.constructor.isBuffer && F.constructor.isBuffer(F);
                    }(F)) return "buffer";
                    if (function C(F) {
                        try {
                            if ("number" == typeof F.length && "function" == typeof F.callee) return !0;
                        } catch (G) {
                            if (-1 !== G.message.indexOf("callee")) return !0;
                        }
                        return !1;
                    }(F)) return "arguments";
                    if (function y(F) {
                        return !!(F instanceof Date) || "function" == typeof F.toDateString && "function" == typeof F.getDate && "function" == typeof F.setDate;
                    }(F)) return "date";
                    if (function x(F) {
                        return F instanceof Error || "string" == typeof F.message && F.constructor && "number" == typeof F.constructor.stackTraceLimit;
                    }(F)) return "error";
                    if (function z(F) {
                        return !!(F instanceof RegExp) || "string" == typeof F.flags && "boolean" == typeof F.ignoreCase && "boolean" == typeof F.multiline && "boolean" == typeof F.global;
                    }(F)) return "regexp";
                    switch (v(F)) {
                      case "Symbol":
                        return "symbol";

                      case "Promise":
                        return "promise";

                      case "WeakMap":
                        return "weakmap";

                      case "WeakSet":
                        return "weakset";

                      case "Map":
                        return "map";

                      case "Set":
                        return "set";

                      case "Int8Array":
                        return "int8array";

                      case "Uint8Array":
                        return "uint8array";

                      case "Uint8ClampedArray":
                        return "uint8clampedarray";

                      case "Int16Array":
                        return "int16array";

                      case "Uint16Array":
                        return "uint16array";

                      case "Int32Array":
                        return "int32array";

                      case "Uint32Array":
                        return "uint32array";

                      case "Float32Array":
                        return "float32array";

                      case "Float64Array":
                        return "float64array";
                    }
                    return function B(F) {
                        return "function" == typeof F.throw && "function" == typeof F.return && "function" == typeof F.next;
                    }(F) ? "generator" : "[object Object]" == (G = E.call(F)) ? "object" : "[object Map Iterator]" == G ? "mapiterator" : "[object Set Iterator]" == G ? "setiterator" : "[object String Iterator]" == G ? "stringiterator" : "[object Array Iterator]" == G ? "arrayiterator" : G.slice(8, -1).toLowerCase().replace(/\s/g, "");
                };
            }();
            var s = function(w, x) {
                return !("object" !== q(w)) && ("get" in w ? function n(v, w) {
                    if ("string" == typeof w) return void 0 !== Object.getOwnPropertyDescriptor(v, w);
                    if ("object" !== q(v)) return !1;
                    if (o(v, "value") || o(v, "writable")) return !1;
                    if (!o(v, "get") || "function" != typeof v.get) return !1;
                    if (o(v, "set") && "function" != typeof v[y] && void 0 !== v[y]) return !1;
                    for (var y in v) if (t.hasOwnProperty(y) && q(v[y]) !== t[y] && void 0 !== v[y]) return !1;
                    return !0;
                }(w, x) : function a(v, w) {
                    var x = {
                        configurable: "boolean",
                        enumerable: "boolean",
                        writable: "boolean"
                    };
                    if ("object" !== q(v)) return !1;
                    if ("string" == typeof w) return void 0 !== Object.getOwnPropertyDescriptor(v, w);
                    if (!("value" in v || "writable" in v)) return !1;
                    for (var z in v) if ("value" !== z) {
                        if (!x.hasOwnProperty(z)) continue;
                        if (q(v[z]) === x[z]) continue;
                        if (void 0 !== v[z]) return !1;
                    }
                    return !0;
                }(w, x));
            }, t = {
                get: "function",
                set: "function",
                configurable: "boolean",
                enumerable: "boolean"
            }, u = "undefined" != typeof Reflect && Reflect.defineProperty ? Reflect.defineProperty : Object.defineProperty;
            return function(v, w, x) {
                if (!function(v) {
                    return null != v && "object" == typeof v && !1 === Array.isArray(v);
                }(v) && "function" != typeof v && !Array.isArray(v)) throw new TypeError("expected an object, function, or array");
                if ("string" != typeof w) throw new TypeError('expected "key" to be a string');
                return s(x) ? (u(v, w, x), v) : (u(v, w, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: x
                }), v);
            };
        }();
        Define(NS, "$Define", Define), Define(Object, "$Define", Define), Define(Object.prototype, "$Define", function() {
            return Define.apply(null, [ this ].concat(Array.prototype.slice.call(arguments, 0)));
        });
    }("undefined" != typeof window ? window : "undefined" != typeof global ? global : this);
    !function(NS) {
        function Array_Difference(a, b) {
            if (!Array.$IsArray(a)) return null;
            if (!Array.$IsArray(b)) return a;
            for (var diffArray = [], i = 0; i < a.length; i++) {
                for (var hasElement = !1, j = 0; j < b.length; j++) if (a[i] === b[j]) {
                    hasElement = !0;
                    break;
                }
                !1 === hasElement && diffArray.push(a[i]);
            }
            return diffArray;
        }
        Array.hasOwnProperty("$Delete") || Object.defineProperty(Array, "$Delete", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                if (!Array.$IsArray(arguments[0])) return null;
                for (let i = 0; i < arguments.length; i++) {
                    let index = arguments[0].indexOf(arguments[i]);
                    for (;-1 !== index; ) arguments[0].splice(index, 1), index = arguments[0].indexOf(arguments[i]);
                }
                return arguments[0];
            }
        }), Array.prototype.hasOwnProperty("$Delete") || Object.defineProperty(Array.prototype, "$Delete", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                let args = [ this ];
                for (let i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Array.$Delete.apply(null, args);
            }
        }), Array.hasOwnProperty("$DeleteAt") || Object.defineProperty(Array, "$DeleteAt", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                if (!Array.$IsArray(arguments[0])) return null;
                for (var indexes = [], i = 1; i < arguments.length; i++) "number" == typeof arguments[i] && arguments[i] > -1 && arguments[i] < arguments[0].length && indexes.push(arguments[i]);
                return indexes.sort(function(a, b) {
                    return b - a;
                }), indexes.forEach(function(i) {
                    this.splice(i, 1);
                }, arguments[0]), arguments[0];
            }
        }), Array.prototype.hasOwnProperty("$DeleteAt") || Object.defineProperty(Array.prototype, "$DeleteAt", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Array.$Delete.apply(null, args);
            }
        }), Array.hasOwnProperty("$Difference") || Object.defineProperty(Array, "$Difference", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                for (var diffArray = arguments[0], i = 1; i < arguments.length; i++) diffArray = Array_Difference(diffArray, arguments[i]);
                return diffArray;
            }
        }), Array.prototype.hasOwnProperty("$Difference") || Object.defineProperty(Array.prototype, "$Difference", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Array.$Difference.apply(null, args);
            }
        }), Array.hasOwnProperty("$Flatten") || Object.defineProperty(Array, "$Flatten", {
            configurable: !1,
            enumerable: !1,
            value: function flatten(list, depth) {
                return (depth = "number" == typeof depth ? depth : 1 / 0) ? function _flatten(list, d) {
                    return list.reduce(function(acc, item) {
                        return Array.$IsArray(item) && d < depth ? acc.concat(_flatten(item, d + 1)) : acc.concat(item);
                    }, []);
                }(list, 1) : Array.$IsArray(list) ? list.map(function(i) {
                    return i;
                }) : list;
            }
        });
        var isCallable, maxSafeInteger, iteratorStep, From = (isCallable = function(fn) {
            return "function" == typeof fn;
        }, maxSafeInteger = Math.pow(2, 53) - 1, iteratorStep = function(iterator) {
            var result = iterator.next();
            return !Boolean(result.done) && result;
        }, function from(items) {
            "use strict";
            var T, A, k, C = this, mapFn = arguments.length > 1 ? arguments[1] : void 0;
            if (void 0 !== mapFn) {
                if (!isCallable(mapFn)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (T = arguments[2]);
            }
            var usingIterator = function(O, P) {
                if (null != O && null != P) {
                    var func = O[P];
                    if (null == func) return;
                    if (!isCallable(func)) throw new TypeError(func + " is not a function");
                    return func;
                }
            }(items, function(value) {
                if (null != value) {
                    if ([ "string", "number", "boolean", "symbol" ].indexOf(typeof value) > -1) return Symbol.iterator;
                    if ("undefined" != typeof Symbol && "iterator" in Symbol && Symbol.iterator in value) return Symbol.iterator;
                    if ("@@iterator" in value) return "@@iterator";
                }
            }(items));
            if (void 0 !== usingIterator) {
                A = isCallable(C) ? Object(new C()) : [];
                var next, nextValue, iterator = usingIterator.call(items);
                if (null == iterator) throw new TypeError("Array.from requires an array-like or iterable object");
                for (k = 0; ;) {
                    if (!(next = iteratorStep(iterator))) return A.length = k, A;
                    nextValue = next.value, A[k] = mapFn ? mapFn.call(T, nextValue, k) : nextValue, 
                    k++;
                }
            } else {
                var arrayLike = Object(items);
                if (null == items) throw new TypeError("Array.from requires an array-like object - not null or undefined");
                var kValue, len = function(value) {
                    var len = function(value) {
                        var number = Number(value);
                        return isNaN(number) ? 0 : 0 !== number && isFinite(number) ? (number > 0 ? 1 : -1) * Math.floor(Math.abs(number)) : number;
                    }(value);
                    return Math.min(Math.max(len, 0), maxSafeInteger);
                }(arrayLike.length);
                for (A = isCallable(C) ? Object(new C(len)) : new Array(len), k = 0; k < len; ) kValue = arrayLike[k], 
                A[k] = mapFn ? mapFn.call(T, kValue, k) : kValue, k++;
                A.length = len;
            }
            return A;
        });
        function arrayIncludes(array, value) {
            return !!array.length && function baseIndexOf(array, value, fromIndex) {
                if (value != value) return function indexOfNaN(array, fromIndex, fromRight) {
                    for (var length = array.length, index = fromIndex + (fromRight ? 0 : -1); fromRight ? index-- : ++index < length; ) {
                        var other = array[index];
                        if (other != other) return index;
                    }
                    return -1;
                }(array, fromIndex);
                for (var index = fromIndex - 1, length = array.length; ++index < length; ) if (array[index] === value) return index;
                return -1;
            }(array, value, 0) > -1;
        }
        function many(sets) {
            var o = {}, l = sets.length - 1, first = sets[0], last = sets[l];
            for (var i in first) o[first[i]] = 0;
            for (i = 1; i <= l; i++) {
                var row = sets[i];
                for (var j in row) o[key = row[j]] === i - 1 && (o[key] = i);
            }
            var a = [];
            for (var i in last) {
                var key;
                o[key = last[i]] === l && a.push(key);
            }
            return a;
        }
        function intersect(a, b) {
            if (!b) return many(a);
            for (var res = [], i = 0; i < a.length; i++) indexOf(b, a[i]) > -1 && res.push(a[i]);
            return res;
        }
        function indexOf(arr, el) {
            for (var i = 0; i < arr.length; i++) if (arr[i] === el) return i;
            return -1;
        }
        Array.hasOwnProperty("$From") || Object.defineProperty(Array, "$From", {
            configurable: !1,
            enumerable: !1,
            value: From
        }), Array.hasOwnProperty("$Includes") || Object.defineProperty(Array, "$Includes", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                if (!Array.$IsArray(arguments[0])) return null;
                for (var i = 1; i < arguments.length; i++) if (!arrayIncludes(arguments[0], arguments[i])) return !1;
                return !0;
            }
        }), Array.prototype.hasOwnProperty("$Includes") || Object.defineProperty(Array.prototype, "$Includes", {
            configurable: !1,
            enumerable: !1,
            value: function(value) {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Array.$Includes.apply(null, args);
            }
        }), intersect.big = function(a, b) {
            if (!b) return many(a);
            for (var ret = [], temp = {}, i = 0; i < b.length; i++) temp[b[i]] = !0;
            for (i = 0; i < a.length; i++) temp[a[i]] && ret.push(a[i]);
            return ret;
        }, Array.hasOwnProperty("$Intersection") || Object.defineProperty(Array, "$Intersection", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                if (!Array.$IsArray(arguments[0])) return null;
                for (var intArray = arguments[0], i = 1; i < arguments.length; i++) intArray = intersect(intArray, arguments[i]);
                return intArray;
            }
        }), Array.prototype.hasOwnProperty("$Intersection") || Object.defineProperty(Array.prototype, "$Intersection", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Array.$Intersection.apply(null, args);
            }
        }), Array.hasOwnProperty("$IsArray") || Object.defineProperty(Array, "$IsArray", {
            configurable: !1,
            enumerable: !1,
            value: function(a) {
                return "[object Array]" == Object.prototype.toString.call(a);
            }
        }), Array.hasOwnProperty("$Omit") || Object.defineProperty(Array, "$Omit", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                if (!Array.$IsArray(arguments[0])) return null;
                for (var a = [], omit = [], i = 1; i < arguments.length; i++) omit.push(arguments[i]);
                return arguments[0].forEach(function(e) {
                    omit.$Includes(e) || a.push(e);
                }), a;
            }
        }), Array.prototype.hasOwnProperty("$Omit") || Object.defineProperty(Array.prototype, "$Omit", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Array.$Delete.apply(null, args);
            }
        }), Array.hasOwnProperty("$OmitAt") || Object.defineProperty(Array, "$OmitAt", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                if (!Array.$IsArray(arguments[0])) return null;
                for (var a = [], omitIndexes = [], i = 1; i < arguments.length; i++) omitIndexes.push(arguments[i]);
                for (i = 0; i < arguments[0].length; i++) omitIndexes.$Includes(i) || a.push(arguments[0][i]);
                return a;
            }
        }), Array.prototype.hasOwnProperty("$OmitAt") || Object.defineProperty(Array.prototype, "$OmitAt", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Array.$OmitAt.apply(null, args);
            }
        }), Array.hasOwnProperty("$Select") || Object.defineProperty(Array, "$Select", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                if (!Array.$IsArray(arguments[0])) return null;
                for (var a = [], select = [], i = 0; i < arguments.length; i++) select.push(arguments[i]);
                return select.forEach(function(index) {
                    a.push(this[index]);
                }, arguments[0]), a;
            }
        }), Array.prototype.hasOwnProperty("$Select") || Object.defineProperty(Array.prototype, "$Select", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Array.$Delete.apply(null, args);
            }
        }), Array.hasOwnProperty("$Union") || Object.defineProperty(Array, "$Union", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                return [].concat.apply([], arguments).$Unique();
            }
        }), Array.prototype.hasOwnProperty("$Union") || Object.defineProperty(Array.prototype, "$Union", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Array.$Union.apply(null, args);
            }
        }), Array.hasOwnProperty("$Unique") || Object.defineProperty(Array, "$Unique", {
            configurable: !1,
            enumerable: !1,
            value: function(a, mutate) {
                if (!Array.$IsArray(a)) return null;
                if (void 0 !== mutate && !0 === mutate) {
                    for (var i = a.length - 1; i >= 0; i--) a.indexOf(a[i]) < i && a.splice(i, 1);
                    return a;
                }
                var aa = [];
                for (i = 0; i < a.length; i++) -1 === aa.indexOf(a[i]) && aa.push(a[i]);
                return aa;
            }
        }), Array.prototype.hasOwnProperty("$Unique") || Object.defineProperty(Array.prototype, "$Unique", {
            configurable: !1,
            enumerable: !1,
            value: function(mutate) {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Array.$Unique.apply(null, args);
            }
        }), Array.hasOwnProperty("$Xor") || Object.defineProperty(Array, "$Xor", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                if (!Array.$IsArray(arguments[0])) return null;
                for (var xorArray = arguments[0], i = 1; i < arguments.length; i++) xorArray = Array.$Difference(xorArray, arguments[i]).concat(Array.$Difference(arguments[i], xorArray));
                return xorArray ? xorArray.$Unique() : [];
            }
        }), Array.prototype.hasOwnProperty("$Xor") || Object.defineProperty(Array.prototype, "$Xor", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Array.$Xor.apply(null, args);
            }
        }), Array.prototype.hasOwnProperty("$first") || Object.defineProperty(Array.prototype, "$first", {
            configurable: !1,
            enumerable: !1,
            get: function() {
                return this.length > 0 ? this[0] : null;
            }
        }), Array.prototype.$Define("$last", {
            get: function() {
                return this.length > 0 ? this[this.length - 1] : null;
            }
        });
    }("undefined" != typeof window ? window : "undefined" != typeof global && global);
    !function(NS) {
        NS.hasOwnProperty("$And") || Object.defineProperty(NS, "$And", {
            configurable: !1,
            enumerable: !1,
            value: function(a, b) {
                return a && b;
            }
        }), NS.hasOwnProperty("$Compose") || Object.defineProperty(NS, "$Compose", {
            configurable: !1,
            enumerable: !1,
            value: function Compose(f, g) {
                return function composed() {
                    var args = Array.prototype.slice.call(arguments);
                    return f(g.apply(null, args));
                };
            }
        }), NS.hasOwnProperty("$ComposePromised") || Object.defineProperty(NS, "$ComposePromised", {
            configurable: !1,
            enumerable: !1,
            value: function ComposePromised(f, g) {
                return function promiseCompose() {
                    var args = Array.prototype.slice.call(arguments);
                    return new Promise(function(resolve, reject) {
                        g.apply(null, args).then(function(arg) {
                            arg = $Type(arg, "array") ? arg : [ arg ], f.apply(null, arg).then(function() {
                                resolve(arguments[0]);
                            }).catch(reject);
                        }).catch(reject);
                    });
                };
            }
        }), NS.hasOwnProperty("$Curry") || Object.defineProperty(NS, "$Curry", {
            configurable: !1,
            enumerable: !1,
            value: function(f, n) {
                return function _curry(f, n, args) {
                    return function() {
                        var curryArgs = args.concat(Array.prototype.slice.call(arguments));
                        return curryArgs.length >= n ? f.apply(null, curryArgs.slice(0, n)) : _curry(f, n, curryArgs);
                    };
                }(f, n || f.length, []);
            }
        }), NS.hasOwnProperty("$Debounce") || Object.defineProperty(NS, "$Debounce", {
            configurable: !1,
            enumerable: !1,
            value: function Debounce(func, wait, immediate) {
                var timeout, args, context, timestamp, result;
                function later() {
                    var last = Date.now() - timestamp;
                    last < wait && last >= 0 ? timeout = setTimeout(later, wait - last) : (timeout = null, 
                    immediate || (result = func.apply(context, args), context = args = null));
                }
                null == wait && (wait = 100);
                var debounced = function() {
                    context = this, args = arguments, timestamp = Date.now();
                    var callNow = immediate && !timeout;
                    return timeout || (timeout = setTimeout(later, wait)), callNow && (result = func.apply(context, args), 
                    context = args = null), result;
                };
                return debounced.clear = function() {
                    timeout && (clearTimeout(timeout), timeout = null);
                }, debounced.flush = function() {
                    timeout && (result = func.apply(context, args), context = args = null, clearTimeout(timeout), 
                    timeout = null);
                }, debounced;
            }
        }), NS.hasOwnProperty("$If") || Object.defineProperty(NS, "$If", {
            configurable: !1,
            enumerable: !1,
            value: function If(condition, fn, args) {
                condition && fn(args);
            }
        });
        var options = {
            target: null,
            expire: 3e4,
            exclude: [],
            only: [],
            error: !0,
            debug: !1,
            store: null
        };
        function toSource(a, b, c, d) {
            return function e(g, h, i, j, k) {
                function l(p) {
                    return i.slice(1) + p.join("," + (i && "\n") + m) + (i ? " " : "");
                }
                var m = j + i;
                switch (typeof (g = h ? h(g) : g)) {
                  case "string":
                    return JSON.stringify(g);

                  case "boolean":
                  case "number":
                  case "undefined":
                    return "" + g;

                  case "function":
                    return g.toString();
                }
                if (null === g) return "null";
                if (g instanceof RegExp) return function stringifyRegExp(a) {
                    return isRegExpEscaped ? a.toString() : "/" + a.source.replace(/\//g, function(d, e, f) {
                        return 0 === e || "\\" !== f[e - 1] ? "\\/" : "/";
                    }) + "/" + (a.global ? "g" : "") + (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "");
                }(g);
                if (g instanceof Date) return "new Date(" + g.getTime() + ")";
                var n = k.indexOf(g) + 1;
                if (0 < n) return "{$circularReference:" + n + "}";
                if (k.push(g), Array.isArray(g)) return "[" + l(g.map(function(p) {
                    return e(p, h, i, m, k.slice());
                })) + "]";
                var o = Object.keys(g);
                return o.length ? "{" + l(o.map(function(p) {
                    return (function legalKey(string) {
                        return /^[a-z_$][0-9a-z_$]*$/gi.test(string) && !KEYWORD_REGEXP.test(string);
                    }(p) ? p : JSON.stringify(p)) + ":" + e(g[p], h, i, m, k.slice());
                })) + "}" : "{}";
            }(a, b, void 0 === c ? "  " : c || "", d || "", []);
        }
        var KEYWORD_REGEXP = /^(abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|undefined|var|void|volatile|while|with)$/;
        var isRegExpEscaped = "\\/" === new RegExp("/").source;
        function memoize() {
            var opts = {};
            for (var k in options) opts[k] = options[k];
            for (var arg, args = [].slice.call(arguments); arg = args.shift(); ) if ("object" == typeof arg) if (Array.isArray(arg)) opts.only = arg; else if (null == opts.target) opts.target = arg; else for (var k in arg) opts[k] = arg[k]; else "function" == typeof arg ? opts.target = arg : "number" == typeof arg ? opts.expire = arg : "string" == typeof arg && (opts.id = arg);
            var memoized, id = opts.id || Math.floor(1e8 * Math.random()).toString(36), store = opts.store || new MemoryStore(opts.debug), target = opts.target, debug = opts.debug;
            if (debug && console.log(opts), !target) throw new Error("No target object specified");
            function wrapper(method) {
                return function() {
                    var self = this, args = [].slice.call(arguments), cb = args.pop(), hash = id + (void 0 === method ? "" : "." + method) + "=" + toSource(args);
                    store.get(hash, function(err, cached) {
                        if (debug && console.log("in cache", hash), !err && cached && (!cached.expires || cached.expires >= Date.now())) return cb.apply(self, cached.args);
                        args.push(function(err) {
                            var self = this, cbargs = [].slice.call(arguments);
                            opts.error && err ? cb.apply(self, cbargs) : (debug && console.log("caching", hash), 
                            store.set(hash, {
                                args: cbargs,
                                expires: "number" == typeof opts.expire && Date.now() + opts.expire
                            }, function(err) {
                                if (err) throw err;
                                debug && console.log("cached", hash), cb.apply(self, cbargs);
                            }));
                        }), method ? target[method].apply(target, args) : target.apply(target, args);
                    });
                };
            }
            return "function" == typeof target ? memoized = wrapper() : (memoized = {}, Object.keys(target).concat(Object.keys(target.__proto__)).forEach(function(method) {
                "function" == typeof target[method] && (!opts.only.length && !opts.exclude.length || opts.only.length && ~opts.only.indexOf(method) || opts.exclude.length && !~opts.exclude.indexOf(method) ? (debug && console.log("adding method", method), 
                memoized[method] = wrapper(method)) : memoized[method] = target[method].bind(target));
            })), memoized.__clearMemoizeCache__ = function(cb) {
                store.clear(cb);
            }, memoized;
        }
        function MemoryStore() {
            this.data = {};
        }
        Object.defineProperty(memoize, "clear", {
            enumerable: !1,
            configurable: !0,
            value: function(memoized, cb) {
                memoized.__clearMemoizeCache__(cb);
            }
        }), Object.defineProperty(memoize, "set", {
            enumerable: !1,
            configurable: !0,
            value: function(a, b) {
                if ("object" == typeof a) for (var c in a) options[c] = a[c]; else options[a] = b;
            }
        }), Object.defineProperty(memoize, "get", {
            enumerable: !1,
            configurable: !0,
            value: function(k) {
                return options[k];
            }
        }), MemoryStore.prototype.get = function(key, cb) {
            cb(null, this.data[key]);
        }, MemoryStore.prototype.set = function(key, val, cb) {
            this.data[key] = val, cb(null);
        }, MemoryStore.prototype.clear = function(cb) {
            this.data = {}, cb(null);
        }, NS.hasOwnProperty("$Memoize") || Object.defineProperty(NS, "$Memoize", {
            configurable: !1,
            enumerable: !1,
            value: memoize
        }), NS.hasOwnProperty("$Noop") || Object.defineProperty(NS, "$Noop", {
            configurable: !1,
            enumerable: !1,
            value: function() {}
        }), NS.hasOwnProperty("$Not") || Object.defineProperty(NS, "$Not", {
            configurable: !1,
            enumerable: !1,
            value: function Not(val) {
                return Type(val, "function") ? function() {
                    return Not(val.apply(this, arguments));
                } : !val;
            }
        }), NS.hasOwnProperty("$Or") || Object.defineProperty(NS, "$Or", {
            configurable: !1,
            enumerable: !1,
            value: function Or(a, b) {
                return a || b;
            }
        }), NS.hasOwnProperty("$Unless") || Object.defineProperty(NS, "$Unless", {
            configurable: !1,
            enumerable: !1,
            value: function Unless(condition, fn, args) {
                condition || fn(args);
            }
        });
    }("undefined" != typeof window ? window : "undefined" != typeof global ? global : this);
    !function(NS) {
        let type = Object.prototype.toString.call(NS).match(/\[object (.+)\]/i)[1].toLowerCase(), context = "window" == type ? "Browser" : "global" == type ? "NodeJs" : "undefined" != typeof DriveApp && "Drive" == DriveApp.toString() ? "Google" : "unknown";
        NS.hasOwnProperty("$context") || Object.defineProperty(NS, "$context", {
            configurable: !1,
            enumerable: !1,
            value: context
        }), NS.hasOwnProperty("$Defined") || Object.defineProperty(NS, "$Defined", {
            configurable: !1,
            enumerable: !1,
            value: function _defined(val) {
                return void 0 !== val && null !== val;
            }
        }), NS.hasOwnProperty("$NotDefined") || Object.defineProperty(NS, "$NotDefined", {
            configurable: !1,
            enumerable: !1,
            value: function _notDefined(val) {
                return void 0 === val || null === val;
            }
        });
        let log = "object" == typeof console && "function" == typeof console.log ? console.log : "undefined" != typeof Logger && void 0 !== Logger.log ? Logger.log : function() {}, errFails = !1, logFail = !0, logPass = !0, count = 0, failCount = 0, passCount = 0;
        function LogTest(status, message) {
            if (count++, status ? passCount++ : failCount++, errFails && !status) throw "undefined" != typeof Error ? new Error(message || "Assertion Failed") : message;
            return message = (status ? "(PASS)" : "(FAIL)") + count + ":" + (message || "Assertion failed"), 
            logPass && status && log(message), logFail && !status && log(message), message;
        }
        let Test = {};
        Object.defineProperty(Test, "ErrorOnFail", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                return errFails;
            },
            set: function(v) {
                return errFails = v, this;
            }
        }), Object.defineProperty(Test, "LogFail", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                return logFail;
            },
            set: function(v) {
                return logFail = v, this;
            }
        }), Object.defineProperty(Test, "LogPass", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                return logPass;
            },
            set: function(v) {
                return logPass = v, this;
            }
        }), Object.defineProperty(Test, "Count", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                return count;
            },
            set: function(v) {
                return count = v, this;
            }
        }), Object.defineProperty(Test, "Passes", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                return passCount;
            }
        }), Object.defineProperty(Test, "Fails", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                return failCount;
            }
        }), Object.defineProperty(Test, "Equal", {
            enumerable: !1,
            configurable: !1,
            value: function(actual, expected, message) {
                return LogTest(actual === expected, message);
            }
        }), Object.defineProperty(Test, "IsEqual", {
            enumerable: !1,
            configurable: !1,
            value: function(actual, expected, message) {
                return LogTest(function IsEqual(a, b, c, d) {
                    var e = c ? c.call(d, a, b) : void 0;
                    if (void 0 !== e) return !!e;
                    if (a === b) return !0;
                    if ("object" != typeof a || !a || "object" != typeof b || !b) return !1;
                    var f = Object.keys(a), g = Object.keys(b);
                    if (f.length !== g.length) return !1;
                    for (var j, h = Object.prototype.hasOwnProperty.bind(b), i = 0; i < f.length; i++) {
                        if (!h(j = f[i])) return !1;
                        var k = a[j], l = b[j];
                        if (!1 === (e = c ? c.call(d, k, l, j) : void 0) || void 0 === e && k !== l) return !1;
                    }
                    return !0;
                }(actual, expected), message);
            }
        }), Object.defineProperty(Test, "Ok", {
            enumerable: !1,
            configurable: !1,
            value: function(actual, message) {
                return LogTest(!!actual, message);
            }
        }), Object.defineProperty(Test, "Not", {
            enumerable: !1,
            configurable: !1,
            value: function(actual, message) {
                return LogTest(!actual, message);
            }
        }), NS.hasOwnProperty("Test") || Object.defineProperty(NS, "Test", {
            configurable: !1,
            enumerable: !1,
            value: Test
        });
        let _log = "undefined" != typeof DriveApp && "Drive" == DriveApp.toString() ? Logger.log : console.log;
        NS.hasOwnProperty("log") || Object.defineProperty(NS, "log", {
            configurable: !1,
            enumerable: !1,
            value: _log
        });
    }("undefined" != typeof window ? window : "undefined" != typeof global ? global : this);
    !function(NS) {
        function _instanceof(obj, type) {
            return null != type && obj instanceof type;
        }
        var nativeMap, nativeSet, nativePromise;
        try {
            nativeMap = Map;
        } catch (_) {
            nativeMap = function() {};
        }
        try {
            nativeSet = Set;
        } catch (_) {
            nativeSet = function() {};
        }
        try {
            nativePromise = Promise;
        } catch (_) {
            nativePromise = function() {};
        }
        function clone(parent, circular, depth, prototype, includeNonEnumerable) {
            "object" == typeof circular && (depth = circular.depth, prototype = circular.prototype, 
            includeNonEnumerable = circular.includeNonEnumerable, circular = circular.circular);
            var allParents = [], allChildren = [], useBuffer = "undefined" != typeof Buffer;
            return void 0 === circular && (circular = !0), void 0 === depth && (depth = 1 / 0), 
            void 0 === includeNonEnumerable && (includeNonEnumerable = !0), function _clone(parent, depth) {
                if (null === parent) return null;
                if (0 === depth) return parent;
                var child, proto;
                if ("object" != typeof parent) return parent;
                if (_instanceof(parent, nativeMap)) child = new nativeMap(); else if (_instanceof(parent, nativeSet)) child = new nativeSet(); else if (_instanceof(parent, nativePromise)) child = new nativePromise(function(resolve, reject) {
                    parent.then(function(value) {
                        resolve(_clone(value, depth - 1));
                    }, function(err) {
                        reject(_clone(err, depth - 1));
                    });
                }); else if (clone.__isArray(parent)) child = []; else if (clone.__isRegExp(parent)) child = new RegExp(parent.source, __getRegExpFlags(parent)), 
                parent.lastIndex && (child.lastIndex = parent.lastIndex); else if (clone.__isDate(parent)) child = new Date(parent.getTime()); else {
                    if (useBuffer && Buffer.isBuffer(parent)) return child = Buffer.allocUnsafe ? Buffer.allocUnsafe(parent.length) : new Buffer(parent.length), 
                    parent.copy(child), child;
                    _instanceof(parent, Error) ? child = Object.create(parent) : void 0 === prototype ? (proto = Object.getPrototypeOf(parent), 
                    child = Object.create(proto)) : (child = Object.create(prototype), proto = prototype);
                }
                if (circular) {
                    var index = allParents.indexOf(parent);
                    if (-1 != index) return allChildren[index];
                    allParents.push(parent), allChildren.push(child);
                }
                for (var i in _instanceof(parent, nativeMap) && parent.forEach(function(value, key) {
                    var keyChild = _clone(key, depth - 1), valueChild = _clone(value, depth - 1);
                    child.set(keyChild, valueChild);
                }), _instanceof(parent, nativeSet) && parent.forEach(function(value) {
                    var entryChild = _clone(value, depth - 1);
                    child.add(entryChild);
                }), parent) {
                    var attrs;
                    proto && (attrs = Object.getOwnPropertyDescriptor(proto, i)), attrs && null == attrs.set || (child[i] = _clone(parent[i], depth - 1));
                }
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(parent);
                    for (i = 0; i < symbols.length; i++) {
                        var symbol = symbols[i];
                        (!(descriptor = Object.getOwnPropertyDescriptor(parent, symbol)) || descriptor.enumerable || includeNonEnumerable) && (child[symbol] = _clone(parent[symbol], depth - 1), 
                        descriptor.enumerable || Object.defineProperty(child, symbol, {
                            enumerable: !1
                        }));
                    }
                }
                if (includeNonEnumerable) {
                    var allPropertyNames = Object.getOwnPropertyNames(parent);
                    for (i = 0; i < allPropertyNames.length; i++) {
                        var descriptor, propertyName = allPropertyNames[i];
                        (descriptor = Object.getOwnPropertyDescriptor(parent, propertyName)) && descriptor.enumerable || (child[propertyName] = _clone(parent[propertyName], depth - 1), 
                        Object.defineProperty(child, propertyName, {
                            enumerable: !1
                        }));
                    }
                }
                return child;
            }(parent, depth);
        }
        function __objToStr(o) {
            return Object.prototype.toString.call(o);
        }
        function __getRegExpFlags(re) {
            var flags = "";
            return re.global && (flags += "g"), re.ignoreCase && (flags += "i"), re.multiline && (flags += "m"), 
            flags;
        }
        clone.clonePrototype = function clonePrototype(parent) {
            if (null === parent) return null;
            var c = function() {};
            return c.prototype = parent, new c();
        }, clone.__objToStr = __objToStr, clone.__isDate = function __isDate(o) {
            return "object" == typeof o && "[object Date]" === __objToStr(o);
        }, clone.__isArray = function __isArray(o) {
            return "object" == typeof o && "[object Array]" === __objToStr(o);
        }, clone.__isRegExp = function __isRegExp(o) {
            return "object" == typeof o && "[object RegExp]" === __objToStr(o);
        }, clone.__getRegExpFlags = __getRegExpFlags, Object.$Define(NS, "$Clone", clone), 
        Object.$Define(Object, "$Clone", clone), Object.$Define(Object.prototype, "$Clone", function() {
            return clone.apply(null, [ this ].concat(Array.prototype.slice.call(arguments, 0)));
        }), function(NS) {
            const Define = function() {
                function o(v, w) {
                    return {}.hasOwnProperty.call(v, w);
                }
                const q = function() {
                    function v(F) {
                        return F.constructor ? F.constructor.name : null;
                    }
                    var E = Object.prototype.toString;
                    return function(F) {
                        if (void 0 === F) return "undefined";
                        if (null === F) return "null";
                        var G = typeof F;
                        if ("boolean" == G) return "boolean";
                        if ("string" == G) return "string";
                        if ("number" == G) return "number";
                        if ("symbol" == G) return "symbol";
                        if ("function" == G) return function A(F) {
                            return "GeneratorFunction" === v(F);
                        }(F) ? "generatorfunction" : "function";
                        if (function w(F) {
                            return Array.isArray ? Array.isArray(F) : F instanceof Array;
                        }(F)) return "array";
                        if (function D(F) {
                            return F.constructor && "function" == typeof F.constructor.isBuffer && F.constructor.isBuffer(F);
                        }(F)) return "buffer";
                        if (function C(F) {
                            try {
                                if ("number" == typeof F.length && "function" == typeof F.callee) return !0;
                            } catch (G) {
                                if (-1 !== G.message.indexOf("callee")) return !0;
                            }
                            return !1;
                        }(F)) return "arguments";
                        if (function y(F) {
                            return !!(F instanceof Date) || "function" == typeof F.toDateString && "function" == typeof F.getDate && "function" == typeof F.setDate;
                        }(F)) return "date";
                        if (function x(F) {
                            return F instanceof Error || "string" == typeof F.message && F.constructor && "number" == typeof F.constructor.stackTraceLimit;
                        }(F)) return "error";
                        if (function z(F) {
                            return !!(F instanceof RegExp) || "string" == typeof F.flags && "boolean" == typeof F.ignoreCase && "boolean" == typeof F.multiline && "boolean" == typeof F.global;
                        }(F)) return "regexp";
                        switch (v(F)) {
                          case "Symbol":
                            return "symbol";

                          case "Promise":
                            return "promise";

                          case "WeakMap":
                            return "weakmap";

                          case "WeakSet":
                            return "weakset";

                          case "Map":
                            return "map";

                          case "Set":
                            return "set";

                          case "Int8Array":
                            return "int8array";

                          case "Uint8Array":
                            return "uint8array";

                          case "Uint8ClampedArray":
                            return "uint8clampedarray";

                          case "Int16Array":
                            return "int16array";

                          case "Uint16Array":
                            return "uint16array";

                          case "Int32Array":
                            return "int32array";

                          case "Uint32Array":
                            return "uint32array";

                          case "Float32Array":
                            return "float32array";

                          case "Float64Array":
                            return "float64array";
                        }
                        return function B(F) {
                            return "function" == typeof F.throw && "function" == typeof F.return && "function" == typeof F.next;
                        }(F) ? "generator" : "[object Object]" == (G = E.call(F)) ? "object" : "[object Map Iterator]" == G ? "mapiterator" : "[object Set Iterator]" == G ? "setiterator" : "[object String Iterator]" == G ? "stringiterator" : "[object Array Iterator]" == G ? "arrayiterator" : G.slice(8, -1).toLowerCase().replace(/\s/g, "");
                    };
                }();
                var t = {
                    get: "function",
                    set: "function",
                    configurable: "boolean",
                    enumerable: "boolean"
                }, u = "undefined" != typeof Reflect && Reflect.defineProperty ? Reflect.defineProperty : Object.defineProperty;
                return function(v, w, x) {
                    if (!function(v) {
                        return null != v && "object" == typeof v && !1 === Array.isArray(v);
                    }(v) && "function" != typeof v && !Array.isArray(v)) throw new TypeError("expected an object, function, or array");
                    if ("string" != typeof w) throw new TypeError('expected "key" to be a string');
                    return function(w, x) {
                        return !("object" !== q(w)) && ("get" in w ? function n(v, w) {
                            if ("string" == typeof w) return void 0 !== Object.getOwnPropertyDescriptor(v, w);
                            if ("object" !== q(v)) return !1;
                            if (o(v, "value") || o(v, "writable")) return !1;
                            if (!o(v, "get") || "function" != typeof v.get) return !1;
                            if (o(v, "set") && "function" != typeof v[y] && void 0 !== v[y]) return !1;
                            for (var y in v) if (t.hasOwnProperty(y) && q(v[y]) !== t[y] && void 0 !== v[y]) return !1;
                            return !0;
                        }(w, x) : function a(v, w) {
                            var x = {
                                configurable: "boolean",
                                enumerable: "boolean",
                                writable: "boolean"
                            };
                            if ("object" !== q(v)) return !1;
                            if ("string" == typeof w) return void 0 !== Object.getOwnPropertyDescriptor(v, w);
                            if (!("value" in v || "writable" in v)) return !1;
                            for (var z in v) if ("value" !== z) {
                                if (!x.hasOwnProperty(z)) continue;
                                if (q(v[z]) === x[z]) continue;
                                if (void 0 !== v[z]) return !1;
                            }
                            return !0;
                        }(w, x));
                    }(x) ? (u(v, w, x), v) : (u(v, w, {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0,
                        value: x
                    }), v);
                };
            }();
            Define(NS, "$Define", Define), Define(Object, "$Define", Define), Define(Object.prototype, "$Define", function() {
                return Define.apply(null, [ this ].concat(Array.prototype.slice.call(arguments, 0)));
            });
        }("undefined" != typeof window ? window : "undefined" != typeof global ? global : this), 
        Object.$Define(Object, "$Each", function(nonEnumerable, object, cb) {
            if ("object" == typeof nonEnumerable && (cb = object, object = nonEnumerable, nonEnumerable = !1), 
            Reflect.has(object, "length")) {
                for (var i = 0; i < object.length; i++) if (!1 === cb(object[i], i, object)) return;
            } else {
                let keys = nonEnumerable ? Reflect.ownKeys(object) : Object.keys(object);
                for (i = 0; i < keys.length; i++) if (!1 === cb(object[keys[i]], keys[i], object)) return;
            }
        }), Object.$Define(Object.prototype, "$Each", function() {
            arguments.length > 1 ? Object.$Each(arguments[0], this, arguments[1]) : Object.$Each(this, arguments[0]);
        });
        var hasOwn = Object.prototype.hasOwnProperty, toStr = Object.prototype.toString, defineProperty = Object.defineProperty, gOPD = Object.getOwnPropertyDescriptor, isArray = function isArray(arr) {
            return "function" == typeof Array.isArray ? Array.isArray(arr) : "[object Array]" === toStr.call(arr);
        }, isPlainObject = function isPlainObject(obj) {
            if (!obj || "[object Object]" !== toStr.call(obj)) return !1;
            var key, hasOwnConstructor = hasOwn.call(obj, "constructor"), hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
            if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) return !1;
            for (key in obj) ;
            return void 0 === key || hasOwn.call(obj, key);
        }, setProperty = function setProperty(target, options) {
            defineProperty && "__proto__" === options.name ? defineProperty(target, options.name, {
                enumerable: !0,
                configurable: !0,
                value: options.newValue,
                writable: !0
            }) : target[options.name] = options.newValue;
        }, getProperty = function getProperty(obj, name) {
            if ("__proto__" === name) {
                if (!hasOwn.call(obj, name)) return;
                if (gOPD) return gOPD(obj, name).value;
            }
            return obj[name];
        };
        function Object_Has() {
            for (var i = 1; i < arguments.length; i++) if (!Reflect.has(arguments[0], arguments[i])) return !1;
            return !0;
        }
        function Object_Includes(object, key) {
            var rValue = !1;
            return Object.$Keys(object).$Includes(key) ? rValue = !0 : Object.$Each(object, function(e, k, o) {
                key == e && (rValue = k);
            }), rValue;
        }
        function Object_Equals(v1, v2) {
            return Object.is ? Object.is(v1, v2) : 0 === v1 && 0 === v2 ? 1 / v1 == 1 / v2 : v1 != v1 ? v2 != v2 : v1 === v2;
        }
        function Object_Keys(object) {
            if (!object) return [];
            var keys = [];
            for (var key in object) keys.push(key);
            return keys;
        }
        function Type() {
            if (0 == arguments.length) return Type(this);
            if (1 == arguments.length) return "object" != (type = Object.prototype.toString.call(arguments[0]).match(/\[object (.+)\]/i)[1].toLowerCase()) ? type : arguments[0].constructor.name || type;
            if (2 == arguments.length) return Type(arguments[0]) === ("string" == typeof arguments[1] ? arguments[1] : Type(arguments[1]));
            for (var type = Type(arguments[0]), i = 1; i < arguments.length; i++) if (Type(arguments[i]) != type && ("string" !== type || Type(arguments[i]) != arguments[0])) return !1;
            return !0;
        }
        function Object_Values(object) {
            return Object.$Keys(object).map(function(key) {
                return object[key];
            });
        }
        NS.hasOwnProperty("$Extend") || Object.defineProperty(NS, "$Extend", {
            configurable: !1,
            enumerable: !1,
            value: function extend() {
                var options, name, src, copy, copyIsArray, clone, target = arguments[0], i = 1, length = arguments.length, deep = !1;
                for ("boolean" == typeof target && (deep = target, target = arguments[1] || {}, 
                i = 2), (null == target || "object" != typeof target && "function" != typeof target) && (target = {}); i < length; ++i) if (null != (options = arguments[i])) for (name in options) src = getProperty(target, name), 
                target !== (copy = getProperty(options, name)) && (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, 
                clone = src && isArray(src) ? src : []) : clone = src && isPlainObject(src) ? src : {}, 
                setProperty(target, {
                    name: name,
                    newValue: extend(deep, clone, copy)
                })) : void 0 !== copy && setProperty(target, {
                    name: name,
                    newValue: copy
                }));
                return target;
            }
        }), Object.hasOwnProperty("$Extend") || Object.defineProperty(Object, "$Extend", {
            configurable: !1,
            enumerable: !1,
            value: $Extend
        }), Object.prototype.hasOwnProperty("$Extend") || Object.defineProperty(Object.prototype, "$Extend", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return $Extend.apply(null, args);
            }
        }), Object.hasOwnProperty("$Has") || Object.defineProperty(Object, "$Has", {
            configurable: !1,
            enumerable: !1,
            value: Object_Has
        }), Object.prototype.hasOwnProperty("$Has") || Object.defineProperty(Object.prototype, "$Has", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Object_Has.apply(null, args);
            }
        }), Object.hasOwnProperty("$Includes") || Object.defineProperty(Object, "$Includes", {
            configurable: !1,
            enumerable: !1,
            value: Object_Includes
        }), Object.prototype.hasOwnProperty("$Includes") || Object.defineProperty(Object.prototype, "$Includes", {
            configurable: !1,
            enumerable: !1,
            value: function(key) {
                return Object_Includes(this, key);
            }
        }), NS.hasOwnProperty("$IsEqual") || Object.defineProperty(NS, "$IsEqual", {
            configurable: !1,
            enumerable: !1,
            value: Object_Equals
        }), Object.hasOwnProperty("$IsEqual") || Object.defineProperty(Object, "$IsEqual", {
            configurable: !1,
            enumerable: !1,
            value: function(a, b) {
                return 1 === arguments.length ? Object_Equals.bind(null, a) : Object_Equals(a, b);
            }
        }), Object.prototype.hasOwnProperty("$IsEqual") || Object.defineProperty(Object.prototype, "$IsEqual", {
            configurable: !1,
            enumerable: !1,
            value: function(o) {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Object.$IsEqual.apply(this, o);
            }
        }), Object.hasOwnProperty("$Keys") || Object.defineProperty(Object, "$Keys", {
            configurable: !1,
            enumerable: !1,
            value: Object_Keys
        }), Object.prototype.hasOwnProperty("$Keys") || Object.defineProperty(Object.prototype, "$Keys", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                return Object_Keys(this);
            }
        }), Object.hasOwnProperty("$Type") || Object.defineProperty(Object, "$Type", {
            configurable: !1,
            enumerable: !1,
            value: Type
        }), Object.prototype.hasOwnProperty("$Type") || Object.defineProperty(Object.prototype, "$Type", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                for (var args = [ this ], i = 0; i < arguments.length; i++) args.push(arguments[i]);
                return Type.apply(null, args);
            }
        }), Object.hasOwnProperty("$Values") || Object.defineProperty(Object, "$Values", {
            configurable: !1,
            enumerable: !1,
            value: Object_Values
        }), Object.prototype.hasOwnProperty("$Values") || Object.defineProperty(Object.prototype, "$Values", {
            configurable: !1,
            enumerable: !1,
            value: function() {
                return Object_Values(this);
            }
        });
    }("undefined" != typeof window ? window : "undefined" != typeof global ? global : this);
    "undefined" != typeof window ? window : "undefined" != typeof global && global, 
    String.$Define("$AsAscii", function(s, test) {
        try {
            if ("function" == typeof Buffer && "from" in Buffer) return Buffer.from(s, "base64").toString("ascii");
            if ("function" == typeof atob) return atob(s);
            if ("object" == typeof Utilities && "base64Decode" in Utilities) return Utilities.newBlob(Utilities.base64Decode(s, Utilities.Charset.UTF_8)).getDataAsString();
        } catch (e) {
            "boolean" == typeof test && !1 !== test || console.log(`String.$AsAscii('${s}'): invalid conversion`);
        }
        return s;
    }), String.prototype.$Define("$AsAscii", function() {
        return String.$AsAscii(this);
    }), String.$Define("$AsBase64", function(s, test) {
        try {
            if ("function" == typeof Buffer && "from" in Buffer) return Buffer.from(s).toString("base64");
            if ("function" == typeof btoa) return btoa(s);
            if ("object" == typeof Utilities && "base64Encode" in Utilities) return Utilities.base64Encode(s);
        } catch (e) {
            "boolean" == typeof test && !1 !== test || console.log(`String.$AsAscii('${s}'): invalid conversion`);
        }
        return s;
    }), String.prototype.$Define("$AsBase64", function() {
        return String.$AsBase64(this);
    }), String.$Define("$AsUrlMatch", function(t) {
        if ("string" != typeof t) return null;
        var e = "(?:^", n = function(t) {
            return t.replace(/[[^$.|?*+(){}\\]/g, "\\$&");
        }, r = /^(\*|https?|file|ftp|chrome-extension):\/\//.exec(t);
        if (!r) return null;
        if (t = t.substr(r[0].length), e += "*" === r[1] ? "https?://" : r[1] + "://", "file" !== r[1]) {
            if (!(r = /^(?:\*|(\*\.)?([^\/*]+))(?=\/)/.exec(t))) return null;
            t = t.substr(r[0].length), "*" === r[0] ? e += "[^/]+" : (r[1] && (e += "(?:[^/]+\\.)?"), 
            e += n(r[2]));
        }
        return e += t.split("*").map(n).join(".*"), e += "$)";
    }), String.prototype.$Define("$AsUrlMatch", function() {
        return String.$AsUrlMatch(this.toString());
    }), function() {
        const preserveCamelCase = a => {
            let b = !1, d = !1, e = !1;
            for (let f = 0; f < a.length; f++) {
                const g = a[f];
                b && /[a-zA-Z]/.test(g) && g.toUpperCase() === g ? (a = a.slice(0, f) + "-" + a.slice(f), 
                b = !1, e = d, d = !0, f++) : d && e && /[a-zA-Z]/.test(g) && g.toLowerCase() === g ? (a = a.slice(0, f - 1) + "-" + a.slice(f - 1), 
                e = d, d = !1, b = !0) : (b = g.toLowerCase() === g, e = d, d = g.toUpperCase() === g);
            }
            return a;
        };
        function camelCase(a, b) {
            b = Object.assign({
                pascalCase: !1
            }, b);
            const c = e => b.pascalCase ? e.charAt(0).toUpperCase() + e.slice(1) : e;
            return 0 === (a = Array.isArray(a) ? a.map(e => e.trim()).filter(e => e.length).join("-") : a.trim()).length ? "" : 1 === a.length ? b.pascalCase ? a.toUpperCase() : a.toLowerCase() : /^[a-z\d]+$/.test(a) ? c(a) : (a !== a.toLowerCase() && (a = preserveCamelCase(a)), 
            c(a = a.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (e, f) => f.toUpperCase())));
        }
        String.$Define("$CamelCase", function(s, upper) {
            return void 0 !== upper && !0 === upper ? function CamelCase() {
                const a = camelCase.apply(camelCase, arguments);
                return a.charAt(0).toUpperCase() + a.slice(1);
            }(s) : camelCase(s);
        }), String.prototype.$Define("$CamelCase", function(upper) {
            return String.$CamelCase(this, upper);
        });
    }(), String.$Define("$Capitalize", function(s, allWords) {
        const ss = s.toLowerCase();
        return void 0 !== allWords && !0 === allWords ? ss.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function(m) {
            return m.toUpperCase();
        }) : ss.charAt(0).toUpperCase() + ss.substring(1);
    }), String.prototype.$Define("$Capitalize", function(allWords) {
        return String.$Capitalize(this, allWords);
    }), String.$Define("$EndsWith", function(string, target, position) {
        const length = string.length;
        (position = void 0 === position ? length : position) < 0 || position != position ? position = 0 : position > length && (position = length);
        const end = position;
        return (position -= target.length) >= 0 && string.slice(position, end) == target;
    }), String.prototype.$Define("$EndsWith", function(target, position) {
        return String.$EndsWith(this, target, position);
    }), function() {
        function safeAdd(n, r) {
            var a = (65535 & n) + (65535 & r);
            return (n >> 16) + (r >> 16) + (a >> 16) << 16 | 65535 & a;
        }
        function md5cmn(r, d, n, t, m, f) {
            return safeAdd(function bitRotateLeft(r, d) {
                return r << d | r >>> 32 - d;
            }(safeAdd(safeAdd(d, r), safeAdd(t, f)), m), n);
        }
        function md5ff(r, d, n, t, m, f, i) {
            return md5cmn(d & n | ~d & t, r, d, m, f, i);
        }
        function md5gg(r, d, n, t, m, f, i) {
            return md5cmn(d & t | n & ~t, r, d, m, f, i);
        }
        function md5hh(r, d, n, t, m, f, i) {
            return md5cmn(d ^ n ^ t, r, d, m, f, i);
        }
        function md5ii(r, d, n, t, m, f, i) {
            return md5cmn(n ^ (d | ~t), r, d, m, f, i);
        }
        function binlMD5(r, d) {
            var n, t, m, f, i;
            r[d >> 5] |= 128 << d % 32, r[14 + (d + 64 >>> 9 << 4)] = d;
            var e = 1732584193, h = -271733879, g = -1732584194, o = 271733878;
            for (n = 0; n < r.length; n += 16) t = e, m = h, f = g, i = o, h = md5ii(h = md5ii(h = md5ii(h = md5ii(h = md5hh(h = md5hh(h = md5hh(h = md5hh(h = md5gg(h = md5gg(h = md5gg(h = md5gg(h = md5ff(h = md5ff(h = md5ff(h = md5ff(h, g = md5ff(g, o = md5ff(o, e = md5ff(e, h, g, o, r[n], 7, -680876936), h, g, r[n + 1], 12, -389564586), e, h, r[n + 2], 17, 606105819), o, e, r[n + 3], 22, -1044525330), g = md5ff(g, o = md5ff(o, e = md5ff(e, h, g, o, r[n + 4], 7, -176418897), h, g, r[n + 5], 12, 1200080426), e, h, r[n + 6], 17, -1473231341), o, e, r[n + 7], 22, -45705983), g = md5ff(g, o = md5ff(o, e = md5ff(e, h, g, o, r[n + 8], 7, 1770035416), h, g, r[n + 9], 12, -1958414417), e, h, r[n + 10], 17, -42063), o, e, r[n + 11], 22, -1990404162), g = md5ff(g, o = md5ff(o, e = md5ff(e, h, g, o, r[n + 12], 7, 1804603682), h, g, r[n + 13], 12, -40341101), e, h, r[n + 14], 17, -1502002290), o, e, r[n + 15], 22, 1236535329), g = md5gg(g, o = md5gg(o, e = md5gg(e, h, g, o, r[n + 1], 5, -165796510), h, g, r[n + 6], 9, -1069501632), e, h, r[n + 11], 14, 643717713), o, e, r[n], 20, -373897302), g = md5gg(g, o = md5gg(o, e = md5gg(e, h, g, o, r[n + 5], 5, -701558691), h, g, r[n + 10], 9, 38016083), e, h, r[n + 15], 14, -660478335), o, e, r[n + 4], 20, -405537848), g = md5gg(g, o = md5gg(o, e = md5gg(e, h, g, o, r[n + 9], 5, 568446438), h, g, r[n + 14], 9, -1019803690), e, h, r[n + 3], 14, -187363961), o, e, r[n + 8], 20, 1163531501), g = md5gg(g, o = md5gg(o, e = md5gg(e, h, g, o, r[n + 13], 5, -1444681467), h, g, r[n + 2], 9, -51403784), e, h, r[n + 7], 14, 1735328473), o, e, r[n + 12], 20, -1926607734), g = md5hh(g, o = md5hh(o, e = md5hh(e, h, g, o, r[n + 5], 4, -378558), h, g, r[n + 8], 11, -2022574463), e, h, r[n + 11], 16, 1839030562), o, e, r[n + 14], 23, -35309556), g = md5hh(g, o = md5hh(o, e = md5hh(e, h, g, o, r[n + 1], 4, -1530992060), h, g, r[n + 4], 11, 1272893353), e, h, r[n + 7], 16, -155497632), o, e, r[n + 10], 23, -1094730640), g = md5hh(g, o = md5hh(o, e = md5hh(e, h, g, o, r[n + 13], 4, 681279174), h, g, r[n], 11, -358537222), e, h, r[n + 3], 16, -722521979), o, e, r[n + 6], 23, 76029189), g = md5hh(g, o = md5hh(o, e = md5hh(e, h, g, o, r[n + 9], 4, -640364487), h, g, r[n + 12], 11, -421815835), e, h, r[n + 15], 16, 530742520), o, e, r[n + 2], 23, -995338651), g = md5ii(g, o = md5ii(o, e = md5ii(e, h, g, o, r[n], 6, -198630844), h, g, r[n + 7], 10, 1126891415), e, h, r[n + 14], 15, -1416354905), o, e, r[n + 5], 21, -57434055), g = md5ii(g, o = md5ii(o, e = md5ii(e, h, g, o, r[n + 12], 6, 1700485571), h, g, r[n + 3], 10, -1894986606), e, h, r[n + 10], 15, -1051523), o, e, r[n + 1], 21, -2054922799), g = md5ii(g, o = md5ii(o, e = md5ii(e, h, g, o, r[n + 8], 6, 1873313359), h, g, r[n + 15], 10, -30611744), e, h, r[n + 6], 15, -1560198380), o, e, r[n + 13], 21, 1309151649), g = md5ii(g, o = md5ii(o, e = md5ii(e, h, g, o, r[n + 4], 6, -145523070), h, g, r[n + 11], 10, -1120210379), e, h, r[n + 2], 15, 718787259), o, e, r[n + 9], 21, -343485551), 
            e = safeAdd(e, t), h = safeAdd(h, m), g = safeAdd(g, f), o = safeAdd(o, i);
            return [ e, h, g, o ];
        }
        function binl2rstr(r) {
            var d, n = "", t = 32 * r.length;
            for (d = 0; d < t; d += 8) n += String.fromCharCode(r[d >> 5] >>> d % 32 & 255);
            return n;
        }
        function rstr2binl(r) {
            var d, n = [];
            for (n[(r.length >> 2) - 1] = void 0, d = 0; d < n.length; d += 1) n[d] = 0;
            var t = 8 * r.length;
            for (d = 0; d < t; d += 8) n[d >> 5] |= (255 & r.charCodeAt(d / 8)) << d % 32;
            return n;
        }
        function rstr2hex(r) {
            var d, n, t = "0123456789abcdef", m = "";
            for (n = 0; n < r.length; n += 1) d = r.charCodeAt(n), m += t.charAt(d >>> 4 & 15) + t.charAt(15 & d);
            return m;
        }
        function str2rstrUTF8(r) {
            return unescape(encodeURIComponent(r));
        }
        function rawMD5(r) {
            return function rstrMD5(r) {
                return binl2rstr(binlMD5(rstr2binl(r), 8 * r.length));
            }(str2rstrUTF8(r));
        }
        function rawHMACMD5(r, d) {
            return function rstrHMACMD5(r, d) {
                var n, t, m = rstr2binl(r), f = [], i = [];
                for (f[15] = i[15] = void 0, m.length > 16 && (m = binlMD5(m, 8 * r.length)), n = 0; n < 16; n += 1) f[n] = 909522486 ^ m[n], 
                i[n] = 1549556828 ^ m[n];
                return t = binlMD5(f.concat(rstr2binl(d)), 512 + 8 * d.length), binl2rstr(binlMD5(i.concat(t), 640));
            }(str2rstrUTF8(r), str2rstrUTF8(d));
        }
        function ft(a, e, f, g) {
            return 20 > a ? e & f | ~e & g : 40 > a ? e ^ f ^ g : 60 > a ? e & f | e & g | f & g : e ^ f ^ g;
        }
        function modPlus(a, b) {
            var c = (65535 & a) + (65535 & b);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | 65535 & c;
        }
        function cyclicShift(a, b) {
            return a << b | a >>> 32 - b;
        }
        String.$Define("$Hash", function(s, type) {
            return void 0 === type || "sha-1" != type && "sha1" != type ? function md5(M, r, D) {
                return r ? D ? rawHMACMD5(r, M) : function hexHMACMD5(r, d) {
                    return rstr2hex(rawHMACMD5(r, d));
                }(r, M) : D ? rawMD5(M) : function hexMD5(r) {
                    return rstr2hex(rawMD5(r));
                }(M);
            }(s) : function sha1(a) {
                return function binToHex(a) {
                    var d, b = "0123456789abcdef", c = "";
                    for (d = 0; d < 4 * a.length; d++) c += b.charAt(15 & a[d >> 2] >> 8 * (3 - d % 4) + 4) + b.charAt(15 & a[d >> 2] >> 8 * (3 - d % 4));
                    return c;
                }(function coreFunction(f) {
                    var o, p, q, r, s, u, v, x, a, g = [], h = 1732584193, k = 4023233417, l = 2562383102, m = 271733878, n = 3285377520;
                    for (v = 0; v < f.length; v += 16) {
                        for (o = h, p = k, q = l, r = m, s = n, x = 0; 80 > x; x++) g[x] = 16 > x ? f[v + x] : cyclicShift(g[x - 3] ^ g[x - 8] ^ g[x - 14] ^ g[x - 16], 1), 
                        u = modPlus(modPlus(cyclicShift(h, 5), ft(x, k, l, m)), modPlus(modPlus(n, g[x]), 20 > (a = x) ? 1518500249 : 40 > a ? 1859775393 : 60 > a ? 2400959708 : 3395469782)), 
                        n = m, m = l, l = cyclicShift(k, 30), k = h, h = u;
                        h = modPlus(h, o), k = modPlus(k, p), l = modPlus(l, q), m = modPlus(m, r), n = modPlus(n, s);
                    }
                    return [ h, k, l, m, n ];
                }(function fillString(a) {
                    var d, b = 1 + (a.length + 8 >> 6), c = [];
                    for (d = 0; d < 16 * b; d++) c[d] = 0;
                    for (d = 0; d < a.length; d++) c[d >> 2] |= a.charCodeAt(d) << 24 - 8 * (3 & d);
                    return c[d >> 2] |= 128 << 24 - 8 * (3 & d), c[16 * b - 1] = 8 * a.length, c;
                }(a)));
            }(s);
        }), String.prototype.$Define("$Hash", function(type) {
            return String.$Hash(this, type);
        });
    }(), String.$Define("$IsBase64", function(s) {
        return s.toString() === String.$AsBase64(String.$AsAscii(s, !0), !0);
    }), String.prototype.$Define("$IsBase64", function() {
        return String.$IsBase64(this);
    }), String.$Define("$IsEmpty", function(s) {
        return void 0 === s || null == s || 0 === s.length;
    }), String.prototype.$Define("$IsEmpty", function() {
        return String.$IsEmpty(this);
    }), String.$Define("$Match", function(s, m) {
        return !(null == s.match(m));
    }), String.prototype.$Define("$Match", function(m) {
        return String.$Match(this, m);
    }), String.$Define("$Pad", function(s, length, padChar, rightPad) {
        return (length -= (s += "").length) <= 0 ? s : (padChar = String.$Repeat(padChar + "", length), 
        void 0 !== rightPad && !0 === rightPad ? s + padChar : padChar + s);
    }), String.prototype.$Define("$Pad", function(length, padChar, rightPad) {
        return String.$Pad(this, length, padChar, rightPad);
    }), String.$Define("$Repeat", function(s, n) {
        let ss = "";
        for (var i = 0; i < n; i++) ss += s;
        return ss;
    }), String.prototype.$Define("$Repeat", function(n) {
        return String.$Repeat(this, n);
    }), String.$Define("$StartsWith", function(s, target, position) {
        const length = s.length;
        return (position = null == position ? 0 : position) < 0 ? position = 0 : position > length && (position = length), 
        target = "" + target, s.slice(position, position + target.length) == target;
    }), String.prototype.$Define("$StartsWith", function(target, position) {
        return String.$StartsWith(this, target, position);
    });
})(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this);
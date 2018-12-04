//https://github.com/stagas/memoize
(function(NS) {

	var options = {
		target: null,
		expire: 30000,
		exclude: [],
		only: [],
		error: true,
		debug: false,
		store: null
	}

	function toSource(a,b,c,d){function e(g,h,i,j,k){function l(p){return i.slice(1)+p.join(','+(i&&'\n')+m)+(i?' ':'')}var m=j+i;switch(g=h?h(g):g,typeof g){case'string':return JSON.stringify(g);case'boolean':case'number':case'undefined':return''+g;case'function':return g.toString();}if(null===g)return'null';if(g instanceof RegExp)return stringifyRegExp(g);if(g instanceof Date)return'new Date('+g.getTime()+')';var n=k.indexOf(g)+1;if(0<n)return'{$circularReference:'+n+'}';if(k.push(g),Array.isArray(g))return'['+l(g.map(function(p){return e(p,h,i,m,k.slice())}))+']';var o=Object.keys(g);return o.length?'{'+l(o.map(function(p){return(legalKey(p)?p:JSON.stringify(p))+':'+e(g[p],h,i,m,k.slice())}))+'}':'{}'}return e(a,b,c===void 0?'  ':c||'',d||'',[])}
	var KEYWORD_REGEXP = /^(abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|undefined|var|void|volatile|while|with)$/
	function legalKey (string) {return /^[a-z_$][0-9a-z_$]*$/gi.test(string) && !KEYWORD_REGEXP.test(string)}
	var isRegExpEscaped = (new RegExp('/')).source === '\\/'
	function stringifyRegExp(a){if(isRegExpEscaped)return a.toString();var b=a.source.replace(/\//g,function(d,e,f){return 0===e||'\\'!==f[e-1]?'\\/':'/'}),c=(a.global&&'g'||'')+(a.ignoreCase&&'i'||'')+(a.multiline&&'m'||'');return'/'+b+'/'+c}

	// memoize
	function memoize() {
		// copy global options
		var opts = {}
		for (var k in options) {
			opts[k] = options[k]
		}

		// parse options
		var arg, args = [].slice.call(arguments)
		while (arg = args.shift())
			if ('object' === typeof arg) {
				if (Array.isArray(arg)) opts.only = arg
				else if (opts.target == null) opts.target = arg
				else
					for (var k in arg) opts[k] = arg[k]
			} else if ('function' === typeof arg) {
			opts.target = arg
		} else if ('number' === typeof arg) {
			opts.expire = arg
		} else if ('string' === typeof arg) {
			opts.id = arg
		}

		var id = opts.id || Math.floor(Math.random() * 100000000).toString(36),
			store = opts.store || new MemoryStore(opts.debug),
			target = opts.target,
			debug = opts.debug

		debug && console.log(opts)

		if (!target)
			throw new Error('No target object specified')

		function wrapper(method) {
			return function() {
				var self = this,
					args = [].slice.call(arguments),
					cb = args.pop()

				// memoize id, hash method name and arguments
				var hash = id + ('undefined' === typeof method ? '' : '.' + method) + '=' + toSource(args)

				// callback cache if we have it
				store.get(hash, function(err, cached) {
					debug && console.log('in cache', hash)
					if (!err && cached && (!cached.expires || cached.expires >= Date.now())) return cb.apply(self, cached.args)
					args.push(function(err) {
						var self = this,
							cbargs = [].slice.call(arguments)

						// no caching if there's an error
						// unless error = false is used
						if (!opts.error || !err) {
							debug && console.log('caching', hash)
							store.set(hash, {
								args: cbargs,
								expires: 'number' === typeof opts.expire ?
									Date.now() + opts.expire :
									false
							}, function(err) {
								if (err) throw err
								debug && console.log('cached', hash)
								cb.apply(self, cbargs)
							})
						} else cb.apply(self, cbargs)
					})

					// is it an object method or a function
					method
						?
						target[method].apply(target, args) :
						target.apply(target, args)
				})
			}
		}

		// memoized object
		var memoized

		// target is a function
		if ('function' === typeof target) {memoized = wrapper()}
		else { // target is an object
			memoized = {}
			Object.keys(target) // instance methods
				.concat(Object.keys(target.__proto__)) // prototype methods
				.forEach(function(method) {
					if ('function' !== typeof target[method]) return
					if (!opts.only.length && !opts.exclude.length ||
						opts.only.length && ~opts.only.indexOf(method) ||
						opts.exclude.length && !~opts.exclude.indexOf(method)
					) {
						debug && console.log('adding method', method)
						memoized[method] = wrapper(method)
					} else memoized[method] = target[method].bind(target)
				})
		}

		// private clear cache method
		memoized.__clearMemoizeCache__ = function(cb) {store.clear(cb)}

		return memoized
	}

	Object.defineProperty(memoize, 'clear', {enumerable: false, configurable: true, value: function(memoized, cb) {memoized.__clearMemoizeCache__(cb)	}})
	Object.defineProperty(memoize, 'set', {enumerable: false, configurable: true, value: function(a,b){if('object'==typeof a)for(var c in a)options[c]=a[c];else options[a]=b}})
	Object.defineProperty(memoize, 'get', {enumerable: false, configurable: true, value: function(k) {return options[k]}})

	/*
	// clear cache of a memoized object
	exports.clear = function(memoized, cb) {memoized.__clearMemoizeCache__(cb)	}
	// set an option value
	exports.set=function(a,b){if('object'==typeof a)for(var c in a)options[c]=a[c];else options[a]=b};
	// get an option value
	exports.get = function(k) {return options[k]}
	*/

	// MemoryStore
	function MemoryStore() {this.data = {}}
	MemoryStore.prototype.get = function(key, cb) {cb(null, this.data[key])	}
	MemoryStore.prototype.set = function(key, val, cb) {this.data[key] = val;cb(null)}
	MemoryStore.prototype.clear = function(cb) {this.data = {};	cb(null)}

	if (!NS.hasOwnProperty('$Memoize')) {
		Object.defineProperty(NS, '$Memoize', {configurable: false, enumerable: false, value: memoize})
	}

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$Memoize": {
		"module": "Functional",
		"type": "function",
		"static": true,
		"description": "",
		"references": {
			"memoize@github": "https://github.com/stagas/memoize"
		},
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
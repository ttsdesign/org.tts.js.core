(function(NS) {

	function _curry(f, n, args) {
		return function(/* args */) {
			var curryArgs = args.concat(Array.prototype.slice.call(arguments))

			if (curryArgs.length >= n) {
				return f.apply(null, curryArgs.slice(0, n))
			} else {
				return _curry(f, n, curryArgs)
			}
		}
	}

	if (!NS.hasOwnProperty('$Curry')) {
		Object.defineProperty(NS, '$Curry', {configurable: false, enumerable: false, value: function (f, n) {
			var length = n || f.length
			return _curry(f, length, []);
		}})
	}

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$Curry": {
		"module": "Functional",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
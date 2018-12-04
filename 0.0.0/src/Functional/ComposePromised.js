(function(NS) {
	
	function ComposePromised (f, g) {
		return function promiseCompose () {
			var args = Array.prototype.slice.call(arguments)
			return new Promise(function (resolve, reject) {
				g.apply(null, args).then(function (arg) {
					arg = $Type(arg, 'array') ? arg : [arg]
					f.apply(null, arg).then(function () {
						resolve(arguments[0])
					}).catch(reject)
				}).catch(reject)
			})
		}
	}

	if (!NS.hasOwnProperty('$ComposePromised')) {
		Object.defineProperty(NS, '$ComposePromised', {configurable: false, enumerable: false, value: ComposePromised})
	}

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$ComposePromised": {
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
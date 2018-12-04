(function(NS) {

	function Unless (condition, fn, args) {
		if (condition) {
			return
		}
		fn(args)
	}

	if (!NS.hasOwnProperty('$Unless')) {
		Object.defineProperty(NS, '$Unless', {configurable: false, enumerable: false, value: Unless})
	}

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$Unless": {
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
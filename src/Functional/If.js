(function(NS) {

	function If (condition, fn, args) {
		if (condition) {
			fn(args)
		}
	}

	if (!NS.hasOwnProperty('$If')) {
		Object.defineProperty(NS, '$If', {configurable: false, enumerable: false, value: If})
	}

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$If": {
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
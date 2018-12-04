(function(NS) {
	
	if (!NS.hasOwnProperty('$And')) {
		Object.defineProperty(NS, '$And', {configurable: false, enumerable: false, value: function (a, b) {
			return a && b
		}})
	}

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$And": {
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
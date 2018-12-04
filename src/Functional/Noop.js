(function(NS) {
	
	if (!NS.hasOwnProperty('$Noop')) {
		Object.defineProperty(NS, '$Noop', {configurable: false, enumerable: false, value: function () {}})
	}

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$Noop": {
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
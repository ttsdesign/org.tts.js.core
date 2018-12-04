(function(NS) {

	function Or (a, b) {
	  return a || b
	}

	if (!NS.hasOwnProperty('$Or')) {
		Object.defineProperty(NS, '$Or', {configurable: false, enumerable: false, value: Or})
	}

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$Or'": {
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
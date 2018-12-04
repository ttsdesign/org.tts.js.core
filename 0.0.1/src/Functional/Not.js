(function(NS) {
	
	function Not (val) {
		if (Type(val, 'function')) {
			return function () {
			  return Not(val.apply(this, arguments))
			}
		} else {
			return !val
		}
	}

	if (!NS.hasOwnProperty('$Not')) {
		Object.defineProperty(NS, '$Not', {configurable: false, enumerable: false, value: Not})
	}

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$Not": {
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
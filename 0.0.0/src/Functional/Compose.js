(function(NS) {
	
	function Compose (f, g) {
		return function composed(/* args */) { 
			var args = Array.prototype.slice.call(arguments)
			return f(g.apply(null, args))
		} 
	}

	if (!NS.hasOwnProperty('$Compose')) {
		Object.defineProperty(NS, '$Compose', {configurable: false, enumerable: false, value: Compose})
	}

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$Compose": {
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
(function(NS) {
	Object.$Define(NS, '$NotDefined', function (o) {
		return o === undefined || o === null
	})
}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$NotDefined": {
		"version": "1.0.0",
		"module": "Global",
		"type": "function",
		"static": true,
		"description": "Function that returns true if an object is not defined",
		"tests": [
			"Test.Not($NotDefined(true), '$NotDefined:1')",
			"Test.Ok($NotDefined(null), '$NotDefined:2')"
		]
	}
}***/
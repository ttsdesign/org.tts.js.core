(function(NS) {
	Object.$Define(NS, '$Defined', function (o) {
		return typeof o !== 'undefined' && o !== null
	})
}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$Defined": {
		"version": "1.0.0",
		"module": "Global",
		"type": "function",
		"static": true,
		"description": "Function that returns true if an object is defined",
		"tests": [
			"Test.Not($Defined(null), '$Defined:1')",
			"Test.Ok($Defined(true), '$Defined:2')"
		]
	}
}***/
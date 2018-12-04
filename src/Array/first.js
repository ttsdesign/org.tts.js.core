if (!Array.prototype.hasOwnProperty('$first')) {
	Object.defineProperty(Array.prototype, '$first', {configurable: false, enumerable: false, get: function () {
		if (this.length > 0) {
			return this[0]
		}
		return null
	}})
}
/***{
	"Array.prototype.$first": {
		"module": "Array",
		"type": "value",
		"instance": true,
		"description": "Gets the first element of array.",
		"tests": [
			"Test.Equal([1,2,3,4].$first, 1, 'Array.prototype.$first')"
		]
	}
}***/
Array.prototype.$Define('$last', {get: function () {return this.length > 0 ? this[this.length-1] : null}})
/***{
	"Array.prototype.$last": {
		"module": "Array",
		"type": "function",
		"instance": true,
		"description": "Gets the last element of array. ",
		"tests": [
			"Test.Equal([1,2,3,4].$last, 4, 'Array.prototype.$last')"
		]
	}
}***/
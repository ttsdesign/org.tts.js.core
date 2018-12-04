if (!Array.hasOwnProperty('$IsArray')) {
	Object.defineProperty(Array, '$IsArray', {configurable: false, enumerable: false, value: function (a) {
		return Object.prototype.toString.call(a) == '[object Array]'
	}})
}
/***{
	"Array.$IsArray": {
		"module": "Array",
		"type": "function",
		"static": true,
		"description": "Checks if value is classified as an Array object.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
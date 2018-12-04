function Object_Values (object) {
	var keys = Object.$Keys(object)
	return keys.map(function (key) {
		return object[key]
	})
}

if (!Object.hasOwnProperty('$Values')) {
	Object.defineProperty(Object, '$Values', {configurable: false, enumerable: false, value: Object_Values})
}

if (!Object.prototype.hasOwnProperty('$Values')) {
	Object.defineProperty(Object.prototype, '$Values', {configurable: false, enumerable: false, value: function () {
		return Object_Values(this)
	}})
}
/***{
	"Object.$Values": {
		"module": "Object",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Object.prototype.$Values": {
		"module": "Object",
		"type": "function",
		"instance": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
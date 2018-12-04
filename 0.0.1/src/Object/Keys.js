function Object_Keys (object) {
	if (!object) {return []}
	var keys = []
	for (var key in object) {
		keys.push(key)
	}
	return keys
}

if (!Object.hasOwnProperty('$Keys')) {
	Object.defineProperty(Object, '$Keys', {configurable: false, enumerable: false, value: Object_Keys})
}

if (!Object.prototype.hasOwnProperty('$Keys')) {
	Object.defineProperty(Object.prototype, '$Keys', {configurable: false, enumerable: false, value: function () {
		return Object_Keys(this)
	}})
}
/***{
	"Object.$Keys": {
		"module": "Object",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Object.prototype.$Keys": {
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
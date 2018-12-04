function Object_Has () {
	for (var i=1; i<arguments.length; i++) {
		if (!Reflect.has(arguments[0], arguments[i])) {
			return false
		}
	}
	return true
}

if (!Object.hasOwnProperty('$Has')) {
	Object.defineProperty(Object, '$Has', {configurable: false, enumerable: false, value: Object_Has})
}

if (!Object.prototype.hasOwnProperty('$Has')) {
	Object.defineProperty(Object.prototype, '$Has', {configurable: false, enumerable: false, value: function () {
		var args = [this]
		for (var i=0; i<arguments.length; i++) {args.push(arguments[i])}
		return Object_Has.apply(null, args)
	}})
}
/***{
	"Object.$Has": {
		"module": "Object",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Object.prototype.$Has": {
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
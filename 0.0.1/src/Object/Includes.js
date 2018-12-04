function Object_Includes (object, key) {
	var rValue = false
	if (Object.$Keys(object).$Includes(key)) {
		rValue = true
	} else {
		Object.$Each(object, function (e, k, o) {
			if (key == e) {
				rValue = k
			}
		})
	}
	return rValue
}

if (!Object.hasOwnProperty('$Includes')) {
	Object.defineProperty(Object, '$Includes', {configurable: false, enumerable: false, value: Object_Includes})
}

if (!Object.prototype.hasOwnProperty('$Includes')) {
	Object.defineProperty(Object.prototype, '$Includes', {configurable: false, enumerable: false, value: function (key) {
		return Object_Includes(this, key)
	}})
}
/***{
	"Object.$Includes": {
		"module": "Object",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Object.prototype.$Includes": {
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
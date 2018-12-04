Object.$Define(Object, '$Each', function (nonEnumerable, object, cb) {
	if (typeof nonEnumerable === 'object') {cb = object;object=nonEnumerable;nonEnumerable=false}
	if (Reflect.has(object, 'length')) {
		for (var i=0; i<object.length; i++) {
			if (cb(object[i], i, object) === false) {return}
		}
	} else {
		let keys = nonEnumerable ? Reflect.ownKeys(object) : Object.keys(object)
		for (var i=0; i<keys.length; i++) {
			if (cb(object[keys[i]], keys[i], object) === false) {return}
		}
	}
})

Object.$Define(Object.prototype, '$Each', function () {
	if (arguments.length > 1) {Object.$Each(arguments[0], this, arguments[1])}
	else {Object.$Each(this, arguments[0])}
})

/***{
	"Object.$Each": {
		"module": "Object",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Object.prototype.$Each": {
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
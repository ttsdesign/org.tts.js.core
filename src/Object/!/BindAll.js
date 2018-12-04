Object.$Define(Object, '$BindAll', function (object, methods) {
	if (methods) {
		if (Object.prototype.toString.call(methods) != '[object Array]') {throw new TypeError('Object.$BindAll(): The second argument must be an array')}
		methods.forEach(function (method) {
			object[method.name]

	(methods || Reflect.ownKeys(object)).forEach(function (key) {
		console.log(key)
		var target = key in object ? object[key] : key
		console.log(target)
		if (!target || Object.prototype.toString.call(target) != '[object Function]') {return}
		console.log(target.name)
		object[(Object.prototype.toString.call(key) == '[object Function]' ? key.name : key)] = target.bind(object)
	})
	return object
})


function Object_BindAll (object, methods) {
	if (methods && !Array.$IsArray(methods)) {throw new TypeError('The second argument must be an array')}

	var keys = methods || Object.$Keys(object)
	keys.forEach(function (key) {
		var target = key in object ? object[key] : key
		if (!target || Object.prototype.toString.call(target) != '[object Function]') {return}
		object[key.name] = target.bind(object)
	})
	return object
}

if (!Object.hasOwnProperty('$BindAll')) {
	Object.defineProperty(Object, '$BindAll', {configurable: false, enumerable: false, value: Object_BindAll})
}

if (!Object.prototype.hasOwnProperty('$BindAll')) {
	Object.defineProperty(Object.prototype, '$BindAll', {configurable: false, enumerable: false, value: function (methods) {
		return Object_BindAll(this, methods)
	}})
}

/***{
	"Object.$BindAll": {
		"module": "Object",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Object.prototype.$BindAll": {
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
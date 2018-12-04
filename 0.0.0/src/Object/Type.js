function Type () {
	// Type.call(thisObject) => return type label
	if (arguments.length == 0) {return Type(this)}

	// Type(obj) => return type label
	if (arguments.length == 1) {
		var type = Object.prototype.toString.call(arguments[0]).match(/\[object (.+)\]/i)[1].toLowerCase()
		return type != 'object' ? type : arguments[0].constructor.name || type 	
	}
	
	// Type(obj, typeLabel) || Type(obj1, obj2) => return boolean indicating whether type's are the same
	if (arguments.length == 2) {return Type(arguments[0]) === (typeof arguments[1] === 'string' ? arguments[1] : Type(arguments[1]))}
	
	// Type(typeLabel, obj1, obj2, ...objN) || Type(obj1, obj2, ...objN) => return boolean indicating whether all object type's match the type label or first object type
	var type = Type(arguments[0]);
	for (var i=1; i<arguments.length; i++) {if (Type(arguments[i]) != type && (type !== 'string' || Type(arguments[i]) != arguments[0])) {return false}}
	return true
}                                                                  

if (!Object.hasOwnProperty('$Type')) {
	Object.defineProperty(Object, '$Type', {configurable: false, enumerable: false, value: Type})
}

if (!Object.prototype.hasOwnProperty('$Type')) {
	Object.defineProperty(Object.prototype, '$Type', {configurable: false, enumerable: false, value: function () {
		var args = [this]
		for (var i=0; i<arguments.length; i++) {args.push(arguments[i])}
		return Type.apply(null, args)
	}})
}

/***{
		"$Type": {
		"module": "Global",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Object.$Type": {
		"module": "Object",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Object.prototype.$Type": {
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
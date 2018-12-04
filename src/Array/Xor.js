if (!Array.hasOwnProperty('$Xor')) {
	Object.defineProperty(Array, '$Xor', {configurable: false, enumerable: false, value: function () {
		if (!Array.$IsArray(arguments[0])) {return null}
		var xorArray = arguments[0]
		for (var i=1; i<arguments.length; i++) {
			xorArray = Array.$Difference(xorArray, arguments[i]).concat(Array.$Difference(arguments[i], xorArray))
		}
		return xorArray ? xorArray.$Unique() : []
	}});
}

if (!Array.prototype.hasOwnProperty('$Xor')) {
	Object.defineProperty(Array.prototype, '$Xor', {configurable: false, enumerable: false, value: function () {
		var args = [this]
		for (var i=0; i<arguments.length; i++) {args.push(arguments[i])}
		return Array.$Xor.apply(null, args)
	}})
}
/***{
	"Array.$Xor": {
		"module": "Array",
		"type": "function",
		"static": true,
		"description": "Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept.  \nIf mutate is truthy, then the array will be mutated and returned.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Array.prototype.$Xor": {
		"module": "Array",
		"type": "function",
		"instance": true,
		"description": "Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept.  \nIf mutate is truthy, then the array will be mutated and returned.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
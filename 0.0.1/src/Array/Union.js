if (!Array.hasOwnProperty('$Union')) {
	Object.defineProperty(Array, '$Union', {configurable: false, enumerable: false, value: function () {
		return ([].concat.apply([], arguments)).$Unique();
	}});
}

if (!Array.prototype.hasOwnProperty('$Union')) {
	Object.defineProperty(Array.prototype, '$Union', {configurable: false, enumerable: false, value: function () {
		var args = [this]
		for (var i=0; i<arguments.length; i++) {args.push(arguments[i])}
		return Array.$Union.apply(null, args)
	}})
}
/***{
	"Array.$Union": {
		"module": "Array",
		"type": "function",
		"static": true,
		"description": "Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Array.prototype.$Union": {
		"module": "Array",
		"type": "function",
		"instance": true,
		"description": "Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
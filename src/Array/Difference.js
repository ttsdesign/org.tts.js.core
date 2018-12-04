function Array_Difference (a, b) {
	if (!Array.$IsArray(a)) {return null}
	if (!Array.$IsArray(b)) {return a}

	var diffArray = [];
	for (var i=0; i<a.length; i++) {
		var hasElement = false
		for (var j=0; j< b.length; j++) {
			if (a[i]===b[j]) {
				hasElement = true
				break
			}
		}
		if (hasElement===false) {
			diffArray.push(a[i])
		}
	}
	return diffArray
}

if (!Array.hasOwnProperty('$Difference')) {
	Object.defineProperty(Array, '$Difference', {configurable: false, enumerable: false, value: function () {
		var diffArray  = arguments[0]
		for (var i=1; i<arguments.length; i++) {
			diffArray = Array_Difference(diffArray, arguments[i])
		}
		return diffArray
	}})
}

if (!Array.prototype.hasOwnProperty('$Difference')) {
	Object.defineProperty(Array.prototype, '$Difference', {configurable: false, enumerable: false, value: function () {
		var args = [this]
		for (var i=0; i<arguments.length; i++) {args.push(arguments[i])}
		return Array.$Difference.apply(null, args)
	}})
}
/***{
	"Array.$Difference": {
		"module": "Array",
		"type": "function",
		"static": true,
		"description": "Returns an array with only the unique values from the first array, by excluding all values from additional arrays using strict equality for comparisons.",
		"references": {
			"arr-diff@github": "https://github.com/jonschlinkert/arr-diff"
		},
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Array.prototype.$Difference": {
		"module": "Array",
		"type": "function",
		"instance": true,
		"description": "Returns an array with only the unique values from the first array, by excluding all values from additional arrays using strict equality for comparisons.",
		"references": {
			"arr-diff@github": "https://github.com/jonschlinkert/arr-diff"
		},
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
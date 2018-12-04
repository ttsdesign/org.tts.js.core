if (!Array.hasOwnProperty('$Unique')) {
	Object.defineProperty(Array, '$Unique', {configurable: false, enumerable: false, value: function (a, mutate) {
		if (!Array.$IsArray(a)) {return null}
		if (typeof mutate !== 'undefined' && mutate === true) {
			for (var i=a.length-1; i>=0; i--) {
				if (a.indexOf(a[i]) < i) {
					a.splice(i, 1);
				}
			}
			return a;
		} else {
			var aa = [];
			for (var i=0; i<a.length; i++) {
				if (aa.indexOf(a[i]) === -1) {
					aa.push(a[i]);
				}
			}
			return aa;
		}
	}})
}


if (!Array.prototype.hasOwnProperty('$Unique')) {
	Object.defineProperty(Array.prototype, '$Unique', {configurable: false, enumerable: false, value: function (mutate) {
		var args = [this]
		for (var i=0; i<arguments.length; i++) {args.push(arguments[i])}
		return Array.$Unique.apply(null, args)
	}})
}
/***{
	"Array.$Unique": {
		"module": "Array",
		"type": "function",
		"static": true,
		"description": "Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept.  \nIf mutate is truthy, then the array will be mutated and returned.",
		"references": {
			"lodash_uniq": "https://lodash.com/docs/4.17.11#uniq",
			"@github": "https://github.com/lodash/lodash/blob/4.17.11/lodash.js#L8392"
		},
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Array.prototype.$Unique": {
		"module": "Array",
		"type": "function",
		"instance": true,
		"description": "Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept.  \nIf mutate is truthy, then the array will be mutated and returned.",
		"references": {
			"lodash_uniq": "https://lodash.com/docs/4.17.11#uniq",
			"@github": "https://github.com/lodash/lodash/blob/4.17.11/lodash.js#L8392"
		},
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
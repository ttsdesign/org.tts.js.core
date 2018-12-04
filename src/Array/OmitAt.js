if (!Array.hasOwnProperty('$OmitAt')) {
	Object.defineProperty(Array, '$OmitAt', {configurable: false, enumerable: false, value: function () {
		if (!Array.$IsArray(arguments[0])) {return null}
		var a = [], omitIndexes = []
		for (var i=1; i<arguments.length; i++) {
			omitIndexes.push(arguments[i])
		}
		for (var i=0; i<arguments[0].length; i++) {
			if (!omitIndexes.$Includes(i)) {
				a.push(arguments[0][i])
			}
		}
		return a
	}})
}

if (!Array.prototype.hasOwnProperty('$OmitAt')) {
	Object.defineProperty(Array.prototype, '$OmitAt', {configurable: false, enumerable: false, value: function () {
		var args = [this]
		for (var i=0; i<arguments.length; i++) {args.push(arguments[i])}
		return Array.$OmitAt.apply(null, args)
	}})
}
/***{
	"Array.$OmitAt": {
		"module": "Array",
		"type": "function",
		"static": true,
		"description": "Returns an array with the specified indexes omitted.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Array.prototype.$OmitAt": {
		"module": "Array",
		"type": "function",
		"instance": true,
		"description": "Returns an array with the specified indexes omitted.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
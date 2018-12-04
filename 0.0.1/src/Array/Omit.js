if (!Array.hasOwnProperty('$Omit')) {
	Object.defineProperty(Array, '$Omit', {configurable: false, enumerable: false, value: function () {
		if (!Array.$IsArray(arguments[0])) {return null}
		var a = [], omit = []
		for (var i=1; i<arguments.length; i++) {
			omit.push(arguments[i])
		}
		arguments[0].forEach(function (e) {
			if (!omit.$Includes(e)) 	{
				a.push(e)
			}
		})
		return a
	}})
}

if (!Array.prototype.hasOwnProperty('$Omit')) {
	Object.defineProperty(Array.prototype, '$Omit', {configurable: false, enumerable: false, value: function () {
		var args = [this]
		for (var i=0; i<arguments.length; i++) {args.push(arguments[i])}
		return Array.$Delete.apply(null, args)
	}})
}
/***{
	"Array.$Omit": {
		"module": "Array",
		"type": "function",
		"static": true,
		"description": "Returns an array with the specified values omitted.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Array.prototype.$Omit": {
		"module": "Array",
		"type": "function",
		"instance": true,
		"description": "Returns an array with the specified values omitted.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
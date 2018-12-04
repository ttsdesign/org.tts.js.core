if (!Array.hasOwnProperty('$DeleteAt')) {
	Object.defineProperty(Array, '$DeleteAt', {configurable: false, enumerable: false, value: function () {
		if (!Array.$IsArray(arguments[0])) {return null}
		var indexes = []
		for (var i=1; i<arguments.length; i++) {
			if (typeof arguments[i] === 'number' && arguments[i] > -1 && arguments[i] < arguments[0].length) {
				indexes.push(arguments[i])
			}
		}
		indexes.sort(function (a, b) {return b-a})
		indexes.forEach(function (i) {
			this.splice(i, 1)
		}, arguments[0])
		return arguments[0]
	}})
}

if (!Array.prototype.hasOwnProperty('$DeleteAt')) {
	Object.defineProperty(Array.prototype, '$DeleteAt', {configurable: false, enumerable: false, value: function () {
		var args = [this]
		for (var i=0; i<arguments.length; i++) {args.push(arguments[i])}
		return Array.$Delete.apply(null, args)
	}})
}
/***{
	"Array.$DeleteAt": {
		"module": "Array",
		"type": "function",
		"static": true,
		"description": "Deletes the specified indexes from the array. Will sort indexes in descending order, then remove.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Array.prototype.$DeleteAt": {
		"module": "Array",
		"type": "function",
		"instance": true,
		"description": "Deletes the specified indexes from the array. Will sort indexes in descending order, then remove.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
if (!Array.hasOwnProperty('$Select')) {
	Object.defineProperty(Array, '$Select', {configurable: false, enumerable: false, value: function () {
		if (!Array.$IsArray(arguments[0])) {return null}
		var a = [], select = []
		for (var i=0; i<arguments.length; i++) {
			select.push(arguments[i])
		}
		select.forEach(function (index) {
			a.push(this[index])
		}, arguments[0])
		return a
	}})
}

if (!Array.prototype.hasOwnProperty('$Select')) {
	Object.defineProperty(Array.prototype, '$Select', {configurable: false, enumerable: false, value: function () {
		var args = [this]
		for (var i=0; i<arguments.length; i++) {args.push(arguments[i])}
		return Array.$Delete.apply(null, args)
	}})
}
/***{
	"Array.$Select": {
		"module": "Array",
		"type": "function",
		"static": true,
		"description": "Creates an array of elements at given indexes.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Array.prototype.$Select": {
		"module": "Array",
		"type": "function",
		"instance": true,
		"description": "Creates an array of elements at given indexes.",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
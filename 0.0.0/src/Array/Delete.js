if (!Array.hasOwnProperty('$Delete')) {
	Object.defineProperty(Array, '$Delete', {configurable: false, enumerable: false, value: function () {
		if (!Array.$IsArray(arguments[0])) {return null}
		for (let i=0; i<arguments.length; i++) {
			let index = arguments[0].indexOf(arguments[i])
			while (index !== -1) {
				arguments[0].splice(index, 1)
				index = arguments[0].indexOf(arguments[i])
			}
		}
		return arguments[0]
	}})
}

if (!Array.prototype.hasOwnProperty('$Delete')) {
	Object.defineProperty(Array.prototype, '$Delete', {configurable: false, enumerable: false, value: function () {
		let args = [this]
		for (let i=0; i<arguments.length; i++) {args.push(arguments[i])}
		return Array.$Delete.apply(null, args)
	}})
}
/***{
	"Array.$Delete": {
		"module": "Array",
		"type": "function",
		"static": true,
		"description": "Deletes the specified elements from the array",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Array.prototype.$Delete": {
		"module": "Array",
		"type": "function",
		"instance": true,
		"description": "Deletes the specified elements from the array",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
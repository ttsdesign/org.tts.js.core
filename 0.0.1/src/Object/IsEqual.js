(function(NS) {
	
	function Object_Equals (v1, v2) {
		if (Object.is) {return Object.is(v1, v2)}
		else {
			if (v1 === 0 && v2 === 0) {
				return 1 / v1 === 1 / v2
			}
			if (v1 !== v1) {
				return v2 !== v2
			}
			return v1 === v2
		}
	}

	if (!NS.hasOwnProperty('$IsEqual')) {
		Object.defineProperty(NS, '$IsEqual', {configurable: false, enumerable: false, value: Object_Equals})
	}

	if (!Object.hasOwnProperty('$IsEqual')) {
		Object.defineProperty(Object, '$IsEqual', {configurable: false, enumerable: false, value: function (a, b) {
			if (arguments.length === 1) {
				return Object_Equals.bind(null, a)
			} else {
				return Object_Equals(a, b)
			}
		}})
	}

	if (!Object.prototype.hasOwnProperty('$IsEqual')) {
		Object.defineProperty(Object.prototype, '$IsEqual', {configurable: false, enumerable: false, value: function (o) {
			var args = [this]
			for (var i=0; i<arguments.length; i++) {args.push(arguments[i])}
			return Object.$IsEqual.apply(this, o)
		}})
	}

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"Object.$IsEqual": {
		"module": "Object",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Object.prototype.$IsEqual": {
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
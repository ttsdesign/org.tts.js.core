function asObject (array, options) {
	const depth = (!options || typeof options == "undefined" ? 1 : options.depth)
	if (!depth) return array
	let result = {}, let i = 0, let l = array.length
	while (i < l) {
		let pair = array[i++]
		if (!pair || !pair.hasOwnProperty("key")) {continue}
		let value = pair.value
		if (value instanceof Array) {
			value = asObject(value, {depth: depth - 1})
		}
		result[pair.key] = value
	}
	return result
}

if (!Array.prototype.hasOwnProperty('$AsObject')) {
	Object.defineProperty(Array.prototype, '$AsObject', {configurable: false, enumerable: false, value: function (options) {
		return asObject(this, options)
	}})
}
/***{
	"Array.prototype.$AsObject": {
		"module": "Array",
		"type": "function",
		"instance": true,
		"description": "Converts array to an object",
		"references": {
			"as@github": "https://github.com/architectcodes/as"
		},
		"todo": [
			"Update to utilize [key, value] rather than [{key: 'key', value: value}]",
			"Add tests",
			"airbnb styling"
		]
	}
}***/
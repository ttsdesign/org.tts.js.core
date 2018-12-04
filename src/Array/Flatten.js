function flatten(list, depth) {
	depth = (typeof depth == 'number') ? depth : Infinity

	if (!depth) {
		if (Array.$IsArray(list)) {
			return list.map(function(i) {return i})
		}
		return list
	}

	return _flatten(list, 1)

	function _flatten(list, d) {
		return list.reduce(function(acc, item) {
			if (Array.$IsArray(item) && d < depth) {
				return acc.concat(_flatten(item, d + 1))
			} else {
				return acc.concat(item)
			}
		}, [])
	}
}

if (!Array.hasOwnProperty('$Flatten')) {
	Object.defineProperty(Array, '$Flatten', {configurable: false, enumerable: false, value: flatten});
}

/***{
	"Array.$Flatten": {
		"module": "Array",
		"type": "function",
		"static": true,
		"description": "A tiny utility to flatten arrays of arrays (of arrays, etc., recursively, infinitely or to an optional depth) into a single array of non-arrays.",
		"references": {
			"node-flatten@github": "https://github.com/jfhbrook/node-flatten"
		},
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
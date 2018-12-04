//https://www.npmjs.com/package/lodash._arrayincludes
function arrayIncludes(array, value) {
	return !!array.length && baseIndexOf(array, value, 0) > -1
}

function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return indexOfNaN(array, fromIndex)
  }
  var index = fromIndex - 1, length = array.length
  while (++index < length) {
    if (array[index] === value) {return index}
  }
  return -1
}

function indexOfNaN(array, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 0 : -1)
  while ((fromRight ? index-- : ++index < length)) {
    var other = array[index]
    if (other !== other) {return index}
  }
  return -1
}

if (!Array.hasOwnProperty('$Includes')) {
	Object.defineProperty(Array, '$Includes', {configurable: false, enumerable: false, value: function () {
		if (!Array.$IsArray(arguments[0])) {return null}
		for (var i=1; i<arguments.length; i++) {
			if (!arrayIncludes(arguments[0], arguments[i])) {
				return false
			}
		}
		return true
	}})
}

if (!Array.prototype.hasOwnProperty('$Includes')) {
	Object.defineProperty(Array.prototype, '$Includes', {configurable: false, enumerable: false, value: function (value) {
		var args = [this]
		for (var i=0; i<arguments.length; i++) {args.push(arguments[i])}
		return Array.$Includes.apply(null, args)
	}})
}
/***{
	"Array.$Includes": {
		"module": "Array",
		"type": "function",
		"static": true,
		"description": "Determines whether an array includes a certain element, returning true or false as appropriate.",
		"references": {
			"lodash_arrayincludes@github": "https://www.npmjs.com/package/lodash._arrayincludes"
		},
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Array.prototype.$Includes": {
		"module": "Array",
		"type": "function",
		"instance": true,
		"description": "Determines whether an array includes a certain element, returning true or false as appropriate.",
		"references": {
			"lodash_arrayincludes@github": "https://www.npmjs.com/package/lodash._arrayincludes"
		},
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
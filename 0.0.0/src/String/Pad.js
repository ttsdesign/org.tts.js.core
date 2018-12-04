String.$Define('$Pad', function (s, length, padChar, rightPad) {
	s = s + '', length = length - s.length
	if (length <= 0) {return s}
	padChar = String.$Repeat(padChar+'', length)
	if (typeof rightPad !== 'undefined' && rightPad === true) {
		return s+padChar
	}
	return padChar + s
})
String.prototype.$Define('$Pad', function (length, padChar, rightPad) {return String.$Pad(this, length, padChar, rightPad)})
/***{
	"String.$Pad": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"static": true,
		"description": "",
		"tests": [
			"Test.Equal(String.$Pad('test', 10, 'x'), 'xxxxxxtest', 'String.$Pad:1')",
			"Test.Equal(String.$Pad('test', 10, 'x', true), 'testxxxxxx', 'String.$Pad:2')"
		]
	},
	"String.prototype.$Pad": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "",
		"tests": [
			"Test.Equal('test'.$Pad(10, 'x'), 'xxxxxxtest', 'String.prototype.$Pad:1')",
			"Test.Equal('test'.$Pad(10, 'x', true), 'testxxxxxx', 'String.prototype.$Pad:2')"
		]
	}
}***/
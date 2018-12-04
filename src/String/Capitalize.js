String.$Define('$Capitalize', function (s, allWords) {
	const ss = s.toLowerCase()
	if (typeof allWords !== 'undefined' && allWords === true) {
		return ss.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (m) {
			return m.toUpperCase()
		})
	} else {
		return ss.charAt(0).toUpperCase() + ss.substring(1)
	}
})
String.prototype.$Define('$Capitalize', function (allWords) {return String.$Capitalize(this, allWords)})
/***{
	"String.$Capitalize": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"static": true,
		"description": "Capitalize the first letter of a string, or all words in a string",
		"tests": [
			"Test.Equal(String.$Capitalize('THIS IS A TEST'), 'This is a test', 'String.$Capitalize:1')",
			"Test.Equal(String.$Capitalize('THIS IS A TEST', true), 'This Is A Test', 'String.$Capitalize:2')"
		]
	},
	"String.prototype.$Capitalize": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "Capitalize the first letter of a string, or all words in a string",
		"tests": [
			"Test.Equal('THIS IS A TEST'.$Capitalize(), 'This is a test', 'String.prototype.$Capitalize:1')",
			"Test.Equal('THIS IS A TEST'.$Capitalize(true), 'This Is A Test', 'String.prototype.$Capitalize:2')"
		]
	}
}***/
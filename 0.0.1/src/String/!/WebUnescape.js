function String_WebUnescape (s) {
	s.replace(/\&lt;/g, '<')
	s.replace(/\&gt;/g, '>')
	s.replace(/\&amp;/g, '&')
	s.replace(/\&quot;/g, '"')
	s.replace(/\&#39;/g, '\'')
	return s
}

if (!String.hasOwnProperty('$WebUnescape')) {
	Object.defineProperty(String, '$WebUnescape', {configurable: false, enumerable: false, value: String_WebUnescape})
}

if (!String.prototype.hasOwnProperty('$WebUnescape')) {
	Object.defineProperty(String.prototype, '$WebUnescape', {configurable: false, enumerable: false, value: function () {
		return String_WebUnescape(this)
	}})
}

/***{
	"String.$WebUnescape": {
		"module": "String",
		"type": "function",
		"static": true,
		"description": "Performs character unescape replacements",
		"tests": [
			"Test.Equal(String.$WebUnescape('&lt;&gt;'), '<>'), 'String.$WebUnescape')"
		]
	},
	"String.prototype.$WebUnescape": {
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "Performs character unescape replacements",
		"tests": [
			"Test.Equal('&lt;&gt;'.$WebUnescape(), '<>'), 'String.prototype.$WebUnescape')"
		]
	}
}***/
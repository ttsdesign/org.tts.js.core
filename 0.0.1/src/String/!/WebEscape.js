const String_WebEscapeList = {
	'<': '&lt;',
	'>': '&gt;',
	'&': '&amp;',
	'"': '&quot;',
	"'": '&#39;',
}

function String_WebEscape (s) {
	if(typeof s !== 'string'){return null}
	return s.replace(/[<>&"']/g, (arg)=>{
		return String_WebEscapeList[arg]
	})
}

if (!String.hasOwnProperty('$WebEscape')) {
	Object.defineProperty(String, '$WebEscape', {configurable: false, enumerable: false, value: String_WebEscape})
}

if (!String.prototype.hasOwnProperty('$WebEscape')) {
	Object.defineProperty(String.prototype, '$WebEscape', {configurable: false, enumerable: false, value: function () {
		return String_WebEscape(this)
	}})
}

/***{
	"String.$WebEscape": {
		"module": "String",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"String.prototype.$WebEscape": {
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
String.$Define('$IsBase64', function (s) {
	return s.toString() === String.$AsBase64(String.$AsAscii(s, true), true)
})
String.prototype.$Define('$IsBase64', function () {return String.$IsBase64(this)})
/***{
	"String.$IsBase64": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"static": true,
		"description": "Tests whether a string is in Base64 format",
		"tests": [
			"Test.Ok(String.$IsBase64('dGVzdCBzdHJpbmc='), 'String.$IsBase64:1')",
			"Test.Not(String.$IsBase64('test string'), 'String.$IsBase64:2')"
		]
	},
	"String.prototype.$IsBase64": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "Tests whether a string is in Base64 format",
		"tests": [
			"Test.Ok('dGVzdCBzdHJpbmc='.$IsBase64(), 'String.prototype.$IsBase64:1')",
			"Test.Not('test string'.$IsBase64(), 'String.prototype.$IsBase64:2')"
		]
	}
}***/
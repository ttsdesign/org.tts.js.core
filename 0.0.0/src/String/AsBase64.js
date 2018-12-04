String.$Define('$AsBase64', function (s, test) {
	try {
		if (typeof Buffer === 'function' && 'from' in Buffer) {return Buffer.from(s).toString('base64')} //NodeJs
		if (typeof btoa === 'function') {return btoa(s)} //Browser
		if (typeof Utilities === 'object' && 'base64Encode' in Utilities) {return Utilities.base64Encode(s)} //GScripts
	} catch (e) {if (typeof test !== 'boolean' || test === false) {console.log(`String.$AsAscii('${s}'): invalid conversion`)}}
	return s
})

String.prototype.$Define('$AsBase64', function () {return String.$AsBase64(this)})

/***{
	"String.$AsBase64": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"static": true,
		"description": "Convert string from Ascii to Base64",
		"tests": [
			"Test.Equal(String.$AsBase64('test'), 'dGVzdA==', 'String.$AsBase64:1')"
		]
	},
	"String.prototype.$AsBase64": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "Convert string from Ascii to Base64",
		"tests": [
			"Test.Equal(String.$AsBase64('test'), 'dGVzdA==', 'String.$AsBase64:1')"
		]
	}
}***/
String.$Define('$AsAscii', function (s, test) {
	try {
		if (typeof Buffer === 'function' && 'from' in Buffer) {return Buffer.from(s, 'base64').toString('ascii')} //NodeJs
		if (typeof atob === 'function') {return atob(s)} //Browser
		if (typeof Utilities === 'object' && 'base64Decode' in Utilities) {return Utilities.newBlob(Utilities.base64Decode(s, Utilities.Charset.UTF_8)).getDataAsString()} //GScripts
	} catch (e) {if (typeof test !== 'boolean' || test === false) {console.log(`String.$AsAscii('${s}'): invalid conversion`)}}
	return s
})

String.prototype.$Define('$AsAscii', function () {return String.$AsAscii(this)})
/***{
	"String.$AsAscii": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"static": true,
		"description": "Convert string from Base64 to Ascii",
		"tests": [
			"Test.Equal(String.$AsAscii('dGVzdA=='), 'test', 'String.$AsAscii:1')"
		]
	},
	"String.prototype.$AsAscii": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "Convert string from Base64 to Ascii",
		"tests": [
			"Test.Equal('dGVzdA=='.$AsAscii(), 'test', 'String.$AsAscii:1')"
		]
	}
}***/
String.$Define('$Match', function (s, m) {
	return !(s.match(m) == null)
})
String.prototype.$Define('$Match', function (m) {return String.$Match(this, m)})
/***{
	"String.$Match": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"static": true,
		"description": "Matches a string against a pattern and returns true or false",
		"tests": [
			"Test.Ok(String.$Match('test string', 'str'), 'String.$Match:1')",
			"Test.Not(String.$Match('test string', 'xxx'), 'String.$Match:2')"
		]
	},
	"String.prototype.$Match": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "Matches a string against a pattern and returns true or false",
		"tests": [
			"Test.Ok('test string'.$Match('str'), 'String.protoype.$Match:1')",
			"Test.Not('test string'.$Match('xxx'), 'String.protoype.$Match:2')"
		]
	}
}***/
String.$Define('$IsEmpty', function (s) {
	return (typeof s === 'undefined' || s == null || s.length === 0) ? true : false
})
String.prototype.$Define('$IsEmpty', function () {return String.$IsEmpty(this)})
/***{
	"String.$IsEmpty": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"static": true,
		"description": "Checks whether a string is emty (''), null or undefined",
		"tests": [
			"Test.Ok(String.$IsEmpty(''), 'String.$IsEmpty:1')",
			"Test.Not(String.$IsEmpty('test'), 'String.$IsEmpty:2')"
		]
	},
	"String.prototype.$IsEmpty": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "Checks whether a string is emty (''), null or undefined",
		"tests": [
			"Test.Ok(''.$IsEmpty(), 'String.protoype.$IsEmpty:1')",
			"Test.Not('test'.$IsEmpty(), 'String.protoype.$IsEmpty:2')"
		]
	}
}***/
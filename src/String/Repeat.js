String.$Define('$Repeat', function (s, n) {
	let ss = ''
	for (var i=0; i<n; i++) {ss += s}
	return ss
})
String.prototype.$Define('$Repeat', function (n) {return String.$Repeat(this, n)})
/***{
	"String.$Repeat": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"static": true,
		"description": "Returns a new string consisting of a string repeated (n) times",
		"tests": [
			"Test.Equal(String.$Repeat('test', 3), 'testtesttest', 'String.$Repeat')"
		]
	},
	"String.prototype.$Repeat": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "Returns a new string consisting of a string repeated (n) times",
		"tests": [
			"Test.Equal('test'.$Repeat(3), 'testtesttest', 'String.prototype.$Repeat')"
		]
	}
}***/
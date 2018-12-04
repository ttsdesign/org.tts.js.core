String.$Define('$EndsWith', function (string, target, position) {
	const length = string.length
	position = position === undefined ? length : position
	if (position < 0 || position != position) {position = 0}
	else if (position > length) {position = length}
	const end = position
	position -= target.length
	return position >= 0 && string.slice(position, end) == target
})
String.prototype.$Define('$EndsWith', function (target, position) {return String.$EndsWith(this, target, position)})
/***{
	"String.$EndsWith": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"static": true,
		"description": "Checks if string ends with the given target string",
		"tests": [
			"Test.Ok(String.$EndsWith('test case string', 'ing'), 'String.$EndsWith:1')",
			"Test.Ok(String.$EndsWith('test case string', 'ase', 9), 'String.$EndsWith:2')"
		]
	},
	"String.prototype.$EndsWith": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "Checks if string ends with the given target string",
		"tests": [
			"Test.Ok('test case string'.$EndsWith('ing'), 'String.protoype.$EndsWith:1')",
			"Test.Ok('test case string'.$EndsWith('ase', 9), 'String.prototype.$EndsWith:2')"
		]
	}
}***/
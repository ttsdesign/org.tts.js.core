String.$Define('$StartsWith', function (s, target, position) {
	const length = s.length
	position = position == null ? 0 : position
	if (position < 0) {position = 0}
	else if (position > length) {position = length}
	target = ''+target+''
	return s.slice(position, position + target.length) == target
})
String.prototype.$Define('$StartsWith', function (target, position) {return String.$StartsWith(this, target, position)})
/***{
	"String.$StartsWith": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"static": true,
		"description": "Checks if string starts with the given target string",
		"tests": [
			"Test.Ok(String.$StartsWith('test string', 'tes'), 'String.$StartsWith:1')",
			"Test.Ok(String.$StartsWith('test string', 'str', 5), 'String.$StartsWith:2')"
		]
	},
	"String.prototype.$StartsWith": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "Checks if string starts with the given target string",
		"tests": [
			"Test.Ok('test string'.$StartsWith('tes'), 'String.protoype.$StartsWith:1')",
			"Test.Ok('test string'.$StartsWith('str', 5), 'String.protoype.$StartsWith:2')"
		]
	}
}***/
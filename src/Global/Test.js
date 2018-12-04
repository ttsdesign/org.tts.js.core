(function(NS) {
	function IsEqual(a,b,c,d){var e=c?c.call(d,a,b):void 0;if(void 0!==e)return!!e;if(a===b)return!0;if('object'!=typeof a||!a||'object'!=typeof b||!b)return!1;var f=Object.keys(a),g=Object.keys(b);if(f.length!==g.length)return!1;for(var j,h=Object.prototype.hasOwnProperty.bind(b),i=0;i<f.length;i++){if(j=f[i],!h(j))return!1;var k=a[j],l=b[j];if(e=c?c.call(d,k,l,j):void 0,!1===e||void 0===e&&k!==l)return!1}return!0}
	let log = (typeof console === 'object' && typeof console.log === 'function') ? console.log : (typeof Logger !== 'undefined' && typeof Logger.log !== 'undefined') ? Logger.log : function () {}
	let errFails = false, logFail = true, logPass = true
	let count = 0, failCount = 0, passCount = 0

	function LogTest (status, message) {
		count++
		if (status) {passCount++}
		else {failCount++}

		if (errFails && !status) {throw typeof Error !== 'undefined' ? new Error(message || "Assertion Failed") : message}
		message = (status ? '(PASS)' : '(FAIL)') + count + ':' + (message || 'Assertion failed')

		if (logPass && status) {log(message)}
		if (logFail && !status) {log(message)}

		return message
	}

	let Test = {}
	Object.defineProperty(Test, "ErrorOnFail", {enumerable: false, configurable: false, get: function () {return errFails}, set: function (v) {errFails = v; return this}})
	Object.defineProperty(Test, "LogFail", {enumerable: false, configurable: false, get: function () {return logFail}, set: function (v) {logFail = v; return this}})
	Object.defineProperty(Test, "LogPass", {enumerable: false, configurable: false, get: function () {return logPass}, set: function (v) {logPass = v; return this}})
	Object.defineProperty(Test, "Count", {enumerable: false, configurable: false, get: function () {return count}, set: function (v) {count = v; return this}})
	Object.defineProperty(Test, "Passes", {enumerable: false, configurable: false, get: function () {return passCount}})
	Object.defineProperty(Test, "Fails", {enumerable: false, configurable: false, get: function () {return failCount}})

	Object.defineProperty(Test, "Equal", {enumerable: false, configurable: false, value: function (actual, expected, message) {return LogTest(actual === expected, message)}})
	Object.defineProperty(Test, "IsEqual", {enumerable: false, configurable: false, value: function (actual, expected, message) {return LogTest(IsEqual(actual, expected), message)}})
	Object.defineProperty(Test, "Ok", {enumerable: false, configurable: false, value: function (actual, message) {return LogTest(!!actual, message)}})
	Object.defineProperty(Test, "Not", {enumerable: false, configurable: false, value: function (actual, message) {return LogTest(!actual, message)}})

	Object.$Define(NS, 'Test', Test)

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this))
/***{
	"Test": {
		"module": "Global",
		"type": "object",
		"static": true,
		"description": "Test object"
	},
	"Test.ErrorOnFail": {
		"module": "Test",
		"type": "boolean",
		"static": true,
		"description": "Value indicating if failures should throw an error.  Default: false"
	},
	"Test.LogFail": {
		"module": "Test",
		"type": "boolean",
		"static": true,
		"description": "Value indicating if failures should be logged.  Default: true"
	},
	"Test.LogPass": {
		"module": "Test",
		"type": "boolean",
		"static": true,
		"description": "Value indicating if passes should be logged.  Default: true"
	},
	"Test.Count": {
		"module": "Test",
		"type": "number",
		"static": true,
		"description": "Count of tests"
	},
	"Test.Passes": {
		"module": "Test",
		"type": "number",
		"static": true,
		"description": "Count of test passes"
	},
	"Test.Fails": {
		"module": "Test",
		"type": "number",
		"static": true,
		"description": "Count of test failures"
	},
	"Test.Equal": {
		"module": "Test",
		"type": "function",
		"static": true,
		"description": "Function to test if values are equal"
	},
	"Test.IsEqual": {
		"module": "Test",
		"type": "function",
		"static": true,
		"description": "Function to test if values are equal"
	},
	"Test.Ok": {
		"module": "Test",
		"type": "function",
		"static": true,
		"description": "Function to test if value is truthy"
	},
	"Test.Not": {
		"module": "Test",
		"type": "function",
		"static": true,
		"description": "Function to test if value is falsey"
	}
}***/
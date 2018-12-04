String.$Define('$AsUrlMatch', function (t){if("string"!=typeof t)return null;var e="(?:^",n=function(t){return t.replace(/[[^$.|?*+(){}\\]/g,"\\$&")},r=/^(\*|https?|file|ftp|chrome-extension):\/\//.exec(t);if(!r)return null;if(t=t.substr(r[0].length),e+="*"===r[1]?"https?://":r[1]+"://","file"!==r[1]){if(!(r=/^(?:\*|(\*\.)?([^\/*]+))(?=\/)/.exec(t)))return null;t=t.substr(r[0].length),"*"===r[0]?e+="[^/]+":(r[1]&&(e+="(?:[^/]+\\.)?"),e+=n(r[2]))}return e+=t.split("*").map(n).join(".*"),e+="$)"})
String.prototype.$Define('$AsUrlMatch', function () {return String.$AsUrlMatch(this.toString())})
/***{
	"String.$AsUrlMatch": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"static": true,
		"description": "Converts text string into a url match pattern, useful with chrome extensions",
		"tests": [
			"Test.Ok('http://ttscloud.co/'.match(String.$AsUrlMatch('*://*.ttscloud.co/*')) != null, 'String.$AsUrlMatch')"
		]
	},
	"String.prototype.$AsUrlMatch": {
		"version": "1.0.0",
		"module": "String",
		"type": "function",
		"instance": true,
		"description": "Converts text string into a url match pattern, useful with chrome extensions",
		"tests": [
			"Test.Ok('http://ttscloud.co/'.match('*://*.ttscloud.co/*'.$AsUrlMatch()) != null, 'String.prototype.$AsUrlMatch')"
		]
	}
}***/
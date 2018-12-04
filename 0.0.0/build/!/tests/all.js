const fs = require('fs'), path = require('path'), uglifyjs = require("uglify-es")

var targets = ['Array', 'Functional', 'Global', 'Object', 'String']

function Run () {
	console.log(__filename)
	
	targets.forEach(function (target) {
		var buildScript = require(path.resolve(__dirname, target+'.js'))
		buildScript.Run()
	})

}


if (require.main === module) {
	Run()
} else {
	module.exports = {Run: Run}
}

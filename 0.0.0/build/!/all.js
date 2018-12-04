const fs = require('fs'), path = require('path'), uglifyjs = require("uglify-es")

var types = ['src', 'tests', 'docs']
var targets = ['Array', 'Functional', 'Global', 'Object', 'String']

function Run () {
	console.log(__filename)
	types.forEach(function (type) {
		var buildScript = require(path.resolve(__dirname, type,'all.js'))
		buildScript.Run()
		console.log('')
	})
}


if (require.main === module) {
	Run()
} else {
	module.exports = {Run: Run}
}



/*
const fs = require('fs'), path = require('path'), uglifyjs = require("uglify-es")


var modules = {
	'Array': require('./Array.js'),
	'String': require('./String.js')
}



function Run () {
	Object.keys(modules).forEach(function (module) {
		modules[module]()
	})

	var contents = []
	Object.keys(modules).forEach(function (module) {
		contents.push(Minify('./dist/'+module+'.js'))
	})
	//fs.writeFileSync('./dist/org.tts.js.core.js', uglifyjs.minify('+function () {\n\t'+contents.join('\n\t')+'\n}()', {compress : {keep_fnames: true, dead_code: false}, mangle: true}).code, 'utf8')
	fs.writeFileSync('./dist/org.tts.js.core.js', '+function () {\n\t'+contents.join('\n\t')+'\n}()', 'utf8')
}

function Minify (file) {
	if (typeof file !== 'undefined') {
		try {
			fs.accessSync(path.isAbsolute(file) ? file : path.resolve(file), fs.constants.F_OK)
			var content = fs.readFileSync(path.isAbsolute(file) ? file : path.resolve(file), 'utf8')
			return uglifyjs.minify(content, {compress : {keep_fnames: true, dead_code: false}, mangle: true}).code
		} catch (err) {
			return null
		}
	}
}



if (require.main === module) {
	Run()
} else {
	module.exports = Run
}
*/

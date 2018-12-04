const fs = require('fs'), path = require('path'), uglifyjs = require("uglify-es")

function Run () {
	var contents = [], rValue = []
	fs.readdirSync(path.resolve(global.buildConfigs.dirs.src, 'Functional'), {withFileTypes: true}).forEach(function (entry) {
		if (entry.isFile() && !entry.name.startsWith('_') && path.extname(entry.name) == '.js') {

			// Read file content
			var content = fs.readFileSync(path.resolve(global.buildConfigs.dirs.src, 'Functional', entry.name), 'utf8')

			// Unwrap file content
			content = content.replace(/\(function\s*\(NS\)\s*{/, '')
			content = content.replace(/("|')use strict("|');*/, '')
			content = content.replace(/}\(typeof window\s*!==\s*("|')undefined("|')\s*\?\s*window\s*:\s*\(typeof global\s*!==\s*("|')undefined("|')\)\s*\?\s*global\s*:\s*this\)\);*/, '')

			// Minify content & push to contents
			contents.push(uglifyjs.minify(content, {compress : {keep_fnames: true, dead_code: false}, mangle: true}).code)
		}
	})
	
	// Wrap contents
	contents = '(function(NS) {\n\n\t'+contents.join('\n\t')+"\n\n}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))"
	rValue.push(contents)

	// Output contents
	fs.writeFileSync(path.resolve(global.buildConfigs.dirs.dist, 'src', 'Functional.js'), contents, 'utf8')

	// Output minified contents
	contents = uglifyjs.minify(contents, {compress : {keep_fnames: true, dead_code: false}, mangle: true}).code
	fs.writeFileSync(path.resolve(global.buildConfigs.dirs.dist, 'src', 'Functional.min.js'), contents, 'utf8')
	rValue.push(contents)
		
	return rValue
}

if (require.main === module) {
	Run()
} else {
	module.exports = {Run: Run}
}

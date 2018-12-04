const fs = require('fs'), path = require('path'), uglifyjs = require("uglify-es")

function Run () {
	var contents = []
	fs.readdirSync(path.resolve(global.buildConfigs.dirs.src, 'String'), {withFileTypes: true}).forEach(function (entry) {
		if (entry.isFile() && !entry.name.startsWith('_') && path.extname(entry.name) == '.js') {
			contents.push(Minify(path.resolve(global.buildConfigs.dirs.src, 'String', entry.name)))
		}
	})
	contents = uglifyjs.minify('+function () {\n\t'+contents.join('\n\t')+'\n}()', {compress : {keep_fnames: true, dead_code: false}, mangle: true}).code
	fs.writeFileSync(path.resolve(global.buildConfigs.dirs.dist, 'src', 'String.js'), contents, 'utf8')
	return contents	
}


function Load (file) {
	if (typeof file !== 'undefined') {
		try {
			fs.accessSync(path.isAbsolute(file) ? file : path.resolve(file), fs.constants.F_OK)
			return fs.readFileSync(path.isAbsolute(file) ? file : path.resolve(file), 'utf8')
		} catch (err) {
			return null
		}
	}
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
	module.exports = {Run: Run}
}

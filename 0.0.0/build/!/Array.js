const fs = require('fs'), path = require('path')
const PkgTools = require('org.tts.js.pkgtools')

var packageData = {
	'directories': {
		'src': path.resolve('src'),
		'dist': path.resolve('dist'),
		'build': path.resolve('build')
	},
	'name': 'org.tts.js.core',
	'version': '0.1.0'
}
console.log(packageData)

var targetData = {
	'target': 'Array',
	'import': {
		//'directory': 'Z:\\public_html\\code\\org.tts.js.core-dev.git\\src\\Array',
		//'directory': '.',
		'directory': 'Array',
		'recursive': true,
		'unwrap': 0,
		'minify': {compress: {keep_fnames: true, dead_code: false}, mangle: false},
		'beautify': false
	},
	'export': {
		'docs': true,
		'join': '\n',
		'tests': true,
		'wrap': {
			'pre': "(function(NS) {\n",
			'post': "\n}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))"
		}
	}
}

var builder = PkgTools(packageData)
builder.run(targetData, {}, function (err, buildOptions, buildData) {
	console.log(buildData)
	//console.log(buildData.commentData)
})



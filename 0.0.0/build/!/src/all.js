const fs = require('fs'), path = require('path'), uglifyjs = require("uglify-es")

var targets = ['Array', 'Functional', 'Global', 'Object', 'String']

function Run () {
	console.log(__filename)
	
	var contents = []
	targets.forEach(function (target) {
		var buildScript = require(path.resolve(__dirname, target+'.js'))
		contents.push(buildScript.Run())
	})

	fs.writeFileSync(path.resolve(global.buildConfigs.dirs.dist, global.buildConfigs.name+'-'+global.buildConfigs.version+'.js'), contents.join('\n'), 'utf8')
	fs.writeFileSync(path.resolve(global.buildConfigs.dirs.dist, global.buildConfigs.name+'-'+global.buildConfigs.version+'.min.js'), uglifyjs.minify(contents.join('\n'), {compress : {keep_fnames: true, dead_code: false}, mangle: true}).code, 'utf8')

}


if (require.main === module) {
	Run()
} else {
	module.exports = {Run: Run}
}

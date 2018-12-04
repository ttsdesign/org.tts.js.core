const fs = require('fs'), path = require('path'), program = require('commander'), uglifyjs = require("uglify-es")

global.buildConfigs = {
	name: 'org.tts.js.core',
	version: '0.1.0',
	dirs: {
		build: __dirname,
		dist: path.resolve('dist'),
		src: path.resolve('src'),
		docs: path.resolve('docs'),
		tests: path.resolve('tests')
	}
}

try {fs.mkdirSync(path.resolve(global.buildConfigs.dirs.dist, 'src'))} catch(e) {}

var buildTypes = ['all'], buildConfig = {target: 'all', type: 'all'}, targets = {}, allTargets = ['all']

fs.readdirSync(__dirname, {withFileTypes: true}).forEach(function (entry) {
	if (entry.isDirectory()) {
		buildTypes.push(entry.name)
		targets[entry.name] = ['all']
		fs.readdirSync(path.resolve(__dirname, entry.name), {withFileTypes: true}).forEach(function (e) {
			if (e.isFile() && e.name != 'all.js' && !e.name.startsWith('_') && path.extname(e.name) == '.js') {
				targets[entry.name].push(path.basename(e.name, '.js'))
				if (!allTargets.includes(path.basename(e.name, '.js'))) {allTargets.push(path.basename(e.name, '.js'))}
			}
		})
	}
})

program
	.version('0.1.0', '-v, --version')
	.option('-t, --targets', 'List Targets')
	.arguments('<target> [type]')
	.action(function (target, type) {
		buildConfig.target = allTargets.includes(target) ? target : buidConfig.target
		buildConfig.type = typeof type === 'undefined' ? buildConfig.type : buildTypes.includes(type) ? type : buildConfig.type
	})

program.on('--help', function(){
	console.log('')
	console.log('Types: '+buildTypes.join(', '))
	console.log('Targets: '+allTargets.join(', '))
})

program.parse(process.argv)

if (buildConfig.type == 'all' ) {
	if (buildConfig.target == 'all') {
		var buildScript = require(path.resolve(__dirname, 'all.js'))
		buildScript.Run()
	} else {
		buildTypes.forEach(function (type) {
			if (type == 'all') {return}
			var buildScript = require(path.resolve(__dirname, type, buildConfig.target+'.js'))
			buildScript.Run()
		})
	}
} else {
	var buildScript = require(path.resolve(__dirname, buildConfig.type, buildConfig.target+'.js'))
	buildScript.Run()
}







const fs = require('fs'), path = require('path'), uglifyjs = require("uglify-es")
const Extractor = require('DocExtractor')

var extractor = new Extractor()

function Run () {
	var promises = []
	fs.readdirSync(path.resolve(global.buildConfigs.dirs.src, 'Functional'), {withFileTypes: true}).forEach(function (entry) {
		if (entry.isFile() && !entry.name.startsWith('_') && path.extname(entry.name) == '.js') {

			promises.push(extractor.Extract(path.resolve(global.buildConfigs.dirs.src, 'Functional', entry.name)))

		}
	})

	var docData = {}
	Promise.all(promises).then(function (data) {
		data.forEach(function (d) {
			Object.keys(d).forEach(function (dd) {
				docData[dd] = d[dd]
			})
		})
		
		fs.writeFileSync(path.resolve(global.buildConfigs.dirs.dist, 'docs', 'Functional.Contents.json'), JSON.stringify(docData, null, 4), 'utf8')
		//console.log(docData)
	})

}





if (require.main === module) {
	Run()
} else {
	module.exports = {Run: Run}
}

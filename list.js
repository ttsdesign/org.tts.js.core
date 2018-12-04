const fs = require('fs'), path = require('path')

let files = GetFiles('src')
fs.writeFileSync('list.txt', files.join('\n'), 'utf8')

function GetFiles (dir) {
	let files = []
	fs.readdirSync(dir, {withFileTypes: true}).forEach(function (entry) {
		if (entry.isDirectory()) {
			files = files.concat(GetFiles(path.resolve(dir, entry.name)))

		} else {
			files.push(path.resolve(dir, entry.name).replace(process.cwd(), '').split('\\').join('/'))
		}
	})
	return files
}

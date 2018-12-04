const fs = require('fs'), path = require('path'), uglifyjs = require("uglify-es")

function Run () {
	console.log(__filename)
	return

}


if (require.main === module) {
	Run()
} else {
	module.exports = {Run: Run}
}

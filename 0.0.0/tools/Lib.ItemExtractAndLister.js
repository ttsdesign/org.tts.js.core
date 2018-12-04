
var modules = ['Array', 'Array.prototype', 'Object', 'Object.prototype', 'String', 'String.prototype', 'this'] 

var items = {}
modules.forEach(function (m) {
	console.log(m)
	items[m] = []
	Object.getOwnPropertyNames(eval(m)).forEach(function (e) {
		if (e.startsWith('$') && e.length > 2) {
			items[m].push(e)
		}
	})
})

console.log(JSON.stringify(items, null, 4))

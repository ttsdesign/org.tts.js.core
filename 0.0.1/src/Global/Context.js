(function(NS) {
	let type = Object.prototype.toString.call(NS).match(/\[object (.+)\]/i)[1].toLowerCase()
	let context = type == 'window' ? 'Browser' : type == 'global' ? 'NodeJs' : (typeof DriveApp !== 'undefined' && DriveApp.toString() == 'Drive') ? 'Google' : 'unknown'
	Object.$Define(NS, '$context', context)
}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$context": {
		"version": "1.0.0",
		"module": "Global",
		"type": "string",
		"static": true,
		"description": "Returns a string indicating js environment such as Browser, NodeJs or Google"
	}
}***/
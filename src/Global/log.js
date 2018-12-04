(function(NS) {
	Object.$Define(NS, 'log', (typeof DriveApp !== 'undefined' && DriveApp.toString() == 'Drive') ? Logger.log : console.log)
}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this))
/***{
	"log": {
		"version": "1.0.0",
		"module": "Global",
		"type": "function",
		"static": true,
		"description": "Log function mapped to either console.log or Logger.log",
		"tests": [
			"Test.Ok(log==console.log||log==Logger.log, 'log()')"
		]
	}
}***/
(function(NS) {
	
	function Debounce (func, wait, immediate) {
		var timeout, args, context, timestamp, result;
		if (null == wait) wait = 100;

		function later() {
			var last = Date.now() - timestamp;

			if (last < wait && last >= 0) {
				timeout = setTimeout(later, wait - last);
			} else {
				timeout = null;
				if (!immediate) {
					result = func.apply(context, args);
					context = args = null;
				}
			}
		};

		var debounced = function() {
			context = this;
			args = arguments;
			timestamp = Date.now();
			var callNow = immediate && !timeout;
			if (!timeout) timeout = setTimeout(later, wait);
			if (callNow) {
				result = func.apply(context, args);
				context = args = null;
			}

			return result;
		};

		debounced.clear = function() {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
		};

		debounced.flush = function() {
			if (timeout) {
				result = func.apply(context, args);
				context = args = null;

				clearTimeout(timeout);
				timeout = null;
			}
		};

		return debounced
	};
	//Debounce.debounce = debounce;

	if (!NS.hasOwnProperty('$Debounce')) {
		Object.defineProperty(NS, '$Debounce', {configurable: false, enumerable: false, value: Debounce})
	}

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this))
/***{
	"$Debounce": {
		"module": "Functional",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
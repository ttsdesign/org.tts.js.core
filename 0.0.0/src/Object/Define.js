+function (NS) {
	const Define = function(){function a(v,w){var x={configurable:'boolean',enumerable:'boolean',writable:'boolean'};if('object'!==q(v))return!1;if('string'==typeof w){var y=Object.getOwnPropertyDescriptor(v,w);return'undefined'!=typeof y}if(!('value'in v)&&!('writable'in v))return!1;for(var z in v)if('value'!==z){if(!x.hasOwnProperty(z))continue;if(q(v[z])===x[z])continue;if('undefined'!=typeof v[z])return!1}return!0}function n(v,w){if('string'==typeof w){var x=Object.getOwnPropertyDescriptor(v,w);return'undefined'!=typeof x}if('object'!==q(v))return!1;if(o(v,'value')||o(v,'writable'))return!1;if(!o(v,'get')||'function'!=typeof v.get)return!1;if(o(v,'set')&&'function'!=typeof v[y]&&'undefined'!=typeof v[y])return!1;for(var y in v)if(t.hasOwnProperty(y)&&q(v[y])!==t[y]&&'undefined'!=typeof v[y])return!1;return!0}function o(v,w){return{}.hasOwnProperty.call(v,w)}const q=function(){function v(F){return F.constructor?F.constructor.name:null}function w(F){return Array.isArray?Array.isArray(F):F instanceof Array}function x(F){return F instanceof Error||'string'==typeof F.message&&F.constructor&&'number'==typeof F.constructor.stackTraceLimit}function y(F){return!!(F instanceof Date)||'function'==typeof F.toDateString&&'function'==typeof F.getDate&&'function'==typeof F.setDate}function z(F){return!!(F instanceof RegExp)||'string'==typeof F.flags&&'boolean'==typeof F.ignoreCase&&'boolean'==typeof F.multiline&&'boolean'==typeof F.global}function A(F){return'GeneratorFunction'===v(F)}function B(F){return'function'==typeof F.throw&&'function'==typeof F.return&&'function'==typeof F.next}function C(F){try{if('number'==typeof F.length&&'function'==typeof F.callee)return!0}catch(G){if(-1!==G.message.indexOf('callee'))return!0}return!1}function D(F){return F.constructor&&'function'==typeof F.constructor.isBuffer&&F.constructor.isBuffer(F)}var E=Object.prototype.toString;return function(F){if(void 0===F)return'undefined';if(null===F)return'null';var G=typeof F;if('boolean'==G)return'boolean';if('string'==G)return'string';if('number'==G)return'number';if('symbol'==G)return'symbol';if('function'==G)return A(F)?'generatorfunction':'function';if(w(F))return'array';if(D(F))return'buffer';if(C(F))return'arguments';if(y(F))return'date';if(x(F))return'error';if(z(F))return'regexp';switch(v(F)){case'Symbol':return'symbol';case'Promise':return'promise';case'WeakMap':return'weakmap';case'WeakSet':return'weakset';case'Map':return'map';case'Set':return'set';case'Int8Array':return'int8array';case'Uint8Array':return'uint8array';case'Uint8ClampedArray':return'uint8clampedarray';case'Int16Array':return'int16array';case'Uint16Array':return'uint16array';case'Int32Array':return'int32array';case'Uint32Array':return'uint32array';case'Float32Array':return'float32array';case'Float64Array':return'float64array';}return B(F)?'generator':(G=E.call(F),'[object Object]'==G?'object':'[object Map Iterator]'==G?'mapiterator':'[object Set Iterator]'==G?'setiterator':'[object String Iterator]'==G?'stringiterator':'[object Array Iterator]'==G?'arrayiterator':G.slice(8,-1).toLowerCase().replace(/\s/g,''))}}(),r=function(v){return null!=v&&'object'==typeof v&&!1===Array.isArray(v)};var s=function(w,x){return!('object'!==q(w))&&('get'in w?n(w,x):a(w,x))};var t={get:'function',set:'function',configurable:'boolean',enumerable:'boolean'},u='undefined'!=typeof Reflect&&Reflect.defineProperty?Reflect.defineProperty:Object.defineProperty;return function(v,w,x){if(!r(v)&&'function'!=typeof v&&!Array.isArray(v))throw new TypeError('expected an object, function, or array');if('string'!=typeof w)throw new TypeError('expected "key" to be a string');return s(x)?(u(v,w,x),v):(u(v,w,{configurable:!0,enumerable:!1,writable:!0,value:x}),v)}}();
	Define(NS, '$Define', Define)
	Define(Object, '$Define', Define)
	Define(Object.prototype, '$Define', function () {return Define.apply(null, [this].concat(Array.prototype.slice.call(arguments, 0)))})
}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this)
/***{
	"$Define": {
		"module": "Global",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Object.$Define": {
		"module": "Object",
		"type": "function",
		"static": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	},
	"Object.prototype.$Define": {
		"module": "Object",
		"type": "function",
		"instance": true,
		"description": "",
		"todo": [
			"Add tests",
			"airbnb styling"
		]
	}
}***/
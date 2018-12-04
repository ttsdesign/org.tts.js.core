+function(NS) {
	/* AsAscii.js */
	String.$Define("$AsAscii",function(s,test){try{if("function"==typeof Buffer&&"from"in Buffer)return Buffer.from(s,"base64").toString("ascii");if("function"==typeof atob)return atob(s);if("object"==typeof Utilities&&"base64Decode"in Utilities)return Utilities.newBlob(Utilities.base64Decode(s,Utilities.Charset.UTF_8)).getDataAsString()}catch(e){"boolean"==typeof test&&!1!==test||console.log(`String.$AsAscii('${s}'): invalid conversion`)}return s}),String.prototype.$Define("$AsAscii",function(){return String.$AsAscii(this)});
	/* AsBase64.js */
	String.$Define("$AsBase64",function(s,test){try{if("function"==typeof Buffer&&"from"in Buffer)return Buffer.from(s).toString("base64");if("function"==typeof btoa)return btoa(s);if("object"==typeof Utilities&&"base64Encode"in Utilities)return Utilities.base64Encode(s)}catch(e){"boolean"==typeof test&&!1!==test||console.log(`String.$AsAscii('${s}'): invalid conversion`)}return s}),String.prototype.$Define("$AsBase64",function(){return String.$AsBase64(this)});
	/* AsUrlMatch.js */
	String.$Define("$AsUrlMatch",function(t){if("string"!=typeof t)return null;var e="(?:^",n=function(t){return t.replace(/[[^$.|?*+(){}\\]/g,"\\$&")},r=/^(\*|https?|file|ftp|chrome-extension):\/\//.exec(t);if(!r)return null;if(t=t.substr(r[0].length),e+="*"===r[1]?"https?://":r[1]+"://","file"!==r[1]){if(!(r=/^(?:\*|(\*\.)?([^\/*]+))(?=\/)/.exec(t)))return null;t=t.substr(r[0].length),"*"===r[0]?e+="[^/]+":(r[1]&&(e+="(?:[^/]+\\.)?"),e+=n(r[2]))}return e+=t.split("*").map(n).join(".*"),e+="$)"}),String.prototype.$Define("$AsUrlMatch",function(){return String.$AsUrlMatch(this.toString())});
	/* CamelCase.js */
	!function(){const preserveCamelCase=a=>{let b=!1,d=!1,e=!1;for(let f=0;f<a.length;f++){const g=a[f];b&&/[a-zA-Z]/.test(g)&&g.toUpperCase()===g?(a=a.slice(0,f)+"-"+a.slice(f),b=!1,e=d,d=!0,f++):d&&e&&/[a-zA-Z]/.test(g)&&g.toLowerCase()===g?(a=a.slice(0,f-1)+"-"+a.slice(f-1),e=d,d=!1,b=!0):(b=g.toLowerCase()===g,e=d,d=g.toUpperCase()===g)}return a};function camelCase(a,b){b=Object.assign({pascalCase:!1},b);const c=e=>b.pascalCase?e.charAt(0).toUpperCase()+e.slice(1):e;return 0===(a=Array.isArray(a)?a.map(e=>e.trim()).filter(e=>e.length).join("-"):a.trim()).length?"":1===a.length?b.pascalCase?a.toUpperCase():a.toLowerCase():/^[a-z\d]+$/.test(a)?c(a):(a!==a.toLowerCase()&&(a=preserveCamelCase(a)),c(a=a.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(e,f)=>f.toUpperCase())))}String.$Define("$CamelCase",function(s,upper){return void 0!==upper&&!0===upper?function CamelCase(){const a=camelCase.apply(camelCase,arguments);return a.charAt(0).toUpperCase()+a.slice(1)}(s):camelCase(s)}),String.prototype.$Define("$CamelCase",function(upper){return String.$CamelCase(this,upper)})}();
	/* Capitalize.js */
	String.$Define("$Capitalize",function(s,allWords){const ss=s.toLowerCase();return void 0!==allWords&&!0===allWords?ss.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g,function(m){return m.toUpperCase()}):ss.charAt(0).toUpperCase()+ss.substring(1)}),String.prototype.$Define("$Capitalize",function(allWords){return String.$Capitalize(this,allWords)});
	/* EndsWith.js */
	String.$Define("$EndsWith",function(string,target,position){const length=string.length;(position=void 0===position?length:position)<0||position!=position?position=0:position>length&&(position=length);const end=position;return(position-=target.length)>=0&&string.slice(position,end)==target}),String.prototype.$Define("$EndsWith",function(target,position){return String.$EndsWith(this,target,position)});
	/* Hash.js */
	!function(){function safeAdd(n,r){var a=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(a>>16)<<16|65535&a}function md5cmn(r,d,n,t,m,f){return safeAdd(function bitRotateLeft(r,d){return r<<d|r>>>32-d}(safeAdd(safeAdd(d,r),safeAdd(t,f)),m),n)}function md5ff(r,d,n,t,m,f,i){return md5cmn(d&n|~d&t,r,d,m,f,i)}function md5gg(r,d,n,t,m,f,i){return md5cmn(d&t|n&~t,r,d,m,f,i)}function md5hh(r,d,n,t,m,f,i){return md5cmn(d^n^t,r,d,m,f,i)}function md5ii(r,d,n,t,m,f,i){return md5cmn(n^(d|~t),r,d,m,f,i)}function binlMD5(r,d){var n,t,m,f,i;r[d>>5]|=128<<d%32,r[14+(d+64>>>9<<4)]=d;var e=1732584193,h=-271733879,g=-1732584194,o=271733878;for(n=0;n<r.length;n+=16)t=e,m=h,f=g,i=o,h=md5ii(h=md5ii(h=md5ii(h=md5ii(h=md5hh(h=md5hh(h=md5hh(h=md5hh(h=md5gg(h=md5gg(h=md5gg(h=md5gg(h=md5ff(h=md5ff(h=md5ff(h=md5ff(h,g=md5ff(g,o=md5ff(o,e=md5ff(e,h,g,o,r[n],7,-680876936),h,g,r[n+1],12,-389564586),e,h,r[n+2],17,606105819),o,e,r[n+3],22,-1044525330),g=md5ff(g,o=md5ff(o,e=md5ff(e,h,g,o,r[n+4],7,-176418897),h,g,r[n+5],12,1200080426),e,h,r[n+6],17,-1473231341),o,e,r[n+7],22,-45705983),g=md5ff(g,o=md5ff(o,e=md5ff(e,h,g,o,r[n+8],7,1770035416),h,g,r[n+9],12,-1958414417),e,h,r[n+10],17,-42063),o,e,r[n+11],22,-1990404162),g=md5ff(g,o=md5ff(o,e=md5ff(e,h,g,o,r[n+12],7,1804603682),h,g,r[n+13],12,-40341101),e,h,r[n+14],17,-1502002290),o,e,r[n+15],22,1236535329),g=md5gg(g,o=md5gg(o,e=md5gg(e,h,g,o,r[n+1],5,-165796510),h,g,r[n+6],9,-1069501632),e,h,r[n+11],14,643717713),o,e,r[n],20,-373897302),g=md5gg(g,o=md5gg(o,e=md5gg(e,h,g,o,r[n+5],5,-701558691),h,g,r[n+10],9,38016083),e,h,r[n+15],14,-660478335),o,e,r[n+4],20,-405537848),g=md5gg(g,o=md5gg(o,e=md5gg(e,h,g,o,r[n+9],5,568446438),h,g,r[n+14],9,-1019803690),e,h,r[n+3],14,-187363961),o,e,r[n+8],20,1163531501),g=md5gg(g,o=md5gg(o,e=md5gg(e,h,g,o,r[n+13],5,-1444681467),h,g,r[n+2],9,-51403784),e,h,r[n+7],14,1735328473),o,e,r[n+12],20,-1926607734),g=md5hh(g,o=md5hh(o,e=md5hh(e,h,g,o,r[n+5],4,-378558),h,g,r[n+8],11,-2022574463),e,h,r[n+11],16,1839030562),o,e,r[n+14],23,-35309556),g=md5hh(g,o=md5hh(o,e=md5hh(e,h,g,o,r[n+1],4,-1530992060),h,g,r[n+4],11,1272893353),e,h,r[n+7],16,-155497632),o,e,r[n+10],23,-1094730640),g=md5hh(g,o=md5hh(o,e=md5hh(e,h,g,o,r[n+13],4,681279174),h,g,r[n],11,-358537222),e,h,r[n+3],16,-722521979),o,e,r[n+6],23,76029189),g=md5hh(g,o=md5hh(o,e=md5hh(e,h,g,o,r[n+9],4,-640364487),h,g,r[n+12],11,-421815835),e,h,r[n+15],16,530742520),o,e,r[n+2],23,-995338651),g=md5ii(g,o=md5ii(o,e=md5ii(e,h,g,o,r[n],6,-198630844),h,g,r[n+7],10,1126891415),e,h,r[n+14],15,-1416354905),o,e,r[n+5],21,-57434055),g=md5ii(g,o=md5ii(o,e=md5ii(e,h,g,o,r[n+12],6,1700485571),h,g,r[n+3],10,-1894986606),e,h,r[n+10],15,-1051523),o,e,r[n+1],21,-2054922799),g=md5ii(g,o=md5ii(o,e=md5ii(e,h,g,o,r[n+8],6,1873313359),h,g,r[n+15],10,-30611744),e,h,r[n+6],15,-1560198380),o,e,r[n+13],21,1309151649),g=md5ii(g,o=md5ii(o,e=md5ii(e,h,g,o,r[n+4],6,-145523070),h,g,r[n+11],10,-1120210379),e,h,r[n+2],15,718787259),o,e,r[n+9],21,-343485551),e=safeAdd(e,t),h=safeAdd(h,m),g=safeAdd(g,f),o=safeAdd(o,i);return[e,h,g,o]}function binl2rstr(r){var d,n="",t=32*r.length;for(d=0;d<t;d+=8)n+=String.fromCharCode(r[d>>5]>>>d%32&255);return n}function rstr2binl(r){var d,n=[];for(n[(r.length>>2)-1]=void 0,d=0;d<n.length;d+=1)n[d]=0;var t=8*r.length;for(d=0;d<t;d+=8)n[d>>5]|=(255&r.charCodeAt(d/8))<<d%32;return n}function rstr2hex(r){var d,n,t="0123456789abcdef",m="";for(n=0;n<r.length;n+=1)d=r.charCodeAt(n),m+=t.charAt(d>>>4&15)+t.charAt(15&d);return m}function str2rstrUTF8(r){return unescape(encodeURIComponent(r))}function rawMD5(r){return function rstrMD5(r){return binl2rstr(binlMD5(rstr2binl(r),8*r.length))}(str2rstrUTF8(r))}function rawHMACMD5(r,d){return function rstrHMACMD5(r,d){var n,t,m=rstr2binl(r),f=[],i=[];for(f[15]=i[15]=void 0,m.length>16&&(m=binlMD5(m,8*r.length)),n=0;n<16;n+=1)f[n]=909522486^m[n],i[n]=1549556828^m[n];return t=binlMD5(f.concat(rstr2binl(d)),512+8*d.length),binl2rstr(binlMD5(i.concat(t),640))}(str2rstrUTF8(r),str2rstrUTF8(d))}function ft(a,e,f,g){return 20>a?e&f|~e&g:40>a?e^f^g:60>a?e&f|e&g|f&g:e^f^g}function modPlus(a,b){var c=(65535&a)+(65535&b);return(a>>16)+(b>>16)+(c>>16)<<16|65535&c}function cyclicShift(a,b){return a<<b|a>>>32-b}String.$Define("$Hash",function(s,type){return void 0===type||"sha-1"!=type&&"sha1"!=type?function md5(M,r,D){return r?D?rawHMACMD5(r,M):function hexHMACMD5(r,d){return rstr2hex(rawHMACMD5(r,d))}(r,M):D?rawMD5(M):function hexMD5(r){return rstr2hex(rawMD5(r))}(M)}(s):function sha1(a){return function binToHex(a){var d,b="0123456789abcdef",c="";for(d=0;d<4*a.length;d++)c+=b.charAt(15&a[d>>2]>>8*(3-d%4)+4)+b.charAt(15&a[d>>2]>>8*(3-d%4));return c}(function coreFunction(f){var o,p,q,r,s,u,v,x,g=[],h=1732584193,k=4023233417,l=2562383102,m=271733878,n=3285377520;for(v=0;v<f.length;v+=16){for(o=h,p=k,q=l,r=m,s=n,x=0;80>x;x++)g[x]=16>x?f[v+x]:cyclicShift(g[x-3]^g[x-8]^g[x-14]^g[x-16],1),u=modPlus(modPlus(cyclicShift(h,5),ft(x,k,l,m)),modPlus(modPlus(n,g[x]),20>(a=x)?1518500249:40>a?1859775393:60>a?2400959708:3395469782)),n=m,m=l,l=cyclicShift(k,30),k=h,h=u;h=modPlus(h,o),k=modPlus(k,p),l=modPlus(l,q),m=modPlus(m,r),n=modPlus(n,s)}var a;return[h,k,l,m,n]}(function fillString(a){var d,b=1+(a.length+8>>6),c=[];for(d=0;d<16*b;d++)c[d]=0;for(d=0;d<a.length;d++)c[d>>2]|=a.charCodeAt(d)<<24-8*(3&d);return c[d>>2]|=128<<24-8*(3&d),c[16*b-1]=8*a.length,c}(a)))}(s)}),String.prototype.$Define("$Hash",function(type){return String.$Hash(this,type)})}();
	/* IsBase64.js */
	String.$Define("$IsBase64",function(s){return s.toString()===String.$AsBase64(String.$AsAscii(s,!0),!0)}),String.prototype.$Define("$IsBase64",function(){return String.$IsBase64(this)});
	/* IsEmpty.js */
	String.$Define("$IsEmpty",function(s){return void 0===s||null==s||0===s.length}),String.prototype.$Define("$IsEmpty",function(){return String.$IsEmpty(this)});
	/* Match.js */
	String.$Define("$Match",function(s,m){return!(null==s.match(m))}),String.prototype.$Define("$Match",function(m){return String.$Match(this,m)});
	/* Pad.js */
	String.$Define("$Pad",function(s,length,padChar,rightPad){return(length-=(s+="").length)<=0?s:(padChar=String.$Repeat(padChar+"",length),void 0!==rightPad&&!0===rightPad?s+padChar:padChar+s)}),String.prototype.$Define("$Pad",function(length,padChar,rightPad){return String.$Pad(this,length,padChar,rightPad)});
	/* Repeat.js */
	String.$Define("$Repeat",function(s,n){let ss="";for(var i=0;i<n;i++)ss+=s;return ss}),String.prototype.$Define("$Repeat",function(n){return String.$Repeat(this,n)});
	/* StartsWith.js */
	String.$Define("$StartsWith",function(s,target,position){const length=s.length;return(position=null==position?0:position)<0?position=0:position>length&&(position=length),target=""+target,s.slice(position,position+target.length)==target}),String.prototype.$Define("$StartsWith",function(target,position){return String.$StartsWith(this,target,position)});
}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined') ? global : this)

/***{
    "String.$AsAscii": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "Convert string from Base64 to Ascii",
        "tests": [
            "Test.Equal(String.$AsAscii('dGVzdA=='), 'test', 'String.$AsAscii:1')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\AsAscii.js"
    },
    "String.prototype.$AsAscii": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "Convert string from Base64 to Ascii",
        "tests": [
            "Test.Equal('dGVzdA=='.$AsAscii(), 'test', 'String.$AsAscii:1')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\AsAscii.js"
    },
    "String.$AsBase64": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "Convert string from Ascii to Base64",
        "tests": [
            "Test.Equal(String.$AsBase64('test'), 'dGVzdA==', 'String.$AsBase64:1')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\AsBase64.js"
    },
    "String.prototype.$AsBase64": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "Convert string from Ascii to Base64",
        "tests": [
            "Test.Equal(String.$AsBase64('test'), 'dGVzdA==', 'String.$AsBase64:1')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\AsBase64.js"
    },
    "String.$AsUrlMatch": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "Converts text string into a url match pattern, useful with chrome extensions",
        "tests": [
            "Test.Ok('http://ttscloud.co/'.match(String.$AsUrlMatch('*://*.ttscloud.co/*')) != null, 'String.$AsUrlMatch')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\AsUrlMatch.js"
    },
    "String.prototype.$AsUrlMatch": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "Converts text string into a url match pattern, useful with chrome extensions",
        "tests": [
            "Test.Ok('http://ttscloud.co/'.match('*://*.ttscloud.co/*'.$AsUrlMatch()) != null, 'String.prototype.$AsUrlMatch')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\AsUrlMatch.js"
    },
    "String.$CamelCase": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "Converts a string to Camel Case format",
        "tests": [
            "Test.Equal(String.$CamelCase('this is a test'), 'thisIsATest', 'String.$CamelCase:1')",
            "Test.Equal(String.$CamelCase('this is a test', true), 'ThisIsATest', 'String.$CamelCase:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\CamelCase.js"
    },
    "String.prototype.$CamelCase": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "Converts a string to Camel Case format",
        "tests": [
            "Test.Equal('this is a test'.$CamelCase(), 'thisIsATest', 'String.prototype.$CamelCase:1')",
            "Test.Equal('this is a test'.$CamelCase(true), 'ThisIsATest', 'String.prototype.$CamelCase:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\CamelCase.js"
    },
    "String.$Capitalize": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "Capitalize the first letter of a string, or all words in a string",
        "tests": [
            "Test.Equal(String.$Capitalize('THIS IS A TEST'), 'This is a test', 'String.$Capitalize:1')",
            "Test.Equal(String.$Capitalize('THIS IS A TEST', true), 'This Is A Test', 'String.$Capitalize:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\Capitalize.js"
    },
    "String.prototype.$Capitalize": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "Capitalize the first letter of a string, or all words in a string",
        "tests": [
            "Test.Equal('THIS IS A TEST'.$Capitalize(), 'This is a test', 'String.prototype.$Capitalize:1')",
            "Test.Equal('THIS IS A TEST'.$Capitalize(true), 'This Is A Test', 'String.prototype.$Capitalize:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\Capitalize.js"
    },
    "String.$EndsWith": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "Checks if string ends with the given target string",
        "tests": [
            "Test.Ok(String.$EndsWith('test case string', 'ing'), 'String.$EndsWith:1')",
            "Test.Ok(String.$EndsWith('test case string', 'ase', 9), 'String.$EndsWith:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\EndsWith.js"
    },
    "String.prototype.$EndsWith": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "Checks if string ends with the given target string",
        "tests": [
            "Test.Ok('test case string'.$EndsWith('ing'), 'String.protoype.$EndsWith:1')",
            "Test.Ok('test case string'.$EndsWith('ase', 9), 'String.prototype.$EndsWith:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\EndsWith.js"
    },
    "String.$Hash": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "Generates a MD5 or SHA-1 hash string",
        "tests": [
            "Test.Equal(String.$Hash('test string'), '6f8db599de986fab7a21625b7916589c', 'String.$Hash:1')",
            "Test.Equal(String.$Hash('test string', 'sha1'), '661295c9cbf9d6b2f6428414504a8deed3020641', 'String.$Hash:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\Hash.js"
    },
    "String.prototype.$Hash": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "Generates a MD5 or SHA-1 hash string",
        "tests": [
            "Test.Equal('test string'.$Hash(), '6f8db599de986fab7a21625b7916589c', 'String.prototype.$Hash:1')",
            "Test.Equal('test string'.$Hash('sha1'), '661295c9cbf9d6b2f6428414504a8deed3020641', 'String.prototype.$Hash:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\Hash.js"
    },
    "String.$IsBase64": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "Tests whether a string is in Base64 format",
        "tests": [
            "Test.Ok(String.$IsBase64('dGVzdCBzdHJpbmc='), 'String.$IsBase64:1')",
            "Test.Not(String.$IsBase64('test string'), 'String.$IsBase64:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\IsBase64.js"
    },
    "String.prototype.$IsBase64": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "Tests whether a string is in Base64 format",
        "tests": [
            "Test.Ok('dGVzdCBzdHJpbmc='.$IsBase64(), 'String.prototype.$IsBase64:1')",
            "Test.Not('test string'.$IsBase64(), 'String.prototype.$IsBase64:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\IsBase64.js"
    },
    "String.$IsEmpty": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "Checks whether a string is emty (''), null or undefined",
        "tests": [
            "Test.Ok(String.$IsEmpty(''), 'String.$IsEmpty:1')",
            "Test.Not(String.$IsEmpty('test'), 'String.$IsEmpty:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\IsEmpty.js"
    },
    "String.prototype.$IsEmpty": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "Checks whether a string is emty (''), null or undefined",
        "tests": [
            "Test.Ok(''.$IsEmpty(), 'String.protoype.$IsEmpty:1')",
            "Test.Not('test'.$IsEmpty(), 'String.protoype.$IsEmpty:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\IsEmpty.js"
    },
    "String.$Match": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "Matches a string against a pattern and returns true or false",
        "tests": [
            "Test.Ok(String.$Match('test string', 'str'), 'String.$Match:1')",
            "Test.Not(String.$Match('test string', 'xxx'), 'String.$Match:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\Match.js"
    },
    "String.prototype.$Match": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "Matches a string against a pattern and returns true or false",
        "tests": [
            "Test.Ok('test string'.$Match('str'), 'String.protoype.$Match:1')",
            "Test.Not('test string'.$Match('xxx'), 'String.protoype.$Match:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\Match.js"
    },
    "String.$Pad": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "",
        "tests": [
            "Test.Equal(String.$Pad('test', 10, 'x'), 'xxxxxxtest', 'String.$Pad:1')",
            "Test.Equal(String.$Pad('test', 10, 'x', true), 'testxxxxxx', 'String.$Pad:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\Pad.js"
    },
    "String.prototype.$Pad": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "",
        "tests": [
            "Test.Equal('test'.$Pad(10, 'x'), 'xxxxxxtest', 'String.prototype.$Pad:1')",
            "Test.Equal('test'.$Pad(10, 'x', true), 'testxxxxxx', 'String.prototype.$Pad:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\Pad.js"
    },
    "String.$Repeat": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "Returns a new string consisting of a string repeated (n) times",
        "tests": [
            "Test.Equal(String.$Repeat('test', 3), 'testtesttest', 'String.$Repeat')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\Repeat.js"
    },
    "String.prototype.$Repeat": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "Returns a new string consisting of a string repeated (n) times",
        "tests": [
            "Test.Equal('test'.$Repeat(3), 'testtesttest', 'String.prototype.$Repeat')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\Repeat.js"
    },
    "String.$StartsWith": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "static": true,
        "description": "Checks if string starts with the given target string",
        "tests": [
            "Test.Ok(String.$StartsWith('test string', 'tes'), 'String.$StartsWith:1')",
            "Test.Ok(String.$StartsWith('test string', 'str', 5), 'String.$StartsWith:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\StartsWith.js"
    },
    "String.prototype.$StartsWith": {
        "version": "1.0.0",
        "module": "String",
        "type": "function",
        "instance": true,
        "description": "Checks if string starts with the given target string",
        "tests": [
            "Test.Ok('test string'.$StartsWith('tes'), 'String.protoype.$StartsWith:1')",
            "Test.Ok('test string'.$StartsWith('str', 5), 'String.protoype.$StartsWith:2')"
        ],
        "file": "Z:\\public_html\\code\\packages\\org.tts.js.core-dev.git\\src\\String\\StartsWith.js"
    }
}***/
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/Array.js
Test.Equal([1,2,3,4].$first, 1, 'Array.prototype.$first')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/Array.js
Test.Equal([1,2,3,4].$last, 4, 'Array.prototype.$last')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/Global.js
Test.Ok(log==console.log||log==Logger.log, 'log()')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal(String.$AsAscii('dGVzdA=='), 'test', 'String.$AsAscii:1')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal('dGVzdA=='.$AsAscii(), 'test', 'String.$AsAscii:1')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal(String.$AsBase64('test'), 'dGVzdA==', 'String.$AsBase64:1')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal(String.$AsBase64('test'), 'dGVzdA==', 'String.$AsBase64:1')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Ok('http://ttscloud.co/'.match(String.$AsUrlMatch('*://*.ttscloud.co/*')) != null, 'String.$AsUrlMatch')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Ok('http://ttscloud.co/'.match('*://*.ttscloud.co/*'.$AsUrlMatch()) != null, 'String.prototype.$AsUrlMatch')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal(String.$CamelCase('this is a test'), 'thisIsATest', 'String.$CamelCase:1')
Test.Equal(String.$CamelCase('this is a test', true), 'ThisIsATest', 'String.$CamelCase:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal('this is a test'.$CamelCase(), 'thisIsATest', 'String.prototype.$CamelCase:1')
Test.Equal('this is a test'.$CamelCase(true), 'ThisIsATest', 'String.prototype.$CamelCase:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal(String.$Capitalize('THIS IS A TEST'), 'This is a test', 'String.$Capitalize:1')
Test.Equal(String.$Capitalize('THIS IS A TEST', true), 'This Is A Test', 'String.$Capitalize:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal('THIS IS A TEST'.$Capitalize(), 'This is a test', 'String.prototype.$Capitalize:1')
Test.Equal('THIS IS A TEST'.$Capitalize(true), 'This Is A Test', 'String.prototype.$Capitalize:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Ok(String.$EndsWith('test case string', 'ing'), 'String.$EndsWith:1')
Test.Ok(String.$EndsWith('test case string', 'ase', 9), 'String.$EndsWith:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Ok('test case string'.$EndsWith('ing'), 'String.protoype.$EndsWith:1')
Test.Ok('test case string'.$EndsWith('ase', 9), 'String.prototype.$EndsWith:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal(String.$Hash('test string'), '6f8db599de986fab7a21625b7916589c', 'String.$Hash:1')
Test.Equal(String.$Hash('test string', 'sha1'), '661295c9cbf9d6b2f6428414504a8deed3020641', 'String.$Hash:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal('test string'.$Hash(), '6f8db599de986fab7a21625b7916589c', 'String.prototype.$Hash:1')
Test.Equal('test string'.$Hash('sha1'), '661295c9cbf9d6b2f6428414504a8deed3020641', 'String.prototype.$Hash:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Ok(String.$IsBase64('dGVzdCBzdHJpbmc='), 'String.$IsBase64:1')
Test.Not(String.$IsBase64('test string'), 'String.$IsBase64:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Ok('dGVzdCBzdHJpbmc='.$IsBase64(), 'String.prototype.$IsBase64:1')
Test.Not('test string'.$IsBase64(), 'String.prototype.$IsBase64:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Ok(String.$IsEmpty(''), 'String.$IsEmpty:1')
Test.Not(String.$IsEmpty('test'), 'String.$IsEmpty:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Ok(''.$IsEmpty(), 'String.protoype.$IsEmpty:1')
Test.Not('test'.$IsEmpty(), 'String.protoype.$IsEmpty:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Ok(String.$Match('test string', 'str'), 'String.$Match:1')
Test.Not(String.$Match('test string', 'xxx'), 'String.$Match:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Ok('test string'.$Match('str'), 'String.protoype.$Match:1')
Test.Not('test string'.$Match('xxx'), 'String.protoype.$Match:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal(String.$Pad('test', 10, 'x'), 'xxxxxxtest', 'String.$Pad:1')
Test.Equal(String.$Pad('test', 10, 'x', true), 'testxxxxxx', 'String.$Pad:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal('test'.$Pad(10, 'x'), 'xxxxxxtest', 'String.prototype.$Pad:1')
Test.Equal('test'.$Pad(10, 'x', true), 'testxxxxxx', 'String.prototype.$Pad:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal(String.$Repeat('test', 3), 'testtesttest', 'String.$Repeat')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Equal('test'.$Repeat(3), 'testtesttest', 'String.prototype.$Repeat')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Ok(String.$StartsWith('test string', 'tes'), 'String.$StartsWith:1')
Test.Ok(String.$StartsWith('test string', 'str', 5), 'String.$StartsWith:2')
//C:/Users/Tyler Thayn/Desktop/LocalGits/org.tts.js.core/dist/String.js
Test.Ok('test string'.$StartsWith('tes'), 'String.protoype.$StartsWith:1')
Test.Ok('test string'.$StartsWith('str', 5), 'String.protoype.$StartsWith:2')
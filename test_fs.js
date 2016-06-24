var fs = require('fs');

var result = fs.readFileSync('index.js', 'utf-8');
console.log(result);

console.log('===============');
console.log('after readFile');
console.log('===============');
var fs = require('fs');
console.log(fs.createReadStream(__filename).pipe(process.stdout));
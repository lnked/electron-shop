var fs = require('fs');
var contents = fs.readFileSync('./package.json', 'utf8');

document.write('is ' + process.version);
document.write(contents);
var fs = require('fs');

// 1st print, couz synchronous
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// 3rd print 
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	console.log(data);
});

// 2nd print 
console.log('Done!');

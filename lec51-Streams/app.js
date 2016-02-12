/*
Chunk : A PIECE OF DATA BEING SENT THROUGH A STREAM
	Data is split in 'chunks' and streamed
*/
var fs = require('fs');

// highWaterMask : 32KB
var readable = fs.createReadStream(__dirname + '/greet.txt' , { encoding : 'utf8', highWaterMask: 32 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
	console.log(chunk);
	console.log(chunk.length);

	// case 1
	// writable.write(chunk);
});

// case 2
readable.pipe(writable);


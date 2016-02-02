var buffer = new ArrayBuffer(8);	// 8 bytes
var view = new Int32Array(buffer);	// 4 bytes of Int, two numbers

view[0] = 5;
view[1] = 15;
view[2] = 30;

console.log(view);

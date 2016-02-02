function greet(callback) {
	console.log('Hello!');

	var data = {
		name : 'Kevin Kim'
	};

	callback(data);
}

// callback object
greet(function(data) {
	console.log('The callback was invoked!');
	console.log(data);
});

// callback value
greet(function(data) {
	console.log('A different callback was invoked!');
	console.log(data.name);
});

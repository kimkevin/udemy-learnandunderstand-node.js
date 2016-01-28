var obj = {
	name: 'Kevin Kim',
	greet: function() {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();
obj.greet.call({ name: 'Kevin Lee'}); // It can be like this param1, param2 from 2nd parameters
obj.greet.apply({ name: 'Kevin Kim'}); // It can be like [param1, param2] from 2nd parameters

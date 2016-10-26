//First, we must import our express as a dependency once it is installed.
var express = require('express');
var app = express();

//This will serve as a directory to watch for files.
app.use(express.static(__dirname + "/public"));

app.get('/contactList', function(req, res){
	console.log("GET request recieved!")

	person1 = {
		name: 'Jago',
		email: 'tigerspirit@ki.com',
		number: '555-555-5555'
	}

	person2 = {
		name: 'Sabrewulf',
		email: 'wolfman@ki.com',
		number: '555-555-6666'
	}

	person3 = {
		name: 'Orchid',
		email: 'bbt@ki.com',
		number: '555-555-7777'
	}

	var contactList = [person1, person2, person3];

	res.json(contactList)
})

//We select the port the app will run on.
app.listen(3000);
console.log("Server up and running on port 3000");


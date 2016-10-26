//First, we must import our dependencies from node_modules.
var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser'); //1a: This is used so that our server can read from the body of our html 'intelligently' by looking for certain syntax.

var app = express();

//1st argument is mongodb database we are using, and 2nd argument is collection.
var db = mongojs('contactList', ['contactList']);

//This will serve as a directory to watch for files.
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json()); //1b: Activates bodyParser on input data.

app.get('/contactList', function(req, res){
	console.log("GET request recieved!")


	db.contactList.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	})
});

app.post('/contactList', function(req, res){
	console.log(req.body);
	db.contactList.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

//We select the port the app will run on.
app.listen(3000);
console.log("Server up and running on port 3000");


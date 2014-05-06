//include the express module
var express = require('express');

//create the app object from express
var app = express();

//create a route that maps requests to the '/' to a route handler (function) that sends a response back to the user
app.get('/', function(req, res) {
	res.header('Content-type', 'text/plain'); 
	//modifying app.js requires a server restart
	//text/html
	//text/plain
	//text/css
	//application/json
	//*application/Different Internet Media types/MIME types
	res.send('<h1>Hello Boulder</h1>');
});

//create a route that maps requests to the '/food' route handler (function) that sends back a response that is a string
app.get('/food', function(req, res) {
	res.send('Watermelon');
});

//create a route that maps requests to 'city/SOMECITY' to a route handler that sends back the string 'Hello SOMECITY'
//:userCity is an Express pattern that is parsed and stored in req.params.userCity
//navigating to http://localhost:6192/city/SOMECITY
	//returns Hello SOMECITY in the CLIENT
//req (request) is an object that contains information about the HTTP request
//res (response) is an object that allosw you to send an HTTP response back to the user
//app.get creates a new route that will be listened for
//sets up a specific url to listen for and a specific function to call when that url is requested
app.get('/city/:userCity', function(req, res) {
	res.send('Hello ' + req.params.userCity);
});

app.get('/google', function(req, res) {
	res.redirect('http://google.com');
});
//res.redirect sends a 302

app.get('/lostlover', function(req, res){

});
//sends no data received
//Chrome Developer Tools/Network/Status Text shows (pending)
	//CLIENT shows Waiting for localhost...
	//CLIENT times out and sends a :( No data received

var server = app.listen(6192, function() {
	//generator was built to provide a random port number
	//to access the server the client sends a get request to the server via http://localhost:6192
	console.log('Express server listening on port ' + server.address().port);
});

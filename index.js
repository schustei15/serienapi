var express = require("express"),
	app = express(),
	port = process.env.PORT || 1337,
	bodyParser = require('body-parser'),
	functions = require("./app/controller/functions.js");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(error, req, res, next){
	if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
		functions.error422(req, res);
	}
});

var routes = require("./app/route/routes.js");
routes(app);
app.listen(port);

"use strict";

module.exports = function(app){
	var functions = require("../controller/functions.js");

	app.route("/api")
		.post(functions.postapi);

	app.route("/api/:loc")
		.get(functions.getapi);

	app.use(functions.error404);
};
"use strict";

module.exports = function(app){
	var functions = require("../controller/functions.js");

	app.route("/api")
		.post(functions.postapi);

	app.use(functions.error404);
};
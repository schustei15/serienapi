"use strict";

var functions = require("./functions.js");

exports.postapi = function(req, res){
	const fs = require('fs');
	var test = "bananarama";
	fs.appendFile("app/api/api.txt", test+"\n", function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	}); 

	res.send({url: req.originalUrl, type: "post gps", callStatus: "success"});
};

exports.getapi = function(req, res){
	const fs = require('fs');
	var test = "bananarama";
	fs.appendFile("app/api/api.txt", test+"\n", function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	}); 

	res.send({url: req.originalUrl, type: "get gps", callStatus: "success"});
};

exports.error404 =  function(req, res){
	res.status(404).send({url: req.originalUrl + ' not found'});
};

// note to self // this is done // shouldn't be touched //


// requiring express and express server 
var express = require("express");
var app = express(); 

// created my var port
const PORT = process.env.PORT || 3333;

// set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = require('path');
const fs = require('fs');

// routes // points the server to the route files
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);


// need get request 

// need post request 

// need delete request

// set up my port 
app.listen(PORT, function () {
    console.log("Please visit http://localhost: " + PORT +" enjoy your stay!");
});
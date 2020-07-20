// requiring express and express server 
const express = require('express');

const path = require('path');
const fs = require('fs');

// created my var port
const app = express(); 
const PORT = process.env.PORT || 3333;

// set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// routes // points the server to the route files
require("./routes/routes")(app);


app.listen(PORT, function () {
    console.log("Please visit http://localhost: " + PORT +" enjoy your stay!");
});
// Dependencies
// =============================================================
var express = require("express");
var path    = require("path");
var bodyParser = require('body-parser')

// Sets up the Express App
// =============================================================
var app = express();

// var PORT = 3000;
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//ROUTERS
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

//SERVER LISTENING FOR COMMANDS
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


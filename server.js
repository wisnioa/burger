var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require('method-override')
var routes = require('./controllers/burgers_controllers.js');
var path = require("path");

var burger = require("./models/burger.js");


var port = process.env.PORT || 3456;
var app = express();

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({
	extended: true
}));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");



app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);
// app.use("/api/burgers", routes);




app.listen(port, function () {
	console.log("listening on port", port);
});
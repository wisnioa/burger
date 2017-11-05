var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require('method-override')
var routes = require('./controllers/burgers_controller');
var mysql = require('mysql');

var burger = require ("./models/burger.js");


var port = process.env.PORT || 3306;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.get("/", function (req, res){
	burger.all(function(data){ //burger references the require burgers.js file
		var burgerObject = {
			burgers: data
		}
		console.log(burgerObject)
		res.render("index", burgerObject) // rendering the burgerObject to the index.handlebar file
	});
});

app.use("/api/burgers", routes);

app.listen(port, function() {
  console.log("listening on port", port);
});



var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require('method-override')
var routes = require('./controllers/burgers_controllers.js');
var path = require("path");

var burger = require ("./models/burger.js");


var port = process.env.PORT || 8080; 
var app = express();

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/api/burgers", routes);


app.get("/", function (req, res){
	burger.all(function(data){ //burger references the require burgers.js file
		var burgerObject = {
			burgers: data
		}
		console.log(burgerObject)
		res.render("index", burgerObject) // rendering the burgerObject to the index.handlebar file
	});
});



app.listen(port, function() {
  console.log("listening on port", port);
});

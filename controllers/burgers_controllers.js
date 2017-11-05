var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// router.post("/", function (req, res){


module.exports = function (app){
	app.get("/", function(req,res){
	burger.all(function(data){
		var allBurgers = {
		burgers: data,
		};
	})
	res.render("index", allBurgers);

})


}

// router.get('/', function (req, res) {
//   res.redirect('/index');
// });

// router.get('/index', function (req, res) {
//   burger.all(function(data) {
//     var burgerObject = { burgers: data };
//     //console.log(hbsObject);
//     res.render('index', burgerObject);
//   });
// });

// module.exports = router;

// app.post("/", function(req,res){
	
// })

// app.update("/", function(req,res){
	
// })

// module.exports = router;
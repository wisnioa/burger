var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");



// router.post('/', function (req, res) {
// 	console.log("about to create a new burger!")
// 	burger.create(
// 			["burger_name", "devoured"],
// 			[req.body.burger_name, req.body.devoured],
// 			function(result){
// 					res.json({id:result.insertId})
// 	});
// });
  
router.post("/update/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);
  
	burger.update(
		["devoured"],
	  [req.body.devoured],
	condition, function(result) {
	  if (result.changedRows == 0) {
		// If no rows were changed, then the ID must not exist, so 404
		return res.status(404).end();
	  } else {
		res.status(200).end();
	  }
	});
  });
  
 
  
  // Export routes for server.js to use.
  module.exports = router;
	
	
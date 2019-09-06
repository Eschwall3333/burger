var burger = require("./burger.js");

var connection = require("../config/connection.js");

// Entries from db
burger.selectAll(function (data) {
	console.log("burger.selectAll test...\n\n");

	console.log("__________Chow Menu__________\n");

	for (var i = 0; i < data.length; i++) {
		console.log("Burger ID = " + data[i].id);
		console.log("Burger Name = " + data[i].burger_name);
		console.log("Available = " + data[i].devoured);

		console.log("I Did Stuff");
	}
});

// Trying a single entry out
burger.insertOne(["burger_name", "devoured"], 
	         	 ["Late Night Juicy Burger", false], 
	    		 function (data) {
					console.log("\n\nburger.insertOne test...\n\n");

					console.log("Inserted new row with ID = " + data.insertId + "\n\n");
				 }
);

// Update single entry
burger.updateOne({devoured: true}, "id = 10", function (data) {
	console.log("\n\nburger.updateOne test...\n\n");

	console.log("Result: " + data.message);
});

connection.end();
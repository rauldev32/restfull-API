const mongoose = require("mongoose");

// Connection creation an creaate a new db
mongoose
	.connect("mongodb://127.0.0.1:27017/students-api", {})
	.then(() => console.log("Connection is successful"))
	.catch((e) => {
		console.log("No Connection", e);
	});

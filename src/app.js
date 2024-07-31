const express = require("express");
require("./db/conn");
const router = require("./routes/routes");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
	console.log(`Connection is setup at ${port}`);
});

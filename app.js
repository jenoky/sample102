var express = require("express");
var app = express();
app.listen(3001, () => {
 console.log("Server running on port 3000");
});
app.get("/url", (req, res, next) => {
 res.json(["Successfully launched NM101 Project Code"]);
});
app.get("/ready", (req, res, next) => {
 res.sendStatus(200);
});
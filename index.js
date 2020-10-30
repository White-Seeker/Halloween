var express = require("express");
var app = express();
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.get("/games", function(req, res) {
    res.render("game.ejs");
});

app.get("/meal", function(req, res) {
    res.render("meal.ejs");
});

app.get("/halloween", function(req, res) {
    res.render("halloween.ejs");
});



app.listen(3000, process.env.IP, function() {
    console.log("Server has been started");
});
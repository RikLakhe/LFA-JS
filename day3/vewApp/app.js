var express = require('express'),
    path = require('path');
var app = express();


app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "assets")));

app.get("/", function(req, res) {
    res.render("pages/index");
})

app.get("/about", function(req, res) {
    res.render("pages/about");
})

app.get("/contact", function(req, res) {
    res.render("pages/contact");
})

app.listen(3000, function() {
    console.log("server is running");
})
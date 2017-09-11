const express = require('express'),
    path = require('path');

var app = express();

const viewPath = path.join(__dirname, "views");

let port = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(viewPath, "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(viewPath, "about.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(viewPath, "contact.html"));
});

app.listen(port, () => {
    console.log("server is running at port = " + port);
});
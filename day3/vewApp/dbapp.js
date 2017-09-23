var db = require("./services/db.js");

db.connect();

db.query("select * from courses");
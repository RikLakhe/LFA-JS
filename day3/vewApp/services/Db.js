var mysql = require('mysql');

function Db() {
    return {
        db: null,
        connect: function() {
            this.db = mysql.createConnection({
                host: "localhost",
                database: "nodetest",
                user: "root"
            });
        },
        query: function(sql) {
            this.db.query(sql, function(err, results, fields) {
                console.log(results);
            })

        }
    }
}

module.exports = new Db();
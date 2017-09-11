const fs = require('fs'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser');

let viewPath = path.join(__dirname, "views");
let port = 3000;

let urls = ["/", "/about", "/contact"];
let pages = ["index.html", "about.html", "contact.html"];

var servlet = new Servlet();

http.createServer((req, res) => {
    switch (req.method.toLowerCase()) {
        case "get":
            servlet.doGet(res, req);
            break;
        case "post":
            servlet.doPost(res, req);
            break;
    }
}).listen(port, () => {
    console.log("Server is running at port = " + port);
});


// servlet is object so need to call new Servlet
function Servlet() {
    return {
        doGet: (res, req) => {
            var index = urls.indexOf(req.url);
            if (index === -1) {
                res.write("<h1>Page not found</h1>");
                res.end();
            } else {
                let pagePath = path.join(viewPath, pages[index]);
                view(pagePath, res);
            }

        },
        doPost: (res, req) => {
            if (req.url == "/contact") {
                res.write("<h1>Thank you or contacting us</h1>");
                res.end();
            }
        },
    }

}

function view(pagePath, res) {
    fs.readFile(pagePath, (err, data) => {
        if (err) {
            console.log(err);

        }
        res.write(data.toString());
        res.end();
    })
}
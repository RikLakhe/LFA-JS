var fs = require('fs'),
    path = require('path');

var viewPath = path.join(__dirname, "views");
let fileName = "index.html";
let filePath = viewPath + "/" + fileName;
//console.log(fs.existsSync(viewPath));
console.log(filePath);

if (fs.existsSync(viewPath)) {
    if (fs.existsSync(filePath)) {
        readFiles(fileName);

        deleteFile(fileName);
    } else {
        makeFile();
    }
} else {
    fs.mkdirSync(viewPath);
    makeFile();
}

function makeFile() {
    fs.writeFile(filePath, '<h1>hello</h1>', (err) => {
        if (err) {
            console.log(err);
        }
    })
}

function readFiles(fileName) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data.toString());
    })
}

function deleteFile(fileName) {
    fs.unlinkSync(filePath);

    console.log('file deleted');
}
var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res) {
    let data = { "message": "Hello json" };

    if (process.env.MESSAGE_STYLE) {
        data = { "message": "HELLO JSON" };
    }

    res.json(data);
});

console.log("Hello World");


































 module.exports = app;

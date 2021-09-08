var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

console.log("Hello World");


































 module.exports = app;

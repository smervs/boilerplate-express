var express = require('express');
var app = express();

app.use('/public', express.static('public'));
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res) {
    let data = { "message": "Hello json" };

    if (process.env.MESSAGE_STYLE === 'uppercase') {
        data = { "message": "HELLO JSON" };
    }

    res.json(data);
});

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({ time: req.time });
});

console.log("Hello World");


































 module.exports = app;

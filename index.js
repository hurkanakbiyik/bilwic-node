var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
require('./server/connectors/mongo/mongo-connector');

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.all('*',function(req,res,next)
{
    if (!req.get('Origin')) return next();

    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Methods','GET,POST');
    res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');

    if ('OPTIONS' == req.method) return res.send(200);

    next();
});

http.listen(3000, function () {
  console.log("http://localhost:3000 --> Dene bakalım!");
});

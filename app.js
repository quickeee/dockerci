// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';

var express = require('express'),
    app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
//     res.render('home', {
//   });
res.sendFile("index.html", { root: __dirname });

});

app.listen(8080);
module.exports.getApp = app;
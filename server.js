var express = require('express');
var app = express();

var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = process.env.MONGOLAB_URI;

//require("babel-core").transform("code", options);

MongoClient.connect(url, function(err, db){
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
      }
      else {
        console.log('Connection established to', url);
      }
      
    var collection = db.collection('myApp');
    
    // app.set('view engine', 'jsx');
    // app.set('views', __dirname + '/views');
    // app.engine('jsx', require('express-react-views').createEngine({transformViews: false}));
    
    app.set('view engine', 'pug')
    app.set('views', __dirname + '/views');
    
    app.get('/', function (req, res) {
      res.render('index', { title: 'Hey', message: 'Hello there!' })
    })
    
    app.listen(process.env.PORT || 8080, function() {
    console.log('Example app listening on port 8080!');
  });
})
const express = require('express');
const router = require('express').Router();
const app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");

  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

db.close();
const path = require('path');

const ejs = require('ejs');

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs')

app.get('/',function (req, res) {
res.render('pages/index')
});

router.use(express.urlencoded({ extended: true}));

app.use(express.static('public'))

app.get('/sendFunds', function(req, res) {
    res.render('pages/sendFunds')
});

app.get('/Funds', function(req, res) {
    res.render('pages/Funds')
});

var server = app.listen(5000, function () {
  var PORT = 5000
  console.log('User Conncted')
})

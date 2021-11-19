const express = require('express');
const router = require('express').Router();
const app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('Bank.db');


db.get("SELECT * FROM bank", function(err, row) {
  if (err) console.log(err);
    console.log(row);
});
db.close();


const path = require('path');

const ejs = require('ejs');

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs')

router.use(express.urlencoded({ extended: true}));

app.use(express.static('public'))

app.get('/teacher',function (req, res) {
res.render('pages/teacher')
});

app.get('/',function (req, res) {
res.render('pages/or')
});

app.get('/teacherlogin', function(req, res) {
    res.render('pages/teacherlogin')
});

app.get('/students', function(req, res) {
    res.render('pages/students')
});

app.get('/sendFunds', function(req, res) {
    res.render('pages/sendfunds')
});

app.get('/Funds', function(req, res) {
    res.render('pages/funds')
});

var server = app.listen(5000, function () {
  var PORT = 5000
  console.log('User Conncted')
})

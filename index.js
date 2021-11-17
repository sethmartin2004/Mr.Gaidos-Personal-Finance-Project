var express = require('express');
const app = express();
const path = require('path');
var router = require('express').Router();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

router.use(express.urlencoded({ extended: true}));

app.use(express.static('public'))

app.get('/sendFunds', function(req, res) {
    res.sendFile('views/getComments.html', {root: __dirname })
});

app.get('/Funds', function(req, res) {
    res.sendFile('views/Comments.html', {root: __dirname })
});

var server = app.listen(5000, function () {
  var PORT = 5000
  console.log('User Conncted')
})

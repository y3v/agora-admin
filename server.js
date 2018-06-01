var http = require('http')
var Twitter = require('twitter-node-client').Twitter;
var mysql = require('mysql');

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//CONNECTION TO PROJECT DB
var con = mysql.createConnection(process.env.JAWSDB_URL);
con.connect(function(err) {
  if (err) throw err;
  console.log('Connected to db!!');
})

express().use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

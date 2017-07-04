
var express = require('express');
var router = express.Router();
var request = require('request');
// var jquery = require('jquery');
var $ = require("jquery");
/* GET home page. */
router.get('/', function(req, res, next) {//home
  res.render('index', { 
  						
  						title: 'Home',
  						mainFrameSearch: "home" 
  					});
});

router.get('/search', function(req, res, next) {
  res.render('search.ejs', { 
  						
  						title: 'search',
  						mainFrameSearch: "Search" 
  					});
});
router.get('/reviews', function(req, res, next) {
  res.render('index', { 
  						
  						title: 'reviews',
  						mainFrameSearch: "Reviews"
  					});
});
router.get('/events', function(req, res, next) {
  res.render('index', { 
  						
  						title: 'events',
  						mainFrameSearch: "Events"
  					});
});
router.get('/specials', function(req, res, next) {
  res.render('index', { 
  						
  						title: 'specials',
  						mainFrameSearch: "Specials"
  					});
});





module.exports = router;

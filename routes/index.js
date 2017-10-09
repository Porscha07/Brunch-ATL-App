
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
router.get('/about', function(req, res, next) {
  res.render('about.ejs', { 
              
              title: 'About',
              mainFrameSearch: "about" 
            });
});

router.get('/search', function(req, res, next) {
  res.render('search.ejs', { 
  						
  						title: 'Search',
  						mainFrameSearch: "search" 
  					});
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery.ejs', { 
  						
  						title: 'Gallery',
  						mainFrameSearch: "gallery"
  					});
});
router.get('/blog', function(req, res, next) {
  res.render('blog.ejs', { 
  						
  						title: 'Blog',
  						mainFrameSearch: "blog"
  					});
});
router.get('/contact', function(req, res, next) {
  res.render('contact.ejs', { 
  						
  						title: 'Contact',
  						mainFrameSearch: "contact"
  					});
});





module.exports = router;

const worldHandler = require("../handler/handler");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Leg Med Express' });
});

/* GET home page. */
router.get('/country', function(req, res, next) {
    worldHandler.retrieveCountry(req, res, next);  // get data from
});

/* GET home page. */
router.get('/city', function(req, res, next) {
  res.render('city', { title: 'My Cities site' });
});

/* GET home page. */
router.get('/language', function(req, res, next) {
  res.render('language', { title: 'My Language site' });
});
module.exports = router;

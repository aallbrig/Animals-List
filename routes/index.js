var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Animal\s List',
                        page: 'index' });
});

module.exports = router; 

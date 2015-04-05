var express = require('express');
var router = express.Router();

/* GET pages on non reserved routes. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Animal\s List',
                        page: 'index' });
});

router.get('/conversations', function(req, res, next) {
  res.render('conversations', { title: 'Animal\s List',
                                page: 'conversations' });
});


module.exports = router; 

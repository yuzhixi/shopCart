var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Express' });
  // res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  // res.render('users', { title: 'Express' });
  res.send('user/test');
});

module.exports = router;

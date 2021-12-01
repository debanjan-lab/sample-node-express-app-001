var express = require('express');
var router = express.Router();

/* GET users listing. 110 */
router.get('/', function (req, res, next) {
  res.render('users', { title: 'Express title for users' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. 110 */
router.get('/', function (req, res, next) {
  res.status(200).json({ user: 'debanjan' })
});

module.exports = router;



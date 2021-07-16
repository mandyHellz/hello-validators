const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Express Validator' });
});

/* POST */
router.post('/', function(req,res,next){
  const {body} = req;

  res.render('index', {title: 'Hello Express Validator', body});
});

module.exports = router;

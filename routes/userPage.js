var express = require('express');
var router = express.Router();

var strugoController = require('../controllers/strugo-controller');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));




router.get('/userPage', strugoController.userPage);



module.exports = router;
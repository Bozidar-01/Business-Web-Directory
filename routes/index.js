var express = require('express');
var router = express.Router();

var strugoController = require('../controllers/strugo-controller');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', async function (req, res, next) {

  res.redirect('/HomePage');
});



router.get('/userPage', strugoController.userPage);

router.get('/userPage/add-business', strugoController.newBusiness);
router.post('/userPage', strugoController.storeBusiness);

router.get('/userPage/businesses', strugoController.showBusinesses);
router.get('/userPage/businesses/:id', strugoController.showBusinessByCategories);
router.get('/userPage/businesses/search/:id', strugoController.showBusinessInformation);

router.post('/userPage/businesses/search', strugoController.searchBusinesses);

module.exports = router;

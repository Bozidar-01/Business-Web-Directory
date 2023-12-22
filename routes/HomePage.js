var express = require('express');
var router = express.Router();

var strugoController = require('../controllers/strugo-controller');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', strugoController.index);
router.get('/userPage', strugoController.userPage);

router.get('/account', strugoController.account);
router.post('/userPage', strugoController.getAcc);
router.post('/account', strugoController.registerUser);

router.get('/business', strugoController.showBusiness);
router.get('/business/:id', strugoController.showBusinessByCategory);
router.get('/business/search/:id', strugoController.showBusinessInfo);

router.post('/business/search', strugoController.searchBusiness);



module.exports = router;
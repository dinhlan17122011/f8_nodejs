const express = require('express');
const router = express.Router();

const newsController = require('../app/controller/SiteCotroller');

router.use('/tim-kiem', newsController.timkiem);
router.use('/', newsController.index);

module.exports = router;

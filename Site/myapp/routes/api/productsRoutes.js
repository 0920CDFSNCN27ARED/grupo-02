const express = require('express');
const router = express.Router();
const productController = require('../../controllers/api/productsController');

router.get('/latest', productController.products);
router.get('/offers', productController.offers);


module.exports = router;
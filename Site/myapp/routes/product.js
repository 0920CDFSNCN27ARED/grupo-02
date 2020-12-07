const express = require('express');
const router = express.Router();
const productDetailController = require('../controllers/productDetailController');
const productController = require('../controllers/productController');

router.get('/detail', productDetailController.getProduct);

router.get('/', productController.getProduct);

module.exports = router;
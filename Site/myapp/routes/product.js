const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProduct);
router.get('/:id/detail', productController.getProductDetail);
/*
router.get('/:id/edit', productController.editProductForm);
router.put('/:id/edit', productDetailController.editProduct);

router.get('/newProduct', productDetailController.newProductForm);
router.post('/newProduct', productDetailController.newProduct);
*/
module.exports = router;
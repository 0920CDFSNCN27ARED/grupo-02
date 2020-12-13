const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProduct);
router.get('/:id/detail', productController.getProductDetail);

router.get('/newProduct', productController.newProductForm);
router.post('/newProduct', productController.newProductPost);

router.get('/:id/edit', productController.editProductForm);
router.put('/:id/edit', productController.updateProduct);

module.exports = router;
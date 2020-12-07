const express = require('express');
const router = express.Router();
const productDetailController = require('../controllers/productDetailController');
const productController = require('../controllers/productController');

router.get('/', productController.getProduct);
router.get('/:id/detail', productDetailController.getProduct);

router.get('/:id/edit', productDetailController.editProductForm);
/*router.put('/:id/edit', productDetailController.editProduct);

router.get('/newProduct', productDetailController.newProductForm);
router.post('/newProduct', productDetailController.newProduct);
*/
module.exports = router;
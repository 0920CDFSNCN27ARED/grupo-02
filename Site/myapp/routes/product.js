const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/products-images');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})
 
var upload = multer({ storage: storage });

router.get('/', productController.getProduct);
router.get('/:id/detail', productController.getProductDetail);

router.get('/newProduct', productController.newProductForm);
router.post('/newProduct', upload.any(), productController.newProductPost);

router.get('/:id/edit', productController.editProductForm);
router.put('/:id/edit', upload.any(), productController.updateProduct);

module.exports = router;
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const path = require('path');
const AdminValidation = require('../middlewares/isAdmin')
const app = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/products-images');
  },
  filename: function (req, file, cb) {
    cb(null, (file.originalname).split(".")[0] + path.extname(file.originalname));
  }
})
app.use(AdminValidation.isAdmin);
app.use(AdminValidation.adminViews);
var upload = multer({ storage: storage });

router.get('/prueba', productController.prueba); /*prueba conexión DB*/

router.get('/', productController.getProduct);
router.get('/:id/detail', AdminValidation.isAdmin , productController.getProductDetail);

router.get('/newProduct', AdminValidation.adminViews, productController.newProductForm);
router.post('/newProduct', upload.any(), productController.newProductPost);

router.get('/:id/edit', AdminValidation.adminViews, productController.editProductForm);
router.put('/:id/edit', upload.any(), productController.updateProduct);

router.delete('/:id/delete', AdminValidation.adminViews, productController.deleteProduct);

module.exports = router;
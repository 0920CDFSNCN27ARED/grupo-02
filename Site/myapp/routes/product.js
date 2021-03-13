const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const path = require('path');
const AdminValidation = require('../middlewares/isAdmin');
const {check, validationResult, body} = require('express-validator');
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
router.post('/newProduct', upload.any(), [
  check('name').isLength( {min: 4}).withMessage('No se cargó nombre del producto'),
  check('price').isFloat( {min:0} ).withMessage('No se cargó precio del producto'),
  check('category').notEmpty().withMessage('No se cargó categoría del producto'),
  check('image').custom((value, req) =>{
    if (! req.file) throw new Error("No se cargó una imagen");
    return true
  }),
  check('description').isLength( {min: 5} ).withMessage('No se cargó descripción del producto')
], productController.newProductPost);

router.get('/:id/edit', AdminValidation.adminViews, productController.editProductForm);
router.put('/:id/edit', upload.any(),[
  check('name').isLength( {min: 4}).withMessage('No se cargó nombre del producto'),
  check('price').isFloat( {min:0} ).withMessage('No se cargó precio del producto'),
  check('category').notEmpty().withMessage('No se cargó categoría del producto'),
  check('description').isLength( {min: 5} ).withMessage('No se cargó descripción del producto'),
], productController.updateProduct);

router.delete('/:id/delete', AdminValidation.adminViews, productController.deleteProduct);

module.exports = router;
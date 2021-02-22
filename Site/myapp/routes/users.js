const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
const isLogged = require('../middlewares/userLogged');
const app = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/users');
  },
  filename: function (req, file, cb) {
    cb(null, (file.originalname).split(".")[0] + path.extname(file.originalname));
  }
})

var upload = multer({ storage: storage });
app.use(isLogged);

router.get('/login', isLogged, userController.getLogin);
router.post('/login', [
  check('email').isEmail().withMessage('Email inválido'),
  check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
], userController.processLogin);

router.get('/register', isLogged, userController.getRegister);
router.post('/register',upload.any(), userController.postRegister);
router.get('/logout', userController.logout);

module.exports = router;
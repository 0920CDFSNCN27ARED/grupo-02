const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');
const {check, validationResult, body} = require('express-validator');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/users');
  },
  filename: function (req, file, cb) {
    cb(null, (file.originalname).split(".")[0] + path.extname(file.originalname));
  }
})

var upload = multer({ storage: storage });

router.get('/login', userController.getLogin);
router.post('/login', [
  check('email').isEmail().withMessage('Email inválido'),
  check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
], userController.processLogin);

router.get('/register', userController.getRegister);
router.post('/register',upload.any(), userController.postRegister);

module.exports = router;
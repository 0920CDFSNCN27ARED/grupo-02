const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
const LoggedValidation = require('../middlewares/LoggedValidation');
const db = require('../database/models');
const app = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/users');
  },
  filename: function (req, file, cb) {
    cb(null, (file.originalname).split('.')[0] + path.extname(file.originalname));
  }
})

var upload = multer({ storage: storage });
app.use(LoggedValidation.isLogged);

router.get('/login', LoggedValidation.isLogged, userController.getLogin);
router.post('/login', [
  check('email').isEmail().withMessage('Email inválido'),
  check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
], userController.processLogin);

router.get('/register', LoggedValidation.isLogged, userController.getRegister);
router.post('/register',upload.any(), [
  check('name').isLength( {min: 1} ).withMessage('Debes ingresar un nombre. El campo solo puede contener letras.'),
  check('last_name').isLength( {min: 1} ).withMessage('Debes ingresar un nombre. El campo solo puede contener letras.'),
  check('email').isEmail().withMessage('Debes ingresa un email válido')
  .custom(async (value) => {
    const mail = await db.Users.findOne({ where: { email: value } });
    if (mail !== null) {
      throw new Error('El email ingresado se encuentra registrado');
    }
    return true;
  })
  .isLength()
  .withMessage('El campo email debe estar completo'),
  check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
  check('image').custom((value, {req}) =>{
    if (req.files.length == 0) {
      throw new Error('No se cargó una imagen')
    }else{
      const extension = (req.files[0].mimetype).toLowerCase().split('/')[1];
      switch (extension) {
          case 'jpg':
              return 'jpg';
          case 'jpeg':
              return 'jpeg';
          case  'png':
              return 'png';
          default:
              throw new Error('La imagen debe ser .jpg .jpeg o .png');
      }
    }
  }),
], userController.postRegister);
router.get('/logout', userController.logout);
router.get('/profile', LoggedValidation.notLogged, userController.profile);
router.get('/profile/edit/:id', LoggedValidation.notLogged, userController.profileEdit);
router.put('/profile/edit/:id',upload.any(), LoggedValidation.notLogged, userController.updateUser);

module.exports = router;
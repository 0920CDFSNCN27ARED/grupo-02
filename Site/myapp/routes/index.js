const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const authenticate = require('../middlewares/authenticate');

const app = express();
app.use(authenticate);

router.get('/', authenticate, indexController.getIndex);

module.exports = router;
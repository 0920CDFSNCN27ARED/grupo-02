const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/usersController');

router.get('/', usersController.user);
router.get('/count', usersController.count);
router.get('/:id', usersController.detail);

module.exports = router;
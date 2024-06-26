const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.post('/login', userController.loginUser);
// Add more routes for user-related operations

module.exports = router;

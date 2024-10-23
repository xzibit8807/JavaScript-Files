const express = require('express');
const router = express.Router();
const { authController } = require('../controllers/authController');
const { auth } = require('../utils/auth');

router.get('/profile', auth(),authController.getProfileInfo);
router.put('/profile', auth(),authController.editProfileInfo);

module.exports = router

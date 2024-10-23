const express = require('express');
const router = express.Router();
const { auth } = require('../lib/jwt');
const { postController } = require('../controllers');

// middleware that is specific to this router

router.put('/:postId', auth(), postController.like);

module.exports = router

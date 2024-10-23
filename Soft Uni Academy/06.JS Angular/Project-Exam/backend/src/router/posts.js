const express = require('express');
const router = express.Router();
const { jwt } = require('../lib');
const { postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', postController.getLatestsPosts);

module.exports = router
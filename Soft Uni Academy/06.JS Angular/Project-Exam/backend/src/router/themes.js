const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { themeController, postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', themeController.getGames);
router.post('/', auth(), themeController.createGame);

router.get('/:gameId', themeController.getTheme);
router.post('/:gameId', auth(), postController.createPost);
router.put('/:gameId', auth(), themeController.subscribe);
router.put('/:gameId/posts/:postId', auth(), postController.editPost);
router.delete('/:gameId/posts/:postId', auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router
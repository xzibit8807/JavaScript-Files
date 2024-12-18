const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { gameController, postController } = require('../controllers');

// These routes are already mounted under `/games`
router.get('/', gameController.getGames);
router.post('/', gameController.createGame);
router.get('/:gameId', gameController.getTheme);
router.post('/:gameId', auth, postController.createPost);
router.put('/:gameId', auth, gameController.subscribe);
router.put('/:gameId/posts/:postId', auth, postController.editPost);
router.delete('/:gameId/posts/:postId', auth, postController.deletePost);

module.exports = router;

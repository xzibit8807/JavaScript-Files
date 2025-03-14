const router = require('express').Router();
const users = require('./users');
const games = require('./games');
const posts = require('./posts');
const likes = require('./likes');
const test = require('./test');
const comments = require('./comments')
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/games', games);
router.use('/posts', posts);
router.use('/likes', likes);
router.use('/comments', comments);
router.use('/test', test);

module.exports = router;

const { gameModel } = require('../models');
const { newPost } = require('./postController')

function getGames(req, res, next) {
    gameModel.find()
        .populate('userId')
        .then(themes => res.json(themes))
        .catch(next);
}

function getTheme(req, res, next) {
    const { gameId } = req.params;

    gameModel.findById(gameId)
        .populate({
            path : 'posts',
            populate : {
              path : 'userId'
            }
          })
        .then(theme => res.json(theme))
        .catch(next);
}

function createGame(req, res, next) {
    const { themeName, postText } = req.body;
    const { _id: userId } = req.user;

    gameModel.create({ themeName, userId, subscribers: [userId] })
        .then(theme => {
            newPost(postText, userId, theme._id)
                .then(([_, updatedTheme]) => res.status(200).json(updatedTheme))
        })
        .catch(next);
}

function subscribe(req, res, next) {
    const gameId = req.params.gameId;
    const { _id: userId } = req.user;
    gameModel.findByIdAndUpdate({ _id: gameId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedTheme => {
            res.status(200).json(updatedTheme)
        })
        .catch(next);
}

module.exports = {
    getGames,
    createGame,
    getTheme,
    subscribe,
}

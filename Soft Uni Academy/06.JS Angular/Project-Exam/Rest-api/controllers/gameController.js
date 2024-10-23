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

const createGame = (req, res, next) => {
    const { 
        gameName, 
        gameImage, 
        gameType, 
        gameDescription, 
        likedList, 
        userId, 
        comments, 
        addedDate 
    } = req.body;

    // Create a new game entry in the database
    gameModel.create({
        gameName,
        gameImage,
        gameType,
        gameDescription,
        likedList,
        userId,
        comments,
        addedDate,
        subscribers: [userId] 
    })
    .then(game => {
        res.status(200).json(game);
    })
    .catch(next);
};

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

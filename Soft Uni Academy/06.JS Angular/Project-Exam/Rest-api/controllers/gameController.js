const gameModel = require('../models/gameModel');

// const { gameModel } = require('../models/gameModel');
// const { newPost } = require('./postController')

function getGames(req, res, next) {
    gameModel.find()
        .populate('userId')
        .then(games => res.json(games))
        .catch(next);
}

function getTheme(req, res, next) {
    const { gameId } = req.params;

    gameModel.findById(gameId)
        .populate({
            path: 'posts',
            populate: {
                path: 'userId'
            }
        })
        .then(theme => res.json(theme))
        .catch(next);
}

const createGame = (req, res, next) => {
    const { gameName, gameImage, gameType, gameDescription, likedList, userId, addedDate } = req.body;
    // console.log("Request Body:",
    //     gameName,
    //     gameImage,
    //     gameType,
    //     gameDescription,
    //     likedList,
    //     userId,
    //     addedDate);
        
    const game = {
        gameName,
        gameImage,
        gameType,
        gameDescription,
        likedList,
        // userId,
        addedDate
    }

    gameModel.create({
        gameName,
        gameImage,
        gameType,
        gameDescription,
        likedList,
        // userId,
        addedDate,
    })

        .then(game => {
            console.log("Game Created Successfully:", game);
            res.status(201).json(game);
        })
        .catch(err => {
            console.error("Error Creating Game:", err);
            next(err);
        });
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

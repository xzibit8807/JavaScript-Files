const mongoose = require(`mongoose`);

exports.getErrorMessage = (err) => {
    let message = ``;
    if (err instanceof mongoose.MongooseError) {
        message = Object.values(err.message).at(0).message; //if it doesn't work in Judge,then change .at(0) with [0]
    } else if (err instanceof Error) {
        message = err.message;
    }
    return message;
}
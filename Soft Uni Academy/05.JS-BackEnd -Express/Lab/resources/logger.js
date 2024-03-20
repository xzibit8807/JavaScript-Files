const messageBroker = require(`./messageBroker`)

messageBroker.subscribe(`request`, log);


function log(message){
    console.log(message);
}

module.exports = log;
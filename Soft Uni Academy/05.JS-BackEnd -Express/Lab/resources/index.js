const events = require(`events`);

const eventEmitter = new events.eventEmitter();

eventEmitter.on(`request`, (eventData) =>{
    console.log(`on request -` + eventEmitter);
})

eventEmitter.emit(`request`, `Request emitted`);


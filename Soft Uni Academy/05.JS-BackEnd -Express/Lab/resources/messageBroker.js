const events = {};

function subscribe(eventType, eventHandler){
    if(!events[eventType]){
        events[eventType] = []
    }

    events[eventType].push(eventHandler);
}

function publish(eventType, data){
    events[eventType]?.forEach(element => {
        element(data)
    });
}

module.exports = {
    subscribe,
    publish
}
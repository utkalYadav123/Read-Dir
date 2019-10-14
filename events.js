// importing the events
const events = require("events");

// Creating an event emitter object
var eventEmitter = new events.EventEmitter();

// importing the events 
// creating a event emitt Object
// binding with events

// eventEmitter.on("eventName", eventHandler);

// // you can fire the event programmatically as
// eventEmitter.emit("eventName");

var connectHandler = function connected(){
    console.log("connection successfull");

    // fire the date received in the event
    eventEmitter.emit("data_received");
    // console.log("file received")
}

var connectHandler1 = function connected(){
    console.log("connection successfull");

    // fire the date received in the event
    eventEmitter.emit("data_received");
    // console.log("file received")
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('connection', connectHandler1);

eventEmitter.on("data_received", function(){
    console.log("data reveived successfully");
})

eventEmitter.emit("connection");

// if a new listener is fired, newListerner event will emit
// if you have removed a listener, removeListener event will emit

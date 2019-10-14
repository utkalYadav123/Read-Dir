// // importing the events
// const events = require("events");

// // Creating an event emitter object
// var eventEmitter = new events.EventEmitter();

// // listener 1
// var listener1 = function listener1(){
//     console.log("listener 1 started")
// }

// // listener 2
// var listener2 = function listener2(){
//     console.log("listener 2 started")
// }

// // Binding the connection event with the listener1 function
// eventEmitter.addListener("connection", listener1);

// eventEmitter.on("connection", listener2);

// var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
// console.log("the listenrs array", eventListeners);

// // firing the particular connection event
// eventEmitter.emit("connection");

// eventEmitter.removeListener("connection", listener1)
// console.log("listen 1 is not operational now, stopped listen 1")

// // firing the event
// eventEmitter.emit("connection");

// eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
// console.log("the listenrs array", eventListeners);

// eventEmitter.removeListener("connection", listener2)
// console.log("listen 2 is not operational now, stopped listen 2")

// // firing the event
// eventEmitter.emit("connection");

// eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
// console.log("the listenrs array", eventListeners);

// eventEmitter.removeAllListeners("connection");

// eventEmitter.emit("connection");
// console.log(eventEmitter)

// console.log("fincal execution");


// goToMarket()
// .then(()=>{
//     return buyItems().catch(err=>{console.error(err)
//     throw err;
//     })
// })
// .then(()=>{
//     return bookACarToHome().catch(err=> console.err throw error) 
// })


// async keyword
let car = async function car(){
    return 1;
}

// it alwaws wrapped the results in resolved state.
console.log(car().then())


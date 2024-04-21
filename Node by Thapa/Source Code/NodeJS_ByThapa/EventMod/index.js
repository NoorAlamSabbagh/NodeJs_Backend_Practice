//<=========================Lec 20 Event Module in NodeJs ============================>

//Events Module
//Node.js has a built-in module, called "Events"
//where you can create-, fire-, and listen for- your oen events

//Example 1- Registering for the event to be fired only one time using once.
//Example 2- create an event emitter instance and register a couple of callbacks.
//Example 1- Registering for the event with callback parameters.

//we can do this way too
// const EventEmitter = require("events");
// const event = require("events");

// const EventEmitter = new event.EventEmitter();

//
//we can also do this way too to create events

//1)
// const EventEmitter = require("events");
// const event = new EventEmitter();//create events
// event.on('sayMyName',()=>{
//     console.log("your name is vinod");
// })
// event.emit("sayMyName");

//the concept of quite simple: emitter objects emit named events that cause previously registered listeners to be called
//So, an emitter object has basically two main features

//Emitting name events.
//Registering and unregistering listener function


//
//2)
// const EventEmitter = require("events");
// const event = new EventEmitter();//create events

// event.on('sayMyName',()=>{
//     console.log("your name is vinod");
// })
// event.on('sayMyName',()=>{
//     console.log("your name is bahadur");
// })
// event.on('sayMyName',()=>{
//     console.log("your name is thapa");
// })
// event.emit("sayMyName");


//3)
// const EventEmitter = require("events");
// const event = new EventEmitter();//create events

// event.on('checkPage',(sc, msg)=>{
//     console.log(`status code is ${sc} and the page is ${msg}`);
// })

// event.emit("checkPage", 200, "ok");

//<============================  End of lec 20 Event Module in node js  ===========================>//
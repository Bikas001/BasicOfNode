var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function(){
    console.log('The file is opend');
})

//creating event in node js
var events = require('events')
var eventEmitter = new EventEmitter();

//create an event handler

var myEventHandler = function(){
    console.log('I hear a scream!');

}

//Assign the event handler to an event
eventEmitter.on('scream', myEventHandler);

//fire the 'scream' event:
eventEmitter.emit('scream');
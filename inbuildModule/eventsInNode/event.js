// Events in node is used to handle asynchronous operations and provide emiter as well as handle the emiting request.

// import the event module
const eventEmitter = require('events')

const myEmitter = new eventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Good morning ${name}`)
})

myEmitter.emit('greet', "Davids")

// using on emitter to sum two numbers
myEmitter.on('sum', (firstNumber, secondNumber) =>{
    console.log(`The sum of the two numbers ${firstNumber} and ${secondNumber} is: ${firstNumber + secondNumber}`)
})

myEmitter.emit('sum', 15, 28)
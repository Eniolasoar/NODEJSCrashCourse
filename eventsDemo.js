import {EventEmitter} from 'events';

const myEmitter=new EventEmitter();

function greetHandler(name){
    console.log('hello' + name);

}

function goodbyeHandler(name){
    console.log('Goodbye ' + name);
}

myEmitter.on('greet',greetHandler);
myEmitter.on('bye',goodbyeHandler);


myEmitter.emit('greet','John');
myEmitter.emit('goodbye','James');

myEmitter.on('error',(err) =>{console.log('An error occured')})

myEmitter.emit('error',new Error('Something went wrong'));
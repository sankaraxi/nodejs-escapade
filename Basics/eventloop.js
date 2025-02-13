const fs = require('fs');

const start = Date.now();

setImmediate(() => {
  console.log("Immediate Finished");
});

Promise.resolve('Promise 1 Finished').then(console.log)
fs.readFile('file.txt', 'utf-8', (data) =>{
    console.log("File data is : ", data);
});

setTimeout(() => {
    console.log("Timer 1 Finished");
    }, 100);

setTimeout(() => {
    console.log("Timer 2 Finished");
    },200);
process.nextTick(() => {
    console.log("Next Tick 1 Finished");
});

Promise.resolve('Promise 2 Finished').then(console.log)

process.nextTick(() => {
    console.log("Next Tick 2 Finished");
});

function startA(){
    console.log("Function A");
}
console.log(start);
startA();
console.log("Hello World");
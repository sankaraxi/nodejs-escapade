process.nextTick(() => {
    process.nextTick(() => {console.log("Next Tick 2 Finished");});
    console.log("Next Tick 1 Finished");
})

Promise.resolve('Promise 1 Finished').then(console.log);

setTimeout(() => {
    console.log("Timer 1 Finished");
    }, 100);

setTimeout(() => {
    console.log("Timer 2 Finished");
    },200);
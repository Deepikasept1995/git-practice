console.log("start");

Promise.resolve().then(() => {
  console.log("promise1");
});

setTimeout (() => {
  console.log("timeout1")
},0);
setTimeout (() => {
  console.log("timeout2")
},0);

Promise.resolve().then(() => {
  console.log("promise2");
});

console.log("end");
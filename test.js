let count = 5;

const timer = setInterval(function() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`Random number: ${randomNumber}`);
    count--;

    if (count === 0) {
        clearInterval(timer);
        console.log('Stopped after 5 prints');
    }
}, 1000);

console.log('Timer started!'); 
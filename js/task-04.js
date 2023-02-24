const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector("button[data-action = decrement]");
console.log(decrementBtn);
const counterValue = document.querySelector("span[id = value]");
console.log(counterValue);
const incrementBtn = document.querySelector("button[data-action = increment]");
console.log(incrementBtn);

decrementBtn.addEventListener('click', function() {
    counter.decrement();
    counterValue.textContent = counter.value;
});

incrementBtn.addEventListener('click', function() {
    counter.increment();
    counterValue.textContent = counter.value;
});
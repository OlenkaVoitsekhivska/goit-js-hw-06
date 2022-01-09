
let counterValue = 0;
const incrementBtn = document.querySelector('[data-action = "increment"] ');
const decrementBtn = document.querySelector('[data-action = "decrement"] ');
let valueSpanEl = document.querySelector("#value");

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueSpanEl.innerHTML = "";
console.log(valueSpanEl.innerHTML=counterValue);
});
decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueSpanEl.innerHTML = "";
console.log(valueSpanEl.innerHTML=counterValue);
});







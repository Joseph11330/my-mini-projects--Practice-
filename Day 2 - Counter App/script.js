let count = 0;
const valueSpan = document.getElementById("value");
const decrease = document.getElementById("decrease-btn");
const reset = document.getElementById("reset-btn");
const increase = document.getElementById("increase-btn");

decrease.addEventListener("click", () => {
    count--;
    valueSpan.textContent = count;
})

increase.addEventListener("click", () => {
    count++;
    valueSpan.textContent = count;
})

reset.addEventListener("click", () => {
    count = 0;
    valueSpan.textContent = count;
})

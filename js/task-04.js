let counterValue = 0;

const decrementButtonEl = document.querySelector('[data-action="decrement"]')

const incrementButtonEl = document.querySelector('[data-action="increment"]')

let valueEl = document.querySelector('#value');



decrementButtonEl.addEventListener('click', function () { counterValue -= 1;  valueEl.textContent = counterValue});

incrementButtonEl.addEventListener('click', function () { counterValue += 1;  valueEl.textContent = counterValue})

// function decrementFunction() {
//     counterValue -= 1;
//     console.log(counterValue)
//     valueEl.textContent = counterValue;
// }

// function incrementFunction() {
 
console.log(valueEl)


// }
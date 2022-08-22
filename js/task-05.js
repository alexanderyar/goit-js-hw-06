const nameInputEl = document.querySelector('#name-input');
// console.log(nameInputEl)

const nameOutputEl = document.querySelector('#name-output');
// console.log(nameOutputEl)

nameInputEl.addEventListener('input', onInput )

function onInput(event) {
    nameOutputEl.textContent = event.currentTarget.value
    console.log(event.currentTarget.value)
    // inputCheck (event.currentTarget.value)
    //     if (nameInputEl.value = "") {
    //      nameOutputEl.textContent = "Anonymous"
    // }
    if (nameInputEl.value.length === 0) {
        nameOutputEl.textContent = "Anonymous"
    

    }
}
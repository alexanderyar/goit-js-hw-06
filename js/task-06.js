const refs = {
    inputEl: document.querySelector('#validation-input'),

}
// console.dir(refs.inputEl.dataset.length)

refs.inputEl.addEventListener('blur', onBlur)

function onBlur(event) {
    if (event.currentTarget.value.length == refs.inputEl.dataset.length) {
        refs.inputEl.classList.add('valid')
        refs.inputEl.classList.remove('invalid')

    } else {
        refs.inputEl.classList.add('invalid')
        refs.inputEl.classList.remove('valid')
    }
    
    // console.log(event.currentTarget.value.length)
    // console.log(refs.inputEl.dataset.length)
    // console.log(event.currentTarget.value.length === refs.inputEl.dataset.length)
    // console.log(event.currentTarget.value.length == refs.inputEl.dataset.length)
}




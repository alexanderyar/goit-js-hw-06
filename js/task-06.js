const refs = {
    inputEl: document.querySelector('#validation-input'),

}
// console.dir(refs.inputEl.dataset.length)

refs.inputEl.addEventListener('blur', onBlur)

function onBlur(event) {
    if (event.currentTarget.value.length >= refs.inputEl.dataset.length) {
refs.inputEl.classList.remove('invalid')
        refs.inputEl.classList.add('valid') 
        return
    }
    refs.inputEl.classList.add('invalid')

}




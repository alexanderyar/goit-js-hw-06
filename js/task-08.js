const formEl = document.querySelector('.login-form')
// console.log(formEl)

formEl.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()
    // console.log(formEl.elements.email.value.length)
    //  console.log(formEl.elements.password.value.length)
    if (formEl.elements.email.value.length === 0 || formEl.elements.password.value.length === 0) 
    { alert('Hey you! All fields must be filled in :)') }
    
    
    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;
    const formData = {
        email,
        password
    }
    console.log(formData)
    formEl.reset()
        // {console.log('yeeeeeee')}
}

// console.log(formEl.elements.email.value)
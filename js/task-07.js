const refs = {
    rangeEl: document.querySelector('#font-size-control'),

    textEl: document.querySelector('#text')
}

console.log(refs.rangeEl.value)

console.log(refs.textEl)

// console.log(window.getComputedStyle(refs.textEl.fontSize))

refs.textEl.style.fontSize ='10px'




refs.rangeEl.addEventListener('input', transmitDatatoSpan);

function transmitDatatoSpan() {
    // console.log('хуяк');
    // console.log(`'${refs.rangeEl.value}px'`);
    refs.textEl.style.fontSize = (`${refs.rangeEl.value}px`)
    // console.log(refs.textEl.style.fontSize)
    
}
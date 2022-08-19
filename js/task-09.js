function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonEl: document.querySelector('.change-color'),
  spanEl: document.querySelector('.color'),
  bodyEl: document.body
}

// console.log(refs.buttonEl, refs.spanEl)

refs.buttonEl.addEventListener('click', onClick)

function onClick() {

  // console.log(getRandomHexColor())

  refs.bodyEl.style.backgroundColor = getRandomHexColor()
  refs.spanEl.textContent = refs.bodyEl.style.backgroundColor

 }


// console.log(colorValue)
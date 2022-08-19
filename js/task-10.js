function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {

  inputNumberEl: document.querySelector('input[type="number"]'),
  createButtonEl: document.querySelector('[data-create]'),
  destroyButtonEl: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes')
}
// console.log(refs.inputNumberEl)
// console.log(refs.createButtonEl)
// console.log(refs.destroyButtonEl)
// console.log(refs.boxesEl)
// const test = document.querySelector('.test')
// test.style.width = '800px';
// test.style.height = '111px'
// test.style.backgroundColor = getRandomHexColor()

// style="height:100px; width:100px; background:#000000"
// test.clientHeight = '200px'
// console.dir(test)

// refs.inputNumberEl.addEventListener('input', onInput)
function createBoxes(amount) { 
  
  console.log(amount);
  const divArray = [];
  
  for (let i = 0; i < amount; i += 1) {
    divArray[i] = document.createElement('div')
    divArray[i].style.width = `${30 + i*10 }px`
    // console.log(divArray[i].style.width = `${30 + i*10 }px`)

    divArray[i].style.height = `${30 + i*10 }px`
    divArray[i].style.backgroundColor = getRandomHexColor()

    console.log(divArray[i])
    // divArray[i].innerHTML = '<div>aaa</div>';
    // divArray[i].offsetWidth = 10;
    // divArray[i].offsetHeight = 10;
    // divArray[i].abc = 555 ;
    divArray.push(divArray[i])
    // box.style.backgroundColor = getRandomHexColor()
    // console.log(divArray[i])
  }
  console.log(divArray)
  refs.boxesEl.append(...divArray)
  console.log(refs.boxesEl)
  // const divArrayFinal = []
  // divArray.length = amount;
  // for (const box of divArray) {
    // box = document.createElement('div');
    // box.offsetWidth += 10;
    // box.offsetHeight += 10;
    // box.style.backgroundColor = getRandomHexColor()
  // }
}
refs.createButtonEl.addEventListener('click', () => {
  const divAmount = refs.inputNumberEl.value;
  createBoxes(divAmount);
})
 
function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
  refs.inputNumberEl.reset()

 }
refs.destroyButtonEl.addEventListener('click', destroyBoxes)


// function createSingleBoxElement(array) {
//     array.reduce((previousValue, element, index, array) => {
//       const box = document.createElement('div')
//       box.offsetWidth = previousValue + 10;
//       box.offsetHeight = previousValue + 10;
//       box.style.backgroundColor = getRandomHexColor()
//       console.log('rere')
//       return box
//       // div.Array.push(array[index])
// }, 30);
 
// }


// console.log(refs.inputNumberEl.value)

// function onInput(event) {
//   console.log(event.currentTarget.value)
//   return event.currentTarget.value
  
// }

// // const inputValue = onInput()
// console.log(inputValue)

// array.map((element, index, array) => {
  // Callback body
// });




// test(onInput)
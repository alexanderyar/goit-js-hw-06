const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// console.log(...ingredients)


const elements = ingredients.map(function (ingredient, index, array) {
  // console.dir(ingredient)
  
  ingredient = document.createElement('li');
  ingredient.textContent = array[index]
  // ingredient.textContent = ()
  ingredient.classList.add('item')


  console.log(ingredient)
  return ingredient
})

// console.log(elements);

const ingredientsListEl = document.querySelector('#ingredients')
// console.log(ingredientsListEl)

ingredientsListEl.append(...elements)




// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });
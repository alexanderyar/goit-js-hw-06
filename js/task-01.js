
const itemsPseudoArrayEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsPseudoArrayEl.length}`);
console.log("")

itemsPseudoArrayEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)
    console.log("")
});



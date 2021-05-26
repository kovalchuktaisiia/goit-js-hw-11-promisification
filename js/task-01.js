
// получаю доступ к <ul "categories">
const navEl = document.querySelector('ul');
//console.log(navEl);

const categElements = navEl.querySelectorAll('.item');
//console.log(CategElements);
console.log(`В списке ${categElements.length} категори`);

const categElement = document.querySelector('li.item');
//console.log(`Категория: ${categElement.firstElementChild.textContent}`);

const categElementList = categElement.lastElementChild;
//console.log(`Количество элементов: ${categElementList.children.length}`);

 categElements.forEach ((categElement) => 
 console.log(`Категория: ${categElement.firstElementChild.textContent}, 
Количество элементов: ${categElement.lastElementChild.children.length}`));
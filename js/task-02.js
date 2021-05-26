const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
// Напиши скрипт, который для каждого элемента массива 
// ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

const listElementContainer = document.querySelector('#ingredients');
console.log(listElementContainer);

// const elements =[];
// for (let i=0; i<ingredients.length; i+=1) {
//   const ingredient = ingredients[i];
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredients[i];
//   elements.push(liEl);
// }

// console.log(elements);
// listElementContainer.append(...elements);


const makeListElementContainer = ingredients => {
    return ingredients.map(ingredient => {
      const liEl = document.createElement('li');
      liEl.textContent = ingredient;
      return liEl;
    });
  };

const elements = makeListElementContainer(ingredients);
listElementContainer.append(...elements);

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




const listElementContainer = document.querySelector('ul');
console.log(listElementContainer);


// images.forEach(src => {
//     const li = document.createElement('li');
//     const image = document.createElement('img');

//     image.setAttribute('src', src);
//     image.setAttribute('alt', 'random image');

//     li.appendChild(image);
//     listElementContainer.appendChild(li);

// });

// *******  2 

// const elements =[];
// for (let i=0; i<images.length; i+=1) {
//   const image = images[i];

//   const imageEl = document.createElement('img');
//   const liEl = document.createElement('li');
  
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = 260;
//   liEl.append(imageEl);
//   elements.push(liEl);
// }

// console.log(elements);
// listElementContainer.append(...elements);



// ******* 3 

// const makeListElementContainer = images => {
//   return images.map ( image =>{
//     const imageEl = document.createElement('img');
//   const liEl = document.createElement('li');
  
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = 260;
//   liEl.append(imageEl);

//   return liEl;
//   })
// };
// const elements = makeListElementContainer (images);
// listElementContainer.append (...elements);


//******* 4


// const makeProductCard = ({ url, alt }) => {
//   const imageEl = document.createElement('img');
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 260;

//   const imageDesc = document.createElement('p');
//   imageDesc.textContent = `Картинка: ${alt}`

//   const liEl = document.createElement('li');
//   liEl.append(imageEl,imageDesc);

//   return liEl;
// };

// const elements = images.map(makeProductCard);

// console.log(elements);
// listElementContainer.append(...elements);


// ********* 1

// const listElementContainer = document.querySelector('ul');
// console.log(listElementContainer);

const makeProductCard = ({ url, alt }) => {
  return `
  <li>
    <img class = picture src='${url}' alt ='${alt}' />
  </li>
    `;
};
 
const makeProductList = images
  .map(makeProductCard)
  .join('');

listElementContainer.insertAdjacentHTML('beforeend', makeProductList);
console.log(makeProductList);

  
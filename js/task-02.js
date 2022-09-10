const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('ul');
const addIngredients = (item) => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = item;
  listItemRef.classList.add('item');

  return listItemRef;
};

const listOfIngredients = ingredients.map(addIngredients);

listRef.append(...listOfIngredients);
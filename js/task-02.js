const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



// ingredients.forEach(ingredient => {
//   const listEl = document.createElement("li");
//   listEl.classList.add("item");
//   listEl.textContent = ingredient;
//   const ingredientsList = document.querySelector("#ingredients");
//   ingredientsList.append(listEl);
//   console.log(listEl);
// });

const ingredientItemList = ingredients.map(ingredient => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = ingredient;
  return listEl;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...ingredientItemList);
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

ingredients.map(ingredient => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = ingredient;
  const ingredientsList = document.querySelector("#ingredients");
  ingredientsList.append(listEl);
  console.log(listEl);
});


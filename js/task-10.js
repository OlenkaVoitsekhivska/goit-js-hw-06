function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//Доступ к элементам
const boxContainer = document.querySelector("#boxes");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]')
const input = document.querySelector('input');


input.addEventListener('input', (event) => {
 console.log( event.currentTarget.value);
})

createBtn.addEventListener('click', () => {
  if (input.value >= 1) {
    createBoxes(input.value);
  }
})

destroyBtn.addEventListener('click', () => {
  boxContainer.innerHTML = "";
})

const createBoxes = (amount) => {
  let counter = 1;
  let initialWidth = 30;
  let initialHeight = 30;
  while (counter <= amount) {
    let box = document.createElement("div");
    boxContainer.append(box);
    box.style.width = `${initialWidth}px`;
    box.style.height = `${initialHeight}px`;
    box.style.margin = "15px";
    box.style.background = getRandomHexColor();
    
    counter += 1;
    initialWidth += 10;
    initialHeight += 10;
   
  }

}


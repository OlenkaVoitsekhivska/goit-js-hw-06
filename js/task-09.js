function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');


changeColorBtn.addEventListener('click', () => {
  let currentColor = getRandomHexColor()
  body.style.background = currentColor;
  spanColor.textContent = currentColor;
})

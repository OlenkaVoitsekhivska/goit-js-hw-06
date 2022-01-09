const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", (event) => {
    let size = event.currentTarget.value;
  
    console.log( span.style.fontSize = `${size}px`);
})
    


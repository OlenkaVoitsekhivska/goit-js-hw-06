const formInput = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');



// formInput.addEventListener("input", (event) => {

// if(event.currentTarget.value===""){
//   nameOutput.textContent= "Anonymous";
// }else nameOutput.textContent=event.currentTarget.value;
//   });


formInput.addEventListener("input", (event) => {
nameOutput.textContent =
event.currentTarget.value===""?
   "Anonymous":
 event.currentTarget.value;
    });
const formInput = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');

formInput.addEventListener("input", (event) => {
return event.value === ''?
    nameOutput.textContent = "Anonymous"
    :
  nameOutput.textContent = event.currentTarget.value;
});


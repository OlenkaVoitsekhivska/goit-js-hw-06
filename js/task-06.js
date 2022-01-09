const input = document.querySelector("#validation-input");

input.addEventListener('blur', (event) => {
    event.innerHTML = "";
    event.innerHTML = input.value;

    return event.innerHTML.length == input.dataset.length ?
        input.classList.add('valid') :
        input.classList.add('invalid');
}
)
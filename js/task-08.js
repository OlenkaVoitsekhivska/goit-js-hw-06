
const form = document.querySelector(".login-form");


form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const {
    elements: { email, password }
  } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert("Make sure to fill in all the fields");
    } else if (email.value !== '' && password.value !== '') {
    //     const formData = new FormData(event.currentTarget);
    //     formData.forEach((value, name) => {
    //         console.log(`name: ${name}`);
    //         console.log(`value: ${value}`);
    //     })
      
    //    console.log(formData);
        const formDataObj = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
   }
        console.log(formDataObj);
     
        event.currentTarget.reset();
    }
})


window.addEventListener('load', function() {
    let formulario = document.querySelector('form.register');
    formulario.onsubmit = function (event)  {
        event.preventDefault();
        let errors = [];

        let inputName = document.querySelector('input.name');
        if (inputName.value.length < 2) {
            errors.push('El nombre debe tener al menos 2 caracteres');
            inputName.placeholder = ('El nombre debe tener al menos 2 caracteres')
            inputName.classList.add("alert-danger")
        } else {
            inputName.classList.remove("alert-danger")
            inputName.classList.add("alert-success")
        }
        let inputLastName = document.querySelector('input.last_name');
        if (inputLastName.value.length < 2) {
            errors.push('El apellido debe tener al menos 2 caracteres');
            inputLastName.placeholder = ('El apellido debe tener al menos 2 caracteres')
            inputLastName.classList.add("alert-danger")
        } else {
            inputLastName.classList.remove("alert-danger")
            inputLastName.classList.add("alert-success")
        }
        if (errors.length > 0){
            event.preventDefault();
            console.log(errors);
        }
        
    }
});
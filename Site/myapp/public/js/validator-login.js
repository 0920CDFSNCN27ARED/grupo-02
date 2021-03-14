window.addEventListener('load', function() {
    let formulario = document.querySelector('form.formulario');
    formulario.onsubmit = function (event)  {
        event.preventDefault();
        let errores = [];
        let email = document.querySelector('input.email');
        console.log(email);
        if (email.value == "") {
            errores.push('El campo email debe estar completo');
        } 
        if (errores.length > 0){
            event.preventDefault();
            console.log(errores);
        }


    }
});
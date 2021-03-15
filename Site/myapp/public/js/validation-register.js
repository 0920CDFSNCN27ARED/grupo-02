let errors = [];
window.addEventListener('load', function() {
    let formulario = document.querySelector('form.register');
    formulario.onsubmit = function (event)  {
        event.preventDefault();
        errors = [];
        clearValidations();
        const msgLength = "El campo no puede estar vacío";
        
        validateLength('name', 'nameFeedback', 'El nombre debe tener al menos 2 caracteres', 2);
        validateLength('last_name', 'last_nameFeedback', 'El apellido debe tener al menos 2 caracteres', 2);
        validateLength('password', 'passwordFeedback', 'La contraseña debe tener al menos 8 caracteres', 8);

        validateNotEmpty('name', 'nameFeedback', msgLength);
        validateNotEmpty('last_name', 'last_nameFeedback', msgLength);
        validateNotEmpty('email', 'emailFeedback', msgLength);
        validateNotEmpty('password', 'passwordFeedback', msgLength);

        fileValidation('image', 'imageFeedback', 'Se debe cargar una imagen con formato .jpg .jpeg o .png');

        if (checkErrors()){
            event.preventDefault();
        }
    }
});
function checkErrors(){
    if (errors.length > 0){
        console.log(errors);
        errors.forEach((e) => {
            const feedbackDiv = document.getElementById(e.feedbackID);
            const input = document.getElementById(e.input);
            feedbackDiv.innerHTML = e.errorMsg;
            input.classList.add('is-invalid');
            feedbackDiv.classList.add('alert', 'alert-danger')
        }); 
        return true;
    }
    return false;
};
function validateNotEmpty (input, feedbackID, errorMsg) {
    const inputValid = document.getElementById(input);
    if (inputValid.value.trim() == '') {
        const error = {
            feedbackID,
            input,
            errorMsg,
        };
        errors.push(error);
    } else {
        inputValid.classList.add('is-valid');
    }
};
function validateLength (input, feedbackID, errorMsg, minLength) {
    const inputValid = document.getElementById(input);
    if (inputValid.value.length < minLength) {
        const error = {
            feedbackID,
            input,
            errorMsg,
        };
        errors.push(error);
    } else {
        inputValid.classList.add('is-valid');
    }
};
function fileValidation (input, feedbackID, errorMsg) {
    let fileInput = document.getElementById(input);
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/;
    if(!fileInput.value.match(allowedExtensions)){ 
        const error = {
            feedbackID,
            input,
            errorMsg,
        };
        errors.push(error);
    } else {
        inputValid.classList.add('is-valid');
    }
};
function clearValidations() {
    const overallInputs = document.getElementsByClassName('overall');
    const feedbackmsg = document.getElementsByClassName('feedback');
  
    for (let input of overallInputs) {
      input.classList.remove('is-invalid');
    }
    for (let feedback of feedbackmsg) {
      feedback.classList.remove('alert', 'alert-danger');
      feedback.innerHTML = '';
    }
}
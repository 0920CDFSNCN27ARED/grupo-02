let errors = [];
window.addEventListener('load', function() {
    let formulario = document.querySelector('form.register');
    formulario.onsubmit = function (event)  {
        errors = [];
        clearValidations();
        const msgLength = 'El campo no puede estar vacío';
        validateNotEmpty('name', 'nameFeedback', msgLength);
        validateLength('name', 'nameFeedback', 'El nombre debe tener al menos 2 caracteres', 2);
        validateNotEmpty('last_name', 'last_nameFeedback', msgLength);
        validateLength('last_name', 'last_nameFeedback', 'El apellido debe tener al menos 2 caracteres', 2);

        validateNotEmpty('password', 'passwordFeedback', msgLength);
        validateLength('password', 'passwordFeedback', 'La contraseña debe tener al menos 8 caracteres', 8);

        
        
        validateNotEmpty('email', 'emailFeedback', msgLength);

        fileValidation('image', 'imageFeedback', 'Se debe cargar una imagen con formato .jpg .jpeg o .png');

        if (checkErrors()){
            event.preventDefault();
        }
    }
});
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
    let allowedExtensions = /(.jpg|.jpeg|.png)$/;
    if(!fileInput.value.match(allowedExtensions)){ 
        const error = {
            feedbackID,
            input,
            errorMsg,
        };
        errors.push(error);
    } else {
        fileInput.classList.add('is-valid');
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
window.addEventListener('load', function() {
    let form = document.getElementsByTagName('input');
    form.onblur = function ()  {
        alert ('Saliste del campo');
    }
});
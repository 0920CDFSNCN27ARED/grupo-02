window.onload = function(){
    let d = document;
    let formulario = d.querySelector('form.formRegister');
    formulario.onsubmit = function(event){
        let name = d.querySelector('input#name');
        let errores = [];
        if(name.value.length < 5) {
            event.preventDefault();
            errores.push({
                type: 'name',
                msg: 'El nombre debe tener 4 carácteres'
            });
            name.classList.add('alert', 'alert-danger');
        }else{
            errores = errores.filter((er)=>{
                return er.type != 'name'
            });
            name.classList.remove('alert-danger');
            name.classList.add('alert', 'alert-success');
        }

        let price = d.querySelector('input#price');
        if(price.value.length < 1 || Number(price.value) == NaN) {
            event.preventDefault();
            errores.push({
                type: 'price',
                msg: 'El precio debe tener un número'
            });
            price.classList.add('alert', 'alert-danger');
        }else{
            errores = errores.filter((er)=>{
                return er.type != 'price';
            })
            price.classList.remove('alert-danger');
            price.classList.add('alert', 'alert-success')
        }

        let category = d.querySelector('select#category');
        if(category.value == '') {
            event.preventDefault();
            errores.push({
                type: 'category',
                msg: 'Debe elegir una categoría'
            });
            category.classList.add('alert', 'alert-danger');
        }else{
            errores = errores.filter((er)=>{
                return er.type != 'category';
            })
            category.classList.remove('alert-danger');
            category.classList.add('alert', 'alert-success')
        }

        let image = d.querySelector('input#image');
        if(image.value == '') {
            event.preventDefault();
            errores.push({
                type: 'image',
                msg: 'Debe elegir una imagen'
            });
            image.classList.add('alert', 'alert-danger');
        }else{
            errores = errores.filter((er)=>{
                return er.type != 'image';
            })
            image.classList.remove('alert-danger');
            image.classList.add('alert', 'alert-success')
        }

        let description = d.querySelector('textarea#description');
        if(description.value.length < 5) {
            event.preventDefault();
            errores.push({
                type: 'description',
                msg: 'Debe escribir una descripción'
            });
            description.classList.add('alert', 'alert-danger');
        }else{
            errores = errores.filter((er)=>{
                return er.type != 'description';
            })
            description.classList.remove('alert-danger');
            description.classList.add('alert', 'alert-success')
        }
    }
}
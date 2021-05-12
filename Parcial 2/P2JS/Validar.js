function validar(form) {

    /*Validar que el usuario escriba por lo menos 3 carácteres en el campo nombre */
    if (form.nombre.value.length < 3) {
        alert("Escriba más carácteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }


    var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
        + "qwertyuiopasdfghjklñzxcvbnm";
    var allvalid = true;
    var valor = form.nombre.value;



    for (var i = 0; i < form.nombre.value.length; i++) {
        var checkStr = valor.charAt(i);
        for (var j = 0; j < checkOk.length; j++) {
            if (checkStr == checkOk.charAt(j)) {
                break;
                allvalid = true;
            }

        }
        if (j == checkOk.length) {
            allvalid = false;
            break;
        }
    }
    if (allvalid == false) {
        alert("Escriba solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }



    var checkOk = "1234567890";
    var allvalid = true;
    var valor = form.age.value;



    for (var i = 0; i < form.age.value.length; i++) {
        var checkStr = valor.charAt(i);
        for (var j = 0; j < checkOk.length; j++) {
            if (checkStr == checkOk.charAt(j)) {
                break;
                allvalid = true;
            }

        }
        if (j == checkOk.length) {
            allvalid = false;
            break;
        }
    }
    if (allvalid == false) {
        alert("Escriba solo numeros en el campo edad");
        formulario.age.focus();
        return false;
    }


    /*Expresiones regulares*/

    var txt = form.email.value;

    var regExt= /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
    alert("Email" + (regExt.test(txt)?"":"no") + " valido");
    return regExt.test(txt);

}
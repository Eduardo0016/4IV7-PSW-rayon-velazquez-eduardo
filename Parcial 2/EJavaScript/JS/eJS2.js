function validarn(e) {

    var teclado = (document.all) ? e.keycode : e.which;
    if (teclado == 8)
        return true;

    var patron = /[0-9\d.]/;

    var comprobar = String.fromCharCode(teclado);
    return patron.test(comprobar);

}

function calcular() {
    if (document.form.valor1.value == "" || document.form.valor2.value == "" || document.form.valor3.value == "") {
        alert("Escriba un número");
    } else {

        var val1 = parseInt(document.form.valor1.value);
        var val2 = parseInt(document.form.valor2.value);
        var val3 = parseInt(document.form.valor3.value);
        var rest = val1 + val2 + val3;
        var res1 = val1 * .1;
        var res2 = val2 * .1;
        var res3 = val3 * .1;

        document.form.textread1.value = "$ " + res1;
        document.form.textread2.value = "$ " + res2;
        document.form.textread3.value = "$ " + res3;
        document.form.textread.value = "$ " + (rest + (res1 + res2 + res3));
    }
}

function Borrar() {
    document.form.valor1.value="";
    document.form.valor2.value="";
    document.form.valor3.value="";

    document.form.textread1.value = "En espera...";
    document.form.textread2.value = "En espera...";
    document.form.textread3.value = "En espera...";
    document.form.textread.value = "Total: 0.0"
}
function validarn(e) {
    var teclado = (document.all) ? e.keycode : e.which;
    if (teclado == 8)
        return true;
    var patron = /[0-9\d.]/;


    var comprobar = String.fromCharCode(teclado);
    return patron.test(comprobar);



}

function Calcular() {
    if (document.form.valor.value==""){
        alert("Escriba un número");
    }else{

    
        

    var valor = document.form.valor.value;
    var result = parseInt(valor);
    var interes = result * .15;
    var total = result-interes;

    document.form.textread.value = "$ " + total;
    }
}

function Borrar() {
    document.form.valor.value = "";
    document.form.textread.value = "";
    document.form.textread.value = "En espera...";
}
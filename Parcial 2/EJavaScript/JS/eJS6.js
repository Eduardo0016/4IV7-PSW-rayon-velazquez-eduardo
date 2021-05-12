function ValidarN(e){
    var teclado= (document.all) ? e.keycode: e.which;
    if( teclado== 8)
        return true;

    var patron= /((^\d+\.\d+$)|(^\.\d+$)|(^\d+$))/;
    var comprobar= String.fromCharCode(teclado);
    return patron.test(comprobar);
    
}


function Calcular() {
    const fecha= new Date();
    var año=fecha.getFullYear();
    if (document.form.valor.value==""){
        alert("Escriba un número");
    }else if(document.form.valor.value>año ||document.form.valor.value<1900){
        alert("Año no válido");
    }else{
    var valor = document.form.valor.value;
    var result = parseInt(valor);
    var edad= año-valor;


    document.form.textread.value = "Usted tiene: " + edad+" año(s)";
    }
}

function Borrar() {
    document.form.valor.value = "";
    document.form.textread.value = "";
    document.form.textread.value = "En espera...";
}
function ValidarN(e) {
    var teclado = (document.all) ? e.keycode : e.which;
    if (teclado == 8)
        return true;
    var patron = /[0-9\d.?]/;


    var comprobar = String.fromCharCode(teclado);
    return patron.test(comprobar);
}

function Calcular(){
    
    if(document.form.valor1.value==""||document.form.valor2.value==""){
        alert("Escriba un número");

    }else{
        var n1=parseInt(document.form.valor1.value);
        var n2=parseInt(document.form.valor2.value);
        if(n1==n2){
            document.form.textread.value="Multiplicación: "+(n1*n2);
        }
        if(n1>n2){
            document.form.textread.value="Resta: "+(n1-n2);
        }
        if(n1<n2){
            document.form.textread.value="Suma: "+(n1+n2);
        }
            
    }
}

function Borrar(){
    document.form.valor1.value="";
    document.form.valor2.value="";
    document.form.textread.value="En espera...";
}
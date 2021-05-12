function ValidarN(e){
    var teclado= (document.all) ? e.keycode: e.which;
    if( teclado== 8)
        return true;

    var patron= /((^\d+\.\d+$)|(^\.\d+$)|(^\d+$))/;
    var comprobar= String.fromCharCode(teclado);
    return patron.test(comprobar);
    
}


function Calcular(){
    if(document.form.valor1.value==""||document.form.valor2.value==""||document.form.valor3.value==""){
        alert("Escriba un número");
    }else{
        var val1=parseInt(document.form.valor1.value);
        var val2=parseInt(document.form.valor2.value);
        var val3=parseInt(document.form.valor3.value);
        if(val1==val2||val1==val3||val2==val3){
            alert("Los números deben ser diferentes entre si");
        }else{
            if(val1>val2 && val1>val3 && val2>val3){
                document.form.textread.value="El mayor es: "+val1;
            }
            if(val2>val1 && val2>val3 && val1>val3){
                document.form.textread.value="El mayor es: "+val2;
            }
            if(val3>val2 && val3>val1 && val2>val1){
                document.form.textread.value="El mayor es: "+val3;
            }
        }
    }
}

function Borrar(){
    document.form.valor1.value="";
    document.form.valor2.value="";
    document.form.valor3.value="";
    document.form.textread.value="En espera...";
}
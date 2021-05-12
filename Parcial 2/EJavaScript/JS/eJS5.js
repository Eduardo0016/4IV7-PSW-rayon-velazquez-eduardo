function ValidarN(e){
    var teclado= (document.all) ? e.keycode: e.which;
    if( teclado== 8)
        return true;

    var patron= /((^\d+\.\d+$)|(^\.\d+$)|(^\d+$))/;
    var comprobar= String.fromCharCode(teclado);
    return patron.test(comprobar);
    
}

function Calcular(){
    var canH=parseInt(document.form.valorH.value);
    var canM=parseInt(document.form.valorM.value);
    if(canH==""||canM==""){
        alert("Formato no válido");

    }else{
        alert("Hola");
        var total=(canM+canH);
        alert(total);
        var porcentajeH=100*(canH/total);
        alert(porcentajeH );
        var porcentajeM=100-porcentajeH;
        alert(porcentajeM);
        document.form.textH.value=Math.round(porcentajeH)+"% Hombres";
        document.form.textM.value=Math.round(porcentajeM)+"% Mujeres";

    }
}

function Borrar(){
    document.form.valorH.value="";
    document.form .valorM.value="";
    document.form.textH.value="En espera...";
    document.form.textM.value="En espera...";

}
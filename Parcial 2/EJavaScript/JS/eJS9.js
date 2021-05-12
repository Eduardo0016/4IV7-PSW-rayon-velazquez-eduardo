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
        var hras=parseInt(document.form.valor1.value);
        var sueldo=parseInt(document.form.valor2.value);
        if(hras>120){
            alert("Número no válido");

        }else{
        if(hras<=40){
            document.form.textread.value="Ganacia Hras. extras/Ganancia total: 0/"+(hras*sueldo);
        }
        if(hras>40 && hras<48){
            var ganancia=(hras-40)*sueldo*2;
            document.form.textread.value="Ganacia Hras. extras/Ganancia total: "+ganancia+"/"+((40*sueldo)+ganancia);
        }else{
           if(hras>40){
            var ganancia=(hras-40)*sueldo*3;
            document.form.textread.value="Ganacia Hras. extras/Ganancia total: "+ganancia+"/"+((40*sueldo)+ganancia);
         }//finSi 
        }
        
      }
    }
}

function Borrar(){
    document.form.valor1.value="";
    document.form.valor2.value="";
    document.form.textread.value="En espera...";

}
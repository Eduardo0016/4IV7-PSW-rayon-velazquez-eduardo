function ValidarN(e){
    var teclado= (document.all) ? e.keycode: e.which;
    if( teclado== 8)
        return true;

    var patron= /((^\d+\.\d+$)|(^\.\d+$)|(^\d+$))/;
    var comprobar= String.fromCharCode(teclado);
    return patron.test(comprobar);
    
}

function Calcular(){
    var Par1=parseInt(document.form.par1.value);
    var Par2=parseInt(document.form.par2.value);
    var Par3=parseInt(document.form.par3.value);

    if((Par1>100||Par1<0)||(Par2>100||Par1<0)||(Par3>100||Par3<0)){
        alert("El número debe ser entre 0-100 en el la calificación parcial");
    }else{
        var ParT= (Par1+Par2+Par3)/3;
        CalParT=55*(ParT/100);
        document.form.evTotal.value=""+CalParT+"% / 55%";
    }
    var examen=document.form.exFin.value;
    var trabajo=document.form.trFin.value;

    if((examen>100||examen<0)||(trabajo>100||trabajo<0)){
        alert("El número debe ser entre 0-100 en el la calificación parcial");
    }else{
        var CalExa=30*(examen/100);
        var CalTr= 15*(trabajo/100)

        document.form.exFin.value=""+CalExa+"% / 30%";
        document.form.trFin.value=""+CalTr+"% / 15%";
        document.form.calfin.value="Calificación final: "+(CalParT+CalExa+CalTr);
    }


    
}

function Borrar(){
    document.form.par1.value="";
    document.form.par2.value="";
    document.form.par3.value="";

    document.form.evTotal.value="% total de la evaluación";
    document.form.exFin.value="";
    document.form.trFin.value="";
    document.form.calfin.value="Calificación final: 0.0";
}
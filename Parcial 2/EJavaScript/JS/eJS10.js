function ValidarN(e){
    var teclado= (document.all) ? e.keycode: e.which;
    if( teclado== 8)
        return true;

    var patron= /((^\d+\.\d+$)|(^\.\d+$)|(^\d+$))/;
    var comprobar= String.fromCharCode(teclado);
    return patron.test(comprobar);
}

function Operaciones(){
    
}


function Calcular(){
    var op1=document.getElementById("op1").value;
    var op2=document.getElementById("op2").value;
    var op3=document.getElementById("op3").value;
    var op4=document.getElementById("op4").value;
    var op5=document.getElementById("op5").value;
    alert(op5);

    if(document.forms.valor.value=""){
        alert("Hay un campo incompleto");
    }else{
        var lista=[op1,op2,op3,op4,op5];
        for(i=0;i<lista.length;i++){
            
        }
    
    }
    alert(array);
}
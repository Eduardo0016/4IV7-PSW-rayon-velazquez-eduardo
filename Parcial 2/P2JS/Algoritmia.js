/*
//problema 1 de tarea wiiiiii uwu mio uwu/

function problema1(){

    var p1_input = document.querySelector('#p1-input').value;



    //tenemos que detectar el espacio, tendria que dividir la cadena y colocarla
    //dentro de un array

    var p1_array = p1_input.split(' ').reverse();

  

      //dentro de un array
      //dentrodeunarray
      //alreves
      //separar
    
    var p1_res = '';


    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_res;

}



//problema 2
function problema2(){
    //lo primero que necesito es obtener los valores por parte de los campos de html
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    /*
    para encontrar el minimo producto escalar entre 2 vectores,
    tenemos que realizar las operaciones correspondientes que son
    con el maximo valor de un vector por el minimo valor del otro
    vector
    
    */

    //construir vectores
    /*
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar los vectores 
    v1 = v1.sort(function(a, b){
        return b-a;
    });

    v2 = v2.sort(function(a, b){
        return b-a;
    });

    //invertir el vector 2
    v2 = v2.reverse();

    //producto
    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    //imprimir el resultado
    document.querySelector('#p2-output').textContent = 
    'Producto escalar minimo : '+p2_producto;
}
*/

//el tres queda de tarea wiiiiiiiiiii y hago el 1 wiiiiiiiiiii

function ValidarEntrada(){
    validarEspacios=/^\s+$/;
    var cadena=document.getElementById("p3-input").value;
    if(validarEspacios.test(cadena)){
        alert("Cadena no válida");
    }else{
    var cadenaValida="QWERTYUIOPASDFGHJKLÑZXCVBNM, ";
    var comprobar=false;

    for(var i=0; i<document.getElementById("p3-input").value.length;i++){
        var descomponer=cadena.charAt(i);
        for(var j=0;j<cadenaValida.length;j++){
            if(descomponer==cadenaValida.charAt(j)){
                comprobar=true;
                break;
            }
        }
        if(j==cadenaValida.length){
            comprobar=false;
      }
    }
    if(comprobar==false){
        alert("Cadena no válida");
    }else{
        problema3();
    }
}

}

function problema3(){
    var cadena=document.getElementById("p3-input").value;
    var quitarEsp=/\s+/g;
    cadena=cadena.replace(quitarEsp,"");
    var validarComa=/,+/g;
    cadena=cadena.replace(validarComa,",");
    var cadenaArray=cadena.split(",");
    var contador=0;
    //alert(cadenaArray[2]);
    for(i =0; i<cadenaArray.length;i++){
        var caracterU=cadenaArray[i].charAt(i);
        for(j=0; j<caracterU.length-1; j++){
            if(caracterU==cadenaArray[i].charAt(i+1)){
                contador++;
            }
        }
        var acumular=acumular.push(contador);
    }
    for(i =0; i<cadenaArray.length;i++){
        var longitudCadena=longitudCadena.push(cadenaArray[i].length);
        var cantidadCU=cantidadCU.push(longitudCadena[i]-acumular[i]); 
    }
    NumIgualesCu=0;
    var arrayCuMayor;
    for(k=0;k<cantidadCU.length-1;k++){
        if(cantidadCU[i]<=cantidadCU[i+1]){
            arrayCuMayor=arrayCuMayor.push(cantidadCU[i+1]);
        }else{
            arrayCuMayor=arrayCuMayor;
        }
        if(){
            
        }

        /*
        if (Nmayor<=Vector3[i+1]) {
                    Nmayor=Vector3[i+1];
              
                }else{
                  
                    Nmayor=Nmayor;
                                   
                }
                               
                if (Nmenor>Vector3[i+1]) {
                    Nmenor=Vector3[i+1];
                              
                }else{
                    Nmenor=Nmenor;
               
                } 
                
                if (Vector3[i]>promedio) {
                contador++;
                
                
            }
        */


    }

    if((NumIgualesCu+1)==cantidadCU.length){
        document.getElementById("p3-output")="Todas las palabras tiene el mismo número de carácteres únicos"
    }
  


    var cantidadMayor=0,
    for(i =0; i<cantidadCU.length-1;i++){
        if(cantidadCU[i]>cantidadCU[i+1]){
            cantidadMayor=cantidadCU[i];
        }
    }
    
    for(i =0; i<cadenaArray.length;i++){
        if(cantidadMayor==cantidadCU[i]){
            
        }
    }
    
    
    


    /* 
    for (var i=0; i<cadenaArray.length; i++) {
      alert(cadenaArray[i]);
   }*/




    alert("todo bien");
}





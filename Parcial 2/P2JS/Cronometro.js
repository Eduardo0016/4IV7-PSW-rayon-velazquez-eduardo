

let temporizador = document.getElementById('temporizador');
let iniciar = document.getElementById('iniciar');
let parar = document.getElementById('parar');
let resetear = document.getElementById('resetear');
let grabar=document.getElementById("grabar");
let almacenarTiempos = document.getElementById('almacenarTiempos');



var tiempo = 0;
var verificador = false;
var incrementar=0;
var intervalo;

init();

function init(){
    iniciar.addEventListener("click",Realizar);
    parar.addEventListener("click",Parar);
    resetear.addEventListener("click", reiniciar);
    grabar.addEventListener("click",guardar );
}

//alert(incrementar);

function Realizar(){
    intervalo=setInterval(function(){
        tiempo+= 0.01;
        temporizador.innerHTML=tiempo.toFixed(2);
    }, 10 );
    /*incrementar++;
    alert("Valor inicial: "+incrementar);
    if(incrementar==1){
            intervalo=setInterval(function(){
            tiempo+= 0.01;
            temporizador.innerHTML=tiempo.toFixed(2);
        }, 10 );
    alert("Entro al primero if (Iniciar) "+incrementar);
    }
    alert("Cuerpo de la función: "+incrementar);
    if(incrementar==2){
        clearInterval(intervalo);
        alert("Entro al segundo if (parar) "+incrementar);
        incrementar=0;
    }

    if(incrementar==0){
        clearInterval(intervalo);
        alert("3er if (parar) "+incrementar);
    }
    alert("Fin de función: "+incrementar);
    */
}


function Parar(){
    clearInterval(intervalo);
}


function reiniciar(){
    tiempo = 0;
    temporizador.innerHTML = tiempo + '.00';
    clearInterval(intervalo);
    while(almacenarTiempos.firstChild){
        almacenarTiempos.removeChild(almacenarTiempos.firstChild);
    intervalo.innerHTML=0;
    }
}

function guardar(){
    if(temporizador.textContent === '0.00'){
        alert('click para iniciar el cronometro');
    }else{
        let p = document.createElement('ul');
        p.innerHTML = `
        <li>Tiempo: ${tiempo.toFixed(2)} </li>
        `;
        almacenarTiempos.appendChild(p);
    }
}
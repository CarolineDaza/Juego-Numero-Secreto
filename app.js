let númeroSecreto = 0;
let intentos = 0;
let listaNúmerosSorteados = [];
let númeroMaximo = 10;

console.log(númeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
   let númeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   if (númeroDeUsuario === númeroSecreto) {
       asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
   document.getElementById('reiniciar').removeAttribute('disabled');
      } else {
      //El usuario no acerto.
      if (númeroDeUsuario > númeroSecreto) {
         asignarTextoElemento('p','El número secreto es menor');
      } else {
         asignarTextoElemento('p','El número secreto es mayor');
      }
      intentos++;
      limpiarCaja();
   
   }
   return;
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNúmeroSecreto() {
   let númeroGenerado = Math.floor(Math.random()*númeroMaximo)+1

   console.log(númeroGenerado);
   console.log(listaNúmerosSorteados);
   //si ya sorteamos todos los numeros
   if (listaNúmerosSorteados.length == númeroMaximo) {
       asignarTextoElemento('p','Ya se sortearon todos los números posibles');
   } else {
      //si el numero generado esta incluido en la lista
      if(listaNúmerosSorteados.includes(númeroGenerado)) {
         return generarNúmeroSecreto();
      } else {
          listaNúmerosSorteados.push(númeroGenerado)
          return númeroGenerado;
      }
   }   
}   
      
function condicionesIniciales() {
   asignarTextoElemento('h1','Juego del número secreto!');
   asignarTextoElemento('p',`Indica un número del 1 al ${númeroMaximo}`);
   númeroSecreto = generarNúmeroSecreto();
   intentos = 1;
}

function reiniciarJuego() {
   //limpiar caja
   limpiarCaja();
   //indicar mensaje de intervalo de numeros
   //generar el numero aleatorio
   //inicializar el numero de intentos
   condicionesIniciales();
   //desabilitar el boton de juego nuevo
   document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
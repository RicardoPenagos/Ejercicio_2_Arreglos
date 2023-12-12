// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

const arrayVacio = [];

function llenarArray(){
    for (let i = 0; i < 10; i++) {
        arrayVacio.push(Math.floor(Math.random() * 10));
    }
}

llenarArray();
console.log( "Console del ejercicio 1: [" +  arrayVacio + "]" );

const $ejercicio1Respuesta = document.querySelector('#ejercicio1Respuesta');
$ejercicio1Respuesta.innerHTML = `Este es el resultado del primer ejercicio: [${arrayVacio}]`;


// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

const $ejercicio2Respuesta = document.querySelector('#ejercicio2Respuesta');
const $ejercicio2BtnActivar = document.querySelector('#ejercicio2BtnActivar');

function creadorArray(){
    const respuestaPrompt = prompt("Ingresa un string separado por comas ejeplo: '1,2,3,4,5'");

    if(respuestaPrompt != null && respuestaPrompt != ""){
        const ejercicio2Array = respuestaPrompt.split(",");
        $ejercicio2Respuesta.innerHTML = `Este es el resultado del segundo ejercicio: [${ejercicio2Array}]`;
        console.log(`Console del ejercicio 2: [${ejercicio2Array}]`);

    }else{
        console.log("No estás ejecundo correctamente el ejercicio")
        $ejercicio2Respuesta.innerHTML = `Tienes que ingresar algún dato para que funcione`;
    }
}


$ejercicio2BtnActivar.addEventListener('click', creadorArray);

// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

const $ejercicio3Respuesta = document.querySelector('#ejercicio3Respuesta');

const ejercicio3Array = [10,40,30,20,15,5];
function arrayOrdenado(){
    ejercicio3Array.sort( (a,b) => {return a-b});
    $ejercicio3Respuesta.innerHTML = `Este es el resultado del tercer ejercicio: [${ejercicio3Array}]`;
    console.log("Console del ejercicio 3: ["  + ejercicio3Array + "]");

}

arrayOrdenado();


// Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

function noPositivosArray(arr) {
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}

// Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 

function minMaxArray(arr) {
    var minElement = Math.min.apply(null, arr);
    var maxElement = Math.max.apply(null, arr);

    console.log('El menor valor es: ', minElement);
    return maxElement;
}

// Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.

function penultimoImpar(arr) {
    var primerImpar = 0;
    var penultimoValor = arr[arr.length - 2];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            primerImpar = arr[i];
            break;
        }
    }
    console.log('Penultimo valor: ', penultimoValor);
    return primerImpar;
}


// Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

function dobleVision(arr) {
    var newArray = [];
    for(var i = 0; i < arr.length; i++) {
        newArray.push(arr[i]*arr[i]);
    }
    return newArray;
}

// Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

function contarPositivos(arr) {
    var contador = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            contador++;
        }
    }
    arr[arr.length - 1] = contador;
    return arr;
}

// Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

function paresImpares(arr) {
    var par = 0;
    var impar = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            continue;
        } else if (arr[i] % 2 != 0) { // IMPARES
            impar += 1;
            if (impar === 3) {
                console.log("¡Que imparcial!");
                impar = 0;
                par = 0;
            }
        } else {
            par += 1;
            if (par === 3) {
                console.log("¡Es para bien!");
                par = 0;
                impar = 0;
            }
        }
    }
}

//Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 

function incrementarSegundos(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(i % 2 !== 0) {
            arr[i]+=1;
        }
        console.log('Posición ', i, ': ', arr[i]);
    }
    return arr;
}

// Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?

function longitudesPrevias(arr) {
    for(var i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i-1].length;
    }
    return arr;
}

console.log('---- Longitudes previas ----')
var arrayPrevias = longitudesPrevias(["programar", "dojo", "genial"]);
console.log(arrayPrevias);

// Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 

function agregaSiete(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray.push(arr[i] + 7);
    }
    return newArray;
}

console.log('---- Agrega Siete ----');
var arraySiete = agregaSiete([1,2,3]);
console.log(arraySiete);

// Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

function invertirArray(arr) {
    arr = [...arr].reverse();
    return arr;
}

console.log('--- Array Inverso ---');
var arrayNormal = [3,1,6,4,2];
var arrayInvertido = invertirArray(arrayNormal);
console.log(arrayNormal, '<-- Normal');
console.log(arrayInvertido, '<-- Invertido');

// Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

function perspectivaNegativa(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            newArray.push(arr[i]);
        } else {
            arr[i] *= -1;
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log('--- Perspectiva negativa ---');
var arrayNegativo = perspectivaNegativa([1,-3,5]);
console.log(arrayNegativo);

// Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

function siempreHambriento(arr) {
    var contador = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === 'comida') {
            console.log('yummy');
            contador++;
        }
    }
    if(contador === 0) {
        console.log('tengo hambre');
    }
}

console.log('--- Siempre hambriento ---');
siempreHambriento([3,2,'comida',4,5,8,'comida']);
siempreHambriento([3,2,4,5,8,9]);

// Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 

function cambiaHaciaElCentro(arr) {
    for(var i = 0; i < arr.length/2 ; i++){
        if(i % 2 === 0){
            var temp = arr[i];
            arr[i] = arr[arr.length-1-i];
            arr[arr.length-1-i] = temp;
        }     
    }
    console.log(arr);
}

console.log('--- Camina hacia el centro ---');
cambiaHaciaElCentro([true, 42, 'Ada', 2, 'Pizza']);
cambiaHaciaElCentro([1,2,3,4,5,6]);

// Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].

function escalaArray(arr, num) {
    for(var i = 0; i < arr.length; i++) {
        arr[i]*=num;
    }
    return arr;
}

console.log('--- Escala el Array ---');
var arrayEscalado = escalaArray([1,2,3], 3);
console.log(arrayEscalado);
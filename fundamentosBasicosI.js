// Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function llenarArray(arr) {

    for(var i = 1; i <= 255; i++) {
         arr.push(i);
    }
    return arr;
}

 // Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

function sumaPares() {
     var sum = 0;
     for(var i = 1; i <= 1000; i++) {
         if(i % 2 == 0) {
             sum+=i;
         }
     }
    return sum;
}

 // Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

 function sumaImpares() {
     var sum = 0;
     for(var i = 1; i <= 5000; i++) {
        if(i % 2 !== 0) {
             sum+=i;
        }
     }
     return sum;
 }

// Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

function sumaValoresArray(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

function mayorElem(arr) {
    var mayorHastaAhora = arr[0];
         
    mayorHastaAhora = Math.max.apply(null, arr); // podemos utilizar la clase Math que nos provee un método para tomar el número más alto en un array
    return mayorHastaAhora;
}

// Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2)

function averageArr(arr) {
    var sum = sumaValoresArray(arr); // David nos explicó que podemos llamar una función dentro de otra función! RECORDAR HENRRY!
    return sum / arr.length;
}

// Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function numerosImpares(arr) {
    for(var i = 1; i <= 50; i++) {
        if(i % 2 !== 0) {
            arr.push(i);
        }
    }
    return arr;
}

// Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

function mayorQue(y, arr) {
    var contador = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > y) {
            contador++;
        }
    }
    return contador;
}

// Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function cuadradoArr(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}

// Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

function ningunNegativo(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

// Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

function maxMinAvgArray(arr) {
    var newArr = [];
    var maxElemento = mayorElem(arr); // llamamos funcion de mayor elemento en un array
    var minElemento = Math.min.apply(null, arr);
    var average = averageArr(arr); // llamamos funcion promedio de un array

    newArr.push(maxElemento, minElemento, average);
    
    return newArr;
}

console.log(maxMinAvgArray([1,5,10,-2]));

// Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

function cambiandoValores(arr) {
    var primerElemento = arr[0];
    var ultimoElemento = arr[arr.length - 1];

    arr[0] = ultimoElemento;
    arr[arr.length - 1] = primerElemento;

    return arr;
}

// De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

function numberToString(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

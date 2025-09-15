// push(): Añade uno o más elementos al final del arreglo y devuelve la nueva longitud del arreglo.
let numeros = [1, 2, 3];
console.log(numeros); // [1, 2, 3, 4, 5]
let longitud1 = numeros.push(4, 5);
console.log(longitud1); // 5

// unshift(): Añade uno o más elementos al inicio del arreglo y devuelve la nueva longitud.

let letras = ['b', 'c'];
let longitud2 = letras.unshift('a');
console.log(letras); // ['a', 'b', 'c']
console.log(longitud2); // 3

// pop(): Elimina y devuelve el último elemento del arreglo, reduciendo su longitud en 1.

let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop();
console.log(frutas); // ['manzana', 'banana']
console.log(ultima); // 'naranja'

// shift(): Elimina y devuelve el primer elemento del arreglo, reindexando los demás elementos.

let colores = ['rojo', 'verde', 'azul'];
let primero = colores.shift();
console.log(colores); // ['verde', 'azul']
console.log(primero); // 'rojo'

// indexOf(elemento, [inicio]): Busca un elemento en el arreglo y devuelve el
// índice de la primera aparición, o -1 si no lo encuentra. Opcionalmente,
// puedes especificar un índice de inicio.

let numeros2 = [10, 20, 30, 20, 40];
let indice = numeros2.indexOf(20); // 1
let indiceDesde2 = numeros2.indexOf(20, 2); // 3
console.log(indice); // 1
console.log(indiceDesde2); // 3

// length: Propiedad que devuelve la cantidad de elementos en el arreglo.
// También puede usarse para truncar o extender el arreglo asignando un nuevo valor.

let arreglo = [1, 2, 3];
console.log(arreglo.length); // 3
arreglo.length = 1; // Trunca a [1]
arreglo.length = 5; // Extiende a [1, undefined, undefined, undefined, undefined]

// sort([comparador]): Ordena los elementos del arreglo en orden ascendente (por defecto, como cadenas).
//  Por defecto, sort() convierte los elementos a 
// cadenas y los ordena lexicográficamente, pero para números necesitas una 
// función comparadora. Opcionalmente, acepta una función comparadora para personalizar el orden.

let numeros3 = [3, 1, 4, 2];
numeros3.sort((a, b) => a - b); // Orden ascendente
console.log(numeros3); // [1, 2, 3, 4]

let caracteres = ['a','x','v','g','j','k'];
caracteres.sort(); // Orden lexicográfico
console.log(caracteres); // ['a', 'g', 'j', 'k',

// join(separador): Convierte todos los elementos del arreglo en una cadena, 
// usando el separador especificado (por defecto, una coma).

let palabras = ['hola', 'mundo'];
let texto = palabras.join(' '); // 'hola mundo'
console.log(texto); // 'hola mundo'

// concat(arreglo1, arreglo2, ...): Une dos o más arreglos (o elementos) y devuelve un nuevo arreglo.

let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5]);
console.log(combinado); // [1, 2, 3, 4, 5]

//forEach(callback(elemento, indice, arreglo)): Ejecuta una función por cada 
// elemento del arreglo, sin devolver un nuevo arreglo.javascript

let Colores = ['rojo', 'verde', 'azul'];
Colores.forEach(color => console.log(color));
// Imprime: rojo, verde, azul

// map(callback(elemento, indice, arreglo)): Crea un nuevo arreglo aplicando 
// una función a cada elemento del arreglo original.

let numeros4 = [1, 2, 3];
let dobles = numeros4.map(x => x * 2);
console.log(dobles); // [2, 4, 6]

// filter(callback(elemento, indice, arreglo)): Crea un nuevo arreglo con los
// elementos que pasan una condición definida por la función callback.

let numeros5 = [1, 2, 3, 4];
let impares = numeros5.filter(x => x % 2 === 0);
console.log(impares); // [2, 4]

// reduce(callback(acumulador, elemento, indice, arreglo), [valorInicial]):
// Reduce el arreglo a un solo valor aplicando una función acumuladora.

let numeros6 = [1, 2, 3, 4];
let suma = numeros6.reduce((acumalador, ValorACtual) => acumalador + ValorACtual, 0);
console.log(suma); // 10

// Devuelve true si al menos un elemento cumple la condición especificada.

let numeros7 = [1, 2, 3, 4];
let hayPares = numeros7.some(x => x % 2 === 0);
console.log(hayPares); // tracumalador
// Devuelve true si todos los elementos cumplen la condición especificada.

let numeros8 = [2, 4, 6, 8];
let todosPares = numeros8.every(x => x % 2 === 0);
console.log(todosPares); // true

// Devuelve el primer elemento que cumple la condición especificada, o undefined si no lo encuentra.

let numeros9 = [1, 2, 3, 4];
let encontrado = numeros9.find(x => x > 2);
console.log(encontrado); // 3

// Devuelve el índice del primer elemento que cumple la condición, o -1 si no lo encuentra.

let numeros10 = [1, 2, 3, 4];
let indice1 = numeros10.findIndex(x => x > 2);
console.log(indice1); // 2

// Devuelve un iterador de los índices y valores del arreglo.

let colores1 = ['rojo', 'verde', 'azul'];
let iterador1 = colores1.entries();
console.log([...iterador1]);
// [[0, 'rojo'], [1, 'verde'], [2, 'azul']]

// Devuelve un iterador de los índices del arreglo.

let colores2 = ['rojo', 'verde', 'azul'];
let iterador2 = colores2.keys();
console.log([...iterador2]); // [0, 1, 2]

// Devuelve un iterador de los valores del arreglo.

let colores3 = ['rojo', 'verde', 'azul'];
let iterador3 = colores3.values();
console.log([...iterador3]); // ['rojo', 'verde', 'azul']
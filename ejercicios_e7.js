// ejercicios_e7.js

// 1) Añadir al final y devolver el arreglo (muta el arreglo original).
const addToEnd = (arr, ...elements) => {
  // Pasos: 1) Usar push con spread para añadir todos los elementos. 2) Retornar el mismo arreglo.
  arr.push(...elements);
  return arr;
};
// Ejemplo:
let a1 = [1, 2];
console.log('1)', addToEnd(a1, 3, 4)); // [1,2,3,4]
console.log('1) arreglo original mutado:', a1); // [1,2,3,4]

// 2) Añadir al inicio y devolver el arreglo (muta el arreglo original).
const addToStart = (arr, ...elements) => {
  // Pasos: 1) Usar unshift con spread. 2) Retornar el mismo arreglo.
  arr.unshift(...elements);
  return arr;
};
// Ejemplo:
let a2 = [3, 4];
console.log('2)', addToStart(a2, 1, 2)); // [1,2,3,4]
console.log('2) arreglo original mutado:', a2); // [1,2,3,4]

// 3) Eliminar y devolver el último elemento (muta el arreglo original).
const removeLast = (arr) => {
  // Pasos: 1) Usar pop. 2) Retornar lo que pop devuelve (el elemento eliminado).
  return arr.pop();
};
// Ejemplo:
let a3 = ['a', 'b', 'c'];
console.log('3) eliminado:', removeLast(a3)); // 'c'
console.log('3) arreglo ahora:', a3); // ['a','b']

// 4) Eliminar y devolver el primer elemento (muta el arreglo original).
const removeFirst = (arr) => {
  // Pasos: 1) Usar shift. 2) Retornar lo que shift devuelve.
  return arr.shift();
};
// Ejemplo:
let a4 = ['x', 'y', 'z'];
console.log('4) eliminado:', removeFirst(a4)); // 'x'
console.log('4) arreglo ahora:', a4); // ['y','z']

// 5) Buscar índice (desde inicio opcional). Devuelve índice o -1.
const indexOfFrom = (arr, element, start = 0) => {
  // Pasos: 1) Usar indexOf con 'start'. 2) Retornar el índice.
  return arr.indexOf(element, start);
};
// Ejemplo:
let a5 = [10, 20, 30, 20];
console.log('5)', indexOfFrom(a5, 20)); // 1
console.log('5)', indexOfFrom(a5, 20, 2)); // 3
console.log('5)', indexOfFrom(a5, 99)); // -1

// 6) Devolver la cantidad de elementos.
const count = (arr) => {
  // Pasos: 1) Retornar length del arreglo.
  return arr.length;
};
// Ejemplo:
console.log('6)', count(['uno', 'dos', 'tres'])); // 3

// 7) Ordenar números en ascendente (NO mutar el original).
const sortNumbersAsc = (arr) => {
  // Pasos: 1) Copiar con spread para no mutar. 2) Usar sort con comparador (a-b).
  return [...arr].sort((a, b) => a - b);
};
// Ejemplo:
let a7 = [5, 1, 10, -2];
console.log('7) ordenado:', sortNumbersAsc(a7)); // [-2,1,5,10]
console.log('7) original intacto:', a7); // [5,1,10,-2]

// 8) Unir elementos con separador en una cadena.
const joinWith = (arr, separator) => {
  // Pasos: 1) Usar join con el separador. 2) Retornar la cadena.
  return arr.join(separator);
};
// Ejemplo:
console.log('8)', joinWith(['Nica', 'Code', 'JS'], ' - ')); // 'Nica - Code - JS'

// 9) Combinar uno o más arreglos y/o elementos en un nuevo arreglo (aplana 1 nivel).
const combine = (...items) => {
  // Pasos: 1) Usar concat con spread para aplanar un nivel. 2) Retornar el nuevo arreglo.
  return [].concat(...items);
};
// Ejemplo:
console.log('9)', combine([1, 2], 3, [4, 5], 6)); // [1,2,3,4,5,6]

// 10) Ejecutar un callback por cada elemento (no retorna nuevo arreglo).
const forEachDo = (arr, callback) => {
  // Pasos: 1) Llamar forEach con el callback. 2) No retornar nada.
  arr.forEach(callback);
};
// Ejemplo:
console.log('10)');
forEachDo(['a', 'b', 'c'], (val, i) => console.log('  idx', i, '->', val));

// 11) Mapear: devolver nuevo arreglo transformado por callback.
const mapTo = (arr, callback) => {
  // Pasos: 1) Usar map y retornar su resultado.
  return arr.map(callback);
};
// Ejemplo:
console.log('11)', mapTo([1, 2, 3], (n) => n * n)); // [1,4,9]

// 12) Filtrar: devolver elementos que cumplan condición del callback.
const filterBy = (arr, callback) => {
  // Pasos: 1) Usar filter y retornar su resultado.
  return arr.filter(callback);
};
// Ejemplo:
console.log('12)', filterBy([1, 2, 3, 4, 5], (n) => n % 2 === 0)); // [2,4]

// 13) Reducir: acumular a un solo valor usando callback y valor inicial opcional.
const reduceTo = (arr, callback, initialValue) => {
  // Pasos:
  // 1) Si se provee initialValue, usar reduce(arr, callback, initialValue).
  // 2) Si no, usar reduce(arr, callback).
  return initialValue !== undefined
    ? arr.reduce(callback, initialValue)
    : arr.reduce(callback);
};
// Ejemplo (suma sin inicial):
console.log('13)', reduceTo([1, 2, 3, 4], (acc, n) => acc + n)); // 10
// Ejemplo (suma con inicial 10):
console.log('13)', reduceTo([1, 2, 3, 4], (acc, n) => acc + n, 10)); // 20

// -----------------------
// Instrucciones rápidas:
// 1) Guarda este archivo como 'ejercicios_e7.js'.
// 2) Para probar: abre una terminal y ejecuta `node ejercicios_e7.js` (si tienes Node.js).
//    O pégalo en la consola del navegador (F12) y mira los console.log.
// 3) Si lo subes a GitHub, usa el mensaje de commit sugerido por la guía del curso.

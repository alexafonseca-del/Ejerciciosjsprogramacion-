// Ejemplos de Clase Practica e13

// Ejercicio 1

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acc, num) => acc + num, 0);

console.log(suma); // 15


const productos = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Pantalón", precio: 30 },
{ nombre: "Zapatos", precio: 50 }
];

const total = productos.reduce((acc, prod) => acc + prod.precio, 0);

console.log(total); // 100

// Ejercicio 2

const nombres = ["Ana", "Luis", "Pedro", "María"];

const encontrado = nombres.find(nombre => nombre.startsWith("P"));

console.log(encontrado); // "Pedro"

const usuarios = [
{ id: 1, nombre: "Carlos" },
{ id: 2, nombre: "Lucía" },
{ id: 3, nombre: "Marta" }
];

const usuario = usuarios.find(u => u.id === 2);

console.log(usuario); // { id: 2, nombre: "Lucía" }

// Ejercicio 3

const edades = [18, 22, 30, 25];

const todosMayores = edades.every(edad => edad >= 18);

console.log(todosMayores); // true

const tareas = [
{ nombre: "Estudiar", completada: true },
{ nombre: "Ejercicio", completada: true },
{ nombre: "Leer", completada: false }
];

const todasCompletas = tareas.every(t => t.completada === true);

console.log(todasCompletas); // false

// Ejercicio 4

const notas = [5, 8, 9, 3];

const hayReprobados = notas.some(nota => nota < 6);

console.log(hayReprobados); // true

const inventario = [
{ producto: "Manzanas", cantidad: 0 },
{ producto: "Naranjas", cantidad: 10 },
{ producto: "Peras", cantidad: 3 }
];

const agotado = inventario.some(item => item.cantidad === 0);

console.log(agotado); // true

// Ejercicio 5

const numero = [5, 10, 15, 20, 25];

const mayoresQue15 = numero.filter(num => num > 15);

console.log(mayoresQue15); // [20, 25]


const empleados = [
{ nombre: "Ana", puesto: "Desarrolladora" },
{ nombre: "Luis", puesto: "Diseñador" },
{ nombre: "Marta", puesto: "Desarrolladora" }
];

const desarrolladores = empleados.filter(e => e.puesto === "Desarrolladora");

console.log(desarrolladores);
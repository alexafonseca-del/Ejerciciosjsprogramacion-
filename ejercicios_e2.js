
// =======================================
// Ejercicios de Programación Estructurada - E2
// Autor: Alexa  Sarai Fonseca Castilla 
// =======================================

// 1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.
let nombre = "Alexa Fonseca";
console.log(nombre);

// 2. Declara dos variables edad y ciudad y muéstralas juntas en un solo console.log.
let edad = 20;
let ciudad = "Juigalpa";
console.log("Edad:", edad, "- Ciudad:", ciudad);

// 3. Declara una constante PI con el valor 3.1416 y muéstrala en consola.
const PI = 3.1416;
console.log("PI:", PI);

// 4. Declara tres variables con valores numéricos y calcula su promedio.
let num1 = 10, num2 = 20, num3 = 30;
let promedio = (num1 + num2 + num3) / 3;
console.log("Promedio:", promedio);

// 5. Declara una variable esMayorDeEdad con un valor booleano y muéstrala.
let esMayorDeEdad = true;
console.log("¿Es mayor de edad?:", esMayorDeEdad);

// 6. Declara dos números y muestra su suma.er
let a = 8, b = 5;
console.log("Suma:", a + b);

// 7. Declara dos números y muestra su resta, multiplicación y división.
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);

// 8. Declara dos números y muestra el resultado de elevar el primero al segundo.
console.log("Potencia:", a ** b);

// 9. Declara una variable precio y otra descuento (en %) y calcula el precio final.
let precio = 100;
let descuento = 20; // en porcentaje
let precioFinal = precio - (precio * descuento / 100);
console.log("Precio final:", precioFinal);

// 10. Usando un for, muestra en consola los números del 1 al 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 11. Usando un for, muestra en consola la tabla de multiplicar del 5.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 12. Usando un while, muestra en consola los números pares del 2 al 20.
let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
}

// 13. Crea una función saludar que reciba un nombre y muestre un saludo.
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}
saludar("Alexa");

// 14. Crea una función sumar que reciba dos números y retorne su suma.
function sumar(x, y) {
    return x + y;
}
console.log("Suma función:", sumar(4, 6));

// 15. Crea una función esPar que reciba un número y retorne true si es par, false si no lo es.
function esPar(numero) {
    return numero % 2 === 0;
}
console.log("¿Es par?:", esPar(4));

// 16. Crea una función areaRectangulo que reciba base y altura y retorne su área.
function areaRectangulo(base, altura) {
    return base * altura;
}
console.log("Área rectángulo:", areaRectangulo(5, 3));

// 17. Crea una función flecha multiplicar que reciba dos números y retorne su producto.
const multiplicar = (x, y) => x * y;
console.log("Multiplicación flecha:", multiplicar(3, 4));

// 18. Crea una función flecha convertirCelsiusAFahrenheit que reciba grados Celsius y retorne su equivalente en Fahrenheit.
const convertirCelsiusAFahrenheit = celsius => (celsius * 9/5) + 32;
console.log("Celsius a Fahrenheit:", convertirCelsiusAFahrenheit(25));

// 19. Crea una función flecha mayorDeDos que reciba dos números y retorne el mayor.
const mayorDeDos = (x, y) => x > y ? x : y;
console.log("Mayor de dos:", mayorDeDos(8, 12));

// 20. Crea una función flecha calcularIVA que reciba un precio y retorne el precio más IVA (15%).
const calcularIVA = precio => precio + (precio * 0.15);
console.log("Precio con IVA:", calcularIVA(100));

// 21. Declara un arreglo con 5 nombres y recórrelo con un for mostrando cada nombre.
let nombres = ["Ana", "Luis", "Pedro", "María", "Sofía"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 22. Declara un arreglo con 5 números y usa un for para mostrar solo los números mayores que 10.
let numeros = [5, 15, 8, 20, 12];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(numeros[i]);
    }
}

// 23. Declara un arreglo con 5 palabras y usa un for para mostrar su longitud (.length).
let palabras = ["Hola", "Programación", "JS", "Código", "Estructura"];
for (let i = 0; i < palabras.length; i++) {
    console.log(`"${palabras[i]}" tiene ${palabras[i].length} letras`);
}

// 24. Declara un objeto persona con propiedades nombre, edad y ciudad. Usa un for...in para mostrar cada clave y valor.
let persona = {
    nombre: "Alexa",
    edad: 20,
    ciudad: "Juigalpa"
};
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// 25. Declara un arreglo de objetos con 3 productos (nombre y precio) y usa un for para mostrar solo los nombres de los productos.
let productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 35 }
];
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre);
}

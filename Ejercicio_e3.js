// 1 Función anónima asignada a una variable

const sumar = function(a, b) {
return a + b;
};
console.log(sumar(5, 3));


// 2 Función con asignación de nombre

function sumar (a, b) {
return a + b;
};
console.log(sumar(3, 4));

// 3 Sintaxis Normal 

const multiplicar = function(a, b) {
return a * b;
};


// Funcion flecha
const multiplicarFlecha = (a, b) => a * b;

// Funcion flecha completa
const multiplicarFlechaCompleta = (a, b) => {
    return a * b;
}
console.log(multiplicar(2, 3));
console.log(multiplicarFlecha(2, 3));
console.log(multiplicarFlechaCompleta(2, 3));

// Estructura de control anidadas 

const edad = 21 ;
const tieneID = true;

if (edad >= 18) {
  if (tieneID) {
    console.log("Acceso permitido");
  } else {
    console.log("Necesitas identificación");
  }
} else {
  console.log("Eres menor de edad");
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

try {
  // Aquí va el código que podría fallar
} catch (error) {
  // Aquí se maneja el error si ocurre
}

try {
  let numero = parseInt("abc"); // Esto no genera error, da NaN
  console.log(numero.toFixed(2));
  // ❌ Error: no se puede usar toFixed en NaN
} catch (error) {
  console.log("Ocurrió un error:", error.message);
}

try {
  console.log("Intentando dividir...");
  let resultado = 10 / 0; // No error real, da Infinity
  console.log(resultado);
} catch (error) {
  console.log("Error atrapado:", error.message);
} finally {
  console.log("Fin del bloque");
}

function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir entre 0");
    }
    return a / b;
  } catch (error) {
    return "Error: " + error.message;
  }
}
console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // Error: No se puede dividir entre 0

const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // "rojo"
console.log(colores[2]); // "azul"

const personas = {
  nombre: "Ana",
  hobbies: ["leer", "pintar", "correr"],
};

console.log(persona.hobbies[1]); // "pintar"


const personas1 = [
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 25 },
];
console.log(personas1[0].nombre); // "Luis"
console.log(personas1[1].edad); // 25

const usuario = { nombre: "Carlos", edad: 28 };

console.log(usuario.nombre); // "Carlos"
console.log(usuario.edad); // 28

const cliente = { nombre: "Ana", "correo": "ana@mail.com" };

console.log(cliente["nombre"]); // "Ana"
console.log(cliente["correo"]); // "ana@mail.com"

const empresa = {
  nombre: "TechCorp",
  empleados: [
    {
      nombre: "Ana",
      direccion: { ciudad: "Madrid", codigoPostal: 28001 },
    },
    {
      nombre: "Luis",
      direccion: { ciudad: "Barcelona", codigoPostal: 55000 },
    },
  ],
};
// Ejemplos de acceso
console.log(empresa.empleados[0].nombre);
// "Ana"
console.log(empresa.empleados[1].direccion.ciudad);
// "Barcelona"
console.log(empresa.empleados[0]["direccion"]["codigoPostal"]);
// 28001
// El último también se puede escribir de esta forma:
console.log(empresa.empleados[0].direccion.codigoPostal);




// Aisgnacion Individual 
// Analice y codifique el siguiente objeto

const persona = {
  nombre: "Alexa",
  edad: 22,
  direccion: {
  ciudad: "Juigalpa",
  codigoPostal: 55000,
  },
  hobbies: ["Jugar", "Comer", "Dormir"],
};


// Cree funciones flecha que reciban ese objeto por parámetro e impriman lo siguiente

const imprimirNombre = () => {
  console.log(`Nombre: ${persona.nombre}`);
};

const imprimirEdad = () => {
  console.log(`Edad: ${persona.edad}`);
};

const imprimirCiudad = () => {
  console.log(`Ciudad: ${persona.direccion.ciudad}`);
};

const imprimirCodigoPostal = () => {
  console.log(`Código Postal: ${persona["direccion"]["codigoPostal"]}`);
};

const imprimirSegundoHobby = () => {
  console.log(`Segundo hobby: ${persona.hobbies[1]}`);
};

imprimirNombre(persona);
imprimirEdad(persona);
imprimirCiudad(persona);
imprimirCodigoPostal(persona);
imprimirSegundoHobby(persona);
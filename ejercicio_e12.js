const mascotas = [
    { nombre: "Luna", edad: 3, tipo: "Perro", peso: 10.5 },
    { nombre: "Max", edad: 5, tipo: "Gato", peso: 4.2 },
    { nombre: "Coco", edad: 1, tipo: "Conejo", peso: 2.3 },
    { nombre: "Rocky", edad: 7, tipo: "Perro", peso: 15.8 },
    { nombre: "Milo", edad: 2, tipo: "Gato", peso: 3.9 },
    { nombre: "Bella", edad: 4, tipo: "Perro", peso: 8.7 },
    { nombre: "Toby", edad: 6, tipo: "Conejo", peso: 2.8 },
    { nombre: "Simba", edad: 3, tipo: "Gato", peso: 5.1 },
    { nombre: "Nala", edad: 2, tipo: "Perro", peso: 12.4 },
    { nombre: "Oreo", edad: 5, tipo: "Gato", peso: 4.8 },
    { nombre: "Daisy", edad: 1, tipo: "Conejo", peso: 1.9 },
    { nombre: "Zeus", edad: 8, tipo: "Perro", peso: 20.1 },
    { nombre: "Mimi", edad: 4, tipo: "Gato", peso: 4.5 },
    { nombre: "Bunny", edad: 3, tipo: "Conejo", peso: 2.5 },
    { nombre: "Thor", edad: 6, tipo: "Perro", peso: 18.3 }
];

// 1. Ordenar por edad ascendente
const porEdadAsc = [...mascotas].sort((a, b) => a.edad - b.edad);

// 2. Ordenar por nombre alfabéticamente
const porNombre = [...mascotas].sort((a, b) => a.nombre.localeCompare(b.nombre));

// 3. Ordenar por peso descendente
const porPesoDesc = [...mascotas].sort((a, b) => b.peso - a.peso);

// 4. Ordenar por tipo alfabéticamente y luego por edad ascendente
const porTipoYEdad = [...mascotas].sort((a, b) => {
    if (a.tipo === b.tipo) {
        return a.edad - b.edad;
    }
    return a.tipo.localeCompare(b.tipo);
});

// 5. Invertir el orden del arreglo
const invertido = [...mascotas].reverse();

// 6. Crear un nuevo arreglo con nombres en mayúsculas
const nombresMayus = mascotas.map(m => m.nombre.toUpperCase());

// 7. Calcular el peso total de todas las mascotas
const pesoTotal = mascotas.reduce((total, m) => total + m.peso, 0);

// 8. Crear un nuevo arreglo con solo los perros
const soloPerros = mascotas.filter(m => m.tipo === "Perro");

console.log("Por edad ascendente:", porEdadAsc);
console.log("Por nombre:", porNombre);
console.log("Por peso descendente:", porPesoDesc);
console.log("Por tipo y edad:", porTipoYEdad);
console.log("Invertido:", invertido);
console.log("Nombres en mayúsculas:", nombresMayus);
console.log("Peso total:", pesoTotal);
console.log("Solo perros:", soloPerros);
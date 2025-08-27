const universidad = {
  nombre: "Universidad Central",
  ubicacion: {
    ciudad: "Sevilla",
    direccion: {
      calle: "Av. Principal",
      numero: 123
    }
  },
  facultades: [
    {
      nombre: "Ingeniería",
      carreras: [
        {
          nombre: "Informática",
          estudiantes: [
            { nombre: "Laura", edad: 20, hobbies: ["programar", "ajedrez"] },
            { nombre: "Javier", edad: 22, hobbies: ["fútbol", "cine"] }
          ]
        },
        {
          nombre: "Civil",
          estudiantes: [
            { nombre: "Sofía", edad: 21, hobbies: ["fotografía", "leer"] }
          ]
        }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        {
          nombre: "Derecho Penal",
          estudiantes: [
            { nombre: "Andrés", edad: 23, hobbies: ["debate", "natación"] }
          ]
        }
      ]
    }
  ]
};

// Muestra el nombre de la universidad.

const nombreUniversidad = nivers.nombre;
console.log(nombreUniversidad); // "Universidad Central"

// Muestra la calle donde esta ubicada 

const calleUniversidad = universidad.ubicacion.direccion.calle;
console.log(calleUniversidad); // "Av. Principal"

// Muestar el nombre de la primera facultad.

const nombrePrimeraFacultad = universidad.facultades[0].nombre;
console.log(nombrePrimeraFacultad); // "Ingeniería" 
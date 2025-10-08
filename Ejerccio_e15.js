function busquedaLineal(arr,valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i;
        }
    }

    return -1;
}
let numero = [8,3,10,5,2];

console.log(busquedaLineal(numeros,10)) //2
console.log(busquedaLineal(numeros,10)) //-1





function busquedaBinaria(arr, valor) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    // Comparar el valor del medio con el buscado
    if (arr[medio] === valor) {
      return medio;
    } else {
      // Si no son iguales, decidir por qué lado seguir buscando
      if (arr[medio] < valor) {
        inicio = medio + 1;
      } else {
        fin = medio - 1;
      }
    }
  }

  // Si el bucle termina, significa que no se encontró el valor
  return -1;
}

// Ejemplo
let numeros = [2, 5, 8, 10, 15, 20]; // debe estar ordenado
console.log(busquedaBinaria(numeros, 10)); // 3
console.log(busquedaBinaria(numeros, 9));  // -1





function busquedaLineal(arr, valor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      return i; // índice encontrado
    }
  }
  return -1;
}



let letra = ["a", "c", "d", "f", "g"];
console.log(busquedaLineal(letras, "f")); // 3
console.log(busquedaLineal(letras, "z")); // -1


function busquedaBinaria(arr, valor) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === valor) {
      return medio;
    } else {
      if (arr[medio] < valor) {
        inicio = medio + 1; // buscar en la derecha
      } else {
        fin = medio - 1; // buscar en la izquierda
      }
    }
  }

  return -1;
}

let letras = ["a", "b", "c", "d", "e", "f"]; // ordenadas
console.log(busquedaBinaria(letras, "d")); // 3
console.log(busquedaBinaria(letras, "z")); // -1

// Problema 4: Eliminar elementos de una lista

// λ #1: eliminar = λlista.λborrar. ...
const eliminar = (lista, borrar) =>
  lista.filter(
    // λ #2: λx. !borrar.includes(x)
    // filter la aplica a cada elemento de la lista
    // Si devuelve true el elemento se queda, si devuelve false pues se elimina
    x => !borrar.includes(x)
  );

const colores = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];

// 'cafe' no está en la lista original, así que simplemente se debe ignora
console.log(eliminar(colores, ['amarillo', 'cafe', 'blanco']));
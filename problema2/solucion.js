// Problema 2: Ordenar una lista de objetos por una clave específica

// #Notita: en JavaScript  x => M  equivale a  λx.M  (abstracción lambda)

// λ #1: ordenarPor = λlista.λkey. ...   (función con nombre guardada en una constante)

const ordenarPor = (lista, key) =>
  [...lista].sort(
    // λ #2: función si nombre  λa.λb. (compara a y b por la clave)
    (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    // Cada aplicación es una β-reducción:
    // (λa.λb. M) x y  →β  M[x/a][y/b]
  );

const telefonos = [
  { make: 'Nokia',   model: 216, color: 'Black' },
  { make: 'Mi Max',  model: 2,   color: 'Gold'  },
  { make: 'Samsung', model: 7,   color: 'Blue'  },
];

console.log(ordenarPor(telefonos, 'model'));
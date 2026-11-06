// Problema 3: Transponer una matriz

// λ #1: transpuesta = λX. ...
const transpuesta = X =>
  X[0].map(
    // λ #2: λj. ...  se aplica a cada posición de la primera fila (j = 0, 1, 2)
    // "_" es el elemento, que no usamos ya que solo necesitamos el índice j
    (_, j) =>
      X.map(
        // λ #3: λfila. fila[j]   toma el elemento de la columna j de cada fila
        // Esta lambda usa la variable j de la lambda de afuera
        fila => fila[j]
      )
  );

const X = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(transpuesta(X));
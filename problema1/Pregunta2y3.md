## Recursión y ciclos en cálculo lambda

**Recursión:** una función que se llama a sí misma con un valor más pequeño hasta llegar a un
**caso base**, donde se detiene. En lambda las funciones no tienen nombre, así que se usa el
combinador de punto fijo **Y** (o **Z** en lenguajes estrictos como JavaScript), que le da a la
función una forma de llamarse a sí misma.

**Ciclos:** en lambda puro no existen `for` ni `while`. Todo ciclo es una recursión: cada "vuelta"
es una nueva llamada, y el estado (contador, acumulador) viaja como argumentos nuevos en vez de
modificarse.

```js
const Z = f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v)));

// Recursión: factorial
const fact = Z(rec => n => n === 0 ? 1 : n * rec(n - 1));
fact(3);          // 6

// Ciclo: suma 1..3 con acumulador (equivale a un while)
const suma = Z(rec => n => acc => n === 0 ? acc : rec(n - 1)(acc + n));
suma(3)(0);       // 6
```

## ¿Cuándo usarlo y cuándo no?

**Cuándo NO es prudente**

- **Recursión muy profunda:** cada llamada consume memoria de la pila (stack). Con muchos datos
  se produce desbordamiento (`RangeError: Maximum call stack size exceeded`).
  Ejemplo: sumar del 1 al 1,000,000 recursivamente falla. Un for lo hace sin problema.
- **Rendimiento crítico:** JavaScript y Python no optimizan la recursión de cola, así que un
  ciclo normal es más rápido y gasta menos memoria.
- **Estado mutable natural:** interfaces gráficas, juegos y simulaciones se escriben más claro
  con variables que cambian.

**Cuándo SÍ es prudente**

- **Paralelismo y concurrencia:** las funciones puras no modifican variables compartidas, así que
  no hay condiciones de carrera y se pueden repartir entre varios núcleos o máquinas.
  Ejemplo: MapReduce, o un map que procesa millones de registros en paralelo.
- **Divide y vencerás:** problemas que se parten en subproblemas independientes, como
  merge sort, que ordena cada mitad en paralelo y luego las une.
- **Estructuras recursivas:** recorrer árboles, expresiones o directorios, donde el código
  sigue la forma del dato.
- **Transformar datos:** `map`, `filter` y `reduce` expresan la intención en pocas líneas.

**Conclusión:** la recursión pura casi no se usa para ciclos simples porque un for es mucho más
eficiente, pero el estilo funcional (funciones puras, sin estado compartido) es muy valioso
cuando hay paralelismo o estructuras recursivas.
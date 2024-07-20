function generarNumerosAleatorios() {
  const numerosAleatorios = [];
  for (let i = 0; i < 10000; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    numerosAleatorios.push(numeroAleatorio);
  }
  return numerosAleatorios;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function medirTiempoDeEjecucion(func, arr) {
  const t0 = performance.now();
  const resultado = func(arr);
  const t1 = performance.now();
  return { tiempo: t1 - t0, resultado };
}

const arrayNumeros = generarNumerosAleatorios();
console.log("Antes de ordenar:", arrayNumeros);

const { tiempo: tiempoEjecucion, resultado: arrayOrdenado } =
  medirTiempoDeEjecucion(mergeSort, arrayNumeros);
console.log(
  `Tiempo de ejecución del Merge Sort: ${tiempoEjecucion} milisegundos`
);

console.log("Después de ordenar:", arrayOrdenado);

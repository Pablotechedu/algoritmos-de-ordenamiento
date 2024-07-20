function generarNumerosAleatorios() {
  const numerosAleatorios = [];
  for (let i = 0; i < 10000; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    numerosAleatorios.push(numeroAleatorio);
  }
  return numerosAleatorios;
}

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
}

function medirTiempoDeEjecucion(func, arr) {
  const t0 = performance.now();
  func(arr);
  const t1 = performance.now();
  return t1 - t0;
}

const arrayNumeros = generarNumerosAleatorios();
console.log("Antes de ordenar:", arrayNumeros);

const tiempoEjecucion = medirTiempoDeEjecucion(bubbleSort, arrayNumeros);
console.log(
  `Tiempo de ejecución del Bubble Sort: ${tiempoEjecucion} milisegundos`
);

const arrayOrdenado = bubbleSort(arrayNumeros);
console.log("Después de ordenar:", arrayOrdenado);

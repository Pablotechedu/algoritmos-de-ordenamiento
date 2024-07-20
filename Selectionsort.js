function generarNumerosAleatorios() {
  const numerosAleatorios = [];
  for (let i = 0; i < 10000; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    numerosAleatorios.push(numeroAleatorio);
  }
  return numerosAleatorios;
}

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
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

const tiempoEjecucion = medirTiempoDeEjecucion(selectionSort, arrayNumeros);
console.log(
  `Tiempo de ejecución del Selection Sort: ${tiempoEjecucion} milisegundos`
);

const arrayOrdenado = selectionSort(arrayNumeros);
console.log("Después de ordenar:", arrayOrdenado);

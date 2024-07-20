function generarNumerosAleatorios() {
  const numerosAleatorios = [];
  for (let i = 0; i < 10000; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    numerosAleatorios.push(numeroAleatorio);
  }
  return numerosAleatorios;
}

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
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

const tiempoEjecucion = medirTiempoDeEjecucion(insertionSort, arrayNumeros);
console.log(
  `Tiempo de ejecución del Insertion Sort: ${tiempoEjecucion} milisegundos`
);

const arrayOrdenado = insertionSort(arrayNumeros);
console.log("Después de ordenar:", arrayOrdenado);

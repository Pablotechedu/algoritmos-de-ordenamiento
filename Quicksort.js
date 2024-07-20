function generarNumerosAleatorios() {
  const numerosAleatorios = [];
  for (let i = 0; i < 10000; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    numerosAleatorios.push(numeroAleatorio);
  }
  return numerosAleatorios;
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (let num of arr) {
    if (num < pivot) {
      left.push(num);
    } else if (num > pivot) {
      right.push(num);
    } else {
      equal.push(num);
    }
  }

  return quickSort(left).concat(equal).concat(quickSort(right));
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
  medirTiempoDeEjecucion(quickSort, arrayNumeros);
console.log(
  `Tiempo de ejecución del Quick Sort: ${tiempoEjecucion} milisegundos`
);

console.log("Después de ordenar:", arrayOrdenado);

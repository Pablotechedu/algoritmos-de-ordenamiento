function NumerosAleatorios() {
  const cantidadNumeros = 10000;
  const maxNumero = 10000;
  const numerosAleatorios = [];

  for (let i = 0; i < cantidadNumeros; i++) {
    const numeroAleatorio = Math.floor(Math.random() * (maxNumero + 1));
    numerosAleatorios.push(numeroAleatorio);
  }

  return numerosAleatorios;
}

const arrayDeNumerosAleatorios = NumerosAleatorios();
console.log(arrayDeNumerosAleatorios);

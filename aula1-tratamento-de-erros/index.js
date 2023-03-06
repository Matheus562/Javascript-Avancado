function sum(a, b) {
  const firstNumber = Number(a);
  const secondNumber = Number(b);

  //se os argumentos não forem numeros válidos (NaN) lança o erro
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new Error("arguments must be two numbers"); //throw = lançar
  }

  return firstNumber + secondNumber;
}

//try = tentar; tenta executar o codigo, se der um erro aciona o catch. finally sempre vai rodar
try {
  console.log(sum(2, 9));
  console.log(sum(true, 14));
  console.log(sum(undefined, 22));
  console.log(sum(18, "0"));
  console.log(sum(39, null));
  console.log(sum(13, "zero"));
} catch (error) {
  console.log("An error ocurred!");
  console.log(error.message);
} finally {
  console.log("Calculations finished!");
}

function PhoneNumber(phoneNumberString) {
  //replace = substituir parte da string. \s = tira todos espaços, a-zA-Z pega todas as letras minusculas e maiusculas de A a Z, g percorre toda a string e substitui por um valor vazio ""
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "");
  //(?<=\+) =  positive look behind olhar para tras do caracter ate encontrar um +, \d encontrando na frente do + caracteres do tipo numerico pegando de 1 a 3 numeros, indice 0
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
  //(?<=) look behind olhando o parentese que está na parte de tras e (?=)  positive look ahead pegando os parenteses que estiver depois dos caracteres
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];
  // (/(?<=\)).+/) pega todos caracteres do tipo numerico depois do fechamento do parentese. (/-/g, "") Exclui todos os -
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "");
}
console.log(new PhoneNumber("+55 (22) 9 9876-5432"));
console.log(new PhoneNumber("+1 (55) as555-999-8888"));

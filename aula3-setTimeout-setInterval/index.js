console.log("Programa iniciado!");

/*setTimeout
const timeoutId = setTimeout(() => {
  console.log("3 segundos se passaram desde que o programa foi iniciado");
}, 1000 * 3 //3 segundos);

//O prorama não irá mais esperar os 3 segundos
//clearTimeout(timeoutId)
*/

//setInterval
//Executa o codigo diversas vezes
let seconds = 0;
const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} seguidos.`);
  if (seconds > 10) {
    clearInterval(intervalId);
    console.log("Tempo esgotado! Encerrando...");
  }
}, 1000 * 3); //ctrl + c para

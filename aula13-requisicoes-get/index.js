//Renderizar as funções na tela
function createCountryCard(country) {
  //Criando uma div
  const card = document.createElement("div");
  //adcionando uma classe na div
  card.classList.add("country");

  //acessar o nome do país
  //criando h2
  const name = document.createElement("h2");
  const countryName = country.name.common;
  name.textContent = countryName;

  //renderizar a bandeira
  //criando tag img
  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  //texto caso a imagem não apareça
  flag.alt = countryName;

  //renderizar na tela
  card.append(name, flag);

  document.querySelector("#countries").append(card);
}

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  countries.forEach(createCountryCard);
}
getCountries();

const aplicacion = document.querySelector('.container')
let digimons = [];
let nombrePersonaje;
const monos = [];

const url = `https://digimon-api.vercel.app/api/digimon/`

fetch(url)
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    // const img = document.querySelector('img')
    // img.src = data[0].img

    digimons = data;


    // digimons = data;


    console.log(digimons)

    cargarPersonajes();
  })

let cargarPersonajes = function () {
  nombrePersonaje = '';
  digimons.forEach(personaje => {
    nombrePersonaje += '<div class="card-container">' +
      '<a href="javascript:abrirModal(' + personaje.img + ')" class="hero-image-container" >' +
      '<img  class="hero-image" src="' + personaje.img + '" alt="' + personaje.name + '"/>' +
      '</a>' +
      '<main class="main-content">' +
      '  <h2>' + personaje.name + '</h2>' +
      '  <p> Estado : ' + personaje.level + '</p>' +
      ' </main>' +
      '</div>'
  });
  document.getElementById('datosPersonaje').innerHTML = nombrePersonaje;
}




function myFunction() {
  var input, filter, section, div, h1, i;
  input = document.getElementById("#formulario");
  filter = input.value.toUpperCase();
  section = document.getElementById("#boton");
  div = section.getElementsByTagName("div");
  for (i = 0; i < digimons[i].length; i++) {
    h1 = div[i].getElementsByTagName("#resultado")[0];
    if (h1) {
      if (h1.innerHTML.toUpperCase().indexOf(filter) > -1) {
        div[i].style.display = "";
      } else {
        div[i].style.display = "none";
      }
    }
  }
}
const aplicacion = document.querySelector('.container')
let digimons = [];
let nombrePersonaje;

const url = `https://digimon-api.vercel.app/api/digimon/`

fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        // const img = document.querySelector('img')
        // img.src = data[0].img
       
           digimons = data;
        

        console.log(digimons)
        cargarPersonajes();
    })       
  
    let cargarPersonajes = function(){
        nombrePersonaje = '';
        digimons.forEach(personaje => {
          nombrePersonaje += '<div class="card-container">' +
            '<a href="javascript:abrirModal('+personaje.img+')" class="hero-image-container" >' +
            '<img class="hero-image" src="' + personaje.img + '" alt="' + personaje.name + '"/>' +
            '</a>' +
            '<main class="main-content">' +
            '  <h2>' + personaje.name + '</h2>' +
            '  <p> Estado : ' + personaje.level + '</p>' +
            ' </main>' +
            '</div>'
        });
        document.getElementById('datosPersonaje').innerHTML = nombrePersonaje;
      }
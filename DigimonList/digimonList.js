// Variables globales
let digimonList = [];
let currentDigimon = null;

// Función para obtener el listado de Digimon desde la API
async function getDigimonList() {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    const data = await response.json();
    digimonList = data;
    displayDigimonList();
}

// Función para mostrar el listado de Digimon en la página
function displayDigimonList() {
    // Seleccionar el elemento al que queremos desplazarnos
    const sectionToScroll = document.querySelector('#digimon-details');

    const digimonListElement = document.getElementById('digimon-list');
    digimonListElement.innerHTML = '';
    for (let i = 0; i < digimonList.length; i++) {
        const digimon = digimonList[i];
        const digimonElement = document.createElement('li');
        const digimonLink = document.createElement('a');
        digimonLink.style.backgroundImage = `url(${digimon.img})`;
        digimonLink.addEventListener('click', () => showDigimonDetails(digimon));
        digimonLink.addEventListener('click', () => sectionToScroll.scrollIntoView({
            behavior: 'smooth'
        }));
        digimonElement.appendChild(digimonLink);
        digimonListElement.appendChild(digimonElement);
    }
}

// Función para mostrar los detalles de un Digimon en la página
function showDigimonDetails(digimon) {
    currentDigimon = digimon;
    const digimonDetailsElement = document.getElementById('digimon-details');
    const digimonImageElement = document.getElementById('digimon-image');
    const digimonNameElement = document.getElementById('digimon-name');
    const digimonLevelElement = document.getElementById('digimon-level');
    digimonImageElement.style.backgroundImage = `url(${digimon.img})`;
    digimonNameElement.textContent = digimon.name;
    digimonLevelElement.textContent = `Level: ${digimon.level}`;
    digimonDetailsElement.style.display = 'block';

}

// Función para inicializar la página
function init() {
    getDigimonList();
}

// Inicializar la página al cargar
window.addEventListener('load', init);
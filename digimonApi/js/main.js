
fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(data => {
        for (const post of data) { // capturamos cada una de las cosas que tiene data
            $("#table-posts tbody").append(`
                <tr>
                    <td>${post.name}</td>
                    <td> <img src="${post.img}"/></td>
                    <td>${post.level}</td>
                </tr>
            `)
            // console.log(post.name)
        }
    })
    .catch(error => console.error(error));

const searchButton = document.getElementById('btn-buscar');
const searchField = document.getElementById('searchField');
const resultsList = document.getElementById('resultsList');

//función para buscar el digimon por nombre
searchButton.addEventListener('click', (e) => {
    e.preventDefault()
    $("#digimon").addClass("d-none")
    $("#tabla").removeClass("d-none")
    const query = searchField.value;
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${query}`)
        .then(response => response.json())
        .then(data => {
            $("#table-posts tbody").html('');
            data.forEach(post => {
                $("#table-posts tbody").append(`
                <tr>
                    <td>${post.name}</td>
                    <td> <img src="${post.img}"/></td> 
                    <td>${post.level}</td>
                </tr>
            `)
            });
        })
        .catch(error => console.error(error));
});

//función para que muestre los digimon por nivel
function verNivel(nivel) {
    $("#digimon").addClass("d-none") //para que no oculte
    $("#tabla").removeClass("d-none")
    fetch(`https://digimon-api.vercel.app/api/digimon/level/${nivel}`)
        .then(response => response.json())
        .then(data => {
            $("#table-posts tbody").html('');
            data.forEach(post => {
                $("#table-posts tbody").append(`
                <tr>
                    <td>${post.name}</td>
                    <td> <img src="${post.img}"/></td> 
                    <td>${post.level}</td>
                </tr>
            `)
            });
        })
        .catch(error => console.error(error));
}


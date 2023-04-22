const aplicacion = document.querySelector('.container')


const url = `https://digimon-api.vercel.app/api/digimon/`

fetch(url)
    .then(response => response.json())
    .then(data => {
        for (const key in data) {
            console.log(key);
            console.log(data[key])
            console.log(data[key].name)
            console.log(data[key].img)
            console.log(data[key].level)


            // digimons = data[key]

            for (var i = 0; i <= 10; i++) {
                $("#tabla-posts").append(`
             <tr>
                 <td>${data[key].name}</td>
                 <td>${data.img}</td>
                 <td>${data[key].level}</td>
             </tr>
            
            
            `)

            }

        }

    })
const aplicacion = document.querySelector('.container')


const url = `https://digimon-api.vercel.app/api/digimon/`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const img = document.querySelector('img')
        img.src = data[0].img

        // const h5 = document.querySelector('h5')
        // h5 = data[0].name

        // for (const key in data) {
        //     console.log(key);
        //     console.log(data[key])
        //     console.log(data[key].name)
        //     console.log(data[key].img)
        //     console.log(data[key].level)


        //     $("#card").append(`

        //          <h5>${data[key].name}</h5>
        //          <img>${data[key].img}</img>
        //          <card-text">${data[key].level}</p>



        //     `)
        // }


    })
// Par default afficher la température de la ville de l'utilisateur en utilisant l'PAi d'openweather https://api.openweathermap.org/data/2.5/weather et en utilisant la géolocalisation de l'utilisateur.
let meteo = document.querySelector(".meteo");
let city = document.querySelector(".ville");

let button = document.querySelector(".pouet");
button.addEventListener("click", () => {
    fetchData(prompt("On va ou?"));
});

async function fetchData(ville){
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ville}&appid=1c1284874aeef0dec3346a2d60affe3e&lang=FR`);
        let data = await res.json();
        let tempe = data.main.temp;
        let loc = data.name;
        city.textContent = `Dans la ville de ${loc} !`
        meteo.textContent = `Il fait ${tempe} degrés Celsius`

    } catch(e) {
        console.error(e);
    }
}

// async function fetchData(){
//     try{
//         let res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         let data = await res.json();

//         data.forEach(post =>{
//             console.log(`Post : ${post.id} - ${post.title}`);
//             console.log(post.body);
//             console.log('----------------');
//         });


//     }catch(e){
//         console.error(e);
//     }
// }

// fetchData();
// Puis ajouter un champ de recherche pour que l'utilisateur puisse rentrer le nom d'une ville et afficher la température de cette ville.
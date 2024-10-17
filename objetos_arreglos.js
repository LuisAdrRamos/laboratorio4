// Dependencia necesaria para poder hacer input
// Descargable con el paquete npm install prompt-sync en la terminal
const prompt = require('prompt-sync')({sigint: true});

//Objetos
const film = {
    tittle: 'Interstellar',
    year: 2014,
    duration: '2h 49min',
    score: '8.7/10',
    production: {
        director: "Christopher Nolan",
        mainCast: ["Matthew McConaughey", " Anne Hathaway", " Jessica Chastain"]
    },
}

const {tittle, year, duration, score, production} = film; //destructuración
console.log(`Titulo: ${tittle}\nAño: ${year}\nDuración: ${duration}\nPuntuación: ${score}\nReparto Principal: ${production.mainCast}`);

//Arreglos
const peliculas = [
    {
    nombre: "Blade Runner 2049", 
    añoEstreno: 2017, 
    duracion: "2h 44min"
    },
    {
    nombre: "Drive", 
    añoEstreno: 2011, 
    duracion: "1h 40min"
    },
    {
    nombre: "La La Land", 
    añoEstreno: 2016, 
    duracion: "2h 8min"
    }
]

console.log('\n\nPeliculas en stock:\n');
peliculas.forEach((p, i) => {
    console.log(`\t${i+1}) ${p.nombre}\n`);
})


const peliculas2= ["Blade Runner 2049", "Drive", "La La Land"];

peliculas2.push("Olvidate de mi") //Agregar elemento al final
peliculas2.unshift("500 days of summer") //Agregar elemento al inicio

console.log('\n\nPeliculas en stock:');
console.log(peliculas2)


peliculas2.pop() //Elimina el último elemento
peliculas2.shift() //Elimina el primer elemento 

console.log('\n\nPeliculas en Stock:');
console.log(peliculas2,'\n')

const peli = prompt('¿Que pelicula buscas?: ');
const peliculaEncontrada = peliculas2.find(p => p === peli); // .find busca el elemento en el arreglo
peliculaEncontrada ? console.log("\tPelicula Disponible\n") : console.log("\tPelicula no existente\n");

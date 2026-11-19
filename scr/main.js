import { getAll } from './services/serieService.js'
import { afficheSerie, afficheOptions } from './ui/cards.js'

const serieSection = document.querySelector('#series-section');


const data = await getAll();

let series = [...data];

console.log(series)

for (const key of Object.keys(series[0])){
    console.log(key);
}



console.log(series[0].genres)
console.log(series[0].image.medium)

for (const serie of series) {
    console.log(serie.genres)
    console.log(serie.image.medium)
    serieSection.append(afficheSerie(serie));
}
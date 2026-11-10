import { series } from "./fetch.js";
import { afficheSerie } from "./affichage.js"
// import { data } from "./data.js";

console.log(series);
// console.log(data);


const seriesSection = document.querySelector('#series-section');
const seriesLength = document.querySelector('#series-length');

seriesLength.textContent = `${series.length} séries affichées`;
seriesLength.className = 'text-[#BABABA] font-extralight mt-4';

for (let i = 0; i <= 20; i++){
    seriesSection.append(afficheSerie(series[i]));
}

const nom = document.querySelector('#input-nom');
const genre = document.querySelector('#input-genre');
const description = document.querySelector('#input-description');
const ajoutBtn = document.querySelector('#ajout-bouton');


import { afficheSerie } from "./affichage.js"
import { data } from "./data.js";
import { dataGenre } from "./data.js";
import { afficheOptions } from "./affichage.js";


const genreSelect = document.querySelector('#genre-select');

function genresList(){
    genreSelect.textContent = "";
    const option = document.createElement('option');
    option.value = "Tous les genres";
    option.textContent = "Tous les genres";
    option.selected = true;
    genreSelect.append(option);

    for (let i = 0; i < dataGenre.length; i++)
        genreSelect.append(afficheOptions(dataGenre[i]));
}

const seriesSection = document.querySelector('#series-section');
const seriesLength = document.querySelector('#series-length');

function afficheSeries(){
    seriesSection.textContent = "";
    for (let i = 0; i < data.length; i++){
        seriesSection.append(afficheSerie(data[i]));
    }
    seriesLength.textContent = `${data.length} séries affichées`;
    seriesLength.className = 'text-[#BABABA] font-extralight mt-4';
}


const form = document.querySelector('#formulaire');
const nom = document.querySelector('#input-nom');
const genre = document.querySelector('#input-genre');
const description = document.querySelector('#input-description');
const ajoutBtn = document.querySelector('#ajout-bouton');


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    let genresArr = genre.value.split(",").map(g => g.trim()).filter(g => g !== "");
    for (const genre of genresArr){
        if (!dataGenre.includes(genre)){
            dataGenre.push(genre);
            console.log(genre);
            genresList();
        }
    }

    if (!nom.value || !genresArr.length)
        return;

    let serie = {
        id: Date.now(),
        name: nom.value.trim(),
        genres: genresArr,
        image: './assets/video-player-placeholder-very-large.png',
        summary: description.value.trim()
    };
    data.push(serie);
    afficheSeries();
    form.reset();
})

genresList();
afficheSeries();
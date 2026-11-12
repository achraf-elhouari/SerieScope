import { afficheSerie } from "./affichage.js"
import { data } from "./data.js";
import { dataGenre } from "./data.js";
import { afficheOptions } from "./affichage.js";


const genreSelect = document.querySelector('#genre-select');

function genresList(){
    const choix = genreSelect.value;
    genreSelect.textContent = "";
    const option = document.createElement('option');
    option.value = "Tous les genres";
    option.textContent = "Tous les genres";
    option.selected = true;
    genreSelect.append(option);

    for (let i = 0; i < dataGenre.length; i++)
        genreSelect.append(afficheOptions(dataGenre[i]));
    genreSelect.value = choix || "Tous les genres";
}

const seriesSection = document.querySelector('#series-section');
const seriesLength = document.querySelector('#series-length');

    
function recherche_filtre(data){
    let texte = recherche.value.trim().toLowerCase();
    let genreChoisi = genreSelect.value;
    let finalData = data;

    if (genreChoisi !== "Tous les genres"){
        finalData = data.filter(d => d.genres.includes(genreChoisi));
    }
        
    finalData = finalData.filter(d => d.name.toLowerCase().includes(texte));
    afficheSeries(finalData);
}

function afficheSeries(data){
    seriesSection.textContent = "";
    for (let i = 0; i < data.length; i++){
        seriesSection.append(afficheSerie(data[i]));
    }
    if (!data.length){
        seriesSection.textContent = "";
        seriesLength.textContent = `Aucun séries affichées`;
    }
    else
        seriesLength.textContent = `${data.length} séries affichées`;
    seriesLength.className = 'text-[#BABABA] font-extralight mt-4';
}


const form = document.querySelector('#formulaire');
const nom = document.querySelector('#input-nom');
const genre = document.querySelector('#input-genre');
const description = document.querySelector('#input-description');


form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let genresArr = genre.value.split(",").map(g => g.trim()).filter(g => g !== "");

    if (nom.value.trim() === "" || genresArr.length === 0)
        return;

    for (const g of genresArr){
        if (!dataGenre.includes(g)){
            dataGenre.push(g);
        }
    }
    genresList();

    let serie = {
        id: Date.now(),
        name: nom.value.trim(),
        genres: genresArr,
        image: './assets/video-player-placeholder-very-large.png',
        summary: description.value.trim()
    };
    data.push(serie);
    recherche_filtre(data);
    form.reset();
})

const recherche = document.querySelector('#recherche');
const resetBtn = document.querySelector('#bouton-reinitialiser');

recherche.addEventListener('input', () => recherche_filtre(data));
genreSelect.addEventListener('change', () => recherche_filtre(data));

resetBtn.addEventListener('click', () => {
    recherche.value = "";
    genreSelect.value = "Tous les genres";
    recherche_filtre(data);
})

genresList();
recherche_filtre(data);
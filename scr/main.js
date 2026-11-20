import { getAll, getById, remove } from './services/serieService.js'
import { afficheSerie, afficheOptions } from './ui/cards.js'
import { addSerie, modifySerie } from './ui/form.js';
 
const serieSection = document.querySelector('#series-section');
const formulaire = document.querySelector('#formulaire');
const nom = document.querySelector('#input-nom');
const genre = document.querySelector('#input-genre');
const langue = document.querySelector('#input-langue');
const description = document.querySelector('#input-description');

 
let modifyMode = null;

let series = [];

try {
    const data = await getAll();
    series = [...data];
}
catch (error){
    console.error(error);
}

function affiche(){
    serieSection.textContent = "";
    for (const serie of series) {
        serieSection.append(afficheSerie(serie));
    }
}

formulaire.addEventListener('submit', async function (event){
    event.preventDefault();
    try {
        if (!modifyMode)
            await addSerie(series);
        else {
            await modifySerie(modifyMode.id, modifyMode);
            modifyMode = null;
        }
        affiche();
        formulaire.reset();
    }
    catch (error){
        console.error(error);
    }
})

serieSection.addEventListener('click', async function (event){
    const modifyBtn = event.target.closest('#bouton-modifier');
    const deleteBtn = event.target.closest('#bouton-supprimer');
    const article = event.target.closest('article');

    if (!article || (!modifyBtn && !deleteBtn))
        return;
    
    const serie = series[[...serieSection.children].indexOf(article)];
 
    if (modifyBtn){
        try {
            const target = await getById(serie.id);
            modifyMode = serie;
            nom.value = target.name;
            genre.value = target.genres.join(", ");
            langue.value = target.language;
            description.value = target.language;
            nom.focus();
        }
        catch (error){
            console.error(error);
        }
    }
 
    if (deleteBtn){
        if (!confirm(`Supprimer la série "${serie.name}" ?`))
            return;
        try {
            await remove(serie.id);
            series = series.filter(s => s.id !== serie.id);
            affiche();
        }
        catch (error){
            console.error(error);
        }
    }
})

affiche();
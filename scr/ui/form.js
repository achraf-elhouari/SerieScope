import { create, update, remove } from "../services/serieService.js";

const nom = document.querySelector('#input-nom');
const genre = document.querySelector('#input-genre');
const langue = document.querySelector('#input-langue');
const description = document.querySelector('#input-description');

function getGenre(){
    const genreList = [];
    const genreInput = genre.value.split(',');
    for (const genre of genreInput)
        if (genre.trim() != "")
        genreList.push(genre.trim());
    return genreList;
}

function assignId(series){
    let count = 0;
    for (const serie of series){
        serie.id = ++count;
    }
}

export async function addSerie(series){
    if (!nom || !langue || !getGenre() || !description)
        return;
    let serie = {
        name: nom.value.trim(),
        language: langue.value.charAt(0).trim().toUpperCase() + langue.value.trim().slice(1).toLowerCase(),
        genres: [...getGenre()],
        summary: description.value.charAt(0).trim().toUpperCase() + description.value.trim().slice(1).toLowerCase()
    };
    const created = await create(serie);
    series.push(created);
}

export async function modifySerie(id, serie){
    if (serie.id == id){
        const capitalize = langue.value.charAt(0).trim().toUpperCase() + langue.value.trim().slice(1).toLowerCase();
        let newSerie = {
            name: nom.value.trim(),
            language: capitalize,
            genres: [...getGenre()]
        };
        const modified = await update(id, newSerie);
        for (const key in modified)
            serie[key] = modified[key];
    }
}

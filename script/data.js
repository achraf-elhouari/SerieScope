import { series } from "./fetch.js";

let serie = {
    name: nomSerie,
    genre: [],
    image: url,
    summary: story
}

function newSeriesList(){
    let seriesList = [];
    for (let i = 0; i <= 20; i++){
        serie.id = Number(series[i].id);
        serie.name = series[i].name;
        serie.genre = [...series[i].genres];
        serie.image = series[i].image.medium;
        serie.summary = series[i].summary;
        seriesList.push(serie);
    }
    return seriesList;
}

export const data = [...newSeriesList()];
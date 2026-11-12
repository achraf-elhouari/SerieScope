import { series } from "./fetch.js";

function newSeriesList(){
    let seriesList = [];
    for (let i = 0; i < 20; i++){
        let serie = {
            id: series[i].id,
            name: series[i].name,
            genres: [...series[i].genres],
            image: series[i].image,
            summary: series[i].summary
        };
        seriesList.push(serie);
    }
    return seriesList;
}

export const data = newSeriesList(); 

function get_genre(){
    const genreArray = [];
    for (let i = 0; i < data.length; i++){
        for (const genre of data[i].genres){
            if (!genreArray.includes(genre)){
                genreArray.push(genre);
            }
        }
    }
    return genreArray;
}

export const dataGenre = get_genre();
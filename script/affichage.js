export function afficheOptions(genre){
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    
    return option;
}


function afficheGenre(serie){
    const div = document.createElement('div');
    div.className = 'flex';
    for (const genre of Object.keys(serie.genres)){
        const p = document.createElement('p');
        p.className = "text-[#EEEEEE] bg-[#292929] rounded-2xl mr-1 p-2";
        p.textContent = serie.genres[genre];
        div.append(p);
    }
    return div;
}

export function afficheSerie(serie){
    const article = document.createElement('article');
    article.className = "grid bg-[#191919] w-fit rounded-2xl gap-2 mt-3 p-3 border-[#393939] border";
    
    const image = document.createElement('img');
    image.src = serie.image.medium ?? './assets/video-player-placeholder-very-large.png';
    image.alt = 'serie affiche';
    image.className = 'w-full h-full rounded-xl rounded-xl';

    const titre = document.createElement('h3');
    titre.className = 'text-[#FAFAFA] text-xl font-bold';
    const strongTitre = document.createElement('strong');
    strongTitre.textContent = serie.name;
    titre.append(strongTitre);

    const div = afficheGenre(serie);

    const description = document.createElement('p');
    description.className = 'text-[#BABABA] line-clamp-2';
    description.innerHTML = serie.summary;

    article.append(image, titre, div, description);
    
    return article;
}


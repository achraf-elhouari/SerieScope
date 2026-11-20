export function afficheOptions(genre){
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    
    return option;
}

function afficheGenre(serie){
    const div = document.createElement('div');
    div.className = 'flex';
    for (const genre in serie.genres){
        const p = document.createElement('p');
        p.className = "text-[#EEEEEE] bg-[#292929] rounded-2xl mr-1 p-2";
        p.textContent = serie.genres[genre];
        div.append(p);
    }
    return div;
}

export function afficheSerie(serie){
    console.log(serie);
    
    const article = document.createElement('article');
    article.className = "grid bg-[#191919] w-fit rounded-2xl gap-2 mt-3 p-3 border-[#393939] border";
    
    const image = document.createElement('img');
    if (serie.image == null)
        image.src = '../assets/video-player-placeholder-very-large.png';
    else
        image.src = serie.image.original;
    image.alt = 'serie affiche';
    image.className = 'w-full h-120 rounded-xl rounded-xl';
    
    const titre = document.createElement('h3');
    titre.className = 'text-[#FAFAFA] text-xl font-bold';
    const strongTitre = document.createElement('strong');
    strongTitre.textContent = serie.name;
    titre.append(strongTitre);

    const divGenre = afficheGenre(serie);

    const description = document.createElement('p');
    description.className = 'text-[#BABABA] line-clamp-2';
    description.innerHTML = serie.summary;

    const divBtns = document.createElement('div');
    divBtns.className = 'grid grid-cols-2 gap-8';

    const modifyBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    modifyBtn.textContent = 'Modifier';
    deleteBtn.textContent = 'Supprimer';
    modifyBtn.className = 'text-[#d16e0a] bg-[#f5f2a9] h-14 rounded-2xl';
    deleteBtn.className = 'text-[#b5041b] bg-[#f7a3ae] h-14 rounded-2xl';
    modifyBtn.id = 'bouton-modifier';
    deleteBtn.id = 'bouton-supprimer';
    
    divBtns.append(modifyBtn, deleteBtn);

    article.append(image, titre, divGenre, description, divBtns);
    
    return article;
}

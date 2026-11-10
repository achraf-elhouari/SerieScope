async function recupererSerie(){
    try {
        const response = await fetch('https://api.tvmaze.com/shows');
        if (!response.ok)
            throw new Error('Erreur' + response.status);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log('Erreur :', error.message)
    }
}

const data = await recupererSerie();
export const series = [...data];
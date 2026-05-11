export async function getAllGamesLoader(){
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2024-01-01,2026-04-01&page_size=50`);
    const json = await promise.json();
    return json.results;
}

export async function getSearchedGames({params}){
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${params.slug}`);
    const json = await promise.json();
    return json.results;
}

export async function getAllGenres(){
    const promise = await fetch(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`);
    const json = await promise.json();
    return json.results;
}

export async function getFilteredBuGenreGames({params}){
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&genres=${params.slug}`);
    const json = await promise.json();
    return json.results;
}

export async function getGameDetails({params}){
    const promise = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${import.meta.env.VITE_API_KEY}`);
    const json = await promise.json();
    return json;
}
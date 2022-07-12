const API = 'https://omared250.github.io/space_tourism_app/data.json';

export const AJAX = async function(url) {
    try {
        const fetchData = fetch(url);
        const res = await fetchData;
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

export const state = {};


export const loadAll = async function() {
    try {
        const data = await AJAX(`${API}`);
        state.destinations = Object.values(data.destinations);
        state.crew = Object.values(data.crew);
        state.technology = Object.values(data.technology);
    } catch (err) {
        throw err;
    }
};

loadAll();
import { API } from "./config.js";
import { AJAX } from "./helper.js";

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


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
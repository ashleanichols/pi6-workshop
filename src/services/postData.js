const apiUrl = 'http://localhost:9999/api/origami/';
//body
export const getData = (num =0) => {
    console.log("Getting Posts");
    return fetch(apiUrl)
        .then(res => res.json())
        .then(data => data.results)
        .catch(error => console.error(error));
};
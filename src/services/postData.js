const apiUrl = 'http://localhost:9999/api/origami/';

export const getData = (userId,description) => {
    const fetchData = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            _id:userId,
            description:description
        }) // body data type must match "Content-Type" header
      }
    console.log("Posting");
    return fetch(apiUrl,fetchData)
        .then(res => res.json())
        .then(data => data.results)
        .catch(error => console.error(error));
};
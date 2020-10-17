const apiUrl = 'http://localhost:9999/api/origami/';

export const postData = (description) => {
    const fetchData = {
        method: 'POST',
        credentials: 'include', // include, *same-origin, omit
        mode: 'cors', // no-cors, *cors, same-origin 
        headers: {
          //'Content-Type': 'application/json'
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          //'application/json'
          
        },
        body:/* 'name=alex&surname=moran' */`description=${description}`
         // body data type must match "Content-Type" header
       
      }
    console.log("Posting");
    return fetch(apiUrl,fetchData)
        .then(res => res.json())
        .catch(error => console.error(error));
};
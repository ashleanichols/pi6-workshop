const apiUrl = 'http://localhost:9999/api/user/register';

export const createUser = (username,password) => {
    const fetchData = {
        method: 'POST', 
        credentials: 'include', // include, *same-origin, omit
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          //'Content-Type': 'application/json'
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          //'application/json'
          
        },
        body:/* 'name=alex&surname=moran' */`username=${username}&password=${password}`
         // body data type must match "Content-Type" header
      }
    console.log("Registering Users");
    return fetch(apiUrl,fetchData)
        .then(res => {
          console.log(res.status);
          return res.json();
        })
        .catch(error => console.error(error));
};
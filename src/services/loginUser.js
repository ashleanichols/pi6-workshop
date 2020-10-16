const apiUrl = 'http://localhost:9999/api/user/login';
export const loginUser = (username,password) => {
    console.log("User Login");
  //console.log(username,password);
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
    return fetch(apiUrl,fetchData)
        .then(res => {
            console.log(res.status);
            return res.json();
        })
        .catch(error => console.error(error));
};
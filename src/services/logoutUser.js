const apiUrl = 'http://localhost:9999/api/user/logout';
export const logoutUser = () => {
    console.log("User Logout");
  
    const fetchData = {
        method: 'POST', 
        credentials: 'include', // include, *same-origin, omit
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            //'Content-Type': 'application/json'
            'Content-Type': 'text/plain'
          },
       //redirect: 'follow', // manual, *follow, error
    };
    return fetch(apiUrl,fetchData)
        .then(res => {
            console.log(res);
            return res.json();
        })
        .catch(error => console.error(error));
};

let apiUrlUser = 'http://localhost:9999/api/user/info/';

export const getUserInfo = (id) =>{
    const fetchData = {
        method: 'GET', 
        credentials: 'include', // include, *same-origin, omit
        mode: 'cors', // no-cors, *cors, same-origin
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      };
    console.log("getting info");
    apiUrlUser+=id;
    console.log(apiUrlUser);
    return fetch(apiUrlUser,fetchData)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            return data;
        })
        .catch(error => console.error(error));
}
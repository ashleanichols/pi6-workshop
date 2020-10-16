const apiUrl = 'http://localhost:9999/api/user/register';

export const getData = (username,password) => {
    const fetchData = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            username:username,
            password:password
        }) // body data type must match "Content-Type" header
      }
    console.log("Registering Users");
    return fetch(apiUrl,fetchData)
        .then(res => res.json())
        .then(data => data.results)
        .catch(error => console.error(error));
};
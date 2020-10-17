const apiUrlOrigami = 'http://localhost:9999/api/origami/user';
//const apiUrlUser = 'http://localhost:9999/api/user/me';
export const getUserPosts = () => {
    console.log("Getting My Posts");
    const fetchData = {
        method: 'POST', 
        credentials: 'include', // include, *same-origin, omit
        mode: 'cors', // no-cors, *cors, same-origin
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      }
    
    return fetch(apiUrlOrigami,fetchData)
        .then(res => res.json())
        .then(data =>{
            //console.log(data);
            data  = data.reverse();
            
            let showData = [];
            for(let i=0;i<data.length && i<3;i++){
               // console.log(data[i]);
                showData.push(data[i]);
            }
            return showData;
        })
        .catch(error => console.error(error));
};

 

    // getData().then(data=>{

    // })
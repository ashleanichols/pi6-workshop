const apiUrlOrigami = 'http://localhost:9999/api/origami/';
const apiUrlUser = 'http://localhost:9999/api/user/';
export let getData = () => {
    console.log("Getting Posts");
    //let result = await 
    
    return fetch(apiUrlOrigami)
        .then(res => res.json())
        .then(data =>{
            return fetch(apiUrlUser)
            .then(res => res.json())
            .then(userData =>{
                //console.log(data);
                //console.log(userData);
                data.map(post=>{
                    post.username =  userData.find(user=>{ return user._id === post.author; }).username;
                });
                //console.log(data);
                return data;
            });
        })
        .catch(error => console.error(error));
};

 

const data= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const ans="kishore";
        if(ans){
            resolve(ans);
        }else{
            reject('no data');
        }
    },3000);
});
function getuserDetails(name){
    const userDetails= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let userDetails=[{name:"kishore",age:"30"}]
            const user= userDetails.find((user)=>user.name==name)
            if(user){
                resolve(user)
            }else{
                reject('nothing')
            }
        },3000);
    });
    return userDetails;
}
data.then((name)=>{
    return getuserDetails(name)
})
.then((userDetail)=>{
    console.log(userDetail)
})
.catch((error)=>{
    console.log(error.name)
})
.finally(()=>{
    console.log("last")
})

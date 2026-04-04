//? using .then , .catch
// let apiurl = fetch(`https://api.github.com/users`)
// console.log(apiurl);

// let respdata =apiurl.then((resp)=>{
//     return resp.json()
// })
// console.log(respdata);

// respdata.then((array) =>{
//     console.log(array);
// })



//? using async & await
let fetchFunction = async () =>{
    try{
        let apiurl = fetch(`https://api.github.com/users`);
        let respdata = (await apiurl).json();
        let array = await respdata;
        // return array;
        console.log(array);
    }catch(error){
        // console.log(error);
        console.log("API is not fetching properly");
    }
}
// console.log(fetchFunction()); //if the function is returning then , console.log()
fetchFunction();
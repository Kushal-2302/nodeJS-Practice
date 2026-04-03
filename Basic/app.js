// console.log("Hello");

// let a = 100;
// let b = 200;
// console.log(`${a+b}`);


//? callback (CBF) and higherorder(HOF) function
//todo : creating ot invoking the functionas a argument of another function is called CBF
//todo : accepting the CBF as a parameter that function called as HOF
let num = () => {
    return 200;
}
let sum = (a,b) => {
    let res = a+b;
    console.log(res);
}
// sum(num(),200);


//! Nested function
//? 1
let outer = () => {
    let a = 100;
    console.log(a); //100

    let inner = () => {
        let b = 200;
        console.log(a,b); //100 200
        return b
    }
    let x = inner();
    console.log(x); //200
}
// outer();

//? 2 square number
let outersqr = () => {
    let a = 2;
    console.log(a*a);

    let innersqr = () => {
        let b = 5;
        return b;
    }
    let c = innersqr();
    console.log(c*c);
}
// outersqr()

//! Promises .then , .catch , .finally
// let p = new Promise((res,rej)=>{
//     if(false){
//         res("Happy")
//     }else{
//         rej("Sad")
//     }
// })
// console.log(p);

// p.then((data)=>{
//     console.log(data);
// })
// p.catch((err)=>{
//     console.log(err)
// })
// p.finally(()=>{
//     console.log("Completed");
// })

//! async & await

//? eg 1
// let fun = async () => {
//     return "Welcome"
// }
// let f = fun();
// // console.log(f);
// f.then((data)=>{
//     console.log(data);
// })


//? eg 2
let data = () => {
    return new Promise((res)=>{
        setTimeout(()=>{
            console.log("Welcome")
        },2000)
    })
}
let printData = async () => {
    console.log(await data())
}
printData();
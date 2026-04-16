// // console.log("Hello");

// // let a = 100;
// // let b = 200;
// // console.log(`${a+b}`);


// //? callback (CBF) and higherorder(HOF) function
// //todo : creating to invoking the functions a argument of another function is called CBF
// //todo : accepting the CBF as a parameter that function called as HOF
// let num = () => {
//     return 200;
// }
// let sum = (a,b) => {
//     let res = a+b;
//     console.log(res);
// }
// // sum(num(),200);

// //! Nested function
// //? 1
// let outer = () => {
//     let a = 100;
//     console.log(a); //100

//     let inner = () => {
//         let b = 200;
//         console.log(a,b); //100 200
//         return b
//     }
//     let x = inner();
//     console.log(x); //200
// }
// // outer();

// //? 2 square number
// let outersqr = () => {
//     let a = 2;
//     console.log(a*a);

//     let innersqr = () => {
//         let b = 5;
//         return b;
//     }
//     let c = innersqr();
//     console.log(c*c);
// }
// // outersqr()

// //! Promises .then , .catch , .finally
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

// //! async & await

// //? eg 1
// let fun = async () => {
//     return "Welcome"
// }
// let f = fun();
// // console.log(f);
// f.then((data)=>{
//     console.log(data);
// })


// //? eg 2
// let data = () => {
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             console.log("Welcome")
//         },2000)
//     })
// }
// let printData = async () => {
//     console.log(await data())
// }
// printData();


//? timing functions
// let print = () => {
//     let num = 1;
//     n = setInterval(() => {
//         console.log(num++);
//     },1000)

//     setTimeout(() => {
//         clearInterval(n);
//     },10000)
// }
// print();


//?
let Task1 = (cb1) => {
    setTimeout(()=>{
        console.log("Task 1");
        cb1()
    },2000)
}
let Task2 = (cb2) => {
    setTimeout(()=>{
        console.log("Task 2");
        cb2();
    },3000)
}
let Task3 = (cb3) => {
    setTimeout(()=>{
        console.log("Task 3");
        cb3();
    },1000)
}

// //! callback hell
// Task1(()=>{
//     Task2(()=>{
//         Task3(()=>{
//             console.log("All tasks are completed")
//         });
//     })
// })


//! async & await
let task1 = () => {
    return new Promise((res)=>{
        setTimeout(()=>{
            res("task1");
        },3000)
    })
}
let task2 = () => {
    return new Promise((res)=>{
        setTimeout(()=>{
            res("task2");
        },1000)
    })
}
let task3 = () => {
    return new Promise((res)=>{
        setTimeout(()=>{
            res("task3");
        },2000)
    })
}

let mainTask = async () => {
    console.log(await task1());
    console.log(await task2());
    console.log(await task3());
}
// mainTask();


//?
let value1 = (cb1) => {
    setTimeout(()=>{
        let v1 = 10;
        console.log(`value 1 : ${v1}`)
        cb1(v1);
    },3000) 
}
    
let value2 = (cb2) => {
    setTimeout(()=>{
        let v2 = 20;
        console.log(`value 2 : ${v2}`)
        cb2(v2);
    },2000)  
}

value1((res1)=>{
    value2((res2)=>{
        let sum = res1 + res2;
        console.log(sum);
    })
})



                                                                                                                                                                      

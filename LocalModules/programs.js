//! Local Modules

//! Exporting

// let add = (num1=0, num2=0) =>{
//     let sum = num1 + num2;
//     return `${num1} + ${num2} = ${sum}`
// }

// let sub = (num1=0, num2=0) =>{
//     let res = num1 - num2;
//     return `${num1} - ${num2} = ${res}`
// }


//todo : 1st way
// module.exports.addition = add;
// module.exports.subtraction = sub;


//todo : 2nd way
// module.exports.add = add;
// module.exports.sub = sub;

//todo : 3rd way
// module.exports = {add, sub}



//!----------------------------------------------------

//! Advance way

exports.multiplication = (num1=0, num2=0) => {
    let res = num1 * num2;
    return `${num1} * ${num2} = ${res}`
}
exports.division = (num1=0, num2=0) => {
    let res = num1 / num2;
    return `${num1} / ${num2} = ${res}`
}

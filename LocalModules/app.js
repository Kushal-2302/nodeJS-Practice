//! Local Modules :

//! Importing


// let programs = require('./programs');

//todo : 1st way
// let res1 =  programs.addition(10, 20);
// console.log(res1);

// let res2 =  programs.subtraction(30, 10);
// console.log(res2);


//todo : 2st way
// let s1 =  programs.add(10, 20);
// console.log(s1);

// let s2 =  programs.sub(30, 10);
// console.log(s2);


//todo : 3rd way (Destructing)
// let {add,sub} = programs;
// console.log(add(20,30));
// console.log(sub(50,30))




//!Description
//?Local modules
// * In nodeJS Local module is a module (file or filder) that created by ourself in our projects and reuse in other file while importing
// * Using import keyword or using require method

// *Note - local modules are not installed by npm, they are created inside the project

// * importing methods
// *1.  ./ -> current folder/sibling
// *2.  ../ -> parent folder
// *3.  ../../  -> grandparent folder



//! --------------------------------------------------------

//! Advance way


let {multiplication,division} = require('./programs');
console.log(multiplication(10,5))
console.log(division(100,5));
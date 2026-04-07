//! Local Modules :

//! Importing


// let programs = require('./programs');

// todo : 1st way
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


//? Add N numbers

let {multiplication,division,add, printOnlyEven, printOnlyOdd,sumOfEven, sumOfOdd, 
    findLargestNum,findSmallestNum, checkPalindrome, gcdRecursive,findDuplicates, findLongestWord} = require('./programs');
// console.log(multiplication(10,5))
// console.log(division(100,5));
// console.log(add(2,7,4,9));
// console.log(printOnlyEven(3,7,4,9,1,8,2,10));
// console.log(printOnlyOdd(23,67,88,24,64,1,5,9));
// console.log(sumOfEven(4,8,2,7,1));
// console.log(sumOfOdd(3,7,5,9,1,4,6,8))
// console.log(findLargestNum(7,2,9,1,4))
// console.log(findSmallestNum(7,2,9,1,4))
// console.log(checkPalindrome("madam"))
// console.log(gcdRecursive(48,18))
// console.log(findDuplicates([1,2,3,2,4,5,1,6]));
console.log(findLongestWord("I am learning Java Programmimg"));
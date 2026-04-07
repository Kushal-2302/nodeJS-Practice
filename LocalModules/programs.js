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

// todo : 1st way
// module.exports.addition = add;
// module.exports.subtraction = sub;

//todo : 2nd way
// module.exports.add = add;
// module.exports.sub = sub;

//todo : 3rd way
// module.exports = {add, sub}

//!----------------------------------------------------

//! Advance way

// exports.multiplication = (num1=0, num2=0) => {
//     let res = num1 * num2;
//     return `${num1} * ${num2} = ${res}`
// }
// exports.division = (num1=0, num2=0) => {
//     let res = num1 / num2;
//     return `${num1} / ${num2} = ${res}`
// }

// //? Add N numbers
// //todo : Sum of array
// exports.add = (...add) => {
//     let res = add.reduce((prev,curr) => {
//         return prev + curr;
//     })
//     return `${add.join(' + ')} = ${res}`;
// }

// //todo :  print only even
// exports.printOnlyEven = (...even) => {
//   // let res = [];
//   // res = even.filter((elem)=>{
//   //     return elem % 2 == 0;
//   // })
//   // return res;
//   return even.filter((elem) => elem % 2 == 0);
// };

// //todo : print only odd
// exports.printOnlyOdd = (...odd) => {
//   let res = odd.filter((elem) => {
//     return elem % 2 != 0;
//   });
//   return ` Odd numbers ${res.join()}`;
// };

// //todo : sum of even numbers
// exports.sumOfEven = (...even) => {
//   return even.filter((elem) => elem % 2 == 0).reduce((prev , curr)=>{
//     return prev + curr;
//   });
// };

// //todo : sum of odd numbers
// exports.sumOfOdd = (...odd) => {
//     let oddArr = odd.filter((elem)=>{
//         return elem%2 != 0;
//     })
//     let sumOfOdd = oddArr.reduce((prev , curr) => {
//         return prev + curr;
//     })
//     return `sum of Odd : ${oddArr.join(' + ')} = ${sumOfOdd}`
// }


// //todo : find largest number
// exports.findLargestNum = (...large) => {
//     let largeNum =  large.sort((num1,num2) => {
//         return num2 - num1;
//     })
//     return largeNum[0];
// }

// //todo : find smallest number
// exports.findSmallestNum = (...small) => {
//     // let largeNum =  small.sort((num1,num2) => {
//     //     return num1 - num2;
//     // })
//     // return largeNum[0];
//     return Math.min(...small);
// }

//todo : check palindrome
exports.checkPalindrome = (str) => {
    let reversed = str.split('').reverse().join('');
    if(reversed == str) {
        return `It is palindrom`
    } else {
        return ` It is not palindrom`
    }
}

// todo : GCD program
const gcdRecursive = (a, b) => {
  return b === 0 ? a : gcdRecursive(b, a % b);
};

exports.gcdRecursive = gcdRecursive;


// todo :  Find duplicate elements
exports.findDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}


// todo : find the longest word in a sentence
exports.findLongestWord = (sentence) => {
    return sentence.split(" ").reduce((longest, word) => {
        return word.length > longest.length ? word : longest
    },"") 
    
}
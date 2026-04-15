//! Events

//todo : Import events
const Events  = require('events')
// console.log(Events)

//todo : Convert to Object using new Keyword
let emitter = new Events()
// console.log(emitter)

//! Examples programs

//todo :  Program 1
emitter.on('exe',()=>{
    console.log('Welcome')
})
// emitter.emit('exe')

//todo : Program 2
emitter.on('add',(a,b)=>{
    console.log(`${a} + ${b} = ${a+b}`)
})
// emitter.emit('add',10,20);
// emitter.emit('add',20,20);

//todo : Program 2.1
emitter.on('addrest',(...a)=>{
    let sum = a.reduce((b,c)=>{
        return b + c;
    },0)
    console.log(sum)
})
// emitter.emit('addrest',10,20,30,40);

//todo : Program 3
emitter.on('evenOdd',(num)=>{
    if(num%2 ==0){
        console.log("It is even")
    } else {
        console.log('It is Odd')
    }
})
// emitter.emit('evenOdd',4)

//todo : Program 4
emitter.on('palindrome',(str)=>{
    let reversed = str.split('').reverse().join('');
    if(str == reversed){
        console.log("It is palindrome")
    } else {
        console.log("It is not Palindrome")
    }
})
// emitter.emit('palindrome',"madams")

//todo : Program 5
emitter.on('findDuplicate',(arr)=>{
    let Duplicate = arr.filter((item, index) => arr.indexOf(item) !== index);
    console.log(Duplicate)
})
// emitter.emit('findDuplicate',[1,4,2,1,5,2])

//todo : Program 6
emitter.on('findLongestWord',(sentence)=>{
    let longestWord = sentence.split(" ").reduce((longest, word) => {
        return word.length > longest.length ? word : longest;
        
    },"")
    console.log(longestWord);
})
emitter.emit('findLongestWord',"My Name is Kushal")
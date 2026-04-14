// console.log("hello")
// console.log(__dirname)
// console.log(__filename)

const path = require('path')
// console.log(path);

// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))

// console.log(path.extname(__dirname)) //* It will not print anything because I don't have any extention
// console.log(path.extname(__filename))


let str = "F://MERN/NodeJS/newFolder/index.js";
// console.log(path.basename(str))
// console.log(path.extname(str))

// console.log(path.parse(__filename))
// console.log(path.parse(str))

// console.log(path.parse(__filename).root)
// console.log(path.parse(__filename).name)

// let fileObj = path.parse(__filename)
// console.log(fileObj)
// console.log(path.format(fileObj)) //* Object is converted to string

console.log(path.isAbsolute(__dirname))
console.log(path.isAbsolute("MERN/app.js"))
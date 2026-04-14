// console.log("hello")
const os = require('os')
// console.log(os);

// let total = os.totalmem()
// console.log(total + " Bytes");

// let kb = total / 1024;
// console.log(kb)

// let mb = kb / 1024;
// console.log(mb)

// let gb = mb / 1024;
// console.log(gb)

// let tb = gb / 1024;
// console.log(tb);

//!------------------------------------------------
//? Free space memory in OS
let free = os.freemem()
// console.log(free)


// let kb = free / 1024;
// console.log(kb+" KB")

// let mb = kb / 1024;
// console.log(mb+" MB")

// let gb = mb / 1024;
// console.log(gb+" GB")

// let tb = gb / 1024;
// console.log(tb+" TB");

//!----------------------------------
// console.log(os.hostname())
// console.log(os.endianness())
// console.log(os.homedir())
// console.log(os.getPriority())
// console.log(os.machine())
// console.log(os.userInfo())
// console.log(os.userInfo().username)
console.log(os.version())
console.log(os.tmpdir())
console.log(os.uptime())
console.log(os.type())
// console.log(os.networkInterfaces())
console.log(os.release())
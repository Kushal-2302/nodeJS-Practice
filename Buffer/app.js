// let text = 'Welcome'
// console.log(text)


//* In javascript buffer data is used to handle binary data (raw data).
//* Mainly buffer is avaliable in node.js runtime (not in Browser).
//* note : Buffer is like temparory storage area in memory where data is stored in bytes.
//? It is useful whene we are working with file(read/write), Network (stream, sockets), Binary Data (images, videos), 
//? ---Receiving data from server ect....

//* note : both buffer value and ascii value is not same.


//todo : It is used to check buffer values of string
// let buf = Buffer.from(text)
// console.log(buf)

//todo : It is used to convert buffer data to string
// console.log(buf.toString())

//todo : It is used check the length of buffer data
// console.log(buf.length)
// console.log(buf.toString().length)

// console.log(buf[1]); // 101

//todo : fromcharCode() -- It is use to check character of ascii value
// console.log(String.fromCharCode(101));// e
// console.log(String.fromCharCode(buf[1])); //e


//! --------------------------------------------------------------------

// let buf1 = Buffer.alloc(5);
// console.log(buf1)

// let buf2 = Buffer.alloc(5,'kushal')
// console.log(buf2)

// let buf3 = Buffer.alloc(5, 'Hi Javascript') //* for space(_) also It will contain buffer value
// console.log(buf3)


//! -------------------------------------------------------------------

// let buf = Buffer.alloc(10)
// console.log(buf)

// buf.write('I Love Java Script')
// console.log(buf)
// console.log(buf.toString())
// console.log(buf.toString().length)

//! -------------------------------------------------------------------

let buf = Buffer.from('Hello')
console.log(buf)

let str = 'Hello'
console.log(str)

console.log(Buffer.isBuffer(buf))
console.log(Buffer.isBuffer(str))

console.log(typeof buf)
console.log(typeof str)
//!fs module :
//* fs module stands for file system
//* fs module is used for work with file system like creating the file, reading, updating etc.
//* Note : mainly fs module is used for Managing files and folder.
//* It is a builtin module so no need to install it.

const fs = require('fs')

//* : writeFileSync -> method is used to creating the file and adding the data
//? syntax : fs.writeFileSync(filePath, data)
// fs.writeFileSync("Text.txt", "Welcome ");
// console.log("File is created")

//* : appendFileSync -> method is used to add extra or new data to the file
//* if we used writeFileSync() for adding the new data then it will not append , it override
//? syntax : fs.appendFileSync(filePath, data)
// fs.appendFileSync("Text.txt", "To nodeJS");
// console.log("New data is added");

//* : readFileSync -> method is used to read the data from the another file, but the data will be in the form of buffer data (It reads the data in buffer format), 
//* : so we have to convert that data to the string using javascript tOString().
//? syntax : fs.writeFileSync(filePath, data)
// let data = fs.readFileSync('Text.txt')
// console.log("Data is readed")
// console.log(data);
// console.log(data.toString());

//* : utf-8 -> stands for Unicode transformation format with 8 bit.
//* : It converts character to binary.
//* : It is used to convert buffer data to the string
//? syntax : fs.writeFileSync(filePath, utf-8)
// let data = fs.readFileSync('Text.txt', 'utf-8');
// console.log(data)

//* : fs.unlinkSync is used to delete the file
//? syntax : fs.unlinkSync(filename)
// fs.unlinkSync('Text.txt');
// console.log("File is deleted")

//* : fs.mkdirSync is used to create new folder
//? syntax : fs.mkdirSync(folderName)
// fs.mkdirSync('New folder');
// console.log("Folder is created");

//* : renameSync() is used to rename the folder or file
//? syntax : fs.renameSync(old filename, new filename)
// fs.renameSync('New folder', "Folder 1");
// console.log("Renamed the folder")

//* : rmdirSync() is used to delete the folder
//? syntax : fs.rmdirSync(folderName)
// fs.rmdirSync("Folder 1")
// console.log("Folder deleted");


//! Task 1 :
//* :
//?
// fs.mkdirSync("Folder 1");
// console.log("Folder is created");

// fs.writeFileSync("Folder 1/Text.txt", "Welcome");
// console.log("File also created in Folder 1 and data is added")

//! Task 2 :
// fs.unlinkSync("Folder 1/Text.txt")
// console.log("File is deleted")
// fs.rmdirSync("Folder 1")
// console.log("Folder is deleted");


//! Task 3 : 
// fs.mkdirSync("Love_Story")
// console.log("Folder is created")

// fs.writeFileSync("Love_Story/Person1.txt", "Dinga")
// console.log("File 1 is created")

// fs.writeFileSync("Love_Story/Person2.txt", "Dingi")
// console.log("File 2 is created")

// let data1 = fs.readFileSync('Love_Story/Person1.txt')
// console.log("file 1 data is readed")

// let data2 = fs.readFileSync('Love_Story/Person2.txt')
// console.log("file 2 data is readed")

// fs.writeFileSync("Love_Story/message.txt", `${data1} loves ${data2}`)
// console.log("File 3 is created & data is added")


//* deleting files and folders
// fs.unlinkSync("Love_Story/Person1.txt");
// console.log("Person1 file is deleted")

// fs.unlinkSync("Love_Story/Person2.txt");
// console.log("Person2 file is deleted")

// fs.unlinkSync("Love_Story/message.txt");
// console.log("message file is deleted")

// fs.rmdirSync("Love_Story")
// console.log("Love Story folder is deleted")








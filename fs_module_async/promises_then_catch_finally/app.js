//!

let fs = require("fs").promises;

//? syntax : fs.writeFile(filepath, data)
//  let write = fs.writeFile('text.txt', 'I Love Node')
//  write.then(()=>{
//     console.log('File is created and data is added')
//  })
//  write.catch((err)=>{
//     console.log('File is not created')
//  })
//  write.finally(()=>{
//     console.log('Finally task is completed')
//  })

//? syntax : fs.appenFile(filepath, data)
// fs.appendFile('text.txt', ' I Love Javascript') //* appendFile is also can create the file
// .then(()=>console.log("Data is added"))
// .catch((err)=>console.log("Data is not added"))
// .finally(()=>console.log("Task is Completed"))

//? syntax : fs.readFile(filepath, utf-8)
// fs.readFile('text.txt', 'utf-8')
// .then(data => console.log(data))
// .catch(err => console.log('File not found'))
// .finally(()=> console.log('Task is completed'))

//? syntax : fs.rename(oldFile name, newfile name)
// fs.rename('text.txt','new.txt')
// .then(()=> console.log('File is renamed'))
// .catch(err => console.log('File is not renamed' + err))
// .finally(()=> console.log('Task is completed'))

//? syntax : fs.unlink(filepath)
// fs.unlink('new.txt')
// .then(()=> console.log('File is deleted'))
// .catch((err)=> console.log('File not found'))
// .finally(()=> console.log('Task is Completed'))

//? syntax : fs.mkdir(filapath)
// fs.mkdir('Folder1')
// .then(()=> console.log('Folder is created'))
// .catch((err)=> console.log('Folder is not created'))
// .finally(()=> console.log('Task is Completed'))

//? syntax : rmdir(filepath)
// fs.rmdir('Folder1')
// .then(()=> console.log('Folder is deleted'))
// .catch((err)=> console.log('Folder not found'))
// .finally(()=> console.log('Task is Completed'))

//!  Task 1
//?
// fs.mkdir('App')
// .then(()=>{
//     console.log("Folder is created")

//     fs.writeFile('App/text.txt', 'I Love JavaScript')
//     .then(()=>{
//         console.log("File is created and data & data is added")

//         fs.readFile('App/text.txt', 'utf-8')
//         .then((data)=> console.log(data))
//         .catch((err)=> console.log("Data os not read"))
//         .finally(()=> console.log("Task is completed"))
//     })
//     .catch(()=>console.log("File is not created"))
// })
// .catch((err)=> console.log("Folder is not created"))

//! Task 2
//? creating App folder with 2 subfolders that is client and server and app file
fs.mkdir("Application")
  .then(() => {
    console.log("Application Folder is created");

    fs.mkdir("Application/Client")
      .then(() => {
        console.log("Client folder is created");

        fs.writeFile("Application/Client/client.txt", "This client file")
          .then(() => {
            console.log("Client file is created & data is added");
          })
          .catch((err) => console.log("client file is not created"));
      })
      .catch((err) => console.log("Client folder is not created"));

    fs.mkdir("Application/Server")
      .then(() => {
        console.log("Server folder is created");

        fs.writeFile("Application/Server/server.txt", "This server file")
          .then(() => {
            console.log("Server file is created & data is added");
          })
          .catch((err) => console.log("server file is not created"));
      })
      .catch((err) => console.log("Server folder is not created"));

    fs.readFile("Application/Client/client.txt", "utf-8")
      .then((clientdata) => {
        console.log("Client data is read");

        fs.readFile("Application/Server/server.txt", "utf-8")
          .then((serverdata) => {
            console.log("Server data is read");

            fs.writeFile("Application/app.txt", `${clientdata} ${serverdata}`)
              .then((data) => console.log(data))
              .catch((err) => console.log("App file is not created"))
              .finally(() => console.log("Application folder is not created"));
          })
          .catch((err) => console.log("Server data is not read"));
      })
      .catch((err) => console.log("Client data is not read"));
  })
  .catch((err) => console.log("Application Folder is not created"));

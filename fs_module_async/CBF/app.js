//* Asynchronous fS module

//* fs.writeFile()
//* fs.appendFile()
//* fs.readFile()
//* fs.rename()
//* fs.unlink()
//* fs.mkdir()
//* fs.rmdir()

const fs = require("fs");
// console.log(fs);

//? syntax : fs.writeFile(path, data, CallBack fucntion)
// fs.writeFile('text.txt','I Love nodeJS', (err) => {
//     if(err){
//         throw err;
//     } else {
//         console.log("File is Created and Data is added")
//     }
// } )

//? syntax : fs.appendFile(path, data, CallBack fucntion)
// fs.appendFile('text.txt', ' I love ExpressJS', (err)=>{
//     if(err) throw err;
//     console.log("Extra data is added to text file")
// })

//? syntax : fs.readFile(path, data, CallBack fucntion), but in callback function we should take 2 parameters
// fs.readFile('text.txt', 'utf-8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })

//? syntax : fs.rename(old filename, new filename, CBF)
// fs.rename('text.txt','text1.txt',(err)=>{
//     if(err) throw err;
//     console.log("File is renamed")
// })

//? syntax : fs.unlink(filepath, CBF)
// fs.unlink('text1.txt',(err)=>{
//     if(err) throw 'File not found';
//     console.log("File is deleted")
// })

//? syntax : fs.mkdir(foldername, CBF)
// fs.mkdir('Folder1',(err)=>{
//     if(err) throw err;
//     console.log('Folder is created')
// })

//? syntax : fs.rmdir(foldername, CBF)
// fs.rmdir('Folder1',(err)=>{
//     if(err) throw err;
//     console.log('Folder is deleted')
// })

//?
// fs.mkdir('Demo_folder',(err)=>{
//     if(err) throw err;
//     console.log('Folder is created')

//     fs.writeFile('Demo_folder/text.txt','Welcome',(err)=>{
//         if(err) throw err;
//         console.log('File is Created');

//         fs.readFile('Demo_folder/text.txt','utf-8',(err, data)=>{
//             if(err) throw err;
//             console.log('data is readed')
//             console.log(data)
//         })
//     })
// })

//! Task1
//? Create App folder with client , server and app files
// fs.mkdir("App", (err) => {
//   if (err) throw err;
//   console.log("Folder is created");

//   fs.writeFile("App/client.txt", "Client File", (err) => {
//     if (err) throw err;
//     console.log("Client File is created");
//   });
//   fs.writeFile("App/server.txt", "server File", (err) => {
//     if (err) throw err;
//     console.log("server File is created");
//   });
//   fs.readFile("App/client.txt", "utf-8", (err, clientdata) => {
//     if (err) throw err;
//     console.log("data is readed from client file");
//     fs.readFile("App/server.txt", "utf-8", (err, serverdata) => {
//       if (err) throw err;
//       console.log("data is readed from server file");
//       fs.writeFile("App/app.txt", `${clientdata} ${serverdata} `, (err) => {
//         if (err) throw err;
//         console.log("Task is Completed");
//       });
//     });
//   });
// });

//? Delete App folder
// fs.unlink('App/client.txt',(err)=>{
//     if(err) throw err;
//     fs.unlink('App/server.txt' , (err)=>{
//         if(err) throw err;
//         fs.unlink('App/app.txt',(err)=>{
//             if(err)throw err;
//             fs.rmdir('App',(err)=>{
//                 if(err) throw err;

//             })
//         })
//     })
// })

//! Task 2
//? 1. creating App folder with 2 subfolders that is client and server and app file
fs.mkdir("Demo_Folder", (err) => {
  if (err) throw err;
  console.log("Demo folder is created");

  // create client folder
  fs.mkdir("Demo_Folder/Client", (err) => {
    if (err) throw err;
    console.log("Client folder is created");

    fs.writeFile(
      "Demo_Folder/Client/client.txt",
      "This is client file",
      (err) => {
        if (err) throw err;
        console.log("client file is created");
      },
    );
  });
  fs.mkdir("Demo_Folder/Server", (err) => {
    if (err) throw err;
    console.log("server folder is created");

    fs.writeFile(
      "Demo_Folder/Server/server.txt",
      "This is client file",
      (err) => {
        if (err) throw err;
        console.log("client file is created");
      },
    );
  });
  fs.readFile("Demo_Folder/Client/client.txt", "utf-8", (err, clientdata) => {
    if (err) throw err;
    console.log("Data is readed from client file");

    fs.readFile("Demo_Folder/Server/server.txt", "utf-8", (err, serverdata) => {
      if (err) throw err;
      console.log("Data is readed from server file");

      fs.writeFile(
        "Demo_Folder/app.txt",
        `${clientdata}  ${serverdata}`,
        (err) => {
          if (err) throw err;
          console.log(
            "app file is created & data is readed from client and server files",
          );
        },
      );
    });
  });
});

//todo : (or)
//? 2. creating App folder with 2 subfolders that is client and server and app file

// fs.mkdir("Demo_Folder", (err) => {
//   if (err) throw err;
//   console.log("Demo folder is created");

//   // Create Client folder
//   fs.mkdir("Demo_Folder/Client", (err) => {
//     if (err) throw err;
//     console.log("Client folder is created");

//     // Create client file
//     fs.writeFile(
//       "Demo_Folder/Client/client.txt",
//       "This is client file",
//       (err) => {
//         if (err) throw err;
//         console.log("Client file is created");

//         // Create Server folder
//         fs.mkdir("Demo_Folder/Server", (err) => {
//           if (err) throw err;
//           console.log("Server folder is created");

//           // Create server file
//           fs.writeFile(
//             "Demo_Folder/Server/server.txt",
//             "This is server file",
//             (err) => {
//               if (err) throw err;
//               console.log("Server file is created");

//               // Read client file
//               fs.readFile(
//                 "Demo_Folder/Client/client.txt",
//                 "utf-8",
//                 (err, clientData) => {
//                   if (err) throw err;
//                   console.log("Data is read from client file");

//                   // Read server file
//                   fs.readFile(
//                     "Demo_Folder/Server/server.txt",
//                     "utf-8",
//                     (err, serverData) => {
//                       if (err) throw err;
//                       console.log("Data is read from server file");

//                       // Write combined data
//                       fs.writeFile(
//                         "Demo_Folder/app.txt",
//                         `${clientData} ${serverData}`,
//                         (err) => {
//                           if (err) throw err;
//                           console.log(
//                             "App file created with client and server data",
//                           );
//                         },
//                       );
//                     },
//                   );
//                 },
//               );
//             },
//           );
//         });
//       },
//     );
//   });
// });

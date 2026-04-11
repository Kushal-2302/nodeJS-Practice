const fs = require('fs').promises
// console.log(fs)


//? cretaing the file
let createFile = async () => {
    await fs.writeFile('app.txt','I am in app.txt file')
    console.log('app.txt file is created')
}
// createFile()

//? adding the data to the file
let addData = async () => {
    await fs.appendFile('app.txt',' & I love node js')
    console.log('Data is added')
}
// addData()

//?
let readFile = async () => {
    let data = await fs.readFile('app.txt','utf-8')
    console.log(data)
    console.log("Data is read")
}
// readFile()

//?
let deleteData = async () => {
    await fs.unlink('app.txt',)
    console.log('file is deleted')
}
// deleteData()

//?
let createFolder = async () => {
    await fs.mkdir('folder1')
    console.log('Folder is created')
}
// createFolder()

//?
let renameFolder = async () => {
    await fs.rename('folder1','newFolder1')
    console.log('Folder is renamed')
}
// renameFolder()

//?
let deleteFolder = async () => {
    await fs.rmdir('folder1')
    console.log('Folder is created')
}
// deleteFolder()


//! Task 1
//?
let task1 = async () => {
    try{
    await fs.mkdir('Folder1')
    console.log('folder is created')

    await fs.writeFile('Folder1/Demo.txt','This is Demo data')
    console.log('File is created and data is added')

    let data = await fs.readFile('Folder1/Demo.txt','utf-8')
    console.log(data);
    console.log('data is readed and printed in terminal')

    } catch(err) {
        console.log("Folder is not created")
    } finally {
        console.log("Task 1 is completed")
    }
}
// task1()


//! Task 2
//?
let task2 = async () => {
    try{
        await fs.mkdir('App')
        console.log('App folder is created')

        await fs.mkdir('App/Client')
        console.log('Client folder is created')

        await fs.writeFile('App/Client/frontend.txt','This is frontend file')
        console.log('Frontend file is created and data is added')

        let frontendData = await fs.readFile('App/Client/frontend.txt','utf-8')
        console.log('FrontendData is readed')

        await fs.mkdir('App/Server')
        console.log('Server folder is created')

        await  fs.mkdir('App/Server/ProgramLayer')
        console.log('ProgramLayer folder is created')

        await fs.writeFile('App/Server/ProgramLayer/PL.txt','This is programming layer file')
        console.log('Programming layer file is created and data is added')

        await fs.mkdir('App/Server/Database')
        console.log('Database layer folder is created')

        await fs.writeFile('App/Server/Database/DB.txt','This is Database layer file')
        console.log('Database layer file is created and data is added')

        let plData = await fs.readFile('App/Server/ProgramLayer/PL.txt','utf-8')
        console.log('PL data is readed')

        let dbData = await fs.readFile('App/Server/Database/DB.txt','utf-8')
        console.log('DB is readed')

        await fs.writeFile('App/Server/backend.txt',` ${plData}, ${dbData}`)
        console.log('Backend file is created and data is added from the PL file and DB file')

        let backendData = await fs.readFile('App/Server/backend.txt','utf-8')
        console.log('backData is readed')

        await fs.writeFile('App/app.txt',`${frontendData}, ${backendData}`)
        console.log("All data is retrived to app file from frontend file and backend file")

        let appData = await fs.readFile('App/app.txt', 'utf-8')
        console.log(appData)

    } catch(error) {
        console.log('Error is there')
    } finally {
        console.log('Task two is completed')
    }
}
task2()

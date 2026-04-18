const createData = () =>{
    localStorage.getItem("name", "kushal")
    console.log("hi")
    alert("Data is added to the local storage")
}

const clearData = () => {
    localStorage.clear()
    alert("Data is deleted from the local storage")
}
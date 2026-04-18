let handleForm = (e) => {
    e.preventDefault()
    let fnm = e.target[0].value;
    let lnm = e.target[1].value;
    let dob = e.target[2].value;
    let place = e.target[3].value;

    let user = {
        fname : fnm,
        lname : lnm,
        db : dob,
        address : place 
    }
    let jsonObj = JSON.stringify(user)

    localStorage.setItem("user", jsonObj)
}

let printName = () => {
    let data = localStorage.getItem("user")
    let details = JSON.parse(data)
    console.log(details)
    let {fname, lname, db, address} = details

    let age = new Date().getFullYear() - new Date(db).getFullYear();

    let userdetails = document.getElementById('detail')

    detail.innerHTML = `<h2>My name is ${fname} ${lname} and age is ${age}, And I am from ${address}</h2>`

//     document.write(details.fname)
//     document.write(details.lname)
}

const add_Data = async (e) => {
    e.preventDefault();

    let title = e.target[0].value;
    let desc = e.target[1].value;

    // console.log({title, desc})
    await fetch('http://localhost:5000/add', {
        method : "POST",
        Headers : {"Content-type" : "application/json"},
        body : JSON.stringify({title, desc})
    })
}
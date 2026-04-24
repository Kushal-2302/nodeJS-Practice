const handleForm = (e) => {
    e.preventDefault();

    let student_details = {
        fname : e.target[0].value,
        lname : e.target[1].value,
        dob : e.target[2].value,
        address : e.target[3].value,
        clg : e.target[4].value
    }

    let {fname, lname, dob, address, clg} = student_details;

    
}
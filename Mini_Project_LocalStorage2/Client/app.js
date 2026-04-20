let handleForm = (e) => {
  e.preventDefault();
  let fnm = e.target[0].value;
  let lnm = e.target[1].value;
  let dob = e.target[2].value;

  let user = {
    fname: fnm,
    lname: lnm,
    db: dob,
  };
  let jsonObj = JSON.stringify(user);

  localStorage.setItem("user", jsonObj);
};

let printDetails = () => {
  let details = JSON.parse(localStorage.getItem("user"));
  let { fname, lname, db } = details;
  let age = new Date().getFullYear() - new Date(db).getFullYear();

  let userdetails = document.getElementById("#displayRow");

 console.log(userdetails);

//  displayRow.innerHTML = `<h2>My name is ${fname} ${lname} and age is ${age}</h2>`

  displayRow.innerHTML = `<tr>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${age}</td>
    </tr>
    `;
};

// let handleForm = (e) => {
//   e.preventDefault();
//   let fnm = e.target[0].value;
//   let lnm = e.target[1].value;
  

//   let user = {
//     fname: fnm,
//     lname: lnm
//   };
//   let {fname, lname } = user;
//   console.log(user)
  
// };

function handleForm(e) {
  e.preventDefault();

  const inputs = document.querySelectorAll('input');

  const data =
    "first=" + inputs[0].value +
    "&last=" + inputs[1].value + 
    "&dob=" + inputs[2].value +
    "&place=" + inputs[3].value;

  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: data
  })
  .then(() => alert('Data sent'));
}

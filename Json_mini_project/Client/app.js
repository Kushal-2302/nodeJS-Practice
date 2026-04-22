
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

function printData(e) {
  e.preventDefault();

  fetch('/jsonfile')
  .then(res => res.json())
  .then(data => {

    const tbody = document.getElementById('tableBody');

    data.forEach(user => {
      const row = `
        <tr>
          <td>${user.first}</td>
          <td>${user.last}</td>
          <td>${user.dob}</td>
          <td>${user.place}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });

  });
}

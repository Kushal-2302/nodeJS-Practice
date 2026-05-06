const app = require('./index.js')

// console.log(app);

const PORT = 5000;
app.listen(PORT, err => {
    if(err) throw err;
    console.log(`Server is Created  : http://localhost:${PORT}`);
})
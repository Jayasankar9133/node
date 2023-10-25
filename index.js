const express = require('express');
const app = express();

let port = process.env.port || 4500;

app.listen(port, () => {
    console.log("Server Runnning");
});

app.get('/', (req, res) => {
    res.send(`<h1>Hello Jayasankar</h1>`);
});

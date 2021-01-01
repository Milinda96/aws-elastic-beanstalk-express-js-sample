const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Testing CI/CD pipleline'));

app.post('/example', (req, res) => {
    res.send('new student posting');
});

app.put('/example/:id', (req, res) => {
    res.send('Updating existing record');
});

app.listen(port);
console.log(`App running on http://localhost:${port}`);

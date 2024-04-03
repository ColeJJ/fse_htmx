const express = require("express")
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/users', (req, res) => {
    res.send(`
        <ul>
            <li>Tom</li> 
            <li>Brady</li> 
            <li>Sucks</li> 
        </ul>
 `);
});

app.post('/clicked', (req, res) => {
    res.send(`
        <h1>WOW!</h1>
 `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
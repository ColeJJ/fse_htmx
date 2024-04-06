const express = require("express")
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/target', (req, res) => {
    res.send(`
        <span>Target rendered</span>
    `);
});

app.post('/innerHTML', (req, res) => {
    res.send(`
        <span>inner HTML swapped</span>
 `);
});

app.post('/outerHTML', (req, res) => {
    res.send(`
        <span>outer HTML swapped</span>
 `);
});

app.post('/dialog', (req, res) => {
    const response = req.header('hx-prompt')
    res.send(`
        <span>Entered String: ${response}</span>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
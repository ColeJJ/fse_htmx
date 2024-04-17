const express = require("express")
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/target', (req, res) => {
    res.send(`
        <span>Target rendered</span>
    `);
});

app.get('/getHTML', (req, res) => {
    res.send(`
        <span>returned html</span>
 `);
});

app.get('/getJava', (req, res) => {
    res.send(`
        <img
            class="fit-picture"
            src="./media/java-logo.png"
            style="height: auto; max-width: 5%"
        />
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
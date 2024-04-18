const express = require("express")
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/getHTML', (req, res) => {
    res.send(`
        <span>returned html</span>
 `);
});

app.post('/user', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;

    res.send(`
        <span>Username Input: ${username}</span>
        <span>e-Mail Input: ${email}</span>
 `);
});

app.put('/user', (req, res) => {
    const username = req.body.vorname;
    const email = req.body.nachname;

    res.send(`
        <div>
            <span>Vorname: ${username}</span>
            <span>Nachname: ${email}</span>
        </div>
 `);
});

app.delete('/user', (req, res) => {
    res.send(`
        <span>User deleted!</span>
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
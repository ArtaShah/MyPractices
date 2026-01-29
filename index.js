const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
let notes = [];
app.get('/notes', (req, res) => {
    res.json(notes);
});
app.get('/write', (req, res) => {
    const newNote = req.query.note;
    if (!newNote) {
        return res.send('Please type a note in the url! Example: /write?note=hello');
    }
    notes.push(newNote);
    res.send(`Note saved: ${newNote}`);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
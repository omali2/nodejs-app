const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Nodejs Java script App CICD Test Version 5.0 29.04.2025 11:10 webhook trigger</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
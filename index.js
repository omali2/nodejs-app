const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Nodejs Java script App CICD Test Version 6.0 30.04.2025 13:10 webhook trigger</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
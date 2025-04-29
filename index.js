const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>New CICD Test Version 4.9 28.04.2025 10:15 webhook</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
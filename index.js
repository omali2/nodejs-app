const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! 11.04.2025 22:11');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
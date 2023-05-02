const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.get('/', (req, res) => {
    res.send('Delight chef is running');
})

app.listen(port, () => {
    console.log(`delight chef is running on port: ${port}`);
})
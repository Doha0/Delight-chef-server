const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

const chefData = require('./data/chefdata.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Delight chef is running');
})

app.get('/chefdata', (req, res) => {
    res.send(chefData);
})

app.get("/chefdata/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const chefInformation = chefData.find(chef => chef._id === id);
    res.send(chefInformation);
});

app.listen(port, () => {
    console.log(`delight chef is running on port: ${port}`);
})
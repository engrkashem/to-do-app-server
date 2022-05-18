const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('To Do App Server is Running.')
});

app.listen(port, () => {
    console.log('To Do App is Listening from Port: ', port);
});
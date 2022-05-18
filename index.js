const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.69xil.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    try {
        await client.connect();
        const taskCollection = client.db('to-do-app').collection('tasks');

        app.post('/task', async (req, res) => {
            const taskInfo = req.body;
            const result = await taskCollection.insertOne(taskInfo);
            res.send(result);
        });

    }
    finally {

    }
};
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('To Do App Server is Running.')
});

app.listen(port, () => {
    console.log('To Do App is Listening from Port: ', port);
});
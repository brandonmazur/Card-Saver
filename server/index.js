const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const apiPort = 3000
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://defaultuser:card-saver@cluster0.3mczq.mongodb.net/card-saver-db?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json());
app.use(bodyParser.json())

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use("/", require("./routes/coordinatesRoute"))

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

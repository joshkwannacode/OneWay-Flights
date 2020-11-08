const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const savedInfoRoutes = require('./server/routes/savedInfo');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
if (uri) mongoose.connect(uri, () => { }, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Mongodb connection succesfully established ");
});

app.use(express.static('./client/build'));

app.use('/savedInfo', savedInfoRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

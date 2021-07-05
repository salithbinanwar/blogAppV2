const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config();
const path = require('path')
// const port = 8080;
let port = process.env.PORT

const blogData = require('./blogData/blogData')
// app initialization
app.use(cors());
app.use(express.json())
app.use(express.static('build'))
// connecting with mongoose

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('db connected');
}).catch(err => console.log(err))

// show data
app.use('/all', blogData);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'))
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
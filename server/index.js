const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('../database/index')

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../client/dist/')))

// server.get('/sup', (req, res) => {
//     res.send('hello from get')
// }) 



server.listen(port, () => console.log('Im listening on port', port));


'use strict';

const express = require('express');
const path = require('path');
const multer = require('multer');
var upload = multer();

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.post('/upload', upload.single('upfile'), (req, res) => {
  const size = req.file ? req.file.size : null;
  res.send({
    size: size
  });
});

app.listen(3000);

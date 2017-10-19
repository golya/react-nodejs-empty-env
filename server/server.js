import container from './container';

const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json());
container.get('store').init();

const basePath = '/api';

app.use('/', express.static(path.join(__dirname, '../dist/public')))
app.use('*', express.static(path.join(__dirname, '../dist/public')))

app.listen(8080, function () {
  console.log('Server listening on port 8080!')
})

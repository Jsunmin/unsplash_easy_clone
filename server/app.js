const express = require('express');
const routes = require('./routes.js');
const db = require('./db/comfig.js');

const app = express();
db();

app.set('port', process.env.PORT || 5050);

app.use('/', routes);

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}...`)
})
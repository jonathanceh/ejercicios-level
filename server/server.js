require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.use(require('./routes/routes'));

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useCreateIndex', true);


mongoose.connect('mongodb://localhost:27017/fitDB', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, }, (err, res) => {
    if (err) throw err;

    console.log('Base de datos online');

});

app.listen(process.env.PORT, () => {
    console.log('escuchando en el puerto', process.env.PORT);
})
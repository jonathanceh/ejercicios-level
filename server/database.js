const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(console.log('Base de datos online'))
    .catch(err => console.log(err));
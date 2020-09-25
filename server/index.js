require('./config/config');
const app = require('./server');
require('./database');

app.listen(process.env.PORT, () => {
    console.log('escuchando en el puerto', process.env.PORT);
})
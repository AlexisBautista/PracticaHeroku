const mongoose = require('mongoose');
const URL = 'mongodb+srv://admin:1234@cluster0.lq0sn.mongodb.net/test';

mongoose.connect(URL, {
  
  useNewUrlParse: true,
  useUnifiedTopology: true
})

.then(db => console.log('Conexion exitosa'))
.catch(err => console.log('Error de conexion a la DB: ' + err));

module.exports = mongoose;


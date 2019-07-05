const express = require('express');
const app = express();
const db = require('./models/index');

app.use(express.json());

app.get('/', (req, resp) => {

  resp.send('>>> Foi! <<<')
});

app.use('/users', require('./routes/user'));
app.use('/orders', require('./routes/orders'));
app.use('/products', require('./routes/products'));

app.listen(2029, () => {
  console.log('>>>Rodando<<<');
});

db.sequelize.sync();

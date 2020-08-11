const express = require('express');
const app = express();
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const PORT = 3000;

//Router
const routeIndex = require('./src/routes/index')
const routeUser = require('./src/routes/users')
const routeProduct = require('./src/routes/products')
const routeOrder = require('./src/routes/orders')
const routeJwt = require('./src/routes/jwts')

dotenv.config();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(bodyParser.json())

//definisi router pd path "/ongkir"
// app.use('/ongkir', apiRouter);
app.use('/', routeIndex)
app.use('/user', routeUser)
app.use('/product', routeProduct)
app.use('/order', routeOrder)
app.use('/jwt', routeJwt)


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
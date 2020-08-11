const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

// kuhapus karna bikin error mas
//Router
const routeUser = require('./src/routes/users')
const routeProduct = require('./src/routes/products')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//definisi router pd path "/ongkir"
app.use('/ongkir', apiRouter);
app.use('/user', routeUser)


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
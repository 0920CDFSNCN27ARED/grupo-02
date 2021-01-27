const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/product');
const methodOverride = require('method-override');
const app = express();
const session = require('express-session');
const authenticate = require('./middlewares/authenticate');

app.set('view engine', 'ejs');

app.use(express.urlencoded( { extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(session({secret: 'Secret'}));
app.use(authenticate);

app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/cart', cartRoutes);
app.use('/product', productRoutes);

module.exports = app;
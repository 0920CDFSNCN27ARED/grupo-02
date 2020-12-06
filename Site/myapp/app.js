const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/product');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/cart', cartRoutes);
app.use('/product', productRoutes);
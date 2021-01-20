const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/product');
const methodOverride = require('method-override');
const { Session } = require('inspector');
const app = express();
// agrego esta constante
const session =require ("express-session");
const authenticate = require('./Middlewares/authenticate');
//
app.use(express.urlencoded( { extended: false }));
app.use(methodOverride('_method'));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/cart', cartRoutes);
app.use('/product', productRoutes);
app.use(
    session ({
        secret: "prueba"
    })
);
// para que traiga el user en index
app.get ("/", authenticate, (req, res, next) => {
    res.render ("index",{
        user: req.loggedUser,
    })
})
module.exports = app;
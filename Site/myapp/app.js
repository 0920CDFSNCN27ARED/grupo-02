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
const remember = require('./middlewares/remember');
const cookieParser = require('cookie-parser');
const apiProductsRouter = require('./routes/api/productsRoutes');
const apiUsersRoutes = require('./routes/api/usersRoutes');

app.set('view engine', 'ejs');

app.use(express.urlencoded( { extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(session({secret: 'Secret'}));
app.use(authenticate);
app.use(cookieParser());
app.use(remember);

app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/cart', cartRoutes);
app.use('/product', productRoutes);

app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRoutes);

app.use ((req,res,next) => {
    res.status(404).render('non-found');
})

module.exports = app;
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/cart', (req,res)=>{
    res.sendFile(__dirname + '/views/cart.html');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/producDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/producDetail.html');
});
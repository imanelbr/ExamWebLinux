//exemple de controlleur pour model product

let reservation = require('../models/reservation');
let voyageurs = ('../models/voyageurs');
let resList = [];
let voyList = [];

let express = require("express");
let app= express();
let session = require('express-session');

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))

exports.Reservation = function (req, res){
    res.render('home.ejs', {reservation: resList} );
}
// exports.sesReservation = function (req, res){
//     req.session.form1 = req.params.form1;
//     console.log(req.session);
// }

exports.Encodage = function (req, res){
    res.render('person.ejs', {voyageurs: voyList});
}

exports.Validation = function (req, res){
    res.render('validation.ejs');
}

exports.Confirmation = function (req, res){
    res.render('confirmation.ejs');
}

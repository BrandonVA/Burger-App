const express = require('express');
const burger = require('../models/burger');

module.exports = app => {
    app.get('/', (req, res) => {
        burger.renderAll((data) => {
            res.render("index", data);
        });
    });
    app.put('/api/devour/', (req, res) => {
        const burgerToDevour = req.body.id;
        burger.devourOne(burgerToDevour);
    });
    app.post('/api/addBurger/', (req, res) => {
        const burgerName = req.body.name;
        burger.createBurger(burgerName);
    })
}

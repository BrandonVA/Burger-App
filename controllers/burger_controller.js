const express = require('express');
const burger = require('../models/burger');

module.exports = app => {
    app.get('/', (req, res) => {
        burger.renderAll((data) => {
            res.render("index", data);
        });
    });
    app.put('/api/devour/:id', (req, res) => {
        const burgerToDevour = req.params.id;
        burger.devourOne(burgerToDevour);
    });
    app.post('/api/addBurger/:burgerName', (req, res) => {
        const burgerName = req.params.burgerName;
        burger.createBurger(burgerName);
    })
}

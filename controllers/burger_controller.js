const express = require('express');
const burger = require('../models/burger');

module.exports = app => {
    // On home page render all the burgers form the db using handle bars.
    app.get('/', (req, res) => {
        burger.renderAll((data) => {
            res.render("index", data);
        });
    });
    // Updating burgers devoured trait based on id passed in the put ajax call.
    app.put('/api/devour/', (req, res) => {
        const burgerToDevour = req.body.id;
        burger.devourOne(burgerToDevour);
    });
    // Creating new burger with the value based through on the post ajax call
    app.post('/api/addBurger/', (req, res) => {
        const burgerName = req.body.name;
        burger.createBurger(burgerName);
    })
}

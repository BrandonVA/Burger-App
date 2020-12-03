const express = require('express');
const burger = require('../models/burger');

module.exports = app => {
    app.get('/', (req, res) => {
        burger.renderAll(res);
    })
}

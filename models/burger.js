const ormBurgers = require('../config/orm');

const burger = {
    createBurger: function(title) {
        const newBurger = {
            burger_name: title,
            devoured: false
        };
        ormBurgers.insertOne(newBurger);
    }
}
module.exports = burger;
const orm = require('../config/orm');

const burger = {
    renderAll: function(res) {
        orm.selectAll(res, 'burgers', (data) => {
            const devouredBurgers = data.filter(burger => burger.devoured === 1);
            const burgersToDevour = data.filter(burger => burger.devoured === 0);
            const burgerList = {
                burgerToEat: burgersToDevour,
                devouredBurgers: devouredBurgers
             }

            res.render("index", burgerList);
        })
    },
    createBurger: function(title) {
        const newBurger = {
            burger_name: title,
            devoured: false
        };
        orm.insertOne('burgers', newBurger);
    },
    devourOne: function(burgerid) {
        //table, setColumn, columnValue, rowID
        orm.updateOne('burgers', 'devoured', true, burgerid);
    }
}
module.exports = burger;
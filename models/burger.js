const orm = require('../config/orm');

const burger = {
    renderAll: function(cb) {
        orm.selectAll('burgers', (data) => {
            const devouredBurgers = data.filter(burger => burger.devoured === 1);
            const burgersToDevour = data.filter(burger => burger.devoured === 0);
            const burgerList = {
                burgerToEat: burgersToDevour,
                devouredBurgers: devouredBurgers
             }
             cb(burgerList);
            
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
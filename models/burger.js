const orm = require('../config/orm');

// burger object to use to manipulate the data base based on burger specific data.
const burger = {
    // Method for Rendering all the burgers in the db accepts a callback function.
    renderAll: function (cb) {
        // Calling the orm to get data for for burgers table.
        orm.selectAll('burgers', (data) => {
            // inside the callback split data up based on the devour trait.
            const devouredBurgers = data.filter(burger => burger.devoured === 1);
            const burgersToDevour = data.filter(burger => burger.devoured === 0);
            // Once data is split create an obj to hold the data.
            const burgerList = {
                burgerToEat: burgersToDevour,
                devouredBurgers: devouredBurgers
            }
            // calling the callback function that will that the object built and render it out using handlebars.
            cb(burgerList);

        })
    },
    // Method to create a new burger accepts a cb function.
    createBurger: function (title) {
        // Creating an obj to set the devoured trait to false and setting the title to the name passed through.
        const newBurger = {
            burger_name: title,
            devoured: false
        };
        // Calling the orm to insert a new row into the burger table with the obj as the data.
        orm.insertOne('burgers', newBurger);
    },
    // Method to Update the devoured trait on the selected burger based on the id accepts a param as the id.
    devourOne: function (burgerid) {
        // ORM params... table, setColumn, columnValue, rowID
        orm.updateOne('burgers', 'devoured', true, burgerid);
    }
}
module.exports = burger;
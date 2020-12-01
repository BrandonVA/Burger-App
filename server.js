const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

// Creating the app and setting up the port
const app = express();
const PORT = process.env.PORT || 8080;


// Enable app to use data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up static paths
app.use(express.static(path.join(__dirname, 'public')));

// Sets up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing in the routes for the api program side of the app.
// require('./routes/apiRoutes')(app);
// Importing in the routes for the static html links for the client side of the app.
// require('./routes/htmlRoutes')(app);
// -------------------------------------------------------------------------------------------
const ormBurger = require('./config/orm');
ormBurger.selectAll();

const burger = require('./models/burger');
let burgerTitle = 'Fillet of Fish';
burger.createBurger(burgerTitle)

ormBurger.selectAll();
// -------------------------------------------------------------------------------------------
// Listen for a call to see what to do next
app.listen(PORT, ()=> {
    console.log(`Listing at port: ${PORT}`);
})

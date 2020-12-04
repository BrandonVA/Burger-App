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

// Listing for routes
require('./controllers/burger_controller')(app);


// Listen for a call to see what to do next
app.listen(PORT, ()=> {
    console.log(`Listing at port: ${PORT}`);
})

// Modules import
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// Import the routes
const routes = require('./routes');

// Create a server with express
const server = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://tindev:tindev@tindev-7cgk9.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Allow the React to communicates with the application
server.use(cors());

// Tell to express to use json on request
server.use(express.json());

// Add the routes module to express server
server.use(routes);

// Start the server listening at port 3333
server.listen(3333);


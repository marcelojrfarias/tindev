// Modules import
const express = require('express');

// Create a express router
const routes = express.Router();

// Import the dev creator route
const DevController = require('./controllers/DevController')

// Import the like creator route
const LikeController = require('./controllers/LikeController')

// Import the dislike creator route
const DislikeController = require('./controllers/DislikeController')

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

// Exports the routes module
module.exports = routes;

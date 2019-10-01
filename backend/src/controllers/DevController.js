const axios = require('axios');

// Import the dev model
const Dev = require('../models/Dev')

// Exports the developer creator route
module.exports = {
    async index(req, res) {
      const { user } = req.headers;
      
      const loggedDev = await Dev.findById(user);

      const users = await Dev.find({
          $and: [
              { _id: { $ne: user } },
              { _id: { $nin: loggedDev.likes } },
              { _id: { $nin: loggedDev.dislikes } }
          ]
      })

      return res.json(users);
    },
    async store(req, res) {
        // Get the username from request body
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if (userExists) {
            return res.json(userExists);
        }

        // Get by API the developer data from GitHub
        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })

        // Return the developer data to requester
        return res.json(dev);
    }
};
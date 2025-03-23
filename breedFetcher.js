const needle = require('needle');

const fetchBreedDescription = function(breed, callback) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (body.length === 0) {
      return callback("breed not found", null);
    }

    callback(null, body[0].description);
  });
};

module.exports = { fetchBreedDescription };
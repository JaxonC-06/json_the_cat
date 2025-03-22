const needle = require('needle');
const breed = process.argv[2];

needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) throw "There was a problem accessing the URL";

  if (body.length === 0) {
    console.log(`The breed ${breed} could not be found. Please verify the existence or spelling of the cat breed: ${breed}`);
    return;
  }

  if (!error && response.statusCode === 200) {
    console.log(body[0].description);
  }
});
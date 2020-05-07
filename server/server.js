const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/createRouter.js');
const cors = require('cors');
const parser = require('body-parser');

app.use(parser.json());
app.use(cors())

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('art_hub');
  const artsCollection = db.collection('arts');
  const artsRouter = createRouter(artsCollection);
  app.use('/api/artist', artsRouter);

})
.catch(console.error);

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('film_hub');
  const filmCollection = db.collection('film');
  const filmRouter = createRouter(filmCollection);
  app.use('/api/film', filmRouter);

})
.catch(console.error);

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('fashion_hub');
  const fashionCollection = db.collection('fashion');
  const fashionRouter = createRouter(fashionCollection);
  app.use('/api/fashion', fashionRouter);

})
.catch(console.error);

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('music_hub');
  const musicCollection = db.collection('music');
  const musicRouter = createRouter(musicCollection);
  app.use('/api/music', musicRouter);

})
.catch(console.error);


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});

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
  const db = client.db('popArt_Hub');
  const artistsCollection = db.collection('artists');
  const artistsRouter = createRouter(artistsCollection);
  app.use('/api/artists', artistsRouter);


  const filmsCollection = db.collection('films');
  const filmsRouter = createRouter(filmsCollection);
  app.use('/api/films', filmsRouter);

  const designersCollection = db.collection('designers');
    const designersRouter = createRouter(designersCollection);
    app.use('/api/designers', designersRouter);

      const albumsCollection = db.collection('albums');
      const albumsRouter = createRouter(albumsCollection);
      app.use('/api/albums', albumsRouter);


})
.catch(console.error);


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});

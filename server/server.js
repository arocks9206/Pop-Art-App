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

const keyartistsCollection = db.collection('keyartists');
const keyartistsRouter = createRouter(keyartistsCollection);
app.use('/api/keyartists', keyartistsRouter);

const artworksCollection = db.collection('artworks');
const artworksRouter = createRouter(artworksCollection);
app.use('/api/artworks', artworksRouter);

const quizCollection = db.collection('quiz');
const quizRouter = createRouter(quizCollection);
app.use('/api/quiz', quizRouter);

const favouritesCollection = db.collection('favourites');
const favouritesRouter = createRouter(favouritesCollection);
app.use('/api/favourites', favouritesRouter);



})
.catch(console.error);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});

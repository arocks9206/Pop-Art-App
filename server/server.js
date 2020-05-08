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


  const roylichtCollection = db.collection('roylicht');
  const roylichtRouter = createRouter(roylichtCollection);
  app.use('/api/roylicht', roylichtRouter);

  const andywarholCollection = db.collection('andywarhol');
  const andywarholRouter = createRouter(andywarholCollection);
    app.use('/api/andywarhol', andywarholRouter);




})
.catch(console.error);


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});

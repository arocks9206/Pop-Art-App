use art_hub
use film_hub
use fashion_hub
use music_hub
db.dropDatabase();

db.arts.insertMany([
  {
    artist: "art1"
  },
  {
    artist: "art2"
  }
])

db.film.insertMany([
  {
    film: "movie1"
  },
  {
    film: "movie2"
  }
])

db.fashion.insertMany([
  {
    design: "design1"
  },
  {
    design: "design2"
  }
])

db.music.insertMany([
  {
    band: "band1"
  },
  {
    band: "band2"
  }
])

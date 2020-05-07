use popArt_Hub
db.dropDatabase();


db.artists.insertMany([
  {
    artist: "art1test"
  },
  {
    artist: "art2"
  }
])

db.films.insertMany([
  {
    film: "movie1"
  },
  {
    film: "movie2"
  }
])

db.designers.insertMany([
  {
    design: "design1"
  },
  {
    design: "design2"
  }
])

db.albums.insertMany([
  {
    band: "Beatles",
	description: "The 1967 album cover for Sgt. Pepper’s Lonely Hearts Club Band was made by Peter Blake. The concept was for the four Beatles themselves to appear in costume as Sgt. Pepper’s Lonely Hearts Club Band, surrounded by a gathering of influential people as if they had just performed a concert. A total of 58 different people are depicted on the final artwork.",
	artist:"Peter Blake",
	album: "https://www.udiscovermusic.com/wp-content/uploads/2018/01/SgtPepper-1.jpg",
	musicVideo: "https://www.youtube.com/watch?v=UYeV7jLBXvA&list=PLg5pp7nrH0Io_PZWTH257wcrhEA4dcATo&index=13",
  album: "Sgt. Pepper’s Lonely Hearts Club Band"
},
{
  band: "The Velvet Underground",
description: "Many people know that Andy Warhol designed the now-famous banana artwork for The Velvet Underground’s first record, The Velvet Underground & Nico. What some may not know is that Andy Warhol was actually the band’s manager during that time as well. Born out of Warhol’s desire to make art in as many different mediums as possible, he worked with the band to create a strange, cacophonous, distorted record that took on topics that other bands at the time wouldn’t. While the record didn’t sell many copies, it is still considered to be one of the most influential albums in modern rock music.",
artist:"Andy Warhol",
album: "https://upload.wikimedia.org/wikipedia/en/0/0c/Velvet_Underground_and_Nico.jpg",
musicVideo: "https://www.youtube.com/watch?v=CGqwy_DQnS4&list=PLBkPWPmDlcDFTYkPNfes6HiKyZLPA242u&index=5",
album: "Banana"
},
{
  band: "The Who",
description: "Sir Peter Blake, the grandaddy of pop-art, has created the album artwork for The Who’s 2019 album, imaginatively called Who. Blake’s design features a medley of cultural icons in a colourful grid of references. Muhammad Ali, Batman, the Union Flag, the Routemaster bus and baked beans all make an appearance on the cover artwork, alongside Blake’s trademark mishmash of colourful symbols and typography.",
artist:"Peter Blake",
album: "https://upload.wikimedia.org/wikipedia/en/e/eb/WHO_%28The_Who_2019_album%29.jpeg",
musicVideo: "https://www.youtube.com/watch?v=h2IN8wYqQ6E",
album: "Who"
},
{
  band: "David Bowie",
description: "Without You is a song written and recorded by David Bowie in 1983 for his fifteenth studio album Let's Dance. The front cover features artwork by the pre-eminent artist Keith Haring.",
artist:"Keith Haring",
album: "https://upload.wikimedia.org/wikipedia/en/0/0d/Bowie_withoutyou.jpg",
musicVideo: "https://www.youtube.com/watch?v=_gjZP8OPH-U",
album: "Without You"
},

])

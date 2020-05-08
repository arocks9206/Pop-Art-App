use popArt_Hub;
db.dropDatabase();

db.andywarhol.insertMany([
   {
      artistName: "Andy Warhol",
      artistBio: "Andy Warhol was an American pop artist best known using both avant-garde and commercial sensibilities that often blurred the lines between fine art and mainstream aesthetics. He ventured into a variety of art forms including performance art, filmmaking, video installations, and writing.",
      artistImageURL: "https://d32dm0rphc51dk.cloudfront.net/HmNcK3X-t6WR9UV9AJAb4g/large.jpg"
    },

  {
    artWorks: [
      {
        artTitle: "Campbell’s Soup Cans",
        yearCreated: 1962,
        medium: "Synthetic polymer paint on canvas",
        imageURL: "http://www.sothebys.com/content/dam/sothebys-pages/auction-sales-slides/2018/03/l18160_df_warhol3.jpg"
      },
      {
        artTitle: "Marilyn x 100",
        yearCreated: 1962,
        medium: "Screenprint ink and synthetic polymer paint on canvas",
        imageURL: "https://6d49d47bd32a151032ae-907965fc79c9900a93c12efeb23103bd.ssl.cf1.rackcdn.com/artworks/andy_warhol_1.jpg"
      }
    ]
  },
  {
    films: {
      title: "Empire",
      director: "Andy Warhol",
      year: 1964,
      description: "A single shot of the Empire State Building from early evening until nearly 3 am the next day.",
      catalogueEntries: [
        {
          text: "Empire consists of a single stationary shot of the Empire State Building filmed from 8:06 p.m. to 2:42 a.m., July 25–26, 1964. The eight-hour, five-minute film, which is typically shown in a theater, lacks a traditional narrative or characters. The passage from daylight to darkness becomes the film’s narrative, while the protagonist is the iconic building that was (and is again) the tallest in New York City. Warhol lengthened Empire’s running time by projecting the film at a speed of sixteen frames per second, slower than its shooting speed of twenty-four frames per second, thus making the progression to darkness almost imperceptible. Non-events such as a blinking light at the top of a neighboring building mark the passage of time. According to Warhol, the point of this film—perhaps his most famous and influential cinematic work—is to 'see time go by'.",
          source: "Gallery label from Out of Time: A Contemporary View, August 30, 2006–April 9, 2007, MoMA."
        },
        {
          text: "Empire consists of one stationary shot of the Empire State Building taken from the forty-fourth floor of the Time-Life Building. Jonas Mekas served as cameraman. The shot was filmed from 8:06 p.m. to 2:42 a.m. on July 25-26, 1964. Empire consists of a number of one-hundred-foot rolls of film, each separated from the next by a flash of light. Each segment of film constitutes a piece of time. Warhol’s clear delineation of the individual segments of film can be likened to the serial repetition of images in his silkscreen paintings, which also acknowledge their process and materials. Warhol conceived a new relationship of the viewer to film in Empire and other early works, which are silent, explore perception, and establish a new sense of cinematic time. With their disengagement, lack of editing, and lengthy nonevents, these films were intended to be part of a larger environment. They also parody the goals of his avant-garde contemporaries who sought to convey the human psyche through film or used the medium as metaphor.",
          source: "Publication excerpt from The Museum of Modern Art, MoMA Highlights, New York:The Museum of Modern Art, revised 2004, originally published 1999, p. 240."
        }
      ],
      URL: "https://www.youtube.com/embed/-sSsWj2HWk0",
      images: [
        {URL: "https://upload.wikimedia.org/wikipedia/en/2/24/Empire_Screenshot_Warhol.jpg"}
      ]
    }
  },
  {
    musicInfluence: {
      band: "The Velvet Underground",
      description: "Many people know that Andy Warhol designed the now-famous banana artwork for The Velvet Underground’s first record, The Velvet Underground & Nico. What some may not know is that Andy Warhol was actually the band’s manager during that time as well. Born out of Warhol’s desire to make art in as many different mediums as possible, he worked with the band to create a strange, cacophonous, distorted record that took on topics that other bands at the time wouldn’t. While the record didn’t sell many copies, it is still considered to be one of the most influential albums in modern rock music.",
      artist:"Andy Warhol",
      albumImg: "https://upload.wikimedia.org/wikipedia/en/0/0c/Velvet_Underground_and_Nico.jpg",
      musicVideo: "https://www.youtube.com/watch?v=CGqwy_DQnS4&list=PLBkPWPmDlcDFTYkPNfes6HiKyZLPA242u&index=5",
      album: "Banana"
    }
  },
]);

db.roylicht.insertMany([
  {
      artistName: "Roy Lichtenstein",
      artistBio: "Roy Lichtenstein was an American pop artist. During the 1960s, he became a leading figure in the new art movement among many other artists. His work defined the premise of pop art through parody. Inspired by the comic strip, Lichtenstein produced precise compositions that documented while they parodied, often in a tongue-in-cheek manner. His work was influenced by popular advertising and the comic book style.",
      artistImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Roy_Lichtenstein.jpg/1024px-Roy_Lichtenstein.jpg"
  },
  {
    paintings: [
      {
        artTitle: "Whaam!",
        yearCreated: 1963,
        medium: "Acrylic and oil paint on canvas",
        imageURL: "https://www.tate.org.uk/art/images/work/T/T00/T00897_10.jpg"
      },
      {
        artTitle: "Drowning Girl",
        yearCreated: 1963,
        medium: "Oil and synthetic polymer paint on canvas",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/d/df/Roy_Lichtenstein_Drowning_Girl.jpg"
      },
    ]
  },
  {
    sculptures: [
      {
        artTitle: "Head with Black Shadow",
        yearCreated: "1966",
        medium: "Glazed Ceramic",
        imageURL:"https://www.imageduplicator.com/sat/sat_big_image.php?image_name=images/works/0189_01.jpg"
      },
      {
        artTitle: "Barcelona Head",
        yearCreated: "1992",
        medium: "Concrete and ceramic",
        imageURL:"https://www.imageduplicator.com/sat/sat_big_image.php?image_name=images/works/1402_01.jpg"
      }
    ]
  }
]);

db.artists.insertMany([
  {
    artistName: "Robert Rauschenberg",
    artistBio: "Robert Rauschenberg was an American painter and graphic artist whose early works anticipated the pop art movement. Rauschenberg is well known for his combines of the 1950s, in which non-traditional materials and objects were employed in various combinations. Rauschenberg was both a painter and a sculptor, and the combines are a combination of the two, but he also worked with photography, printmaking, papermaking and performance.",
    artistImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Robert_Rauschenberg_%281968%29.jpg/1024px-Robert_Rauschenberg_%281968%29.jpg",
    otherArtWorks: [
      {
        artTitle: "Retroactive I",
        yearCreated: 1963,
        medium: "Oil and silkscreen ink on canvas",
        imageURL: "https://www.rauschenbergfoundation.org/art/artwork/retroactive-i"
      },
      {
        artTitle: "Storyline I (Reels [B+C])",
        yearCreated: 1968,
        medium: "Lithograph",
        imageURL: "https://www.rauschenbergfoundation.org/art/artwork/storyline-i-reels-bc"
      }
    ]
  },
  {
    artistName: "Richard Hamiliton",
    artistBio: "Richard Hamilton was an English painter and collage artist. His 1955 exhibition Man, Machine and Motion (Hatton Gallery, Newcastle upon Tyne) and his 1956 collage Just what is it that makes today's homes so different, so appealing?, produced for the This Is Tomorrow exhibition of the Independent Group in London, are considered by critics and historians to be among the earliest works of pop art.",
    artistImageURL: "https://upload.wikimedia.org/wikipedia/en/8/80/Richard_Hamilton_Artist.jpg",
    otherArtWorks: [
      {
        artTitle: "Just what is it that makes today’s homes so different, so appealing?",
        yearCreated: 1956,
        medium: "Collage",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/f/ff/Hamilton-appealing2.jpg"
      },
      {
        artTitle: "My Marilyn",
        yearCreated: 1965,
        medium: "Screenprint on paper",
        imageURL: "https://www.tate.org.uk/art/images/work/P/P04/P04251_10.jpg"
      }
    ]
  },
  {
    artistName: "Peter Blake",
    artistBio: "Peter Blake is an English pop artist, best known for co-creating the sleeve design for the Beatles' album Sgt. Pepper's Lonely Hearts Club Band and for two of the Who's albums. One of the best known British pop artists, Blake is considered to be a prominent figure in the pop art movement.Central to his paintings are his interest in images from popular culture which have infused his collages.",
    artistImageURL: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/02/06/09/peterblake.jpg?width=1368&height=912&fit=bounds&format=pjpg&auto=webp&quality=70",
    otherArtWorks: [
      {
        artTitle: "Sgt. Pepper's Lonely Hearts Club Band",
        yearCreated:1967,
        medium: "Print, collage",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg"
      },
      {
        artTitle: "Self-Portrait with Badges",
        yearCreated: 1961,
        medium: "Oil paint on board",
        imageURL: "https://www.tate.org.uk/art/images/work/T/T02/T02406_10.jpg"
      }
    ]
  }
]);

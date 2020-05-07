use popArt_Hub
db.dropDatabase();

db.films.insertMany([
  {
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
  },
  {
    title: "Chelsea Girls",
    director: "Andy Warhol",
    year: 1967,
    description: "Lacking a formal narrative, Warhol's art house classic follows various residents of the Chelsea Hotel in 1966 New York City, presented in a split screen with a single audio track in conjunction with one side of screen.",
    catalogueEntries: [
      {
        text: "At a screening of The Chelsea Girls, I once heard somebody behind me ask, ‘Is this a real movie?' This was a distinction used to suggest the difference between a Hollywood movie and a porno film or some other type of experimental cinema. To Andy, the movie was a movie, and that’s all that mattered. It was more real than any real movie.",
        source: "Gus Van Sant in Andy Warhol’s The Chelsea Girls, by Geralyn Huxley and Greg Pierce, published by Distributed Art Publishers"
      },
      {
        text: "Chelsea Girls was the movie that made everyone sit up and notice what we were doing in films (and a lot of times that meant sit up, stand up, and walk out). Until then the general attitude toward what we did was that it was “artistic” or “camp” or “a put-on” or just plain “boring.” But after Chelsea Girls, words like degenerate and disturbing and homosexual and druggy and nude and real started being applied to us regularly.",
        source: "Andy Warhol, from warhol.org"
      }
    ],
    URL: "https://www.youtube.com/watch?v=m7sL8LuMD8Q",
    images: [
      {
        URL: "https://www.warhol.org/wp-content/uploads/2018/09/chelseagirls1_high_res-475x171.jpg",
        caption: "1966. Pictured: Nico / Ondine, ©2018 The Andy Warhol Museum, Pittsburgh, PA, a museum of Carnegie Institute. All rights reserved"
      }
    ]
  },
  {
    title: "Breathless",
    originalTitle: "À bout de souffle",
    director: "Jean-Luc Godard",
    year: 1960,
    description: "A small-time thief steals a car and impulsively murders a motorcycle policeman. Wanted by the authorities, he reunites with a hip American journalism student and attempts to persuade her to run away with him to Italy. (IMDB)",
    catalogueEntries: [
      {
      text: "'Breathless' is a pop artifact and a daring work of art, made at a time when the two possibilities existed in a state of almost perfect convergence. That is the source of its uniqueness. Much as it may have influenced what was to come later, there is still nothing else quite like it. Its sexual candor is still surprising, and even now, at 50, it is still cool, still new, still  after all this time!  a bulletin from the future of movies.",
      source: "A.O. Scott, 'A Fresh Look Back at Right Now'"
      }
    ],
    URL: "https://www.youtube.com/embed/WCDEAu4R8hA",
    images: [
      {
        URL: "https://www.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/breathless-1960-001-jean-paul-belmondo-jean-seberg-00m-hew-16x9.jpg?itok=KVHjNbkv",
        caption: "Jean-Paul Belmono and Jean Seberg on the Champs-Élysées in Jean-Luc Godard’s French New Wave masterpiece Breathless (1960)"
      }
    ]
  },
  {
    title: "Blowup",
    director: "Michelangelo Antonioni",
    year: 1966,
    description: "A mod London photographer finds something very suspicious in the shots he has taken of a mysterious beauty in a desolate park.",
    catalogueEntries: [
      {
        text: "[Antonioni] turns towards Rauschenberg, Richard Hamilton and Ian Stephenson for Blow-Up. Pop Art and Swinging London mingle in a world of fashion, appearances, photography and 'mutability of evidence'",
        source: "David Alan Mellor, 'Antonio's Blow-Up"
      }
    ],
    URL: "https://www.youtube.com/watch?v=jlzzfR23s4I",
    images: [
      {
        URL: "https://assets.mubicdn.net/images/notebook/post_images/23986/images-w1400.jpg?1501242466",
        caption: "Iconic film poster"
      }
    ]
  }
]);

db.artists.insertMany([
  {
    artistName: "Roy Lichtenstein",
    artistBio: "Roy Lichtenstein was an American pop artist best known for his    boldly- colored parodies of comic strips and advertisements.",
    artistImageURL: "https://www.tate.org.uk/art/artworks/robert-roy-lichtenstein-ar00217",
    otherArtWorks: [
      {
        artTitle: "Whaam!",
        yearCreated: 1963,
        medium: "Acrylic and oil paint on canvas",
        imageURL: "https://www.imageduplicator.com/sat/sat_big_image.php?image_name=images/works/0137_01.jpg"
      },
      {
        artTitle: "Head with Black Shadow",
        yearCreated: "1966",
        medium: "Glazed Ceramic",
        imageURL:"https://www.imageduplicator.com/sat/sat_big_image.php?image_name=images/works/0189_01.jpg"
      }
    ]
  },
  {
    artistName: "Andy Warhol",
    artistBio: "Andy Warhol was an American pop artist best known using both avant-garde and commercial sensibilities that often blurred the lines between fine art and mainstream aesthetics. He ventured into a variety of art forms including performance art, filmmaking, video installations, and writing.",
    artistImageURL: "https://www.tate.org.uk/art/artworks/robert-andy-warhol-ar00219",
    otherArtWorks: [
      {
        artTitle: "Campbell’s Soup Cans",
        yearCreated: 1962,
        medium: "Synthetic polymer paint on canvas",
        imageURL: "https://www.moma.org/collection/works/79809",
        // otherArtWorks:
      },
      {
        artTitle: "Marilyn x 100",
        yearCreated: 1962,
        medium: "Screenprint ink and synthetic polymer paint on canvas",
        imageURL: "https://www.clevelandart.org/art/1997.246"
      }
    ]
  },
  {
    artistName: "Robert Rauschenberg",
    artistBio: "Robert Rauschenberg was an American painter and graphic artist whose early works anticipated the pop art movement. He is well known for his 'combines' of the 1950s, in which non-traditional materials and objects were employed in various combinations.",
    artistImageURL: "https://www.tate.org.uk/art/artworks/robert-robert-rauschenberg-ar00216",
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
    artistBio: "Richard Hamilton was an English painter and collage artist and is considered to be among the earliest artist of the Pop Art movement",
    artistImageURL: "https://www.tate.org.uk/art/artworks/hamilton-palindrome-p79815",
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
        imageURL: "https://www.tate.org.uk/art/artworks/hamilton-my-marilyn-p04251"
      }
    ]
  }

]);


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

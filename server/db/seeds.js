use popArt_Hub;
db.dropDatabase();

db.artists.insertMany([
   {
      name: "Andy Warhol",
      shortBio: "Andy Warhol was an American pop artist best known using both avant-garde and commercial sensibilities that often blurred the lines between fine art and mainstream aesthetics. He ventured into a variety of art forms including performance art, filmmaking, video installations, and writing.",
      careerBio: [
        "In the early 1960s, he began to experiment with reproductions based on advertisements, newspaper headlines and other mass-produced images from American popular culture such as Campbell's soup tins and Coca Cola bottles. In 1962, he began his series portraits of Marilyn Monroe. Other subjects given similar treatment included Jackie Kennedy and Elvis Presley. The same year he took part in the New Realists exhibition in New York, which was the first important survey of Pop Art.",
        "In 1963, Warhol began to make experimental films. His studio, known as the Factory, became a meeting point for young artists, actors, musicians and hangers-on. One of these, Valerie Solanas, shot and seriously wounded him in 1968."
      ],
      artistImageURL: "https://d32dm0rphc51dk.cloudfront.net/HmNcK3X-t6WR9UV9AJAb4g/large.jpg"
    },

    {
      name: "Roy Lichtenstein",
      shortBio: "Roy Lichtenstein was an American pop artist. During the 1960s, he became a leading figure in the new art movement among many other artists. His work defined the premise of pop art through parody. Inspired by the comic strip, Lichtenstein produced precise compositions that documented while they parodied, often in a tongue-in-cheek manner. His work was influenced by popular advertising and the comic book style.",
      careerBio: "A key figure in the Pop art movement and beyond, Roy Lichtenstein grounded his profoundly inventive career in imitation—beginning by borrowing images from comic books and advertisements in the early 1960s, and eventually encompassing those of everyday objects, artistic styles, and art history itself. Referring to Lichtenstein’s equalizing treatment of the subjects he chose for his art, Richard Hamilton, a fellow Pop artist, wrote in 1968: “Parthenon, Picasso or Polynesian maiden are reduced to the same kind of cliché by the syntax of the print: reproducing a Lichtenstein is like throwing a fish back into water. Lichtenstein's emphasis on methods of mechanical reproduction - particularly through his signature use of Ben-Day dots - highlighted one of the central lessons of Pop art, that all forms of communication, all messages, are filtered through codes or languages. Arguably, he learned his appreciation of the value of codes from his early work, which drew on an eclectic range of modern painting. This appreciation may also have later encouraged him to make work inspired by masterpieces of modern art; in these works he argued that high art and popular art were no different: both rely on code.",
      artistImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Roy_Lichtenstein.jpg/1024px-Roy_Lichtenstein.jpg"
    },

]);

db.keyartists.insertMany([

  {
    name: "Robert Rauschenberg",
    shortBio: "Robert Rauschenberg was an American painter and graphic artist whose early works anticipated the pop art movement. Rauschenberg is well known for his combines of the 1950s, in which non-traditional materials and objects were employed in various combinations. Rauschenberg was both a painter and a sculptor, and the combines are a combination of the two, but he also worked with photography, printmaking, papermaking and performance.",
    artistImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Robert_Rauschenberg_%281968%29.jpg/1024px-Robert_Rauschenberg_%281968%29.jpg"
  },

  {
    name: "Richard Hamilton",
    shortBio: "Richard Hamilton was an English painter and collage artist. His 1955 exhibition Man, Machine and Motion (Hatton Gallery, Newcastle upon Tyne) and his 1956 collage Just what is it that makes today's homes so different, so appealing?, produced for the This Is Tomorrow exhibition of the Independent Group in London, are considered by critics and historians to be among the earliest works of pop art.",
    artistImageURL: "https://upload.wikimedia.org/wikipedia/en/8/80/Richard_Hamilton_Artist.jpg"
  },

  {
    name: "Peter Blake",
    shortBio: "Peter Blake is an English pop artist, best known for co-creating the sleeve design for the Beatles' album Sgt. Pepper's Lonely Hearts Club Band and for two of the Who's albums. One of the best known British pop artists, Blake is considered to be a prominent figure in the pop art movement.Central to his paintings are his interest in images from popular culture which have infused his collages.",
    artistImageURL: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/02/06/09/peterblake.jpg?width=1368&height=912&fit=bounds&format=pjpg&auto=webp&quality=70"
  }

]);

db.artworks.insertMany([
  {
    title: "Campbell’s Soup Cans",
    artist: "Andy Warhol",
    category: "painting",
    year: 1962,
    medium: "Synthetic polymer paint on canvas",
    imageURL: "https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2012/06/Warhol.-Soup-Cans-469x292.jpg",
    description: "Campbell's Soup Cans, which is sometimes referred to as 32 Campbell's Soup  Cans, is a work of art produced between November 1961 and March or April 1962. The individual paintings were produced by a printmaking method—the semi-mechanized screen printing process, using a non-painterly style. Campbell's Soup Cans' reliance on themes from popular culture helped to usher in pop art as a major art movement in the United States.",

  },

  {
    title: "Marilyn Diptych",
    artist: "Andy Warhol",
    category: "painting",
    year: 1962,
    medium: "Screenprint ink and synthetic polymer paint on canvas",
    imageURL: "https://d5wt70d4gnm1t.cloudfront.net/media/a-s/articles/3250-840076064929/anatomy-of-an-artwork-marilyn-diptych-1962-by-andy-warhol-900x450-c.jpg",
    description: "Marilyn Monroe died in August 1962, having overdosed on barbiturates. In the following four months, Warhol made more than twenty silkscreen paintings of her, all based on the same publicity photograph from the 1953 film Niagara. Warhol found in Monroe a fusion of two of his consistent themes: death and the cult of celebrity. By repeating the image, he evokes her ubiquitous presence in the media. The contrast of vivid colour with black and white, and the effect of fading in the right panel are suggestive of the star’s mortality.",
  },

  {
    title: "Velvet Underground Cover",
    artist: "Andy Warhol",
    category: "album cover",
    year: 1967,
    caption: "Many people know that Andy Warhol designed the now-famous banana artwork for The Velvet Underground’s first record, The Velvet Underground & Nico. What some may not know is that Andy Warhol was actually the band’s manager during that time as well. Born out of Warhol’s desire to make art in as many different mediums as possible, he worked with the band to create a strange, cacophonous, distorted record that took on topics that other bands at the time wouldn’t. While the record didn’t sell many copies, it is still considered to be one of the most influential albums in modern rock music.",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/0/0c/Velvet_Underground_and_Nico.jpg",
    musicVideo: "https://www.youtube.com/watch?v=CGqwy_DQnS4&list=PLBkPWPmDlcDFTYkPNfes6HiKyZLPA242u&index=5"
  },

  {
    title: "Triple Elvis",
    artist: "Andy Warhol",
    category: "painting",
    year: 1963,
    medium: "Screenprint ink and synthetic polymer paint on canvas",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/5/58/Andy_Warhol_Triple_Elvis.jpg",
    description: "Triple Elvis is a 1963 painting of Elvis Presley by the American artist Andy Warhol. The photographic image of Elvis used by Warhol as a basis for this work, taken from a publicity still from the movie Flaming Star, has become iconic and synonymous with the singer."
  },

  {
    title: "Brillo Soap Pads Boxes",
    artist: "Andy Warhol",
    category: "painting",
    year: 1964,
    medium: "Acrylic, silkscreen, plywood",
    imageURL: "https://images.nortonsimon.org/fcgi-bin/iipsrv.fcgi?IIIF=P1969144001-100.ptif/full/!400,600/0/default.jpg",
    description: "Unlike the corrugated cardboard originals represented in 'Brillo', these sculptures are made of wood. By making the cartons non-functional and uprooting them from their ordinary context, Warhol forces us to look at them freshly. They comment on the way that commercial packaging transforms a mundane, household product into a glamorous, desirable commodity. Warhol also focuses our attention on the significance of these objects as representatives of the impersonal, commercialized consumer society in which we live.",
  },

  {
    title: "Empire",
    artist: "Andy Warhol",
    year: 1964,
    caption: "Empire consists of a single stationary shot of the Empire State Building filmed from 8:06 p.m. to 2:42 a.m., July 25–26, 1964. The eight-hour, five-minute film, which is typically shown in a theater, lacks a traditional narrative or characters. The passage from daylight to darkness becomes the film’s narrative, while the protagonist is the iconic building that was (and is again) the tallest in New York City. Warhol lengthened Empire’s running time by projecting the film at a speed of sixteen frames per second, slower than its shooting speed of twenty-four frames per second, thus making the progression to darkness almost imperceptible. Non-events such as a blinking light at the top of a neighboring building mark the passage of time. According to Warhol, the point of this film—perhaps his most famous and influential cinematic work—is to 'see time go by'.",
    category: 'film',
    filmURL: "https://www.youtube.com/embed/-sSsWj2HWk0",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/2/24/Empire_Screenshot_Warhol.jpg"
  },

  {
    title: "Whaam!",
    artist: "Roy Lichtenstein",
    category: "painting",
    year: 1963,
    medium: "Acrylic and oil paint on canvas",
    imageURL: "https://www.tate.org.uk/art/images/work/T/T00/T00897_10.jpg",
    description:"Whaam! is a 1963 diptych painting by the American artist Roy Lichtenstein. ... Lichtenstein conceived the image from several comic-book panels. He transformed his primary source, a panel from a 1962 war comic book, by presenting it as a diptych while altering the relationship of the graphical and narrative elements."
  },

  {
    title: "Drowning Girl",
    artist: "Roy Lichtenstein",
    category: "painting",
    year: 1963,
    medium: "Oil and synthetic polymer paint on canvas",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/d/df/Roy_Lichtenstein_Drowning_Girl.jpg",
    description: "The painting has been described as a 'masterpiece of melodrama', and is one of the artist's earliest images depicting women in tragic situations, a theme to which he often returned in the mid-1960s. It shows a teary-eyed woman on a turbulent sea. She is emotionally distressed, seemingly from a romance."
  },

  {
    title: "Brushstroke",
    artist: "Roy Lichtenstein",
    category: "painting",
    year: 1965,
    medium: "Screenprint on paper",
    imageURL: "https://www.tate.org.uk/art/images/work/P/P07/P07354_10.jpg",
    description: "In 1965-6 Lichtenstein made a series of paintings depicting enlarged brushstrokes. ... Here Lichtenstein used it to make a direct comment on the elevated content and loaded brushwork of Abstract Expressionism. The brushstroke, as the token of the artist's personal expression, is depersonalised."
  },

  {
    title: "Explosion",
    artist: "Roy Lichtenstein",
    category: "painting",
    year: 1965,
    medium: "Lithograph on paper",
    imageURL: "https://www.tate.org.uk/art/images/work/P/P01/P01796_10.jpg",
    description: "Beginning in 1962 Lichtenstein borrowed images of explosions from popular war comics for use in his paintings. The subject embodies the revolutionary nature of Pop art and suggests the very real threat of annihilation by nuclear explosion that was prevalent at that time (the Cuban Missile Crisis occurred in 1962)."
  },

  {
      title: "Retroactive I",
      artist: "Robert Rauschenberg",
      category: "painting",
      year: 1963,
      medium: "Oil and silkscreen ink on canvas",
      imageURL: "https://www.rauschenbergfoundation.org/sites/default/files/styles/artwork_fullsize/public/images_artwork/64.006.jpg",
      description: "Retroactive I. In 1963, Robert Rauschenberg painted 'Retroactive I' using oil and silkscreen ink on a canvas. ... Kennedy is added to the painting as the main focus to reflect the encouraging promise for America's future and its fortitude."
  },

  {
    title: "Storyline I (Reels [B+C])",
    artist: "Robert Rauschenberg",
    category: "painting",
    year: 1968,
    medium: "Lithograph",
    imageURL: "https://www.rauschenbergfoundation.org/sites/default/files/styles/artwork_fullsize/public/images_artwork/68.E004.jpg",
    description: "This series of color lithographs was published by Gemini G.E.L., Los Angeles. [B +C] refers to the American outlaws Bonnie and Clyde who were the subject of an eponymous movie released the previous year. Imagery for the series is derived from stills from the film."
  },

  {
    title: "Just what is it that makes today’s homes so different, so appealing?",
    artist: "Richard Hamilton",
    category: "painting",
    year: 1956,
    medium: "Collage",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/f/ff/Hamilton-appealing2.jpg",
    description: "Just what is it that makes today's homes so different, so appealing? is a collage by English artist Richard Hamilton. It measures 10.25 in × 9.75 in. The work is now in the collection of the Kunsthalle Tübingen, Tübingen, Germany. It was the first work of pop art to achieve iconic status."
  },

  {
    title: "My Marilyn",
    artist: "Richard Hamilton",
    category: "painting",
    year: 1965,
    medium: "Screenprint on paper",
    imageURL: "https://www.tate.org.uk/art/images/work/P/P04/P04251_10.jpg",
    description: "Summary. My Marilyn is a print derived from photographs of the screen actress Marilyn Monroe (1926–62) that the artist saw in Town magazine, in November 1962, not long after her death that August. ... Marilyn Monroe demanded that the results of photographic sessions be submitted to her for vetting before publication."
  },

  {
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    artist: "Peter Blake",
    category: "painting",
    year :1967,
    medium: "Print, collage",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg",
    description: "Blake painted several album sleeves. He designed the sleeve for Sgt. Pepper's Lonely Hearts Club Band with his wife Jann Haworth, the American-born artist whom he married in 1963 and divorced in 1979. The Sgt. Pepper's sleeve has become an iconic work of pop art, much imitated and Blake's best-known work. Producing the collage necessitated the construction of a set with cut-out photographs and objects, such as flowers, centred on a drum (sold in auction in 2008) with the title of the album. Blake has subsequently complained about the one-off fee he received for the design (£200[5][6]), with no subsequent royalties."
  },

  {
      title: "Self-Portrait with Badges",
      artist: "Peter Blake",
      cateogry: "painting",
      year: 1961,
      medium: "Oil paint on board",
      imageURL: "https://www.tate.org.uk/art/images/work/T/T02/T02406_10.jpg",
      description: "Self-Portrait with Badges is a painting that looks both forward and back. While the figure is contemporary with, or rather in advance of popular fashion, it also looks back, in affection, to traditional times and places."

  }

])

db.quiz.insertMany([

  {
    testResult: 0
  },

  {
    questions: [
       {
          text: "What band was Andy Warhol involved with in the 1960?",
          responses: [
             { text: "The Velvet Underground", correct: true },
             { text: "The Beatles" },
             { text: "Modern Talking" },
             { text: "Kraftwerk" }
          ]
       },
       {
          text: "Where did Pop Art originally originate?",
          responses: [
             { text: "USA" },
             { text: "United Kingdom", correct: true },
             { text: "Italy" },
             { text: "France" }
          ]
       },
       {
          text: "Roy Lichtenstein's art was influenced by one of the following:",
          responses: [
             { text: "Comic strips", correct: true },
             { text: "Computer science" },
             {
                text: "Rococo painting"
             },
             { text: "None of the above" }
          ]
       },
       {
          text: "What are the main points of attack for Pop Art's critics?",
          responses: [
             { text: "It's vulgar and unoriginal." },
             {
                text: "It ends up embracing the same culture of celebrity worship and advertising it purports to critique."
             },
             { text: "It represents the triumph of consumerism and materialism in America and Europe. " },
             { text: "All of the above", correct: true }
          ]
       },
       {
          text:
             "Why did the leading Pop Art artists reject the legacy of Abstract Expressionism?",
          responses: [
             { text: "It was seen as humourless and self-important." },
             { text: "They rejected the idea of originality and individual expression in favour of mass production." },
             { text: "It was seen as rooted in a fundamentally different world of spiritual torment and self-sacrifice." },
             { text: "All of the above", correct: true }
          ]
       }
     ]
     },

     {
       questions: [
         {

          text: "In Satellite based communication, VSAT stands for? ",
          responses: [
             { text: " Very Small Aperture Terminal", correct: true },
             { text: "Varying Size Aperture Terminal " },
             {
                text: "Very Small Analog Terminal"
             },
             { text: "None of the above" }
          ]
       },
       {
          text: "What is the full form of TCP/IP? ",
          responses: [
             { text: "Telephone call protocol / international protocol" },
             { text: "Transmission control protocol / internet protocol", correct: true },
             { text: "Transport control protocol / internet protocol " },
             { text: "None of the above" }
          ]
       },
       {
          text:
             "What is the full form of HTML?",
          responses: [
             {
                text: "Hyper text marking language"
             },
             { text: "Hyphenation text markup language " },
             { text: "Hyper text markup language", correct: true },
             { text: "Hyphenation test marking language" }
          ]
       },
       {
          text: "\"Yahoo\", \"Infoseek\" and \"Lycos\" are _________?",
          responses: [
             { text: "Browsers " },
             { text: "Search Engines", correct: true },
             { text: "News Group" },
             { text: "None of the above" }
          ]
        }

      ]
    }
 ])

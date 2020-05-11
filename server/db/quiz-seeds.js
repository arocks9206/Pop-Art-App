use popArt_Hub;
db.dropDatabase();

db.quiz.insertMany([
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

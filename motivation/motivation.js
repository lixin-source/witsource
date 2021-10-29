var quotes = [
    "“The most dangerous phrase in the language is, ‘We’ve always done it this way.’” - Grace Hopper",
    "“Don’t let fear get in the way and don’t be afraid to say ‘I don’t know’ or ‘I don’t understand’—no question is a dumb question.” - Margaret Hamilton.",
   " “When you’re working every day, you’re not thinking, ‘What impact is this going to have on the world?’ You’re thinking, ‘I’ve got to get this right.’” - Gladys West",
   "“A scientist in his laboratory is not a mere technician: he is also a child confronting natural phenomena that impress him as though they were fairy tales.” - Marie Curie",
   "\"I wonder whether the tiny atoms and nuclei, or the mathematical symbols, or the DNA molecules have any preference for either masculine or feminine treatment.” - Chien-Shiung Wu",
    "“Dream as high as possible. There is a cost to make that dream come true. The cost to achieve that dream is through hard work, passion, and commitment.” - Susi Pudjiastuti",
    "“Science is a rewarding and challenging career. Young people going into science must keep an open mind to all ideas in an effort to find every possible way to help people.” -Dr. Irene Uchida",
    "“Women are emerging as a major force for change. Countries that have invested in girls' education and removed legal barriers that prevent women from achieving their potential are now seeing the benefits.” - Sri Mulyani Indrawati",
    "Take all the courses in your curriculum. Do the research. Ask questions. Find someone doing what you are interested in! Be curious! - Katherine Johnson"
  ]
  
  function newQuote() {
  
    var randNum = Math.floor(Math.random() * (quotes.length));
  
    document.getElementById('quoteDisplay').innerHTML = quotes[randNum];
  
  }
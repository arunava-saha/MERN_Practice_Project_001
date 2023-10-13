import "dotenv";
import express from "express";
const app = express();
app.use(express.static("dist"));

// app.use(require("./router/router"));

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Atom Joke",
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title: "Mathematician Joke",
      joke: "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    },
    {
      id: 3,
      title: "Computer Joke",
      joke: "How does a computer get drunk? It takes screenshots!",
    },
    {
      id: 4,
      title: "Snowman Joke",
      joke: "What do you get when you cross a snowman and a vampire? Frostbite!",
    },
    {
      id: 5,
      title: "Piano Joke",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 6,
      title: "Parallel Lines Joke",
      joke: "Parallel lines have so much in common. It's a shame they'll never meet.",
    },
    {
      id: 7,
      title: "Scarecrow Joke",
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 8,
      title: "Dad Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 9,
      title: "Math Teacher Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 10,
      title: "Pizza Joke",
      joke: "Why did the pizza maker go broke? Because he just couldn't make enough dough.",
    },
    {
      id: 11,
      title: "Shakespeare Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 12,
      title: "Photographer Joke",
      joke: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 13,
      title: "Electricity Joke",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 14,
      title: "Toothpaste Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 15,
      title: "Library Joke",
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 16,
      title: "Restaurant Joke",
      joke: "Why did the math book sad? Because it had too many problems.",
    },
    {
      id: 17,
      title: "Clock Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 18,
      title: "Doctor Joke",
      joke: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 19,
      title: "Dog Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 20,
      title: "Car Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 21,
      title: "Coffee Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 22,
      title: "Television Joke",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 23,
      title: "Bank Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 24,
      title: "Plant Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 25,
      title: "Ocean Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 26,
      title: "Bird Joke",
      joke: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 27,
      title: "Space Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 28,
      title: "Football Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 29,
      title: "Fish Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 30,
      title: "Music Joke",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 31,
      title: "Doctor Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 32,
      title: "Library Joke",
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 33,
      title: "Restaurant Joke",
      joke: "Why did the math book sad? Because it had too many problems.",
    },
    {
      id: 34,
      title: "Clock Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 35,
      title: "Doctor Joke",
      joke: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 36,
      title: "Dog Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 37,
      title: "Car Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 38,
      title: "Coffee Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 39,
      title: "Television Joke",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 40,
      title: "Bank Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 41,
      title: "Plant Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 42,
      title: "Ocean Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 43,
      title: "Bird Joke",
      joke: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 44,
      title: "Space Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 45,
      title: "Football Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 46,
      title: "Fish Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 47,
      title: "Music Joke",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 48,
      title: "Doctor Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 49,
      title: "Library Joke",
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 50,
      title: "Restaurant Joke",
      joke: "Why did the math book sad? Because it had too many problems.",
    },
    {
      id: 51,
      title: "Clock Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 52,
      title: "Doctor Joke",
      joke: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 53,
      title: "Dog Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 54,
      title: "Car Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 55,
      title: "Coffee Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 56,
      title: "Television Joke",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 57,
      title: "Bank Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 58,
      title: "Plant Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 59,
      title: "Ocean Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 60,
      title: "Bird Joke",
      joke: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 61,
      title: "Space Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 62,
      title: "Football Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 63,
      title: "Fish Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 64,
      title: "Music Joke",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 65,
      title: "Doctor Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 66,
      title: "Library Joke",
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 67,
      title: "Restaurant Joke",
      joke: "Why did the math book sad? Because it had too many problems.",
    },
    {
      id: 68,
      title: "Clock Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 69,
      title: "Doctor Joke",
      joke: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 70,
      title: "Dog Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 71,
      title: "Car Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 72,
      title: "Coffee Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 73,
      title: "Television Joke",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 74,
      title: "Bank Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 75,
      title: "Plant Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 76,
      title: "Ocean Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 77,
      title: "Bird Joke",
      joke: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 78,
      title: "Space Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 79,
      title: "Football Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 80,
      title: "Fish Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 81,
      title: "Music Joke",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 82,
      title: "Doctor Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 83,
      title: "Library Joke",
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 84,
      title: "Restaurant Joke",
      joke: "Why did the math book sad? Because it had too many problems.",
    },
    {
      id: 85,
      title: "Clock Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 86,
      title: "Doctor Joke",
      joke: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 87,
      title: "Dog Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 88,
      title: "Car Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 89,
      title: "Coffee Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 90,
      title: "Television Joke",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 91,
      title: "Bank Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 92,
      title: "Plant Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 93,
      title: "Ocean Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 94,
      title: "Bird Joke",
      joke: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 95,
      title: "Space Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 96,
      title: "Football Joke",
      joke: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 97,
      title: "Fish Joke",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 98,
      title: "Music Joke",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 99,
      title: "Doctor Joke",
      joke: "I'm on a whiskey diet. I've lost three days already.",
    },
    {
      id: 100,
      title: "Library Joke",
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

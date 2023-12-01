const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

const fortunes = [
  "it is certain",
  "ask again later",
  "very doubtful",
  "outlook good",
  "yes",
  "lets hope so",
  "error 404",
  "better not tell you now",
  "it is decidedly so",
  "concentrate and ask again",
  "no",
  "why would you ask that?"
];

app.get("/", (request, response) => {
    const answer = fortunes[Math.floor(Math.random() * fortunes.length)];
    response.json({body: answer});

});

app.listen(3000, () => {
  console.log("Listening: http://localhost:3000/");
});

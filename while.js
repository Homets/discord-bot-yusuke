const quiz = require("./quizz.json");
const args = "histoire";

const theme = quiz.filter((x) => x.theme === args);
const question = theme[Math.floor(Math.random() * theme.length)];
console.log(question);

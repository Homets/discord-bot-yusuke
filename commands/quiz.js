const quiz = require("../quizz.json");

module.exports = {
  name: "quiz",
  timeout: 5000,
  description: "start a quiz",
  async execute(client, message) {
    let random = Math.round(Math.random() * quiz.length);

    let filter = (m) => m.author.id === message.author.id;

    message.channel.send(quiz[random].question);
    const collected = await message.channel.awaitMessages({ filter, max: 1 });
    if (
      collected.first().content.toLowerCase() ===
      quiz[random].reponse.toLowerCase()
    ) {
      message.channel.send(
        `Bonne réponse! \nLa source: ${quiz[random].source}`
      );
    } else {
      message.channel.send(
        `Mauvaise réponse :(\nLa réponse était ${quiz[random].response}\nLa source: ${quiz[random].source},)`
      );
    }
  },
};

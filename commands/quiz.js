let quiz = require("../quizz.json");

module.exports = {
  name: "quiz",
  description: "start a quiz",
  async execute(client, message, args) {
    // filter quiz for don't take question who don't have the args theme
    if (args) {
      quiz = quiz.filter((x) => x.theme === args.join(""));
    }

    let random = Math.round(Math.random() * quiz.length);

    let filter = (m) => m.author.id === message.author.id;

    // creating the question
    let QCM = `${quiz[random].question}\n`;

    quiz[random].possible.forEach((x) => (QCM += `${x}\n`));

    message.channel.send(`${QCM}`);

    const collected = await message.channel.awaitMessages({ filter, max: 1 });

    // need to add a . to the response research for fixing bug if a wrong response start by "A","B","C","D"
    // process : will choose the response includes the user input and substring the start and start matching with the real response
    let finalResponse = null;

    if (collected.first().content.length === 1) {
      finalResponse = quiz[random].possible
        .filter((response) =>
          response.includes(collected.first().content + ".")
        )
        .join("")
        .substring(3);
    } else {
      finalResponse = quiz[random].possible
        .filter((response) =>
          response
            .toLowerCase()
            .includes(collected.first().content.toLowerCase())
        )
        .join("")
        .substring(3);
    }

    if (finalResponse.toLowerCase() === quiz[random].response.toLowerCase()) {
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

const { execute } = require("./ping");

module.exports = {
  name: "coinflip",
  description: "do a coinflip",
  async execute(client, message) {
    if (message.author.bot) return;

    const coinflip = ["Pile", "Face"];

    let result = coinflip[Math.floor(Math.random() * coinflip.length)];

    message.channel.send(result);
  },
};

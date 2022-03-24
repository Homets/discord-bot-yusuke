module.exports = {
  name: "ping",
  description: "Replies with pongs",
  async execute(client, message) {
    message.channel.send("Pong!");
  },
};

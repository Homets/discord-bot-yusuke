module.exports = {
  name: "messageCreate",
  execute(message) {
    if (message.content === "!ping") {
      message.channel.send("pong");
    }
  },
};

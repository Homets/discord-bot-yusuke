module.exports = {
  name: "twitter",
  description: "send twitter account",
  async execute(client, message, args) {
    const uri = "https://twitter.com/";

    if (message.author.bot) return;

    if (args.length !== 1) {
      message.channel.send("error");
      return;
    } else {
      message.channel.send(uri + args.join(""));
    }
  },
};

module.exports = (client, message) => {
  const { prefix } = require("../../config.json");

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  // recover commands info without prefix (taking args like !user @user)
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  // check if command exist
  const command = client.commands.get(cmd);

  if (command) command.execute(client, message, args);
};

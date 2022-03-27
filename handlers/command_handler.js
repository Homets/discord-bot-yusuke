const fs = require("fs");

module.exports = (client, Discord) => {
  // reading all prefix commands
  const command_files = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".js"));

  // adding commands to client.commands Set
  for (const file of command_files) {
    const command = require(`../commands/${file}`);

    if (command.name) {
      client.commands.set(command.name, command);
    } else {
      continue;
    }
  }
};

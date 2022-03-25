const fs = require("fs");

module.exports = (client) => {
  const slash_files = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".js"));

  for (const file of slash_files) {
    const slash = require(`../slash/${file}`);

    client.slashCommands.set(slash.name, slash);
  }
};

const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, guildId, token } = require("./config.json");

// reading all slash commands files
const slash_commands = [];
const slashCommand_files = fs
  .readdirSync("./slash/")
  .filter((file) => file.endsWith(".js"));

for (const file of slashCommand_files) {
  const slash_command = require(`./slash/${file}`);

  slash_commands.push(slash_command);
}

// use discord API to register slash commands
const rest = new REST({ version: 9 }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), {
    body: slash_commands,
  })
  .then(() => console.log("Successfuly registered slash commands"))
  .catch("error");

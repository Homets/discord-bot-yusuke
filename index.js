const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILDS],
});
const { token } = require("./config.json");

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.slashCommands = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

// Loading all **slash** commands
const command_files = fs
  .readdirSync("./slash/")
  .filter((file) => file.endsWith(".js"));

for (const file of command_files) {
  const command = require(`./slash/${file}`);

  client.slashCommands.set(command.name, command);
}

client.login(token);

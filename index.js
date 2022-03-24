const fs = require("node:fs");
// require the necessary discord.js classes
const { Client, Collection, Intents } = require("discord.js");

const { token } = require("./config.json");

//create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Reading commands files
client.commands = new Collection();
const commandsFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandsFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.data.name, command);
}

// Reading Events files
const eventsFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

for (const file of eventsFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(token, () => {
  console.log("logged in");
});

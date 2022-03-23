const fs = require("node:fs");
// require the necessary discord.js classes
const { Client, Collection, Intents } = require("discord.js");

const { token } = require("./config.json");
const { execute } = require("./commands/user-info");

//create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandsFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandsFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.data.name, command);
}
client.once("ready", () => {
  console.log("ready");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "Cannot execute this commands",
      ephemeral: true,
    });
  }
});

client.login(token, () => {
  console.log("logged in");
});

const dotenv = require("dotenv").config();

// require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

//create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log("ready");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "server") {
    await interaction.reply(
      `Server name : ${interaction.guild.name} \nTotal Members: ${interaction.guild.memberCount}`
    );
  } else if (commandName === "user") {
    await interaction.reply(
      `Username: ${interaction.user.tag}\nCreated: ${interaction.user.createdAt}id: ${interaction.user.id}`
    );
  }
});

client.login(token);

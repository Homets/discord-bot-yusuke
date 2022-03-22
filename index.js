const dotenv = require("dotenv").config();

// require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

//create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log("ready");
});

client.login(token);

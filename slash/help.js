const fs = require("fs");
module.exports = {
  name: "help",
  description: "give all slash commands possible",
  async execute(interaction) {
    try {
      //   reading all slash commands
      const slashCommands_files = fs
        .readdirSync("./slash/")
        .filter((file) => file.endsWith(".js"));

      let response = "";

      // parsing all slash commands info of /slash/ directory and adding them to a new string
      for (const file of slashCommands_files) {
        const command = require(`../slash/${file}`);
        response += `- ${command.name}: ${command.description}\n`;
      }

      await interaction.reply(
        `Toutes les slash commands disponsible : \n ${response}`
      );
    } catch (error) {
      console.error;
    }
  },

  //
};

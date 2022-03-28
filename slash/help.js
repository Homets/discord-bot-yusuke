const fs = require("fs");
module.exports = {
  name: "help",
  description: "give all slash commands possible",
  async execute(interaction) {
    const client = interaction.client;

    try {
      if (client.command_cooldowns.has(interaction.user.id)) {
        await interaction.reply(
          "You need to wait the end of the cooldown to do this commands"
        );
      } else {
        //   reading all slash commands
        const slashCommands_files = fs
          .readdirSync("./slash/")
          .filter((file) => file.endsWith(".js"));

        // reading all prefix commands
        const prefixCommands_files = fs
          .readdirSync("./commands")
          .filter((file) => file.endsWith(".js"));

        let response = "";

        // parsing all slash commands info of /slash directory and adding them to a new string
        response += "\nSlash commands :\n";
        for (const file of slashCommands_files) {
          const command = require(`../slash/${file}`);
          response += `- ${command.name}: ${command.description}\n`;
        }

        // parsing all prefix ocmmands info of ./commands directory and adding them to a new string
        response += "\nPrefix commands : \n";

        for (const file of prefixCommands_files) {
          const command = require(`../commands/${file}`);
          response += `- ${command.name}: ${command.description}\n`;
        }

        await interaction.reply(
          `Toutes les slash commands disponsible : \n ${response}`
        );

        client.command_cooldowns.add(interaction.user.id);
        setTimeout(() => {
          client.command_cooldowns.delete(interaction.user.id);
        }, client.cooldown);
      }
    } catch (error) {
      console.error;
    }
  },

  //
};

const Discord = require("discord.js");

module.exports = {
  name: "clear",
  description: "clear some message",

  async execute(interaction, args) {
    const client = interaction.client;

    // check interaction user permissions
    if (
      interaction.member.roles.cache.some(
        (role) => role.id === "956955044685676584"
      )
    ) {
      if (client.command_cooldown.has(interaction.user.id)) {
        await interaction.reply(
          "You need to wait the end of the cooldown to do this commands"
        );
      } else {
        interaction.channel
          .bulkDelete(50)
          .then((messages) =>
            console.log(`Bulk deleted ${messages.size} messages`)
          )
          .catch(console.error);

        // Add a cooldown
        client.command_cooldown.add(interaction.user.id);
        setTimeout(() => {
          client.command_cooldown.delete(interaction.user.id);
        }, client.cooldown);
      }
    } else {
      console.log(
        `${interaction.user.tag} don't have the permission to do the command`
      );
    }
  },
};

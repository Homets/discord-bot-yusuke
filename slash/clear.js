const Discord = require("discord.js");

module.exports = {
  name: "clear",
  description: "clear some message",

  async execute(interaction, args) {
    const client = interaction.client;
    try {
      // checking user permissions
      if (
        interaction.member.roles.cache.some(
          (role) => role.id === "956955044685676584"
        )
      ) {
        if (client.command_cooldowns.has(interaction.user.id)) {
          await interaction.reply(
            "You need to wait the end of the cooldown to do this commands"
          );
        } else {
          // deleting last 50 messages
          interaction.channel
            .bulkDelete(50)
            .then((messages) =>
              console.log(`Bulk deleted ${messages.size} messages`)
            )
            .catch(console.error);

          // Add a cooldown
          client.command_cooldowns.add(interaction.user.id);
          setTimeout(() => {
            client.command_cooldowns.delete(interaction.user.id);
          }, client.cooldown);
        }
      } else {
        console.log(
          `${interaction.user.tag} don't have the permission to do the command`
        );
      }
    } catch (error) {
      console.error;
    }
  },
};

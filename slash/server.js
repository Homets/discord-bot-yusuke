module.exports = {
  name: "server",
  description: "Replies with server infos.",
  async execute(interaction) {
    const client = interaction.client;
    try {
      // check cooldown set
      if (client.command_cooldowns.has(interaction.user.id)) {
        await interaction.reply(
          "You need to wait the end of the cooldown to do this commands"
        );
      } else {
        await interaction.reply(
          `Server:${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
        );

        // Add a cooldown
        client.command_cooldowns.add(interaction.user.id);
        setTimeout(() => {
          client.command_cooldowns.delete(interaction.user.id);
        }, client.cooldown);
      }
    } catch (error) {
      console.error;
    }
  },
};

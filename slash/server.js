module.exports = {
  name: "server",
  description: "Replies with server infos.",
  async execute(interaction) {
    const client = interaction.client;
    console.log(client.command_cooldowns.has(interaction.user.id));
    if (client.command_cooldowns.has(interaction.user.id)) {
      interaction.reply(
        "You need to wait the end of the cooldown to do this commands"
      );
    } else {
      await interaction.reply(
        `Server:${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
      );
      client.command_cooldowns.add(interaction.user.id);
      console.log(client.command_cooldowns);
      setTimeout(() => {
        client.command_cooldowns.delete(interaction.user.id);
        console.log(client.command_cooldowns);
      }, 5000);
    }
  },
};

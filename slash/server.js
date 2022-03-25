module.exports = {
  name: "server",
  description: "Replies with server infos.",
  async execute(interaction) {
    await interaction.reply(
      `Server:${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
    );
  },
};

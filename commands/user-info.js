const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user infos!"),
  async execute(interaction) {
    await interaction.reply(
      `Username: ${interaction.user.tag}\nCreated: ${interaction.user.createdAt}id: ${interaction.user.id}`
    );
  },
};

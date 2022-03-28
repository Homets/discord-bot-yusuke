module.exports = {
  name: "giveaway",
  description: "Choose a random members of the channel",
  async execute(interaction) {
    if (
      interaction.member.roles.cache.some(
        (role) => role.id === "956955044685676584"
      )
    ) {
      const guildId = interaction.guildId;

      // Get all user of a channel
      const guild = await interaction.client.guilds.fetch(guildId);
      const members = await guild.members.list();

      const allUsers = [];
      // pushing members name to an array
      members.forEach((member) => allUsers.push(member.user.id));

      // sorting a random user
      const randomUser = allUsers[Math.floor(Math.random() * allUsers.length)];
      await interaction.reply(
        `<@${randomUser}> Bien joué tu a remporté le giveaway`
      );
    } else {
      await interaction.reply(
        `${interaction.user.tag} don't have the permission to do the command`
      );
    }
  },
};

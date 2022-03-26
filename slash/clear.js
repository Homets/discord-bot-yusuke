const Discord = require("discord.js");

module.exports = {
  name: "clear",
  description: "clear some message",

  async execute(interaction, args) {
    if (
      interaction.member.roles.cache.some(
        (role) => role.id === "956955044685676584"
      )
    ) {
      interaction.channel
        .bulkDelete(100)
        .then((messages) =>
          console.log(`Bulk deleted ${messages.size} messages`)
        )
        .catch(console.error);
    } else {
      console.log(
        `${interaction.user.tag} don't have the permission to do the command`
      );
    }
  },
};

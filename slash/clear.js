module.exports = {
  name: "clear",
  description: "clear some message",
  async execute(interaction) {
    console.log(
      interaction.member.roles.cache.some(
        (role) => role.id === "956955044685676584"
      )
    );
  },
};

module.exports = {
  name: "user",
  description: "Replies with user infos.",
  async execute(interaction) {
    const client = interaction.client;
    try {
      if (client.command_cooldowns.has(interaction.user.id)) {
        await interaction.reply(
          '"You need to wait the end of the cooldown to do this commands"'
        );
      } else {
        // create a timeStamp of user creation
        const date = new Date(interaction.user.createdTimestamp);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDay();

        const formattedDate = `${day} / ${month} / ${year}`;

        interaction.reply(
          `Name:${interaction.user.tag}\nCreated: ${formattedDate}`
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
};

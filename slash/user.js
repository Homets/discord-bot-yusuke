module.exports = {
  name: "user",
  description: "Replies with user infos.",
  async execute(interaction) {
    try {
      // create a timeStamp of user creation
      const date = new Date(interaction.user.createdTimestamp);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();

      const formattedDate = `${day} / ${month} / ${year}`;

      interaction.reply(
        `Name:${interaction.user.tag}\nCreated: ${formattedDate}`
      );
    } catch (error) {
      console.error;
    }
  },
};

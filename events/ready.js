module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    `Ready! Logged in as ${client.user.tag}`;
  },
};

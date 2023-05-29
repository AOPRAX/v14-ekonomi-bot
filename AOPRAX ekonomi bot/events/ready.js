const client = require("../main");
const { Collection } = require("discord.js");
const fs = require("fs");

client.on("ready", () => {
  client.user.setActivity("YOUTUBE: AOPRAX");

  client.commands = new Collection();
  client.aliases = new Collection();
  fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    console.log(`${files.length} Toplam Komut`);
    files.forEach((f, index) => {
      let props = require(`../commands/${f}`);
      console.log(`${props.help.name} Komutu Yüklendi`);

      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });

      if (index === files.length - 1) {
        console.log(`${client.user.tag} Bot Hazır`);
      }
    });
  });
});

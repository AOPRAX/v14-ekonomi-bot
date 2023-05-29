const slenzydb = require('croxydb');
const ms = require('ms')
const moment = require("moment");
exports.run = async (client, message, args) => {
  let kullanıcı = message.mentions.members.first()
  let paran = slenzydb.fetch(`para_${message.author.id}`)
  if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketle!")
 let miktar = args[1]
 if (!miktar) return message.reply("Lütfen bir miktar belirt!")
    
 if (paran < miktar) return message.reply('Yeterli Paran Yok :)')
 message.reply("Başarıyla belirtilen miktarda para gönderildi.")
 slenzydb.add(`para_${kullanıcı.id}`, miktar)
 slenzydb.add(`para_${message.author.id}`, -miktar)




}
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'para-gönder'
};
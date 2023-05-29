const slenzydb = require('croxydb');
const ms = require('ms')
const moment = require("moment");
exports.run = async (client, message, args) => {
    let kart = slenzydb.fetch(`kart_${message.author.id}`)
  if (!kart) return message.reply("Kart oluşturmamışsın")
 let miktar = args[0]
 if (!miktar) return message.reply("Lütfen bankaya yatırılıcak para miktarını girin!")
  let paran = slenzydb.fetch(`para_${message.author.id}`)
 if (paran < miktar) return message.reply('Yeterli Paran Yok!')
message.reply("Başarıyla bankaya para yatırıldı.")
slenzydb.add(`banka_${message.author.id}`, miktar)
slenzydb.add(`para_${message.author.id}`, -miktar)




}
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'para-yatır'
};
const Discord = require('discord.js')
const slenzydb = require('croxydb');
const config = require('../config');


exports.run = async (client, message, args) => {
  
  const embed = new Discord.EmbedBuilder()
  .setTitle("AOPRAX - Yardım Menüsü!")
  .addFields({ name: config.prefix + 'cf', value: `Kumar Oynarsın!`, inline: true})
  .addFields({ name: config.prefix + 'çal', value: "Birinden Para Çalarsın!", inline: true})
  .addFields({ name: config.prefix + 'kart-oluştur', value: `Kredi Kartı Oluşturursun!`, inline: true})
  .addFields({ name: config.prefix + 'banka', value: `Bankadaki Parana Bakarsın!`, inline: true})
  .addFields({ name: config.prefix + 'günlük', value: `Günlük Harçlık Alırsın!`, inline: true})
  .addFields({ name: config.prefix + 'para-gönder', value: `Birine Para Gönderirsin!`, inline: true})
  .addFields({ name: config.prefix + 'bakiye', value: `Kendi Parana Bakarsın!`, inline: true})
  .addFields({ name: config.prefix + 'satın-al', value: `Marketten Bir Şey Satın Alırsın!`, inline: true})
  .addFields({ name: config.prefix + 'market', value: `Markete Bakarsın!`, inline: true})
  .addFields({ name: config.prefix + 'para-çek', value: `Bankadan Para Çekersin!`, inline: true})
  .addFields({ name: config.prefix + 'para-yatır', value: `Bankaya Para Yatırırsın!`, inline: true})
  .addFields({ name: config.prefix + 'para-ekle', value: `Owner Komutu.`, inline: true})
  .addFields({ name: config.prefix + 'para-sil', value: `Owner Komutu.`, inline: true})
  .addFields({ name: config.prefix + 'yardım', value: `Yardım Menüsüne Bakarsın!`, inline: true})

  .setColor("#ff0000")
  message.channel.send({embeds: [embed]})
}
exports.conf = {
  
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'yardım'
}
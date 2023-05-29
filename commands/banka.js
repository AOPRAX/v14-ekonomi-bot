const slenzydb = require('croxydb');
const ms = require('ms')
const moment = require("moment");
const { EmbedBuilder } = require('discord.js');
exports.run = async (client, message, args) => {
    let banka = slenzydb.fetch(`banka_${message.author.id}`)
  let kart = slenzydb.fetch(`kart_${message.author.id}`)
  if (!kart) return message.reply("Kart Oluşturmalısın")
let numara = kart.numara
let cvc = kart.cvc
let tür = kart.tür
let son = kart.son
const embed = new EmbedBuilder()
.setTitle("AOPRAX Bank")
.addFields({ name: 'Coin', value: `${banka || "Bankada Paran Yok!"}`, inline: true})
.addFields({ name: 'Kart Numarası', value: `${numara}`, inline: true})
.addFields({ name: 'Son Kullanım Tarihi', value: `${son}`, inline: true})
.addFields({ name: 'CVC', value: `${cvc}`, inline: true})
.addFields({ name: `Kart Sahibi`, value: `${message.author} `, inline: true})
.addFields({ name: `Kart`, value: `${tür}`, inline: true})
.setColor("#ff0000")
message.channel.send({embeds: [embed]})



}
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'banka'
};
const Discord = require('discord.js')


exports.run = async (client, message, args) => {
  
 const embed = new Discord.EmbedBuilder()
.setTitle("AOPRAX - Ekonomi Market!")
.addFields({ name: '> Cips', value: `15 TL`, inline: true})
.addFields({ name: '> Hamburger', value: `95 TL`, inline: true})
.addFields({ name: '> Cola Cola ', value: `20 TL`, inline: true})
.addFields({ name: '> Bilgisayar', value: `14500 TL`, inline: true})
.addFields({ name: '> Pasaport', value: `Ülkeden Kaçamazsın.`, inline: true})
.setColor("#ff0000")
message.channel.send({embeds: [embed]})
  
}
exports.conf = {

    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'market'
}
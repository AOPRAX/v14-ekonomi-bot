const slenzydb = require('croxydb');
const ms = require('ms')
const moment = require("moment");
exports.run = async (client, message, args) => {
    let user = message.author || message.mentions.users.first()
    let kullanıcı = user.id
let param = slenzydb.fetch(`para_${kullanıcı}`)
if (!param) return message.reply("Hiç paran yok")
message.reply("Bankanda **"+param+"** TL Mevcut!")
    }

  


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bakiye'
};
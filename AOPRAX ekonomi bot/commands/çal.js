const slenzydb = require("croxydb")
const ms = require("ms")
exports.run = async(client, message, args) => {
    let yavaşmod = 8.64e+7, 

        amount = Math.floor(Math.random() * 1000) + 4000;      


    let lastDaily = await slenzydb.fetch(`cal_${message.author.id}`);

    if (lastDaily !== null && yavaşmod - (Date.now() - lastDaily) > 0) {

        let timeObj = ms(yavaşmod - (Date.now() - lastDaily));




      
      return message.reply(`**Günde 1 kere hırsızlık yapabilirsin**`)

      

    } else {
 let kullanıcı = message.mentions.users.first()
 if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketleyin!")
 let parasi = slenzydb.fetch(`para_${kullanıcı.id}`)
 if (!parasi) return message.reply("Kullanıcının parası yok")
  let miktarsonuç = Math.floor(Math.random() * 99) + 1
  slenzydb.add(`para_${message.author.id}`, miktarsonuç)
    slenzydb.add(`para_${kullanıcı.id}`, -miktarsonuç)
    slenzydb.set(`cal_${message.author.id}`, Date.now());

    message.channel.send(`${message.author} <@${kullanıcı.id}> Kullanıcısından **${miktarsonuç}** TL çaldı! \n yaptığın ayıp!`)
};
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'çal' 
  }

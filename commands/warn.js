const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setTitle("**Pingu - Warn**")
        .setDescription("Hey, " + message.author + ". Momenteel is deze functie nog in onderhoud...")
        .setColor("#4cda49")
        .setFooter("© Pingu")
        .setTimestamp();

    return message.channel.send(botEmbed)

}

module.exports.help = {
    name:  "!warn"
}
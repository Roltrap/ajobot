const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setTitle("**<Servernaam> - Server info**")
        .setDescription("Welkom bij de server info, " + message.author)
        .setColor("#4cda49")
        .setThumbnail(icon)
        .addField("Server bot", bot.user.username)
        .addField("Totaal aantal Discord leden", message.guild.memberCount)
        .addField("U bent gejoind op", message.member.joinedAt)
        .addField("Discord eigenaar", message.guild.owner)
        .setFooter("© <Servernaam>")
        .setTimestamp();

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}
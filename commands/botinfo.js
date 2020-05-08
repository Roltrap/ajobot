const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setTitle("**<Botnaam> - Bot info**")
        .setDescription("Welkom bij de bot info, " + message.author)
        .setColor("#4cda49")
        .setThumbnail(botIcon)
        .addField("Bot naam", bot.user.username)
        .addField("Bot gemaakt door", "Mats - PandaOpDeRoltrap")
        .addField("Bot gemaakt op", bot.user.createdAt)
        .setFooter("© <Botnaam>")
        .setTimestamp();

    return message.channel.send(botEmbed)

}

module.exports.help = {
    name: "!botinfo"
}
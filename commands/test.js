const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send("Joepie! De test is **geslaagd**. Ik ben gereed voor gebruik...");

    
}

module.exports.help = {
    name: "test"
}
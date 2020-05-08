const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const active = new Map();

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.lengt <= 0) {
        console.log("Kon geen files vinden.");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen.`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online en is gereed voor gebruik.`);

    bot.user.setActivity("Mats", { type: "LISTENING" });

});

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "🧑 | Bezoeker");

    if (!role) return;

    member.addRole(role);

    const channel = member.guild.channels.find("name", "﹝👋﹞𝐰𝐞𝐥𝐤𝐨𝐦");

    if (!channel) return;

    channel.send(`Welkom op de **Pingu Development Discord Server** ${member}! Veel plezier 🎉😄.`)

})

bot.on("guildMemberAdd", member => {

    const channel = member.guild.channels.find("name", "welkom");

    if (!channel) return;

    channel.send(`Welkom op de **Pingu Development Discord Server** ${member}! Veel plezier 🎉😄.`)

})

bot.on("message", async message => {

    // Als bot bericht stuurt stuur dan return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));


    var options = {

        active: active

    }


    if (commands) commands.run(bot, message, arguments, options);


    // if (command === `${prefix}hallo`) {

    //    return message.channel.send("Hallo! Ik ben de officiële Discord bot van de **veilsimpel. - Discord server**. Wilt u meer weten over mij? Doe dan `!botinfo` of `!help`. Heeft u een andere vraag? Stel deze dan aan een van onze medewerkers.");

    // }

    // if (command === `${prefix}botinfo`) {

    //    var botIcon = bot.user.displayAvatarURL;

    //    var botEmbed = new discord.RichEmbed()
    //        .setDescription("**veilsimpel. - Bot Informatie**")
    //        .setColor("#4cda49")
    //        .setThumbnail(botIcon)
    //        .addField("Bot naam", bot.user.username)
    //        .addField("Bot gemaakt door", "Mats - Roltrap")
    //        .addField("Bot gemaakt op", bot.user.createdAt);


    //    return message.channel.send(botEmbed);

    // }

});

bot.login(process.env.token);
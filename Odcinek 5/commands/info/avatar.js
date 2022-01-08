const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Pokazuje obecny avatar użytkownika',
    usage: '!avatar (osoba)',
    execute: async(message, args) => {
        let user = null;
        const mention = message.mentions.members.first();

        if(mention) user = mention.user;
        else user = message.author;

        const embed = new Discord.MessageEmbed()
        .setColor('#8bde43')
        .setTitle('Avatar')
        .setDescription(`Avatar użytkownika ${user}\n[Kliknij tutaj](${user.avatarURL({ dynamic: true, size: 2048 })}), aby zobaczyć avatar w większej rozdzielczości`)
        .setImage(user.avatarURL({ dynamic: true, size: 512 }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    }
}
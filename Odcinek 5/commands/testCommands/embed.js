const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'Wysyła embeda na kanał',
    usage: '!embed',
    execute: async(message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('#8bde43')
        .setAuthor('Autor', message.author.avatarURL({ dynamic: true }))
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .setTitle('Tytuł embeda')
        .setDescription('__Opis__ **embeda**\n\naaa')
        .addFields(
            {name: 'Nazwa fieldu 1', value: 'Opis fieldu 1', inline: true},
            {name: 'Nazwa fieldu 2', value: 'Opis fieldu 2', inline: true},
            {name: 'Nazwa fieldu 3', value: 'Opis fieldu 3', inline: true},
            {name: '\u200b', value: 'Opis'},
            {name: 'Nazwa fieldu 4', value: 'Opis fieldu 4'}
        )
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    }
}
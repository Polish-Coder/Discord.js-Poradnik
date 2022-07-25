const Discord = require('discord.js');

module.exports = {
    name: 'buttonroles',
    description: 'Wysyła embeda button roles',
    usage: '!buttonroles',
    execute: async(message, args) => {
        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('role1')
            .setLabel('Testowa rola 1')
            .setStyle('PRIMARY'),

            new Discord.MessageButton()
            .setCustomId('role2')
            .setLabel('Testowa rola 2')
            .setStyle('PRIMARY'),

            new Discord.MessageButton()
            .setCustomId('role3')
            .setLabel('Testowa rola 2')
            .setStyle('PRIMARY')
        );

        const embed = new Discord.MessageEmbed()
        .setTitle('Wybierz role')
        .setDescription('<@&964059421657403392> - Opis roli 1\n<@&964059461197111346> - Opis roli 2\n<@&964059496559312916> - Opis roli 3');

        message.channel.send({ embeds: [embed], components: [buttons] });
    }
}
const Discord = require('discord.js');

module.exports = {
    name: 'buttons',
    description: 'Wysyła wiadomość z testowymi przyciskami',
    usage: '!buttons',
    execute: async(message, args) => {
        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('testButton1')
            .setLabel('To jest testowy przycisk')
            .setStyle('PRIMARY')
            .setEmoji('<:yes:964056229309739008>')
            .setDisabled(true),

            new Discord.MessageButton()
            .setCustomId('testButton2')
            .setLabel('Test 2')
            .setStyle('SECONDARY')
            .setEmoji('💻'),

            new Discord.MessageButton()
            .setCustomId('testButton3')
            .setLabel('Test 3')
            .setStyle('SUCCESS'),

            new Discord.MessageButton()
            .setCustomId('testButton4')
            .setLabel('Test 4')
            .setStyle('DANGER'),

            new Discord.MessageButton()
            .setLabel('Test 5')
            .setStyle('LINK')
            .setURL('https://www.discord.com'),
        );

        message.channel.send({ content: 'To jest testowa wiadomość', components: [buttons] });
    }
}
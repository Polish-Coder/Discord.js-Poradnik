module.exports = {
    name: 'test',
    description: 'Testowa komenda',
    usage: '!test',
    execute: async(message, args) => {
        message.channel.send('To jest testowa komenda')
    }
}
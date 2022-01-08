module.exports = {
    name: 'test2',
    description: 'Testowa komenda',
    usage: '!test',
    execute: async(message, args) => {
        message.channel.send('To jest testowa komenda 2')
    }
}
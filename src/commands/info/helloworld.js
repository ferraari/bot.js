const { Interaction } = require('discord.js')
const Command = require('../../structures/Command')



module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'hello',
            description: 'Mostra que este bot funciona! :D'

        })

        
    }


    run = (Interaction) => {
        Interaction.reply('Hello World! Estou funcionando!')
    }

}

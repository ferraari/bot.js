const { Interaction } = require('discord.js')
const Command = require('../../structures/Command')



module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Brinque de ping e pong :D'

        })

        
    }


    run = (Interaction) => {
        Interaction.reply('Pong!')
    }

}

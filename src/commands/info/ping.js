const { Interaction } = require('discord.js')
const Command = require('../../structures/Command')



module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Brinqe de ping e pong :D'

        })

        
    }


    run = (Interaction) => {
        Interaction.reply('Pong!')
    }

}

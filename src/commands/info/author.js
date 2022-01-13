const { Interaction } = require('discord.js')
const Command = require('../../structures/Command')



module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'author',
            description: 'Mostra apenas para o executor do comando quem criou este bot!'

        })

        
    }


    run = (Interaction) => {
        Interaction.reply({
            content: 'Olá, fui criado pelo Murilo Ferrari, discord: ferrari#7934', //Você pode mudar :)
            ephemeral: true
        })
    }

}

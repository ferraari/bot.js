const { Interaction } = require('discord.js')
const Command = require('../../structures/Command')
const { MessageEmbed } = require('discord.js')


module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'avisoe',
            description: 'Avisa alguma mensagem em embeds',
            options: [
                {
                    name: 'canal',
                    type: 'CHANNEL',
                    description: 'Canal Avisado',
                    required: true
                }, 
                {
                    name: 'mensagem',
                    type: 'STRING',
                    description: 'Mensagem que será enviada no canal',
                    required: true
                }
            ]

        })

        
    }


    run = (interaction) => {
        const canal = interaction.options.getChannel('canal')
        if (!['GUILD_TEXT', 'GUILD_ANNOUCEMENTS'].includes(canal.type)) return interaction.reply({ content: 'Erro, informe um canal válido!', ephemeral: true })

        const texto = interaction.options.getString('mensagem')

        const embed = new MessageEmbed()
            .setTitle('Bot') //Nome do Seu bot ou titulo do embed
            .setDescription(texto)
            .setColor('#0000ff')
            .setTimestamp()


        canal.send({ embeds: [embed] })
            .then(() => interaction.reply({ content: `Mensagem enviada com sucesso no canal. \`(${canal.name})\`.`, ephemeral: true }))
            .catch(() => interaction.reply({ content: `Erro ao tentar enviar a mensagem no canal.`, ephemeral: true }))
            

    }
}

require('dotenv').config()

const Client = require('./src/structures/Client')

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
})

client.once( 'ready', function () {
    console.log('Bot Ligado')
    let activities = [
        `twitch.tv/ferrarintc` //voce pode trocar/tirar isso
    ],
    i = 0;
    client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"


})    
})

client.on('messageCreate', function (message) {
    if (message.content === "Exemplo") { //Quando o user mandar esta mensagem o bot irá responder com o reply abaixo
        message.reply ('Exemplo 1 executado') //Coloque aqui o que você quer que o bot responda
    }
 
})

client.on('messageCreate', function (message) {
    if (message.content === "Obrigado") {
        message.reply ('De nada, estamos aqui para te ajudar!')
    }
 
})


client.login(process.env.BOT_TOKEN)
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
        `twitch.tv/ferrarintc`
    ],
    i = 0;
    client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"


})    
})

client.on('messageCreate', function (message) {
    if (message.content === "Como aposto?") {
        message.reply ('Para apostar é simples, basta você ir nas salas designadas, caso tenha mais alguma dúvida visite o canal de ajuda!')
    }
 
})

client.on('messageCreate', function (message) {
    if (message.content === "Obrigado") {
        message.reply ('De nada, estamos aqui para te ajudar!')
    }
 
})


client.login(process.env.BOT_TOKEN)
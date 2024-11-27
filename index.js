const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});

client.login('NDc2MzI5ODQwODAzNDQ2Nzg2.GN0l5q.ZwyvJd5t1kf1ho_i5eI7XWGx7vtGvpndXY4NMw'); 

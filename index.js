const Discord = require('discord.js')
const bot = new Discord.Client();
const token = process.env.TOKEN;
const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Pokemon Mystery Dungeon', { type: 'PLAYING' }).catch(console.error);
})

bot.login(token);

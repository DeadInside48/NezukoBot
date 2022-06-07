require('dotenv').config();
const { Telegraf } = require('telegraf');
const NezukoBot = new Telegraf(process.env.TOKEN);


NezukoBot.start((ctx) => ctx.reply(`Привет, ${ctx.from.first_name}, напиши сообщение, чтобы я его продублировал!`))
NezukoBot.help((ctx) => ctx.reply('Бот создан для дублирования твоих сообщений, напиши любое собщение!'))

NezukoBot.on('message', (ctx) => ctx.copyMessage(ctx.message.chat.id))

NezukoBot.launch();
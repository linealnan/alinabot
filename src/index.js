const TelegramBot = require('node-telegram-bot-api')
const token = '...'
const bot = new TelegramBot(token, {polling: true})

bot.onText(/Алиночка/, (msg) => {
  const chatId = msg.chat.id
  const resp = "умничка!!"
  bot.sendMessage(chatId, resp)
})

bot.onText(/Алиночка/, (msg) => {
  const chatId = msg.chat.id
  const resp = "умничка!!"
  bot.sendMessage(chatId, resp)
})

bot.on('message', (msg) => {
  console.log(msg)
})

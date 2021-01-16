const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('./dialogflow');
const youtube = require('./youtube');
const token = '1540402604:AAH5YiO-hhfUXyp-2mjE_mmlPkGuC3HKd7M';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async function(msg){
    const chatId = msg.chat.id;
    console.log(msg.text);

    const response = dialogflow.sendMessage(chatId.toString(), msg.text);

    let textResponse = response.text;

    if((await response).intent === 'treino específico'){
        textResponse = await youtube.searchVideoURL(textResponse, dfResponse.fields.corpo.stringValue); 
    }
    bot.sendMessage(chatId, textResponse );
});
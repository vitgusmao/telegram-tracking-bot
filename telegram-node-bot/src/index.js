"use strict";

const TelegramBot = require("node-telegram-bot-api");
const {TELEGRAM_API_TOKEN} = require("./config");


// let telegram_url =
// 		"https://api.telegram.org/bot" +
// 		process.env.TELEGRAM_API_TOKEN +
// 		"/sendMessage";

// Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
const telegram = new TelegramBot(TELEGRAM_API_TOKEN, {polling: true});

telegram.on("text", (message) => {
	telegram.sendMessage(message.chat.id, "Hello world");
});

telegram.on("text", (message) => {
    if (message.text.toLowerCase().indexOf("/start") === 0) {
        telegram.sendMessage(
            message.chat.id,
            "Para começar adicione um código de rastreio\nVeja /help para comandos"
        );
    }

    if (message.text.toLowerCase().indexOf("/help") === 0) {
        telegram.sendMessage(
            message.chat.id,
            "Aqui entram alguns comandos.\nrastreios\neditar <código-de-rastreio>\n"
        );
    }
});

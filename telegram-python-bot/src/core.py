from telegram.ext import CommandHandler, Filters, MessageHandler, Updater

from config.settings import TELEGRAM_API_TOKEN


def start(update, context):
    response_message = "=^._.^="
    context.bot.send_message(
        chat_id=update.effective_chat.id,
        text=response_message
    )

# def http_cats(update, context):
#     bot.sendPhoto(
#         chat_id=update.effective_chat.id,
#         photo=BASE_API_URL + context.args[0]
#     )

def unknown(update, context):
    response_message = "Comando não existe,\nuse /help para listar os os comandos existentes."
    context.bot.send_message(
        chat_id=update.effective_chat.id,
        text=response_message
    )


def main():
    updater = Updater(token=TELEGRAM_API_TOKEN, use_context=True)

    dispatcher = updater.dispatcher

    handlers = []

    handlers.append(CommandHandler('start', start))

    handlers.append(MessageHandler(Filters.command, unknown))

    #  CommandHandler('http', http_cats, pass_args=True)

    for handler in handlers:
        dispatcher.add_handler(handler)

    updater.start_polling()

    updater.idle()


if __name__ == '__main__':
    print("press CTRL + C to cancel.")
    main()

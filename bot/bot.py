# Universidade Federal de Roraima - Curso Ciência da Computação
# Trabalho: chatbot Telegram que armazena a localização do usuário
# Grupo: William Melo, Taita Ayane, Bruno Claudino, Bruno Caputo e Philip Mahama
# Professor: Leandro Balico
# Disciplina: Sistemas Distribuídos

# É necessário instalar o python-telegra-bot, pymongo e o dnspython usando o pip:
# pip install python-telegram-bot
# pip install pymongo
# pip install dnspython
#
# PS: lembre-se de usar seu token na variável updater
#
# Sobre o código:
#
# O usuário inicia o bot com o comando /start,
# então ele recebe um menu com botões, 
# um deste botões ao ser pressionado compartilha
# a localização atual do usuário e a grava em um
# banco de dados na nuvem.
# 
# Detalhes sobre o banco:
# 
# O banco usado é o MongoDB.
# Conectado na nuvem através de uma ferramenta chamada Atlas
# Atlas pertence a própria equipe do MongoDB

#import pip
import telegram
import pymongo
from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext, Filters, MessageHandler
from pymongo import MongoClient

# Conexão com o banco
#cliente = MongoClient("mongodb+srv://williamjsmelo2:ZyG8cW5XYVINPJhb@cluster0.rjxxo.mongodb.net/<dbname>?retryWrites=true&w=majority")
cliente = MongoClient("db:27017")
banco = cliente.locations


# Dá start nos menus do bot
def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text(f'Olá {update.effective_user.first_name}')
    update.message.reply_text(f'Se encontrou algum buraco, envie a localização')
    localizacao(update, context)
    
# Envia um botão para o usuário, que ao ser pressionado pelo mesmo, compartilha sua localização, e também envia
# o botão de sair
def localizacao(update: Update, context: CallbackContext):
    reply_markup = telegram.ReplyKeyboardMarkup([[telegram.KeyboardButton('Enviar localização', request_location=True)], 
        [telegram.KeyboardButton('Sair')]], resize_keyboard=True, one_time_keyboard=True)
    update.message.reply_text("Menu", reply_markup=reply_markup)
    
# Pega automaticamente a localização que o usuário compartilhou no chat e armazena no banco
def location(update: Update, context: CallbackContext):
    message = None
    if update.edited_message:
        message = update.edited_message
    else:
        message = update.message
    global current_pos    
    current_pos = (message.location.latitude, message.location.longitude)

    banco.datas.insert_one({'latitude':current_pos[0], 'longitude':current_pos[1]})


# Conexão com o bot
updater = Updater('INSIRA-AQUI-O-TOKEN-DO-SEU-BOT')

# Define quem são os comandos e os filtros
updater.dispatcher.add_handler(CommandHandler('start', start))
updater.dispatcher.add_handler(MessageHandler(Filters.location, location))


updater.start_polling()
updater.idle()
FROM python:3
COPY . /app/
RUN pip install python-telegram-bot && pip install pymongo
WORKDIR /app
CMD python bot.py

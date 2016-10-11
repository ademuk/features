import json

from channels.auth import channel_session

@channel_session
def ws_connect(message):
    message.reply_channel.send({
        "text": json.dumps({
            "action": "reply_channel",
            "reply_channel": message.reply_channel.name
        })
    })

@channel_session
def ws_receive(message):
    data = json.loads(message['text'])

    reply_channel = message.reply_channel
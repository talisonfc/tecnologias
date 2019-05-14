from skpy import SkypeEventLoop, SkypeNewMessageEvent

class SkypePing(SkypeEventLoop):
	"""docstring for SkypePing"""
	def __init__(self):
		super(SkypePing, self).__init__("lporjesus@hotmail.com","Casamento2017")
	
	def onEvent(self, event):
		if isinstance(event, SkypeNewMessageEvent) \
		and not event.msg.userId == self.userId \
		and "ping" in event.msg.content:
			print("teste",event.msg);
			event.msg.chat.sendMsg("Pong!");


skype = SkypePing();
skype.loop();
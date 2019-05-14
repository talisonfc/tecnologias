import pika

connection = None

try:
	connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
	channel = connection.channel()
	channel.queue_declare(queue='request-render-pdf')

	channel.basic_publish(exchange='',
		routing_key='hello',
		body='hello World!')

	print(' [x] Sent +Hello World!+')
except Exception as e:
	print('Sender: CONNECTION ERROR')
finally:
	if connection is not None:
		connection.close()


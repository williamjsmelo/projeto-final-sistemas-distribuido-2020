import socket
import threading
import time

HEADER = 5000
PORT = 5050
FORMAT = 'utf-8'
DISCONNECT_MESSAGE = "!DISCONNECT"
SERVER = socket.gethostbyname(socket.gethostname()) 
ADDR = (SERVER, PORT)
TAM = 5000


class myThread (threading.Thread):
   def run(self):
      threadLock.acquire()
      send("Hello World!")
      threadLock.release()

      
      

def send(msg):
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect(ADDR)
      
    message = msg.encode(FORMAT)
    msg_length = len(message)
    send_length = str(msg_length).encode(FORMAT)
    send_length += b' '*(HEADER - len(send_length))
    client.send(send_length)
    client.send(message)

    print(client.recv(5000).decode(FORMAT))
    
threadLock = threading.Lock()
thread = []


for _i in range(1000):
    t = myThread()
    t.start()
    thread.append(t)

for j in thread:
    j.join()

print(" ")

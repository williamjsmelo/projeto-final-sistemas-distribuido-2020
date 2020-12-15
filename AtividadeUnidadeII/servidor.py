import socket
import threading

HEADER = 5000
PORT = 5050
SERVER = socket.gethostbyname(socket.gethostname()) 
ADDR = (SERVER, PORT)
FORMAT = 'utf-8'
DISCONNECT_MESSAGE = "!DISCONNECT"

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(ADDR)

number = 0

def handle_client(conn, addr):
    print(f"[NEW CONNECTION] {addr} connected.")
    global number
    number += 1    
    connected = True
    while connected:
        msg_length = conn.recv(HEADER).decode(FORMAT)
        if msg_length:
            msg_length = int(msg_length)
            msg = conn.recv(msg_length).decode(FORMAT)

            print(f"[{addr}] {msg}")
            txt = msg[::-1]
            conn.send(txt.encode())
            

    conn.close()

def start():
    global number
    server.listen()
    print(f"[LSITENING] Server is listening on {SERVER}")
    while True:
       conn, addr = server.accept()
       thread = threading.Thread(target=handle_client, args=(conn, addr))
       thread.start()
       print(f"[ACTIVE CONNECTIONS] {threading.active_count() -1}")
       print(f"quantidade de requisiçoes:{number}" )


print("[STARTING] server is starting...")
start()

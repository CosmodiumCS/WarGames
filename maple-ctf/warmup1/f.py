import socket

#  nc warmup1.ctf.maplebacon.org 1337 

HOST = 'warmup1.ctf.maplebacon.org'
PORT = 1337

MESSAGE = 'A' * 100

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))

    s.sendall('MESSAGE'.encode())
    # data = s.recv(1024)

# print(f"Received {data!r}")

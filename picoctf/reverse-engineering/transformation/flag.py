output = open('enc').read()
flag = ''

''.join([chr((ord(flag[i]) << 8) + ord(flag[i + 1])) for i in range(0, len(flag), 2)])

for i in range(0, len(flag), 2):
    ''.join(chr(ord(flag[i])

flag = '灩捯䍔䙻ㄶ形楴獟楮獴㌴摟潦弸彥ㄴㅡて㝽'
# flag = 'ioT{6bt_nt4_f8e4af}'

# print(''.join([chr((ord(flag[i]) << 8) + ord(flag[i + 1])) for i in range(0, len(flag), 2)]))

# >> 0x110000
# 1114112

result = ''

for i in range(len(flag)):
    # skip of one
    one = (chr(ord(flag[i])>>8))
    
    # skip of two
    two = (chr((ord(flag[i]))-((ord(flag[i])>>8)<<8)))

    result += one + two

print(result)
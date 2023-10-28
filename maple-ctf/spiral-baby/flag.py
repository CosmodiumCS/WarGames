from spiral import Spiral
# from secret import flag
from os import urandom
from utils import *

def matrix(matrix):
    count = 0

    for i in matrix:
        if count == 4:
            print()
            count = 0

        print(i)
        count += 1

# key shit
key = urandom(16)
print(f'key : {key}')

# flag shit
cipher = Spiral(key, rounds=1)
flag = 'maple{abcdefghi}'
ciphertext = cipher.encrypt(flag)
hex_flag = ciphertext.hex()

print(f'ciphertext : {ciphertext}')
print(f'hex_flag : {hex_flag}')

# matrix shit
key_matrix = bytes2matrix(key)
flag_matrix = bytes2matrix(flag)

matrix(key_matrix)
matrix(flag_matrix)
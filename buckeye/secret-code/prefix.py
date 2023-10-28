encrypted_flag = "1:10:d0:10:42:41:34:20:b5:40:03:30:91:c5:e1:e3:d2:a2:72:d1:61:d0:10:e3:a0:43:c1:01:10:b1:b1:b0:b1:40:9"
known_prefix = "bctf"

def xor_decrypt_with_prefix(encrypted_flag, known_prefix):
    decrypted_flag = ""
    key = []

    # Split the encrypted flag into hexadecimal values
    hex_values = encrypted_flag.split(":")

    for i in range(len(known_prefix)):
        # Convert hexadecimal to decimal
        decimal_value = int(hex_values[i], 16)

        # XOR operation with the corresponding character in the known prefix
        key_byte = decimal_value ^ ord(known_prefix[i])
        key.append(key_byte)

    print(f'key: {key}')
    # XOR decrypt the entire flag using the determined key
    for i, hex_value in enumerate(hex_values):
        decimal_value = int(hex_value, 16)
        decrypted_char = chr(decimal_value ^ key[i % len(known_prefix)])
        decrypted_flag += decrypted_char

    return decrypted_flag

decrypted_flag = xor_decrypt_with_prefix(encrypted_flag, known_prefix)
print(f"Decrypted Flag: {decrypted_flag}")


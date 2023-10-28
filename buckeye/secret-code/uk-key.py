encrypted_flag = "1:10:d0:10:42:41:34:20:b5:40:03:30:91:c5:e1:e3:d2:a2:72:d1:61:d0:10:e3:a0:43:c1:01:10:b1:b1:b0:b1:40:9"
xor_key = "snub_wrestle"

def xor_decrypt(encrypted_flag, xor_key):
    decrypted_flag = ""
    key_length = len(xor_key)

    # Split the encrypted flag into hexadecimal values
    hex_values = encrypted_flag.split(":")

    for i, hex_value in enumerate(hex_values):
        # Convert hexadecimal to decimal
        decimal_value = int(hex_value, 16)

        # XOR operation with the corresponding character in the XOR key
        decrypted_char = chr(decimal_value ^ ord(xor_key[i % key_length]))
        
        decrypted_flag += decrypted_char

    return decrypted_flag

decrypted_flag = xor_decrypt(encrypted_flag, xor_key)
print(f"Decrypted Flag: {decrypted_flag}")


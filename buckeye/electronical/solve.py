from Crypto.Cipher import AES
import binascii

def create_block_with_prefix(prefix, block_size):
    padding_length = block_size - len(prefix) % block_size
    padded = prefix.encode() + b'\0' * padding_length
    return padded

def find_key_for_prefix(prefix, ciphertext, block_size):
    cipher = AES.new(b'\0' * 32, AES.MODE_ECB)  # Initial key guess (all zeros)

    target_block = create_block_with_prefix(prefix, block_size)

    for i in range(256):
        test_block = create_block_with_prefix(chr(i), block_size)
        test_ciphertext = cipher.encrypt(test_block)

        if test_ciphertext[:block_size] == ciphertext[:block_size]:
            key_byte = i ^ ord(prefix[0])
            cipher = AES.new(bytes([key_byte] * 32), AES.MODE_ECB)
            return cipher

# Example usage
ciphertext_hex = "633c5d6ad6269a25fc50b1c0f3759e4df28f646080dac2d31eb18a8ff76d319404bfd5d22c7ef88402acb16d1227cf5d"  # Replace with the actual ciphertext
known_prefix = 'bctf'
block_size = 16  # AES block size in bytes

cipher = find_key_for_prefix(known_prefix, binascii.unhexlify(ciphertext_hex), block_size)

decrypted_message = cipher.decrypt(binascii.unhexlify(ciphertext_hex)).rstrip(b'\0').decode('utf-8')
print(f"Decrypted Message: {decrypted_message}")


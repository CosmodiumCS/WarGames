from Crypto.Cipher import ChaCha20
from Crypto.Random import get_random_bytes

def decrypt(key, nonce, ciphertext):
    chacha = ChaCha20.new(key=key, nonce=nonce)
    decrypted_data = chacha.decrypt(ciphertext)
    
    # Remove padding by stripping trailing null bytes
    decrypted_data = decrypted_data.rstrip(b'\0')
    
    return decrypted_data

def main():
    encrypted_lines = open("database.txt", "rb").readlines()
    key = get_random_bytes(32)
    nonce = get_random_bytes(8)

    decrypted_lines = [decrypt(key, nonce, x) for x in encrypted_lines]

    for line in decrypted_lines:
        print(line.hex())

if __name__ == "__main__":
    main()


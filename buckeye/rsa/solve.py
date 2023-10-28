def rsa_decrypt(ciphertext, d, n):
    # Decrypt the ciphertext: m ≡ c^d (mod n)
    decrypted_message = pow(ciphertext, d, n)
    return decrypted_message.to_bytes((decrypted_message.bit_length() + 7) // 8, 'big')

# Given RSA parameters
e = 65537
n = 34188170446514129546929337540073894418598952490293570690399076531159358605892687
c = 414434392594516328988574008345806048885100152020577370739169085961419826266692
p = 3782335750369249076873452958462875461053
q = 9038904185905897571450655864282572131579

# Private exponent (you would need to obtain this)
d = pow(e, -1, (p-1)*(q-1))

# Decrypt the ciphertext
decrypted_message = rsa_decrypt(c, d, n)

print(f"Decrypted Message: {decrypted_message.decode('utf-8')}")


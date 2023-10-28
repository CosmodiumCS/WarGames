encrypted_flag = "1:10:d0:10:42:41:34:20:b5:40:03:30:91:c5:e1:e3:d2:a2:72:d1:61:d0:10:e3:a0:43:c1:01:10:b1:b1:b0:b1:40:9"
xor_key = "snub_wrestle"

def xor_decrypt_with_encoding_and_segmentation(encrypted_flag, xor_key, encoding):
    decrypted_flag = ""

    hex_values = encrypted_flag.split(":")
    key_length = len(xor_key)

    for i, hex_value in enumerate(hex_values):
        decimal_value = int(hex_value, 16)
        key_byte = xor_key[i % key_length]
        decrypted_char = chr(decimal_value ^ ord(key_byte))
        decrypted_flag += decrypted_char

    try:
        # Attempt to decode the decrypted flag using the specified encoding
        decoded_flag = decrypted_flag.encode('utf-8').decode(encoding)
        return decoded_flag
    except UnicodeDecodeError:
        return None

# Try with different encodings and segment the flag
segment_length = 4  # Adjust based on assumptions about the flag structure

for encoding in encodings_to_try:
    segments = [encrypted_flag[i:i+segment_length] for i in range(0, len(encrypted_flag), segment_length)]
    decoded_segments = []

    for segment in segments:
        decrypted_segment = xor_decrypt_with_encoding_and_segmentation(segment, xor_key, encoding)
        if decrypted_segment is not None:
            decoded_segments.append(decrypted_segment)

    if decoded_segments:
        print(f"Encoding: {encoding}, Decoded Segments: {decoded_segments}")
    else:
        print(f"Encoding: {encoding}, Unable to decode with this encoding")


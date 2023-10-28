import base64
import sys

def decode_base64_file(file_path):
    with open(file_path, 'r') as file:
        for line in file:
            decoded_data = base64.b64decode(line.strip()).decode('utf-8')
            print(decoded_data)

if __name__ == "__main__":
    base64_file_path = sys.argv[1]
    decode_base64_file(base64_file_path)


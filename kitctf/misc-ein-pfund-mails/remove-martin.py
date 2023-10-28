import os
import codecs

# list files
files = os.listdir()

# iterate through files
for file in files:

    #print(file)

    # read file
    read_file = open(file).readlines()

    # read lines
    for line in read_file:
        #print(line)
        line = line.strip()

        try:
            flag_index = (line.index('KCTF'))
            flag_end = line.index('}')
            
            if 'KCTF' in line:
                possible_flag = (line[flag_index:flag_end+1])
                hash = (possible_flag[5:-1])

                print(hash)

                # Decode the hex
                decoded_text = bytes.fromhex(hash).decode('utf-8')
                print(decoded_text)

        except:
            continue

        

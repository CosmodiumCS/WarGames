import os

files = os.listdir()

for file in files:
    file = file.strip()

    if file.endswith('.eml'):

        read_file = open(file).readlines()

        for line in read_file:
            if 'mawalu98@gmail.com' in line:
                break
            if 'martin@mawalabs.de' in line:
                break
        
        print(line)

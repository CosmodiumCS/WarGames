import os

files = os.listdir()

for file in files:
    file = file.strip

    cmd = os.popen('head -n 108 4408c.eml | sha256sum')

    print(cmd.read())

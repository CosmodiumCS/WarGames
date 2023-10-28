import hashlib


username = b'FREEMAN'
# sha256_username = '09820d032d73c31bd8f4a0532062a239d828a4da0951aeb66da928e843597e35'
sha256_username = hashlib.sha256(username).hexdigest()
missing = ''

values = (4,5,3,6,2,7,1,8)


for i in values:
    missing += sha256_username[i]

print(sha256_username)
print('picoCTF{1n_7h3_|<3y_of_' + missing + '}')
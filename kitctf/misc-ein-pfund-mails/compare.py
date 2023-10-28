doubles = open('hashes.txt').readlines()
singles = open('uniq.txt').readlines()

for single in singles:
    single = single.strip()

    count = 0
    for double in doubles:
        double = double.strip()


        if single == double:
            count += 1

    print(f'{single} : {count}')

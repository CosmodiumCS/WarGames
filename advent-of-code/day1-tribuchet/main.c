// day 1 : tribuchet
// created by : bluecosmo

// imports
#include <stdio.h>
#include <stdlib.h>

#define MAX_LINE_LENGTH 256

// main code
int main() {
    FILE *pFile;
    char line[MAX_LINE_LENGTH];
    char *ch;

    pFile = fopen("input.log", "r");
    char *output;

    // iterate through lines
    while (fgets(line, sizeof(line), pFile) != NULL) {
        printf("%s", line);

        int num1;
        int num2;

        for (char *currCharacter = line; *currCharacter != '\0'; currCharacter++) {
            printf("%c:", *currCharacter);
            if (!(currCharacter >= 97) || !(currCharacter <= 122)) {
                printf("%d ", &currCharacter);
            }
        }
        printf("\n");
        // alternative looping
        /* char *currCharacter = line; */
        /* while (*currCharacter != '\0') { */
        /*     printf("%c ", *currCharacter); */
        /*     currCharacter++; */
        /* } */
    }
    fclose(pFile);

    return 0;
}


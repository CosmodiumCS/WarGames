#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int main() {

    // ciphertext given
    char* ciphertext = "33AE0C532293259809A0DBC89A928D235CAB3AD86F8082AD15355C0D56EDE9F207412DC64431D73F053B6461379B3FB6C7D7EDA9FFD0273F2ED61C28521DB1EE17814A8124808E091E7811E2CAAF04FBEA183F4285C048DB46C01C279879A928226D973793C08A71B87D979D76544CE119BCE109BD8F39E4DDEA3CF1EEDFAEC036DC937D";

    // length of the ciphertext
    size_t ct_len = strlen(ciphertext);

    // generate the same random bytes used in the encryption
    unsigned char* random_bytes = malloc(ct_len);
    for (size_t i = 0; i < ct_len; i++) {
        random_bytes[i] = rand();
    }

    // decode the ciphertext
    unsigned char* dec = malloc(ct_len);
    for (size_t i = 0; i < ct_len; i++) {
        dec[i] = ciphertext[i] ^ random_bytes[i];
    }

    printf("This is the original message: ");
    for (size_t i = 0; i < ct_len; i++) {
        printf("%c", dec[i]);
    }
    printf("\n");
}

#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int main() {

	// secret message given
    char* secret_msg = "33AE0C532293259809A0DBC89A928D235CAB3AD86F8082AD15355C0D56EDE9F207412DC64431D73F053B6461379B3FB6C7D7EDA9FFD0273F2ED61C28521DB1EE17814A8124808E091E7811E2CAAF04FBEA183F4285C048DB46C01C279879A928226D973793C08A71B87D979D76544CE119BCE109BD8F39E4DDEA3CF1EEDFAEC036DC937D";

	// length of the secret message
    size_t msg_len = strlen(secret_msg);


	// random bytes set to the memory of the message length??
    unsigned char* random_bytes = malloc(msg_len);

	//
    for (size_t i = 0; i < msg_len; i++) {
        random_bytes[i] = rand();
    }

    unsigned char* enc = malloc(msg_len);
    for (size_t i = 0; i < msg_len; i++) {
       // enc[i] = secret_msg[i] ^ random_bytes[i];
		enc[i] =  random_bytes[i] ^ secret_msg[i];
    }

    printf("This is my message to you: ");
    for (size_t i = 0; i < msg_len; i++) {
        printf("%02X", enc[i]);
    }
    printf("\n");
}

## Challenge:
DEFCON30 has arrived!! DEFCON is an event where many hackers gather together to showcase the latest and greatest in cyber! It is their 30th year of the event, hence DEFCON30. Weirdly, a mysterious coin was found on the ground at the event. Can we crack it?

## Side 1:
![[defcon-coin-side-1.png]]
- after searching "cipher with dots and boxes" on google, we were able to discover the "pigpen cipher"
- using [this tool](https://www.boxentriq.com/code-breaking/pigpen-cipher), we were able to decrypt the message
![[defcon-coin-pigpen-decrypt.png]]
```
plaintext: 15SPEAK FRIEND AND ENTER
```

## Side 2:
![[defcon-coin-side-2.png]]
**BOTTOM SIDE**
```
ciphertext: oynvfrvfgurxrl
```
- after analyzing the text, we could determine the cipher was either caesar cipher or vigenere cipher (or some other letter manipulating cipher)
- using skeleton key, we were able to decrypt it as a caesar cipher
![[defcon-coin-blaise-is-the-key.png]]
```
blaise is the key
```
 **TOP SIDE**
```
ciphertext: Qruzm qqjnzb 30, Umtaj vnootyu sdsx sopwiczbr
                  defcon 30
```
- after some analysis, we determined this cipher was using the vigenere cipher
- we can use [this](https://www.boxentriq.com/code-breaking/vigenere-cipher) online tool to decrypt the ciphertext
![[defcon-coin-vigenere-bruteforce.png]]
```
key: mellon
plaintext: enjoy defcon happy hacking from hackerone
```
# Titanic
> Younes | 09/29/2021

## Discovering 'Server-Stats'
- I started to look at the website, obv went to `robots.txt` first.
- Noticed the `/server-status` but didn’t really think much of it after browsing to it and getting a 403 forbidden status code
  - so I threw it into the useless part of solving this ctf.

## Finding The Vulnerability
- Later on I noticed this url checker and immediately laughed as I was 100% sure it was ssrf.
```
If there’s ever a url field, 9/10 the ctf box is made to be vulnerable to an ssrf, unless it’s a rabbit hole, which is super easy to get out of if you’re testing for ssrf because it’s not really that complex to test for.
```

## Boot Discovery
Anyways, so I try `http://127.0.0.1/` and I get a screenshot of sort of like a windows machine when it’s rebooting or something.
```
It’s like a blue screen with the white circle loading thingy. Anyways, so I got stuck in this for about 15 minutes trying to leverage it to potentially read files or sensitive info.
```
Nothing worked. I started my recon all over again and remembered the `/server-status`.

## Flag Discovery
Thought I’d combing both together so final url would be : `http://127.0.0.1/server-status` and woahh I got the logs.
```
flag{88269d5ef52a5ee961ea6449e1b610a9}
```

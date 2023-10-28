# Mike Shallot
> Younes | 09/29/2021

## Initial Process
I thought it was gonna be easy, I thought if I just used google dorks and tried to filter search results with 'Mike shallot' in the 'intext' field but I came up with nothing.
```
I then remembered a blogpost about an OSINT tool that I read about on Twitter called `Spiderfoot` and that it also comes pre installed with kali. So I thought I'd give it a go before cloning a whole list of other GitHub repos about OSINT.
```

## Using SpiderFoot
took a look at the help page first with the syntax and then found out that I can use the GUI version of it by spawning a webserver on a port I would like. Sweet.
```
spiderfoot -h
sudo spiderfoot -l 127.0.0.1:80
```
- I entered 'Mike Shallot' into the search field and ticked all options
- It ran for a while and eventually returned a dark web link
```
it matched the hint that was given ( 'hide amongst the corners and crevices of internet' )
```

## Capturing The Flag
I found out that there were two strings.
- One of them was a link.
- Just try to append the second gibberish link to the first one. 
```
flag{6e57a4c0be1656f9bc873647f49b9cdc}
```

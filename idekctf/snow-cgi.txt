#! /opt/bin/perl
#
# snow - encrypt/decrypt web pages
#
# see http://www.darkside.com.au/snow/
#
# R. Perry, March 2001

require 5.002;
use Socket;
use FileHandle;
use IPC::Open2;

# program path
#
$snow = "/sites/fog.misty.com/bin/snow";

# redirect stderr to /dev/null
#
#-- open(STDERR, ">/dev/null") or &fail("Can't redirect STDERR: $!");

# Make output unbuffered
#
$| = 1;

# Borrowed from MajorCool:
#   This is probably non-standard. Usually, you
#   don't support both GET and POST. It was done
#   done this way to allow both embedded FORM &
#   command-line args to be supported.
#
local($buffer) = "";
if ($ENV{REQUEST_METHOD} eq "POST") {           # via POST
  read(STDIN, $buffer, $ENV{CONTENT_LENGTH});
}
if ($ENV{QUERY_STRING}) {                       # via GET
  $buffer .= "&" if $buffer;
  $buffer .= "$ENV{QUERY_STRING}";
}

# URL, password, message, and action
#
$URL="";
$passwd="";
$msg="";
$what="";

# Split the name-value pairs
#
@pairs = split(/&/, $buffer);
foreach $pair (@pairs) {
  ($name, $value) = split(/=/, $pair);
  $value =~ tr/+/ /;
  $value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
  if( $name eq "URL") {
    $URL = $value;
  } elsif( $name eq "passwd") {
    $passwd = $value;
  } elsif( $name eq "what") {
    $what = $value;
  } elsif( $name eq "msg") {
    $msg = $value;
  }
}

# debug
#
# print "Content-type: text/plain\n\n";
# print "URL = $URL\n";
# print "passwd = $passwd\n";
# print "msg = $msg\n";
# print "what = $what\n";
# exit;

# check parameters
#
if( $URL eq "") {
  &fail( "missing URL");
  exit;
}

if( $what ne "encrypt" && $what ne "decrypt") {
  &fail( "bad request");
  exit;
}

if( $what eq "encrypt" && $msg eq "") {
  &fail( "empty message");
  exit;
}

# get the URL
#
  ($remote, $page) = split( /\//, $URL, 2);
  $page = "/" . $page;
  $port = 80;
  $iaddr = inet_aton( $remote) or &fail( "host not found: $remote");

  $paddr = sockaddr_in( $port, $iaddr);
  $proto = getprotobyname( 'tcp');

  socket( SOCK, PF_INET, SOCK_STREAM, $proto) or &fail( "socket: $!");

  connect( SOCK, $paddr) or &fail( "connect: $!");

  $send = "GET $page HTTP/1.0\r\nHost: $remote\r\n\r\n";
# $send = "GET $page\r\n\r\n";

  send SOCK, $send, 0 or &fail( "send: $!");

  $lf = $/;
  undef $/;
  $data = <SOCK>;        # entire output now in $data

  ($header, $input) = split(/\r\n\r\n/, $data, 2);

  $/ = $lf;

  close( SOCK);

# debug
#
# print "header = ``$header''\n\n";
# print "input = ``$input''\n\n";
# exit;

# encrypt or decrypt
#
if( $what eq "encrypt") {

  if( $passwd eq "")
  {
    open2( \*Reader, \*Writer, $snow, '-C', '-Q', '-m', $msg) or &fail( "open2: $!");
  }
  else
  {
    open2( \*Reader, \*Writer, $snow, '-C', '-Q', '-p', $passwd, '-m', $msg) or &fail( "open2: $!");
  }

  Writer->autoflush();
  print Writer "$input";
  close( Writer);

  $lf = $/;
  undef $/;
  $output = <Reader>;        # entire output now in $output
  $/ = $lf;

  close( Reader);

  print "Content-type: text/html\n\n";
  print "$output";

} else { # decrypt

  if( $passwd eq "")
  {
    open2( \*Reader, \*Writer, $snow, '-C', '-Q') or &fail( "open2: $!");
  }
  else
  {
    open2( \*Reader, \*Writer, $snow, '-C', '-Q', '-p', $passwd) or &fail( "open2: $!");
  }

  Writer->autoflush();
  print Writer "$input";
  close( Writer);

  $lf = $/;
  undef $/;
  $output = <Reader>;        # entire output now in $output
  $/ = $lf;

  close( Reader);

  print "Content-type: text/plain\n\n";
  print "$output";

}

exit;

# ======================================================
# This subroutine takes a single input parameter and uses 
# it as the <TITLE> and the first level header.
# ======================================================

sub html_header {

    $document_title = $_[0];
    print "Content-type: text/html\n\n";
    print "<HTML>\n";
    print "<HEAD>\n";
#    print "<META HTTP-EQUIV=\"Pragma\" CONTENT=\"no-cache\">\n";
    print "<TITLE>$document_title</TITLE>\n";
    print "</HEAD>\n";
    print "<BODY>\n";
    print "<H1>$document_title</H1>\n";
    print "<P>\n";
}

# ======================================================
# This subroutine finishes off the HTML stream.
# ======================================================

sub html_trailer{

    print "</BODY>\n";
    print "</HTML>\n";
}

# failed
#
sub fail {
    &html_header("Script Failed");
    print "Script failed: $_[0]\n";
    &html_trailer;
    exit;
}


# URL=fog.misty.com/perry/ccs/snow/snow.html&passwd=ice&msg=&what=decrypt

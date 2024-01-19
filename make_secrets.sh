#!/bin/bash

##
## script name: make_secrets.sh
## author: Luke F. Lawson
## license: MIT
##
## This script creates a secrets.json file
## at build time using environment variables.
##

## first delete any existing file

if [[ -f secrets.json ]] ; then rm secrets.json ; fi

## then build the file one line at a time:

echo "{" >> secrets.json
echo "  \"type\": \"${TYPE}\"," >> secrets.json
echo "  \"project_id\": \"${PROJECT_ID}\"," >> secrets.json
echo "  \"private_key_id\": \"${PRIVATE_KEY_ID}\"," >> secrets.json
echo "  \"private_key\": \"${PRIVATE_KEY}\"," >> secrets.json
echo "  \"client_email\": \"${CLIENT_EMAIL}\"," >> secrets.json
echo "  \"client_id\": \"${CLIENT_ID}\"," >> secrets.json
echo "  \"auth_uri\": \"${AUTH_URI}\"," >> secrets.json
echo "  \"token_uri\": \"${TOKEN_URI}\"," >> secrets.json
echo "  \"auth_provider_x509_cert_url\": \"${AUTH_PROVIDER_CERT}\"," >> secrets.json
echo "  \"client_x509_cert_url\": \"${CLIENT_CERT}\"," >> secrets.json
echo "  \"universe_domainl\": \"${UNIVERSER_DOMAIN}\"" >> secrets.json
echo "}" >> secrets.json
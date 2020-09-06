#!/bin/bash
cd ~/TRYBE/MODULO-1/BLOCO-1/Aula-1.2/unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
cat countries.txt
less countries.txt #/Zambia
grep Brazi countries.txt
grep -i brazil countries.txt

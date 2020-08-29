#!/bin/bash
DIA=$(date +%F)

for ARQUIVO in `ls *.png`
    do
        mv $ARQUIVO ${DIA}-$ARQUIVO
    done
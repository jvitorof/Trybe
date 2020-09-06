#!/bin/bash
ARQUIVOS=$@

for ARQUIVO in $ARQUIVOS
    do
        if [ -f $ARQUIVO ]
            then
                echo "$ARQUIVO é um arquivo comum"
        elif [ -d $ARQUIVO ]
            then
                echo "$ARQUIVO é um diretorio"
        else
                echo "$ARQUIVO é outra coisa. Nem diretório nem arquivo"
        fi
    done
#para procurar dirtórios utilize ../../ Até onde quiser chegar.
#Aqui dá pra usar TAB para COMPLETAR
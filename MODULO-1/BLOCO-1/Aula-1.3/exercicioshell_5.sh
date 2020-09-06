#!/bin/bash
read -p "Digite o caminho de um arquivo ou diretório: " ARQUIVO
if [ -f $ARQUIVO ]
    then
        echo "$ARQUIVO é um arquivo comum"
elif [ -d $ARQUIVO ]
    then
        echo "$ARQUIVO é um diretorio"
else
        echo "$ARQUIVO é outra coisa. Nem diretório nem arquivo"
fi

#para procurar dirtórios utilize ../../ Até onde quiser chegar.
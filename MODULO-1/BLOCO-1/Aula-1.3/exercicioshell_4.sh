#!/bin/bash
ARQUIVO="./TRYBE/1-Modulo/1.3-Aula/script1.3.sh"
if [ -e "$ARQUIVO" ]
    then
        echo "O caminho $ARQUIVO está liberado!"
fi
if [ -w "$ARQUIVO" ]
    then
        echo "Você tem permissão para editar $ARQUIVO"
    else
        echo "Você Não foi autorizado a editar $ARQUIVO"
fi
#!/bin/bash
DIRETORIO=$1
if [ -d $DIRETORIO ]
    then
        ARQUIVOS=`ls -l $DIRETORIO | wc -l`
        echo "O diretório $DIRETORIO tem $ARQUIVOS arquivos."
else
    echo "O argumento $DIRETORIO não é um diretório."
fi
#UTILIZAR A CRASE `é o correto para trazer um comando do bash para uma variável`
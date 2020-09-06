#!/bin/bash
read -p "nome dos arquivos a serem criados" NOME
read -p "extesão dos arquivos a serem ciados" EXT
read -p "Número de exercícios: " N
for ((cont=1; cont<=N; cont++))
	do
		echo "#/!bin/bash" > "$NOME-$cont.$EXT"
	done
for ((cont=1; cont<=N; cont++))
	do
		chmod a+rwx "$NOME-$cont.$EXT"
	done

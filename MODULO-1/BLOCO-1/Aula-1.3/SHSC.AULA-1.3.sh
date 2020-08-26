#!/bin/bash
read -p "Número de exercícios: " N
for ((cont=1; cont<=N; cont++))
	do
		echo "#!bin/bash" > "Exercicio-$cont.sh"
	done
for ((cont=1; cont<=N; cont++))
	do
		chmod a+rwx "Exercicio-$cont.sh"
	done

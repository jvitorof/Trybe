#!/bin/bash
#EU sou Tryber e teremos SUCESSO juntos EVERLONG

read -p "Precisa criar pastas para os módulos (S/N)" CMODULOS


if [ 'S' = $CMODULOS ] || [ 's' = $CMODULOS ] || [ 'sim' = $CMODULOS ] || [ 'SIM' = $CMODULOS ]
    then
        read -p "Digite o numero do módulo a ser criado: " MODULO
            mkdir MODULO-$MODULO
else
    read -p "Precisa criar pastas para os blocos (S/N)" CBLOCOS
    if [ 'S' = $CBLOCOS ] || [ 's' = $CBLOCOS ] || [ 'sim' = $CBLOCOS ] || [ 'SIM' = $CBLOCOS ]
        then
            read -p "Qual modulo terá inserção de blocos (1/2/3/4): " MODULO
            cd "MODULO-$MODULO/"
            if [ 1 -eq $MODULO ] || [ 2 -eq $MODULO ] || [ 3 -eq $MODULO ] || [ 4 -eq $MODULO ]
                then
                    read -p "Digite o número INICIAL da pasta do BLOCO a ser criado: " IBLOCO
                    read -p "Digite o número FINAL da pasta do BLOCO a ser criado: " FBLOCO
                    read -p "Digite o número de(da) AULA(S) no(s) BLOCO(S): " NAULAS
                    read -p "Criar SCRIPTS nas pastas das AULAS? S/N: " SIM
                    for ((cont=$IBLOCO; cont<=$FBLOCO; cont++)); 
                        do 
                            
                            BLOCO=$cont
                            mkdir "BLOCO-$BLOCO";                    
                            cd "BLOCO-$BLOCO/"
                            for ((N=1; N<=$NAULAS; N++))
                                do
                                mkdir "Aula-$BLOCO.$N"
                                cd "Aula-$BLOCO.$N/"
                                if [ 'S' = $SIM ] || [ 's' = $SIM ] || [ 'sim' = $SIM ] || [ 'SIM' = $SIM ]
                                    then
                                        cat > "shsc.aula-$BLOCO.$N.sh" << EOT
#!/bin/bash
read -p "nome dos arquivos a serem criados: " NOME
read -p "extesão dos arquivos a serem ciados: " EXT
read -p "Número de exercícios: " N
for ((cont=1; cont<=N; cont++))
	do
		touch "\${NOME}-\${cont}.\${EXT}"
	done
for ((cont=1; cont<=N; cont++))
	do
		chmod a+rwx "\${NOME}-\${cont}.\${EXT}"
	done

EOT
                                        
                                                                                
                                        chmod a+rwx "shsc.aula-$BLOCO.$N.sh"
                                else
                                    echo "sem script na Aula-$BLOCO.$N. Ñcookies4u!"
                                fi
                                cd ..
                        done
                        cd ..
                    done
                    echo "Obrigado! - Jota"
            else
                echo "Modulo incorreto, tente um módulo aberto! - Jota"
            fi
    else
        echo "Obrigado! - Jota"
    fi
fi
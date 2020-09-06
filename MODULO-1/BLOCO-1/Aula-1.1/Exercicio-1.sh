#!/bin/bash
# https://sempreupdate.com.br/5-maneiras-de-verificar-as-informacoes-da-cpu-no-linux/
#
#uma forma de listar o Hardware de seu computador.
lscpu > listahard.txt
#https://www.vivaolinux.com.br/dica/Listar-todos-os-programas-instalados-no-Ubuntu
#
#uma forma de listar todos os softwares do computador.
sudo dpkg -l > listasoft.txt
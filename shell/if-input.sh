
# if-input.sh
#
# Comparar entrada com valor "a"
#
# Versaõ 1: Comparação
#
# Talison F. Costa, 18/03/2019

if [ "$1" = "a" ] 
then
    echo "entrada a"
fi

if test "$1" = "a" 
then
    echo "entrada a"
fi

ajuda="
Uso: $0 [-h]

    -h  Mostra esta tela de ajuda e sai
"

if [ "$1" = "-h" ]
then
    echo "$ajuda" > arq.txt
elif test "$1" = "-V"
then
    echo "2.0.1"
fi
# Comando basename remove o path

ajuda="
Uso: $(basename "$0") [-h | -V]
"

# tratamento de opcoes de linha de comando
case "$1" in
-h | --help)
    echo "$ajuda"
    exit 0
    ;;
-V | --version)
    echo "2.3.4"
    exit 0
    ;;
*)
    if test -n "$1"
    then
        echo "opção invalida"
        exit 1
    fi
    ;;
esac

echo "fim"
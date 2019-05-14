## Criar container

Flags:

- -d: rodar em background
- -name: definir um nome para o container
- porta1: porta em que o container vai estar ativo
- porta2: porta em que o serviço dentro do container vai estar rodando

	docker container run -d -p porta1:porta2 --name \<name> \<image>

## Entrar no container


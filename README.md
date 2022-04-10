# Tecnologias utilizadas no backend:

-nodeJS (typescript)

-postgresql (Docker)

-express

-knex

-celebrate

-TESTES ---->mocha && chai, sqlite, Insomnia


# COMANDOS PARA CONFIGURAR A APP

--> comando para rodar um docker container postgres com as configurações definidas

docker run --name db-cars -p 5432:5432 -v E:\project-InfoSistemas\Backend\src\database\data:/var/lib/postgresql/data -d postgres

***Alterar o caminho do volume

docker run --name db-cars \

-p 5432:5432  \

-v "caminho ate a pasta src/database/data":/var/lib/postgresql/data  \

-d postgres \


***criar um arquivo para configuração das variavéis globais usadas (ex PG_PORT, PG_PASSWORD, PG_HOST)


---->comando para criar a tabela no banco

npm run knex:migrate --> comando para executar as migrations


# COMANDOS PARA RODAR A APP

npm run dev --> comando para rodar o server(desenvolvimento)

npm run test --> comando para executar os testes

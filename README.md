

- JWT (JSON WEB TOKENS)
- Tokens de verificação
- API rest
- Gestor de pacotes
- CORS

- npm kill-port 3001 killed
- node --watch ./src/index.js

## API

 - Faz a comunicação entre dois softwares

 - ORM Object Relational Mapper (Prisma)

### Ferramentas / Frameworks

 - Express
 - Node 
 - SQLite Studio
 - Postman / Insomnia

### Como funciona?

 - Requisição é montada
 - Dentro da API tem rotas 
    - http://minhaapi.com **/tarefas** -> ROTA
    - Requisição HTTP (**request**)
#### Operações básicas

 Verbos HTTP
 
 - Listar           GET
 - Inserir          POST 
 - Editar           PUT
 - Excluir          DELETE

 
 - Body - Corpo da requisição

 - Api vai abrir conexão com o banco e enviar uma resposta

    - A api devolve uma resposta **response** com um **status code**
        - 201 Inserido com sucesso 
        - 200 OK
        - 500 erro interno
        - 401 não autorizado
        etc...

### Criando API com node

#### Dependencias e gestor de pacotes

    - npm init 
        - gestor de pacotes
    
    - src (source / código-fonte)

    - npm install express
    - npm install cors () 
    - npm install sqlite3
    
    - npm install

#### Arquivos    

    - index
    - routes
    - controller

    - models / services 










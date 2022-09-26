# api-invest
API do Portal Invest

Dependencias utilizadas:
Nodemon, Express, Cors e Joi

O sistema permite cadastrar diversas carteiras de ações, que são formadas por ações (tickers), que também podem ser cadastrados, das empresas listadas na bolsa de valores e por fim, incluir tickers previamente cadastrados no portfolio das carteiras previamente cadastradas.

# Criação do banco de dados MySQL
Para criar o banco de dados, as tabelas e os dados de teste, rodar os comandos abaixo respeitando essa sequência:
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

Diante desta necessidade, ficou entendido pelo time de produto que para alcançar tal objetivo será necessário disponibilizar novas funcionalidades em seu portal:
- O cadastro, consulta, alteração e exclusão de uma ação (ticker);
- A possibilidade de listar todos as ações cadastrados;
- Possibilidade de listar uma ou todas as ações de uma determinada carteira;
- A realização do cadastro de uma ação em uma carteira (validando se a ação e a carteira existe);
- A exclusão de uma ação em uma determinada carteira.
- A possibilidade de listar as carteiras disponíveis para cadastrar uma ação;
- O cadastro, consulta, alteração e exclusão de uma carteira;

Rotas disponibilizadas:
[GET] /ticker 
Retorna todos os tickers cadastrados

[GET] /ticker/:id
Retorna apenas um determinado ticker conforme o id informado

[POST] /ticker
Cadastra um novo ticker

[PUT] /ticker/:id
Altera um determinado ticker conforme o id informado

[DELETE] /ticker/:id
Exclui um determinado ticker conforme o id informado, fazendo SOFT DELETE

[POST] /ticker/:id
Restaura um determinado ticker conforme o id informado, desfazendo SOFT DELETE 

[GET] /ticker/carteira/:idCarteira
Lista todas as ações que fazem parte do portfolio de uma determinada carteira ativa

[GET] /ticker/:idTicker/carteira/:idCarteira
Lista uma determinada ação que faz parte do portfolio de uma determinada carteira ativa

[POST] /ticker/:idTicker/carteira/:idCarteira
Inclui uma determinada ação em uma determinada carteira ativa

[DELETE] /ticker/:idTicker/carteira/:idCarteira
Remove uma determinada ação de uma determinada carteira ativa

[GET] /carteira 
Retorna todas as carteiras cadastradas ativas

[GET] /carteira/:id
Retorna uma determinada carteira ativa conforme o id informado

[POST] /carteira
Cadastra uma nova carteira

[PUT] /carteira/:id
Altera uma determinada carteira conforme o id informado

[DELETE] /carteira/:id
Exclui uma determinada carteira conforme o id informado, fazendo SOFT DELETE

[POST] /carteira/:id
Restaura uma determinada carteira conforme o id informado, desfazendo SOFT DELETE

Regras a serem adicionadas:
- Não permitir excluir uma carteira ou ação que possua porfolio cadastrado

Melhorias para o futuro:
- Adicionar autenticação para uso da API
- Integrar ao FrontEnd
- Publicar o projeto em um servidor

Tirar o teste de exemplo do TickerController.js
Testar o validator em TickerController
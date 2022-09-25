# api-invest
API do Portal Invest

Dependencias utilizadas:
Nodemon, Express, Cors e Joi

O sistema permite cadastrar diversas carteiras de ações, que são formadas por ações (tickers) das empresas listadas na bolsa de valores.

Diante desta necessidade, ficou entendido pelo time de produto que para alcançar tal objetivo será necessário disponibilizar novas funcionalidades em seu portal:
- O cadastro, alteração e exclusão de uma carteira;
- A possibilidade de listar as carteiras disponíveis para cadastrar uma ação;
- Possibilidade de listar todas as ações de uma determinada carteira;
- A realização do cadastro de uma ação em uma carteira (validando se a carteira existe);
- A exclusão de uma ação em uma carteira.

Rotas disponibilizadas:
[GET] /carteira
[GET] /carteira/:id
[POST] /carteira
[PUT] /carteira/:id
[DELETE] /carteira/:id
[GET] /ticker/:idCarteira
[POST] /ticker
[DELETE] /ticker/:id

Melhorias para o futuro:
- Adicionar autenticação para uso da API
- Gravar os dados em banco de dados ao inves da memória
- Integrar ao FrontEnd
- Publicar o projeto em um servidor

Orientações para criar o banco de dados:
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
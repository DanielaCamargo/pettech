npm init -y 

<!-- biblioteca de transcrição de ts para js tsup local e tsx produção -->
npm i -D @types/node tsup tsx typescript

npm i fastify

npm i dotenv 

npm i zod

<!-- comando biblioteca para hambiente de desenvolvimento -->
npm i -D @typescript-eslint/eslint-plugin@6.21.0 @typescript-eslint/parser@6.21.0 eslint@8.57.0 eslint-config-prettier@9.1.0 eslint-config-standard@17.1.0 eslint-plugin-import@2.29.1 eslint-plugin-n@16.6.2 eslint-plugin-prettier@5.1.3 eslint-plugin-promise@6.1.1 prettier@3.2.5

<!-- foi adicionado no arquivo tsconfig.json para arrumar o diretorio para a importação acertar -->
<!-- "baseUrl": "./",
"paths": {
    "@/*": ["./src/*"]
},
"target": "es2020", -->

<!-- instalacao do pacote ORM para integração da nossa aplicação com o banco de daodos do postgres -->
npm i pg

<!-- apontar a versao do node -->
nvm use 20 

<!-- rodar em casos de uso de typescript = tem que ser adicionado o tipo ao instalar -->
npm i -D @types/pg

<!-- instalação do ORM typeorm  -->
npm i typeorm reflect-metadata

<!-- rodar migration apos transpilado  -->
npm run build && npx typeorm migration:run -d ./build/lib/typeorm/typeorm.js

<!-- comando para voltar a migration após transpilado e ja rodado -->
npx typeorm migration:revert -d ./build/lib/typeorm/typeorm.js

<!-- biblioteca para autenticação -->
npm i @fastify/jwt bcryptjs && npm i -D @types/bcryptjs
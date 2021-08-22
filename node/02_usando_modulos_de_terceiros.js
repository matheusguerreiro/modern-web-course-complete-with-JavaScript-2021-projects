// usando módulos de terceiros
// npm - node pack manager
/*
 * no terminal
 * npm -v -> para ver a versão do gerenciador de pacotes do node.js
 * npm i lodash -> i de instalar, módulo lodash
 * criar arquivo gitignore e colocar dentro dele node_modules -> para ignorar o lodash
 */

const _ = require('lodash') // importando o módulo lodash, o _ é uma referência, deve ser assim.
setInterval(() => console.log(_.random(1, 1000)), 1000)

// npm i -g nodemon -> -g para instalar de forma global, nodemon para executar o codigo atualizado sempre que for salvo. refresh.
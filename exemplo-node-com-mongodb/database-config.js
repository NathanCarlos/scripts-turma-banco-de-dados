const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

module.exports = client.connect();

// EXEMPLOS DE PROMISES

// console.log('teste');
// const promiseTeste = new Promise((resolve, reject) => {
//     resolve('teste2');
// });
// const promiseTeste5 = new Promise((resolve, reject) => {
//     resolve('teste5');
// });

// const promiseAll = Promise.all([promiseTeste, promiseTeste5]);

// promiseAll.then(([retornoTeste2, retornoTeste5]) => {
//     console.log(retornoTeste2, retornoTeste5);
// });

// promiseTeste.then((valor) => {
//     console.log(valor);
    
// });

// console.log('teste3');
// console.log('teste4');
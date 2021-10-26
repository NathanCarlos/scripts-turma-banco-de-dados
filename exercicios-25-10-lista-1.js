db.carros.find();

db.createCollection('carros');


db.carros.insertMany([
{ nome: 'Onix', marca: 'Chevrolet', cor: 'Preto', valor: 41000, valorVenda: 48000,kilometragem: 10300, anoVersao: 2018, anoModelo: 2019, dataInclusao: '2021-04-05' },
{ nome: 'Onix', marca: 'Chevrolet', cor: 'Preto', valor: 41000, valorVenda: 47000, kilometragem: 9800, anoVersao: 2018, anoModelo: 2019, dataInclusao: '2021-04-13' },
{ nome: 'Cruze', marca: 'Chevrolet', cor: 'Prata', valor: 90000, valorVenda: 93000,kilometragem: 12000, anoVersao: 2018, anoModelo: 2018, dataInclusao: '2021-03-02' },
{ nome: 'Celta', marca: 'Chevrolet', cor: 'Preto', valor: 20000, valorVenda: 23000, kilometragem: 138530, anoVersao: 2019, anoModelo: 2019, dataInclusao: '2021-01-03' },
{ nome: 'Polo', marca: 'Volkswagen', cor: 'Prata', valor: 80000, valorVenda: 89000, kilometragem: 21938, anoVersao: 2018, anoModelo: 2019, dataInclusao: null },
{ nome: 'Jetta', marca: 'Volkswagen', cor: 'Prata', valor: 130000, valorVenda: 135000, kilometragem: 9850, anoVersao: 2020, anoModelo: 2020, dataInclusao: '2021-02-01' },
{ nome: 'Polo', marca: 'Volkswagen', cor: 'Prata', valor: 82000, valorVenda: 85000, kilometragem: 8492, anoVersao: 2019, anoModelo: 2020, dataInclusao: null },
{ nome: 'Jetta', marca: 'Volkswagen', cor: 'Prata', valor: 120000, valorVenda: 130000, kilometragem: 9389, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-04-03' },
{ nome: 'Nivus', marca: 'Volkswagen', cor: 'Preto', valor: 100000, valorVenda: 110000, kilometragem: 7482, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-02-25' },
{ nome: 'Nivus', marca: 'Volkswagen', cor: 'Preto', valor: 105000, valorVenda: 110000, kilometragem: 4231, anoVersao: 2021, anoModelo: 2021, dataInclusao: '2021-03-30' },
{ nome: 'Nivus', marca: 'Volkswagen', cor: 'Prata', valor: 100000, valorVenda: 105000, kilometragem: 5232, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-02-05' },
{ nome: 'Argo', marca: 'Fiat', cor: 'Vermelho', valor: 61000, valorVenda: 65000, kilometragem: 5213, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-01-05' },
{ nome: 'Argo', marca: 'Fiat', cor: 'Preto', valor: 55000, valorVenda: 66000, kilometragem: 7263, anoVersao: 2021, anoModelo: 2021, dataInclusao: '2021-03-05' },
{ nome: 'Argo', marca: 'Fiat', cor: 'Prata', valor: 58000, valorVenda: 59000, kilometragem: 9813, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-05-05' },
{ nome: 'Toro', marca: 'Fiat', cor: 'Branco', valor: 90000, valorVenda: 85000, kilometragem: 8293, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-02-05' },
{ nome: 'Toro', marca: 'Fiat', cor: 'Branco', valor: 87000, valorVenda: 85000, kilometragem: 13942, anoVersao: 2019, anoModelo: 2020, dataInclusao: '2021-03-05' },
{ nome: 'Kwid', marca: 'Renault', cor: 'Preto', valor: 40000, valorVenda: 42000, kilometragem: 8723, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-03-05' },
{ nome: 'Kwid', marca: 'Renault', cor: 'Marrom', valor: 41000, valorVenda: 39000, kilometragem: 9283, anoVersao: 2021, anoModelo: 2021, dataInclusao: '2021-02-05' },
{ nome: 'Kwid', marca: 'Renault', cor: 'Preto', valor: 39000, kilometragem: 9018, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-04-05' },
{ nome: '320i', marca: 'BMW', cor: 'Branco', valor: 170000, kilometragem: 3500, anoVersao: 2021, anoModelo: 2021, dataInclusao: '2021-02-05' },
{ nome: '320i f30', marca: 'BMW', cor: 'Preto', valor: 90000, valorVenda: 94000, kilometragem: 39000, anoVersao: 2018, anoModelo: 2018, dataInclusao: '2021-05-05' },
{ nome: '320i', marca: 'BMW', cor: 'Prata', valor: 120000, kilometragem: 28000, anoVersao: 2018, anoModelo: 2019, dataInclusao: '2021-05-05' }
]);


// Exercício 1)
db.carros.aggregate([
    {
        $project: {
           nome: 1,
           marca: 1,
           cor: 1,
           valor: 1,
           valorVenda: 1 
        }
    }
]);
    
// Exercício 2)
db.carros.aggregate([
    {
        $project: {
           nome: 1,
           marca: 1,
           cor: 1,
           valor: 1,
           valorVenda: 1,
           vendido: {
               $cond: {
                   if: { $gt: ['$valorVenda', 0] },
                   then: true,
                   else: false
               }
           }
        }
    }
]);
    
// Exercício 3)
db.carros.aggregate([
    {
        $project: {
           nome: 1,
           marca: 1,
           cor: 1,
           valor: 1,
           valorVenda: 1,
           vendido: {
               $cond: {
                   if: { $gt: ['$valorVenda', 0] },
                   then: true,
                   else: false
               }
           },
           lucro: {
               $cond: {
                   if: { $gt: ['$valorVenda', '$valor'] },
                   then: true,
                   else: false
               }
           }
        }
    }
]);
    
    
// Exercício 4
db.carros.aggregate([
    {
        $project: {
           nome: 1,
           marca: 1,
           cor: 1,
           valor: {
               $cond: {
                   if: { $gt: ['$valorVenda', 0] },
                   then: '$$REMOVE',
                   else: '$valor'
               }
           },
           valorVenda: 1,
           vendido: {
               $cond: {
                   if: { $gt: ['$valorVenda', 0] },
                   then: true,
                   else: false
               }
           },
           lucro: {
               $cond: {
                   if: { $gt: ['$valorVenda', '$valor'] },
                   then: true,
                   else: false
               }
           }
        }
    }
]);
    

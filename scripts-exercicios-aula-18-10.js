use concessionaria

db.createCollection('carros');

db.carros.insertMany([
    { nome: 'Onix', marca: 'Chevrolet', cor: 'Preto', valor: 41000, kilometragem: 10300, anoVersao: 2018, anoModelo: 2019, dataInclusao: '2021-04-05' },
{ nome: 'Onix', marca: 'Chevrolet', cor: 'Preto', valor: 41000, kilometragem: 9800, anoVersao: 2018, anoModelo: 2019, dataInclusao: '2021-04-13' },
{ nome: 'Cruze', marca: 'Chevrolet', cor: 'Prata', valor: 90000, kilometragem: 12000, anoVersao: 2018, anoModelo: 2018, dataInclusao: '2021-03-02' },
{ nome: 'Celta', marca: 'Chevrolet', cor: 'Preto', valor: 20000, kilometragem: 138530, anoVersao: 2019, anoModelo: 2019, dataInclusao: '2021-01-03' },
{ nome: 'Polo', marca: 'Volkswagen', cor: 'Prata', valor: 80000, kilometragem: 21938, anoVersao: 2018, anoModelo: 2019, dataInclusao: null },
{ nome: 'Jetta', marca: 'Volkswagen', cor: 'Prata', valor: 130000, kilometragem: 9850, anoVersao: 2020, anoModelo: 2020, dataInclusao: '2021-02-01' },
{ nome: 'Polo', marca: 'Volkswagen', cor: 'Prata', valor: 82000, kilometragem: 8492, anoVersao: 2019, anoModelo: 2020, dataInclusao: null },
{ nome: 'Jetta', marca: 'Volkswagen', cor: 'Prata', valor: 120000, kilometragem: 9389, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-04-03' },
{ nome: 'Nivus', marca: 'Volkswagen', cor: 'Preto', valor: 100000, kilometragem: 7482, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-02-25' },
{ nome: 'Nivus', marca: 'Volkswagen', cor: 'Preto', valor: 105000, kilometragem: 4231, anoVersao: 2021, anoModelo: 2021, dataInclusao: '2021-03-30' },
{ nome: 'Nivus', marca: 'Volkswagen', cor: 'Prata', valor: 100000, kilometragem: 5232, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-02-05' },
{ nome: 'Argo', marca: 'Fiat', cor: 'Vermelho', valor: 61000, kilometragem: 5213, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-01-05' },
{ nome: 'Argo', marca: 'Fiat', cor: 'Preto', valor: 55000, kilometragem: 7263, anoVersao: 2021, anoModelo: 2021, dataInclusao: '2021-03-05' },
{ nome: 'Argo', marca: 'Fiat', cor: 'Prata', valor: 58000, kilometragem: 9813, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-05-05' },
{ nome: 'Toro', marca: 'Fiat', cor: 'Branco', valor: 90000, kilometragem: 8293, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-02-05' },
{ nome: 'Toro', marca: 'Fiat', cor: 'Branco', valor: 87000, kilometragem: 13942, anoVersao: 2019, anoModelo: 2020, dataInclusao: '2021-03-05' },
{ nome: 'Kwid', marca: 'Renault', cor: 'Preto', valor: 40000, kilometragem: 8723, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-03-05' },
{ nome: 'Kwid', marca: 'Renault', cor: 'Marrom', valor: 41000, kilometragem: 9283, anoVersao: 2021, anoModelo: 2021, dataInclusao: '2021-02-05' },
{ nome: 'Kwid', marca: 'Renault', cor: 'Preto', valor: 39000, kilometragem: 9018, anoVersao: 2020, anoModelo: 2021, dataInclusao: '2021-04-05' },
{ nome: '320i', marca: 'BMW', cor: 'Branco', valor: 170000, kilometragem: 3500, anoVersao: 2021, anoModelo: 2021, dataInclusao: '2021-02-05' },
{ nome: '320i f30', marca: 'BMW', cor: 'Preto', valor: 90000, kilometragem: 39000, anoVersao: 2018, anoModelo: 2018, dataInclusao: '2021-05-05' },
{ nome: '320i', marca: 'BMW', cor: 'Prata', valor: 120000, kilometragem: 28000, anoVersao: 2018, anoModelo: 2019, dataInclusao: '2021-05-05' }

]);

db.carros.find();

// Exercício 1) Retorne todos os carros.

db.carros.find();

// Exercício 2) $eq -> equals

db.carros.find({ marca: 'Chevrolet' });
db.carros.find({ marca: { $eq: 'Chevrolet' } });

// Exercício 3) $eq, $gte, $gt, $lte, $lt

db.carros.find({ valor: { $lt: 45000 } });

// Exercício 4)

db.carros.find({ valor: { $gte: 50000 } });

// Exercício 5)

db.carros.find({ valor: { $eq: 40000 } });

// Exercício 6) $and, $or

db.carros.find({ $and: [{ valor: { $gte: 60000 } }, { valor: { $lte: 100000 } }] });

// Exercício 7) 

db.carros.find({ $or: [{ cor: 'Prata' }, { cor: 'Preto' }] });
db.carros.find({ cor: { $in: ['Prata', 'Preto', 'Azul'] } });

// Exercício 8)

db.carros.find({ $and: [{ kilometragem: { $gte: 5000 } }, { kilometragem: { $lte: 10000 } }] });

// Exercício 9)

db.carros.find({ $and: [
    { kilometragem: { $gte: 1000 }},
    { kilometragem: { $lte: 5000 }},
    { valor: { $gte: 35000 } },
    { valor: { $lte: 75000 } }]
    });
    
// Exercício 10)

db.carros.insertOne(
    { nome: 'Prisma', marca: 'Chevrolet', cor: 'Prata', preco: 55000, kilometragem: 9000, anoVersao: 2019, anoModelo: 2020, dataInclusao: '2021-05-05' }
    );
    
db.carros.find({ _id: ObjectId("616dff709ea0a0f3ae787b07") });

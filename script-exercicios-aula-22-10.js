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

// Exercício 1)
db.carros.find({
        $and: [
            { kilometragem: { $gte: 9500 } },
            { kilometragem: { $lte: 18000 } }
        ]
    });
    
db.carros.aggregate([
        {
            $match: {
                $and: [
                    { kilometragem: { $gte: 9500 } },
                    { kilometragem: { $lte: 18000 } }
                ]
            }
        }
    ]);    

// Exercício 2)

db.carros.find().sort({ nome: 1 });

db.carros.aggregate([
    {
        $sort: {
            nome: 1
        }
    }
]);
    
// Exercício 3)
    
db.carros.find({
    $and: [
        { valor: { $gte: 48000 } },
        { valor: { $lte: 66000 } }
    ]
}).sort({ valor: 1 });

db.carros.aggregate([
    // Stage 1
    {
        $match: {
            $and: [
                { valor: { $gte: 48000 } },
                { valor: { $lte: 66000 } }
            ]
        }
    },
    {
        $sort: {
            valor: 1
        }
    }
]);
    
// Exercício 4)
    
db.carros.find({
    $and: [
        { marca: 'Chevrolet' },
        { valor: { $gte: 15000 } },
        { valor: { $lte: 45000 } }
    ]
}).sort({ nome: -1 });

db.carros.aggregate([
    // Stage 1
    {
        $match: {
            $and: [
                { marca: 'Chevrolet' },
                { valor: { $gte: 15000 } },
                { valor: { $lte: 45000 } }
            ]
        }
    },
    {
        $sort: {
            nome: -1
        }
    }
]);

// Exercício 5)
    
db.carros.find({ marca: 'Renault' }).sort({ valor: 1 });

db.carros.aggregate([
    {
        $match: {
            marca: 'Renault'
        }
    },
    {
        $sort: {
            valor: 1
        }
    }
]);
    
// Exercício 6)
    
db.carros.find({ cor: 'Preto' }).sort({ nome: 1 });

db.carros.aggregate([
    {
        $match: {
            cor: 'Preto'
        }
    },
    {
        $sort: {
            nome: 1
        }
    }
]);
    
// Exercício 7)
    
// Forma 1
    
db.carros.aggregate([
    {
        $match: {
            marca: 'Renault'
        }
    },
    {
        $group: {
            _id: 1,
            total: {
                $sum: '$valor'
            }
        }
    }
]);

// Forma 2
db.carros.aggregate([
    {
        $match: {
            marca: 'Renault'
        }
    },
    {
        $group: {
            _id: '$marca',
            total: {
                $sum: '$valor'
            }
        }
    }
]);
    
// Exercício 8)
    
db.carros.aggregate([
    {
        $match: {
            marca: 'Chevrolet'
        }
    },
    {
        $group: {
            _id: 1,
            media: {
                $avg: '$valor'
            }
        }
    }
]);
    
db.carros.aggregate([
    {
        $match: {
            marca: 'Chevrolet'
        }
    },
    {
        $group: {
            _id: '$marca',
            media: {
                $avg: '$valor'
            }
        }
    }
]);
    
// Exercício 9)
    
db.carros.find({
    marca: 'Chevrolet'
}).count();

db.carros.aggregate([
    {
        $match: {
            marca: 'Chevrolet'
        }
    },
    {
        $group: {
            _id: '$marca',
            count: {
                $sum: 1
            }
        }
    }
]);
    
// Exercício 10)
db.carros.find();
db.carros.distinct('nome');

db.carros.aggregate([
    {
        $project: {
            _id: 0,
            nome: 1,
            marca: 1
        }
    }
]);
    
// Exercício 11)
    
db.carros.aggregate([
    {
        $group: {
            _id: '$marca',
            total: {
                $sum: '$valor'
            }
        }
    }
]);
    
// Exercício 12)
    
    
db.carros.aggregate([
    {
        $group: {
            _id: '$marca',
            media: {
                $avg: '$valor'
            }
        }
    }
]);
    
// Exercício 13)
    
db.carros.aggregate([
    {
        $group: {
            _id: '$marca',
            total: {
                $sum: '$valor'
            },
            media: {
                $avg: '$valor'
            },
            qtd: {
               $sum: 1 
            }
        }
    }
]);
    
// Exercício 14)
    
db.carros.aggregate([
   {
        $group: {
            _id: '$marca',
            menorValor: {
                $min: '$valor'
            }
        }
   }
]);
   
// Exerício 15)
   
db.carros.aggregate([
   {
        $group: {
            _id: '$marca',
            menorValor: {
                $min: '$valor'
            },
            maiorValor: {
                $max: '$valor'
            }
        }
   }
]);
   
// Exercício 16)
   
db.carros.aggregate([
   {
        $group: {
            _id: { nome: '$nome', marca: '$marca' },
            menorValor: {
                $min: '$valor'
            }
        }
   }
]);


// Exercício 17
   
db.carros.aggregate([
    { 
        $group: {
            _id: '$nome',
            total: {
                $sum: '$valor'
            }
        }
    },
    {
        $sort: {
           nome: 1 
        }
    }
]);

db.carros.find();

db.carros.insertOne({
    "nome" : "Prisma",
    "marca" : "Chevrolet",
    "cor" : "Prata",
    "valor" : 55000,
    "kilometragem" : 9000,
    "anoVersao" : 2019,
    "anoModelo" : 2020,
    "dataInclusao" : "2021-04-13"
    });

// Exercício 11)
db.carros.updateOne({ _id: ObjectId("6170985224294d7c7388f940") }, { $set: { valor: 60000 } });


db.carros.findOne({ _id: ObjectId("6170985224294d7c7388f940") });

// Exercício 12)
db.carros.deleteOne({ _id: ObjectId("6170985224294d7c7388f940") });

// Exercício 13)
db.carros.count();
db.carros.find().count();

// Exercício 14)

db.carros.find({ marca: 'Volkswagen' }).count();
db.carros.count({ marca: 'Volkswagen' });
db.carros.find({ marca: 'Volkswagen' });

// SELECT * FROM CARROS WHERE VALOR < 100000 AND VALOR > 50 AND MARCA = 'Volkswagen';
db.carros.find({
    $and: [
        { valor: { $lt: 100000 } },
        { valor: { $gt: 50 } },
        { marca: { $eq: 'Volkswagen' } }
    ]
});
// SELECT * FROM CARROS WHERE MARCA = 'Fiat' OR MARCA = 'Chevrolet' OR VALOR > 65000;
db.carros.find({
     $or: [
        { marca: 'Fiat' },
        { marca: 'Chevrolet' },
        { valor: { $gt: 65000 } }
    ]
});


// Para busca parecida com "LIKE" você utiliza instruções regex.
db.carros.find({ marca: /^C/ });
db.carros.find({ marca: /t$/ });
db.carros.find({ marca: /a/ });


db.carros.aggregate(
    [
      {
        $project: {
          nome: { $toUpper: "$nome" },
          marca: 1
        }
       },
       {
         $match: {
           nome: /ONIX/g
         }
       }
    ]
);

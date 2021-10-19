// $eq, $gte, $gt, $lt, $lte, $in, $exists, $ne(not empty)
db.carros.find()

db.carros.find({ nome: { $in: ['Onix', 'Cruze', 'Jetta', 'Polo'] } });

db.carros.find({ _id: { $in: [ObjectId("616df6989ea0a0f3ae787af1"), ObjectId("616df6989ea0a0f3ae787af6"), ObjectId("616df6989ea0a0f3ae787af7")] } });
db.carros.findOne({ _id: ObjectId("616df6989ea0a0f3ae787af1") });
db.carros.findOne({ nome: 'Onix' });


db.carros.insertOne(
    { nome: 'Prisma', marca: 'Chevrolet', cor: 'Prata', preco: 55000, kilometragem: 9000, anoVersao: 2019, anoModelo: 2020, dataInclusao: '2021-05-05', dataExclusao: '2021-10-18' }
    );

db.carros.find({ dataExclusao: { $exists: false } })

db.carros.find({ dataExclusao: { $ne: null } })


// 1 crescente, -1 decrescente
db.carros.find().sort({ nome: -1 });
db.carros.find().sort({ valor: -1 });

db.carros.find({ marca: 'Chevrolet' }).count();
db.carros.count({ marca: 'Chevrolet' });

// update e updateOne -> altera somente o primeiro registro
// updateMany altera vários registros
db.carros.update({ preco: { $exists: true } }, { $set: { preco: null } });
db.carros.updateMany({ preco: { $exists: true } }, { $set: { preco: null } });

db.carros.updateMany({ kilometragem: { $gte: 30000 } }, { $set: { semiNovo: false } });

db.carros.find({ preco: { $exists: true } })

db.carros.find({ kilometragem: { $gte: 30000 } });

db.carros.deleteOne({ preco: { $exists: true } });
db.carros.deleteMany({ preco: { $exists: true } });

db.carros.deleteOne({ _id: ObjectId("616df6989ea0a0f3ae787b03") });

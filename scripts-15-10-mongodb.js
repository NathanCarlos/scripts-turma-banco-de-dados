db.createCollection('alunos');

db.alunos.insert(
    {
        nome: "Nathan",
        idade: 21,
        mensalidade: 600,
        maiorIdade: true
    }
);
    
db.alunos.insertMany(
  [
    {
        nome: "Felipe",
        idade: 23,
        mensalidade: 300,
        maiorIdade: "true"
    },
    {
        nome: "Gabriel",
        idade: 24,
        mensalidade: 300,
        maiorIdade: true,
        dataCriacaoRegistro: "2021-10-15",
        dataAtualizacaoRegistro: "2021-10-15"
    }
  ]
);
    
db.alunos.insert(
    {
        nome: "Felipe",
        idade: 23,
        mensalidade: 300,
        maiorIdade: true,
        curso: {
             nome: "Pi Web Full Stack",
             periodo: "Noturno"
        }
    }
);
    
db.alunos.updateMany({}, { $set: { dataCriacao: "2021-10-15" } })

db.alunos.insert(
    {
        nome: "Arthur",
        idade: 24,
        mensalidade: 300,
        maiorIdade: true,
        dataCriacaoRegistro: "2021-10-15",
        dataAtualizacaoRegistro: "2021-10-15"
    });
// Idade = 21;
db.alunos.find({ idade: 21 });
// greater than($gt), greater than equals ($gte), less then($lt), less then equals($lte), equals to($eq)
db.alunos.find({ idade: { $gt: 23 } });
db.alunos.find({ mensalidade: { $gte: 300 } });
db.alunos.find({ mensalidade: { $lt: 350 } });
db.alunos.find({ mensalidade: { $lte: 600 } });
// $and, $or
// select * from alunos where mensalidade > 300 and mensalidade <= 600
db.alunos.find({ $and: [{ mensalidade: { $gt: 300 } }, { mensalidade: { $lte: 600 }}] });
db.alunos.find({ $or: [{ idade: { $eq: 23 } }, { idade: 24 }] });
db.alunos.find();

//db.getCollection('alunos').find({});

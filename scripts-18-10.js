// Criar novo db
use nome_db

use lets_code_class

db.createCollection('teste');

db.alunos.find({});

// Busca com $in
db.alunos.find({
        _id: { $in: [ObjectId('60ac3019235a45a366e3ddf4'), ObjectId('60ac3019235a45a366e3ddf5')] }
});

// -1 decrescente, 1 crescente
db.alunos.find({}).sort({ mensalidade: 1 });

// Busca com $and, $or, $gt, $gte, $lt, $lte, $eq
db.alunos.find({ mensalidade: { $gte: 350 } });

// Count do total de alunos
db.alunos.count();

// Count com total de alunos com where
db.alunos.count({ mensalidade: { $gte: 350 } });

// Remove itens
db.alunos.remove({ _id: ObjectId('60ac2fe3235a45a366e3dde4') });

// Atualiza
db.alunos.updateMany({ _id: ObjectId('60ac2fe3235a45a366e3dde4') }, { $set: { mensalidade: 400 } });

// Distinct alunos
db.alunos.distinct("nome");
db.alunos.distinct("curso");

// Renomear collection
db.alunos.renameCollection('alunos1');


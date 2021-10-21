db.alunos.find();

db.alunos.find({ curso: 'PI Web FullStack' }).count();
db.alunos.find();

db.alunos.updateMany({}, { $set: { turma: '#693' } });

db.alunos.aggregate(
    [
        // Stages
        // Stage 1
        {
            $match: {
                $and: [
                    { mensalidade: { $gte: 200 } },
                    { mensalidade: { $lte: 400 } }
                ]
            }
        }
    ]
);


// Count, Avg, Sum, Min, Max
// $sum, $avg, $min, $max -> $sum
// Quantidade de alunos ou seja, count de todos os alunos da collection
db.alunos.aggregate(
    // Stages
    [
        // Stage 1
        {
            $match: {}
        },
        // Stage 2
        {
            $group: {
                _id: 1,
                qtd: { $sum: 1 }
            }
        }
    ]
);
        
db.alunos.aggregate(
    // Stages
    [
        // Stage 1
        {
            $match: {}
        },
        // Stage 2
        {
            $group: {
                _id: '$curso',
                qtd: { $sum: 1 }
            }
        }
    ]
);
        
// Sum(Total) da mensalidade
// _id -> 1 quer dizer que é para somar todos registros da collection
db.alunos.aggregate(
    // Stages
    [
        // Stage 1
        {
            $match: {}
        },
        // Stage 2
        {
            $group: {
                _id: 1,
                total: { $sum: '$mensalidade' }
            }
        }
    ]
);
// SELECT COUNT(*) as QTD FROM ALUNOS GROUP BY 1;
        
db.alunos.aggregate(
    // Stages
    [
        // Stage 1
        {
            $match: {}
        },
        // Stage 2
        {
            $group: {
                _id: '$curso',
                total: { $sum: '$mensalidade' }
            }
        }
    ]
);
        
// SELECT SUM(MENSALIDADE) FROM ALUNOS GROUP BY CURSO;
// SELECT COUNT(*) FROM ALUNOS GROUP BY CURSO, TURMA;
db.alunos.aggregate(
    // Stages
    [
        // Stage 1
        {
            $match: {}
        },
        // Stage 2
        {
            $group: {
                _id: { curso: '$curso', turma: '$turma' },
                qtd: { $sum: 1 }
            }
        }
    ]
);
db.alunos.find().sort({ mensalidade: 1 });
db.alunos.aggregate(
    // Stages
    [
        {
            $sort: {
                mensalidade: 1
            }
        },
        {
            $limit: 10
        },
        {
            $match: {
                turma: '#693'
            } 
        },
        {
            $group: {
                _id: '$curso',
                total: { $sum: '$mensalidade' }
            }
        },
        {
            $match: {
                total: { $gte: 1500 }
            } 
        }
    ]
);
        
// Count de todos os itens
db.alunos.aggregate(
    // Stages
    [
        {
            $group: {
                _id: 1,
                qtd: { $sum: 1 }
            }
        }
    ]
);

// Sum de todos os itens
db.alunos.aggregate(
    // Stages
    [
        {
            $group: {
                _id: 1,
                total: { $sum: '$mensalidade' }
            }
        }
    ]
);
        
// Avg(Média) de todos os itens
db.alunos.aggregate(
    // Stages
    [
        {
            $group: {
                _id: 1,
                media: { $avg: '$mensalidade' }
            }
        }
    ]
);


// Min(menor valor) de todos os itens
db.alunos.aggregate(
    // Stages
    [
        {
            $group: {
                _id: 1,
                menorValor: { $min: '$mensalidade' }
            }
        }
    ]
);

// Max(maior valor) de todos os itens
db.alunos.aggregate(
    // Stages
    [
        {
            $group: {
                _id: 1,
                menorValor: { $max: '$mensalidade' }
            }
        }
    ]
);

// Soma de mensalidade de alunos por curso.
db.alunos.aggregate(
    [
        {
            $group: {
                _id: '$curso',
                total: { $sum: '$mensalidade' }
            }
        }
    ]
);
        
// Média de mensalidade de alunos por curso.
db.alunos.aggregate(
    [
        {
            $group: {
                _id: '$curso',
                media: { $avg: '$mensalidade' }
            }
        }
    ]
);
   
// Menor valor de mensalidade de alunos por curso.
db.alunos.aggregate(
    [
        {
            $group: {
                _id: '$curso',
                menorValor: { $min: '$mensalidade' }
            }
        }
    ]
);
        
// Maior valor de mensalidade de alunos por curso.
db.alunos.aggregate(
    [
        {
            $group: {
                _id: '$curso',
                maiorValor: { $max: '$mensalidade' }
            }
        }
    ]
);
        
// SELECT COUNT(*), SUM(MENSALIDADE), MIN(MENSALIDADE), MAX(MENSALIDADE), AVG(MENSALIDADE) FROM ALUNOS GROUP BY CURSO;
db.alunos.aggregate(
    [
        {
            $group: {
                _id: '$curso',
                maiorValor: { $max: '$mensalidade' },
                menorValor: { $min: '$mensalidade' },
                total: { $sum: '$mensalidade' },
                media: { $avg: '$mensalidade' },
                qtd: { $sum: 1 }
            }
        }
    ]
);
        
db.alunos.find({ curso: { $in: ["PI Data Science", "PI Web FullStack"] } });

db.alunos.find();
db.alunos.distinct('curso');

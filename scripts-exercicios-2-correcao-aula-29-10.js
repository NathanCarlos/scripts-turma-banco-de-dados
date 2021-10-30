db.tarefas.find()

// Exercício 1)
db.tarefas.find({ descricao: /relatório/ });
db.tarefas.aggregate([
    {
        $match: {
            descricao: /relatório/
        }
    }

]);
    
// Exercício 2)
    
db.tarefas.aggregate([
    {
        $lookup: {
            from: 'prioridade_tarefas',
            localField: 'prioridade',
            foreignField: '_id',
            as: 'prioridade'
        }
    },
    {
        $unwind: {
            path: '$prioridade'
        }
    },
    {
        $addFields: {
            custoTotal: {
                $multiply: ['$custo', '$prioridade.fatorConversao']
            }
        }
    },
    {
        $group: {
            _id: 1,
            custoTotal: {
                $sum: '$custoTotal'
            }
        }
    }
]);
    
// Exercício 3)

db.tarefas.aggregate([
    {
        $lookup: {
            from: 'prioridade_tarefas',
            localField: 'prioridade',
            foreignField: '_id',
            as: 'prioridade'
        }
    },
    {
        $unwind: {
            path: '$prioridade'
        }
    },
    {
        $addFields: {
            custoTotal: {
                $multiply: ['$custo', '$prioridade.fatorConversao']
            },
            recompensaTotal: {
                $multiply: ['$recompensa', '$prioridade.fatorConversao']
            }
        }
    },
    {
        $group: {
            _id: 1,
            custoTotal: {
                $sum: '$custoTotal'
            },
            recompensaTotal: {
                $sum: '$recompensaTotal' 
            }
        }
    }
]);

// Exercício 4)

db.tarefas.aggregate([
    {
        $lookup: {
            from: 'prioridade_tarefas',
            localField: 'prioridade',
            foreignField: '_id',
            as: 'prioridade'
        }
    },
    {
        $unwind: {
            path: '$prioridade'
        }
    },
    {
        $addFields: {
            custoTotal: {
                $multiply: ['$custo', '$prioridade.fatorConversao']
            },
            recompensaTotal: {
                $multiply: ['$recompensa', '$prioridade.fatorConversao']
            }
        }
    },
    {
        $addFields: {
            lucroTotal: {
                $subtract: ['$recompensaTotal', '$custoTotal']
            }
        }
    },
    {
        $group: {
            _id: 1,
            custoTotal: {
                $sum: '$custoTotal'
            },
            recompensaTotal: {
                $sum: '$recompensaTotal' 
            },
            lucroTotal: {
                $sum: '$lucroTotal'
            }
        }
    }
]);

// Exercício 5)

db.tarefas.aggregate([
    {
        $match: {
            descricao: /Desenvolver/
        }
    },
    {
        $lookup: {
            from: 'prioridade_tarefas',
            localField: 'prioridade',
            foreignField: '_id',
            as: 'prioridade'
        }
    },
    {
        $unwind: {
            path: '$prioridade'
        }
    },
    {
        $addFields: {
            custoTotal: {
                $multiply: ['$custo', '$prioridade.fatorConversao']
            },
            recompensaTotal: {
                $multiply: ['$recompensa', '$prioridade.fatorConversao']
            }
        }
    },
    {
        $addFields: {
            lucroTotal: {
                $subtract: ['$recompensaTotal', '$custoTotal']
            }
        }
    },
    {
        $group: {
            _id: 1,
            custoTotal: {
                $sum: '$custoTotal'
            },
            recompensaTotal: {
                $sum: '$recompensaTotal' 
            },
            lucroTotal: {
                $sum: '$lucroTotal'
            }
        }
    }
]);

// Exercício 6)
    
db.tarefas.aggregate([
    {
        $lookup: {
            from: 'prioridade_tarefas',
            localField: 'prioridade',
            foreignField: '_id',
            as: 'prioridade'
        }
    },
    {
        $unwind: {
            path: '$prioridade'
        }
    },
    {
        $addFields: {
            custoTotal: {
                $multiply: ['$custo', '$prioridade.fatorConversao']
            },
            recompensaTotal: {
                $multiply: ['$recompensa', '$prioridade.fatorConversao']
            }
        }
    },
    {
        $addFields: {
            lucroTotal: {
                $subtract: ['$recompensaTotal', '$custoTotal']
            }
        }
    },
    {
        $group: {
           _id: 1,
           mediaCusto: {
               $avg: '$custoTotal'
           },
           mediaRecompensa: {
               $avg: '$recompensaTotal'
           },
           mediaLucro: {
               $avg: '$lucroTotal'
           }
        }
    }
]);

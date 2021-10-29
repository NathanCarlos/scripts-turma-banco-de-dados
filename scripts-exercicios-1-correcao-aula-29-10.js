db.tarefas.find()

// Exercício 1)

db.tarefas.aggregate([
    {
        $addFields: {
            lucroBasico: {
                $subtract: ['$recompensa', '$custo']
            }
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
            lucroBasico: {
                $subtract: ['$recompensa', '$custo']
            },
            recompensaTotal: {
               $multiply: ['$recompensa', '$prioridade.fatorConversao'] 
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
            lucroBasico: {
                $subtract: ['$recompensa', '$custo']
            },
            recompensaTotal: {
               $multiply: ['$recompensa', '$prioridade.fatorConversao'] 
            },
            custoTotal: {
                $multiply: ['$custo', '$prioridade.fatorConversao']
            }
        }
    }
]);

// Exercício 4
    
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
            lucroBasico: {
                $subtract: ['$recompensa', '$custo']
            },
            recompensaTotal: {
               $multiply: ['$recompensa', '$prioridade.fatorConversao'] 
            },
            custoTotal: {
                $multiply: ['$custo', '$prioridade.fatorConversao']
            }
        }
    },
    {
        $addFields: {
            lucroTotal: {
                $subtract: ['$recompensaTotal', '$custoTotal']
            }
        }
    }
]);
